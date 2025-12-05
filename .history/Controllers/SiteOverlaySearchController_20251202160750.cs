using System;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Globalization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Web.Common;
using Umbraco.Extensions;

namespace Kob.Controllers
{
    [ApiController]
    [Route("umbraco/api/sortsearch")]
#pragma warning disable CS0618
    public class SiteOverlaySearchController : UmbracoApiController
#pragma warning restore CS0618
    {
        private readonly ILogger<SiteOverlaySearchController> _logger;
        private readonly IUmbracoContextAccessor _ctxAccessor;
        private readonly UmbracoHelper _umbraco;

        private static readonly Guid NewsContainerGuid = Guid.Parse("6fa3efff-25e0-4e30-95fe-980a5fe302d9");
        private const string AliasNews = "tidindi";

        private static readonly HashSet<string> AllowedOtherAliases =
            new(StringComparer.OrdinalIgnoreCase)
            {
                "tidindi", "subpage", "skiljivegleiIng", "bolkurSkiljivegleiding", "undirbolkur"
            };

        public SiteOverlaySearchController(
            ILogger<SiteOverlaySearchController> logger,
            IUmbracoContextAccessor ctxAccessor,
            UmbracoHelper umbraco)
        {
            _logger = logger;
            _ctxAccessor = ctxAccessor;
            _umbraco = umbraco;
        }

        /// <summary>
        /// GET umbraco/api/sortsearch/site?term=xxx
        /// Returns:
        /// {
        ///   news:   { total, items:[{title,url}] },
        ///   guides: { total, items:[{title,url}] },
        ///   topics: { total, items:[{title,url}] }
        /// }
        /// </summary>
        [HttpGet("site")]
        public IActionResult Site([FromQuery] string term, [FromQuery] int takePerGroup = 3)
        {
            term = (term ?? string.Empty).Trim();
            if (string.IsNullOrWhiteSpace(term) || term.Length < 2)
            {
                return Ok(new
                {
                    news = new { total = 0, items = Array.Empty<object>() },
                    guides = new { total = 0, items = Array.Empty<object>() },
                    topics = new { total = 0, items = Array.Empty<object>() }
                });
            }

            takePerGroup = Math.Clamp(takePerGroup, 1, 20);

            var tokens = Tokenize(term)
                .Select(Normalize)
                .Where(t => t.Length >= 2)
                .ToList();

            if (tokens.Count == 0)
            {
                return Ok(new
                {
                    news = new { total = 0, items = Array.Empty<object>() },
                    guides = new { total = 0, items = Array.Empty<object>() },
                    topics = new { total = 0, items = Array.Empty<object>() }
                });
            }

            var (newsTotal, newsAll) = SearchNews(tokens);
            var (guidesTotal, guidesAll) = SearchGuides(tokens);

            var newsIds = newsAll.Select(n => n.Id).ToHashSet();
            var (othersTotal, othersAll) = SearchOthers(tokens, newsIds);

            var news = new
            {
                total = newsTotal,
                items = newsAll.Take(takePerGroup).Select(x => new { title = x.Title, url = x.Url })
            };

            var guides = new
            {
                total = guidesTotal,
                items = guidesAll.Take(takePerGroup).Select(x => new { title = x.Title, url = x.Url })
            };

            var topics = new
            {
                total = othersTotal,
                items = othersAll.Take(takePerGroup).Select(x => new { title = x.Title, url = x.Url })
            };

            return Ok(new { news, guides, topics });
        }

        // --------- Buckets ---------

        private (int total, List<SearchItem> items) SearchNews(List<string> normTokens)
        {
            var container = _umbraco.Content(NewsContainerGuid);
            if (container == null) return (0, new List<SearchItem>());

            var fo = new CultureInfo("fo-FO");

            var items = container
                .DescendantsOfType(AliasNews)
                .Where(p => p.IsPublished())
                .Select(p =>
                {
                    var title = (p.Value<string>("yvirskrift", culture: fo.Name) ?? p.Name()) ?? string.Empty;
                    var ingres = p.Value<string>("inngangstekstur", culture: fo.Name) ?? string.Empty;

                    // String body if present
                    var bodyText = p.Value<string>("tekstur", culture: fo.Name) ?? string.Empty;

                    // All text from Block List property "modul"
                    var blockText = GetBlockListText(p, "modul");

                    return new
                    {
                        Node = p,
                        Title = title,
                        Ingres = ingres,
                        BodyText = bodyText,
                        BlockText = blockText
                    };
                })
                .Where(x =>
                    MatchesAllTokens(
                        normTokens,
                        Normalize(x.Title),
                        Normalize(x.Ingres),
                        Normalize(x.BodyText),
                        Normalize(x.BlockText)
                    )
                )
                .Select(x => new SearchItem
                {
                    Id = x.Node.Id,
                    Title = x.Title,
                    Url = x.Node.Url()
                })
                .ToList();

            return (items.Count, items);
        }

        private (int total, List<SearchItem> items) SearchGuides(List<string> normTokens)
        {
            var all = _umbraco.ContentAtRoot()
                .SelectMany(r => r.DescendantsOrSelfOfType("luturSkiljing"))
                .Where(c => c.IsPublished())
                .Select(c => new
                {
                    Node = c,
                    Name = c.Name() ?? string.Empty,
                    Leitiord = c.Value<string>("leitiord") ?? string.Empty,
                    Negativ = c.Value<string>("negativLeitiord") ?? string.Empty
                })
                .ToList();

            var list = new List<SearchItem>();

            foreach (var x in all)
            {
                var nameNorm = Normalize(x.Name);
                var leitiNorm = Normalize(x.Leitiord);
                var negNorm = Normalize(x.Negativ);

                if (normTokens.Any(t => ContainsSubstring(negNorm, t)))
                    continue;

                if (!normTokens.All(t =>
                        ContainsSubstring(nameNorm, t) ||
                        ContainsSubstring(leitiNorm, t)))
                    continue;

                list.Add(new SearchItem
                {
                    Id = x.Node.Id,
                    Title = x.Name,
                    Url = x.Node.Url()
                });
            }

            return (list.Count, list);
        }

        // OTHER PAGES: only alias tidindi/subpage/...; hideFromSearch != true; exclude already-found news
        private (int total, List<SearchItem> items) SearchOthers(List<string> normTokens, HashSet<int> newsIds)
        {
            var fo = new CultureInfo("fo-FO");

            var all = _umbraco.ContentAtRoot()
                .SelectMany(r => r.DescendantsOrSelf())
                .Where(c => c.IsPublished())
                .Where(c => AllowedOtherAliases.Contains(c.ContentType.Alias))
                .Where(c => !newsIds.Contains(c.Id))
                .Where(c => !(c.Value<bool?>("hideFromSearch") ?? false))
                .Select(c =>
                {
                    var title = c.Value<string>("yvirskrift", culture: fo.Name) ?? c.Name() ?? string.Empty;
                    var ingres = c.Value<string>("inngangstekstur", culture: fo.Name) ?? string.Empty;

                    // "tekstur" if still a plain richtext/string
                    var body = c.Value<string>("tekstur", culture: fo.Name) ?? string.Empty;

                    // All Block List text from property "modul"
                    var blockText = GetBlockListText(c, "modul");

                    return new
                    {
                        Node = c,
                        Title = title,
                        Ingres = ingres,
                        Body = body,
                        BlockText = blockText
                    };
                })
                .ToList();

            var ranked = new List<(SearchItem item, int score)>();

            foreach (var x in all)
            {
                var hayRaw = $"{x.Title} {x.Ingres} {x.Body} {x.BlockText}";
                var hay = Normalize(hayRaw);

                if (!normTokens.All(t => ContainsSubstring(hay, t)))
                    continue;

                int score = normTokens.Sum(t =>
                    hay.IndexOf(t, StringComparison.Ordinal) switch
                    {
                        -1 => 0,
                        int idx when idx < 30 => 3,
                        int idx when idx < 120 => 2,
                        _ => 1
                    });

                ranked.Add((
                    new SearchItem
                    {
                        Id = x.Node.Id,
                        Title = x.Title,
                        Url = x.Node.Url()
                    },
                    score
                ));
            }

            var ordered = ranked
                .OrderByDescending(x => x.score)
                .ThenBy(x => x.item.Title)
                .Select(x => x.item)
                .ToList();

            return (ordered.Count, ordered);
        }

        // --------- Block List text extraction ---------

        /// <summary>
        /// Extracts all textual content from the given Block List properties on a node.
        /// Here we only use property alias "modul".
        /// </summary>
        private static string GetBlockListText(IPublishedContent node, params string[] blockPropAliases)
        {
            if (node == null || blockPropAliases == null || blockPropAliases.Length == 0)
                return string.Empty;

            var sb = new StringBuilder();

            foreach (var alias in blockPropAliases)
            {
                if (string.IsNullOrWhiteSpace(alias))
                    continue;

                BlockListModel? blocks = null;

                try
                {
                    blocks = node.Value<BlockListModel>(alias);
                }
                catch
                {
                    // Property isn't a Block List or doesn't exist – ignore
                }

                if (blocks == null) continue;

                foreach (var item in blocks)
                {
                    var content = item.Content;
                    if (content == null) continue;

                    AppendElementText(content, sb);
                }
            }

            return sb.ToString();
        }

        /// <summary>
        /// Appends text from all string / HTML properties on a block element.
        /// </summary>
        private static void AppendElementText(IPublishedElement element, StringBuilder sb)
        {
            foreach (var prop in element.Properties)
            {
                object? val = null;
                try
                {
                    val = element.Value(prop.Alias);
                }
                catch
                {
                    // Some exotic property types may throw; just skip
                    continue;
                }

                if (val == null) continue;

                switch (val)
                {
                    case string s when !string.IsNullOrWhiteSpace(s):
                        sb.Append(' ').Append(s);
                        break;

                    case IHtmlEncodedString html:
                        var htmlString = html?.ToString() ?? string.Empty;
                        if (!string.IsNullOrWhiteSpace(htmlString))
                            sb.Append(' ').Append(htmlString);
                        break;

                    case IEnumerable<string> strings:
                        foreach (var s in strings)
                        {
                            if (!string.IsNullOrWhiteSpace(s))
                                sb.Append(' ').Append(s);
                        }
                        break;

                    default:
                        break;
                }
            }
        }

        // --------- Helpers ---------

        private static IEnumerable<string> Tokenize(string input)
            => Regex.Split(input, @"[\s\p{P}\p{Z}]+")
                .Where(s => !string.IsNullOrWhiteSpace(s));

        private static bool MatchesAllTokens(IEnumerable<string> tokens, params string[] normalizedHaystacks)
            => tokens.All(t => normalizedHaystacks.Any(h => ContainsSubstring(h, t)));

        private static bool ContainsSubstring(string sourceLower, string needleLower)
            => !string.IsNullOrEmpty(sourceLower)
               && !string.IsNullOrEmpty(needleLower)
               && sourceLower.Contains(needleLower);

        private static string Normalize(string s)
            => RemoveDiacriticsAndFaroese(s ?? string.Empty).ToLowerInvariant();

        private static string RemoveDiacriticsAndFaroese(string text)
        {
            if (string.IsNullOrEmpty(text)) return text;

            var norm = text.Normalize(NormalizationForm.FormD);
            var sb = new StringBuilder(norm.Length);

            foreach (var ch in norm)
            {
                var uc = CharUnicodeInfo.GetUnicodeCategory(ch);
                if (uc == UnicodeCategory.NonSpacingMark) continue;

                switch (ch)
                {
                    case 'ð':
                    case 'Ð':
                        sb.Append('d');
                        break;
                    case 'æ':
                    case 'Æ':
                        sb.Append("ae");
                        break;
                    case 'ø':
                    case 'Ø':
                        sb.Append('o');
                        break;
                    case 'á':
                    case 'Á':
                        sb.Append('a');
                        break;
                    case 'í':
                    case 'Í':
                        sb.Append('i');
                        break;
                    case 'ó':
                    case 'Ó':
                        sb.Append('o');
                        break;
                    case 'ú':
                    case 'Ú':
                        sb.Append('u');
                        break;
                    case 'ý':
                    case 'Ý':
                        sb.Append('y');
                        break;
                    default:
                        sb.Append(ch);
                        break;
                }
            }

            return sb.ToString().Normalize(NormalizationForm.FormC);
        }

        private sealed class SearchItem
        {
            public int Id { get; set; }
            public string Title { get; set; } = "";
            public string Url { get; set; } = "";
        }
    }
}

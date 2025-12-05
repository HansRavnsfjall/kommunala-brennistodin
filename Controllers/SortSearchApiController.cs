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
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Web.Common;
using Umbraco.Extensions;
using Examine;
using Examine.Search;
using Umbraco.Cms.Infrastructure.Examine;

namespace Kob.Controllers
{
    [ApiController]
    [Route("umbraco/api/sortsearch")]
#pragma warning disable CS0618 // UmbracoApiController is obsolete in v16 but OK; change before v17
    public class SortSearchApiController : UmbracoApiController
#pragma warning restore CS0618
    {
        private readonly ILogger<SortSearchApiController> _logger;
        private readonly IExamineManager _examine;
        private readonly IUmbracoContextAccessor _ctxAccessor;
        private readonly UmbracoHelper _umbracoHelper;

        public SortSearchApiController(
            ILogger<SortSearchApiController> logger,
            IExamineManager examine,
            IUmbracoContextAccessor ctxAccessor,
            UmbracoHelper umbracoHelper)
        {
            _logger = logger;
            _examine = examine;
            _ctxAccessor = ctxAccessor;
            _umbracoHelper = umbracoHelper;
        }

        [HttpGet("find")]
        public IActionResult Find([FromQuery] string term, [FromQuery] int take = 20)
        {
            term = (term ?? string.Empty).Trim();
            if (string.IsNullOrWhiteSpace(term) || term.Length < 2)
                return Ok(new { count = 0, results = Array.Empty<object>() });

            take = Math.Clamp(take, 1, 50);

            if (!_examine.TryGetIndex("ExternalIndex", out var index))
                return Ok(new { count = 0, results = Array.Empty<object>() });

            var searcher = index.Searcher;

            // Tokenize the search term
            var searchTokens = Tokenize(term)
                .Select(t => t.ToLowerInvariant())
                .Where(t => t.Length >= 2)
                .ToList();

            if (searchTokens.Count == 0)
                return Ok(new { count = 0, results = Array.Empty<object>() });

            // Create normalized versions for matching
            var normalizedTokens = searchTokens
                .Select(RemoveDiacriticsAndFaroese)
                .ToList();

            // Build a broad query to get candidates
            // We'll use suffix wildcards only (term*) and do substring matching in-memory
            var baseQuery = searcher.CreateQuery(IndexTypes.Content).NodeTypeAlias("luturSkiljing");
            
            // Get ALL luturSkiljing items (we'll filter in-memory for substring matching)
            var raw = baseQuery.Execute(QueryOptions.SkipTake(0, 10000));

            var results = new List<object>(take);

            foreach (var hit in raw)
            {
                if (!int.TryParse(hit.Id, out var id)) continue;
                var c = _umbracoHelper.Content(id);
                if (c == null || !c.IsPublished()) continue;

                var name = c.Name() ?? string.Empty;
                var leitiord = c.Value<string>("leitiord") ?? string.Empty;
                var negativ = c.Value<string>("negativLeitiord") ?? string.Empty;

                // Normalize all text for comparison
                var nameNorm = RemoveDiacriticsAndFaroese(name).ToLowerInvariant();
                var leitiordNorm = RemoveDiacriticsAndFaroese(leitiord).ToLowerInvariant();
                var negativNorm = RemoveDiacriticsAndFaroese(negativ).ToLowerInvariant();

                // Check negative keywords first
                if (normalizedTokens.Any(t => ContainsSubstring(negativNorm, t)))
                    continue;

                // Check if all search tokens are found (as substrings) in name or leitiord
                bool allTokensMatch = normalizedTokens.All(t =>
                    ContainsSubstring(nameNorm, t) || ContainsSubstring(leitiordNorm, t)
                );

                if (!allTokensMatch) continue;

                // Build the result object
                var heimaPick = c.Value<IPublishedContent>("myndatekinHeima");
                var endurPick = c.Value<IPublishedContent>("myndatekinEndurnytslan");

                var heimaIcon = BuildIcon(heimaPick, out var heimaText);
                var endurIcon = BuildIcon(endurPick, out var endurText);

                var lysing = c.Value<string>("lysing") ?? string.Empty;

                results.Add(new
                {
                    id = id,
                    name = name,
                    url = c.Url(),
                    lysing = lysing,
                    heimaIconUrl = heimaIcon,
                    heimaText = heimaText,
                    endurIconUrl = endurIcon,
                    endurText = endurText
                });

                if (results.Count >= take) break;
            }

            return Ok(new { count = results.Count, results });
        }

        // ===== Helpers =====

        private static IEnumerable<string> Tokenize(string input)
            => Regex.Split(input, @"[\s\p{P}\p{Z}]+").Where(s => !string.IsNullOrWhiteSpace(s));

        /// <summary>
        /// Check if 'source' contains 'needle' as a substring (case-insensitive, both normalized)
        /// </summary>
        private static bool ContainsSubstring(string sourceLower, string needleLower)
            => !string.IsNullOrEmpty(sourceLower) && 
               !string.IsNullOrEmpty(needleLower) && 
               sourceLower.Contains(needleLower);

        /// <summary>
        /// Remove diacritics and normalize Faroese characters to ASCII equivalents
        /// </summary>
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
                    case 'ð': case 'Ð': sb.Append('d'); break;
                    case 'æ': case 'Æ': sb.Append("ae"); break;
                    case 'ø': case 'Ø': sb.Append('o'); break;
                    case 'á': case 'Á': sb.Append('a'); break;
                    case 'í': case 'Í': sb.Append('i'); break;
                    case 'ó': case 'Ó': sb.Append('o'); break;
                    case 'ú': case 'Ú': sb.Append('u'); break;
                    case 'ý': case 'Ý': sb.Append('y'); break;
                    default: sb.Append(ch); break;
                }
            }
            
            return sb.ToString().Normalize(NormalizationForm.FormC);
        }

        private string? BuildIcon(IPublishedContent? picked, out string text)
        {
            text = string.Empty;
            if (picked == null) return null;

            text = picked.Name() ?? string.Empty;

            var media = picked.Value<MediaWithCrops>("ikon");
            if (media == null) return null;

            return media.GetCropUrl(width: 80, height: 80, quality: 85) ?? media.MediaUrl();
        }
    }
}
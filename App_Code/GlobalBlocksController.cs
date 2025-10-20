using System;
using System.Globalization;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Models.PublishedContent; // for Fallback
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Extensions;

namespace Kob.Api
{
    // Base URL: /umbraco/api/globalblocks
    [Route("umbraco/api/globalblocks")]
    public class GlobalBlocksController : UmbracoApiController
    {
        private readonly IUmbracoContextAccessor _ctx;
        public GlobalBlocksController(IUmbracoContextAccessor ctx) => _ctx = ctx;

        // ---------- Helpers ----------

        private IPublishedContent? FindContainer(IUmbracoContext umb, string blockListAlias, string? preferredDocTypeAlias = null)
        {
            // Try preferred doctype alias first (if provided)
            if (!string.IsNullOrWhiteSpace(preferredDocTypeAlias))
            {
                var byAlias = umb.Content
                    .GetAtRoot()
                    .SelectMany(r => r.DescendantsOrSelfOfType(preferredDocTypeAlias))
                    .FirstOrDefault(n => n.HasProperty(blockListAlias));
                if (byAlias != null) return byAlias;
            }

            // Try under current site's root (best for multi-site)
            var currentRoot = umb.PublishedRequest?.PublishedContent?.Root();
            if (currentRoot != null)
            {
                var culture = CultureInfo.CurrentUICulture?.Name;
                var underCurrent = currentRoot
                    .DescendantsOrSelf()
                    .FirstOrDefault(n =>
                        n.HasProperty(blockListAlias) &&
                        n.Value<BlockListModel>(blockListAlias, culture: culture, fallback: Fallback.ToLanguage)?.Any() == true);
                if (underCurrent != null) return underCurrent;
            }

            // Any root with a populated property
            foreach (var root in umb.Content.GetAtRoot() ?? Enumerable.Empty<IPublishedContent>())
            {
                var culture = CultureInfo.CurrentUICulture?.Name;
                var any = root.DescendantsOrSelf()
                    .FirstOrDefault(n =>
                        n.HasProperty(blockListAlias) &&
                        n.Value<BlockListModel>(blockListAlias, culture: culture, fallback: Fallback.ToLanguage)?.Any() == true);
                if (any != null) return any;
            }

            // Last resort: any node that at least has the property
            foreach (var root in umb.Content.GetAtRoot() ?? Enumerable.Empty<IPublishedContent>())
            {
                var any = root.DescendantsOrSelf().FirstOrDefault(n => n.HasProperty(blockListAlias));
                if (any != null) return any;
            }

            return null;
        }

        // ---------- Endpoints ----------

        // GET /umbraco/api/globalblocks/items?preferAlias=globalBlocksPage&blockAlias=modul
        // Returns: top-level JSON array of { text, name, value, icon?, description? }
        [HttpGet("items")]
        public IActionResult Items([FromQuery] string? preferAlias = null, [FromQuery] string blockAlias = "modul")
        {
            if (!_ctx.TryGetUmbracoContext(out var umb) || umb?.Content is null)
                return Ok(Array.Empty<object>());

            var container = FindContainer(umb, blockAlias, preferAlias);
            if (container is null)
                return Ok(Array.Empty<object>());

            var culture = CultureInfo.CurrentUICulture?.Name;
            var blocks = container.Value<BlockListModel>(blockAlias, culture: culture, fallback: Fallback.ToLanguage);
            if (blocks is null || blocks.Count == 0)
                return Ok(Array.Empty<object>());

            var items = blocks.Select((b, i) =>
            {
                // Friendly label from common heading fields (adjust aliases if needed)
                var label =
                    b.Content.Value<string>("yvirskrift", culture: culture, fallback: Fallback.ToLanguage)
                    ?? b.Content.Value<string>("title",    culture: culture, fallback: Fallback.ToLanguage)
                    ?? b.Content.Value<string>("heading",  culture: culture, fallback: Fallback.ToLanguage)
                    ?? $"{b.Content.ContentType.Alias} #{i + 1}";

                // v16-safe: use the element Key (Guid) as stored value
                var guid = b.Content.Key.ToString("D");

                return new
                {
                    text = label,
                    name = label,
                    value = guid,
                    icon = "icon-brick",                         // optional
                    description = b.Content.ContentType.Alias    // optional
                };
            });

            // IMPORTANT: we return a TOP-LEVEL ARRAY (so Items JSONPath = $)
            return Ok(items);
        }

        // Optional: quick ping/diag if you want to troubleshoot in the future
        [HttpGet("ping")]
        public IActionResult Ping() => Ok(new { ok = true, ts = DateTime.UtcNow });

        [HttpGet("diag")]
        public IActionResult Diag([FromQuery] string? preferAlias = null, [FromQuery] string blockAlias = "modul")
        {
            if (!_ctx.TryGetUmbracoContext(out var umb) || umb?.Content is null)
                return Problem("Umbraco context unavailable.");

            var roots = umb.Content.GetAtRoot()?.Select(r => new { id = r.Id, name = r.Name, alias = r.ContentType.Alias }).ToArray();
            var container = FindContainer(umb, blockAlias, preferAlias);
            var culture = CultureInfo.CurrentUICulture?.Name;
            var count = container?.Value<BlockListModel>(blockAlias, culture: culture, fallback: Fallback.ToLanguage)?.Count ?? 0;

            return Ok(new
            {
                roots,
                preferAlias,
                blockAlias,
                containerFound = container != null ? new { id = container.Id, name = container.Name, alias = container.ContentType.Alias, path = container.Path } : null,
                blockCount = count,
                culture
            });
        }
    }
}

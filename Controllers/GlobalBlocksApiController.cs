using System;
using System.Globalization;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Extensions;

namespace Kob.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("umbraco/api/globalblocks")]
    public class GlobalBlocksApiController : ControllerBase // Changed from UmbracoApiController
    {
        private readonly IUmbracoContextAccessor _ctx;
        private readonly IPublishedValueFallback _pvf;
        private readonly IVariationContextAccessor _vca;

        private static readonly Guid GlobalPageKey = Guid.Parse("409f2e13-404d-4040-a120-341581f55942");
        private const string GlobalBlockListAlias = "modul";

        public GlobalBlocksApiController(
            IUmbracoContextAccessor ctx,
            IPublishedValueFallback pvf,
            IVariationContextAccessor vca)
        {
            _ctx = ctx;
            _pvf = pvf;
            _vca = vca;
        }

        // ----------------------------------------------------------
        // /umbraco/api/globalblocks/info
        // ----------------------------------------------------------
        [HttpGet("info")]
        [ResponseCache(NoStore = true, Location = ResponseCacheLocation.None)]
        public IActionResult Info()
        {
            var asm = typeof(GlobalBlocksApiController).Assembly.GetName();
            return Ok(new
            {
                environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "unknown",
                assembly = new { asm.Name, asm.Version },
                machine = Environment.MachineName,
                timeUtc = DateTimeOffset.UtcNow
            });
        }

        // ----------------------------------------------------------
        // /umbraco/api/globalblocks/items[?debug=1]
        // ----------------------------------------------------------
        [HttpGet("items")]
        [ResponseCache(NoStore = true, Location = ResponseCacheLocation.None)]
        public IActionResult Items([FromQuery] bool debug = false)
        {
            if (!_ctx.TryGetUmbracoContext(out var uc) || uc is null)
                return Ok(new { error = "no-umbraco-context" });

            // UI culture (thread) and site variation culture (string)
            var currentUiCulture = CultureInfo.CurrentUICulture?.Name ?? "fo-FO";
            var siteCulture = _vca?.VariationContext?.Culture;

            // Resolve the container node
            IPublishedContent? page = uc.Content?.GetById(GlobalPageKey);
            if (page is null)
                return Ok(new { error = "global-page-not-found", key = GlobalPageKey });

            // Get the block list strictly for fo-FO with NO fallback (via property API)
            var listProp = page.GetProperty(GlobalBlockListAlias);
            BlockListModel? list = listProp?.Value<BlockListModel>(
                _pvf,
                culture: "fo-FO",
                segment: null,
                fallback: Fallback.ToDefaultValue // Changed from Fallback.None
            );

            // Helper: read a title safely from an element using property + PVF
            string TitleFor(IPublishedElement? el)
            {
                if (el == null) return "(no content)";
                var titleProp = el.GetProperty("yvirskrift");
                if (titleProp != null)
                {
                    var t = titleProp.Value<string>(
                        _pvf,
                        culture: "fo-FO",
                        segment: null,
                        fallback: Fallback.ToDefaultValue // Changed from Fallback.None
                    );
                    if (!string.IsNullOrWhiteSpace(t)) return t!;
                }
                return el.ContentType?.Alias ?? "(no alias)";
            }

            if (debug)
            {
                var safe = list ?? new BlockListModel(Array.Empty<BlockListItem>());

                return Ok(new
                {
                    timeUtc = DateTimeOffset.UtcNow,
                    currentUiCulture,
                    siteCulture,
                    pageKey = page.Key,
                    pageName = page.Name,
                    pageCultures = page.Cultures?.Keys?.ToArray(),
                    blockCount = safe.Count,
                    blocks = safe.Select(b => new
                    {
                        key = b.Content?.Key,
                        alias = b.Content?.ContentType?.Alias,
                        title = TitleFor(b.Content),
                        values = b.Content?.Properties.ToDictionary(
                            p => p.Alias,
                            p => p.GetValue()?.ToString()
                        )
                    })
                });
            }

            if (list == null || list.Count == 0)
                return Ok(Array.Empty<object>());

            var items = list
                .Where(b => b.Content != null)
                .Select(b => new
                {
                    text = TitleFor(b.Content),
                    value = b.Content!.Key.ToString(),
                    icon = "icon-brick",
                    description = b.Content!.ContentType?.Alias ?? string.Empty
                });

            return Ok(items);
        }
    }
}
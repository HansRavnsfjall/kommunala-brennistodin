using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Attributes;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Extensions; // for .HasProperty() and .Value<T>()

namespace Kob.Controllers
{
    [PluginController("Kob")] // /umbraco/backoffice/Kob/BlockItemsApi/...
    [Authorize(Policy = "BackOffice")]
    public class BlockItemsApiController : Controller
    {
        private readonly IUmbracoContextAccessor _ctx;

        public BlockItemsApiController(IUmbracoContextAccessor ctx) => _ctx = ctx;

        public class PickerItem
        {
            public string value { get; set; } = "";   // We'll store the block's ContentKey (Guid) as string
            public string name { get; set; } = "";    // Label shown in picker
            public string? description { get; set; }  // Extra info (index + alias)
            public string? icon { get; set; }         // Not used on v16 unless you fetch via another service
        }

        [HttpGet]
        public IActionResult List(int nodeId, string propertyAlias)
        {
            if (!_ctx.TryGetUmbracoContext(out var umb) || umb == null)
                return BadRequest("No Umbraco context.");

            var content = umb.Content?.GetById(nodeId);
            if (content == null) return NotFound("Node not found.");

            var blocks = content.Value<BlockListModel>(propertyAlias);
            if (blocks == null) return Ok(new List<PickerItem>());

            var items = new List<PickerItem>();
            int i = 0;

            foreach (var bl in blocks)
            {
                i++;
                var el = bl.Content; // IPublishedElement
                var alias = el.ContentType.Alias;

                // Try to derive a friendly display label from common string props
                var display = FirstNonEmpty(el,
                    "title", "heading", "header", "name", "caption", "label", "text", "teaserTitle"
                ) ?? alias;

                // Fallback to alias + short key if we still don't have a label
                if (string.IsNullOrWhiteSpace(display))
                {
                    var shortKey = bl.ContentKey.ToString("N").Substring(0, 8);
                    display = $"{alias} • {shortKey}";
                }

                items.Add(new PickerItem
                {
                    value = bl.ContentKey.ToString(),       // ✅ v16+ (ContentUdi is obsolete)
                    name = display,
                    description = $"#{i} • {alias}",
                    icon = null                              // No icon here on v16
                });
            }

            return Json(items);
        }

        private static string? FirstNonEmpty(IPublishedElement el, params string[] aliases)
        {
            foreach (var a in aliases)
            {
                if (el.HasProperty(a))
                {
                    var s = el.Value<string>(a);
                    if (!string.IsNullOrWhiteSpace(s)) return s.Trim();
                }
            }
            return null;
        }
    }
}

// /Controllers/ExportController.cs
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using ClosedXML.Excel;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Services;          // IContentTypeService
using Umbraco.Cms.Infrastructure.Scoping; // IScopeProvider (DB access)
using Umbraco.Extensions;

namespace YourSite.Controllers
{
    [ApiController]
    [Route("umbraco/api/export")]
    public class ExportController : ControllerBase
    {
        private readonly IPublishedContentQuery _query;
        private readonly IContentTypeService _contentTypeService;
        private readonly IScopeProvider _scopeProvider;

        public ExportController(
            IPublishedContentQuery query,
            IContentTypeService contentTypeService,
            IScopeProvider scopeProvider)
        {
            _query = query;
            _contentTypeService = contentTypeService;
            _scopeProvider = scopeProvider;
        }

        // GET /umbraco/api/export/luturSkiljing.xlsx
        [HttpGet("luturSkiljing.xlsx")]
        public IActionResult ExportLuturSkiljingToExcel()
        {
            // 1) Schema (works even if no items exist)
            var ct = _contentTypeService.Get("luturSkiljing");
            if (ct == null)
                return BadRequest("Content type 'luturSkiljing' not found.");

            var propDefs = ct.CompositionPropertyTypes
                .Select(p => new PropDef { Alias = p.Alias, Name = p.Name, DataTypeId = p.DataTypeId })
                .OrderBy(p => p.Alias)
                .ToList();

            // 2) Existing items (optional)
            var items = _query.ContentAtRoot()
                .SelectMany(r => r.DescendantsOrSelfOfType("luturSkiljing"))
                .ToList();

            using var wb = new XLWorkbook();
            var ws = wb.AddWorksheet("luturSkiljing");

            // 3) Header
            int col = 1;
            ws.Cell(1, col++).Value = "Name";
            ws.Cell(1, col++).Value = "Key";
            foreach (var p in propDefs) ws.Cell(1, col++).Value = p.Alias;

            ws.SheetView.FreezeRows(1);
            ws.RangeUsed()?.SetAutoFilter();

            // 4) For each value-list property, add a hidden sheet with options and wire validation
            foreach (var p in propDefs)
            {
                var options = GetValueListOptionsFromDatabase(p.DataTypeId); // reads JSON from DB
                if (options == null || options.Count == 0) continue;

                var optSheet = wb.Worksheets.Add($"opts_{SafeSheetName(p.Alias)}");
                for (int i = 0; i < options.Count; i++)
                    optSheet.Cell(i + 1, 1).Value = options[i];

                var listRange = optSheet.Range(1, 1, options.Count, 1); // A1:A{n}
                optSheet.Visibility = XLWorksheetVisibility.VeryHidden;

                int targetCol = GetColumnIndexForAlias(ws, p.Alias);
                if (targetCol > 0)
                {
                    var dvRange = ws.Range(2, targetCol, 10000, targetCol);
                    var dv = dvRange.CreateDataValidation();
                    dv.AllowedValues = XLAllowedValues.List;
                    dv.IgnoreBlanks = true;
                    dv.InCellDropdown = true;
                    dv.List(listRange); // ClosedXML-supported
                }
            }

            // 5) Rows (export existing content if any)
            int row = 2;
            foreach (var item in items)
            {
                int c = 1;
                ws.Cell(row, c++).Value = item.Name;
                ws.Cell(row, c++).Value = item.Key.ToString();
                foreach (var p in propDefs)
                    ws.Cell(row, c++).Value = ValueToCell(item, p.Alias);
                row++;
            }

            ws.Columns().AdjustToContents();

            using var stream = new System.IO.MemoryStream();
            wb.SaveAs(stream);
            return File(
                stream.ToArray(),
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "luturSkiljing.xlsx"
            );
        }

        // ----------------- helpers -----------------

        private sealed class PropDef
        {
            public string Alias { get; set; } = "";
            public string Name  { get; set; } = "";
            public int DataTypeId { get; set; }
        }

        /// <summary>
        /// Read value-list options directly from the database JSON (umbracoDataType.configuration or cmsDataType.configuration).
        /// Supports Dropdown Flexible / Radio Button List (ValueList-based editors).
        /// </summary>
        private List<string>? GetValueListOptionsFromDatabase(int dataTypeId)
        {
            using var scope = _scopeProvider.CreateScope(autoComplete: true);
            var db = scope.Database;

            string? json = null;

            // Modern table (Umbraco 9+)
            try
            {
                json = db.ExecuteScalar<string?>(
                    "SELECT configuration FROM umbracoDataType WHERE nodeId=@0",
                    dataTypeId
                );
            }
            catch { /* ignore */ }

            // Legacy fallback
            if (string.IsNullOrWhiteSpace(json))
            {
                try
                {
                    json = db.ExecuteScalar<string?>(
                        "SELECT configuration FROM cmsDataType WHERE nodeId=@0",
                        dataTypeId
                    );
                }
                catch { /* ignore */ }
            }

            if (string.IsNullOrWhiteSpace(json))
                return null;

            try
            {
                using var doc = JsonDocument.Parse(json);
                var root = doc.RootElement;

                // Typical shape: { "items":[ {"value":"Option 1","id":"..."}, ... ] }
                if (root.TryGetProperty("items", out var itemsProp) && itemsProp.ValueKind == JsonValueKind.Array)
                {
                    var list = new List<string>();
                    foreach (var el in itemsProp.EnumerateArray())
                    {
                        if (el.TryGetProperty("value", out var valEl))
                        {
                            var v = valEl.GetString();
                            if (!string.IsNullOrWhiteSpace(v)) list.Add(v!);
                        }
                    }
                    return list;
                }
            }
            catch
            {
                // invalid JSON or different config shape → ignore
            }
            return null;
        }

        private static string SafeSheetName(string alias)
        {
            var invalid = "[]:*?/\\";
            var s = new string(alias.Select(ch => invalid.Contains(ch) ? '_' : ch).ToArray());
            return s.Length <= 31 ? s : s[..31];
        }

        private static int GetColumnIndexForAlias(IXLWorksheet ws, string alias)
        {
            var header = ws.Row(1);
            foreach (var cell in header.CellsUsed())
            {
                if ((cell.GetString() ?? string.Empty).Trim() == alias)
                    return cell.Address.ColumnNumber;
            }
            return -1;
        }

        private static string ValueToCell(IPublishedContent item, string alias)
        {
            object? val = null;
            try { val = item.Value(alias); } catch { /* ignore */ }

            if (val == null) return string.Empty;

            if (val is IPublishedContent media) return media.MediaUrl();

            if (val is IEnumerable<IPublishedContent> manyMedia)
                return string.Join(", ", manyMedia.Select(m => m.MediaUrl()));

            if (val is IEnumerable enumerable && val is not string)
            {
                var parts = new List<string>();
                foreach (var x in enumerable)
                {
                    if (x is IPublishedContent pc) parts.Add(pc.Url() ?? pc.Name);
                    else parts.Add(x?.ToString() ?? string.Empty);
                }
                return string.Join("; ", parts.Where(s => !string.IsNullOrWhiteSpace(s)));
            }

            return val.ToString() ?? string.Empty;
        }
    }
}

// /Controllers/BookingApiController.cs
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Umbraco.Cms.Core.Mail;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Models.Email;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;

namespace Kob.Controllers
{
    [ApiController]
    [IgnoreAntiforgeryToken]
    [Produces("application/json")]
    [Route("umbraco/api/bookingapi")]
    public class BookingApiController : ControllerBase
    {
        private sealed class DateSlotComparer : IEqualityComparer<(DateOnly date, string slotKey)>
        {
            public bool Equals((DateOnly date, string slotKey) x, (DateOnly date, string slotKey) y)
                => x.date == y.date && string.Equals(x.slotKey, y.slotKey, StringComparison.OrdinalIgnoreCase);

            public int GetHashCode((DateOnly date, string slotKey) obj)
                => HashCode.Combine(obj.date, obj.slotKey?.ToLowerInvariant());
        }

        // bookingSettings by GUID (contains approvalEmail + blockedDates)
        private static readonly Guid BookingSettingsKey = new("8b4e3c8c-7dd2-4ae4-9d31-5724ec25c660");

        private readonly IUmbracoContextFactory _ctxFactory;
        private readonly IContentService _contentService;
        private readonly IContentTypeService _contentTypeService;
        private readonly IEmailSender _emailSender;
        private readonly ILogger<BookingApiController> _logger;

        public BookingApiController(
            IUmbracoContextFactory ctxFactory,
            IContentService contentService,
            IContentTypeService contentTypeService,
            IEmailSender emailSender,
            ILogger<BookingApiController> logger)
        {
            _ctxFactory = ctxFactory;
            _contentService = contentService;
            _contentTypeService = contentTypeService;
            _emailSender = emailSender;
            _logger = logger;
        }

        // ---------- Helpers ----------
        private string? ExtractSlotValue(object? rawValue)
        {
            if (rawValue == null) return null;
            if (rawValue is string str) return str;

            if (rawValue is System.Collections.IEnumerable enumerable && rawValue is not string)
            {
                var first = enumerable.Cast<object>().FirstOrDefault();
                return first?.ToString();
            }

            var valueStr = rawValue.ToString() ?? "";
            if (valueStr.StartsWith("[") || valueStr.StartsWith("{"))
            {
                try
                {
                    var parsed = JToken.Parse(valueStr);
                    if (parsed is JArray arr && arr.Count > 0)
                        return arr[0]?.ToString();
                }
                catch (JsonException)
                {
                    // ignore parse errors; fall back to raw string
                }
            }

            return valueStr;
        }

        /// Normalize FO/EN variants → canonical keys.
        private string? NormalizeSlotLabel(string? raw)
        {
            if (string.IsNullOrWhiteSpace(raw)) return null;
            var t = raw.Trim().ToLowerInvariant();
            return t switch
            {
                "fyrrapart" or "fyrrapartur"   => "Morning",
                "seinnapart" or "seinnapartur" => "Afternoon",
                "bæði" or "baði" or "bæðir"    => "Both",
                "morning" or "am"              => "Morning",
                "afternoon" or "pm"            => "Afternoon",
                "both"                         => "Both",
                _ => null
            };
        }

        /// Canonical → backend stored value (FO, no -ur)
        private string ToBackendSlotValue(string canonical) => canonical switch
        {
            "Morning"   => "Fyrrapart",
            "Afternoon" => "Seinnapart",
            _           => canonical
        };

        /// Canonical → Faroese label (no -ur)
        private string ToFaroeseLabel(string canonical) => canonical switch
        {
            "Morning"   => "Fyrrapart",
            "Afternoon" => "Seinnapart",
            _           => canonical
        };

        /// Time string → (canonical slotKey, arrivalTime)
        private (string slotKey, string arrivalTime)? MapTimeSlot(string? timeSlot)
        {
            if (string.IsNullOrWhiteSpace(timeSlot)) return null;
            var normalized = timeSlot.Trim().Replace(".", ":").Replace(" ", "");
            return normalized switch
            {
                "08:30" or "0830" or "8:30" or "830" => ("Morning", "08:30"),
                "09:00" or "0900" or "9:00" or "900" => ("Morning", "09:00"),
                "09:30" or "0930" or "9:30" or "930" => ("Morning", "09:30"),
                "10:00" or "1000"                    => ("Morning", "10:00"),
                "10:30" or "1030"                    => ("Morning", "10:30"),
                "13:00" or "1300"                    => ("Afternoon", "13:00"),
                "13:30" or "1330"                    => ("Afternoon", "13:30"),
                "14:00" or "1400"                    => ("Afternoon", "14:00"),
                _ => null
            };
        }

        private static DateOnly StartOfWeek(DateOnly date, DayOfWeek start = DayOfWeek.Monday)
        {
            int diff = (7 + (date.DayOfWeek - start)) % 7;
            return date.AddDays(-diff);
        }

        private static bool IsInSameWeekAsToday(DateOnly d)
        {
            var today    = DateOnly.FromDateTime(DateTime.Today);
            var weekFrom = StartOfWeek(today, DayOfWeek.Monday);
            var weekTo   = weekFrom.AddDays(6);
            return d >= weekFrom && d <= weekTo;
        }

        private static IPublishedContent? GetBookingSettings(IUmbracoContext umb)
        {
#pragma warning disable CS0618
            var node = umb.Content?.GetById(BookingSettingsKey);
            if (node != null) return node;
            var root = umb.Content?.GetAtRoot().FirstOrDefault();
            return root?.DescendantsOrSelf().FirstOrDefault(x => x.ContentType.Alias == "bookingSettings");
#pragma warning restore CS0618
        }

        private static IEnumerable<string> SplitEmails(string? raw)
        {
            if (string.IsNullOrWhiteSpace(raw)) yield break;
            foreach (var part in raw.Split(new[] { ',', ';' }, StringSplitOptions.RemoveEmptyEntries))
            {
                var e = part.Trim();
                if (!string.IsNullOrWhiteSpace(e)) yield return e;
            }
        }

        private string BuildEmailBody(DateOnly d, string slotKey, string arrivalTime, BookingRequestPost dto, int contentId)
        {
            var sb = new StringBuilder();
            sb.AppendLine("Nýggj bílegging er móttikin (Pending):");
            sb.AppendLine();
            sb.AppendLine($"Dagur:           {d:yyyy-MM-dd}");
            sb.AppendLine($"Tíð:             {arrivalTime} ({ToFaroeseLabel(slotKey)})");
            sb.AppendLine($"Navn:            {dto.NameValue}");
            sb.AppendLine($"Teldupostur:     {dto.Email}");
            sb.AppendLine($"Telefon:         {dto.Phone}");
            sb.AppendLine($"Tal av vitjandi: {dto.Attendees}");
            if (!string.IsNullOrWhiteSpace(dto.FirmValue))
                sb.AppendLine($"Fyritøka:        {dto.FirmValue}");
            if (!string.IsNullOrWhiteSpace(dto.Notes))
                sb.AppendLine($"Viðmerking:       {dto.Notes}");
            sb.AppendLine();
            sb.AppendLine($"Umbraco ID:      {contentId}");
            sb.AppendLine("Støða:           Pending");
            return sb.ToString();
        }

        // ---------- Endpoints ----------
        [HttpGet("ping")]
        [AllowAnonymous]
        public IActionResult Ping() => Ok(new { ok = true, msg = "booking api alive", version = "v2.8-email-firm-range" });

        /// Calendar slots (Tue/Wed/Thu). Past + current week blocked. Always returns `reason`.
        [HttpGet("slots")]
        [AllowAnonymous]
        public IActionResult Slots(int year, int month, int months = 1, bool debug = false, bool respectCurrentWeek = true)
        {
            using var ctxRef = _ctxFactory.EnsureUmbracoContext();
            var umb = ctxRef.UmbracoContext;

#pragma warning disable CS0618
            var root = umb.Content?.GetAtRoot().FirstOrDefault();
#pragma warning restore CS0618
            if (root == null)
                return Ok(new { slots = Array.Empty<object>() });

            var settings     = GetBookingSettings(umb);
            var bookingsRoot = root.DescendantsOrSelf().FirstOrDefault(x => x.ContentType.Alias == "bookingsRoot");

            var blockedPairs = new HashSet<(DateOnly date, string slotKey)>(new DateSlotComparer());
            var debugInfo    = new List<object>();

            // blocked dates from settings (supports date ranges)
            if (settings != null)
            {
                var bl = settings.Value<BlockListModel>("blockedDates");
                if (bl != null)
                {
                    foreach (var item in bl)
                    {
                        var fromDt = item?.Content?.Value<DateTime?>("date");
                        if (fromDt == null) continue;

                        var toDt = item?.Content?.Value<DateTime?>("dateTo");
                        if (toDt == null) toDt = fromDt;

                        var from = DateOnly.FromDateTime(fromDt.Value.Date);
                        var to   = DateOnly.FromDateTime(toDt.Value.Date);
                        if (to < from) (from, to) = (to, from); // swap if inverted

                        var asString      = item?.Content?.Value<string>("blockedSlots");
                        var asStringArray = item?.Content?.Value<string[]>("blockedSlots");
                        var asObject      = item?.Content?.Value<object>("blockedSlots");

                        string? extractedValue = null;
                        if (!string.IsNullOrWhiteSpace(asString))
                            extractedValue = asString;
                        else if (asStringArray != null && asStringArray.Length > 0)
                            extractedValue = asStringArray[0];
                        else
                            extractedValue = ExtractSlotValue(asObject);

                        var sel = NormalizeSlotLabel(extractedValue);

                        for (var dIt = from; dIt <= to; dIt = dIt.AddDays(1))
                        {
                            if (debug)
                            {
                                debugInfo.Add(new
                                {
                                    date = dIt.ToString("yyyy-MM-dd"),
                                    raw = extractedValue ?? "NULL",
                                    normalized = sel ?? "NULL"
                                });
                            }

                            if (sel == "Morning") blockedPairs.Add((dIt, "Morning"));
                            else if (sel == "Afternoon") blockedPairs.Add((dIt, "Afternoon"));
                            else if (sel == "Both")
                            {
                                blockedPairs.Add((dIt, "Morning"));
                                blockedPairs.Add((dIt, "Afternoon"));
                            }
                        }
                    }
                }
            }

            // existing bookings
            var approved = new HashSet<(DateOnly, string)>(new DateSlotComparer());
            var pending  = new HashSet<(DateOnly, string)>(new DateSlotComparer());

            if (bookingsRoot != null)
            {
                foreach (var r in bookingsRoot.Children().Where(x => x.ContentType.Alias == "bookingRequest"))
                {
                    var dt      = r.Value<DateTime?>("slotDate");
                    var rawSlot = (r.Value<string>("slot") ?? "").Trim();
                    var norm    = NormalizeSlotLabel(rawSlot);

                    if (dt == null || string.IsNullOrWhiteSpace(norm)) continue;

                    var dOnly  = DateOnly.FromDateTime(dt.Value.Date);
                    var status = (r.Value<string>("status") ?? "Pending").Trim();

                    if (status.Equals("Approved", StringComparison.OrdinalIgnoreCase))
                        approved.Add((dOnly, norm));
                    else if (status.Equals("Pending", StringComparison.OrdinalIgnoreCase))
                        pending.Add((dOnly, norm));
                }
            }

            var start = new DateOnly(year, month, 1);
            var end   = start.AddMonths(months);
            var today = DateOnly.FromDateTime(DateTime.Today);

            var result = new List<object>();
            for (var d = start; d < end; d = d.AddDays(1))
            {
                if (d.DayOfWeek is DayOfWeek.Tuesday or DayOfWeek.Wednesday or DayOfWeek.Thursday)
                {
                    foreach (var slotKey in new[] { "Morning", "Afternoon" })
                    {
                        bool isPast          = d < today;
                        bool isCurrentWeek   = IsInSameWeekAsToday(d);
                        bool isExplicitBlock = blockedPairs.Contains((d, slotKey));
                        bool isApproved      = approved.Contains((d, slotKey));
                        bool isPending       = pending.Contains((d, slotKey));

                        string status;
                        string reason;
                        if (isPast) { status = "blocked"; reason = "past"; }
                        else if (respectCurrentWeek && isCurrentWeek) { status = "blocked"; reason = "currentWeek"; }
                        else if (isExplicitBlock) { status = "blocked"; reason = "blockedDates"; }
                        else if (isApproved) { status = "booked"; reason = "approved"; }
                        else if (isPending) { status = "pending"; reason = "pending"; }
                        else { status = "free"; reason = "free"; }

                        result.Add(new
                        {
                            date     = d.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture),
                            weekday  = d.DayOfWeek.ToString(),
                            slotKey,
                            slotValue = ToBackendSlotValue(slotKey),   // "Fyrrapart" / "Seinnapart"
                            slotLabel = ToFaroeseLabel(slotKey),       // "Fyrrapart" / "Seinnapart"
                            status,
                            reason,
                            isCurrentWeek
                        });
                    }
                }
            }

            return Ok(new { slots = result, debugBlockedDates = debug ? debugInfo : null });
        }

        // ---------- Booking DTO ----------
        public class BookingRequestPost
        {
            public string? Date { get; set; }         // yyyy-MM-dd
            public string? TimeSlot { get; set; }     // "08:30", ..., "14:00"
            public string? Slot { get; set; }         // legacy optional
            public string? ArrivalTime { get; set; }  // legacy optional
            public string? NameValue { get; set; }
            public string? Email { get; set; }
            public string? Phone { get; set; }
            public int Attendees { get; set; }
            public string? Notes { get; set; }
            public string? FirmValue { get; set; }
        }

        // ---------- Create booking + email ----------
        private async Task<IActionResult> CreateBookingInternalAsync(BookingRequestPost dto)
        {
            if (dto == null)
                return BadRequest(new { error = "Invalid payload", details = "Body was empty or not valid JSON" });

            if (!DateOnly.TryParse(dto.Date, out var d))
                return BadRequest(new { error = "Invalid date", details = "Date format must be yyyy-MM-dd" });

            if (d < DateOnly.FromDateTime(DateTime.Today))
                return BadRequest(new { error = "Date is in the past", details = $"Cannot book for {d:yyyy-MM-dd}" });

            var dow = d.DayOfWeek;
            if (!(dow == DayOfWeek.Tuesday || dow == DayOfWeek.Wednesday || dow == DayOfWeek.Thursday))
                return BadRequest(new { error = "Only Tue/Wed/Thu are available", details = $"{d:yyyy-MM-dd} is a {dow}" });

            if (IsInSameWeekAsToday(d))
                return BadRequest(new { error = "Current week not bookable", details = "Bookings can only be made starting next week" });

            // Determine slot + arrival time
            string slotKey;
            string arrivalTime;

            if (!string.IsNullOrWhiteSpace(dto.TimeSlot))
            {
                var mapped = MapTimeSlot(dto.TimeSlot);
                if (mapped == null)
                    return BadRequest(new { error = "Invalid time slot", details = "Use one of: 08:30, 09:00, 09:30, 10:00, 10:30, 13:00, 13:30, 14:00" });

                slotKey     = mapped.Value.slotKey;
                arrivalTime = mapped.Value.arrivalTime;
            }
            else if (!string.IsNullOrWhiteSpace(dto.Slot))
            {
                slotKey = NormalizeSlotLabel(dto.Slot) ?? "";
                if (slotKey != "Morning" && slotKey != "Afternoon")
                    return BadRequest(new { error = "Invalid slot", details = "Must be Fyrrapart/Seinnapart or Morning/Afternoon" });

                arrivalTime = dto.ArrivalTime ?? "";

                var validMorning   = new[] { "08:30", "09:00", "09:30", "10:00", "10:30" };
                var validAfternoon = new[] { "13:00", "13:30", "14:00" };
                if (slotKey == "Morning" && !validMorning.Contains(arrivalTime))
                    return BadRequest(new { error = "Invalid arrival time for Morning", details = string.Join(", ", validMorning) });
                if (slotKey == "Afternoon" && !validAfternoon.Contains(arrivalTime))
                    return BadRequest(new { error = "Invalid arrival time for Afternoon", details = string.Join(", ", validAfternoon) });
            }
            else
            {
                return BadRequest(new { error = "Missing time information", details = "Either 'timeSlot' or 'slot' + 'arrivalTime' must be provided" });
            }

            using var cref = _ctxFactory.EnsureUmbracoContext();
            var umb = cref.UmbracoContext;

#pragma warning disable CS0618
            var root = umb.Content?.GetAtRoot().FirstOrDefault();
#pragma warning restore CS0618
            if (root is null)
                return StatusCode(500, new { error = "Site root not found", details = "Cannot access Umbraco content tree" });

            var settings     = GetBookingSettings(umb);
            var bookingsRoot = root.DescendantsOrSelf().FirstOrDefault(x => x.ContentType.Alias == "bookingsRoot");
            if (bookingsRoot is null)
                return StatusCode(500, new { error = "Bookings root not found", details = "Content type 'bookingsRoot' is missing" });

            var bookingReqCt = _contentTypeService.Get("bookingRequest");
            if (bookingReqCt is null)
                return StatusCode(500, new { error = "ContentType missing", details = "Doctype 'bookingRequest' does not exist" });
            if (bookingReqCt.IsElement)
                return StatusCode(500, new { error = "Invalid configuration", details = "Doctype 'bookingRequest' is an Element type" });

            var parentCt = _contentTypeService.Get(bookingsRoot.ContentType.Alias);
            var allowedAliases = (parentCt?.AllowedContentTypes?.Select(s => s.Alias) ?? Enumerable.Empty<string>())
                .Where(a => !string.IsNullOrWhiteSpace(a))
                .ToHashSet(StringComparer.InvariantCultureIgnoreCase);
            if (!allowedAliases.Contains("bookingRequest"))
            {
                var allowedList = allowedAliases.Any() ? string.Join(", ", allowedAliases) : "(none)";
                return StatusCode(500, new { error = "Not allowed under parent", details = $"bookingRequest is not an allowed child of bookingsRoot. Allowed: [{allowedList}]" });
            }

            // Build blocked set (for validation) – supports date ranges
            var blockedPairs = new HashSet<(DateOnly date, string slotKey)>(new DateSlotComparer());
            if (settings != null)
            {
                var bl = settings.Value<BlockListModel>("blockedDates");
                if (bl != null)
                {
                    foreach (var item in bl)
                    {
                        var fromDt = item?.Content?.Value<DateTime?>("date");
                        if (fromDt == null) continue;

                        var toDt = item?.Content?.Value<DateTime?>("dateTo");
                        if (toDt == null) toDt = fromDt;

                        var from = DateOnly.FromDateTime(fromDt.Value.Date);
                        var to   = DateOnly.FromDateTime(toDt.Value.Date);
                        if (to < from) (from, to) = (to, from);

                        var asString      = item?.Content?.Value<string>("blockedSlots");
                        var asStringArray = item?.Content?.Value<string[]>("blockedSlots");
                        var asObject      = item?.Content?.Value<object>("blockedSlots");

                        string? extractedValue = null;
                        if (!string.IsNullOrWhiteSpace(asString))
                            extractedValue = asString;
                        else if (asStringArray != null && asStringArray.Length > 0)
                            extractedValue = asStringArray[0];
                        else
                            extractedValue = ExtractSlotValue(asObject);

                        var sel = NormalizeSlotLabel(extractedValue);

                        for (var dIt = from; dIt <= to; dIt = dIt.AddDays(1))
                        {
                            if (sel == "Morning") blockedPairs.Add((dIt, "Morning"));
                            else if (sel == "Afternoon") blockedPairs.Add((dIt, "Afternoon"));
                            else if (sel == "Both")
                            {
                                blockedPairs.Add((dIt, "Morning"));
                                blockedPairs.Add((dIt, "Afternoon"));
                            }
                        }
                    }
                }
            }

            if (blockedPairs.Contains((d, slotKey)))
                return BadRequest(new { error = "Date/slot is blocked", details = $"{d:yyyy-MM-dd} {ToFaroeseLabel(slotKey)} is not available" });

            // Approved set
            var approved = bookingsRoot.Children()
                .Where(x => x.ContentType.Alias == "bookingRequest"
                            && (x.Value<string>("status") ?? "").InvariantEquals("Approved"))
                .Select(x => (
                    Date: DateOnly.FromDateTime(x.Value<DateTime?>("slotDate")!.Value.Date),
                    Slot: NormalizeSlotLabel((x.Value<string>("slot") ?? "").Trim()) ?? ""
                ))
                .Where(t => t.Slot == "Morning" || t.Slot == "Afternoon")
                .ToHashSet(new DateSlotComparer());

            if (approved.Contains((d, slotKey)))
                return BadRequest(new { error = "This slot is already booked", details = $"{d:yyyy-MM-dd} {ToFaroeseLabel(slotKey)} has an approved booking" });

            // Create content
            var firmPart = string.IsNullOrWhiteSpace(dto.FirmValue) ? "" : $" – {dto.FirmValue}";
            var nodeName = $"[Pending] {d:yyyy-MM-dd} – {ToFaroeseLabel(slotKey)} – {(string.IsNullOrWhiteSpace(dto.NameValue) ? "Unknown" : dto.NameValue)}{firmPart}";
            var content = _contentService.Create(nodeName, bookingsRoot.Id, "bookingRequest");
            if (content == null)
                return StatusCode(500, new { error = "Create failed", details = "ContentService.Create returned null" });

            var varies  = content.ContentType.VariesByCulture();
            var culture = CultureInfo.CurrentUICulture?.Name ?? "fo-FO";
            var dtValue = new DateTime(d.Year, d.Month, d.Day);

            content.Name = nodeName;
            if (varies) content.SetCultureName(nodeName, culture);

            void Set(string alias, object? value)
            {
                if (varies) content.SetValue(alias, value, culture);
                else content.SetValue(alias, value);
            }

            Set("slotDate", dtValue);
            Set("slot", ToBackendSlotValue(slotKey)); // "Fyrrapart"/"Seinnapart"
            Set("arrivalTime", arrivalTime);
            Set("status", "Pending");
            Set("nameValue", dto.NameValue ?? "");
            Set("email", dto.Email ?? "");
            Set("phone", dto.Phone ?? "");
            Set("attendees", dto.Attendees);
            Set("notes", dto.Notes ?? "");
            Set("firmValue", dto.FirmValue ?? "");

            var saveResult = _contentService.Save(content);
            if (!saveResult.Success || content.Id <= 0)
            {
                var msgs = saveResult.EventMessages?.GetAll()?.Select(m => $"[{m.Category}] {m.Message}")?.ToList() ?? new List<string>();
                var detailStr = msgs.Any() ? string.Join("; ", msgs) : "(none)";
                return StatusCode(500, new { error = "Booking save failed", details = detailStr });
            }

            // ===== Email notification (approvalEmail from GUID bookingSettings) =====
            try
            {
                var settingsNode = settings; // already resolved
#pragma warning disable CS0618
                var rootAdmin = root.Value<string>("adminEmail");
#pragma warning restore CS0618
                var fallback = "booking@kob.fo";

                var toRaw  = settingsNode?.Value<string>("approvalEmail", fallback: Fallback.ToLanguage);
                var toList = SplitEmails(toRaw).ToList();
                if (toList.Count == 0)
                    toList.Add(string.IsNullOrWhiteSpace(rootAdmin) ? fallback : rootAdmin);

                var subjectFirm = string.IsNullOrWhiteSpace(dto.FirmValue) ? "" : $" – {dto.FirmValue}";
                var subject = $"Nýggj bílegging – {d:yyyy-MM-dd} {ToFaroeseLabel(slotKey)}{subjectFirm}";
                var body    = BuildEmailBody(d, slotKey, arrivalTime, dto, content.Id);

                // IMPORTANT: don't set From → use configured SMTP 'From' (same as Umbraco Forms)
                var toStr = string.Join(",", toList);
                var message = new EmailMessage(
                    from: null,          // use configured From
                    to: toStr,           // comma-separated recipients
                    subject: subject,
                    body: body,
                    isBodyHtml: false
                );

                await _emailSender.SendAsync(message, emailType: "BookingNotification");
                _logger.LogInformation("📧 Booking notification sent to {To}", toStr);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to send booking notification email");
                // Do not fail the booking because of email issues.
            }

            return Ok(new
            {
                ok = true,
                id = content.Id,
                message = "Booking request created successfully",
                slotStored = ToBackendSlotValue(slotKey)
            });
        }

        [HttpPost("request")]
        [HttpPost("/publicapi/booking/request")]
        [AllowAnonymous]
        [Produces("application/json")]
        [Consumes("application/json")]
        public async Task<IActionResult> Submit([FromBody] BookingRequestPost dto)
        {
            try { return await CreateBookingInternalAsync(dto); }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception during booking creation (POST)");
                return StatusCode(500, new { error = "Exception during save", details = ex.Message });
            }
        }

        // GET fallback (if POST is blocked by firewall)
        [HttpGet("/publicapi/booking/request-get")]
        [AllowAnonymous]
        public async Task<IActionResult> SubmitGet(
            [FromQuery] string date,
            [FromQuery] string? timeSlot = null,
            [FromQuery] string? slot = null,
            [FromQuery] string? arrivalTime = null,
            [FromQuery] string? nameValue = null,
            [FromQuery] string? email = null,
            [FromQuery] string? phone = null,
            [FromQuery] int attendees = 1,
            [FromQuery] string? notes = null,
            [FromQuery] string? firmValue = null)
        {
            try
            {
                var dto = new BookingRequestPost
                {
                    Date = date,
                    TimeSlot = timeSlot,
                    Slot = slot,
                    ArrivalTime = arrivalTime,
                    NameValue = nameValue,
                    Email = email,
                    Phone = phone,
                    Attendees = attendees,
                    Notes = notes,
                    FirmValue = firmValue
                };
                return await CreateBookingInternalAsync(dto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception during booking creation (GET fallback)");
                return StatusCode(500, new { error = "Exception during save", details = ex.Message });
            }
        }

        // ---------- Feeds ----------
        // JSON feed: /umbraco/api/bookingapi/feed?status=approved&includePending=false
        [HttpGet("feed")]
        [AllowAnonymous]
        public IActionResult Feed([FromQuery] string status = "approved", [FromQuery] bool includePending = false)
        {
            using var cref = _ctxFactory.EnsureUmbracoContext();
            var umb = cref.UmbracoContext;

#pragma warning disable CS0618
            var root = umb.Content?.GetAtRoot().FirstOrDefault();
#pragma warning restore CS0618
            if (root is null)
                return NotFound(new { error = "No site root found" });

            var bookingsRoot = root.DescendantsOrSelf().FirstOrDefault(x => x.ContentType.Alias == "bookingsRoot");
            if (bookingsRoot is null)
                return NotFound(new { error = "Bookings root not found" });

            var all = bookingsRoot.Children()
                .Where(x => x.ContentType.Alias == "bookingRequest")
                .Select(x => new
                {
                    id          = x.Id,
                    date        = x.Value<DateTime?>("slotDate"),
                    dateStr     = x.Value<DateTime?>("slotDate")?.ToString("yyyy-MM-dd"),
                    rawSlot     = x.Value<string>("slot") ?? "",
                    slotKey     = NormalizeSlotLabel(x.Value<string>("slot") ?? "") ?? "",
                    slotLabel   = ToFaroeseLabel(NormalizeSlotLabel(x.Value<string>("slot") ?? "") ?? ""),
                    arrivalTime = x.Value<string>("arrivalTime") ?? "",
                    name        = x.Value<string>("nameValue") ?? "",
                    email       = x.Value<string>("email") ?? "",
                    phone       = x.Value<string>("phone") ?? "",
                    attendees   = x.Value<int?>("attendees") ?? 0,
                    notes       = x.Value<string>("notes") ?? "",
                    status      = x.Value<string>("status") ?? "",
                    firm        = x.Value<string>("firmValue") ?? ""
                })
                .Where(b => includePending
                        ? (b.status.Equals("Approved", StringComparison.OrdinalIgnoreCase) ||
                           b.status.Equals("Pending",  StringComparison.OrdinalIgnoreCase))
                        : b.status.Equals(status, StringComparison.OrdinalIgnoreCase))
                .OrderBy(b => b.date)
                .ThenBy(b => b.arrivalTime)
                .Select(b => new
                {
                    b.id,
                    date = b.dateStr,
                    slot = b.rawSlot,     // stored FO value ("Fyrrapart"/"Seinnapart")
                    slotKey = b.slotKey,  // canonical ("Morning"/"Afternoon")
                    slotLabel = b.slotLabel,
                    b.arrivalTime,
                    b.name,
                    b.email,
                    b.phone,
                    b.attendees,
                    b.notes,
                    b.status,
                    firm = b.firm
                })
                .ToList();

            return Ok(new
            {
                generated = DateTime.UtcNow.ToString("u"),
                count = all.Count,
                bookings = all
            });
        }

        // ICS feed (Approved only): /umbraco/api/bookingapi/feed.ics
        [HttpGet("feed.ics")]
        [AllowAnonymous]
        public IActionResult IcsFeed()
        {
            using var cref = _ctxFactory.EnsureUmbracoContext();
            var umb = cref.UmbracoContext;

#pragma warning disable CS0618
            var root = umb.Content?.GetAtRoot().FirstOrDefault();
#pragma warning restore CS0618
            if (root is null) return NotFound();

            var bookingsRoot = root.DescendantsOrSelf().FirstOrDefault(x => x.ContentType.Alias == "bookingsRoot");
            if (bookingsRoot is null) return NotFound();

            var bookings = bookingsRoot.Children()
                .Where(x => x.ContentType.Alias == "bookingRequest"
                         && (x.Value<string>("status") ?? "").InvariantEquals("Approved"))
                .OrderBy(x => x.Value<DateTime?>("slotDate"))
                .ToList();

            var sb = new StringBuilder();
            sb.AppendLine("BEGIN:VCALENDAR");
            sb.AppendLine("VERSION:2.0");
            sb.AppendLine("PRODID:-//kob.fo//Booking Feed//FO");
            sb.AppendLine("CALSCALE:GREGORIAN");
            sb.AppendLine("METHOD:PUBLISH");

            foreach (var b in bookings)
            {
                var dt       = b.Value<DateTime?>("slotDate");
                var rawSlot  = b.Value<string>("slot") ?? "";
                var slotKey  = NormalizeSlotLabel(rawSlot) ?? rawSlot;
                var label    = ToFaroeseLabel(slotKey);
                var name     = b.Value<string>("nameValue") ?? "";
                var time     = b.Value<string>("arrivalTime") ?? "";
                var attendees= b.Value<int?>("attendees") ?? 0;
                var notes    = (b.Value<string>("notes") ?? "").Replace("\n", "\\n").Replace("\r", "");
                var firm     = b.Value<string>("firmValue") ?? "";

                if (dt == null) continue;

                var start = dt.Value.ToString("yyyyMMdd");
                var summaryFirm = string.IsNullOrWhiteSpace(firm) ? "" : $" – {firm}";
                var summary = $"{label} – {name} ({attendees} fólk){summaryFirm}";
                var firmLine = string.IsNullOrWhiteSpace(firm) ? "" : $"\\nFyritøka: {firm}";
                sb.AppendLine("BEGIN:VEVENT");
                sb.AppendLine($"UID:{b.Id}@kob.fo");
                sb.AppendLine($"DTSTAMP:{DateTime.UtcNow:yyyyMMdd'T'HHmmss'Z'}");
                sb.AppendLine($"DTSTART;VALUE=DATE:{start}");
                sb.AppendLine($"SUMMARY:{summary}");
                sb.AppendLine($"DESCRIPTION:Koma: {time}\\nViðmerkingar: {notes}{firmLine}");
                sb.AppendLine("END:VEVENT");
            }

            sb.AppendLine("END:VCALENDAR");

            var bytes = Encoding.UTF8.GetBytes(sb.ToString());
            return File(bytes, "text/calendar; charset=utf-8", "bookings.ics");
        }
    }
}

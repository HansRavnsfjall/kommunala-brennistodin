// Program.cs — final probes
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Umbraco.Cms.Web.Common.ApplicationBuilder;

var builder = WebApplication.CreateBuilder(args);

// Attribute-routed controllers
builder.Services.AddControllers(); // (no views needed)

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddComposers()
    .Build();

var app = builder.Build();
await app.BootUmbracoAsync();

// --- PROBES: these MUST return JSON if this app is actually serving the host ---
app.MapGet("/_alive", () => Results.Json(new { ok = true, env = app.Environment.EnvironmentName }));
app.MapGet("/api/booking/_probe", () => Results.Json(new { ok = true, route = "/api/booking/_probe" }));

// Map attribute routes BEFORE Umbraco
app.MapControllers();

// Optional: list all mapped endpoints (for quick debugging)
app.MapGet("/_routes", (EndpointDataSource es) =>
    Results.Text(string.Join("\n", es.Endpoints.Select(e => e.DisplayName ?? "")))
);

// Umbraco pipeline
app.UseUmbraco()
    .WithMiddleware(u => { u.UseBackOffice(); u.UseWebsite(); })
    .WithEndpoints(u => { u.UseBackOfficeEndpoints(); u.UseWebsiteEndpoints(); });

await app.RunAsync();

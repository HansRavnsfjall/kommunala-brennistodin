// Program.cs — clean Umbraco 16/.NET 8 startup (no gate, no debug middleware)
using Umbraco.Cms.Web.Common.ApplicationBuilder;

var builder = WebApplication.CreateBuilder(args);

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    // .AddDeliveryApi() // enable if you use it
    .AddComposers()
    .Build();

var app = builder.Build();

await app.BootUmbracoAsync();

app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
        // u.UsePreviewEndpoints(); // only if you need preview endpoints
    });

await app.RunAsync();

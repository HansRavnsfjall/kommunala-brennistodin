namespace Kob.Services
{
    using System.Globalization;
    using Umbraco.Cms.Core.Models.Blocks;
    using Umbraco.Cms.Core.Models.PublishedContent;
    using Umbraco.Cms.Core.Web;
    using Umbraco.Extensions;

    public interface IGlobalBlockResolver
    {
        BlockListItem? Resolve(Guid targetBlockKey, string? culture = null);
    }

    public sealed class GlobalBlockResolver : IGlobalBlockResolver
    {
        private readonly IUmbracoContextAccessor _ctxAccessor;

        private static readonly Guid GlobalBlocksPageKey = Guid.Parse("409f2e13-404d-4040-a120-341581f55942");
        private const string GlobalBlocksPageAlias = "globalBlocksPage";
        private const string GlobalBlockListAlias  = "modul";

        public GlobalBlockResolver(IUmbracoContextAccessor ctxAccessor)
            => _ctxAccessor = ctxAccessor;

        public BlockListItem? Resolve(Guid targetBlockKey, string? culture = null)
        {
            if (!_ctxAccessor.TryGetUmbracoContext(out var ctx) || ctx is null)
                return null;

            var global = ctx.Content?.GetById(GlobalBlocksPageKey);
            if (global is null || !global.ContentType.Alias.InvariantEquals(GlobalBlocksPageAlias))
                return null;

            var ci = culture ?? CultureInfo.CurrentUICulture?.Name;
            var globalList = global.Value<BlockListModel>(GlobalBlockListAlias, culture: ci, fallback: Fallback.ToLanguage);
            if (globalList is null)
                return null;

            return globalList.FirstOrDefault(b => b.Content?.Key == targetBlockKey);
        }
    }
}

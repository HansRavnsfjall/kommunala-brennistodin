namespace Kob.ViewModels
{
    using Umbraco.Cms.Core.Models.Blocks;

    public class BlockListRenderModel
    {
        public BlockListModel? Blocks { get; init; }
        public string? Scope { get; init; }
        public string? FallbackView { get; init; }
    }
}

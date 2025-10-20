namespace Kob.ViewModels
{
    using Umbraco.Cms.Core.Models.Blocks;

    public class BlockListItemViewModel
    {
        public BlockListItem Item { get; init; } = default!;
        public int Index { get; init; }
        public bool IsFirst { get; init; }
        public bool IsLast { get; init; }
    }
}

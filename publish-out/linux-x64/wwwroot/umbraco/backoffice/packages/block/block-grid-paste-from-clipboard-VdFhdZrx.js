import { UmbPasteFromClipboardPropertyAction as r } from "@umbraco-cms/backoffice/clipboard";
class p extends r {
  /**
   * Filters the picker based on the block grid property editor config.
   * @param {UmbBlockGridValueModel} propertyValue The property editor value.
   * @param {UmbBlockGridPropertyEditorConfig} config The property editor config.
   * @override
   * @protected
   * @memberof UmbBlockGridPasteFromClipboardPropertyAction
   */
  async _pickerFilter(t, e) {
    const n = e.find((o) => o.alias === "blocks")?.value.map((o) => {
      if (o.allowAtRoot)
        return o.contentElementTypeKey;
    }).filter((o) => o !== void 0) ?? [], l = t.layout["Umbraco.BlockGrid"]?.map((o) => o.contentKey) ?? [];
    return t.contentData.filter((o) => l.includes(o.key)).map((o) => o.contentTypeKey).every(
      (o) => n.includes(o)
    );
  }
}
export {
  p as UmbBlockGridPasteFromClipboardPropertyAction,
  p as api
};
//# sourceMappingURL=block-grid-paste-from-clipboard-VdFhdZrx.js.map

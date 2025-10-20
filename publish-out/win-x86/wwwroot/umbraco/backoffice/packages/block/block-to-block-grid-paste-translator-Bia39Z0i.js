import { k as r } from "./index-q0gJfrDp.js";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class p extends s {
  /**
   * Translates a block clipboard entry value to a Block Grid property value.
   * @param {UmbBlockClipboardEntryValueModel} value The block clipboard entry value.
   * @returns {Promise<UmbBlockGridValueModel>} The translated Block Grid property value.
   * @memberof UmbBlockToBlockGridClipboardPastePropertyValueTranslator
   */
  async translate(o) {
    if (!o)
      throw new Error("Values is missing.");
    const e = structuredClone(o);
    return {
      contentData: e.contentData,
      settingsData: e.settingsData,
      expose: [],
      layout: {
        [r]: e.layout?.map((n) => ({
          ...n,
          columnSpan: 12,
          rowSpan: 1,
          areas: []
        }))
      }
    };
  }
  /**
   * Determines if a block clipboard entry value is compatible with the Block Grid property editor.
   * @param {UmbBlockClipboardEntryValueModel} propertyValue The block clipboard entry value.
   * @param {UmbBlockGridPropertyEditorConfig} config The Block Grid property editor configuration.
   * @returns {Promise<boolean>} A promise that resolves with a boolean indicating if the value is compatible.
   * @memberof UmbBlockToBlockGridClipboardPastePropertyValueTranslator
   */
  async isCompatibleValue(o, e) {
    const a = e.find((t) => t.alias === "blocks")?.value.map((t) => t.contentElementTypeKey) ?? [];
    return o.contentData.map((t) => t.contentTypeKey)?.every((t) => a.includes(t)) ?? !1;
  }
}
export {
  p as UmbBlockToBlockGridClipboardPastePropertyValueTranslator,
  p as api
};
//# sourceMappingURL=block-to-block-grid-paste-translator-Bia39Z0i.js.map

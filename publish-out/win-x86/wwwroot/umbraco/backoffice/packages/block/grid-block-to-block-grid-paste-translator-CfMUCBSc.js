import { k as l } from "./index-q0gJfrDp.js";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class d extends s {
  /**
   * Translates a grid block clipboard entry value to a block grid property value.
   * @param {UmbGridBlockClipboardEntryValueModel} value - The grid block clipboard entry value.
   * @returns {Promise<UmbBlockGridValueModel>}  {Promise<UmbBlockGridValueModel>}
   * @memberof UmbGridBlockToBlockGridClipboardPastePropertyValueTranslator
   */
  async translate(o) {
    if (!o)
      throw new Error("Value is missing.");
    const e = structuredClone(o);
    return {
      contentData: e.contentData,
      settingsData: e.settingsData,
      expose: [],
      layout: {
        [l]: e.layout
      }
    };
  }
  /**
   * Checks if the clipboard entry value is compatible with the config.
   * @param {UmbGridBlockClipboardEntryValueModel} propertyValue - The grid block clipboard entry value.
   * @param {*} config - The Property Editor config.
   * @param {(value, config) => Promise<boolean>} filter - The filter function.
   * @returns {Promise<boolean>} {Promise<boolean>}
   * @memberof UmbGridBlockToBlockGridClipboardPastePropertyValueTranslator
   */
  async isCompatibleValue(o, e, n) {
    const a = e.find((t) => t.alias === "blocks")?.value.map((t) => t.contentElementTypeKey) ?? [];
    return (o.contentData.map((t) => t.contentTypeKey)?.every((t) => a.includes(t)) ?? !1) && (!n || await n(o, e));
  }
}
export {
  d as UmbGridBlockToBlockGridClipboardPastePropertyValueTranslator,
  d as api
};
//# sourceMappingURL=grid-block-to-block-grid-paste-translator-CfMUCBSc.js.map

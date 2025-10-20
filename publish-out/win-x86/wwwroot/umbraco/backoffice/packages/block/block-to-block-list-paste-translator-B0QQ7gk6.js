import { U as n } from "./index-BbCqfSen.js";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class p extends s {
  /**
   * Translates a block clipboard entry value to a block list property value.
   * @param {UmbBlockClipboardEntryValueModel} value - The block clipboard entry value.
   * @returns {Promise<UmbBlockListValueModel>} - The block list property value.
   * @memberof UmbBlockToBlockListClipboardPastePropertyValueTranslator
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
        [n]: e.layout ?? void 0
      }
    };
  }
  /**
   * Checks if the clipboard entry value is compatible with the config.
   * @param {UmbBlockListValueModel} propertyValue - The property value
   * @param {*} config - The Property Editor config.
   * @returns {Promise<boolean>} - Whether the clipboard entry value is compatible with the config.
   * @memberof UmbBlockToBlockListClipboardPastePropertyValueTranslator
   */
  async isCompatibleValue(o, e) {
    const a = e.find((t) => t.alias === "blocks")?.value.map((t) => t.contentElementTypeKey) ?? [];
    return o.contentData.map((t) => t.contentTypeKey)?.every((t) => a.includes(t)) ?? !1;
  }
}
export {
  p as UmbBlockToBlockListClipboardPastePropertyValueTranslator,
  p as api
};
//# sourceMappingURL=block-to-block-list-paste-translator-B0QQ7gk6.js.map

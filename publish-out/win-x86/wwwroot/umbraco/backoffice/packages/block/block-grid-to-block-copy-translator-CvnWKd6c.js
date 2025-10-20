import { k as l } from "./index-q0gJfrDp.js";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
class d extends i {
  /**
   * Translates a Block Grid property value to a Block clipboard entry value.
   * @param {UmbBlockGridValueModel} propertyValue - The Block Grid property value.
   * @returns {Promise<UmbBlockClipboardEntryValueModel>} - The Block clipboard entry value.
   * @memberof UmbBlockGridToBlockClipboardCopyPropertyValueTranslator
   */
  async translate(n) {
    if (!n)
      throw new Error("Property value is missing.");
    return this.#n(n);
  }
  #t(n) {
    const t = structuredClone(n);
    return {
      contentData: t.contentData,
      layout: t.layout?.[l] ?? void 0,
      settingsData: t.settingsData
    };
  }
  #n(n) {
    const t = this.#t(n), s = [], a = [];
    return {
      layout: t.layout?.map((o) => {
        const r = t.contentData.find(
          (e) => e.key === o.contentKey
        );
        if (!r)
          throw new Error("No content data found for layout entry");
        if (s.push(r), o.settingsKey) {
          const e = t.settingsData.find(
            (c) => c.key === o.settingsKey
          );
          if (!e)
            throw new Error("No settings data found for layout entry");
          a.push(e);
        }
        return {
          contentKey: o.contentKey,
          settingsKey: o.settingsKey
        };
      }),
      contentData: s,
      settingsData: a
    };
  }
}
export {
  d as UmbBlockGridToBlockClipboardCopyPropertyValueTranslator,
  d as api
};
//# sourceMappingURL=block-grid-to-block-copy-translator-CvnWKd6c.js.map

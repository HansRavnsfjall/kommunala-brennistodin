import { U as r } from "./index-BbCqfSen.js";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
class p extends l {
  async translate(o) {
    if (!o)
      throw new Error("Property value is missing.");
    const t = structuredClone(o), e = t.contentData, a = t.layout?.[r] ?? void 0, s = t.settingsData;
    return a?.forEach((n) => {
      delete n.$type;
    }), {
      contentData: e ?? [],
      layout: a,
      settingsData: s ?? []
    };
  }
}
export {
  p as UmbBlockListToBlockClipboardCopyPropertyValueTranslator,
  p as api
};
//# sourceMappingURL=block-list-to-block-copy-translator-Ce8P5rOu.js.map

import { UmbControllerBase as p } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as u } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as y } from "@umbraco-cms/backoffice/extension-registry";
class P extends p {
  async resolve(r, e) {
    if (!r)
      throw new Error("Property value is required.");
    if (!e)
      throw new Error("Property editor UI alias is required.");
    const t = y.getByTypeAndFilter(
      "clipboardCopyPropertyValueTranslator",
      (o) => o.fromPropertyEditorUi === e
    );
    if (!t.length)
      throw new Error("No clipboard copy translators found.");
    const a = t.map(
      (o) => u(this, o).then((i) => (i && (i.manifest = o), i))
    ), n = (await Promise.all(a)).map(
      async (o) => o?.translate(r)
    );
    return (await Promise.all(n)).map((o, i) => ({ type: t[i].toClipboardEntryValueType, value: o }));
  }
}
class T extends p {
  #t = /* @__PURE__ */ new Map();
  async resolve(r, e) {
    if (!r.length)
      throw new Error("Clipboard entry values are required.");
    if (!e)
      throw new Error("Property editor UI alias is required.");
    const t = this.#r(r, e), a = await this.getPasteTranslator(r, e), s = r.find((n) => n.type === t.fromClipboardEntryValueType);
    if (!s)
      throw new Error("Value to translate is missing");
    return a.translate(s.value);
  }
  /**
   * Get the paste translator for the given clipboard entry values and property editor ui alias
   * @param {UmbClipboardEntryValuesType} clipboardEntryValues
   * @param {string} propertyEditorUiAlias
   * @returns {Promise<UmbClipboardPastePropertyValueTranslator>} - The paste translator
   * @memberof UmbClipboardPastePropertyValueTranslatorValueResolver
   */
  async getPasteTranslator(r, e) {
    const t = this.#r(r, e);
    if (this.#t.has(t.alias))
      return this.#t.get(t.alias);
    const a = await u(this, t);
    if (!a)
      throw new Error("Failed to create paste translator.");
    if (!a.translate)
      throw new Error("Paste translator does not have a translate method.");
    return this.#t.set(t.alias, a), a;
  }
  #r(r, e) {
    const t = this.#e(r, e);
    if (!t.length)
      throw new Error("No paste translator found for the given property editor ui and entry value type.");
    return t.sort((a, s) => (s.weight || 0) - (a.weight || 0))[0];
  }
  #e(r, e) {
    const t = r.map((s) => s.type);
    return y.getByTypeAndFilter(
      "clipboardPastePropertyValueTranslator",
      (s) => {
        const n = t.includes(s.fromClipboardEntryValueType), l = s.toPropertyEditorUi === e;
        return n && l;
      }
    );
  }
}
export {
  P as U,
  T as a
};
//# sourceMappingURL=clipboard-paste-translator-value-resolver-CvUcR1Sa.js.map

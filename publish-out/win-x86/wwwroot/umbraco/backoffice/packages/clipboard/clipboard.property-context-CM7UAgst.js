import { U as u } from "./clipboard.context-token-DOwOWTSv.js";
import { U as f } from "./clipboard-entry-picker-modal.token-BY5g5-fO.js";
import { UmbContextBase as h } from "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/current-user";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "./manifests-D6Yzql_a.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { U as y, a as c } from "./clipboard-paste-translator-value-resolver-CvUcR1Sa.js";
import { U as C } from "./clipboard.property-context-token-DMlYzAUk.js";
import { umbOpenModal as E } from "@umbraco-cms/backoffice/modal";
import { UMB_PROPERTY_CONTEXT as P, UmbPropertyValueCloneController as T } from "@umbraco-cms/backoffice/property";
import { umbExtensionsRegistry as d } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_NOTIFICATION_CONTEXT as v } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as b } from "@umbraco-cms/backoffice/localization-api";
class k extends h {
  #t;
  #o = new b(this);
  constructor(e) {
    super(e, C);
  }
  /**
   * Read a clipboard entry for a property. The entry will be translated to the property editor value
   * @param {string} unique - The unique id of the clipboard entry
   * @param {string} propertyEditorUiAlias - The alias of the property editor to match
   * @returns { Promise<unknown> } - Returns the resolved property value
   */
  async read(e, r) {
    if (!e) throw new Error("The Clipboard Entry unique is required");
    if (!r) throw new Error("Property Editor UI alias is required");
    const o = await this.#e(r);
    return this.#r(e, o);
  }
  /**
   * Read multiple clipboard entries for a property. The entries will be translated to the property editor values
   * @param {Array<string>} uniques - The unique ids of the clipboard entries
   * @param {string} propertyEditorUiAlias - The alias of the property editor to match
   * @returns { Promise<Array<unknown>> } - Returns an array of resolved property values
   */
  async readMultiple(e, r) {
    if (!e || !e.length)
      throw new Error("Clipboard entry uniques are required");
    const i = (await Promise.allSettled(e.map((t) => this.read(t, r)))).filter((t) => t.status === "fulfilled" && t.value).map((t) => t.value).filter((t) => t);
    if (!i.length)
      throw new Error("Failed to read clipboard entries");
    return i;
  }
  /**
   * Write a clipboard entry for a property. The property value will be translated to the clipboard entry values
   * @param args - Arguments for writing a clipboard entry
   * @param {string} args.name - The name of the clipboard entry
   * @param {string} args.icon - The icon of the clipboard entry
   * @param {any} args.propertyValue - The property value to write
   * @param {string} args.propertyEditorUiAlias - The alias of the property editor to match
   * @returns { Promise<void> }
   */
  async write(e) {
    const r = await this.getContext(u);
    if (!r)
      throw new Error("Clipboard context is required");
    const s = await new y(this).resolve(e.propertyValue, e.propertyEditorUiAlias), a = {
      name: e.name,
      values: s,
      icon: e.icon
    }, i = await this.getContext(v);
    if (!i)
      throw new Error("Notification context is required");
    try {
      const t = await r.write(a);
      return i.peek("positive", {
        data: { message: this.#o.term("clipboard_copySuccessHeadline") }
      }), t;
    } catch (t) {
      const l = t instanceof Error ? t.message : String(t);
      i.peek("danger", { data: { message: l } });
    }
  }
  /**
   * Pick a clipboard entry for a property. The entry will be translated to the property editor value
   * @param args - Arguments for picking a clipboard entry
   * @param {boolean} args.multiple - Allow multiple clipboard entries to be picked
   * @param {string} args.propertyEditorUiAlias - The alias of the property editor to match
   * @param {() => Promise<boolean>} args.filter - A filter function to filter clipboard entries
   * @returns { Promise<{ selection: Array<UmbEntityUnique>; propertyValues: Array<any> }> }
   */
  async pick(e) {
    await this.#t;
    const r = this.getPasteTranslatorManifests(e.propertyEditorUiAlias), o = await this.#e(e.propertyEditorUiAlias), s = (await this.getContext(P))?.getConfig();
    if (!s)
      throw new Error("Property context is required");
    const a = new c(this), t = (await E(this, f, {
      data: {
        asyncFilter: async (n) => {
          if (!this.hasSupportedPasteTranslator(
            r,
            n.values
          ))
            return !1;
          const p = await a.getPasteTranslator(
            n.values,
            o.alias
          );
          if (p.isCompatibleValue) {
            const m = await a.resolve(
              n.values,
              o.alias
            );
            return p.isCompatibleValue(m, s, e.filter);
          }
          return !0;
        }
      }
    }))?.selection || [];
    if (!t.length)
      throw new Error("No clipboard entry selected");
    let l = [];
    if (e.multiple)
      throw new Error("Multiple clipboard entries not supported");
    {
      const n = t[0];
      if (!n)
        throw new Error("No clipboard entry selected");
      l = [await this.#r(n, o)];
    }
    return {
      selection: t,
      propertyValues: l
    };
  }
  async #e(e) {
    const r = d.getByAlias(e);
    if (!r)
      throw new Error(`Could not find property editor with alias: ${e}`);
    if (r.type !== "propertyEditorUi")
      throw new Error(`Alias ${e} is not a property editor ui`);
    return r;
  }
  async #r(e, r) {
    if (!e)
      throw new Error("Unique id is required");
    if (!r.alias)
      throw new Error("Property Editor UI alias is required");
    if (!r.meta.propertyEditorSchemaAlias)
      throw new Error("Property Editor UI Schema alias is required");
    const o = await this.getContext(u);
    if (!o)
      throw new Error("Clipboard context is required");
    const s = await o.read(e);
    if (!s)
      throw new Error(`Could not find clipboard entry with unique id: ${e}`);
    const i = await new c(this).resolve(s.values, r.alias);
    return (await new T(this).clone({
      editorAlias: r.meta.propertyEditorSchemaAlias,
      alias: r.alias,
      value: i
    })).value;
  }
  /**
   * Get all clipboard paste translators for a property editor ui
   * @param {string} propertyEditorUiAlias - The alias of the property editor to match
   * @returns {Array<ManifestClipboardPastePropertyValueTranslator>} - Returns an array of clipboard paste translators
   */
  getPasteTranslatorManifests(e) {
    return d.getByTypeAndFilter(
      "clipboardPastePropertyValueTranslator",
      (r) => r.toPropertyEditorUi === e
    );
  }
  /**
   * Check if the clipboard entry values has supported paste translator
   * @param {Array<ManifestClipboardPastePropertyValueTranslator>} manifests - The paste translator manifests
   * @param {UmbClipboardEntryValuesType} clipboardEntryValues - The clipboard entry values
   * @returns {boolean} - Returns true if the clipboard entry values has supported paste translator
   */
  hasSupportedPasteTranslator(e, r) {
    const o = r.map((a) => a.type);
    return e.filter((a) => o.includes(a.fromClipboardEntryValueType)).length > 0;
  }
}
export {
  k as UmbClipboardPropertyContext,
  k as api
};
//# sourceMappingURL=clipboard.property-context-CM7UAgst.js.map

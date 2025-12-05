import { UUIRefNodeElement as l } from "@umbraco-cms/backoffice/external/uui";
import { property as h, customElement as p, html as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
import { UmbDeprecation as c } from "@umbraco-cms/backoffice/utils";
import { UmbArrayState as d, simpleHashCode as U } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as E } from "@umbraco-cms/backoffice/class-api";
import { UMB_INTERACTION_MEMORY_CONTEXT as f } from "@umbraco-cms/backoffice/interaction-memory";
import { UmbModalToken as P } from "@umbraco-cms/backoffice/modal";
const g = "Umbraco.Label", w = "Umb.PropertyEditorUi.Missing", T = "Umb.PropertyEditorUi.MissingUi";
var v = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, m = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? _(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && v(e, t, s), s;
};
let o = class extends l {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>', this.alias = "", this.propertyEditorSchemaAlias = "";
  }
  renderDetail() {
    const i = [];
    return this.alias !== "" && i.push(this.alias), this.propertyEditorSchemaAlias !== "" ? i.push(this.propertyEditorSchemaAlias) : i.push(g), this.detail !== "" && i.push(this.detail), u`<small id="detail">${i.join(" | ")}<slot name="detail"></slot></small>`;
  }
};
o.styles = [...l.styles];
m([
  h({ type: String })
], o.prototype, "alias", 2);
m([
  h({ type: String, attribute: "property-editor-schema-alias" })
], o.prototype, "propertyEditorSchemaAlias", 2);
o = m([
  p("umb-ref-property-editor-ui")
], o);
class B extends Array {
  constructor(e) {
    super(...e);
  }
  static get [Symbol.species]() {
    return Array;
  }
  getValueByAlias(e) {
    const t = this.getByAlias(e);
    if (!(t?.value === void 0 || t?.value === null))
      return t.value;
  }
  getByAlias(e) {
    return this.find((t) => t.alias === e);
  }
  /**
   * Convert the underlying array to an object where
   * the property value is keyed by its alias
   * eg
   * `[
   *   { 'alias': 'myProperty', 'value': 27 },
   *   { 'alias': 'anotherProperty', 'value': 'eleven' },
   * ]`
   * is returned as
   * `{
   *   myProperty: 27,
   * 	 anotherProperty: 'eleven',
   * }`
   */
  toObject() {
    return Object.fromEntries(this.map((e) => [e.alias, e.value]));
  }
  equal(e) {
    return this.length !== e?.length ? !1 : this.every((t) => {
      const r = t.alias ? e.getByAlias(t.alias) : void 0;
      return r && t.value === r.value;
    });
  }
}
class D extends y {
  constructor() {
    super(), new c({
      removeInVersion: "18.0.0",
      deprecated: "UmbPropertyValueChangeEvent",
      solution: "Use UmbChangeEvent instead"
    }).warn();
  }
}
class q extends E {
  constructor(e, t) {
    super(e), this.#t = new d([], (r) => r.unique), this.memoriesForPropertyEditor = this.#t.asObservable(), this.#o = t.memoryUniquePrefix, this.#r = Promise.all([
      this.consumeContext(f, (r) => {
        this.#e = r;
      }).asPromise()
    ]);
  }
  #t;
  #e;
  #i;
  #o;
  #r;
  /**
   * Sets the property editor config, used to create a unique hash for the interaction memory.
   * @param {(UmbPropertyEditorConfigCollection | undefined)} config
   * @memberof UmbPropertyEditorUiInteractionMemoryManager
   */
  setPropertyEditorConfig(e) {
    this.#n(e), this.#a();
  }
  /**
   * Creates or updates an interaction memory for this property editor based on the provided memories.
   * @param {Array<UmbInteractionMemoryModel>} memories - The memories to include for this property editor.
   * @returns {Promise<void>}
   * @memberof UmbPropertyEditorUiInteractionMemoryManager
   */
  async saveMemoriesForPropertyEditor(e) {
    await this.#r;
    const t = this.#s();
    if (!this.#e) return;
    const r = {
      unique: t,
      memories: e
    };
    this.#e.memory.setMemory(r), this.#t.setValue(e);
  }
  /**
   * Deletes the interaction memory for this property editor.
   * @memberof UmbPropertyEditorUiInteractionMemoryManager
   */
  async deleteMemoriesForPropertyEditor() {
    await this.#r;
    const e = this.#s();
    this.#e?.memory.deleteMemory(e), this.#t.setValue([]);
  }
  #s() {
    return `${this.#o}PropertyEditorUi${this.#i ? "-" + this.#i : ""}`;
  }
  async #a() {
    await this.#r;
    const e = this.#s();
    if (!e || !this.#e) return;
    const t = this.#e.memory.getMemory(e);
    this.#t.setValue(t?.memories ?? []);
  }
  #n(e) {
    const t = e ? JSON.stringify(e.toObject()) : "", r = U(t);
    this.#i = r;
  }
}
const V = new P("Umb.Modal.PropertyEditorUiPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
export {
  w as UMB_MISSING_PROPERTY_EDITOR_UI_ALIAS,
  T as UMB_MISSING_PROPERTY_EDITOR_UI_UI_ALIAS,
  g as UMB_PROPERTY_EDITOR_SCHEMA_ALIAS_DEFAULT,
  V as UMB_PROPERTY_EDITOR_UI_PICKER_MODAL,
  B as UmbPropertyEditorConfigCollection,
  q as UmbPropertyEditorUiInteractionMemoryManager,
  D as UmbPropertyValueChangeEvent,
  o as UmbRefPropertyEditorUIElement
};
//# sourceMappingURL=index.js.map

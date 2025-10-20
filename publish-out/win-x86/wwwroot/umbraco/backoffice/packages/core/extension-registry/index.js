import { a as M, U as B } from "../switch.condition-BRc-UvRa.js";
import { UmbExtensionInitializerBase as p, loadManifestPlainJs as h, hasInitExport as c, hasOnUnloadExport as u, createExtensionApi as x, UmbExtensionElementAndApiInitializer as y } from "@umbraco-cms/backoffice/extension-api";
import { u as d } from "../registry-COJCa03J.js";
import { property as f, state as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
class P extends p {
  #t = /* @__PURE__ */ new Map();
  constructor(t, e) {
    super(t, e, "appEntryPoint");
  }
  async instantiateExtension(t) {
    if (t.js) {
      const e = await h(t.js);
      if (!e) return;
      this.#t.set(t.alias, e), c(e) && await e.onInit(this.host, this.extensionRegistry);
    }
  }
  async unloadExtension(t) {
    const e = this.#t.get(t.alias);
    e && (u(e) && e.onUnload(this.host, this.extensionRegistry), this.#t.delete(t.alias));
  }
}
class j extends p {
  #t = /* @__PURE__ */ new Map();
  constructor(t, e) {
    super(t, e, "backofficeEntryPoint");
  }
  async instantiateExtension(t) {
    if (t.js) {
      const e = await h(t.js);
      if (!e) return;
      this.#t.set(t.alias, e), c(e) && await e.onInit(this.host, this.extensionRegistry);
    }
  }
  async unloadExtension(t) {
    const e = this.#t.get(t.alias);
    e && (u(e) && e.onUnload(this.host, this.extensionRegistry), this.#t.delete(t.alias));
  }
}
class v extends p {
  #t = /* @__PURE__ */ new Map();
  constructor(t, e) {
    super(t, e, "entryPoint");
  }
  async instantiateExtension(t) {
    if (console.error("The `entryPoint` extension-type is deprecated, please use the `backofficeEntryPoint`."), t.js) {
      const e = await h(t.js);
      if (!e) return;
      this.#t.set(t.alias, e), c(e) && e.onInit(this.host, this.extensionRegistry);
    }
  }
  async unloadExtension(t) {
    const e = this.#t.get(t.alias);
    e && (u(e) && e.onUnload(this.host, this.extensionRegistry), this.#t.delete(t.alias));
  }
}
async function A(i, t, e) {
  const s = d.getByAlias(t);
  if (!s)
    throw new Error(`Failed to get manifest by alias: ${t}`);
  const n = await x(i, s, e);
  if (!n)
    throw new Error(`Failed to create extension api from alias: ${t}`);
  return n;
}
var g = Object.defineProperty, b = Object.getOwnPropertyDescriptor, o = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? b(t, e) : t, r = i.length - 1, l; r >= 0; r--)
    (l = i[r]) && (n = (s ? l(t, e, n) : l(n)) || n);
  return s && n && g(t, e, n), n;
};
class a extends E {
  get alias() {
    return this._alias;
  }
  set alias(t) {
    this._alias = t, this.#n();
  }
  set props(t) {
    this.#t = t, this.#e && (this.#e.elementProps = t);
  }
  get props() {
    return this.#t;
  }
  #t = {};
  #e;
  #n() {
    this._alias && (this.#e = new y(
      this,
      d,
      this._alias,
      [this],
      this.#i,
      this.getDefaultElementName()
    ), this.#e.elementProps = this.#t);
  }
  #i = (t, e) => {
    this.apiChanged(t ? e.api : void 0), this.elementChanged(t ? e.component : void 0);
  };
  /**
   * Called when the API is changed.
   * @protected
   * @param {(ManifestType['API_TYPE'] | undefined)} api
   * @memberof UmbExtensionElementAndApiSlotElementBase
   */
  apiChanged(t) {
    this._api = t;
  }
  /**
   * Called when the element is changed.
   * @protected
   * @param {(ManifestType['ELEMENT_TYPE'] | undefined)} element
   * @memberof UmbExtensionElementAndApiSlotElementBase
   */
  elementChanged(t) {
    this._element = t, this.requestUpdate("_element");
  }
  /**
   * Render the element.
   * @returns {*}
   * @memberof UmbExtensionElementAndApiSlotElementBase
   */
  render() {
    return this._element;
  }
  /**
   * Disable the Shadow DOM for this element. This is needed because this is a wrapper element and should not stop the event propagation.
   */
  createRenderRoot() {
    return this;
  }
}
o([
  f({ type: String, reflect: !0 })
], a.prototype, "alias", 1);
o([
  f({ type: Object, attribute: !1 })
], a.prototype, "props", 1);
o([
  m()
], a.prototype, "_api", 2);
o([
  m()
], a.prototype, "_element", 2);
export {
  P as UmbAppEntryPointExtensionInitializer,
  j as UmbBackofficeEntryPointExtensionInitializer,
  M as UmbConditionBase,
  v as UmbEntryPointExtensionInitializer,
  a as UmbExtensionElementAndApiSlotElementBase,
  B as UmbSwitchCondition,
  A as createExtensionApiByAlias,
  d as umbExtensionsRegistry
};
//# sourceMappingURL=index.js.map

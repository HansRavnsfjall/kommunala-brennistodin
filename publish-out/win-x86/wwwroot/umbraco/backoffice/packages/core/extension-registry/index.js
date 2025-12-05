import { a as M, U as B } from "../switch.condition-BRc-UvRa.js";
import { UmbExtensionInitializerBase as p, loadManifestPlainJs as h, hasInitExport as c, hasOnUnloadExport as m, createExtensionApi as x, UmbExtensionElementAndApiInitializer as E } from "@umbraco-cms/backoffice/extension-api";
import { u as f } from "../ref-manifest.element-U7BEJu6e.js";
import { U as z, a as S, b as D } from "../ref-manifest.element-U7BEJu6e.js";
import { property as u, state as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
class _ extends p {
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
    e && (m(e) && e.onUnload(this.host, this.extensionRegistry), this.#t.delete(t.alias));
  }
}
class A extends p {
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
    e && (m(e) && e.onUnload(this.host, this.extensionRegistry), this.#t.delete(t.alias));
  }
}
class R extends p {
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
    e && (m(e) && e.onUnload(this.host, this.extensionRegistry), this.#t.delete(t.alias));
  }
}
async function j(i, t, e) {
  const s = f.getByAlias(t);
  if (!s)
    throw new Error(`Failed to get manifest by alias: ${t}`);
  const n = await x(i, s, e);
  if (!n)
    throw new Error(`Failed to create extension api from alias: ${t}`);
  return n;
}
var b = Object.defineProperty, g = Object.getOwnPropertyDescriptor, o = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? g(t, e) : t, r = i.length - 1, l; r >= 0; r--)
    (l = i[r]) && (n = (s ? l(t, e, n) : l(n)) || n);
  return s && n && b(t, e, n), n;
};
class a extends y {
  get alias() {
    return this.#t;
  }
  set alias(t) {
    this.#t = t, this.#i();
  }
  #t;
  set props(t) {
    this.#n = t, this.#e && (this.#e.elementProps = t);
  }
  get props() {
    return this.#n;
  }
  #n = {};
  #e;
  #i() {
    this.alias && (this.#e = new E(
      this,
      f,
      this.alias,
      [this],
      this.#s,
      this.getDefaultElementName()
    ), this.#e.elementProps = this.props);
  }
  #s = (t, e) => {
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
  u({ type: String, reflect: !0 })
], a.prototype, "alias", 1);
o([
  u({ type: Object, attribute: !1 })
], a.prototype, "props", 1);
o([
  d()
], a.prototype, "_api", 2);
o([
  d()
], a.prototype, "_element", 2);
export {
  _ as UmbAppEntryPointExtensionInitializer,
  A as UmbBackofficeEntryPointExtensionInitializer,
  M as UmbConditionBase,
  R as UmbEntryPointExtensionInitializer,
  a as UmbExtensionElementAndApiSlotElementBase,
  z as UmbExtensionSlotElement,
  S as UmbExtensionWithApiSlotElement,
  D as UmbRefManifestElement,
  B as UmbSwitchCondition,
  j as createExtensionApiByAlias,
  f as umbExtensionsRegistry
};
//# sourceMappingURL=index.js.map

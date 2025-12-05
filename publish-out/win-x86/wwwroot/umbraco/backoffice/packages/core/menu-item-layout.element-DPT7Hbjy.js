import { UmbContextToken as A } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as X, UmbContextBase as P } from "@umbraco-cms/backoffice/class-api";
import { createObservablePart as z } from "@umbraco-cms/backoffice/observable-api";
import { UmbEntityExpansionManager as S, debounce as q } from "@umbraco-cms/backoffice/utils";
import { property as h, state as D, customElement as y, html as f, ifDefined as $, when as F } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UMB_SECTION_CONTEXT as J } from "@umbraco-cms/backoffice/section";
import { ensureSlash as w } from "@umbraco-cms/backoffice/router";
const N = new A("UmbMenuContext");
class K extends X {
  constructor(e) {
    super(e), this.#e = new S(this), this.expansion = this.#e.expansion, this.consumeContext(N, (s) => {
      this.#t = s, this.#i();
    });
  }
  #e;
  #s;
  #t;
  #n;
  #i() {
    if (!this.#t || !this.#s) {
      this.#n?.destroy();
      return;
    }
    this.#n = this.observe(
      z(
        this.#t.expansion.expansion,
        (e) => e?.filter((s) => s.menuItemAlias === this.#s) || []
      ),
      (e) => {
        this.#e.setExpansion(e);
      },
      "observeMenuExpension"
    );
  }
  setMenuItemAlias(e) {
    this.#s = e, this.#i();
  }
  /**
   * Checks if an entry is expanded
   * @param {UmbMenuItemExpansionEntryModel} entry The entry to check
   * @returns {Observable<boolean>} True if the entry is expanded
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   */
  isExpanded(e) {
    return this.#e.isExpanded(e);
  }
  /**
   * Sets the expansion state
   * @param {UmbEntityExpansionModel<UmbMenuItemExpansionEntryModel> | undefined} expansion The expansion state
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {void}
   */
  setExpansion(e) {
    this.#e.setExpansion(e), this.#t?.expansion.setExpansion(e);
  }
  /**
   * Gets the expansion state
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {UmbEntityExpansionModel<UmbMenuItemExpansionEntryModel>} The expansion state
   */
  getExpansion() {
    return this.#e.getExpansion();
  }
  /**
   * Opens a menu item
   * @param {UmbMenuItemExpansionEntryModel} entry The item to open
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {Promise<void>}
   */
  async expandItem(e) {
    this.#e.expandItem(e), this.#t?.expansion.expandItem(e);
  }
  /**
   * Expands multiple entities
   * @param {UmbEntityExpansionModel<UmbMenuItemExpansionEntryModel>} entries The entities to open
   * @memberof UmbEntityExpansionManager
   * @returns {void}
   */
  expandItems(e) {
    this.#e.expandItems(e), this.#t?.expansion.expandItems(e);
  }
  /**
   * Closes a menu item
   * @param {UmbMenuItemExpansionEntryModel} entry The item to close
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {Promise<void>}
   */
  async collapseItem(e) {
    this.#e.collapseItem(e), this.#t?.expansion.collapseItem(e);
  }
  /**
   * Closes all menu items
   * @memberof UmbSectionSidebarMenuSectionExpansionManager
   * @returns {Promise<void>}
   */
  async collapseAll() {
    const e = this.#e.getExpansion();
    this.#e.collapseAll(), this.#t?.expansion.collapseItems(e);
  }
}
const Q = new A("UmbMenuItemContext");
class R extends P {
  constructor(e) {
    super(e, Q), this.expansion = new K(this);
  }
  #e;
  get manifest() {
    return this.#e;
  }
  set manifest(e) {
    this.#e = e, this.expansion.setMenuItemAlias(e?.alias);
  }
}
class V extends P {
  constructor(e) {
    super(e, N), this.expansion = new S(this);
  }
}
var Y = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, W = (t) => {
  throw TypeError(t);
}, E = (t, e, s, i) => {
  for (var n = i > 1 ? void 0 : i ? Z(e, s) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = (i ? r(e, s, n) : r(n)) || n);
  return i && n && Y(e, s, n), n;
}, C = (t, e, s) => e.has(t) || W("Cannot " + s), g = (t, e, s) => (C(t, e, "read from private field"), e.get(t)), I = (t, e, s) => e.has(t) ? W("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), j = (t, e, s, i) => (C(t, e, "write to private field"), e.set(t, s), s), M = (t, e, s) => (C(t, e, "access private method"), s), l, m, _;
let d = class extends b {
  constructor() {
    super(), I(this, m), I(this, l), this.consumeContext(J, (t) => {
      this.observe(
        t?.pathname,
        (e) => {
          j(this, l, e), M(this, m, _).call(this);
        },
        "observePathname"
      );
    });
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(t) {
    this._manifest = t, M(this, m, _).call(this);
  }
  render() {
    return f`
			<umb-menu-item-layout
				.href=${this._href}
				.iconName=${this.manifest.meta.icon ?? ""}
				.label=${this.localize.string(this.manifest.meta.label ?? this.manifest.name)}
				.entityType=${this.manifest.meta.entityType}>
			</umb-menu-item-layout>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
_ = function() {
  !g(this, l) || !this.manifest || (this._href = `section/${g(this, l)}/workspace/${this.manifest.meta.entityType}`);
};
E([
  h({ type: Object, attribute: !1 })
], d.prototype, "_manifest", 2);
E([
  D()
], d.prototype, "_href", 2);
d = E([
  y("umb-menu-item-default")
], d);
var ee = Object.defineProperty, te = Object.getOwnPropertyDescriptor, B = (t) => {
  throw TypeError(t);
}, L = (t, e, s, i) => {
  for (var n = i > 1 ? void 0 : i ? te(e, s) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = (i ? r(e, s, n) : r(n)) || n);
  return i && n && ee(e, s, n), n;
}, se = (t, e, s) => e.has(t) || B("Cannot " + s), U = (t, e, s) => (se(t, e, "read from private field"), s ? s.call(t) : e.get(t)), ne = (t, e, s) => e.has(t) ? B("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), c;
let v = class extends b {
  constructor() {
    super(...arguments), ne(this, c, new V(this));
  }
  get expansion() {
    return U(this, c).expansion.getExpansion();
  }
  set expansion(t) {
    U(this, c).expansion.setExpansion(t);
  }
  render() {
    return f`
			<umb-extension-with-api-slot
				type="menuItem"
				default-element="umb-menu-item-default"
				.defaultApi=${R}
				.filter=${(t) => t.meta.menus.includes(this.manifest.alias)}>
			</umb-extension-with-api-slot>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
L([
  h({ attribute: !1 })
], v.prototype, "manifest", 2);
v = L([
  y("umb-menu")
], v);
var ie = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, k = (t) => {
  throw TypeError(t);
}, p = (t, e, s, i) => {
  for (var n = i > 1 ? void 0 : i ? ae(e, s) : e, a = t.length - 1, r; a >= 0; a--)
    (r = t[a]) && (n = (i ? r(e, s, n) : r(n)) || n);
  return i && n && ie(e, s, n), n;
}, G = (t, e, s) => e.has(t) || k("Cannot " + s), T = (t, e, s) => (G(t, e, "read from private field"), e.get(t)), O = (t, e, s) => e.has(t) ? k("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), re = (t, e, s) => (G(t, e, "access private method"), s), u, x, H;
let o = class extends b {
  constructor() {
    super(...arguments), O(this, x), this.iconName = "", this.label = "", this.hasChildren = !1, this._isActive = !1, O(this, u, q(() => re(this, x, H).call(this), 100));
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("navigationend", T(this, u));
  }
  render() {
    return f`
			<uui-menu-item
				label=${this.label}
				href=${$(this.href)}
				target=${$(this.href && this.target ? this.target : void 0)}
				.caretLabel=${this.localize.term("visuallyHiddenTexts_expandChildItems") + " " + this.label}
				?active=${this._isActive}
				?has-children=${this.hasChildren}>
				<umb-icon slot="icon" name=${this.iconName}></umb-icon>
				${F(
      this.entityType,
      () => f`
						<umb-entity-actions-bundle
							slot="actions"
							.entityType=${this.entityType}
							.unique=${null}
							.label=${this.label}></umb-entity-actions-bundle>
					`
    )}
				<slot></slot>
			</uui-menu-item>
		`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("navigationend", T(this, u));
  }
};
u = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakSet();
H = function() {
  if (!this.href) {
    this._isActive = !1;
    return;
  }
  const t = w(window.location.pathname), e = w(this.href);
  this._isActive = t.includes(e);
};
p([
  h({ type: String, attribute: "entity-type" })
], o.prototype, "entityType", 2);
p([
  h({ type: String, attribute: "icon-name" })
], o.prototype, "iconName", 2);
p([
  h({ type: String })
], o.prototype, "label", 2);
p([
  h({ type: Boolean, attribute: "has-children" })
], o.prototype, "hasChildren", 2);
p([
  h({ type: String })
], o.prototype, "href", 2);
p([
  h({ type: String })
], o.prototype, "target", 2);
p([
  D()
], o.prototype, "_isActive", 2);
o = p([
  y("umb-menu-item-layout")
], o);
export {
  v as U,
  N as a,
  d as b,
  Q as c,
  o as d
};
//# sourceMappingURL=menu-item-layout.element-DPT7Hbjy.js.map

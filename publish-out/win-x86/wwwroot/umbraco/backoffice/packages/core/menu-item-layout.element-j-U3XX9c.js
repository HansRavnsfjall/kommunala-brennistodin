import { property as l, state as A, customElement as y, html as u, ifDefined as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
import { UMB_SECTION_CONTEXT as L } from "@umbraco-cms/backoffice/section";
import { ensureSlash as g } from "@umbraco-cms/backoffice/router";
import { debounce as N } from "@umbraco-cms/backoffice/utils";
var W = Object.defineProperty, z = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, $ = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? z(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
  return n && a && W(t, i, a), a;
}, w = (e, t, i) => t.has(e) || M("Cannot " + i), E = (e, t, i) => (w(e, t, "read from private field"), t.get(e)), O = (e, t, i) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), H = (e, t, i, n) => (w(e, t, "write to private field"), t.set(e, i), i), P = (e, t, i) => (w(e, t, "access private method"), i), c, m, _;
let f = class extends b {
  constructor() {
    super(), O(this, m), O(this, c), this.consumeContext(L, (e) => {
      this.observe(
        e?.pathname,
        (t) => {
          H(this, c, t), P(this, m, _).call(this);
        },
        "observePathname"
      );
    });
  }
  get manifest() {
    return this._manifest;
  }
  set manifest(e) {
    this._manifest = e, P(this, m, _).call(this);
  }
  render() {
    return u`
			<umb-menu-item-layout
				.href=${this._href}
				.iconName=${this.manifest.meta.icon ?? ""}
				.label=${this.localize.string(this.manifest.meta.label ?? this.manifest.name)}
				.entityType=${this.manifest.meta.entityType}>
			</umb-menu-item-layout>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
_ = function() {
  !E(this, c) || !this.manifest || (this._href = `section/${E(this, c)}/workspace/${this.manifest.meta.entityType}`);
};
$([
  l({ type: Object, attribute: !1 })
], f.prototype, "_manifest", 2);
$([
  A()
], f.prototype, "_href", 2);
f = $([
  y("umb-menu-item-default")
], f);
var B = Object.defineProperty, G = Object.getOwnPropertyDescriptor, x = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? G(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
  return n && a && B(t, i, a), a;
};
let v = class extends b {
  render() {
    return u`
			<umb-extension-slot
				type="menuItem"
				default-element="umb-menu-item-default"
				.filter=${(e) => e.meta.menus.includes(this.manifest.alias)}>
			</umb-extension-slot>
		`;
  }
};
x([
  l({ attribute: !1 })
], v.prototype, "manifest", 2);
v = x([
  y("umb-menu")
], v);
var q = Object.defineProperty, F = Object.getOwnPropertyDescriptor, D = (e) => {
  throw TypeError(e);
}, h = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? F(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
  return n && a && q(t, i, a), a;
}, I = (e, t, i) => t.has(e) || D("Cannot " + i), T = (e, t, i) => (I(e, t, "read from private field"), t.get(e)), S = (e, t, i) => t.has(e) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), X = (e, t, i) => (I(e, t, "access private method"), i), p, d, U;
let o = class extends b {
  constructor() {
    super(...arguments), S(this, d), this.iconName = "", this.label = "", this.hasChildren = !1, this._isActive = !1, S(this, p, N(() => X(this, d, U).call(this), 100));
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("navigationend", T(this, p));
  }
  render() {
    return u`<uui-menu-item
			href="${C(this.href)}"
			label=${this.label}
			.caretLabel=${this.localize.term("visuallyHiddenTexts_expandChildItems") + " " + this.label}
			?active=${this._isActive}
			?has-children=${this.hasChildren}
			target=${C(this.href && this.target ? this.target : void 0)}>
			<umb-icon slot="icon" name=${this.iconName}></umb-icon>
			${this.entityType ? u`<umb-entity-actions-bundle
						slot="actions"
						.entityType=${this.entityType}
						.unique=${null}
						.label=${this.localize.term("actions_viewActionsFor", [this.label])}>
					</umb-entity-actions-bundle>` : ""}
			<slot></slot>
		</uui-menu-item>`;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("navigationend", T(this, p));
  }
};
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
U = function() {
  if (!this.href) {
    this._isActive = !1;
    return;
  }
  const e = g(window.location.pathname), t = g(this.href);
  this._isActive = e.includes(t);
};
h([
  l({ type: String, attribute: "entity-type" })
], o.prototype, "entityType", 2);
h([
  l({ type: String, attribute: "icon-name" })
], o.prototype, "iconName", 2);
h([
  l({ type: String })
], o.prototype, "label", 2);
h([
  l({ type: Boolean, attribute: "has-children" })
], o.prototype, "hasChildren", 2);
h([
  l({ type: String })
], o.prototype, "href", 2);
h([
  l({ type: String })
], o.prototype, "target", 2);
h([
  A()
], o.prototype, "_isActive", 2);
o = h([
  y("umb-menu-item-layout")
], o);
export {
  v as U,
  f as a,
  o as b
};
//# sourceMappingURL=menu-item-layout.element-j-U3XX9c.js.map

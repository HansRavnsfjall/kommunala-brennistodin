import { html as c, property as p, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, b = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, h = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? b(t, r) : t, s = e.length - 1, m; s >= 0; s--)
    (m = e[s]) && (a = (n ? m(t, r, a) : m(a)) || a);
  return n && a && v(t, r, a), a;
}, d = (e, t, r) => t.has(e) || l("Cannot " + r), y = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r) => (d(e, t, "access private method"), r), i, f;
const g = "umb-link-menu-item";
let o = class extends _ {
  constructor() {
    super(...arguments), y(this, i);
  }
  render() {
    return c`
			<umb-menu-item-layout
				.href=${this.manifest?.meta.href}
				target=${E(this, i, f).call(this)}
				.iconName=${this.manifest?.meta.icon ?? ""}
				.label=${this.localize.string(this.manifest?.meta.label ?? this.manifest?.name ?? "")}>
			</umb-menu-item-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
f = function() {
  const e = this.manifest?.meta.href;
  return e && e.startsWith("http") ? "_blank" : "_self";
};
h([
  p({ type: Object, attribute: !1 })
], o.prototype, "manifest", 2);
o = h([
  u(g)
], o);
export {
  o as UmbLinkMenuItemElement,
  o as element
};
//# sourceMappingURL=link-menu-item.element-spes6dfY.js.map

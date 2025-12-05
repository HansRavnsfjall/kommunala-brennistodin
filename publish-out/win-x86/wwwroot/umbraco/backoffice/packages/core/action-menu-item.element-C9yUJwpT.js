import { ifDefined as v, when as b, html as l, property as u, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
var y = Object.defineProperty, C = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, m = (e, t, n, a) => {
  for (var r = a > 1 ? void 0 : a ? C(t, n) : t, s = e.length - 1, c; s >= 0; s--)
    (c = e[s]) && (r = (a ? c(t, n, r) : c(r)) || r);
  return a && r && y(t, n, r), r;
}, P = (e, t, n) => t.has(e) || f("Cannot " + n), w = (e, t, n) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), p = (e, t, n) => (P(e, t, "access private method"), n), i, h, _;
let o = class extends E {
  constructor() {
    super(...arguments), w(this, i);
  }
  render() {
    const e = this.localize.string(this.manifest?.meta.label ?? this.manifest?.name);
    return l`
			<uui-menu-item label=${v(e)} @click-label=${p(this, i, h)} @click=${p(this, i, _)}>
				${b(this.manifest?.meta.icon, (t) => l`<umb-icon slot="icon" name=${t}></umb-icon>`)}
			</uui-menu-item>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
h = function(e) {
  e.stopPropagation();
  try {
    this.api?.execute();
  } catch (t) {
    console.error("Error menu item action:", t);
  }
};
_ = function(e) {
  e.stopPropagation();
};
m([
  u({ attribute: !1 })
], o.prototype, "api", 2);
m([
  u({ attribute: !1 })
], o.prototype, "manifest", 2);
o = m([
  d("umb-action-menu-item")
], o);
export {
  o as default
};
//# sourceMappingURL=action-menu-item.element-C9yUJwpT.js.map

import { UmbActionExecutedEvent as b } from "@umbraco-cms/backoffice/event";
import { ifDefined as f, nothing as g, html as l, state as k, property as $, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var P = Object.defineProperty, W = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, p = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? W(e, i) : e, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (a = (n ? m(e, i, a) : m(a)) || a);
  return n && a && P(e, i, a), a;
}, h = (t, e, i) => e.has(t) || v("Cannot " + i), d = (t, e, i) => (h(t, e, "read from private field"), e.get(t)), _ = (t, e, i) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), A = (t, e, i, n) => (h(t, e, "write to private field"), e.set(t, i), i), u = (t, e, i) => (h(t, e, "access private method"), i), r, o, E, w;
let s = class extends C {
  constructor() {
    super(...arguments), _(this, o), _(this, r);
  }
  set api(t) {
    A(this, r, t), d(this, r)?.getHref?.().then((e) => {
      this._href = e;
    });
  }
  render() {
    return l`
			<uui-menu-item
				label=${f(
      this.manifest?.meta.label ? this.localize.string(this.manifest.meta.label) : this.manifest?.name
    )}
				href=${f(this._href)}
				@click-label=${u(this, o, E)}
				@click=${u(this, o, w)}>
				${this.manifest?.meta.icon ? l`<umb-icon slot="icon" name="${this.manifest?.meta.icon}"></umb-icon>` : g}
			</uui-menu-item>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
E = async function(t) {
  this._href || (t.stopPropagation(), await d(this, r)?.execute().catch(() => {
  })), this.dispatchEvent(new b());
};
w = function(t) {
  t.stopPropagation();
};
p([
  k()
], s.prototype, "_href", 2);
p([
  $({ attribute: !1 })
], s.prototype, "manifest", 2);
s = p([
  y("umb-workspace-action-menu-item")
], s);
const O = s;
export {
  s as UmbWorkspaceActionMenuItemElement,
  O as default
};
//# sourceMappingURL=workspace-action-menu-item.element-DROzaxYE.js.map

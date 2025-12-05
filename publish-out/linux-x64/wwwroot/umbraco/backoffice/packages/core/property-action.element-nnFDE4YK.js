import { UmbActionExecutedEvent as E } from "@umbraco-cms/backoffice/event";
import { ifDefined as w, when as P, html as l, state as b, property as g, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var A = Object.defineProperty, U = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, h = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? U(e, r) : e, c = t.length - 1, p; c >= 0; c--)
    (p = t[c]) && (i = (a ? p(e, r, i) : p(i)) || i);
  return a && i && A(e, r, i), i;
}, f = (t, e, r) => e.has(t) || v("Cannot " + r), u = (t, e, r) => (f(t, e, "read from private field"), e.get(t)), m = (t, e, r) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), x = (t, e, r, a) => (f(t, e, "write to private field"), e.set(t, r), r), _ = (t, e, r) => (f(t, e, "access private method"), r), n, o, d, y;
let s = class extends C {
  constructor() {
    super(...arguments), m(this, o), m(this, n);
  }
  set api(t) {
    x(this, n, t), u(this, n)?.getHref?.().then((e) => {
      this._href = e;
    });
  }
  render() {
    return l`
			<uui-menu-item
				label=${this.localize.string(this.manifest?.meta.label)}
				href=${w(this._href)}
				@click-label=${_(this, o, d)}
				@click=${_(this, o, y)}>
				${P(this.manifest?.meta.icon, (t) => l`<umb-icon slot="icon" name=${t}></umb-icon>`)}
			</uui-menu-item>
		`;
  }
};
n = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
d = async function(t) {
  this._href || (t.stopPropagation(), await u(this, n)?.execute().catch(() => {
  })), this.dispatchEvent(new E());
};
y = function(t) {
  t.stopPropagation();
};
h([
  b()
], s.prototype, "_href", 2);
h([
  g({ attribute: !1 })
], s.prototype, "manifest", 2);
s = h([
  $("umb-property-action")
], s);
const S = s;
export {
  s as UmbPropertyActionElement,
  S as default
};
//# sourceMappingURL=property-action.element-nnFDE4YK.js.map

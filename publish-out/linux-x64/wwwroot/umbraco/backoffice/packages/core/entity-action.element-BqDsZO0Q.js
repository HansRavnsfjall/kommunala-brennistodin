import { UmbActionExecutedEvent as b } from "@umbraco-cms/backoffice/event";
import { nothing as l, ifDefined as u, html as _, property as h, state as $, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, o = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? S(e, i) : e, p = t.length - 1, f; p >= 0; p--)
    (f = t[p]) && (a = (r ? f(e, i, a) : f(a)) || a);
  return r && a && P(e, i, a), a;
}, m = (t, e, i) => e.has(t) || y("Cannot " + i), E = (t, e, i) => (m(t, e, "read from private field"), e.get(t)), v = (t, e, i) => e.has(t) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), x = (t, e, i, r) => (m(t, e, "write to private field"), e.set(t, i), i), d = (t, e, i) => (m(t, e, "access private method"), i), s, c, g, w;
let n = class extends D {
  constructor() {
    super(...arguments), v(this, c), v(this, s);
  }
  set api(t) {
    x(this, s, t), E(this, s)?.getHref?.().then((e) => {
      this._href = e;
    });
  }
  async focus() {
    await this.updateComplete, this.shadowRoot?.querySelector("uui-menu-item")?.focus();
  }
  render() {
    if (!this.manifest) return l;
    const t = this.manifest.meta.label ? this.localize.string(this.manifest.meta.label) : this.manifest.name;
    return _`
			<uui-menu-item
				data-mark=${"entity-action:" + this.manifest?.alias}
				label=${u(this.manifest?.meta.additionalOptions ? t + "…" : t)}
				href=${u(this._href)}
				@click-label=${d(this, c, g)}
				@click=${d(this, c, w)}>
				${this.manifest.meta.icon ? _`<umb-icon slot="icon" name="${this.manifest.meta.icon}"></umb-icon>` : l}
			</uui-menu-item>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
g = async function(t) {
  if (!this._href) {
    t.stopPropagation();
    try {
      await E(this, s)?.execute(), this.dispatchEvent(new b());
    } catch (e) {
      console.error("Error executing action:", e);
    }
  }
};
w = function(t) {
  t.stopPropagation();
};
o([
  h({ type: String })
], n.prototype, "entityType", 2);
o([
  h({ type: String })
], n.prototype, "unique", 2);
o([
  h({ attribute: !1 })
], n.prototype, "manifest", 2);
o([
  $()
], n.prototype, "_href", 2);
n = o([
  C("umb-entity-action")
], n);
const k = n;
export {
  n as UmbEntityActionDefaultElement,
  k as default
};
//# sourceMappingURL=entity-action.element-BqDsZO0Q.js.map

import { property as f, customElement as h, when as v, html as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbActionExecutedEvent as _ } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
var E = Object.defineProperty, y = Object.getOwnPropertyDescriptor, l = (t) => {
  throw TypeError(t);
}, m = (t, e, n, i) => {
  for (var a = i > 1 ? void 0 : i ? y(e, n) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (i ? s(e, n, a) : s(a)) || a);
  return i && a && E(e, n, a), a;
}, b = (t, e, n) => e.has(t) || l("Cannot " + n), w = (t, e, n) => e.has(t) ? l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), k = (t, e, n) => (b(t, e, "access private method"), n), c, p;
const A = "umb-entity-bulk-action";
let r = class extends d {
  constructor() {
    super(...arguments), w(this, c);
  }
  render() {
    return u`
			<uui-button color="default" look="secondary" @click=${k(this, c, p)}>
				${v(this.manifest?.meta.icon, () => u`<uui-icon name=${this.manifest.meta.icon}></uui-icon>`)}
				<span>${this.localize.string(this.manifest?.meta.label ?? "")}</span>
			</uui-button>
		`;
  }
};
c = /* @__PURE__ */ new WeakSet();
p = async function(t) {
  this.api && (t.stopPropagation(), await this.api.execute().catch(() => {
  }), this.dispatchEvent(new _()));
};
m([
  f({ attribute: !1 })
], r.prototype, "manifest", 2);
r = m([
  h(A)
], r);
const U = r;
export {
  r as UmbEntityBulkActionDefaultElement,
  U as default
};
//# sourceMappingURL=entity-bulk-action.element-JdpXPV4A.js.map

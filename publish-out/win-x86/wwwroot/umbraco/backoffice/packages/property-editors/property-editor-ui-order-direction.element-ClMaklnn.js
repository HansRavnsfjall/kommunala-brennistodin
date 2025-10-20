import { html as v, css as m, property as d, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as f } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
var E = Object.defineProperty, g = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, p = (e, r, t, i) => {
  for (var a = i > 1 ? void 0 : i ? g(r, t) : r, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (a = (i ? s(r, t, a) : s(a)) || a);
  return i && a && E(r, t, a), a;
}, U = (e, r, t) => r.has(e) || l("Cannot " + t), b = (e, r, t) => r.has(e) ? l("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), O = (e, r, t) => (U(e, r, "access private method"), t), u, c;
let o = class extends _ {
  constructor() {
    super(...arguments), b(this, u), this.value = "asc";
  }
  render() {
    return v`<uui-radio-group @input=${O(this, u, c)} value=${this.value}>
			<uui-radio name="order" label="Ascending [a-z]" value="asc"></uui-radio>
			<uui-radio name="order" label="Descending [z-a]" value="desc"></uui-radio>
		</uui-radio-group>`;
  }
};
u = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = e.target.value, this.dispatchEvent(new y());
};
o.styles = [
  f,
  m`
			uui-radio-group {
				display: flex;
				flex-direction: row;
				gap: var(--uui-size-6);
			}
		`
];
p([
  d()
], o.prototype, "value", 2);
p([
  d({ attribute: !1 })
], o.prototype, "config", 2);
o = p([
  h("umb-property-editor-ui-order-direction")
], o);
const C = o;
export {
  o as UmbPropertyEditorUIOrderDirectionElement,
  C as default
};
//# sourceMappingURL=property-editor-ui-order-direction.element-ClMaklnn.js.map

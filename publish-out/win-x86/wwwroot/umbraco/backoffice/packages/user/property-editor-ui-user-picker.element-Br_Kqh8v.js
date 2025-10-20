import { UmbChangeEvent as h } from "@umbraco-cms/backoffice/event";
import { html as l, property as c, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, u = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? E(t, r) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (a = (s ? i(t, r, a) : i(a)) || a);
  return s && a && f(t, r, a), a;
}, U = (e, t, r) => t.has(e) || m("Cannot " + r), P = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r) => (U(e, t, "access private method"), r), p, v;
let n = class extends d {
  constructor() {
    super(...arguments), P(this, p), this.value = "";
  }
  render() {
    return l`
			<umb-user-input min="0" max="1" .value=${this.value ?? ""} @change=${y(this, p, v)}></umb-user-input>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
v = function(e) {
  this.value = e.target.value, this.dispatchEvent(new h());
};
u([
  c()
], n.prototype, "value", 2);
u([
  c({ attribute: !1 })
], n.prototype, "config", 2);
n = u([
  _("umb-property-editor-ui-user-picker")
], n);
const w = n;
export {
  n as UmbPropertyEditorUIUserPickerElement,
  w as default
};
//# sourceMappingURL=property-editor-ui-user-picker.element-Br_Kqh8v.js.map

import { html as v, property as l, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
var f = Object.defineProperty, y = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, p = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? y(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (a = (n ? i(t, r, a) : i(a)) || a);
  return n && a && f(t, r, a), a;
}, b = (e, t, r) => t.has(e) || c("Cannot " + r), E = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r) => (b(e, t, "access private method"), r), m, u;
let o = class extends d {
  constructor() {
    super(...arguments), E(this, m), this.readonly = !1;
  }
  render() {
    return v`<umb-input-member
			min="0"
			max="1"
			.value=${this.value}
			@change=${P(this, m, u)}
			?readonly=${this.readonly}></umb-input-member>`;
  }
};
m = /* @__PURE__ */ new WeakSet();
u = function(e) {
  this.value = e.target.value, this.dispatchEvent(new _());
};
p([
  l()
], o.prototype, "value", 2);
p([
  l({ attribute: !1 })
], o.prototype, "config", 2);
p([
  l({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
o = p([
  h("umb-property-editor-ui-member-picker")
], o);
const w = o;
export {
  o as UmbPropertyEditorUIMemberPickerElement,
  w as default
};
//# sourceMappingURL=property-editor-ui-member-picker.element-D_6Cugez.js.map

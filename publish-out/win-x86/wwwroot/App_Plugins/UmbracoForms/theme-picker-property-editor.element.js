import { html as v, property as l, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, d = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, h = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? d(e, r) : e, n = t.length - 1, p; n >= 0; n--)
    (p = t[n]) && (a = (o ? p(e, r, a) : p(a)) || a);
  return o && a && f(e, r, a), a;
}, P = (t, e, r) => e.has(t) || m("Cannot " + r), y = (t, e, r) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), E = (t, e, r) => (P(t, e, "access private method"), r), i, c;
const g = "forms-theme-picker-property-editor";
let s = class extends _ {
  constructor() {
    super(...arguments), y(this, i), this.value = "";
  }
  render() {
    return v`<forms-input-theme
      @change=${E(this, i, c)}
      .value=${this.value}
      slot="editor"
    ></forms-input-theme>`;
  }
};
i = /* @__PURE__ */ new WeakSet();
c = function(t) {
  const e = t.target;
  this.value = e.value, this.dispatchEvent(new CustomEvent("property-value-change"));
};
h([
  l()
], s.prototype, "value", 2);
s = h([
  u(g)
], s);
const O = s;
export {
  s as FormsThemePickerPropertyUiElement,
  O as default
};
//# sourceMappingURL=theme-picker-property-editor.element.js.map

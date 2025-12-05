import { F as h } from "./form-picker-base.element.js";
import { html as v, property as d, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as u } from "@umbraco-cms/backoffice/utils";
var _ = Object.defineProperty, P = Object.getOwnPropertyDescriptor, p = (r) => {
  throw TypeError(r);
}, c = (r, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? P(e, t) : e, l = r.length - 1, n; l >= 0; l--)
    (n = r[l]) && (o = (s ? n(e, t, o) : n(o)) || o);
  return s && o && _(e, t, o), o;
}, F = (r, e, t) => e.has(r) || p("Cannot " + t), g = (r, e, t) => e.has(r) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), w = (r, e, t) => (F(r, e, "access private method"), t), i, m;
const y = "forms-form-picker-single-property-editor";
let a = class extends h {
  constructor() {
    super(), g(this, i), this.value = "", this.allowMultiple = !1;
  }
  render() {
    return v`<forms-input-form
      .selection=${u(this.value)}
      .multiple=${this.allowMultiple}
      .allowedFolders=${this.allowedFolders}
      .allowedForms=${this.allowedForms}
      @change=${w(this, i, m)}
      slot="editor"
    ></forms-input-form>`;
  }
};
i = /* @__PURE__ */ new WeakSet();
m = function(r) {
  const e = r.target;
  this.value = e.selection.length > 0 ? e.selection[0] : "", this.dispatchEvent(new CustomEvent("property-value-change"));
};
c([
  d({ type: String })
], a.prototype, "value", 2);
a = c([
  f(y)
], a);
const C = a;
export {
  a as FormsFormPickerSinglePropertyPickerElement,
  C as default
};
//# sourceMappingURL=form-picker-single-property-editor.element.js.map

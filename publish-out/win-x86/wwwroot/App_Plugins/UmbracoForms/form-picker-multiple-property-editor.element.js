import { F as h } from "./form-picker-base.element.js";
import { html as u, property as v, customElement as d } from "@umbraco-cms/backoffice/external/lit";
var f = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, p = (r) => {
  throw TypeError(r);
}, c = (r, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? _(e, t) : e, a = r.length - 1, i; a >= 0; a--)
    (i = r[a]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && f(e, t, o), o;
}, P = (r, e, t) => e.has(r) || p("Cannot " + t), F = (r, e, t) => e.has(r) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), w = (r, e, t) => (P(r, e, "access private method"), t), n, m;
const y = "forms-form-picker-multiple-property-editor";
let l = class extends h {
  constructor() {
    super(), F(this, n), this.value = [], this.allowMultiple = !0;
  }
  render() {
    return u`<forms-input-form
      .selection=${this.value}
      .multiple=${this.allowMultiple}
      .allowedFolders=${this.allowedFolders}
      .allowedForms=${this.allowedForms}
      @change=${w(this, n, m)}
      slot="editor"
    ></forms-input-form>`;
  }
};
n = /* @__PURE__ */ new WeakSet();
m = function(r) {
  const e = r.target;
  this.value = e.selection, this.dispatchEvent(new CustomEvent("property-value-change"));
};
c([
  v({ type: Array })
], l.prototype, "value", 2);
l = c([
  d(y)
], l);
const C = l;
export {
  l as FormsFormPickerMultiplePropertyPickerElement,
  C as default
};
//# sourceMappingURL=form-picker-multiple-property-editor.element.js.map

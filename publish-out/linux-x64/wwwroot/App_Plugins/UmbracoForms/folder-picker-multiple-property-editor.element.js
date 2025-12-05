import { html as m, property as d, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, p = (t) => {
  throw TypeError(t);
}, i = (t, e, r, a) => {
  for (var o = a > 1 ? void 0 : a ? _(e, r) : e, s = t.length - 1, l; s >= 0; s--)
    (l = t[s]) && (o = (a ? l(e, r, o) : l(o)) || o);
  return a && o && f(e, r, o), o;
}, P = (t, e, r) => e.has(t) || p("Cannot " + r), y = (t, e, r) => e.has(t) ? p("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), E = (t, e, r) => (P(t, e, "access private method"), r), c, u;
const k = "forms-folder-picker-multiple-property-editor";
let n = class extends h {
  constructor() {
    super(...arguments), y(this, c), this.value = [];
  }
  async connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return m`<forms-input-folder
      .selection=${this.value}
      .multiple=${!0}
      @change=${E(this, c, u)}
      slot="editor"
    ></forms-input-folder>`;
  }
};
c = /* @__PURE__ */ new WeakSet();
u = function(t) {
  const e = t.target;
  this.value = e.selection, this.dispatchEvent(new CustomEvent("property-value-change"));
};
i([
  d({ type: Array })
], n.prototype, "value", 2);
n = i([
  v(k)
], n);
const g = n;
export {
  n as FormsFolderPickerMultiplePropertyPickerElement,
  g as default
};
//# sourceMappingURL=folder-picker-multiple-property-editor.element.js.map

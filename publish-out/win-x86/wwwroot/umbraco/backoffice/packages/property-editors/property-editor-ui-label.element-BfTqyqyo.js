import { when as i, html as n, state as b, property as u, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var h = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, o = (r, l, p, a) => {
  for (var e = a > 1 ? void 0 : a ? _(l, p) : l, m = r.length - 1, s; m >= 0; m--)
    (s = r[m]) && (e = (a ? s(l, p, e) : s(e)) || e);
  return a && e && h(l, p, e), e;
};
let t = class extends v {
  constructor() {
    super(...arguments), this.value = "";
  }
  set config(r) {
    this._labelTemplate = r?.getValueByAlias("labelTemplate");
  }
  render() {
    return i(
      this._labelTemplate?.length,
      () => n`<umb-ufm-render inline .markdown=${this._labelTemplate} .value=${this.value}></umb-ufm-render>`,
      () => n`${this.value ?? ""}`
    );
  }
};
o([
  b()
], t.prototype, "_labelTemplate", 2);
o([
  u()
], t.prototype, "value", 2);
o([
  u({ attribute: !1 })
], t.prototype, "config", 1);
t = o([
  f("umb-property-editor-ui-label")
], t);
const d = t;
export {
  t as UmbPropertyEditorUILabelElement,
  d as default
};
//# sourceMappingURL=property-editor-ui-label.element-BfTqyqyo.js.map

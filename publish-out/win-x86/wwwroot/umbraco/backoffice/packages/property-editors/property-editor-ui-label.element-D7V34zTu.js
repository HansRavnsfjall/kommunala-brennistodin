import { html as u, property as i, customElement as a } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var c = Object.defineProperty, v = Object.getOwnPropertyDescriptor, p = (n, r, s, o) => {
  for (var e = o > 1 ? void 0 : o ? v(r, s) : r, l = n.length - 1, m; l >= 0; l--)
    (m = n[l]) && (e = (o ? m(r, s, e) : m(e)) || e);
  return o && e && c(r, s, e), e;
};
let t = class extends f {
  constructor() {
    super(...arguments), this.value = "", this.description = "";
  }
  render() {
    return u`${this.value ?? ""}`;
  }
};
t.styles = [b];
p([
  i()
], t.prototype, "value", 2);
p([
  i()
], t.prototype, "description", 2);
p([
  i({ attribute: !1 })
], t.prototype, "config", 2);
t = p([
  a("umb-property-editor-ui-label")
], t);
const P = t;
export {
  t as UmbPropertyEditorUILabelElement,
  P as default
};
//# sourceMappingURL=property-editor-ui-label.element-D7V34zTu.js.map

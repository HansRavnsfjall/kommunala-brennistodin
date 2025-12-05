import { html as s, property as f, customElement as n } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as a } from "@umbraco-cms/backoffice/lit-element";
var h = Object.defineProperty, b = Object.getOwnPropertyDescriptor, m = (t, r, l, p) => {
  for (var e = p > 1 ? void 0 : p ? b(r, l) : r, o = t.length - 1, u; o >= 0; o--)
    (u = t[o]) && (e = (p ? u(r, l, e) : u(e)) || e);
  return p && e && h(r, l, e), e;
};
let i = class extends a {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    if (!this.path) return s`<uui-loader></uui-loader>`;
    const t = this.path.split(".").pop() ?? "";
    return s`<uui-symbol-file .type=${t}></uui-symbol-file>`;
  }
};
m([
  f()
], i.prototype, "path", 2);
i = m([
  n("umb-input-upload-field-file")
], i);
export {
  i as default
};
//# sourceMappingURL=input-upload-field-file.element-wUIxjqeu.js.map

import { U as m } from "./property-editor-ui-missing-base.element-CjVjCvCs.js";
import { customElement as p } from "@umbraco-cms/backoffice/external/lit";
var a = Object.getOwnPropertyDescriptor, d = (i, s, l, o) => {
  for (var t = o > 1 ? void 0 : o ? a(s, l) : s, e = i.length - 1, n; e >= 0; e--)
    (n = i[e]) && (t = n(t) || t);
  return t;
};
let r = class extends m {
  constructor() {
    super(), this._titleKey = "missingEditor_title", this._detailsDescriptionKey = "missingEditor_detailsDescription", this._displayPropertyEditorUi = !1;
  }
};
r = d([
  p("umb-property-editor-ui-missing")
], r);
const y = r;
export {
  r as UmbPropertyEditorUIMissingElement,
  y as default
};
//# sourceMappingURL=property-editor-ui-missing.element-_qeAsAdM.js.map

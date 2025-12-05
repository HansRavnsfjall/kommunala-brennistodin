import { U as p } from "./property-editor-ui-missing-base.element-CjVjCvCs.js";
import { customElement as l } from "@umbraco-cms/backoffice/external/lit";
var U = Object.getOwnPropertyDescriptor, a = (s, r, m, o) => {
  for (var i = o > 1 ? void 0 : o ? U(r, m) : r, t = s.length - 1, n; t >= 0; t--)
    (n = s[t]) && (i = n(i) || i);
  return i;
};
let e = class extends p {
  constructor() {
    super(), this._titleKey = "missingEditor_missingUiTitle", this._detailsDescriptionKey = "missingEditor_missingUiDetailsDescription", this._displayPropertyEditorUi = !0;
  }
};
e = a([
  l("umb-property-editor-ui-missing-ui")
], e);
const u = e;
export {
  e as UmbPropertyEditorUIMissingUiElement,
  u as default
};
//# sourceMappingURL=property-editor-ui-missing-ui.element-B_S6lwQC.js.map

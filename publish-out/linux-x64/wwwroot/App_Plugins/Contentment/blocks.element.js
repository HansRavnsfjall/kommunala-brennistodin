import { html as p, customElement as a } from "@umbraco-cms/backoffice/external/lit";
import { C as c } from "./display-mode-base.element.js";
var i = Object.getOwnPropertyDescriptor, u = (r, n, l, o) => {
  for (var e = o > 1 ? void 0 : o ? i(n, l) : n, t = r.length - 1, m; t >= 0; t--)
    (m = r[t]) && (e = m(e) || e);
  return e;
};
let s = class extends c {
  render() {
    return p`${this.tagName}`;
  }
};
s = u([
  a("contentment-property-editor-ui-blocks")
], s);
export {
  s as ContentmentPropertyEditorUIBlocksElement,
  s as element
};
//# sourceMappingURL=blocks.element.js.map

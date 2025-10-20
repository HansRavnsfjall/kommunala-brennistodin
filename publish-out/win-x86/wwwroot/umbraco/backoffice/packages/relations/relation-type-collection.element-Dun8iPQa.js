import { html as s, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbCollectionDefaultElement as i } from "@umbraco-cms/backoffice/collection";
var p = Object.getOwnPropertyDescriptor, u = (o, r, a, n) => {
  for (var e = n > 1 ? void 0 : n ? p(r, a) : r, t = o.length - 1, m; t >= 0; t--)
    (m = o[t]) && (e = m(e) || e);
  return e;
};
let l = class extends i {
  // NOTE: Returns empty toolbar, so to remove the header padding.
  renderToolbar() {
    return s``;
  }
};
l = u([
  c("umb-relation-type-collection")
], l);
const v = l;
export {
  l as UmbRelationTypeCollectionElement,
  v as default,
  l as element
};
//# sourceMappingURL=relation-type-collection.element-Dun8iPQa.js.map

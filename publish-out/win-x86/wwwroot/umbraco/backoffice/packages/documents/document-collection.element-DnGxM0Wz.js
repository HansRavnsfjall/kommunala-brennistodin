import { html as i, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbCollectionDefaultElement as a } from "@umbraco-cms/backoffice/collection";
var b = Object.getOwnPropertyDescriptor, s = (o, r, c, n) => {
  for (var e = n > 1 ? void 0 : n ? b(r, c) : r, l = o.length - 1, m; l >= 0; l--)
    (m = o[l]) && (e = m(e) || e);
  return e;
};
let t = class extends a {
  renderToolbar() {
    return i`
			<umb-collection-toolbar slot="header">
				<umb-collection-filter-field></umb-collection-filter-field>
			</umb-collection-toolbar>
		`;
  }
};
t = s([
  u("umb-document-collection")
], t);
const p = t;
export {
  t as UmbDocumentCollectionElement,
  p as default,
  t as element
};
//# sourceMappingURL=document-collection.element-DnGxM0Wz.js.map

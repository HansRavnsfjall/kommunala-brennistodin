import { html as m, customElement as a } from "@umbraco-cms/backoffice/external/lit";
import { UmbCollectionDefaultElement as b } from "@umbraco-cms/backoffice/collection";
var s = Object.getOwnPropertyDescriptor, u = (t, o, i, r) => {
  for (var e = r > 1 ? void 0 : r ? s(o, i) : o, l = t.length - 1, n; l >= 0; l--)
    (n = t[l]) && (e = n(e) || e);
  return e;
};
let c = class extends b {
  renderToolbar() {
    return m`
			<umb-collection-toolbar slot="header">
				<umb-collection-filter-field></umb-collection-filter-field>
			</umb-collection-toolbar>
		`;
  }
};
c = u([
  a("umb-dictionary-collection")
], c);
export {
  c as UmbDictionaryCollectionElement,
  c as element
};
//# sourceMappingURL=dictionary-collection.element-BBgY0loa.js.map

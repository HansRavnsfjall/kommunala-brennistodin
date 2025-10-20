import { b as a, j as m } from "./constants-D9L2jSGX.js";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
import { DocumentTypeService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as u } from "@umbraco-cms/backoffice/entity-item";
class T extends i {
  /**
   * Creates an instance of UmbDocumentTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeItemServerDataSource
   */
  constructor(t) {
    super(t, { mapper: E });
  }
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const r = new u(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (n) => c.getItemDocumentType({ query: { id: n.uniques } }),
      uniques: t
    }), { data: o, error: s } = await r.request();
    return { data: this._getMappedItems(o), error: s };
  }
}
const E = (e) => ({
  entityType: a,
  isElement: e.isElement,
  icon: e.icon,
  unique: e.id,
  name: e.name,
  description: e.description
});
class d extends p {
  constructor(t) {
    super(t, T, m);
  }
}
export {
  d as UmbDocumentTypeItemRepository,
  d as api
};
//# sourceMappingURL=document-type-item.repository-CK9-9XMP.js.map

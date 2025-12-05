import { e as a, r as u } from "./manifests-BP7S9LPy.js";
import { DocumentService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
import { UmbItemDataApiGetRequestController as p } from "@umbraco-cms/backoffice/entity-item";
class d extends i {
  /**
   * Creates an instance of UmbDocumentItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentItemServerDataSource
   */
  constructor(t) {
    super(t, {
      mapper: l
    });
  }
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const r = new p(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (s) => c.getItemDocument({ query: { id: s.uniques } }),
      uniques: t
    }), { data: n, error: o } = await r.request();
    return { data: this._getMappedItems(n), error: o };
  }
}
const l = (e) => ({
  documentType: {
    collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null,
    icon: e.documentType.icon,
    unique: e.documentType.id
  },
  entityType: a,
  hasChildren: e.hasChildren,
  isProtected: e.isProtected,
  isTrashed: e.isTrashed,
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  parent: e.parent ? { unique: e.parent.id } : null,
  unique: e.id,
  variants: e.variants.map((t) => ({
    culture: t.culture || null,
    name: t.name,
    state: t.state
  }))
});
class h extends m {
  constructor(t) {
    super(t, d, u);
  }
}
export {
  h as UmbDocumentItemRepository,
  h as api
};
//# sourceMappingURL=document-item.repository-Xg9sohq8.js.map

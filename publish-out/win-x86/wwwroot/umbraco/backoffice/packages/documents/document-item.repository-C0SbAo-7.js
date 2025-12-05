import { e as n, r as s } from "./manifests-BfVrApfB.js";
import { d as o } from "./document-item.server.cache-_Im2jNgl.js";
import { DocumentService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as c } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as m, UmbItemRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
class p extends c {
  constructor(t) {
    super(t, {
      getItems: (a) => u.getItemDocument({ query: { id: a } }),
      dataCache: o,
      getUniqueMethod: (a) => a.id
    });
  }
}
class d extends m {
  #e = new p(this);
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
    const { data: a, error: r } = await this.#e.getItems(t);
    return { data: this._getMappedItems(a), error: r };
  }
}
const l = (e) => ({
  documentType: {
    collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null,
    icon: e.documentType.icon,
    unique: e.documentType.id
  },
  entityType: n,
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
    state: t.state,
    flags: t.flags
  })),
  flags: e.flags
});
class U extends i {
  constructor(t) {
    super(t, d, s);
  }
}
export {
  U as UmbDocumentItemRepository,
  U as api
};
//# sourceMappingURL=document-item.repository-C0SbAo-7.js.map

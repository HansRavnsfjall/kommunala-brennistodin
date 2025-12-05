import { b as s, j as m } from "./constants-rt5n84j4.js";
import { d as o } from "./document-type-item.server.cache-_Im2jNgl.js";
import { DocumentTypeService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as i } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as c, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class u extends i {
  constructor(t) {
    super(t, {
      getItems: (r) => n.getItemDocumentType({ query: { id: r } }),
      dataCache: o,
      getUniqueMethod: (r) => r.id
    });
  }
}
class T extends c {
  #e = new u(this);
  /**
   * Creates an instance of UmbDocumentTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeItemServerDataSource
   */
  constructor(t) {
    super(t, { mapper: d });
  }
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const { data: r, error: a } = await this.#e.getItems(t);
    return { data: this._getMappedItems(r), error: a };
  }
}
const d = (e) => ({
  entityType: s,
  isElement: e.isElement,
  icon: e.icon,
  unique: e.id,
  name: e.name,
  description: e.description
});
class U extends p {
  constructor(t) {
    super(t, T, m);
  }
}
export {
  U as UmbDocumentTypeItemRepository,
  U as api
};
//# sourceMappingURL=document-type-item.repository-ByLLQhzN.js.map

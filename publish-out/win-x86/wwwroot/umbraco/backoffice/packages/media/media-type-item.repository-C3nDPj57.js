import { b as s, i as m } from "./constants-DTH5dSDc.js";
import { m as i } from "./media-type-item.server.cache-CBJigTH3.js";
import { MediaTypeService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as n } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as p, UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class d extends n {
  constructor(e) {
    super(e, {
      getItems: (a) => o.getItemMediaType({ query: { id: a } }),
      dataCache: i,
      getUniqueMethod: (a) => a.id
    });
  }
}
class u extends p {
  #e = new d(this);
  /**
   * Creates an instance of UmbMediaTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: M
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: a, error: r } = await this.#e.getItems(e);
    return { data: this._getMappedItems(a), error: r };
  }
}
const M = (t) => ({
  entityType: s,
  icon: t.icon || null,
  name: t.name,
  unique: t.id
});
class U extends c {
  constructor(e) {
    super(e, u, m);
  }
}
export {
  U as UmbMediaTypeItemRepository,
  U as default
};
//# sourceMappingURL=media-type-item.repository-C3nDPj57.js.map

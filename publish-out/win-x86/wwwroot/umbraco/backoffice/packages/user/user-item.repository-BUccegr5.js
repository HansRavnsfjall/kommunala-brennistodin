import { u as s, d as m, g as n } from "./constants-DjdF3T-M.js";
import { UserService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as i } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as u, UmbItemRepositoryBase as U } from "@umbraco-cms/backoffice/repository";
class c extends i {
  constructor(e) {
    super(e, {
      getItems: (r) => o.getItemUser({ query: { id: r } }),
      dataCache: s,
      getUniqueMethod: (r) => r.id
    });
  }
}
class p extends u {
  #e = new c(this);
  /**
   * Creates an instance of UmbUserItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: d
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: r, error: a } = await this.#e.getItems(e);
    return { data: this._getMappedItems(r), error: a };
  }
}
const d = (t) => ({
  avatarUrls: t.avatarUrls,
  entityType: m,
  name: t.name,
  unique: t.id,
  kind: t.kind
});
class R extends U {
  constructor(e) {
    super(e, p, n);
  }
}
export {
  R as UmbUserItemRepository,
  R as default
};
//# sourceMappingURL=user-item.repository-BUccegr5.js.map

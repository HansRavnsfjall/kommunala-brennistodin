import { u as s, p as o } from "./constants-CCpPAcSy.js";
import { UserGroupService as m } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as n } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as u, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class i extends n {
  constructor(e) {
    super(e, {
      getItems: (t) => m.getItemUserGroup({ query: { id: t } }),
      dataCache: s,
      getUniqueMethod: (t) => t.id
    });
  }
}
class c extends u {
  #e = new i(this);
  /**
   * Creates an instance of UmbUserGroupItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserGroupItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: U
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: t, error: a } = await this.#e.getItems(e);
    return { data: this._getMappedItems(t), error: a };
  }
}
const U = (r) => ({
  unique: r.id,
  name: r.name,
  icon: r.icon || null
});
class R extends p {
  constructor(e) {
    super(e, c, o);
  }
}
export {
  R as UmbUserGroupItemRepository,
  R as default
};
//# sourceMappingURL=user-group-item.repository-BLVLpNFx.js.map

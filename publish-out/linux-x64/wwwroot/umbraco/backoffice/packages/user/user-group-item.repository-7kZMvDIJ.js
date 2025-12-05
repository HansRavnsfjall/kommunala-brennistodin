import { UserGroupService as m } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as n, UmbItemRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
import { UmbItemDataApiGetRequestController as i } from "@umbraco-cms/backoffice/entity-item";
import { p } from "./constants-jrjjZjNa.js";
class c extends n {
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
    const t = new i(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (a) => m.getItemUserGroup({ query: { id: a.uniques } }),
      uniques: e
    }), { data: s, error: o } = await t.request();
    return { data: this._getMappedItems(s), error: o };
  }
}
const U = (r) => ({
  unique: r.id,
  name: r.name,
  icon: r.icon || null
});
class S extends u {
  constructor(e) {
    super(e, c, p);
  }
}
export {
  S as UmbUserGroupItemRepository,
  S as default
};
//# sourceMappingURL=user-group-item.repository-7kZMvDIJ.js.map

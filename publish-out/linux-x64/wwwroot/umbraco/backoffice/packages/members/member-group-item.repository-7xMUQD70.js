import { b as m, k as i } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { UmbItemServerDataSourceBase as n, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
import { MemberGroupService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as c } from "@umbraco-cms/backoffice/entity-item";
class M extends n {
  /**
   * Creates an instance of UmbMemberGroupItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberGroupItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: b
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const t = new c(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (a) => u.getItemMemberGroup({ query: { id: a.uniques } }),
      uniques: e
    }), { data: o, error: s } = await t.request();
    return { data: this._getMappedItems(o), error: s };
  }
}
const b = (r) => ({
  unique: r.id,
  name: r.name,
  entityType: m
});
class R extends p {
  constructor(e) {
    super(e, M, i);
  }
}
export {
  R as UmbMemberGroupItemRepository,
  R as default
};
//# sourceMappingURL=member-group-item.repository-7xMUQD70.js.map

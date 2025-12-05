import { b as m, k as s } from "./member-group-picker-modal.element-I2C8EUhz.js";
import { m as o } from "./member-group-item.server.cache-D3Xsl_R0.js";
import { MemberGroupService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as p } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class M extends p {
  constructor(e) {
    super(e, {
      getItems: (r) => n.getItemMemberGroup({ query: { id: r } }),
      dataCache: o,
      getUniqueMethod: (r) => r.id
    });
  }
}
class c extends i {
  #e = new M(this);
  /**
   * Creates an instance of UmbMemberGroupItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberGroupItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: I
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: r, error: a } = await this.#e.getItems(e);
    return { data: this._getMappedItems(r), error: a };
  }
}
const I = (t) => ({
  unique: t.id,
  name: t.name,
  entityType: m
});
class R extends u {
  constructor(e) {
    super(e, c, s);
  }
}
export {
  R as UmbMemberGroupItemRepository,
  R as default
};
//# sourceMappingURL=member-group-item.repository-B0EQoalz.js.map

import { a } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
import { MemberTypeService as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as u } from "@umbraco-cms/backoffice/entity-item";
import { m as c } from "./input-member-type.element-Tx7SxrMW.js";
class T extends i {
  /**
   * Creates an instance of UmbMemberTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: M
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const t = new u(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (s) => p.getItemMemberType({ query: { id: s.uniques } }),
      uniques: e
    }), { data: m, error: o } = await t.request();
    return { data: this._getMappedItems(m), error: o };
  }
}
const M = (r) => ({
  entityType: a,
  unique: r.id,
  name: r.name,
  icon: r.icon || ""
});
class d extends n {
  constructor(e) {
    super(e, T, c);
  }
}
export {
  d as UmbMemberTypeItemRepository,
  d as default
};
//# sourceMappingURL=member-type-item.repository-DAKqa0yX.js.map

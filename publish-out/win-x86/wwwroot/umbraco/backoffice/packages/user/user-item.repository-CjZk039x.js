import { d as m, g as n } from "./constants-BH7VsFPT.js";
import { UmbItemDataApiGetRequestController as i } from "@umbraco-cms/backoffice/entity-item";
import { UserService as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemServerDataSourceBase as u, UmbItemRepositoryBase as U } from "@umbraco-cms/backoffice/repository";
class c extends u {
  /**
   * Creates an instance of UmbUserItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserItemServerDataSource
   */
  constructor(r) {
    super(r, {
      mapper: d
    });
  }
  async getItems(r) {
    if (!r) throw new Error("Uniques are missing");
    const t = new i(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (o) => p.getItemUser({ query: { id: o.uniques } }),
      uniques: r
    }), { data: s, error: a } = await t.request();
    return { data: this._getMappedItems(s), error: a };
  }
}
const d = (e) => ({
  avatarUrls: e.avatarUrls,
  entityType: m,
  name: e.name,
  unique: e.id,
  kind: e.kind
});
class _ extends U {
  constructor(r) {
    super(r, c, n);
  }
}
export {
  _ as UmbUserItemRepository,
  _ as default
};
//# sourceMappingURL=user-item.repository-CjZk039x.js.map

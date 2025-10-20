import { b as i, i as m } from "./constants-DT5L-WXf.js";
import { UmbItemServerDataSourceBase as n, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
import { MediaTypeService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as c } from "@umbraco-cms/backoffice/entity-item";
class T extends n {
  /**
   * Creates an instance of UmbMediaTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: d
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const r = new c(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (o) => u.getItemMediaType({ query: { id: o.uniques } }),
      uniques: e
    }), { data: a, error: s } = await r.request();
    return { data: this._getMappedItems(a), error: s };
  }
}
const d = (t) => ({
  entityType: i,
  icon: t.icon || null,
  name: t.name,
  unique: t.id
});
class _ extends p {
  constructor(e) {
    super(e, T, m);
  }
}
export {
  _ as UmbMediaTypeItemRepository,
  _ as default
};
//# sourceMappingURL=media-type-item.repository-BBLk14NN.js.map

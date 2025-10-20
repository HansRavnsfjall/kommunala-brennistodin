import { c as o, a as i } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UmbItemServerDataSourceBase as n, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
import { TemplateService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as T } from "@umbraco-cms/backoffice/entity-item";
class c extends n {
  /**
   * Creates an instance of UmbTemplateItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: l
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const r = new T(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (m) => u.getItemTemplate({ query: { id: m.uniques } }),
      uniques: e
    }), { data: a, error: s } = await r.request();
    return { data: this._getMappedItems(a), error: s };
  }
}
const l = (t) => ({
  entityType: o,
  unique: t.id,
  name: t.name,
  alias: t.alias
});
class _ extends p {
  constructor(e) {
    super(e, c, i);
  }
}
export {
  _ as UmbTemplateItemRepository,
  _ as default
};
//# sourceMappingURL=template-item.repository-CVFneNIa.js.map

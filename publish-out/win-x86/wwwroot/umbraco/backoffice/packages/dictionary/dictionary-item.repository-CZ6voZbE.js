import { b as i, m } from "./paths-pWW_vsmu.js";
import { UmbItemServerDataSourceBase as n, UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
import { DictionaryService as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as u } from "@umbraco-cms/backoffice/entity-item";
class I extends n {
  /**
   * Creates an instance of UmbDictionaryItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: y
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const r = new u(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (s) => p.getItemDictionary({ query: { id: s.uniques } }),
      uniques: e
    }), { data: a, error: o } = await r.request();
    return { data: this._getMappedItems(a), error: o };
  }
}
const y = (t) => ({
  entityType: i,
  unique: t.id,
  name: t.name
});
class d extends c {
  constructor(e) {
    super(e, I, m);
  }
}
export {
  d as UmbDictionaryItemRepository,
  d as api
};
//# sourceMappingURL=dictionary-item.repository-CZ6voZbE.js.map

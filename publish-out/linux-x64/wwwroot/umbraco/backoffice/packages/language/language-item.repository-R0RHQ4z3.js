import { b as m, n } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
import { LanguageService as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as c } from "@umbraco-cms/backoffice/entity-item";
class g extends i {
  /**
   * Creates an instance of UmbLanguageItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLanguageItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: I
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const r = new c(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (o) => p.getItemLanguage({ query: { isoCode: o.uniques } }),
      uniques: e
    }), { data: a, error: s } = await r.request();
    return { data: this._getMappedItems(a), error: s };
  }
}
const I = (t) => ({
  unique: t.isoCode,
  name: t.name,
  entityType: m
});
class _ extends u {
  constructor(e) {
    super(e, g, n);
  }
}
export {
  _ as UmbLanguageItemRepository,
  _ as default
};
//# sourceMappingURL=language-item.repository-R0RHQ4z3.js.map

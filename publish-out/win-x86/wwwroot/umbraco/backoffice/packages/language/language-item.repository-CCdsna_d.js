import { b as s, n as o } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { l as m } from "./language-item.server.cache-BGldxR4I.js";
import { LanguageService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as g } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class p extends g {
  constructor(e) {
    super(e, {
      getItems: (a) => n.getItemLanguage({ query: { isoCode: a } }),
      dataCache: m,
      getUniqueMethod: (a) => a.isoCode
    });
  }
}
class c extends i {
  #e = new p(this);
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
    const { data: a, error: r } = await this.#e.getItems(e);
    return { data: this._getMappedItems(a), error: r };
  }
}
const I = (t) => ({
  unique: t.isoCode,
  name: t.name,
  entityType: s
});
class _ extends u {
  constructor(e) {
    super(e, c, o);
  }
}
export {
  _ as UmbLanguageItemRepository,
  _ as default
};
//# sourceMappingURL=language-item.repository-CCdsna_d.js.map

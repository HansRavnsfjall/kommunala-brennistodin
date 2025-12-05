import { b as s } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { LanguageService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
class c {
  #e;
  /**
   * Creates an instance of UmbLanguageCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLanguageCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Gets the language collection filtered by the given filter.
   * @param {UmbLanguageCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbLanguageCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: o, error: r } = await l(this.#e, n.getLanguage({ query: e }));
    return o ? { data: { items: o.items.map((t) => ({
      unique: t.isoCode,
      name: t.name,
      entityType: s,
      isDefault: t.isDefault,
      isMandatory: t.isMandatory,
      fallbackIsoCode: t.fallbackIsoCode || null
    })), total: o.total } } : { error: r };
  }
}
class y extends i {
  #e;
  constructor(e) {
    super(e), this.#e = new c(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  y as UmbLanguageCollectionRepository,
  y as default
};
//# sourceMappingURL=language-collection.repository-GzJNHJc2.js.map

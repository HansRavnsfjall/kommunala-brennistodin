import { b as a } from "./paths-pWW_vsmu.js";
import { DictionaryService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class l {
  #t;
  /**
   * Creates an instance of UmbDictionaryCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryCollectionServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Gets the dictionary collection filtered by the given filter.
   * @param {UmbDictionaryCollectionFilterModel} query
   * @returns {*}
   * @memberof UmbDictionaryCollectionServerDataSource
   */
  async getCollection(t) {
    const { data: o, error: n } = await i(this.#t, s.getDictionary({ query: t }));
    return o ? { data: { items: o.items.map((e) => ({
      entityType: a,
      name: e.name,
      parentUnique: e.parent ? e.parent.id : null,
      translatedIsoCodes: e.translatedIsoCodes,
      unique: e.id
    })), total: o.total } } : { error: n };
  }
}
class f extends c {
  #t;
  constructor(t) {
    super(t), this.#t = new l(t);
  }
  async requestCollection(t) {
    return this.#t.getCollection(t);
  }
}
export {
  f as UmbDictionaryCollectionRepository,
  f as default
};
//# sourceMappingURL=dictionary-collection.repository-Bn7ad0EJ.js.map

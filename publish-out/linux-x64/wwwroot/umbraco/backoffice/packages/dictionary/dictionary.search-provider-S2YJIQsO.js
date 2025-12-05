import { b as o } from "./paths-pWW_vsmu.js";
import { tryExecute as c } from "@umbraco-cms/backoffice/resources";
import { DictionaryService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class m {
  #r;
  /**
   * Creates an instance of UmbDictionarySearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionarySearchServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Get a list of versions for a data
   * @param args
   * @returns {*}
   * @memberof UmbDictionarySearchServerDataSource
   */
  async search(r) {
    const { data: t, error: i } = await c(
      this.#r,
      n.getDictionary({
        query: { filter: r.query }
      })
    );
    return t ? { data: { items: t.items.map((e) => ({
      href: "/section/translation/workspace/dictionary/edit/" + e.id,
      entityType: o,
      unique: e.id,
      name: e.name ?? ""
    })), total: t.total } } : { error: i };
  }
}
class h extends s {
  #r;
  constructor(r) {
    super(r), this.#r = new m(this);
  }
  search(r) {
    return this.#r.search(r);
  }
}
class f extends s {
  #r = new h(this);
  async search(r) {
    return this.#r.search(r);
  }
  destroy() {
    this.#r.destroy();
  }
}
export {
  f as UmbDictionarySearchProvider,
  f as api
};
//# sourceMappingURL=dictionary.search-provider-S2YJIQsO.js.map

import { c } from "./template-item.store.context-token-rCTaUJ7s.js";
import { TemplateService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as m } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class n {
  #e;
  /**
   * Creates an instance of UmbTemplateSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateSearchServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get a list of versions for a data
   * @param args
   * @returns {*}
   * @memberof UmbTemplateSearchServerDataSource
   */
  async search(e) {
    const { data: r, error: o } = await m(
      this.#e,
      i.getItemTemplateSearch({
        query: { query: e.query }
      })
    );
    return r ? { data: { items: r.items.map((t) => ({
      href: "/section/settings/workspace/template/edit/" + t.id,
      entityType: c,
      unique: t.id,
      name: t.name,
      alias: t.alias
    })), total: r.total } } : { error: o };
  }
}
class p extends s {
  #e;
  constructor(e) {
    super(e), this.#e = new n(this);
  }
  search(e) {
    return this.#e.search(e);
  }
}
class T extends s {
  #e = new p(this);
  async search(e) {
    return this.#e.search(e);
  }
  destroy() {
    this.#e.destroy();
  }
}
export {
  T as UmbTemplateSearchProvider,
  T as api
};
//# sourceMappingURL=template.search-provider-DYB5KjvR.js.map

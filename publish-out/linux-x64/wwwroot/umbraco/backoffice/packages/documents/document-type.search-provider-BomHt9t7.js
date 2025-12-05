import { b as c } from "./constants-D9L2jSGX.js";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { DocumentTypeService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as o } from "@umbraco-cms/backoffice/class-api";
class m {
  #e;
  /**
   * Creates an instance of UmbDocumentTypeSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeSearchServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get a list of versions for a data
   * @param {UmbDocumentTypeSearchRequestArgs} args - The arguments for the search
   * @returns {*}
   * @memberof UmbDocumentTypeSearchServerDataSource
   */
  async search(e) {
    const { data: r, error: a } = await n(
      this.#e,
      i.getItemDocumentTypeSearch({
        query: { query: e.query, isElement: e.isElementType }
      })
    );
    return r ? { data: { items: r.items.map((t) => ({
      href: "/section/settings/workspace/document-type/edit/" + t.id,
      entityType: c,
      isElement: t.isElement,
      icon: t.icon,
      unique: t.id,
      name: t.name
    })), total: r.total } } : { error: a };
  }
}
class p extends o {
  #e;
  constructor(e) {
    super(e), this.#e = new m(this);
  }
  search(e) {
    return this.#e.search(e);
  }
}
class l extends o {
  #e = new p(this);
  async search(e) {
    return this.#e.search(e);
  }
  destroy() {
    this.#e.destroy();
  }
}
export {
  l as UmbDocumentTypeSearchProvider,
  l as api
};
//# sourceMappingURL=document-type.search-provider-BomHt9t7.js.map

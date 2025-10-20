import { b as i } from "./constants-DT5L-WXf.js";
import { MediaTypeService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as a } from "@umbraco-cms/backoffice/class-api";
class p {
  #e;
  /**
   * Creates an instance of UmbMediaTypeSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTypeSearchServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get a list of versions for a data
   * @param args
   * @returns {*}
   * @memberof UmbMediaTypeSearchServerDataSource
   */
  async search(e) {
    const { data: t, error: o } = await n(
      this.#e,
      c.getItemMediaTypeSearch({
        query: { query: e.query }
      })
    );
    return t ? { data: { items: t.items.map((r) => ({
      href: "/section/settings/workspace/media-type/edit/" + r.id,
      entityType: i,
      unique: r.id,
      name: r.name,
      icon: r.icon || null
    })), total: t.total } } : { error: o };
  }
}
class m extends a {
  #e;
  constructor(e) {
    super(e), this.#e = new p(this);
  }
  search(e) {
    return this.#e.search(e);
  }
}
class l extends a {
  #e = new m(this);
  async search(e) {
    return this.#e.search(e);
  }
  destroy() {
    this.#e.destroy();
  }
}
export {
  l as UmbMediaTypeSearchProvider,
  l as api
};
//# sourceMappingURL=media-type.search-provider-DMnZs0lQ.js.map

import { a as c } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import { MemberTypeService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as m } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as a } from "@umbraco-cms/backoffice/class-api";
class n {
  #e;
  /**
   * Creates an instance of UmbMemberTypeSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeSearchServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get a list of versions for a data
   * @param args
   * @returns {*}
   * @memberof UmbMemberTypeSearchServerDataSource
   */
  async search(e) {
    const { data: t, error: o } = await m(
      this.#e,
      i.getItemMemberTypeSearch({
        query: { query: e.query }
      })
    );
    return t ? { data: { items: t.items.map((r) => ({
      href: "/section/settings/workspace/member-type/edit/" + r.id,
      entityType: c,
      unique: r.id,
      name: r.name,
      icon: r.icon || ""
    })), total: t.total } } : { error: o };
  }
}
class p extends a {
  #e;
  constructor(e) {
    super(e), this.#e = new n(this);
  }
  search(e) {
    return this.#e.search(e);
  }
}
class T extends a {
  #e = new p(this);
  async search(e) {
    return this.#e.search(e);
  }
  destroy() {
    this.#e.destroy();
  }
}
export {
  T as UmbMemberTypeSearchProvider,
  T as api
};
//# sourceMappingURL=member-type.search-provider-CYMtq5BT.js.map

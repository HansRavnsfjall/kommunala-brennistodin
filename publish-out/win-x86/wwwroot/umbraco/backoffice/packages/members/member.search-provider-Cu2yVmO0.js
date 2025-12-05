import { f as c } from "./manifests-KIVuOqdB.js";
import { MemberService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as n } from "@umbraco-cms/backoffice/class-api";
class p {
  #e;
  /**
   * Creates an instance of UmbMemberSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberSearchServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get a list of versions for a data
   * @param args
   * @returns {*}
   * @memberof UmbMemberSearchServerDataSource
   */
  async search(e) {
    const { data: t, error: m } = await u(
      this.#e,
      i.getItemMemberSearch({
        query: {
          query: e.query,
          allowedMemberTypes: e.allowedContentTypes?.map((s) => s.unique)
        }
      })
    );
    return t ? { data: { items: t.items.map((r) => ({
      href: "/section/member-management/workspace/member/edit/" + r.id,
      entityType: c,
      unique: r.id,
      name: r.variants[0].name || "",
      kind: r.kind,
      memberType: {
        unique: r.memberType.id,
        icon: r.memberType.icon,
        collection: r.memberType.collection ? { unique: r.memberType.collection.id } : null
      },
      variants: r.variants.map((o) => ({
        name: o.name,
        culture: o.culture || null
      }))
    })), total: t.total } } : { error: m };
  }
}
class l extends n {
  #e;
  constructor(e) {
    super(e), this.#e = new p(this);
  }
  search(e) {
    return this.#e.search(e);
  }
}
class T extends n {
  #e = new l(this);
  async search(e) {
    return this.#e.search(e);
  }
  destroy() {
    this.#e.destroy();
  }
}
export {
  T as UmbMemberSearchProvider,
  T as api
};
//# sourceMappingURL=member.search-provider-Cu2yVmO0.js.map

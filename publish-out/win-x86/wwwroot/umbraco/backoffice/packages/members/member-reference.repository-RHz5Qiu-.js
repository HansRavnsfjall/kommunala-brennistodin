import { f as m } from "./manifests-KIVuOqdB.js";
import { MemberService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiDataMapper as y } from "@umbraco-cms/backoffice/repository";
import { tryExecute as d } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as u } from "@umbraco-cms/backoffice/class-api";
class p extends u {
  #e = new y(this);
  /**
   * Fetches the item for the given unique from the server
   * @param {string} unique - The unique identifier of the item to fetch
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbReferenceItemModel>>>} - Items that are referenced by the given unique
   * @memberof UmbMemberReferenceServerDataSource
   */
  async getReferencedBy(e, t = 0, n = 20) {
    const { data: r, error: a } = await d(
      this,
      c.getMemberByIdReferencedBy({ path: { id: e }, query: { skip: t, take: n } })
    );
    if (r) {
      const o = r.items.map(async (i) => this.#e.map({
        forDataModel: i.$type,
        data: i,
        fallback: async () => ({
          ...i,
          unique: i.id,
          entityType: "unknown"
        })
      }));
      return { data: { items: await Promise.all(o), total: r.total } };
    }
    return { data: r, error: a };
  }
  /**
   * Checks if the items are referenced by other items
   * @param {Array<string>} uniques - The unique identifiers of the items to fetch
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbEntityModel>>>} - Items that are referenced by other items
   * @memberof UmbMemberReferenceServerDataSource
   */
  async getAreReferenced(e, t = 0, n = 20) {
    const { data: r, error: a } = await d(
      this,
      c.getMemberAreReferenced({ query: { id: e, skip: t, take: n } })
    );
    return r ? { data: { items: r.items.map((s) => ({
      unique: s.id,
      entityType: m
    })), total: r.total } } : { data: r, error: a };
  }
  /**
   * Returns any descendants of the given unique that is referenced by other items
   * @param {string} unique - The unique identifier of the item to fetch descendants for
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbEntityModel>>>} - Any descendants of the given unique that is referenced by other items
   * @memberof UmbMemberReferenceServerDataSource
   */
  async getReferencedDescendants(e, t = 0, n = 20) {
    const { data: r, error: a } = await d(
      this,
      c.getMemberByIdReferencedDescendants({ path: { id: e }, query: { skip: t, take: n } })
    );
    return r ? { data: { items: r.items.map((s) => ({
      unique: s.id,
      entityType: m
    })), total: r.total } } : { data: r, error: a };
  }
}
class b extends u {
  #e;
  constructor(e) {
    super(e), this.#e = new p(this);
  }
  async requestReferencedBy(e, t = 0, n = 20) {
    if (!e) throw new Error("unique is required");
    return this.#e.getReferencedBy(e, t, n);
  }
  async requestDescendantsWithReferences(e, t = 0, n = 20) {
    if (!e) throw new Error("unique is required");
    return this.#e.getReferencedDescendants(e, t, n);
  }
  async requestAreReferenced(e, t, n) {
    if (!e || e.length === 0) throw new Error("uniques is required");
    return this.#e.getAreReferenced(e, t, n);
  }
}
export {
  b as UmbMemberReferenceRepository,
  b as default
};
//# sourceMappingURL=member-reference.repository-RHz5Qiu-.js.map

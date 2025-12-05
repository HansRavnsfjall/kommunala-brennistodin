import { e as d } from "./manifests-BfVrApfB.js";
import { DocumentService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as m } from "@umbraco-cms/backoffice/class-api";
import { UmbManagementApiDataMapper as y } from "@umbraco-cms/backoffice/repository";
class p extends m {
  #e = new y(this);
  /**
   * Fetches the item for the given unique from the server
   * @param {string} unique - The unique identifier of the item to fetch
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbReferenceItemModel>>>} - Items that are referenced by the given unique
   * @memberof UmbDocumentReferenceServerDataSource
   */
  async getReferencedBy(e, r = 0, n = 20) {
    const { data: t, error: a } = await u(
      this,
      c.getDocumentByIdReferencedBy({ path: { id: e }, query: { skip: r, take: n } })
    );
    if (t) {
      const o = t.items.map(async (i) => this.#e.map({
        forDataModel: i.$type,
        data: i,
        fallback: async () => ({
          ...i,
          unique: i.id,
          entityType: "unknown"
        })
      }));
      return { data: { items: await Promise.all(o), total: t.total } };
    }
    return { data: t, error: a };
  }
  /**
   * Checks if the items are referenced by other items
   * @param {Array<string>} uniques - The unique identifiers of the items to fetch
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbEntityModel>>>} - Items that are referenced by other items
   * @memberof UmbDocumentReferenceServerDataSource
   */
  async getAreReferenced(e, r = 0, n = 20) {
    const { data: t, error: a } = await u(
      this,
      c.getDocumentAreReferenced({ query: { id: e, skip: r, take: n } })
    );
    return t ? { data: { items: t.items.map((s) => ({
      unique: s.id,
      entityType: d
    })), total: t.total } } : { data: t, error: a };
  }
  /**
   * Returns any descendants of the given unique that is referenced by other items
   * @param {string} unique - The unique identifier of the item to fetch descendants for
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbEntityModel>>>} - Any descendants of the given unique that is referenced by other items
   * @memberof UmbDocumentReferenceServerDataSource
   */
  async getReferencedDescendants(e, r = 0, n = 20) {
    const { data: t, error: a } = await u(
      this,
      c.getDocumentByIdReferencedDescendants({ path: { id: e }, query: { skip: r, take: n } })
    );
    return t ? { data: { items: t.items.map((s) => ({
      unique: s.id,
      entityType: d
    })), total: t.total } } : { data: t, error: a };
  }
}
class g extends m {
  #e;
  constructor(e) {
    super(e), this.#e = new p(this);
  }
  async requestReferencedBy(e, r = 0, n = 20) {
    if (!e) throw new Error("unique is required");
    return this.#e.getReferencedBy(e, r, n);
  }
  async requestAreReferenced(e, r = 0, n = 20) {
    if (!e || e.length === 0) throw new Error("uniques is required");
    return this.#e.getAreReferenced(e, r, n);
  }
  async requestDescendantsWithReferences(e, r = 0, n = 20) {
    if (!e) throw new Error("unique is required");
    return this.#e.getReferencedDescendants(e, r, n);
  }
}
export {
  g as UmbDocumentReferenceRepository,
  g as default
};
//# sourceMappingURL=document-reference.repository-BLxPpYxT.js.map

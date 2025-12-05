import { m as u } from "./input-upload-field.element-BKvVffkE.js";
import { MediaService as d } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiDataMapper as y } from "@umbraco-cms/backoffice/repository";
import { tryExecute as c } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as f } from "@umbraco-cms/backoffice/class-api";
class p extends f {
  #e = new y(this);
  /**
   * Fetches the item for the given unique from the server
   * @param {string} unique - The unique identifier of the item to fetch
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbReferenceItemModel>>>} - Items that are referenced by the given unique
   * @memberof UmbMediaReferenceServerDataSource
   */
  async getReferencedBy(e, r = 0, a = 20) {
    const { data: t, error: n } = await c(
      this,
      d.getMediaByIdReferencedBy({ path: { id: e }, query: { skip: r, take: a } })
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
    return { data: t, error: n };
  }
  /**
   * Checks if the items are referenced by other items
   * @param {Array<string>} uniques - The unique identifiers of the items to fetch
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbEntityModel>>>} - Items that are referenced by other items
   * @memberof UmbMediaReferenceServerDataSource
   */
  async getAreReferenced(e, r = 0, a = 20) {
    const { data: t, error: n } = await c(
      this,
      d.getMediaAreReferenced({ query: { id: e, skip: r, take: a } })
    );
    return t ? { data: { items: t.items.map((s) => ({
      unique: s.id,
      entityType: u
    })), total: t.total } } : { data: t, error: n };
  }
  /**
   * Returns any descendants of the given unique that is referenced by other items
   * @param {string} unique - The unique identifier of the item to fetch descendants for
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbEntityModel>>>} - Any descendants of the given unique that is referenced by other items
   * @memberof UmbMediaReferenceServerDataSource
   */
  async getReferencedDescendants(e, r = 0, a = 20) {
    const { data: t, error: n } = await c(
      this,
      d.getMediaByIdReferencedDescendants({ path: { id: e }, query: { skip: r, take: a } })
    );
    return t ? { data: { items: t.items.map((s) => ({
      unique: s.id,
      entityType: u
    })), total: t.total } } : { data: t, error: n };
  }
}
class g extends f {
  #e;
  constructor(e) {
    super(e), this.#e = new p(this);
  }
  async requestReferencedBy(e, r = 0, a = 20) {
    if (!e) throw new Error("unique is required");
    return this.#e.getReferencedBy(e, r, a);
  }
  async requestDescendantsWithReferences(e, r = 0, a = 20) {
    if (!e) throw new Error("unique is required");
    return this.#e.getReferencedDescendants(e, r, a);
  }
  async requestAreReferenced(e, r, a) {
    if (!e || e.length === 0) throw new Error("uniques is required");
    return this.#e.getAreReferenced(e, r, a);
  }
}
export {
  g as UmbMediaReferenceRepository,
  g as default
};
//# sourceMappingURL=media-reference.repository-DGrobq9C.js.map

import { tryExecute as p } from "@umbraco-cms/backoffice/resources";
import { DataTypeService as d } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
import { UmbManagementApiDataMapper as f } from "@umbraco-cms/backoffice/repository";
class u extends s {
  #e = new f(this);
  /**
   * Fetches the item for the given unique from the server
   * @param {string} unique - The unique identifier of the item to fetch
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbReferenceItemModel>>>} - Items that are referenced by the given unique
   * @memberof UmbDataTypeReferenceServerDataSource
   */
  async getReferencedBy(e, r = 0, t = 20) {
    const { data: a, error: i } = await p(
      this,
      d.getDataTypeByIdReferencedBy({ path: { id: e }, query: { skip: r, take: t } })
    );
    if (a) {
      const c = a.items.map(async (n) => this.#e.map({
        forDataModel: n.$type,
        data: n,
        fallback: async () => ({
          ...n,
          unique: n.id,
          entityType: "unknown"
        })
      }));
      return { data: { items: await Promise.all(c), total: a.total } };
    }
    return { data: a, error: i };
  }
  /**
   * Checks if the items are referenced by other items
   * @param {Array<string>} uniques - The unique identifiers of the items to fetch
   * @param {number} skip - The number of items to skip
   * @param {number} take - The number of items to take
   * @returns {Promise<UmbDataSourceResponse<UmbPagedModel<UmbEntityModel>>>} - Items that are referenced by other items
   * @memberof UmbDataTypeReferenceServerDataSource
   */
  async getAreReferenced(e, r = 0, t = 20) {
    return console.warn("getAreReferenced is not implemented for DataTypeReferenceServerDataSource"), { data: { items: [], total: 0 } };
  }
}
class w extends s {
  #e;
  constructor(e) {
    super(e), this.#e = new u(this);
  }
  async requestReferencedBy(e, r = 0, t = 20) {
    if (!e) throw new Error("unique is required");
    return this.#e.getReferencedBy(e, r, t);
  }
  async requestAreReferenced(e, r = 0, t = 20) {
    if (!e || e.length === 0) throw new Error("uniques is required");
    return this.#e.getAreReferenced(e, r, t);
  }
}
export {
  w as UmbDataTypeReferenceRepository,
  w as default
};
//# sourceMappingURL=data-type-reference.repository-DfWr1QMT.js.map

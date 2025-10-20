import { a as i } from "./entity-CGrHYXC8.js";
import { RelationTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as c } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as l } from "@umbraco-cms/backoffice/repository";
class s {
  #e;
  /**
   * Creates an instance of UmbRelationTypeCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbRelationTypeCollectionServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Gets the relation type collection filtered by the given filter.
   * @param {UmbRelationTypeCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbRelationTypeCollectionServerDataSource
   */
  async getCollection(t) {
    const { data: o, error: a } = await c(
      this.#e,
      r.getRelationType({
        query: {
          skip: t.skip,
          take: t.take
        }
      })
    );
    return o ? { data: { items: o.items.map((e) => ({
      alias: e.alias || "",
      child: e.childObject ? {
        objectType: {
          unique: e.childObject.id,
          name: e.childObject.name || ""
        }
      } : null,
      entityType: i,
      isBidirectional: e.isBidirectional,
      isDependency: e.isDependency,
      name: e.name,
      parent: e.parentObject ? {
        objectType: {
          unique: e.parentObject.id,
          name: e.parentObject.name || ""
        }
      } : null,
      unique: e.id
    })), total: o.total } } : { error: a };
  }
}
class b extends l {
  #e;
  constructor(t) {
    super(t), this.#e = new s(t);
  }
  async requestCollection(t) {
    return this.#e.getCollection(t);
  }
}
export {
  b as UmbRelationTypeCollectionRepository,
  b as default
};
//# sourceMappingURL=relation-type-collection.repository-Bw0BK4M6.js.map

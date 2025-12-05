import { RelationService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
const s = "relation";
class u {
  #e;
  /**
   * Creates an instance of UmbRelationCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbRelationCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Gets the relation collection filtered by the given filter.
   * @param {UmbRelationCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbRelationCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: o, error: a } = await l(
      this.#e,
      i.getRelationByRelationTypeId({
        path: { id: e.relationType.unique },
        query: {
          skip: e.skip,
          take: e.take
        }
      })
    );
    return o ? { data: { items: o.items.map((t) => ({
      unique: t.id,
      entityType: s,
      relationType: {
        unique: t.relationType.id
      },
      parent: {
        unique: t.parent.id,
        name: t.parent.name || ""
      },
      child: {
        unique: t.child.id,
        name: t.child.name || ""
      },
      createDate: t.createDate,
      comment: t.comment || ""
    })), total: o.total } } : { error: a };
  }
}
class n extends c {
  #e;
  constructor(e) {
    super(e), this.#e = new u(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbRelationCollectionRepository: n,
  default: n
}, Symbol.toStringTag, { value: "Module" }));
export {
  n as U,
  s as a,
  h as r
};
//# sourceMappingURL=relation-collection.repository-DNnNdtMP.js.map

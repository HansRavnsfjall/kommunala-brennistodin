import { SegmentService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
const m = "segment";
class u extends i {
  /**
   * Gets the language collection filtered by the given filter.
   * @param {UmbSegmentCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbLanguageCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: t, error: s } = await l(this, a.getSegment({ query: e }));
    return t ? { data: { items: t.items.map((o) => ({
      alias: o.alias,
      entityType: m,
      name: o.name,
      unique: o.alias
    })), total: t.total } } : { error: s };
  }
}
class r extends c {
  #e;
  constructor(e) {
    super(e), this.#e = new u(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbSegmentCollectionRepository: r,
  default: r
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as U,
  r as a,
  _ as s
};
//# sourceMappingURL=segment-collection.repository-Duqq_PeP.js.map

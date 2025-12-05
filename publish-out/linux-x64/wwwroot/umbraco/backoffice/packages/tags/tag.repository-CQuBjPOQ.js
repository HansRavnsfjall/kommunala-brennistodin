import { TagService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as m } from "@umbraco-cms/backoffice/resources";
import { c as l } from "./constants-BHP6V-qT.js";
import { UmbControllerBase as p } from "@umbraco-cms/backoffice/class-api";
class T {
  #t;
  /**
   * Creates an instance of UmbTagServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTagServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get a list of tags on the server
   * @param root0
   * @param root0.query
   * @param root0.skip
   * @param root0.take
   * @param root0.tagGroup
   * @param root0.culture
   * @returns {*}
   * @memberof UmbTagServerDataSource
   */
  async getCollection({
    query: t,
    skip: e,
    take: s,
    tagGroup: a,
    culture: r
  }) {
    return m(this.#t, h.getTag({ query: { query: t, skip: e, take: s, tagGroup: a, culture: r } }));
  }
}
class C extends p {
  #t;
  #r;
  #e;
  constructor(t) {
    super(t), this.#r = new T(this), this.#t = this.consumeContext(l, (e) => {
      this.#e = e;
    }).asPromise({ preventTimeout: !0 });
  }
  async requestTags(t, e, { skip: s, take: a, query: r } = { skip: 0, take: 1e3, query: "" }) {
    await this.#t;
    const i = e || "", { data: o, error: c } = await this.#r.getCollection({
      skip: s,
      take: a,
      tagGroup: t,
      culture: i,
      query: r
    });
    return o && o.items.forEach((n) => this.#e?.append(n)), {
      data: o,
      error: c,
      asObservable: () => this.#e.byQuery(t, i, r)
    };
  }
  async queryTags(t, e, s, { skip: a, take: r } = { skip: 0, take: 1e3 }) {
    return this.requestTags(t, e, { skip: a, take: r, query: s });
  }
}
export {
  C as UmbTagRepository,
  C as default
};
//# sourceMappingURL=tag.repository-CQuBjPOQ.js.map

import { DynamicRootService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as c } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as a } from "@umbraco-cms/backoffice/class-api";
class y {
  #t;
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get dynamic root
   * @param {DynamicRootRequestModel} args
   * @returns {*}  {(Promise<DynamicRootResponseModel | undefined>)}
   * @memberof UmbContentPickerDynamicRootServerDataSource
   */
  async getRoot(t) {
    if (!t.context) throw new Error("Dynamic Root context is missing");
    if (!t.query) throw new Error("Dynamic Root query is missing");
    const o = {
      context: t.context,
      query: t.query
    }, { data: e } = await c(this.#t, s.postDynamicRootQuery({ body: o }));
    return e;
  }
}
const m = "00000000-0000-0000-0000-000000000000";
class R extends a {
  #t;
  constructor(t) {
    super(t), this.#t = new y(t);
  }
  /**
   * Request dynamic root
   * @param {UmbContentPickerDynamicRoot} query
   * @param {string} entityUnique
   * @param {string} [parentUnique]
   * @returns {*}
   * @memberof UmbContentPickerDynamicRootRepository
   */
  async requestRoot(t, o, e) {
    const i = {
      context: {
        id: o ?? null,
        parent: { id: e ?? m }
      },
      query: {
        origin: {
          alias: t.originAlias,
          id: t.originKey
        },
        steps: t.querySteps?.map((r) => ({
          alias: r.alias,
          documentTypeIds: r.anyOfDocTypeKeys
        })) || []
      }
    };
    return (await this.#t.getRoot(i))?.roots;
  }
}
export {
  R as U
};
//# sourceMappingURL=dynamic-root.repository-DO0J7Qvd.js.map

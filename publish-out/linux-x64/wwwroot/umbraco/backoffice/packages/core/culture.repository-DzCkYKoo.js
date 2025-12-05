import { CultureService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as u } from "@umbraco-cms/backoffice/class-api";
class i {
  #t;
  /**
   * Creates an instance of UmbLanguageServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLanguageServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Get a list of cultures on the server
   * @param root0
   * @param root0.skip
   * @param root0.take
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async getCollection({ skip: t, take: e }) {
    return s(this.#t, o.getCulture({ query: { skip: t, take: e } }));
  }
}
class n extends u {
  #t;
  constructor(t) {
    super(t), this.#t = new i(this);
  }
  requestCultures({ skip: t, take: e } = { skip: 0, take: 1e3 }) {
    return this.#t.getCollection({ skip: t, take: e });
  }
  destroy() {
  }
}
export {
  n as UmbCultureRepository,
  n as api
};
//# sourceMappingURL=culture.repository-DzCkYKoo.js.map

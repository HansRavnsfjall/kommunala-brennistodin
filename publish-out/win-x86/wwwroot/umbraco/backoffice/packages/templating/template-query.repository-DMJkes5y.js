import { TemplateService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as r } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  // TODO: When we map the server models to our own models, we need to have a localization property.
  // For example, the OperatorModel.NOT_EQUALS need to use the localization key "template_doesNotEqual"
  /**
   * Creates an instance of UmbTemplateQueryServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateQueryServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Fetches the query builder settings from the server
   * @returns {*}
   * @memberof UmbTemplateQueryServerDataSource
   */
  async getTemplateQuerySettings() {
    return r(this.#e, t.getTemplateQuerySettings());
  }
  /**
   * Executes a query builder query on the server
   * @param {UmbExecuteTemplateQueryRequestModel} args
   * @returns {*}
   * @memberof UmbTemplateQueryServerDataSource
   */
  async executeTemplateQuery(e) {
    const o = {
      rootDocument: e.rootDocument ? { id: e.rootDocument.unique } : null,
      documentTypeAlias: e.documentTypeAlias,
      filters: e.filters,
      sort: e.sort,
      take: e.take
    };
    return r(this.#e, t.postTemplateQueryExecute({ body: o }));
  }
}
class a extends s {
  #e;
  constructor(e) {
    super(e), this.#e = new m(this);
  }
  async requestTemplateQuerySettings() {
    return this.#e.getTemplateQuerySettings();
  }
  async executeTemplateQuery(e) {
    return this.#e.executeTemplateQuery(e);
  }
}
export {
  a as UmbTemplateQueryRepository,
  a as default
};
//# sourceMappingURL=template-query.repository-DMJkes5y.js.map

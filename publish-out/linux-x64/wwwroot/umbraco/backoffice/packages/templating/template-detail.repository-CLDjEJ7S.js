import { c as s, U as m } from "./template-item.store.context-token-rCTaUJ7s.js";
import { UmbId as c } from "@umbraco-cms/backoffice/id";
import { TemplateService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class l {
  #t;
  /**
   * Creates an instance of UmbTemplateServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Creates a new Template scaffold
   * @param {Partial<UmbTemplateDetailModel>} [preset]
   * @returns { CreateTemplateRequestModel }
   * @memberof UmbTemplateServerDataSource
   */
  async createScaffold(t = {}) {
    return { data: {
      entityType: s,
      unique: c.new(),
      name: "",
      alias: "",
      content: `@using Umbraco.Cms.Web.Common.PublishedModels;
@inherits Umbraco.Cms.Web.Common.Views.UmbracoViewPage
@{
	Layout = null;
}`,
      masterTemplate: null,
      ...t
    } };
  }
  /**
   * Fetches a Template with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbTemplateServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: e, error: a } = await n(this.#t, r.getTemplateById({ path: { id: t } }));
    return a || !e ? { error: a } : { data: {
      entityType: s,
      unique: e.id,
      name: e.name,
      content: e.content || null,
      alias: e.alias,
      masterTemplate: e.masterTemplate ? { unique: e.masterTemplate.id } : null
    } };
  }
  /**
   * Inserts a new Template on the server
   * @param {UmbTemplateDetailModel} model
   * @returns {*}
   * @memberof UmbTemplateServerDataSource
   */
  async create(t) {
    if (!t) throw new Error("Template is missing");
    const e = {
      id: t.unique,
      name: t.name,
      content: t.content,
      alias: t.alias
    }, { data: a, error: i } = await n(
      this.#t,
      r.postTemplate({
        body: e
      })
    );
    return a ? this.read(a) : { error: i };
  }
  /**
   * Updates a Template on the server
   * @param {UmbTemplateDetailModel} Template
   * @param model
   * @returns {*}
   * @memberof UmbTemplateServerDataSource
   */
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const e = {
      name: t.name,
      content: t.content,
      alias: t.alias
    }, { error: a } = await n(
      this.#t,
      r.putTemplateById({
        path: { id: t.unique },
        body: e
      })
    );
    return a ? { error: a } : this.read(t.unique);
  }
  /**
   * Deletes a Template on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbTemplateServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    return n(
      this.#t,
      r.deleteTemplateById({
        path: { id: t }
      })
    );
  }
}
class h extends u {
  constructor(t) {
    super(t, l, m);
  }
}
export {
  h as UmbTemplateDetailRepository,
  h as default
};
//# sourceMappingURL=template-detail.repository-CLDjEJ7S.js.map

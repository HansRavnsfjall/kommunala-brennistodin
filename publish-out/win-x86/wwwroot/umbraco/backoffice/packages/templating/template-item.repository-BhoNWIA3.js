import { c as s, a as m } from "./template-item.store.context-token-rCTaUJ7s.js";
import { t as o } from "./template-item.server.cache-CDbdm-cr.js";
import { TemplateService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as i } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as p, UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class u extends i {
  constructor(e) {
    super(e, {
      getItems: (a) => n.getItemTemplate({ query: { id: a } }),
      dataCache: o,
      getUniqueMethod: (a) => a.id
    });
  }
}
class T extends p {
  #e = new u(this);
  /**
   * Creates an instance of UmbTemplateItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemplateItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: I
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: a, error: r } = await this.#e.getItems(e);
    return { data: this._getMappedItems(a), error: r };
  }
}
const I = (t) => ({
  entityType: s,
  unique: t.id,
  name: t.name,
  alias: t.alias
});
class U extends c {
  constructor(e) {
    super(e, T, m);
  }
}
export {
  U as UmbTemplateItemRepository,
  U as default
};
//# sourceMappingURL=template-item.repository-BhoNWIA3.js.map

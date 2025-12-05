import { z as s, b as i, m } from "./paths-BPzgB6U7.js";
import { DictionaryService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as n } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as c, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class I extends n {
  constructor(e) {
    super(e, {
      getItems: (a) => o.getItemDictionary({ query: { id: a } }),
      dataCache: s,
      getUniqueMethod: (a) => a.id
    });
  }
}
class u extends c {
  #e = new I(this);
  /**
   * Creates an instance of UmbDictionaryItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: d
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: a, error: r } = await this.#e.getItems(e);
    return { data: this._getMappedItems(a), error: r };
  }
}
const d = (t) => ({
  entityType: i,
  unique: t.id,
  name: t.name
});
class T extends p {
  constructor(e) {
    super(e, u, m);
  }
}
export {
  T as UmbDictionaryItemRepository,
  T as api
};
//# sourceMappingURL=dictionary-item.repository-Rz6BZm4v.js.map

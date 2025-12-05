import { U as r } from "./clipboard-local-storage.manager-BePfLXgL.js";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
import { i as s } from "./manifests-D6Yzql_a.js";
import { UmbItemRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class n extends i {
  #e = new r(this);
  /**
   * Gets items from local storage
   * @param {Array<string>} unique
   * @memberof UmbClipboardEntryItemLocalStorageDataSource
   */
  async getItems(t) {
    const { entries: o } = await this.#e.getEntries();
    return { data: o.filter((e) => t.includes(e.unique)).map((e) => ({
      entityType: e.entityType,
      unique: e.unique,
      name: e.name,
      icon: e.icon,
      meta: e.meta,
      createDate: e.createDate,
      updateDate: e.updateDate
    })) };
  }
}
class g extends m {
  constructor(t) {
    super(t, n, s);
  }
}
export {
  g as UmbClipboardEntryItemRepository,
  g as api
};
//# sourceMappingURL=clipboard-entry-item.repository-CIuifbrD.js.map

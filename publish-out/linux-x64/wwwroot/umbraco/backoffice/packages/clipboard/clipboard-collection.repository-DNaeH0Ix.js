import { U as r } from "./clipboard-local-storage.manager-BePfLXgL.js";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { UmbRepositoryBase as i } from "@umbraco-cms/backoffice/repository";
class s extends l {
  #o = new r(this);
  async getCollection(o) {
    const { entries: e, total: a } = await this.#o.filter(o);
    return { data: { items: e, total: a } };
  }
}
class p extends i {
  #o = new s(this);
  async requestCollection(o) {
    return this.#o.getCollection(o);
  }
}
export {
  p as UmbClipboardCollectionRepository,
  p as api
};
//# sourceMappingURL=clipboard-collection.repository-DNaeH0Ix.js.map

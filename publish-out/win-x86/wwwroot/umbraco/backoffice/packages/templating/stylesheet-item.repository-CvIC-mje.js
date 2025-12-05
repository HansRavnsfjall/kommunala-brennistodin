import { b as i, U as m } from "./entity-CA4W0tlV.js";
import { s as l, d as p } from "./stylesheet-picker-modal.token-C6nznOkG.js";
import { StylesheetService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as u } from "@umbraco-cms/backoffice/management-api";
import { UmbServerFilePathUniqueSerializer as S } from "@umbraco-cms/backoffice/server-file-system";
import { UmbControllerBase as E } from "@umbraco-cms/backoffice/class-api";
import { UmbItemRepositoryBase as U } from "@umbraco-cms/backoffice/repository";
class T extends u {
  constructor(t) {
    super(t, {
      getItems: (r) => h.getItemStylesheet({ query: { path: r } }),
      dataCache: l,
      getUniqueMethod: (r) => r.path
    });
  }
}
class c extends E {
  #e = new S();
  #t = new T(this);
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbStylesheetItemServerDataSource
   */
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const r = t.map((a) => {
      const e = this.#e.toServerPath(a);
      return e || null;
    }).filter((a) => a !== null), { data: n, error: o } = await this.#t.getItems(r);
    return n ? { data: n.map((e) => ({
      entityType: e.isFolder ? i : m,
      unique: this.#e.toUnique(e.path),
      parentUnique: e.parent ? this.#e.toUnique(e.parent.path) : null,
      name: e.name,
      isFolder: e.isFolder
    })) } : { error: o };
  }
}
class M extends U {
  constructor(t) {
    super(t, c, p);
  }
}
export {
  M as UmbStylesheetItemRepository,
  M as default
};
//# sourceMappingURL=stylesheet-item.repository-CvIC-mje.js.map

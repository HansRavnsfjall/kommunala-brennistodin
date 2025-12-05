import { d as o, b as m, f as p } from "./partial-view-workspace.context-token-DXd6FPys.js";
import { p as l } from "./partial-view-item.server.cache-DJedP-yc.js";
import { PartialViewService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as h } from "@umbraco-cms/backoffice/management-api";
import { UmbServerFilePathUniqueSerializer as I } from "@umbraco-cms/backoffice/server-file-system";
import { UmbControllerBase as U } from "@umbraco-cms/backoffice/class-api";
import { UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class P extends h {
  constructor(t) {
    super(t, {
      getItems: (r) => u.getItemPartialView({ query: { path: r } }),
      dataCache: l,
      getUniqueMethod: (r) => r.path
    });
  }
}
class T extends U {
  #e = new I();
  #t = new P(this);
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbPartialViewItemServerDataSource
   */
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const r = t.map((a) => {
      const e = this.#e.toServerPath(a);
      return e || null;
    }).filter((a) => a !== null), { data: s, error: n } = await this.#t.getItems(r);
    return s ? { data: s.map((e) => ({
      entityType: e.isFolder ? o : m,
      unique: this.#e.toUnique(e.path),
      parentUnique: e.parent ? this.#e.toUnique(e.parent.path) : null,
      name: e.name,
      isFolder: e.isFolder,
      path: e.path
    })) } : { error: n };
  }
}
class M extends c {
  constructor(t) {
    super(t, T, p);
  }
}
export {
  M as UmbPartialViewItemRepository,
  M as default
};
//# sourceMappingURL=partial-view-item.repository-DgKhhK39.js.map

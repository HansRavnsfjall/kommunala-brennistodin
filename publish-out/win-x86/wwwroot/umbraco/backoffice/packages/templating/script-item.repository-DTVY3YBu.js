import { w as o, u as m } from "./manifests-CH0eoEje.js";
import { s as p } from "./script-item.server.cache-BV_VPxCk.js";
import { ScriptService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as c } from "@umbraco-cms/backoffice/management-api";
import { UmbServerFilePathUniqueSerializer as h } from "@umbraco-cms/backoffice/server-file-system";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { U } from "./script-item.store.context-token-5j5GfCRe.js";
import { UmbItemRepositoryBase as I } from "@umbraco-cms/backoffice/repository";
class S extends c {
  constructor(t) {
    super(t, {
      getItems: (r) => u.getItemScript({ query: { path: r } }),
      dataCache: p,
      getUniqueMethod: (r) => r.path
    });
  }
}
class T extends l {
  #e = new h();
  #t = new S(this);
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbScriptItemServerDataSource
   */
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const r = t.map((a) => {
      const e = this.#e.toServerPath(a);
      return e || null;
    }).filter((a) => a !== null), { data: i, error: n } = await this.#t.getItems(r);
    return i ? { data: i.map((e) => ({
      entityType: e.isFolder ? o : m,
      unique: this.#e.toUnique(e.path),
      parentUnique: e.parent ? this.#e.toUnique(e.parent.path) : null,
      name: e.name,
      isFolder: e.isFolder,
      path: e.path
    })) } : { error: n };
  }
}
class P extends I {
  constructor(t) {
    super(t, T, U);
  }
}
export {
  P as UmbScriptItemRepository,
  P as default
};
//# sourceMappingURL=script-item.repository-DTVY3YBu.js.map

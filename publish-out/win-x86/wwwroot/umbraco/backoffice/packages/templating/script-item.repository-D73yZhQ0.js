import { w as n, u as p } from "./manifests-cHFy6NXv.js";
import { UmbServerFilePathUniqueSerializer as m } from "@umbraco-cms/backoffice/server-file-system";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import { ScriptService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { U as h } from "./script-item.store.context-token-5j5GfCRe.js";
import { UmbItemRepositoryBase as l } from "@umbraco-cms/backoffice/repository";
class S {
  #t;
  #r = new m();
  /**
   * Creates an instance of UmbScriptItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbScriptItemServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbScriptItemServerDataSource
   */
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const i = t.map((e) => {
      const r = this.#r.toServerPath(e);
      return r || null;
    }).filter((e) => e !== null), { data: a, error: o } = await u(
      this.#t,
      c.getItemScript({
        query: { path: i }
      })
    );
    return a ? { data: a.map((r) => ({
      entityType: r.isFolder ? n : p,
      unique: this.#r.toUnique(r.path),
      parentUnique: r.parent ? this.#r.toUnique(r.parent.path) : null,
      name: r.name,
      isFolder: r.isFolder,
      path: r.path
    })) } : { error: o };
  }
}
class P extends l {
  constructor(t) {
    super(t, S, h);
  }
}
export {
  P as UmbScriptItemRepository,
  P as default
};
//# sourceMappingURL=script-item.repository-D73yZhQ0.js.map

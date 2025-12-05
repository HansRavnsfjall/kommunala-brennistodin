import { q as n, o as l, c as p } from "./partial-view-workspace.context-token-DmMOFZmM.js";
import { UmbServerFilePathUniqueSerializer as m } from "@umbraco-cms/backoffice/server-file-system";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import { PartialViewService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class I {
  #e;
  #r = new m();
  /**
   * Creates an instance of UmbPartialViewItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbPartialViewItemServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbPartialViewItemServerDataSource
   */
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const s = e.map((t) => {
      const r = this.#r.toServerPath(t);
      return r || null;
    }).filter((t) => t !== null), { data: a, error: o } = await u(
      this.#e,
      h.getItemPartialView({
        query: { path: s }
      })
    );
    return a ? { data: a.map((r) => ({
      entityType: r.isFolder ? n : l,
      unique: this.#r.toUnique(r.path),
      parentUnique: r.parent ? this.#r.toUnique(r.parent.path) : null,
      name: r.name,
      isFolder: r.isFolder,
      path: r.path
    })) } : { error: o };
  }
}
class f extends c {
  constructor(e) {
    super(e, I, p);
  }
}
export {
  f as UmbPartialViewItemRepository,
  f as default
};
//# sourceMappingURL=partial-view-item.repository-Cdic-uEH.js.map

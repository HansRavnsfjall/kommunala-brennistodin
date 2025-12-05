import { e as h } from "./partial-view-workspace.context-token-DXd6FPys.js";
import { U as c } from "./partial-view-detail.server.data-source-B1K_Wnqq.js";
import { UmbServerFilePathUniqueSerializer as l, appendFileExtensionIfNeeded as p, UmbRenameServerFileRepositoryBase as w } from "@umbraco-cms/backoffice/server-file-system";
import { PartialViewService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as P } from "@umbraco-cms/backoffice/resources";
class U {
  #e;
  #r;
  #t = new l();
  constructor(e) {
    this.#e = e, this.#r = new c(this.#e);
  }
  /**
   * Rename Partial View
   * @param {string} unique
   * @param {string} name
   * @returns {*}
   * @memberof UmbRenamePartialViewServerDataSource
   */
  async rename(e, t) {
    if (!e) throw new Error("Unique is missing");
    if (!t) throw new Error("Name is missing");
    const i = this.#t.toServerPath(e);
    if (!i) throw new Error("Path is missing");
    const o = {
      name: p(t, ".cshtml")
    }, { data: r, error: s } = await P(
      this.#e,
      u.putPartialViewByPathRename({
        path: { path: i },
        body: o
      })
    );
    if (r && typeof r == "string") {
      const n = decodeURIComponent(r), m = this.#t.toUnique(n);
      return this.#r.read(m);
    }
    return { error: s };
  }
}
class v extends w {
  constructor(e) {
    super(e, U, h);
  }
}
export {
  v as UmbRenamePartialViewRepository,
  v as default
};
//# sourceMappingURL=rename-partial-view.repository-DfPouOdE.js.map

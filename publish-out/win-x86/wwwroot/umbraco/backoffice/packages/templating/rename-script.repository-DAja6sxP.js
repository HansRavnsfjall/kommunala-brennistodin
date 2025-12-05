import "./script-item.store.context-token-5j5GfCRe.js";
import { g as c } from "./manifests-CH0eoEje.js";
import { U as p } from "./script-detail.server.data-source-mTbkgNna.js";
import { UmbServerFilePathUniqueSerializer as h, appendFileExtensionIfNeeded as S, UmbRenameServerFileRepositoryBase as u } from "@umbraco-cms/backoffice/server-file-system";
import { ScriptService as U } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as f } from "@umbraco-cms/backoffice/resources";
class d {
  #e;
  #r;
  #t = new h();
  constructor(e) {
    this.#e = e, this.#r = new p(this.#e);
  }
  /**
   * Rename Script
   * @param {string} unique
   * @param {string} name
   * @returns {*}
   * @memberof UmbRenameScriptServerDataSource
   */
  async rename(e, t) {
    if (!e) throw new Error("Unique is missing");
    if (!t) throw new Error("Name is missing");
    const i = this.#t.toServerPath(e);
    if (!i) throw new Error("Path is missing");
    const s = {
      name: S(t, ".js")
    }, { data: r, error: a } = await f(
      this.#e,
      U.putScriptByPathRename({
        path: { path: i },
        body: s
      })
    );
    if (r && typeof r == "string") {
      const n = decodeURIComponent(r), m = this.#t.toUnique(n);
      return this.#r.read(m);
    }
    return { error: a };
  }
}
class y extends u {
  constructor(e) {
    super(e, d, c);
  }
}
export {
  y as UmbRenameScriptRepository,
  y as default
};
//# sourceMappingURL=rename-script.repository-DAja6sxP.js.map

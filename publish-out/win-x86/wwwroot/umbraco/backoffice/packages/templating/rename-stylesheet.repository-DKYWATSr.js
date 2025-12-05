import { a as h } from "./stylesheet-picker-modal.token-C6nznOkG.js";
import { StylesheetService as p } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/management-api";
import { UmbServerFilePathUniqueSerializer as c, appendFileExtensionIfNeeded as S, UmbRenameServerFileRepositoryBase as l } from "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/repository";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/store";
import { U } from "./stylesheet-detail.server.data-source-52KA_Eh_.js";
class f {
  #e;
  #t;
  #r = new c();
  constructor(e) {
    this.#e = e, this.#t = new U(this.#e);
  }
  /**
   * Rename Stylesheet
   * @param {string} unique
   * @param {string} name
   * @returns {*}
   * @memberof UmbRenameStylesheetServerDataSource
   */
  async rename(e, r) {
    if (!e) throw new Error("Unique is missing");
    if (!r) throw new Error("Name is missing");
    const i = this.#r.toServerPath(e);
    if (!i) throw new Error("Path is missing");
    const s = {
      name: S(r, ".css")
    }, { data: t, error: a } = await u(
      this.#e,
      p.putStylesheetByPathRename({
        path: { path: i },
        body: s
      })
    );
    if (t && typeof t == "string") {
      const n = decodeURIComponent(t), m = this.#r.toUnique(n);
      return this.#t.read(m);
    }
    return { error: a };
  }
}
class D extends l {
  constructor(e) {
    super(e, f, h);
  }
}
export {
  D as UmbRenameStylesheetRepository,
  D as default
};
//# sourceMappingURL=rename-stylesheet.repository-DKYWATSr.js.map

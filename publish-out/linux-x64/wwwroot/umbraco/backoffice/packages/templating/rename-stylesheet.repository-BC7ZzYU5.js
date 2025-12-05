import { UmbServerFilePathUniqueSerializer as h, appendFileExtensionIfNeeded as c, UmbRenameServerFileRepositoryBase as S } from "@umbraco-cms/backoffice/server-file-system";
import { tryExecute as p } from "@umbraco-cms/backoffice/resources";
import { StylesheetService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { a as u } from "./stylesheet-picker-modal.token-CeSiGQ35.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { U } from "./stylesheet-detail.server.data-source-BPMI_22C.js";
class f {
  #e;
  #t;
  #r = new h();
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
    const o = {
      name: c(r, ".css")
    }, { data: t, error: a } = await p(
      this.#e,
      l.putStylesheetByPathRename({
        path: { path: i },
        body: o
      })
    );
    if (t && typeof t == "string") {
      const n = decodeURIComponent(t), m = this.#r.toUnique(n);
      return this.#t.read(m);
    }
    return { error: a };
  }
}
class b extends S {
  constructor(e) {
    super(e, f, u);
  }
}
export {
  b as UmbRenameStylesheetRepository,
  b as default
};
//# sourceMappingURL=rename-stylesheet.repository-BC7ZzYU5.js.map

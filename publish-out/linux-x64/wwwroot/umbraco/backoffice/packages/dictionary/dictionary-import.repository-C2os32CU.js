import { UmbDictionaryDetailRepository as s } from "./dictionary-detail.repository-7CoO_NLT.js";
import "./paths-pWW_vsmu.js";
import { DictionaryService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as m } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
class p {
  #r;
  constructor(r) {
    this.#r = r;
  }
  /**
   * @description - Import a dictionary
   * @param {string} temporaryFileUnique
   * @param {string?} parentUnique
   * @returns {*}
   * @memberof UmbDictionaryImportServerDataSource
   */
  async import(r, i) {
    if (!r) throw new Error("temporaryFileUnique is required");
    if (i === void 0) throw new Error("parentUnique is required");
    const t = {
      temporaryFile: { id: r },
      parent: i ? { id: i } : null
    };
    return m(
      this.#r,
      n.postDictionaryImport({
        body: t
      })
    );
  }
}
class d extends a {
  #r;
  #i;
  constructor(r) {
    super(r), this.#r = new p(r), this.#i = new s(r);
  }
  /**
   * @description - Import a dictionary
   * @param {string} temporaryFileUnique
   * @param {string} [parentUnique]
   * @returns {*}
   * @memberof UmbDictionaryImportRepository
   */
  async requestImport(r, i) {
    if (!r) throw new Error("Temporary file unique is missing");
    if (i === void 0) throw new Error("Parent unique is missing");
    const { data: t, error: e } = await this.#r.import(r, i);
    return t && typeof t == "string" ? this.#i.requestByUnique(t) : { data: t, error: e };
  }
}
export {
  d as UmbDictionaryImportRepository,
  d as api
};
//# sourceMappingURL=dictionary-import.repository-C2os32CU.js.map

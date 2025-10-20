import { b as o, l as u } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { LanguageService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as r } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class f {
  #a;
  /**
   * Creates an instance of UmbLanguageServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbLanguageServerDataSource
   */
  constructor(a) {
    this.#a = a;
  }
  /**
   * Creates a new Language scaffold
   * @param {Partial<UmbLanguageDetailModel>} [preset]
   * @returns { CreateLanguageRequestModel }
   * @memberof UmbLanguageServerDataSource
   */
  async createScaffold(a = {}) {
    return { data: {
      entityType: o,
      fallbackIsoCode: null,
      isDefault: !1,
      isMandatory: !1,
      name: "",
      unique: "",
      ...a
    } };
  }
  /**
   * Fetches a Language with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async read(a) {
    if (!a) throw new Error("Unique is missing");
    const { data: e, error: t } = await r(
      this.#a,
      s.getLanguageByIsoCode({ path: { isoCode: a } })
    );
    return t || !e ? { error: t } : { data: {
      entityType: o,
      fallbackIsoCode: e.fallbackIsoCode || null,
      isDefault: e.isDefault,
      isMandatory: e.isMandatory,
      name: e.name,
      unique: e.isoCode
    } };
  }
  /**
   * Inserts a new Language on the server
   * @param {UmbLanguageDetailModel} model
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async create(a) {
    if (!a) throw new Error("Language is missing");
    const e = {
      fallbackIsoCode: a.fallbackIsoCode,
      isDefault: a.isDefault,
      isMandatory: a.isMandatory,
      isoCode: a.unique,
      name: a.name
    }, { data: t, error: n } = await r(
      this.#a,
      s.postLanguage({
        body: e
      })
    );
    return t && typeof t == "string" ? this.read(t) : { error: n };
  }
  /**
   * Updates a Language on the server
   * @param {UmbLanguageDetailModel} Language
   * @param model
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async update(a) {
    if (!a.unique) throw new Error("Unique is missing");
    const e = {
      fallbackIsoCode: a.fallbackIsoCode,
      isDefault: a.isDefault,
      isMandatory: a.isMandatory,
      name: a.name
    }, { error: t } = await r(
      this.#a,
      s.putLanguageByIsoCode({
        path: { isoCode: a.unique },
        body: e
      })
    );
    return t ? { error: t } : this.read(a.unique);
  }
  /**
   * Deletes a Language on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbLanguageServerDataSource
   */
  async delete(a) {
    if (!a) throw new Error("Unique is missing");
    return r(
      this.#a,
      s.deleteLanguageByIsoCode({
        path: { isoCode: a }
      })
    );
  }
}
class p extends c {
  constructor(a) {
    super(a, f, u);
  }
  async create(a) {
    return super.create(a, null);
  }
}
export {
  p as UmbLanguageDetailRepository,
  p as default
};
//# sourceMappingURL=language-detail.repository-B-DILFxF.js.map

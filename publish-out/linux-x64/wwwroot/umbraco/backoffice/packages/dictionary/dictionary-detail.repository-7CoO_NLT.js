import { b as e, i as y } from "./paths-pWW_vsmu.js";
import { UmbId as u } from "@umbraco-cms/backoffice/id";
import { DictionaryService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class p {
  #t;
  /**
   * Creates an instance of UmbDictionaryServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDictionaryServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Creates a new Dictionary scaffold
   * @returns { CreateDictionaryRequestModel }
   * @memberof UmbDictionaryServerDataSource
   */
  async createScaffold() {
    return { data: {
      entityType: e,
      unique: u.new(),
      name: "",
      translations: []
    } };
  }
  /**
   * Fetches a Dictionary with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDictionaryServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: r, error: i } = await s(this.#t, n.getDictionaryById({ path: { id: t } }));
    return i || !r ? { error: i } : { data: {
      entityType: e,
      unique: r.id,
      name: r.name,
      translations: r.translations
    } };
  }
  /**
   * Inserts a new Dictionary on the server
   * @param {UmbDictionaryDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDictionaryServerDataSource
   */
  async create(t, r) {
    if (!t) throw new Error("Dictionary is missing");
    const i = {
      id: t.unique,
      parent: r ? { id: r } : null,
      name: t.name,
      translations: t.translations
    }, { data: a, error: c } = await s(
      this.#t,
      n.postDictionary({
        body: i
      })
    );
    return a && typeof a == "string" ? this.read(a) : { error: c };
  }
  /**
   * Updates a Dictionary on the server
   * @param {UmbDictionaryDetailModel} Dictionary
   * @param model
   * @returns {*}
   * @memberof UmbDictionaryServerDataSource
   */
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const r = {
      name: t.name,
      translations: t.translations
    }, { error: i } = await s(
      this.#t,
      n.putDictionaryById({
        path: { id: t.unique },
        body: r
      })
    );
    return i ? { error: i } : this.read(t.unique);
  }
  /**
   * Deletes a Dictionary on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDictionaryServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    return s(
      this.#t,
      n.deleteDictionaryById({
        path: { id: t }
      })
    );
  }
}
class T extends d {
  constructor(t) {
    super(t, p, y);
  }
}
export {
  T as UmbDictionaryDetailRepository,
  T as api
};
//# sourceMappingURL=dictionary-detail.repository-7CoO_NLT.js.map

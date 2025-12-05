import { n as a, l as u } from "./constants-D9L2jSGX.js";
import { DocumentTypeService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbId as c } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class p {
  #e;
  /**
   * Creates an instance of UmbDocumentTypeFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a scaffold for a Document Type folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  async createScaffold(e) {
    return { data: {
      entityType: a,
      unique: c.new(),
      name: "",
      ...e
    } };
  }
  /**
   * Fetches a Document Type folder from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: n } = await i(
      this.#e,
      t.getDocumentTypeFolderById({
        path: { id: e }
      })
    );
    return r ? { data: {
      entityType: a,
      unique: r.id,
      name: r.name
    } } : { error: n };
  }
  /**
   * Creates a Document Type folder on the server
   * @param {UmbCreateFolderModel} model
   * @returns {*}
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  async create(e, r) {
    if (!e) throw new Error("Model is missing");
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Name is missing");
    const n = {
      id: e.unique,
      parent: r ? { id: r } : null,
      name: e.name
    }, { error: s } = await i(
      this.#e,
      t.postDocumentTypeFolder({
        body: n
      })
    );
    return s ? { error: s } : this.read(e.unique);
  }
  /**
   * Updates a Document Type folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbDocumentTypeFolderServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Folder name is missing");
    const { error: r } = await i(
      this.#e,
      t.putDocumentTypeFolderById({
        path: { id: e.unique },
        body: { name: e.name }
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a Document Type folder on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentTypeServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return i(
      this.#e,
      t.deleteDocumentTypeFolderById({
        path: { id: e }
      })
    );
  }
}
class w extends m {
  constructor(e) {
    super(e, p, u);
  }
}
export {
  w as UmbDocumentTypeFolderRepository,
  w as api
};
//# sourceMappingURL=document-type-folder.repository-Bzu-6mUl.js.map

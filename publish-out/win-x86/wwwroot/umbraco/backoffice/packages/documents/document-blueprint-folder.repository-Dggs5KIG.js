import { b as o, r as u } from "./paths-BF32ZUyU.js";
import { DocumentBlueprintService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbId as c } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class p {
  #r;
  /**
   * Creates an instance of UmbDocumentBlueprintFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentBlueprintFolderServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Creates a scaffold for a Document Blueprint folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbDocumentBlueprintFolderServerDataSource
   */
  async createScaffold(r) {
    return { data: {
      entityType: o,
      unique: c.new(),
      name: "",
      ...r
    } };
  }
  /**
   * Fetches a Document Blueprint folder from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentBlueprintFolderServerDataSource
   */
  async read(r) {
    if (!r) throw new Error("Unique is missing");
    const { data: e, error: n } = await i(
      this.#r,
      t.getDocumentBlueprintFolderById({
        path: { id: r }
      })
    );
    return e ? { data: {
      entityType: o,
      unique: e.id,
      name: e.name
    } } : { error: n };
  }
  /**
   * Creates a Document Blueprint folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbDocumentBlueprintFolderServerDataSource
   */
  async create(r, e) {
    if (!r) throw new Error("Model is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Name is missing");
    const n = {
      id: r.unique,
      parent: e ? { id: e } : null,
      name: r.name
    }, { error: s } = await i(
      this.#r,
      t.postDocumentBlueprintFolder({
        body: n
      })
    );
    return s ? { error: s } : this.read(r.unique);
  }
  /**
   * Updates a Document Blueprint folder on the server
   * @param {UmbFolderModel} model
   * @returns {*}
   * @memberof UmbDocumentBlueprintFolderServerDataSource
   */
  async update(r) {
    if (!r) throw new Error("Model is missing");
    if (!r.unique) throw new Error("Unique is missing");
    if (!r.name) throw new Error("Folder name is missing");
    const { error: e } = await i(
      this.#r,
      t.putDocumentBlueprintFolderById({
        path: { id: r.unique },
        body: { name: r.name }
      })
    );
    return e ? { error: e } : this.read(r.unique);
  }
  /**
   * Deletes a Document Blueprint folder on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async delete(r) {
    if (!r) throw new Error("Unique is missing");
    return i(
      this.#r,
      t.deleteDocumentBlueprintFolderById({
        path: { id: r }
      })
    );
  }
}
class y extends m {
  constructor(r) {
    super(r, p, u);
  }
}
export {
  y as UmbDocumentBlueprintFolderRepository,
  y as api
};
//# sourceMappingURL=document-blueprint-folder.repository-Dggs5KIG.js.map

import { q as s, k as m } from "./partial-view-workspace.context-token-DmMOFZmM.js";
import { UmbServerFilePathUniqueSerializer as h } from "@umbraco-cms/backoffice/server-file-system";
import { PartialViewService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as o } from "@umbraco-cms/backoffice/resources";
import { UmbId as u } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class f {
  #e;
  #t = new h();
  /**
   * Creates an instance of UmbPartialViewFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbPartialViewFolderServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Creates a scaffold for a Partial View folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbPartialViewFolderServerDataSource
   */
  async createScaffold(t) {
    return { data: {
      entityType: s,
      unique: u.new(),
      name: "",
      ...t
    } };
  }
  /**
   * Fetches a Partial View folder from the server
   * @param {string} unique
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbPartialViewFolderServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Cannot read partial view folder without a path");
    const { data: r, error: i } = await o(
      this.#e,
      n.getPartialViewFolderByPath({
        path: { path: e }
      })
    );
    return r ? { data: {
      entityType: s,
      unique: this.#t.toUnique(r.path),
      parentUnique: r.parent ? this.#t.toUnique(r.parent.path) : null,
      name: r.name
    } } : { error: i };
  }
  /**
   * Creates a Partial View folder on the server
   * @param {UmbFolderModel} model
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbPartialViewFolderServerDataSource
   */
  async create(t, e) {
    if (!t) throw new Error("Data is missing");
    if (!t.unique) throw new Error("Unique is missing");
    if (!t.name) throw new Error("Name is missing");
    const r = new h().toServerPath(e), i = {
      parent: r ? { path: r } : null,
      name: t.name
    }, { data: a, error: w } = await o(
      this.#e,
      n.postPartialViewFolder({
        body: i
      })
    );
    if (a && typeof a == "string") {
      const c = decodeURIComponent(a), l = this.#t.toUnique(c);
      return this.read(l);
    }
    return { error: w };
  }
  /**
   * Deletes a Partial View folder on the server
   * @param {string} unique
   * @returns {UmbDataSourceErrorResponse}
   * @memberof UmbPartialViewServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const e = this.#t.toServerPath(t);
    if (!e) throw new Error("Cannot delete partial view folder without a path");
    return o(
      this.#e,
      n.deletePartialViewFolderByPath({
        path: { path: e }
      })
    );
  }
  async update() {
    throw new Error("Updating is not supported");
  }
}
class T extends d {
  constructor(t) {
    super(t, f, m);
  }
}
export {
  T as UmbPartialViewFolderRepository,
  T as api
};
//# sourceMappingURL=partial-view-folder.repository-DolA6GAA.js.map

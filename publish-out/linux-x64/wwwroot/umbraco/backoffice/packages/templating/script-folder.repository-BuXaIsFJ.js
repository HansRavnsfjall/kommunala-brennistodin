import { w as s, p as u } from "./manifests-cHFy6NXv.js";
import { UmbServerFilePathUniqueSerializer as p } from "@umbraco-cms/backoffice/server-file-system";
import { ScriptService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbId as f } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as w } from "@umbraco-cms/backoffice/repository";
class l {
  #r;
  #t = new p();
  /**
   * Creates an instance of UmbScriptFolderServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbScriptFolderServerDataSource
   */
  constructor(t) {
    this.#r = t;
  }
  /**
   * Creates a scaffold for a Script folder
   * @param {Partial<UmbFolderModel>} [preset]
   * @returns {*}
   * @memberof UmbScriptFolderServerDataSource
   */
  async createScaffold(t) {
    return { data: {
      entityType: s,
      unique: f.new(),
      name: "",
      ...t
    } };
  }
  /**
   * Fetches a Script folder from the server
   * @param {string} unique
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbScriptFolderServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const r = this.#t.toServerPath(t);
    if (!r) throw new Error("Cannot read script folder without a path");
    const { data: e, error: o } = await i(
      this.#r,
      n.getScriptFolderByPath({
        path: { path: r }
      })
    );
    return e ? { data: {
      entityType: s,
      unique: this.#t.toUnique(e.path),
      parentUnique: e.parent ? this.#t.toUnique(e.parent.path) : null,
      name: e.name
    } } : { error: o };
  }
  /**
   * Creates a Script folder on the server
   * @param {UmbFolderModel} model
   * @returns {UmbDataSourceResponse<UmbFolderModel>}
   * @memberof UmbScriptFolderServerDataSource
   */
  async create(t, r) {
    if (!t) throw new Error("Data is missing");
    if (!t.name) throw new Error("Name is missing");
    const e = new p().toServerPath(r), o = {
      parent: e ? { path: e } : null,
      name: t.name
    }, { data: a, error: c } = await i(
      this.#r,
      n.postScriptFolder({
        body: o
      })
    );
    if (a && typeof a == "string") {
      const d = decodeURIComponent(a), m = this.#t.toUnique(d);
      return this.read(m);
    }
    return { error: c };
  }
  /**
   * Deletes a Script folder on the server
   * @param {string} unique
   * @returns {UmbDataSourceErrorResponse}
   * @memberof UmbScriptServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    const r = this.#t.toServerPath(t);
    if (!r) throw new Error("Cannot delete script folder without a path");
    return i(
      this.#r,
      n.deleteScriptFolderByPath({
        path: { path: r }
      })
    );
  }
  async update() {
    throw new Error("Updating is not supported");
  }
}
class q extends w {
  constructor(t) {
    super(t, l, u);
  }
}
export {
  q as UmbScriptFolderRepository,
  q as default
};
//# sourceMappingURL=script-folder.repository-BuXaIsFJ.js.map

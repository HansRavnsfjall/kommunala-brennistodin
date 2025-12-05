import { a } from "./entity-CGrHYXC8.js";
import { RelationTypeService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { U as o } from "./relation-type-detail.store.context-token-Dk0XD8Vu.js";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class p {
  #e;
  /**
   * Creates an instance of UmbRelationTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbRelationTypeServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Fetches a Relation Type with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbRelationTypeServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: e, error: i } = await s(
      this.#e,
      n.getRelationTypeById({ path: { id: t } })
    );
    return i || !e ? { error: i } : { data: {
      alias: e.alias || "",
      child: e.childObject ? {
        objectType: {
          unique: e.childObject.id,
          name: e.childObject.name || ""
        }
      } : null,
      entityType: a,
      isBidirectional: e.isBidirectional,
      isDependency: e.isDependency,
      name: e.name,
      parent: e.parentObject ? {
        objectType: {
          unique: e.parentObject.id,
          name: e.parentObject.name || ""
        }
      } : null,
      unique: e.id
    } };
  }
}
class T extends c {
  #e;
  #t;
  #i = new p(this);
  constructor(t) {
    super(t), this.#e = this.consumeContext(o, (e) => {
      e && (this.#t = e);
    }).asPromise({ preventTimeout: !0 });
  }
  /**
   * Requests the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async requestByUnique(t) {
    if (!t) throw new Error("Unique is missing");
    await this.#e;
    const { data: e, error: i } = await this.#i.read(t);
    return e && this.#t?.append(e), { data: e, error: i, asObservable: () => this.#t.byUnique(t) };
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async byUnique(t) {
    if (!t) throw new Error("Unique is missing");
    return await this.#e, this.#t.byUnique(t);
  }
}
export {
  T as UmbRelationTypeDetailRepository,
  T as default
};
//# sourceMappingURL=relation-type-detail.repository-C4GweMi0.js.map

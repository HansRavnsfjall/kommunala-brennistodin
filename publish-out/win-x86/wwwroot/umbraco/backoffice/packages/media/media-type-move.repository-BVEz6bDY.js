import { MediaTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class c {
  #e;
  /**
   * Creates an instance of UmbMoveMediaTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveMediaTypeServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Move an item for the given id to the target unique
   * @param {string} unique
   * @param {(string | null)} targetUnique
   * @param args
   * @returns {*}
   * @memberof UmbMoveMediaTypeServerDataSource
   */
  async moveTo(e) {
    if (!e.unique) throw new Error("Unique is missing");
    if (e.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#e,
      r.putMediaTypeByIdMove({
        path: { id: e.unique },
        body: {
          target: e.destination.unique ? { id: e.destination.unique } : null
        }
      })
    );
  }
}
class f extends u {
  #e = new c(this);
  async requestMoveTo(e) {
    const { error: i } = await this.#e.moveTo(e);
    if (!i) {
      const t = await this.getContext(a);
      if (!t)
        throw new Error("Failed to load notification context");
      const n = { data: { message: "Moved" } };
      t.peek("positive", n);
    }
    return { error: i };
  }
}
export {
  f as UmbMoveMediaTypeRepository,
  f as api
};
//# sourceMappingURL=media-type-move.repository-BVEz6bDY.js.map

import { DataTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as a } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbMoveDataTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveDataTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Move an item for the given id to the target unique
   * @param {string} unique
   * @param {(string | null)} targetUnique
   * @param args
   * @returns {*}
   * @memberof UmbMoveDataTypeServerDataSource
   */
  async moveTo(t) {
    if (!t.unique) throw new Error("Unique is missing");
    if (t.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#t,
      r.putDataTypeByIdMove({
        path: { id: t.unique },
        body: {
          target: t.destination.unique ? { id: t.destination.unique } : null
        }
      })
    );
  }
}
class v extends u {
  #t = new c(this);
  async requestMoveTo(t) {
    const { error: o } = await this.#t.moveTo(t);
    if (!o) {
      const e = await this.getContext(a);
      if (!e)
        throw new Error("Notification context not found");
      const n = { data: { message: "Moved" } };
      e.peek("positive", n);
    }
    return { error: o };
  }
}
export {
  v as UmbMoveDataTypeRepository,
  v as api
};
//# sourceMappingURL=data-type-move.repository-SH_4ivkT.js.map

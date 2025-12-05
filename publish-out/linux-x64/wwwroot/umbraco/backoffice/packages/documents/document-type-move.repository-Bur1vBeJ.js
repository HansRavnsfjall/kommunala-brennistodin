import { DocumentTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as u } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbMoveDocumentTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveDocumentTypeServerDataSource
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
   * @memberof UmbMoveDocumentTypeServerDataSource
   */
  async moveTo(t) {
    if (!t.unique) throw new Error("Unique is missing");
    if (t.destination.unique === void 0) throw new Error("Destination unique is missing");
    return s(
      this.#t,
      r.putDocumentTypeByIdMove({
        path: { id: t.unique },
        body: {
          target: t.destination.unique ? { id: t.destination.unique } : null
        }
      })
    );
  }
}
class v extends a {
  #t = new c(this);
  async requestMoveTo(t) {
    const { error: o } = await this.#t.moveTo(t);
    if (!o) {
      const e = await this.getContext(u);
      if (!e)
        throw new Error("Notification context not found");
      const n = { data: { message: "Moved" } };
      e.peek("positive", n);
    }
    return { error: o };
  }
}
export {
  v as UmbMoveDocumentTypeRepository,
  v as api
};
//# sourceMappingURL=document-type-move.repository-Bur1vBeJ.js.map

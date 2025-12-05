import { DocumentService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as e } from "@umbraco-cms/backoffice/resources";
class r {
  #i;
  /**
   * Creates an instance of UmbMoveDocumentServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveDocumentServerDataSource
   */
  constructor(i) {
    this.#i = i;
  }
  /**
   * Move an item for the given id to the target unique
   * @param {string} unique
   * @param {(string | null)} targetUnique
   * @param args
   * @returns {*}
   * @memberof UmbMoveDocumentServerDataSource
   */
  async moveTo(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (i.destination.unique === void 0) throw new Error("Destination unique is missing");
    return e(
      this.#i,
      t.putDocumentByIdMove({
        path: { id: i.unique },
        body: {
          target: i.destination.unique ? { id: i.destination.unique } : null
        }
      }),
      { disableNotifications: !0 }
    );
  }
}
export {
  r as U
};
//# sourceMappingURL=document-move.server.data-source-BWjAbqUF.js.map

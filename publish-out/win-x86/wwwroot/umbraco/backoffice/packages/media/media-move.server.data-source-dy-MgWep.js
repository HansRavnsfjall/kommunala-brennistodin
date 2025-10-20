import { MediaService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as t } from "@umbraco-cms/backoffice/resources";
class u {
  #i;
  /**
   * Creates an instance of UmbMoveMediaServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMoveMediaServerDataSource
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
   * @memberof UmbMoveMediaServerDataSource
   */
  async moveTo(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (i.destination.unique === void 0) throw new Error("Destination unique is missing");
    return t(
      this.#i,
      e.putMediaByIdMove({
        path: { id: i.unique },
        body: {
          target: i.destination.unique ? { id: i.destination.unique } : null
        }
      })
    );
  }
}
export {
  u as U
};
//# sourceMappingURL=media-move.server.data-source-dy-MgWep.js.map

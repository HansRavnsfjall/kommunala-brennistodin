import { DocumentService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as t } from "@umbraco-cms/backoffice/resources";
class r {
  #i;
  /**
   * Creates an instance of UmbDuplicateDocumentServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateDocumentServerDataSource
   */
  constructor(i) {
    this.#i = i;
  }
  /**
   * Duplicate an item for the given id to the destination unique
   * @param {UmbDuplicateDocumentRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateDocumentServerDataSource
   */
  async duplicate(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (i.destination.unique === void 0) throw new Error("Destination unique is missing");
    return t(
      this.#i,
      e.postDocumentByIdCopy({
        path: { id: i.unique },
        body: {
          target: i.destination.unique ? { id: i.destination.unique } : null,
          relateToOriginal: i.relateToOriginal,
          includeDescendants: i.includeDescendants
        }
      }),
      { disableNotifications: !0 }
    );
  }
}
export {
  r as U
};
//# sourceMappingURL=document-duplicate.server.data-source-Dk_k0JV5.js.map

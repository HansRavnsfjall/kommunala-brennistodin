import { DocumentTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as s } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbDuplicateDocumentTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateDocumentTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Duplicate an item for the given id to the destination unique
   * @param {UmbDuplicateToRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateDocumentTypeServerDataSource
   */
  async duplicateTo(t) {
    if (!t.unique) throw new Error("Unique is missing");
    if (t.destination.unique === void 0) throw new Error("Destination unique is missing");
    return u(
      this.#t,
      r.postDocumentTypeByIdCopy({
        path: { id: t.unique },
        body: {
          target: t.destination.unique ? { id: t.destination.unique } : null
        }
      })
    );
  }
}
class y extends a {
  #t = new c(this);
  async requestDuplicateTo(t) {
    const { error: i } = await this.#t.duplicateTo(t);
    if (!i) {
      const e = await this.getContext(s);
      if (!e)
        throw new Error("Notification context not found");
      const n = { data: { message: "Duplicated" } };
      e.peek("positive", n);
    }
    return { error: i };
  }
}
export {
  y as UmbDuplicateDocumentTypeRepository,
  y as api
};
//# sourceMappingURL=document-type-duplicate.repository-DiiVWECi.js.map

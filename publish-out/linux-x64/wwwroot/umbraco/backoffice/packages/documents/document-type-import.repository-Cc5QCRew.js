import { DocumentTypeService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as m } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as c } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class a {
  #t;
  /**
   * Creates an instance of UmbDocumentTypeImportServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentTypeImportServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Import an item for the given id to the destination unique
   * @param {temporaryUnique} temporaryUnique
   * @returns {*}
   * @memberof UmbDocumentTypeImportServerDataSource
   */
  async import(t) {
    if (!t) throw new Error("Unique is missing");
    const o = {
      file: { id: t }
    };
    return m(this.#t, n.postDocumentTypeImport({ body: o }));
  }
}
class I extends p {
  #t = new a(this);
  async requestImport(t) {
    const { data: o, error: r } = await this.#t.import(t);
    if (!r) {
      const e = await this.getContext(c);
      if (!e)
        throw new Error("Notification context not found");
      const s = { data: { message: "Imported" } };
      e.peek("positive", s);
    }
    return { data: o, error: r };
  }
}
export {
  I as UmbDocumentTypeImportRepository,
  I as api
};
//# sourceMappingURL=document-type-import.repository-Cc5QCRew.js.map

import { DocumentTypeService as e } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as o } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
class p {
  #t;
  /**
   * Creates an instance of UmbExportDocumentTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbExportDocumentTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Export an item for the given id to the destination unique
   * @param {unique} unique
   * @returns {*}
   * @memberof UmbExportDocumentTypeServerDataSource
   */
  async export(t) {
    if (!t) throw new Error("Unique is missing");
    return o(this.#t, e.getDocumentTypeByIdExport({ path: { id: t } }));
  }
}
class n extends s {
  #t = new p(this);
  async requestExport(t) {
    return this.#t.export(t);
  }
}
export {
  n as UmbExportDocumentTypeRepository,
  n as api
};
//# sourceMappingURL=document-type-export.repository-DE_VGxKN.js.map

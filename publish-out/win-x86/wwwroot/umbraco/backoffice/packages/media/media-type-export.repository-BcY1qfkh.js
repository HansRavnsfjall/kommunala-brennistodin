import { MediaTypeService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as p } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class x {
  #t;
  /**
   * Creates an instance of UmbExportMediaTypeServerDataSource.
   * @param {UmbControllerHost} host
   * @memberof UmbExportMediaTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Export an item for the given id to the destination unique
   * @param {unique} unique
   * @returns {*}
   * @memberof UmbExportMediaTypeServerDataSource
   */
  async export(t) {
    if (!t) throw new Error("Unique is missing");
    return n(this.#t, a.getMediaTypeByIdExport({ path: { id: t } }));
  }
}
class h extends c {
  #t = new x(this);
  async requestExport(t) {
    const { data: i, error: o } = await this.#t.export(t);
    if (!o) {
      const e = await this.getContext(p);
      if (!e)
        throw new Error("Notification context not found");
      const s = { data: { message: "Exported" } };
      e.peek("positive", s);
    }
    return { data: i, error: o };
  }
}
export {
  h as UmbExportMediaTypeRepository,
  h as api
};
//# sourceMappingURL=media-type-export.repository-BcY1qfkh.js.map

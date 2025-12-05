import { MediaTypeService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as p } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbMediaTypeImportServerDataSource.
   * @param {UmbControllerHost} host
   * @memberof UmbMediaTypeImportServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Import an item for the given id to the destination unique
   * @param {temporaryUnique} temporaryUnique
   * @returns {*}
   * @memberof UmbMediaTypeImportServerDataSource
   */
  async import(t) {
    if (!t) throw new Error("Unique is missing");
    const o = {
      file: { id: t }
    };
    return n(this.#t, a.postMediaTypeImport({ body: o }));
  }
}
class u extends m {
  #t = new c(this);
  async requestImport(t) {
    const { data: o, error: i } = await this.#t.import(t);
    if (!i) {
      const r = await this.getContext(p);
      if (!r)
        throw new Error("Notification context not found");
      const s = { data: { message: "Imported" } };
      r.peek("positive", s);
    }
    return { data: o, error: i };
  }
}
export {
  u as UmbMediaTypeImportRepository,
  u as api
};
//# sourceMappingURL=media-type-import.repository-CzkM04nS.js.map

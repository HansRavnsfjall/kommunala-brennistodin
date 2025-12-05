import { DataTypeService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as r } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as s } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbDuplicateDataTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateDataTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Duplicate an item for the given unique to the destination unique
   * @param {UmbDuplicateToRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateDataTypeServerDataSource
   */
  async duplicateTo(t) {
    if (!t.unique) throw new Error("Unique is missing");
    if (t.destination.unique === void 0) throw new Error("Destination unique is missing");
    return r(
      this.#t,
      a.postDataTypeByIdCopy({
        path: { id: t.unique },
        body: {
          target: t.destination.unique ? { id: t.destination.unique } : null
        }
      })
    );
  }
}
class y extends u {
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
  y as UmbDuplicateDataTypeRepository,
  y as api
};
//# sourceMappingURL=data-type-duplicate.repository-Bfx9m7Bd.js.map

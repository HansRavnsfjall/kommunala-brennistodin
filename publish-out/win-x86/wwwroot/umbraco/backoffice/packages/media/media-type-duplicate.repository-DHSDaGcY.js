import { MediaTypeService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as s } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class c {
  #i;
  /**
   * Creates an instance of UmbDuplicateMediaTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateMediaTypeServerDataSource
   */
  constructor(i) {
    this.#i = i;
  }
  /**
   * Duplicate an item for the given unique to the destination unique
   * @param {UmbDuplicateToRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateMediaTypeServerDataSource
   */
  async duplicateTo(i) {
    if (!i.unique) throw new Error("Unique is missing");
    if (i.destination.unique === void 0) throw new Error("Destination unique is missing");
    return a(
      this.#i,
      r.postMediaTypeByIdCopy({
        path: { id: i.unique },
        body: {
          target: i.destination.unique ? { id: i.destination.unique } : null
        }
      })
    );
  }
}
class y extends u {
  #i = new c(this);
  async requestDuplicateTo(i) {
    const { error: t } = await this.#i.duplicateTo(i);
    if (!t) {
      const e = await this.getContext(s);
      if (!e)
        throw new Error("Notification context not found");
      const n = { data: { message: "Duplicated" } };
      e.peek("positive", n);
    }
    return { error: t };
  }
}
export {
  y as UmbDuplicateMediaTypeRepository,
  y as api
};
//# sourceMappingURL=media-type-duplicate.repository-DHSDaGcY.js.map

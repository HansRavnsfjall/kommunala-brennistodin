import { MemberTypeService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as n } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class p {
  #t;
  /**
   * Creates an instance of UmbDuplicateMemberTypeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDuplicateMemberTypeServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Duplicate an item for the given unique
   * @param {UmbDuplicateRequestArgs} args
   * @returns {*}
   * @memberof UmbDuplicateDataTypeServerDataSource
   */
  async duplicate(t) {
    if (!t.unique) throw new Error("Unique is missing");
    return a(
      this.#t,
      s.postMemberTypeByIdCopy({
        path: { id: t.unique }
      })
    );
  }
}
class d extends c {
  #t = new p(this);
  async requestDuplicate(t) {
    const { error: e } = await this.#t.duplicate(t);
    if (!e) {
      const i = await this.getContext(n);
      if (!i)
        throw new Error("Notification context not found");
      const r = { data: { message: "Duplicated" } };
      i.peek("positive", r);
    }
    return { error: e };
  }
}
export {
  d as UmbDuplicateMemberTypeRepository,
  d as api
};
//# sourceMappingURL=member-type-duplicate.repository-DbrWkCHu.js.map

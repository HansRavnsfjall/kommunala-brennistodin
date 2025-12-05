import { MemberService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as o } from "@umbraco-cms/backoffice/repository";
class p {
  #i;
  constructor(i) {
    this.#i = i;
  }
  /**
   * Validate a new Member on the server
   * @param {UmbMemberDetailModel} model - Member Model
   * @param {UmbEntityUnique} parentUnique - Parent Unique
   * @returns {*} - The response from the server
   */
  async validateCreate(i, e = null) {
    if (!i) throw new Error("Member is missing");
    if (!i.unique) throw new Error("Member unique is missing");
    if (e === void 0) throw new Error("Parent unique is missing");
    const a = {
      email: i.email,
      username: i.username,
      password: i.newPassword ?? "",
      isApproved: i.isApproved,
      id: i.unique,
      memberType: { id: i.memberType.unique },
      values: i.values,
      variants: i.variants
    }, { data: r, error: t } = await n(
      this.#i,
      s.postMemberValidate({
        body: a
      }),
      { disableNotifications: !0 }
    );
    return r && typeof r == "string" ? { data: r } : { error: t };
  }
  /**
   * Validate a existing Member
   * @param {UmbMemberDetailModel} model - Member Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {Promise<*>} - The response from the server
   */
  async validateUpdate(i, e) {
    if (!i.unique) throw new Error("Unique is missing");
    const a = {
      email: i.email,
      username: i.username,
      isApproved: i.isApproved,
      isLockedOut: i.isLockedOut,
      isTwoFactorEnabled: i.isTwoFactorEnabled,
      values: i.values,
      variants: i.variants
    }, { data: r, error: t } = await n(
      this.#i,
      s.putMemberByIdValidate({
        path: { id: i.unique },
        body: a
      }),
      { disableNotifications: !0 }
    );
    return r && typeof r == "string" ? { data: r } : { error: t };
  }
}
class b extends o {
  #i;
  constructor(i) {
    super(i), this.#i = new p(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model - The model to validate
   * @param {string | null} [parentUnique] - The parent unique
   * @returns {*}
   */
  async validateCreate(i, e) {
    if (!i) throw new Error("Data is missing");
    return this.#i.validateCreate(i, e);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model - The model to save
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @returns {*}
   */
  async validateSave(i, e) {
    if (!i) throw new Error("Data is missing");
    if (!i.unique) throw new Error("Unique is missing");
    return this.#i.validateUpdate(i, e);
  }
}
export {
  b as UmbMemberValidationRepository,
  b as api
};
//# sourceMappingURL=member-validation.repository-ComF7lAM.js.map

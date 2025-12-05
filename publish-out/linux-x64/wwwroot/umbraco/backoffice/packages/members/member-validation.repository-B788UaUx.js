import { MemberService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
class w {
  #r;
  constructor(r) {
    this.#r = r;
  }
  /**
   * Validate a new Member on the server
   * @param {UmbMemberDetailModel} model - Member Model
   * @param {UmbEntityUnique} parentUnique - Parent Unique
   * @returns {*} - The response from the server
   */
  async validateCreate(r, e = null) {
    if (!r) throw new Error("Member is missing");
    if (!r.unique) throw new Error("Member unique is missing");
    if (!r.newPassword) throw new Error("Member newPassword is missing");
    if (e === void 0) throw new Error("Parent unique is missing");
    const a = {
      email: r.email,
      username: r.username,
      password: r.newPassword,
      isApproved: r.isApproved,
      id: r.unique,
      memberType: { id: r.memberType.unique },
      values: r.values,
      variants: r.variants
    }, { data: i, error: s } = await n(
      this.#r,
      t.postMemberValidate({
        body: a
      }),
      { disableNotifications: !0 }
    );
    return i && typeof i == "string" ? { data: i } : { error: s };
  }
  /**
   * Validate a existing Member
   * @param {UmbMemberDetailModel} model - Member Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {Promise<*>} - The response from the server
   */
  async validateUpdate(r, e) {
    if (!r.unique) throw new Error("Unique is missing");
    const a = {
      email: r.email,
      username: r.username,
      isApproved: r.isApproved,
      isLockedOut: r.isLockedOut,
      isTwoFactorEnabled: r.isTwoFactorEnabled,
      values: r.values,
      variants: r.variants
    }, { data: i, error: s } = await n(
      this.#r,
      t.putMemberByIdValidate({
        path: { id: r.unique },
        body: a
      }),
      { disableNotifications: !0 }
    );
    return i && typeof i == "string" ? { data: i } : { error: s };
  }
}
class b extends u {
  #r;
  constructor(r) {
    super(r), this.#r = new w(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model - The model to validate
   * @param {string | null} [parentUnique] - The parent unique
   * @returns {*}
   */
  async validateCreate(r, e) {
    if (!r) throw new Error("Data is missing");
    return this.#r.validateCreate(r, e);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model - The model to save
   * @param {Array<UmbVariantId>} variantIds - The variant ids to save
   * @returns {*}
   */
  async validateSave(r, e) {
    if (!r) throw new Error("Data is missing");
    if (!r.unique) throw new Error("Unique is missing");
    return this.#r.validateUpdate(r, e);
  }
}
export {
  b as UmbMemberValidationRepository,
  b as api
};
//# sourceMappingURL=member-validation.repository-B788UaUx.js.map

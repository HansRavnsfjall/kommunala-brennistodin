import { f as u, h as p, t as l } from "./manifests-DHyiWGyY.js";
import { U as c } from "./index-L-35ogTa.js";
import { UmbId as m } from "@umbraco-cms/backoffice/id";
import { MemberService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class w {
  #e;
  /**
   * Creates an instance of UmbMemberServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Member scaffold
   * @param {Partial<UmbMemberDetailModel>} [preset]
   * @returns { CreateMemberRequestModel }
   * @memberof UmbMemberServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: u,
      unique: m.new(),
      email: "",
      username: "",
      memberType: {
        unique: "",
        icon: ""
      },
      isApproved: !1,
      isLockedOut: !1,
      isTwoFactorEnabled: !1,
      kind: c.DEFAULT,
      failedPasswordAttempts: 0,
      lastLoginDate: null,
      lastLockoutDate: null,
      lastPasswordChangeDate: null,
      groups: [],
      values: [],
      variants: [
        {
          name: "",
          culture: null,
          segment: null,
          createDate: (/* @__PURE__ */ new Date()).toISOString(),
          updateDate: (/* @__PURE__ */ new Date()).toISOString()
        }
      ],
      ...e
    } };
  }
  /**
   * Fetches a Member with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: a } = await i(this.#e, s.getMemberById({ path: { id: e } }));
    return a || !t ? { error: a } : { data: {
      entityType: u,
      unique: t.id,
      email: t.email,
      username: t.username,
      memberType: {
        unique: t.memberType.id,
        icon: t.memberType.icon
      },
      isApproved: t.isApproved,
      isLockedOut: t.isLockedOut,
      isTwoFactorEnabled: t.isTwoFactorEnabled,
      kind: t.kind,
      failedPasswordAttempts: t.failedPasswordAttempts,
      lastLoginDate: t.lastLoginDate || null,
      lastLockoutDate: t.lastLockoutDate || null,
      lastPasswordChangeDate: t.lastPasswordChangeDate || null,
      groups: t.groups,
      values: t.values.map((r) => ({
        alias: r.alias,
        culture: r.culture || null,
        editorAlias: r.editorAlias,
        entityType: p,
        segment: r.segment || null,
        value: r.value
      })),
      variants: t.variants.map((r) => ({
        culture: r.culture || null,
        segment: r.segment || null,
        name: r.name,
        createDate: r.createDate,
        updateDate: r.updateDate
      }))
    } };
  }
  /**
   * Inserts a new Member on the server
   * @param {UmbMemberDetailModel} model
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Member is missing");
    const t = {
      id: e.unique,
      email: e.email,
      username: e.username,
      password: e.newPassword || "",
      memberType: { id: e.memberType.unique },
      groups: e.groups,
      isApproved: e.isApproved,
      values: e.values,
      variants: e.variants
    }, { data: a, error: n } = await i(
      this.#e,
      s.postMember({
        body: t
      })
    );
    return a && typeof a == "string" ? this.read(a) : { error: n };
  }
  /**
   * Updates a Member on the server
   * @param {UmbMemberDetailModel} Member
   * @param model
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const t = {
      email: e.email,
      groups: e.groups,
      isApproved: e.isApproved,
      isLockedOut: e.isLockedOut,
      isTwoFactorEnabled: e.isTwoFactorEnabled,
      newPassword: e.newPassword,
      oldPassword: e.oldPassword,
      username: e.username,
      values: e.values,
      variants: e.variants
    }, { error: a } = await i(
      this.#e,
      s.putMemberById({
        path: { id: e.unique },
        body: t
      })
    );
    return a ? { error: a } : this.read(e.unique);
  }
  /**
   * Deletes a Member on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMemberServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return i(
      this.#e,
      s.deleteMemberById({
        path: { id: e }
      })
    );
  }
}
class D extends d {
  /**
   * Creates an instance of UmbMemberDetailRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberDetailRepository
   */
  constructor(e) {
    super(e, w, l);
  }
  async create(e) {
    return super.create(e, null);
  }
}
export {
  D as UmbMemberDetailRepository,
  D as default
};
//# sourceMappingURL=member-detail.repository-GYXMVkhu.js.map

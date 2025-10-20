import { U as o, d as u } from "./constants-BH7VsFPT.js";
import { UmbId as d } from "@umbraco-cms/backoffice/id";
import { UserService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
class h {
  #e;
  /**
   * Creates an instance of UmbUserServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new User scaffold
   * @param {(string | null)} parentUnique
   * @returns { CreateUserRequestModel }
   * @memberof UmbUserServerDataSource
   */
  async createScaffold() {
    return { data: {
      avatarUrls: [],
      createDate: null,
      documentStartNodeUniques: [],
      email: "",
      entityType: u,
      failedLoginAttempts: 0,
      hasDocumentRootAccess: !1,
      hasMediaRootAccess: !1,
      isAdmin: !1,
      kind: o.DEFAULT,
      languageIsoCode: "",
      lastLockoutDate: null,
      lastLoginDate: null,
      lastPasswordChangeDate: null,
      mediaStartNodeUniques: [],
      name: "",
      state: null,
      unique: d.new(),
      updateDate: null,
      userGroupUniques: [],
      userName: ""
    } };
  }
  /**
   * Fetches a User with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbUserServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: s } = await i(this.#e, n.getUserById({ path: { id: e } }));
    return s || !t ? { error: s } : { data: {
      avatarUrls: t.avatarUrls,
      createDate: t.createDate,
      hasDocumentRootAccess: t.hasDocumentRootAccess,
      documentStartNodeUniques: t.documentStartNodeIds.map((a) => ({
        unique: a.id
      })),
      email: t.email,
      entityType: u,
      failedLoginAttempts: t.failedLoginAttempts,
      isAdmin: t.isAdmin,
      kind: t.kind,
      languageIsoCode: t.languageIsoCode || null,
      lastLockoutDate: t.lastLockoutDate || null,
      lastLoginDate: t.lastLoginDate || null,
      lastPasswordChangeDate: t.lastPasswordChangeDate || null,
      hasMediaRootAccess: t.hasMediaRootAccess,
      mediaStartNodeUniques: t.mediaStartNodeIds.map((a) => ({
        unique: a.id
      })),
      name: t.name,
      state: t.state,
      unique: t.id,
      updateDate: t.updateDate,
      userGroupUniques: t.userGroupIds.map((a) => ({
        unique: a.id
      })),
      userName: t.userName
    } };
  }
  /**
   * Inserts a new User on the server
   * @param {UmbUserDetailModel} model
   * @returns {*}
   * @memberof UmbUserServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("User is missing");
    const t = {
      email: e.email,
      name: e.name,
      userGroupIds: e.userGroupUniques.map((a) => ({
        id: a.unique
      })),
      userName: e.userName,
      kind: e.kind
    }, { data: s, error: r } = await i(
      this.#e,
      n.postUser({
        body: t
      })
    );
    return s ? this.read(s) : { error: r };
  }
  /**
   * Updates a User on the server
   * @param {UmbUserDetailModel} User
   * @param model
   * @returns {*}
   * @memberof UmbUserServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const t = {
      documentStartNodeIds: e.documentStartNodeUniques.map((r) => ({
        id: r.unique
      })),
      email: e.email,
      hasDocumentRootAccess: e.hasDocumentRootAccess,
      hasMediaRootAccess: e.hasMediaRootAccess,
      languageIsoCode: e.languageIsoCode || "",
      mediaStartNodeIds: e.mediaStartNodeUniques.map((r) => ({
        id: r.unique
      })),
      name: e.name,
      userGroupIds: e.userGroupUniques.map((r) => ({
        id: r.unique
      })),
      userName: e.userName
    }, { error: s } = await i(
      this.#e,
      n.putUserById({
        path: { id: e.unique },
        body: t
      })
    );
    return s ? { error: s } : this.read(e.unique);
  }
  /**
   * Deletes a User on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbUserServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return i(
      this.#e,
      n.deleteUserById({
        path: { id: e }
      })
    );
  }
  /**
   * Calculates the start nodes for the User
   * @param {string} unique
   * @returns {*}
   * @memberof UmbUserServerDataSource
   */
  async calculateStartNodes(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: s } = await i(
      this.#e,
      n.getUserByIdCalculateStartNodes({
        path: { id: e }
      })
    );
    return t ? { data: {
      hasDocumentRootAccess: t.hasDocumentRootAccess,
      documentStartNodeUniques: t.documentStartNodeIds.map((a) => ({
        unique: a.id
      })),
      hasMediaRootAccess: t.hasMediaRootAccess,
      mediaStartNodeUniques: t.mediaStartNodeIds.map((a) => ({
        unique: a.id
      }))
    } } : { error: s };
  }
}
export {
  h as U
};
//# sourceMappingURL=user-detail.server.data-source-0p-_Ii0V.js.map

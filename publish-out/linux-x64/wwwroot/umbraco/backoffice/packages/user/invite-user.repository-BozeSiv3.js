import { U as u } from "./user-repository-base-3Lpa5j11.js";
import { U as m } from "./user-detail.server.data-source-0p-_Ii0V.js";
import { UserService as r } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as n } from "@umbraco-cms/backoffice/resources";
class c {
  #e;
  #i;
  /**
   * Creates an instance of UmbInviteUserServerDataSource.
   * @param host
   * @memberof UmbInviteUserServerDataSource
   */
  constructor(e) {
    this.#e = e, this.#i = new m(e);
  }
  /**
   * Invites a user
   * @param {UmbInviteUserRequestModel} request
   * @returns
   * @memberof UmbInviteUserServerDataSource
   */
  async invite(e) {
    if (!e) throw new Error("Request Data is missing");
    const i = {
      email: e.email,
      userName: e.userName,
      name: e.name,
      userGroupIds: e.userGroupUniques.map((a) => ({ id: a.unique })),
      message: e.message
    }, { data: t, error: s } = await n(
      this.#e,
      r.postUserInvite({
        body: i
      })
    );
    return t ? this.#i.read(t) : { error: s };
  }
  /**
   * Resend an invite to a user
   * @param {UmbResendUserInviteRequestModel} request
   * @returns
   * @memberof UmbInviteUserServerDataSource
   */
  async resendInvite(e) {
    if (!e.user.unique) throw new Error("User unique is missing");
    if (!e) throw new Error("Request data is missing");
    const i = {
      user: {
        id: e.user.unique
      },
      message: e.message
    };
    return n(
      this.#e,
      r.postUserInviteResend({
        body: i
      })
    );
  }
}
class h extends u {
  #e;
  constructor(e) {
    super(e), this.#e = new c(e);
  }
  /**
   * Invites a user
   * @param {UmbInviteUserRequestModel} request
   * @returns {*}
   * @memberof UmbInviteUserRepository
   */
  async invite(e) {
    if (!e) throw new Error("Request data is missing");
    await this.init;
    const { data: i, error: t } = await this.#e.invite(e);
    if (i) {
      this.detailStore.append(i);
      const s = { data: { message: "Invite sent to user" } };
      this.notificationContext?.peek("positive", s);
    }
    return { error: t };
  }
  /**
   * Resend an invite to a user
   * @param {string} userUnique
   * @param {InviteUserRequestModel} request
   * @returns {*}
   * @memberof UmbInviteUserRepository
   */
  async resendInvite(e) {
    if (!e.user.unique) throw new Error("User unique is missing");
    if (!e) throw new Error("data is missing");
    await this.init;
    const { error: i } = await this.#e.resendInvite(e);
    if (!i) {
      const t = { data: { message: "Invite resent to user" } };
      this.notificationContext?.peek("positive", t);
    }
    return { error: i };
  }
}
export {
  h as UmbInviteUserRepository,
  h as default
};
//# sourceMappingURL=invite-user.repository-BozeSiv3.js.map

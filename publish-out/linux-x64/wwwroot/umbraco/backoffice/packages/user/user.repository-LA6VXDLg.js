import { UserService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { U as h } from "./user-repository-base-3Lpa5j11.js";
import { of as f } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbLocalizationController as m } from "@umbraco-cms/backoffice/localization-api";
class U {
  #r;
  /**
   * Creates an instance of UmbMfaServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMfaServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Request the MFA providers for a user
   * @param unique The unique id of the user
   * @memberof UmbMfaServerDataSource
   */
  requestMfaProviders(r) {
    if (!r) throw new Error("User id is missing");
    return a(
      this.#r,
      i.getUserById2Fa({
        path: { id: r }
      })
    );
  }
  /**
   * Disables a MFA provider for a user
   * @param unique The unique id of the user
   * @param providerName The name of the provider
   * @memberof UmbMfaServerDataSource
   */
  disableMfaProvider(r, s) {
    if (!r) throw new Error("User id is missing");
    if (!s) throw new Error("Provider is missing");
    return a(
      this.#r,
      i.deleteUserById2FaByProviderName({
        path: { id: r, providerName: s }
      })
    );
  }
}
class w {
  #r;
  /**
   * Creates an instance of UmbUserSetGroupsServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbUserSetGroupsServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Set groups for users
   * @param {Array<string>} id
   * @param userIds
   * @param userGroupIds
   * @returns {*}
   * @memberof UmbUserSetGroupsServerDataSource
   */
  async setGroups(r, s) {
    if (!r) throw new Error("User ids are missing");
    if (!s) throw new Error("User group ids are missing");
    return a(
      this.#r,
      i.postUserSetUserGroups({
        body: {
          userIds: r.map((e) => ({ id: e })),
          userGroupIds: s.map((e) => ({ id: e }))
        }
      })
    );
  }
}
class v extends h {
  #r = new w(this._host);
  #s = new U(this._host);
  async setUserGroups(r, s) {
    if (s.length === 0) throw new Error("User group ids are missing");
    if (r.length === 0) throw new Error("User ids are missing");
    const { error: e } = await this.#r.setGroups(r, s);
    return { error: e };
  }
  /**
   * Request the MFA providers for a user
   * @param unique The unique id of the user
   * @memberof UmbUserRepository
   */
  async requestMfaProviders(r) {
    const { data: s, error: e } = await this.#s.requestMfaProviders(r);
    return { data: s, error: e, asObservable: () => f(s ?? []) };
  }
  /**
   * Disables a MFA provider for a user
   * @param unique The unique id of the user
   * @param providerName The name of the provider
   * @param displayName The display name of the provider to show in the notification (optional)
   * @memberof UmbUserRepository
   */
  async disableMfaProvider(r, s, e) {
    const { data: d, error: t } = await this.#s.disableMfaProvider(r, s), c = new m(this._host);
    if (t) {
      console.error("Failed to disable MFA provider", t);
      const o = {
        data: { message: c.term("user_2faProviderIsNotDisabledMsg", e ?? s) }
      };
      this.notificationContext?.peek("warning", o);
    } else {
      const o = {
        data: { message: c.term("user_2faProviderIsDisabledMsg", e ?? s) }
      };
      this.notificationContext?.peek("positive", o);
    }
    return { data: d, error: t };
  }
}
export {
  v as U
};
//# sourceMappingURL=user.repository-LA6VXDLg.js.map

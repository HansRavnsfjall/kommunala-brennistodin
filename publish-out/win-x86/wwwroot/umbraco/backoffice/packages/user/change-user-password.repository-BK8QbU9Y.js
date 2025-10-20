import { U as i } from "./user-repository-base-3Lpa5j11.js";
import { UserService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as c } from "@umbraco-cms/backoffice/resources";
class h {
  #s;
  /**
   * Creates an instance of UmbChangeUserPasswordServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbChangeUserPasswordServerDataSource
   */
  constructor(s) {
    this.#s = s;
  }
  /**
   * Change the password of a user
   * @param {string} id
   * @param {string} newPassword
   * @returns {*}
   * @memberof UmbChangeUserPasswordServerDataSource
   */
  async changePassword(s, r) {
    if (!s) throw new Error("User Id is missing");
    return c(
      this.#s,
      n.postUserByIdChangePassword({
        path: { id: s },
        body: {
          newPassword: r
        }
      })
    );
  }
}
class g extends i {
  #s;
  constructor(s) {
    super(s), this.#s = new h(s);
  }
  async changePassword(s, r) {
    if (!s) throw new Error("User id is missing");
    if (!r) throw new Error("New password is missing");
    await this.init;
    const { data: t, error: e } = await this.#s.changePassword(s, r);
    if (!e) {
      const a = { data: { message: "Password changed" } };
      this.notificationContext?.peek("positive", a);
    }
    return { data: t, error: e };
  }
}
export {
  g as UmbChangeUserPasswordRepository,
  g as default
};
//# sourceMappingURL=change-user-password.repository-BK8QbU9Y.js.map

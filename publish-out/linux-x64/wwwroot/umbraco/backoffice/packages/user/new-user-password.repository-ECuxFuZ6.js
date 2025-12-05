import { U as e } from "./user-repository-base-3Lpa5j11.js";
import { UserService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as o } from "@umbraco-cms/backoffice/resources";
class i {
  #s;
  /**
   * Creates an instance of UmbNewUserPasswordServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbNewUserPasswordServerDataSource
   */
  constructor(s) {
    this.#s = s;
  }
  /**
   * Generate a new password for a user
   * @param {string} unique
   * @returns {*}
   * @memberof UmbNewUserPasswordServerDataSource
   */
  async newPassword(s) {
    if (!s) throw new Error("User unique is missing");
    return o(
      this.#s,
      t.postUserByIdResetPassword({
        path: { id: s }
      })
    );
  }
}
class c extends e {
  /**
   * Creates an instance of UmbNewUserPasswordRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbNewUserPasswordRepository
   */
  constructor(s) {
    super(s), this.dataSource = new i(s);
  }
  /**
   * Request a new password for a user
   * @param {string} userUnique
   * @returns {*}
   * @memberof UmbNewUserPasswordRepository
   */
  async requestNewPassword(s) {
    if (!s) throw new Error("User unique is missing");
    return await this.init, this.dataSource.newPassword(s);
  }
}
export {
  c as U
};
//# sourceMappingURL=new-user-password.repository-ECuxFuZ6.js.map

import { i as n } from "./constants-BH7VsFPT.js";
import { isCurrentUser as u } from "@umbraco-cms/backoffice/current-user";
import { UmbConditionBase as m } from "@umbraco-cms/backoffice/extension-registry";
import { observeMultiple as U } from "@umbraco-cms/backoffice/observable-api";
class p extends m {
  /**
   * Creates an instance of UmbUserActionConditionBase.
   * @param {UmbControllerHost} host The host controller
   * @param {UmbConditionControllerArguments<UmbConditionConfigBase>} args The condition arguments
   * @memberof UmbUserActionConditionBase
   */
  constructor(e, i) {
    super(e, i), this.consumeContext(n, (s) => {
      s ? this.observe(
        U([s.unique, s.state, s.kind]),
        ([r, t, o]) => {
          this.userUnique = r ?? void 0, this.userState = t, this.userKind = o, this._onUserDataChange();
        },
        "_umbActiveUser"
      ) : this.removeUmbControllerByAlias("_umbActiveUser");
    });
  }
  /**
   * Check if the current user is the same as the user being edited
   * @protected
   * @returns {Promise<boolean>}
   * @memberof UmbUserActionConditionBase
   */
  async isCurrentUser() {
    return this.userUnique ? u(this._host, this.userUnique) : !1;
  }
}
export {
  p as U
};
//# sourceMappingURL=user-allow-action-base.condition-Bnoju1PB.js.map

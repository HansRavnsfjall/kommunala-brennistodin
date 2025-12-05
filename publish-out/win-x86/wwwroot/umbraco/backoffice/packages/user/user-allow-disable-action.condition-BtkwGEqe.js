import { U as t } from "./types-CDjdD95-.js";
import { U as e } from "./user-allow-action-base.condition-DhA8iwEQ.js";
class a extends e {
  async _onUserDataChange() {
    if (!this.userUnique || await this.isCurrentUser()) {
      this.permitted = !1;
      return;
    }
    this.permitted = this.userState !== t.DISABLED;
  }
}
export {
  a as UmbUserAllowDisableActionCondition,
  a as api
};
//# sourceMappingURL=user-allow-disable-action.condition-BtkwGEqe.js.map

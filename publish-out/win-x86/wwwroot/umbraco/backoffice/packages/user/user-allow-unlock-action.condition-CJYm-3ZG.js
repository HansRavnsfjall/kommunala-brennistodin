import { U as t } from "./types-CDjdD95-.js";
import { U as e } from "./user-allow-action-base.condition-Bnoju1PB.js";
class a extends e {
  async _onUserDataChange() {
    if (!this.userUnique || await this.isCurrentUser()) {
      this.permitted = !1;
      return;
    }
    this.permitted = this.userState === t.LOCKED_OUT;
  }
}
export {
  a as UmbUserAllowUnlockActionCondition,
  a as api
};
//# sourceMappingURL=user-allow-unlock-action.condition-CJYm-3ZG.js.map

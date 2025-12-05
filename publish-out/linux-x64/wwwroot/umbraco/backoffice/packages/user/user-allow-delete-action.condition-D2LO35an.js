import { U as e } from "./user-allow-action-base.condition-Bnoju1PB.js";
class i extends e {
  async _onUserDataChange() {
    !this.userUnique || await this.isCurrentUser() ? this.permitted = !1 : this.permitted = !0;
  }
}
export {
  i as UmbUserAllowDeleteActionCondition,
  i as api
};
//# sourceMappingURL=user-allow-delete-action.condition-D2LO35an.js.map

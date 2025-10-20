import { UmbCurrentUserConfigRepository as t } from "./current-user-config.repository-DOpvOxyc.js";
import { UmbConditionBase as s } from "@umbraco-cms/backoffice/extension-registry";
class a extends s {
  #i = new t(this._host);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(i, o) {
    super(i, o), this.#o();
  }
  async #o() {
    await this.#i.initialized, this.observe(
      this.#i.part("allowChangePassword"),
      (i) => {
        this.permitted = i;
      },
      "_userAllowChangePasswordActionCondition"
    );
  }
}
export {
  a as UmbCurrentUserAllowChangePasswordActionCondition,
  a as api
};
//# sourceMappingURL=current-user-allow-change-password-action.condition-CIDGOLFA.js.map

import { UmbUserConfigRepository as s } from "./user-config.repository-C37bO5BY.js";
import { UmbConditionBase as t } from "@umbraco-cms/backoffice/extension-registry";
class a extends t {
  #i = new s(this._host);
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
  a as UmbUserAllowChangePasswordActionCondition,
  a as api
};
//# sourceMappingURL=user-allow-change-password-action.condition-CLfsXZ9l.js.map

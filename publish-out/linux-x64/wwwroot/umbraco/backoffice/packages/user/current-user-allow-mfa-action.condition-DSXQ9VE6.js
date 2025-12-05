import "./constants-BH7VsFPT.js";
import { UmbCurrentUserConfigRepository as t } from "./current-user-config.repository-DOpvOxyc.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UmbConditionBase as r, umbExtensionsRegistry as e } from "@umbraco-cms/backoffice/extension-registry";
import { observeMultiple as s } from "@umbraco-cms/backoffice/observable-api";
class b extends r {
  #i = new t(this._host);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(i, o) {
    super(i, o), this.#o();
  }
  async #o() {
    await this.#i.initialized, this.observe(
      s([
        this.#i.part("allowTwoFactor"),
        e.byType("mfaLoginProvider")
      ]),
      ([i, o]) => {
        this.permitted = i && o.length > 0;
      },
      "_userAllowMfaActionCondition"
    );
  }
}
export {
  b as UmbCurrentUserAllowMfaActionCondition,
  b as api
};
//# sourceMappingURL=current-user-allow-mfa-action.condition-DSXQ9VE6.js.map

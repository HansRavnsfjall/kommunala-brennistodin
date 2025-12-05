import "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { UmbUserConfigRepository as t } from "./user-config.repository-zfugHh_P.js";
import { UmbConditionBase as r, umbExtensionsRegistry as s } from "@umbraco-cms/backoffice/extension-registry";
import { observeMultiple as e } from "@umbraco-cms/backoffice/observable-api";
class b extends r {
  #i = new t(this._host);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(i, o) {
    super(i, o), this.#o();
  }
  async #o() {
    await this.#i.initialized, this.observe(
      e([
        this.#i.part("allowTwoFactor"),
        s.byType("mfaLoginProvider")
      ]),
      ([i, o]) => {
        this.permitted = i && o.length > 0;
      },
      "_userAllowMfaActionCondition"
    );
  }
}
export {
  b as UmbUserAllowMfaActionCondition,
  b as api
};
//# sourceMappingURL=user-allow-mfa-action.condition-FmFmuF7B.js.map

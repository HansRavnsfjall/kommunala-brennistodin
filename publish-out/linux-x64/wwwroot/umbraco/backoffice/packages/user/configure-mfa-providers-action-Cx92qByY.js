import { U as e } from "./current-user-mfa-modal.token-DXwGMNEd.js";
import { UmbActionBase as r } from "@umbraco-cms/backoffice/action";
import { umbOpenModal as o } from "@umbraco-cms/backoffice/modal";
class m extends r {
  async getHref() {
  }
  async execute() {
    await o(this, e);
  }
}
export {
  m as UmbConfigureMfaProvidersApi,
  m as api
};
//# sourceMappingURL=configure-mfa-providers-action-Cx92qByY.js.map

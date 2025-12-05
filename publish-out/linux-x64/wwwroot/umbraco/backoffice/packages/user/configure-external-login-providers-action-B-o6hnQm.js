import { U as e } from "./external-login-modal.token-BIuwBNJv.js";
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
  m as UmbConfigureExternalLoginProvidersApi,
  m as api
};
//# sourceMappingURL=configure-external-login-providers-action-B-o6hnQm.js.map

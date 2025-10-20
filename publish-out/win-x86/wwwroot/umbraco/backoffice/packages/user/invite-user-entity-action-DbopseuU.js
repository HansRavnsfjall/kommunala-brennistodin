import "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { U as t } from "./resend-invite-to-user-modal.token-SCmTZoXA.js";
import { UmbEntityActionBase as i } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as o } from "@umbraco-cms/backoffice/modal";
class b extends i {
  async execute() {
    await o(this, t);
  }
}
export {
  b as UmbCreateUserEntityAction,
  b as api
};
//# sourceMappingURL=invite-user-entity-action-DbopseuU.js.map

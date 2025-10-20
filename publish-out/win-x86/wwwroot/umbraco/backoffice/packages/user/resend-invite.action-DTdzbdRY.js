import "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import { a as r } from "./resend-invite-to-user-modal.token-SCmTZoXA.js";
import { UmbEntityActionBase as o } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
class b extends o {
  constructor(t, i) {
    super(t, i);
  }
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await e(this, r, {
      data: {
        user: {
          unique: this.args.unique
        }
      }
    });
  }
}
export {
  b as UmbResendInviteToUserEntityAction,
  b as api
};
//# sourceMappingURL=resend-invite.action-DTdzbdRY.js.map

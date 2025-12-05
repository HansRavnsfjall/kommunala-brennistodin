import { q as o } from "./manifests-BfVrApfB.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
class u extends a {
  constructor(t, i) {
    super(t, i);
  }
  async execute() {
    await e(this, o, {
      data: { unique: this.args.unique }
    });
  }
}
export {
  u as UmbDocumentNotificationsEntityAction,
  u as default
};
//# sourceMappingURL=document-notifications.action-DkND_P3L.js.map

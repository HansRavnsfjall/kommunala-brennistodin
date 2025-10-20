import { U as t } from "./partial-view-workspace.context-token-DmMOFZmM.js";
import { UmbEntityActionBase as i } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
class o extends i {
  async execute() {
    await e(this, t, {
      data: {
        parent: {
          unique: this.args.unique,
          entityType: this.args.entityType
        }
      }
    });
  }
}
export {
  o as UmbPartialViewCreateOptionsEntityAction,
  o as api
};
//# sourceMappingURL=create.action-73j1iYwZ.js.map

import { U as t } from "./index-DTLu03tH.js";
import { UmbEntityActionBase as i } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as e } from "@umbraco-cms/backoffice/modal";
class o extends i {
  async execute() {
    await e(this, t, {
      data: {
        parent: {
          entityType: this.args.entityType,
          unique: this.args.unique
        }
      }
    });
  }
}
export {
  o as UmbScriptCreateOptionsEntityAction,
  o as api
};
//# sourceMappingURL=create.action-DfZvMyTR.js.map

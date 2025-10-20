import { U as t } from "./import-dictionary-modal.token-CKI-F1TP.js";
import { UmbEntityActionBase as i } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as a } from "@umbraco-cms/backoffice/modal";
class r extends i {
  async execute() {
    await a(this, t, { data: { unique: this.args.unique } });
  }
}
export {
  r as UmbImportDictionaryEntityAction,
  r as default
};
//# sourceMappingURL=import.action-DyFBFWkJ.js.map

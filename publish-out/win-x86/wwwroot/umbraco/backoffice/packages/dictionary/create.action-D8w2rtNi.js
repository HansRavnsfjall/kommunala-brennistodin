import { w as e } from "./paths-pWW_vsmu.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
class r extends a {
  async execute() {
    const t = e.generateAbsolute({
      parentEntityType: this.args.entityType,
      parentUnique: this.args.unique ?? "null"
    });
    history.pushState({}, "", t);
  }
}
export {
  r as UmbCreateDictionaryEntityAction,
  r as default
};
//# sourceMappingURL=create.action-D8w2rtNi.js.map

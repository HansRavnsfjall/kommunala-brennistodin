import { d as n, a as i } from "./paths-BF32ZUyU.js";
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as s } from "@umbraco-cms/backoffice/modal";
class T extends a {
  async execute() {
    const t = (await s(this, n, {
      data: {
        parent: {
          unique: this.args.unique,
          entityType: this.args.entityType
        }
      }
    })).documentTypeUnique;
    if (!t)
      throw new Error("Document type unique is not available");
    const e = `section/settings/workspace/${i}/create/parent/${this.args.entityType}/${this.args.unique ?? "null"}/${t}`;
    history.pushState(null, "", e);
  }
}
export {
  T as UmbCreateDocumentBlueprintEntityAction,
  T as default
};
//# sourceMappingURL=create.action-ttJ1WVZm.js.map

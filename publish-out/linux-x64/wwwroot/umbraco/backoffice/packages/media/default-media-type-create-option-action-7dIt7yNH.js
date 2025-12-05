import { j as r } from "./constants-DT5L-WXf.js";
import { UmbEntityCreateOptionActionBase as n } from "@umbraco-cms/backoffice/entity-create-option-action";
class s extends n {
  async getHref() {
    const t = this.args.entityType;
    if (!t) throw new Error("Entity type is required to create a document type");
    const e = this.args.unique ?? null;
    return r.generateAbsolute({
      parentEntityType: t,
      parentUnique: e
    });
  }
}
export {
  s as UmbDefaultMediaTypeCreateOptionAction,
  s as api
};
//# sourceMappingURL=default-media-type-create-option-action-7dIt7yNH.js.map

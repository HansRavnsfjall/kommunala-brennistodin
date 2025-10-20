import { e as r, g as n } from "./constants-D9L2jSGX.js";
import { UmbEntityCreateOptionActionBase as E } from "@umbraco-cms/backoffice/entity-create-option-action";
class o extends E {
  async getHref() {
    const e = this.args.entityType;
    if (!e) throw new Error("Entity type is required to create a document type");
    const t = this.args.unique ?? null;
    return r.generateAbsolute({
      parentEntityType: e,
      parentUnique: t,
      presetAlias: n
    });
  }
}
export {
  o as UmbElementTypeCreateOptionAction,
  o as api
};
//# sourceMappingURL=element-type-create-option-action-BwCdhNJj.js.map

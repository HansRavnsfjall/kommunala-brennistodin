import { e as r, f as n } from "./constants-D9L2jSGX.js";
import { UmbEntityCreateOptionActionBase as i } from "@umbraco-cms/backoffice/entity-create-option-action";
class o extends i {
  async getHref() {
    const t = this.args.entityType;
    if (!t) throw new Error("Entity type is required to create a document type");
    const e = this.args.unique ?? null;
    return r.generateAbsolute({
      parentEntityType: t,
      parentUnique: e,
      presetAlias: n
    });
  }
}
export {
  o as UmbDocumentTypeWithTemplateCreateOptionAction,
  o as api
};
//# sourceMappingURL=document-type-with-template-create-option-action-DT-Dfy8E.js.map

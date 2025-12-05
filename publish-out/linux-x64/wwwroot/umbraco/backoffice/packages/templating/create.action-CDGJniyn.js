import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
class r extends s {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    const t = `section/settings/workspace/template/create/parent/${this.args.entityType}/${this.args.unique || "null"}`;
    history.pushState(null, "", t);
  }
}
export {
  r as UmbCreateTemplateEntityAction,
  r as api
};
//# sourceMappingURL=create.action-CDGJniyn.js.map

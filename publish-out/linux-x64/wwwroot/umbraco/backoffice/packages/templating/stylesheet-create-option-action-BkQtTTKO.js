import { UmbEntityCreateOptionActionBase as e } from "@umbraco-cms/backoffice/entity-create-option-action";
class r extends e {
  async getHref() {
    return `${`section/settings/workspace/stylesheet/create/parent/${this.args.entityType}/${this.args.unique || "null"}`}/view/code`;
  }
}
export {
  r as UmbStylesheetCreateOptionAction,
  r as api
};
//# sourceMappingURL=stylesheet-create-option-action-BkQtTTKO.js.map

import { UmbEntityActionBase as s } from "@umbraco-cms/backoffice/entity-action";
class c extends s {
  constructor(t, e) {
    super(t, e);
  }
  async execute() {
    history.pushState(null, "", "section/settings/workspace/language/create");
  }
}
export {
  c as UmbLanguageCreateEntityAction,
  c as api
};
//# sourceMappingURL=language-create-entity-action-BW_M0vV5.js.map

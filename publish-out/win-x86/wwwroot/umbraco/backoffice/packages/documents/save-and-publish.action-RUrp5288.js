import { UmbDocumentUserPermissionCondition as n } from "./document-user-permission.condition-BkDOsmEj.js";
import { z as o, B as a, g as r, i as c } from "./manifests-BfVrApfB.js";
import { UmbWorkspaceActionBase as m } from "@umbraco-cms/backoffice/workspace";
class u extends m {
  constructor(t, s) {
    super(t, s), this.disable(), new n(t, {
      host: t,
      config: {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [o, a]
      },
      onChange: (e) => {
        e ? this.enable() : this.disable();
      }
    });
  }
  async hasAdditionalOptions() {
    const t = await this.getContext(r);
    if (!t)
      throw new Error("The workspace context is missing");
    return (await this.observe(t.variantOptions).asPromise())?.filter((i) => i.segment === null)?.length > 1;
  }
  async execute() {
    const t = await this.getContext(c);
    if (!t)
      throw new Error("The workspace context is missing");
    return t.saveAndPublish();
  }
}
export {
  u as UmbDocumentSaveAndPublishWorkspaceAction,
  u as api
};
//# sourceMappingURL=save-and-publish.action-RUrp5288.js.map

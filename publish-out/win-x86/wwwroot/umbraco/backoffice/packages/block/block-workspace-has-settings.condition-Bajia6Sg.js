import { U as i } from "./index-jGJQ3LmE.js";
import { UmbConditionBase as n } from "@umbraco-cms/backoffice/extension-registry";
class p extends n {
  constructor(t, e) {
    super(t, e), this.consumeContext(i, (s) => {
      this.observe(
        s?.settings.contentTypeId,
        (o) => {
          this.permitted = o !== void 0;
        },
        "observeSettingsElementTypeId"
      );
    });
  }
}
export {
  p as UmbBlockWorkspaceHasSettingsCondition,
  p as default
};
//# sourceMappingURL=block-workspace-has-settings.condition-Bajia6Sg.js.map

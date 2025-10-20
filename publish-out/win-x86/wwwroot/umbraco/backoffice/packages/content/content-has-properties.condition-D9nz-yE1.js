import "./sort-children-of-content-modal.token-DYwtOc5Y.js";
import { U as o } from "./content-workspace.context-token-BMs4lY7q.js";
import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
class c extends i {
  constructor(e, t) {
    super(e, t), this.consumeContext(o, (s) => {
      this.observe(
        s?.structure.contentTypeHasProperties,
        (r) => {
          this.permitted = r ?? !1;
        },
        "hasPropertiesObserver"
      );
    });
  }
}
export {
  c as UmbContentHasPropertiesWorkspaceCondition,
  c as api
};
//# sourceMappingURL=content-has-properties.condition-D9nz-yE1.js.map

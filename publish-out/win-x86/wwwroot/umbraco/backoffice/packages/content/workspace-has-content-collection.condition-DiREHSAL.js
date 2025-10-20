import { U as n } from "./content-collection-workspace.context-token-BliQa7Cu.js";
import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
const r = Symbol();
class c extends i {
  constructor(o, t) {
    super(o, t), this.consumeContext(n, (e) => {
      this.observe(
        e?.contentTypeHasCollection,
        (s) => {
          this.permitted = s ?? !1;
        },
        r
      );
    });
  }
}
export {
  c as UmbWorkspaceHasContentCollectionCondition,
  c as api
};
//# sourceMappingURL=workspace-has-content-collection.condition-DiREHSAL.js.map

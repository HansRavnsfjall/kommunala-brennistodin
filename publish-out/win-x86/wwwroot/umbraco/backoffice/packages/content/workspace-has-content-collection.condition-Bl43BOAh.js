import { U as i } from "./content-collection-workspace.context-token-BkMq2Z0s.js";
import { UmbConditionBase as n } from "@umbraco-cms/backoffice/extension-registry";
const r = Symbol();
class m extends n {
  constructor(o, t) {
    super(o, t), this.consumeContext(i, (e) => {
      this.observe(
        e?.collection.hasCollection,
        (s) => {
          this.permitted = s ?? !1;
        },
        r
      );
    });
  }
}
export {
  m as UmbWorkspaceHasContentCollectionCondition,
  m as api
};
//# sourceMappingURL=workspace-has-content-collection.condition-Bl43BOAh.js.map

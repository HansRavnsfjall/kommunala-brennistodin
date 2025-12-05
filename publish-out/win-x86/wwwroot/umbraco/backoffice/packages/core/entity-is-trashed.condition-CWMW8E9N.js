import { U as e } from "./is-trashed.entity-context-token-DtToyMNh.js";
import "./restore-from-recycle-bin-modal.token-Dfw4-Cxp.js";
import "./bulk-trash.action.kind-9Ooy_hJp.js";
import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
class d extends i {
  constructor(t, s) {
    super(t, s), this.consumeContext(e, (o) => {
      this.observe(o?.isTrashed, (r) => {
        this.permitted = r === !0;
      });
    });
  }
}
export {
  d as UmbIsTrashedCondition,
  d as api
};
//# sourceMappingURL=entity-is-trashed.condition-CWMW8E9N.js.map

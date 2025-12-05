import { U as o } from "./is-trashed.entity-context-token-DtToyMNh.js";
import "./restore-from-recycle-bin-modal.token-Dfw4-Cxp.js";
import "./bulk-trash.action.kind-CdpI7m0a.js";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
class T extends r {
  constructor(t, s) {
    super(t, s), this.permitted = !0, this.consumeContext(o, (e) => {
      this.observe(e?.isTrashed, (i) => {
        this.permitted = i === !1;
      });
    });
  }
}
export {
  T as UmbEntityIsNotTrashedCondition,
  T as api
};
//# sourceMappingURL=entity-is-not-trashed.condition-48W1keBU.js.map

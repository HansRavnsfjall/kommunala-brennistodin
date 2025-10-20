import { U as n } from "./block-entry.context-token-DG6_TzkT.js";
import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
const r = Symbol();
class b extends i {
  constructor(t, o) {
    super(t, o), this.consumeContext(n, (e) => {
      this.observe(
        e?.showContentEdit,
        (s) => {
          this.permitted = !!s;
        },
        r
      );
    });
  }
}
export {
  b as UmbBlockEntryShowContentEditCondition,
  b as default
};
//# sourceMappingURL=block-entry-show-content-edit.condition-BQr58ot3.js.map

import { U as o } from "./entity.context-token-Xhq6yvYN.js";
import { UmbConditionBase as n } from "@umbraco-cms/backoffice/extension-registry";
class c extends n {
  constructor(t, i) {
    super(t, i), this.consumeContext(o, (e) => {
      this.observe(e?.unique, (s) => this.#t(s), "umbEntityUniqueObserver");
    });
  }
  #t(t) {
    if (t === void 0) {
      this.permitted = !1;
      return;
    }
    if (this.config.match !== void 0) {
      this.permitted = t === this.config.match;
      return;
    }
    this.permitted = this.config.oneOf?.some((i) => i === t) ?? !1;
  }
}
export {
  c as UmbEntityUniqueCondition,
  c as api
};
//# sourceMappingURL=entity-unique.condition-Co_kzpha.js.map

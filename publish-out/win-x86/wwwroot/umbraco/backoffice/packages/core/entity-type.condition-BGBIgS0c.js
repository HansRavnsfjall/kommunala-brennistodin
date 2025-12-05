import { U as o } from "./entity.context-token-Xhq6yvYN.js";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
class c extends r {
  constructor(t, i) {
    super(t, i), this.consumeContext(o, (e) => {
      this.observe(e?.entityType, (s) => this.#t(s), "umbEntityTypeObserver");
    });
  }
  #t(t) {
    if (!t) {
      this.permitted = !1;
      return;
    }
    if (this.config.match) {
      this.permitted = t === this.config.match;
      return;
    }
    this.permitted = this.config.oneOf?.some((i) => i === t) ?? !1;
  }
}
export {
  c as UmbEntityTypeCondition,
  c as api
};
//# sourceMappingURL=entity-type.condition-BGBIgS0c.js.map

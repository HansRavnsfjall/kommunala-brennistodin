import { U as o } from "./has-children.context-token-D_lphZ2G.js";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
class C extends r {
  constructor(t, s) {
    super(t, s), this.consumeContext(o, (e) => {
      this.observe(e?.hasChildren, (i) => {
        this.permitted = i === !0;
      });
    });
  }
}
export {
  C as UmbEntityHasChildrenCondition,
  C as api
};
//# sourceMappingURL=entity-has-children.condition-rHchBCbk.js.map

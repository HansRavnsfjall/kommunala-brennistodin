import { U as i } from "./unsupported-property.element-B5lv0dQj.js";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
class p extends r {
  constructor(o, t) {
    super(o, t), this.consumeContext(i, (e) => {
      this.observe(e?.value, (s) => {
        this.permitted = s !== void 0;
      });
    });
  }
}
export {
  p as UmbPropertyHasValueCondition,
  p as api
};
//# sourceMappingURL=has-value.condition-C8-GjoPR.js.map

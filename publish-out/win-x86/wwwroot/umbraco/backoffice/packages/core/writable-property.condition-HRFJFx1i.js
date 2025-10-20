import { U as s } from "./unsupported-property.element-BTNx3nHS.js";
import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
class p extends i {
  constructor(t, e) {
    super(t, e), this.consumeContext(s, (o) => {
      this.observe(o?.isReadOnly, (r) => {
        this.permitted = r !== !0;
      });
    });
  }
}
export {
  p as UmbWritablePropertyCondition,
  p as api
};
//# sourceMappingURL=writable-property.condition-HRFJFx1i.js.map

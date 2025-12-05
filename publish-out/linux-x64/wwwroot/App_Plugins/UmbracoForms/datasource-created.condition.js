import { j as o } from "./index.js";
import { UmbConditionBase as t } from "@umbraco-cms/backoffice/extension-registry";
class C extends t {
  constructor(r, e) {
    super(r, e), this.consumeContext(o, (s) => {
      this.permitted = !(s != null && s.getIsNew());
    });
  }
}
export {
  C as FormsDataSourceCreatedCondition,
  C as default
};
//# sourceMappingURL=datasource-created.condition.js.map

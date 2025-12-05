import { UmbConditionBase as s } from "@umbraco-cms/backoffice/extension-registry";
import { d as m } from "./index.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/current-user";
class h extends s {
  constructor(t, o) {
    super(t, o), this.consumeContext(m, (i) => {
      this.observe(i == null ? void 0 : i.config, (r) => {
        r && (this.permitted = this.config.match(r));
      });
    });
  }
}
export {
  h as SecurityOptionsCondition,
  h as default
};
//# sourceMappingURL=security-options.condition.js.map

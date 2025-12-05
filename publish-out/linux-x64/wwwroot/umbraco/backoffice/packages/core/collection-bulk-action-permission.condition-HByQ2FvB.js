import { U as r } from "./collection-default.context-token-BaKj_eMl.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/extension-api";
import { UmbConditionBase as s } from "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/event";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/entity-action";
import "@umbraco-cms/backoffice/action";
import "@umbraco-cms/backoffice/entity";
import "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/router";
class g extends s {
  constructor(o, i) {
    super(o, i), this.consumeContext(r, (m) => {
      const t = m?.getConfig()?.allowedEntityBulkActions;
      this.permitted = t ? this.config.match(t) : !1;
    });
  }
}
export {
  g as UmbCollectionBulkActionPermissionCondition,
  g as default
};
//# sourceMappingURL=collection-bulk-action-permission.condition-HByQ2FvB.js.map

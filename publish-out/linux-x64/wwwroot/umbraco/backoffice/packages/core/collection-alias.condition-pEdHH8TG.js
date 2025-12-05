import { U as m } from "./collection-default.context-token-BaKj_eMl.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/extension-api";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/event";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/entity-action";
import "@umbraco-cms/backoffice/action";
import "@umbraco-cms/backoffice/entity";
import "@umbraco-cms/backoffice/workspace";
import "@umbraco-cms/backoffice/router";
class x extends r {
  constructor(t, o) {
    super(t, o), this.consumeContext(m, (i) => {
      this.permitted = i?.manifest?.alias === this.config.match;
    });
  }
}
export {
  x as UmbCollectionAliasCondition,
  x as default
};
//# sourceMappingURL=collection-alias.condition-pEdHH8TG.js.map

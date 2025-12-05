import "./block-catalogue-modal.token-CqYZWuQE.js";
import "./block-entry.context-token-DG6_TzkT.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import "./block-workspace.modal-token-DM3FsY2R.js";
import "@umbraco-cms/backoffice/document-type";
import "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/property";
import "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import "./block-catalogue-modal.element-DgrfRSxG.js";
import "@umbraco-cms/backoffice/validation";
import { U as m } from "./block-workspace.context-token-DTpZ56Fk.js";
import { UmbConditionBase as p } from "@umbraco-cms/backoffice/extension-registry";
class k extends p {
  constructor(t, i) {
    super(t, i), this.consumeContext(m, (r) => {
      this.observe(
        r?.exposed,
        (o) => {
          o !== void 0 && (this.permitted = o === (this.config.match !== void 0 ? this.config.match : !0));
        },
        "observeHasExpose"
      );
    });
  }
}
export {
  k as UmbBlockEntryIsExposedCondition,
  k as default
};
//# sourceMappingURL=block-workspace-is-exposed.condition-BcvC0DUS.js.map

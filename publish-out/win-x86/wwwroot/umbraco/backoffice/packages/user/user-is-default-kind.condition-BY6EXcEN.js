import { U as i } from "./constants-DjdF3T-M.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { U as t } from "./user-allow-action-base.condition-DhA8iwEQ.js";
class l extends t {
  async _onUserDataChange() {
    this.userKind === i.DEFAULT ? this.permitted = !0 : this.permitted = !1;
  }
}
export {
  l as UmbUserIsDefaultKindCondition,
  l as api
};
//# sourceMappingURL=user-is-default-kind.condition-BY6EXcEN.js.map

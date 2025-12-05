import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CURRENT_USER_CONTEXT as i } from "@umbraco-cms/backoffice/current-user";
class u extends r {
  constructor(t, e) {
    super(t, e), this.consumeContext(i, (o) => {
      this.observe(o?.hasDocumentRootAccess, (s) => {
        this.permitted = s === !0;
      });
    });
  }
}
export {
  u as UmbAllowDocumentRecycleBinCurrentUserCondition,
  u as api
};
//# sourceMappingURL=allow-document-recycle-bin.condition-BbjBGWsb.js.map

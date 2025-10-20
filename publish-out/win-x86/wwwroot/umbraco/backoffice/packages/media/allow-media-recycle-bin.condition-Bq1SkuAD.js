import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CURRENT_USER_CONTEXT as r } from "@umbraco-cms/backoffice/current-user";
class a extends i {
  constructor(e, t) {
    super(e, t), this.consumeContext(r, (o) => {
      this.observe(o?.hasMediaRootAccess, (s) => {
        this.permitted = s === !0;
      });
    });
  }
}
export {
  a as UmbAllowMediaRecycleBinCurrentUserCondition,
  a as api
};
//# sourceMappingURL=allow-media-recycle-bin.condition-Bq1SkuAD.js.map

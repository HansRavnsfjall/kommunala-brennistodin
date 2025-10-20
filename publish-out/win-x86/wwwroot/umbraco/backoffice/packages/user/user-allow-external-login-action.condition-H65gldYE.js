import { UmbConditionBase as t, umbExtensionsRegistry as r } from "@umbraco-cms/backoffice/extension-registry";
class a extends t {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(o, n) {
    super(o, n), this.observe(
      r.byType("authProvider"),
      (i) => this.permitted = i.length > 0 && i.some((e) => e.meta?.linking?.allowManualLinking),
      "_userAllowExternalLoginActionConditionProviders"
    );
  }
}
export {
  a as UmbUserAllowExternalLoginActionCondition,
  a as api
};
//# sourceMappingURL=user-allow-external-login-action.condition-H65gldYE.js.map

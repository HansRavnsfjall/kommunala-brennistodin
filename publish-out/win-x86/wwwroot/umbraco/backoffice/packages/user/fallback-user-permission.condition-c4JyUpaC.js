import { UMB_CURRENT_USER_CONTEXT as n } from "@umbraco-cms/backoffice/current-user";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
class a extends r {
  constructor(t, e) {
    super(t, e), this.consumeContext(n, (i) => {
      this.observe(
        i?.currentUser,
        (s) => {
          const o = s?.fallbackPermissions || [];
          this.#e(o);
        },
        "umbUserFallbackPermissionConditionObserver"
      );
    });
  }
  #e(t) {
    let e = !0, i = !0;
    this.config.allOf?.length && (e = this.config.allOf.every((s) => t.includes(s))), this.config.oneOf?.length && (i = this.config.oneOf.some((s) => t.includes(s))), !e && !i && (e = !1, i = !1), this.permitted = e && i;
  }
}
export {
  a as UmbFallbackUserPermissionCondition,
  a as api
};
//# sourceMappingURL=fallback-user-permission.condition-c4JyUpaC.js.map

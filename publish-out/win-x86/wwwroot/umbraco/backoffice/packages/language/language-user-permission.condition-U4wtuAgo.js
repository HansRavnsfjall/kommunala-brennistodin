import { UMB_CURRENT_USER_CONTEXT as o } from "@umbraco-cms/backoffice/current-user";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
class u extends r {
  constructor(e, t) {
    super(e, t), this.consumeContext(o, (i) => {
      this.observe(
        i?.currentUser,
        (s) => {
          this.#e(s);
        },
        "umbLanguageUserPermissionConditionObserver"
      );
    });
  }
  #e(e) {
    if (e?.hasAccessToAllLanguages) {
      this.permitted = !0;
      return;
    }
    const t = e?.languages ?? [];
    let i = !0, s = !0;
    this.config.allOf?.length && (i = this.config.allOf.every((n) => t.includes(n))), this.config.oneOf?.length && (s = this.config.oneOf.some((n) => t.includes(n))), this.permitted = i && s;
  }
}
export {
  u as UmbLanguageUserPermissionCondition,
  u as api
};
//# sourceMappingURL=language-user-permission.condition-U4wtuAgo.js.map

import { y as o } from "./manifests-BfVrApfB.js";
import { UMB_CURRENT_USER_CONTEXT as n } from "@umbraco-cms/backoffice/current-user";
import { UmbConditionBase as m } from "@umbraco-cms/backoffice/extension-registry";
function u(r) {
  return r.userPermissionType === o;
}
class h extends m {
  #e = [];
  #i = [];
  constructor(s, e) {
    super(s, e), this.consumeContext(n, (i) => {
      this.observe(
        i?.currentUser,
        (t) => {
          this.#e = t?.permissions?.filter(u) || [], this.#i = t?.fallbackPermissions || [], this.#t();
        },
        "umbDocumentPropertyValueUserPermissionConditionObserver"
      );
    });
  }
  #t() {
    const s = this.#e.length > 0;
    if (!s) {
      this.#s(this.#i);
      return;
    }
    if (s) {
      const e = this.#e.find(
        (i) => i.propertyType.unique === this.config.match.propertyType.unique
      );
      if (!e) {
        this.#s(this.#i);
        return;
      }
      this.#s(e.verbs);
    }
  }
  #s(s) {
    let e = !0, i = !0;
    this.config.allOf?.length && (e = this.config.allOf.every((t) => s.includes(t))), this.config.oneOf?.length && (i = this.config.oneOf.some((t) => s.includes(t))), !e && !i && (e = !1, i = !1), this.permitted = e && i;
  }
}
export {
  h as UmbDocumentPropertyValueUserPermissionCondition,
  h as api
};
//# sourceMappingURL=document-property-value-user-permission.condition-CU3w8NKw.js.map

import { UMB_CURRENT_USER_CONTEXT as h } from "@umbraco-cms/backoffice/current-user";
import { UMB_ENTITY_CONTEXT as c, UMB_ANCESTORS_ENTITY_CONTEXT as u } from "@umbraco-cms/backoffice/entity";
import { observeMultiple as f } from "@umbraco-cms/backoffice/observable-api";
import { UmbConditionBase as l } from "@umbraco-cms/backoffice/extension-registry";
function a(r) {
  return r.$type === "DocumentPermissionPresentationModel";
}
class v extends l {
  #o;
  #s;
  #e = [];
  #i = [];
  #r = [];
  constructor(i, t) {
    super(i, t), this.consumeContext(h, (s) => {
      this.observe(
        s?.currentUser,
        (e) => {
          this.#e = e?.permissions?.filter(a) || [], this.#i = e?.fallbackPermissions || [], this.#t();
        },
        "umbUserPermissionConditionObserver"
      );
    }), this.consumeContext(c, (s) => {
      if (!s) {
        this.removeUmbControllerByAlias("umbUserPermissionEntityContextObserver");
        return;
      }
      this.observe(
        f([s.entityType, s.unique]),
        ([e, n]) => {
          this.#o = e, this.#s = n, this.#t();
        },
        "umbUserPermissionEntityContextObserver"
      );
    }), this.consumeContext(u, (s) => {
      this.observe(
        s?.ancestors,
        (e) => {
          this.#r = e?.map((n) => n.unique) ?? [], this.#t();
        },
        "observeAncestors"
      );
    });
  }
  #t() {
    if (!this.#o || this.#s === void 0) return;
    const i = this.#e.length > 0;
    if (!i) {
      this.#n(this.#i);
      return;
    }
    if (i) {
      const s = [...[...this.#r, this.#s].filter((o) => o !== null)].reverse(), e = new Map(this.#e.map((o) => [o.document.id, o])), n = s.find((o) => e.has(o)), m = n ? e.get(n) : void 0;
      if (!m) {
        this.#n(this.#i);
        return;
      }
      this.#n(m.verbs);
    }
  }
  #n(i) {
    let t = !0, s = !0;
    this.config.allOf?.length && (t = this.config.allOf.every((e) => i.includes(e))), this.config.oneOf?.length && (s = this.config.oneOf.some((e) => i.includes(e))), !t && !s && (t = !1, s = !1), this.permitted = t && s;
  }
}
export {
  v as UmbDocumentUserPermissionCondition,
  v as api
};
//# sourceMappingURL=document-user-permission.condition-BkDOsmEj.js.map

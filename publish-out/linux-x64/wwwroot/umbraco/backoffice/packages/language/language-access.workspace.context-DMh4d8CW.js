import { e as a } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { UmbContextBase as u } from "@umbraco-cms/backoffice/class-api";
import { UMB_CURRENT_USER_CONTEXT as n } from "@umbraco-cms/backoffice/current-user";
import { UmbVariantId as c } from "@umbraco-cms/backoffice/variant";
import { UMB_CONTENT_WORKSPACE_CONTEXT as l } from "@umbraco-cms/backoffice/content";
class C extends u {
  #s;
  #r;
  #o;
  #e;
  constructor(r) {
    super(r, a), this.consumeContext(l, (t) => {
      this.#s = t, this.observe(t?.variantOptions, (e) => {
        this.#e = e, this.#t();
      });
    }), this.consumeContext(n, (t) => {
      this.observe(t?.languages, (e) => {
        this.#r = e, this.#t();
      }), this.observe(t?.hasAccessToAllLanguages, (e) => {
        this.#o = e, this.#t();
      });
    });
  }
  async #t() {
    if (!this.#s) return;
    const t = this.#e?.filter((s) => this.#o || !s.culture ? !1 : !this.#r?.includes(s.culture))?.map((s) => new c(s.culture, s.segment)) || [], e = "UMB_LANGUAGE_PERMISSION_", o = t.map((s) => ({
      unique: e + s.culture,
      variantId: s,
      message: "You do not have permission to edit to this culture"
    })), i = this.#e?.map((s) => e + s.culture) || [];
    this.#s.readOnlyGuard?.removeRules(i), this.#s.readOnlyGuard?.addRules(o);
  }
}
export {
  C as UmbLanguageAccessWorkspaceContext,
  C as api
};
//# sourceMappingURL=language-access.workspace.context-DMh4d8CW.js.map

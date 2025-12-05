import { g as a } from "./manifests-BfVrApfB.js";
import { UmbVariantId as r } from "@umbraco-cms/backoffice/variant";
import { UmbSaveWorkspaceAction as i } from "@umbraco-cms/backoffice/workspace";
class h extends i {
  #t;
  constructor(e, t) {
    super(e, { workspaceContextToken: a, ...t });
  }
  async hasAdditionalOptions() {
    await this._retrieveWorkspaceContext;
    const t = (await this.observe(this._workspaceContext.variantOptions).asPromise().catch(() => {
    }))?.filter((s) => s.culture);
    return t ? t?.length > 1 : !1;
  }
  _gotWorkspaceContext() {
    super._gotWorkspaceContext(), this.#s(), this.#a();
  }
  #s() {
    this.observe(
      this._workspaceContext?.variants,
      (e) => {
        this.#t = e, this.#e();
      },
      "saveWorkspaceActionVariantsObserver"
    );
  }
  #a() {
    this.observe(
      this._workspaceContext?.readOnlyGuard.rules,
      () => this.#e(),
      "umbObserveReadOnlyGuardRules"
    );
  }
  #e() {
    this.#t?.filter(
      (t) => this._workspaceContext.readOnlyGuard.getIsPermittedForVariant(r.Create(t))
    ).length === this.#t?.length ? this.disable() : this.enable();
  }
}
export {
  h as UmbDocumentSaveWorkspaceAction,
  h as api
};
//# sourceMappingURL=save.action-DH7wWlrz.js.map

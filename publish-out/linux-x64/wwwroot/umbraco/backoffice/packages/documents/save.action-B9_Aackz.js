import { g as r } from "./manifests-BP7S9LPy.js";
import { UmbVariantId as s } from "@umbraco-cms/backoffice/variant";
import { UmbSaveWorkspaceAction as o } from "@umbraco-cms/backoffice/workspace";
class l extends o {
  constructor(t, e) {
    super(t, { workspaceContextToken: r, ...e });
  }
  async hasAdditionalOptions() {
    await this._retrieveWorkspaceContext;
    const e = (await this.observe(this._workspaceContext.variantOptions).asPromise().catch(() => {
    }))?.filter((a) => a.culture);
    return e ? e?.length > 1 : !1;
  }
  _gotWorkspaceContext() {
    super._gotWorkspaceContext(), this.#t();
  }
  #t() {
    this.observe(
      this._workspaceContext?.variants,
      (t) => {
        t?.filter(
          (a) => this._workspaceContext.readOnlyGuard.getIsPermittedForVariant(s.Create(a))
        ).length === t?.length ? this.disable() : this.enable();
      },
      "saveWorkspaceActionVariantsObserver"
    );
  }
}
export {
  l as UmbDocumentSaveWorkspaceAction,
  l as api
};
//# sourceMappingURL=save.action-B9_Aackz.js.map

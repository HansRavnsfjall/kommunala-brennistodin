import { g as r } from "./manifests-BfVrApfB.js";
import { U as s } from "./property-value-user-permission-workspace-context-base-jWteL2zJ.js";
class a extends s {
  #e;
  constructor(e) {
    super(e), this.consumeContext(r, (t) => {
      this.#e = t, this.#t();
    });
  }
  #t() {
    if (!this.#e) return;
    const e = this.#e;
    this.observe(this.#e.structure.contentTypeProperties, (t) => {
      t.length !== 0 && (this.#e.propertyViewGuard.fallbackToNotPermitted(), this.#e.propertyWriteGuard.fallbackToNotPermitted(), this._setPermissions(t, e.propertyViewGuard, e.propertyWriteGuard));
    });
  }
}
export {
  a as UmbDocumentPropertyValueUserPermissionWorkspaceContext,
  a as api
};
//# sourceMappingURL=document-property-value-user-permission.workspace-context-CRTGkL2D.js.map

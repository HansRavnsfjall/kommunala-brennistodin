import { e as o } from "./manifests-BP7S9LPy.js";
import { U as s } from "./property-value-user-permission-workspace-context-base-BbpNNw9A.js";
import { UMB_BLOCK_WORKSPACE_CONTEXT as i } from "@umbraco-cms/backoffice/block";
import { UMB_CONTENT_WORKSPACE_CONTEXT as n } from "@umbraco-cms/backoffice/content";
class l extends s {
  #t;
  constructor(t) {
    super(t), this.consumeContext(i, async (e) => {
      this.#t = e, (await this.consumeContext(n, () => {
      }).passContextAliasMatches().asPromise().catch(() => {
      }))?.getEntityType() === o && this.#e();
    });
  }
  async #e() {
    if (!this.#t) return;
    const t = this.#t.content;
    this.observe(t.structure.contentTypeProperties, (r) => {
      r.length !== 0 && (t.propertyViewGuard.fallbackToNotPermitted(), t.propertyWriteGuard.fallbackToNotPermitted(), this._setPermissions(r, t.propertyViewGuard, t.propertyWriteGuard));
    });
    const e = this.#t.settings;
    this.observe(e.structure.contentTypeProperties, (r) => {
      r.length !== 0 && (e.propertyViewGuard.fallbackToNotPermitted(), e.propertyWriteGuard.fallbackToNotPermitted(), this._setPermissions(r, e.propertyViewGuard, e.propertyWriteGuard));
    });
  }
}
export {
  l as UmbDocumentBlockPropertyValueUserPermissionWorkspaceContext,
  l as api
};
//# sourceMappingURL=document-block-property-value-user-permission.workspace-context-D-VyES6Q.js.map

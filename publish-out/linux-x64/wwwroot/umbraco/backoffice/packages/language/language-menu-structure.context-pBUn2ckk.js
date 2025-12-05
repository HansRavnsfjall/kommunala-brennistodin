import { UmbContextBase as s } from "@umbraco-cms/backoffice/class-api";
import { UMB_WORKSPACE_CONTEXT as r } from "@umbraco-cms/backoffice/workspace";
import { UmbArrayState as a } from "@umbraco-cms/backoffice/observable-api";
import { UMB_MENU_STRUCTURE_WORKSPACE_CONTEXT as o } from "@umbraco-cms/backoffice/menu";
class l extends s {
  constructor(t) {
    super(t, o), this.#t = new a([], (e) => e.unique), this.structure = this.#t.asObservable(), this.provideContext("UmbMenuStructureWorkspaceContext", this), this.consumeContext(r, (e) => {
      this.#e = e, this.#s();
    });
  }
  // TODO: figure out the correct type where we have "data" available
  #e;
  #t;
  async #s() {
    const t = await this.observe(this.#e?.data, () => {
    })?.asPromise();
    if (!t) throw new Error("Data is not available");
    const e = [
      // TODO: figure out if we can get the root from somewhere
      // so we don't have to hardcode it
      {
        unique: null,
        entityType: "language-root",
        name: "Languages",
        isFolder: !1
      },
      {
        unique: t.unique,
        entityType: t.entityType,
        name: t.name,
        isFolder: !1
      }
    ];
    this.#t.setValue(e);
  }
}
export {
  l as UmbLanguageNavigationStructureWorkspaceContext,
  l as default
};
//# sourceMappingURL=language-menu-structure.context-pBUn2ckk.js.map

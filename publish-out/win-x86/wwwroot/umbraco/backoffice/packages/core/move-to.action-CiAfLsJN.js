import { U as a } from "./tree-picker-modal.token-CxLbH2eO.js";
import { UmbEntityActionBase as r, UmbRequestReloadStructureForEntityEvent as s } from "@umbraco-cms/backoffice/entity-action";
import { umbOpenModal as u } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as l } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ACTION_EVENT_CONTEXT as h } from "@umbraco-cms/backoffice/action";
class w extends r {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    if (!this.args.entityType) throw new Error("Entity Type is not available");
    const t = (await u(this, a, {
      data: {
        treeAlias: this.args.meta.treeAlias,
        foldersOnly: this.args.meta.foldersOnly,
        expandTreeRoot: !0,
        pickableFilter: (n) => n.unique !== this.args.unique
      }
    })).selection[0];
    if (t === void 0) throw new Error("Destination Unique is not available");
    const i = await l(this, this.args.meta.moveRepositoryAlias);
    if (!i) throw new Error("Move Repository is not available");
    const { error: o } = await i.requestMoveTo({
      unique: this.args.unique,
      destination: { unique: t }
    });
    if (o)
      throw o;
    this.#t();
  }
  async #t() {
    const e = await this.getContext(h);
    if (!e) throw new Error("Action Event Context is not available");
    const t = new s({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    e.dispatchEvent(t);
  }
}
export {
  w as UmbMoveToEntityAction,
  w as default
};
//# sourceMappingURL=move-to.action-CiAfLsJN.js.map

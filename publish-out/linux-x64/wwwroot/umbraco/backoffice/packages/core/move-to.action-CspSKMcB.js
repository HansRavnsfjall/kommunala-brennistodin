import { U as c } from "./entity-bulk-action-base-BJMTAmYH.js";
import { createExtensionApiByAlias as E } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRequestReloadChildrenOfEntityEvent as m, UmbRequestReloadStructureForEntityEvent as h } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as d } from "@umbraco-cms/backoffice/action";
import { UMB_ENTITY_CONTEXT as p } from "@umbraco-cms/backoffice/entity";
import { umbOpenModal as v } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL as f } from "@umbraco-cms/backoffice/tree";
class U extends c {
  async execute() {
    if (this.selection?.length === 0) return;
    const i = await v(this, f, {
      data: {
        foldersOnly: this.args.meta.foldersOnly,
        hideTreeRoot: this.args.meta.hideTreeRoot,
        treeAlias: this.args.meta.treeAlias
      }
    });
    if (!i?.selection?.length) return;
    const o = i.selection[0];
    if (o === void 0) throw new Error("Destination Unique is not available");
    const n = await E(
      this,
      this.args.meta.bulkMoveRepositoryAlias
    );
    if (!n) throw new Error("Bulk Move Repository is not available");
    await n.requestBulkMoveTo({ uniques: this.selection, destination: { unique: o } });
    const t = await this.getContext(p);
    if (!t) throw new Error("Entity Context is not available");
    const r = t.getEntityType(), s = t.getUnique();
    if (r && s !== void 0) {
      const e = await this.getContext(d);
      if (!e) throw new Error("Event Context is not available");
      const a = { entityType: r, unique: s }, l = new m(a);
      e.dispatchEvent(l);
      const u = new h(a);
      e.dispatchEvent(u);
    }
  }
}
export {
  U as UmbMediaMoveEntityBulkAction,
  U as api
};
//# sourceMappingURL=move-to.action-CspSKMcB.js.map

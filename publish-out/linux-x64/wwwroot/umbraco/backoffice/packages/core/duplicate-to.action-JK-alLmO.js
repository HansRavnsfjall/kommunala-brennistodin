import { U as c } from "./entity-bulk-action-base-BJMTAmYH.js";
import { createExtensionApiByAlias as E } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRequestReloadChildrenOfEntityEvent as m, UmbRequestReloadStructureForEntityEvent as p } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as h } from "@umbraco-cms/backoffice/action";
import { UMB_ENTITY_CONTEXT as d } from "@umbraco-cms/backoffice/entity";
import { umbOpenModal as f } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL as y } from "@umbraco-cms/backoffice/tree";
class x extends c {
  async execute() {
    if (this.selection?.length === 0) return;
    const i = await f(this, y, {
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
      this.args.meta.bulkDuplicateRepositoryAlias
    );
    if (!n) throw new Error("Bulk Duplicate Repository is not available");
    await n.requestBulkDuplicateTo({
      uniques: this.selection,
      destination: { unique: o }
    });
    const t = await this.getContext(d);
    if (!t) throw new Error("Entity Context is not available");
    const a = t.getEntityType(), r = t.getUnique();
    if (a && r !== void 0) {
      const e = await this.getContext(h);
      if (!e) throw new Error("Event Context is not available");
      const s = { entityType: a, unique: r }, l = new m(s);
      e.dispatchEvent(l);
      const u = new p(s);
      e.dispatchEvent(u);
    }
  }
}
export {
  x as UmbMediaDuplicateEntityBulkAction,
  x as api
};
//# sourceMappingURL=duplicate-to.action-JK-alLmO.js.map

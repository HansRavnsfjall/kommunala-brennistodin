import { U as c } from "./entity-bulk-action-base-BJMTAmYH.js";
import { createExtensionApiByAlias as l } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRequestReloadChildrenOfEntityEvent as m, UmbRequestReloadStructureForEntityEvent as h } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as u } from "@umbraco-cms/backoffice/action";
import { UMB_ENTITY_CONTEXT as E } from "@umbraco-cms/backoffice/entity";
import { umbConfirmModal as p } from "@umbraco-cms/backoffice/modal";
import { UmbDeprecation as y } from "@umbraco-cms/backoffice/utils";
class g extends c {
  constructor(e, t) {
    super(e, t), new y({
      removeInVersion: "17.0.0",
      deprecated: "UmbMediaTrashEntityBulkAction",
      solution: "import UmbMediaTrashEntityBulkAction from @umbraco-cms/backoffice/recycle-bin instead."
    }).warn();
  }
  async execute() {
    if (this.selection?.length === 0) return;
    await p(this._host, {
      headline: "Trash",
      content: `Are you sure you want to move ${this.selection.length} ${this.selection.length === 1 ? "item" : "items"} to the recycle bin?`,
      color: "danger",
      confirmLabel: "Trash"
    });
    const e = await l(
      this,
      this.args.meta.bulkTrashRepositoryAlias
    );
    if (!e) throw new Error("Bulk Trash Repository is not available");
    await e.requestBulkTrash({ uniques: this.selection });
    const t = await this.getContext(E);
    if (!t) throw new Error("Entity Context is not available");
    const o = t.getEntityType(), n = t.getUnique();
    if (o && n !== void 0) {
      const i = await this.getContext(u);
      if (!i) throw new Error("Event Context is not available");
      const r = { entityType: o, unique: n }, s = new m(r);
      i.dispatchEvent(s);
      const a = new h(r);
      i.dispatchEvent(a);
    }
  }
}
export {
  g as UmbMediaTrashEntityBulkAction,
  g as api
};
//# sourceMappingURL=trash.action-BecWWVL_.js.map

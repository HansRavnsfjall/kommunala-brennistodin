import { UmbModalToken as i, umbOpenModal as l, umbConfirmModal as m } from "@umbraco-cms/backoffice/modal";
import { UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST as y, UmbEntityActionBase as n, UmbRequestReloadChildrenOfEntityEvent as u, UmbRequestReloadStructureForEntityEvent as d } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as s } from "@umbraco-cms/backoffice/action";
import { createExtensionApiByAlias as h } from "@umbraco-cms/backoffice/extension-registry";
const p = {
  type: "kind",
  alias: "Umb.Kind.TreeItem.Default",
  matchKind: "default",
  matchType: "treeItem",
  manifest: {
    type: "treeItem",
    api: () => import("./tree-item-default.context-C4ufWM7q.js"),
    element: () => import("./tree-item-default.element-C_yOdFx9.js")
  }
}, b = [p], E = "Umb.Modal.DuplicateTo", g = new i(
  E,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), _ = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.SortChildrenOf",
  matchKind: "sortChildrenOf",
  matchType: "entityAction",
  manifest: {
    ...y.manifest,
    type: "entityAction",
    kind: "sortChildrenOf",
    api: () => import("./sort-children-of.action-ibpnREXq.js"),
    weight: 100,
    forEntityTypes: [],
    meta: {
      icon: "icon-height",
      label: "#actions_sort",
      additionalOptions: !0,
      itemRepositoryAlias: "",
      sortRepositoryAlias: ""
    }
  }
}, C = _, A = "Umb.Modal.SortChildrenOf", D = new i(
  A,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), T = new i(
  "Umb.Modal.Folder.Create",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), f = new i(
  "Umb.Modal.Folder.Update",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class I extends n {
  async execute() {
    await l(this, T, {
      data: {
        folderRepositoryAlias: this.args.meta.folderRepositoryAlias,
        parent: {
          unique: this.args.unique,
          entityType: this.args.entityType
        }
      }
    });
    const t = await this.getContext(s);
    if (!t)
      throw new Error("Event context not found.");
    const e = new u({
      entityType: this.args.entityType,
      unique: this.args.unique
    });
    t.dispatchEvent(e);
  }
}
class R extends n {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const t = await h(
      this,
      this.args.meta.folderRepositoryAlias
    ), { data: e } = await t.requestByUnique(this.args.unique);
    if (e) {
      await m(this, {
        headline: `Delete ${e.name}`,
        content: "Are you sure you want to delete this folder?",
        color: "danger",
        confirmLabel: "Delete"
      });
      const { error: o } = await t.delete(this.args.unique);
      if (o)
        throw o;
      const r = await this.getContext(s);
      if (!r) throw new Error("Action event context is missing");
      const c = new d({
        unique: this.args.unique,
        entityType: this.args.entityType
      });
      r.dispatchEvent(c);
    }
  }
}
class q extends n {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await l(this, f, {
      data: {
        folderRepositoryAlias: this.args.meta.folderRepositoryAlias,
        unique: this.args.unique
      }
    });
    const t = await this.getContext(s);
    if (!t)
      throw new Error("Event context not found.");
    const e = new d({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
export {
  g as U,
  D as a,
  I as b,
  E as c,
  _ as d,
  A as e,
  R as f,
  q as g,
  T as h,
  f as i,
  p as j,
  b as k,
  C as m
};
//# sourceMappingURL=update-folder.action-COxnl6zu.js.map

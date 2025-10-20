import { UMB_ACTION_EVENT_CONTEXT as n } from "@umbraco-cms/backoffice/action";
import { UmbEntityActionBase as s, UmbRequestReloadChildrenOfEntityEvent as m, UmbRequestReloadStructureForEntityEvent as l, UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST as y } from "@umbraco-cms/backoffice/entity-action";
import { UmbModalToken as i, umbOpenModal as d, umbConfirmModal as u } from "@umbraco-cms/backoffice/modal";
import { createExtensionApiByAlias as h } from "@umbraco-cms/backoffice/extension-registry";
const p = new i(
  "Umb.Modal.Folder.Create",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), E = new i(
  "Umb.Modal.Folder.Update",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class b extends s {
  async execute() {
    await d(this, p, {
      data: {
        folderRepositoryAlias: this.args.meta.folderRepositoryAlias,
        parent: {
          unique: this.args.unique,
          entityType: this.args.entityType
        }
      }
    });
    const t = await this.getContext(n);
    if (!t)
      throw new Error("Event context not found.");
    const e = new m({
      entityType: this.args.entityType,
      unique: this.args.unique
    });
    t.dispatchEvent(e);
  }
}
class g extends s {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    const t = await h(
      this,
      this.args.meta.folderRepositoryAlias
    ), { data: e } = await t.requestByUnique(this.args.unique);
    if (e) {
      await u(this, {
        headline: `Delete ${e.name}`,
        content: "Are you sure you want to delete this folder?",
        color: "danger",
        confirmLabel: "Delete"
      });
      const { error: o } = await t.delete(this.args.unique);
      if (o)
        throw o;
      const r = await this.getContext(n);
      if (!r) throw new Error("Action event context is missing");
      const c = new l({
        unique: this.args.unique,
        entityType: this.args.entityType
      });
      r.dispatchEvent(c);
    }
  }
}
class C extends s {
  async execute() {
    if (!this.args.unique) throw new Error("Unique is not available");
    await d(this, E, {
      data: {
        folderRepositoryAlias: this.args.meta.folderRepositoryAlias,
        unique: this.args.unique
      }
    });
    const t = await this.getContext(n);
    if (!t)
      throw new Error("Event context not found.");
    const e = new l({
      unique: this.args.unique,
      entityType: this.args.entityType
    });
    t.dispatchEvent(e);
  }
}
const _ = {
  type: "kind",
  alias: "Umb.Kind.TreeItem.Default",
  matchKind: "default",
  matchType: "treeItem",
  manifest: {
    type: "treeItem",
    api: () => import("./tree-item-default.context-D1DGStAT.js"),
    element: () => import("./tree-item-default.element-BGQE9dyg.js")
  }
}, D = [_], A = "Umb.Modal.DuplicateTo", I = new i(
  A,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), T = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.SortChildrenOf",
  matchKind: "sortChildrenOf",
  matchType: "entityAction",
  manifest: {
    ...y.manifest,
    type: "entityAction",
    kind: "sortChildrenOf",
    api: () => import("./sort-children-of.action-BAzYR5i_.js"),
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
}, R = T, f = "Umb.Modal.SortChildrenOf", q = new i(
  f,
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
export {
  I as U,
  q as a,
  b,
  A as c,
  T as d,
  f as e,
  p as f,
  E as g,
  g as h,
  C as i,
  _ as j,
  D as k,
  R as m
};
//# sourceMappingURL=sort-children-of-modal.token-CXKQZTL5.js.map

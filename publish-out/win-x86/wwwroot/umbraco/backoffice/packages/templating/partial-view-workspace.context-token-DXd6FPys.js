import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as r } from "@umbraco-cms/backoffice/modal";
const s = "partial-view", i = "partial-view-root", t = "partial-view-folder", _ = "Umb.Repository.PartialView.Folder", n = "Umb.Store.PartialView.Folder", T = [
  {
    type: "repository",
    alias: _,
    name: "Partial View Folder Repository",
    api: () => import("./partial-view-folder.repository-mv1qJNQl.js")
  },
  {
    type: "store",
    alias: n,
    name: "Partial View Folder Store",
    api: () => import("./partial-view-folder.store-DAiBbWg5.js")
  }
], w = new e(
  "UmbWorkspaceContext",
  void 0,
  (a) => a.getEntityType?.() === t
), l = "Umb.Workspace.PartialView.Folder", E = [
  {
    type: "workspace",
    kind: "routable",
    alias: l,
    name: "Partial View Folder Workspace",
    api: () => import("./partial-view-folder-workspace.context-DHbW0vCu.js"),
    meta: {
      entityType: t
    }
  }
], A = "Umb.EntityAction.PartialView.Folder.Delete", I = [
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: A,
    name: "Delete Partial View folder Entity Action",
    forEntityTypes: [t],
    meta: {
      folderRepositoryAlias: _
    }
  },
  ...T,
  ...E
], m = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.PartialView.Tree.ReloadChildrenOf",
    name: "Reload Partial View Tree Item Children Entity Action",
    forEntityTypes: [i, t]
  }
], o = "Umb.Repository.PartialView.Tree", p = "Umb.Store.PartialView.Tree", P = "Umb.Tree.PartialView", y = [
  {
    type: "repository",
    alias: o,
    name: "Partial View Tree Repository",
    api: () => import("./partial-view-tree.repository-CzvkyXg4.js")
  },
  {
    type: "treeStore",
    alias: p,
    name: "Partial View Tree Store",
    api: () => import("./partial-view-tree.store-BEwgI138.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: P,
    name: "Partial View Tree",
    meta: {
      repositoryAlias: o
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.PartialView",
    name: "Partial View Tree Item",
    forEntityTypes: [
      i,
      s,
      t
    ]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.PartialView.Root",
    name: "Partial View Root Workspace",
    meta: {
      entityType: i,
      headline: "#treeHeaders_partialViews"
    }
  },
  ...I,
  ...m
], d = new r(
  "Umb.Modal.PartialView.CreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), U = new r(
  "Umb.Modal.PartialView.CreateFromSnippet",
  {
    modal: {
      type: "sidebar"
    }
  }
), c = new e(
  "UmbPartialViewDetailStore"
), L = new e(
  "UmbPartialViewItemStore"
), O = new e(
  "UmbPartialViewTreeStore"
), S = new e(
  "UmbPartialViewFolderStore"
), W = new e(
  "UmbWorkspaceContext",
  void 0,
  (a) => a.getEntityType?.() === s
);
export {
  d as U,
  U as a,
  s as b,
  i as c,
  t as d,
  c as e,
  L as f,
  o as g,
  p as h,
  P as i,
  O as j,
  A as k,
  _ as l,
  n as m,
  S as n,
  l as o,
  w as p,
  W as q,
  y as r
};
//# sourceMappingURL=partial-view-workspace.context-token-DXd6FPys.js.map

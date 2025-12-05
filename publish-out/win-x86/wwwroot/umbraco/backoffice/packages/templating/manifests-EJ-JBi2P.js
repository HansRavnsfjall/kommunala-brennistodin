import { m as T, b as m } from "./stylesheet-picker-modal.token-C6nznOkG.js";
import { UmbModalToken as l } from "@umbraco-cms/backoffice/modal";
import { U as i, b as e, a } from "./entity-CA4W0tlV.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/store";
import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/id";
import { UMB_WORKSPACE_CONDITION_ALIAS as E, UmbSubmitWorkspaceAction as y } from "@umbraco-cms/backoffice/workspace";
const p = "Umb.Repository.Stylesheet.Detail", _ = "Umb.Store.Stylesheet.Detail", u = [
  {
    type: "repository",
    alias: p,
    name: "Stylesheet Detail Repository",
    api: () => import("./stylesheet-detail.repository-DE8QuYCt.js")
  },
  {
    type: "store",
    alias: _,
    name: "Stylesheet Detail Store",
    api: () => import("./stylesheet-detail.store-vgfm20da.js")
  },
  ...T
], $ = new l(
  "Umb.Modal.Stylesheet.CreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), r = "Umb.Repository.Stylesheet.Rename", c = "Umb.EntityAction.Stylesheet.Rename", v = [
  {
    type: "repository",
    alias: r,
    name: "Rename Stylesheet Repository",
    api: () => import("./rename-stylesheet.repository-DKYWATSr.js")
  },
  {
    type: "entityAction",
    kind: "renameServerFile",
    alias: c,
    name: "Rename Stylesheet Entity Action",
    forEntityTypes: [i],
    meta: {
      renameRepositoryAlias: r,
      itemRepositoryAlias: m
    }
  }
], g = "Umb.MenuItem.Stylesheets", K = new t(
  "UmbStylesheetFolderStore"
), n = "Umb.Repository.Stylesheet.Folder", A = "Umb.Store.Stylesheet.Folder", R = [
  {
    type: "repository",
    alias: n,
    name: "Stylesheet Folder Repository",
    api: () => import("./stylesheet-folder.repository-BiJrlntX.js")
  },
  {
    type: "store",
    alias: A,
    name: "Stylesheet Folder Store",
    api: () => import("./stylesheet-folder.store-B5QMZ-6p.js")
  }
], x = new t(
  "UmbWorkspaceContext",
  void 0,
  (s) => s.getEntityType?.() === e
), U = "Umb.Workspace.Stylesheet.Folder", h = [
  {
    type: "workspace",
    kind: "routable",
    alias: U,
    name: "Stylesheet Folder Workspace",
    api: () => import("./stylesheet-folder-workspace.context-w7lrxT9y.js"),
    meta: {
      entityType: e
    }
  }
], L = "Umb.EntityAction.Stylesheet.Folder.Delete", d = [
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: L,
    name: "Delete Stylesheet folder Entity Action",
    forEntityTypes: [e],
    meta: {
      folderRepositoryAlias: n
    }
  },
  ...R,
  ...h
], O = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Stylesheet.Tree.ReloadChildrenOf",
    name: "Reload Stylesheet Tree Item Children Entity Action",
    forEntityTypes: [a, e]
  }
], I = "Umb.Tree.Stylesheet", S = "Umb.Repository.StylesheetTree", b = "Umb.Store.StylesheetTree", X = [
  {
    type: "repository",
    alias: S,
    name: "Stylesheet Tree Repository",
    api: () => import("./stylesheet-tree.repository-CwjcWNAr.js")
  },
  {
    type: "treeStore",
    alias: b,
    name: "Stylesheet Tree Store",
    api: () => import("./stylesheet-tree.store-CkK_alum.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: I,
    name: "Stylesheet Tree",
    weight: 10,
    meta: {
      repositoryAlias: S
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Stylesheet",
    name: "Stylesheet Tree Item",
    forEntityTypes: [a, i, e]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Stylesheet.Root",
    name: "Stylesheet Root Workspace",
    meta: {
      entityType: a,
      headline: "#treeHeaders_stylesheets"
    }
  },
  ...d,
  ...O
], V = new t("UmbStylesheetTreeStore"), j = new t(
  "UmbWorkspaceContext",
  void 0,
  (s) => s.getEntityType?.() === i
), o = "Umb.Workspace.Stylesheet", q = [
  {
    type: "workspace",
    kind: "routable",
    alias: o,
    name: "Stylesheet Workspace",
    api: () => import("./stylesheet-workspace.context-d2pAwBZh.js"),
    meta: {
      entityType: "stylesheet"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Stylesheet.CodeEditor",
    name: "Stylesheet Workspace Code Editor View",
    element: () => import("./stylesheet-code-editor-workspace-view.element-Bllqyypm.js"),
    weight: 700,
    meta: {
      label: "#stylesheet_tabCode",
      pathname: "code",
      icon: "icon-brackets"
    },
    conditions: [
      {
        alias: E,
        match: o
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Stylesheet.Save",
    name: "Save Stylesheet Workspace Action",
    api: y,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: E,
        match: o
      }
    ]
  }
];
export {
  $ as U,
  r as a,
  c as b,
  g as c,
  p as d,
  _ as e,
  S as f,
  b as g,
  I as h,
  V as i,
  L as j,
  n as k,
  A as l,
  K as m,
  U as n,
  x as o,
  j as p,
  o as q,
  v as r,
  u as s,
  X as t,
  q as u
};
//# sourceMappingURL=manifests-EJ-JBi2P.js.map

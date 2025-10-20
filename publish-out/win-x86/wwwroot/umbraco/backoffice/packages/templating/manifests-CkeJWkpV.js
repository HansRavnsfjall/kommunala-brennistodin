import { m as T, b as l } from "./stylesheet-picker-modal.token-CeSiGQ35.js";
import { UmbModalToken as m } from "@umbraco-cms/backoffice/modal";
import { U as i, b as e, a } from "./entity-CA4W0tlV.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/id";
import { UMB_WORKSPACE_CONDITION_ALIAS as E, UmbSubmitWorkspaceAction as y } from "@umbraco-cms/backoffice/workspace";
const p = "Umb.Repository.Stylesheet.Detail", _ = "Umb.Store.Stylesheet.Detail", w = [
  {
    type: "repository",
    alias: p,
    name: "Stylesheet Detail Repository",
    api: () => import("./stylesheet-detail.repository-DJIpaooO.js")
  },
  {
    type: "store",
    alias: _,
    name: "Stylesheet Detail Store",
    api: () => import("./stylesheet-detail.store-CmxY54IW.js")
  },
  ...T
], P = new m(
  "Umb.Modal.Stylesheet.CreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
), r = "Umb.Repository.Stylesheet.Rename", c = "Umb.EntityAction.Stylesheet.Rename", u = [
  {
    type: "repository",
    alias: r,
    name: "Rename Stylesheet Repository",
    api: () => import("./rename-stylesheet.repository-BC7ZzYU5.js")
  },
  {
    type: "entityAction",
    kind: "renameServerFile",
    alias: c,
    name: "Rename Stylesheet Entity Action",
    forEntityTypes: [i],
    meta: {
      renameRepositoryAlias: r,
      itemRepositoryAlias: l
    }
  }
], $ = new t(
  "UmbStylesheetFolderStore"
), S = "Umb.Repository.Stylesheet.Folder", A = "Umb.Store.Stylesheet.Folder", R = [
  {
    type: "repository",
    alias: S,
    name: "Stylesheet Folder Repository",
    api: () => import("./stylesheet-folder.repository-DVslwhFg.js")
  },
  {
    type: "store",
    alias: A,
    name: "Stylesheet Folder Store",
    api: () => import("./stylesheet-folder.store-BCqaGoO6.js")
  }
], v = new t(
  "UmbWorkspaceContext",
  void 0,
  (s) => s.getEntityType?.() === e
), h = "Umb.Workspace.Stylesheet.Folder", U = [
  {
    type: "workspace",
    kind: "routable",
    alias: h,
    name: "Stylesheet Folder Workspace",
    api: () => import("./stylesheet-folder-workspace.context-vIB0irbB.js"),
    meta: {
      entityType: e
    }
  }
], d = "Umb.EntityAction.Stylesheet.Folder.Delete", L = [
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: d,
    name: "Delete Stylesheet folder Entity Action",
    forEntityTypes: [e],
    meta: {
      folderRepositoryAlias: S
    }
  },
  ...R,
  ...U
], O = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Stylesheet.Tree.ReloadChildrenOf",
    name: "Reload Stylesheet Tree Item Children Entity Action",
    forEntityTypes: [a, e]
  }
], b = "Umb.Tree.Stylesheet", n = "Umb.Repository.StylesheetTree", I = "Umb.Store.StylesheetTree", g = [
  {
    type: "repository",
    alias: n,
    name: "Stylesheet Tree Repository",
    api: () => import("./stylesheet-tree.repository-3GSTOIPB.js")
  },
  {
    type: "treeStore",
    alias: I,
    name: "Stylesheet Tree Store",
    api: () => import("./stylesheet-tree.store-watzEScG.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: b,
    name: "Stylesheet Tree",
    weight: 10,
    meta: {
      repositoryAlias: n
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
  ...L,
  ...O
], K = new t("UmbStylesheetTreeStore"), x = new t(
  "UmbWorkspaceContext",
  void 0,
  (s) => s.getEntityType?.() === i
), o = "Umb.Workspace.Stylesheet", X = [
  {
    type: "workspace",
    kind: "routable",
    alias: o,
    name: "Stylesheet Workspace",
    api: () => import("./stylesheet-workspace.context-DNfPBhJl.js"),
    meta: {
      entityType: "stylesheet"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.Stylesheet.CodeEditor",
    name: "Stylesheet Workspace Code Editor View",
    element: () => import("./stylesheet-code-editor-workspace-view.element-Db8AOMGp.js"),
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
  P as U,
  r as a,
  c as b,
  p as c,
  _ as d,
  n as e,
  I as f,
  b as g,
  K as h,
  d as i,
  S as j,
  A as k,
  $ as l,
  h as m,
  v as n,
  x as o,
  o as p,
  u as q,
  w as r,
  g as s,
  X as t
};
//# sourceMappingURL=manifests-CkeJWkpV.js.map

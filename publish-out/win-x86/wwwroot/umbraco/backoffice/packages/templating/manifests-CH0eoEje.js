import "./script-item.store.context-token-5j5GfCRe.js";
import { UmbContextToken as i } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UMB_WORKSPACE_CONDITION_ALIAS as S, UmbSubmitWorkspaceAction as m } from "@umbraco-cms/backoffice/workspace";
const n = "Umb.Repository.Script.Item", Y = "Umb.ItemStore.Script", o = "script", e = "script-root", t = "script-folder", a = "Umb.Repository.Script.Rename", _ = "Umb.EntityAction.Script.Rename", T = [
  {
    type: "repository",
    alias: a,
    name: "Rename Script Repository",
    api: () => import("./rename-script.repository-DAja6sxP.js")
  },
  {
    type: "entityAction",
    kind: "renameServerFile",
    alias: _,
    name: "Rename Script Entity Action",
    forEntityTypes: [o],
    meta: {
      renameRepositoryAlias: a,
      itemRepositoryAlias: n
    }
  }
], u = new i("UmbScriptDetailStore"), R = "Umb.Repository.Script.Detail", w = "Umb.Store.Script.Detail", E = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Umb.EntityAction.Script.CreateOptions",
    name: "Script Create Options Entity Action",
    weight: 1200,
    api: () => import("./create.action-DfZvMyTR.js"),
    forEntityTypes: [e, t],
    meta: {
      icon: "icon-add",
      label: "#actions_createFor",
      additionalOptions: !0
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Script.CreateOptions",
    name: "Script Create Options Modal",
    element: () => import("./script-create-options-modal.element-DAlLBm1a.js")
  }
], A = "Umb.EntityAction.Script.Delete", $ = [
  ...E,
  ...T,
  {
    type: "entityAction",
    kind: "delete",
    alias: A,
    name: "Delete Script Entity Action",
    forEntityTypes: [o],
    meta: {
      detailRepositoryAlias: R,
      itemRepositoryAlias: n
    }
  }
], h = "Umb.MenuItem.Script", v = new i("UmbScriptFolderStore"), p = "Umb.Repository.Script.Folder", l = "Umb.Store.Script.Folder", K = new i(
  "UmbWorkspaceContext",
  void 0,
  (c) => c.getEntityType?.() === t
), I = "Umb.Workspace.Script.Folder", y = "Umb.EntityAction.Script.Folder.Delete", U = [
  {
    type: "repository",
    alias: p,
    name: "Script Folder Repository",
    api: () => import("./script-folder.repository-CHdQh_vU.js")
  },
  {
    type: "store",
    alias: l,
    name: "Script Folder Store",
    api: () => import("./script-folder.store-D50QWFun.js")
  }
], d = [
  {
    type: "workspace",
    kind: "routable",
    alias: I,
    name: "Script Folder Workspace",
    api: () => import("./script-folder-workspace.context-DZObHZmf.js"),
    meta: {
      entityType: t
    }
  }
], C = [
  {
    type: "entityAction",
    kind: "folderDelete",
    alias: y,
    name: "Delete Script folder",
    forEntityTypes: [t],
    meta: {
      folderRepositoryAlias: p
    }
  },
  ...U,
  ...d
], O = [
  {
    type: "entityAction",
    alias: "Umb.EntityAction.Script.Tree.ReloadChildrenOf",
    name: "Reload Script Tree Item Children Entity Action",
    kind: "reloadTreeItemChildren",
    forEntityTypes: [e, t]
  }
], r = "Umb.Repository.Script.Tree", P = "Umb.Store.Script.Tree", b = "Umb.Tree.Script", x = [
  {
    type: "repository",
    alias: r,
    name: "Script Tree Repository",
    api: () => import("./script-tree.repository-D5AKqach.js")
  },
  {
    type: "treeStore",
    alias: P,
    name: "Script Tree Store",
    api: () => import("./script-tree.store-CkbABGr3.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: b,
    name: "Script Tree",
    meta: {
      repositoryAlias: r
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Script",
    name: "Script Tree Item",
    forEntityTypes: [e, o, t]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Script.Root",
    name: "Script Root Workspace",
    meta: {
      entityType: e,
      headline: "#treeHeaders_scripts"
    }
  },
  ...C,
  ...O
], X = new i("UmbScriptTreeStore"), s = "Umb.Workspace.Script", M = "Umb.WorkspaceAction.Script.Save", g = [
  {
    type: "workspace",
    kind: "routable",
    alias: s,
    name: "Script Workspace",
    api: () => import("./script-workspace.context-C4Fd_5ta.js"),
    meta: {
      entityType: o
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: M,
    name: "Save Script Workspace Action",
    api: m,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: S,
        match: s
      }
    ]
  }
];
export {
  n as U,
  a,
  _ as b,
  A as c,
  h as d,
  R as e,
  w as f,
  u as g,
  Y as h,
  r as i,
  P as j,
  b as k,
  X as l,
  y as m,
  p as n,
  l as o,
  v as p,
  I as q,
  K as r,
  s,
  M as t,
  o as u,
  e as v,
  t as w,
  $ as x,
  x as y,
  g as z
};
//# sourceMappingURL=manifests-CH0eoEje.js.map

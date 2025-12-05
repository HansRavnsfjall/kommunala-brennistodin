import { UmbContextToken as a } from "@umbraco-cms/backoffice/context-api";
import { UMB_WORKSPACE_CONDITION_ALIAS as m, UmbSubmitWorkspaceAction as s } from "@umbraco-cms/backoffice/workspace";
import { b as e, c as o } from "./template-item.store.context-token-rCTaUJ7s.js";
const p = "Umb.Repository.Template.Detail", i = "Umb.Store.Template.Detail", I = [
  {
    type: "repository",
    alias: p,
    name: "Template Detail Repository",
    api: () => import("./template-detail.repository-CLDjEJ7S.js")
  },
  {
    type: "store",
    alias: i,
    name: "Template Detail Store",
    api: () => import("./template-detail.store-CZ90bIIA.js")
  }
], r = "Umb.Repository.TemplateItem", l = "Umb.Store.TemplateItem", R = [
  {
    type: "repository",
    alias: r,
    name: "Template Item Repository",
    api: () => import("./template-item.repository-CVFneNIa.js")
  },
  {
    type: "itemStore",
    alias: l,
    name: "Template Item Store",
    api: () => import("./template-item.store-CWC3jsVb.js")
  }
], n = "Umb.Repository.TemplateQuery", L = [
  {
    type: "repository",
    alias: n,
    name: "Template Query Repository",
    api: () => import("./template-query.repository-DMJkes5y.js")
  }
], M = "Umb.Condition.Template.AllowDeleteAction", b = "Umb.GlobalSearch.Template", O = "Umb.SearchProvider.Template", P = new a(
  "UmbWorkspaceContext",
  void 0,
  (T) => T.getEntityType?.() === "template"
), E = "Umb.Workspace.Template", d = [
  {
    type: "workspace",
    kind: "routable",
    alias: "Umb.Workspace.Template",
    name: "Template Workspace",
    api: () => import("./template-workspace.context-3TFXw-qk.js"),
    meta: {
      entityType: "template"
    }
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.Template.Save",
    name: "Save Template",
    api: s,
    weight: 70,
    meta: {
      look: "primary",
      color: "positive",
      label: "#buttons_save"
    },
    conditions: [
      {
        alias: m,
        match: E
      }
    ]
  }
], k = new a("UmbTemplateTreeStore"), _ = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Template.Tree.ReloadChildrenOf",
    name: "Reload Template Tree Item Children Entity Action",
    forEntityTypes: [e, o]
  }
], t = "Umb.Repository.Template.Tree", A = "Umb.Store.Template.Tree", c = "Umb.Tree.Template", B = [
  {
    type: "repository",
    alias: t,
    name: "Template Tree Repository",
    api: () => import("./template-tree.repository-BzXO0Q8O.js")
  },
  {
    type: "treeStore",
    alias: A,
    name: "Template Tree Store",
    api: () => import("./template-tree.store-fr3hgnuF.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: c,
    name: "Template Tree",
    meta: {
      repositoryAlias: t
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "Umb.TreeItem.Template",
    name: "Template Tree Item",
    forEntityTypes: [e, o]
  },
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.Template.Root",
    name: "Template Root Workspace",
    meta: {
      entityType: e,
      headline: "#treeHeaders_templates"
    }
  },
  ..._
];
export {
  r as U,
  M as a,
  p as b,
  i as c,
  l as d,
  O as e,
  b as f,
  P as g,
  E as h,
  n as i,
  t as j,
  A as k,
  c as l,
  k as m,
  I as n,
  R as o,
  L as p,
  B as q,
  d as r
};
//# sourceMappingURL=manifests-DcuSN-5b.js.map

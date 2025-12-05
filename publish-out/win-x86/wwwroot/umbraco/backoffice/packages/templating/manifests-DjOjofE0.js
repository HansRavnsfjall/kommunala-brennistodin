import { UmbContextToken as a } from "@umbraco-cms/backoffice/context-api";
import { UMB_WORKSPACE_CONDITION_ALIAS as m, UmbSubmitWorkspaceAction as s } from "@umbraco-cms/backoffice/workspace";
import { b as e, c as o } from "./template-item.store.context-token-rCTaUJ7s.js";
const p = "Umb.Repository.Template.Detail", i = "Umb.Store.Template.Detail", I = [
  {
    type: "repository",
    alias: p,
    name: "Template Detail Repository",
    api: () => import("./template-detail.repository-C9KE5ri2.js")
  },
  {
    type: "store",
    alias: i,
    name: "Template Detail Store",
    api: () => import("./template-detail.store-CZ90bIIA.js")
  }
], r = "Umb.Repository.TemplateItem", n = "Umb.Store.TemplateItem", M = [
  {
    type: "repository",
    alias: r,
    name: "Template Item Repository",
    api: () => import("./template-item.repository-BhoNWIA3.js")
  },
  {
    type: "itemStore",
    alias: n,
    name: "Template Item Store",
    api: () => import("./template-item.store-CWC3jsVb.js")
  }
], l = "Umb.Repository.TemplateQuery", L = [
  {
    type: "repository",
    alias: l,
    name: "Template Query Repository",
    api: () => import("./template-query.repository-DMJkes5y.js")
  }
], R = "Umb.Condition.Template.AllowDeleteAction", b = "Umb.MenuItem.Templates", O = "Umb.GlobalSearch.Template", P = "Umb.SearchProvider.Template", d = new a(
  "UmbWorkspaceContext",
  void 0,
  (T) => T.getEntityType?.() === "template"
), E = "Umb.Workspace.Template", k = [
  {
    type: "workspace",
    kind: "routable",
    alias: "Umb.Workspace.Template",
    name: "Template Workspace",
    api: () => import("./template-workspace.context-C6ePrsg-.js"),
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
], B = new a("UmbTemplateTreeStore"), _ = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Umb.EntityAction.Template.Tree.ReloadChildrenOf",
    name: "Reload Template Tree Item Children Entity Action",
    forEntityTypes: [e, o]
  }
], t = "Umb.Repository.Template.Tree", A = "Umb.Store.Template.Tree", c = "Umb.Tree.Template", f = [
  {
    type: "repository",
    alias: t,
    name: "Template Tree Repository",
    api: () => import("./template-tree.repository-C6PIdFcg.js")
  },
  {
    type: "treeStore",
    alias: A,
    name: "Template Tree Store",
    api: () => import("./template-tree.store-Zub5YDtD.js")
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
  R as a,
  b,
  p as c,
  i as d,
  n as e,
  P as f,
  O as g,
  d as h,
  E as i,
  l as j,
  t as k,
  A as l,
  c as m,
  B as n,
  I as o,
  M as p,
  L as q,
  f as r,
  k as s
};
//# sourceMappingURL=manifests-DjOjofE0.js.map

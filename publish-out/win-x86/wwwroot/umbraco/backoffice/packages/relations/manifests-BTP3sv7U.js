import { UMB_WORKSPACE_CONDITION_ALIAS as a } from "@umbraco-cms/backoffice/workspace";
const s = "Umb.Repository.RelationType.Collection", p = "Umb.Collection.RelationType", t = "Umb.Repository.RelationType.Detail", i = "Umb.Store.RelationType.Detail", n = [
  {
    type: "repository",
    alias: t,
    name: "Relation Type Detail Repository",
    api: () => import("./relation-type-detail.repository-C4GweMi0.js")
  },
  {
    type: "store",
    alias: i,
    name: "Relation Type Detail Store",
    api: () => import("./relation-type-detail.store-CIBrYVU4.js")
  }
], e = "Umb.Workspace.RelationType", l = [
  {
    type: "workspace",
    kind: "routable",
    alias: e,
    name: "Relation Type Workspace",
    api: () => import("./relation-type-workspace.context-N75yXUSM.js"),
    meta: {
      entityType: "relation-type"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.RelationType.Details",
    name: "Relation Type Details Workspace View",
    js: () => import("./relation-type-detail-workspace-view.element-OWyzbFAb.js"),
    weight: 20,
    meta: {
      label: "#general_details",
      pathname: "details",
      icon: "icon-trafic"
    },
    conditions: [
      {
        alias: a,
        match: e
      }
    ]
  }
];
export {
  p as U,
  s as a,
  t as b,
  i as c,
  e as d,
  l as e,
  n as m
};
//# sourceMappingURL=manifests-BTP3sv7U.js.map

import { UMB_WORKSPACE_CONDITION_ALIAS as t, UmbSubmitWorkspaceAction as o } from "@umbraco-cms/backoffice/workspace";
const e = "Umb.Workspace.PropertyType", a = "property-type", i = [
  {
    type: "workspace",
    kind: "routable",
    name: "Property Type Workspace",
    alias: e,
    api: () => import("./property-type-workspace.context-CsfLIm2j.js"),
    meta: {
      entityType: a
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.PropertyType.Settings",
    name: "Property Type Settings Workspace View",
    element: () => import("./property-workspace-view-settings.element-DGdjDcCW.js"),
    weight: 1e3,
    meta: {
      label: "#general_content",
      pathname: "content",
      icon: "icon-document"
    },
    conditions: [
      {
        alias: t,
        match: e
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Umb.WorkspaceAction.PropertyType.Submit",
    name: "Submit Property Type Workspace Action",
    api: o,
    meta: {
      label: "#general_submit",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: t,
        oneOf: [e]
      }
    ]
  }
];
export {
  e as U,
  a,
  i as m
};
//# sourceMappingURL=manifests-zQrebjfk.js.map

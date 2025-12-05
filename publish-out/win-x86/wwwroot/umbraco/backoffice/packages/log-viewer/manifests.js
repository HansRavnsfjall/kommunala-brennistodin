import { UMB_WORKSPACE_CONDITION_ALIAS as a } from "@umbraco-cms/backoffice/workspace";
const i = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.LogViewer",
    name: "Log Viewer Menu Item",
    weight: 300,
    meta: {
      label: "#treeHeaders_logViewer",
      icon: "icon-box-alt",
      entityType: "logviewer",
      menus: ["Umb.Menu.AdvancedSettings"]
    }
  }
], e = "Umb.Workspace.LogViewer", o = [
  {
    type: "workspace",
    alias: e,
    name: "LogViewer Root Workspace",
    element: () => import("./logviewer-workspace.element-BaCh4Sru.js"),
    api: () => import("./logviewer-workspace.context-B0AVbsWh.js"),
    meta: {
      entityType: "logviewer"
    }
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.LogViewer.Overview",
    name: "LogViewer Root Workspace Overview View",
    element: () => import("./index-DZP4lHY2.js"),
    weight: 300,
    meta: {
      label: "Overview",
      pathname: "overview",
      icon: "icon-box-alt"
    },
    conditions: [
      {
        alias: a,
        match: e
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Umb.WorkspaceView.LogViewer.Search",
    name: "LogViewer Root Workspace Search View",
    element: () => import("./index-BNl_laT4.js"),
    weight: 200,
    meta: {
      label: "#general_search",
      pathname: "search",
      icon: "icon-search"
    },
    conditions: [
      {
        alias: a,
        match: e
      }
    ]
  },
  {
    type: "modal",
    alias: "Umb.Modal.LogViewer.SaveSearch",
    name: "Saved Searches Modal",
    element: () => import("./log-viewer-search-input-modal.element-DMBMYwuM.js")
  }
], r = [...i, ...o];
export {
  r as manifests
};
//# sourceMappingURL=manifests.js.map

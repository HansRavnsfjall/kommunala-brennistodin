import { UMB_SETTINGS_SECTION_ALIAS as e } from "@umbraco-cms/backoffice/settings";
const a = [
  {
    type: "modal",
    alias: "Umb.Modal.Examine.FieldsSettings",
    name: "Examine Field Settings Modal",
    element: () => import("./examine-fields-settings-modal.element-D6pRJx4s.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.Examine.FieldsViewer",
    name: "Examine Field Viewer Modal",
    element: () => import("./examine-fields-viewer-modal.element-DFfxehs1.js")
  }
], m = [...a], i = [
  {
    type: "headerApp",
    alias: "Umb.HeaderApp.Search",
    name: "Header App Search",
    element: () => import("./umb-search-header-app.element-DU1Q6pq6.js"),
    weight: 900,
    meta: {
      label: "Search",
      icon: "search",
      pathname: "search"
    }
  },
  {
    type: "modal",
    alias: "Umb.Modal.Search",
    name: "Search Modal",
    element: () => import("./search-modal.element-DAYdiMQL.js")
  },
  {
    type: "dashboard",
    alias: "Umb.Dashboard.ExamineManagement",
    name: "Examine Management Dashboard",
    element: () => import("./dashboard-examine-management.element-CCvs3t6h.js"),
    weight: 400,
    meta: {
      label: "#dashboardTabs_settingsExamine",
      pathname: "examine-management"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  },
  ...m
];
export {
  i as manifests
};
//# sourceMappingURL=manifests.js.map

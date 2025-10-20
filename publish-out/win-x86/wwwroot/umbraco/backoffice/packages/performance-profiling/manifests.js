import { UMB_SETTINGS_SECTION_ALIAS as i } from "@umbraco-cms/backoffice/settings";
const o = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Profiling",
    name: "Profiling",
    element: () => import("./dashboard-performance-profiling.element-BxUm_lpX.js"),
    weight: 101,
    meta: {
      label: "#dashboardTabs_settingsProfiler",
      pathname: "profiling"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: i
      }
    ]
  }
];
export {
  o as manifests
};
//# sourceMappingURL=manifests.js.map

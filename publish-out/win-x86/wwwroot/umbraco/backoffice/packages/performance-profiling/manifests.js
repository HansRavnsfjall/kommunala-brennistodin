import { UMB_SECTION_ALIAS_CONDITION_ALIAS as a } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as i } from "@umbraco-cms/backoffice/settings";
const r = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Profiling",
    name: "Profiling",
    element: () => import("./dashboard-performance-profiling.element-CVaMdGye.js"),
    weight: 101,
    meta: {
      label: "#dashboardTabs_settingsProfiler",
      pathname: "profiling"
    },
    conditions: [
      {
        alias: a,
        match: i
      }
    ]
  }
];
export {
  r as manifests
};
//# sourceMappingURL=manifests.js.map

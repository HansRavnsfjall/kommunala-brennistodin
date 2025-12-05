import { UMB_SECTION_ALIAS_CONDITION_ALIAS as a } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as e } from "@umbraco-cms/backoffice/settings";
const m = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.HealthCheck",
    name: "Health Check",
    elementName: "umb-dashboard-health-check",
    element: () => import("./dashboard-health-check.element-mlap8K4_.js"),
    weight: 102,
    meta: {
      label: "#dashboardTabs_settingsHealthCheck",
      pathname: "health-check"
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
  m as manifests
};
//# sourceMappingURL=manifests.js.map

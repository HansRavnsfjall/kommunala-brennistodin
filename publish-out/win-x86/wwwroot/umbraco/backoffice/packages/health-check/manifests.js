import { UMB_SETTINGS_SECTION_ALIAS as a } from "@umbraco-cms/backoffice/settings";
const t = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.HealthCheck",
    name: "Health Check",
    elementName: "umb-dashboard-health-check",
    element: () => import("./dashboard-health-check.element-Bcj5l406.js"),
    weight: 102,
    meta: {
      label: "#dashboardTabs_settingsHealthCheck",
      pathname: "health-check"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: a
      }
    ]
  }
];
export {
  t as manifests
};
//# sourceMappingURL=manifests.js.map

import { UMB_SETTINGS_SECTION_ALIAS as e } from "@umbraco-cms/backoffice/settings";
const a = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.Telemetry",
    name: "Telemetry",
    element: () => import("./dashboard-telemetry.element-DieJLDv2.js"),
    weight: 100,
    meta: {
      label: "Telemetry Data",
      pathname: "telemetry"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  }
];
export {
  a as manifests
};
//# sourceMappingURL=manifests.js.map

import { UMB_SECTION_ALIAS_CONDITION_ALIAS as e } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as t } from "@umbraco-cms/backoffice/settings";
const r = [
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
        alias: e,
        match: t
      }
    ]
  }
];
export {
  r as manifests
};
//# sourceMappingURL=manifests.js.map

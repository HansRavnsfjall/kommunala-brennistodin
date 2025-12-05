import { UMB_SECTION_ALIAS_CONDITION_ALIAS as a } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as e } from "@umbraco-cms/backoffice/settings";
const d = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.ModelsBuilder",
    name: "Models Builder Dashboard",
    element: () => import("./models-builder-dashboard.element-CQ-Z9Vz3.js"),
    weight: 200,
    meta: {
      label: "#dashboardTabs_settingsModelsBuilder",
      pathname: "models-builder"
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
  d as manifests
};
//# sourceMappingURL=manifests.js.map

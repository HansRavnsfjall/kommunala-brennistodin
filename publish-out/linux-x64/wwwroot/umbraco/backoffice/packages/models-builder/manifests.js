import { UMB_SETTINGS_SECTION_ALIAS as a } from "@umbraco-cms/backoffice/settings";
const o = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.ModelsBuilder",
    name: "Models Builder Dashboard",
    element: () => import("./models-builder-dashboard.element-BqquPtBN.js"),
    weight: 200,
    meta: {
      label: "#dashboardTabs_settingsModelsBuilder",
      pathname: "models-builder"
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
  o as manifests
};
//# sourceMappingURL=manifests.js.map

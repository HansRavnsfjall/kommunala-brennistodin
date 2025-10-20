import { UMB_SETTINGS_SECTION_ALIAS as a } from "@umbraco-cms/backoffice/settings";
const s = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.PublishedStatus",
    name: "Published Status Dashboard",
    element: () => import("./dashboard-published-status.element-C28KVpb9.js"),
    weight: 300,
    meta: {
      label: "#dashboardTabs_settingsPublishedStatus",
      pathname: "published-status"
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
  s as manifests
};
//# sourceMappingURL=manifests.js.map

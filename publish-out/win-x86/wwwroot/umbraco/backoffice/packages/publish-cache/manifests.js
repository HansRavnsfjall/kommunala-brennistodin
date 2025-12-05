import { UMB_SECTION_ALIAS_CONDITION_ALIAS as a } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as t } from "@umbraco-cms/backoffice/settings";
const i = [
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
        alias: a,
        match: t
      }
    ]
  }
];
export {
  i as manifests
};
//# sourceMappingURL=manifests.js.map

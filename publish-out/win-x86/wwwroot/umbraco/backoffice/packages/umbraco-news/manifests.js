import { UMB_CONTENT_SECTION_ALIAS as a } from "@umbraco-cms/backoffice/content";
const t = {
  type: "dashboard",
  alias: "Umb.Dashboard.UmbracoNews",
  name: "Umbraco News Dashboard",
  element: () => import("./umbraco-news-dashboard.element-CDXC7rgh.js"),
  weight: 20,
  meta: {
    label: "#dashboardTabs_contentIntro"
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: a
    }
  ]
};
export {
  t as dashboard
};
//# sourceMappingURL=manifests.js.map

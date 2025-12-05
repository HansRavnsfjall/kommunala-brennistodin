import { UMB_CONTENT_SECTION_ALIAS as a } from "@umbraco-cms/backoffice/content";
import { UMB_SECTION_ALIAS_CONDITION_ALIAS as o } from "@umbraco-cms/backoffice/section";
const e = {
  type: "dashboard",
  alias: "Umb.Dashboard.UmbracoNews",
  name: "Umbraco News Dashboard",
  element: () => import("./umbraco-news-dashboard.element-C4SzV6a5.js"),
  weight: 20,
  meta: {
    label: "#dashboardTabs_contentIntro"
  },
  conditions: [
    {
      alias: o,
      match: a
    }
  ]
};
export {
  e as dashboard
};
//# sourceMappingURL=manifests.js.map

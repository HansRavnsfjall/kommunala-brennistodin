import { UMB_HELP_MENU_ALIAS as e } from "./index.js";
import { UMB_CURRENT_USER_IS_ADMIN_CONDITION_ALIAS as m } from "@umbraco-cms/backoffice/current-user";
const n = [
  {
    type: "headerApp",
    alias: "Umb.HeaderApp.Help",
    name: "Help Header App",
    element: () => import("./help-header-app.element-BSQkiE2W.js"),
    weight: 500
  }
], t = [
  {
    type: "menu",
    alias: e,
    name: "Help Menu"
  },
  {
    type: "menuItem",
    kind: "link",
    alias: "Umb.MenuItem.Help.LearningBase",
    name: "Learning Base Help Menu Item",
    weight: 200,
    meta: {
      menus: [e],
      label: "Umbraco Learning Base",
      icon: "icon-movie-alt",
      href: "https://umbra.co/ulb"
    },
    conditions: [
      {
        alias: m
      }
    ]
  },
  {
    type: "menuItem",
    kind: "link",
    alias: "Umb.MenuItem.Help.CommunityWebsite",
    name: "Community Website Help Menu Item",
    weight: 100,
    meta: {
      menus: [e],
      label: "Community Website",
      icon: "icon-hearts",
      href: "https://our.umbraco.com?utm_source=core&utm_medium=help&utm_content=link&utm_campaign=our"
    },
    conditions: [
      {
        alias: m
      }
    ]
  }
], o = [
  ...t,
  ...n
];
export {
  o as manifests
};
//# sourceMappingURL=manifests.js.map

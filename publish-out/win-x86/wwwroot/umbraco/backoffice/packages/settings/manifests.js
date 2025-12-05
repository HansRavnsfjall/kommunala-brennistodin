import { U as a, a as e, d as n } from "./constants-3DrlJG7v.js";
import { UMB_SECTION_ALIAS_CONDITION_ALIAS as t, UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as s } from "@umbraco-cms/backoffice/section";
const i = [
  {
    type: "menu",
    alias: a,
    name: "Advanced Settings Menu"
  },
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarMenu.AdvancedSettings",
    name: "Advanced Settings Sidebar Menu",
    weight: 100,
    meta: {
      label: "#treeHeaders_advancedGroup",
      menu: a
    },
    conditions: [
      {
        alias: t,
        match: e
      }
    ]
  }
], m = [
  {
    type: "section",
    alias: e,
    name: "Settings Section",
    weight: 800,
    meta: {
      label: "#sections_settings",
      pathname: "settings"
    },
    conditions: [
      {
        alias: s,
        match: e
      }
    ]
  }
], S = [
  {
    type: "menu",
    alias: n,
    name: "Settings Menu"
  },
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarMenu.Settings",
    name: "Structure Settings Sidebar Menu",
    weight: 300,
    meta: {
      label: "#treeHeaders_structureGroup",
      menu: n
    },
    conditions: [
      {
        alias: t,
        match: e
      }
    ]
  }
], o = [
  {
    type: "dashboard",
    alias: "Umb.Dashboard.SettingsWelcome",
    name: "Welcome Settings Dashboard",
    element: () => import("./settings-welcome-dashboard.element-DWBgq25j.js"),
    weight: 500,
    meta: {
      label: "#dashboardTabs_settingsWelcome",
      pathname: "welcome"
    },
    conditions: [
      {
        alias: t,
        match: e
      }
    ]
  }
], r = [
  ...i,
  ...m,
  ...S,
  ...o
];
export {
  r as manifests
};
//# sourceMappingURL=manifests.js.map

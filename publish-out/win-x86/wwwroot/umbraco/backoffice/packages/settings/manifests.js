import { U as t, a as e, d as a } from "./constants-3DrlJG7v.js";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as n } from "@umbraco-cms/backoffice/section";
const i = [
  {
    type: "menu",
    alias: t,
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
      menu: t
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  }
], s = [
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
        alias: n,
        match: e
      }
    ]
  }
], o = [
  {
    type: "menu",
    alias: a,
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
      menu: a
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  }
], m = [
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
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  }
], d = [
  ...i,
  ...s,
  ...o,
  ...m
];
export {
  d as manifests
};
//# sourceMappingURL=manifests.js.map

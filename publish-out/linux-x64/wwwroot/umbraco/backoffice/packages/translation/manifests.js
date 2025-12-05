import { U as n, c as a } from "./constants-DOfoF1oN.js";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as t } from "@umbraco-cms/backoffice/section";
const i = [
  {
    type: "section",
    alias: n,
    name: "Translation Section",
    weight: 400,
    meta: {
      label: "#sections_translation",
      pathname: "translation"
    },
    conditions: [
      {
        alias: t,
        match: n
      }
    ]
  }
], e = [
  {
    type: "menu",
    alias: a,
    name: "Translation Menu"
  },
  {
    type: "sectionSidebarApp",
    kind: "menuWithEntityActions",
    alias: "Umb.SidebarMenu.Translation",
    name: "Translation Sidebar Menu",
    weight: 100,
    meta: {
      label: "#general_dictionary",
      // We are using dictionary here on purpose until dictionary has its own menu item.
      menu: a,
      entityType: "dictionary-root"
      // hard-coded on purpose to avoid circular dependency. We need another way to add actions to a menu kind.
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: n
      }
    ]
  }
], m = [...i, ...e];
export {
  m as manifests
};
//# sourceMappingURL=manifests.js.map

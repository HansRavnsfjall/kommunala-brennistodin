import { U as a, c as n } from "./constants-DOfoF1oN.js";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as t, UMB_SECTION_ALIAS_CONDITION_ALIAS as i } from "@umbraco-cms/backoffice/section";
const e = [
  {
    type: "section",
    alias: a,
    name: "Translation Section",
    weight: 400,
    meta: {
      label: "#sections_translation",
      pathname: "translation"
    },
    conditions: [
      {
        alias: t,
        match: a
      }
    ]
  }
], s = [
  {
    type: "menu",
    alias: n,
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
      menu: n,
      entityType: "dictionary-root"
      // hard-coded on purpose to avoid circular dependency. We need another way to add actions to a menu kind.
    },
    conditions: [
      {
        alias: i,
        match: a
      }
    ]
  }
], r = [...e, ...s];
export {
  r as manifests
};
//# sourceMappingURL=manifests.js.map

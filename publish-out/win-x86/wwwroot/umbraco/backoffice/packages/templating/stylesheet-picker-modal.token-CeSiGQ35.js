import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { UMB_TREE_PICKER_MODAL_ALIAS as t } from "@umbraco-cms/backoffice/tree";
import { UmbModalToken as o } from "@umbraco-cms/backoffice/modal";
const T = new e("UmbStylesheetItemStore"), s = "Umb.Repository.Stylesheet.Item", a = "Umb.ItemStore.Stylesheet", r = [
  {
    type: "repository",
    alias: s,
    name: "Stylesheet Item Repository",
    api: () => import("./stylesheet-item.repository-BQK6yH4s.js")
  },
  {
    type: "itemStore",
    alias: "Umb.ItemStore.Stylesheet",
    name: "Stylesheet Item Store",
    api: () => import("./stylesheet-item.store-CUK25ZQ-.js")
  }
], _ = new e(
  "UmbStylesheetDetailStore"
), i = new o(t, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.Stylesheet",
    hideTreeRoot: !0
  }
});
export {
  i as U,
  _ as a,
  s as b,
  a as c,
  T as d,
  r as m
};
//# sourceMappingURL=stylesheet-picker-modal.token-CeSiGQ35.js.map

import { UmbManagementApiItemDataCache as t } from "@umbraco-cms/backoffice/management-api";
import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { UMB_TREE_PICKER_MODAL_ALIAS as o } from "@umbraco-cms/backoffice/tree";
import { UmbModalToken as s } from "@umbraco-cms/backoffice/modal";
const r = new t(), _ = new e("UmbStylesheetItemStore"), m = "Umb.Repository.Stylesheet.Item", i = "Umb.ItemStore.Stylesheet", n = [
  {
    type: "repository",
    alias: m,
    name: "Stylesheet Item Repository",
    api: () => import("./stylesheet-item.repository-CvIC-mje.js")
  },
  {
    type: "itemStore",
    alias: "Umb.ItemStore.Stylesheet",
    name: "Stylesheet Item Store",
    api: () => import("./stylesheet-item.store-DT0BXKZG.js")
  }
], I = new e(
  "UmbStylesheetDetailStore"
), l = new s(o, {
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
  l as U,
  I as a,
  m as b,
  i as c,
  _ as d,
  n as m,
  r as s
};
//# sourceMappingURL=stylesheet-picker-modal.token-C6nznOkG.js.map

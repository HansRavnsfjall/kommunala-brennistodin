import { U as I } from "./paths-BPzgB6U7.js";
import { x as S, c as i, d as m, g as B, h as L, i as p, b as P, j as n, o as x, k as c, m as f, u as y, a as b, n as H, l, e as W, r as d, p as K, q as V, v as u, s as X, t as k, w as h, y as w, f as g } from "./paths-BPzgB6U7.js";
import { a as q, U as v } from "./constants-Dw55vzll.js";
import { U as G } from "./export-dictionary-modal.token-Cok5RBD9.js";
import { U as J } from "./import-dictionary-modal.token-CKI-F1TP.js";
import { UmbModalToken as A } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as T } from "@umbraco-cms/backoffice/tree";
import { UmbDictionaryDetailRepository as Z } from "./dictionary-detail.repository-D6IxwNd4.js";
import { UmbDictionaryItemRepository as __ } from "./dictionary-item.repository-Rz6BZm4v.js";
import { UmbDictionaryImportRepository as A_ } from "./dictionary-import.repository-Do7afCBB.js";
import { UmbDictionaryExportRepository as R_ } from "./dictionary-export.repository-C3VvjbdC.js";
import { UmbDictionaryTreeRepository as E_ } from "./dictionary-tree.repository-choXNVuM.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/management-api";
import { UmbPickerInputContext as R } from "@umbraco-cms/backoffice/picker-input";
const O = new A(T, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    hideTreeRoot: !0,
    treeAlias: "Umb.Tree.Dictionary"
  }
});
class N extends R {
  constructor(_) {
    super(_, I, O);
  }
}
export {
  S as UMB_CREATE_DICTIONARY_WORKSPACE_PATH_PATTERN,
  i as UMB_DICTIONARY_COLLECTION_ALIAS,
  m as UMB_DICTIONARY_COLLECTION_REPOSITORY_ALIAS,
  B as UMB_DICTIONARY_DETAIL_REPOSITORY_ALIAS,
  L as UMB_DICTIONARY_DETAIL_STORE_ALIAS,
  p as UMB_DICTIONARY_DETAIL_STORE_CONTEXT,
  P as UMB_DICTIONARY_ENTITY_TYPE,
  n as UMB_DICTIONARY_EXPORT_REPOSITORY_ALIAS,
  x as UMB_DICTIONARY_GLOBAL_SEARCH_ALIAS,
  c as UMB_DICTIONARY_IMPORT_REPOSITORY_ALIAS,
  I as UMB_DICTIONARY_ITEM_REPOSITORY_ALIAS,
  f as UMB_DICTIONARY_ITEM_STORE_CONTEXT,
  y as UMB_DICTIONARY_MENU_ITEM_ALIAS,
  q as UMB_DICTIONARY_OVERVIEW_DASHBOARD_PATH,
  v as UMB_DICTIONARY_OVERVIEW_DASHBOARD_PATHNAME,
  O as UMB_DICTIONARY_PICKER_MODAL,
  b as UMB_DICTIONARY_ROOT_ENTITY_TYPE,
  H as UMB_DICTIONARY_SEARCH_PROVIDER_ALIAS,
  l as UMB_DICTIONARY_STORE_ALIAS,
  W as UMB_DICTIONARY_TABLE_COLLECTION_VIEW_ALIAS,
  d as UMB_DICTIONARY_TREE_ALIAS,
  K as UMB_DICTIONARY_TREE_REPOSITORY_ALIAS,
  V as UMB_DICTIONARY_TREE_STORE_ALIAS,
  u as UMB_DICTIONARY_TREE_STORE_CONTEXT,
  X as UMB_DICTIONARY_WORKSPACE_ALIAS,
  k as UMB_DICTIONARY_WORKSPACE_CONTEXT,
  h as UMB_DICTIONARY_WORKSPACE_PATH,
  w as UMB_EDIT_DICTIONARY_WORKSPACE_PATH_PATTERN,
  G as UMB_EXPORT_DICTIONARY_MODAL,
  J as UMB_IMPORT_DICTIONARY_MODAL,
  g as UMB_MOVE_DICTIONARY_REPOSITORY_ALIAS,
  Z as UmbDictionaryDetailRepository,
  R_ as UmbDictionaryExportRepository,
  A_ as UmbDictionaryImportRepository,
  __ as UmbDictionaryItemRepository,
  N as UmbDictionaryPickerInputContext,
  E_ as UmbDictionaryTreeRepository
};
//# sourceMappingURL=index.js.map

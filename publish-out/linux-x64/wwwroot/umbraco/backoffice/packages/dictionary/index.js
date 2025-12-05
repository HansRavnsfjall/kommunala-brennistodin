import { U as I } from "./paths-pWW_vsmu.js";
import { w as S, c as i, d as m, g as B, h as L, i as p, b as P, j as n, o as x, k as c, m as f, a as y, n as b, l as H, e as l, r as W, p as d, q as K, u as V, s as u, t as X, v as k, x as h, f as w } from "./paths-pWW_vsmu.js";
import { a as j, U as q } from "./constants-Dw55vzll.js";
import { U as z } from "./export-dictionary-modal.token-Cok5RBD9.js";
import { U as F } from "./import-dictionary-modal.token-CKI-F1TP.js";
import { UmbModalToken as A } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as T } from "@umbraco-cms/backoffice/tree";
import { UmbDictionaryDetailRepository as Q } from "./dictionary-detail.repository-7CoO_NLT.js";
import { UmbDictionaryItemRepository as $ } from "./dictionary-item.repository-CZ6voZbE.js";
import { UmbDictionaryImportRepository as I_ } from "./dictionary-import.repository-C2os32CU.js";
import { UmbDictionaryExportRepository as T_ } from "./dictionary-export.repository-C3VvjbdC.js";
import { UmbDictionaryTreeRepository as O_ } from "./dictionary-tree.repository-QA-H50_c.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
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
  j as UMB_DICTIONARY_OVERVIEW_DASHBOARD_PATH,
  q as UMB_DICTIONARY_OVERVIEW_DASHBOARD_PATHNAME,
  O as UMB_DICTIONARY_PICKER_MODAL,
  y as UMB_DICTIONARY_ROOT_ENTITY_TYPE,
  b as UMB_DICTIONARY_SEARCH_PROVIDER_ALIAS,
  H as UMB_DICTIONARY_STORE_ALIAS,
  l as UMB_DICTIONARY_TABLE_COLLECTION_VIEW_ALIAS,
  W as UMB_DICTIONARY_TREE_ALIAS,
  d as UMB_DICTIONARY_TREE_REPOSITORY_ALIAS,
  K as UMB_DICTIONARY_TREE_STORE_ALIAS,
  V as UMB_DICTIONARY_TREE_STORE_CONTEXT,
  u as UMB_DICTIONARY_WORKSPACE_ALIAS,
  X as UMB_DICTIONARY_WORKSPACE_CONTEXT,
  k as UMB_DICTIONARY_WORKSPACE_PATH,
  h as UMB_EDIT_DICTIONARY_WORKSPACE_PATH_PATTERN,
  z as UMB_EXPORT_DICTIONARY_MODAL,
  F as UMB_IMPORT_DICTIONARY_MODAL,
  w as UMB_MOVE_DICTIONARY_REPOSITORY_ALIAS,
  Q as UmbDictionaryDetailRepository,
  T_ as UmbDictionaryExportRepository,
  I_ as UmbDictionaryImportRepository,
  $ as UmbDictionaryItemRepository,
  N as UmbDictionaryPickerInputContext,
  O_ as UmbDictionaryTreeRepository
};
//# sourceMappingURL=index.js.map

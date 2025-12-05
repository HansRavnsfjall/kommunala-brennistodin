import { U as e, a as i, c as t, d as a, e as o, g as r, h as s, i as T, f as _ } from "./constants-CwKQXLDb.js";
const E = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.StaticFilePicker",
  name: "Static File Picker Property Editor UI",
  js: () => import("./property-editor-ui-static-file-picker.element-DMwOEZAy.js"),
  meta: {
    label: "Static File Picker",
    icon: "icon-document",
    group: "common"
  }
}, I = [E], m = [
  {
    type: "repository",
    alias: e,
    name: "Static File Item Repository",
    api: () => import("./static-file-item.repository-CfuPxuI9.js")
  },
  {
    type: "itemStore",
    alias: i,
    name: "Static File Item Store",
    api: () => import("./static-file-item.store-Binjae-Q.js")
  }
], S = [...m], n = [
  {
    type: "repository",
    alias: t,
    name: "Static File Tree Repository",
    api: () => import("./static-file-tree.repository-x9X8q9I8.js")
  },
  {
    type: "treeStore",
    alias: a,
    name: "Static File Tree Store",
    api: () => import("./static-file-tree.store-Bb2gYxi0.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: o,
    name: "Static File Tree",
    meta: {
      repositoryAlias: t
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: _,
    name: "Static File Tree Item",
    forEntityTypes: [r, s, T]
  }
], c = [
  ...I,
  ...n,
  ...S,
  {
    name: "Static File Backoffice Entry Point",
    alias: "Umb.EntryPoint.StaticFile",
    type: "backofficeEntryPoint",
    js: () => import("./entry-point-CUP9W9PG.js")
  }
];
export {
  c as manifests
};
//# sourceMappingURL=manifests.js.map

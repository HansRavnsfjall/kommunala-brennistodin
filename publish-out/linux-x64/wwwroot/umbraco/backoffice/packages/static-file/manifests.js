import { U as e, a as i, c as t, d as a, e as T, g as _, h as o, i as r, f as s } from "./constants-CwKQXLDb.js";
const I = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.StaticFilePicker",
  name: "Static File Picker Property Editor UI",
  js: () => import("./property-editor-ui-static-file-picker.element-DMwOEZAy.js"),
  meta: {
    label: "Static File Picker",
    icon: "icon-document",
    group: "common"
  }
}, E = [I], S = [
  {
    type: "repository",
    alias: e,
    name: "Static File Item Repository",
    api: () => import("./static-file-item.repository-_iOtXCez.js")
  },
  {
    type: "itemStore",
    alias: i,
    name: "Static File Item Store",
    api: () => import("./static-file-item.store-Binjae-Q.js")
  }
], m = [...S], p = [
  {
    type: "repository",
    alias: t,
    name: "Static File Tree Repository",
    api: () => import("./static-file-tree.repository-JI93vq_w.js")
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
    alias: T,
    name: "Static File Tree",
    meta: {
      repositoryAlias: t
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: s,
    name: "Static File Tree Item",
    forEntityTypes: [_, o, r]
  }
], c = [
  ...E,
  ...p,
  ...m
];
export {
  c as manifests
};
//# sourceMappingURL=manifests.js.map

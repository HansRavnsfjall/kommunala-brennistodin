import { a as i, b as a } from "./sort-children-of-content-modal.token-DYwtOc5Y.js";
import { UMB_WORKSPACE_ENTITY_IS_NEW_CONDITION_ALIAS as c } from "@umbraco-cms/backoffice/workspace";
import { UMB_ENTITY_ACTION_SORT_CHILDREN_OF_KIND_MANIFEST as m } from "@umbraco-cms/backoffice/tree";
import { U as r } from "./property-structure-workspace.context-token-Et7VqtUe.js";
import { UmbConditionBase as p } from "@umbraco-cms/backoffice/extension-registry";
import { m as l } from "./manifests-CWDBBlXC.js";
const d = [
  {
    type: "condition",
    name: "Workspace Has Collection Condition",
    alias: i,
    api: () => import("./workspace-has-content-collection.condition-Bl43BOAh.js")
  }
], C = [
  {
    type: "kind",
    alias: "Umb.Kind.WorkspaceView.Content.Collection",
    matchKind: "contentCollection",
    matchType: "workspaceView",
    manifest: {
      type: "workspaceView",
      kind: "contentCollection",
      element: () => import("./content-collection-workspace-view.element-DF3G9B0I.js"),
      weight: 300,
      meta: {
        label: "Collection",
        pathname: "collection",
        icon: "icon-grid"
      }
    }
  },
  {
    type: "workspaceView",
    kind: "contentCollection",
    alias: "Umb.WorkspaceView.Content.Collection",
    name: "Content Workspace Collection View",
    weight: 1e3,
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-grid"
    },
    conditions: [
      {
        alias: i
      },
      {
        alias: c,
        match: !1
      }
    ]
  },
  ...d
], f = {
  type: "condition",
  name: "Content has properties Workspace Condition",
  alias: "Umb.Condition.Workspace.ContentHasProperties",
  api: () => import("./content-has-properties.condition-D9nz-yE1.js")
}, h = [f], y = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.SortChildrenOfContent",
  matchKind: "sortChildrenOfContent",
  matchType: "entityAction",
  manifest: {
    ...m.manifest,
    type: "entityAction",
    kind: "sortChildrenOfContent",
    api: () => import("./sort-children-of-content.action-xSVGb0rT.js")
  }
}, T = [
  {
    type: "modal",
    alias: a,
    name: "Sort Children Of Content Modal",
    element: () => import("./sort-children-of-content-modal.element-BzdE70Vx.js")
  }
], k = [
  y,
  ...T
], _ = [...k], O = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceView.ContentEditor",
  matchKind: "contentEditor",
  matchType: "workspaceView",
  manifest: {
    type: "workspaceView",
    kind: "contentEditor",
    element: () => import("./content-editor.element-_oGtUweD.js"),
    weight: 1e3,
    meta: {
      label: "Content",
      pathname: "edit",
      icon: "icon-document-line"
    }
  }
}, E = [O], w = [...E], b = [
  ...C,
  ...h,
  ..._,
  ...w
], A = Symbol();
class U extends p {
  constructor(o, s) {
    super(o, s);
    let e;
    if (this.config.match ? e = (t) => t.includes(this.config.match) : this.config.oneOf && (e = (t) => t.some((n) => this.config.oneOf.includes(n))), e !== void 0)
      this.consumeContext(r, (t) => {
        this.observe(
          t?.structure.contentTypeAliases,
          (n) => {
            this.permitted = n ? e(n) : !1;
          },
          A
        );
      });
    else
      throw new Error(
        'Condition `Umb.Condition.WorkspaceContentTypeAlias` could not be initialized properly. Either "match" or "oneOf" must be defined'
      );
  }
}
const N = {
  type: "condition",
  name: "Workspace Content Type Alias Condition",
  alias: "Umb.Condition.WorkspaceContentTypeAlias",
  api: U
}, $ = [N], g = {
  type: "modal",
  alias: "Umb.Modal.CompositionPicker",
  name: "ContentType Composition Picker Modal",
  element: () => import("./composition-picker-modal.element-DRrNdxot.js")
}, I = [g], S = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceView.ContentTypeDesignEditor",
  matchKind: "contentTypeDesignEditor",
  matchType: "workspaceView",
  manifest: {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    element: () => import("./content-type-design-editor.element-BFuW8ij1.js"),
    weight: 1e3,
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line"
    }
  }
}, W = [S], K = [...W, ...I, ...$], M = [...l], H = [
  ...b,
  ...K,
  ...M
];
export {
  H as manifests
};
//# sourceMappingURL=manifests.js.map

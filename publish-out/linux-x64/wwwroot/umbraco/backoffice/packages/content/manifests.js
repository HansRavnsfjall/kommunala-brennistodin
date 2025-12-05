import { a as s, b as a } from "./sort-children-of-content-modal.token-DYwtOc5Y.js";
import { UMB_ENTITY_ACTION_SORT_CHILDREN_OF_KIND_MANIFEST as c } from "@umbraco-cms/backoffice/tree";
import { U as m } from "./property-structure-workspace.context-token-Et7VqtUe.js";
import { UmbConditionBase as r } from "@umbraco-cms/backoffice/extension-registry";
import { m as p } from "./manifests-zQrebjfk.js";
const d = [
  {
    type: "condition",
    name: "Workspace Has Collection Condition",
    alias: s,
    api: () => import("./workspace-has-content-collection.condition-DiREHSAL.js")
  }
], l = [
  {
    type: "kind",
    alias: "Umb.Kind.WorkspaceView.Content.Collection",
    matchKind: "contentCollection",
    matchType: "workspaceView",
    manifest: {
      type: "workspaceView",
      kind: "contentCollection",
      element: () => import("./content-collection-workspace-view.element-D4uBnTzf.js"),
      weight: 300,
      meta: {
        label: "Collection",
        pathname: "collection",
        icon: "icon-grid"
      }
    }
  },
  ...d
], f = {
  type: "condition",
  name: "Content has properties Workspace Condition",
  alias: "Umb.Condition.Workspace.ContentHasProperties",
  api: () => import("./content-has-properties.condition-D9nz-yE1.js")
}, C = [f], h = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.SortChildrenOfContent",
  matchKind: "sortChildrenOfContent",
  matchType: "entityAction",
  manifest: {
    ...c.manifest,
    type: "entityAction",
    kind: "sortChildrenOfContent",
    api: () => import("./sort-children-of-content.action-xSVGb0rT.js")
  }
}, y = [
  {
    type: "modal",
    alias: a,
    name: "Sort Children Of Content Modal",
    element: () => import("./sort-children-of-content-modal.element-BzdE70Vx.js")
  }
], T = [
  h,
  ...y
], k = [...T], O = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceView.ContentEditor",
  matchKind: "contentEditor",
  matchType: "workspaceView",
  manifest: {
    type: "workspaceView",
    kind: "contentEditor",
    element: () => import("./content-editor.element-B8GhrxyO.js"),
    weight: 1e3,
    meta: {
      label: "Content",
      pathname: "edit",
      icon: "icon-document-line"
    }
  }
}, _ = [O], E = [..._], b = [
  ...l,
  ...C,
  ...k,
  ...E
], w = Symbol();
class $ extends r {
  constructor(i, o) {
    super(i, o);
    let e;
    if (this.config.match ? e = (t) => t.includes(this.config.match) : this.config.oneOf && (e = (t) => t.some((n) => this.config.oneOf.includes(n))), e !== void 0)
      this.consumeContext(m, (t) => {
        this.observe(
          t?.structure.contentTypeAliases,
          (n) => {
            this.permitted = n ? e(n) : !1;
          },
          w
        );
      });
    else
      throw new Error(
        'Condition `Umb.Condition.WorkspaceContentTypeAlias` could not be initialized properly. Either "match" or "oneOf" must be defined'
      );
  }
}
const A = {
  type: "condition",
  name: "Workspace Content Type Alias Condition",
  alias: "Umb.Condition.WorkspaceContentTypeAlias",
  api: $
}, U = [A], g = {
  type: "modal",
  alias: "Umb.Modal.CompositionPicker",
  name: "ContentType Composition Picker Modal",
  element: () => import("./composition-picker-modal.element-ByJWMdoW.js")
}, N = [g], S = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceView.ContentTypeDesignEditor",
  matchKind: "contentTypeDesignEditor",
  matchType: "workspaceView",
  manifest: {
    type: "workspaceView",
    kind: "contentTypeDesignEditor",
    element: () => import("./content-type-design-editor.element-DxZdtbOy.js"),
    weight: 1e3,
    meta: {
      label: "#general_design",
      pathname: "design",
      icon: "icon-document-dashed-line"
    }
  }
}, W = [S], u = [...W, ...N, ...U], I = [...p], P = [
  ...b,
  ...u,
  ...I
];
export {
  P as manifests
};
//# sourceMappingURL=manifests.js.map

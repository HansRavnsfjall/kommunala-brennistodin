import { m as i, c as a, U as n } from "./bulk-trash-with-relation.action.kind-BwLG7kt9.js";
import { UMB_ENTITY_ACTION_DELETE_KIND_MANIFEST as o } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ENTITY_ACTION_TRASH_KIND_MANIFEST as s } from "@umbraco-cms/backoffice/recycle-bin";
import { m as l, e as m, a as t, U as c } from "./manifests-BGq4UYLP.js";
import { UMB_COLLECTION_ALIAS_CONDITION as p } from "@umbraco-cms/backoffice/collection";
import { UMB_RELATION_TYPE_COLLECTION_ALIAS as r } from "@umbraco-cms/backoffice/relation-type";
import { UMB_WORKSPACE_CONDITION_ALIAS as f } from "@umbraco-cms/backoffice/workspace";
const R = [
  {
    type: "menuItem",
    alias: "Umb.MenuItem.Relations",
    name: "Relations Menu Item",
    weight: 800,
    meta: {
      label: "#treeHeaders_relations",
      icon: "icon-trafic",
      entityType: "relations-root",
      menus: ["Umb.Menu.AdvancedSettings"]
    }
  }
], T = [
  {
    type: "modal",
    alias: "Umb.Modal.BulkDeleteWithRelation",
    name: "Bulk Delete With Relation Modal",
    element: () => import("./bulk-delete-with-relation-modal.element-KVe3ECr0.js")
  }
], y = [
  i,
  ...T
], d = [
  {
    type: "modal",
    alias: "Umb.Modal.BulkTrashWithRelation",
    name: "Bulk Trash With Relation Modal",
    element: () => import("./bulk-trash-with-relation-modal.element-CJDtVSeN.js")
  }
], I = [a, ...d], _ = [
  {
    type: "repository",
    alias: n,
    name: "Relation Collection Repository",
    api: () => import("./relation-collection.repository-DNnNdtMP.js").then((e) => e.r)
  }
], A = [..._], h = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.DeleteWithRelation",
  matchKind: "deleteWithRelation",
  matchType: "entityAction",
  manifest: {
    ...o.manifest,
    type: "entityAction",
    kind: "deleteWithRelation",
    api: () => import("./delete-with-relation.action-TxvDLdCh.js")
  }
}, E = [
  {
    type: "modal",
    alias: "Umb.Modal.DeleteWithRelation",
    name: "Delete With Relation Modal",
    element: () => import("./delete-with-relation-modal.element-CbXDgzfK.js")
  }
], O = [
  h,
  ...E
], $ = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.TrashWithRelation",
  matchKind: "trashWithRelation",
  matchType: "entityAction",
  manifest: {
    ...s.manifest,
    type: "entityAction",
    kind: "trashWithRelation",
    api: () => import("./trash-with-relation.action-BSoXEVNr.js")
  }
}, C = [
  {
    type: "modal",
    alias: "Umb.Modal.TrashWithRelation",
    name: "Trash With Relation Modal",
    element: () => import("./trash-with-relation-modal.element-B-kKwnm8.js")
  }
], L = [$, ...C], U = {
  type: "kind",
  alias: "Umb.Kind.WorkspaceInfoApp.EntityReferences",
  matchKind: "entityReferences",
  matchType: "workspaceInfoApp",
  manifest: {
    type: "workspaceInfoApp",
    kind: "entityReferences",
    element: () => import("./entity-references-workspace-view-info.element-DQnUvFuy.js"),
    weight: 90
  }
}, k = [U], N = [
  ...y,
  ...I,
  ...A,
  ...O,
  ...L,
  ...k
], b = [...l], M = [...m], W = [
  {
    type: "repository",
    alias: t,
    name: "Relation Type Collection Repository",
    api: () => import("./relation-type-collection.repository-Bw0BK4M6.js")
  }
], S = [
  {
    type: "collectionView",
    alias: "Umb.CollectionView.RelationType.Table",
    name: "Relation Type Table Collection View",
    js: () => import("./relation-type-table-collection-view.element-CHF2kPCW.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: p,
        match: "Umb.Collection.RelationType"
      }
    ]
  }
], B = [
  {
    type: "collection",
    kind: "default",
    alias: c,
    name: "Relation Type Collection",
    element: () => import("./relation-type-collection.element-Dun8iPQa.js"),
    meta: {
      repositoryAlias: t
    }
  },
  ...W,
  ...S
], u = [
  ...b,
  ...M,
  ...B
], w = [
  {
    type: "workspace",
    kind: "default",
    alias: "Umb.Workspace.RelationsRoot",
    name: "Relations Root Workspace",
    meta: {
      entityType: "relations-root",
      headline: "Relations"
    }
  },
  {
    type: "workspaceView",
    kind: "collection",
    alias: "Umb.Workspace.RelationsRoot.Collection",
    name: "Relations Root Collection Workspace View",
    meta: {
      label: "Collection",
      pathname: "collection",
      icon: "icon-layers",
      collectionAlias: r
    },
    conditions: [
      {
        alias: f,
        match: "Umb.Workspace.RelationsRoot"
      }
    ]
  }
], F = [
  ...R,
  ...N,
  ...u,
  ...w
];
export {
  F as manifests
};
//# sourceMappingURL=manifests.js.map

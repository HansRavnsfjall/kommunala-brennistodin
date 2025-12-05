import { UMB_ENTITY_BULK_ACTION_DELETE_KIND_MANIFEST as i } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_ENTITY_BULK_ACTION_TRASH_KIND_MANIFEST as n } from "@umbraco-cms/backoffice/recycle-bin";
const _ = "Umb.Repository.Relation.Collection", t = "deleteWithRelation", o = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.DeleteWithRelation",
  matchKind: t,
  matchType: "entityBulkAction",
  manifest: {
    ...i.manifest,
    type: "entityBulkAction",
    kind: t,
    api: () => import("./bulk-delete-with-relation.action-DFKq3vOv.js")
  }
}, T = "trashWithRelation", s = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.TrashWithRelation",
  matchKind: "trashWithRelation",
  matchType: "entityBulkAction",
  manifest: {
    ...n.manifest,
    type: "entityBulkAction",
    kind: "trashWithRelation",
    api: () => import("./bulk-trash-with-relation.action-DXQ5L8F7.js")
  }
};
export {
  _ as U,
  t as a,
  T as b,
  s as c,
  o as m
};
//# sourceMappingURL=bulk-trash-with-relation.action.kind-BwLG7kt9.js.map

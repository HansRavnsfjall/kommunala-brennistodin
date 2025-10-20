import { U as i } from "./default.action.kind-Cyn-1n_n.js";
import { UMB_ENTITY_BULK_ACTION_DEFAULT_KIND_MANIFEST as n } from "@umbraco-cms/backoffice/entity-bulk-action";
const o = "Umb.Condition.EntityIsTrashed", e = "Umb.Condition.EntityIsNotTrashed", a = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Trash",
  matchKind: "trash",
  matchType: "entityAction",
  manifest: {
    ...i.manifest,
    type: "entityAction",
    kind: "trash",
    api: () => import("./trash.action-KXZi2vhG.js"),
    weight: 1150,
    meta: {
      icon: "icon-trash",
      label: "#actions_trash",
      additionalOptions: !0
    }
  }
}, I = a, t = "trashV2", s = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.Trash",
  matchKind: t,
  matchType: "entityBulkAction",
  manifest: {
    ...n.manifest,
    type: "entityBulkAction",
    kind: t,
    api: () => import("./bulk-trash.action-CT1ona5L.js"),
    weight: 1150,
    meta: {
      icon: "icon-trash",
      label: "#actions_trash",
      itemRepositoryAlias: "",
      recycleBinRepositoryAlias: ""
    }
  }
}, A = s;
export {
  e as U,
  o as a,
  a as b,
  s as c,
  t as d,
  A as e,
  I as m
};
//# sourceMappingURL=bulk-trash.action.kind-CdpI7m0a.js.map

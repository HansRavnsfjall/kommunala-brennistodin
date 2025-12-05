const e = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.Default",
  matchKind: "default",
  matchType: "entityBulkAction",
  manifest: {
    type: "entityBulkAction",
    kind: "default",
    weight: 1e3,
    element: () => import("./entity-bulk-action.element-JdpXPV4A.js"),
    meta: {
      icon: "",
      label: "Default Entity Bulk Action"
    }
  }
}, n = e, t = "delete", i = {
  type: "kind",
  alias: "Umb.Kind.EntityBulkAction.Delete",
  matchKind: t,
  matchType: "entityBulkAction",
  manifest: {
    ...e.manifest,
    type: "entityBulkAction",
    kind: t,
    api: () => import("./bulk-delete.action-ubNXswgd.js"),
    weight: 1100,
    meta: {
      icon: "icon-trash",
      label: "#actions_delete"
    }
  }
}, a = i, _ = "trash";
export {
  e as U,
  i as a,
  t as b,
  _ as c,
  a as d,
  n as m
};
//# sourceMappingURL=constants-6ZrdBhnx.js.map

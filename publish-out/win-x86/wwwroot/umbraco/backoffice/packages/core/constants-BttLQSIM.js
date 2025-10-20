import { UmbModalToken as t } from "@umbraco-cms/backoffice/modal";
import { U as i } from "./default.action.kind-Cyn-1n_n.js";
const a = new t("Umb.Modal.Entity.CreateOptionActionList", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), s = "Umb.Modal.Entity.CreateOptionActionList", e = {
  type: "kind",
  alias: "Umb.Kind.EntityAction.Delete",
  matchKind: "delete",
  matchType: "entityAction",
  manifest: {
    ...i.manifest,
    type: "entityAction",
    kind: "delete",
    api: () => import("./delete.action-i_U4UuZZ.js"),
    weight: 1100,
    forEntityTypes: [],
    meta: {
      icon: "icon-trash",
      label: "#actions_delete",
      additionalOptions: !0,
      itemRepositoryAlias: "",
      detailRepositoryAlias: ""
    }
  }
}, _ = e, T = "Umb.Condition.EntityHasChildren";
export {
  a as U,
  s as a,
  e as b,
  T as c,
  _ as m
};
//# sourceMappingURL=constants-BttLQSIM.js.map

import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as _ } from "@umbraco-cms/backoffice/context-api";
const n = new _("UmbBlockManagerContext"), E = "gridBlock", r = new _(
  "UmbBlockAreaConfigEntryContext"
), B = new e("Umb.Modal.Workspace", {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: { entityType: "block-grid-area-type", preset: {} }
  // Recast the type, so the entityType data prop is not required:
}), R = new _(
  "UmbWorkspaceContext",
  void 0,
  (o) => o.IS_BLOCK_GRID_AREA_TYPE_WORKSPACE_CONTEXT
), C = "Umb.Workspace.BlockGridAreaType", A = new _("UmbBlockEntriesContext"), O = new _("UmbBlockEntryContext"), T = "Umbraco.BlockGrid", c = "Umb.PropertyEditorUi.BlockGrid", U = new _(
  "UmbBlockGridAreaTypeEntriesContext"
), t = "block-grid-type", i = "block-grid", l = new e(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    },
    data: {
      entityType: "block",
      preset: {},
      originData: { index: -1, parentUnique: null },
      baseDataPath: void 0
    }
  }
  // Recast the type, so the entityType data prop is not required:
), I = new e(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    },
    data: { entityType: t, preset: { allowAtRoot: !0, allowInAreas: !0 } }
  }
  // Recast the type, so the entityType data prop is not required:
), d = "Umb.Workspace.BlockGridType";
export {
  t as U,
  i as a,
  n as b,
  E as c,
  r as d,
  C as e,
  R as f,
  B as g,
  A as h,
  O as i,
  U as j,
  T as k,
  c as l,
  d as m,
  l as n,
  I as o
};
//# sourceMappingURL=index-q0gJfrDp.js.map

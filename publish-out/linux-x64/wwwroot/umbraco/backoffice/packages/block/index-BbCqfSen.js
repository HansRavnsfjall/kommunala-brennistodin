import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as t } from "@umbraco-cms/backoffice/modal";
const a = "Umbraco.BlockList", s = "Umb.PropertyEditorUi.BlockList", T = new o("UmbBlockEntriesContext"), n = new o("UmbBlockEntryContext"), L = new o("UmbBlockManagerContext"), B = new t(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    },
    data: { entityType: "block", preset: {}, originData: { index: -1 }, baseDataPath: void 0 }
  }
  // Recast the type, so the entityType data prop is not required:
), U = "Umb.Workspace.BlockListType";
export {
  a as U,
  s as a,
  T as b,
  n as c,
  L as d,
  U as e,
  B as f
};
//# sourceMappingURL=index-BbCqfSen.js.map

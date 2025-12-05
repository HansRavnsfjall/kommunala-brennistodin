import { UmbContextToken as t } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as e } from "@umbraco-cms/backoffice/modal";
const n = new t("UmbBlockEntriesContext"), s = new t("UmbBlockManagerContext"), r = new t(
  "UmbPropertyDatasetContext"
), T = new e(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    },
    data: { entityType: "block", preset: {}, originData: {}, baseDataPath: void 0 }
  }
  // Recast the type, so the entityType data prop is not required:
);
export {
  n as U,
  T as a,
  s as b,
  r as c
};
//# sourceMappingURL=block-workspace.modal-token-DM3FsY2R.js.map

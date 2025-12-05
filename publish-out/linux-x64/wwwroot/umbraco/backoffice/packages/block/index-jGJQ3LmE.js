import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as a } from "@umbraco-cms/backoffice/modal";
const s = new o(
  "UmbPropertyDatasetContext"
), C = new o(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.IS_BLOCK_WORKSPACE_CONTEXT
), n = new a(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "large"
    },
    data: { entityType: "block", preset: {}, originData: {}, baseDataPath: void 0 }
  }
  // Recast the type, so the entityType data prop is not required:
), r = "Umb.Workspace.Block";
export {
  C as U,
  n as a,
  r as b,
  s as c
};
//# sourceMappingURL=index-jGJQ3LmE.js.map

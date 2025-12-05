import { k as R } from "./index.js";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
const C = new T(
  "UmbWorkspaceContext",
  void 0,
  (E) => {
    var o;
    return ((o = E.getEntityType) == null ? void 0 : o.call(E)) === R;
  }
);
export {
  C as F
};
//# sourceMappingURL=prevaluesource-workspace.context-token.js.map

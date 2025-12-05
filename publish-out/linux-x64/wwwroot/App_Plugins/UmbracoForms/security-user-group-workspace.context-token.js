import { Y as R } from "./index.js";
import { UmbContextToken as T } from "@umbraco-cms/backoffice/context-api";
const S = new T(
  "UmbWorkspaceContext",
  void 0,
  (_) => {
    var E;
    return ((E = _.getEntityType) == null ? void 0 : E.call(_)) === R;
  }
);
export {
  S as F
};
//# sourceMappingURL=security-user-group-workspace.context-token.js.map

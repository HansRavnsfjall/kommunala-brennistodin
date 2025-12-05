import { V as _ } from "./index.js";
import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
const m = new o(
  "UmbWorkspaceContext",
  void 0,
  (E) => {
    var T;
    return ((T = E.getEntityType) == null ? void 0 : T.call(E)) === _;
  }
);
export {
  m as F
};
//# sourceMappingURL=security-user-workspace.context-token.js.map

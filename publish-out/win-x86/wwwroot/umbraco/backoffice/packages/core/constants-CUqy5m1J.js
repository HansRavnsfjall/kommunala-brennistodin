import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
const t = "Umb.Condition.WorkspaceAlias", s = new o("UmbWorkspaceContext"), _ = "Umb.Condition.WorkspaceEntityIsNew", T = new o(
  "UmbWorkspaceContext",
  void 0,
  (n) => n.getUnique !== void 0
), E = new o("UmbWorkspaceContext", void 0, (n) => "publish" in n), C = new o(
  "UmbWorkspaceContext",
  void 0,
  (n) => "routes" in n
), i = new o(
  "UmbWorkspaceContext",
  void 0,
  (n) => "requestSubmit" in n && "_internal_createUnderParent" in n
), a = new o("UmbWorkspaceContext", void 0, (n) => "requestSubmit" in n), U = new o(
  "UmbWorkspaceContext",
  void 0,
  (n) => "requestSave" in n
), A = new o("UmbWorkspaceContext", void 0, (n) => "variants" in n), O = "Umb.Condition.WorkspaceEntityType";
export {
  s as U,
  A as a,
  U as b,
  a as c,
  T as d,
  t as e,
  _ as f,
  O as g,
  E as h,
  C as i,
  i as j
};
//# sourceMappingURL=constants-CUqy5m1J.js.map

import { U as E } from "./paths-CFBlLJ5A.js";
import { f as M, g as t } from "./manifests-KIVuOqdB.js";
import { UmbPathPattern as _ } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as e } from "@umbraco-cms/backoffice/workspace";
const T = e.generateAbsolute({
  sectionName: E,
  entityType: M
}), a = e.generateAbsolute({
  sectionName: E,
  entityType: t
}), n = new _("create/:memberTypeUnique", T), s = new _(
  "edit/:unique",
  T
);
export {
  T as U,
  a,
  n as b,
  s as c
};
//# sourceMappingURL=paths-yi0rlsCw.js.map

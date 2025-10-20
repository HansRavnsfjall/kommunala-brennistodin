import { a as T } from "./manifests-zQrebjfk.js";
import { UmbModalToken as P } from "@umbraco-cms/backoffice/modal";
import { UmbPathPattern as e } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_PATH_PATTERN as _ } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as t } from "@umbraco-cms/backoffice/settings";
const A = new P(
  "Umb.Modal.Workspace",
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: { entityType: T, preset: {}, contentTypeUnique: void 0 }
  }
  // Recast the type, so the entityType data prop is not required:
), E = _.generateAbsolute({
  sectionName: t,
  entityType: T
}), i = new e("create/:containerUnique", E), m = new e("edit/:unique");
export {
  A as U,
  E as a,
  i as b,
  m as c
};
//# sourceMappingURL=paths-DIxbxVeb.js.map

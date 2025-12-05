import { a as e } from "./workspace.element-CAJljmTw.js";
import { UmbContextBase as i } from "@umbraco-cms/backoffice/class-api";
import { UmbEntityContext as s } from "@umbraco-cms/backoffice/entity";
class y extends i {
  #t = new s(this);
  constructor(t) {
    super(t, e.toString());
  }
  set manifest(t) {
    this.workspaceAlias = t.alias, this.setEntityType(t.meta.entityType);
  }
  setUnique(t) {
    this.#t.setUnique(t);
  }
  getUnique() {
    return this.#t.getUnique();
  }
  setEntityType(t) {
    this.#t.setEntityType(t);
  }
  getEntityType() {
    return this.#t.getEntityType();
  }
}
export {
  y as UmbDefaultWorkspaceContext,
  y as api
};
//# sourceMappingURL=default-workspace.context-BlDeWTfK.js.map

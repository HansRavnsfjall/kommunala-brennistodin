import { U as e } from "./constants-CUqy5m1J.js";
import { UmbContextBase as i } from "@umbraco-cms/backoffice/class-api";
import { UmbEntityContext as s } from "@umbraco-cms/backoffice/entity";
import { UmbViewContext as n } from "@umbraco-cms/backoffice/view";
class m extends i {
  constructor(t) {
    super(t, e.toString()), this.#t = new s(this), this.view = new n(this, null);
  }
  #t;
  set manifest(t) {
    this.workspaceAlias = t.alias, this.setEntityType(t.meta.entityType), this.view.setTitle(t.meta.headline);
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
  m as UmbDefaultWorkspaceContext,
  m as api
};
//# sourceMappingURL=default-workspace.context-DCkjRn1m.js.map

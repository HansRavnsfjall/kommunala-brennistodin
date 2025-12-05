import { b as A, d as u, c as B, U as y, a as R } from "../bulk-trash.action.kind-9Ooy_hJp.js";
import { U as o } from "../is-trashed.entity-context-token-DtToyMNh.js";
import { U as f } from "../restore-from-recycle-bin-modal.token-Dfw4-Cxp.js";
import { UmbTrashEntityAction as l } from "../trash.action-KXZi2vhG.js";
import { U as x } from "../trash.event-D1yYlRYJ.js";
import { UmbRestoreFromRecycleBinEntityAction as M } from "../restore-from-recycle-bin.action-wPNxL7Dj.js";
import { UmbEmptyRecycleBinEntityAction as D } from "../empty-recycle-bin.action-CL03sClh.js";
import { UmbTrashEntityBulkAction as g, UmbTrashEntityBulkAction as H } from "../bulk-trash.action-Dv4483Cg.js";
import { UMB_NOTIFICATION_CONTEXT as i } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { UmbContextBase as n } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as T } from "@umbraco-cms/backoffice/observable-api";
class E extends a {
  #t;
  #e;
  #s;
  /**
   * Creates an instance of UmbRecycleBinRepositoryBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param {UmbRecycleBinDataSourceConstructor} recycleBinSource
   * @memberof UmbRecycleBinRepositoryBase
   */
  constructor(t, e) {
    super(t), this.#t = new e(this), this.consumeContext(i, (s) => {
      this.#e = s;
    });
  }
  /**
   * Requests to trash an item.
   * @param {UmbRecycleBinTrashRequestArgs} args
   * @returns {*}
   * @memberof UmbRecycleBinRepositoryBase
   */
  async requestTrash(t) {
    return this.#t.trash(t);
  }
  /**
   * Requests to restore an item.
   * @param {UmbRecycleBinRestoreRequestArgs} args
   * @returns {*}
   * @memberof UmbRecycleBinRepositoryBase
   */
  async requestRestore(t) {
    const { error: e } = await this.#t.restore(t);
    if (!e) {
      this.#s?.close();
      const s = { data: { message: "Restored" } };
      this.#s = this.#e?.peek("positive", s);
    }
    return { error: e };
  }
  /**
   * Requests to empty the recycle bin.
   * @returns {*}
   * @memberof UmbRecycleBinRepositoryBase
   */
  async requestEmpty() {
    return this.#t.empty();
  }
  /**
   * Requests the original parent of an item.
   * @param {UmbRecycleBinOriginalParentRequestArgs} args
   * @returns {*}
   * @memberof UmbRecycleBinRepositoryBase
   */
  async requestOriginalParent(t) {
    return this.#t.getOriginalParent(t);
  }
}
class N extends n {
  constructor(t) {
    super(t, o), this.#t = new T(!1), this.isTrashed = this.#t.asObservable();
  }
  #t;
  /**
   * Gets the isTrashed state
   * @returns {*}
   * @memberof UmbIsTrashedContext
   */
  getIsTrashed() {
    return this.#t.getValue();
  }
  /**
   * Sets the isTrashed state
   * @param {boolean} isTrashed
   * @memberof UmbIsTrashedContext
   */
  setIsTrashed(t) {
    this.#t.setValue(t);
  }
}
export {
  A as UMB_ENTITY_ACTION_TRASH_KIND_MANIFEST,
  u as UMB_ENTITY_BULK_ACTION_TRASH_KIND,
  B as UMB_ENTITY_BULK_ACTION_TRASH_KIND_MANIFEST,
  y as UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS,
  R as UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS,
  o as UMB_IS_TRASHED_ENTITY_CONTEXT,
  f as UMB_RESTORE_FROM_RECYCLE_BIN_MODAL,
  D as UmbEmptyRecycleBinEntityAction,
  x as UmbEntityTrashedEvent,
  N as UmbIsTrashedEntityContext,
  E as UmbRecycleBinRepositoryBase,
  M as UmbRestoreFromRecycleBinEntityAction,
  l as UmbTrashEntityAction,
  g as UmbTrashEntityBulkAction,
  H as api
};
//# sourceMappingURL=index.js.map

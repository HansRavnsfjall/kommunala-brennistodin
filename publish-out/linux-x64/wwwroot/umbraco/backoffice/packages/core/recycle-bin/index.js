import { b as u, d as f, c as y, U as A, a as B } from "../bulk-trash.action.kind-CdpI7m0a.js";
import { U as i } from "../is-trashed.entity-context-token-DtToyMNh.js";
import { U as l } from "../restore-from-recycle-bin-modal.token-Dfw4-Cxp.js";
import { UmbTrashEntityAction as S } from "../trash.action-KXZi2vhG.js";
import { U as b } from "../trash.event-D1yYlRYJ.js";
import { UmbRestoreFromRecycleBinEntityAction as C } from "../restore-from-recycle-bin.action-BcDOWexc.js";
import { UmbEmptyRecycleBinEntityAction as D } from "../empty-recycle-bin.action-CL03sClh.js";
import { UmbTrashEntityBulkAction as Y, UmbTrashEntityBulkAction as q } from "../bulk-trash.action-CT1ona5L.js";
import { UMB_NOTIFICATION_CONTEXT as o } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as a } from "@umbraco-cms/backoffice/repository";
import { UmbContextBase as n } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as c } from "@umbraco-cms/backoffice/observable-api";
class p extends a {
  #t;
  #e;
  #s;
  #r;
  /**
   * Creates an instance of UmbRecycleBinRepositoryBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param {UmbRecycleBinDataSourceConstructor} recycleBinSource
   * @memberof UmbRecycleBinRepositoryBase
   */
  constructor(t, e) {
    super(t), this.#t = new e(this), this.consumeContext(o, (s) => {
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
    const { error: e } = await this.#t.trash(t);
    if (!e) {
      this.#s?.close();
      const s = { data: { message: "Trashed" } };
      this.#s = this.#e?.peek("positive", s);
    }
    return { error: e };
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
      this.#r?.close();
      const s = { data: { message: "Restored" } };
      this.#r = this.#e?.peek("positive", s);
    }
    return { error: e };
  }
  /**
   * Requests to empty the recycle bin.
   * @returns {*}
   * @memberof UmbRecycleBinRepositoryBase
   */
  async requestEmpty() {
    const { error: t } = await this.#t.empty();
    if (!t) {
      const e = { data: { message: "Recycle Bin Emptied" } };
      this.#e?.peek("positive", e);
    }
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
class E extends n {
  constructor(t) {
    super(t, i), this.#t = new c(!1), this.isTrashed = this.#t.asObservable();
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
  u as UMB_ENTITY_ACTION_TRASH_KIND_MANIFEST,
  f as UMB_ENTITY_BULK_ACTION_TRASH_KIND,
  y as UMB_ENTITY_BULK_ACTION_TRASH_KIND_MANIFEST,
  A as UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS,
  B as UMB_ENTITY_IS_TRASHED_CONDITION_ALIAS,
  i as UMB_IS_TRASHED_ENTITY_CONTEXT,
  l as UMB_RESTORE_FROM_RECYCLE_BIN_MODAL,
  D as UmbEmptyRecycleBinEntityAction,
  b as UmbEntityTrashedEvent,
  E as UmbIsTrashedEntityContext,
  p as UmbRecycleBinRepositoryBase,
  C as UmbRestoreFromRecycleBinEntityAction,
  S as UmbTrashEntityAction,
  Y as UmbTrashEntityBulkAction,
  q as api
};
//# sourceMappingURL=index.js.map

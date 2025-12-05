import { U as s } from "./entity.context-token-Xhq6yvYN.js";
import { UmbContextBase as i } from "@umbraco-cms/backoffice/class-api";
import { UmbStringState as e } from "@umbraco-cms/backoffice/observable-api";
class o extends i {
  /**
   * Creates an instance of UmbEntityContext.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbEntityContext
   */
  constructor(t) {
    super(t, s), this.#t = new e(void 0), this.entityType = this.#t.asObservable(), this.#e = new e(null), this.unique = this.#e.asObservable();
  }
  #t;
  #e;
  /**
   * Set the entity type
   * @param {string | undefined} entityType
   * @memberof UmbEntityContext
   */
  setEntityType(t) {
    this.#t.setValue(t);
  }
  /**
   * Get the entity type
   * @returns {string | undefined}
   * @memberof UmbEntityContext
   */
  getEntityType() {
    return this.#t.getValue();
  }
  /**
   * Set the unique
   * @param {string | null} unique
   * @memberof UmbEntityContext
   */
  setUnique(t) {
    this.#e.setValue(t);
  }
  /**
   * Get the unique
   * @returns {string | null}
   * @memberof UmbEntityContext
   */
  getUnique() {
    return this.#e.getValue();
  }
}
export {
  o as U
};
//# sourceMappingURL=entity.context-BLVHjEHR.js.map

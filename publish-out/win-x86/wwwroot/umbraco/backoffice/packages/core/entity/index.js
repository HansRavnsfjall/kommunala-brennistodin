import { U as x } from "../entity.context-token-Xhq6yvYN.js";
import { U as u } from "../entity.context-BLVHjEHR.js";
import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { U as p, a as A } from "../constants-aX8eGL-y.js";
import { UmbContextBase as s } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as o, UmbObjectState as a } from "@umbraco-cms/backoffice/observable-api";
const T = new e("UmbAncestorsEntityContext"), i = new e("UmbParentEntityContext");
class _ extends s {
  constructor(t) {
    super(t, T), this.#t = new o([], (n) => n.unique), this.ancestors = this.#t.asObservable();
  }
  #t;
  /**
   * Gets the ancestors state
   * @returns {Array<UmbEntityModel>} - The ancestors state
   * @memberof UmbAncestorsEntityContext
   */
  getAncestors() {
    return this.#t.getValue();
  }
  /**
   * Sets the ancestors state
   * @param {Array<UmbEntityModel>} ancestors - The ancestors state
   * @memberof UmbAncestorsEntityContext
   */
  setAncestors(t) {
    this.#t.setValue(t);
  }
}
class c extends s {
  constructor(t) {
    super(t, i), this.#t = new a(void 0), this.parent = this.#t.asObservable();
  }
  #t;
  /**
   * Gets the parent state
   * @returns {UmbEntityModel | undefined} - The parent state
   * @memberof UmbParentEntityContext
   */
  getParent() {
    return this.#t.getValue();
  }
  /**
   * Sets the parent state
   * @param {UmbEntityModel | undefined} parent - The parent state
   * @memberof UmbParentEntityContext
   */
  setParent(t) {
    this.#t.setValue(t);
  }
}
export {
  T as UMB_ANCESTORS_ENTITY_CONTEXT,
  x as UMB_ENTITY_CONTEXT,
  p as UMB_ENTITY_TYPE_CONDITION_ALIAS,
  A as UMB_ENTITY_UNIQUE_CONDITION_ALIAS,
  i as UMB_PARENT_ENTITY_CONTEXT,
  _ as UmbAncestorsEntityContext,
  u as UmbEntityContext,
  c as UmbParentEntityContext
};
//# sourceMappingURL=index.js.map

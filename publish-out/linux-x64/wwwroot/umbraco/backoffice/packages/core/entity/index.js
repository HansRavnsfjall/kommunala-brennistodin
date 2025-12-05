import { U as C, a as h } from "../entity.context-C8qVKYoi.js";
import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as s } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as o, UmbObjectState as a } from "@umbraco-cms/backoffice/observable-api";
const i = new e("UmbAncestorsEntityContext"), m = new e("UmbParentEntityContext");
class E extends s {
  constructor(t) {
    super(t, i), this.#t = new o([], (r) => r.unique), this.ancestors = this.#t.asObservable();
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
class U extends s {
  constructor(t) {
    super(t, m), this.#t = new a(void 0), this.parent = this.#t.asObservable();
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
  i as UMB_ANCESTORS_ENTITY_CONTEXT,
  C as UMB_ENTITY_CONTEXT,
  m as UMB_PARENT_ENTITY_CONTEXT,
  E as UmbAncestorsEntityContext,
  h as UmbEntityContext,
  U as UmbParentEntityContext
};
//# sourceMappingURL=index.js.map

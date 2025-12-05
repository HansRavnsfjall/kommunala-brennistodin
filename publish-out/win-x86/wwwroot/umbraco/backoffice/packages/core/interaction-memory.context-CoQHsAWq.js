import { UmbContextToken as o } from "@umbraco-cms/backoffice/context-api";
import { UmbArrayState as a } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as m, UmbContextBase as i } from "@umbraco-cms/backoffice/class-api";
const c = new o(
  "UmbInteractionMemoryContext"
);
class r extends Event {
  static {
    this.TYPE = "interaction-memories-change";
  }
  constructor() {
    super(r.TYPE, { bubbles: !0, composed: !1, cancelable: !1 });
  }
}
class u extends m {
  constructor() {
    super(...arguments), this.#e = new a([], (e) => e.unique), this.memories = this.#e.asObservable();
  }
  #e;
  /**
   * Observable for a specific memory item by its unique identifier.
   * @param {string} unique - The unique identifier of the memory item.
   * @returns {(Observable<UmbInteractionMemoryModel | undefined>)} An observable that emits the memory item or undefined if not found.
   * @memberof UmbInteractionMemoryManager
   */
  memory(e) {
    return this.#e.asObservablePart((t) => t.find((n) => n.unique === e));
  }
  /**
   * Get a specific memory item by its unique identifier.
   * @param {string} unique - The unique identifier of the memory item.
   * @returns {(UmbInteractionMemoryModel | undefined)} The memory item or undefined if not found.
   * @memberof UmbInteractionMemoryManager
   */
  getMemory(e) {
    return this.#e.getValue().find((t) => t.unique === e);
  }
  /**
   * Add or update a memory item.
   * @param {UmbInteractionMemoryModel} memory - The memory item to add or update.
   * @memberof UmbInteractionMemoryManager
   */
  setMemory(e) {
    this.#e.appendOne(e);
  }
  /**
   * Delete a memory item by its unique identifier.
   * @param {string} unique - The unique identifier of the memory item.
   * @memberof UmbInteractionMemoryManager
   */
  deleteMemory(e) {
    this.#e.removeOne(e);
  }
  /**
   * Get all memory items from the manager.
   * @returns {Array<UmbInteractionMemoryModel>} An array of all memory items.
   * @memberof UmbInteractionMemoryManager
   */
  getAllMemories() {
    return this.#e.getValue();
  }
  /**
   * Clear all memory items from the manager.
   * @memberof UmbInteractionMemoryManager
   */
  clear() {
    this.#e.clear();
  }
}
class M extends i {
  constructor(e) {
    super(e, c), this.memory = new u(this);
  }
}
export {
  c as U,
  r as a,
  M as b,
  u as c
};
//# sourceMappingURL=interaction-memory.context-CoQHsAWq.js.map

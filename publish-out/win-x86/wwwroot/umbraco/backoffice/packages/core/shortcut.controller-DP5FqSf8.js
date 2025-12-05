import { UmbContextToken as h } from "@umbraco-cms/backoffice/context-api";
import { UmbArrayState as a } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as u } from "@umbraco-cms/backoffice/class-api";
const n = new h("UmbShortcutContext"), d = navigator.userAgent ? /Mac/i.test(navigator.userAgent) : navigator.platform.toUpperCase().includes("MAC");
class v extends u {
  constructor(t) {
    super(t), this.#e = !1, this.#t = new a([], (e) => e.unique), this.all = this.#t.asObservable(), this.#o = (e) => {
      const i = e.key.toLowerCase(), o = d ? e.metaKey : e.ctrlKey, r = this.findShortcut(i, o, e.shiftKey, e.altKey);
      r && (e.preventDefault(), r.action());
    }, this.#t.sortBy((e, i) => (i.weight || 0) - (e.weight || 0));
  }
  #e;
  #s;
  #t;
  #i;
  #r;
  /**
   * Provide this validation context to a specific controller host.
   * This can be used to Host a validation context in a Workspace, but provide it on a certain scope, like a specific Workspace View.
   * @param {UmbClassInterface} controllerHost - The controller host to provide this validation context to.
   */
  provideAt(t) {
    this.#r !== t && (this.unprovide(), this.#r = t, this.#i = t.provideContext(n, this));
  }
  unprovide() {
    this.#i && (this.#e = !0, this.#i.destroy(), this.#i = void 0, this.#e = !1, this.#r = void 0);
  }
  inherit() {
    this.consumeContext(n, (t) => {
      this.inheritFrom(t);
    }).skipHost();
  }
  inheritFrom(t) {
    this.#s !== t && (this.#s = t);
  }
  initiateChange() {
    this.#t.mute();
  }
  finishChange() {
    this.#t.unmute();
  }
  /**
   * Add a new hint
   * @param {IncomingShortcutType} shortcut - The hint to add
   * @returns {UmbShortcut['unique']} Unique value of the hint
   */
  addOne(t) {
    const e = { ...t };
    return e.unique ??= Symbol(), e.weight ??= 0, e.modifier ??= !1, e.shift ??= !1, e.alt ??= !1, this.#t.appendOne(e), t.unique;
  }
  /**
   * Add multiple rules
   * @param {IncomingShortcutType[]} shortcuts - Array of hints to add
   */
  add(t) {
    this.#t.mute(), t.forEach((e) => this.addOne(e)), this.#t.unmute();
  }
  /**
   * Remove a hint
   * @param {UmbShortcut['unique']} unique Unique value of the hint to remove
   */
  removeOne(t) {
    this.#t.removeOne(t);
  }
  /**
   * Remove multiple hints
   * @param {UmbShortcut['unique'][]} uniques Array of unique values to remove
   */
  remove(t) {
    this.#t.remove(t);
  }
  /**
   * Check if a hint exists
   * @param {UmbShortcut['unique']} unique Unique value of the hint to check
   * @returns {boolean} True if the hint exists, false otherwise
   */
  has(t) {
    return this.#t.getHasOne(t);
  }
  /**
   * Get all hints
   * @returns {UmbShortcut[]} Array of hints
   */
  getAll() {
    return this.#t.getValue();
  }
  /**
   * Get all hints
   * @param key
   * @param modifier
   * @param shift
   * @param alt
   * @returns {UmbShortcut[]} Array of hints
   */
  findShortcut(t, e, i = !1, o = !1) {
    const r = this.#t.getValue();
    for (const s of r)
      if (s.key.toLowerCase() === t.toLowerCase() && s.modifier === e && s.shift === i && s.alt === o)
        return s;
  }
  /**
   * Clear all hints
   */
  clear() {
    this.#t.setValue([]);
  }
  activate() {
    window.addEventListener("keydown", this.#o);
  }
  deactivate() {
    window.removeEventListener("keydown", this.#o);
  }
  #o;
  destroy() {
    super.destroy(), this.#e !== !0 && (this.unprovide(), this.#s = void 0, this.#t.destroy());
  }
}
export {
  v as U,
  n as a
};
//# sourceMappingURL=shortcut.controller-DP5FqSf8.js.map

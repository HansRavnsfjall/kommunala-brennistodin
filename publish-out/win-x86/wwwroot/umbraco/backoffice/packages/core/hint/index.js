import { UmbContextToken as u } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as l } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as d, UmbArrayState as f } from "@umbraco-cms/backoffice/observable-api";
const a = new u("UmbHintContext");
class v extends l {
  constructor(t, e) {
    super(t), this.#s = new d({}), this.scaffold = this.#s.asObservable(), this.#t = new f([], (i) => i.unique), this.hints = this.#t.asObservable(), this.firstHint = this.#t.asObservablePart((i) => i[0]), this.#u = (i) => {
      if (i || (i = []), this.initiateChange(), this.#h) {
        const s = this.#h.filter((h) => !i.find((r) => r.unique === h.unique));
        this.remove(s.map((h) => h.unique));
      }
      this.#h = i, i.forEach((s) => {
        this.#i && s.path[0] === this.#i && (s = { ...s, path: s.path.slice(1) }), this.#t.appendOne(s);
      }), this.finishChange();
    }, this.#l = (i) => {
      if (!this.#e) return;
      this.#e.initiateChange();
      const s = this.getViewAlias();
      i.forEach((r) => {
        let n = r.path;
        s && n[0] !== s && (n = [s, ...r.path]), this.#e.addOne({ ...r, path: n });
      });
      const h = this.#h?.filter((r) => !i.find((n) => n.unique === r.unique));
      h && this.#e.remove(h.map((r) => r.unique)), this.#e.finishChange();
    }, this.#i = e?.viewAlias ?? null, e?.scaffold && this.#s.setValue(e?.scaffold), this.#t.sortBy((i, s) => (s.weight || 0) - (i.weight || 0));
  }
  //
  #i;
  getViewAlias() {
    return this.#i;
  }
  #r;
  setPathFilter(t) {
    this.#r = t;
  }
  #s;
  #a;
  #e;
  #h;
  #t;
  // Consider using weight to determine the visibility distance. [NL]
  //public readonly hasHints = this._hints.asObservablePart((x) => x.length > 0);
  updateScaffold(t) {
    this.#s.update(t);
  }
  getScaffold() {
    return this.#s.getValue();
  }
  #n;
  #o;
  /**
   * Provide this validation context to a specific controller host.
   * This can be used to Host a validation context in a Workspace, but provide it on a certain scope, like a specific Workspace View.
   * @param {UmbClassInterface} controllerHost - The controller host to provide this validation context to.
   */
  provideAt(t) {
    this.#o !== t && (this.unprovide(), this.#o = t, this.#n = t.provideContext(a, this));
  }
  unprovide() {
    this.#n && (this.#a = !0, this.#n.destroy(), this.#n = void 0, this.#a = !1, this.#o = void 0);
  }
  asObservablePart(t) {
    return this.#t.asObservablePart(t);
  }
  descendingHints(t) {
    return t ? this.#t.asObservablePart((e) => e.filter((i) => i.path[0] === t)) : this.hints;
  }
  /**
   * @internal
   * @param {(path: Array<string>) => boolean} filter - A filter function to filter the hints by their path.
   * @returns {Observable<Array<UmbHint> | undefined>} An observable of an array of hints that match the filter.
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _internal_descendingHintsByFilter(t) {
    return this.#t.asObservablePart((e) => e.filter((i) => t(i.path)));
  }
  inherit() {
    if (this.#i === null && this.#r === void 0)
      throw new Error("A Hint Controller needs a view alias or pathFilter to be able to inherit from a parent.");
    this.consumeContext(a, (t) => {
      this.inheritFrom(t);
    }).skipHost();
  }
  inheritFrom(t) {
    if (this.#e !== t) {
      if (this.#i === null && this.#r === void 0)
        throw new Error("A Hint Controller needs a view alias or pathFilter to be able to inherit from a parent.");
      this.#e = t, this.observe(this.#e?.scaffold, (e) => {
        e && this.#s.update(e);
      }), this.#i ? this.observe(t?.descendingHints(this.#i), this.#u, "observeParentHints") : this.#r && this.observe(
        t?._internal_descendingHintsByFilter(this.#r),
        this.#u,
        "observeParentHints"
      ), this.observe(this.hints, this.#l, "observeLocalMessages");
    }
  }
  #u;
  #l;
  initiateChange() {
    this.#t.mute();
  }
  finishChange() {
    this.#t.unmute();
  }
  /**
   * Add a new hint
   * @param {HintType} hint - The hint to add
   * @returns {HintType['unique']} Unique value of the hint
   */
  addOne(t) {
    const e = { ...this.#s.getValue(), ...t };
    return e.unique ??= Symbol(), e.weight ??= 0, e.text ??= "!", e.path ??= [], this.#t.appendOne(e), t.unique;
  }
  /**
   * Add multiple rules
   * @param {HintType[]} hints - Array of hints to add
   */
  add(t) {
    this.#t.mute(), t.forEach((e) => this.addOne(e)), this.#t.unmute();
  }
  /**
   * Remove a hint
   * @param {HintType['unique']} unique Unique value of the hint to remove
   */
  removeOne(t) {
    this.#t.removeOne(t);
  }
  /**
   * Remove multiple hints
   * @param {HintType['unique'][]} uniques Array of unique values to remove
   */
  remove(t) {
    this.#t.remove(t);
  }
  /**
   * Check if a hint exists
   * @param {HintType['unique']} unique Unique value of the hint to check
   * @returns {boolean} True if the hint exists, false otherwise
   */
  has(t) {
    return this.#t.getHasOne(t);
  }
  /**
   * Get all hints
   * @returns {HintType[]} Array of hints
   */
  getAll() {
    return this.#t.getValue();
  }
  /**
   * Clear all hints
   */
  clear() {
    this.#t.setValue([]);
  }
  destroy() {
    super.destroy(), this.#a !== !0 && (this.unprovide(), this.#h = void 0, this.#e = void 0, this.#t.destroy());
  }
}
class c extends v {
  constructor(t, e) {
    super(t, e), this.provideContext(a, this);
  }
}
export {
  a as UMB_HINT_CONTEXT,
  c as UmbHintContext,
  v as UmbHintController
};
//# sourceMappingURL=index.js.map

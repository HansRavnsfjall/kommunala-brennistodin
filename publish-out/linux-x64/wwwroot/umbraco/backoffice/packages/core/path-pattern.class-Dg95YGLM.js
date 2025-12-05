import { u as n } from "./url-pattern-to-string.function-BAOMgyZQ.js";
class o {
  #t;
  #r;
  constructor(t, r) {
    this.#t = t, r = r?.toString() ?? "", this.#r = r.lastIndexOf("/") !== r.length - 1 ? r + "/" : r;
  }
  generateLocal(t) {
    return n(this.#t, t);
  }
  /**
   * generate an absolute path from the path pattern
   * @param params
   * @param baseParams
   * @returns
   */
  generateAbsolute(t) {
    return (this.#r.indexOf(":") !== -1 ? n(this.#r, t) : this.#r) + n(this.#t, t);
  }
  toString() {
    return this.#t;
  }
}
export {
  o as U
};
//# sourceMappingURL=path-pattern.class-Dg95YGLM.js.map

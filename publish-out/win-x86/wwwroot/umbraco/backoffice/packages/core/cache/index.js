class h {
  #t = /* @__PURE__ */ new Map();
  #s;
  constructor(t) {
    this.#s = t;
  }
  get(t) {
    if (!this.#t.has(t)) return;
    const s = this.#t.get(t);
    return this.#t.delete(t), this.#t.set(t, s), s;
  }
  set(t, s) {
    if (this.#t.has(t))
      this.#t.delete(t);
    else if (this.#t.size >= this.#s) {
      const e = this.#t.keys().next().value;
      e && this.#t.delete(e);
    }
    this.#t.set(t, s);
  }
  has(t) {
    return this.#t.has(t);
  }
}
export {
  h as UmbLruCache
};
//# sourceMappingURL=index.js.map

class s {
  /**
   * @param alias   Unique identifier for the token,
   * @param defaults  Defaults for the modal,
   */
  constructor(t, a) {
    this.DATA = void 0, this.VALUE = void 0, this.#a = t, this.#t = a;
  }
  #a;
  #t;
  /**
   * This method must always return the unique alias of the token since that
   * will be used to look up the token in the injector.
   * @returns the unique alias of the token
   */
  toString() {
    return this.#a;
  }
  getDefaultModal() {
    return this.#t?.modal;
  }
  getDefaultData() {
    return this.#t?.data;
  }
  getDefaultValue() {
    return this.#t?.value;
  }
}
export {
  s as U
};
//# sourceMappingURL=modal-token-wEQqBBXI.js.map

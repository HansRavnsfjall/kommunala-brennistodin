class i {
  #s = "Umbraco Backoffice:";
  #e;
  #o;
  #i;
  constructor(e) {
    this.#e = e.deprecated, this.#o = e.removeInVersion, this.#i = e.solution;
  }
  /**
   * Logs a warning message to the console.
   * @memberof UmbDeprecation
   */
  warn() {
    console.warn(
      `${this.#s} ${this.#e} The feature will be removed in version ${this.#o}. ${this.#i}`
    );
  }
}
export {
  i as U
};
//# sourceMappingURL=deprecation-SeDYTswO.js.map

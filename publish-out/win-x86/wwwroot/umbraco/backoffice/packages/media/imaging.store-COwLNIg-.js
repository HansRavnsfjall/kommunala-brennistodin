import { U as s } from "./constants-C418HnkF.js";
import { UmbContextBase as i } from "@umbraco-cms/backoffice/class-api";
class n extends i {
  #t;
  constructor(t) {
    super(t, s.toString()), this.#t = /* @__PURE__ */ new Map();
  }
  /**
   * Gets the data from the store.
   * @param {string} unique - The media key
   * @returns {Map<string, string> | undefined} - The data if it exists
   */
  getData(t) {
    return this.#t.get(t);
  }
  /**
   * Gets a specific crop if it exists.
   * @param {string} unique - The media key
   * @param {string} data - The resize configuration
   * @returns {string | undefined} - The crop if it exists
   */
  getCrop(t, e) {
    return this.#t.get(t)?.get(this.#e(e));
  }
  /**
   * Adds a new crop to the store.
   * @param {string} unique - The media key
   * @param {string} urlInfo - The URL of the crop
   * @param { | undefined} data - The resize configuration
   */
  addCrop(t, e, r) {
    this.#t.has(t) || this.#t.set(t, /* @__PURE__ */ new Map()), this.#t.get(t)?.set(this.#e(r), e);
  }
  /**
   * Generates a unique key for the crop based on the width, height and mode.
   * @param {UmbImagingResizeModel} data - The resize configuration
   * @returns {string} - The crop key
   */
  #e(t) {
    return t ? `${t.width}x${t.height};${t.mode}` : "generic";
  }
}
export {
  n as UmbImagingStore,
  n as default
};
//# sourceMappingURL=imaging.store-COwLNIg-.js.map

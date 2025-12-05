import { U as s } from "./constants-C418HnkF.js";
import { UmbContextBase as i } from "@umbraco-cms/backoffice/class-api";
class g extends i {
  #t = /* @__PURE__ */ new Map();
  constructor(t) {
    super(t, s.toString());
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
   * @param {UmbImagingResizeModel | undefined} data - The resize configuration
   */
  addCrop(t, e, r) {
    this.#t.has(t) || this.#t.set(t, /* @__PURE__ */ new Map()), this.#t.get(t)?.set(this.#e(r), e);
  }
  /**
   * Clears all crops from the store.
   */
  clear() {
    this.#t.clear();
  }
  /**
   * Clears the crop for a specific unique identifier.
   * @param {string} unique - The unique identifier for the media item
   */
  clearCropByUnique(t) {
    this.#t.delete(t);
  }
  /**
   * Clears the crop for a specific unique identifier and resize configuration.
   * @param {string} unique - The unique identifier for the media item
   * @param {UmbImagingResizeModel | undefined} data - The resize configuration
   */
  clearCropByConfiguration(t, e) {
    this.#t.get(t)?.delete(this.#e(e));
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
  g as UmbImagingStore,
  g as default
};
//# sourceMappingURL=imaging.store-Btmn4DA6.js.map

import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
class n extends s {
  /**
   * @inheritdoc
   */
  setEditor(e) {
    this._editor = e;
  }
  /**
   * @inheritdoc
   */
  getStyles() {
    return null;
  }
}
class r extends s {
  #e;
  /**
   * Informs the toolbar element if it is active or not. It uses the manifest meta alias to check if the toolbar element is active.
   * @see {ManifestTiptapToolbarExtension}
   * @param {Editor} editor The editor instance.
   * @returns {boolean} Returns true if the toolbar element is active.
   */
  isActive(e) {
    return e && this.manifest?.meta.alias ? e?.isActive(this.manifest.meta.alias) === !0 : !1;
  }
  /**
   * Informs the toolbar element if it is disabled or not.
   * @see {ManifestTiptapToolbarExtension}
   * @param {Editor} editor The editor instance.
   * @returns {boolean} Returns true if the toolbar element is disabled.
   */
  isDisabled(e) {
    return e ? (this.#e || (this.#e = this.configuration?.getValueByAlias("extensions") ?? []), this.manifest?.forExtensions?.every((i) => this.#e?.includes(i)) === !1) : !0;
  }
}
export {
  n as U,
  r as a
};
//# sourceMappingURL=base-CzBFGKJV.js.map

import { ImagingService as u, ImageCropModeModel as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
import { U as h } from "./constants-C418HnkF.js";
import { UmbRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class g {
  #r;
  /**
   * Creates an instance of UmbImagingServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbImagingServerDataSource
   */
  constructor(r) {
    this.#r = r;
  }
  /**
   * Fetches the URL for the given media items as resized images
   * @param {string} unique
   * @param uniques
   * @param imagingModel
   * @memberof UmbImagingServerDataSource
   */
  async getItems(r, t) {
    if (!r.length) throw new Error("Uniques are missing");
    const { data: s, error: e } = await l(
      this.#r,
      u.getImagingResizeUrls({ query: { id: r, ...t } })
    );
    return s ? { data: s.map((o) => this.#e(o)) } : { error: e };
  }
  #e(r) {
    const t = r.urlInfos[0]?.url;
    return {
      unique: r.id,
      url: t
    };
  }
}
class U extends p {
  #r;
  #e = new g(this);
  #t;
  constructor(r) {
    super(r), this.#r = this.consumeContext(h, (t) => {
      t && (this.#t = t);
    }).asPromise({ preventTimeout: !0 });
  }
  /**
   * Requests the items for the given uniques
   * @param {Array<string>} uniques - The uniques
   * @param {UmbImagingResizeModel} imagingModel - The imaging model
   * @returns {Promise<{ data: UmbMediaUrlModel[] }>} - The resized absolute media URLs
   * @memberof UmbImagingRepository
   */
  async requestResizedItems(r, t) {
    if (!r.length) throw new Error("Uniques are missing");
    await this.#r, this.#t || console.warn("[UmbImagingRepository] No data store available. All thumbnails are uncached.");
    const s = /* @__PURE__ */ new Map();
    for (const e of r) {
      const i = this.#t?.getCrop(e, t);
      if (i !== void 0) {
        s.set(e, i);
        continue;
      }
      const { data: o, error: n } = await this.#e.getItems([e], t);
      if (n) {
        console.error("[UmbImagingRepository] Error fetching items", n);
        continue;
      }
      const a = o?.[0]?.url;
      this.#t?.addCrop(e, a ?? "", t), a && s.set(e, a);
    }
    return { data: Array.from(s).map(([e, i]) => ({ unique: e, url: i })) };
  }
  /**
   * Internal method to clear the cache for a specific image.
   * @param {string} unique The unique identifier for the media item
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async _internal_clearCropByUnique(r) {
    await this.#r, this.#t?.clearCropByUnique(r);
  }
  /**
   * Requests the thumbnail URLs for the given uniques
   * @param {Array<string>} uniques - The unique identifiers for the media items
   * @param {number} height - The desired height in pixels of the thumbnail
   * @param {number} width - The desired width in pixels of the thumbnail
   * @param {UmbImagingCropMode} mode - The crop mode
   * @returns {Promise<{ data: UmbMediaUrlModel[] }>} - The resized absolute media URLs
   * @memberof UmbImagingRepository
   * @deprecated Use {@link UmbImagingRepository#requestResizedItems} instead for more flexibility and control over the imaging model. This will be removed in Umbraco 18.
   */
  async requestThumbnailUrls(r, t, s, e = c.MIN) {
    const i = { height: t, width: s, mode: e };
    return this.requestResizedItems(r, i);
  }
}
export {
  U as UmbImagingRepository,
  U as api
};
//# sourceMappingURL=imaging.repository-oDvp8QYt.js.map

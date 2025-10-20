import { ImagingService as u, ImageCropModeModel as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as g } from "@umbraco-cms/backoffice/resources";
import { U as p } from "./constants-C418HnkF.js";
import { UmbRepositoryBase as h } from "@umbraco-cms/backoffice/repository";
class f {
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
    const { data: s, error: e } = await g(
      this.#r,
      u.getImagingResizeUrls({ query: { id: r, ...t } })
    );
    return s ? { data: s.map((i) => this.#t(i)) } : { error: e };
  }
  #t(r) {
    const t = r.urlInfos[0]?.url;
    return {
      unique: r.id,
      url: t
    };
  }
}
class U extends h {
  #r;
  #t;
  constructor(r) {
    super(r), this.#t = new f(r), this.consumeContext(p, (t) => {
      t && (this.#r = t);
    });
  }
  /**
   * Requests the items for the given uniques
   * @param {Array<string>} uniques - The uniques
   * @param {UmbImagingResizeModel} imagingModel - The imaging model
   * @returns {Promise<{ data: UmbMediaUrlModel[] }>}
   * @memberof UmbImagingRepository
   */
  async requestResizedItems(r, t) {
    if (!r.length) throw new Error("Uniques are missing");
    if (!this.#r) throw new Error("Data store is missing");
    const s = /* @__PURE__ */ new Map();
    for (const e of r) {
      const o = this.#r.getCrop(e, t);
      if (o !== void 0) {
        s.set(e, o);
        continue;
      }
      const { data: i, error: a } = await this.#t.getItems([e], t);
      if (a) {
        console.error("[UmbImagingRepository] Error fetching items", a);
        continue;
      }
      const n = i?.[0].url;
      this.#r.addCrop(e, n ?? "", t), n && s.set(e, n);
    }
    return { data: Array.from(s).map(([e, o]) => ({ unique: e, url: o })) };
  }
  /**
   * Requests the thumbnail URLs for the given uniques
   * @param {Array<string>} uniques
   * @param {number} height
   * @param {number} width
   * @param {ImageCropModeModel} mode - The crop mode
   * @memberof UmbImagingRepository
   */
  async requestThumbnailUrls(r, t, s, e = c.MIN) {
    const o = { height: t, width: s, mode: e };
    return this.requestResizedItems(r, o);
  }
}
export {
  U as UmbImagingRepository,
  U as api
};
//# sourceMappingURL=imaging.repository-Cr_RO0yc.js.map

import { o as l } from "./input-upload-field.element-BKvVffkE.js";
import { b as n } from "./dropzone.element-DJdyaEXj.js";
import { UmbDefaultCollectionContext as r } from "@umbraco-cms/backoffice/collection";
import { UmbArrayState as h } from "@umbraco-cms/backoffice/observable-api";
class _ extends r {
  constructor(e) {
    super(e, n), this.thumbnailItems = this.items, this.#t = new h([], (t) => t.unique), this.placeholders = this.#t.asObservable();
  }
  #t;
  setPlaceholders(e) {
    const t = this._items.getValue(), i = /* @__PURE__ */ new Date(), a = e.filter((s) => !t.find((o) => o.unique === s.unique)).map((s) => ({
      updateDate: i,
      createDate: i,
      entityType: l,
      ...s
    })).reverse();
    this.#t.setValue(a), this._items.setValue([...a, ...t]), this._totalItems.setValue(a.length + t.length), this.pagination.setTotalItems(a.length + t.length);
  }
  updatePlaceholderStatus(e, t) {
    this._items.updateOne(e, { status: t }), this.#t.updateOne(e, { status: t });
  }
  updatePlaceholderProgress(e, t) {
    this._items.updateOne(e, { progress: t }), this.#t.updateOne(e, { progress: t });
  }
  /**
   * Requests the collection from the repository.
   * @returns {Promise<void>}
   * @memberof UmbCollectionContext
   */
  async requestCollection() {
    if (await this._init, this._configured || this._configure(), !this._repository) throw new Error(`Missing repository for ${this._manifest}`);
    this._loading.setValue(!0);
    const e = this._filter.getValue(), { data: t } = await this._repository.requestCollection(e);
    if (t) {
      this.#e(t.items);
      const i = this.#t.getValue();
      this._items.setValue([...i, ...t.items]), this._totalItems.setValue(i.length + t.total), this.pagination.setTotalItems(i.length + t.total);
    }
    this._loading.setValue(!1);
  }
  #e(e) {
    const t = this.#t.getValue(), i = new Set(e.map((s) => s.unique));
    t.filter((s) => i.has(s.unique)).forEach((s) => {
      this.#t.removeOne(s.unique);
    });
  }
}
export {
  _ as UmbMediaCollectionContext,
  _ as api
};
//# sourceMappingURL=media-collection.context-DVLKhD9Q.js.map

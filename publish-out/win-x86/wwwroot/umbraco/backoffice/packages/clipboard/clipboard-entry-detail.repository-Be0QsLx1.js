import { U as c } from "./clipboard-local-storage.manager-BePfLXgL.js";
import { b as l, g as d } from "./manifests-D6Yzql_a.js";
import { UmbId as y } from "@umbraco-cms/backoffice/id";
import { UmbControllerBase as p } from "@umbraco-cms/backoffice/class-api";
import { UmbError as r } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as E } from "@umbraco-cms/backoffice/repository";
class w extends p {
  #t = new c(this);
  /**
   * Scaffold a new clipboard entry
   * @param {Partial<UmbClipboardEntryDetailModel>} [preset]
   * @returns {*}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async createScaffold(t = {}) {
    return { data: {
      values: [],
      entityType: l,
      icon: null,
      meta: {},
      name: null,
      unique: y.new(),
      createDate: null,
      updateDate: null,
      ...t
    } };
  }
  /**
   * Create a new clipboard entry in local storage
   * @param {UmbClipboardEntryDetailModel} model
   * @returns {*}  {Promise<UmbDataSourceResponse<UmbClipboardEntry>>}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async create(t) {
    if (!t)
      return {
        error: new r("Clipboard entry is missing")
      };
    if (await this.#t.getEntry(t.unique))
      return {
        error: new r("Clipboard entry already exists")
      };
    const s = (/* @__PURE__ */ new Date()).toISOString(), e = structuredClone(t);
    e.createDate = s, e.updateDate = s;
    const a = [...(await this.#t.getEntries()).entries, e];
    return await this.#t.setEntries(a), { data: e };
  }
  /**
   * Read a clipboard entry from local storage
   * @param {string} unique
   * @returns {*}  {Promise<UmbDataSourceResponse<UmbClipboardEntry>>}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async read(t) {
    if (!t)
      return {
        error: new r("Unique is missing")
      };
    const n = await this.#t.getEntry(t);
    return n ? { data: n } : {
      error: new r("Entry not found")
    };
  }
  /**
   * Update a clipboard entry in local storage
   * @param {UmbClipboardEntryDetailModel} model
   * @returns {*}  {Promise<UmbDataSourceResponse<UmbClipboardEntry>>}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async update(t) {
    if (!t)
      return {
        error: new r("Clipboard entry is missing")
      };
    if (!await this.#t.getEntry(t.unique))
      return {
        error: new r("Entry not found")
      };
    const e = (await this.#t.getEntries()).entries.map((a) => {
      if (a.unique === t.unique) {
        const o = structuredClone(t);
        return o.updateDate = (/* @__PURE__ */ new Date()).toISOString(), o;
      }
      return a;
    });
    return await this.#t.setEntries(e), { data: e.find((a) => a.unique === t.unique) };
  }
  /**
   * Delete a clipboard entry from local storage
   * @param {string} unique
   * @returns {*}  {Promise<UmbDataSourceErrorResponse>}
   * @memberof UmbClipboardEntryDetailLocalStorageDataSource
   */
  async delete(t) {
    if (!t)
      return {
        error: new r("Unique is missing")
      };
    if (!await this.#t.getEntry(t))
      return {
        error: new r("Entry not found")
      };
    const e = (await this.#t.getEntries()).entries.filter((i) => i.unique !== t);
    return await this.#t.setEntries(e), {};
  }
}
class C extends E {
  constructor(t) {
    super(t, w, d);
  }
  async create(t) {
    return super.create(t, null);
  }
}
export {
  C as UmbClipboardEntryDetailRepository,
  C as default
};
//# sourceMappingURL=clipboard-entry-detail.repository-Be0QsLx1.js.map

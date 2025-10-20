import "./clipboard-entry-picker-modal.token-BY5g5-fO.js";
import { UmbClipboardEntryDetailRepository as o } from "./clipboard-entry-detail.repository-Be0QsLx1.js";
import "./manifests-D6Yzql_a.js";
import "@umbraco-cms/backoffice/store";
import { UmbContextBase as i } from "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/current-user";
import "@umbraco-cms/backoffice/repository";
import { U as e } from "./clipboard.context-token-DOwOWTSv.js";
class w extends i {
  #t = new o(this);
  constructor(t) {
    super(t, e);
  }
  /**
   * Write to the clipboard
   * @param {Partial<UmbClipboardEntryDetailModel>} entryPreset - The preset for the clipboard entry
   * @returns {Promise<void>}
   * @memberof UmbClipboardContext
   */
  async write(t) {
    if (!t) throw new Error("Entry preset is required");
    const { data: r } = await this.#t.createScaffold(t);
    if (!r) return;
    const { data: a } = await this.#t.create(r);
    return a;
  }
  /**
   * Read from the clipboard
   * @param {string} unique - The unique id of the clipboard entry
   * @returns {Promise<UmbClipboardEntryDetailModel | undefined>} - Returns the clipboard entry
   * @memberof UmbClipboardContext
   */
  async read(t) {
    const { data: r } = await this.#t.requestByUnique(t);
    return r;
  }
}
export {
  w as UmbClipboardContext,
  w as api
};
//# sourceMappingURL=clipboard.context-D3d_lkgA.js.map

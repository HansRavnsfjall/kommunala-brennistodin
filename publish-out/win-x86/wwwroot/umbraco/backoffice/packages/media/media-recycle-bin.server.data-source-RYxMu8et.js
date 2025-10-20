import { MediaService as t } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
class c {
  #e;
  constructor(e) {
    this.#e = e;
  }
  trash(e) {
    return i(this.#e, t.putMediaByIdMoveToRecycleBin({ path: { id: e.unique } }));
  }
  restore(e) {
    return i(
      this.#e,
      t.putRecycleBinMediaByIdRestore({
        path: { id: e.unique },
        body: {
          target: e.destination.unique ? { id: e.destination.unique } : null
        }
      })
    );
  }
  empty() {
    return i(this.#e, t.deleteRecycleBinMedia());
  }
  async getOriginalParent(e) {
    const { data: a, error: r } = await i(
      this.#e,
      t.getRecycleBinMediaByIdOriginalParent({ path: { id: e.unique } })
    );
    return a !== void 0 ? { data: a ? { unique: a.id } : null } : { error: r };
  }
}
export {
  c as U
};
//# sourceMappingURL=media-recycle-bin.server.data-source-RYxMu8et.js.map

import { U as i } from "./current-user-history.store.token-C66NWwR2.js";
import { UmbId as r } from "@umbraco-cms/backoffice/id";
import { UmbArrayState as n } from "@umbraco-cms/backoffice/observable-api";
import { UmbStoreBase as o } from "@umbraco-cms/backoffice/store";
class m extends o {
  constructor(a) {
    super(
      a,
      i.toString(),
      new n([], (t) => t.unique)
    ), this.history = this._data.asObservable(), this.latestHistory = this._data.asObservablePart((t) => t.slice(-10)), "navigation" in window && window.navigation.addEventListener("navigate", (t) => {
      const s = new URL(t.destination.url), e = {
        unique: new r().toString(),
        path: s.pathname,
        label: t.destination.url.split("/").pop()
      };
      this.push(e);
    });
  }
  /**
   * Pushes a new history item to the history array
   * @public
   * @param {UmbCurrentUserHistoryItem} historyItem
   * @memberof UmbHistoryService
   */
  push(a) {
    const t = this._data.getValue(), s = t[t.length - 1];
    (!s || s.path !== a.path) && this._data.setValue([...this._data.getValue(), a]);
  }
  /**
   * Clears the history array
   * @public
   * @memberof UmbHistoryService
   */
  clear() {
    this._data.setValue([]);
  }
}
export {
  m as UmbCurrentUserHistoryStore,
  m as default
};
//# sourceMappingURL=current-user-history.store-Ca48wRgT.js.map

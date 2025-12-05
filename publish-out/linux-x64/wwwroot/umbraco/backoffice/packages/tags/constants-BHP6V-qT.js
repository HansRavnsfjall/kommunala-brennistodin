import { UmbArrayState as b } from "@umbraco-cms/backoffice/observable-api";
import { UmbStoreBase as T } from "@umbraco-cms/backoffice/store";
import { UmbContextToken as d } from "@umbraco-cms/backoffice/context-api";
const _ = "UMB_TAG_STORE", n = new d(_);
class s extends T {
  /**
   * Creates an instance of UmbTagStore.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTagStore
   */
  constructor(t) {
    super(t, n.toString(), new b([], (e) => e.id)), this.data = this._data.asObservable();
  }
  /**
   * Append a tag to the store
   * @param {TagResponseModel} TAG
   * @param tag
   * @memberof UmbTagStore
   */
  append(t) {
    this._data.append([t]);
  }
  /**
   * Append a tag to the store
   * @param {id} TagResponseModel id.
   * @param id
   * @memberof UmbTagStore
   */
  byId(t) {
    return this._data.asObservablePart((e) => e.find((a) => a.id === t));
  }
  items(t, e) {
    return this._data.asObservablePart(
      (a) => a.filter((r) => r.group === t && r.culture === e)
    );
  }
  // TODO
  // There isnt really any way to exclude certain tags when searching for suggestions.
  // This is important for the skip/take in the endpoint. We do not want to get the tags from database that we already have picked.
  // Forexample: we have 10 different tags that includes "berry" (and searched for "berry") and we have a skip of 0 and take of 5.
  // If we already has picked lets say 4 of them, the list will only show 1 more, even though there is more remaining in the database.
  byQuery(t, e, a) {
    return this._data.asObservablePart(
      (r) => r.filter(
        (o) => o.group === t && o.culture === e && o.query?.toLocaleLowerCase().includes(a.toLocaleLowerCase())
      )
    );
  }
  /**
   * Removes tag in the store with the given uniques
   * @param {string[]} uniques
   * @memberof UmbTagStore
   */
  remove(t) {
    this._data.remove(t);
  }
}
const S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UMB_TAG_STORE_CONTEXT: n,
  UMB_TAG_STORE_CONTEXT_ALIAS: _,
  UmbTagStore: s,
  default: s
}, Symbol.toStringTag, { value: "Module" })), p = "Umb.Repository.Tags", O = "Umb.Store.Tags";
export {
  p as U,
  O as a,
  _ as b,
  n as c,
  S as t
};
//# sourceMappingURL=constants-BHP6V-qT.js.map

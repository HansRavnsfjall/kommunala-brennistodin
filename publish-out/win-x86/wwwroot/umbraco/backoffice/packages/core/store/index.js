import { UmbContextBase as h } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as p, UmbArrayState as c } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextConsumerController as m } from "@umbraco-cms/backoffice/context-api";
class o extends Event {
  constructor(t, e) {
    super(t, { bubbles: !1, composed: !1, cancelable: !1 }), this.uniques = [], this.uniques = e;
  }
}
class r extends o {
  static {
    this.TYPE = "remove";
  }
  constructor(t) {
    super(r.TYPE, t);
  }
}
class i extends o {
  static {
    this.TYPE = "update";
  }
  constructor(t) {
    super(i.TYPE, t);
  }
}
class n extends o {
  static {
    this.TYPE = "append";
  }
  constructor(t) {
    super(n.TYPE, t);
  }
}
class u extends h {
  constructor(t, e, s) {
    super(t, e), this._data = s;
  }
  /**
   * Append an item to the store
   * @param {StoreItemType} item
   * @memberof UmbStoreBase
   */
  append(t) {
    this._data.append([t]);
    const e = this._data.getUniqueMethod(t);
    this.dispatchEvent(new n([e]));
  }
  /**
   * Appends multiple items to the store
   * @param {Array<StoreItemType>} items
   * @memberof UmbStoreBase
   */
  appendItems(t) {
    this._data.append(t);
    const e = t.map((s) => this._data.getUniqueMethod(s));
    this.dispatchEvent(new n(e));
  }
  /**
   * Updates an item in the store
   * @param {string} unique
   * @param {Partial<StoreItemType>} data
   * @memberof UmbStoreBase
   */
  updateItem(t, e) {
    this._data.updateOne(t, e), this.dispatchEvent(new i([t]));
  }
  /**
   * Removes an item from the store
   * @param {string} unique
   * @memberof UmbStoreBase
   */
  removeItem(t) {
    this._data.removeOne(t), this.dispatchEvent(new r([t]));
  }
  /**
   * Removes multiple items in the store with the given uniques
   * @param {string[]} uniques
   * @memberof UmbStoreBase
   */
  removeItems(t) {
    this._data.remove(t), this.dispatchEvent(new r(t));
  }
  /**
   * Returns an array of items with the given uniques
   * @param {string[]} uniques
   * @returns {Array<StoreItemType>}
   * @memberof UmbStoreBase
   */
  getItems(t) {
    return this._data.getValue().filter((e) => t.includes(this._data.getUniqueMethod(e)));
  }
  /**
   * Returns an observable of the entire store
   * @memberof UmbStoreBase
   */
  all() {
    return this._data.asObservable();
  }
}
class E extends h {
  constructor(t, e, s) {
    super(t, e), this._data = new p(s ?? null);
  }
  /**
   * Updates the store with the given data
   * @param data - The (partial) data to update the store with
   * @memberof UmbStoreObjectBase
   */
  update(t) {
    this._data.update(t), this.dispatchEvent(new i([]));
  }
  /**
   * Returns the current state of the store
   * @memberof UmbStoreObjectBase
   */
  getState() {
    return this._data.getValue();
  }
  /**
   * Returns an observable of the store
   * @memberof UmbStoreObjectBase
   */
  all() {
    return this._data.asObservable();
  }
  /**
   * Returns an observable of a part of the store
   * @param key - The key of the part to return
   * @memberof UmbStoreObjectBase
   */
  part(t) {
    return this._data.asObservablePart((e) => e[t]);
  }
  /**
   * Destroys the store
   * @memberof UmbStoreObjectBase
   */
  destroy() {
    this._data.destroy();
  }
}
class S extends u {
  /**
   * Creates an instance of UmbDetailStoreBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param storeAlias - The alias of the store
   * @memberof UmbDetailStoreBase
   */
  constructor(t, e) {
    super(t, e, new c([], (s) => s.unique));
  }
  /**
   * Retrieve a detail model from the store
   * @param {unique} string unique identifier
   * @param unique
   * @returns {Observable<T>}
   * @memberof UmbDetailStoreBase
   */
  byUnique(t) {
    return this._data.asObservablePart((e) => e.find((s) => s.unique === t));
  }
}
class I extends u {
  /**
   * Creates an instance of UmbItemStoreBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param storeAlias
   * @memberof UmbItemStoreBase
   */
  constructor(t, e) {
    super(t, e, new c([], (s) => s.unique));
  }
  items(t) {
    return this._data.asObservablePart((e) => e.filter((s) => t.includes(s.unique)));
  }
}
class _ {
  #e;
  #t;
  #s;
  #a;
  constructor(t, e) {
    this.#e = e.store, this.#s = e.newStoreItemMapper, this.#a = e.updateStoreItemMapper, new m(t, e.connectToStoreAlias, (s) => {
      this.#t = s, this.#t && this.#n();
    });
  }
  #n = () => {
    this.#t && (this.#t.addEventListener(n.TYPE, this.#r), this.#t.addEventListener(i.TYPE, this.#r), this.#t.addEventListener(r.TYPE, this.#i));
  };
  #r = (t) => {
    t.uniques.forEach((e) => {
      const s = this.#e.getItems([e]).length > 0, d = this.#t.getItems([e])[0];
      s && this.#a ? this.#e.updateItem(e, this.#a(d)) : this.#s && this.#e.append(this.#s(d));
    });
  };
  #i = (t) => {
    this.#e.removeItems(t.uniques);
  };
}
export {
  S as UmbDetailStoreBase,
  I as UmbItemStoreBase,
  n as UmbStoreAppendEvent,
  u as UmbStoreBase,
  _ as UmbStoreConnector,
  o as UmbStoreEvent,
  E as UmbStoreObjectBase,
  r as UmbStoreRemoveEvent,
  i as UmbStoreUpdateEvent
};
//# sourceMappingURL=index.js.map

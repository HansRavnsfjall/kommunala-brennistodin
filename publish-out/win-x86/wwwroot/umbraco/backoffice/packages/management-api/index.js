import { U as v } from "./server-event.context-token-BKQCa51O.js";
import { UmbControllerBase as d } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
import { UmbItemDataApiGetRequestController as m } from "@umbraco-cms/backoffice/entity-item";
class g extends d {
  #e;
  #t;
  #s;
  constructor(e, t) {
    super(e), this._dataCache = t.dataCache, this.#e = t.eventSources, this.#t = t.eventTypes ?? ["Updated", "Deleted"], this.consumeContext(v, (s) => {
      this.#s = s, this.#r();
    });
  }
  /**
   * Handles server events
   * @protected
   * @param {UmbManagementApiServerEventModel} event - The server event to handle
   * @memberof UmbManagementApiDetailDataCacheInvalidationManager
   */
  _onServerEvent(e) {
    this._dataCache.delete(e.key);
  }
  #r() {
    this.observe(
      this.#s?.byEventSourcesAndEventTypes(this.#e, this.#t),
      (e) => {
        e && this._onServerEvent(e);
      },
      "umbObserveServerEvents"
    );
  }
  destroy() {
    this._dataCache.clear();
  }
}
class b {
  #e = /* @__PURE__ */ new Map();
  /**
   * Checks if an entry exists in the cache
   * @param {string} id - The ID of the entry to check
   * @returns {boolean} - True if the entry exists, false otherwise
   * @memberof UmbManagementApiDetailDataCache
   */
  has(e) {
    return this.#e.has(e);
  }
  /**
   * Adds an entry to the cache
   * @param {string} id - The ID of the entry to add
   * @param {DetailDataModelType} data - The data to cache
   * @memberof UmbManagementApiDetailDataCache
   */
  set(e, t) {
    const s = {
      id: e,
      data: t,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.#e.set(e, s);
  }
  /**
   * Retrieves an entry from the cache
   * @param {string} id - The ID of the entry to retrieve
   * @returns {DetailDataModelType | undefined} - The cached entry or undefined if not found
   * @memberof UmbManagementApiDetailDataCache
   */
  get(e) {
    const t = this.#e.get(e);
    return t ? t.data : void 0;
  }
  /**
   * Retrieves all entries from the cache
   * @returns {Array<DetailDataModelType>} - An array of all cached entries
   * @memberof UmbManagementApiItemDataCache
   */
  getAll() {
    return Array.from(this.#e.values()).map((e) => e.data);
  }
  /**
   * Deletes an entry from the cache
   * @param {string} id - The ID of the entry to delete
   * @memberof UmbManagementApiDetailDataCache
   */
  delete(e) {
    this.#e.delete(e);
  }
  /**
   * Clears all entries from the cache
   * @memberof UmbManagementApiDetailDataCache
   */
  clear() {
    this.#e.clear();
  }
}
class y extends d {
  #e;
  #t;
  #s;
  #r;
  #i;
  #n;
  #h;
  #a = !1;
  constructor(e, t) {
    super(e), this.#s = t.create, this.#r = t.read, this.#i = t.update, this.#n = t.delete, this.#e = t.dataCache, this.#t = t.inflightRequestCache, this.consumeContext(v, (s) => {
      this.#h = s, this.#o();
    });
  }
  async create(e) {
    const { data: t, error: s } = await l(this, this.#s(e));
    return s ? { error: s } : this.read(t);
  }
  async read(e) {
    let t, s;
    const a = `read:${e}`;
    if (this.#a && this.#e.has(e))
      t = this.#e.get(e);
    else {
      const o = this.#t.has(a) ? this.#t.get(a)?.requestPromise : l(this, this.#r(e));
      if (!o)
        throw new Error(
          `Failed to create or retrieve 'read' request for ID: ${e} (cache key: ${a}). Aborting read.`
        );
      this.#t.set(a, o);
      try {
        const { data: n, error: r } = await o;
        this.#a && n && this.#e.set(e, n), t = n, s = r;
      } finally {
        this.#t.delete(a);
      }
    }
    return { data: t, error: s };
  }
  async update(e, t) {
    const { error: s } = await l(this, this.#i(e, t));
    return s ? { error: s } : this.read(e);
  }
  async delete(e) {
    const { error: t } = await l(this, this.#n(e));
    return this.#a && !t && this.#e.delete(e), { error: t };
  }
  #o() {
    this.observe(
      this.#h?.isConnected,
      (e) => {
        e !== void 0 && (this.#a = e, this.#a === !1 && this.#e.clear());
      },
      "umbObserveServerEventsConnection"
    );
  }
}
class S extends d {
  #e;
  #t;
  #s;
  #r = !1;
  constructor(e, t) {
    super(e), this.#s = t.getItems, this.#e = t.dataCache, this.getUniqueMethod = t.getUniqueMethod, this.consumeContext(v, (s) => {
      this.#t = s, this.#i();
    });
  }
  async getItems(e) {
    let t, s = [...e], a = [], h;
    if (this.#r && (a = e.filter((r) => this.#e.has(r)).map((r) => this.#e.get(r)).filter((r) => r !== void 0), s = e.filter((r) => !this.#e.has(r))), s.length > 0) {
      const n = new m(this, {
        api: (c) => this.#s(c.uniques),
        uniques: s
      }), { data: r, error: u } = await n.request();
      h = r ?? [], t = u, this.#r && h?.forEach((c) => this.#e.set(this.getUniqueMethod(c), c));
    }
    return { data: [...a, ...h ?? []], error: t };
  }
  #i() {
    this.observe(
      this.#t?.isConnected,
      (e) => {
        e !== void 0 && (this.#r = e, this.#r === !1 && this.#e.clear());
      },
      "umbObserveServerEventsConnection"
    );
  }
}
class I extends d {
  #e;
  #t;
  #s;
  constructor(e, t) {
    super(e), this._dataCache = t.dataCache, this.#e = t.eventSources, this.#t = t.eventTypes ?? ["Updated", "Deleted"], this.consumeContext(v, (s) => {
      this.#s = s, this.#r();
    });
  }
  /**
   * Handles server events
   * @protected
   * @param {UmbManagementApiServerEventModel} event - The server event to handle
   * @memberof UmbManagementApiItemDataCacheInvalidationManager
   */
  _onServerEvent(e) {
    this._dataCache.delete(e.key);
  }
  #r() {
    this.observe(
      this.#s?.byEventSourcesAndEventTypes(this.#e, this.#t),
      (e) => {
        e && this._onServerEvent(e);
      },
      "umbObserveServerEvents"
    );
  }
  destroy() {
    this._dataCache.clear();
  }
}
class M {
  #e = /* @__PURE__ */ new Map();
  /**
   * Checks if an entry exists in the cache
   * @param {string} id - The ID of the entry to check
   * @returns {boolean} - True if the entry exists, false otherwise
   * @memberof UmbManagementApiItemDataCache
   */
  has(e) {
    return this.#e.has(e);
  }
  /**
   * Adds an entry to the cache
   * @param {string} id - The ID of the entry to add
   * @param {ItemDataModelType} data - The data to cache
   * @memberof UmbManagementApiItemDataCache
   */
  set(e, t) {
    const s = {
      id: e,
      data: t,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.#e.set(e, s);
  }
  /**
   * Retrieves an entry from the cache
   * @param {string} id - The ID of the entry to retrieve
   * @returns {ItemDataModelType | undefined} - The cached entry or undefined if not found
   * @memberof UmbManagementApiItemDataCache
   */
  get(e) {
    const t = this.#e.get(e);
    return t ? t.data : void 0;
  }
  /**
   * Retrieves all entries from the cache
   * @returns {Array<ItemDataModelType>} - An array of all cached entries
   * @memberof UmbManagementApiItemDataCache
   */
  getAll() {
    return Array.from(this.#e.values()).map((e) => e.data);
  }
  /**
   * Deletes an entry from the cache
   * @param {string} id - The ID of the entry to delete
   * @memberof UmbManagementApiItemDataCache
   */
  delete(e) {
    this.#e.delete(e);
  }
  /**
   * Clears all entries from the cache
   * @memberof UmbManagementApiItemDataCache
   */
  clear() {
    this.#e.clear();
  }
}
class q {
  #e = /* @__PURE__ */ new Map();
  /**
   * Checks if an entry exists in the cache
   * @param {string} key - The ID of the entry to check
   * @returns {boolean} - True if the entry exists, false otherwise
   * @memberof UmbManagementApiInflightRequestCache
   */
  has(e) {
    return this.#e.has(e);
  }
  /**
   * Adds an entry to the cache
   * @param {string} key - A unique key representing the promise
   * @param {Promise<UmbApiResponse<RequestResolvedType<ResponseModelType>>>} promise - The promise to cache
   * @memberof UmbManagementApiInflightRequestCache
   */
  set(e, t) {
    this.#e.set(e, {
      key: e,
      requestPromise: t,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  /**
   * Retrieves an entry from the cache
   * @param {string} key - The ID of the entry to retrieve
   * @returns {Promise<RequestResolvedType<ResponseModelType>> | undefined} - The cached promise or undefined if not found
   * @memberof UmbManagementApiInflightRequestCache
   */
  get(e) {
    return this.#e.get(e);
  }
  /**
   * Deletes an entry from the cache
   * @param {string} key - The ID of the entry to delete
   * @memberof UmbManagementApiInflightRequestCache
   */
  delete(e) {
    this.#e.delete(e);
  }
  /**
   * Clears all entries from the cache
   * @memberof UmbManagementApiInflightRequestCache
   */
  clear() {
    this.#e.clear();
  }
}
export {
  v as UMB_MANAGEMENT_API_SERVER_EVENT_CONTEXT,
  b as UmbManagementApiDetailDataCache,
  g as UmbManagementApiDetailDataCacheInvalidationManager,
  y as UmbManagementApiDetailDataRequestManager,
  q as UmbManagementApiInFlightRequestCache,
  M as UmbManagementApiItemDataCache,
  I as UmbManagementApiItemDataCacheInvalidationManager,
  S as UmbManagementApiItemDataRequestManager
};
//# sourceMappingURL=index.js.map

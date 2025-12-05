import { UmbControllerBase as u } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApi as v, UmbExtensionApiInitializer as l } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as p } from "@umbraco-cms/backoffice/extension-registry";
import { of as b } from "@umbraco-cms/backoffice/external/rxjs";
import { tryExecute as g } from "@umbraco-cms/backoffice/resources";
import { UmbArrayState as d } from "@umbraco-cms/backoffice/observable-api";
import { UMB_ACTION_EVENT_CONTEXT as f } from "@umbraco-cms/backoffice/action";
import { UmbEntityUpdatedEvent as c } from "@umbraco-cms/backoffice/entity-action";
import { UmbDeprecation as m } from "@umbraco-cms/backoffice/utils";
const q = "Umb.ManagementApi";
class E extends u {
  #e = /* @__PURE__ */ new Map();
  async resolve(e, s) {
    if (!e)
      throw new Error("data source identifier is required");
    if (!s)
      throw new Error("data identifier is required");
    const t = this.#t(e, s);
    if (!t)
      return;
    if (this.#e.has(t.alias))
      return this.#e.get(t.alias);
    const i = await v(this, t);
    if (i) {
      if (!i.map)
        throw new Error("Data Mapping does not have a map method.");
      return this.#e.set(t.alias, i), i;
    }
  }
  #t(e, s) {
    const t = this.#r(e, s);
    if (t.length)
      return t.sort((i, r) => (r.weight || 0) - (i.weight || 0))[0];
  }
  #r(e, s) {
    return p.getByTypeAndFilter("dataSourceDataMapping", (i) => i.forDataSource === e && i.forDataModel === s);
  }
}
class U extends u {
  #e = new E(this);
  async map(e) {
    if (!e.forDataSource) {
      const t = "data source identifier is required";
      throw console.error(t), new Error(t);
    }
    if (!e.data) {
      const t = "data is required";
      throw console.error(t), new Error(t);
    }
    if (!e.forDataModel && !e.fallback) {
      const t = "forDataModel is missing and no fallback provided.";
      throw console.error(t), new Error(t);
    }
    if (!e.forDataModel && e.fallback)
      return e.fallback(e.data);
    const s = await this.#e.resolve(e.forDataSource, e.forDataModel);
    if (!s && !e.fallback) {
      const t = "Data mapping not found and no fallback provided.";
      throw console.error(t), new Error(t);
    }
    if (!s && e.fallback)
      return e.fallback(e.data);
    if (!s?.map) {
      const t = "Data mapping does not have a map method.";
      throw console.error(t), new Error(t);
    }
    return s.map(e.data);
  }
}
class T extends u {
  #e = new U(this);
  constructor(e) {
    super(e);
  }
  map(e) {
    return this.#e.map({
      ...e,
      forDataSource: q
    });
  }
}
class w extends u {
}
class A extends w {
  #e;
  #t;
  constructor(e, s, t) {
    if (super(e), !s) throw new Error("Detail source is missing");
    if (!t) throw new Error("Detail store context alias is missing");
    this.detailDataSource = new s(e), this.#e = this.consumeContext(t, (i) => {
      this.#t = i;
    }).asPromise({ preventTimeout: !0 }).catch(() => {
    });
  }
  /**
   * Creates a scaffold
   * @param {UmbDeepPartialObject<DetailModelType>} [preset]
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async createScaffold(e) {
    return this.detailDataSource.createScaffold(e);
  }
  /**
   * Requests the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async requestByUnique(e) {
    if (!e) throw new Error("Unique is missing");
    await this.#e;
    const { data: s, error: t } = await this.detailDataSource.read(e);
    return s && this.#t?.append(s), {
      data: s,
      error: t,
      asObservable: () => this.#t?.byUnique(e)
    };
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model
   * @param {string | null} [parentUnique]
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async create(e, s) {
    if (!e) throw new Error("Data is missing");
    await this.#e;
    const { data: t, error: i } = await this.detailDataSource.create(e, s);
    return t && this.#t?.append(t), { data: t, error: i };
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async save(e) {
    if (!e) throw new Error("Data is missing");
    if (!e.unique) throw new Error("Unique is missing");
    await this.#e;
    const { data: s, error: t } = await this.detailDataSource.update(e);
    return s && this.#t?.updateItem(e.unique, s), { data: s, error: t };
  }
  /**
   * Deletes the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    await this.#e;
    const { error: s } = await this.detailDataSource.delete(e);
    return s || this.#t?.removeItem(e), { error: s };
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async byUnique(e) {
    if (!e) throw new Error("Unique is missing");
    return await this.#e, this.#t.byUnique(e);
  }
  destroy() {
    this.#t = void 0, this.detailDataSource = void 0, super.destroy();
  }
}
class P extends w {
  #e;
  constructor(e, s, t) {
    super(e), this.#e = new s(e), this._init = this.consumeContext(t, (i) => {
      this._itemStore = i;
    }).asPromise({ preventTimeout: !0 }).catch(() => {
    });
  }
  /**
   * Requests the items for the given uniques
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbItemRepositoryBase
   */
  async requestItems(e) {
    if (!e) throw new Error("Uniques are missing");
    try {
      await this._init;
    } catch {
      return {
        asObservable: () => {
        }
      };
    }
    const { data: s, error: t } = await this.#e.getItems(e);
    return s && this._itemStore?.appendItems(s), { data: s, error: t, asObservable: () => this._itemStore?.items(e) };
  }
  /**
   * Returns a promise with an observable of the items for the given uniques
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbItemRepositoryBase
   */
  async items(e) {
    try {
      await this._init;
    } catch {
      return;
    }
    return this._itemStore ? this._itemStore.items(e) : b([]);
  }
}
class C extends u {
  #e;
  #t;
  /**
   * Creates an instance of UmbItemServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbItemServerDataSourceBase
   */
  constructor(e, s) {
    super(e), this.#e = s.getItems, this.#t = s.mapper;
  }
  /**
   * Fetches the items for the given uniques from the server
   * @param {Array<string>} uniques
   * @returns {*}
   * @memberof UmbItemServerDataSourceBase
   */
  async getItems(e) {
    if (!this.#e) throw new Error("getItems is not implemented");
    if (!e) throw new Error("Uniques are missing");
    const { data: s, error: t } = await g(this, this.#e(e));
    return { data: this._getMappedItems(s), error: t };
  }
  _getMappedItems(e) {
    if (e) {
      if (!this.#t) throw new Error("Mapper is not implemented");
      return e.map((s) => this.#t(s));
    }
  }
}
class k extends u {
  /**
   * Creates an instance of UmbRepositoryDetailsManager.
   * @param {UmbControllerHost} host - The host for the controller.
   * @param {string} repository - The alias of the repository to use.
   * @memberof UmbRepositoryDetailsManager
   */
  constructor(e, s) {
    super(e), this.#r = new d([], (t) => t), this.uniques = this.#r.asObservable(), this.#s = new d([], (t) => t.unique), this.entries = this.#s.asObservable(), this.#i = new d([], (t) => t.unique), this.statuses = this.#i.asObservable(), this.#o = (t) => {
      const i = t.getUnique(), r = this.getEntries();
      if (r.length === 0) return;
      const n = r.find((a) => a.unique === i);
      n && this.#a(n.unique);
    }, this.#s.sortBy((t, i) => {
      const r = this.getUniques(), n = r.indexOf(t.unique), a = r.indexOf(i.unique);
      return n - a;
    }), typeof s == "string" ? this.#e = new l(
      this,
      p,
      s,
      [this],
      (t, i) => {
        this.repository = t ? i.api : void 0;
      }
    ).asPromise() : (this.repository = s, this.#e = Promise.resolve()), this.observe(
      this.uniques,
      (t) => {
        const i = this.#s.getValue().filter((r) => !t.includes(r.unique)).map((r) => r.unique);
        this.#i.remove(i), this.#s.remove(i), i.forEach((r) => {
          this.removeUmbControllerByAlias("observeEntry_" + r);
        }), this.#n(t);
      },
      null
    ), this.consumeContext(f, (t) => {
      this.#t?.removeEventListener(
        c.TYPE,
        this.#o
      ), this.#t = t, this.#t?.addEventListener(
        c.TYPE,
        this.#o
      );
    });
  }
  #e;
  #t;
  // the init promise is used externally for recognizing when the manager is ready.
  get init() {
    return this.#e;
  }
  #r;
  #s;
  #i;
  /**
   * Clear the manager
   * @memberof UmbRepositoryDetailsManager
   */
  clear() {
    this.#r.setValue([]), this.#s.setValue([]), this.#i.setValue([]);
  }
  /**
   * Get the uniques in the manager
   * @returns {Array<string>} - The uniques in the manager.
   * @memberof UmbRepositoryDetailsManager
   */
  getUniques() {
    return this.#r.getValue();
  }
  /**
   * Set the uniques in the manager
   * @param {(string[] | undefined)} uniques
   * @memberof UmbRepositoryDetailsManager
   */
  setUniques(e) {
    this.#r.setValue(e ?? []);
  }
  /**
   * Add a unique to the manager
   * @param {string} unique
   * @memberof UmbRepositoryDetailsManager
   */
  addUnique(e) {
    this.#r.appendOne(e);
  }
  /**
   * Add an entry to the manager
   * @param {DetailType} data
   * @memberof UmbRepositoryDetailsManager
   */
  addEntry(e) {
    const s = e.unique;
    this.#s.appendOne(e), this.#r.appendOne(s), this.#i.appendOne({
      state: {
        type: "success"
      },
      unique: s
    });
  }
  /**
   * Get all entries in the manager
   * @returns {Array<DetailType>} - The entries in the manager.
   * @memberof UmbRepositoryDetailsManager
   */
  getEntries() {
    return this.#s.getValue();
  }
  /**
   * Get an entry observable by unique
   * @param {string} unique
   * @returns {Observable<DetailType | undefined>} - The entry observable.
   * @memberof UmbRepositoryDetailsManager
   */
  entryByUnique(e) {
    return this.#s.asObservablePart((s) => s.find((t) => t.unique === e));
  }
  async #n(e) {
    if (!e?.length) return;
    if (await this.#e, !this.repository) throw new Error("Repository is not initialized");
    e.filter((t) => !this.#i.getValue().find((r) => r.unique === t)).forEach((t) => {
      this.#h(t);
    });
  }
  async #a(e) {
    return await this.#h(e);
  }
  async #h(e) {
    if (await this.#e, !this.repository) throw new Error("Repository is not initialized");
    this.#i.appendOne({
      state: {
        type: "loading"
      },
      unique: e
    });
    const { data: s, error: t, asObservable: i } = await this.repository.requestByUnique(e);
    if (t && (this.#i.appendOne({
      state: {
        type: "error",
        error: "#general_notFound"
      },
      unique: e
    }), this.#s.removeOne(e), this.removeUmbControllerByAlias("observeEntry_" + e)), s) {
      if (!this.getUniques().includes(e)) {
        this.#i.removeOne(e);
        return;
      }
      this.#s.appendOne(s), this.#i.appendOne({
        state: {
          type: "success"
        },
        unique: e
      }), i && this.observe(
        i(),
        (n) => {
          n ? this.#s.updateOne(e, n) : this.#s.removeOne(e);
        },
        "observeEntry_" + e
      );
    }
  }
  #o;
  destroy() {
    this.#t?.removeEventListener(
      c.TYPE,
      this.#o
    ), super.destroy();
  }
}
const D = Symbol();
class L extends u {
  // TODO: Align with the other manager(details), and make a generic type/base for these. v.17.0 [NL]
  /**
   * Creates an instance of UmbRepositoryItemsManager.
   * @param {UmbControllerHost} host - The host for the controller.
   * @param {string} repositoryAlias - The alias of the repository to use.
   * @param {((entry: ItemType) => string | undefined)} [getUniqueMethod] - DEPRECATED since 15.3. Will be removed in v.17.0: A method to get the unique key from the item.
   * @memberof UmbRepositoryItemsManager
   */
  constructor(e, s, t) {
    super(e), this.#i = new d([], (i) => i), this.uniques = this.#i.asObservable(), this.#n = new d([], (i) => this.#e(i)), this.items = this.#n.asObservable(), this.#a = new d([], (i) => i.unique), this.statuses = this.#a.asObservable(), this.#u = (i) => {
      const r = i.getUnique(), n = this.getItems();
      if (n.length === 0) return;
      const a = n.find((o) => this.#e(o) === r);
      a && this.#o(a.unique);
    }, this.#e = t ? (i) => (new m({
      deprecated: "The getUniqueMethod parameter.",
      removeInVersion: "17.0.0",
      solution: "The required unique property on the item will be used instead."
    }).warn(), t(i)) : (i) => i.unique, this.#t = new l(
      this,
      p,
      s,
      [this],
      (i, r) => {
        this.repository = i ? r.api : void 0;
      }
    ).asPromise(), this.observe(
      this.uniques,
      (i) => {
        if (i.length === 0) {
          this.#n.setValue([]), this.#a.setValue([]);
          return;
        }
        const r = this.#a.getValue();
        if (i.length === r.length && i.every((n) => r.find((a) => a.unique === n))) {
          const n = this.#n.getValue();
          this.#n.setValue(this.#d(n)), this.#a.setValue(this.#c(r));
        } else
          this.#h();
      },
      null
    ), this.consumeContext(f, (i) => {
      this.#s?.removeEventListener(
        c.TYPE,
        this.#u
      ), this.#s = i, this.#s?.addEventListener(
        c.TYPE,
        this.#u
      );
    });
  }
  #e;
  #t;
  #r;
  #s;
  // the init promise is used externally for recognizing when the manager is ready.
  get init() {
    return this.#t;
  }
  #i;
  #n;
  #a;
  getUniques() {
    return this.#i.getValue();
  }
  setUniques(e) {
    this.#i.setValue(e ?? []);
  }
  getItems() {
    return this.#n.getValue();
  }
  itemByUnique(e) {
    return this.#n.asObservablePart((s) => s.find((t) => this.#e(t) === e));
  }
  /**
   * @deprecated - This is resolved by setUniques, no need to update statuses.
   * @param unique {string} - The unique identifier of the item to remove the status of.
   */
  removeStatus(e) {
    new m({
      removeInVersion: "18.0.0",
      deprecated: "removeStatus",
      solution: "Statuses are removed automatically when setting uniques"
    }).warn(), this.#a.filter((s) => s.unique !== e);
  }
  async getItemByUnique(e) {
    const s = this.observe(this.itemByUnique(e), () => {
    }, null), t = await s.asPromise();
    return s.destroy(), t;
  }
  async #h() {
    if (await this.#t, !this.repository) throw new Error("Repository is not initialized");
    const e = this.getUniques();
    this.#a.setValue(
      // No need to do sorting here as we just got the unique in the right order above.
      e.map((n) => ({
        state: {
          type: "loading"
        },
        unique: n
      }))
    );
    const s = this.repository.requestItems(e);
    this.#r = s;
    const { asObservable: t, data: i, error: r } = await s;
    if (this.#r === s) {
      if (r) {
        this.#a.replace(
          e.map((n) => ({
            state: {
              type: "error",
              error: "#general_error"
            },
            unique: n
          }))
        );
        return;
      }
      if (i) {
        const n = e.filter(
          (o) => !i.find((y) => this.#e(y) === o)
        ), a = e.filter((o) => !n.includes(o));
        this.#n.remove(n), this.#a.replace([
          ...n.map(
            (o) => ({
              state: {
                type: "error",
                error: "#general_notFound"
              },
              unique: o
            })
          ),
          ...a.map(
            (o) => ({
              state: {
                type: "success"
              },
              unique: o
            })
          )
        ]);
      }
      t && this.observe(
        t(),
        (n) => {
          this.#n.setValue(this.#d(n));
        },
        D
      );
    }
  }
  async #o(e) {
    if (await this.#t, !this.repository) throw new Error("Repository is not initialized");
    const { data: s, error: t } = await this.repository.requestItems([e]);
    if (t && this.#a.updateOne(e, {
      state: {
        type: "error",
        error: "#general_notFound"
      }
    }), s) {
      const i = this.getItems(), r = i.find((n) => this.#e(n) === e);
      if (r) {
        const n = i.indexOf(r), a = [...i];
        a[n] = s[0], this.#n.setValue(this.#d(a));
      }
    }
  }
  #d(e) {
    if (!e) return [];
    const s = this.getUniques();
    return [...e].sort((t, i) => {
      const r = s.indexOf(this.#e(t) ?? ""), n = s.indexOf(this.#e(i) ?? "");
      return r - n;
    });
  }
  /** Just needed for the deprecation implementation to work, do not bring this into 17.0 [NL] */
  #c(e) {
    if (!e) return [];
    const s = this.getUniques();
    return [...e].sort((t, i) => {
      const r = s.indexOf(t.unique ?? ""), n = s.indexOf(i.unique ?? "");
      return r - n;
    });
  }
  #u;
  destroy() {
    this.#s?.removeEventListener(
      c.TYPE,
      this.#u
    ), super.destroy();
  }
}
export {
  q as UMB_MANAGEMENT_API_DATA_SOURCE_ALIAS,
  U as UmbDataSourceDataMapper,
  E as UmbDataSourceDataMappingResolver,
  A as UmbDetailRepositoryBase,
  P as UmbItemRepositoryBase,
  C as UmbItemServerDataSourceBase,
  T as UmbManagementApiDataMapper,
  w as UmbRepositoryBase,
  k as UmbRepositoryDetailsManager,
  L as UmbRepositoryItemsManager
};
//# sourceMappingURL=index.js.map

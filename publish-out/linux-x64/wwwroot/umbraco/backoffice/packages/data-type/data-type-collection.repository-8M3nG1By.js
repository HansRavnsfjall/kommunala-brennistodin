import { f as p, x as c } from "./constants-DE93IEgK.js";
import { tryExecute as m } from "@umbraco-cms/backoffice/resources";
import { DataTypeService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { umbExtensionsRegistry as u } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class y {
  #e;
  #t = [];
  /**
   * Creates an instance of UmbDataTypeCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @DataTypeof UmbDataTypeCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e, u.byType("propertyEditorUi").subscribe((t) => {
      this.#t = t;
    }).unsubscribe();
  }
  /**
   * Gets the DataType collection filtered by the given filter.
   * @param {UmbDataTypeCollectionFilterModel} query
   * @returns {*}
   * @DataTypeof UmbDataTypeCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: t, error: r } = await m(this.#e, l.getFilterDataType({ query: e }));
    if (r)
      return { error: r };
    if (!t)
      return { data: { items: [], total: 0 } };
    const { items: s, total: o } = t;
    return { data: { items: s.map((i) => ({
      entityType: p,
      unique: i.id,
      name: i.name,
      propertyEditorSchemaAlias: i.editorAlias,
      propertyEditorUiAlias: i.editorUiAlias,
      icon: this.#t.find((n) => n.alias === i.editorUiAlias)?.meta.icon
    })), total: o } };
  }
}
class D extends d {
  #e;
  #t;
  #i;
  constructor(e) {
    super(e), this.#e = this.consumeContext(c, (t) => {
      t && (this.#t = t);
    }).asPromise({ preventTimeout: !0 }).catch(() => {
      this.#t = void 0;
    }), this.#i = new y(e);
  }
  async requestCollection(e) {
    await this.#e;
    const { data: t, error: r } = await this.#i.getCollection(e);
    t && this.#t.appendItems(t.items);
    const s = t?.items.map((o) => o.unique) ?? [];
    return { data: t, error: r, asObservable: () => this.#t.items(s) };
  }
}
export {
  D as UmbDataTypeCollectionRepository,
  D as default
};
//# sourceMappingURL=data-type-collection.repository-8M3nG1By.js.map

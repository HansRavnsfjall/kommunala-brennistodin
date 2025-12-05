import { e as s } from "./manifests-BfVrApfB.js";
import { DirectionModel as c, DocumentService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as p } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as y } from "@umbraco-cms/backoffice/repository";
class D {
  #e;
  constructor(a) {
    this.#e = a;
  }
  async getCollection(a) {
    if (!a.unique)
      throw new Error("Unique ID is required to fetch a collection.");
    const d = {
      dataTypeId: a.dataTypeId ?? "",
      orderBy: a.orderBy ?? "updateDate",
      orderCulture: a.orderCulture ?? "en-US",
      orderDirection: a.orderDirection === "asc" ? c.ASCENDING : c.DESCENDING,
      filter: a.filter,
      skip: a.skip || 0,
      take: a.take || 100
    }, { data: o, error: i } = await p(
      this.#e,
      l.getCollectionDocumentById({ path: { id: a.unique }, query: d })
    );
    return o ? { data: { items: o.items.map((t) => {
      const n = t.variants[0];
      return {
        ancestors: t.ancestors.map((e) => ({
          unique: e.id,
          entityType: s
        })),
        unique: t.id,
        entityType: s,
        contentTypeAlias: t.documentType.alias,
        createDate: t.variants.map((e) => new Date(e.createDate)).reduce((e, r) => r < e ? r : e),
        creator: t.creator,
        icon: t.documentType.icon,
        isProtected: t.isProtected,
        isTrashed: t.isTrashed,
        name: n.name,
        sortOrder: t.sortOrder,
        state: n.state,
        flags: n.flags,
        updateDate: t.variants.map((e) => new Date(e.updateDate)).reduce((e, r) => r > e ? r : e),
        updater: t.updater,
        values: t.values.map((e) => ({ alias: e.alias, value: e.value })),
        documentType: {
          unique: t.documentType.id,
          icon: t.documentType.icon,
          alias: t.documentType.alias
        },
        variants: t.variants.map((e) => ({
          name: e.name,
          culture: e.culture ?? null,
          state: e.state,
          flags: e.flags
        }))
      };
    }), total: o.total } } : { error: i };
  }
}
class E extends y {
  #e;
  constructor(a) {
    super(a), this.#e = new D(a);
  }
  async requestCollection(a) {
    return this.#e.getCollection(a);
  }
}
export {
  E as UmbDocumentCollectionRepository,
  E as default
};
//# sourceMappingURL=document-collection.repository-iiYObbaE.js.map

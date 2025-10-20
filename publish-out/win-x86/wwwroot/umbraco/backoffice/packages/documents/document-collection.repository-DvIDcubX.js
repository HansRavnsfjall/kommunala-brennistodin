import { e as n } from "./manifests-BP7S9LPy.js";
import { DirectionModel as s, DocumentService as d } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class y {
  #e;
  constructor(e) {
    this.#e = e;
  }
  async getCollection(e) {
    if (!e.unique)
      throw new Error("Unique ID is required to fetch a collection.");
    const u = {
      dataTypeId: e.dataTypeId ?? "",
      orderBy: e.orderBy ?? "updateDate",
      orderCulture: e.orderCulture ?? "en-US",
      orderDirection: e.orderDirection === "asc" ? s.ASCENDING : s.DESCENDING,
      filter: e.filter,
      skip: e.skip || 0,
      take: e.take || 100
    }, { data: o, error: i } = await l(
      this.#e,
      d.getCollectionDocumentById({ path: { id: e.unique }, query: u })
    );
    return o ? { data: { items: o.items.map((t) => {
      const a = t.variants[0];
      return {
        ancestors: t.ancestors.map((r) => ({
          unique: r.id,
          entityType: n
        })),
        unique: t.id,
        entityType: n,
        contentTypeAlias: t.documentType.alias,
        createDate: new Date(a.createDate),
        creator: t.creator,
        icon: t.documentType.icon,
        isProtected: t.isProtected,
        isTrashed: t.isTrashed,
        name: a.name,
        sortOrder: t.sortOrder,
        state: a.state,
        updateDate: new Date(a.updateDate),
        updater: t.updater,
        values: t.values.map((r) => ({ alias: r.alias, value: r.value })),
        documentType: {
          unique: t.documentType.id,
          icon: t.documentType.icon,
          alias: t.documentType.alias
        },
        variants: t.variants.map((r) => ({
          name: r.name,
          culture: r.culture ?? null,
          state: r.state
        }))
      };
    }), total: o.total } } : { error: i };
  }
}
class q extends p {
  #e;
  constructor(e) {
    super(e), this.#e = new y(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  q as UmbDocumentCollectionRepository,
  q as default
};
//# sourceMappingURL=document-collection.repository-DvIDcubX.js.map

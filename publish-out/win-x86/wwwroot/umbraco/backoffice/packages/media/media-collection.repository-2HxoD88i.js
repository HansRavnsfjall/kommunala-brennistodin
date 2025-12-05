import { o as d } from "./input-upload-field.element-DEgpG3Zz.js";
import { DirectionModel as n, MediaService as l } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class y {
  #e;
  constructor(e) {
    this.#e = e;
  }
  async getCollection(e) {
    const c = {
      id: e.unique ?? "",
      dataTypeId: e.dataTypeId,
      orderBy: e.orderBy ?? "updateDate",
      orderDirection: e.orderDirection === "asc" ? n.ASCENDING : n.DESCENDING,
      filter: e.filter,
      skip: e.skip ?? 0,
      take: e.take ?? 100
    }, { data: t, error: i } = await u(this.#e, l.getCollectionMedia({ query: c }));
    return t ? { data: { items: t.items.map((a) => {
      const r = a.variants[0];
      return {
        unique: a.id,
        entityType: d,
        contentTypeAlias: a.mediaType.alias,
        createDate: new Date(r.createDate),
        creator: a.creator,
        icon: a.mediaType.icon,
        name: r.name,
        sortOrder: a.sortOrder,
        updateDate: new Date(r.updateDate),
        updater: a.creator,
        // TODO: Check if the `updater` is available for media items. [LK]
        values: a.values.map((o) => ({ alias: o.alias, value: o.value })),
        flags: a.flags
      };
    }), total: t.total } } : { error: i };
  }
}
class g extends p {
  #e;
  constructor(e) {
    super(e), this.#e = new y(e);
  }
  async getDefaultConfiguration() {
    return {
      // TODO: The default Collection data-type ID (for the Media ListView) will come from the server soon.  [LK]
      defaultDataTypeId: "3a0156c4-3b8c-4803-bdc1-6871faa83fff"
    };
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  g as UmbMediaCollectionRepository,
  g as default
};
//# sourceMappingURL=media-collection.repository-2HxoD88i.js.map

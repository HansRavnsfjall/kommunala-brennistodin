import { m as d } from "./input-upload-field.element-BKvVffkE.js";
import { DirectionModel as n, MediaService as u } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as l } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
class y {
  #e;
  constructor(e) {
    this.#e = e;
  }
  async getCollection(e) {
    const s = {
      id: e.unique ?? "",
      dataTypeId: e.dataTypeId,
      orderBy: e.orderBy ?? "updateDate",
      orderDirection: e.orderDirection === "asc" ? n.ASCENDING : n.DESCENDING,
      filter: e.filter,
      skip: e.skip ?? 0,
      take: e.take ?? 100
    }, { data: a, error: i } = await l(this.#e, u.getCollectionMedia({ query: s }));
    return a ? { data: { items: a.items.map((t) => {
      const r = t.variants[0];
      return {
        unique: t.id,
        entityType: d,
        contentTypeAlias: t.mediaType.alias,
        createDate: new Date(r.createDate),
        creator: t.creator,
        icon: t.mediaType.icon,
        name: r.name,
        sortOrder: t.sortOrder,
        updateDate: new Date(r.updateDate),
        updater: t.creator,
        // TODO: Check if the `updater` is available for media items. [LK]
        values: t.values.map((o) => ({ alias: o.alias, value: o.value }))
      };
    }), total: a.total } } : { error: i };
  }
}
class E extends p {
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
  E as UmbMediaCollectionRepository,
  E as default
};
//# sourceMappingURL=media-collection.repository-BFW6AIs1.js.map

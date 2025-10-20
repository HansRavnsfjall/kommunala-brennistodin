import { UmbMediaTypeTreeRepository as i } from "./media-type-tree.repository-B2QordZN.js";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
import { UMB_ENTITY_CONTEXT as p } from "@umbraco-cms/backoffice/entity";
class T extends s {
  #e = new i(this);
  async requestCollection(e) {
    const t = await this.getContext(p);
    if (!t) throw new Error("Entity context not found");
    const o = t.getEntityType(), n = t.getUnique();
    if (!o) throw new Error("Entity type not found");
    if (n === void 0) throw new Error("Unique not found");
    const r = { entityType: o, unique: n };
    return r.unique === null ? this.#e.requestTreeRootItems({ skip: e.skip, take: e.take }) : this.#e.requestTreeItemsOf({ parent: r, skip: e.skip, take: e.take });
  }
}
export {
  T as UmbMediaTypeTreeItemChildrenCollectionRepository,
  T as api
};
//# sourceMappingURL=media-type-tree-item-children-collection.repository-BgRxpDt0.js.map

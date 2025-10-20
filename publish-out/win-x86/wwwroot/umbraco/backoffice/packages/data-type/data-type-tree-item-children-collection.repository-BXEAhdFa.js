import { UmbDataTypeTreeRepository as i } from "./data-type-tree.repository-siBRczJW.js";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
import { UMB_ENTITY_CONTEXT as p } from "@umbraco-cms/backoffice/entity";
class T extends s {
  #t = new i(this);
  async requestCollection(t) {
    const e = await this.getContext(p);
    if (!e) throw new Error("Entity context not found");
    const o = e.getEntityType(), n = e.getUnique();
    if (!o) throw new Error("Entity type not found");
    if (n === void 0) throw new Error("Unique not found");
    const r = { entityType: o, unique: n };
    return r.unique === null ? this.#t.requestTreeRootItems({ skip: t.skip, take: t.take }) : this.#t.requestTreeItemsOf({ parent: r, skip: t.skip, take: t.take });
  }
}
export {
  T as UmbDataTypeTreeItemChildrenCollectionRepository,
  T as api
};
//# sourceMappingURL=data-type-tree-item-children-collection.repository-BXEAhdFa.js.map

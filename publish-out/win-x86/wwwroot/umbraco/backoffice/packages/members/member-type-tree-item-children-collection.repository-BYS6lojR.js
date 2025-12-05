import { UmbMemberTypeTreeRepository as i } from "./member-type-tree.repository-BadDocg9.js";
import { UmbRepositoryBase as s } from "@umbraco-cms/backoffice/repository";
import { UMB_ENTITY_CONTEXT as p } from "@umbraco-cms/backoffice/entity";
class T extends s {
  #e = new i(this);
  async requestCollection(e) {
    const t = await this.getContext(p);
    if (!t) throw new Error("Entity context not found");
    const o = t.getEntityType(), r = t.getUnique();
    if (!o) throw new Error("Entity type not found");
    if (r === void 0) throw new Error("Unique not found");
    const n = { entityType: o, unique: r };
    return n.unique === null ? this.#e.requestTreeRootItems({ skip: e.skip, take: e.take }) : this.#e.requestTreeItemsOf({ parent: n, skip: e.skip, take: e.take });
  }
}
export {
  T as UmbMemberTypeTreeItemChildrenCollectionRepository,
  T as api
};
//# sourceMappingURL=member-type-tree-item-children-collection.repository-BYS6lojR.js.map

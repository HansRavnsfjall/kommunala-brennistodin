import { a as m } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import { m as s } from "./member-type-item.server.cache-D3Xsl_R0.js";
import { MemberTypeService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as n } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as p } from "@umbraco-cms/backoffice/repository";
import { o as c } from "./input-member-type.element-HvnUGYvy.js";
class M extends n {
  constructor(e) {
    super(e, {
      getItems: (r) => o.getItemMemberType({ query: { id: r } }),
      dataCache: s,
      getUniqueMethod: (r) => r.id
    });
  }
}
class u extends i {
  #e = new M(this);
  /**
   * Creates an instance of UmbMemberTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberTypeItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: T
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: r, error: a } = await this.#e.getItems(e);
    return { data: this._getMappedItems(r), error: a };
  }
}
const T = (t) => ({
  entityType: m,
  unique: t.id,
  name: t.name,
  icon: t.icon || ""
});
class U extends p {
  constructor(e) {
    super(e, u, c);
  }
}
export {
  U as UmbMemberTypeItemRepository,
  U as default
};
//# sourceMappingURL=member-type-item.repository-CcYM24i8.js.map

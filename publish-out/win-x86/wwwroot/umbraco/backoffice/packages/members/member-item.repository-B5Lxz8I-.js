import { f as m, p as n } from "./manifests-KIVuOqdB.js";
import { m as s } from "./member-item.server.cache-D3Xsl_R0.js";
import { MemberService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as i } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as u, UmbItemRepositoryBase as c } from "@umbraco-cms/backoffice/repository";
class p extends i {
  constructor(r) {
    super(r, {
      getItems: (t) => o.getItemMember({ query: { id: t } }),
      dataCache: s,
      getUniqueMethod: (t) => t.id
    });
  }
}
class M extends u {
  #e = new p(this);
  /**
   * Creates an instance of UmbMemberItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberItemServerDataSource
   */
  constructor(r) {
    super(r, {
      mapper: b
    });
  }
  async getItems(r) {
    if (!r) throw new Error("Uniques are missing");
    const { data: t, error: a } = await this.#e.getItems(r);
    return { data: this._getMappedItems(t), error: a };
  }
}
const b = (e) => ({
  entityType: m,
  unique: e.id,
  name: e.variants[0].name || "",
  kind: e.kind,
  memberType: {
    unique: e.memberType.id,
    icon: e.memberType.icon,
    collection: e.memberType.collection ? { unique: e.memberType.collection.id } : null
  },
  variants: e.variants.map((r) => ({
    name: r.name,
    culture: r.culture || null
  }))
});
class y extends c {
  constructor(r) {
    super(r, M, n);
  }
}
export {
  y as UmbMemberItemRepository,
  y as default
};
//# sourceMappingURL=member-item.repository-B5Lxz8I-.js.map

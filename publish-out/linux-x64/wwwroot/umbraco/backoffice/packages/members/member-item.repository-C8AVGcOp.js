import { f as o, p as s } from "./manifests-DHyiWGyY.js";
import { UmbItemServerDataSourceBase as i, UmbItemRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
import { MemberService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as p } from "@umbraco-cms/backoffice/entity-item";
class l extends i {
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
    const t = new p(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (n) => c.getItemMember({ query: { id: n.uniques } }),
      uniques: r
    }), { data: a, error: m } = await t.request();
    return { data: this._getMappedItems(a), error: m };
  }
}
const b = (e) => ({
  entityType: o,
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
class E extends u {
  constructor(r) {
    super(r, l, s);
  }
}
export {
  E as UmbMemberItemRepository,
  E as default
};
//# sourceMappingURL=member-item.repository-C8AVGcOp.js.map

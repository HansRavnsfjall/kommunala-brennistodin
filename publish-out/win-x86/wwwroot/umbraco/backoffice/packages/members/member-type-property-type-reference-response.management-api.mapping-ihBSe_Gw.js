import { g as m } from "./input-member-type.element-Tx7SxrMW.js";
import { UmbControllerBase as n } from "@umbraco-cms/backoffice/class-api";
class T extends n {
  async map(e) {
    return {
      alias: e.alias,
      memberType: {
        alias: e.memberType.alias,
        icon: e.memberType.icon,
        name: e.memberType.name,
        unique: e.memberType.id
      },
      entityType: m,
      name: e.name,
      unique: e.id
    };
  }
}
export {
  T as UmbMemberTypePropertyTypeReferenceResponseManagementApiDataMapping,
  T as api
};
//# sourceMappingURL=member-type-property-type-reference-response.management-api.mapping-ihBSe_Gw.js.map

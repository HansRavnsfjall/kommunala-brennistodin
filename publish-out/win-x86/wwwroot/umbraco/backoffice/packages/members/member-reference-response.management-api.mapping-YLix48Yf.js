import { f as m } from "./manifests-KIVuOqdB.js";
import { UmbControllerBase as n } from "@umbraco-cms/backoffice/class-api";
class a extends n {
  async map(e) {
    return {
      entityType: m,
      memberType: {
        alias: e.memberType.alias,
        icon: e.memberType.icon,
        name: e.memberType.name,
        unique: e.memberType.id
      },
      name: e.name,
      // TODO: this is a hardcoded array until the server can return the correct variants array
      variants: [
        {
          culture: null,
          name: e.name ?? ""
        }
      ],
      unique: e.id
    };
  }
}
export {
  a as UmbMemberReferenceResponseManagementApiDataMapping,
  a as api
};
//# sourceMappingURL=member-reference-response.management-api.mapping-YLix48Yf.js.map

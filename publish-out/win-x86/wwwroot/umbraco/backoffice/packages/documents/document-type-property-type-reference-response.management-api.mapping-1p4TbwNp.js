import { a as n } from "./constants-rt5n84j4.js";
import { UmbControllerBase as m } from "@umbraco-cms/backoffice/class-api";
class T extends m {
  async map(e) {
    return {
      alias: e.alias,
      documentType: {
        alias: e.documentType.alias,
        icon: e.documentType.icon,
        name: e.documentType.name,
        unique: e.documentType.id
      },
      entityType: n,
      name: e.name,
      unique: e.id
    };
  }
}
export {
  T as UmbDocumentTypePropertyTypeReferenceResponseManagementApiDataMapping,
  T as api
};
//# sourceMappingURL=document-type-property-type-reference-response.management-api.mapping-1p4TbwNp.js.map

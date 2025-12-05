import { UmbControllerBase as r } from "@umbraco-cms/backoffice/class-api";
class n extends r {
  async map(e) {
    return {
      $type: "DocumentPropertyValuePermissionPresentationModel",
      documentType: {
        id: e.documentType.unique
      },
      propertyType: {
        id: e.propertyType.unique
      },
      verbs: e.verbs
    };
  }
}
export {
  n as UmbDocumentPropertyValueUserPermissionToManagementApiDataMapping,
  n as api
};
//# sourceMappingURL=to-server.management-api.mapping-Cv7DOLAt.js.map

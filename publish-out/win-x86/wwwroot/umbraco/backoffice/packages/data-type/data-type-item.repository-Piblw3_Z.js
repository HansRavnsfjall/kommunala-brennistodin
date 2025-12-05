import { f as i, y as o } from "./constants-mZOozcI2.js";
import { d as m } from "./data-type-item.server.cache-B54GZFBu.js";
import { DataTypeService as p } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbManagementApiItemDataRequestManager as n } from "@umbraco-cms/backoffice/management-api";
import { UmbItemServerDataSourceBase as c, UmbItemRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
import { umbExtensionsRegistry as u } from "@umbraco-cms/backoffice/extension-registry";
class y extends n {
  constructor(e) {
    super(e, {
      getItems: (a) => p.getItemDataType({ query: { id: a } }),
      dataCache: m,
      getUniqueMethod: (a) => a.id
    });
  }
}
let r = [];
class T extends c {
  #e = new y(this);
  /**
   * Creates an instance of UmbDataTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: U
    }), u.byType("propertyEditorUi").subscribe((a) => {
      r = a;
    }).unsubscribe();
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const { data: a, error: s } = await this.#e.getItems(e);
    return { data: this._getMappedItems(a), error: s };
  }
}
const U = (t) => ({
  entityType: i,
  unique: t.id,
  name: t.name,
  propertyEditorSchemaAlias: t.editorAlias,
  propertyEditorUiAlias: t.editorUiAlias || "",
  // TODO: why can this be undefined or null on the server?
  icon: r.find((e) => e.alias === t.editorUiAlias)?.meta.icon
});
class f extends d {
  constructor(e) {
    super(e, T, o);
  }
}
export {
  f as UmbDataTypeItemRepository,
  f as api
};
//# sourceMappingURL=data-type-item.repository-Piblw3_Z.js.map

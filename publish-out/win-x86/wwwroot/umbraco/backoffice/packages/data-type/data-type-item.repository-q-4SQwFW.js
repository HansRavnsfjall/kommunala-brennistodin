import { f as p, x as m } from "./constants-DE93IEgK.js";
import { UmbItemServerDataSourceBase as n, UmbItemRepositoryBase as u } from "@umbraco-cms/backoffice/repository";
import { DataTypeService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { umbExtensionsRegistry as y } from "@umbraco-cms/backoffice/extension-registry";
import { UmbItemDataApiGetRequestController as T } from "@umbraco-cms/backoffice/entity-item";
let a = [];
class d extends n {
  /**
   * Creates an instance of UmbDataTypeItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDataTypeItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: E
    }), y.byType("propertyEditorUi").subscribe((r) => {
      a = r;
    }).unsubscribe();
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const r = new T(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (o) => c.getItemDataType({ query: { id: o.uniques } }),
      uniques: e
    }), { data: s, error: i } = await r.request();
    return { data: this._getMappedItems(s), error: i };
  }
}
const E = (t) => ({
  entityType: p,
  unique: t.id,
  name: t.name,
  propertyEditorSchemaAlias: t.editorAlias,
  propertyEditorUiAlias: t.editorUiAlias || "",
  // TODO: why can this be undefined or null on the server?
  icon: a.find((e) => e.alias === t.editorUiAlias)?.meta.icon
});
class _ extends u {
  constructor(e) {
    super(e, d, m);
  }
}
export {
  _ as UmbDataTypeItemRepository,
  _ as api
};
//# sourceMappingURL=data-type-item.repository-q-4SQwFW.js.map

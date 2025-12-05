import { UmbItemServerDataSourceBase as m, UmbItemRepositoryBase as n } from "@umbraco-cms/backoffice/repository";
import { WebhookService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbItemDataApiGetRequestController as u } from "@umbraco-cms/backoffice/entity-item";
import { i as p } from "./paths-CYf6P2Vl.js";
class c extends m {
  /**
   * Creates an instance of UmbWebhookItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: b
    });
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const r = new u(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (a) => i.getItemWebhook({ query: { id: a.uniques } }),
      uniques: e
    }), { data: o, error: s } = await r.request();
    return { data: this._getMappedItems(o), error: s };
  }
}
const b = (t) => ({
  unique: t.name,
  name: t.name
});
class f extends n {
  constructor(e) {
    super(e, c, p);
  }
}
export {
  f as UmbWebhookItemRepository,
  f as default
};
//# sourceMappingURL=webhook-item.repository-BgnbzzMu.js.map

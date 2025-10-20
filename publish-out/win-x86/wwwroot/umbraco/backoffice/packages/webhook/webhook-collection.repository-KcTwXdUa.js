import { t as n } from "./paths-CYf6P2Vl.js";
import { WebhookService as c } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as l } from "@umbraco-cms/backoffice/repository";
class i {
  #e;
  /**
   * Creates an instance of UmbWebhookCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Gets the Webhook collection filtered by the given filter.
   * @param {UmbWebhookCollectionFilterModel} filter
   * @param _filter
   * @returns {*}
   * @memberof UmbWebhookCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: t, error: r } = await a(this.#e, c.getWebhook({ query: e }));
    return r || !t ? { error: r } : { data: { items: t.items.map((o) => ({
      entityType: n,
      unique: o.id,
      url: o.url,
      name: o.name,
      description: o.description,
      enabled: o.enabled,
      headers: o.headers,
      events: o.events,
      contentTypes: o.contentTypeKeys
    })), total: t.total } };
  }
}
class b extends l {
  #e;
  constructor(e) {
    super(e), this.#e = new i(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  b as UmbWebhookCollectionRepository,
  b as default
};
//# sourceMappingURL=webhook-collection.repository-KcTwXdUa.js.map

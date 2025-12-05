import { v as a } from "./paths-CYf6P2Vl.js";
import { WebhookService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as l } from "@umbraco-cms/backoffice/repository";
class u {
  #e;
  /**
   * Creates an instance of UmbWebhookDeliveryCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookDeliveryCollectionServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Gets the Webhook delivery collection filtered by the given filter.
   * @param {UmbWebhookDeliveryCollectionFilterModel} filter
   * @param filter
   * @returns {*}
   * @memberof UmbWebhookDeliveryCollectionServerDataSource
   */
  async getCollection(e) {
    const { data: o, error: r } = await i(
      this.#e,
      n.getWebhookByIdLogs({
        path: { id: e.webhook.unique },
        query: { skip: e.skip, take: e.take }
      })
    );
    return r || !o ? { error: r } : { data: { items: o.items.map((t) => ({
      entityType: a,
      unique: t.key,
      date: t.date,
      url: t.url,
      eventAlias: t.eventAlias,
      retryCount: t.retryCount,
      statusCode: t.statusCode
    })), total: o.total } };
  }
}
class k extends l {
  #e;
  constructor(e) {
    super(e), this.#e = new u(e);
  }
  async requestCollection(e) {
    return this.#e.getCollection(e);
  }
}
export {
  k as UmbWebhookDeliveryCollectionRepository,
  k as default
};
//# sourceMappingURL=webhook-delivery-collection.repository-ChspdiFd.js.map

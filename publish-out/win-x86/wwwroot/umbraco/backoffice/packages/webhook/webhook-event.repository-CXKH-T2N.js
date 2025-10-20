import { WebhookService as a } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UMB_WEBHOOK_EVENT_STORE_CONTEXT as n } from "./webhook-event.store-Ckvt3DzU.js";
import { UmbRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class c {
  #t;
  /**
   * Creates an instance of UmbWebhookEventServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookEventServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  async getAll() {
    const { data: t, error: e } = await i(this.#t, a.getWebhookEvents());
    if (e || !t)
      return { error: e };
    const s = t.items.map((r) => ({
      eventName: r.eventName,
      eventType: r.eventType,
      alias: r.alias
    }));
    return {
      data: {
        items: s,
        total: s.length
      }
    };
  }
}
class v extends m {
  #t;
  #e;
  #r;
  constructor(t) {
    super(t), this.#r = new c(t), this.#t = this.consumeContext(n, (e) => {
      e && (this.#e = e);
    }).asPromise({ preventTimeout: !0 }).catch(() => {
    });
  }
  async requestEvents() {
    await this.#t;
    const { data: t, error: e } = await this.#r.getAll();
    return this.#e ? (t && this.#e.appendItems(t.items), { data: t, error: e, asObservable: () => this.#e.all() }) : {};
  }
}
export {
  v as UmbWebhookEventRepository,
  v as default
};
//# sourceMappingURL=webhook-event.repository-CXKH-T2N.js.map

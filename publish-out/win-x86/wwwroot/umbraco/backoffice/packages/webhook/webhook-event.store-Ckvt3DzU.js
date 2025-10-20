import { UmbContextToken as e } from "@umbraco-cms/backoffice/context-api";
import { UmbStoreBase as r } from "@umbraco-cms/backoffice/store";
import { UmbArrayState as m } from "@umbraco-cms/backoffice/observable-api";
class S extends r {
  /**
   * Creates an instance of UmbWebhookEventStore.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookEventStore
   */
  constructor(o) {
    super(
      o,
      n.toString(),
      new m([], (t) => t.alias)
    );
  }
}
const n = new e("UmbWebhookEventStore");
export {
  n as UMB_WEBHOOK_EVENT_STORE_CONTEXT,
  S as UmbWebhookEventStore,
  S as default
};
//# sourceMappingURL=webhook-event.store-Ckvt3DzU.js.map

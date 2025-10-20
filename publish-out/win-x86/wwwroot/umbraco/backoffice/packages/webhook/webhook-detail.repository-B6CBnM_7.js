import { t as i, l as c } from "./paths-CYf6P2Vl.js";
import { UmbId as d } from "@umbraco-cms/backoffice/id";
import { WebhookService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { UmbDeprecation as p } from "@umbraco-cms/backoffice/utils";
import { UmbDetailRepositoryBase as h } from "@umbraco-cms/backoffice/repository";
class y {
  #e;
  /**
   * Creates an instance of UmbWebhookDetailServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbWebhookDetailServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Webhook scaffold
   * @param {Partial<UmbWebhookDetailModel>} [preset]
   * @returns { CreateWebhookRequestModel }
   * @memberof UmbWebhookDetailServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: i,
      unique: d.new(),
      headers: {},
      events: [],
      enabled: !0,
      url: "",
      name: "",
      description: "",
      contentTypes: [],
      ...e
    } };
  }
  /**
   * Fetches a Webhook with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbWebhookDetailServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: r } = await a(this.#e, s.getWebhookById({ path: { id: e } }));
    return r || !t ? { error: r } : { data: {
      entityType: i,
      unique: t.id,
      headers: t.headers,
      events: t.events,
      enabled: t.enabled,
      url: t.url,
      name: t.name,
      description: t.description,
      contentTypes: t.contentTypeKeys
    } };
  }
  /**
   * Inserts a new Webhook on the server
   * @param {UmbWebhookDetailModel} model
   * @returns {*}
   * @memberof UmbWebhookDetailServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Webhook is missing");
    const t = {
      id: e.unique,
      headers: e.headers,
      events: e.events.map((u) => u.alias),
      enabled: e.enabled,
      url: e.url,
      name: e.name,
      description: e.description,
      contentTypeKeys: e.contentTypes
    }, { data: r, error: n } = await a(
      this.#e,
      s.postWebhook({
        body: t
      })
    );
    return r ? this.read(r) : { error: n };
  }
  /**
   * Updates a Webhook on the server
   * @param {UmbWebhookDetailModel} Webhook
   * @param model
   * @returns {*}
   * @memberof UmbWebhookDetailServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const t = {
      headers: e.headers,
      events: e.events.map((n) => n.alias),
      enabled: e.enabled,
      url: e.url,
      name: e.name,
      description: e.description,
      contentTypeKeys: e.contentTypes
    }, { error: r } = await a(
      this.#e,
      s.putWebhookById({
        path: { id: e.unique },
        body: t
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a Webhook on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbWebhookDetailServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return a(
      this.#e,
      s.deleteWebhookById({
        path: { id: e }
      })
    );
  }
}
class v extends h {
  constructor(e) {
    super(e, y, c);
  }
  async create(e) {
    return super.create(e, null);
  }
  /**
   * @deprecated - Use the event UmbWebhookEventRepository instead.
   * Gets a list of hardcoded events
   * @returns {Promise<{ data: { items: string[]; total: number }; error: any }>} - Hardcoded events
   */
  async requestEvents() {
    new p({
      deprecated: "The requestEvents method on the UmbWebhookDetailRepository is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the requestEvents method on UmbWebhookEventRepository instead."
    }).warn();
    const e = ["Content Deleted", "Content Published", "Content Unpublished", "Media Deleted", "Media Saved"], t = {
      data: { items: e, total: e.length },
      error: null
    };
    return new Promise((r) => {
      setTimeout(() => r(t), 10);
    });
  }
}
export {
  v as UmbWebhookDetailRepository,
  v as default
};
//# sourceMappingURL=webhook-detail.repository-B6CBnM_7.js.map

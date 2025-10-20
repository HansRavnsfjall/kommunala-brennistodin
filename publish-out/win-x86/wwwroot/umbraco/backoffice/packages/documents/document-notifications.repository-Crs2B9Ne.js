import { DocumentService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as e } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as c } from "@umbraco-cms/backoffice/class-api";
import { UMB_NOTIFICATION_CONTEXT as m } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as f } from "@umbraco-cms/backoffice/localization-api";
class h {
  #t;
  /**
   * Creates an instance of UmbDocumentNotificationsServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentNotificationsServerDataSource
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * Fetches the Culture and Hostnames for the given Document unique
   * @param {string} unique - The unique identifier of the Document
   * @memberof UmbDocumentNotificationsServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    return e(this.#t, s.getDocumentByIdNotifications({ path: { id: t } }));
  }
  /**
   * Updates Culture and Hostnames for the given Document unique
   * @param {string} unique - The unique identifier of the Document
   * @param {UpdateDocumentNotificationsRequestModel} data - The data to update
   * @memberof UmbDocumentNotificationsServerDataSource
   */
  async update(t, i) {
    if (!t) throw new Error("Unique is missing");
    return e(this.#t, s.putDocumentByIdNotifications({ path: { id: t }, body: i }));
  }
}
class y extends c {
  #t = new h(this);
  #i;
  #o = new f(this);
  constructor(t) {
    super(t), this.consumeContext(m, (i) => {
      this.#i = i;
    });
  }
  async readNotifications(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: i, error: o } = await this.#t.read(t);
    return o ? { error: o } : { data: i };
  }
  async updateNotifications(t, i, o) {
    if (!t) throw new Error("Unique is missing");
    if (!o) throw new Error("Data is missing");
    const { error: r } = await this.#t.update(t, o);
    if (!r) {
      const a = {
        data: { message: this.#o.term("notifications_notificationsSavedFor", i) }
      };
      this.#i?.peek("positive", a);
    }
    return { error: r };
  }
}
export {
  y as UmbDocumentNotificationsRepository,
  y as api
};
//# sourceMappingURL=document-notifications.repository-Crs2B9Ne.js.map

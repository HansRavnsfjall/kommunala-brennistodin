import { UmbControllerBase as n, UmbContextBase as h } from "@umbraco-cms/backoffice/class-api";
import { RuntimeLevelModel as r, ServerService as o } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbBooleanState as s, UmbNumberState as l } from "@umbraco-cms/backoffice/observable-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbContextToken as c } from "@umbraco-cms/backoffice/context-api";
class d extends n {
  constructor(t, e) {
    super(t), this.#t = r.UNKNOWN, this.#e = new s(!1), this.isConnected = this.#e.asObservable(), this.#r = new l(void 0), this.versionCheckPeriod = this.#r.asObservable(), this.#o = new s(!1), this.allowLocalLogin = this.#o.asObservable(), this.#i = new s(!1), this.allowPasswordReset = this.#i.asObservable(), this.#s = e;
  }
  #s;
  #t;
  #e;
  #r;
  #o;
  #i;
  /**
   * Connects to the server.
   * @memberof UmbServerConnection
   */
  async connect() {
    return await this.#a(), await this.#n(), this;
  }
  /**
   * Gets the URL of the server.
   * @returns {*}
   * @memberof UmbServerConnection
   */
  getUrl() {
    return this.#s;
  }
  /**
   * Gets the status of the server.
   * @returns {string}
   * @memberof UmbServerConnection
   */
  getStatus() {
    if (!this.getIsConnected()) throw new Error("Server is not connected. Remember to await connect()");
    return this.#t;
  }
  /**
   * Checks if the server is connected.
   * @returns {boolean}
   * @memberof UmbServerConnection
   */
  getIsConnected() {
    return this.#e.getValue();
  }
  async #a() {
    const { data: t, error: e } = await i(this._host, o.getServerStatus(), {
      disableNotifications: !0
    });
    if (e)
      throw e;
    this.#e.setValue(!0), this.#t = t?.serverStatus ?? r.UNKNOWN;
  }
  async #n() {
    const { data: t, error: e } = await i(this._host, o.getServerConfiguration(), {
      disableNotifications: !0
    });
    if (e)
      throw e;
    this.#r.setValue(t?.versionCheckPeriod), this.#o.setValue(t?.allowLocalLogin ?? !1), this.#i.setValue(t?.allowPasswordReset ?? !1);
  }
}
const u = new c("UmbServerContext");
class C extends h {
  #s;
  #t;
  #e;
  constructor(t, e) {
    super(t, u.toString()), this.#s = e.serverUrl, this.#t = e.backofficePath, this.#e = e.serverConnection;
  }
  getBackofficePath() {
    return this.#t;
  }
  getServerUrl() {
    return this.#s;
  }
  getServerConnection() {
    return this.#e;
  }
}
export {
  u as UMB_SERVER_CONTEXT,
  d as UmbServerConnection,
  C as UmbServerContext
};
//# sourceMappingURL=index.js.map

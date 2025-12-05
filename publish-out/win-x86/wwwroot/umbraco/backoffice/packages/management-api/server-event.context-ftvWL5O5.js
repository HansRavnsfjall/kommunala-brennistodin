import { U as r } from "./server-event.context-token-BKQCa51O.js";
import { UmbContextBase as h } from "@umbraco-cms/backoffice/class-api";
import { UMB_AUTH_CONTEXT as a } from "@umbraco-cms/backoffice/auth";
import { HubConnectionBuilder as c } from "@umbraco-cms/backoffice/external/signalr";
import { UMB_SERVER_CONTEXT as u } from "@umbraco-cms/backoffice/server";
import { Subject as v, filter as n } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbBooleanState as l } from "@umbraco-cms/backoffice/observable-api";
class U extends h {
  constructor(t) {
    super(t, r), this.#s = new v(), this.events = this.#s.asObservable(), this.#t = new l(void 0), this.isConnected = this.#t.asObservable(), this.consumeContext(a, (e) => {
      this.#n = e, this.#o();
    }), this.consumeContext(u, (e) => {
      this.#i = e;
    });
  }
  #e;
  #n;
  #i;
  #s;
  #t;
  /**
   * Filters events by the given event types
   * @param {string} eventTypes - The event types to filter by
   * @returns {Observable<UmbManagementApiServerEventModel>} - The filtered events
   * @memberof UmbManagementApiServerEventContext
   */
  byEventSource(t) {
    return this.#s.asObservable().pipe(n((e) => e.eventType === t));
  }
  /**
   * Filters events by the given event sources and event types
   * @param {Array<string>} eventSources - The event sources to filter by
   * @param {Array<string>} eventTypes - The event types to filter by
   * @returns {Observable<UmbManagementApiServerEventModel>} - The filtered events
   * @memberof UmbManagementApiServerEventContext
   */
  byEventSourcesAndEventTypes(t, e) {
    return this.#s.asObservable().pipe(n((s) => t.includes(s.eventSource) && e.includes(s.eventType)));
  }
  #o() {
    this.observe(this.#n?.isAuthorized, async (t) => {
      if (t !== void 0)
        if (t) {
          const e = await this.#n?.getLatestToken();
          if (e)
            this.#r(e);
          else
            throw new Error("No auth token found");
        } else
          this.#t.setValue(!1), this.#e?.stop(), this.#e = void 0;
    });
  }
  #r(t) {
    const e = this.#i?.getServerUrl();
    if (!e)
      throw new Error("Server URL is not defined in the server context");
    const s = `${e}/umbraco/serverEventHub`;
    this.#e = new c().withUrl(s, {
      accessTokenFactory: () => t
    }).build(), this.#e.on("notify", (i) => {
      const o = {
        ...i,
        clientTimestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      this.#s.next(o);
    }), this.#e.start().then(() => this.#t.setValue(!0)).catch(() => this.#t.setValue(!1)), this.#e.onclose(() => this.#t.setValue(!1));
  }
}
export {
  U as UmbManagementApiServerEventContext,
  U as api
};
//# sourceMappingURL=server-event.context-ftvWL5O5.js.map

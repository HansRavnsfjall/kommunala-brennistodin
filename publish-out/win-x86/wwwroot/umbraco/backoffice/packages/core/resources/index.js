import { EventMessageTypeModel as d } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as E } from "@umbraco-cms/backoffice/class-api";
import { UMB_AUTH_CONTEXT as b } from "@umbraco-cms/backoffice/auth";
import { e as W, u as Y } from "../extractUmbColorVariable.function-C_Z99zyW.js";
import { UmbDeprecation as C } from "@umbraco-cms/backoffice/utils";
import { umbHttpClient as w } from "@umbraco-cms/backoffice/http-client";
function _(s) {
  switch (s) {
    case d.ERROR:
      return "danger";
    case d.WARNING:
      return "warning";
    case d.INFO:
    case d.DEFAULT:
      return "default";
    case d.SUCCESS:
      return "positive";
    default:
      return "";
  }
}
function x(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const e = s;
  return typeof e.category == "string" && typeof e.message == "string" && typeof e.type == "string" && Object.values(d).includes(e.type);
}
function T(s) {
  return s.every(x);
}
const j = "umb-notifications";
function I(s) {
  return typeof s == "object" && s !== null && "body" in s && "status" in s && "request" in s;
}
function S(s) {
  return s instanceof Error && (s.name === "CancelError" || s.message === "Request aborted");
}
function A(s) {
  return typeof s.cancel == "function";
}
function m(s) {
  return typeof s == "object" && s !== null && "type" in s && "title" in s && "status" in s && (typeof s.detail > "u" || typeof s.detail == "string") && (typeof s.instance > "u" || typeof s.instance == "string") && (typeof s.operationStatus > "u" || typeof s.operationStatus == "string") && (typeof s.errors > "u" || typeof s.errors == "object");
}
const N = 3;
class J extends E {
  /**
   * Store pending requests that received a 401 response and are waiting for re-authentication.
   * This is used to retry the requests after re-authentication.
   */
  #e = [];
  /**
   * Store non-GET requests that received a 401 response.
   * This is used to notify the user about actions that could not be completed due to session expiration.
   * These requests will not be retried, as they are not idempotent.
   * Instead, we will notify the user about these requests after re-authentication.
   */
  #t = [];
  /**
   * Binds the default interceptors to the client.
   * This includes the auth response interceptor, the error interceptor and the umb-notifications interceptor.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   */
  bindDefaultInterceptors(e) {
    this.handleUnauthorizedAuthRetry(), this.addAuthResponseInterceptor(e), this.addForbiddenResponseInterceptor(e), this.addUmbGeneratedResourceInterceptor(e), this.addUmbNotificationsInterceptor(e), this.addErrorInterceptor(e);
  }
  /**
   * Interceptor which checks responses for 401 errors and lets the UmbAuthContext know the user is timed out.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addAuthResponseInterceptor(e) {
    e.interceptors.response.use(async (t, r, i) => {
      if (t.status !== 401) return t;
      const n = {
        status: t.status,
        title: t.statusText || "Unauthorized request, waiting for re-authentication.",
        detail: void 0,
        errors: void 0,
        type: "Unauthorized",
        stack: void 0
      }, o = this.#s(n, t), a = await this.getContext(b, { preventTimeout: !0 });
      if (!a) throw new Error("Could not get the auth context");
      if (r.method !== "GET")
        return this.#t.push({ request: r, requestConfig: i }), a.timeOut(), o;
      let u = 1;
      const p = this.#e.find(
        (h) => h.request === r && h.requestConfig === i
      );
      if (p) {
        if (u = p.retries + 1, u > N)
          return o;
        p.retries = u;
      }
      return new Promise((h, R) => {
        this.#e.push({
          request: r,
          requestConfig: i,
          retry: async () => {
            const { data: U, response: v } = await e.request(i);
            return this.#s(U, v);
          },
          resolve: h,
          reject: R,
          retries: u
        }), a.timeOut(), console.log(
          "[Interceptor] 401 Unauthorized - queuing request for re-authentication and have tried",
          u - 1,
          "times before",
          i
        );
      });
    });
  }
  /**
   * Interceptor which checks responses for 403 errors and displays them as a notification.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addForbiddenResponseInterceptor(e) {
    e.interceptors.response.use((t) => {
      if (t.status !== 403) return t;
      const r = {
        status: t.status,
        title: t.statusText || "You do not have the necessary permissions to complete the requested action. If you believe this is in error, please reach out to your administrator.",
        detail: void 0,
        errors: void 0,
        type: "Unauthorized",
        stack: void 0
      };
      return this.#s(r, t);
    });
  }
  /**
   * Interceptor which checks responses for the Umb-Generated-Resource header and replaces the value into the response body.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addUmbGeneratedResourceInterceptor(e) {
    e.interceptors.response.use((t) => {
      if (!t.headers.has("Umb-Generated-Resource")) return t;
      const r = t.headers.get("Umb-Generated-Resource");
      return r === null ? t : this.#s(r, t);
    });
  }
  /**
   * Interceptor which checks responses for 500 errors and displays them as a notification if any.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addErrorInterceptor(e) {
    e.interceptors.response.use(async (t) => {
      if (t.ok || t.status === 401 || t.status === 403) return t;
      if (t.status === 404) {
        const i = {
          status: t.status,
          title: t.statusText || "The requested resource was not found.",
          detail: void 0,
          errors: void 0,
          type: "NotFound",
          stack: void 0
        };
        return this.#s(i, t);
      }
      let r = {
        status: t.status,
        title: t.statusText || "A fatal server error occurred. If this continues, please reach out to your administrator.",
        detail: void 0,
        errors: void 0,
        type: "ServerError",
        stack: void 0
      };
      try {
        const n = await t.clone().json();
        n && m(n) && (r = n);
      } catch (i) {
        console.error("[Interceptor] Caught a server error, but failed parsing error body (expected JSON)", i);
      }
      return this.#s(r, t);
    });
  }
  /**
   * Interceptor which checks responses for the umb-notifications header and displays them as a notification if any. Removes the umb-notifications from the headers.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addUmbNotificationsInterceptor(e) {
    e.interceptors.response.use((t) => {
      const r = t.headers.get(j);
      if (!r) return t;
      try {
        const i = JSON.parse(r);
        if (!T(i)) return t;
        for (const n of i)
          this.#r(
            n.category,
            n.message,
            null,
            _(n.type)
          );
      } catch {
      }
      return t;
    });
  }
  /**
   * Listen for authorization signal to retry GET-requests that received a 401 Unauthorized response.
   * This will retry all pending requests that received a 401 Unauthorized response after re-authentication.
   * It will also notify the user about non-GET requests that received a 401 Unauthorized response.
   * @internal
   */
  handleUnauthorizedAuthRetry() {
    this.consumeContext(b, (e) => {
      this.observe(
        e?.authorizationSignal,
        () => {
          if (console.log("[Interceptor] 401 Unauthorized - re-authentication completed"), this.#e.splice(0, this.#e.length).forEach((r) => {
            console.log("[Interceptor] 401 Unauthorized - retrying request after re-authentication", r.requestConfig), r.retry().then(r.resolve).catch(r.reject);
          }), this.#t.length > 0) {
            const r = {};
            this.#t.forEach((i) => {
              r[`${i.request.method} ${i.request.url}`] = "Request failed with 401 Unauthorized.";
            }), this.#r(
              "Some actions were not completed",
              "Some actions could not be completed because your session expired. Please try again.",
              r,
              "warning"
            ), this.#t.length = 0;
          }
        },
        "_authClearNonGet401Requests"
      );
    });
  }
  /**
   * Helper to create a new Response with correct Content-Type.
   * @param {unknown} body The body of the response, can be a string or an object.
   * @param {Response} originalResponse The original response to copy status and headers from.
   * @returns {Response} The new Response object with the correct Content-Type and body.
   */
  #s(e, t) {
    const r = typeof e == "string", i = r ? "text/plain" : "application/json", n = r ? e : JSON.stringify(e), o = {};
    return t.headers.forEach((a, u) => {
      u.toLowerCase().startsWith("x-") && (o[u] = a);
    }), new Response(n, {
      status: t.status,
      statusText: t.statusText,
      headers: {
        ...o,
        "Content-Type": i
      }
    });
  }
  /**
   * Helper to show a notification error.
   * @param headline
   * @param message
   * @param details
   * @param color
   */
  async #r(e, t, r, i) {
    const n = this._host;
    (await import("@umbraco-cms/backoffice/notification")).umbPeekError(n, {
      headline: e,
      message: t,
      details: r,
      color: i
    });
  }
}
class f extends Error {
  constructor() {
    super(...arguments), this.name = "UmbError";
  }
  static isUmbError(e) {
    return e instanceof f || e.name === "UmbError";
  }
}
class l extends f {
  constructor() {
    super(...arguments), this.name = "UmbCancelError";
  }
  static isUmbCancelError(e) {
    return e instanceof l || e.name === "UmbCancelError";
  }
  /**
   * Transforms a CancelError into an UmbCancelError.
   * @param {*} error The CancelError to transform.
   * @returns {UmbCancelError} The transformed UmbCancelError.
   * @deprecated Use `UmbCancelError.isUmbCancelError` instead and map your object to `UmbCancelError` if needed.
   */
  static fromLegacyCancelError(e) {
    return new l(e.message);
  }
}
class c extends f {
  constructor(e, t, r, i) {
    super(e), this.name = "UmbApiError", this.status = t, this.request = r, this.problemDetails = i;
  }
  static isUmbApiError(e) {
    return e instanceof c || e.name === "UmbApiError";
  }
  /**
   * Transforms an ApiError into an UmbApiError.
   * @param {*} error The ApiError to transform.
   * @returns {UmbApiError} The transformed UmbApiError.
   * @deprecated Use `UmbCancelError.isUmbApiError` instead and map your object to `UmbApiError` if needed.
   */
  static fromLegacyApiError(e) {
    let t = null;
    if (typeof e.body < "u" && e.body)
      try {
        t = typeof e.body == "string" ? JSON.parse(e.body) : e.body;
      } catch (r) {
        console.error("Error parsing error body (expected JSON)", r);
      }
    return new c(
      e.message,
      e.status ?? 0,
      e.request,
      t ?? { title: e.message, type: "ApiError", status: e.status ?? 0 }
    );
  }
}
class O extends E {
  constructor(e, t, r) {
    super(e, r), this._promise = t;
  }
  /**
   * Maps any error to an UmbError.
   * @internal
   * @param {*} error The error to map
   * @returns {*} The mapped error
   */
  mapToUmbError(e) {
    return m(e) ? new c(e.detail ?? e.title, e.status, null, e) : I(e) ? c.fromLegacyApiError(e) : S(e) ? l.fromLegacyCancelError(e) : l.isUmbCancelError(e) || c.isUmbApiError(e) ? e : new c(e instanceof Error ? e.message : "Unknown error", 0, null, {
      status: 0,
      title: "Unknown error",
      detail: e instanceof Error ? e.message : "Unknown error",
      errors: void 0,
      type: "error",
      stack: e instanceof Error ? e.stack : void 0
    });
  }
  /**
   * Cancel all resources that are currently being executed by this controller if they are cancelable.
   *
   * This works by checking if the promise is a CancelablePromise and if so, it will call the cancel method.
   *
   * This is useful when the controller is being disconnected from the DOM.
   * @see CancelablePromise
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortController
   */
  cancel() {
    A(this._promise) && this._promise.cancel();
  }
  hostDisconnected() {
    super.hostDisconnected(), this.cancel();
  }
  destroy() {
    super.destroy(), this.cancel();
  }
  async _peekError(e, t, r) {
    const i = this._host;
    (await import("@umbraco-cms/backoffice/notification")).umbPeekError(i, {
      headline: e,
      message: t,
      details: r
    });
  }
}
const k = [401, 403, 404];
class y extends O {
  #e;
  async tryExecute(e) {
    try {
      return e?.abortSignal && (this.#e = e.abortSignal, this.#e.addEventListener("abort", () => this.cancel(), { once: !0 })), await this._promise;
    } catch (t) {
      const r = this.mapToUmbError(t);
      return e?.disableNotifications || this.#t(r), {
        error: r
      };
    }
  }
  destroy() {
    this.#e && this.#e.removeEventListener("abort", this.cancel), super.destroy();
  }
  #t(e) {
    if (l.isUmbCancelError(e))
      return;
    let t = "An error occurred", r = "A fatal server error occurred. If this continues, please reach out to your administrator.", i;
    const n = e;
    if (n.problemDetails) {
      if (k.includes(n.problemDetails.status))
        return;
      r = n.problemDetails.title, i = n.problemDetails.errors ?? void 0, (n.problemDetails.detail?.includes("ObjectCacheAppCache") || n.problemDetails.detail?.includes("Umbraco.Cms.Infrastructure.Scoping.Scope.DisposeLastScope()")) && (t = "Please restart the server", r = "The Umbraco object cache is corrupt, but your action may still have been executed. Please restart the server to reset the cache. This is a work in progress.");
    } else
      r = n instanceof Error ? n.message : "An unknown error occurred.";
    this._peekError(t, r, i), console.error("[UmbTryExecuteController] Error in request:", e);
  }
}
async function D(s, e, t) {
  const r = new y(s, e), i = await r.tryExecute(t);
  return r.destroy(), i;
}
function B(s, e, t) {
  return Promise.allSettled(e.map((r) => D(s, t(r), { disableNotifications: !0 })));
}
async function M(s, e) {
  new C({
    deprecated: "The tryExecuteAndNotify function is deprecated.",
    removeInVersion: "18.0.0",
    solution: "Use the tryExecute function with options instead."
  }).warn();
  const t = new y(s, e), r = await t.tryExecute({ disableNotifications: !1 });
  return t.destroy(), r;
}
class q {
  constructor(e) {
    this._isResolved = !1, this._isRejected = !1, this._isCancelled = !1, this.cancelHandlers = [], this.promise = new Promise((t, r) => {
      this._resolve = t, this._reject = r;
      const i = (a) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isResolved = !0, this._resolve && this._resolve(a));
      }, n = (a) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isRejected = !0, this._reject && this._reject(a));
      }, o = (a) => {
        this._isResolved || this._isRejected || this._isCancelled || this.cancelHandlers.push(a);
      };
      return Object.defineProperty(o, "isResolved", {
        get: () => this._isResolved
      }), Object.defineProperty(o, "isRejected", {
        get: () => this._isRejected
      }), Object.defineProperty(o, "isCancelled", {
        get: () => this._isCancelled
      }), e(i, n, o);
    });
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(e, t) {
    return this.promise.then(e, t);
  }
  catch(e) {
    return this.promise.catch(e);
  }
  finally(e) {
    return this.promise.finally(e);
  }
  cancel() {
    if (!(this._isResolved || this._isRejected || this._isCancelled)) {
      if (this._isCancelled = !0, this.cancelHandlers.length)
        try {
          for (const e of this.cancelHandlers)
            e();
        } catch (e) {
          console.warn("Cancellation threw an error", e);
          return;
        }
      this.cancelHandlers.length = 0, this._reject && this._reject(new l("Request aborted"));
    }
  }
  get isCancelled() {
    return this._isCancelled;
  }
}
async function $(s, e) {
  const t = w.getConfig(), r = P({
    ...e,
    baseUrl: t.baseUrl,
    token: () => typeof t.auth == "function" ? t.auth({ type: "http", scheme: "bearer" }) : t.auth
  }), i = new y(s, r), n = await i.tryExecute(e);
  return i.destroy(), n;
}
function P(s) {
  const e = s.baseUrl || "/umbraco";
  return new q(async (t, r, i) => {
    const n = new XMLHttpRequest();
    if (n.open(s.method, `${e}${s.url}`, !0), n.withCredentials = s.withCredentials ?? !0, s.token) {
      const o = typeof s.token == "function" ? await s.token() : s.token;
      o && n.setRequestHeader("Authorization", `Bearer ${o}`);
    }
    if (s.body instanceof FormData || n.setRequestHeader("Content-Type", "application/json"), s.headers)
      for (const [o, a] of Object.entries(s.headers))
        n.setRequestHeader(o, a);
    n.upload.onprogress = (o) => {
      s.onProgress && s.onProgress(o);
    }, n.onload = () => {
      try {
        if (n.status >= 200 && n.status < 300)
          if (s.responseHeader) {
            const o = n.getResponseHeader(s.responseHeader);
            t(o);
          } else
            t(JSON.parse(n.responseText));
        else
          r(g(n));
      } catch {
        r(
          new c(`Failed to make request: ${n.statusText}`, n.status, n, {
            title: n.statusText,
            type: "ApiError",
            status: n.status
          })
        );
      }
    }, n.onerror = () => {
      r(g(n));
    }, i.isCancelled || (s.body instanceof FormData ? n.send(s.body) : n.send(JSON.stringify(s.body))), i(() => {
      n.abort();
    });
  });
}
function g(s) {
  const e = new c(s.statusText, s.status, s, {
    title: s.statusText,
    type: "ApiError",
    status: s.status
  });
  try {
    const t = s.responseText;
    if (t) {
      const r = JSON.parse(t);
      r && m(r) && (e.problemDetails = r);
    }
  } catch {
  }
  return e;
}
export {
  j as UMB_NOTIFICATION_HEADER,
  c as UmbApiError,
  J as UmbApiInterceptorController,
  l as UmbCancelError,
  f as UmbError,
  O as UmbResourceController,
  y as UmbTryExecuteController,
  B as batchTryExecute,
  W as extractUmbColorVariable,
  _ as extractUmbNotificationColor,
  I as isApiError,
  S as isCancelError,
  A as isCancelablePromise,
  m as isProblemDetailsLike,
  T as isUmbNotifications,
  D as tryExecute,
  M as tryExecuteAndNotify,
  $ as tryXhrRequest,
  Y as umbracoColors
};
//# sourceMappingURL=index.js.map

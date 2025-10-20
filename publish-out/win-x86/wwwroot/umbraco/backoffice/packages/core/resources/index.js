import { EventMessageTypeModel as l } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as m } from "@umbraco-cms/backoffice/class-api";
import { UMB_AUTH_CONTEXT as y } from "@umbraco-cms/backoffice/auth";
import { e as J, u as B } from "../extractUmbColorVariable.function-C_Z99zyW.js";
import { UmbDeprecation as b } from "@umbraco-cms/backoffice/utils";
import { umbHttpClient as g } from "@umbraco-cms/backoffice/http-client";
function E(t) {
  switch (t) {
    case l.ERROR:
      return "danger";
    case l.WARNING:
      return "warning";
    case l.INFO:
    case l.DEFAULT:
      return "default";
    case l.SUCCESS:
      return "positive";
    default:
      return "";
  }
}
function R(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = t;
  return typeof e.category == "string" && typeof e.message == "string" && typeof e.type == "string" && Object.values(l).includes(e.type);
}
function C(t) {
  return t.every(R);
}
const U = "umb-notifications";
function w(t) {
  return typeof t == "object" && t !== null && "body" in t && "status" in t && "request" in t;
}
function _(t) {
  return t instanceof Error && (t.name === "CancelError" || t.message === "Request aborted");
}
function v(t) {
  return typeof t.cancel == "function";
}
function f(t) {
  return typeof t == "object" && t !== null && "type" in t && "title" in t && "status" in t && (typeof t.detail > "u" || typeof t.detail == "string") && (typeof t.instance > "u" || typeof t.instance == "string") && (typeof t.operationStatus > "u" || typeof t.operationStatus == "string") && (typeof t.errors > "u" || typeof t.errors == "object");
}
class D extends m {
  /**
   * Binds the default interceptors to the client.
   * This includes the auth response interceptor, the error interceptor and the umb-notifications interceptor.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   */
  bindDefaultInterceptors(e) {
    this.addAuthResponseInterceptor(e), this.addUmbGeneratedResourceInterceptor(e), this.addUmbNotificationsInterceptor(e), this.addForbiddenResponseInterceptor(e), this.addErrorInterceptor(e);
  }
  /**
   * Interceptor which checks responses for 401 errors and lets the UmbAuthContext know the user is timed out.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addAuthResponseInterceptor(e) {
    e.interceptors.response.use(async (s) => {
      if (s.status === 401) {
        const r = await this.getContext(y, { preventTimeout: !0 });
        if (!r)
          throw new Error("Could not get the auth context");
        r.timeOut();
      }
      return s;
    });
  }
  /**
   * Interceptor which checks responses for 403 errors and displays them as a notification.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addForbiddenResponseInterceptor(e) {
    e.interceptors.response.use(async (s) => (s.status === 403 && this.#e("Permission Denied", "You do not have the necessary permissions to complete the requested action. If you believe this is in error, please reach out to your administrator.", null), s));
  }
  /**
   * Interceptor which checks responses for the Umb-Generated-Resource header and replaces the value into the response body.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addUmbGeneratedResourceInterceptor(e) {
    e.interceptors.response.use(async (s) => {
      if (!s.headers.has("Umb-Generated-Resource"))
        return s;
      const r = s.headers.get("Umb-Generated-Resource");
      return r === null ? s : new Response(r, {
        ...s
      });
    });
  }
  /**
   * Interceptor which checks responses for 500 errors and displays them as a notification if any.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addErrorInterceptor(e) {
    e.interceptors.response.use(async (s) => {
      if (s.ok) return s;
      if (s.status === 500)
        try {
          const i = await s.clone().json();
          if (!i || !f(i))
            return s;
          let n = i.title ?? "Server Error", o = "A fatal server error occurred. If this continues, please reach out to your administrator.";
          (i.detail?.includes("ObjectCacheAppCache") || i.detail?.includes("Umbraco.Cms.Infrastructure.Scoping.Scope.DisposeLastScope()")) && (n = "Please restart the server", o = "The Umbraco object cache is corrupt, but your action may still have been executed. Please restart the server to reset the cache. This is a work in progress."), this.#e(n, o, i.errors);
        } catch (r) {
          console.error("[Interceptor] Caught a 500 Error, but failed parsing error body (expected JSON)", r);
        }
      return s;
    });
  }
  /**
   * Interceptor which checks responses for the umb-notifications header and displays them as a notification if any. Removes the umb-notifications from the headers.
   * @param {umbHttpClient} client The OpenAPI client to add the interceptor to. It can be any client supporting Response and Request interceptors.
   * @internal
   */
  addUmbNotificationsInterceptor(e) {
    e.interceptors.response.use((s) => {
      const r = s.headers.get(U);
      if (!r) return s;
      try {
        const i = JSON.parse(r);
        if (!C(i)) return s;
        for (const n of i)
          this.#e(
            n.category,
            n.message,
            null,
            E(n.type)
          );
      } catch {
      }
      return s;
    });
  }
  async #e(e, s, r, i) {
    const n = this._host;
    (await import("@umbraco-cms/backoffice/notification")).umbPeekError(n, {
      headline: e,
      message: s,
      details: r,
      color: i
    });
  }
}
class d extends Error {
  constructor() {
    super(...arguments), this.name = "UmbError";
  }
  static isUmbError(e) {
    return e instanceof d || e.name === "UmbError";
  }
}
class u extends d {
  constructor() {
    super(...arguments), this.name = "UmbCancelError";
  }
  static isUmbCancelError(e) {
    return e instanceof u || e.name === "UmbCancelError";
  }
  /**
   * Transforms a CancelError into an UmbCancelError.
   * @param {*} error The CancelError to transform.
   * @returns {UmbCancelError} The transformed UmbCancelError.
   * @deprecated Use `UmbCancelError.isUmbCancelError` instead and map your object to `UmbCancelError` if needed.
   */
  static fromLegacyCancelError(e) {
    return new u(e.message);
  }
}
class a extends d {
  constructor(e, s, r, i) {
    super(e), this.name = "UmbApiError", this.status = s, this.request = r, this.problemDetails = i;
  }
  static isUmbApiError(e) {
    return e instanceof a || e.name === "UmbApiError";
  }
  /**
   * Transforms an ApiError into an UmbApiError.
   * @param {*} error The ApiError to transform.
   * @returns {UmbApiError} The transformed UmbApiError.
   * @deprecated Use `UmbCancelError.isUmbApiError` instead and map your object to `UmbApiError` if needed.
   */
  static fromLegacyApiError(e) {
    let s = null;
    if (typeof e.body < "u" && e.body)
      try {
        s = typeof e.body == "string" ? JSON.parse(e.body) : e.body;
      } catch (r) {
        console.error("Error parsing error body (expected JSON)", r);
      }
    return new a(
      e.message,
      e.status ?? 0,
      e.request,
      s ?? { title: e.message, type: "ApiError", status: e.status ?? 0 }
    );
  }
}
class x extends m {
  constructor(e, s, r) {
    super(e, r), this._promise = s;
  }
  /**
   * Maps any error to an UmbError.
   * @internal
   * @param {*} error The error to map
   * @returns {*} The mapped error
   */
  mapToUmbError(e) {
    return f(e) ? new a(e.detail ?? e.title, e.status, null, e) : w(e) ? a.fromLegacyApiError(e) : _(e) ? u.fromLegacyCancelError(e) : u.isUmbCancelError(e) || a.isUmbApiError(e) || d.isUmbError(e) ? e : new d(e instanceof Error ? e.message : "Unknown error");
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
    v(this._promise) && this._promise.cancel();
  }
  hostDisconnected() {
    super.hostDisconnected(), this.cancel();
  }
  destroy() {
    super.destroy(), this.cancel();
  }
  async _peekError(e, s, r) {
    const i = this._host;
    (await import("@umbraco-cms/backoffice/notification")).umbPeekError(i, {
      headline: e,
      message: s,
      details: r
    });
  }
}
class h extends x {
  #e;
  async tryExecute(e) {
    try {
      return e?.abortSignal && (this.#e = e.abortSignal, this.#e.addEventListener("abort", () => this.cancel(), { once: !0 })), await this._promise;
    } catch (s) {
      const r = this.mapToUmbError(s);
      return e?.disableNotifications || this.#t(r), {
        error: r
      };
    }
  }
  destroy() {
    this.#e && this.#e.removeEventListener("abort", this.cancel), super.destroy();
  }
  #t(e) {
    if (u.isUmbCancelError(e))
      return;
    let s = "An error occurred", r = "An error occurred while trying to execute the request.", i;
    const n = a.isUmbApiError(e) ? e.problemDetails : f(e) ? e : void 0;
    n ? (r = n.title, i = n.errors ?? void 0) : (s = "", r = e instanceof Error ? e.message : "An unknown error occurred."), this._peekError(s, r, i);
  }
}
async function j(t, e, s) {
  const r = new h(t, e), i = await r.tryExecute(s);
  return r.destroy(), i;
}
function H(t, e, s) {
  return Promise.allSettled(e.map((r) => j(t, s(r), { disableNotifications: !0 })));
}
async function P(t, e) {
  new b({
    deprecated: "The tryExecuteAndNotify function is deprecated.",
    removeInVersion: "18.0.0",
    solution: "Use the tryExecute function with options instead."
  }).warn();
  const s = new h(t, e), r = await s.tryExecute({ disableNotifications: !1 });
  return s.destroy(), r;
}
class A {
  constructor(e) {
    this._isResolved = !1, this._isRejected = !1, this._isCancelled = !1, this.cancelHandlers = [], this.promise = new Promise((s, r) => {
      this._resolve = s, this._reject = r;
      const i = (c) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isResolved = !0, this._resolve && this._resolve(c));
      }, n = (c) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isRejected = !0, this._reject && this._reject(c));
      }, o = (c) => {
        this._isResolved || this._isRejected || this._isCancelled || this.cancelHandlers.push(c);
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
  then(e, s) {
    return this.promise.then(e, s);
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
      this.cancelHandlers.length = 0, this._reject && this._reject(new u("Request aborted"));
    }
  }
  get isCancelled() {
    return this._isCancelled;
  }
}
async function q(t, e) {
  const s = g.getConfig(), r = N({
    ...e,
    baseUrl: s.baseUrl,
    token: () => typeof s.auth == "function" ? s.auth({ type: "http", scheme: "bearer" }) : s.auth
  }), i = new h(t, r), n = await i.tryExecute(e);
  return i.destroy(), n;
}
function N(t) {
  const e = t.baseUrl || "/umbraco";
  return new A(async (s, r, i) => {
    const n = new XMLHttpRequest();
    if (n.open(t.method, `${e}${t.url}`, !0), t.token) {
      const o = typeof t.token == "function" ? await t.token() : t.token;
      o && n.setRequestHeader("Authorization", `Bearer ${o}`);
    }
    if (t.body instanceof FormData || n.setRequestHeader("Content-Type", "application/json"), t.headers)
      for (const [o, c] of Object.entries(t.headers))
        n.setRequestHeader(o, c);
    n.upload.onprogress = (o) => {
      t.onProgress && t.onProgress(o);
    }, n.onload = () => {
      try {
        if (n.status >= 200 && n.status < 300)
          if (t.responseHeader) {
            const o = n.getResponseHeader(t.responseHeader);
            s(o);
          } else
            s(JSON.parse(n.responseText));
        else
          r(p(n));
      } catch {
        r(
          new a(`Failed to make request: ${n.statusText}`, n.status, n, {
            title: n.statusText,
            type: "ApiError",
            status: n.status
          })
        );
      }
    }, n.onerror = () => {
      r(p(n));
    }, i.isCancelled || (t.body instanceof FormData ? n.send(t.body) : n.send(JSON.stringify(t.body))), i(() => {
      n.abort();
    });
  });
}
function p(t) {
  const e = new a(t.statusText, t.status, t, {
    title: t.statusText,
    type: "ApiError",
    status: t.status
  });
  try {
    const s = t.responseText;
    if (s) {
      const r = JSON.parse(s);
      r && f(r) && (e.problemDetails = r);
    }
  } catch {
  }
  return e;
}
export {
  U as UMB_NOTIFICATION_HEADER,
  a as UmbApiError,
  D as UmbApiInterceptorController,
  u as UmbCancelError,
  d as UmbError,
  x as UmbResourceController,
  h as UmbTryExecuteController,
  H as batchTryExecute,
  J as extractUmbColorVariable,
  E as extractUmbNotificationColor,
  w as isApiError,
  _ as isCancelError,
  v as isCancelablePromise,
  f as isProblemDetailsLike,
  C as isUmbNotifications,
  j as tryExecute,
  P as tryExecuteAndNotify,
  q as tryXhrRequest,
  B as umbracoColors
};
//# sourceMappingURL=index.js.map

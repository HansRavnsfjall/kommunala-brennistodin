const c = [], k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var d = 0, A = k.length; d < A; ++d)
  c[d] = k[d];
function v(n) {
  return c[n >> 18 & 63] + c[n >> 12 & 63] + c[n >> 6 & 63] + c[n & 63];
}
function U(n, e, t) {
  for (var r, o = [], i = e; i < t; i += 3)
    r = (n[i] << 16 & 16711680) + (n[i + 1] << 8 & 65280) + (n[i + 2] & 255), o.push(v(r));
  return o.join("");
}
function O(n) {
  for (var e, t = n.length, r = t % 3, o = [], i = 16383, s = 0, a = t - r; s < a; s += i)
    o.push(U(n, s, s + i > a ? a : s + i));
  return r === 1 ? (e = n[t - 1], o.push(c[e >> 2] + c[e << 4 & 63] + "==")) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1], o.push(c[e >> 10] + c[e >> 4 & 63] + c[e << 2 & 63] + "=")), o.join("");
}
class l {
  constructor(e, t) {
    this.message = e, this.extras = t;
  }
}
const w = typeof window < "u" && !!window.crypto, z = w && !!window.crypto.subtle, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function C(n) {
  const e = [];
  for (let t = 0; t < n.byteLength; t += 1) {
    const r = n[t] % f.length;
    e.push(f[r]);
  }
  return e.join("");
}
function j(n) {
  return O(new Uint8Array(n)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function N(n) {
  const e = new ArrayBuffer(n.length), t = new Uint8Array(e);
  for (let r = 0; r < n.length; r++)
    t[r] = n.charCodeAt(r);
  return t;
}
class R {
  generateRandom(e) {
    const t = new Uint8Array(e);
    if (w)
      window.crypto.getRandomValues(t);
    else
      for (let r = 0; r < e; r += 1)
        t[r] = Math.random() * f.length | 0;
    return C(t);
  }
  deriveChallenge(e) {
    return e.length < 43 || e.length > 128 ? Promise.reject(new l("Invalid code length.")) : z ? new Promise((t, r) => {
      crypto.subtle.digest("SHA-256", N(e)).then(
        (o) => t(j(new Uint8Array(o))),
        (o) => r(o)
      );
    }) : Promise.reject(new l("window.crypto.subtle is unavailable."));
  }
}
const Z = !0, W = !1;
function h(n, ...e) {
  (e ? e.length : 0) > 0 ? console.log(n, ...e) : console.log(n);
}
function X(n, e, t) {
  return t;
}
const b = 10, L = function(n) {
  return n.generateRandom(b);
};
class _ {
  /**
   * Constructs a new AuthorizationRequest.
   * Use a `undefined` value for the `state` parameter, to generate a random
   * state for CSRF protection.
   */
  constructor(e, t = new R(), r = !0) {
    this.crypto = t, this.usePkce = r, this.clientId = e.client_id, this.redirectUri = e.redirect_uri, this.scope = e.scope, this.responseType = e.response_type || _.RESPONSE_TYPE_CODE, this.state = e.state || L(t), this.extras = e.extras, this.internal = e.internal;
  }
  static {
    this.RESPONSE_TYPE_TOKEN = "token";
  }
  static {
    this.RESPONSE_TYPE_CODE = "code";
  }
  setupCodeVerifier() {
    if (this.usePkce) {
      const e = this.crypto.generateRandom(128);
      return this.crypto.deriveChallenge(e).catch((r) => {
        h("Unable to generate PKCE challenge. Not using PKCE", r);
      }).then((r) => {
        r && (this.internal = this.internal || {}, this.internal.code_verifier = e, this.extras = this.extras || {}, this.extras.code_challenge = r, this.extras.code_challenge_method = "S256");
      });
    } else
      return Promise.resolve();
  }
  /**
   * Serializes the AuthorizationRequest to a JavaScript Object.
   */
  toJson() {
    return this.setupCodeVerifier().then(() => ({
      response_type: this.responseType,
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      scope: this.scope,
      state: this.state,
      extras: this.extras,
      internal: this.internal
    }));
  }
}
class ee {
  constructor() {
    this.listener = null;
  }
  setAuthorizationListener(e) {
    this.listener = e;
  }
  /**
   * The authorization complete callback.
   */
  onAuthorizationComplete(e, t, r) {
    this.listener && this.listener(e, t, r);
  }
}
const B = ["redirect_uri", "client_id", "response_type", "state", "scope"];
class D {
  constructor(e, t) {
    this.utils = e, this.crypto = t, this.notifier = null;
  }
  /**
   * A utility method to be able to build the authorization request URL.
   */
  buildRequestUrl(e, t) {
    const r = {
      redirect_uri: t.redirectUri,
      client_id: t.clientId,
      response_type: t.responseType,
      state: t.state,
      scope: t.scope
    };
    if (t.extras)
      for (const a in t.extras)
        Object.prototype.hasOwnProperty.call(t.extras, a) && B.indexOf(a) < 0 && (r[a] = t.extras[a]);
    const o = this.utils.stringify(r);
    return `${e.authorizationEndpoint}?${o}`;
  }
  /**
   * Completes the authorization request if necessary & when possible.
   */
  completeAuthorizationRequestIfPossible() {
    return h("Checking to see if there is an authorization response to be delivered."), this.notifier || h(`Notifier is not present on AuthorizationRequest handler.
          No delivery of result will be possible`), this.completeAuthorizationRequest().then((e) => (e || h("No result is available yet."), e && this.notifier && this.notifier.onAuthorizationComplete(e.request, e.response, e.error), e));
  }
  /**
   * Sets the default Authorization Service notifier.
   */
  setAuthorizationNotifier(e) {
    return this.notifier = e, this;
  }
}
class H {
  constructor(e) {
    this.code = e.code, this.state = e.state;
  }
  toJson() {
    return { code: this.code, state: this.state };
  }
}
class J {
  constructor(e) {
    this.error = e.error, this.errorDescription = e.error_description, this.errorUri = e.error_uri, this.state = e.state;
  }
  toJson() {
    return {
      error: this.error,
      error_description: this.errorDescription,
      error_uri: this.errorUri,
      state: this.state
    };
  }
}
class M {
}
class S extends M {
  xhr(e) {
    if (!e.url)
      return Promise.reject(new l("A URL must be provided."));
    const t = new URL(e.url), r = {};
    r.method = e.method, r.mode = "cors", r.credentials = e.credentials ?? "include", e.data && (e.method && e.method.toUpperCase() === "POST" ? r.body = e.data : new URLSearchParams(e.data).forEach((s, a) => {
      t.searchParams.append(a, s);
    })), r.headers = {}, e.headers && (r.headers = e.headers);
    const o = e.dataType && e.dataType.toLowerCase() === "json";
    return o && (r.headers.Accept = "application/json, text/javascript, */*; q=0.01"), fetch(t.toString(), r).then((i) => {
      if (i.status >= 200 && i.status < 300) {
        const s = i.headers.get("content-type");
        return o || s && s.indexOf("application/json") !== -1 ? i.json() : i.text();
      } else
        return Promise.reject(new l(i.status.toString(), i.statusText));
    });
  }
}
const $ = ".well-known", K = "openid-configuration";
class E {
  constructor(e) {
    this.authorizationEndpoint = e.authorization_endpoint, this.tokenEndpoint = e.token_endpoint, this.revocationEndpoint = e.revocation_endpoint, this.userInfoEndpoint = e.userinfo_endpoint, this.endSessionEndpoint = e.end_session_endpoint;
  }
  toJson() {
    return {
      authorization_endpoint: this.authorizationEndpoint,
      token_endpoint: this.tokenEndpoint,
      revocation_endpoint: this.revocationEndpoint,
      end_session_endpoint: this.endSessionEndpoint,
      userinfo_endpoint: this.userInfoEndpoint
    };
  }
  static fetchFromIssuer(e, t) {
    const r = `${e}/${$}/${K}`;
    return (t || new S()).xhr({ url: r, dataType: "json", method: "GET" }).then((i) => new E(i));
  }
}
class I {
  parse(e, t) {
    return t ? this.parseQueryString(e.hash) : this.parseQueryString(e.search);
  }
  parseQueryString(e) {
    const t = {};
    e = e.trim().replace(/^(\?|#|&)/, "");
    const r = e.split("&");
    for (let o = 0; o < r.length; o += 1) {
      const s = r[o].split("=");
      if (s.length >= 2) {
        const a = decodeURIComponent(s.shift()), u = s.length > 0 ? s.join("=") : null;
        u && (t[a] = decodeURIComponent(u));
      }
    }
    return t;
  }
  stringify(e) {
    const t = [];
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && e[r] && t.push(`${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`);
    return t.join("&");
  }
}
class Y {
}
class F extends Y {
  constructor(e) {
    super(), this.storage = e || window.localStorage;
  }
  getItem(e) {
    return new Promise((t, r) => {
      const o = this.storage.getItem(e);
      t(o || null);
    });
  }
  removeItem(e) {
    return new Promise((t, r) => {
      this.storage.removeItem(e), t();
    });
  }
  clear() {
    return new Promise((e, t) => {
      this.storage.clear(), e();
    });
  }
  setItem(e, t) {
    return new Promise((r, o) => {
      this.storage.setItem(e, t), r();
    });
  }
}
const m = (n) => `${n}_appauth_authorization_request`, V = (n) => `${n}_appauth_authorization_service_configuration`, p = "appauth_current_authorization_request";
class te extends D {
  constructor(e = new F(), t = new I(), r = window.location, o = new R()) {
    super(t, o), this.storageBackend = e, this.locationLike = r;
  }
  performAuthorizationRequest(e, t) {
    const r = this.crypto.generateRandom(10);
    return Promise.all([
      this.storageBackend.setItem(p, r),
      // Calling toJson() adds in the code & challenge when possible
      t.toJson().then((i) => this.storageBackend.setItem(m(r), JSON.stringify(i))),
      this.storageBackend.setItem(V(r), JSON.stringify(e.toJson()))
    ]).then(() => {
      const i = this.buildRequestUrl(e, t);
      return h("Making a request to ", t, i), i;
    });
  }
  /**
   * Cleanup all stale authorization requests and configurations from storage.
   * This scans localStorage for any keys matching the appauth patterns and removes them,
   * including the authorization request handle key.
   */
  cleanupStaleAuthorizationData() {
    if (typeof window > "u" || !window.localStorage)
      return Promise.resolve();
    const e = [];
    for (let r = 0; r < window.localStorage.length; r++) {
      const o = window.localStorage.key(r);
      o && (o.includes("_appauth_authorization_request") || o.includes("_appauth_authorization_service_configuration") || o === p) && e.push(o);
    }
    const t = e.map((r) => this.storageBackend.removeItem(r));
    return Promise.all(t).then(() => {
      e.length > 0 && h(`Cleaned up ${e.length} stale authorization data entries`);
    });
  }
  /**
   * Attempts to introspect the contents of storage backend and completes the
   * request.
   */
  completeAuthorizationRequest() {
    return this.storageBackend.getItem(p).then((e) => e ? this.storageBackend.getItem(m(e)).then((t) => JSON.parse(t)).then((t) => new _(t)).then((t) => {
      const r = `${this.locationLike.origin}${this.locationLike.pathname}`, o = this.utils.parse(
        this.locationLike,
        !0
        /* use hash */
      ), i = o.state, s = o.code, a = o.error;
      h("Potential authorization request ", r, o, i, s, a);
      const u = i === t.state;
      let g = null, y = null;
      if (u) {
        if (a) {
          const x = o.error_uri, P = o.error_description;
          y = new J({
            error: a,
            error_description: P,
            error_uri: x,
            state: i
          });
        } else
          g = new H({ code: s, state: i });
        return this.cleanupStaleAuthorizationData().then(() => (h("Delivering authorization response"), {
          request: t,
          response: g,
          error: y
        }));
      } else
        return h("Mismatched request (state and request_uri) dont match."), this.cleanupStaleAuthorizationData().then(() => null);
    }) : null);
  }
}
class re {
  constructor(e) {
    this.token = e.token, this.tokenTypeHint = e.token_type_hint, this.clientId = e.client_id, this.clientSecret = e.client_secret;
  }
  /**
   * Serializes a TokenRequest to a JavaScript object.
   */
  toJson() {
    const e = { token: this.token };
    return this.tokenTypeHint && (e.token_type_hint = this.tokenTypeHint), this.clientId && (e.client_id = this.clientId), this.clientSecret && (e.client_secret = this.clientSecret), e;
  }
  toStringMap() {
    return this.toJson();
  }
}
const ne = "authorization_code", oe = "refresh_token";
class ie {
  constructor(e) {
    this.clientId = e.client_id, this.redirectUri = e.redirect_uri, this.grantType = e.grant_type, this.code = e.code, this.refreshToken = e.refresh_token, this.extras = e.extras;
  }
  /**
   * Serializes a TokenRequest to a JavaScript object.
   */
  toJson() {
    return {
      grant_type: this.grantType,
      code: this.code,
      refresh_token: this.refreshToken,
      redirect_uri: this.redirectUri,
      client_id: this.clientId,
      extras: this.extras
    };
  }
  toStringMap() {
    const e = {
      grant_type: this.grantType,
      client_id: this.clientId,
      redirect_uri: this.redirectUri
    };
    if (this.code && (e.code = this.code), this.refreshToken && (e.refresh_token = this.refreshToken), this.extras)
      for (const t in this.extras)
        Object.prototype.hasOwnProperty.call(this.extras, t) && !Object.prototype.hasOwnProperty.call(e, t) && (e[t] = this.extras[t]);
    return e;
  }
}
const G = 0, T = () => Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
class Q {
  constructor(e) {
    this.accessToken = e.access_token, this.tokenType = e.token_type || "bearer", e.expires_in && (this.expiresIn = parseInt(e.expires_in, 10)), this.refreshToken = e.refresh_token, this.scope = e.scope, this.idToken = e.id_token, this.issuedAt = e.issued_at || T();
  }
  toJson() {
    return {
      access_token: this.accessToken,
      id_token: this.idToken,
      refresh_token: this.refreshToken,
      scope: this.scope,
      token_type: this.tokenType,
      issued_at: this.issuedAt,
      expires_in: this.expiresIn?.toString()
    };
  }
  isValid(e = G) {
    return this.expiresIn ? T() < this.issuedAt + this.expiresIn + e : !0;
  }
}
class q {
  constructor(e) {
    this.error = e.error, this.errorDescription = e.error_description, this.errorUri = e.error_uri;
  }
  toJson() {
    return {
      error: this.error,
      error_description: this.errorDescription,
      error_uri: this.errorUri
    };
  }
}
class se {
  constructor(e = new S(), t = new I()) {
    this.requestor = e, this.utils = t;
  }
  isTokenResponse(e) {
    return e.error === void 0;
  }
  performRevokeTokenRequest(e, t) {
    return this.requestor.xhr({
      url: e.revocationEndpoint,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: this.utils.stringify(t.toStringMap())
    }).then((o) => !0);
  }
  performTokenRequest(e, t) {
    return this.requestor.xhr({
      url: e.tokenEndpoint,
      method: "POST",
      dataType: "json",
      // adding implicit dataType
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: this.utils.stringify(t.toStringMap())
    }).then((o) => this.isTokenResponse(o) ? new Q(o) : Promise.reject(new l(o.error, new q(o))));
  }
}
export {
  l as AppAuthError,
  J as AuthorizationError,
  ee as AuthorizationNotifier,
  _ as AuthorizationRequest,
  D as AuthorizationRequestHandler,
  H as AuthorizationResponse,
  E as AuthorizationServiceConfiguration,
  B as BUILT_IN_PARAMETERS,
  se as BaseTokenRequestHandler,
  I as BasicQueryStringUtils,
  R as DefaultCrypto,
  S as FetchRequestor,
  ne as GRANT_TYPE_AUTHORIZATION_CODE,
  oe as GRANT_TYPE_REFRESH_TOKEN,
  Z as IS_LOG,
  W as IS_PROFILE,
  F as LocalStorageBackend,
  te as RedirectRequestHandler,
  M as Requestor,
  re as RevokeTokenRequest,
  Y as StorageBackend,
  q as TokenError,
  ie as TokenRequest,
  Q as TokenResponse,
  C as bufferToString,
  h as log,
  T as nowInSeconds,
  X as profile,
  N as textEncodeLite,
  j as urlSafe
};
//# sourceMappingURL=index.js.map

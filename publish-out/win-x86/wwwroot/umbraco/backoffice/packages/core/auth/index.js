import { css as A, property as p, customElement as S, nothing as R, html as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import { FetchRequestor as O, AuthorizationServiceConfiguration as E, AuthorizationNotifier as L, BaseTokenRequestHandler as C, LocalStorageBackend as P, RedirectRequestHandler as q, TokenResponse as M, AuthorizationRequest as g, RevokeTokenRequest as w, TokenRequest as b, GRANT_TYPE_AUTHORIZATION_CODE as $, GRANT_TYPE_REFRESH_TOKEN as x, BasicQueryStringUtils as I } from "@umbraco-cms/backoffice/external/openid";
import { Subject as _, ReplaySubject as N, distinctUntilChanged as B, auditTime as F, throttleTime as V, firstValueFrom as W, switchMap as D } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbObjectState as H, UmbBooleanState as K } from "@umbraco-cms/backoffice/observable-api";
import { U as j } from "../auth.context.token-CFi72pnR.js";
import { U as T } from "../modal-token-wEQqBBXI.js";
import { UmbControllerBase as G, UmbContextBase as J } from "@umbraco-cms/backoffice/class-api";
import { UserService as X } from "@umbraco-cms/backoffice/external/backend-api";
import { umbHttpClient as Y } from "@umbraco-cms/backoffice/http-client";
import { isTestEnvironment as Q } from "@umbraco-cms/backoffice/utils";
var Z = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, y = (s) => {
  throw TypeError(s);
}, l = (s, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? tt(t, e) : t, n = s.length - 1, r; n >= 0; n--)
    (r = s[n]) && (o = (i ? r(t, e, o) : r(o)) || o);
  return i && o && Z(t, e, o), o;
}, et = (s, t, e) => t.has(s) || y("Cannot " + e), v = (s, t, e) => (et(s, t, "read from private field"), e ? e.call(s) : t.get(s)), it = (s, t, e) => t.has(s) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), c, d;
let a = class extends U {
  constructor() {
    super(...arguments), it(this, c);
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("part", "auth-provider-default");
  }
  render() {
    return k`
			<uui-button
				type="button"
				@click=${() => this.onSubmit(this.manifest)}
				id="auth-provider-button"
				.label=${v(this, c, d)}
				.look=${this.manifest.meta?.defaultView?.look ?? "outline"}
				.color=${this.manifest.meta?.defaultView?.color ?? "default"}>
				${this.manifest.meta?.defaultView?.icon ? k`<uui-icon id="icon" .name=${this.manifest.meta?.defaultView?.icon}></uui-icon>` : R}
				${v(this, c, d)}
			</uui-button>
		`;
  }
};
c = /* @__PURE__ */ new WeakSet();
d = function() {
  const s = this.manifest.meta?.label ?? this.manifest.forProviderName, t = this.localize.string(s);
  return this.localize.term("login_signInWith", t);
};
a.styles = [
  z,
  A`
			:host {
				display: block;
			}

			#auth-provider-button {
				width: 100%;
			}

			#icon {
				margin-right: var(--uui-size-space-1);
			}
		`
];
l([
  p({ attribute: !1 })
], a.prototype, "userLoginState", 2);
l([
  p({ attribute: !1 })
], a.prototype, "manifest", 2);
l([
  p({ attribute: !1 })
], a.prototype, "onSubmit", 2);
a = l([
  S("umb-auth-provider-default")
], a);
const h = "umb:userAuthTokenResponse", ot = new O();
class st extends I {
  parse(t) {
    return super.parse(t, !1);
  }
}
class nt {
  constructor(t, e, i, o = "umbraco-back-office", n = "offline_access") {
    this.#t = new H(void 0), this.token$ = this.#t.asObservable(), this.authorizationSignal = new _(), this.#a = e, this.#e = i, this.#o = o, this.#u = n, this.#h = new E({
      authorization_endpoint: `${t}/umbraco/management/api/v1/security/back-office/authorize`,
      token_endpoint: `${t}/umbraco/management/api/v1/security/back-office/token`,
      revocation_endpoint: `${t}/umbraco/management/api/v1/security/back-office/revoke`,
      end_session_endpoint: `${t}/umbraco/management/api/v1/security/back-office/signout`
    }), this.#c = `${t}/umbraco/management/api/v1/security/back-office/link-login`, this.#l = `${t}/umbraco/management/api/v1/security/back-office/link-login-key`, this.#m = `${t}/umbraco/management/api/v1/security/back-office/unlink-login`, this.#i = new L(), this.#n = new C(ot), this.#r = new P(), this.#s = new q(this.#r, new st()), this.#s.setAuthorizationNotifier(this.#i), this.#i.setAuthorizationListener(async (r, u, m) => {
      if (m)
        throw console.error("Authorization error", m), this.authorizationSignal.next(), m;
      if (u) {
        let f;
        r.internal && r.internal.code_verifier && (f = r.internal.code_verifier), await this.#f(u.code, f), await this.performWithFreshTokens(), await this.#d();
      }
      this.authorizationSignal.next();
    });
  }
  // handlers
  #i;
  #s;
  #n;
  #r;
  // state
  #h;
  #a;
  #e;
  #o;
  #u;
  #t;
  // external login
  #c;
  #l;
  #m;
  /**
   * This method will initialize all the state needed for the auth flow.
   *
   * It will:
   * - Check if there is a token response in local storage
   * - If there is a token response, check if it is valid
   * - If it is not valid, check if there is a new authorization to be made
   * - If there is a new authorization to be made, complete it
   * - If there is no token response, check if there is a new authorization to be made
   * - If there is a new authorization to be made, complete it
   */
  async setInitialState() {
    const t = await this.#r.getItem(h);
    if (t) {
      const e = new M(JSON.parse(t));
      this.#t.setValue(e);
    }
  }
  /**
   * This method will check if there is a new authorization to be made and complete it if there is.
   * This method will be called on initialization to check if there is a new authorization to be made.
   * It is useful if there is a ?code query string parameter in the URL from the server or if the auth flow
   * saved the state in local storage before redirecting the user to the login page.
   */
  completeAuthorizationIfPossible() {
    return this.#s.completeAuthorizationRequestIfPossible();
  }
  /**
   * Make an authorization request to the server using the specified identity provider.
   * This method will redirect the user to the authorization endpoint of the server.
   * @param identityProvider The identity provider to use for the authorization request.
   * @param usernameHint (Optional) The username to use for the authorization request. It will be provided to the OpenID server as a hint.
   */
  makeAuthorizationRequest(t, e) {
    const i = { prompt: "consent", access_type: "offline" };
    t !== "Umbraco" && (i.identity_provider = t), e && (i.login_hint = e);
    const o = new g(
      {
        client_id: this.#o,
        redirect_uri: this.#a,
        scope: this.#u,
        response_type: g.RESPONSE_TYPE_CODE,
        state: void 0,
        extras: i
      },
      void 0,
      !0
    );
    return this.#s.performAuthorizationRequest(this.#h, o);
  }
  /**
   * This method will check if the user is logged in by validating if there is a token stored.
   * If no token is stored, it will return false.
   * @returns true if the user is logged in, false otherwise.
   */
  isAuthorized() {
    return !!this.#t.getValue();
  }
  /**
   * Forget all cached token state
   */
  async clearTokenStorage() {
    await this.#r.removeItem(h), this.#t.setValue(void 0), await this.#s.cleanupStaleAuthorizationData();
  }
  /**
   * This method will sign the user out of the application.
   */
  async signOut() {
    const t = [];
    if (this.#t.value) {
      const n = new w({
        token: this.#t.value.accessToken,
        client_id: this.#o,
        token_type_hint: "access_token"
      });
      if (t.push(this.#n.performRevokeTokenRequest(this.#h, n)), this.#t.value.refreshToken) {
        const r = new w({
          token: this.#t.value.refreshToken,
          client_id: this.#o,
          token_type_hint: "refresh_token"
        });
        t.push(
          this.#n.performRevokeTokenRequest(this.#h, r)
        );
      }
    }
    t.push(this.clearTokenStorage()), await Promise.allSettled(t);
    const e = new URL(this.#e, window.origin), i = this.#h.endSessionEndpoint;
    if (!i) {
      location.href = e.href;
      return;
    }
    const o = new URL(i, this.#a);
    o.searchParams.set("post_logout_redirect_uri", e.href), location.href = o.href;
  }
  /**
   * This method will check if the token needs to be refreshed and if so, it will refresh it and return the new access token.
   * If the token does not need to be refreshed, it will return the current access token.
   * @returns {Promise<string>} The access token for the user.
   */
  async performWithFreshTokens() {
    if (this.#t.value?.isValid())
      return Promise.resolve(this.#t.value.accessToken);
    const t = await this.makeRefreshTokenRequest(), e = this.#t.value?.accessToken ?? "";
    return t || this.clearTokenStorage(), Promise.resolve(e);
  }
  /**
   * This method will link the current user to the specified provider by redirecting the user to the link endpoint.
   * @param provider The provider to link to.
   */
  async linkLogin(t) {
    const e = await this.#k(t), i = document.createElement("form");
    i.method = "POST", i.action = this.#c, i.style.display = "none";
    const o = document.createElement("input");
    o.name = "provider", o.value = t, i.appendChild(o);
    const n = document.createElement("input");
    n.name = "linkKey", n.value = e, i.appendChild(n), document.body.appendChild(i), i.submit();
  }
  /**
   * This method will unlink the current user from the specified provider.
   * @param loginProvider
   * @param providerKey
   */
  async unlinkLogin(t, e) {
    const i = await this.performWithFreshTokens(), o = new Request(this.#m, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${i}` },
      body: JSON.stringify({ loginProvider: t, providerKey: e })
    }), n = await fetch(o);
    if (!n.ok)
      throw await n.json();
    return await this.signOut(), !0;
  }
  /**
   * Save the current token response to local storage.
   */
  async #d() {
    await this.#r.removeItem(h), this.#t.value && await this.#r.setItem(
      h,
      JSON.stringify(this.#t.value.toJson())
    );
  }
  /**
   * This method will make a token request to the server using the authorization code.
   * @param code
   * @param codeVerifier
   */
  async #f(t, e) {
    const i = {};
    e && (i.code_verifier = e);
    const o = new b({
      client_id: this.#o,
      redirect_uri: this.#a,
      grant_type: $,
      code: t,
      refresh_token: void 0,
      extras: i
    });
    await this.#p(o);
  }
  async makeRefreshTokenRequest() {
    if (!this.#t.value?.refreshToken)
      return !1;
    const t = new b({
      client_id: this.#o,
      redirect_uri: this.#a,
      grant_type: x,
      code: void 0,
      refresh_token: this.#t.value.refreshToken,
      extras: void 0
    });
    return this.#p(t);
  }
  /**
   * This method will make a token request to the server using the refresh token.
   * If the request fails, it will sign the user out (clear the token state).
   * @param request
   */
  async #p(t) {
    try {
      const e = await this.#n.performTokenRequest(this.#h, t);
      return this.#t.setValue(e), await this.#d(), !0;
    } catch (e) {
      return console.error("Token request error", e), this.clearTokenStorage(), !1;
    }
  }
  async #k(t) {
    const e = await this.performWithFreshTokens(), i = await fetch(`${this.#l}?provider=${t}`, {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${e}`,
        "Content-Type": "application/json"
      }
    });
    if (!i.ok)
      throw new Error("Failed to link login");
    return i.json();
  }
}
const rt = new T("Umb.Modal.AuthTimeout", {
  modal: {
    type: "dialog"
  }
});
class at extends G {
  #i;
  #s;
  #n = !1;
  #r = !1;
  constructor(t, e) {
    super(t, "UmbAuthSessionTimeoutController"), this.#s = t, this.#i = new SharedWorker(new URL(
      /* @vite-ignore */
      "/umbraco/backoffice/packages/core/assets/token-check.worker-BA0acAb6.js",
      import.meta.url
    ), {
      name: "TokenCheckWorker",
      type: "module"
    }), this.#i.port.start(), this.#i.port.onmessage = async (i) => {
      if (this.#n) {
        console.log(
          "[Auth Context] User chose to stay logged in, attempting to validate token instead of logging out."
        ), await this.#o();
        return;
      }
      i.data?.command === "logout" ? t.timeOut() : i.data?.command === "refreshToken" && this.#e(i.data.secondsUntilLogout);
    }, this.observe(
      e.token$,
      (i) => {
        console.log("[Auth Context] Informing token check worker about new token response."), this.#i?.port.postMessage({
          command: "init",
          tokenResponse: i
        });
      },
      "_authFlowAuthorizationSignal"
    ), this.observe(
      t.timeoutSignal,
      async () => {
        this.#i?.port.postMessage({
          command: "init"
        }), await this.#a();
      },
      "_authFlowTimeoutSignal"
    ), this.observe(
      t.isAuthorized,
      (i) => {
        i && this.#h();
      },
      "_authFlowIsAuthorizedSignal"
    );
  }
  destroy() {
    super.destroy(), this.#i?.port.close(), this.#i = void 0;
  }
  /**
   * Observe the user's preference for staying logged in
   * and update the internal state accordingly.
   * This method fetches the current user configuration from the server to find the value.
   * // TODO: We cannot observe the config store directly here yet, as it would create a circular dependency, so maybe we need to move the config option somewhere else?
   */
  async #h() {
    if (this.#r) return;
    this.#r = !0;
    const { data: t } = await X.getUserCurrentConfiguration();
    this.#n = t?.keepUserLoggedIn ?? !1;
  }
  async #a() {
    const t = (await import("@umbraco-cms/backoffice/modal")).UMB_MODAL_MANAGER_CONTEXT;
    (await this.getContext(t))?.close("auth-timeout");
  }
  async #e(t) {
    const e = (await import("@umbraco-cms/backoffice/modal")).UMB_MODAL_MANAGER_CONTEXT;
    (await this.getContext(e))?.open(this, rt, {
      modal: {
        key: "auth-timeout"
      },
      data: {
        remainingTimeInSeconds: t,
        onLogout: () => {
          this.#s.signOut();
        },
        onContinue: () => {
          this.#o();
        }
      }
    }).onSubmit().catch(() => {
      this.#o();
    });
  }
  async #o() {
    try {
      await this.#s.validateToken();
    } catch (t) {
      console.error("[Auth Context] Error validating token:", t), this.#s.timeOut();
    }
  }
}
class vt extends J {
  constructor(t, e, i, o) {
    super(t, j), this.#i = new K(!1), this.#s = new _(), this.#n = new N(1), this.isInitialized = this.#n.asObservable(), this.isAuthorized = this.#i.asObservable().pipe(B()), this.timeoutSignal = this.#s.asObservable().pipe(
      // Audit the timeout signal to ensure that it waits for 1s before allowing another emission, which prevents rapid firing of the signal.
      // This is useful to prevent the UI from being flooded with timeout events.
      F(1e3)
    ), this.#r = o, this.#h = e, this.#a = i, this.#e = new nt(e, this.getRedirectUrl(), this.getPostLogoutRedirectUrl()), this.observe(
      this.authorizationSignal,
      () => {
        this.getIsAuthorized();
      },
      "_authFlowAuthorizationSignal"
    ), window.addEventListener("storage", this.#t.bind(this)), Q() || new at(this, this.#e);
  }
  #i;
  #s;
  #n;
  #r;
  #h;
  #a;
  #e;
  #o;
  #u;
  /**
   * Observable that acts as a signal for when the authorization state changes.
   * @remark It will emit once per second, so it can be used to trigger UI updates or other actions when the authorization state changes.
   * @returns {Subject<void>} An observable that emits when the authorization state changes.
   */
  get authorizationSignal() {
    return this.#e.authorizationSignal.asObservable().pipe(
      // Throttle the signal to ensure that it emits once, then waits for 1s before allowing another emission.
      V(1e3)
    );
  }
  destroy() {
    super.destroy(), window.removeEventListener("storage", this.#t.bind(this));
  }
  async #t(t) {
    t.key === h && (this.#o?.close(), await this.setInitialState(), this.#e.authorizationSignal.next());
  }
  /**
   * Initiates the login flow.
   * @param identityProvider The provider to use for login. Default is 'Umbraco'.
   * @param redirect If true, the user will be redirected to the login page.
   * @param usernameHint The username hint to use for login.
   * @param manifest The manifest for the registered provider.
   */
  async makeAuthorizationRequest(t = "Umbraco", e, i, o) {
    const n = await this.#e.makeAuthorizationRequest(t, i);
    if (e) {
      location.href = n;
      return;
    }
    const r = o?.meta?.behavior?.popupTarget ?? "umbracoAuthPopup", u = o?.meta?.behavior?.popupFeatures ?? "width=600,height=600,menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,toolbar=no";
    return !this.#o || this.#o.closed ? this.#o = window.open(n, r, u) : this.#u !== n && (this.#o = window.open(n, r), this.#o?.focus()), this.#u = n, W(this.authorizationSignal);
  }
  /**
   * Completes the login flow.
   */
  completeAuthorizationRequest() {
    return this.#e.completeAuthorizationIfPossible();
  }
  /**
   * Checks if the user is authorized. If Authorization is bypassed, the user is always authorized.
   * @returns True if the user is authorized, otherwise false.
   */
  getIsAuthorized() {
    if (this.#r)
      return this.#i.setValue(!0), !0;
    {
      const t = this.#e.isAuthorized();
      return this.#i.setValue(t), t;
    }
  }
  /**
   * Sets the initial state of the auth flow.
   * @returns {Promise<void>}
   */
  setInitialState() {
    return this.#e.setInitialState();
  }
  /**
   * Gets the latest token from the Management API.
   * If the token is expired, it will be refreshed.
   *
   * NB! The user may experience being redirected to the login screen if the token is expired.
   * @example <caption>Using the latest token</caption>
   * ```js
   *   const token = await authContext.getLatestToken();
   *   const result = await fetch('https://my-api.com', { headers: { Authorization: `Bearer ${token}` } });
   * ```
   * @memberof UmbAuthContext
   * @returns The latest token from the Management API
   */
  getLatestToken() {
    return this.#e.performWithFreshTokens();
  }
  /**
   * Validates the token against the server and returns true if the token is valid.
   * @memberof UmbAuthContext
   * @returns True if the token is valid, otherwise false
   */
  async validateToken() {
    return this.#r || this.#e.makeRefreshTokenRequest();
  }
  /**
   * Clears the token storage.
   * @memberof UmbAuthContext
   */
  clearTokenStorage() {
    return this.#e.clearTokenStorage();
  }
  /**
   * Handles the case where the user has timed out, i.e. the token has expired.
   * This will clear the token storage and set the user as unauthorized.
   * @memberof UmbAuthContext
   */
  timeOut() {
    this.#i.setValue(!1), this.#s.next();
  }
  /**
   * Signs the user out by removing any tokens from the browser.
   * @memberof UmbAuthContext
   */
  signOut() {
    return this.#e.signOut();
  }
  /**
   * Get the server url to the Management API.
   * @memberof UmbAuthContext
   * @example <caption>Using the server url</caption>
   * ```js
   * 	const serverUrl = authContext.getServerUrl();
   * 	OpenAPI.BASE = serverUrl;
   * ```
   * @example <caption></caption>
   * ```js
   * 	const serverUrl = authContext.getServerUrl();
   * 	const token = await authContext.getLatestToken();
   * 	const result = await fetch(`${serverUrl}/umbraco/management/api/v1/my-resource`, { headers: { Authorization: `Bearer ${token}` } });
   * ```
   * @returns The server url to the Management API
   */
  getServerUrl() {
    return this.#h;
  }
  /**
   * Get the default OpenAPI configuration, which is set up to communicate with the Management API.
   * @remark This is useful if you want to communicate with your own resources generated by the [@hey-api/openapi-ts](https://github.com/hey-api/openapi-ts) library.
   * @memberof UmbAuthContext
   * @example <caption>Using the default OpenAPI configuration</caption>
   * ```js
   * const defaultOpenApi = authContext.getOpenApiConfiguration();
   * client.setConfig({
   *   base: defaultOpenApi.base,
   *   auth: defaultOpenApi.token,
   * });
   * ```
   * @returns {UmbOpenApiConfiguration} The default OpenAPI configuration
   */
  getOpenApiConfiguration() {
    const t = Y.getConfig();
    return {
      base: t.baseUrl,
      credentials: t.credentials,
      token: () => this.getLatestToken()
    };
  }
  /**
   * Sets the auth context as initialized, which means that the auth context is ready to be used.
   * @remark This is used to let the app context know that the core module is ready, which means that the core auth providers are available.
   */
  setInitialized() {
    this.#n.next(), this.#n.complete();
  }
  /**
   * Gets all registered auth providers.
   * @param extensionsRegistry
   */
  getAuthProviders(t) {
    return this.#n.pipe(
      D(() => t.byType("authProvider"))
    );
  }
  /**
   * Gets the authorized redirect url.
   * @returns The redirect url, which is the backoffice path.
   */
  getRedirectUrl() {
    return `${window.location.origin}${this.#a}${this.#a.endsWith("/") ? "" : "/"}oauth_complete`;
  }
  /**
   * Gets the post logout redirect url.
   * @returns The post logout redirect url, which is the backoffice path with the logout path appended.
   */
  getPostLogoutRedirectUrl() {
    return `${window.location.origin}${this.#a}${this.#a.endsWith("/") ? "" : "/"}logout`;
  }
  /**
   * @param provider
   * @see UmbAuthFlow#linkLogin
   */
  linkLogin(t) {
    return this.#e.linkLogin(t);
  }
  /**
   * @param providerName
   * @param providerKey
   * @see UmbAuthFlow#unlinkLogin
   */
  unlinkLogin(t, e) {
    return this.#e.unlinkLogin(t, e);
  }
}
const _t = new T("Umb.Modal.AppAuth", {
  modal: {
    type: "dialog"
  }
});
export {
  j as UMB_AUTH_CONTEXT,
  _t as UMB_MODAL_APP_AUTH,
  rt as UMB_MODAL_AUTH_TIMEOUT,
  h as UMB_STORAGE_TOKEN_RESPONSE_NAME,
  vt as UmbAuthContext,
  a as UmbAuthProviderDefaultElement
};
//# sourceMappingURL=index.js.map

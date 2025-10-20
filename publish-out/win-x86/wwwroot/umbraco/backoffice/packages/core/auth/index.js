import { css as R, property as f, customElement as S, nothing as A, html as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as z } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { FetchRequestor as E, AuthorizationServiceConfiguration as O, AuthorizationNotifier as U, BaseTokenRequestHandler as q, LocalStorageBackend as L, RedirectRequestHandler as $, TokenResponse as x, AuthorizationRequest as _, RevokeTokenRequest as b, TokenRequest as w, GRANT_TYPE_AUTHORIZATION_CODE as N, GRANT_TYPE_REFRESH_TOKEN as I, BasicQueryStringUtils as C } from "@umbraco-cms/backoffice/external/openid";
import { Subject as y, ReplaySubject as F, firstValueFrom as B, switchMap as W } from "@umbraco-cms/backoffice/external/rxjs";
import { U as M } from "../auth.context.token-CFi72pnR.js";
import { UmbContextBase as H } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as V } from "@umbraco-cms/backoffice/observable-api";
import { umbHttpClient as D } from "@umbraco-cms/backoffice/http-client";
import { U as j } from "../modal-token-wEQqBBXI.js";
var J = Object.defineProperty, K = Object.getOwnPropertyDescriptor, T = (n) => {
  throw TypeError(n);
}, l = (n, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? K(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && J(t, e, s), s;
}, G = (n, t, e) => t.has(n) || T("Cannot " + e), v = (n, t, e) => (G(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Y = (n, t, e) => t.has(n) ? T("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), u, m;
let a = class extends z {
  constructor() {
    super(...arguments), Y(this, u);
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("part", "auth-provider-default");
  }
  render() {
    return g`
			<uui-button
				type="button"
				@click=${() => this.onSubmit(this.manifest)}
				id="auth-provider-button"
				.label=${v(this, u, m)}
				.look=${this.manifest.meta?.defaultView?.look ?? "outline"}
				.color=${this.manifest.meta?.defaultView?.color ?? "default"}>
				${this.manifest.meta?.defaultView?.icon ? g`<uui-icon id="icon" .name=${this.manifest.meta?.defaultView?.icon}></uui-icon>` : A}
				${v(this, u, m)}
			</uui-button>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
m = function() {
  const n = this.manifest.meta?.label ?? this.manifest.forProviderName, t = this.localize.string(n);
  return this.localize.term("login_signInWith", t);
};
a.styles = [
  P,
  R`
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
  f({ attribute: !1 })
], a.prototype, "userLoginState", 2);
l([
  f({ attribute: !1 })
], a.prototype, "manifest", 2);
l([
  f({ attribute: !1 })
], a.prototype, "onSubmit", 2);
a = l([
  S("umb-auth-provider-default")
], a);
const c = "umb:userAuthTokenResponse", Q = new E();
class X extends C {
  parse(t) {
    return super.parse(t, !1);
  }
}
class Z {
  constructor(t, e, i, s, o = "umbraco-back-office", r = "offline_access") {
    this.authorizationSignal = new y(), this.#s = e, this.#e = i, this.#c = s, this.#i = o, this.#u = r, this.#h = new O({
      authorization_endpoint: `${t}/umbraco/management/api/v1/security/back-office/authorize`,
      token_endpoint: `${t}/umbraco/management/api/v1/security/back-office/token`,
      revocation_endpoint: `${t}/umbraco/management/api/v1/security/back-office/revoke`,
      end_session_endpoint: `${t}/umbraco/management/api/v1/security/back-office/signout`
    }), this.#l = `${t}/umbraco/management/api/v1/security/back-office/link-login`, this.#p = `${t}/umbraco/management/api/v1/security/back-office/link-login-key`, this.#m = `${t}/umbraco/management/api/v1/security/back-office/unlink-login`, this.#n = new U(), this.#o = new q(Q), this.#a = new L(), this.#r = new $(this.#a, new X()), this.#r.setAuthorizationNotifier(this.#n), this.#n.setAuthorizationListener(async (h, d, p) => {
      if (p)
        throw console.error("Authorization error", p), this.authorizationSignal.next(), p;
      if (d) {
        let k;
        h.internal && h.internal.code_verifier && (k = h.internal.code_verifier), await this.#k(d.code, k), await this.performWithFreshTokens(), await this.#f();
      }
      this.authorizationSignal.next();
    });
  }
  // handlers
  #n;
  #r;
  #o;
  #a;
  // state
  #h;
  #s;
  #e;
  #i;
  #u;
  #c;
  // tokens
  #t;
  // external login
  #l;
  #p;
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
    const t = await this.#a.getItem(c);
    if (t) {
      const e = new x(JSON.parse(t));
      this.#t = e;
    }
  }
  /**
   * This method will check if there is a new authorization to be made and complete it if there is.
   * This method will be called on initialization to check if there is a new authorization to be made.
   * It is useful if there is a ?code query string parameter in the URL from the server or if the auth flow
   * saved the state in local storage before redirecting the user to the login page.
   */
  completeAuthorizationIfPossible() {
    return this.#r.completeAuthorizationRequestIfPossible();
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
    const s = new _(
      {
        client_id: this.#i,
        redirect_uri: this.#s,
        scope: this.#u,
        response_type: _.RESPONSE_TYPE_CODE,
        state: void 0,
        extras: i
      },
      void 0,
      !0
    );
    return this.#r.performAuthorizationRequest(this.#h, s);
  }
  /**
   * This method will check if the user is logged in by validating if there is a token stored.
   * If no token is stored, it will return false.
   * @returns true if the user is logged in, false otherwise.
   */
  isAuthorized() {
    return !!this.#t;
  }
  /**
   * Forget all cached token state
   */
  async clearTokenStorage() {
    await this.#a.removeItem(c), this.#t = void 0;
  }
  /**
   * This method will sign the user out of the application.
   */
  async signOut() {
    const t = [];
    if (this.#t) {
      const o = new b({
        token: this.#t.accessToken,
        client_id: this.#i,
        token_type_hint: "access_token"
      });
      if (t.push(this.#o.performRevokeTokenRequest(this.#h, o)), this.#t.refreshToken) {
        const r = new b({
          token: this.#t.refreshToken,
          client_id: this.#i,
          token_type_hint: "refresh_token"
        });
        t.push(
          this.#o.performRevokeTokenRequest(this.#h, r)
        );
      }
    }
    t.push(this.clearTokenStorage()), await Promise.allSettled(t);
    const e = new URL(this.#e, window.origin), i = this.#h.endSessionEndpoint;
    if (!i) {
      location.href = e.href;
      return;
    }
    const s = new URL(i, this.#s);
    s.searchParams.set("post_logout_redirect_uri", e.href), location.href = s.href;
  }
  /**
   * This method will check if the token needs to be refreshed and if so, it will refresh it and return the new access token.
   * If the token does not need to be refreshed, it will return the current access token.
   * @returns The access token for the user.
   */
  async performWithFreshTokens() {
    return this.#t?.isValid() ? Promise.resolve(this.#t.accessToken) : await this.makeRefreshTokenRequest() ? this.#t ? Promise.resolve(this.#t.accessToken) : Promise.reject("Missing tokenResponse.") : (this.clearTokenStorage(), this.#c.next(), Promise.reject("Missing tokenResponse."));
  }
  /**
   * This method will link the current user to the specified provider by redirecting the user to the link endpoint.
   * @param provider The provider to link to.
   */
  async linkLogin(t) {
    const e = await this.#g(t), i = document.createElement("form");
    i.method = "POST", i.action = this.#l, i.style.display = "none";
    const s = document.createElement("input");
    s.name = "provider", s.value = t, i.appendChild(s);
    const o = document.createElement("input");
    o.name = "linkKey", o.value = e, i.appendChild(o), document.body.appendChild(i), i.submit();
  }
  /**
   * This method will unlink the current user from the specified provider.
   * @param loginProvider
   * @param providerKey
   */
  async unlinkLogin(t, e) {
    const i = await this.performWithFreshTokens(), s = new Request(this.#m, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${i}` },
      body: JSON.stringify({ loginProvider: t, providerKey: e })
    }), o = await fetch(s);
    if (!o.ok)
      throw await o.json();
    return await this.signOut(), !0;
  }
  /**
   * Save the current token response to local storage.
   */
  async #f() {
    this.#t && await this.#a.setItem(c, JSON.stringify(this.#t.toJson()));
  }
  /**
   * This method will make a token request to the server using the authorization code.
   * @param code
   * @param codeVerifier
   */
  async #k(t, e) {
    const i = {};
    e && (i.code_verifier = e);
    const s = new w({
      client_id: this.#i,
      redirect_uri: this.#s,
      grant_type: N,
      code: t,
      refresh_token: void 0,
      extras: i
    });
    await this.#d(s);
  }
  async makeRefreshTokenRequest() {
    if (!this.#t?.refreshToken)
      return !1;
    const t = new w({
      client_id: this.#i,
      redirect_uri: this.#s,
      grant_type: I,
      code: void 0,
      refresh_token: this.#t.refreshToken,
      extras: void 0
    });
    return this.#d(t);
  }
  /**
   * This method will make a token request to the server using the refresh token.
   * If the request fails, it will sign the user out (clear the token state).
   * @param request
   */
  async #d(t) {
    try {
      return this.#t = await this.#o.performTokenRequest(this.#h, t), this.#f(), !0;
    } catch (e) {
      return console.error("Token request error", e), this.clearTokenStorage(), !1;
    }
  }
  async #g(t) {
    const e = await this.performWithFreshTokens(), i = await fetch(`${this.#p}?provider=${t}`, {
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
class ct extends H {
  constructor(t, e, i, s) {
    super(t, M), this.#n = new V(!1), this.#r = new y(), this.#o = new F(1), this.isInitialized = this.#o.asObservable(), this.isAuthorized = this.#n.asObservable(), this.timeoutSignal = this.#r.asObservable(), this.#a = s, this.#h = e, this.#s = i, this.#e = new Z(
      e,
      this.getRedirectUrl(),
      this.getPostLogoutRedirectUrl(),
      this.#r
    ), this.observe(
      this.authorizationSignal,
      () => {
        this.getIsAuthorized();
      },
      "_authFlowAuthorizationSignal"
    ), window.addEventListener("storage", this.#c.bind(this));
  }
  #n;
  #r;
  #o;
  #a;
  #h;
  #s;
  #e;
  #i;
  #u;
  /**
   * Observable that acts as a signal for when the authorization state changes.
   */
  get authorizationSignal() {
    return this.#e.authorizationSignal;
  }
  destroy() {
    super.destroy(), window.removeEventListener("storage", this.#c.bind(this));
  }
  async #c(t) {
    t.key === c && (this.#i?.close(), await this.setInitialState(), this.authorizationSignal.next());
  }
  /**
   * Initiates the login flow.
   * @param identityProvider The provider to use for login. Default is 'Umbraco'.
   * @param redirect If true, the user will be redirected to the login page.
   * @param usernameHint The username hint to use for login.
   * @param manifest The manifest for the registered provider.
   */
  async makeAuthorizationRequest(t = "Umbraco", e, i, s) {
    const o = await this.#e.makeAuthorizationRequest(t, i);
    if (e) {
      location.href = o;
      return;
    }
    const r = s?.meta?.behavior?.popupTarget ?? "umbracoAuthPopup", h = s?.meta?.behavior?.popupFeatures ?? "width=600,height=600,menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,toolbar=no";
    return !this.#i || this.#i.closed ? this.#i = window.open(o, r, h) : this.#u !== o && (this.#i = window.open(o, r), this.#i?.focus()), this.#u = o, B(this.authorizationSignal);
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
    if (this.#a)
      return this.#n.setValue(!0), !0;
    {
      const t = this.#e.isAuthorized();
      return this.#n.setValue(t), t;
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
    return this.#a || this.#e.makeRefreshTokenRequest();
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
    this.#n.setValue(!1), this.#r.next();
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
    const t = D.getConfig();
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
    this.#o.next(), this.#o.complete();
  }
  /**
   * Gets all registered auth providers.
   * @param extensionsRegistry
   */
  getAuthProviders(t) {
    return this.#o.pipe(
      W(() => t.byType("authProvider"))
    );
  }
  /**
   * Gets the authorized redirect url.
   * @returns The redirect url, which is the backoffice path.
   */
  getRedirectUrl() {
    return `${window.location.origin}${this.#s}${this.#s.endsWith("/") ? "" : "/"}oauth_complete`;
  }
  /**
   * Gets the post logout redirect url.
   * @returns The post logout redirect url, which is the backoffice path with the logout path appended.
   */
  getPostLogoutRedirectUrl() {
    return `${window.location.origin}${this.#s}${this.#s.endsWith("/") ? "" : "/"}logout`;
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
const lt = new j("Umb.Modal.AppAuth", {
  modal: {
    type: "dialog"
  }
});
export {
  M as UMB_AUTH_CONTEXT,
  lt as UMB_MODAL_APP_AUTH,
  c as UMB_STORAGE_TOKEN_RESPONSE_NAME,
  ct as UmbAuthContext,
  a as UmbAuthProviderDefaultElement
};
//# sourceMappingURL=index.js.map

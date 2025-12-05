import "./modal-manager.context-CIirlzRD.js";
import "@umbraco-cms/backoffice/class-api";
import "./confirm-modal.element-COhIMOef.js";
import "./discard-changes-modal.element-DU89FGO1.js";
import { U as h } from "./modal-base.element-DzLTq939.js";
import { U as p } from "./text-style.style-BXyaVaXp.js";
import { U as m } from "./auth.context.token-CFi72pnR.js";
import { when as v, html as l, css as f, state as d, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UMB_SERVER_CONTEXT as _ } from "@umbraco-cms/backoffice/server";
var w = Object.defineProperty, y = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, g = (e, o, t, a) => {
  for (var r = a > 1 ? void 0 : a ? y(o, t) : o, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (a ? n(o, t, r) : n(r)) || r);
  return a && r && w(o, t, r), r;
}, x = (e, o, t) => o.has(e) || u("Cannot " + t), k = (e, o, t) => (x(e, o, "read from private field"), t ? t.call(e) : o.get(e)), U = (e, o, t) => o.has(e) ? u("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), c;
let i = class extends h {
  constructor() {
    super(...arguments), this._serverUrl = "", this._loading = !0, this._allowLocalLogin = !1, U(this, c, (e) => this._allowLocalLogin ? !0 : e.forProviderName.toLowerCase() !== "umbraco"), this.onSubmit = async (e, o) => {
      try {
        const t = await this.getContext(m);
        if (!t)
          throw new Error("Auth context not available");
        const a = typeof e == "string" ? void 0 : e, r = typeof e == "string" ? e : e.forProviderName, s = this.data?.userLoginState === "timedOut";
        await t.makeAuthorizationRequest(r, !s, o, a);
        const n = t.getIsAuthorized();
        this.value = { success: n }, n && this._submitModal();
      } catch (t) {
        console.error("[AuthModal] Error submitting auth request", t), this._error = t instanceof Error ? t.message : "Unknown error (see console)";
      }
    };
  }
  get props() {
    return {
      userLoginState: this.data?.userLoginState ?? "loggingIn",
      onSubmit: this.onSubmit.bind(this)
    };
  }
  get headline() {
    return this.data?.userLoginState === "timedOut" ? this.localize.term("login_instruction") : this.localize.term(
      [
        "login_greeting0",
        "login_greeting1",
        "login_greeting2",
        "login_greeting3",
        "login_greeting4",
        "login_greeting5",
        "login_greeting6"
      ][(/* @__PURE__ */ new Date()).getDay()]
    );
  }
  firstUpdated() {
    this.consumeContext(_, (e) => {
      this._serverUrl = e?.getServerUrl() ?? "", this.style.setProperty(
        "--image",
        `url('${this._serverUrl}/umbraco/management/api/v1/security/back-office/graphics/login-background') no-repeat center center/cover`
      );
      const o = e?.getServerConnection();
      this.observe(o?.allowLocalLogin, (t) => {
        this._allowLocalLogin = t ?? !1;
      }), this.observe(o?.isConnected, (t) => {
        this._loading = !t;
      });
    });
  }
  render() {
    return l`
			<div id="layout">
				<img
					id="logo-on-background"
					src="${this._serverUrl}/umbraco/management/api/v1/security/back-office/graphics/login-logo-alternative"
					alt="Logo"
					aria-hidden="true"
					part="auth-logo-background" />
				<div id="graphic" aria-hidden="true">
					<img
						part="auth-logo"
						id="logo-on-image"
						src="${this._serverUrl}/umbraco/management/api/v1/security/back-office/graphics/login-logo"
						alt="Logo" />
					<svg
						id="curve-top"
						width="1746"
						height="1374"
						viewBox="0 0 1746 1374"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M8 1C61.5 722.5 206.5 1366.5 1745.5 1366.5" stroke="currentColor" stroke-width="15"></path>
					</svg>
					<svg
						id="curve-bottom"
						width="1364"
						height="552"
						viewBox="0 0 1364 552"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M1 8C387 24 1109 11 1357 548" stroke="currentColor" stroke-width="15"></path>
					</svg>
				</div>
				<div id="content-container">
					<div id="content">
						<header id="header">
							<h1 id="greeting">${this.headline}</h1>
						</header>
						${this._error ? l`<p style="margin-top:0;color:red">${this._error}</p>` : ""}
						${this.data?.userLoginState === "timedOut" ? l`<p style="margin-top:0">${this.localize.term("login_timeout")}</p>` : ""}
						${v(
      this._loading,
      () => l`
								<div id="loader">
									<uui-loader></uui-loader>
								</div>
							`,
      () => l` <umb-extension-slot
									id="providers"
									type="authProvider"
									default-element="umb-auth-provider-default"
									.props=${this.props}
									.filter=${k(this, c)}></umb-extension-slot>`
    )}
					</div>
				</div>
			</div>
		`;
  }
};
c = /* @__PURE__ */ new WeakMap();
i.styles = [
  p,
  f`
			:host {
				display: block;
				background: var(--uui-color-background, #f4f4f4);

				--curves-color: var(--umb-login-curves-color, #f5c1bc);
				--curves-display: var(--umb-login-curves-display, inline);
			}

			#layout {
				display: flex;
				justify-content: center;
				padding: 32px 0 32px 32px;
				width: 100vw;
				max-width: 1920px;
				height: calc(100vh - 64px);
			}

			#graphic {
				position: relative;
				width: 100%;
				height: 100%;
				background: var(--umb-login-image, var(--image));
				border-radius: var(--umb-login-image-border-radius, 38px);
				position: relative;
				overflow: hidden;
				color: var(--curves-color);
			}

			#graphic svg {
				position: absolute;
				width: 45%;
				height: fit-content;
				display: var(--curves-display);
			}

			#curve-top {
				top: -9%;
				right: -9%;
			}

			#curve-bottom {
				bottom: -0.5%;
				left: -0.1%;
			}

			#content-container {
				background: var(--umb-login-content-background, none);
				display: var(--umb-login-content-display, flex);
				width: var(--umb-login-content-width, 100%);
				height: var(--umb-login-content-height, 100%);
				overflow: auto;
				border-radius: var(--umb-login-content-border-radius, 0);
				padding: 16px;
				margin: auto;
			}

			#content {
				max-width: 360px;
				margin: auto;
				width: 100%;
			}

			#logo-on-background {
				display: none;
			}

			#logo-on-image,
			#logo-on-background {
				position: absolute;
				top: 24px;
				left: 24px;
				height: 55px;
			}

			#header {
				text-align: center;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-5);
			}

			#greeting {
				color: var(--umb-login-greeting-color, var(--uui-color-interactive-emphasis));
				text-align: center;
				font-weight: 400;
				font-size: var(--umb-login-header-font-size-large, 4rem);
				margin: 0 0 var(--uui-size-layout-1);
				line-height: 1.2;
			}

			#providers {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-5);
			}

			#loader {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			@media (max-width: 900px) {
				#graphic {
					display: none;
				}
				#logo-on-background {
					display: block;
				}
			}
		`
];
g([
  d()
], i.prototype, "_error", 2);
g([
  d()
], i.prototype, "_serverUrl", 2);
g([
  d()
], i.prototype, "_loading", 2);
g([
  d()
], i.prototype, "_allowLocalLogin", 2);
i = g([
  b("umb-app-auth-modal")
], i);
const M = i;
export {
  i as UmbAppAuthModalElement,
  M as default
};
//# sourceMappingURL=umb-app-auth-modal.element-sdBR0D5d.js.map

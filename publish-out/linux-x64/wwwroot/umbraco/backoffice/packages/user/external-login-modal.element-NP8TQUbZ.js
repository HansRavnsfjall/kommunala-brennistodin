import "./current-user.store.token-N-3TWEFa.js";
import { UmbCurrentUserRepository as C } from "./current-user.repository-CzsCrtUS.js";
import "@umbraco-cms/backoffice/user";
import "@umbraco-cms/backoffice/class-api";
import { mergeObservables as $ } from "@umbraco-cms/backoffice/observable-api";
import { repeat as U, html as l, when as y, nothing as O, css as P, property as S, state as M, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as Y } from "@umbraco-cms/backoffice/lit-element";
import { umbConfirmModal as _ } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as A } from "@umbraco-cms/backoffice/style";
import { umbExtensionsRegistry as D } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_AUTH_CONTEXT as b } from "@umbraco-cms/backoffice/auth";
import { UMB_NOTIFICATION_CONTEXT as W } from "@umbraco-cms/backoffice/notification";
import { UmbApiError as K } from "@umbraco-cms/backoffice/resources";
var F = Object.defineProperty, I = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, p = (e, r, i, t) => {
  for (var a = t > 1 ? void 0 : t ? I(r, i) : r, d = e.length - 1, o; d >= 0; d--)
    (o = e[d]) && (a = (t ? o(r, i, a) : o(a)) || a);
  return t && a && F(r, i, a), a;
}, v = (e, r, i) => r.has(e) || k("Cannot " + i), g = (e, r, i) => (v(e, r, "read from private field"), i ? i.call(e) : r.get(e)), h = (e, r, i) => r.has(e) ? k("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, i), R = (e, r, i, t) => (v(e, r, "write to private field"), r.set(e, i), i), c = (e, r, i) => (v(e, r, "access private method"), i), f, u, n, x, z, w, E, L;
let s = class extends Y {
  constructor() {
    super(), h(this, n), this._items = [], h(this, f, new C(this)), h(this, u), c(this, n, x).call(this), this.consumeContext(W, (e) => {
      R(this, u, e);
    });
  }
  render() {
    return l`
			<umb-body-layout headline="${this.localize.term("defaultdialogs_externalLoginProviders")}">
				<div id="main">
					${U(
      this._items,
      (e) => e.providerSchemeName,
      (e) => c(this, n, w).call(this, e)
    )}
				</div>
				<div slot="actions">
					<uui-button @click=${c(this, n, z)} look="secondary" .label=${this.localize.term("general_close")}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
x = async function() {
  const e = (await g(this, f).requestExternalLoginProviders()).asObservable(), r = D.byTypeAndFilter(
    "authProvider",
    (t) => !!t.meta?.linking?.allowManualLinking
  ), i = $(
    [e, r],
    ([t, a]) => a.map((o) => {
      const m = t.find(
        (N) => N.providerSchemeName === o.forProviderName
      );
      return {
        existsOnServer: !!m,
        hasManualLinkingEnabled: m?.hasManualLinkingEnabled ?? !1,
        isLinkedOnUser: m?.isLinkedOnUser ?? !1,
        providerKey: m?.providerKey ?? "",
        providerSchemeName: o.forProviderName,
        icon: o.meta?.defaultView?.icon,
        displayName: o.meta?.label ?? o.forProviderName ?? o.name
      };
    })
  );
  this.observe(
    i,
    (t) => {
      this._items = t;
    },
    "_externalLoginProviders"
  );
};
z = function() {
  this.modalContext?.submit();
};
w = function(e) {
  return l`
			<uui-box>
				<div class="header" slot="header">
					<uui-icon class="header-icon" name=${e.icon ?? "icon-cloud"}></uui-icon>
					${this.localize.string(e.displayName)}
				</div>
				${y(
    e.existsOnServer,
    () => O,
    () => l`<div style="position:relative" slot="header-actions">
							<uui-badge
								style="cursor:default"
								title="Warning: This provider is not configured on the server"
								color="danger"
								look="primary">
								!
							</uui-badge>
						</div>`
  )}
				${y(
    e.isLinkedOnUser,
    () => l`
						<p style="margin-top:0">
							<umb-localize key="defaultdialogs_linkedToService">Your account is linked to this service</umb-localize>
						</p>
						<uui-button
							type="button"
							look="secondary"
							color="danger"
							.label=${this.localize.term("defaultdialogs_unLinkYour", this.localize.string(e.displayName))}
							@click=${() => c(this, n, L).call(this, e)}>
							<umb-localize key="defaultdialogs_unLinkYour" .args=${[this.localize.string(e.displayName)]}>
								Unlink your ${this.localize.string(e.displayName)} account
							</umb-localize>
							<uui-icon name="icon-window-popout"></uui-icon>
						</uui-button>
					`,
    () => l`
						<uui-button
							type="button"
							look="secondary"
							.label=${this.localize.term("defaultdialogs_linkYour", e.displayName)}
							?disabled=${!e.existsOnServer || !e.hasManualLinkingEnabled}
							@click=${() => c(this, n, E).call(this, e)}>
							<umb-localize key="defaultdialogs_linkYour" .args=${[this.localize.string(e.displayName)]}>
								Link your ${this.localize.string(e.displayName)} account
							</umb-localize>
							<uui-icon name="icon-window-popout"></uui-icon>
						</uui-button>
					`
  )}
			</uui-box>
		`;
};
E = async function(e) {
  const r = this.localize.string(e.displayName);
  try {
    await _(this, {
      headline: this.localize.term("defaultdialogs_linkYour", r),
      content: this.localize.term("defaultdialogs_linkYourConfirm", r),
      confirmLabel: this.localize.term("general_continue"),
      color: "positive"
    });
    const i = await this.getContext(b);
    if (!i)
      throw new Error("Auth context is missing");
    await i.linkLogin(e.providerSchemeName);
  } catch (i) {
    i instanceof Error && g(this, u)?.peek("danger", {
      data: {
        headline: this.localize.term("defaultdialogs_linkYour", r),
        message: i.message
      }
    });
  }
};
L = async function(e) {
  if (!e.providerKey)
    throw new Error("Provider key is missing");
  const r = this.localize.string(e.displayName);
  try {
    await _(this, {
      headline: this.localize.term("defaultdialogs_unLinkYour", r),
      content: this.localize.term("defaultdialogs_unLinkYourConfirm", r),
      confirmLabel: this.localize.term("general_continue"),
      color: "danger"
    });
    const i = await this.getContext(b);
    if (!i)
      throw new Error("Auth context is missing");
    await i.unlinkLogin(e.providerSchemeName, e.providerKey);
  } catch (i) {
    let t = this.localize.term("errors_receivedErrorFromServer");
    K.isUmbApiError(i) ? t = i.problemDetails.detail ?? t : i instanceof Error && (t = i.message), console.error("[External Login] Error unlinking provider: ", i), g(this, u)?.peek("danger", {
      data: {
        headline: this.localize.term("defaultdialogs_unLinkYour", r),
        message: t
      }
    });
  }
};
s.styles = [
  A,
  P`
			uui-box {
				margin-bottom: var(--uui-size-space-3);
			}

			.header {
				display: flex;
				align-items: center;
			}

			.header-icon {
				margin-right: var(--uui-size-space-4);
			}
		`
];
p([
  S({ attribute: !1 })
], s.prototype, "modalContext", 2);
p([
  M()
], s.prototype, "_items", 2);
s = p([
  T("umb-current-user-external-login-modal")
], s);
const te = s;
export {
  s as UmbCurrentUserExternalLoginModalElement,
  te as default
};
//# sourceMappingURL=external-login-modal.element-NP8TQUbZ.js.map

import "./constants-BH7VsFPT.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/localization-api";
import { U as w } from "./user.repository-LA6VXDLg.js";
import { when as h, repeat as x, html as l, nothing as E, css as M, property as N, state as O, customElement as z } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { umbConfirmModal as k } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as S } from "@umbraco-cms/backoffice/style";
import { umbExtensionsRegistry as L } from "@umbraco-cms/backoffice/extension-registry";
import { mergeObservables as T } from "@umbraco-cms/backoffice/observable-api";
var W = Object.defineProperty, D = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, b = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? D(t, r) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (o = (i ? s(t, r, o) : s(o)) || o);
  return i && o && W(t, r, o), o;
}, f = (e, t, r) => t.has(e) || y("Cannot " + r), p = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), v = (e, t, r) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), q = (e, t, r, i) => (f(e, t, "write to private field"), t.set(e, r), r), m = (e, t, r) => (f(e, t, "access private method"), r), u, c, n, _, g, U, P;
let d = class extends C {
  constructor() {
    super(...arguments), v(this, n), this._items = [], v(this, u, ""), v(this, c, new w(this));
  }
  firstUpdated() {
    q(this, u, this.modalContext?.data.unique ?? ""), m(this, n, _).call(this);
  }
  render() {
    return l`
			<umb-body-layout headline="${this.localize.term("member_2fa")}">
				<div id="main">
					${h(
      this._items.length > 0,
      () => l`
							${x(
        this._items,
        (e) => e.providerName,
        (e) => m(this, n, U).call(this, e)
      )}
						`
    )}
				</div>
				<div slot="actions">
					<uui-button @click=${m(this, n, g)} look="secondary" .label=${this.localize.term("general_close")}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
_ = async function() {
  const e = (await p(this, c).requestMfaProviders(p(this, u))).asObservable(), t = L.byType("mfaLoginProvider"), r = T(
    [e, t],
    ([i, o]) => o.map((a) => {
      const s = i.find(
        ($) => $.providerName === a.forProviderName
      );
      return {
        existsOnServer: !!s,
        isEnabledOnUser: s?.isEnabledOnUser ?? !1,
        providerName: s?.providerName ?? a.forProviderName,
        displayName: a.meta?.label ?? s?.providerName ?? a.name
      };
    })
  );
  this.observe(
    r,
    (i) => {
      this._items = i;
    },
    "_mfaLoginProviders"
  );
};
g = function() {
  this.modalContext?.submit();
};
U = function(e) {
  return l`
			<uui-box headline=${e.displayName}>
				${h(
    e.existsOnServer,
    () => E,
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
				${h(
    e.isEnabledOnUser,
    () => l`
						<p style="margin-top:0">
							<umb-localize key="user_2faProviderIsEnabled">This two-factor provider is enabled</umb-localize>
						</p>
						<uui-button
							type="button"
							look="secondary"
							color="danger"
							.label=${this.localize.term("actions_disable")}
							@click=${() => m(this, n, P).call(this, e)}></uui-button>
					`,
    () => l`
						<uui-button
							disabled
							type="button"
							look="secondary"
							.label=${this.localize.term("actions_enable")}></uui-button>
					`
  )}
			</uui-box>
		`;
};
P = async function(e) {
  await k(this, {
    headline: this.localize.term("actions_disable"),
    content: this.localize.term("user_2faDisableForUser", e.displayName),
    confirmLabel: this.localize.term("actions_disable"),
    color: "danger"
  }), await p(this, c).disableMfaProvider(p(this, u), e.providerName, e.displayName), m(this, n, _).call(this);
};
d.styles = [
  S,
  M`
			uui-box {
				margin-bottom: var(--uui-size-space-3);
			}
		`
];
b([
  N({ attribute: !1 })
], d.prototype, "modalContext", 2);
b([
  O()
], d.prototype, "_items", 2);
d = b([
  z("umb-user-mfa-modal")
], d);
const te = d;
export {
  d as UmbUserMfaModalElement,
  te as default
};
//# sourceMappingURL=user-mfa-modal.element-BTPxvCH8.js.map

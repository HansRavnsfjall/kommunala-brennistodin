import { UmbUserClientCredentialRepository as w } from "./user-client-credential.repository-Bc-hPcN8.js";
import { UmbTextStyles as U } from "@umbraco-cms/backoffice/style";
import { html as f, css as g, query as h, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as x } from "@umbraco-cms/backoffice/modal";
var M = Object.defineProperty, k = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, d = (e, t, r, a) => {
  for (var i = a > 1 ? void 0 : a ? k(t, r) : t, u = e.length - 1, n; u >= 0; u--)
    (n = e[u]) && (i = (a ? n(t, r, i) : n(i)) || i);
  return a && i && M(t, r, i), i;
}, b = (e, t, r) => t.has(e) || v("Cannot " + r), _ = (e, t, r) => (b(e, t, "read from private field"), r ? r.call(e) : t.get(e)), l = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r) => (b(e, t, "access private method"), r), c, p, s, q, C;
const D = "umb-create-user-client-credential-modal";
let o = class extends x {
  constructor() {
    super(...arguments), l(this, s), l(this, c, new w(this)), l(this, p, "umbraco-back-office-");
  }
  firstUpdated() {
    this._inputUniqueElement?.addValidator(
      "patternMismatch",
      () => "Only alphanumeric characters and hyphens are allowed",
      () => {
        const e = this._inputUniqueElement?.value || "";
        return !new RegExp(/^[a-zA-Z0-9\-]+$/).test(e);
      }
    );
  }
  render() {
    return f`<uui-dialog-layout headline="Create client credential">
			${y(this, s, C).call(this)}
			<uui-button @click=${this._rejectModal} slot="actions" label="Cancel" look="secondary"></uui-button>
			<uui-button
				form="CreateUserClientCredentialForm"
				slot="actions"
				type="submit"
				label="Create"
				look="primary"
				color="positive"></uui-button>
		</uui-dialog-layout>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
q = async function(e) {
  if (e.preventDefault(), this.data?.user?.unique === void 0) throw new Error("User unique is required");
  const t = e.target;
  if (!t || !t.checkValidity()) return;
  const a = new FormData(t), i = a.get("unique"), u = a.get("secret"), n = {
    user: { unique: this.data.user.unique },
    client: { unique: i, secret: u }
  }, { data: m } = await _(this, c).requestCreate(n);
  m && (this.updateValue({ client: { unique: m.unique, secret: u } }), this._submitModal());
};
C = function() {
  return f` <uui-form>
			<form id="CreateUserClientCredentialForm" name="form" @submit="${y(this, s, q)}">
				<uui-form-layout-item>
					<uui-label id="uniqueLabel" slot="label" for="unique" required>Id</uui-label>
					<uui-input id="unique" label="unique" type="text" name="unique" required>
						<div class="prepend" slot="prepend">${_(this, p)}</div>
					</uui-input>
				</uui-form-layout-item>

				<uui-form-layout-item>
					<div slot="description">The secret cannot be retrieved again.</div>
					<uui-label id="secretLabel" slot="label" for="secret" required>Secret</uui-label>
					<uui-input-password id="secret" label="secret" name="secret" required></uui-input-password>
				</uui-form-layout-item>
			</form>
		</uui-form>`;
};
o.styles = [
  U,
  g`
			uui-input,
			uui-input-password {
				width: 580px;
			}

			.prepend {
				user-select: none;
				height: 100%;
				padding: 0 var(--uui-size-3);
				border-right: 1px solid var(--uui-input-border-color, var(--uui-color-border));
				background: #f3f3f3;
				color: grey;
				display: flex;
				justify-content: center;
				align-items: center;
				white-space: nowrap;
			}
		`
];
d([
  h("#CreateUserClientCredentialForm")
], o.prototype, "_form", 2);
d([
  h("#unique")
], o.prototype, "_inputUniqueElement", 2);
o = d([
  E(D)
], o);
export {
  o as UmbCreateUserModalElement,
  o as element
};
//# sourceMappingURL=create-user-client-credential-modal.element-dHFt3WUs.js.map

import { A as S } from "./manifests-KIVuOqdB.js";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { css as A, state as a, customElement as U, ifDefined as K, html as n, when as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { U as G } from "./index-L-35ogTa.js";
import { UMB_WORKSPACE_MODAL as V } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as Y } from "@umbraco-cms/backoffice/router";
import { UmbMemberTypeItemRepository as X, UMB_MEMBER_TYPE_ENTITY_TYPE as H } from "@umbraco-cms/backoffice/member-type";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as J } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as Q } from "@umbraco-cms/backoffice/settings";
import { createExtensionApiByAlias as Z } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CURRENT_USER_CONTEXT as j } from "@umbraco-cms/backoffice/current-user";
import { umbBindToValidation as x } from "@umbraco-cms/backoffice/validation";
const k = { dateStyle: "long", timeStyle: "short" };
var ee = Object.defineProperty, te = Object.getOwnPropertyDescriptor, O = (e) => {
  throw TypeError(e);
}, u = (e, t, s, l) => {
  for (var r = l > 1 ? void 0 : l ? te(t, s) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (r = (l ? d(t, s, r) : d(r)) || r);
  return l && r && ee(t, s, r), r;
}, E = (e, t, s) => t.has(e) || O("Cannot " + s), _ = (e, t, s) => (E(e, t, "read from private field"), t.get(e)), $ = (e, t, s) => t.has(e) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), se = (e, t, s, l) => (E(e, t, "write to private field"), t.set(e, s), s), C = (e, t, s) => (E(e, t, "access private method"), s), m, z, v, T, I;
let i = class extends N {
  constructor() {
    super(), $(this, v), this._memberTypeName = "", this._memberTypeIcon = "", this._editMemberTypePath = "", this._createDate = this.localize.term("general_unknown"), this._updateDate = this.localize.term("general_unknown"), this._unique = "", this._hasSettingsAccess = !1, $(this, m), $(this, z, new X(this)), new Y(this, V).addAdditionalPath("member-type").onSetup(() => ({ data: { entityType: H, preset: {} } })).observeRouteBuilder((e) => {
      this._editMemberTypePath = e({});
    }), this.consumeContext(S, async (e) => {
      se(this, m, e), this.observe(_(this, m)?.contentTypeUnique, async (t) => {
        if (t !== this._memberTypeUnique && (this._memberTypeUnique = t, this._memberTypeUnique)) {
          const s = (await _(this, z).requestItems([this._memberTypeUnique])).data?.[0];
          if (!s) return;
          this._memberTypeName = s.name, this._memberTypeIcon = s.icon;
        }
      }), this.observe(_(this, m)?.createDate, (t) => this._createDate = C(this, v, T).call(this, t)), this.observe(_(this, m)?.updateDate, (t) => this._updateDate = C(this, v, T).call(this, t)), this.observe(_(this, m)?.unique, (t) => this._unique = t || ""), this.observe(_(this, m)?.kind, (t) => this._memberKind = t);
    }), Z(this, J, [
      {
        config: {
          match: Q
        },
        onChange: (e) => {
          this._hasSettingsAccess = e;
        }
      }
    ]);
  }
  render() {
    return C(this, v, I).call(this);
  }
};
m = /* @__PURE__ */ new WeakMap();
z = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
T = function(e) {
  return e ? this.localize.date(e, k) : this.localize.term("general_unknown");
};
I = function() {
  return n`
			<umb-stack look="compact">
				<div>
					<h4><umb-localize key="content_createDate">Created</umb-localize></h4>
					<span> ${this._createDate} </span>
				</div>
				<div>
					<h4><umb-localize key="content_updateDate">Last edited</umb-localize></h4>
					<span> ${this._updateDate} </span>
				</div>
				<div>
					<h4><umb-localize key="content_membertype">Member Type</umb-localize></h4>
					<uui-ref-node
						standalone
						.name=${this._memberTypeName}
						href=${K(
    this._hasSettingsAccess ? this._editMemberTypePath + "edit/" + this._memberTypeUnique : void 0
  )}
						?readonly=${!this._hasSettingsAccess}>
						<umb-icon slot="icon" .name=${this._memberTypeIcon}></umb-icon>
					</uui-ref-node>
				</div>
				<div>
					<h4><umb-localize key="member_kind"></umb-localize></h4>
					<span
						>${this._memberKind === G.API ? this.localize.term("member_memberKindApi") : this.localize.term("member_memberKindDefault")}</span
					>
				</div>
				<div>
					<h4><umb-localize key="template_id">Id</umb-localize></h4>
					<span>${this._unique}</span>
				</div>
			</umb-stack>
		`;
};
i.styles = [
  D,
  A`
			h4 {
				margin: 0;
			}

			uui-ref-node[readonly] {
				padding-top: 7px;
				padding-bottom: 7px;
			}
		`
];
u([
  a()
], i.prototype, "_memberTypeUnique", 2);
u([
  a()
], i.prototype, "_memberTypeName", 2);
u([
  a()
], i.prototype, "_memberTypeIcon", 2);
u([
  a()
], i.prototype, "_editMemberTypePath", 2);
u([
  a()
], i.prototype, "_createDate", 2);
u([
  a()
], i.prototype, "_updateDate", 2);
u([
  a()
], i.prototype, "_unique", 2);
u([
  a()
], i.prototype, "_memberKind", 2);
u([
  a()
], i.prototype, "_hasSettingsAccess", 2);
i = u([
  U("umb-member-workspace-view-member-info")
], i);
var re = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, q = (e) => {
  throw TypeError(e);
}, f = (e, t, s, l) => {
  for (var r = l > 1 ? void 0 : l ? ae(t, s) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (r = (l ? d(t, s, r) : d(r)) || r);
  return l && r && re(t, s, r), r;
}, R = (e, t, s) => t.has(e) || q("Cannot " + s), y = (e, t, s) => (R(e, t, "read from private field"), s ? s.call(e) : t.get(e)), P = (e, t, s) => t.has(e) ? q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), p = (e, t, s) => (R(e, t, "access private method"), s), o, w, L, b, M, W, B, F;
let c = class extends N {
  constructor() {
    super(), P(this, o), this._showChangePasswordForm = !1, this._newPasswordError = "", this._isNew = !0, this._hasAccessToSensitiveData = !1, P(this, b, () => {
      const e = this.shadowRoot?.querySelector('uui-input[name="newPassword"]')?.value, t = this.shadowRoot?.querySelector(
        'uui-input[name="confirmPassword"]'
      )?.value;
      if (e !== t) {
        this._newPasswordError = "Passwords do not match";
        return;
      }
      this._newPasswordError = "", this._workspaceContext?.set("newPassword", e);
    }), P(this, M, () => {
      this._workspaceContext?.set("newPassword", ""), this._showChangePasswordForm = !1, this._newPasswordError = "";
    }), this.consumeContext(S, (e) => {
      this._workspaceContext = e, this.observe(this._workspaceContext?.isNew, (t) => {
        this._isNew = !!t;
      });
    }), this.consumeContext(j, (e) => {
      this.observe(e?.hasAccessToSensitiveData, (t) => {
        this._hasAccessToSensitiveData = t === !0;
      });
    });
  }
  render() {
    return n`
			<umb-body-layout header-fit-height>
				<div id="main">${p(this, o, B).call(this)} ${p(this, o, F).call(this)}</div>
			</umb-body-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakSet();
w = function(e, t) {
  this._workspaceContext && this._workspaceContext.set(e, t);
};
L = function(e) {
  const t = e.target.selection;
  this._workspaceContext?.set("groups", t);
};
b = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
W = function() {
  return this._isNew && this._workspaceContext ? n`
				<umb-property-layout label=${this.localize.term("user_password")} mandatory>
					<uui-input
						slot="editor"
						name="newPassword"
						label=${this.localize.term("user_passwordEnterNew")}
						type="password"
						@input=${() => y(this, b).call(this)}
						value=${this._workspaceContext.newPassword}
						required
						${x(
    this,
    "$.values[?(@.alias == 'password' && @.culture == null && @.segment == null)].value",
    this._workspaceContext.newPassword
  )}></uui-input>
				</umb-property-layout>

				<umb-property-layout label="Confirm password" mandatory>
					<uui-input
						slot="editor"
						name="confirmPassword"
						label="Confirm password"
						type="password"
						value=${this._workspaceContext.newPassword}
						@input=${() => y(this, b).call(this)}></uui-input>
				</umb-property-layout>

				${g(this._newPasswordError, () => n`<p class="validation-error">${this._newPasswordError}</p>`)}
			` : n`
			<umb-property-layout label=${this.localize.term("general_changePassword")}>
				${g(
    this._showChangePasswordForm,
    () => n`
						<div slot="editor">
							<umb-property-layout label=${this.localize.term("user_newPassword")} mandatory>
								<uui-input
									slot="editor"
									name="newPassword"
									label=${this.localize.term("user_newPassword")}
									type="password"
									@input=${() => y(this, b).call(this)}></uui-input>
							</umb-property-layout>
							<umb-property-layout label=${this.localize.term("user_confirmNewPassword")} mandatory>
								<uui-input
									slot="editor"
									name="confirmPassword"
									label=${this.localize.term("user_confirmNewPassword")}
									type="password"
									@input=${() => y(this, b).call(this)}></uui-input>
							</umb-property-layout>
							${g(this._newPasswordError, () => n`<p class="validation-error">${this._newPasswordError}</p>`)}
							<uui-button
								label=${this.localize.term("general_cancel")}
								look="secondary"
								@click=${y(this, M)}></uui-button>
						</div>
					`,
    () => n`
						<uui-button
							slot="editor"
							label=${this.localize.term("general_changePassword")}
							look="secondary"
							@click=${() => this._showChangePasswordForm = !0}></uui-button>
					`
  )}
			</umb-property-layout>
		`;
};
B = function() {
  if (this._workspaceContext)
    return n`
			<div id="left-column">
				<uui-box>
					<umb-property-layout label=${this.localize.term("general_username")} mandatory>
						<uui-input
							slot="editor"
							name="login"
							label=${this.localize.term("general_username")}
							value=${this._workspaceContext.username}
							${x(
      this,
      "$.values[?(@.alias == 'username' && @.culture == null && @.segment == null)].value",
      this._workspaceContext.username
    )}
							required
							required-message=${this.localize.term("user_loginnameRequired")}
							@input=${(e) => p(this, o, w).call(this, "username", e.target.value)}></uui-input>
					</umb-property-layout>

					<umb-property-layout label=${this.localize.term("general_email")} mandatory>
						<uui-input
							slot="editor"
							name="email"
							label=${this.localize.term("general_email")}
							value=${this._workspaceContext.email}
							${x(
      this,
      "$.values[?(@.alias == 'email' && @.culture == null && @.segment == null)].value",
      this._workspaceContext.email
    )}
							required
							required-message=${this.localize.term("user_emailRequired")}
							@input=${(e) => p(this, o, w).call(this, "email", e.target.value)}></uui-input>
					</umb-property-layout>

					${p(this, o, W).call(this)}

					<umb-property-layout label=${this.localize.term("content_membergroup")}>
						<umb-input-member-group
							slot="editor"
							@change=${p(this, o, L)}
							.selection=${this._workspaceContext.memberGroups}></umb-input-member-group>
					</umb-property-layout>

					${g(
      this._hasAccessToSensitiveData,
      () => n`
							<umb-property-layout label=${this.localize.term("user_stateApproved")}>
								<uui-toggle
									slot="editor"
									.checked=${this._workspaceContext.isApproved}
									@change=${(e) => p(this, o, w).call(this, "isApproved", e.target.checked)}>
								</uui-toggle>
							</umb-property-layout>

							<umb-property-layout label=${this.localize.term("user_stateLockedOut")}>
								<uui-toggle
									slot="editor"
									?disabled=${this._isNew || !this._workspaceContext.isLockedOut}
									.checked=${this._workspaceContext.isLockedOut}
									@change=${(e) => p(this, o, w).call(this, "isLockedOut", e.target.checked)}>
								</uui-toggle>
							</umb-property-layout>
						`
    )}
					<umb-property-layout label=${this.localize.term("member_2fa")}>
						<uui-toggle
							slot="editor"
							?disabled=${this._isNew || !this._workspaceContext.isTwoFactorEnabled}
							.checked=${this._workspaceContext.isTwoFactorEnabled}
							@change=${(e) => p(this, o, w).call(this, "isTwoFactorEnabled", e.target.checked)}>
						</uui-toggle>
					</umb-property-layout>
				</uui-box>

				<div class="container">
					<umb-extension-slot id="workspace-info-apps" type="workspaceInfoApp"></umb-extension-slot>
				</div>
			</div>
		`;
};
F = function() {
  if (this._workspaceContext)
    return n`
			<div id="right-column">
				<uui-box>
					<umb-stack look="compact">
						<div>
							<h4><umb-localize key="user_failedPasswordAttempts">Failed login attempts</umb-localize></h4>
							<span>${this._workspaceContext.failedPasswordAttempts}</span>
						</div>
						<div>
							<h4><umb-localize key="user_lastLockoutDate">Last lockout date</umb-localize></h4>
							<span>
								${this._workspaceContext.lastLockOutDate ? this.localize.date(this._workspaceContext.lastLockOutDate, k) : this.localize.term("general_never")}
							</span>
						</div>
						<div>
							<h4><umb-localize key="user_lastLogin">Last login</umb-localize></h4>
							<span>
								${this._workspaceContext.lastLoginDate ? this.localize.date(this._workspaceContext.lastLoginDate, k) : this.localize.term("general_never")}
							</span>
						</div>
						<div>
							<h4><umb-localize key="user_passwordChangedGeneric">Password changed</umb-localize></h4>
							<span>
								${this._workspaceContext.lastPasswordChangeDate ? this.localize.date(this._workspaceContext.lastPasswordChangeDate, k) : this.localize.term("general_never")}
							</span>
						</div>
					</umb-stack>
				</uui-box>

				<uui-box>
					<umb-member-workspace-view-member-info></umb-member-workspace-view-member-info>
				</uui-box>
			</div>
		`;
};
c.styles = [
  D,
  A`
			uui-input {
				width: 100%;
			}
			#main {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-space-4);
			}
			#left-column {
				/* Is there a way to make the wrapped right column grow only when wrapped? */
				flex: 9999 1 500px;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}
			#right-column {
				flex: 1 1 350px;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}
			uui-box {
				height: fit-content;
			}
			umb-property-layout {
				padding-block: var(--uui-size-space-4);
			}
			umb-property-layout:first-child {
				padding-top: 0;
			}
			umb-property-layout:last-child {
				padding-bottom: 0;
			}
			.validation-error {
				margin-top: 0;
				color: var(--uui-color-danger);
			}

			h4 {
				margin: 0;
			}
		`
];
f([
  a()
], c.prototype, "_showChangePasswordForm", 2);
f([
  a()
], c.prototype, "_newPasswordError", 2);
f([
  a()
], c.prototype, "_isNew", 2);
f([
  a()
], c.prototype, "_hasAccessToSensitiveData", 2);
c = f([
  U("umb-member-workspace-view-member")
], c);
const ye = c;
export {
  c as UmbMemberWorkspaceViewMemberElement,
  ye as default
};
//# sourceMappingURL=member-workspace-view-member.element-C07G8YR0.js.map

import { w as M } from "./manifests-DHyiWGyY.js";
import { UmbTextStyles as S } from "@umbraco-cms/backoffice/style";
import { css as D, state as a, customElement as A, ifDefined as B, html as n, when as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { U as K } from "./index-L-35ogTa.js";
import { UMB_WORKSPACE_MODAL as G } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as V } from "@umbraco-cms/backoffice/router";
import { UmbMemberTypeItemRepository as Y, UMB_MEMBER_TYPE_ENTITY_TYPE as X } from "@umbraco-cms/backoffice/member-type";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as H } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as J } from "@umbraco-cms/backoffice/settings";
import { createExtensionApiByAlias as Q } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CURRENT_USER_CONTEXT as Z } from "@umbraco-cms/backoffice/current-user";
const k = { dateStyle: "long", timeStyle: "short" };
var j = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, N = (e) => {
  throw TypeError(e);
}, u = (e, t, r, l) => {
  for (var s = l > 1 ? void 0 : l ? ee(t, r) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (s = (l ? d(t, r, s) : d(s)) || s);
  return l && s && j(t, r, s), s;
}, T = (e, t, r) => t.has(e) || N("Cannot " + r), _ = (e, t, r) => (T(e, t, "read from private field"), t.get(e)), $ = (e, t, r) => t.has(e) ? N("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), te = (e, t, r, l) => (T(e, t, "write to private field"), t.set(e, r), r), C = (e, t, r) => (T(e, t, "access private method"), r), m, x, v, z, O;
let o = class extends U {
  constructor() {
    super(), $(this, v), this._memberTypeUnique = "", this._memberTypeName = "", this._memberTypeIcon = "", this._editMemberTypePath = "", this._createDate = this.localize.term("general_unknown"), this._updateDate = this.localize.term("general_unknown"), this._unique = "", this._hasSettingsAccess = !1, $(this, m), $(this, x, new Y(this)), new V(this, G).addAdditionalPath("member-type").onSetup(() => ({ data: { entityType: X, preset: {} } })).observeRouteBuilder((e) => {
      this._editMemberTypePath = e({});
    }), this.consumeContext(M, async (e) => {
      te(this, m, e), this.observe(_(this, m)?.contentTypeUnique, (r) => this._memberTypeUnique = r || ""), this.observe(_(this, m)?.createDate, (r) => this._createDate = C(this, v, z).call(this, r)), this.observe(_(this, m)?.updateDate, (r) => this._updateDate = C(this, v, z).call(this, r)), this.observe(_(this, m)?.unique, (r) => this._unique = r || ""), this.observe(_(this, m)?.kind, (r) => this._memberKind = r);
      const t = (await _(this, x).requestItems([this._memberTypeUnique])).data?.[0];
      t && (this._memberTypeName = t.name, this._memberTypeIcon = t.icon);
    }), Q(this, H, [
      {
        config: {
          match: J
        },
        onChange: (e) => {
          this._hasSettingsAccess = e;
        }
      }
    ]);
  }
  render() {
    return C(this, v, O).call(this);
  }
};
m = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
z = function(e) {
  return e ? this.localize.date(e, k) : this.localize.term("general_unknown");
};
O = function() {
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
						href=${B(
    this._hasSettingsAccess ? this._editMemberTypePath + "edit/" + this._memberTypeUnique : void 0
  )}
						?readonly=${!this._hasSettingsAccess}>
						<umb-icon slot="icon" .name=${this._memberTypeIcon}></umb-icon>
					</uui-ref-node>
				</div>
				<div>
					<h4><umb-localize key="member_kind"></umb-localize></h4>
					<span
						>${this._memberKind === K.API ? this.localize.term("member_memberKindApi") : this.localize.term("member_memberKindDefault")}</span
					>
				</div>
				<div>
					<h4><umb-localize key="template_id">Id</umb-localize></h4>
					<span>${this._unique}</span>
				</div>
			</umb-stack>
		`;
};
o.styles = [
  S,
  D`
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
], o.prototype, "_memberTypeUnique", 2);
u([
  a()
], o.prototype, "_memberTypeName", 2);
u([
  a()
], o.prototype, "_memberTypeIcon", 2);
u([
  a()
], o.prototype, "_editMemberTypePath", 2);
u([
  a()
], o.prototype, "_createDate", 2);
u([
  a()
], o.prototype, "_updateDate", 2);
u([
  a()
], o.prototype, "_unique", 2);
u([
  a()
], o.prototype, "_memberKind", 2);
u([
  a()
], o.prototype, "_hasSettingsAccess", 2);
o = u([
  A("umb-member-workspace-view-member-info")
], o);
var re = Object.defineProperty, se = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, f = (e, t, r, l) => {
  for (var s = l > 1 ? void 0 : l ? se(t, r) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (s = (l ? d(t, r, s) : d(s)) || s);
  return l && s && re(t, r, s), s;
}, q = (e, t, r) => t.has(e) || I("Cannot " + r), y = (e, t, r) => (q(e, t, "read from private field"), r ? r.call(e) : t.get(e)), P = (e, t, r) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), p = (e, t, r) => (q(e, t, "access private method"), r), i, b, R, w, E, L, W, F;
let c = class extends U {
  constructor() {
    super(), P(this, i), this._showChangePasswordForm = !1, this._newPasswordError = "", this._isNew = !0, this._hasAccessToSensitiveData = !1, P(this, w, () => {
      const e = this.shadowRoot?.querySelector('uui-input[name="newPassword"]')?.value, t = this.shadowRoot?.querySelector(
        'uui-input[name="confirmPassword"]'
      )?.value;
      if (e !== t) {
        this._newPasswordError = "Passwords do not match";
        return;
      }
      this._newPasswordError = "", this._workspaceContext?.set("newPassword", e);
    }), P(this, E, () => {
      this._workspaceContext?.set("newPassword", ""), this._showChangePasswordForm = !1, this._newPasswordError = "";
    }), this.consumeContext(M, (e) => {
      this._workspaceContext = e, this.observe(this._workspaceContext?.isNew, (t) => {
        this._isNew = !!t;
      });
    }), this.consumeContext(Z, (e) => {
      this.observe(e?.hasAccessToSensitiveData, (t) => {
        this._hasAccessToSensitiveData = t === !0;
      });
    });
  }
  render() {
    return n`
			<umb-body-layout header-fit-height>
				<div id="main">${p(this, i, W).call(this)} ${p(this, i, F).call(this)}</div>
			</umb-body-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
b = function(e, t) {
  this._workspaceContext && this._workspaceContext.set(e, t);
};
R = function(e) {
  const t = e.target.selection;
  this._workspaceContext?.set("groups", t);
};
w = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
L = function() {
  return this._isNew ? n`
				<umb-property-layout label=${this.localize.term("user_password")} mandatory>
					<uui-input
						slot="editor"
						name="newPassword"
						label=${this.localize.term("user_passwordEnterNew")}
						type="password"
						@input=${() => y(this, w).call(this)}></uui-input>
				</umb-property-layout>

				<umb-property-layout label="Confirm password" mandatory>
					<uui-input
						slot="editor"
						name="confirmPassword"
						label="Confirm password"
						type="password"
						@input=${() => y(this, w).call(this)}></uui-input>
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
									@input=${() => y(this, w).call(this)}></uui-input>
							</umb-property-layout>
							<umb-property-layout label=${this.localize.term("user_confirmNewPassword")} mandatory>
								<uui-input
									slot="editor"
									name="confirmPassword"
									label=${this.localize.term("user_confirmNewPassword")}
									type="password"
									@input=${() => y(this, w).call(this)}></uui-input>
							</umb-property-layout>
							${g(this._newPasswordError, () => n`<p class="validation-error">${this._newPasswordError}</p>`)}
							<uui-button
								label=${this.localize.term("general_cancel")}
								look="secondary"
								@click=${y(this, E)}></uui-button>
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
W = function() {
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
							required
							required-message=${this.localize.term("user_loginnameRequired")}
							@input=${(e) => p(this, i, b).call(this, "username", e.target.value)}></uui-input>
					</umb-property-layout>

					<umb-property-layout label=${this.localize.term("general_email")} mandatory>
						<uui-input
							slot="editor"
							name="email"
							label=${this.localize.term("general_email")}
							value=${this._workspaceContext.email}
							required
							required-message=${this.localize.term("user_emailRequired")}
							@input=${(e) => p(this, i, b).call(this, "email", e.target.value)}></uui-input>
					</umb-property-layout>

					${p(this, i, L).call(this)}

					<umb-property-layout label=${this.localize.term("content_membergroup")}>
						<umb-input-member-group
							slot="editor"
							@change=${p(this, i, R)}
							.selection=${this._workspaceContext.memberGroups}></umb-input-member-group>
					</umb-property-layout>

					${g(
      this._hasAccessToSensitiveData,
      () => n`
							<umb-property-layout label=${this.localize.term("user_stateApproved")}>
								<uui-toggle
									slot="editor"
									.checked=${this._workspaceContext.isApproved}
									@change=${(e) => p(this, i, b).call(this, "isApproved", e.target.checked)}>
								</uui-toggle>
							</umb-property-layout>

							<umb-property-layout label=${this.localize.term("user_stateLockedOut")}>
								<uui-toggle
									slot="editor"
									?disabled=${this._isNew || !this._workspaceContext.isLockedOut}
									.checked=${this._workspaceContext.isLockedOut}
									@change=${(e) => p(this, i, b).call(this, "isLockedOut", e.target.checked)}>
								</uui-toggle>
							</umb-property-layout>
						`
    )}
					<umb-property-layout label=${this.localize.term("member_2fa")}>
						<uui-toggle
							slot="editor"
							?disabled=${this._isNew || !this._workspaceContext.isTwoFactorEnabled}
							.checked=${this._workspaceContext.isTwoFactorEnabled}
							@change=${(e) => p(this, i, b).call(this, "isTwoFactorEnabled", e.target.checked)}>
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
  S,
  D`
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
  A("umb-member-workspace-view-member")
], c);
const be = c;
export {
  c as UmbMemberWorkspaceViewMemberElement,
  be as default
};
//# sourceMappingURL=member-workspace-view-member.element-C_5y1M6c.js.map

import { UmbUserAvatarRepository as ht } from "./user-avatar.repository-GV81JSsT.js";
import { i as U, U as X, t as pt, M as _t, d as mt, T as vt } from "./constants-DjdF3T-M.js";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { UmbUserConfigRepository as ft } from "./user-config.repository-C37bO5BY.js";
import { b as bt } from "./paths-CbGwNXWI.js";
import { css as w, state as u, customElement as C, html as n, ifDefined as M, nothing as m, repeat as gt, query as Se } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as K } from "@umbraco-cms/backoffice/style";
import { UmbTemporaryFileConfigRepository as yt } from "@umbraco-cms/backoffice/temporary-file";
import { umbBindToValidation as $t } from "@umbraco-cms/backoffice/validation";
import { g as Ut, T as D } from "./utils-BEu6TUZg.js";
import { UmbUserClientCredentialRepository as wt } from "./user-client-credential.repository-Bc-hPcN8.js";
import { UMB_MODAL_MANAGER_CONTEXT as be, umbConfirmModal as Ct } from "@umbraco-cms/backoffice/modal";
import { UmbEntityNamedDetailWorkspaceContextBase as kt } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as At } from "@umbraco-cms/backoffice/observable-api";
var St = Object.defineProperty, Pt = Object.getOwnPropertyDescriptor, Pe = (e) => {
  throw TypeError(e);
}, le = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Pt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && St(t, s, r), r;
}, ce = (e, t, s) => t.has(e) || Pe("Cannot " + s), P = (e, t, s) => (ce(e, t, "read from private field"), t.get(e)), ge = (e, t, s) => t.has(e) ? Pe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Et = (e, t, s, a) => (ce(e, t, "write to private field"), t.set(e, s), s), S = (e, t, s) => (ce(e, t, "access private method"), s), p, f, Ee, qe, Oe, De, xe, ze;
let N = class extends k {
  constructor() {
    super(), ge(this, f), this._usernameIsEmail = !0, ge(this, p), this.consumeContext(U, (e) => {
      Et(this, p, e), this.observe(P(this, p)?.data, (t) => this._user = t, "umbUserObserver"), this.observe(
        P(this, p)?.configRepository.part("usernameIsEmail"),
        (t) => this._usernameIsEmail = t === void 0 ? !0 : t,
        "umbUsernameIsEmailObserver"
      );
    });
  }
  render() {
    return n`
			<uui-box>
				<div slot="headline"><umb-localize key="user_profile">Profile</umb-localize></div>
				${S(this, f, De).call(this)} ${S(this, f, xe).call(this)} ${S(this, f, ze).call(this)}
			</uui-box>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
Ee = function(e) {
  const t = e.target;
  typeof t?.value == "string" && (P(this, p)?.updateProperty("email", t.value), this._usernameIsEmail && P(this, p)?.updateProperty("userName", t.value));
};
qe = function(e) {
  const t = e.target;
  typeof t?.value == "string" && P(this, p)?.updateProperty("userName", t.value);
};
Oe = function(e) {
  const t = e.target;
  typeof t?.value == "string" && P(this, p)?.updateProperty("languageIsoCode", t.value);
};
De = function() {
  return n`
			<umb-property-layout
				mandatory
				label=${this.localize.term("general_email")}
				description=${this.localize.term("user_emailDescription", this._usernameIsEmail)}>
				<uui-input
					slot="editor"
					name="email"
					label=${this.localize.term("general_email")}
					required
					required-message=${this.localize.term("user_emailRequired")}
					value=${M(this._user?.email)}
					@change=${S(this, f, Ee)}
					${$t(this)}>
				</uui-input>
			</umb-property-layout>
		`;
};
xe = function() {
  return this._usernameIsEmail ? m : n`
			<umb-property-layout
				mandatory
				label=${this.localize.term("user_loginname")}
				description=${this.localize.term("user_loginnameDescription")}>
				<uui-input
					slot="editor"
					name="username"
					autocomplete="off"
					label=${this.localize.term("user_loginname")}
					required
					required-message=${this.localize.term("user_loginnameRequired")}
					value=${M(this._user?.userName)}
					@change=${S(this, f, qe)}>
				</uui-input>
			</umb-property-layout>
		`;
};
ze = function() {
  return this._user?.kind === X.API ? m : n`
			<umb-property-layout
				label=${this.localize.term("user_language")}
				description=${this.localize.term("user_languageHelp")}>
				<umb-ui-culture-input
					slot="editor"
					name="language"
					label=${this.localize.term("user_language")}
					value=${M(this._user?.languageIsoCode ?? void 0)}
					@change=${S(this, f, Oe)}>
				</umb-ui-culture-input>
			</umb-property-layout>
		`;
};
N.styles = [
  w`
			:host {
				display: block;
			}

			uui-input {
				width: 100%;
			}
		`
];
le([
  u()
], N.prototype, "_user", 2);
le([
  u()
], N.prototype, "_usernameIsEmail", 2);
N = le([
  C("umb-user-workspace-profile-settings")
], N);
var qt = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, Re = (e) => {
  throw TypeError(e);
}, O = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Ot(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && qt(t, s, r), r;
}, de = (e, t, s) => t.has(e) || Re("Cannot " + s), c = (e, t, s) => (de(e, t, "read from private field"), t.get(e)), ye = (e, t, s) => t.has(e) ? Re("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Dt = (e, t, s, a) => (de(e, t, "write to private field"), t.set(e, s), s), b = (e, t, s) => (de(e, t, "access private method"), s), l, h, We, Me, Ne, Ie, Te, Fe, Le, Ke;
const xt = "umb-user-workspace-assign-access";
let g = class extends k {
  constructor() {
    super(), ye(this, h), this._userGroupUniques = [], this._documentStartNodeUniques = [], this._documentRootAccess = !1, this._mediaStartNodeUniques = [], this._mediaRootAccess = !1, ye(this, l), this.consumeContext(U, (e) => {
      Dt(this, l, e), this.observe(
        c(this, l)?.userGroupUniques,
        (t) => this._userGroupUniques = t ?? [],
        "_observeUserGroupAccess"
      ), this.observe(
        c(this, l)?.hasDocumentRootAccess,
        (t) => this._documentRootAccess = t ?? !1,
        "_observeDocumentRootAccess"
      ), this.observe(
        c(this, l)?.documentStartNodeUniques,
        (t) => this._documentStartNodeUniques = t ?? [],
        "_observeDocumentStartNode"
      ), this.observe(
        c(this, l)?.hasMediaRootAccess,
        (t) => this._mediaRootAccess = t ?? !1,
        "_observeMediaRootAccess"
      ), this.observe(
        c(this, l)?.mediaStartNodeUniques,
        (t) => this._mediaStartNodeUniques = t ?? [],
        "_observeMediaStartNode"
      );
    });
  }
  render() {
    return n`
			<uui-box>
				<div slot="headline"><umb-localize key="user_assignAccess">Assign Access</umb-localize></div>
				<div id="assign-access">
					${b(this, h, Fe).call(this)} ${b(this, h, Le).call(this)} ${b(this, h, Ke).call(this)}
				</div>
			</uui-box>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
We = function(e) {
  e.stopPropagation();
  const s = e.target.selection.map((a) => ({ unique: a }));
  c(this, l)?.updateProperty("userGroupUniques", s);
};
Me = function(e) {
  e.stopPropagation();
  const t = e.target;
  c(this, l)?.updateProperty("hasDocumentRootAccess", t.checked), c(this, l)?.updateProperty("documentStartNodeUniques", []);
};
Ne = function(e) {
  e.stopPropagation();
  const s = e.target.selection.map((a) => ({ unique: a }));
  c(this, l)?.updateProperty("documentStartNodeUniques", s);
};
Ie = function(e) {
  e.stopPropagation();
  const t = e.target;
  c(this, l)?.updateProperty("hasMediaRootAccess", t.checked), c(this, l)?.updateProperty("mediaStartNodeUniques", []);
};
Te = function(e) {
  e.stopPropagation();
  const s = e.target.selection.map((a) => ({ unique: a }));
  c(this, l)?.updateProperty("mediaStartNodeUniques", s);
};
Fe = function() {
  return n`<umb-property-layout
			label="${this.localize.term("general_groups")}"
			description="${this.localize.term("user_groupsHelp")}">
			<umb-user-group-input
				slot="editor"
				.selection=${this._userGroupUniques.map((e) => e.unique)}
				@change=${b(this, h, We)}></umb-user-group-input>
		</umb-property-layout>`;
};
Le = function() {
  return n`
			<umb-property-layout
				label=${this.localize.term("user_startnodes")}
				description=${this.localize.term("user_startnodeshelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllDocuments")}"
						.checked=${this._documentRootAccess}
						@change=${b(this, h, Me)}></uui-toggle>
				</div>

				${this._documentRootAccess === !1 ? n`
							<umb-input-document
								slot="editor"
								.selection=${this._documentStartNodeUniques.map((e) => e.unique)}
								@change=${b(this, h, Ne)}></umb-input-document>
						` : m}
			</umb-property-layout>
		`;
};
Ke = function() {
  return n`
			<umb-property-layout
				label=${this.localize.term("defaultdialogs_selectMediaStartNode")}
				description=${this.localize.term("user_mediastartnodehelp")}>
				<div slot="editor">
					<uui-toggle
						style="margin-bottom: var(--uui-size-space-3);"
						label="${this.localize.term("user_allowAccessToAllMedia")}"
						.checked=${this._mediaRootAccess}
						@change=${b(this, h, Ie)}></uui-toggle>
				</div>

				${this._mediaRootAccess === !1 ? n`
							<umb-input-media
								slot="editor"
								.selection=${this._mediaStartNodeUniques.map((e) => e.unique)}
								@change=${b(this, h, Te)}></umb-input-media>
						` : m}
			</umb-property-layout>
		`;
};
g.styles = [
  K,
  w`
			:host {
				display: block;
			}
		`
];
O([
  u()
], g.prototype, "_userGroupUniques", 2);
O([
  u()
], g.prototype, "_documentStartNodeUniques", 2);
O([
  u()
], g.prototype, "_documentRootAccess", 2);
O([
  u()
], g.prototype, "_mediaStartNodeUniques", 2);
O([
  u()
], g.prototype, "_mediaRootAccess", 2);
g = O([
  C(xt)
], g);
var zt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, Ge = (e) => {
  throw TypeError(e);
}, Be = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Rt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && zt(t, s, r), r;
}, he = (e, t, s) => t.has(e) || Ge("Cannot " + s), Wt = (e, t, s) => (he(e, t, "read from private field"), t.get(e)), $e = (e, t, s) => t.has(e) ? Ge("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Mt = (e, t, s, a) => (he(e, t, "write to private field"), t.set(e, s), s), Ue = (e, t, s) => (he(e, t, "access private method"), s), H, Y, He, Ye;
const Nt = "umb-user-workspace-access";
let J = class extends k {
  constructor() {
    super(), $e(this, Y), $e(this, H), this.consumeContext(U, (e) => {
      Mt(this, H, e), this.observe(
        Wt(this, H)?.calculatedStartNodes,
        (t) => this._calculatedStartNodes = t,
        "umbUserObserver"
      );
    });
  }
  render() {
    return n` <uui-box headline=${this.localize.term("user_access")}>
			<div slot="header" class="faded-text">
				<umb-localize key="user_accessHelp"
					>Based on the assigned groups and start nodes, the user has access to the following nodes</umb-localize
				>
			</div>

			${Ue(this, Y, He).call(this)}
			<hr />
			${Ue(this, Y, Ye).call(this)}
		</uui-box>`;
  }
};
H = /* @__PURE__ */ new WeakMap();
Y = /* @__PURE__ */ new WeakSet();
He = function() {
  return n` <b><umb-localize key="sections_content">Content</umb-localize></b>
			<umb-user-document-start-node
				readonly
				.uniques=${this._calculatedStartNodes?.documentStartNodeUniques.map((e) => e.unique) || []}></umb-user-document-start-node>`;
};
Ye = function() {
  return n` <b><umb-localize key="sections_media">Media</umb-localize></b>
			<umb-user-media-start-node
				readonly
				.uniques=${this._calculatedStartNodes?.mediaStartNodeUniques.map((e) => e.unique) || []}></umb-user-media-start-node>`;
};
J.styles = [
  K,
  w`
			:host {
				display: block;
			}

			hr {
				border: none;
				border-bottom: 1px solid var(--uui-color-divider);
				width: 100%;
			}
			.faded-text {
				color: var(--uui-color-text-alt);
				font-size: 0.8rem;
			}
		`
];
Be([
  u()
], J.prototype, "_calculatedStartNodes", 2);
J = Be([
  C(Nt)
], J);
var It = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, Ve = (e) => {
  throw TypeError(e);
}, pe = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Tt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && It(t, s, r), r;
}, _e = (e, t, s) => t.has(e) || Ve("Cannot " + s), we = (e, t, s) => (_e(e, t, "read from private field"), t.get(e)), te = (e, t, s) => t.has(e) ? Ve("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Ft = (e, t, s, a) => (_e(e, t, "write to private field"), t.set(e, s), s), ae = (e, t, s) => (_e(e, t, "access private method"), s), V, ie, W, Xe, Je, Qe;
let I = class extends k {
  constructor() {
    super(), te(this, W), this._userInfo = [], this._userDisplayState = null, te(this, V), te(this, ie, (e) => {
      if (!e) {
        this._userInfo = [];
        return;
      }
      if (this._userInfo = [
        {
          labelKey: "user_kind",
          value: e.kind === X.API ? this.localize.term("user_userKindApi") : this.localize.term("user_userKindDefault")
        },
        {
          labelKey: "user_lastLogin",
          value: e.lastLoginDate ? this.localize.date(e.lastLoginDate, D) : `${e.name} ${this.localize.term("user_noLogin")}`
        },
        { labelKey: "user_failedPasswordAttempts", value: e.failedLoginAttempts },
        {
          labelKey: "user_lastLockoutDate",
          value: e.lastLockoutDate ? this.localize.date(e.lastLockoutDate, D) : `${e.name} ${this.localize.term("user_noLockouts")}`
        },
        {
          labelKey: "user_lastPasswordChangeDate",
          value: e.lastPasswordChangeDate ? this.localize.date(e.lastPasswordChangeDate, D) : `${e.name} ${this.localize.term("user_noPasswordChange")}`
        },
        { labelKey: "user_createDate", value: this.localize.date(e.createDate, D) },
        { labelKey: "user_updateDate", value: this.localize.date(e.updateDate, D) },
        { labelKey: "general_id", value: e.unique }
      ], e.kind === X.API) {
        const t = ["user_kind", "user_createDate", "user_updateDate", "general_id"];
        this._userInfo = this._userInfo.filter((s) => t.includes(s.labelKey));
      }
    }), this.consumeContext(U, (e) => {
      Ft(this, V, e), this.observe(
        we(this, V)?.data,
        async (t) => {
          t && (we(this, ie).call(this, t), this._userDisplayState = t.state ? Ut(t.state) : null);
        },
        "umbUserObserver"
      );
    });
  }
  render() {
    return this._userInfo.length === 0 ? m : n`<uui-box id="user-info">${ae(this, W, Xe).call(this)} ${ae(this, W, Je).call(this)} </uui-box>`;
  }
};
V = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakSet();
Xe = function() {
  return n`
			<div id="state" class="user-info-item">
				<uui-tag look="${M(this._userDisplayState?.look)}" color="${M(this._userDisplayState?.color)}">
					${this.localize.term("user_" + this._userDisplayState?.key)}
				</uui-tag>
			</div>
		`;
};
Je = function() {
  return n`
			<umb-stack look="compact">
				${gt(
    this._userInfo,
    (e) => e.labelKey,
    (e) => ae(this, W, Qe).call(this, e.labelKey, e.value)
  )}
			</umb-stack>
		`;
};
Qe = function(e, t) {
  return n`
			<div>
				<h4><umb-localize key=${e}></umb-localize></h4>
				<span>${t}</span>
			</div>
		`;
};
I.styles = [
  K,
  w`
			:host {
				display: block;
			}

			uui-tag {
				width: fit-content;
			}

			h4 {
				margin: 0;
			}

			#state {
				border-bottom: 1px solid var(--uui-color-divider);
				padding-bottom: var(--uui-size-space-4);
			}
		`
];
pe([
  u()
], I.prototype, "_userInfo", 2);
pe([
  u()
], I.prototype, "_userDisplayState", 2);
I = pe([
  C("umb-user-workspace-info")
], I);
var Lt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Ze = (e) => {
  throw TypeError(e);
}, G = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Kt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Lt(t, s, r), r;
}, me = (e, t, s) => t.has(e) || Ze("Cannot " + s), d = (e, t, s) => (me(e, t, "read from private field"), t.get(e)), A = (e, t, s) => t.has(e) ? Ze("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Gt = (e, t, s, a) => (me(e, t, "write to private field"), t.set(e, s), s), se = (e, t, s) => (me(e, t, "access private method"), s), v, Q, x, je, oe, ne, et, ue, tt;
let $ = class extends k {
  constructor() {
    super(), A(this, x), this._allowedFileTypes = "image/*", A(this, v), A(this, Q, new yt(this)), A(this, oe, () => {
      this.observe(
        d(this, v).data,
        async (e) => {
          this._user = e;
        },
        "umbUserObserver"
      );
    }), A(this, ne, async () => {
      try {
        const e = await se(this, x, et).call(this);
        d(this, v)?.uploadAvatar(e);
      } catch (e) {
        console.error(e);
      }
    }), A(this, ue, async () => {
      d(this, v) && d(this, v).deleteAvatar();
    }), this.consumeContext(U, (e) => {
      Gt(this, v, e), d(this, v) && d(this, oe).call(this);
    }), se(this, x, je).call(this);
  }
  getFormElement() {
    return this._selectElement;
  }
  render() {
    return this._user ? n`
			<uui-box>
				<form id="AvatarUploadForm" novalidate>
					<umb-user-avatar
						id="Avatar"
						.name=${this._user.name}
						.kind=${this._user.kind}
						.imgUrls=${this._user.avatarUrls ?? []}></umb-user-avatar>
					<input id="AvatarFileField" type="file" name="avatarFile" accept=${this._allowedFileTypes} required hidden />
					<uui-button label="${this.localize.term("user_changePhoto")}" @click=${d(this, ne)}></uui-button>
					${se(this, x, tt).call(this) ? n`
								<uui-button
									type="button"
									label=${this.localize.term("user_removePhoto")}
									@click=${d(this, ue)}></uui-button>
							` : m}
				</form>
			</uui-box>
		` : m;
  }
};
v = /* @__PURE__ */ new WeakMap();
Q = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakSet();
je = async function() {
  await d(this, Q).initialized, this.observe(
    d(this, Q).part("imageFileTypes"),
    (e) => {
      e.length ? this._allowedFileTypes = e.map((t) => `.${t}`).join(",") : this._allowedFileTypes = "image/*";
    },
    "_imageFileTypes"
  );
};
oe = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
et = function() {
  return new Promise((e, t) => {
    if (!this._avatarFileField) {
      t("Can't find avatar file field");
      return;
    }
    this._avatarFileField.addEventListener("change", (s) => {
      const r = (s?.target).files?.[0];
      if (!r) {
        t("Can't find avatar file");
        return;
      }
      e(r);
    }), this._avatarFileField.click();
  });
};
ue = /* @__PURE__ */ new WeakMap();
tt = function() {
  return this._user ? this._user.avatarUrls.length > 0 : !1;
};
$.styles = [
  w`
			:host {
				display: block;
			}

			#Avatar {
				font-size: 75px;
				place-self: center;
			}

			form {
				text-align: center;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-2);
			}
		`
];
G([
  u()
], $.prototype, "_user", 2);
G([
  u()
], $.prototype, "_allowedFileTypes", 2);
G([
  Se("#AvatarFileField")
], $.prototype, "_avatarFileField", 2);
G([
  Se("uui-combobox")
], $.prototype, "_selectElement", 2);
$ = G([
  C("umb-user-workspace-avatar")
], $);
var Bt = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, st = (e) => {
  throw TypeError(e);
}, Z = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Ht(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Bt(t, s, r), r;
}, ve = (e, t, s) => t.has(e) || st("Cannot " + s), E = (e, t, s) => (ve(e, t, "read from private field"), t.get(e)), B = (e, t, s) => t.has(e) ? st("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Ce = (e, t, s, a) => (ve(e, t, "write to private field"), t.set(e, s), s), y = (e, t, s) => (ve(e, t, "access private method"), s), z, T, j, _, rt, ee, at, it, ot;
const Yt = "umb-user-workspace-client-credentials";
let q = class extends k {
  constructor() {
    super(), B(this, _), this._clientCredentials = [], B(this, z), B(this, T, be.TYPE), B(this, j, new wt(this)), this.consumeContext(U, (e) => {
      Ce(this, z, e), this.observe(E(this, z)?.kind, (t) => this._userKind = t, "umbUserKindObserver"), this.observe(
        E(this, z)?.unique,
        async (t) => {
          t && y(this, _, rt).call(this, t);
        },
        "umbUserUniqueObserver"
      );
    }), this.consumeContext(be, (e) => {
      Ce(this, T, e);
    });
  }
  render() {
    return this._userKind !== X.API ? m : n`<uui-box>
			<div slot="headline">Client Credentials</div>
			<uui-ref-list>${this._clientCredentials.map((e) => n` ${y(this, _, ot).call(this, e)} `)}</uui-ref-list>
			<uui-button
				id="add-button"
				look="placeholder"
				label=${this.localize.term("general_add")}
				@click=${y(this, _, at)}></uui-button>
		</uui-box>`;
  }
};
z = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
rt = function(e) {
  e && this._userUnique !== e && (this._userUnique = e, y(this, _, ee).call(this)), e || (this._userUnique = void 0, this._clientCredentials = []);
};
ee = async function() {
  if (!this._userUnique) throw new Error("User unique not available");
  const { data: e } = await E(this, j).requestClientCredentials({
    user: { unique: this._userUnique }
  });
  this._clientCredentials = e ?? [];
};
at = function(e) {
  if (e.stopPropagation(), !E(this, T)) throw new Error("Modal Manager Context not available");
  if (!this._userUnique) throw new Error("User unique not available");
  E(this, T).open(this, pt, {
    data: {
      user: {
        unique: this._userUnique
      }
    }
  }).onSubmit().then(() => y(this, _, ee).call(this));
};
it = async function(e, t) {
  if (e.stopPropagation(), !this._userUnique) throw new Error("User unique not available");
  await Ct(this, {
    headline: `Delete ${t.unique}`,
    content: `Are you sure you want to delete ${t.unique}?`,
    confirmLabel: "Delete",
    color: "danger"
  });
  const s = {
    user: { unique: this._userUnique },
    client: { unique: t.unique }
  }, { error: a } = await E(this, j).requestDelete(s);
  a || y(this, _, ee).call(this);
};
ot = function(e) {
  return n`
			<uui-ref-node name=${e.unique} readonly>
				<uui-icon slot="icon" name="icon-key"></uui-icon>
				<uui-button
					slot="actions"
					@click=${(t) => y(this, _, it).call(this, t, e)}
					label="Delete ${e.unique}"
					compact
					><uui-icon name="icon-trash" look="danger"></uui-icon
				></uui-button>
			</uui-ref-node>
		`;
};
q.styles = [
  K,
  w`
			:host {
				display: block;
			}

			uui-input {
				width: 100%;
			}

			#add-button {
				width: 100%;
			}
		`
];
Z([
  u()
], q.prototype, "_userUnique", 2);
Z([
  u()
], q.prototype, "_userKind", 2);
Z([
  u()
], q.prototype, "_clientCredentials", 2);
q = Z([
  C(Yt)
], q);
var Vt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, nt = (e) => {
  throw TypeError(e);
}, ut = (e, t, s, a) => {
  for (var r = a > 1 ? void 0 : a ? Xt(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (a ? o(t, s, r) : o(r)) || r);
  return a && r && Vt(t, s, r), r;
}, fe = (e, t, s) => t.has(e) || nt("Cannot " + s), ke = (e, t, s) => (fe(e, t, "read from private field"), t.get(e)), Ae = (e, t, s) => t.has(e) ? nt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Jt = (e, t, s, a) => (fe(e, t, "write to private field"), t.set(e, s), s), re = (e, t, s) => (fe(e, t, "access private method"), s), F, R, lt, ct, dt;
let L = class extends k {
  constructor() {
    super(), Ae(this, R), Ae(this, F), this.consumeContext(U, (e) => {
      Jt(this, F, e), re(this, R, lt).call(this);
    });
  }
  render() {
    return n`
			<umb-entity-detail-workspace-editor class="uui-text" .backPath=${bt}>
				<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
				${this._user ? n`<div id="main">
							<div id="left-column">${re(this, R, ct).call(this)}</div>
							<div id="right-column">${re(this, R, dt).call(this)}</div>
						</div>` : m}
			</umb-entity-detail-workspace-editor>
		`;
  }
};
F = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakSet();
lt = function() {
  ke(this, F) && this.observe(ke(this, F).data, (e) => this._user = e, "umbUserObserver");
};
ct = function() {
  return n`
			<umb-stack>
				<umb-user-workspace-profile-settings></umb-user-workspace-profile-settings>
				<umb-user-workspace-assign-access></umb-user-workspace-assign-access>
				<umb-user-workspace-access></umb-user-workspace-access>
			</umb-stack>
		`;
};
dt = function() {
  return n`
			<umb-stack look="compact">
				<umb-user-workspace-avatar></umb-user-workspace-avatar>
				<umb-user-workspace-info></umb-user-workspace-info>
				<umb-user-workspace-client-credentials></umb-user-workspace-client-credentials>
			</umb-stack>
		`;
};
L.styles = [
  K,
  w`
			:host {
				display: block;
				height: 100%;
			}

			#main {
				display: grid;
				grid-template-columns: 1fr 350px;
				gap: var(--uui-size-layout-1);
				padding: var(--uui-size-layout-1);
			}

			#left-column {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}
		`
];
ut([
  u()
], L.prototype, "_user", 2);
L = ut([
  C("umb-user-workspace-editor")
], L);
class gs extends kt {
  constructor(t) {
    super(t, {
      workspaceAlias: vt,
      entityType: mt,
      detailRepositoryAlias: _t
    }), this.avatarRepository = new ht(this), this.configRepository = new ft(this), this.state = this._data.createObservablePartOfCurrent((s) => s?.state), this.kind = this._data.createObservablePartOfCurrent((s) => s?.kind), this.userGroupUniques = this._data.createObservablePartOfCurrent((s) => s?.userGroupUniques || []), this.documentStartNodeUniques = this._data.createObservablePartOfCurrent(
      (s) => s?.documentStartNodeUniques || []
    ), this.hasDocumentRootAccess = this._data.createObservablePartOfCurrent(
      (s) => s?.hasDocumentRootAccess || !1
    ), this.mediaStartNodeUniques = this._data.createObservablePartOfCurrent(
      (s) => s?.mediaStartNodeUniques || []
    ), this.hasMediaRootAccess = this._data.createObservablePartOfCurrent((s) => s?.hasMediaRootAccess || !1), this.#e = new At(void 0), this.calculatedStartNodes = this.#e.asObservable(), this.routes.setRoutes([
      {
        path: "edit/:id",
        component: L,
        setup: (s, a) => {
          const r = a.match.params.id;
          this.load(r);
        }
      }
    ]);
  }
  #e;
  async load(t) {
    const s = await super.load(t);
    if (!s.data)
      return this.removeUmbControllerByAlias("umbUserStoreObserver"), s;
    if (this.observe(
      s.asObservable?.(),
      (r) => this.onUserStoreChanges(r),
      "umbUserStoreObserver"
    ), !this._detailRepository)
      throw new Error("Detail repository is missing");
    const { data: a } = await this._detailRepository.requestCalculateStartNodes(t);
    return this.#e.setValue(a), s;
  }
  /* TODO: some properties are allowed to update without saving.
  	For a user properties like state will be updated when one of the entity actions are executed.
  	Therefore we have to subscribe to the user store to update the state in the workspace data.
  	There might be a less manual way to do this.
  */
  onUserStoreChanges(t) {
    t && this._data.updateCurrent({ state: t.state, avatarUrls: t.avatarUrls });
  }
  getState() {
    return this._data.getCurrent()?.state;
  }
  updateProperty(t, s) {
    this._data.updateCurrent({ [t]: s });
  }
  // TODO: implement upload progress
  uploadAvatar(t) {
    const s = this.getUnique();
    if (!s) throw new Error("Id is missing");
    return this.avatarRepository.uploadAvatar(s, t);
  }
  deleteAvatar() {
    const t = this.getUnique();
    if (!t) throw new Error("Id is missing");
    return this.avatarRepository.deleteAvatar(t);
  }
  destroy() {
    this.avatarRepository.destroy(), super.destroy();
  }
}
export {
  gs as UmbUserWorkspaceContext,
  gs as api
};
//# sourceMappingURL=user-workspace.context-C4jEzfhd.js.map

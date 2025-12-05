import { UmbContextToken as I } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import { UmbManagementApiItemDataCache as ue } from "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { css as X, property as l, state as C, query as Ue, customElement as T, ifDefined as H, classMap as pe, html as U, repeat as W, nothing as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { createExtensionApiByAlias as J } from "@umbraco-cms/backoffice/extension-registry";
import { UmbModalToken as y } from "@umbraco-cms/backoffice/modal";
import { UmbPickerInputContext as de } from "@umbraco-cms/backoffice/picker-input";
import { splitStringToArray as he } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as Se } from "@umbraco-cms/backoffice/event";
import { UmbSorterController as Ee } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as Ae } from "@umbraco-cms/backoffice/external/uui";
const rt = "Umb.Repository.UserCollection", it = new I("UmbUserDetailStore"), at = new I("UmbUserItemStore"), Ie = "user", ot = "user-root", nt = "Umb.CollectionView.User.Table", _t = "Umb.CollectionView.User.Grid", lt = new I("UmbCollectionContext"), ct = "Umb.Collection.User", mt = "Umb.Repository.User.Avatar", ut = "Umb.Repository.User.ChangePassword", L = Object.freeze({
  DEFAULT: "Default",
  API: "Api"
}), Ut = "Umb.Repository.User.Detail", pt = "Umb.Store.User.Detail", dt = new ue(), Ce = "Umb.Repository.User.Item", ht = "Umb.ItemStore.User", St = "Umb.Repository.User.Disable", Et = "Umb.Repository.User.Enable", At = "Umb.Repository.User.Unlock";
var Re = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, Q = (e) => {
  throw TypeError(e);
}, p = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? fe(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && Re(t, s, r), r;
}, k = (e, t, s) => t.has(e) || Q("Cannot " + s), h = (e, t, s) => (k(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Y = (e, t, s) => t.has(e) ? Q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Oe = (e, t, s, i) => (k(e, t, "write to private field"), t.set(e, s), s), N = (e, t, s) => (k(e, t, "access private method"), s), c, R, Z, z;
const ve = "umb-user-avatar";
let m = class extends M {
  constructor() {
    super(...arguments), Y(this, R), this.kind = L.DEFAULT, Y(this, c, []), this._imgSrcSizes = [], this._imgSrc = "", this._hasImgUrls = !1;
  }
  get imgUrls() {
    return h(this, c);
  }
  set imgUrls(e) {
    Oe(this, c, e), this._hasImgUrls = e.length > 0, N(this, R, Z).call(this);
  }
  firstUpdated() {
    N(this, R, z).call(this);
  }
  render() {
    const e = {
      default: this.kind === L.API,
      api: this.kind === L.API,
      "has-image": this._hasImgUrls
    };
    return U`<uui-avatar
			.name=${this.name || "Unknown"}
			img-src=${H(this._imgSrc ? this._imgSrc : void 0)}
			class=${pe(e)}></uui-avatar>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakSet();
Z = function() {
  if (h(this, c).length === 0) {
    this._imgSrcSizes = [];
    return;
  }
  this._imgSrcSizes = [
    {
      w: 30,
      url: h(this, c)[0]
    },
    {
      w: 60,
      url: h(this, c)[1]
    },
    {
      w: 90,
      url: h(this, c)[2]
    },
    {
      w: 150,
      url: h(this, c)[3]
    },
    {
      w: 300,
      url: h(this, c)[4]
    }
  ], N(this, R, z).call(this);
};
z = async function() {
  this._hasImgUrls && this.avatarElement && setTimeout(() => {
    const t = this.avatarElement.getBoundingClientRect().width, s = this._imgSrcSizes.filter((i) => t * 1.5 <= i.w);
    this._imgSrc = s[0]?.url;
  }, 0);
};
m.styles = [
  X`
			uui-avatar {
				background-color: transparent;
				color: inherit;
				box-shadow: 0 0 0 1.5px var(--uui-color-border);
			}

			uui-avatar.has-image {
				border-color: transparent;
			}

			uui-avatar.api {
				border-radius: 9%;
			}
		`
];
p([
  l({ type: String })
], m.prototype, "name", 2);
p([
  l({ type: String })
], m.prototype, "kind", 2);
p([
  l({ type: Array, attribute: !1 })
], m.prototype, "imgUrls", 1);
p([
  C()
], m.prototype, "_imgSrcSizes", 2);
p([
  C()
], m.prototype, "_imgSrc", 2);
p([
  C()
], m.prototype, "_hasImgUrls", 2);
p([
  Ue("uui-avatar")
], m.prototype, "avatarElement", 2);
m = p([
  T(ve)
], m);
var ye = Object.defineProperty, Te = Object.getOwnPropertyDescriptor, j = (e) => {
  throw TypeError(e);
}, b = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Te(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && ye(t, s, r), r;
}, G = (e, t, s) => t.has(e) || j("Cannot " + s), D = (e, t, s) => (G(e, t, "read from private field"), s ? s.call(e) : t.get(e)), F = (e, t, s) => t.has(e) ? j("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Me = (e, t, s, i) => (G(e, t, "write to private field"), t.set(e, s), s), be = (e, t, s) => (G(e, t, "access private method"), s), E, B, ee;
let f = class extends M {
  constructor() {
    super(...arguments), F(this, B), F(this, E, []), this.readonly = !1, this._displayValue = [];
  }
  get uniques() {
    return D(this, E);
  }
  set uniques(e) {
    Me(this, E, e), D(this, E).length > 0 && be(this, B, ee).call(this);
  }
  render() {
    return this.uniques.length < 1 ? U`
				<uui-ref-node
					name="Content Root"
					?disabled=${this.readonly}
					style="--uui-color-disabled-contrast: var(--uui-color-text)">
					<uui-icon slot="icon" name="folder"></uui-icon>
				</uui-ref-node>
			` : W(
      this._displayValue,
      (e) => e.unique,
      (e) => U`
					<!-- TODO: get correct variant name -->
					<uui-ref-node
						name=${e.variants[0]?.name}
						?disabled=${this.readonly}
						style="--uui-color-disabled-contrast: var(--uui-color-text)">
						<uui-icon slot="icon" name="folder"></uui-icon>
					</uui-ref-node>
				`
    );
  }
};
E = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
ee = async function() {
  const e = await J(this, "Umb.Repository.DocumentItem"), { asObservable: t } = await e.requestItems(D(this, E));
  this.observe(t?.(), (s) => {
    this._displayValue = s || [];
  });
};
b([
  l({ type: Array, attribute: !1 })
], f.prototype, "uniques", 1);
b([
  l({ type: Boolean })
], f.prototype, "readonly", 2);
b([
  C()
], f.prototype, "_displayValue", 2);
f = b([
  T("umb-user-document-start-node")
], f);
const ge = new y(
  "Umb.Modal.User.Picker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Le extends de {
  constructor(t) {
    super(t, Ce, ge);
  }
}
var we = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, te = (e) => {
  throw TypeError(e);
}, d = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Ne(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && we(t, s, r), r;
}, se = (e, t, s) => t.has(e) || te("Cannot " + s), _ = (e, t, s) => (se(e, t, "read from private field"), s ? s.call(e) : t.get(e)), w = (e, t, s) => t.has(e) ? te("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), O = (e, t, s) => (se(e, t, "access private method"), s), P, n, S, re, ie, ae, oe, ne;
let u = class extends Ae(M, "") {
  constructor() {
    super(), w(this, S), w(this, P, new Ee(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputUser",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new Se());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", w(this, n, new Le(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && _(this, n).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && _(this, n).getSelection().length > this.max
    ), this.observe(_(this, n).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(_(this, n).selectedItems, (e) => this._items = e, "_observerItems");
  }
  get min() {
    return _(this, n).min;
  }
  set min(e) {
    _(this, n).min = e;
  }
  get max() {
    return _(this, n).max;
  }
  set max(e) {
    _(this, n).max = e;
  }
  set selection(e) {
    _(this, n).setSelection(e), _(this, P).setModel(e);
  }
  get selection() {
    return _(this, n).getSelection();
  }
  set value(e) {
    this.selection = he(e);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return U`${O(this, S, oe).call(this)} ${O(this, S, ae).call(this)}`;
  }
};
P = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
re = function() {
  _(this, n).openPicker({});
};
ie = function(e) {
  _(this, n).requestRemoveItem(e.unique);
};
ae = function() {
  return this.max > 0 && this.selection.length >= this.max ? q : U`
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${O(this, S, re)}></uui-button>
		`;
};
oe = function() {
  return this._items ? U`
			<uui-ref-list>
				${W(
    this._items,
    (e) => e.unique,
    (e) => O(this, S, ne).call(this, e)
  )}
			</uui-ref-list>
		` : q;
};
ne = function(e) {
  return e.unique ? U`
			<umb-entity-item-ref .item=${e} id=${e.unique} ?standalone=${this.max === 1}>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => O(this, S, ie).call(this, e)}></uui-button>
				</uui-action-bar>
			</umb-entity-item-ref>
		` : q;
};
u.styles = [
  X`
			#btn-add {
				width: 100%;
			}
		`
];
d([
  l({ type: Number })
], u.prototype, "min", 1);
d([
  l({ type: String, attribute: "min-message" })
], u.prototype, "minMessage", 2);
d([
  l({ type: Number })
], u.prototype, "max", 1);
d([
  l({ type: String, attribute: "min-message" })
], u.prototype, "maxMessage", 2);
d([
  l({ type: Array })
], u.prototype, "selection", 1);
d([
  l()
], u.prototype, "value", 1);
d([
  C()
], u.prototype, "_items", 2);
u = d([
  T("umb-user-input")
], u);
var De = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, _e = (e) => {
  throw TypeError(e);
}, g = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Be(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && De(t, s, r), r;
}, V = (e, t, s) => t.has(e) || _e("Cannot " + s), $ = (e, t, s) => (V(e, t, "read from private field"), s ? s.call(e) : t.get(e)), K = (e, t, s) => t.has(e) ? _e("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Pe = (e, t, s, i) => (V(e, t, "write to private field"), t.set(e, s), s), $e = (e, t, s) => (V(e, t, "access private method"), s), A, x, le;
let v = class extends M {
  constructor() {
    super(...arguments), K(this, x), K(this, A, []), this.readonly = !1, this._displayValue = [];
  }
  get uniques() {
    return $(this, A);
  }
  set uniques(e) {
    Pe(this, A, e), $(this, A).length > 0 && $e(this, x, le).call(this);
  }
  render() {
    return this.uniques.length < 1 ? U`
				<uui-ref-node
					name="Media Root"
					?disabled=${this.readonly}
					style="--uui-color-disabled-contrast: var(--uui-color-text)">
					<uui-icon slot="icon" name="folder"></uui-icon>
				</uui-ref-node>
			` : W(
      this._displayValue,
      (e) => e.unique,
      (e) => U`
					<!-- TODO: get correct variant name -->
					<uui-ref-node
						name=${H(e.variants[0]?.name)}
						?disabled=${this.readonly}
						style="--uui-color-disabled-contrast: var(--uui-color-text)">
						<uui-icon slot="icon" name="folder"></uui-icon>
					</uui-ref-node>
				`
    );
  }
};
A = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakSet();
le = async function() {
  const e = await J(this, "Umb.Repository.MediaItem"), { asObservable: t } = await e.requestItems($(this, A));
  this.observe(t?.(), (s) => {
    this._displayValue = s || [];
  });
};
g([
  l({ type: Array, attribute: !1 })
], v.prototype, "uniques", 1);
g([
  l({ type: Boolean })
], v.prototype, "readonly", 2);
g([
  C()
], v.prototype, "_displayValue", 2);
v = g([
  T("umb-user-media-start-node")
], v);
const It = "Umb.Repository.User.ClientCredential", ce = "Umb.Modal.User.ClientCredential.Create", Ct = [
  {
    type: "modal",
    alias: ce,
    name: "Create User Client Credential Modal",
    element: () => import("./create-user-client-credential-modal.element-CJjOqs3J.js")
  }
], Rt = new y(ce, {
  modal: {
    type: "dialog",
    size: "small"
  }
}), ft = "Umb.Condition.User.AllowChangePassword", Ot = "Umb.Condition.CurrentUser.AllowChangePassword", vt = "Umb.Condition.User.AllowDeleteAction", yt = "Umb.Condition.User.AllowDisableAction", Tt = "Umb.Condition.User.AllowExternalLoginAction", Mt = "Umb.Condition.User.AllowMfaAction", bt = "Umb.Condition.CurrentUser.AllowMfaAction", gt = "Umb.Condition.User.AllowUnlockAction", Lt = "Umb.Condition.User.IsDefaultKind", me = "Umb.Modal.User.Create", wt = [
  {
    type: "modal",
    alias: me,
    name: "Create User Modal",
    js: () => import("./create-user-modal.element-Bj6adTis.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.User.CreateSuccess",
    name: "Create Success User Modal",
    js: () => import("./create-user-success-modal.element-C62gs6Xe.js")
  }
], Nt = new y(me, {
  modal: {
    type: "dialog",
    size: "small"
  }
}), Dt = new y("Umb.Modal.User.CreateSuccess", {
  modal: {
    type: "dialog",
    size: "small"
  }
}), Bt = new y("Umb.Modal.User.Mfa", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), Pt = new I("UmbUserConfigStore"), $t = new I(
  "UmbCurrentUserConfigStore"
), xt = "Umb.Repository.User.Config", Wt = "Umb.Store.User.Config", qt = "Umb.Repository.CurrentUser.Config", kt = "Umb.Store.CurrentUser.Config", zt = new I(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === Ie
), Gt = "Umb.Workspace.User", Vt = "Umb.Workspace.UserRoot", Yt = "Umb.Repository.User.Invite";
export {
  Tt as A,
  Mt as B,
  bt as C,
  gt as D,
  Lt as E,
  me as F,
  mt as G,
  ut as H,
  xt as I,
  Wt as J,
  qt as K,
  kt as L,
  Ut as M,
  pt as N,
  St as O,
  Et as P,
  Ce as Q,
  ht as R,
  At as S,
  Gt as T,
  L as U,
  Vt as V,
  Yt as W,
  Ct as X,
  wt as Y,
  Dt as a,
  _t as b,
  Bt as c,
  Ie as d,
  ot as e,
  it as f,
  at as g,
  lt as h,
  zt as i,
  Pt as j,
  $t as k,
  Nt as l,
  ge as m,
  rt as n,
  ct as o,
  nt as p,
  Le as q,
  u as r,
  It as s,
  Rt as t,
  dt as u,
  ce as v,
  ft as w,
  Ot as x,
  vt as y,
  yt as z
};
//# sourceMappingURL=constants-DjdF3T-M.js.map

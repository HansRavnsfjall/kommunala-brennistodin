import { UmbContextToken as I } from "@umbraco-cms/backoffice/context-api";
import "@umbraco-cms/backoffice/notification";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/temporary-file";
import "@umbraco-cms/backoffice/entity-item";
import "@umbraco-cms/backoffice/localization-api";
import "@umbraco-cms/backoffice/external/rxjs";
import { css as X, property as l, state as R, query as me, customElement as T, ifDefined as H, classMap as Ue, html as U, repeat as W, nothing as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { createExtensionApiByAlias as J } from "@umbraco-cms/backoffice/extension-registry";
import { UmbModalToken as y } from "@umbraco-cms/backoffice/modal";
import { UmbPickerInputContext as pe } from "@umbraco-cms/backoffice/picker-input";
import { splitStringToArray as de } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as he } from "@umbraco-cms/backoffice/event";
import { UmbSorterController as Se } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as Ee } from "@umbraco-cms/backoffice/external/uui";
const st = "Umb.Repository.UserCollection", rt = new I("UmbUserDetailStore"), it = new I("UmbUserItemStore"), Ae = "user", at = "user-root", ot = "Umb.CollectionView.User.Table", nt = "Umb.CollectionView.User.Grid", _t = new I("UmbCollectionContext"), lt = "Umb.Collection.User", ct = "Umb.Repository.User.Avatar", ut = "Umb.Repository.User.ChangePassword", L = Object.freeze({
  DEFAULT: "Default",
  API: "Api"
}), mt = "Umb.Repository.User.Detail", Ut = "Umb.Store.User.Detail", Ie = "Umb.Repository.User.Item", pt = "Umb.ItemStore.User", dt = "Umb.Repository.User.Disable", ht = "Umb.Repository.User.Enable", St = "Umb.Repository.User.Unlock";
var Re = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, Q = (e) => {
  throw TypeError(e);
}, p = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Ce(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && Re(t, s, r), r;
}, k = (e, t, s) => t.has(e) || Q("Cannot " + s), h = (e, t, s) => (k(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Y = (e, t, s) => t.has(e) ? Q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Oe = (e, t, s, i) => (k(e, t, "write to private field"), t.set(e, s), s), N = (e, t, s) => (k(e, t, "access private method"), s), c, C, Z, z;
const fe = "umb-user-avatar";
let u = class extends M {
  constructor() {
    super(...arguments), Y(this, C), this.kind = L.DEFAULT, Y(this, c, []), this._imgSrcSizes = [], this._imgSrc = "", this.hasImgUrls = !1;
  }
  get imgUrls() {
    return h(this, c);
  }
  set imgUrls(e) {
    Oe(this, c, e), this.hasImgUrls = e.length > 0, N(this, C, Z).call(this);
  }
  firstUpdated() {
    N(this, C, z).call(this);
  }
  render() {
    const e = {
      default: this.kind === L.API,
      api: this.kind === L.API,
      "has-image": this.hasImgUrls
    };
    return U`<uui-avatar
			.name=${this.name || "Unknown"}
			img-src=${H(this._imgSrc ? this._imgSrc : void 0)}
			class=${Ue(e)}></uui-avatar>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakSet();
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
  ], N(this, C, z).call(this);
};
z = async function() {
  this.hasImgUrls && this.avatarElement && setTimeout(() => {
    const t = this.avatarElement.getBoundingClientRect().width, s = this._imgSrcSizes.filter((i) => t * 1.5 <= i.w);
    this._imgSrc = s[0]?.url;
  }, 0);
};
u.styles = [
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
], u.prototype, "name", 2);
p([
  l({ type: String })
], u.prototype, "kind", 2);
p([
  l({ type: Array, attribute: !1 })
], u.prototype, "imgUrls", 1);
p([
  R()
], u.prototype, "_imgSrcSizes", 2);
p([
  R()
], u.prototype, "_imgSrc", 2);
p([
  R()
], u.prototype, "hasImgUrls", 2);
p([
  me("uui-avatar")
], u.prototype, "avatarElement", 2);
u = p([
  T(fe)
], u);
var ve = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, j = (e) => {
  throw TypeError(e);
}, b = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ye(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && ve(t, s, r), r;
}, G = (e, t, s) => t.has(e) || j("Cannot " + s), D = (e, t, s) => (G(e, t, "read from private field"), s ? s.call(e) : t.get(e)), F = (e, t, s) => t.has(e) ? j("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Te = (e, t, s, i) => (G(e, t, "write to private field"), t.set(e, s), s), Me = (e, t, s) => (G(e, t, "access private method"), s), E, B, ee;
let O = class extends M {
  constructor() {
    super(...arguments), F(this, B), F(this, E, []), this.readonly = !1, this._displayValue = [];
  }
  get uniques() {
    return D(this, E);
  }
  set uniques(e) {
    Te(this, E, e), D(this, E).length > 0 && Me(this, B, ee).call(this);
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
], O.prototype, "uniques", 1);
b([
  l({ type: Boolean })
], O.prototype, "readonly", 2);
b([
  R()
], O.prototype, "_displayValue", 2);
O = b([
  T("umb-user-document-start-node")
], O);
const be = new y(
  "Umb.Modal.User.Picker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class ge extends pe {
  constructor(t) {
    super(t, Ie, be);
  }
}
var Le = Object.defineProperty, we = Object.getOwnPropertyDescriptor, te = (e) => {
  throw TypeError(e);
}, d = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? we(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && Le(t, s, r), r;
}, se = (e, t, s) => t.has(e) || te("Cannot " + s), _ = (e, t, s) => (se(e, t, "read from private field"), s ? s.call(e) : t.get(e)), w = (e, t, s) => t.has(e) ? te("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), f = (e, t, s) => (se(e, t, "access private method"), s), P, n, S, re, ie, ae, oe, ne;
let m = class extends Ee(M, "") {
  constructor() {
    super(), w(this, S), w(this, P, new Se(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputUser",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new he());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", w(this, n, new ge(this)), this.addValidator(
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
    this.selection = de(e);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return U`${f(this, S, oe).call(this)} ${f(this, S, ae).call(this)}`;
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
				@click=${f(this, S, re)}></uui-button>
		`;
};
oe = function() {
  return this._items ? U`
			<uui-ref-list>
				${W(
    this._items,
    (e) => e.unique,
    (e) => f(this, S, ne).call(this, e)
  )}
			</uui-ref-list>
		` : q;
};
ne = function(e) {
  return e.unique ? U`
			<umb-entity-item-ref .item=${e} id=${e.unique} ?standalone=${this.max === 1}>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => f(this, S, ie).call(this, e)}></uui-button>
				</uui-action-bar>
			</umb-entity-item-ref>
		` : q;
};
m.styles = [
  X`
			#btn-add {
				width: 100%;
			}
		`
];
d([
  l({ type: Number })
], m.prototype, "min", 1);
d([
  l({ type: String, attribute: "min-message" })
], m.prototype, "minMessage", 2);
d([
  l({ type: Number })
], m.prototype, "max", 1);
d([
  l({ type: String, attribute: "min-message" })
], m.prototype, "maxMessage", 2);
d([
  l({ type: Array })
], m.prototype, "selection", 1);
d([
  l()
], m.prototype, "value", 1);
d([
  R()
], m.prototype, "_items", 2);
m = d([
  T("umb-user-input")
], m);
var Ne = Object.defineProperty, De = Object.getOwnPropertyDescriptor, _e = (e) => {
  throw TypeError(e);
}, g = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? De(t, s) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (i ? o(t, s, r) : o(r)) || r);
  return i && r && Ne(t, s, r), r;
}, V = (e, t, s) => t.has(e) || _e("Cannot " + s), $ = (e, t, s) => (V(e, t, "read from private field"), s ? s.call(e) : t.get(e)), K = (e, t, s) => t.has(e) ? _e("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Be = (e, t, s, i) => (V(e, t, "write to private field"), t.set(e, s), s), Pe = (e, t, s) => (V(e, t, "access private method"), s), A, x, le;
let v = class extends M {
  constructor() {
    super(...arguments), K(this, x), K(this, A, []), this.readonly = !1, this._displayValue = [];
  }
  get uniques() {
    return $(this, A);
  }
  set uniques(e) {
    Be(this, A, e), $(this, A).length > 0 && Pe(this, x, le).call(this);
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
  R()
], v.prototype, "_displayValue", 2);
v = g([
  T("umb-user-media-start-node")
], v);
const Et = "Umb.Repository.User.ClientCredential", ce = "Umb.Modal.User.ClientCredential.Create", At = [
  {
    type: "modal",
    alias: ce,
    name: "Create User Client Credential Modal",
    element: () => import("./create-user-client-credential-modal.element-dHFt3WUs.js")
  }
], It = new y(ce, {
  modal: {
    type: "dialog",
    size: "small"
  }
}), Rt = "Umb.Condition.User.AllowChangePassword", Ct = "Umb.Condition.CurrentUser.AllowChangePassword", Ot = "Umb.Condition.User.AllowDeleteAction", ft = "Umb.Condition.User.AllowDisableAction", vt = "Umb.Condition.User.AllowExternalLoginAction", yt = "Umb.Condition.User.AllowMfaAction", Tt = "Umb.Condition.CurrentUser.AllowMfaAction", Mt = "Umb.Condition.User.AllowUnlockAction", bt = "Umb.Condition.User.IsDefaultKind", ue = "Umb.Modal.User.Create", gt = [
  {
    type: "modal",
    alias: ue,
    name: "Create User Modal",
    js: () => import("./create-user-modal.element-BsEWNoMc.js")
  },
  {
    type: "modal",
    alias: "Umb.Modal.User.CreateSuccess",
    name: "Create Success User Modal",
    js: () => import("./create-user-success-modal.element-BcLHboh9.js")
  }
], Lt = new y(ue, {
  modal: {
    type: "dialog",
    size: "small"
  }
}), wt = new y("Umb.Modal.User.CreateSuccess", {
  modal: {
    type: "dialog",
    size: "small"
  }
}), Nt = new y("Umb.Modal.User.Mfa", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), Dt = new I("UmbUserConfigStore"), Bt = new I(
  "UmbCurrentUserConfigStore"
), Pt = "Umb.Repository.User.Config", $t = "Umb.Store.User.Config", xt = "Umb.Repository.CurrentUser.Config", Wt = "Umb.Store.CurrentUser.Config", qt = new I(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === Ae
), kt = "Umb.Workspace.User", zt = "Umb.Workspace.UserRoot", Gt = "Umb.Repository.User.Invite";
export {
  yt as A,
  Tt as B,
  Mt as C,
  bt as D,
  ue as E,
  ct as F,
  ut as G,
  Pt as H,
  $t as I,
  xt as J,
  Wt as K,
  mt as L,
  Ut as M,
  dt as N,
  ht as O,
  Ie as P,
  pt as Q,
  St as R,
  kt as S,
  zt as T,
  L as U,
  Gt as V,
  At as W,
  gt as X,
  wt as a,
  nt as b,
  Nt as c,
  Ae as d,
  at as e,
  rt as f,
  it as g,
  _t as h,
  qt as i,
  Dt as j,
  Bt as k,
  Lt as l,
  be as m,
  st as n,
  lt as o,
  ot as p,
  ge as q,
  m as r,
  Et as s,
  It as t,
  ce as u,
  Rt as v,
  Ct as w,
  Ot as x,
  ft as y,
  vt as z
};
//# sourceMappingURL=constants-BH7VsFPT.js.map

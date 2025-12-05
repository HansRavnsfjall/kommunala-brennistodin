import { UmbModalToken as w, UmbModalBaseElement as Z } from "@umbraco-cms/backoffice/modal";
import { UmbContextToken as C } from "@umbraco-cms/backoffice/context-api";
import { UMB_COLLECTION_ALIAS_CONDITION as k, UmbCollectionItemPickerContext as ee } from "@umbraco-cms/backoffice/collection";
import { UmbPickerInputContext as te } from "@umbraco-cms/backoffice/picker-input";
import { html as h, nothing as f, repeat as L, css as se, property as M, state as R, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as re } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as ie } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as oe } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as ae } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as ne } from "@umbraco-cms/backoffice/sorter";
import { UMB_MEMBER_TYPE_ENTITY_TYPE as le } from "@umbraco-cms/backoffice/member-type";
import { UMB_NOTIFICATION_CONTEXT as me } from "@umbraco-cms/backoffice/notification";
import { UmbRepositoryBase as ce } from "@umbraco-cms/backoffice/repository";
import { tryExecute as ue } from "@umbraco-cms/backoffice/resources";
import { MemberService as pe } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTextStyles as he } from "@umbraco-cms/backoffice/style";
const et = "Umb.GlobalSearch.Member", x = "Umb.SearchProvider.Member", _e = new w(
  "Umb.Modal.MemberPicker",
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      search: {
        providerAlias: x
      }
    }
  }
), I = "member", tt = "member-root", st = `${I}-property-value`, be = (e) => e.getEntityType() === I, rt = new C("UmbVariantContext", void 0, be), D = "Umb.Repository.Member.Collection", de = [
  {
    type: "repository",
    alias: D,
    name: "Member Collection Repository",
    api: () => Promise.resolve().then(() => Be)
  }
], Me = "Umb.CollectionView.Member.Table", Ee = [
  {
    type: "collectionView",
    alias: Me,
    name: "Member Table Collection View",
    element: () => import("./member-table-collection-view.element-6hJWGGCN.js"),
    meta: {
      label: "Table",
      icon: "icon-list",
      pathName: "table"
    },
    conditions: [
      {
        alias: k,
        match: "Umb.Collection.Member"
      }
    ]
  }
], it = new C("UmbCollectionContext"), ot = new w("Umb.Modal.Member.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), N = "Umb.Repository.MemberItem", fe = "Umb.Store.MemberItem", at = [
  {
    type: "repository",
    alias: N,
    name: "Member Item Repository",
    api: () => import("./member-item.repository-B5Lxz8I-.js")
  },
  {
    type: "itemStore",
    alias: fe,
    name: "Member Item Store",
    api: () => import("./member-item.store-B0e13DVd.js")
  }
], ye = new C("UmbMemberItemStore"), nt = "Umb.Repository.Member.Reference", ve = "Umb.Repository.Member.Detail", Te = "Umb.Store.Member.Detail", lt = [
  {
    type: "repository",
    alias: ve,
    name: "Member Detail Repository",
    api: () => import("./member-detail.repository-j19Ju2fK.js")
  },
  {
    type: "store",
    alias: Te,
    name: "Member Detail Store",
    api: () => import("./member-detail.store-C2U_CaFH.js")
  }
], Ce = new C("UmbMemberDetailStore"), mt = new C(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === I
), ct = {
  culture: null,
  segment: null,
  name: "",
  createDate: null,
  updateDate: null,
  flags: []
}, ut = "Umb.Workspace.Member", pt = "Umb.WorkspaceView.Member.Content", ht = "Umb.WorkspaceView.Member.Member", _t = "Umb.Workspace.MemberRoot";
class Ue extends te {
  constructor(t) {
    super(t, N, _e);
  }
  async openPicker(t, s) {
    const r = {
      ...t
    };
    r.pickableFilter = (i) => this.#e(i, s?.allowedContentTypes), t?.search || (r.search = {
      providerAlias: x,
      ...t?.search
    }), r.search.queryParams = {
      allowedContentTypes: s?.allowedContentTypes,
      ...t?.search?.queryParams
    }, await super.openPicker(r);
  }
  #e = (t, s) => s && s.length > 0 ? s.map((r) => r.unique).includes(t.memberType.unique) : !0;
}
var Re = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, q = (e) => {
  throw TypeError(e);
}, u = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? Ie(t, s) : t, p = e.length - 1, _; p >= 0; p--)
    (_ = e[p]) && (i = (r ? _(t, s, i) : _(i)) || i);
  return r && i && Re(t, s, i), i;
}, P = (e, t, s) => t.has(e) || q("Cannot " + s), a = (e, t, s) => (P(e, t, "read from private field"), s ? s.call(e) : t.get(e)), U = (e, t, s) => t.has(e) ? q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Oe = (e, t, s, r) => (P(e, t, "write to private field"), t.set(e, s), s), y = (e, t, s) => (P(e, t, "access private method"), s), v, T, n, b, W, V, F, Y, z, K;
let l = class extends oe(
  ae
) {
  constructor() {
    super(), U(this, b), U(this, v, new ne(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputMember",
      itemSelector: "umb-entity-item-ref",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new ie());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.filter = () => !0, U(this, T, !1), U(this, n, new Ue(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    ), this.observe(a(this, n).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(a(this, n).selectedItems, (e) => this._items = e, "_observeItems");
  }
  set min(e) {
    a(this, n).min = e;
  }
  get min() {
    return a(this, n).min;
  }
  set max(e) {
    a(this, n).max = e;
  }
  get max() {
    return a(this, n).max;
  }
  set selection(e) {
    a(this, n).setSelection(e), a(this, v).setModel(e);
  }
  get selection() {
    return a(this, n).getSelection();
  }
  set value(e) {
    this.selection = re(e), super.value = e;
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return a(this, T);
  }
  set readonly(e) {
    Oe(this, T, e), a(this, T) ? a(this, v).disable() : a(this, v).enable();
  }
  render() {
    return h`${y(this, b, F).call(this)} ${y(this, b, z).call(this)}`;
  }
};
v = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
W = function() {
  a(this, n).openPicker(
    {
      filter: this.filter
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: le
      }))
    }
  );
};
V = function(e) {
  a(this, n).requestRemoveItem(e.unique);
};
F = function() {
  return this._items ? h`
			<uui-ref-list>
				${L(
    this._items,
    (e) => e.unique,
    (e) => y(this, b, Y).call(this, e)
  )}
			</uui-ref-list>
		` : f;
};
Y = function(e) {
  return e.unique ? h`
			<umb-entity-item-ref id=${e.unique} .item=${e} ?readonly=${this.readonly} ?standalone=${this.max === 1}>
				<uui-action-bar slot="actions">${y(this, b, K).call(this, e)} </uui-action-bar>
			</umb-entity-item-ref>
		` : f;
};
z = function() {
  return this.selection.length >= this.max ? f : this.readonly && this.selection.length > 0 ? f : h`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${y(this, b, W)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}></uui-button>
			`;
};
K = function(e) {
  return this.readonly ? f : h`
			<uui-button @click=${() => y(this, b, V).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
		`;
};
l.styles = [
  se`
			#btn-add {
				display: block;
			}

			umb-entity-item-ref[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
u([
  M({ type: Number })
], l.prototype, "min", 1);
u([
  M({ type: String, attribute: "min-message" })
], l.prototype, "minMessage", 2);
u([
  M({ type: Number })
], l.prototype, "max", 1);
u([
  M({ type: String, attribute: "max-message" })
], l.prototype, "maxMessage", 2);
u([
  M({ type: Array })
], l.prototype, "allowedContentTypeIds", 2);
u([
  M({ type: String })
], l.prototype, "value", 1);
u([
  M({ type: Object, attribute: !1 })
], l.prototype, "filter", 2);
u([
  M({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 1);
u([
  R()
], l.prototype, "_items", 2);
l = u([
  $("umb-input-member")
], l);
class Se extends ce {
  constructor(t) {
    super(t), this.init = Promise.all([
      this.consumeContext(Ce, (s) => {
        this.detailStore = s;
      }).asPromise({ preventTimeout: !0 }).catch(() => {
      }),
      this.consumeContext(ye, (s) => {
        this.itemStore = s;
      }).asPromise({ preventTimeout: !0 }).catch(() => {
      }),
      this.consumeContext(me, (s) => {
        this.notificationContext = s;
      }).asPromise({ preventTimeout: !0 }).catch(() => {
      })
    ]);
  }
}
class Ae {
  #e;
  /**
   * Creates an instance of UmbMemberCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberCollectionServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Gets the member collection filtered by the given filter.
   * @param {UmbMemberCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbMemberCollectionServerDataSource
   */
  async getCollection(t) {
    const { data: s, error: r } = await ue(this.#e, pe.getFilterMember({ query: t }));
    if (r)
      return { error: r };
    if (!s)
      return { data: { items: [], total: 0 } };
    const { items: i, total: p } = s;
    return { data: { items: i.map((o) => ({
      entityType: I,
      email: o.email,
      variants: o.variants,
      unique: o.id,
      kind: o.kind,
      lastLoginDate: o.lastLoginDate || null,
      lastLockoutDate: o.lastLockoutDate || null,
      lastPasswordChangeDate: o.lastPasswordChangeDate || null,
      failedPasswordAttempts: o.failedPasswordAttempts,
      isApproved: o.isApproved,
      isLockedOut: o.isLockedOut,
      groups: o.groups,
      isTwoFactorEnabled: o.isTwoFactorEnabled,
      memberType: { unique: o.memberType.id, icon: o.memberType.icon },
      username: o.username,
      values: o.values,
      flags: o.flags
    })), total: p } };
  }
}
class A extends Se {
  #e;
  constructor(t) {
    super(t), this.#e = new Ae(t);
  }
  async requestCollection(t = { skip: 0, take: 100 }) {
    await this.init;
    const { data: s, error: r } = await this.#e.getCollection(t);
    return s && this.detailStore?.appendItems(s.items), { data: s, error: r, asObservable: () => this.detailStore.all() };
  }
}
const Be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMemberCollectionRepository: A,
  default: A
}, Symbol.toStringTag, { value: "Module" })), ge = [
  {
    type: "collectionAction",
    name: "Create Member Collection Action",
    kind: "button",
    alias: "Umb.CollectionAction.Member.Create",
    weight: 200,
    meta: {
      label: "#general_create"
    },
    element: () => import("./create-member-collection-action.element-Bj4aP19J.js"),
    conditions: [
      {
        alias: k,
        match: "Umb.Collection.Member"
      }
    ]
  }
], Pe = "Umb.Collection.Member", bt = [
  {
    type: "collection",
    alias: Pe,
    name: "Member Collection",
    api: () => import("./member-collection.context-BpVw6I4Y.js"),
    element: () => import("./member-collection.element-C8tfrRO6.js"),
    meta: {
      repositoryAlias: D
    }
  },
  ...de,
  ...Ee,
  ...ge
];
var we = Object.defineProperty, ke = Object.getOwnPropertyDescriptor, Q = (e) => {
  throw TypeError(e);
}, O = (e, t, s, r) => {
  for (var i = r > 1 ? void 0 : r ? ke(t, s) : t, p = e.length - 1, _; p >= 0; p--)
    (_ = e[p]) && (i = (r ? _(t, s, i) : _(i)) || i);
  return r && i && we(t, s, i), i;
}, X = (e, t, s) => t.has(e) || Q("Cannot " + s), m = (e, t, s) => (X(e, t, "read from private field"), s ? s.call(e) : t.get(e)), S = (e, t, s) => t.has(e) ? Q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), B = (e, t, s) => (X(e, t, "access private method"), s), g, c, E, G, j, H, J;
let d = class extends Z {
  constructor() {
    super(), S(this, E), this._members = [], this._selectableFilter = () => !0, S(this, g, new A(this)), S(this, c, new ee(this)), this.observe(
      m(this, c).selection.selection,
      (e) => {
        this.updateValue({ selection: e }), this.requestUpdate();
      },
      "umbSelectionObserver"
    ), this.observe(
      m(this, c).search.query,
      (e) => {
        this._searchQuery = e?.query;
      },
      "umbPickerSearchQueryObserver"
    );
  }
  async updated(e) {
    if (super.updated(e), e.has("data") && (m(this, c).selection.setMultiple(this.data?.multiple ?? !1), this.data?.pickableFilter && (this._selectableFilter = this.data?.pickableFilter), this.data?.search)) {
      m(this, c).search.updateConfig({
        ...this.data.search
      });
      const t = this.data.search.queryParams;
      t && m(this, c).search.setQuery(t);
    }
    e.has("value") && m(this, c).selection.setSelection(this.value?.selection);
  }
  async firstUpdated() {
    const { data: e } = await m(this, g).requestCollection({});
    this._members = e?.items ?? [];
  }
  render() {
    return h`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectMembers")}>
				<uui-box>
					<umb-picker-search-field></umb-picker-search-field>
					<umb-picker-search-result></umb-picker-search-result>
					${B(this, E, j).call(this)}</uui-box
				>
				${B(this, E, J).call(this)}
			</umb-body-layout>
		`;
  }
};
g = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakSet();
G = function() {
  return this.data?.filter ? this._members.filter(this.data.filter) : this._members;
};
j = function() {
  return this._searchQuery ? f : h`
			${L(
    m(this, E, G),
    (e) => e.unique,
    (e) => B(this, E, H).call(this, e)
  )}
		`;
};
H = function(e) {
  const t = this._selectableFilter(e);
  return h`
			<uui-menu-item
				label=${e.variants[0].name ?? ""}
				?selectable=${t}
				?disabled=${!t}
				@selected=${() => m(this, c).selection.select(e.unique)}
				@deselected=${() => m(this, c).selection.deselect(e.unique)}
				?selected=${m(this, c).selection.isSelected(e.unique)}>
				<umb-icon slot="icon" name=${e.memberType.icon}></umb-icon>
			</uui-menu-item>
		`;
};
J = function() {
  return h`
			<div slot="actions">
				<uui-button
					label=${this.localize.term("general_cancel")}
					@click=${() => this.modalContext?.reject()}></uui-button>
				<uui-button
					color="positive"
					look="primary"
					label=${this.localize.term("general_choose")}
					@click=${() => this.modalContext?.submit()}></uui-button>
			</div>
		`;
};
d.styles = [he];
O([
  R()
], d.prototype, "_members", 2);
O([
  R()
], d.prototype, "_searchQuery", 2);
O([
  R()
], d.prototype, "_selectableFilter", 2);
d = O([
  $("umb-member-picker-modal")
], d);
const Le = d, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMemberPickerModalElement() {
    return d;
  },
  default: Le
}, Symbol.toStringTag, { value: "Module" })), $e = "Umb.Repository.Member.Validation", Mt = [
  {
    type: "repository",
    alias: $e,
    name: "Member Validation Repository",
    api: () => import("./member-validation.repository-ComF7lAM.js")
  }
];
export {
  mt as A,
  _t as B,
  $e as C,
  at as D,
  lt as E,
  Mt as F,
  bt as G,
  dt as H,
  A as U,
  Pe as a,
  _e as b,
  Ue as c,
  l as d,
  d as e,
  I as f,
  tt as g,
  st as h,
  rt as i,
  it as j,
  D as k,
  Me as l,
  ot as m,
  N as n,
  fe as o,
  ye as p,
  nt as q,
  ve as r,
  Te as s,
  Ce as t,
  x as u,
  et as v,
  ct as w,
  ut as x,
  pt as y,
  ht as z
};
//# sourceMappingURL=manifests-KIVuOqdB.js.map

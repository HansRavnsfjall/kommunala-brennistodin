import { a as O, U as f } from "./member-type-tree.store.context-token-DyBHp9CK.js";
import { UmbModalToken as C } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as Y } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_PATH_PATTERN as u } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as b } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as h } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as l } from "@umbraco-cms/backoffice/context-api";
import { UmbPickerInputContext as g } from "@umbraco-cms/backoffice/picker-input";
import { html as m, repeat as v, when as L, css as x, property as E, state as N, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as D } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as $ } from "@umbraco-cms/backoffice/validation";
const k = new C(Y, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.MemberType"
  }
}), ae = "Umb.Repository.MemberType.Duplicate", _e = "Umb.Workspace.MemberType.Root", me = "Umb.MenuItem.MemberTypes", y = u.generateAbsolute({
  sectionName: b,
  entityType: O
}), Ee = u.generateAbsolute({
  sectionName: b,
  entityType: f
}), Te = new h("create/parent/:parentEntityType/:parentUnique", y), pe = new h(
  "edit/:unique",
  y
), Me = "member-type-property-type", H = "Umb.Repository.MemberType.Detail", K = "Umb.Store.MemberType.Detail", ce = [
  {
    type: "repository",
    alias: H,
    name: "Member Type Detail Repository",
    api: () => import("./member-type-detail.repository-DEVxrZAd.js").then((e) => e.m)
  },
  {
    type: "store",
    alias: K,
    name: "Member Type Detail Store",
    api: () => import("./member-type-detail.store-2PZQxuX7.js")
  }
], le = new l(
  "UmbMemberTypeDetailStore"
), P = "Umb.Repository.MemberTypeItem", q = "Umb.Store.MemberTypeItem", Re = [
  {
    type: "repository",
    alias: P,
    name: "Member Type Item Repository",
    api: () => import("./member-type-item.repository-CcYM24i8.js")
  },
  {
    type: "itemStore",
    alias: q,
    name: "Member Type Item Store",
    api: () => import("./member-type-item.store-xlZBt6Eg.js")
  }
], ue = new l("UmbMemberTypeItemStore"), z = "Umb.Repository.MemberType.Composition", be = [
  {
    type: "repository",
    alias: z,
    name: "Member Type Composition Repository",
    api: () => import("./member-type-composition.repository-CE6DaAXv.js")
  }
], he = "Umb.GlobalSearch.MemberType", ye = "Umb.SearchProvider.MemberType", Pe = "Umb.Repository.MemberType.TreeItemChildrenCollection", Ae = "Umb.Collection.MemberType.TreeItemChildren", Ue = "Umb.Repository.MemberType.Tree", Ie = "Umb.Store.MemberType.Tree", Se = "Umb.Tree.MemberType", Be = new l(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "member-type"
), de = "Umb.Workspace.MemberType";
class G extends g {
  constructor(t) {
    super(t, P, k);
  }
}
var V = Object.defineProperty, X = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, a = (e, t, s, T) => {
  for (var n = T > 1 ? void 0 : T ? X(t, s) : t, M = e.length - 1, c; M >= 0; M--)
    (c = e[M]) && (n = (T ? c(t, s, n) : c(n)) || n);
  return T && n && V(t, s, n), n;
}, U = (e, t, s) => t.has(e) || A("Cannot " + s), o = (e, t, s) => (U(e, t, "read from private field"), s ? s.call(e) : t.get(e)), R = (e, t, s) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), p = (e, t, s) => (U(e, t, "access private method"), s), r, _, I, S, B, d;
let i = class extends $(
  W
) {
  constructor() {
    super(), R(this, _), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", R(this, r, new G(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && o(this, r).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && o(this, r).getSelection().length > this.max
    ), this.observe(o(this, r).selection, (e) => this.value = e.join(",")), this.observe(o(this, r).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    o(this, r).min = e;
  }
  get min() {
    return o(this, r).min;
  }
  set max(e) {
    o(this, r).max = e;
  }
  get max() {
    return o(this, r).max;
  }
  set selection(e) {
    o(this, r).setSelection(e);
  }
  get selection() {
    return o(this, r).getSelection();
  }
  set value(e) {
    this.selection = D(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return m` ${p(this, _, S).call(this)} ${p(this, _, B).call(this)} `;
  }
};
r = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
I = function() {
  o(this, r).openPicker({
    hideTreeRoot: !0
  });
};
S = function() {
  if (this._items)
    return m`
			<uui-ref-list>
				${v(
      this._items,
      (e) => e.unique,
      (e) => p(this, _, d).call(this, e)
    )}
			</uui-ref-list>
		`;
};
B = function() {
  if (!(this.max === 1 && this.selection.length >= this.max))
    return m`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${p(this, _, I)}
				label="${this.localize.term("general_choose")}"
				>${this.localize.term("general_choose")}</uui-button
			>
		`;
};
d = function(e) {
  if (e.unique)
    return m`
			<uui-ref-node-document-type name=${this.localize.string(e.name)}>
				${L(e.icon, () => m`<umb-icon slot="icon" name=${e.icon}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => o(this, r).requestRemoveItem(e.unique)}
						label="Remove Member Type ${e.name}"
						>${this.localize.term("general_remove")}</uui-button
					>
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
i.styles = [
  x`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  E({ type: Number })
], i.prototype, "min", 1);
a([
  E({ type: String, attribute: "min-message" })
], i.prototype, "minMessage", 2);
a([
  E({ type: Number })
], i.prototype, "max", 1);
a([
  E({ type: String, attribute: "min-message" })
], i.prototype, "maxMessage", 2);
a([
  E({ type: String })
], i.prototype, "value", 1);
a([
  N()
], i.prototype, "_items", 2);
i = a([
  w("umb-input-member-type")
], i);
export {
  ce as A,
  Re as B,
  be as C,
  G as U,
  i as a,
  ae as b,
  _e as c,
  me as d,
  y as e,
  Ee as f,
  Te as g,
  pe as h,
  Me as i,
  H as j,
  K as k,
  le as l,
  P as m,
  q as n,
  ue as o,
  z as p,
  ye as q,
  he as r,
  Ue as s,
  Ie as t,
  Se as u,
  Ae as v,
  Pe as w,
  de as x,
  Be as y,
  k as z
};
//# sourceMappingURL=input-member-type.element-HvnUGYvy.js.map

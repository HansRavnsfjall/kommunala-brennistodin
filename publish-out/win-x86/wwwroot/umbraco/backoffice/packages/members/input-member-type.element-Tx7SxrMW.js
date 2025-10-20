import { a as f, U as O } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import { UmbModalToken as Y } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as g } from "@umbraco-cms/backoffice/tree";
import { UMB_WORKSPACE_PATH_PATTERN as h } from "@umbraco-cms/backoffice/workspace";
import { UMB_SETTINGS_SECTION_PATHNAME as R } from "@umbraco-cms/backoffice/settings";
import { UmbPathPattern as y } from "@umbraco-cms/backoffice/router";
import { UmbContextToken as l } from "@umbraco-cms/backoffice/context-api";
import { UmbPickerInputContext as v } from "@umbraco-cms/backoffice/picker-input";
import { html as _, repeat as C, when as x, css as L, property as E, state as w, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as D } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as k } from "@umbraco-cms/backoffice/validation";
const W = new Y(g, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.MemberType"
  }
}), ae = "Umb.Repository.MemberType.Duplicate", b = h.generateAbsolute({
  sectionName: R,
  entityType: f
}), me = h.generateAbsolute({
  sectionName: R,
  entityType: O
}), _e = new y("create/parent/:parentEntityType/:parentUnique", b), Ee = new y(
  "edit/:unique",
  b
), pe = "member-type-property-type", K = "Umb.Repository.MemberType.Detail", H = "Umb.Store.MemberType.Detail", Te = [
  {
    type: "repository",
    alias: K,
    name: "Member Type Detail Repository",
    api: () => import("./member-type-detail.repository-DU94HV86.js")
  },
  {
    type: "store",
    alias: H,
    name: "Member Type Detail Store",
    api: () => import("./member-type-detail.store-uXrDRqte.js")
  }
], Me = new l(
  "UmbMemberTypeDetailStore"
), P = "Umb.Repository.MemberTypeItem", q = "Umb.Store.MemberTypeItem", ce = [
  {
    type: "repository",
    alias: P,
    name: "Member Type Item Repository",
    api: () => import("./member-type-item.repository-DAKqa0yX.js")
  },
  {
    type: "itemStore",
    alias: q,
    name: "Member Type Item Store",
    api: () => import("./member-type-item.store-_zpSRASg.js")
  }
], le = new l("UmbMemberTypeItemStore"), z = "Umb.Repository.MemberType.Composition", ue = [
  {
    type: "repository",
    alias: z,
    name: "Member Type Composition Repository",
    api: () => import("./member-type-composition.repository-CE6DaAXv.js")
  }
], he = "Umb.GlobalSearch.MemberType", Re = "Umb.SearchProvider.MemberType", ye = "Umb.Repository.MemberType.Tree", be = "Umb.Store.MemberType.Tree", Pe = "Umb.Tree.MemberType", Ae = new l(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "member-type"
), Se = "Umb.Workspace.MemberType";
class G extends v {
  constructor(t) {
    super(t, P, W);
  }
}
var V = Object.defineProperty, X = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, a = (e, t, s, p) => {
  for (var n = p > 1 ? void 0 : p ? X(t, s) : t, M = e.length - 1, c; M >= 0; M--)
    (c = e[M]) && (n = (p ? c(t, s, n) : c(n)) || n);
  return p && n && V(t, s, n), n;
}, S = (e, t, s) => t.has(e) || A("Cannot " + s), i = (e, t, s) => (S(e, t, "read from private field"), s ? s.call(e) : t.get(e)), u = (e, t, s) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), T = (e, t, s) => (S(e, t, "access private method"), s), r, m, U, d, B, I;
let o = class extends k(
  $
) {
  constructor() {
    super(), u(this, m), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", u(this, r, new G(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && i(this, r).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && i(this, r).getSelection().length > this.max
    ), this.observe(i(this, r).selection, (e) => this.value = e.join(",")), this.observe(i(this, r).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    i(this, r).min = e;
  }
  get min() {
    return i(this, r).min;
  }
  set max(e) {
    i(this, r).max = e;
  }
  get max() {
    return i(this, r).max;
  }
  set selection(e) {
    i(this, r).setSelection(e);
  }
  get selection() {
    return i(this, r).getSelection();
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
    return _` ${T(this, m, d).call(this)} ${T(this, m, B).call(this)} `;
  }
};
r = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
U = function() {
  i(this, r).openPicker({
    hideTreeRoot: !0
  });
};
d = function() {
  if (this._items)
    return _`
			<uui-ref-list>
				${C(
      this._items,
      (e) => e.unique,
      (e) => T(this, m, I).call(this, e)
    )}
			</uui-ref-list>
		`;
};
B = function() {
  if (!(this.max === 1 && this.selection.length >= this.max))
    return _`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${T(this, m, U)}
				label="${this.localize.term("general_choose")}"
				>${this.localize.term("general_choose")}</uui-button
			>
		`;
};
I = function(e) {
  if (e.unique)
    return _`
			<uui-ref-node-document-type name=${this.localize.string(e.name)}>
				${x(e.icon, () => _`<umb-icon slot="icon" name=${e.icon}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => i(this, r).requestRemoveItem(e.unique)}
						label="Remove Member Type ${e.name}"
						>${this.localize.term("general_remove")}</uui-button
					>
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
o.styles = [
  L`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  E({ type: Number })
], o.prototype, "min", 1);
a([
  E({ type: String, attribute: "min-message" })
], o.prototype, "minMessage", 2);
a([
  E({ type: Number })
], o.prototype, "max", 1);
a([
  E({ type: String, attribute: "min-message" })
], o.prototype, "maxMessage", 2);
a([
  E({ type: String })
], o.prototype, "value", 1);
a([
  w()
], o.prototype, "_items", 2);
o = a([
  N("umb-input-member-type")
], o);
export {
  G as U,
  o as a,
  ae as b,
  b as c,
  me as d,
  _e as e,
  Ee as f,
  pe as g,
  K as h,
  H as i,
  Me as j,
  P as k,
  q as l,
  le as m,
  z as n,
  Re as o,
  he as p,
  ye as q,
  be as r,
  Pe as s,
  Se as t,
  Ae as u,
  W as v,
  Te as w,
  ce as x,
  ue as y
};
//# sourceMappingURL=input-member-type.element-Tx7SxrMW.js.map

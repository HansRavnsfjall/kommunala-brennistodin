import { UmbContextToken as P } from "@umbraco-cms/backoffice/context-api";
import { U as A } from "./paths-CFBlLJ5A.js";
import { UMB_WORKSPACE_PATH_PATTERN as B, UMB_WORKSPACE_MODAL as X } from "@umbraco-cms/backoffice/workspace";
import { UmbModalToken as F, UmbModalBaseElement as J } from "@umbraco-cms/backoffice/modal";
import { UmbPickerInputContext as Q } from "@umbraco-cms/backoffice/picker-input";
import { html as d, repeat as I, nothing as R, css as Z, property as h, state as S, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as ee, UmbSelectionManager as te } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as re } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as oe } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as ie } from "@umbraco-cms/backoffice/sorter";
import { UmbModalRouteRegistrationController as se } from "@umbraco-cms/backoffice/router";
import { UmbFormControlMixin as ne } from "@umbraco-cms/backoffice/validation";
import { tryExecute as ae } from "@umbraco-cms/backoffice/resources";
import { MemberGroupService as le } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbRepositoryBase as ue } from "@umbraco-cms/backoffice/repository";
const ke = "Umb.Repository.MemberGroup.Collection", Le = "Umb.CollectionView.MemberGroup.Table", We = "Umb.Collection.MemberGroup", Ne = new P(
  "UmbMemberGroupDetailStore"
), qe = "Umb.Repository.MemberGroup.Detail", De = "Umb.Store.MemberGroup.Detail", ze = new P(
  "UmbMemberGroupItemStore"
), me = "Umb.Repository.MemberGroupItem", Ke = "Umb.Store.MemberGroupItem", Ye = new P(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === "member-group"
), je = "Umb.Workspace.MemberGroup", He = "Umb.Workspace.MemberGroupRoot", ce = "member-group-root", $ = "member-group", Ve = B.generateAbsolute({
  sectionName: A,
  entityType: $
}), Xe = B.generateAbsolute({
  sectionName: A,
  entityType: ce
}), pe = new F("Umb.Modal.MemberGroupPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
class _e extends Q {
  constructor(t) {
    super(t, me, pe);
  }
}
var he = Object.defineProperty, de = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, l = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? de(t, r) : t, u = e.length - 1, p; u >= 0; u--)
    (p = e[u]) && (o = (n ? p(t, r, o) : p(o)) || o);
  return n && o && he(t, r, o), o;
}, G = (e, t, r) => t.has(e) || x("Cannot " + r), i = (e, t, r) => (G(e, t, "read from private field"), r ? r.call(e) : t.get(e)), y = (e, t, r) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), be = (e, t, r, n) => (G(e, t, "write to private field"), t.set(e, r), r), b = (e, t, r) => (G(e, t, "access private method"), r), M, f, s, _, k, L, W, N, q, D;
let a = class extends ne(
  oe
) {
  constructor() {
    super(), y(this, _), y(this, M, new ie(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputMemberGroup",
      itemSelector: "uui-ref-node",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new re());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.filter = () => !0, y(this, f, !1), this._editMemberGroupPath = "", y(this, s, new _e(this)), new se(this, X).addAdditionalPath("member-group").onSetup(() => ({ data: { entityType: "member-group", preset: {} } })).observeRouteBuilder((e) => {
      this._editMemberGroupPath = e({});
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && i(this, s).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && i(this, s).getSelection().length > this.max
    ), this.observe(i(this, s).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(i(this, s).selectedItems, (e) => this._items = e, "_observeItems");
  }
  set min(e) {
    i(this, s).min = e;
  }
  get min() {
    return i(this, s).min;
  }
  set max(e) {
    i(this, s).max = e;
  }
  get max() {
    return i(this, s).max;
  }
  set selection(e) {
    i(this, s).setSelection(e), i(this, M).setModel(e);
  }
  get selection() {
    return i(this, s).getSelection();
  }
  set value(e) {
    this.selection = ee(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return i(this, f);
  }
  set readonly(e) {
    be(this, f, e), i(this, f) ? i(this, M).disable() : i(this, M).enable();
  }
  getFormElement() {
  }
  render() {
    return d`${b(this, _, W).call(this)} ${b(this, _, N).call(this)}`;
  }
};
M = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
k = function() {
  i(this, s).openPicker({
    filter: this.filter
  });
};
L = function(e) {
  i(this, s).requestRemoveItem(e.unique);
};
W = function() {
  if (this._items)
    return d`
			<uui-ref-list>
				${I(
      this._items,
      (e) => e.unique,
      (e) => b(this, _, q).call(this, e)
    )}
			</uui-ref-list>
		`;
};
N = function() {
  return this.max === 1 && this.selection.length >= this.max ? R : this.readonly && this.selection.length > 0 ? R : d`<uui-button
				id="btn-add"
				look="placeholder"
				@click=${b(this, _, k)}
				label=${this.localize.term("general_choose")}
				?disabled=${this.readonly}></uui-button>`;
};
q = function(e) {
  return e.unique ? d`
			<uui-ref-node
				name=${e.name}
				id=${e.unique}
				href="${this._editMemberGroupPath}edit/${e.unique}"
				?readonly=${this.readonly}>
				<uui-action-bar slot="actions"> ${b(this, _, D).call(this, e)} </uui-action-bar>
				<umb-icon slot="icon" name="icon-users"></umb-icon>
			</uui-ref-node>
		` : R;
};
D = function(e) {
  return this.readonly ? R : d`<uui-button
			@click=${() => b(this, _, L).call(this, e)}
			label=${this.localize.term("general_remove")}></uui-button>`;
};
a.styles = [
  Z`
			#btn-add {
				width: 100%;
			}

			uui-ref-node[drag-placeholder] {
				opacity: 0.2;
			}
		`
];
l([
  h({ type: Number })
], a.prototype, "min", 1);
l([
  h({ type: String, attribute: "min-message" })
], a.prototype, "minMessage", 2);
l([
  h({ type: Number })
], a.prototype, "max", 1);
l([
  h({ type: String, attribute: "min-message" })
], a.prototype, "maxMessage", 2);
l([
  h({ type: Array })
], a.prototype, "allowedContentTypeIds", 2);
l([
  h({ type: String })
], a.prototype, "value", 1);
l([
  h({ type: Object, attribute: !1 })
], a.prototype, "filter", 2);
l([
  h({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 1);
l([
  S()
], a.prototype, "_editMemberGroupPath", 2);
l([
  S()
], a.prototype, "_items", 2);
a = l([
  w("umb-input-member-group")
], a);
class Me {
  #e;
  /**
   * Creates an instance of UmbMemberGroupCollectionServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMemberGroupCollectionServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Gets the member collection filtered by the given filter.
   * @param {UmbMemberGroupCollectionFilterModel} filter
   * @returns {*}
   * @memberof UmbMemberGroupCollectionServerDataSource
   */
  async getCollection(t) {
    const { data: r, error: n } = await ae(this.#e, le.getMemberGroup({ query: t }));
    if (n)
      return { error: n };
    if (!r)
      return { data: { items: [], total: 0 } };
    const { items: o, total: u } = r;
    return { data: { items: o.map((T) => ({
      entityType: $,
      unique: T.id,
      name: T.name
    })), total: u } };
  }
}
class v extends ue {
  #e;
  constructor(t) {
    super(t), this.#e = new Me(t);
  }
  async requestCollection(t) {
    return this.#e.getCollection(t);
  }
}
const Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMemberGroupCollectionRepository: v,
  default: v
}, Symbol.toStringTag, { value: "Module" }));
var fe = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, z = (e) => {
  throw TypeError(e);
}, K = (e, t, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ee(t, r) : t, u = e.length - 1, p; u >= 0; u--)
    (p = e[u]) && (o = (n ? p(t, r, o) : p(o)) || o);
  return n && o && fe(t, r, o), o;
}, Y = (e, t, r) => t.has(e) || z("Cannot " + r), m = (e, t, r) => (Y(e, t, "read from private field"), r ? r.call(e) : t.get(e)), O = (e, t, r) => t.has(e) ? z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r) => (Y(e, t, "access private method"), r), g, c, E, j, H, V;
let U = class extends J {
  constructor() {
    super(...arguments), O(this, E), this._memberGroups = [], O(this, g, new v(this)), O(this, c, new te(this));
  }
  connectedCallback() {
    super.connectedCallback(), m(this, c).setSelectable(!0), m(this, c).setMultiple(this.data?.multiple ?? !1), m(this, c).setSelection(this.value?.selection ?? []);
  }
  async firstUpdated() {
    const { data: e } = await m(this, g).requestCollection({});
    this._memberGroups = e?.items ?? [];
  }
  render() {
    return d`<umb-body-layout headline=${this.localize.term("defaultdialogs_chooseMemberGroup")}>
			<uui-box>
				${I(
      m(this, E, j),
      (e) => e.unique,
      (e) => d`
						<uui-menu-item
							label=${e.name ?? ""}
							selectable
							@selected=${() => m(this, c).select(e.unique)}
							@deselected=${() => m(this, c).deselect(e.unique)}
							?selected=${m(this, c).isSelected(e.unique)}>
							<uui-icon slot="icon" name="icon-users"></uui-icon>
						</uui-menu-item>
					`
    )}
			</uui-box>
			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${C(this, E, V)}></uui-button>
				<uui-button
					label=${this.localize.term("general_choose")}
					look="primary"
					color="positive"
					@click=${C(this, E, H)}></uui-button>
			</div>
		</umb-body-layout> `;
  }
};
g = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakSet();
j = function() {
  return this.data?.filter ? this._memberGroups.filter(this.data.filter) : this._memberGroups;
};
H = function() {
  this.value = { selection: m(this, c).getSelection() }, this.modalContext?.submit();
};
V = function() {
  this.modalContext?.reject();
};
K([
  S()
], U.prototype, "_memberGroups", 2);
U = K([
  w("umb-member-group-picker-modal")
], U);
const Ue = U, Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMemberGroupPickerModalElement() {
    return U;
  },
  default: Ue
}, Symbol.toStringTag, { value: "Module" }));
export {
  pe as U,
  ce as a,
  $ as b,
  We as c,
  ke as d,
  Le as e,
  qe as f,
  De as g,
  Ne as h,
  me as i,
  Ke as j,
  ze as k,
  je as l,
  Ye as m,
  He as n,
  Ve as o,
  Xe as p,
  v as q,
  _e as r,
  a as s,
  U as t,
  Fe as u,
  Je as v
};
//# sourceMappingURL=member-group-picker-modal.element-I2C8EUhz.js.map

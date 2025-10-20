import { UmbUserGroupCollectionRepository as C } from "./user-group-collection.repository-C6YjWsl5.js";
import { repeat as S, when as E, html as p, css as M, state as b, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { debounce as P, UmbSelectionManager as R } from "@umbraco-cms/backoffice/utils";
import { umbFocus as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbSelectedEvent as z, UmbDeselectedEvent as A } from "@umbraco-cms/backoffice/event";
import { UmbModalBaseElement as O } from "@umbraco-cms/backoffice/modal";
import "./constants-jrjjZjNa.js";
var I = Object.defineProperty, W = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, m = (e, t, i, c) => {
  for (var r = c > 1 ? void 0 : c ? W(t, i) : t, d = e.length - 1, h; d >= 0; d--)
    (h = e[d]) && (r = (c ? h(t, i, r) : h(r)) || r);
  return c && r && I(t, i, r), r;
}, $ = (e, t, i) => t.has(e) || v("Cannot " + i), o = (e, t, i) => ($(e, t, "read from private field"), i ? i.call(e) : t.get(e)), u = (e, t, i) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), n = (e, t, i) => ($(e, t, "access private method"), i), f, s, _, a, w, U, q, y, g;
let l = class extends O {
  constructor() {
    super(), u(this, a), this._filteredItems = [], this._userGroups = [], u(this, f, P((e) => {
      this._filteredItems = e ? this._userGroups.filter(
        (t) => t.alias.toLowerCase().includes(e) || t.name.toLowerCase().includes(e)
      ) : this._userGroups;
    }, 500)), u(this, s, new R(this)), u(this, _, new C(this)), n(this, a, w).call(this);
  }
  connectedCallback() {
    super.connectedCallback(), o(this, s).setSelectable(!0), o(this, s).setMultiple(this.data?.multiple ?? !1), o(this, s).setSelection(this.value?.selection ?? []), this.observe(o(this, s).selection, (e) => this.updateValue({ selection: e }), "selectionObserver");
  }
  render() {
    return p`
			<umb-body-layout headline=${this.localize.term("user_chooseUserGroup", !0)}>
				<uui-box>
					<uui-input
						type="search"
						id="filter"
						label=${this.localize.term("placeholders_filter")}
						placeholder=${this.localize.term("placeholders_filter")}
						@input=${n(this, a, y)}
						${x()}>
						<uui-icon name="search" slot="prepend" id="filter-icon"></uui-icon>
					</uui-input>
					${S(
      this._filteredItems,
      (e) => e.alias,
      (e) => p`
							<umb-user-group-ref
								.name=${e.name}
								select-only
								selectable
								?selected=${o(this, s).isSelected(e.unique)}
								?documentRootAccess=${e.documentRootAccess}
								.documentStartNode=${e.documentRootAccess ? null : e.documentStartNode?.unique}
								?mediaRootAccess=${e.mediaRootAccess}
								.mediaStartNode=${e.mediaRootAccess ? null : e.mediaStartNode?.unique}
								.sections=${e.sections}
								@selected=${(t) => n(this, a, U).call(this, t, e)}
								@deselected=${(t) => n(this, a, q).call(this, t, e)}>
								${E(e.icon, () => p`<umb-icon name=${e.icon} slot="icon"></umb-icon>`)}
							</umb-user-group-ref>
						`
    )}
				</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_cancel")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("buttons_choose")}
						look="primary"
						color="positive"
						@click=${n(this, a, g)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
w = async function() {
  const { error: e, asObservable: t } = await o(this, _).requestCollection();
  e || this.observe(t(), (i) => this._userGroups = this._filteredItems = i, "umbUserGroupsObserver");
};
U = function(e, t) {
  if (!t.unique) throw new Error("User group unique is required");
  e.stopPropagation(), o(this, s).select(t.unique), this.requestUpdate(), this.modalContext?.dispatchEvent(new z(t.unique));
};
q = function(e, t) {
  if (!t.unique) throw new Error("User group unique is required");
  e.stopPropagation(), o(this, s).deselect(t.unique), this.requestUpdate(), this.modalContext?.dispatchEvent(new A(t.unique));
};
y = function(e) {
  const t = e.target.value || "";
  o(this, f).call(this, t.toLowerCase());
};
g = function() {
  this.updateValue({ selection: o(this, s).getSelection() }), this._submitModal();
};
l.styles = [
  M`
			#filter {
				width: 100%;
				margin-bottom: var(--uui-size-space-4);
			}

			#filter-icon {
				display: flex;
				color: var(--uui-color-border);
				height: 100%;
				padding-left: var(--uui-size-space-2);
			}
		`
];
m([
  b()
], l.prototype, "_filteredItems", 2);
m([
  b()
], l.prototype, "_userGroups", 2);
l = m([
  k("umb-user-group-picker-modal")
], l);
const T = l;
export {
  l as UmbUserGroupPickerModalElement,
  T as default
};
//# sourceMappingURL=user-group-picker-modal.element-CKUTZdo8.js.map

import { UmbPickerContext as M } from "@umbraco-cms/backoffice/picker";
import { html as h, nothing as _, ifDefined as T, state as u, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as U } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_MODAL as O } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as q } from "@umbraco-cms/backoffice/router";
import { UmbSelectedEvent as w, UmbDeselectedEvent as A } from "@umbraco-cms/backoffice/event";
class R extends M {
  constructor(t) {
    super(t);
  }
}
var D = Object.defineProperty, W = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, c = (e, t, i, d) => {
  for (var l = d > 1 ? void 0 : d ? W(t, i) : t, p = e.length - 1, f; p >= 0; p--)
    (f = e[p]) && (l = (d ? f(t, i, l) : f(l)) || l);
  return d && l && D(t, i, l), l;
}, v = (e, t, i) => t.has(e) || b("Cannot " + i), r = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), o = (e, t, i) => (v(e, t, "access private method"), i), a, s, P, k, C, y, S, $, g, x;
let n = class extends U {
  constructor() {
    super(), m(this, s), this._selectionConfiguration = {
      multiple: !1,
      selectable: !0,
      selection: []
    }, this._hasSelection = !1, m(this, a, new R(this)), r(this, a).selection.setSelectable(!0), this.observe(r(this, a).selection.hasSelection, (e) => {
      this._hasSelection = e;
    }), o(this, s, P).call(this), o(this, s, k).call(this);
  }
  connectedCallback() {
    super.connectedCallback(), o(this, s, S).call(this);
  }
  async updated(e) {
    if (super.updated(e), e.has("data")) {
      this.data?.search && r(this, a).search.updateConfig({
        ...this.data.search,
        searchFrom: this.data.startNode
      });
      const t = this.data?.multiple ?? !1;
      r(this, a).selection.setMultiple(t), this._selectionConfiguration = {
        ...this._selectionConfiguration,
        multiple: t
      };
    }
    if (e.has("value")) {
      const t = this.value?.selection ?? [];
      r(this, a).selection.setSelection(t), this._selectionConfiguration = {
        ...this._selectionConfiguration,
        selection: [...t]
      };
    }
  }
  render() {
    return h`
			<umb-body-layout headline=${this.localize.term("general_choose")}>
				<uui-box> ${o(this, s, $).call(this)} ${o(this, s, g).call(this)}</uui-box>
				${o(this, s, x).call(this)}
			</umb-body-layout>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
P = function() {
  this.observe(
    r(this, a).selection.selection,
    (e) => {
      this.updateValue({ selection: e }), this.requestUpdate();
    },
    "umbPickerSelectionObserver"
  );
};
k = function() {
  this.observe(
    r(this, a).search.query,
    (e) => {
      this._searchQuery = e?.query;
    },
    "umbPickerSearchQueryObserver"
  );
};
C = function(e) {
  e.stopPropagation(), r(this, a).selection.select(e.unique), this.modalContext?.dispatchEvent(new w(e.unique));
};
y = function(e) {
  e.stopPropagation(), r(this, a).selection.deselect(e.unique), this.modalContext?.dispatchEvent(new A(e.unique));
};
S = function() {
  const e = this.data?.createAction;
  e && (this._createLabel = e.label, new q(
    this,
    e.modalToken ?? O
  ).onSetup(() => ({ data: e.modalData })).onSubmit((t) => {
    t ? (this.value = { selection: [t.unique] }, this._submitModal()) : this._rejectModal();
  }).observeRouteBuilder((t) => {
    const i = this._createPath;
    this._createPath = t({}) + e.extendWithPathPattern.generateLocal(e.extendWithPathParams), this.requestUpdate("_createPath", i);
  }));
};
$ = function() {
  return h`
			<umb-picker-search-field></umb-picker-search-field>
			<umb-picker-search-result .pickableFilter=${this.data?.pickableFilter}></umb-picker-search-result>
		`;
};
g = function() {
  return this._searchQuery ? _ : h`
			<umb-tree
				alias=${T(this.data?.treeAlias)}
				.props=${{
    hideTreeItemActions: !0,
    hideTreeRoot: this.data?.hideTreeRoot,
    expandTreeRoot: this.data?.expandTreeRoot,
    selectionConfiguration: this._selectionConfiguration,
    filter: this.data?.filter,
    selectableFilter: this.data?.pickableFilter,
    startNode: this.data?.startNode,
    foldersOnly: this.data?.foldersOnly
  }}
				@selected=${o(this, s, C)}
				@deselected=${o(this, s, y)}></umb-tree>
		`;
};
x = function() {
  return h`
			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
				${this._createPath ? h` <uui-button
							label=${this.localize.string(this._createLabel ?? "#general_create")}
							look="secondary"
							href=${this._createPath}></uui-button>` : _}
				<uui-button
					label=${this.localize.term("general_choose")}
					look="primary"
					color="positive"
					@click=${this._submitModal}
					?disabled=${!this._hasSelection}></uui-button>
			</div>
		`;
};
c([
  u()
], n.prototype, "_selectionConfiguration", 2);
c([
  u()
], n.prototype, "_hasSelection", 2);
c([
  u()
], n.prototype, "_createPath", 2);
c([
  u()
], n.prototype, "_createLabel", 2);
c([
  u()
], n.prototype, "_searchQuery", 2);
n = c([
  E("umb-tree-picker-modal")
], n);
const N = n;
export {
  n as UmbTreePickerModalElement,
  N as default
};
//# sourceMappingURL=tree-picker-modal.element-C9k43EY_.js.map

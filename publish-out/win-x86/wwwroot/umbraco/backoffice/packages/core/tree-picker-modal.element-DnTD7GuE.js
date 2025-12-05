import { UmbControllerBase as M } from "@umbraco-cms/backoffice/class-api";
import { UmbEntityExpansionManager as P } from "@umbraco-cms/backoffice/utils";
import { UmbPickerContext as T, UmbPickerModalBaseElement as S } from "@umbraco-cms/backoffice/picker";
import { html as l, nothing as m, ifDefined as $, state as c, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbSelectedEvent as q, UmbDeselectedEvent as O } from "@umbraco-cms/backoffice/event";
import { UmbModalRouteRegistrationController as w } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as I } from "@umbraco-cms/backoffice/workspace";
class A extends M {
  constructor(t, i) {
    super(t), this.#t = new P(this), this.expansion = this.#t.expansion, this.#i = "UmbTreeItemPickerExpansion", this.#s = !1, this.#e = i?.interactionMemoryManager, this.#e && this.#n();
  }
  #t;
  #e;
  #i;
  #s;
  /**
   * Sets the full expansion state
   * @param {UmbEntityExpansionModel} expansion - The full expansion state to set
   * @memberof UmbTreeItemPickerExpansionManager
   */
  setExpansion(t) {
    this.#t.setExpansion(t), t.length > 0 ? this.#o() : this.#r();
  }
  /**
   * Gets the current expansion state
   * @returns {UmbEntityExpansionModel} The full expansion state
   * @memberof UmbTreeItemPickerExpansionManager
   */
  getExpansion() {
    return this.#t.getExpansion();
  }
  #n() {
    this.observe(this.#e?.memory(this.#i), (t) => {
      this.#s || t && this.#a(t);
    });
  }
  #o() {
    if (!this.#e) return;
    const t = {
      unique: this.#i,
      value: {
        expansion: this.getExpansion()
      }
    };
    this.#s = !0, this.#e?.setMemory(t), this.#s = !1;
  }
  #r() {
    this.#e && this.#e.deleteMemory(this.#i);
  }
  #a(t) {
    const i = t?.value?.expansion;
    i && this.#t.setExpansion(i);
  }
}
class R extends T {
  constructor() {
    super(...arguments), this.expansion = new A(this, {
      interactionMemoryManager: this.interactionMemory
    });
  }
}
var D = Object.defineProperty, F = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, a = (e, t, i, h) => {
  for (var r = h > 1 ? void 0 : h ? F(t, i) : t, u = e.length - 1, p; u >= 0; u--)
    (p = e[u]) && (r = (h ? p(t, i, r) : p(r)) || r);
  return h && r && D(t, i, r), r;
}, L = (e, t, i) => t.has(e) || d("Cannot " + i), W = (e, t, i) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), n = (e, t, i) => (L(e, t, "access private method"), i), s, _, f, b, x, y, k, v, C, E, g;
let o = class extends S {
  constructor() {
    super(), W(this, s), this._selectionConfiguration = {
      multiple: !1,
      selectable: !0,
      selection: []
    }, this._hasSelection = !1, this._treeExpansion = [], this._pickerContext = new R(this), this._pickerContext.selection.setSelectable(!0), this.observe(this._pickerContext.selection.hasSelection, (e) => {
      this._hasSelection = e;
    }), n(this, s, _).call(this), n(this, s, f).call(this), n(this, s, b).call(this);
  }
  connectedCallback() {
    super.connectedCallback(), n(this, s, k).call(this);
  }
  async updated(e) {
    if (super.updated(e), e.has("data")) {
      this.data?.search && this._pickerContext.search.updateConfig({
        ...this.data.search,
        searchFrom: this.data.startNode,
        dataTypeUnique: this._pickerContext.dataType?.unique
      });
      const t = this.data?.multiple ?? !1;
      this._pickerContext.selection.setMultiple(t), this._selectionConfiguration = {
        ...this._selectionConfiguration,
        multiple: t
      };
    }
    if (e.has("value")) {
      const t = this.value?.selection ?? [];
      this._pickerContext.selection.setSelection(t), this._selectionConfiguration = {
        ...this._selectionConfiguration,
        selection: [...t]
      };
    }
  }
  render() {
    return l`
			<umb-body-layout headline=${this.localize.term("general_choose")}>
				<uui-box> ${n(this, s, C).call(this)} ${n(this, s, E).call(this)}</uui-box>
				${n(this, s, g).call(this)}
			</umb-body-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
_ = function() {
  this.observe(
    this._pickerContext.selection.selection,
    (e) => {
      this.updateValue({ selection: e }), this.requestUpdate();
    },
    "umbPickerSelectionObserver"
  );
};
f = function() {
  this.observe(
    this._pickerContext.search.query,
    (e) => {
      this._searchQuery = e?.query;
    },
    "umbPickerSearchQueryObserver"
  );
};
b = function() {
  this.observe(
    this._pickerContext.expansion.expansion,
    (e) => {
      this._treeExpansion = e;
    },
    "umbTreeItemPickerExpansionObserver"
  );
};
x = function(e) {
  e.stopPropagation(), this._pickerContext.selection.select(e.unique), this.modalContext?.dispatchEvent(new q(e.unique));
};
y = function(e) {
  e.stopPropagation(), this._pickerContext.selection.deselect(e.unique), this.modalContext?.dispatchEvent(new O(e.unique));
};
k = function() {
  const e = this.data?.createAction;
  e && (this._createLabel = e.label, new w(
    this,
    e.modalToken ?? I
  ).onSetup(() => ({ data: e.modalData })).onSubmit((t) => {
    t ? (this.value = { selection: [t.unique] }, this._submitModal()) : this._rejectModal();
  }).observeRouteBuilder((t) => {
    const i = this._createPath;
    this._createPath = t({}) + e.extendWithPathPattern.generateLocal(e.extendWithPathParams), this.requestUpdate("_createPath", i);
  }));
};
v = function(e) {
  const i = e.target.getExpansion();
  this._pickerContext.expansion.setExpansion(i);
};
C = function() {
  return l`
			<umb-picker-search-field></umb-picker-search-field>
			<umb-picker-search-result .pickableFilter=${this.data?.pickableFilter}></umb-picker-search-result>
		`;
};
E = function() {
  return this._searchQuery ? m : l`
			<umb-tree
				alias=${$(this.data?.treeAlias)}
				.props=${{
    hideTreeItemActions: !0,
    hideTreeRoot: this.data?.hideTreeRoot,
    expandTreeRoot: this.data?.expandTreeRoot,
    selectionConfiguration: this._selectionConfiguration,
    filter: this.data?.filter,
    selectableFilter: this.data?.pickableFilter,
    startNode: this.data?.startNode,
    foldersOnly: this.data?.foldersOnly,
    expansion: this._treeExpansion
  }}
				@selected=${n(this, s, x)}
				@deselected=${n(this, s, y)}
				@expansion-change=${n(this, s, v)}></umb-tree>
		`;
};
g = function() {
  return l`
			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
				${this._createPath ? l` <uui-button
							label=${this.localize.string(this._createLabel ?? "#general_create")}
							look="secondary"
							href=${this._createPath}></uui-button>` : m}
				<uui-button
					label=${this.localize.term("general_choose")}
					look="primary"
					color="positive"
					@click=${this._submitModal}
					?disabled=${!this._hasSelection}></uui-button>
			</div>
		`;
};
a([
  c()
], o.prototype, "_selectionConfiguration", 2);
a([
  c()
], o.prototype, "_hasSelection", 2);
a([
  c()
], o.prototype, "_createPath", 2);
a([
  c()
], o.prototype, "_createLabel", 2);
a([
  c()
], o.prototype, "_searchQuery", 2);
a([
  c()
], o.prototype, "_treeExpansion", 2);
o = a([
  U("umb-tree-picker-modal")
], o);
const G = o;
export {
  o as UmbTreePickerModalElement,
  G as default
};
//# sourceMappingURL=tree-picker-modal.element-DnTD7GuE.js.map

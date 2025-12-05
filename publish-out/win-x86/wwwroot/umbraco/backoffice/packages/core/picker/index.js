import { a as g } from "../picker-search-result-item-element-base-DBhAKPkt.js";
import { U as ge } from "../picker-search-result-item-element-base-DBhAKPkt.js";
import { U as Ce, a as we } from "../default-picker-search-result-item.context-7tVujM-8.js";
import { UmbModalBaseElement as $ } from "@umbraco-cms/backoffice/modal";
import { UMB_PICKER_INPUT_CONTEXT as R } from "@umbraco-cms/backoffice/picker-input";
import { createExtensionApiByAlias as V } from "@umbraco-cms/backoffice/extension-registry";
import { debounce as B, UmbSelectionManager as F } from "@umbraco-cms/backoffice/utils";
import { UmbBooleanState as w, UmbObjectState as A, UmbArrayState as N, UmbNumberState as Q } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as D, UmbContextBase as W } from "@umbraco-cms/backoffice/class-api";
import { UmbInteractionMemoryManager as X } from "@umbraco-cms/backoffice/interaction-memory";
import { UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as K } from "@umbraco-cms/backoffice/content";
import { css as Y, state as u, customElement as U, nothing as f, html as c, property as z, repeat as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as q } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
class ve extends $ {
  #t;
  constructor() {
    super(), this.consumeContext(R, (e) => {
      this.#t = e, this.#i();
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.#e();
  }
  #e() {
    this.observe(this._pickerContext.interactionMemory.memories, (e) => {
      this.#a(e);
    });
  }
  #r() {
    return "UmbPickerModal";
  }
  #i() {
    this.observe(
      this.#t?.interactionMemory.memory(this.#r()),
      (e) => {
        e?.memories?.forEach((r) => this._pickerContext.interactionMemory.setMemory(r));
      },
      "umbModalInteractionMemoryObserver"
    );
  }
  #a(e) {
    if (e?.length > 0) {
      const r = {
        unique: this.#r(),
        memories: e
      };
      this.#t?.interactionMemory.setMemory(r);
    } else
      this.#t?.interactionMemory.deleteMemory(this.#r());
  }
}
class H extends D {
  constructor() {
    super(...arguments), this.#t = new w(!1), this.searchable = this.#t.asObservable(), this.#e = new A(void 0), this.query = this.#e.asObservable(), this.#r = new w(!1), this.searching = this.#r.asObservable(), this.#i = new N([], (e) => e.unique), this.resultItems = this.#i.asObservable(), this.#a = new Q(0), this.resultTotalItems = this.#a.asObservable(), this.#o = B(this.#c, 300);
  }
  #t;
  #e;
  #r;
  #i;
  #a;
  #s;
  #h;
  /**
   * Set the configuration for the search manager.
   * @param {UmbPickerSearchManagerConfig} config The configuration for the search manager.
   * @memberof UmbPickerSearchManager
   */
  setConfig(e) {
    this.#s = e, this.#n();
  }
  /**
   * Get the current configuration for the search manager.
   * @returns {UmbPickerSearchManagerConfig | undefined} The current configuration for the search manager.
   * @memberof UmbPickerSearchManager
   */
  getConfig() {
    return this.#s;
  }
  /**
   * Update the current configuration for the search manager.
   * @param {Partial<UmbPickerSearchManagerConfig>} partialConfig
   * @memberof UmbPickerSearchManager
   */
  updateConfig(e) {
    const r = { ...this.#s, ...e };
    this.setConfig(r);
  }
  /**
   * Returns whether items can be searched.
   * @returns {boolean} Whether items can be searched.
   * @memberof UmbPickerSearchManager
   */
  getSearchable() {
    return this.#t.getValue();
  }
  /**
   * Sets whether items can be searched.
   * @param {boolean} value Whether items can be searched.
   * @memberof UmbPickerSearchManager
   */
  setSearchable(e) {
    this.#t.setValue(e);
  }
  /**
   * Search for items based on the current query.
   * @memberof UmbPickerSearchManager
   */
  search() {
    if (this.getSearchable() === !1) throw new Error("Search is not enabled");
    if (!this.#e.getValue()?.query) {
      this.clear();
      return;
    }
    this.#r.setValue(!0), this.#o();
  }
  /**
   * Clear the current search query and result items.
   * @memberof UmbPickerSearchManager
   */
  clear() {
    this.#e.setValue(void 0), this.#i.setValue([]), this.#r.setValue(!1), this.#a.setValue(0);
  }
  /**
   * Set the search query.
   * @param {SearchRequestArgsType} query The search query.
   * @memberof UmbPickerSearchManager
   */
  setQuery(e) {
    if (!this.query) {
      this.clear();
      return;
    }
    this.#e.setValue(e);
  }
  /**
   * Get the current search query.
   * @memberof UmbPickerSearchManager
   * @returns {SearchRequestArgsType | undefined} The current search query.
   */
  getQuery() {
    return this.#e.getValue();
  }
  /**
   * Update the current search query.
   * @param {Partial<SearchRequestArgsType>} query
   * @memberof UmbPickerSearchManager
   */
  updateQuery(e) {
    const r = { ...this.getQuery(), ...e };
    this.#e.setValue(r);
  }
  async #n() {
    const e = this.#s?.providerAlias;
    if (!e)
      throw this.setSearchable(!1), new Error("No search provider alias provided");
    if (this.#h = await V(this, e), !this.#h)
      throw this.setSearchable(!1), new Error(`Search Provider with alias ${e} is not available`);
    this.setSearchable(!0);
  }
  #o;
  async #c() {
    if (this.getSearchable() === !1) throw new Error("Search is not enabled");
    if (!this.#h) throw new Error("Search provider is not available");
    const e = this.#e.getValue();
    if (!e?.query) {
      this.clear();
      return;
    }
    const r = {
      ...e,
      // ensure that config params are always included
      ...this.#s?.queryParams,
      searchFrom: this.#s?.searchFrom,
      // TODO: Move this implementation to another place. The generic picker search manager shouldn't be aware of data types.
      dataTypeUnique: this.#s?.dataTypeUnique
    }, { data: i } = await this.#h.search(r), s = i?.items ?? [];
    this.#i.setValue(s), this.#a.setValue(i?.total ?? 0), this.#r.setValue(!1);
  }
}
class be extends W {
  constructor(e) {
    super(e, g), this.interactionMemory = new X(this), this.selection = new F(this), this.search = new H(this), this.consumeContext(K, (r) => {
      this.observe(r?.dataType, (i) => {
        this.dataType = i;
      });
    });
  }
}
var J = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, x = (t) => {
  throw TypeError(t);
}, b = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? Z(e, r) : e, h = t.length - 1, o; h >= 0; h--)
    (o = t[h]) && (s = (i ? o(e, r, s) : o(s)) || s);
  return i && s && J(e, r, s), s;
}, S = (t, e, r) => e.has(t) || x("Cannot " + r), p = (t, e, r) => (S(t, e, "read from private field"), e.get(t)), E = (t, e, r) => e.has(t) ? x("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), j = (t, e, r, i) => (S(t, e, "write to private field"), e.set(t, r), r), ee = (t, e, r) => (S(t, e, "access private method"), r), a, y, k;
let m = class extends q {
  constructor() {
    super(), E(this, y), this._query = "", this._searching = !1, this._isSearchable = !1, E(this, a), this.consumeContext(g, (t) => {
      j(this, a, t), this.observe(
        p(this, a)?.search.searchable,
        (e) => this._isSearchable = e ?? !1
      ), this.observe(p(this, a)?.search.searching, (e) => this._searching = e ?? !1), this.observe(p(this, a)?.search.query, (e) => this._query = e?.query || "");
    });
  }
  render() {
    return this._isSearchable ? c`
			<uui-input .value=${this._query} placeholder="Search..." @input=${ee(this, y, k)}>
				<div slot="prepend">
					${this._searching ? c`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : c`<uui-icon name="search"></uui-icon>`}
				</div>

				${this._query ? c`
							<uui-button slot="append" type="button" @click=${() => p(this, a)?.search.clear()} compact>
								<uui-icon name="icon-delete"></uui-icon>
							</uui-button>
						` : f}
			</uui-input>
			<div id="divider"></div>
		` : f;
  }
};
a = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
k = function(t) {
  const e = t.target.value;
  p(this, a)?.search.updateQuery({ query: e }), p(this, a)?.search.search();
};
m.styles = [
  L,
  Y`
			uui-input {
				width: 100%;
			}

			uui-input [slot='prepend'] {
				display: flex;
				align-items: center;
			}

			#divider {
				width: 100%;
				height: 1px;
				background-color: var(--uui-color-divider);
				margin-top: var(--uui-size-space-5);
				margin-bottom: var(--uui-size-space-3);
			}

			#searching-indicator {
				margin-left: 7px;
				margin-top: 4px;
			}
		`
];
b([
  u()
], m.prototype, "_query", 2);
b([
  u()
], m.prototype, "_searching", 2);
b([
  u()
], m.prototype, "_isSearchable", 2);
m = b([
  U("umb-picker-search-field")
], m);
var te = Object.defineProperty, re = Object.getOwnPropertyDescriptor, T = (t) => {
  throw TypeError(t);
}, d = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? re(e, r) : e, h = t.length - 1, o; h >= 0; h--)
    (o = t[h]) && (s = (i ? o(e, r, s) : o(s)) || s);
  return i && s && te(e, r, s), s;
}, C = (t, e, r) => e.has(t) || T("Cannot " + r), _ = (t, e, r) => (C(t, e, "read from private field"), e.get(t)), M = (t, e, r) => e.has(t) ? T("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), se = (t, e, r, i) => (C(t, e, "write to private field"), e.set(t, r), r), P = (t, e, r) => (C(t, e, "access private method"), r), n, v, I, O;
let l = class extends q {
  constructor() {
    super(), M(this, v), this._searching = !1, this._items = [], this._isSearchable = !1, this.pickableFilter = () => !0, M(this, n), this.consumeContext(g, (t) => {
      se(this, n, t), this.observe(
        _(this, n)?.search.searchable,
        (e) => this._isSearchable = e ?? !1,
        "obsSearchable"
      ), this.observe(_(this, n)?.search.query, (e) => this._query = e, "obsQuery"), this.observe(
        _(this, n)?.search.searching,
        (e) => this._searching = e ?? !1,
        "obsSearching"
      ), this.observe(_(this, n)?.search.resultItems, (e) => this._items = e ?? [], "obsResultItems");
    });
  }
  render() {
    return this._isSearchable ? this._query?.query && this._searching === !1 && this._items.length === 0 ? P(this, v, I).call(this) : c`
			${G(
      this._items,
      (t) => t.unique,
      (t) => P(this, v, O).call(this, t)
    )}
		` : f;
  }
};
n = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
I = function() {
  return c`<small>No result for <strong>"${this._query?.query}"</strong>.</small>`;
};
O = function(t) {
  return c`
			<umb-extension-with-api-slot
				type="pickerSearchResultItem"
				.filter=${(e) => e.forEntityTypes.includes(t.entityType)}
				.elementProps=${{
    item: t,
    disabled: this.pickableFilter ? !this.pickableFilter(t) : void 0
  }}></umb-extension-with-api-slot>
		`;
};
d([
  u()
], l.prototype, "_query", 2);
d([
  u()
], l.prototype, "_searching", 2);
d([
  u()
], l.prototype, "_items", 2);
d([
  u()
], l.prototype, "_isSearchable", 2);
d([
  z({ attribute: !1 })
], l.prototype, "pickableFilter", 2);
l = d([
  U("umb-picker-search-result")
], l);
export {
  g as UMB_PICKER_CONTEXT,
  Ce as UMB_PICKER_SEARCH_RESULT_ITEM_CONTEXT,
  we as UmbDefaultPickerSearchResultItemContext,
  be as UmbPickerContext,
  ve as UmbPickerModalBaseElement,
  m as UmbPickerSearchFieldElement,
  H as UmbPickerSearchManager,
  l as UmbPickerSearchResultElement,
  ge as UmbPickerSearchResultItemElementBase
};
//# sourceMappingURL=index.js.map

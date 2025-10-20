import { a as g } from "../picker-search-result-item-element-base-DBhAKPkt.js";
import { U as ue } from "../picker-search-result-item-element-base-DBhAKPkt.js";
import { U as _e, a as de } from "../default-picker-search-result-item.context-7tVujM-8.js";
import { UmbControllerBase as T, UmbContextBase as R } from "@umbraco-cms/backoffice/class-api";
import { createExtensionApiByAlias as M } from "@umbraco-cms/backoffice/extension-registry";
import { UmbBooleanState as q, UmbObjectState as A, UmbArrayState as F, UmbNumberState as B } from "@umbraco-cms/backoffice/observable-api";
import { debounce as Q, UmbSelectionManager as W } from "@umbraco-cms/backoffice/utils";
import { css as D, state as u, customElement as P, nothing as b, html as c, property as N, repeat as z } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as G } from "@umbraco-cms/backoffice/style";
class K extends T {
  /**
   * Creates an instance of UmbPickerSearchManager.
   * @param {UmbControllerHost} host The controller host for the search manager.
   * @memberof UmbPickerSearchManager
   */
  constructor(e) {
    super(e), this.#s = new q(!1), this.searchable = this.#s.asObservable(), this.#e = new A(void 0), this.query = this.#e.asObservable(), this.#r = new q(!1), this.searching = this.#r.asObservable(), this.#i = new F([], (r) => r.unique), this.resultItems = this.#i.asObservable(), this.#a = new B(0), this.resultTotalItems = this.#a.asObservable(), this.#n = Q(this.#c, 300);
  }
  #s;
  #e;
  #r;
  #i;
  #a;
  #t;
  #h;
  /**
   * Set the configuration for the search manager.
   * @param {UmbPickerSearchManagerConfig} config The configuration for the search manager.
   * @memberof UmbPickerSearchManager
   */
  setConfig(e) {
    this.#t = e, this.#o();
  }
  /**
   * Get the current configuration for the search manager.
   * @returns {UmbPickerSearchManagerConfig | undefined} The current configuration for the search manager.
   * @memberof UmbPickerSearchManager
   */
  getConfig() {
    return this.#t;
  }
  /**
   * Update the current configuration for the search manager.
   * @param {Partial<UmbPickerSearchManagerConfig>} partialConfig
   * @memberof UmbPickerSearchManager
   */
  updateConfig(e) {
    const r = { ...this.#t, ...e };
    this.setConfig(r);
  }
  /**
   * Returns whether items can be searched.
   * @returns {boolean} Whether items can be searched.
   * @memberof UmbPickerSearchManager
   */
  getSearchable() {
    return this.#s.getValue();
  }
  /**
   * Sets whether items can be searched.
   * @param {boolean} value Whether items can be searched.
   * @memberof UmbPickerSearchManager
   */
  setSearchable(e) {
    this.#s.setValue(e);
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
    this.#r.setValue(!0), this.#n();
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
  async #o() {
    const e = this.#t?.providerAlias;
    if (!e)
      throw this.setSearchable(!1), new Error("No search provider alias provided");
    if (this.#h = await M(this, e), !this.#h)
      throw this.setSearchable(!1), new Error(`Search Provider with alias ${e} is not available`);
    this.setSearchable(!0);
  }
  #n;
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
      ...this.#t?.queryParams,
      searchFrom: this.#t?.searchFrom
    }, { data: i } = await this.#h.search(r), s = i?.items ?? [];
    this.#i.setValue(s), this.#a.setValue(i?.total ?? 0), this.#r.setValue(!1);
  }
}
var L = Object.defineProperty, X = Object.getOwnPropertyDescriptor, $ = (t) => {
  throw TypeError(t);
}, m = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? X(e, r) : e, h = t.length - 1, n; h >= 0; h--)
    (n = t[h]) && (s = (i ? n(e, r, s) : n(s)) || s);
  return i && s && L(e, r, s), s;
}, S = (t, e, r) => e.has(t) || $("Cannot " + r), p = (t, e, r) => (S(t, e, "read from private field"), e.get(t)), C = (t, e, r) => e.has(t) ? $("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), H = (t, e, r, i) => (S(t, e, "write to private field"), e.set(t, r), r), J = (t, e, r) => (S(t, e, "access private method"), r), a, y, k;
let _ = class extends U {
  constructor() {
    super(), C(this, y), this._query = "", this._searching = !1, this._isSearchable = !1, C(this, a), this.consumeContext(g, (t) => {
      H(this, a, t), this.observe(
        p(this, a)?.search.searchable,
        (e) => this._isSearchable = e ?? !1
      ), this.observe(p(this, a)?.search.searching, (e) => this._searching = e ?? !1), this.observe(p(this, a)?.search.query, (e) => this._query = e?.query || "");
    });
  }
  render() {
    return this._isSearchable ? c`
			<uui-input .value=${this._query} placeholder="Search..." @input=${J(this, y, k)}>
				<div slot="prepend">
					${this._searching ? c`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : c`<uui-icon name="search"></uui-icon>`}
				</div>

				${this._query ? c`
							<uui-button slot="append" type="button" @click=${() => p(this, a)?.search.clear()} compact>
								<uui-icon name="icon-delete"></uui-icon>
							</uui-button>
						` : b}
			</uui-input>
			<div id="divider"></div>
		` : b;
  }
};
a = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
k = function(t) {
  const e = t.target.value;
  p(this, a)?.search.updateQuery({ query: e }), p(this, a)?.search.search();
};
_.styles = [
  G,
  D`
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
m([
  u()
], _.prototype, "_query", 2);
m([
  u()
], _.prototype, "_searching", 2);
m([
  u()
], _.prototype, "_isSearchable", 2);
_ = m([
  P("umb-picker-search-field")
], _);
var Y = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, O = (t) => {
  throw TypeError(t);
}, d = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? Z(e, r) : e, h = t.length - 1, n; h >= 0; h--)
    (n = t[h]) && (s = (i ? n(e, r, s) : n(s)) || s);
  return i && s && Y(e, r, s), s;
}, w = (t, e, r) => e.has(t) || O("Cannot " + r), v = (t, e, r) => (w(t, e, "read from private field"), e.get(t)), E = (t, e, r) => e.has(t) ? O("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), j = (t, e, r, i) => (w(t, e, "write to private field"), e.set(t, r), r), x = (t, e, r) => (w(t, e, "access private method"), r), o, f, V, I;
let l = class extends U {
  constructor() {
    super(), E(this, f), this._searching = !1, this._items = [], this._isSearchable = !1, this.pickableFilter = () => !0, E(this, o), this.consumeContext(g, (t) => {
      j(this, o, t), this.observe(
        v(this, o)?.search.searchable,
        (e) => this._isSearchable = e ?? !1,
        "obsSearchable"
      ), this.observe(v(this, o)?.search.query, (e) => this._query = e, "obsQuery"), this.observe(
        v(this, o)?.search.searching,
        (e) => this._searching = e ?? !1,
        "obsSearching"
      ), this.observe(v(this, o)?.search.resultItems, (e) => this._items = e ?? [], "obsResultItems");
    });
  }
  render() {
    return this._isSearchable ? this._query?.query && this._searching === !1 && this._items.length === 0 ? x(this, f, V).call(this) : c`
			${z(
      this._items,
      (t) => t.unique,
      (t) => x(this, f, I).call(this, t)
    )}
		` : b;
  }
};
o = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakSet();
V = function() {
  return c`<small>No result for <strong>"${this._query?.query}"</strong>.</small>`;
};
I = function(t) {
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
  N({ attribute: !1 })
], l.prototype, "pickableFilter", 2);
l = d([
  P("umb-picker-search-result")
], l);
class oe extends R {
  constructor(e) {
    super(e, g), this.selection = new W(this), this.search = new K(this);
  }
}
export {
  g as UMB_PICKER_CONTEXT,
  _e as UMB_PICKER_SEARCH_RESULT_ITEM_CONTEXT,
  de as UmbDefaultPickerSearchResultItemContext,
  oe as UmbPickerContext,
  _ as UmbPickerSearchFieldElement,
  K as UmbPickerSearchManager,
  l as UmbPickerSearchResultElement,
  ue as UmbPickerSearchResultItemElementBase
};
//# sourceMappingURL=index.js.map

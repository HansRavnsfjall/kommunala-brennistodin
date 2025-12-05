import { U as He } from "../deprecation-SeDYTswO.js";
import { U as c, a as b, b as w } from "../expansion-entry-expanded.event-Ct82JR9u.js";
import { d as De } from "../expansion-entry-expanded.event-Ct82JR9u.js";
import { UmbControllerBase as d } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as f, mergeObservables as P, UmbNumberState as h, UmbBooleanState as S } from "@umbraco-cms/backoffice/observable-api";
import { clamp as O } from "@umbraco-cms/backoffice/external/uui";
import { clamp as Be } from "@umbraco-cms/backoffice/external/uui";
import { UmbChangeEvent as _, UmbSelectedEvent as x, UmbSelectionChangeEvent as E, UmbDeselectedEvent as V } from "@umbraco-cms/backoffice/event";
import { u as Fe } from "../url-pattern-to-string.function-BAOMgyZQ.js";
import { DOMPurify as R } from "@umbraco-cms/backoffice/external/dompurify";
function j(t, e) {
  const s = [];
  for (let n = 0; n < t.length; n += e)
    s.push(t.slice(n, n + e));
  return s;
}
function Z(t, e) {
  if (t === 0) return "0 Bytes";
  const s = e?.kilo ?? 1024, n = e?.decimals ?? 2, i = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(t) / Math.log(s));
  return `${parseFloat((t / Math.pow(s, r)).toFixed(n)).toLocaleString(e?.culture)} ${i[r]}`;
}
const X = (t, e = 0) => {
  let s;
  return function(...n) {
    clearTimeout(s), s = setTimeout(() => t.apply(this, n), e);
  };
}, K = Object.freeze({
  ASCENDING: "Ascending",
  DESCENDING: "Descending"
}), Y = (t, e, s) => {
  const n = new Blob([t], { type: s }), i = window.URL.createObjectURL(n), r = document.createElement("a");
  r.href = i, r.download = e, r.style.display = "none", document.body.appendChild(r), r.dispatchEvent(new MouseEvent("click")), r.remove(), window.URL.revokeObjectURL(i);
};
class J extends d {
  constructor() {
    super(...arguments), this._expansion = new f([], (e) => e.entityType + e.unique), this.expansion = this._expansion.asObservable();
  }
  /**
   * Checks if an entity is expanded
   * @param {EntryModelType} entity The entity to check
   * @returns {Observable<boolean>} True if the entity is expanded
   * @memberof UmbEntityExpansionManager
   */
  isExpanded(e) {
    return this._expansion.asObservablePart(
      (s) => s?.some((n) => n.entityType === e.entityType && n.unique === e.unique)
    );
  }
  /**
   * Sets the expansion state
   * @param {UmbEntityExpansionModel<EntryModelType> | undefined} expansion The expansion state
   * @memberof UmbEntityExpansionManager
   * @returns {void}
   */
  setExpansion(e) {
    this._expansion.setValue(e), this.getHostElement()?.dispatchEvent(new c());
  }
  /**
   * Gets the expansion state
   * @memberof UmbEntityExpansionManager
   * @returns {UmbEntityExpansionModel} The expansion state
   */
  getExpansion() {
    return this._expansion.getValue();
  }
  /**
   * Expands an entity
   * @param {EntryModelType} entity The entity to open
   * @memberof UmbEntityExpansionManager
   * @returns {Promise<void>}
   */
  async expandItem(e) {
    this._expansion.appendOne(e), this.getHostElement()?.dispatchEvent(new b(e)), this.getHostElement()?.dispatchEvent(new c());
  }
  /**
   * Expands multiple entities
   * @param {UmbEntityExpansionModel<EntryModelType>} entities The entities to open
   * @memberof UmbEntityExpansionManager
   * @returns {void}
   */
  expandItems(e) {
    !e || e.length === 0 || (this._expansion.append(e), e.forEach((s) => {
      this.getHostElement()?.dispatchEvent(new b(s));
    }), this.getHostElement()?.dispatchEvent(new c()));
  }
  /**
   * Collapses an entity
   * @param {EntryModelType} entry The entity to open
   * @memberof UmbEntityExpansionManager
   * @returns {Promise<void>}
   */
  async collapseItem(e) {
    this._expansion.filter((s) => s.entityType !== e.entityType || s.unique !== e.unique), this.getHostElement()?.dispatchEvent(new w(e)), this.getHostElement()?.dispatchEvent(new c());
  }
  /**
   * Collapses multiple entities
   * @param {UmbEntityExpansionModel<EntryModelType>} entries The entities to close
   * @memberof UmbEntityExpansionManager
   * @returns {void}
   */
  collapseItems(e) {
    !e || e.length === 0 || (this._expansion.filter(
      (s) => !e.some((n) => n.entityType === s.entityType && n.unique === s.unique)
    ), e.forEach((s) => {
      this.getHostElement()?.dispatchEvent(new w(s));
    }), this.getHostElement()?.dispatchEvent(new c()));
  }
  /**
   * Collapses all expanded entities
   * @memberof UmbEntityExpansionManager
   * @returns {Promise<void>}
   */
  async collapseAll() {
    this._expansion.setValue([]), this.getHostElement()?.dispatchEvent(new c());
  }
}
const Q = (t) => t.map((e, s) => {
  const n = {
    entityType: e.entityType,
    unique: e.unique
  }, i = t[s + 1];
  return i && (n.target = {
    entityType: i.entityType,
    unique: i.unique
  }), n;
});
function ee(t) {
  if (!t.startsWith("umb://")) throw new Error("udi does not start with umb://");
  const s = t.replace("umb://", "").split("/")[1];
  if (s.length !== 32) throw new Error("udi is not 32 chars");
  return `${s.substring(0, 8)}-${s.substring(8, 12)}-${s.substring(12, 16)}-${s.substring(16, 20)}-${s.substring(20)}`;
}
async function te(t, e) {
  if (!e)
    return t;
  const s = new URLSearchParams({
    width: e.width?.toString() ?? "",
    height: e.height?.toString() ?? "",
    mode: e.mode ?? ""
  });
  return `${t}?${s.toString()}`;
}
class U extends d {
  constructor() {
    super(...arguments), this._rules = new f([], (e) => e.unique), this.rules = this._rules.asObservable(), this.hasRules = this._rules.asObservablePart((e) => e.length > 0), this._fallback = !1;
  }
  fallbackToNotPermitted() {
    this._fallback = !1;
  }
  fallbackToPermitted() {
    this._fallback = !0;
  }
  /**
   * Add a new rule
   * @param {RuleType} rule
   */
  addRule(e) {
    const s = { ...e };
    return s.unique ??= Symbol(), s.permitted === void 0 && (s.permitted = !0), this._rules.appendOne(s), e.unique;
  }
  /**
   * Add multiple rules
   * @param {RuleType[]} rules
   */
  addRules(e) {
    this._rules.mute(), e.forEach((s) => this.addRule(s)), this._rules.unmute();
  }
  /**
   * Remove a rule
   * @param {RuleType['unique']} unique Unique value of the rule to remove
   */
  removeRule(e) {
    this._rules.removeOne(e);
  }
  /**
   * Remove multiple rules
   * @param {RuleType['unique'][]} uniques Array of unique values to remove
   */
  removeRules(e) {
    this._rules.remove(e);
  }
  /**
   * Get all rules
   * @returns {RuleType[]} Array of rules
   */
  getRules() {
    return this._rules.getValue();
  }
  /**
   * Clear all rules
   */
  clearRules() {
    this._rules.setValue([]);
  }
  destroy() {
    this._rules.destroy(), super.destroy();
  }
}
class I extends U {
  constructor() {
    super(...arguments), this.permitted = this._rules.asObservablePart((e) => this.#e(e));
  }
  getPermitted() {
    return this.#e(this.getRules());
  }
  #e(e) {
    return e.filter((s) => s.permitted === !1).length > 0 ? !1 : e.filter((s) => s.permitted === !0).length > 0 ? !0 : this._fallback;
  }
}
function y(t, e) {
  return t.variantId?.compare(e) || t.variantId === void 0;
}
class se extends I {
  /**
   * Observe if the given variantId is permitted to read
   * @param {UmbVariantId} variantId
   * @returns {Observable<boolean>} - Observable that emits true if the variantId is permitted to read, false otherwise
   * @memberof UmbReadOnlyVariantGuardManager
   */
  isPermittedForVariant(e) {
    return this._rules.asObservablePart((s) => this.#e(s, e));
  }
  /**
   * @param {Observable<UmbVariantId | undefined>} variantId
   * @returns {Observable<boolean>} - Observable that emits true if the variantId is permitted to read, false otherwise
   * @memberof UmbReadOnlyVariantGuardManager
   */
  isPermittedForObservableVariant(e) {
    return P([this.rules, e], ([s, n]) => n ? this.#e(s, n) : !1);
  }
  /**
   * Check if the given variantId is permitted to read
   * @param {UmbVariantId} variantId
   * @returns {boolean} - true if the variantId is permitted to read, false otherwise
   * @memberof UmbReadOnlyVariantGuardManager
   */
  getIsPermittedForVariant(e) {
    return this.#e(this.getRules(), e);
  }
  #e(e, s) {
    return e.filter((n) => n.permitted === !1).some((n) => y(n, s)) ? !1 : e.filter((n) => n.permitted === !0).some((n) => y(n, s)) ? !0 : this._fallback;
  }
}
function ne(t, e, s) {
  return s = O(s, 0, 1), t * (1 - s) + e * s;
}
function ie(t, e, s) {
  return t === e ? 0 : (s - t) / (e - t);
}
function re(t, e) {
  return Math.abs(t - e);
}
function ae(t, e) {
  return e < 0 || e >= 1 ? NaN : t / (1 - e);
}
function oe(t, e) {
  const s = [0];
  e.reduce((a, l, u) => s[u + 1] = a + l, 0);
  const n = s.reduce((a, l) => {
    const u = Math.abs(a - t), g = Math.abs(l - t);
    return u === g ? a < l ? a : l : g < u ? l : a;
  }), i = s.indexOf(n), r = t - n;
  let o = i;
  if (!(r < 0 && i === 0)) {
    if (!(r > 0 && i === s.length - 1)) {
      const a = e[r >= 0 ? i : i - 1];
      o += a === 0 ? o : r / a;
    }
  }
  return o;
}
function le(t, e) {
  const s = Math.min(t, e.length);
  let n = 0, i = 0;
  for (; n < s; )
    i += e[n++];
  return i;
}
function ue(t, e, s, n = 0) {
  return t > s.left - n && t < s.right + n && e > s.top - n && e < s.bottom + n;
}
function ce(t, e) {
  const s = new Image(), n = new Promise(
    (i, r) => {
      s.onload = () => {
        const o = s.naturalWidth, a = s.naturalHeight;
        let l = o, u = a;
        if (e?.maxWidth && e.maxWidth > 0 || e?.maxHeight && e.maxHeight > 0) {
          const g = e?.maxWidth ? e.maxWidth / o : 1, v = e?.maxHeight ? e.maxHeight / a : 1, p = Math.min(g, v, 1);
          l = Math.round(o * p), u = Math.round(a * p);
        }
        i({ width: l, height: u, naturalWidth: o, naturalHeight: a });
      }, s.onerror = r;
    }
  );
  return s.src = t, n;
}
function M(t, e) {
  const s = { ...e };
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && t[n] !== void 0 && (t[n]?.constructor === Object && e[n]?.constructor === Object ? s[n] = M(t[n], e[n]) : s[n] = t[n]);
  return s;
}
class he extends EventTarget {
  constructor() {
    super(...arguments), this.#e = {
      totalItems: 0,
      totalPages: 1,
      currentPage: 1
    }, this.#t = new h(10), this.pageSize = this.#t.asObservable(), this.#n = new h(this.#e.totalItems), this.totalItems = this.#n.asObservable(), this.#s = new h(this.#e.totalPages), this.totalPages = this.#s.asObservable(), this.#i = new h(this.#e.currentPage), this.currentPage = this.#i.asObservable(), this.#r = new h(0), this.skip = this.#r.asObservable();
  }
  #e;
  #t;
  #n;
  #s;
  #i;
  #r;
  /**
   * Sets the number of items per page and recalculates the total number of pages
   * @param {number} pageSize
   * @memberof UmbPaginationManager
   */
  setPageSize(e) {
    this.#t.setValue(e), this.#a();
  }
  /**
   * Gets the number of items per page
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getPageSize() {
    return this.#t.getValue();
  }
  /**
   * Gets the total number of items
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getTotalItems() {
    return this.#n.getValue();
  }
  /**
   * Sets the total number of items and recalculates the total number of pages
   * @param {number} totalItems
   * @memberof UmbPaginationManager
   */
  setTotalItems(e) {
    this.#n.setValue(e), this.#a();
  }
  /**
   * Gets the total number of pages
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getTotalPages() {
    return this.#s.getValue();
  }
  /**
   * Gets the current page number
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getCurrentPageNumber() {
    return this.#i.getValue();
  }
  /**
   * Sets the current page number
   * @param {number} pageNumber
   * @memberof UmbPaginationManager
   */
  setCurrentPageNumber(e) {
    e < 1 && (e = 1), e > this.#s.getValue() && (e = this.#s.getValue()), this.#i.setValue(e), this.#o(), this.dispatchEvent(new _());
  }
  /**
   * Gets the number of items to skip
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getSkip() {
    return this.#r.getValue();
  }
  /**
   * Clears the pagination manager values and resets them to their default values
   * @memberof UmbPaginationManager
   */
  clear() {
    this.#n.setValue(this.#e.totalItems), this.#s.setValue(this.#e.totalPages), this.#i.setValue(this.#e.currentPage), this.#r.setValue(0);
  }
  /**
   * Calculates the total number of pages
   * @memberof UmbPaginationManager
   */
  #a() {
    let e = Math.ceil(this.#n.getValue() / this.#t.getValue());
    e = e === 0 ? 1 : e, this.#s.setValue(e), this.getCurrentPageNumber() > e && this.setCurrentPageNumber(e);
  }
  #o() {
    const e = Math.max(0, (this.#i.getValue() - 1) * this.#t.getValue());
    this.#r.setValue(e);
  }
  /**
   * Gets the index of the first item on the current page (for display).
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getDisplayStart() {
    return this.getSkip() + 1;
  }
  /**
   * Gets the index of the last item on the current page (for display).
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getDisplayEnd() {
    return Math.min(this.getSkip() + this.getPageSize(), this.getTotalItems());
  }
}
function T(t, e) {
  const s = new URL(t, window.location.origin);
  return s.origin === window.location.origin ? s : e ? new URL(e) : new URL(window.location.origin);
}
function ge(t) {
  return t.endsWith("/") ? t : t + "/";
}
function de(t, e = globalThis.window) {
  try {
    const s = e.opener;
    if (!s)
      return !1;
    const n = s.location, i = e.location;
    return !(n.origin !== i.origin || typeof t < "u" && !n.pathname.startsWith(t));
  } catch {
    return !1;
  }
}
const fe = (t) => decodeURIComponent(t), A = (t) => encodeURIComponent(t).replaceAll(".", "%2E").replaceAll(":", "%3A"), me = (t) => A(t), pe = (t) => {
  const e = t.replace(/([A-Z])/g, " $1");
  return e.charAt(0).toUpperCase() + e.slice(1);
}, C = (t) => {
  const e = t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase()).join("");
  return e && e.slice(0, 1).toLowerCase() + e.slice(1) || "";
};
function H(t) {
  return C(t);
}
function be(t) {
  return t.replace(/(\d*)$/, (e, s) => (+s + 1).toString().padStart(s.length, "0"));
}
function we(t, e = ",") {
  return t ? t.split(e).map((s) => s.trim()).filter((s) => s.length > 0) ?? [] : [];
}
function Se(t, e) {
  return Array.isArray(t) ? t.indexOf(e) !== -1 : t === e;
}
function Ee(t, e) {
  return Array.isArray(t) ? t.some((s) => e.indexOf(s) !== -1) : e.indexOf(t) !== -1;
}
const ye = H;
function ve(t) {
  return t.startsWith("/") ? t.slice(1) : t;
}
function Pe(t) {
  return t.endsWith("/") ? t.slice(void 0, -1) : t;
}
const m = "umb:auth:redirect";
function L() {
  let t = "";
  const e = sessionStorage.getItem(m);
  return e && (sessionStorage.removeItem(m), t = e.endsWith("logout") ? t : e), t ? T(t) : null;
}
function Oe(t) {
  const e = new URL(t, window.location.origin);
  e.origin === window.location.origin && sessionStorage.setItem(m, e.toString());
}
function _e(t, e = !1) {
  const s = L();
  (s?.pathname.startsWith(t) ?? !1) && !e ? history.replaceState(null, "", s?.toString() ?? "") : window.location.href = s?.toString() ?? t;
}
function xe(t) {
  return t?.indexOf("~/") === 0 && (t = t.slice(1)), t?.indexOf("/wwwroot/") === 0 && (t = t.slice(8)), t;
}
function Ve(t, e = "v1") {
  return `/umbraco/management/api/${e}${t}`;
}
const D = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, k = /([^#-~| |!])/g;
function Re(t) {
  return typeof t != "string" && !(t instanceof String) ? t : t.toString().replace(/&/g, "&amp;").replace(D, function(e) {
    const s = e.charCodeAt(0), n = e.charCodeAt(1);
    return "&#" + ((s - 55296) * 1024 + (n - 56320) + 65536) + ";";
  }).replace(k, function(e) {
    return "&#" + e.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ue(t) {
  return R.sanitize(t);
}
class Ie extends d {
  constructor(e) {
    super(e), this.#e = new S(!0), this.selectable = this.#e.asObservable(), this.#t = new f([], (s) => s), this.selection = this.#t.asObservable(), this.hasSelection = this.#t.asObservablePart((s) => s.length > 0), this.#n = new S(!1), this.multiple = this.#n.asObservable(), this.#s = (s) => !0;
  }
  #e;
  #t;
  #n;
  #s;
  /**
   * Returns whether items can be selected.
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  getSelectable() {
    return this.#e.getValue();
  }
  /**
   * Sets whether items can be selected.
   * @param {boolean} value
   * @memberof UmbSelectionManager
   */
  setSelectable(e) {
    this.#e.setValue(e);
  }
  /**
   * Returns the current selection.
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  getSelection() {
    return this.#t.getValue();
  }
  /**
   * Sets the current selection.
   * @param {Array<ValueType>} value
   * @memberof UmbSelectionManager
   */
  setSelection(e) {
    if (this.getSelectable() === !1) return;
    if (e === void 0) throw new Error("Value cannot be undefined");
    e.forEach((n) => {
      if (this.#s(n) === !1)
        throw new Error(`${n} is now allowed to be selected`);
    });
    const s = this.getMultiple() ? e : e.slice(0, 1);
    this.#t.setValue(s);
  }
  /**
   * Returns whether multiple items can be selected.
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  getMultiple() {
    return this.#n.getValue();
  }
  /**
   * Sets whether multiple items can be selected.
   * @param {boolean} value
   * @memberof UmbSelectionManager
   */
  setMultiple(e) {
    if (this.#n.setValue(e), e === !1 && this.getSelection().length > 1) {
      const s = this.getSelection()[0];
      this.clearSelection(), this.select(s);
    }
  }
  /**
   * Toggles the given unique id in the current selection.
   * @param {(ValueType)} unique
   * @memberof UmbSelectionManager
   */
  toggleSelect(e) {
    this.getSelectable() !== !1 && (this.isSelected(e) ? this.deselect(e) : this.select(e));
  }
  /**
   * Appends the given unique id to the current selection.
   * @param {(ValueType)} unique
   * @memberof UmbSelectionManager
   */
  select(e) {
    if (this.getSelectable() === !1 || this.isSelected(e)) return;
    if (this.#s(e) === !1)
      throw new Error("The item is now allowed to be selected");
    const s = this.getMultiple() ? [...this.getSelection(), e] : [e];
    this.#t.setValue(s), this.getHostElement().dispatchEvent(new x(e)), this.getHostElement().dispatchEvent(new E());
  }
  /**
   * Removes the given unique id from the current selection.
   * @param {(ValueType)} unique
   * @memberof UmbSelectionManager
   */
  deselect(e) {
    if (this.getSelectable() === !1) return;
    const s = this.getSelection().filter((n) => n !== e);
    this.#t.setValue(s), this.getHostElement().dispatchEvent(new V(e)), this.getHostElement().dispatchEvent(new E());
  }
  /**
   * Returns true if the given unique id is selected.
   * @param {(ValueType)} unique
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  isSelected(e) {
    return this.getSelection().includes(e);
  }
  /**
   * Clears the current selection.
   * @memberof UmbSelectionManager
   */
  clearSelection() {
    this.getSelectable() !== !1 && this.#t.setValue([]);
  }
  /**
   * Sets a function that determines if an item is selectable or not.
   * @param compareFn A function that determines if an item is selectable or not.
   * @memberof UmbSelectionManager
   */
  setAllowLimitation(e) {
    this.#s = e;
  }
  /**
   * Returns the function that determines if an item is selectable or not.
   * @returns {*}
   * @memberof UmbSelectionManager
   */
  getAllowLimitation() {
    return this.#s;
  }
}
class B extends d {
  /**
   * Creates an instance of UmbStateManager.
   * @param {UmbControllerHost} host
   * @memberof UmbStateManager
   */
  constructor(e) {
    super(e), this._states = new f([], (s) => s.unique), this.states = this._states.asObservable(), this.isOn = this._states.asObservablePart((s) => s.length > 0), this.isOff = this._states.asObservablePart((s) => s.length === 0);
  }
  /**
   * Add a new state to the state manager
   * @param {StateType} state
   * @memberof UmbStateManager
   */
  addState(e) {
    if (!e.unique) throw new Error("State must have a unique property");
    if (this._states.getValue().find((s) => s.unique === e.unique))
      throw new Error("State with unique already exists");
    this._states.setValue([...this._states.getValue(), e]);
  }
  /**
   * Add multiple states to the state manager
   * @param {StateType[]} states
   * @memberof UmbStateManager
   */
  addStates(e) {
    e.forEach((s) => this.addState(s));
  }
  /**
   * Remove a state from the state manager
   * @param {StateType['unique']} unique
   * @memberof UmbStateManager
   */
  removeState(e) {
    this._states.removeOne(e);
  }
  /**
   * Remove multiple states from the state manager
   * @param {StateType['unique'][]} uniques
   * @memberof UmbStateManager
   */
  removeStates(e) {
    this._states.remove(e);
  }
  /**
   * Get all states from the state manager
   * @returns {StateType[]} {StateType[]} All states in the state manager
   * @memberof UmbStateManager
   */
  getStates() {
    return this._states.getValue();
  }
  getIsOn() {
    return this._states.getValue().length > 0;
  }
  getIsOff() {
    return this._states.getValue().length === 0;
  }
  /**
   * Clear all states from the state manager
   * @memberof UmbStateManager
   */
  clear() {
    this._states.setValue([]);
  }
  destroy() {
    super.destroy(), this._states.destroy();
  }
}
class W extends B {
  constructor() {
    super(...arguments), this.isReadOnly = this.isOn;
  }
  /**
   * Checks if the state is read-only
   * @returns {boolean} - true if the state is read-only
   * @memberof UmbReadOnlyStateManager
   */
  getIsReadOnly() {
    return this.getIsOn();
  }
}
class Me extends W {
}
function Te() {
  return typeof window > "u" || // Check if running under Playwright
  typeof window.__playwright__binding__ < "u";
}
export {
  m as UMB_STORAGE_REDIRECT_URL,
  He as UmbDeprecation,
  K as UmbDirection,
  J as UmbEntityExpansionManager,
  c as UmbExpansionChangeEvent,
  w as UmbExpansionEntryCollapsedEvent,
  b as UmbExpansionEntryExpandedEvent,
  U as UmbGuardManagerBase,
  he as UmbPaginationManager,
  I as UmbReadOnlyGuardManager,
  W as UmbReadOnlyStateManager,
  se as UmbReadOnlyVariantGuardManager,
  Me as UmbReadOnlyVariantStateManager,
  Ie as UmbSelectionManager,
  B as UmbStateManager,
  me as aliasToPath,
  j as batchArray,
  Y as blobDownload,
  ae as calculateExtrapolatedValue,
  Be as clamp,
  X as debounce,
  fe as decodeFilePath,
  De as diffWords,
  re as distance,
  A as encodeFilePath,
  T as ensureLocalPath,
  ge as ensurePathEndsWithSlash,
  Re as escapeHTML,
  Z as formatBytes,
  pe as fromCamelCase,
  H as generateAlias,
  le as getAccumulatedValueOfIndex,
  ee as getGuidFromUdi,
  oe as getInterpolatedIndexOfPositionInWeightMap,
  te as getProcessedImageUrl,
  de as hasOwnOpener,
  ce as imageSize,
  be as incrementString,
  ie as inverseLerp,
  Te as isTestEnvironment,
  ue as isWithinRect,
  ne as lerp,
  Q as linkEntityExpansionEntries,
  ye as pathFolderName,
  _e as redirectToStoredPath,
  ve as removeInitialSlashFromPath,
  Pe as removeLastSlashFromPath,
  L as retrieveStoredPath,
  Ue as sanitizeHTML,
  Oe as setStoredPath,
  we as splitStringToArray,
  Se as stringOrStringArrayContains,
  Ee as stringOrStringArrayIntersects,
  C as toCamelCase,
  xe as transformServerPathToClientPath,
  M as umbDeepMerge,
  Fe as umbUrlPatternToString,
  Ve as umbracoPath
};
//# sourceMappingURL=index.js.map

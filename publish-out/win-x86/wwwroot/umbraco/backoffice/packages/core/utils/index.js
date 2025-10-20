import { U as Ue } from "../deprecation-SeDYTswO.js";
import { d as Ie } from "../index-ZFYMtjhW.js";
import { UmbControllerBase as f } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as d, mergeObservables as P, UmbNumberState as c, UmbBooleanState as b } from "@umbraco-cms/backoffice/observable-api";
import { clamp as O } from "@umbraco-cms/backoffice/external/uui";
import { clamp as Ae } from "@umbraco-cms/backoffice/external/uui";
import { UmbChangeEvent as V, UmbSelectedEvent as v, UmbSelectionChangeEvent as w, UmbDeselectedEvent as R } from "@umbraco-cms/backoffice/event";
import { u as Ce } from "../url-pattern-to-string.function-BAOMgyZQ.js";
import { DOMPurify as E } from "@umbraco-cms/backoffice/external/dompurify";
function $(t, e) {
  const s = [];
  for (let r = 0; r < t.length; r += e)
    s.push(t.slice(r, r + e));
  return s;
}
function N(t, e) {
  if (t === 0) return "0 Bytes";
  const s = e?.kilo ?? 1024, r = e?.decimals ?? 2, n = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], i = Math.floor(Math.log(t) / Math.log(s));
  return `${parseFloat((t / Math.pow(s, i)).toFixed(r)).toLocaleString(e?.culture)} ${n[i]}`;
}
const G = (t, e = 0) => {
  let s;
  return function(...r) {
    clearTimeout(s), s = setTimeout(() => t.apply(this, r), e);
  };
}, z = Object.freeze({
  ASCENDING: "Ascending",
  DESCENDING: "Descending"
}), j = (t, e, s) => {
  const r = new Blob([t], { type: s }), n = window.URL.createObjectURL(r), i = document.createElement("a");
  i.href = n, i.download = e, i.style.display = "none", document.body.appendChild(i), i.dispatchEvent(new MouseEvent("click")), i.remove(), window.URL.revokeObjectURL(n);
};
function Z(t) {
  if (!t.startsWith("umb://")) throw new Error("udi does not start with umb://");
  const s = t.replace("umb://", "").split("/")[1];
  if (s.length !== 32) throw new Error("udi is not 32 chars");
  return `${s.substring(0, 8)}-${s.substring(8, 12)}-${s.substring(12, 16)}-${s.substring(16, 20)}-${s.substring(20)}`;
}
async function q(t, e) {
  if (!e)
    return t;
  const s = new URLSearchParams({
    width: e.width?.toString() ?? "",
    height: e.height?.toString() ?? "",
    mode: e.mode ?? ""
  });
  return `${t}?${s.toString()}`;
}
class _ extends f {
  constructor() {
    super(...arguments), this._rules = new d([], (e) => e.unique), this.rules = this._rules.asObservable(), this.hasRules = this._rules.asObservablePart((e) => e.length > 0), this._fallback = !1;
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
class U extends _ {
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
function S(t, e) {
  return t.variantId?.compare(e) || t.variantId === void 0;
}
class X extends U {
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
    return P([this.rules, e], ([s, r]) => r ? this.#e(s, r) : !1);
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
    return e.filter((r) => r.permitted === !1).some((r) => S(r, s)) ? !1 : e.filter((r) => r.permitted === !0).some((r) => S(r, s)) ? !0 : this._fallback;
  }
}
function K(t, e, s) {
  return s = O(s, 0, 1), t * (1 - s) + e * s;
}
function Y(t, e, s) {
  return t === e ? 0 : (s - t) / (e - t);
}
function J(t, e) {
  return Math.abs(t - e);
}
function Q(t, e) {
  return e < 0 || e >= 1 ? NaN : t / (1 - e);
}
function ee(t, e) {
  const s = [0];
  e.reduce((a, l, u) => s[u + 1] = a + l, 0);
  const r = s.reduce((a, l) => {
    const u = Math.abs(a - t), h = Math.abs(l - t);
    return u === h ? a < l ? a : l : h < u ? l : a;
  }), n = s.indexOf(r), i = t - r;
  let o = n;
  if (!(i < 0 && n === 0)) {
    if (!(i > 0 && n === s.length - 1)) {
      const a = e[i >= 0 ? n : n - 1];
      o += a === 0 ? o : i / a;
    }
  }
  return o;
}
function te(t, e) {
  const s = Math.min(t, e.length);
  let r = 0, n = 0;
  for (; r < s; )
    n += e[r++];
  return n;
}
function se(t, e, s, r = 0) {
  return t > s.left - r && t < s.right + r && e > s.top - r && e < s.bottom + r;
}
function re(t, e) {
  const s = new Image(), r = new Promise(
    (n, i) => {
      s.onload = () => {
        const o = s.naturalWidth, a = s.naturalHeight;
        let l = o, u = a;
        if (e?.maxWidth && e.maxWidth > 0 || e?.maxHeight && e.maxHeight > 0) {
          const h = e?.maxWidth ? e.maxWidth / o : 1, p = e?.maxHeight ? e.maxHeight / a : 1, m = Math.min(h, p, 1);
          l = Math.round(o * m), u = Math.round(a * m);
        }
        n({ width: l, height: u, naturalWidth: o, naturalHeight: a });
      }, s.onerror = i;
    }
  );
  return s.src = t, r;
}
function y(t, e) {
  const s = { ...e };
  for (const r in t)
    Object.prototype.hasOwnProperty.call(t, r) && t[r] !== void 0 && (t[r]?.constructor === Object && e[r]?.constructor === Object ? s[r] = y(t[r], e[r]) : s[r] = t[r]);
  return s;
}
class ne extends EventTarget {
  constructor() {
    super(...arguments), this.#e = {
      totalItems: 0,
      totalPages: 1,
      currentPage: 1
    }, this.#t = new c(10), this.pageSize = this.#t.asObservable(), this.#r = new c(this.#e.totalItems), this.totalItems = this.#r.asObservable(), this.#s = new c(this.#e.totalPages), this.totalPages = this.#s.asObservable(), this.#n = new c(this.#e.currentPage), this.currentPage = this.#n.asObservable(), this.#i = new c(0), this.skip = this.#i.asObservable();
  }
  #e;
  #t;
  #r;
  #s;
  #n;
  #i;
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
    return this.#r.getValue();
  }
  /**
   * Sets the total number of items and recalculates the total number of pages
   * @param {number} totalItems
   * @memberof UmbPaginationManager
   */
  setTotalItems(e) {
    this.#r.setValue(e), this.#a();
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
    return this.#n.getValue();
  }
  /**
   * Sets the current page number
   * @param {number} pageNumber
   * @memberof UmbPaginationManager
   */
  setCurrentPageNumber(e) {
    e < 1 && (e = 1), e > this.#s.getValue() && (e = this.#s.getValue()), this.#n.setValue(e), this.#o(), this.dispatchEvent(new V());
  }
  /**
   * Gets the number of items to skip
   * @returns {number}
   * @memberof UmbPaginationManager
   */
  getSkip() {
    return this.#i.getValue();
  }
  /**
   * Clears the pagination manager values and resets them to their default values
   * @memberof UmbPaginationManager
   */
  clear() {
    this.#r.setValue(this.#e.totalItems), this.#s.setValue(this.#e.totalPages), this.#n.setValue(this.#e.currentPage), this.#i.setValue(0);
  }
  /**
   * Calculates the total number of pages
   * @memberof UmbPaginationManager
   */
  #a() {
    let e = Math.ceil(this.#r.getValue() / this.#t.getValue());
    e = e === 0 ? 1 : e, this.#s.setValue(e), this.getCurrentPageNumber() > e && this.setCurrentPageNumber(e);
  }
  #o() {
    const e = Math.max(0, (this.#n.getValue() - 1) * this.#t.getValue());
    this.#i.setValue(e);
  }
}
function I(t, e) {
  const s = new URL(t, window.location.origin);
  return s.origin === window.location.origin ? s : e ? new URL(e) : new URL(window.location.origin);
}
function ie(t) {
  return t.endsWith("/") ? t : t + "/";
}
function ae(t, e = globalThis.window) {
  try {
    const s = e.opener;
    if (!s)
      return !1;
    const r = s.location, n = e.location;
    return !(r.origin !== n.origin || typeof t < "u" && !r.pathname.startsWith(t));
  } catch {
    return !1;
  }
}
const oe = (t) => decodeURIComponent(t), M = (t) => encodeURIComponent(t).replaceAll(".", "%2E").replaceAll(":", "%3A"), le = (t) => M(t), ue = (t) => {
  const e = t.replace(/([A-Z])/g, " $1");
  return e.charAt(0).toUpperCase() + e.slice(1);
}, A = (t) => {
  const e = t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase()).join("");
  return e && e.slice(0, 1).toLowerCase() + e.slice(1) || "";
};
function x(t) {
  return A(t);
}
function ce(t) {
  return t.replace(/(\d*)$/, (e, s) => (+s + 1).toString().padStart(s.length, "0"));
}
function he(t, e = ",") {
  return t ? t.split(e).map((s) => s.trim()).filter((s) => s.length > 0) ?? [] : [];
}
function ge(t, e) {
  return Array.isArray(t) ? t.indexOf(e) !== -1 : t === e;
}
function fe(t, e) {
  return Array.isArray(t) ? t.some((s) => e.indexOf(s) !== -1) : e.indexOf(t) !== -1;
}
const de = x;
function me(t) {
  return t.startsWith("/") ? t.slice(1) : t;
}
function be(t) {
  return t.endsWith("/") ? t.slice(void 0, -1) : t;
}
const g = "umb:auth:redirect";
function we() {
  let t = "";
  const e = sessionStorage.getItem(g);
  return e && (sessionStorage.removeItem(g), t = e.endsWith("logout") ? t : e), t ? I(t) : null;
}
function Se(t) {
  const e = new URL(t, window.location.origin);
  e.origin === window.location.origin && sessionStorage.setItem(g, e.toString());
}
function pe(t) {
  return t?.indexOf("~/") === 0 && (t = t.slice(1)), t?.indexOf("/wwwroot/") === 0 && (t = t.slice(8)), t;
}
function Pe(t, e = "v1") {
  return `/umbraco/management/api/${e}${t}`;
}
const C = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, L = /([^#-~| |!])/g;
function Oe(t) {
  return typeof t != "string" && !(t instanceof String) ? t : t.toString().replace(/&/g, "&amp;").replace(C, function(e) {
    const s = e.charCodeAt(0), r = e.charCodeAt(1);
    return "&#" + ((s - 55296) * 1024 + (r - 56320) + 65536) + ";";
  }).replace(L, function(e) {
    return "&#" + e.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ve(t) {
  return E.sanitize(t);
}
class ve extends f {
  constructor(e) {
    super(e), this.#e = new b(!0), this.selectable = this.#e.asObservable(), this.#t = new d([], (s) => s), this.selection = this.#t.asObservable(), this.hasSelection = this.#t.asObservablePart((s) => s.length > 0), this.#r = new b(!1), this.multiple = this.#r.asObservable(), this.#s = (s) => !0;
  }
  #e;
  #t;
  #r;
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
    e.forEach((r) => {
      if (this.#s(r) === !1)
        throw new Error(`${r} is now allowed to be selected`);
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
    return this.#r.getValue();
  }
  /**
   * Sets whether multiple items can be selected.
   * @param {boolean} value
   * @memberof UmbSelectionManager
   */
  setMultiple(e) {
    if (this.#r.setValue(e), e === !1 && this.getSelection().length > 1) {
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
    this.#t.setValue(s), this.getHostElement().dispatchEvent(new v(e)), this.getHostElement().dispatchEvent(new w());
  }
  /**
   * Removes the given unique id from the current selection.
   * @param {(ValueType)} unique
   * @memberof UmbSelectionManager
   */
  deselect(e) {
    if (this.getSelectable() === !1) return;
    const s = this.getSelection().filter((r) => r !== e);
    this.#t.setValue(s), this.getHostElement().dispatchEvent(new R(e)), this.getHostElement().dispatchEvent(new w());
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
class T extends f {
  /**
   * Creates an instance of UmbStateManager.
   * @param {UmbControllerHost} host
   * @memberof UmbStateManager
   */
  constructor(e) {
    super(e), this._states = new d([], (s) => s.unique), this.states = this._states.asObservable(), this.isOn = this._states.asObservablePart((s) => s.length > 0), this.isOff = this._states.asObservablePart((s) => s.length === 0);
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
class D extends T {
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
class Re extends D {
}
export {
  g as UMB_STORAGE_REDIRECT_URL,
  Ue as UmbDeprecation,
  z as UmbDirection,
  _ as UmbGuardManagerBase,
  ne as UmbPaginationManager,
  U as UmbReadOnlyGuardManager,
  D as UmbReadOnlyStateManager,
  X as UmbReadOnlyVariantGuardManager,
  Re as UmbReadOnlyVariantStateManager,
  ve as UmbSelectionManager,
  T as UmbStateManager,
  le as aliasToPath,
  $ as batchArray,
  j as blobDownload,
  Q as calculateExtrapolatedValue,
  Ae as clamp,
  G as debounce,
  oe as decodeFilePath,
  Ie as diffWords,
  J as distance,
  M as encodeFilePath,
  I as ensureLocalPath,
  ie as ensurePathEndsWithSlash,
  Oe as escapeHTML,
  N as formatBytes,
  ue as fromCamelCase,
  x as generateAlias,
  te as getAccumulatedValueOfIndex,
  Z as getGuidFromUdi,
  ee as getInterpolatedIndexOfPositionInWeightMap,
  q as getProcessedImageUrl,
  ae as hasOwnOpener,
  re as imageSize,
  ce as incrementString,
  Y as inverseLerp,
  se as isWithinRect,
  K as lerp,
  de as pathFolderName,
  me as removeInitialSlashFromPath,
  be as removeLastSlashFromPath,
  we as retrieveStoredPath,
  Ve as sanitizeHTML,
  Se as setStoredPath,
  he as splitStringToArray,
  ge as stringOrStringArrayContains,
  fe as stringOrStringArrayIntersects,
  A as toCamelCase,
  pe as transformServerPathToClientPath,
  y as umbDeepMerge,
  Ce as umbUrlPatternToString,
  Pe as umbracoPath
};
//# sourceMappingURL=index.js.map

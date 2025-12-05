import { css as C, property as n, state as E, customElement as g, when as H, unsafeHTML as M, html as h, nothing as q } from "@umbraco-cms/backoffice/external/lit";
import { escapeHTML as G } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as _ } from "@umbraco-cms/backoffice/lit-element";
import { filter as A, distinctUntilChanged as S, switchMap as j, map as J, from as Z, catchError as K, of as Q } from "@umbraco-cms/backoffice/external/rxjs";
import { loadManifestPlainJs as X, hasDefaultExport as Y } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as I } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_DEFAULT_LOCALIZATION_CULTURE as U, umbLocalizationManager as N } from "@umbraco-cms/backoffice/localization-api";
import { UmbStringState as k } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as tt } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as et } from "@umbraco-cms/backoffice/validation";
var rt = Object.defineProperty, st = Object.getOwnPropertyDescriptor, y = (s, t, r, e) => {
  for (var a = e > 1 ? void 0 : e ? st(t, r) : t, o = s.length - 1, i; o >= 0; o--)
    (i = s[o]) && (a = (e ? i(t, r, a) : i(a)) || a);
  return e && a && rt(t, r, a), a;
};
let m = class extends _ {
  constructor() {
    super(...arguments), this.debug = !1;
  }
  get text() {
    const s = (this.args ?? []).map((r) => G(r)), t = this.localize.term(this.key, ...s);
    return t === this.key ? (this.getHostElement().setAttribute("data-localize-missing", this.key), "") : (this.getHostElement().removeAttribute("data-localize-missing"), t.trim());
  }
  render() {
    return H(
      this.text,
      (s) => M(s),
      () => this.debug ? h`<span style="color:red">${this.key}</span>` : h`<slot></slot>`
    );
  }
};
m.styles = [
  C`
			:host {
				display: contents;
			}
		`
];
y([
  n()
], m.prototype, "key", 2);
y([
  n({ type: Array })
], m.prototype, "args", 2);
y([
  n({ type: Boolean })
], m.prototype, "debug", 2);
y([
  E()
], m.prototype, "text", 1);
m = y([
  g("umb-localize")
], m);
var at = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, V = (s) => {
  throw TypeError(s);
}, $ = (s, t, r, e) => {
  for (var a = e > 1 ? void 0 : e ? ot(t, r) : t, o = s.length - 1, i; o >= 0; o--)
    (i = s[o]) && (a = (e ? i(t, r, a) : i(a)) || a);
  return e && a && at(t, r, a), a;
}, it = (s, t, r) => t.has(s) || V("Cannot " + r), nt = (s, t, r) => t.has(s) ? V("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, r), lt = (s, t, r) => (it(s, t, "access private method"), r), D, F;
let f = class extends _ {
  constructor() {
    super(...arguments), nt(this, D), this.skipDuration = !1;
  }
  updated() {
    lt(this, D, F).call(this);
  }
  render() {
    return this.date ? this.localize.date(this.date, this.options) : q;
  }
};
D = /* @__PURE__ */ new WeakSet();
F = function() {
  if (this.skipDuration)
    return;
  let s = "";
  if (this.date) {
    const t = /* @__PURE__ */ new Date(), r = new Date(this.date), e = this.localize.duration(r, t);
    s = this.localize.term("general_duration", e, r, t);
  }
  this.title = s;
};
f.styles = [
  C`
			:host {
				display: contents;
			}
		`
];
$([
  n({ type: String })
], f.prototype, "date", 2);
$([
  n({ type: Object })
], f.prototype, "options", 2);
$([
  n({ type: Boolean })
], f.prototype, "skipDuration", 2);
f = $([
  g("umb-localize-date")
], f);
var ut = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, z = (s, t, r, e) => {
  for (var a = e > 1 ? void 0 : e ? ct(t, r) : t, o = s.length - 1, i; o >= 0; o--)
    (i = s[o]) && (a = (e ? i(t, r, a) : i(a)) || a);
  return e && a && ut(t, r, a), a;
};
let v = class extends _ {
  get text() {
    return this.localize.number(this.number, this.options);
  }
  render() {
    return this.number ? h`${M(this.text)}` : h`<slot></slot>`;
  }
};
v.styles = [
  C`
			:host {
				display: contents;
			}
		`
];
z([
  n()
], v.prototype, "number", 2);
z([
  n()
], v.prototype, "options", 2);
z([
  E()
], v.prototype, "text", 1);
v = z([
  g("umb-localize-number")
], v);
var pt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, w = (s, t, r, e) => {
  for (var a = e > 1 ? void 0 : e ? ht(t, r) : t, o = s.length - 1, i; o >= 0; o--)
    (i = s[o]) && (a = (e ? i(t, r, a) : i(a)) || a);
  return e && a && pt(t, r, a), a;
};
let d = class extends _ {
  constructor() {
    super(...arguments), this.unit = "seconds";
  }
  get text() {
    return this.localize.relativeTime(this.time, this.unit, this.options);
  }
  render() {
    return this.time ? h`${M(this.text)}` : h`<slot></slot>`;
  }
};
d.styles = [
  C`
			:host {
				display: contents;
			}
		`
];
w([
  n({ type: Number })
], d.prototype, "time", 2);
w([
  n({ type: Object })
], d.prototype, "options", 2);
w([
  n()
], d.prototype, "unit", 2);
w([
  E()
], d.prototype, "text", 1);
d = w([
  g("umb-localize-relative-time")
], d);
function B(s, t, r) {
  for (const [e, a] of Object.entries(r))
    s[`${t}_${e}`] = a;
}
class mt {
  constructor(t) {
    this.#t = new k(
      document.documentElement.lang !== "" ? document.documentElement.lang : U
    ), this.currentLanguage = this.#t.asObservable(), this.#r = async (e) => {
      const a = {};
      if (e.meta.localizations)
        for (const [o, i] of Object.entries(e.meta.localizations))
          B(a, o, i);
      if (e.js) {
        const o = await X(e.js);
        if (o && Y(o))
          for (const [i, l] of Object.entries(o.default))
            B(a, i, l);
      }
      return {
        $code: e.meta.culture.toLowerCase(),
        $dir: e.meta.direction ?? "ltr",
        $weight: e.weight ?? 100,
        ...a
      };
    };
    let r;
    this.#e = this.currentLanguage.pipe(
      // Ensure the current language is not empty
      A((e) => !!e),
      // Use distinctUntilChanged to avoid unnecessary re-renders when the language hasn't changed
      S(),
      // Switch to the extensions registry to get the current language and the extensions for that language
      // Note: This also cancels the previous subscription if the language changes
      j((e) => t.byType("localization").pipe(
        // Filter the extensions to only those that match the current language
        J((a) => (r = new Intl.Locale(e), a.filter(
          (o) => o.meta.culture.toLowerCase() === r.baseName.toLowerCase() || o.meta.culture.toLowerCase() === r.language.toLowerCase()
        )))
      )),
      // Ensure we only process extensions that are registered
      A((e) => e.length > 0),
      // Ensure we only process extensions that have not been loaded before
      S((e, a) => {
        const o = e.map((l) => l.alias).sort(), i = a.map((l) => l.alias).sort();
        return this.#a(o, i);
      }),
      // With switchMap, if a new language is selected before the previous translations finish loading,
      // the previous promise is canceled (unsubscribed), and only the latest one is processed.
      // This prevents race conditions and stale state.
      j(
        (e) => Z(
          (async () => {
            const a = await Promise.all(e.map(this.#r));
            a.length && (a.sort((o, i) => i.$weight - o.$weight), N.registerManyLocalizations(a), this.#s(r, a));
          })()
        )
      ),
      // Catch any errors that occur while loading the translations
      // This is important to ensure that the observable does not error out and stop the subscription
      K((e) => (console.error("Error loading translations:", e), Q([])))
    ).subscribe();
  }
  #t;
  /**
   * Get the current registered translations.
   * @returns {Map<string, UmbLocalizationSetBase>} Returns the registered translations
   */
  get localizations() {
    return N.localizations;
  }
  #e;
  #r;
  #s(t, r) {
    const e = t.baseName.toLowerCase();
    document.documentElement.lang.toLowerCase() !== e && (document.documentElement.lang = e);
    const a = r.slice().reverse(), o = a.find((l) => l.$code.toLowerCase() === e);
    if (o) {
      document.documentElement.dir = o.$dir;
      return;
    }
    const i = a.find(
      (l) => l.$code.toLowerCase() === t.language.toLowerCase()
    );
    if (i) {
      document.documentElement.dir = i.$dir;
      return;
    }
    document.documentElement.dir !== "ltr" && (document.documentElement.dir = "ltr");
  }
  #a(t, r) {
    if (t.length !== r.length) return !1;
    for (let e = 0; e < t.length; e++)
      if (t[e] !== r[e]) return !1;
    return !0;
  }
  /**
   * Load a language from the extension registry.
   * @param {string} locale The locale to load.
   */
  loadLanguage(t) {
    const r = Intl.getCanonicalLocales(t)[0];
    this.#t.setValue(r);
  }
  destroy() {
    this.#e.unsubscribe();
  }
}
const Ot = new mt(I);
var dt = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, R = (s) => {
  throw TypeError(s);
}, x = (s, t, r, e) => {
  for (var a = e > 1 ? void 0 : e ? ft(t, r) : t, o = s.length - 1, i; o >= 0; o--)
    (i = s[o]) && (a = (e ? i(t, r, a) : i(a)) || a);
  return e && a && dt(t, r, a), a;
}, T = (s, t, r) => t.has(s) || R("Cannot " + r), c = (s, t, r) => (T(s, t, "read from private field"), r ? r.call(s) : t.get(s)), O = (s, t, r) => t.has(s) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, r), b = (s, t, r, e) => (T(s, t, "write to private field"), t.set(s, r), r), vt = (s, t, r) => (T(s, t, "access private method"), r), u, p, P, W;
let L = class extends et(
  _
) {
  constructor() {
    super(), O(this, P), O(this, u), O(this, p), this._options = [], this.observe(
      I.byType("localization"),
      (s) => {
        const t = s.filter((e) => !!e.meta.culture).map((e) => {
          const a = e.meta.culture.toLowerCase();
          return {
            name: this.localize.term(`uiCulture_${a}`),
            value: a
          };
        }), r = [...new Map(t.map((e) => [e.value, e])).values()];
        this._options = r.sort((e, a) => e.name.localeCompare(a.name));
      },
      "umbObserveLocalizationManifests"
    ), this.addValidator(
      "customError",
      () => this.localize.term("user_languageNotFound", c(this, u), this.value),
      () => !!c(this, u) && !c(this, p)
    ), this.addValidator(
      "customError",
      () => this.localize.term("user_languageNotFoundFallback", c(this, u), c(this, p)),
      () => !!c(this, u) && !!c(this, p)
    );
  }
  set value(s) {
    if (s && typeof s == "string") {
      const t = super.value;
      super.value = s.toLowerCase(), this.requestUpdate("value", t);
    }
  }
  get value() {
    return super.value;
  }
  firstUpdated(s) {
    if (super.firstUpdated(s), this.value && !this._options.find((r) => r.value === this.value)) {
      b(this, u, this.value);
      const r = new Intl.Locale(this.value);
      r.language ? this._options.find((a) => a.value === r.language) ? this.value = r.language : (b(this, p, r.language), this.value = U) : this.value = U;
    }
    this.addFormControlElement(this.shadowRoot.querySelector("uui-select")), this.checkValidity();
  }
  render() {
    return h`
			<uui-select
				.options=${this._options.map((s) => ({ ...s, selected: s.value == this.value }))}
				@change=${vt(this, P, W)}>
			</uui-select>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakSet();
W = function(s) {
  b(this, u, void 0), b(this, p, void 0), this.value = s.target.value.toString(), this.dispatchEvent(new tt());
};
x([
  E()
], L.prototype, "_options", 2);
x([
  n({ type: String })
], L.prototype, "value", 1);
L = x([
  g("umb-ui-culture-input")
], L);
export {
  mt as UmbLocalizationRegistry,
  L as UmbUiCultureInputElement,
  Ot as umbLocalizationRegistry
};
//# sourceMappingURL=index.js.map

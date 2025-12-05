import { UmbTextStyles as nt } from "@umbraco-cms/backoffice/style";
import { css as I, customElement as V, html as F, property as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { umbUrlPatternToString as st } from "@umbraco-cms/backoffice/utils";
import { UmbContextToken as H } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as U, UmbControllerBase as it } from "@umbraco-cms/backoffice/class-api";
import { UMB_MODAL_MANAGER_CONTEXT as rt } from "@umbraco-cms/backoffice/modal";
import { UmbStringState as y, mergeObservables as at } from "@umbraco-cms/backoffice/observable-api";
import { UUIEvent as G } from "@umbraco-cms/backoffice/external/uui";
import { UmbId as ot } from "@umbraco-cms/backoffice/id";
import { U as ie } from "../path-pattern.class-Dg95YGLM.js";
var ht = Object.getOwnPropertyDescriptor, ct = (e, t, n, s) => {
  for (var i = s > 1 ? void 0 : s ? ht(t, n) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (i = a(i) || i);
  return i;
};
let T = class extends W {
  render() {
    return F`
			<div class="uui-text">
				<h4><umb-localize key="routing_routeNotFoundTitle"></umb-localize></h4>
				<umb-localize key="routing_routeNotFoundDescription"></umb-localize>
			</div>
		`;
  }
};
T.styles = [
  nt,
  I`
			:host {
				display: block;
				width: 100%;
				height: 100%;
				min-width: 0;
			}

			:host > div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
				opacity: 0;
				animation: fadeIn 5s 5s forwards;
			}

			@keyframes fadeIn {
				100% {
					opacity: 100%;
				}
			}
		`
];
T = ct([
  V("umb-route-not-found")
], T);
const ut = "**", lt = "\\.\\.\\/", dt = /:([^\\/]+)/g, q = "router-slot", E = window, M = "native", ft = "prefix";
function mt(e, t) {
  e.dispatchEvent(new CustomEvent("changestate", { detail: t }));
}
function p(e, t) {
  E.dispatchEvent(new CustomEvent(e, { detail: t }));
}
function x(e, t, n, s) {
  const i = Array.isArray(t) ? t : [t];
  return i.forEach((r) => e.addEventListener(r, n, s)), () => i.forEach((r) => e.removeEventListener(r, n, s));
}
function pt(e) {
  e.forEach((t) => t());
}
const gt = [
  ["pushState", ["pushstate", "changestate"]],
  ["replaceState", ["replacestate", "changestate"]],
  ["forward", ["pushstate", "changestate"]],
  ["go", ["pushstate", "changestate"]],
  // We need to handle the popstate a little differently when it comes to the change state event.
  ["back", ["popstate"]]
];
function vt() {
  for (const [e, t] of gt)
    for (const n of t)
      _t(history, e, n);
  window.addEventListener("popstate", (e) => {
    if (K({ url: window.location.pathname, eventName: "popstate" })) {
      e.preventDefault(), e.stopPropagation();
      return;
    }
    setTimeout(() => p("changestate"), 0);
  });
}
function _t(e, t, n) {
  const s = e[t];
  Pt(e, t, s), e[t] = (...i) => {
    const r = i.length > 2 ? i[2] : null;
    K({ url: r, eventName: n }) || (s.apply(e, i), p(n));
  };
}
function Pt(e, t, n) {
  e[M] == null && (e[M] = {}), e[M][`${t}`] = n.bind(e);
}
function K(e) {
  return !E.dispatchEvent(
    new CustomEvent("willchangestate", {
      cancelable: !0,
      detail: e
    })
  );
}
const $ = document.createElement("a");
function z(e = {}) {
  return w(window.location.pathname, e);
}
function wt(e = {}) {
  return w(Rt(z(), Ct()), e);
}
function Ct(e = {}) {
  return Q(".", e);
}
function Q(e, t = {}) {
  return $.href = e, w($.pathname, t);
}
function Rt(e, t) {
  return e.replace(new RegExp(`^${t}`), "");
}
function X() {
  return window.location.search;
}
function Yt() {
  return yt(X().substring(1));
}
function v(e) {
  return w(e, { start: !1, end: !1 });
}
function jt(e) {
  return w(e, { start: !0, end: !0 });
}
function w(e, { start: t = !0, end: n = !0 } = {}) {
  return e = t && !e.startsWith("/") ? `/${e}` : !t && e.startsWith("/") ? e.slice(1) : e, n && !e.endsWith("/") ? `${e}/` : !n && e.endsWith("/") ? e.slice(0, e.length - 1) : e;
}
function yt(e) {
  if (e.length === 0)
    return {};
  const n = e.split("&").map((s) => s.split("="));
  return Object.assign(
    {},
    ...n.map((s) => ({
      [decodeURIComponent(s[0])]: s.length > 1 ? decodeURIComponent(s[1]) : ""
    }))
  );
}
function Jt(e) {
  return Object.entries(e).map(([t, n]) => `${t}${n != "" ? `=${encodeURIComponent(n)}` : ""}`).join("&");
}
function Zt(e, t = z()) {
  return new RegExp(`^${v(e)}(/|$)`, "gm").test(v(t));
}
function Et(e, t) {
  const n = [], s = v(
    e.path.replace(dt, (a, ...c) => (n.push(c[0]), "([^/]+)"))
  ), i = e.path === ut || e.path.length === 0 && e.pathMatch != "full" ? /^/ : (() => {
    switch (e.pathMatch || ft) {
      case "full":
        return new RegExp(`^${s}/?$`);
      case "suffix":
        return new RegExp(`^.*?${s}/?$`);
      case "fuzzy":
        return new RegExp(`^.*?${s}.*?$`);
      case "prefix":
      default:
        return new RegExp(`^[/]?${s}(?:/|$)`);
    }
  })(), r = t.match(i);
  if (r != null) {
    const a = n.reduce((u, d, f) => (u[d] = r[f + 1], u), {}), c = v(t.slice(0, r[0].length)), l = v(t.slice(r[0].length, t.length));
    return {
      route: e,
      match: r,
      params: a,
      fragments: {
        consumed: c,
        rest: l
      }
    };
  }
  return null;
}
function k(e, t) {
  for (const n of e) {
    const s = Et(n, t);
    if (s != null)
      return s;
  }
  return null;
}
async function bt(e, t) {
  let n = e.component;
  if (n instanceof Function)
    try {
      n = n();
    } catch (r) {
      if (!(r instanceof TypeError))
        throw r;
    }
  const s = await Promise.resolve(n);
  let i;
  return s instanceof HTMLElement ? i = s : i = new (s.default ? s.default : s.element ? s.element : s)(), e.setup != null && await e.setup(i, t), i;
}
function At(e) {
  return "redirectTo" in e;
}
function Lt(e) {
  return "resolve" in e;
}
function Mt(e) {
  const t = [e];
  for (; e.parent != null; )
    e = e.parent, t.push(e);
  const n = t.reduce((i, r) => ({ slot: r, child: i }), void 0), s = t.length;
  return { tree: n, depth: s };
}
function xt(e, t) {
  let n = e;
  const s = [];
  for (; n != null && n.slot.match != null && t > 0; )
    s.push(n.slot.match.fragments.consumed), n = n.child, t--;
  return s;
}
function Y(e, t = "") {
  const { tree: n, depth: s } = Mt(e);
  if (!t.startsWith("/")) {
    let i = 0;
    t.startsWith("./") && (t = t.slice(2));
    const r = t.match(new RegExp(lt, "g"));
    if (r != null) {
      i = r.length;
      const c = r.reduce((l, u) => l + u.length, 0);
      t = t.slice(c);
    }
    const a = xt(n, s - 1 - i).filter((c) => c.length > 0);
    t = `${a.join("/")}${a.length > 0 ? "/" : ""}${t}`;
  }
  return Q(t, { end: !1 });
}
function Tt(e, t) {
  history.replaceState(
    history.state,
    "",
    `${Y(e, t.redirectTo)}${t.preserveQuery ? X() : ""}`
  );
}
function O(e, t) {
  if (e == null)
    return !0;
  const { route: n, fragments: s } = e, { route: i, fragments: r } = t, a = n.path == i.path, c = s.consumed == r.consumed, l = n.unique === i.unique;
  return !c || !a || !l;
}
function St(e) {
  return j(e, q);
}
function j(e, t, n = 0, s = 0) {
  const i = e.getRootNode();
  if (s >= n) {
    const a = i.querySelector(t);
    if (a != null && a != e)
      return a;
  }
  const r = i.getRootNode();
  return r.host == null ? null : j(r.host, t, n, ++s);
}
function Ut() {
  const e = navigator.platform.toUpperCase().indexOf("WIN") !== -1;
  window.addEventListener("click", (t) => {
    if (e && t.ctrlKey || !e && t.metaKey) return;
    const n = "composedPath" in t ? t.composedPath().find((r) => r instanceof HTMLAnchorElement) : t.target;
    if (n == null || !(n instanceof HTMLAnchorElement) || !n.href.startsWith(location.origin) || n.target !== "" && n.target !== "_self" || n.dataset.routerSlot === "disabled")
      return;
    const i = n.pathname + n.search + n.hash;
    t.preventDefault(), history.pushState(null, "", i);
  });
}
function Nt(e) {
  return (t) => "/" + v(st(e, t)) + "/";
}
const D = document.createElement("div");
class $t extends U {
  constructor(t, n, s) {
    super(t, J), this.#t = [], this.#e = [], this.#n = new y(void 0), this.basePath = this.#n.asObservable(), this.#a = new y(void 0), this.activeLocalPath = this.#a.asObservable(), this.activePath = at([this.basePath, this.activeLocalPath], ([i, r]) => i + "/" + r), this.#u = (i) => {
      const r = this.#n.getValue();
      if (!r) return;
      const a = this.#a.getValue(), c = r.endsWith("/") ? r : r + "/", l = a ? a.endsWith("/") ? a : a + "/" : "", u = c + l + i.generateModalPath(), d = Nt(u);
      i._internal_setRouteBuilder(d);
    }, this.#s = s, this.consumeContext(rt, (i) => {
      this.#r = i, this.#h();
    });
  }
  #s;
  #t;
  #r;
  #e;
  #i;
  #n;
  #a;
  getBasePath() {
    return this.#n.getValue();
  }
  getActivePath() {
    return this.getBasePath() + "/" + this.#a;
  }
  registerModal(t) {
    this.#t.push(t), this.#u(t), this.#h();
  }
  unregisterModal(t) {
    const n = this.#t.indexOf(t);
    n !== -1 && (this.#t.splice(n, 1), this.#h());
  }
  #l(t) {
    return {
      __modalKey: t.key,
      unique: "umbModalKey_" + t.key,
      path: "/" + t.generateModalPath(),
      component: D,
      setup: async (n, s) => {
        if (!this.#r) return;
        const i = await t.routeSetup(
          this.#s,
          this.#r,
          s.match.params
        );
        i && i._internal_setCurrentModalPath(s.match.fragments.consumed);
      }
    };
  }
  _internal_removeModalPath(t) {
    if (t && window.location.href.includes(t)) {
      const n = this.#n.getValue() + "/" + this.#a.getValue();
      window.history.pushState({}, "", n);
    }
  }
  #h() {
    const t = this.#t.filter(
      (i) => !this.#e.find((r) => i.key === r.__modalKey)
    ), n = this.#e.filter(
      (i) => !this.#t.find((r) => r.key === i.__modalKey)
    );
    n.some((i) => i.path === this.#i ? (this.#r?.close(i.__modalKey), !0) : !1);
    const s = this.#e.filter((i) => !n.includes(i));
    this.#e = [
      ...s,
      ...t.map((i) => this.#l(i))
    ], this.#e.push({
      __modalKey: "_empty_",
      unique: "umbEmptyModal",
      path: "",
      component: D
    }), this.#s.routes = this.#e, this.#s.render();
  }
  _internal_routerGotBasePath(t) {
    this.#n.getValue() !== t && (this.#n.setValue(t), this.#c());
  }
  _internal_routerGotActiveLocalPath(t) {
    this.#a.getValue() !== t && (this.#a.setValue(t), this.#c());
  }
  // Also notice each registration should now hold its handler when its active.
  _internal_modalRouterChanged(t) {
    if (this.#i !== t) {
      if (this.#i) {
        const n = this.#t.find((s) => "/" + s.generateModalPath() === this.#i);
        n && this.#r?.close(n.key);
      }
      this.#i = t;
    }
  }
  #c() {
    this.#t.forEach(this.#u);
  }
  #u;
  hostDisconnected() {
    super.hostDisconnected(), this._internal_modalRouterChanged(void 0);
  }
}
const J = new H("UmbRouterContext");
class b extends G {
  static {
    this.CHANGE = "change";
  }
  constructor() {
    super(b.CHANGE);
  }
}
class N extends G {
  static {
    this.INIT = "init";
  }
  constructor() {
    super(N.INIT);
  }
}
const A = new H("UmbRoutePathAddendum");
class kt extends U {
  constructor(t) {
    super(t, A), this.#s = new y(""), this.addendum = this.#s.asObservable();
  }
  #s;
}
var Ot = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, Z = (e) => {
  throw TypeError(e);
}, L = (e, t, n, s) => {
  for (var i = s > 1 ? void 0 : s ? Dt(t, n) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (i = (s ? a(t, n, i) : a(i)) || i);
  return s && i && Ot(t, n, i), i;
}, tt = (e, t, n) => t.has(e) || Z("Cannot " + n), o = (e, t, n) => (tt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), R = (e, t, n) => t.has(e) ? Z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), B = (e, t, n, s) => (tt(e, t, "write to private field"), t.set(e, n), n), h, m, P, g;
let _ = class extends W {
  constructor() {
    super(), R(this, h, document.createElement("router-slot")), R(this, m, document.createElement("router-slot")), R(this, P, !1), R(this, g, new $t(this, o(this, h), o(this, m))), this._onNavigationChanged = (e) => {
      if (e.detail.slot === o(this, h)) {
        const t = this._constructLocalRouterPath();
        this._activeLocalPath !== t && (this._activeLocalPath = t, o(this, g)._internal_routerGotActiveLocalPath(t), this.dispatchEvent(new b()));
      } else if (e.detail.slot === o(this, m)) {
        const t = o(this, m).match?.route.path ?? "";
        o(this, g)._internal_modalRouterChanged(t);
      }
    }, o(this, m).parent = o(this, h), o(this, m).style.display = "none", o(this, h).addEventListener("changestate", this._updateRouterPath.bind(this)), o(this, h).appendChild(document.createElement("slot"));
  }
  get routes() {
    return o(this, h).routes;
  }
  set routes(e) {
    e ??= [];
    const t = o(this, h).routes;
    (e.length !== t?.length || e.filter((n) => t?.findIndex((s) => s.path === n.path) === -1).length > 0) && (o(this, h).routes = e);
  }
  get parent() {
    return o(this, h).parent;
  }
  set parent(e) {
    o(this, h).parent = e;
  }
  get absoluteRouterPath() {
    return this._routerPath;
  }
  get localActiveViewPath() {
    return this._activeLocalPath;
  }
  get absoluteActiveViewPath() {
    return this._routerPath + "/" + this._activeLocalPath;
  }
  _constructAbsoluteRouterPath() {
    return o(this, h).constructAbsolutePath("") || "";
  }
  _constructLocalRouterPath() {
    return o(this, h).match?.fragments.consumed ?? "";
  }
  connectedCallback() {
    this.inheritAddendum !== !0 && new kt(this), super.connectedCallback(), o(this, m).parent = o(this, h), o(this, P) === !1 && (window.addEventListener("navigationsuccess", this._onNavigationChanged), B(this, P, !0));
  }
  disconnectedCallback() {
    window.removeEventListener("navigationsuccess", this._onNavigationChanged), B(this, P, !1), o(this, g)._internal_modalRouterChanged(void 0), super.disconnectedCallback();
  }
  firstUpdated(e) {
    super.firstUpdated(e), this._updateRouterPath();
  }
  _updateRouterPath() {
    const e = this._constructAbsoluteRouterPath();
    if (this._routerPath !== e) {
      this._routerPath = e, o(this, g)._internal_routerGotBasePath(this._routerPath), this.dispatchEvent(new N());
      const t = this._constructLocalRouterPath();
      this._activeLocalPath !== t && (this._activeLocalPath = t, o(this, g)._internal_routerGotActiveLocalPath(this._activeLocalPath), this.dispatchEvent(new b()));
    }
  }
  render() {
    return F`${o(this, h)}${o(this, m)}`;
  }
};
h = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
_.styles = [
  I`
			:host {
				position: relative;
				height: 100%;
			}

			router-slot {
				height: 100%;
			}
		`
];
L([
  S({ type: Boolean, attribute: "inherit-addendum", reflect: !1 })
], _.prototype, "inheritAddendum", 2);
L([
  S({ attribute: !1 })
], _.prototype, "routes", 1);
L([
  S({ attribute: !1 })
], _.prototype, "parent", 1);
_ = L([
  V("umb-router-slot")
], _);
class te extends U {
  constructor(t) {
    super(t, A), this.#r = new y(void 0), this.addendum = this.#r.asObservable(), this.consumeContext(A, (n) => {
      this.observe(n?.addendum, (s) => {
        this.#s = s, this.#e();
      });
    }).skipHost();
  }
  #s;
  #t;
  #r;
  setAddendum(t) {
    this.#t = t, this.#e();
  }
  #e() {
    if (this.#s === void 0 || this.#t === void 0)
      return;
    const t = this.#t === "" || this.#s === "" ? this.#t : "/" + this.#t;
    this.#r.setValue(this.#s + t);
  }
}
const Bt = (e) => encodeURIComponent(e.toLowerCase().replace(/\s+/g, "-")).replace(/_/g, "-").replace(/\./g, "-").replace(/!/g, "-").replace(/~/g, "-").replace(/\*/g, "-").replace(/'/g, "").replace(/\(/g, "-").replace(/\)/g, "-");
class ee extends it {
  //
  #s;
  #t;
  #r;
  #e = /* @__PURE__ */ new Map();
  #i;
  #n;
  #a;
  #l;
  #h;
  #c;
  #u;
  #m;
  #o;
  #f;
  #p;
  /**
   * Creates an instance of UmbModalRouteRegistrationController.
   * @param {UmbControllerHost} host - The host element of the modal, this determine the ownership of the modal and the origin of it.
   * @param {UmbModalToken} alias - The alias of the modal, this is used to identify the modal.
   * @param {UmbControllerAlias} ctrlAlias - The alias for this controller, this is used to identify the controller.
   * @memberof UmbModalRouteRegistrationController
   */
  constructor(t, n, s) {
    super(t, s ?? n.toString()), this.#a = ot.new(), this.#h = n, this.consumeContext(A, (i) => {
      this.observe(
        i?.addendum,
        (r) => {
          this.#t = r, this.#d().catch(() => {
          });
        },
        "observeAddendum"
      );
    }), this.#s = this.consumeContext(J, (i) => {
      this.#i = i, this.#d().catch(() => {
      });
    }).asPromise({ preventTimeout: !0 });
  }
  /**
   * Appends an additional path to the modal route.
   *
   * This can help specify the URL for this modal, or used to add a parameter to the URL like this: "/modal/my-modal/:index/"
   * A folder name starting with a colon ":" will be interpreted as a parameter. Then this modal can open with any value in that location.
   * When modal is being setup the value of the parameter can be read from the route params. See the example:
   * @param {string} additionalPath - The additional path to be appended to the modal route
   * @returns {UmbModalRouteRegistrationController} this
   * @example <caption>Example of adding an additional path to the modal route</caption>
   * const modalRegistration = new UmbModalRouteRegistrationController(this, MY_MODAL_TOKEN)
   * modalRegistration.addAdditionalPath(':index')
   *
   * modalRegistration.onSetup((params) => {
   * 	const index = params.index;
   *  // When entering the url of: "/modal/my-modal/hello-world/"
   *  // Then index will be "hello-world"
   * }
   */
  addAdditionalPath(t) {
    return this.#r = t, this;
  }
  /**
   * Registerer one or more additional paths to the modal route, similar to addAdditionalPath. But without defining the actual path name. This enables this to be asynchronously defined and even changed later.
   * This can be useful if your modal has to be unique for this registration, avoiding collision with other registrations.
   * If you made a modal for editing one of multiple property, then you can add a unique path holding the property id.
   * Making the URL unique to this modal registration: /modal/my-modal/my-unique-value/
   *
   * Notice the modal will only be available when all unique paths have a value.
   * @param {Array<string>} uniquePathNames - the unique path names
   * @returns {UmbModalRouteRegistrationController} this
   * @example <caption>Example of adding an additional unique path to the modal route</caption>
   * const modalRegistration = new UmbModalRouteRegistrationController(this, MY_MODAL_TOKEN)
   * modalRegistration.addUniquePaths(['myAliasForIdentifyingThisPartOfThePath'])
   *
   * // Later:
   * modalRegistration.setUniquePathValue('myAliasForIdentifyingThisPartOfThePath', 'myValue');
   */
  addUniquePaths(t) {
    return t && t.forEach((n) => {
      this.#e.set(n, void 0);
    }), this;
  }
  /**
   * Set or change the value of a unique path part.
   * @param {string} identifier - the unique path part identifier
   * @param {value | undefined} value - the new value for the unique path part
   * @example <caption>Example of adding an additional unique path to the modal route</caption>
   * const modalRegistration = new UmbModalRouteRegistrationController(this, MY_MODAL_TOKEN)
   * modalRegistration.addUniquePaths(['first-one', 'another-one'])
   *
   * // Later:
   * modalRegistration.setUniquePathValue('first-one', 'myValue');
   */
  setUniquePathValue(t, n) {
    if (!this.#e.has(t))
      throw new Error(
        `Identifier ${t} was not registered at the construction of the modal registration controller, it has to be.`
      );
    this.#e.get(t) !== n && (this.#e.set(t, n), this.#d().catch(() => {
    }));
  }
  getUniquePathValue(t) {
    return this.#e.get(t);
  }
  async #d() {
    if (await this.#s, !this.#i || this.#t === void 0) return;
    const t = Array.from(this.#e.values());
    t.some((s) => s === void 0) && this.#g(), this.#t !== "" && t.unshift(this.#t), this.#r && t.push(this.#r);
    const n = t.join("/") ?? "";
    this.path === n && this.#n === this.#i || (this.#g(), this._setPath(n), this.#i.registerModal(this), this.#n = this.#i);
  }
  #g() {
    this.#i && this.#n && (this.#n.unregisterModal(this), this.#n = void 0);
  }
  hostConnected() {
    super.hostConnected(), this.#n || this.#d().catch(() => {
    });
  }
  hostDisconnected() {
    super.hostDisconnected(), this.#n && (this.#n.unregisterModal(this), this.#n = void 0);
  }
  get key() {
    return this.#a;
  }
  get alias() {
    return this.#h;
  }
  generateModalPath() {
    return `modal/${Bt(this.alias.toString())}${this.path && this.path !== "" ? `/${this.path}` : ""}`;
  }
  get path() {
    return this.#l;
  }
  _setPath(t) {
    this.#l = t;
  }
  /**
   * Returns true if the modal is currently active.
   * @returns {boolean} - true if the modal is currently active, false otherwise.
   */
  get active() {
    return !!this.#o;
  }
  open(t, n) {
    this.active || !this.#f || window.history.pushState({}, "", this.#f(t) + (n ? `${n}` : ""));
  }
  /**
   * Returns the modal context if the modal is currently active. Otherwise its undefined.
   * @returns {UmbModalContext | undefined} - modal context if the modal is active, otherwise undefined.
   */
  get modalContext() {
    return this.#o;
  }
  observeRouteBuilder(t) {
    return this.#p = t, this;
  }
  _internal_setRouteBuilder(t) {
    this.#i && (this.#f = t, this.#p?.(t));
  }
  onSetup(t) {
    return this.#c = t, this;
  }
  onSubmit(t) {
    return this.#u = t, this;
  }
  onReject(t) {
    return this.#m = t, this;
  }
  #v = (t) => {
    this.#u?.(t, this.#o?.data), this.#o = void 0;
  };
  #_ = () => {
    this.#m?.(), this.#o = void 0;
  };
  async routeSetup(t, n, s) {
    if (this.active) return;
    const i = this.#c ? await this.#c(s) : void 0;
    if (i !== !1) {
      const r = {
        modal: {},
        ...i,
        router: t
      };
      return r.modal.key = this.#a, this.#o = n.open(this, this.#h, r), this.#o.onSubmit().then(this.#v, this.#_), this.#o;
    }
  }
  destroy() {
    super.destroy(), this.#n = void 0, this.#e = void 0, this.#i = void 0;
  }
}
const et = document.createElement("template");
et.innerHTML = "<slot></slot>";
vt();
Ut();
class It extends HTMLElement {
  /**
   * Hooks up the element.
   */
  constructor() {
    super(), this.listeners = [], this._routes = [], this._lockParent = !1, this._routeMatch = null, this.addEventListener("router-slot:capture-parent", (n) => {
      n.stopPropagation(), n.detail.parent = this;
    }), this.render = this.render.bind(this), this.attachShadow({ mode: "open" }).appendChild(et.content.cloneNode(!0));
  }
  get routes() {
    return this._routes;
  }
  set routes(t) {
    this.clear(), this.add(t);
  }
  get parent() {
    return this._parent;
  }
  set parent(t) {
    this._lockParent = !0, this._setParent(t);
  }
  _setParent(t) {
    this._parent !== t && (this.detachListeners(), this._parent = t, this.attachListeners());
  }
  /**
   * Whether the router is a root router.
   */
  get isRoot() {
    return this.parent == null;
  }
  get match() {
    return this._routeMatch;
  }
  /**
   * The current route of the match.
   */
  get route() {
    return this.match != null ? this.match.route : null;
  }
  /**
   * The current path fragment of the match
   */
  get fragments() {
    return this.match != null ? this.match.fragments : null;
  }
  /**
   * The current params of the match.
   */
  get params() {
    return this.match != null ? this.match.params : null;
  }
  /**
   * Query the parent router slot when the router slot is connected.
   */
  connectedCallback() {
    if (!this._lockParent) {
      const t = new CustomEvent("router-slot:capture-parent", {
        composed: !0,
        bubbles: !0,
        detail: { parent: null }
      });
      this.parentNode ? (this.parentNode.dispatchEvent(t), this._setParent(t.detail.parent ?? null)) : this._setParent(null);
    }
    this.parent && requestAnimationFrame(() => {
      this.parent && this.parent.match !== null && this.match === null && this.render();
    });
  }
  /**
   * Tears down the element.
   */
  disconnectedCallback() {
    this._setParent(null), this._cancelNavigation?.(), this.detachListeners();
  }
  /**
   * Queries the parent router.
   */
  queryParentRouterSlot() {
    return St(this);
  }
  /**
   * Returns an absolute path relative to the router slot.
   * @param path
   */
  constructAbsolutePath(t) {
    return Y(this, t);
  }
  /**
   * Adds routes to the router.
   * Navigates automatically if the router slot is the root and is connected.
   * @param routes
   * @param navigate
   */
  add(t, n) {
    if (this._routes.push(...t), n === void 0 && this.isConnected) {
      const s = this.getRouteMatch();
      s && (n = O(this.match, s));
    }
    n ??= this.isRoot && this.isConnected, n && this.render();
  }
  /**
   * Removes all routes.
   */
  clear() {
    this._routes.length = 0;
  }
  /**
   * Each time the path changes, load the new path.
   */
  async render() {
    if (!this.isConnected)
      return;
    const t = this.getPathFragment();
    await this.renderPath(t);
  }
  getPathFragment() {
    return this.parent != null && this.parent.fragments != null ? this.parent.fragments.rest : wt();
  }
  getRouteMatch() {
    return k(this._routes, this.getPathFragment());
  }
  /**
   * Attaches listeners, either globally or on the parent router.
   */
  attachListeners() {
    this.listeners.push(
      this.parent != null ? (
        // Attach child router listeners
        x(this.parent, "changestate", this.render)
      ) : (
        // Add global listeners.
        x(E, "changestate", this.render)
      )
    );
  }
  /**
   * Clears the children in the DOM.
   */
  clearChildren() {
    for (; this.firstChild != null; )
      this.firstChild.destroy?.(), this.firstChild.parentNode.removeChild(this.firstChild);
  }
  /**
   * Detaches the listeners.
   */
  detachListeners() {
    pt(this.listeners);
  }
  /**
   * Notify the listeners.
   * @param info
   */
  notifyChildRouters(t) {
    this._routeMatch !== null && requestAnimationFrame(() => {
      mt(this, t);
    });
  }
  getRedirectDelay() {
    if ("connection" in navigator)
      switch ((navigator.connection || navigator.mozConnection || navigator.webkitConnection).effectiveType) {
        case "slow-2g":
        case "2g":
          return 1200;
        case "3g":
          return 800;
        case "4g":
          return 200;
      }
    return 400;
  }
  /**
   * Loads a new path based on the routes.
   * Returns true if a navigation was made to a new page.
   * @param path
   */
  async renderPath(t) {
    const n = k(this._routes, t);
    if (n == null)
      return this._routeMatch = null, !1;
    const { route: s } = n, i = { match: n, slot: this };
    try {
      const r = O(this.match, n);
      if (r) {
        this._cancelNavigation?.();
        let a = !1;
        const c = () => {
          a = !0, this._cancelNavigation = void 0;
        };
        this._cancelNavigation = c;
        const l = x(
          E,
          "changestate",
          c,
          {
            once: !0
          }
        ), u = () => {
          l();
        }, d = () => (u(), p("navigationcancel", i), p("navigationend", i), !1);
        if (p("navigationstart", i), s.guards != null) {
          for (const f of s.guards)
            if (!await f(i))
              return d();
        }
        if (this.notifyChildRouters(i), At(s)) {
          if (u(), s.awaitStability === !0) {
            const f = this.getRedirectDelay();
            if (await new Promise((C) => setTimeout(C, f)), a)
              return d();
          }
          return window.location.href.includes(this.constructAbsolutePath("")) ? (Tt(this, s), !1) : d();
        } else if (Lt(s)) {
          if (await s.resolve(i) === !1)
            return d();
        } else {
          const f = await bt(s, i);
          if (a)
            return d();
          const C = this.firstChild === f;
          C || this.clearChildren(), this._routeMatch = n, C || f && this.appendChild(f);
        }
        u();
      } else
        this.notifyChildRouters(i);
      return this._routeMatch = n, r && (p("navigationsuccess", i), p("navigationend", i)), r;
    } catch (r) {
      throw p("navigationerror", i), p("navigationend", i), r;
    }
  }
}
window.customElements.define(q, It);
export {
  ut as CATCH_ALL_WILDCARD,
  ft as DEFAULT_PATH_MATCH,
  E as GLOBAL_ROUTER_EVENTS_TARGET,
  M as HISTORY_PATCH_NATIVE_KEY,
  dt as PARAM_IDENTIFIER,
  q as ROUTER_SLOT_TAG_NAME,
  It as RouterSlot,
  lt as TRAVERSE_FLAG,
  J as UMB_ROUTE_CONTEXT,
  A as UMB_ROUTE_PATH_ADDENDUM_CONTEXT,
  ee as UmbModalRouteRegistrationController,
  ie as UmbPathPattern,
  $t as UmbRouteContext,
  T as UmbRouteNotFoundElement,
  te as UmbRoutePathAddendumContext,
  b as UmbRouterSlotChangeEvent,
  _ as UmbRouterSlotElement,
  N as UmbRouterSlotInitEvent,
  x as addListener,
  _t as attachCallback,
  Ct as basePath,
  Y as constructAbsolutePath,
  Q as constructPathWithBasePath,
  p as dispatchGlobalRouterEvent,
  mt as dispatchRouteChangeEvent,
  Bt as encodeFolderName,
  Ut as ensureAnchorHistory,
  vt as ensureHistoryEvents,
  jt as ensureSlash,
  xt as getFragments,
  Tt as handleRedirect,
  gt as historyPatches,
  Zt as isPathActive,
  At as isRedirectRoute,
  Lt as isResolverRoute,
  Et as matchRoute,
  k as matchRoutes,
  z as path,
  wt as pathWithoutBasePath,
  Yt as query,
  j as queryParentRoots,
  St as queryParentRouterSlot,
  X as queryString,
  pt as removeListeners,
  bt as resolvePageComponent,
  Pt as saveNativeFunction,
  O as shouldNavigate,
  w as slashify,
  v as stripSlash,
  Rt as stripStart,
  yt as toQuery,
  Jt as toQueryString,
  Mt as traverseRouterTree
};
//# sourceMappingURL=index.js.map

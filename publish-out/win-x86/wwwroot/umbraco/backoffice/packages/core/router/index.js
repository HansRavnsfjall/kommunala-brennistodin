import { UmbTextStyles as G } from "@umbraco-cms/backoffice/style";
import { css as U, customElement as N, html as $, property as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { umbUrlPatternToString as it } from "@umbraco-cms/backoffice/utils";
import { UmbContextToken as q } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as D, UmbControllerBase as rt } from "@umbraco-cms/backoffice/class-api";
import { UMB_MODAL_MANAGER_CONTEXT as at } from "@umbraco-cms/backoffice/modal";
import { UmbStringState as b, mergeObservables as ot } from "@umbraco-cms/backoffice/observable-api";
import { UUIEvent as z } from "@umbraco-cms/backoffice/external/uui";
import { UmbId as ht } from "@umbraco-cms/backoffice/id";
import { U as oe } from "../path-pattern.class-Dg95YGLM.js";
var ct = Object.getOwnPropertyDescriptor, ut = (e, t, n, i) => {
  for (var s = i > 1 ? void 0 : i ? ct(t, n) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (s = a(s) || s);
  return s;
};
let T = class extends O {
  render() {
    return $`
			<div class="uui-text">
				<h4><umb-localize key="routing_routeForbiddenTitle">Access denied</umb-localize></h4>
				<umb-localize key="routing_routeForbiddenDescription">
					You do not have permission to access this resource. Please contact your administrator for assistance.
				</umb-localize>
			</div>
		`;
  }
};
T.styles = [
  G,
  U`
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
				animation: fadeIn 2s 2s forwards;
			}

			@keyframes fadeIn {
				100% {
					opacity: 100%;
				}
			}
		`
];
T = ut([
  N("umb-route-forbidden")
], T);
var lt = Object.getOwnPropertyDescriptor, dt = (e, t, n, i) => {
  for (var s = i > 1 ? void 0 : i ? lt(t, n) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (s = a(s) || s);
  return s;
};
let S = class extends O {
  render() {
    return $`
			<div class="uui-text">
				<h4><umb-localize key="routing_routeNotFoundTitle"></umb-localize></h4>
				<umb-localize key="routing_routeNotFoundDescription"></umb-localize>
			</div>
		`;
  }
};
S.styles = [
  G,
  U`
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
S = dt([
  N("umb-route-not-found")
], S);
const ft = "**", mt = "\\.\\.\\/", pt = /:([^\\/]+)/g, K = "router-slot", R = window, x = "native", gt = "prefix";
function vt(e, t) {
  e.dispatchEvent(new CustomEvent("changestate", { detail: t }));
}
function p(e, t) {
  R.dispatchEvent(new CustomEvent(e, { detail: t }));
}
function M(e, t, n, i) {
  const s = Array.isArray(t) ? t : [t];
  return s.forEach((r) => e.addEventListener(r, n, i)), () => s.forEach((r) => e.removeEventListener(r, n, i));
}
function _t(e) {
  e.forEach((t) => t());
}
const Pt = [
  ["pushState", ["pushstate", "changestate"]],
  ["replaceState", ["replacestate", "changestate"]],
  ["forward", ["pushstate", "changestate"]],
  ["go", ["pushstate", "changestate"]],
  // We need to handle the popstate a little differently when it comes to the change state event.
  ["back", ["popstate"]]
];
function wt() {
  for (const [e, t] of Pt)
    for (const n of t)
      yt(history, e, n);
  window.addEventListener("popstate", (e) => {
    if (j({ url: window.location.pathname, eventName: "popstate" })) {
      e.preventDefault(), e.stopPropagation();
      return;
    }
    setTimeout(() => p("changestate"), 0);
  });
}
function yt(e, t, n) {
  const i = e[t];
  Ct(e, t, i), e[t] = (...s) => {
    const r = s.length > 2 ? s[2] : null;
    j({ url: r, eventName: n }) || (i.apply(e, s), p(n));
  };
}
function Ct(e, t, n) {
  e[x] == null && (e[x] = {}), e[x][`${t}`] = n.bind(e);
}
function j(e) {
  return !R.dispatchEvent(
    new CustomEvent("willchangestate", {
      cancelable: !0,
      detail: e
    })
  );
}
const B = document.createElement("a");
function Q(e = {}) {
  return w(window.location.pathname, e);
}
function bt(e = {}) {
  return w(Et(Q(), Rt()), e);
}
function Rt(e = {}) {
  return X(".", e);
}
function X(e, t = {}) {
  return B.href = e, w(B.pathname, t);
}
function Et(e, t) {
  return e.replace(new RegExp(`^${t}`), "");
}
function Y() {
  return window.location.search;
}
function Zt() {
  return At(Y().substring(1));
}
function v(e) {
  return w(e, { start: !1, end: !1 });
}
function te(e) {
  return w(e, { start: !0, end: !0 });
}
function w(e, { start: t = !0, end: n = !0 } = {}) {
  return e = t && !e.startsWith("/") ? `/${e}` : !t && e.startsWith("/") ? e.slice(1) : e, n && !e.endsWith("/") ? `${e}/` : !n && e.endsWith("/") ? e.slice(0, e.length - 1) : e;
}
function At(e) {
  if (e.length === 0)
    return {};
  const n = e.split("&").map((i) => i.split("="));
  return Object.assign(
    {},
    ...n.map((i) => ({
      [decodeURIComponent(i[0])]: i.length > 1 ? decodeURIComponent(i[1]) : ""
    }))
  );
}
function ee(e) {
  return Object.entries(e).map(([t, n]) => `${t}${n != "" ? `=${encodeURIComponent(n)}` : ""}`).join("&");
}
function ne(e, t = Q()) {
  return new RegExp(`^${v(e)}(/|$)`, "gm").test(v(t));
}
function Lt(e, t) {
  const n = [], i = v(
    e.path.replace(pt, (a, ...c) => (n.push(c[0]), "([^/]+)"))
  ), s = e.path === ft || e.path.length === 0 && e.pathMatch != "full" ? /^/ : (() => {
    switch (e.pathMatch || gt) {
      case "full":
        return new RegExp(`^${i}/?$`);
      case "suffix":
        return new RegExp(`^.*?${i}/?$`);
      case "fuzzy":
        return new RegExp(`^.*?${i}.*?$`);
      case "prefix":
      default:
        return new RegExp(`^[/]?${i}(?:/|$)`);
    }
  })(), r = t.match(s);
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
function F(e, t) {
  for (const n of e) {
    const i = Lt(n, t);
    if (i != null)
      return i;
  }
  return null;
}
async function xt(e, t) {
  let n = e.component;
  if (n instanceof Function)
    try {
      n = n();
    } catch (r) {
      if (!(r instanceof TypeError))
        throw r;
    }
  const i = await Promise.resolve(n);
  let s;
  return i instanceof HTMLElement ? s = i : s = new (i.default ? i.default : i.element ? i.element : i)(), e.setup != null && await e.setup(s, t), s;
}
function Mt(e) {
  return "redirectTo" in e;
}
function Tt(e) {
  return "resolve" in e;
}
function St(e) {
  const t = [e];
  for (; e.parent != null; )
    e = e.parent, t.push(e);
  const n = t.reduce((s, r) => ({ slot: r, child: s }), void 0), i = t.length;
  return { tree: n, depth: i };
}
function Ut(e, t) {
  let n = e;
  const i = [];
  for (; n != null && n.slot.match != null && t > 0; )
    i.push(n.slot.match.fragments.consumed), n = n.child, t--;
  return i;
}
function J(e, t = "") {
  const { tree: n, depth: i } = St(e);
  if (!t.startsWith("/")) {
    let s = 0;
    t.startsWith("./") && (t = t.slice(2));
    const r = t.match(new RegExp(mt, "g"));
    if (r != null) {
      s = r.length;
      const c = r.reduce((l, u) => l + u.length, 0);
      t = t.slice(c);
    }
    const a = Ut(n, i - 1 - s).filter((c) => c.length > 0);
    t = `${a.join("/")}${a.length > 0 ? "/" : ""}${t}`;
  }
  return X(t, { end: !1 });
}
function Nt(e, t) {
  history.replaceState(
    history.state,
    "",
    `${J(e, t.redirectTo)}${t.preserveQuery ? Y() : ""}`
  );
}
function V(e, t) {
  if (e == null)
    return !0;
  const { route: n, fragments: i } = e, { route: s, fragments: r } = t, a = n.path == s.path, c = i.consumed == r.consumed, l = n.unique === s.unique;
  return !c || !a || !l;
}
function $t(e) {
  return Z(e, K);
}
function Z(e, t, n = 0, i = 0) {
  const s = e.getRootNode();
  if (i >= n) {
    const a = s.querySelector(t);
    if (a != null && a != e)
      return a;
  }
  const r = s.getRootNode();
  return r.host == null ? null : Z(r.host, t, n, ++i);
}
function kt() {
  const e = navigator.platform.toUpperCase().indexOf("WIN") !== -1;
  window.addEventListener("click", (t) => {
    if (e && t.ctrlKey || !e && t.metaKey) return;
    const n = "composedPath" in t ? t.composedPath().find((r) => r instanceof HTMLAnchorElement) : t.target;
    if (n == null || !(n instanceof HTMLAnchorElement) || !n.href.startsWith(location.origin) || n.target !== "" && n.target !== "_self" || n.dataset.routerSlot === "disabled")
      return;
    const s = n.pathname + n.search + n.hash;
    t.preventDefault(), history.pushState(null, "", s);
  });
}
function Ot(e) {
  return (t) => "/" + v(it(e, t)) + "/";
}
const W = document.createElement("div");
class Dt extends D {
  constructor(t, n, i) {
    super(t, tt), this.#t = [], this.#e = [], this.#n = new b(void 0), this.basePath = this.#n.asObservable(), this.#a = new b(void 0), this.activeLocalPath = this.#a.asObservable(), this.activePath = ot([this.basePath, this.activeLocalPath], ([s, r]) => s + "/" + r), this.#u = (s) => {
      const r = this.#n.getValue();
      if (!r) return;
      const a = this.#a.getValue(), c = r.endsWith("/") ? r : r + "/", l = a ? a.endsWith("/") ? a : a + "/" : "", u = c + l + s.generateModalPath(), d = Ot(u);
      s._internal_setRouteBuilder(d);
    }, this.#s = i, this.consumeContext(at, (s) => {
      this.#r = s, this.#h();
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
      component: W,
      setup: async (n, i) => {
        if (!this.#r) return;
        const s = await t.routeSetup(
          this.#s,
          this.#r,
          i.match.params
        );
        s && s._internal_setCurrentModalPath(i.match.fragments.consumed);
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
      (s) => !this.#e.find((r) => s.key === r.__modalKey)
    ), n = this.#e.filter(
      (s) => !this.#t.find((r) => r.key === s.__modalKey)
    );
    n.some((s) => s.path === this.#i ? (this.#r?.close(s.__modalKey), !0) : !1);
    const i = this.#e.filter((s) => !n.includes(s));
    this.#e = [
      ...i,
      ...t.map((s) => this.#l(s))
    ], this.#e.push({
      __modalKey: "_empty_",
      unique: "umbEmptyModal",
      path: "",
      component: W
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
        const n = this.#t.find((i) => "/" + i.generateModalPath() === this.#i);
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
const tt = new q("UmbRouterContext");
class E extends z {
  static {
    this.CHANGE = "change";
  }
  constructor() {
    super(E.CHANGE);
  }
}
class I extends z {
  static {
    this.INIT = "init";
  }
  constructor() {
    super(I.INIT);
  }
}
const A = new q("UmbRoutePathAddendum");
class It extends D {
  constructor(t) {
    super(t, A), this.#s = new b(""), this.addendum = this.#s.asObservable();
  }
  #s;
}
var Bt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, et = (e) => {
  throw TypeError(e);
}, L = (e, t, n, i) => {
  for (var s = i > 1 ? void 0 : i ? Ft(t, n) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (s = (i ? a(t, n, s) : a(s)) || s);
  return i && s && Bt(t, n, s), s;
}, nt = (e, t, n) => t.has(e) || et("Cannot " + n), o = (e, t, n) => (nt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), C = (e, t, n) => t.has(e) ? et("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), H = (e, t, n, i) => (nt(e, t, "write to private field"), t.set(e, n), n), h, m, P, g;
let _ = class extends O {
  constructor() {
    super(), C(this, h, document.createElement("router-slot")), C(this, m, document.createElement("router-slot")), C(this, P, !1), C(this, g, new Dt(this, o(this, h), o(this, m))), this._onNavigationChanged = (e) => {
      if (e.detail.slot === o(this, h)) {
        const t = this._constructLocalRouterPath();
        this._activeLocalPath !== t && (this._activeLocalPath = t, o(this, g)._internal_routerGotActiveLocalPath(t), this.dispatchEvent(new E()));
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
    (e.length !== t?.length || e.filter((n) => t?.findIndex((i) => i.path === n.path) === -1).length > 0) && (o(this, h).routes = e);
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
    this.inheritAddendum !== !0 && new It(this), super.connectedCallback(), o(this, m).parent = o(this, h), o(this, P) === !1 && (window.addEventListener("navigationsuccess", this._onNavigationChanged), H(this, P, !0));
  }
  disconnectedCallback() {
    window.removeEventListener("navigationsuccess", this._onNavigationChanged), H(this, P, !1), o(this, g)._internal_modalRouterChanged(void 0), super.disconnectedCallback();
  }
  firstUpdated(e) {
    super.firstUpdated(e), this._updateRouterPath();
  }
  _updateRouterPath() {
    const e = this._constructAbsoluteRouterPath();
    if (this._routerPath !== e) {
      this._routerPath = e, o(this, g)._internal_routerGotBasePath(this._routerPath), this.dispatchEvent(new I());
      const t = this._constructLocalRouterPath();
      this._activeLocalPath !== t && (this._activeLocalPath = t, o(this, g)._internal_routerGotActiveLocalPath(this._activeLocalPath), this.dispatchEvent(new E()));
    }
  }
  render() {
    return $`${o(this, h)}${o(this, m)}`;
  }
};
h = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
_.styles = [
  U`
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
  k({ type: Boolean, attribute: "inherit-addendum", reflect: !1 })
], _.prototype, "inheritAddendum", 2);
L([
  k({ attribute: !1 })
], _.prototype, "routes", 1);
L([
  k({ attribute: !1 })
], _.prototype, "parent", 1);
_ = L([
  N("umb-router-slot")
], _);
class se extends D {
  constructor(t) {
    super(t, A), this.#r = new b(void 0), this.addendum = this.#r.asObservable(), this.consumeContext(A, (n) => {
      this.observe(n?.addendum, (i) => {
        this.#s = i, this.#e();
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
const Vt = (e) => encodeURIComponent(e.toLowerCase().replace(/\s+/g, "-")).replace(/_/g, "-").replace(/\./g, "-").replace(/!/g, "-").replace(/~/g, "-").replace(/\*/g, "-").replace(/'/g, "").replace(/\(/g, "-").replace(/\)/g, "-");
class ie extends rt {
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
  constructor(t, n, i) {
    super(t, i ?? n.toString()), this.#a = ht.new(), this.#h = n, this.consumeContext(A, (s) => {
      this.observe(
        s?.addendum,
        (r) => {
          this.#t = r, this.#d().catch(() => {
          });
        },
        "observeAddendum"
      );
    }), this.#s = this.consumeContext(tt, (s) => {
      this.#i = s, this.#i && this.#d().catch(() => {
      });
    }).asPromise({ preventTimeout: !0 }).catch(() => {
    });
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
    this.#e.get(t) !== n && (this.#e.set(t, n), this.#d());
  }
  getUniquePathValue(t) {
    return this.#e.get(t);
  }
  async #d() {
    if (await this.#s, !this.#i || this.#t === void 0) return;
    const t = Array.from(this.#e.values());
    t.some((i) => i === void 0) && this.#g(), this.#t !== "" && t.unshift(this.#t), this.#r && t.push(this.#r);
    const n = t.join("/") ?? "";
    this.path === n && this.#n === this.#i || (this.#g(), this._setPath(n), this.#i.registerModal(this), this.#n = this.#i);
  }
  #g() {
    this.#i && this.#n && (this.#n.unregisterModal(this), this.#n = void 0);
  }
  hostConnected() {
    super.hostConnected(), this.#n || this.#d();
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
    return `modal/${Vt(this.alias.toString())}${this.path && this.path !== "" ? `/${this.path}` : ""}`;
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
  // eslint-disable-next-line @typescript-eslint/naming-convention
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
  async routeSetup(t, n, i) {
    if (this.active) return;
    const s = this.#c ? await this.#c(i) : void 0;
    if (s !== !1) {
      const r = {
        modal: {},
        ...s,
        router: t
      };
      return r.modal.key = this.#a, this.#o = n.open(this, this.#h, r), this.#o.onSubmit().then(this.#v, this.#_), this.#o;
    }
  }
  destroy() {
    super.destroy(), this.#n = void 0, this.#e = void 0, this.#i = void 0;
  }
}
const st = document.createElement("template");
st.innerHTML = "<slot></slot>";
wt();
kt();
class Wt extends HTMLElement {
  /**
   * Hooks up the element.
   */
  constructor() {
    super(), this.listeners = [], this._routes = [], this._lockParent = !1, this._routeMatch = null, this.addEventListener("router-slot:capture-parent", (n) => {
      n.stopPropagation(), n.detail.parent = this;
    }), this.render = this.render.bind(this), this.attachShadow({ mode: "open" }).appendChild(st.content.cloneNode(!0));
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
    return $t(this);
  }
  /**
   * Returns an absolute path relative to the router slot.
   * @param path
   */
  constructAbsolutePath(t) {
    return J(this, t);
  }
  /**
   * Adds routes to the router.
   * Navigates automatically if the router slot is the root and is connected.
   * @param routes
   * @param navigate
   */
  add(t, n) {
    if (this._routes.push(...t), n === void 0 && this.isConnected) {
      const i = this.getRouteMatch();
      i && (n = V(this.match, i));
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
    return this.parent != null && this.parent.fragments != null ? this.parent.fragments.rest : bt();
  }
  getRouteMatch() {
    return F(this._routes, this.getPathFragment());
  }
  /**
   * Attaches listeners, either globally or on the parent router.
   */
  attachListeners() {
    this.listeners.push(
      this.parent != null ? (
        // Attach child router listeners
        M(this.parent, "changestate", this.render)
      ) : (
        // Add global listeners.
        M(R, "changestate", this.render)
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
    _t(this.listeners);
  }
  /**
   * Notify the listeners.
   * @param info
   */
  notifyChildRouters(t) {
    this._routeMatch !== null && requestAnimationFrame(() => {
      vt(this, t);
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
    const n = F(this._routes, t);
    if (n == null)
      return this._routeMatch = null, !1;
    const { route: i } = n, s = { match: n, slot: this };
    try {
      const r = V(this.match, n);
      if (r) {
        this._cancelNavigation?.();
        let a = !1;
        const c = () => {
          a = !0, this._cancelNavigation = void 0;
        };
        this._cancelNavigation = c;
        const l = M(
          R,
          "changestate",
          c,
          {
            once: !0
          }
        ), u = () => {
          l();
        }, d = () => (u(), p("navigationcancel", s), p("navigationend", s), !1);
        if (p("navigationstart", s), i.guards != null) {
          for (const f of i.guards)
            if (!await f(s))
              return d();
        }
        if (this.notifyChildRouters(s), Mt(i)) {
          if (u(), i.awaitStability === !0) {
            const f = this.getRedirectDelay();
            if (await new Promise((y) => setTimeout(y, f)), a)
              return d();
          }
          return window.location.href.includes(this.constructAbsolutePath("")) ? (Nt(this, i), !1) : d();
        } else if (Tt(i)) {
          if (await i.resolve(s) === !1)
            return d();
        } else {
          const f = await xt(i, s);
          if (a)
            return d();
          const y = this.firstChild === f;
          y || this.clearChildren(), this._routeMatch = n, y || f && this.appendChild(f);
        }
        u();
      } else
        this.notifyChildRouters(s);
      return this._routeMatch = n, r && (p("navigationsuccess", s), p("navigationend", s)), r;
    } catch (r) {
      throw p("navigationerror", s), p("navigationend", s), r;
    }
  }
}
window.customElements.define(K, Wt);
export {
  ft as CATCH_ALL_WILDCARD,
  gt as DEFAULT_PATH_MATCH,
  R as GLOBAL_ROUTER_EVENTS_TARGET,
  x as HISTORY_PATCH_NATIVE_KEY,
  pt as PARAM_IDENTIFIER,
  K as ROUTER_SLOT_TAG_NAME,
  Wt as RouterSlot,
  mt as TRAVERSE_FLAG,
  tt as UMB_ROUTE_CONTEXT,
  A as UMB_ROUTE_PATH_ADDENDUM_CONTEXT,
  ie as UmbModalRouteRegistrationController,
  oe as UmbPathPattern,
  Dt as UmbRouteContext,
  T as UmbRouteForbiddenElement,
  S as UmbRouteNotFoundElement,
  se as UmbRoutePathAddendumContext,
  E as UmbRouterSlotChangeEvent,
  _ as UmbRouterSlotElement,
  I as UmbRouterSlotInitEvent,
  M as addListener,
  yt as attachCallback,
  Rt as basePath,
  J as constructAbsolutePath,
  X as constructPathWithBasePath,
  p as dispatchGlobalRouterEvent,
  vt as dispatchRouteChangeEvent,
  Vt as encodeFolderName,
  kt as ensureAnchorHistory,
  wt as ensureHistoryEvents,
  te as ensureSlash,
  Ut as getFragments,
  Nt as handleRedirect,
  Pt as historyPatches,
  ne as isPathActive,
  Mt as isRedirectRoute,
  Tt as isResolverRoute,
  Lt as matchRoute,
  F as matchRoutes,
  Q as path,
  bt as pathWithoutBasePath,
  Zt as query,
  Z as queryParentRoots,
  $t as queryParentRouterSlot,
  Y as queryString,
  _t as removeListeners,
  xt as resolvePageComponent,
  Ct as saveNativeFunction,
  V as shouldNavigate,
  w as slashify,
  v as stripSlash,
  Et as stripStart,
  At as toQuery,
  ee as toQueryString,
  St as traverseRouterTree
};
//# sourceMappingURL=index.js.map

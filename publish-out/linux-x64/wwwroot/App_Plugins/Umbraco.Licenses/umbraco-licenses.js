var de = Object.defineProperty;
var ue = (t, e, s) => e in t ? de(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var G = (t, e, s) => ue(t, typeof e != "symbol" ? e + "" : e, s);
import { UMB_AUTH_CONTEXT as he } from "@umbraco-cms/backoffice/auth";
import { css as R, property as K, state as S, customElement as W, when as m, repeat as I, html as d, ifDefined as pe } from "@umbraco-cms/backoffice/external/lit";
import { tryExecute as F } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as me } from "@umbraco-cms/backoffice/notification";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
var fe = async (t, e) => {
  let s = typeof e == "function" ? await e(t) : e;
  if (s) return t.scheme === "bearer" ? `Bearer ${s}` : t.scheme === "basic" ? `Basic ${btoa(s)}` : s;
}, be = { bodySerializer: (t) => JSON.stringify(t, (e, s) => typeof s == "bigint" ? s.toString() : s) }, ve = (t) => {
  switch (t) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, ye = (t) => {
  switch (t) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, _e = (t) => {
  switch (t) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, X = ({ allowReserved: t, explode: e, name: s, style: a, value: l }) => {
  if (!e) {
    let r = (t ? l : l.map((o) => encodeURIComponent(o))).join(ye(a));
    switch (a) {
      case "label":
        return `.${r}`;
      case "matrix":
        return `;${s}=${r}`;
      case "simple":
        return r;
      default:
        return `${s}=${r}`;
    }
  }
  let n = ve(a), i = l.map((r) => a === "label" || a === "simple" ? t ? r : encodeURIComponent(r) : A({ allowReserved: t, name: s, value: r })).join(n);
  return a === "label" || a === "matrix" ? n + i : i;
}, A = ({ allowReserved: t, name: e, value: s }) => {
  if (s == null) return "";
  if (typeof s == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${t ? s : encodeURIComponent(s)}`;
}, Z = ({ allowReserved: t, explode: e, name: s, style: a, value: l }) => {
  if (l instanceof Date) return `${s}=${l.toISOString()}`;
  if (a !== "deepObject" && !e) {
    let r = [];
    Object.entries(l).forEach(([f, v]) => {
      r = [...r, f, t ? v : encodeURIComponent(v)];
    });
    let o = r.join(",");
    switch (a) {
      case "form":
        return `${s}=${o}`;
      case "label":
        return `.${o}`;
      case "matrix":
        return `;${s}=${o}`;
      default:
        return o;
    }
  }
  let n = _e(a), i = Object.entries(l).map(([r, o]) => A({ allowReserved: t, name: a === "deepObject" ? `${s}[${r}]` : r, value: o })).join(n);
  return a === "label" || a === "matrix" ? n + i : i;
}, ge = /\{[^{}]+\}/g, we = ({ path: t, url: e }) => {
  let s = e, a = e.match(ge);
  if (a) for (let l of a) {
    let n = !1, i = l.substring(1, l.length - 1), r = "simple";
    i.endsWith("*") && (n = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), r = "label") : i.startsWith(";") && (i = i.substring(1), r = "matrix");
    let o = t[i];
    if (o == null) continue;
    if (Array.isArray(o)) {
      s = s.replace(l, X({ explode: n, name: i, style: r, value: o }));
      continue;
    }
    if (typeof o == "object") {
      s = s.replace(l, Z({ explode: n, name: i, style: r, value: o }));
      continue;
    }
    if (r === "matrix") {
      s = s.replace(l, `;${A({ name: i, value: o })}`);
      continue;
    }
    let f = encodeURIComponent(r === "label" ? `.${o}` : o);
    s = s.replace(l, f);
  }
  return s;
}, Q = ({ allowReserved: t, array: e, object: s } = {}) => (a) => {
  let l = [];
  if (a && typeof a == "object") for (let n in a) {
    let i = a[n];
    if (i != null) if (Array.isArray(i)) {
      let r = X({ allowReserved: t, explode: !0, name: n, style: "form", value: i, ...e });
      r && l.push(r);
    } else if (typeof i == "object") {
      let r = Z({ allowReserved: t, explode: !0, name: n, style: "deepObject", value: i, ...s });
      r && l.push(r);
    } else {
      let r = A({ allowReserved: t, name: n, value: i });
      r && l.push(r);
    }
  }
  return l.join("&");
}, $e = (t) => {
  var s;
  if (!t) return "stream";
  let e = (s = t.split(";")[0]) == null ? void 0 : s.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => e.startsWith(a))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, xe = async ({ security: t, ...e }) => {
  for (let s of t) {
    let a = await fe(s, e.auth);
    if (!a) continue;
    let l = s.name ?? "Authorization";
    switch (s.in) {
      case "query":
        e.query || (e.query = {}), e.query[l] = a;
        break;
      case "cookie":
        e.headers.append("Cookie", `${l}=${a}`);
        break;
      case "header":
      default:
        e.headers.set(l, a);
        break;
    }
    return;
  }
}, H = (t) => Oe({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : Q(t.querySerializer), url: t.url }), Oe = ({ baseUrl: t, path: e, query: s, querySerializer: a, url: l }) => {
  let n = l.startsWith("/") ? l : `/${l}`, i = (t ?? "") + n;
  e && (i = we({ path: e, url: i }));
  let r = s ? a(s) : "";
  return r.startsWith("?") && (r = r.substring(1)), r && (i += `?${r}`), i;
}, J = (t, e) => {
  var a;
  let s = { ...t, ...e };
  return (a = s.baseUrl) != null && a.endsWith("/") && (s.baseUrl = s.baseUrl.substring(0, s.baseUrl.length - 1)), s.headers = Y(t.headers, e.headers), s;
}, Y = (...t) => {
  let e = new Headers();
  for (let s of t) {
    if (!s || typeof s != "object") continue;
    let a = s instanceof Headers ? s.entries() : Object.entries(s);
    for (let [l, n] of a) if (n === null) e.delete(l);
    else if (Array.isArray(n)) for (let i of n) e.append(l, i);
    else n !== void 0 && e.set(l, typeof n == "object" ? JSON.stringify(n) : n);
  }
  return e;
}, q = class {
  constructor() {
    G(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(t) {
    return typeof t == "number" ? this._fns[t] ? t : -1 : this._fns.indexOf(t);
  }
  exists(t) {
    let e = this.getInterceptorIndex(t);
    return !!this._fns[e];
  }
  eject(t) {
    let e = this.getInterceptorIndex(t);
    this._fns[e] && (this._fns[e] = null);
  }
  update(t, e) {
    let s = this.getInterceptorIndex(t);
    return this._fns[s] ? (this._fns[s] = e, t) : !1;
  }
  use(t) {
    return this._fns = [...this._fns, t], this._fns.length - 1;
  }
}, ze = () => ({ error: new q(), request: new q(), response: new q() }), Ce = Q({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), Se = { "Content-Type": "application/json" }, ee = (t = {}) => ({ ...be, headers: Se, parseAs: "auto", querySerializer: Ce, ...t }), Ue = (t = {}) => {
  let e = J(ee(), t), s = () => ({ ...e }), a = (i) => (e = J(e, i), s()), l = ze(), n = async (i) => {
    let r = { ...e, ...i, fetch: i.fetch ?? e.fetch ?? globalThis.fetch, headers: Y(e.headers, i.headers) };
    r.security && await xe({ ...r, security: r.security }), r.body && r.bodySerializer && (r.body = r.bodySerializer(r.body)), (r.body === void 0 || r.body === "") && r.headers.delete("Content-Type");
    let o = H(r), f = { redirect: "follow", ...r }, v = new Request(o, f);
    for (let p of l.request._fns) p && (v = await p(v, r));
    let ce = r.fetch, h = await ce(v);
    for (let p of l.response._fns) p && (h = await p(h, v, r));
    let U = { request: v, response: h };
    if (h.ok) {
      if (h.status === 204 || h.headers.get("Content-Length") === "0") return r.responseStyle === "data" ? {} : { data: {}, ...U };
      let p = (r.parseAs === "auto" ? $e(h.headers.get("Content-Type")) : r.parseAs) ?? "json";
      if (p === "stream") return r.responseStyle === "data" ? h.body : { data: h.body, ...U };
      let x = await h[p]();
      return p === "json" && (r.responseValidator && await r.responseValidator(x), r.responseTransformer && (x = await r.responseTransformer(x))), r.responseStyle === "data" ? x : { data: x, ...U };
    }
    let E = await h.text();
    try {
      E = JSON.parse(E);
    } catch {
    }
    let $ = E;
    for (let p of l.error._fns) p && ($ = await p(E, h, v, r));
    if ($ = $ || {}, r.throwOnError) throw $;
    return r.responseStyle === "data" ? void 0 : { error: $, ...U };
  };
  return { buildUrl: H, connect: (i) => n({ ...i, method: "CONNECT" }), delete: (i) => n({ ...i, method: "DELETE" }), get: (i) => n({ ...i, method: "GET" }), getConfig: s, head: (i) => n({ ...i, method: "HEAD" }), interceptors: l, options: (i) => n({ ...i, method: "OPTIONS" }), patch: (i) => n({ ...i, method: "PATCH" }), post: (i) => n({ ...i, method: "POST" }), put: (i) => n({ ...i, method: "PUT" }), request: n, setConfig: a, trace: (i) => n({ ...i, method: "TRACE" }) };
};
const L = Ue(ee({
  baseUrl: "http://localhost:63430",
  throwOnError: !0
}));
class te {
  static getUmbracoBackofficeApiLicensesAll(e) {
    return ((e == null ? void 0 : e.client) ?? L).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/backoffice/api/licenses/all",
      ...e
    });
  }
  static postUmbracoBackofficeApiLicensesValidate(e) {
    return ((e == null ? void 0 : e.client) ?? L).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/backoffice/api/licenses/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static postUmbracoLicensesValidatedLicenseRelay(e) {
    return ((e == null ? void 0 : e.client) ?? L).post({
      url: "/umbraco/licenses/validatedLicense/relay",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
}
const Ee = [
  {
    type: "dashboard",
    alias: "Umb.Licenses.Dashboard",
    name: "Umbraco Licenses Dashboard",
    elementName: "umb-licenses-dashboard",
    js: () => Promise.resolve().then(() => Ge),
    meta: {
      label: "#dashboardTabs_licenses",
      pathname: "licenses"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Settings"
      }
    ]
  }
], je = [...Ee], Le = [
  {
    type: "localization",
    alias: "Licenses.Localization.En_US",
    weight: -100,
    name: "English (US)",
    meta: {
      culture: "en"
    },
    js: () => import("./en-us.js")
  },
  {
    type: "localization",
    alias: "Licenses.Localization.En_GB",
    weight: -100,
    name: "English (UK)",
    meta: {
      culture: "en-gb"
    },
    js: () => import("./en-gb.js")
  }
], Te = [...Le];
var ke = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, se = (t) => {
  throw TypeError(t);
}, w = (t, e, s, a) => {
  for (var l = a > 1 ? void 0 : a ? Ae(e, s) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (l = (a ? i(e, s, l) : i(l)) || l);
  return a && l && ke(e, s, l), l;
}, V = (t, e, s) => e.has(t) || se("Cannot " + s), O = (t, e, s) => (V(t, e, "read from private field"), s ? s.call(t) : e.get(t)), j = (t, e, s) => e.has(t) ? se("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), P = (t, e, s, a) => (V(t, e, "write to private field"), e.set(t, s), s), u = (t, e, s) => (V(t, e, "access private method"), s), T, k, g, c, ie, ae, M, re, le, b;
const Ie = "umb-license-card";
let y = class extends N {
  constructor() {
    super(...arguments), j(this, c), j(this, T), this._loading = !1, this._features = [], this._variables = [], j(this, k), j(this, g);
  }
  connectedCallback() {
    var t, e;
    super.connectedCallback(), this.consumeContext(me, (s) => {
      P(this, T, s);
    }), this._features = Object.entries(((t = this.model) == null ? void 0 : t.features) ?? {}).map((s) => ({
      name: s[0],
      active: s[1]
    })), this._variables = Object.entries(((e = this.model) == null ? void 0 : e.variables) ?? {}).map((s) => ({
      name: s[0],
      value: s[1]
    })), u(this, c, M).call(this), u(this, c, ae).call(this), u(this, c, ie).call(this);
  }
  render() {
    var t, e, s, a, l, n, i, r;
    return d`
      <uui-box ?valid=${!O(this, g)}>
        <span slot="headline">${(t = this.model) == null ? void 0 : t.productId}</span>
        <uui-button
          slot="header-actions"
          id="validateBtn"
          look="secondary"
          compact
          @click=${u(this, c, re)}
          label=${this.localize.term("licenses_validate")}
          .state=${this._loading ? "waiting" : void 0}
        ></uui-button>
        <dl>
          ${m(
      (e = this.model) == null ? void 0 : e.licenseKey,
      () => {
        var o;
        return u(this, c, b).call(this, "licenses_licenseKey", "License key", (o = this.model) == null ? void 0 : o.licenseKey);
      }
    )}
          ${m(
      (a = (s = this.model) == null ? void 0 : s.domains) == null ? void 0 : a.length,
      () => {
        var o;
        return u(this, c, b).call(this, "licenses_licensedDomains", "Licensed domains", d`
              <ul>
                ${I(
          ((o = this.model) == null ? void 0 : o.domains) ?? [],
          (f) => f,
          (f) => d`
                    <li>
                      <span>
                        ${f}
                        ${m(
            f === O(this, k),
            () => d`<uui-tag color="positive"><umb-localize key="general_current">Current</umb-localize></uui-tag>`
          )}
                      </span>
                    </li>
                  `
        )}
              </ul>
            `, "domains");
      }
    )}
          ${m(
      this._features.length,
      () => u(this, c, b).call(this, "licenses_features", "Features", d`
              <ul>
                ${I(
        this._features,
        (o) => o.name,
        (o) => d`
                    <li class="feature-${o.active ? "active" : "inactive"}">
                      ${o.name}
                      <uui-icon
                        .name=${o.active ? "umb:check" : "umb:delete"}
                        class="license-icon color-${o.active ? "green" : "red"}"
                        ></uui-icon>
                    </li>
                  `
      )}
              </ul>
            `, "features")
    )}
          ${m(
      this._variables.length,
      () => u(this, c, b).call(this, "licenses_variables", "Variables", d`
              <ul>
                ${I(
        this._variables,
        (o) => o.name,
        (o) => d`<li>${o.name}: ${o.value}</li>`
      )}
              </ul>
            `, "variables")
    )}
          ${m(
      (l = this.model) == null ? void 0 : l.tier,
      () => {
        var o;
        return u(this, c, b).call(this, "licenses_tier", "Tier", (o = this.model) == null ? void 0 : o.tier);
      }
    )}
          ${m(
      (n = this.model) == null ? void 0 : n.expiresOn,
      () => {
        var o;
        return u(this, c, b).call(this, "licenses_expiresOn", "Expires on", (o = this.model) == null ? void 0 : o.expiresOn);
      }
    )}
          ${m(
      (i = this.model) == null ? void 0 : i.lastValidatedOn,
      () => {
        var o;
        return u(this, c, b).call(this, "licenses_lastValidated", "Last validated", (o = this.model) == null ? void 0 : o.lastValidatedOn);
      }
    )}
          ${m(
      (r = this.model) == null ? void 0 : r.lastSuccessfullyValidatedOn,
      () => {
        var o;
        return u(this, c, b).call(this, "licenses_lastSuccessfullyValidated", "Last successfully validated", (o = this.model) == null ? void 0 : o.lastSuccessfullyValidatedOn);
      }
    )}
          ${m(
      O(this, g),
      () => u(this, c, b).call(this, "general_error", "Error", O(this, g))
    )}
        </dl>
      </uui-box>
    `;
  }
};
T = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
ie = function() {
  var t, e;
  P(this, k, (e = (t = this.model) == null ? void 0 : t.domains) == null ? void 0 : e.find(
    (s) => {
      var a;
      return s.startsWith("*") ? (a = this.applicationUrl) == null ? void 0 : a.endsWith(s.substring(1)) : this.applicationUrl === s;
    }
  ));
};
ae = function() {
  var t, e, s, a;
  (e = (t = this.model) == null ? void 0 : t.lastResult) != null && e.startsWith("Valid") || P(this, g, this.localize.term(
    `licenses_validation${(s = this.model) == null ? void 0 : s.lastResult}`,
    [(a = this.model) == null ? void 0 : a.productId]
  ));
};
M = function() {
  ["lastValidatedOn", "lastSuccessfullyValidatedOn", "expiresOn"].forEach(
    (t) => {
      var e, s;
      (e = this.model) != null && e[t] && ((s = this.model) != null && s[t].endsWith("Z") || (this.model[t] += "Z"), this.model[t] = this.localize.date(this.model[t], {
        dateStyle: "medium",
        timeStyle: "short"
      }));
    }
  );
};
re = async function() {
  var e;
  this._loading = !0;
  const { data: t } = await F(
    this,
    te.postUmbracoBackofficeApiLicensesValidate({ body: { productId: (e = this.model) == null ? void 0 : e.productId } }),
    {
      disableNotifications: !0
    }
  );
  this._loading = !1, t.license && (t.success && (this.model = { ...this.model, ...t.license }, u(this, c, M).call(this)), u(this, c, le).call(this, t.status, t.success));
};
le = function(t, e) {
  var s, a;
  t && ((a = O(this, T)) == null || a.peek(e ? "positive" : "danger", {
    data: {
      message: this.localize.term(`licenses_validation${t}`, [
        (s = this.model) == null ? void 0 : s.productId
      ])
    }
  }));
};
b = function(t, e, s, a) {
  return d`
      <div id=${pe(a)}>
        <dt><umb-localize .key=${t}>${e}</umb-localize></dt>
        <dd>${s}</dd>
      </div>`;
};
y.styles = [
  R`
      :host {
        display: flex;
      }

      uui-box {
        --uui-color-divider-standalone: var(--uui-color-danger);

        width: 100%;
        border: 1px solid var(--uui-color-danger);
        box-shadow: 0 1px 3px rgba(191, 33, 78, 0.12),
          0 1px 2px rgba(191, 33, 78, 0.24);
      }

      uui-box[valid] {
        --uui-color-divider-standalone: var(--uui-color-positive);

        border-color: var(--uui-color-positive);
        box-shadow: 0 1px 3px rgba(25, 134, 74, 0.12),
          0 1px 2px rgba(25, 134, 74, 0.24);
      }

      ul,
      dl {
        margin: 0;
      }

      dl {
        list-style: none;
      }

      dl > div {
        display: flex;
        column-gap: var(--uui-size-3);
      }

      dl > div + div {
        margin-top: var(--uui-size-4);
      }

      dt {
        font-weight: 700;
        line-height: 1.3;
        min-width: 100px;
        max-width: 100px;
      }

      dd {
        word-break: break-word;
        line-height: 1.3;
      }

      dd ul {
        padding-left: 0;
      }

      li {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      li span {
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: var(--uui-size-2);
      }

      .license-icon {
        width: 1.4em;
        height: 1.4em;
      }

      .license-icon[name="umb:alert"] {
        color: var(--uui-color-danger-standalone);
      }

      uui-tag {
        --uui-type-small-size: 10px;
        --uui-size-space-1: 0;
        padding: 0 2px;
        text-transform: uppercase;
      }

      #domains,
      #features,
      #variables {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #domains dd,
      #features dd,
      #variables dd {
        overflow: hidden;
      }
    `
];
w([
  K({ type: Object })
], y.prototype, "model", 2);
w([
  K()
], y.prototype, "applicationUrl", 2);
w([
  S()
], y.prototype, "_loading", 2);
w([
  S()
], y.prototype, "_features", 2);
w([
  S()
], y.prototype, "_variables", 2);
y = w([
  W(Ie)
], y);
var qe = Object.defineProperty, De = Object.getOwnPropertyDescriptor, ne = (t) => {
  throw TypeError(t);
}, B = (t, e, s, a) => {
  for (var l = a > 1 ? void 0 : a ? De(e, s) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (l = (a ? i(e, s, l) : i(l)) || l);
  return a && l && qe(e, s, l), l;
}, oe = (t, e, s) => e.has(t) || ne("Cannot " + s), D = (t, e, s) => (oe(t, e, "read from private field"), s ? s.call(t) : e.get(t)), Re = (t, e, s) => e.has(t) ? ne("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), We = (t, e, s, a) => (oe(t, e, "write to private field"), e.set(t, s), s), _;
const Ne = "umb-licenses-grid";
let z = class extends N {
  constructor() {
    super(...arguments), this._licenses = [], this._loaded = !1, Re(this, _);
  }
  async connectedCallback() {
    super.connectedCallback();
    const { data: t, error: e } = await F(
      this,
      te.getUmbracoBackofficeApiLicensesAll(),
      {
        disableNotifications: !0
      }
    );
    if (e) {
      this._loaded = !0;
      return;
    }
    this._licenses = t.licenses, We(this, _, t.applicationUrl), this._loaded = !0;
  }
  render() {
    return d`
      ${m(
      !this._loaded,
      () => d`<div class="relative" style="grid-column: 1 / 5; margin-top: var(--uui-size-5);"><uui-loader></uui-loader></div>`,
      () => d`
          <div>
            <umb-localize
              key="licenses_validationUrl"
              .tokens=${[D(this, _)]}
              >Application URL used in validation request</umb-localize
            >: <strong>${D(this, _)}</strong>
          </div>
          ${m(
        this._licenses.length,
        () => d`
              <div id="grid">
              ${this._licenses.map(
          (t) => d`
                <umb-license-card
                  .model=${t}
                  .applicationUrl=${D(this, _)}
                ></umb-license-card>`
        )}
              </div>
            `,
        () => d`
              <umb-empty-state>
                <umb-localize key="content_listViewNoItems">There are no items show in the list.</umb-localize>
              </umb-empty-state>
            `
      )}
        `
    )}
    `;
  }
};
_ = /* @__PURE__ */ new WeakMap();
z.styles = [
  R`
      :host {
        container-type: inline-size;
        display: block;
      }

      #grid {
        --column-count: 1;
        display: grid;
        grid-gap: var(--uui-size-7);
        grid-template-columns: repeat(var(--column-count), minmax(0, 1fr));
        margin-top: var(--uui-size-layout-1);
      }

      @container (min-width: 800px) {
        #grid {
          --column-count: 2;
        }
      }

      @container (min-width: 1100px) {
        #grid {
          --column-count: 3;
        }
      }

      @container (min-width: 1500px) {
        #grid {
          --column-count: 4;
        }
      }

      umb-empty-state {
        margin: var(--uui-size-layout-3) 0 var(--uui-size-layout-2);
      }
    `
];
B([
  S()
], z.prototype, "_licenses", 2);
B([
  S()
], z.prototype, "_loaded", 2);
z = B([
  W(Ne)
], z);
var Ve = Object.getOwnPropertyDescriptor, Pe = (t, e, s, a) => {
  for (var l = a > 1 ? void 0 : a ? Ve(e, s) : e, n = t.length - 1, i; n >= 0; n--)
    (i = t[n]) && (l = i(l) || l);
  return l;
};
const Me = "umb-licenses-dashboard";
let C = class extends N {
  render() {
    return d`
      <uui-box .headline=${this.localize.term("licenses_registeredLicenses")}>
        <umb-localize key="licenses_registeredLicensesDescription"
          >Allows you to view the details of each license and provides tools for
          requesting revalidation.</umb-localize
        >
        <umb-licenses-grid></umb-licenses-grid>
      </uui-box>
    `;
  }
};
C.styles = [
  R`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }
    `
];
C = Pe([
  W(Me)
], C);
const Be = C, Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get LicensesDashboardElement() {
    return C;
  },
  default: Be
}, Symbol.toStringTag, { value: "Module" })), He = [
  ...je,
  ...Te
], Ye = (t, e) => {
  e.registerMany(He), t.consumeContext(he, async (s) => {
    if (!s) return;
    const a = s.getOpenApiConfiguration();
    L.setConfig({
      baseUrl: a.base,
      auth: await s.getLatestToken(),
      credentials: a.credentials
    });
  });
};
export {
  y as LicenseCardElement,
  C as LicensesDashboardElement,
  z as LicensesGridElement,
  Ye as onInit
};
//# sourceMappingURL=umbraco-licenses.js.map

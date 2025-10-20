var T = Object.defineProperty;
var D = (t, e, r) => e in t ? T(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var g = (t, e, r) => D(t, typeof e != "symbol" ? e + "" : e, r);
var U = async (t, e) => {
  let r = typeof e == "function" ? await e(t) : e;
  if (r) return t.scheme === "bearer" ? `Bearer ${r}` : t.scheme === "basic" ? `Basic ${btoa(r)}` : r;
}, A = { bodySerializer: (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() : r) }, E = (t) => {
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
}, _ = (t) => {
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
}, k = (t) => {
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
}, $ = ({ allowReserved: t, explode: e, name: r, style: l, value: n }) => {
  if (!e) {
    let a = (t ? n : n.map((u) => encodeURIComponent(u))).join(_(l));
    switch (l) {
      case "label":
        return `.${a}`;
      case "matrix":
        return `;${r}=${a}`;
      case "simple":
        return a;
      default:
        return `${r}=${a}`;
    }
  }
  let i = E(l), s = n.map((a) => l === "label" || l === "simple" ? t ? a : encodeURIComponent(a) : w({ allowReserved: t, name: r, value: a })).join(i);
  return l === "label" || l === "matrix" ? i + s : s;
}, w = ({ allowReserved: t, name: e, value: r }) => {
  if (r == null) return "";
  if (typeof r == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${t ? r : encodeURIComponent(r)}`;
}, S = ({ allowReserved: t, explode: e, name: r, style: l, value: n }) => {
  if (n instanceof Date) return `${r}=${n.toISOString()}`;
  if (l !== "deepObject" && !e) {
    let a = [];
    Object.entries(n).forEach(([f, o]) => {
      a = [...a, f, t ? o : encodeURIComponent(o)];
    });
    let u = a.join(",");
    switch (l) {
      case "form":
        return `${r}=${u}`;
      case "label":
        return `.${u}`;
      case "matrix":
        return `;${r}=${u}`;
      default:
        return u;
    }
  }
  let i = k(l), s = Object.entries(n).map(([a, u]) => w({ allowReserved: t, name: l === "deepObject" ? `${r}[${a}]` : a, value: u })).join(i);
  return l === "label" || l === "matrix" ? i + s : s;
}, z = /\{[^{}]+\}/g, W = ({ path: t, url: e }) => {
  let r = e, l = e.match(z);
  if (l) for (let n of l) {
    let i = !1, s = n.substring(1, n.length - 1), a = "simple";
    s.endsWith("*") && (i = !0, s = s.substring(0, s.length - 1)), s.startsWith(".") ? (s = s.substring(1), a = "label") : s.startsWith(";") && (s = s.substring(1), a = "matrix");
    let u = t[s];
    if (u == null) continue;
    if (Array.isArray(u)) {
      r = r.replace(n, $({ explode: i, name: s, style: a, value: u }));
      continue;
    }
    if (typeof u == "object") {
      r = r.replace(n, S({ explode: i, name: s, style: a, value: u }));
      continue;
    }
    if (a === "matrix") {
      r = r.replace(n, `;${w({ name: s, value: u })}`);
      continue;
    }
    let f = encodeURIComponent(a === "label" ? `.${u}` : u);
    r = r.replace(n, f);
  }
  return r;
}, q = ({ allowReserved: t, array: e, object: r } = {}) => (l) => {
  let n = [];
  if (l && typeof l == "object") for (let i in l) {
    let s = l[i];
    if (s != null) if (Array.isArray(s)) {
      let a = $({ allowReserved: t, explode: !0, name: i, style: "form", value: s, ...e });
      a && n.push(a);
    } else if (typeof s == "object") {
      let a = S({ allowReserved: t, explode: !0, name: i, style: "deepObject", value: s, ...r });
      a && n.push(a);
    } else {
      let a = w({ allowReserved: t, name: i, value: s });
      a && n.push(a);
    }
  }
  return n.join("&");
}, P = (t) => {
  var r;
  if (!t) return "stream";
  let e = (r = t.split(";")[0]) == null ? void 0 : r.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((l) => e.startsWith(l))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, I = async ({ security: t, ...e }) => {
  for (let r of t) {
    let l = await U(r, e.auth);
    if (!l) continue;
    let n = r.name ?? "Authorization";
    switch (r.in) {
      case "query":
        e.query || (e.query = {}), e.query[n] = l;
        break;
      case "cookie":
        e.headers.append("Cookie", `${n}=${l}`);
        break;
      case "header":
      default:
        e.headers.set(n, l);
        break;
    }
    return;
  }
}, j = (t) => N({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : q(t.querySerializer), url: t.url }), N = ({ baseUrl: t, path: e, query: r, querySerializer: l, url: n }) => {
  let i = n.startsWith("/") ? n : `/${n}`, s = (t ?? "") + i;
  e && (s = W({ path: e, url: s }));
  let a = r ? l(r) : "";
  return a.startsWith("?") && (a = a.substring(1)), a && (s += `?${a}`), s;
}, x = (t, e) => {
  var l;
  let r = { ...t, ...e };
  return (l = r.baseUrl) != null && l.endsWith("/") && (r.baseUrl = r.baseUrl.substring(0, r.baseUrl.length - 1)), r.headers = C(t.headers, e.headers), r;
}, C = (...t) => {
  let e = new Headers();
  for (let r of t) {
    if (!r || typeof r != "object") continue;
    let l = r instanceof Headers ? r.entries() : Object.entries(r);
    for (let [n, i] of l) if (i === null) e.delete(n);
    else if (Array.isArray(i)) for (let s of i) e.append(n, s);
    else i !== void 0 && e.set(n, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return e;
}, v = class {
  constructor() {
    g(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  exists(t) {
    return this._fns.indexOf(t) !== -1;
  }
  eject(t) {
    let e = this._fns.indexOf(t);
    e !== -1 && (this._fns = [...this._fns.slice(0, e), ...this._fns.slice(e + 1)]);
  }
  use(t) {
    this._fns = [...this._fns, t];
  }
}, H = () => ({ error: new v(), request: new v(), response: new v() }), J = q({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), L = { "Content-Type": "application/json" }, O = (t = {}) => ({ ...A, headers: L, parseAs: "auto", querySerializer: J, ...t }), B = (t = {}) => {
  let e = x(O(), t), r = () => ({ ...e }), l = (s) => (e = x(e, s), r()), n = H(), i = async (s) => {
    let a = { ...e, ...s, fetch: s.fetch ?? e.fetch ?? globalThis.fetch, headers: C(e.headers, s.headers) };
    a.security && await I({ ...a, security: a.security }), a.body && a.bodySerializer && (a.body = a.bodySerializer(a.body)), (a.body === void 0 || a.body === "") && a.headers.delete("Content-Type");
    let u = j(a), f = { redirect: "follow", ...a }, o = new Request(u, f);
    for (let d of n.request._fns) o = await d(o, a);
    let R = a.fetch, c = await R(o);
    for (let d of n.response._fns) c = await d(c, o, a);
    let p = { request: o, response: c };
    if (c.ok) {
      if (c.status === 204 || c.headers.get("Content-Length") === "0") return { data: {}, ...p };
      let d = (a.parseAs === "auto" ? P(c.headers.get("Content-Type")) : a.parseAs) ?? "json";
      if (d === "stream") return { data: c.body, ...p };
      let b = await c[d]();
      return d === "json" && (a.responseValidator && await a.responseValidator(b), a.responseTransformer && (b = await a.responseTransformer(b))), { data: b, ...p };
    }
    let y = await c.text();
    try {
      y = JSON.parse(y);
    } catch {
    }
    let h = y;
    for (let d of n.error._fns) h = await d(y, c, o, a);
    if (h = h || {}, a.throwOnError) throw h;
    return { error: h, ...p };
  };
  return { buildUrl: j, connect: (s) => i({ ...s, method: "CONNECT" }), delete: (s) => i({ ...s, method: "DELETE" }), get: (s) => i({ ...s, method: "GET" }), getConfig: r, head: (s) => i({ ...s, method: "HEAD" }), interceptors: n, options: (s) => i({ ...s, method: "OPTIONS" }), patch: (s) => i({ ...s, method: "PATCH" }), post: (s) => i({ ...s, method: "POST" }), put: (s) => i({ ...s, method: "PUT" }), request: i, setConfig: l, trace: (s) => i({ ...s, method: "TRACE" }) };
};
const m = B(O({
  baseUrl: "http://localhost:21185",
  throwOnError: !0
}));
class G {
  static postDataListEditor(e) {
    return ((e == null ? void 0 : e.client) ?? m).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/contentment/data-list/editor",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
}
class Q {
  static postDataPickerEditor(e) {
    return ((e == null ? void 0 : e.client) ?? m).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/contentment/data-picker/editor",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getDataPickerSearch(e) {
    return ((e == null ? void 0 : e.client) ?? m).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/contentment/data-picker/search",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
}
class F {
  static getAssembliesData(e) {
    return ((e == null ? void 0 : e.client) ?? m).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/contentment/data/assemblies",
      ...e
    });
  }
  static getEnumsData(e) {
    return ((e == null ? void 0 : e.client) ?? m).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/contentment/data/enums",
      ...e
    });
  }
}
export {
  G as D,
  Q as a,
  F as b
};
//# sourceMappingURL=sdk.gen.js.map

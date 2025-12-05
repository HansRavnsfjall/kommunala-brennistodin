var P = Object.defineProperty;
var W = (e, t, s) => t in e ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var C = (e, t, s) => W(e, typeof t != "symbol" ? t + "" : t, s);
import { UMB_AUTH_CONTEXT as H } from "@umbraco-cms/backoffice/auth";
import { UmbModalToken as L } from "@umbraco-cms/backoffice/modal";
import { css as B, property as M, customElement as J, nothing as V, html as d, when as Y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as G } from "@umbraco-cms/backoffice/lit-element";
const u = {
  element: "usync-snapshot-element",
  workspace: "usync.snapshots.workspace",
  entity: "usync-snapshot-entity",
  icon: "icon-flash",
  processing: {
    pipeline: "uSyncSnapshotsPipeline",
    stratageies: {
      create: "create-snapshot-strategy",
      apply: "apply-snapshot-strategy",
      report: "report-snapshot-strategy"
    }
  },
  steps: {
    createConfig: "usync-snapshot-create-config",
    createReport: "usync-snapshot-create-report",
    reportConfig: "usync-snapshot-report-config",
    reportResults: "usync-snapshot-report-results"
  }
}, Q = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}, X = {
  type: "usync-menuItem",
  alias: "usync.snapshots.menu.item",
  name: "Snapshots",
  weight: 50,
  meta: {
    label: "Snapshots",
    icon: u.icon,
    entityType: u.element,
    menus: ["usync-menu"]
  }
}, F = [X], U = u.workspace, K = {
  type: "workspace",
  alias: U,
  name: "Snapshots",
  js: () => import("./snapshots.element-n7sIoDl_.js"),
  meta: {
    entityType: u.element
  }
}, Z = [
  {
    type: "workspaceView",
    alias: "usync.snapshots.view.default",
    name: "Snapshots default view",
    js: () => import("./default.element-B275mLAZ.js"),
    weight: 200,
    meta: {
      label: "Snapshots",
      pathname: "default",
      icon: u.icon
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: U
      }
    ]
  }
], ee = [K, ...Z], x = "usync-snapshots-upload-modal", Re = new L(
  x,
  {
    modal: {
      type: "dialog"
    }
  }
), te = [
  {
    type: "modal",
    alias: x,
    name: "uSync Snapshots Upload",
    js: () => import("./snapshot-upload.modal-CNlo8dtM.js")
  }
], se = [...te], re = [
  {
    type: "jumoo-process-step",
    alias: u.steps.createConfig,
    name: "Snapshots create config",
    weight: 10,
    js: () => import("./create-config.element-DsirBtIR.js"),
    elementName: u.steps.createConfig
  },
  {
    type: "jumoo-process-step",
    alias: u.steps.createReport,
    name: "Snapshots create report",
    weight: 20,
    js: () => import("./create-report.element-C4s2iD2j.js"),
    elementName: u.steps.createReport
  },
  {
    type: "jumoo-process-step",
    alias: u.steps.reportConfig,
    name: "Snapshots report",
    weight: 30,
    js: () => import("./report-config.element-DgGH689o.js"),
    elementName: u.steps.reportConfig
  },
  {
    type: "jumoo-process-step",
    alias: u.steps.reportResults,
    name: "Snapshots report results",
    weight: 40,
    js: () => import("./report-results.element-BDlmVM9D.js"),
    elementName: u.steps.reportResults
  }
], ae = [...re], ne = [...ae], oe = [
  {
    type: "localization",
    alias: "usync-snapshots-enus",
    name: "uSync Snapshots English (US)",
    weight: 0,
    meta: { culture: "en-US" },
    js: () => import("./en-B1hFXl9M.js")
  }
], le = [...oe];
var ie = Object.defineProperty, ue = Object.getOwnPropertyDescriptor, R = (e) => {
  throw TypeError(e);
}, E = (e, t, s, o) => {
  for (var n = o > 1 ? void 0 : o ? ue(t, s) : t, l = e.length - 1, r; l >= 0; l--)
    (r = e[l]) && (n = (o ? r(t, s, n) : r(n)) || n);
  return o && n && ie(t, s, n), n;
}, ce = (e, t, s) => t.has(e) || R("Cannot " + s), pe = (e, t, s) => t.has(e) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), S = (e, t, s) => (ce(e, t, "access private method"), s), m, b;
let $ = class extends G {
  constructor() {
    super(...arguments), pe(this, m);
  }
  render() {
    var e;
    return ((e = this.snapshots) == null ? void 0 : e.length) === 0 ? V : d` <uui-table
					>${this.renderTableHeader()} ${this.renderTableBody()}</uui-table
				>`;
  }
  renderTableHeader() {
    return d`
			<uui-table-head>
				<uui-table-head-cell>Name</uui-table-head-cell>
				<uui-table-head-cell>Changes</uui-table-head-cell>
				<uui-table-head-cell>Created</uui-table-head-cell>
				<uui-table-head-cell>Applied</uui-table-head-cell>
				<uui-table-head-cell>Local</uui-table-head-cell>
				<uui-table-head-cell>Actions</uui-table-head-cell>
			</uui-table-head>
		`;
  }
  renderTableBody() {
    var e;
    return (e = this.snapshots) == null ? void 0 : e.map((t) => d`<uui-table-row>
				<uui-table-cell>${t.name}</uui-table-cell>
				<uui-table-cell>${t.fileCount}</uui-table-cell>
				<uui-table-cell>${this.renderTime(t.created)}</uui-table-cell>
				<uui-table-cell>${this.renderTime(t.applied)}</uui-table-cell>
				<uui-table-cell
					>${Y(
      t.local == !0,
      () => d`<umb-icon name="icon-check color-green"></umb-icon>`
    )}</uui-table-cell
				>
				<uui-table-cell>
					<uui-button
						compact
						label="Apply"
						color="positive"
						size="small"
						title="Apply the snapshot"
						@click=${() => S(this, m, b).call(this, t, "apply")}>
						<uui-icon name="icon-add"></uui-icon>
					</uui-button>
					<uui-button
						compact
						label="Report"
						color="default"
						size="small"
						title="report"
						@click=${() => S(this, m, b).call(this, t, "report")}>
						<uui-icon name="icon-info"></uui-icon>
					</uui-button>
					<uui-button
						compact
						label="Download"
						color="positive"
						size="small"
						title="download"
						@click=${() => S(this, m, b).call(this, t, "download")}>
						<uui-icon name="icon-download-alt"></uui-icon>
					</uui-button>
					<uui-button
						compact
						label="Remove"
						color="danger"
						size="small"
						title="remove"
						@click=${() => S(this, m, b).call(this, t, "remove")}>
						<uui-icon name="icon-trash"></uui-icon
					></uui-button>
				</uui-table-cell>
			</uui-table-row>`);
  }
  renderTime(e) {
    return e == "0001-01-01T00:00:00" ? d`Never` : d`${this.localize.date(e, Q)}`;
  }
};
m = /* @__PURE__ */ new WeakSet();
b = function(e, t) {
  this.dispatchEvent(
    new CustomEvent(`snapshot-${t}`, {
      bubbles: !0,
      composed: !0,
      detail: e
    })
  );
};
$.styles = B``;
E([
  M({ type: Array })
], $.prototype, "snapshots", 2);
$ = E([
  J("usync-snapshot-table")
], $);
var he = async (e, t) => {
  let s = typeof t == "function" ? await t(e) : t;
  if (s) return e.scheme === "bearer" ? `Bearer ${s}` : e.scheme === "basic" ? `Basic ${btoa(s)}` : s;
}, de = { bodySerializer: (e) => JSON.stringify(e, (t, s) => typeof s == "bigint" ? s.toString() : s) }, me = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, fe = (e) => {
  switch (e) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, ye = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, k = ({ allowReserved: e, explode: t, name: s, style: o, value: n }) => {
  if (!t) {
    let a = (e ? n : n.map((i) => encodeURIComponent(i))).join(fe(o));
    switch (o) {
      case "label":
        return `.${a}`;
      case "matrix":
        return `;${s}=${a}`;
      case "simple":
        return a;
      default:
        return `${s}=${a}`;
    }
  }
  let l = me(o), r = n.map((a) => o === "label" || o === "simple" ? e ? a : encodeURIComponent(a) : _({ allowReserved: e, name: s, value: a })).join(l);
  return o === "label" || o === "matrix" ? l + r : r;
}, _ = ({ allowReserved: e, name: t, value: s }) => {
  if (s == null) return "";
  if (typeof s == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${t}=${e ? s : encodeURIComponent(s)}`;
}, q = ({ allowReserved: e, explode: t, name: s, style: o, value: n }) => {
  if (n instanceof Date) return `${s}=${n.toISOString()}`;
  if (o !== "deepObject" && !t) {
    let a = [];
    Object.entries(n).forEach(([f, h]) => {
      a = [...a, f, e ? h : encodeURIComponent(h)];
    });
    let i = a.join(",");
    switch (o) {
      case "form":
        return `${s}=${i}`;
      case "label":
        return `.${i}`;
      case "matrix":
        return `;${s}=${i}`;
      default:
        return i;
    }
  }
  let l = ye(o), r = Object.entries(n).map(([a, i]) => _({ allowReserved: e, name: o === "deepObject" ? `${s}[${a}]` : a, value: i })).join(l);
  return o === "label" || o === "matrix" ? l + r : r;
}, be = /\{[^{}]+\}/g, we = ({ path: e, url: t }) => {
  let s = t, o = t.match(be);
  if (o) for (let n of o) {
    let l = !1, r = n.substring(1, n.length - 1), a = "simple";
    r.endsWith("*") && (l = !0, r = r.substring(0, r.length - 1)), r.startsWith(".") ? (r = r.substring(1), a = "label") : r.startsWith(";") && (r = r.substring(1), a = "matrix");
    let i = e[r];
    if (i == null) continue;
    if (Array.isArray(i)) {
      s = s.replace(n, k({ explode: l, name: r, style: a, value: i }));
      continue;
    }
    if (typeof i == "object") {
      s = s.replace(n, q({ explode: l, name: r, style: a, value: i }));
      continue;
    }
    if (a === "matrix") {
      s = s.replace(n, `;${_({ name: r, value: i })}`);
      continue;
    }
    let f = encodeURIComponent(a === "label" ? `.${i}` : i);
    s = s.replace(n, f);
  }
  return s;
}, z = ({ allowReserved: e, array: t, object: s } = {}) => (o) => {
  let n = [];
  if (o && typeof o == "object") for (let l in o) {
    let r = o[l];
    if (r != null) if (Array.isArray(r)) {
      let a = k({ allowReserved: e, explode: !0, name: l, style: "form", value: r, ...t });
      a && n.push(a);
    } else if (typeof r == "object") {
      let a = q({ allowReserved: e, explode: !0, name: l, style: "deepObject", value: r, ...s });
      a && n.push(a);
    } else {
      let a = _({ allowReserved: e, name: l, value: r });
      a && n.push(a);
    }
  }
  return n.join("&");
}, ge = (e) => {
  var s;
  if (!e) return "stream";
  let t = (s = e.split(";")[0]) == null ? void 0 : s.trim();
  if (t) {
    if (t.startsWith("application/json") || t.endsWith("+json")) return "json";
    if (t === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((o) => t.startsWith(o))) return "blob";
    if (t.startsWith("text/")) return "text";
  }
}, ve = async ({ security: e, ...t }) => {
  for (let s of e) {
    let o = await he(s, t.auth);
    if (!o) continue;
    let n = s.name ?? "Authorization";
    switch (s.in) {
      case "query":
        t.query || (t.query = {}), t.query[n] = o;
        break;
      case "cookie":
        t.headers.append("Cookie", `${n}=${o}`);
        break;
      case "header":
      default:
        t.headers.set(n, o);
        break;
    }
    return;
  }
}, T = (e) => Se({ baseUrl: e.baseUrl, path: e.path, query: e.query, querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : z(e.querySerializer), url: e.url }), Se = ({ baseUrl: e, path: t, query: s, querySerializer: o, url: n }) => {
  let l = n.startsWith("/") ? n : `/${n}`, r = (e ?? "") + l;
  t && (r = we({ path: t, url: r }));
  let a = s ? o(s) : "";
  return a.startsWith("?") && (a = a.substring(1)), a && (r += `?${a}`), r;
}, A = (e, t) => {
  var o;
  let s = { ...e, ...t };
  return (o = s.baseUrl) != null && o.endsWith("/") && (s.baseUrl = s.baseUrl.substring(0, s.baseUrl.length - 1)), s.headers = I(e.headers, t.headers), s;
}, I = (...e) => {
  let t = new Headers();
  for (let s of e) {
    if (!s || typeof s != "object") continue;
    let o = s instanceof Headers ? s.entries() : Object.entries(s);
    for (let [n, l] of o) if (l === null) t.delete(n);
    else if (Array.isArray(l)) for (let r of l) t.append(n, r);
    else l !== void 0 && t.set(n, typeof l == "object" ? JSON.stringify(l) : l);
  }
  return t;
}, j = class {
  constructor() {
    C(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(e) {
    return typeof e == "number" ? this._fns[e] ? e : -1 : this._fns.indexOf(e);
  }
  exists(e) {
    let t = this.getInterceptorIndex(e);
    return !!this._fns[t];
  }
  eject(e) {
    let t = this.getInterceptorIndex(e);
    this._fns[t] && (this._fns[t] = null);
  }
  update(e, t) {
    let s = this.getInterceptorIndex(e);
    return this._fns[s] ? (this._fns[s] = t, e) : !1;
  }
  use(e) {
    return this._fns = [...this._fns, e], this._fns.length - 1;
  }
}, $e = () => ({ error: new j(), request: new j(), response: new j() }), _e = z({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), je = { "Content-Type": "application/json" }, N = (e = {}) => ({ ...de, headers: je, parseAs: "auto", querySerializer: _e, ...e }), Ce = (e = {}) => {
  let t = A(N(), e), s = () => ({ ...t }), o = (r) => (t = A(t, r), s()), n = $e(), l = async (r) => {
    let a = { ...t, ...r, fetch: r.fetch ?? t.fetch ?? globalThis.fetch, headers: I(t.headers, r.headers) };
    a.security && await ve({ ...a, security: a.security }), a.body && a.bodySerializer && (a.body = a.bodySerializer(a.body)), (a.body === void 0 || a.body === "") && a.headers.delete("Content-Type");
    let i = T(a), f = { redirect: "follow", ...a }, h = new Request(i, f);
    for (let c of n.request._fns) c && (h = await c(h, a));
    let D = a.fetch, p = await D(h);
    for (let c of n.response._fns) c && (p = await c(p, h, a));
    let w = { request: h, response: p };
    if (p.ok) {
      if (p.status === 204 || p.headers.get("Content-Length") === "0") return { data: {}, ...w };
      let c = (a.parseAs === "auto" ? ge(p.headers.get("Content-Type")) : a.parseAs) ?? "json";
      if (c === "stream") return { data: p.body, ...w };
      let v = await p[c]();
      return c === "json" && (a.responseValidator && await a.responseValidator(v), a.responseTransformer && (v = await a.responseTransformer(v))), { data: v, ...w };
    }
    let g = await p.text();
    try {
      g = JSON.parse(g);
    } catch {
    }
    let y = g;
    for (let c of n.error._fns) c && (y = await c(g, p, h, a));
    if (y = y || {}, a.throwOnError) throw y;
    return { error: y, ...w };
  };
  return { buildUrl: T, connect: (r) => l({ ...r, method: "CONNECT" }), delete: (r) => l({ ...r, method: "DELETE" }), get: (r) => l({ ...r, method: "GET" }), getConfig: s, head: (r) => l({ ...r, method: "HEAD" }), interceptors: n, options: (r) => l({ ...r, method: "OPTIONS" }), patch: (r) => l({ ...r, method: "PATCH" }), post: (r) => l({ ...r, method: "POST" }), put: (r) => l({ ...r, method: "PUT" }), request: l, setConfig: o, trace: (r) => l({ ...r, method: "TRACE" }) };
};
const O = Ce(N({
  baseUrl: "http://localhost:36520"
})), Ee = (e, t) => {
  t.registerMany([
    ...F,
    ...ee,
    ...se,
    ...ne,
    ...le
  ]), e.consumeContext(H, (s) => {
    if (!s) return;
    const o = s.getOpenApiConfiguration();
    O.setConfig({
      baseUrl: o.base,
      credentials: o.credentials
    }), O.interceptors.request.use(async (n, l) => {
      const r = await s.getLatestToken();
      return n.headers.set("Authorization", `Bearer ${r}`), n;
    });
  });
};
export {
  Re as U,
  O as c,
  Ee as o,
  u
};
//# sourceMappingURL=index-BRxV4qqS.js.map

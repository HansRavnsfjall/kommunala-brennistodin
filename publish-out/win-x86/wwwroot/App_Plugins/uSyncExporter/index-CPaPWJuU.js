var Y = Object.defineProperty;
var J = (e, t, r) => t in e ? Y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var U = (e, t, r) => J(e, typeof t != "symbol" ? t + "" : t, r);
import { UMB_AUTH_CONTEXT as G } from "@umbraco-cms/backoffice/auth";
import { UMB_DOCUMENT_TYPE_PICKER_MODAL as Q } from "@umbraco-cms/backoffice/document-type";
import { UMB_MEMBER_TYPE_PICKER_MODAL as X } from "@umbraco-cms/backoffice/member-type";
import { UMB_MEDIA_TYPE_PICKER_MODAL as Z } from "@umbraco-cms/backoffice/media-type";
import { UMB_DATA_TYPE_PICKER_MODAL as ee } from "@umbraco-cms/backoffice/data-type";
import { UMB_DOCUMENT_PICKER_MODAL as te } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_TREE_PICKER_MODAL as re } from "@umbraco-cms/backoffice/media";
import { UMB_DICTIONARY_PICKER_MODAL as oe } from "@umbraco-cms/backoffice/dictionary";
import { UMB_TEMPLATE_PICKER_MODAL as ie } from "@umbraco-cms/backoffice/template";
import { UMB_USER_GROUP_PICKER_MODAL as ne } from "@umbraco-cms/backoffice/user-group";
import { UMB_USER_PICKER_MODAL as ae } from "@umbraco-cms/backoffice/user";
import { UMB_STYLESHEET_PICKER_MODAL as se } from "@umbraco-cms/backoffice/stylesheet";
import { UMB_PARTIAL_VIEW_PICKER_MODAL as le } from "@umbraco-cms/backoffice/partial-view";
import { UMB_SCRIPT_PICKER_MODAL as ue } from "@umbraco-cms/backoffice/script";
import { UMB_MEMBER_PICKER_MODAL as ce } from "@umbraco-cms/backoffice/member";
import { UMB_MEMBER_GROUP_PICKER_MODAL as pe } from "@umbraco-cms/backoffice/member-group";
import { property as R, customElement as S, html as _, nothing as $, css as me, query as de, state as he } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
const f = {
  context: "usync.exporter.context",
  workspace: "usync.exporter.workspace",
  entity: "usync-exporter-entity",
  element: "usync-exporter-element",
  icon: "icon-window-popout",
  importIcon: "icon-window-popin",
  process: {
    pipeline: "ExportPipeline",
    export: "ExporterExportStrategy",
    import: "ExporterImportStrategy"
  },
  modals: [
    {
      entityType: "member-type",
      modal: X
    },
    {
      entityType: "document-type",
      modal: Q
    },
    {
      entityType: "media-type",
      modal: Z
    },
    {
      entityType: "data-type",
      modal: ee
    },
    {
      entityType: "document",
      modal: te
    },
    {
      entityType: "media",
      modal: re
    },
    {
      entityType: "dictionary-item",
      modal: oe
    },
    {
      entityType: "template",
      modal: ie
    },
    {
      entityType: "user-group",
      modal: ne
    },
    {
      entityType: "user",
      modal: ae
    },
    {
      entityType: "stylesheet",
      modal: se
    },
    {
      entityType: "partial-view",
      modal: le
    },
    {
      entityType: "member",
      modal: ce
    },
    {
      entityType: "member-group",
      modal: pe
    },
    {
      entityType: "script",
      modal: ue
    }
  ]
}, fe = {
  type: "usync-menuItem",
  alias: "usync.exporter.menu.item",
  name: "Exporter",
  weight: 100,
  meta: {
    label: "Exporter",
    icon: f.icon,
    entityType: "usync-exporter-element",
    menus: ["usync.menu"]
  }
}, ye = [fe], C = f.workspace, be = {
  type: "workspace",
  alias: C,
  name: "uSync Exporter",
  js: () => import("./workspace.element-_mbjVxxN.js"),
  meta: {
    entityType: f.element
  }
}, _e = {
  type: "workspaceContext",
  alias: f.context,
  name: "uSync Exporter Context",
  js: () => import("./workspace.context-ChaniE6s.js"),
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: C
    }
  ]
}, ge = [
  {
    type: "workspaceView",
    alias: "usync.exporter.view.default",
    name: "uSync Exporter default view",
    js: () => import("./default.element-D3PNVpMP.js"),
    weight: 200,
    meta: {
      label: "Export",
      pathname: "export",
      icon: f.icon
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: C
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "usync.exporter.view.import",
    name: "uSync Exporter import view",
    js: () => import("./import.element-PZEkZXb8.js"),
    weight: 100,
    meta: {
      label: "Import",
      pathname: "import",
      icon: f.importIcon
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: C
      }
    ]
  }
], Ee = [be, _e, ...ge], p = {
  export: {
    config: "usync-exporter-export-config",
    results: "usync-exporter-export-result"
  },
  import: {
    upload: "usync-exporter-import-upload",
    report: "usync-exporter-import-report",
    result: "usync-exporter-import-result"
  }
}, we = [
  {
    type: "jumoo-process-step",
    alias: p.export.config,
    name: "Exporter Config",
    weight: 100,
    js: () => import("./export-config-step-CYAzama4.js"),
    elementName: p.export.config
  },
  {
    type: "jumoo-process-step",
    alias: p.export.results,
    name: "Exporter Results",
    weight: 200,
    js: () => import("./export-results-step-QtonJJ8J.js"),
    elementName: p.export.results
  }
], xe = [...we], ve = [
  {
    type: "jumoo-process-step",
    alias: p.import.upload,
    name: "Exporter Import",
    weight: 100,
    js: () => import("./import-upload-step-iNWPvjTi.js"),
    elementName: p.import.upload
  },
  {
    type: "jumoo-process-step",
    alias: p.import.report,
    name: "Exporter Import Report",
    weight: 200,
    js: () => import("./import-report-step-DCLpOX61.js"),
    elementName: p.import.report
  },
  {
    type: "jumoo-process-step",
    alias: p.import.result,
    name: "Exporter Import Results",
    weight: 300,
    js: () => import("./import-result-step-DyxV8WpK.js"),
    elementName: p.import.result
  }
], Ce = [...ve], Ie = [...xe, ...Ce], Te = [
  {
    type: "localization",
    alias: "usync-exporter.enus",
    name: "English (us)",
    weight: 0,
    meta: { culture: "en-US" },
    js: () => import("./en-vklBGezf.js")
  },
  {
    type: "localization",
    alias: "usync-exporter.en",
    name: "English",
    weight: 0,
    meta: { culture: "en" },
    js: () => import("./en-vklBGezf.js")
  }
], $e = [...Te];
var Ae = async (e, t) => {
  let r = typeof t == "function" ? await t(e) : t;
  if (r) return e.scheme === "bearer" ? `Bearer ${r}` : e.scheme === "basic" ? `Basic ${btoa(r)}` : r;
}, Re = { bodySerializer: (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() : r) }, Ue = (e) => {
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
}, Oe = (e) => {
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
}, je = (e) => {
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
}, D = ({ allowReserved: e, explode: t, name: r, style: a, value: n }) => {
  if (!t) {
    let i = (e ? n : n.map((l) => encodeURIComponent(l))).join(Oe(a));
    switch (a) {
      case "label":
        return `.${i}`;
      case "matrix":
        return `;${r}=${i}`;
      case "simple":
        return i;
      default:
        return `${r}=${i}`;
    }
  }
  let s = Ue(a), o = n.map((i) => a === "label" || a === "simple" ? e ? i : encodeURIComponent(i) : I({ allowReserved: e, name: r, value: i })).join(s);
  return a === "label" || a === "matrix" ? s + o : o;
}, I = ({ allowReserved: e, name: t, value: r }) => {
  if (r == null) return "";
  if (typeof r == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${t}=${e ? r : encodeURIComponent(r)}`;
}, k = ({ allowReserved: e, explode: t, name: r, style: a, value: n }) => {
  if (n instanceof Date) return `${r}=${n.toISOString()}`;
  if (a !== "deepObject" && !t) {
    let i = [];
    Object.entries(n).forEach(([y, m]) => {
      i = [...i, y, e ? m : encodeURIComponent(m)];
    });
    let l = i.join(",");
    switch (a) {
      case "form":
        return `${r}=${l}`;
      case "label":
        return `.${l}`;
      case "matrix":
        return `;${r}=${l}`;
      default:
        return l;
    }
  }
  let s = je(a), o = Object.entries(n).map(([i, l]) => I({ allowReserved: e, name: a === "deepObject" ? `${r}[${i}]` : i, value: l })).join(s);
  return a === "label" || a === "matrix" ? s + o : o;
}, Me = /\{[^{}]+\}/g, Se = ({ path: e, url: t }) => {
  let r = t, a = t.match(Me);
  if (a) for (let n of a) {
    let s = !1, o = n.substring(1, n.length - 1), i = "simple";
    o.endsWith("*") && (s = !0, o = o.substring(0, o.length - 1)), o.startsWith(".") ? (o = o.substring(1), i = "label") : o.startsWith(";") && (o = o.substring(1), i = "matrix");
    let l = e[o];
    if (l == null) continue;
    if (Array.isArray(l)) {
      r = r.replace(n, D({ explode: s, name: o, style: i, value: l }));
      continue;
    }
    if (typeof l == "object") {
      r = r.replace(n, k({ explode: s, name: o, style: i, value: l }));
      continue;
    }
    if (i === "matrix") {
      r = r.replace(n, `;${I({ name: o, value: l })}`);
      continue;
    }
    let y = encodeURIComponent(i === "label" ? `.${l}` : l);
    r = r.replace(n, y);
  }
  return r;
}, B = ({ allowReserved: e, array: t, object: r } = {}) => (a) => {
  let n = [];
  if (a && typeof a == "object") for (let s in a) {
    let o = a[s];
    if (o != null) if (Array.isArray(o)) {
      let i = D({ allowReserved: e, explode: !0, name: s, style: "form", value: o, ...t });
      i && n.push(i);
    } else if (typeof o == "object") {
      let i = k({ allowReserved: e, explode: !0, name: s, style: "deepObject", value: o, ...r });
      i && n.push(i);
    } else {
      let i = I({ allowReserved: e, name: s, value: o });
      i && n.push(i);
    }
  }
  return n.join("&");
}, Pe = (e) => {
  var r;
  if (!e) return "stream";
  let t = (r = e.split(";")[0]) == null ? void 0 : r.trim();
  if (t) {
    if (t.startsWith("application/json") || t.endsWith("+json")) return "json";
    if (t === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => t.startsWith(a))) return "blob";
    if (t.startsWith("text/")) return "text";
  }
}, De = async ({ security: e, ...t }) => {
  for (let r of e) {
    let a = await Ae(r, t.auth);
    if (!a) continue;
    let n = r.name ?? "Authorization";
    switch (r.in) {
      case "query":
        t.query || (t.query = {}), t.query[n] = a;
        break;
      case "cookie":
        t.headers.append("Cookie", `${n}=${a}`);
        break;
      case "header":
      default:
        t.headers.set(n, a);
        break;
    }
    return;
  }
}, O = (e) => ke({ baseUrl: e.baseUrl, path: e.path, query: e.query, querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : B(e.querySerializer), url: e.url }), ke = ({ baseUrl: e, path: t, query: r, querySerializer: a, url: n }) => {
  let s = n.startsWith("/") ? n : `/${n}`, o = (e ?? "") + s;
  t && (o = Se({ path: t, url: o }));
  let i = r ? a(r) : "";
  return i.startsWith("?") && (i = i.substring(1)), i && (o += `?${i}`), o;
}, j = (e, t) => {
  var a;
  let r = { ...e, ...t };
  return (a = r.baseUrl) != null && a.endsWith("/") && (r.baseUrl = r.baseUrl.substring(0, r.baseUrl.length - 1)), r.headers = L(e.headers, t.headers), r;
}, L = (...e) => {
  let t = new Headers();
  for (let r of e) {
    if (!r || typeof r != "object") continue;
    let a = r instanceof Headers ? r.entries() : Object.entries(r);
    for (let [n, s] of a) if (s === null) t.delete(n);
    else if (Array.isArray(s)) for (let o of s) t.append(n, o);
    else s !== void 0 && t.set(n, typeof s == "object" ? JSON.stringify(s) : s);
  }
  return t;
}, T = class {
  constructor() {
    U(this, "_fns");
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
    let r = this.getInterceptorIndex(e);
    return this._fns[r] ? (this._fns[r] = t, e) : !1;
  }
  use(e) {
    return this._fns = [...this._fns, e], this._fns.length - 1;
  }
}, Be = () => ({ error: new T(), request: new T(), response: new T() }), Le = B({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), qe = { "Content-Type": "application/json" }, q = (e = {}) => ({ ...Re, headers: qe, parseAs: "auto", querySerializer: Le, ...e }), Ne = (e = {}) => {
  let t = j(q(), e), r = () => ({ ...t }), a = (o) => (t = j(t, o), r()), n = Be(), s = async (o) => {
    let i = { ...t, ...o, fetch: o.fetch ?? t.fetch ?? globalThis.fetch, headers: L(t.headers, o.headers) };
    i.security && await De({ ...i, security: i.security }), i.body && i.bodySerializer && (i.body = i.bodySerializer(i.body)), (i.body === void 0 || i.body === "") && i.headers.delete("Content-Type");
    let l = O(i), y = { redirect: "follow", ...i }, m = new Request(l, y);
    for (let u of n.request._fns) u && (m = await u(m, i));
    let V = i.fetch, c = await V(m);
    for (let u of n.response._fns) u && (c = await u(c, m, i));
    let E = { request: m, response: c };
    if (c.ok) {
      if (c.status === 204 || c.headers.get("Content-Length") === "0") return { data: {}, ...E };
      let u = (i.parseAs === "auto" ? Pe(c.headers.get("Content-Type")) : i.parseAs) ?? "json";
      if (u === "stream") return { data: c.body, ...E };
      let x = await c[u]();
      return u === "json" && (i.responseValidator && await i.responseValidator(x), i.responseTransformer && (x = await i.responseTransformer(x))), { data: x, ...E };
    }
    let w = await c.text();
    try {
      w = JSON.parse(w);
    } catch {
    }
    let b = w;
    for (let u of n.error._fns) u && (b = await u(w, c, m, i));
    if (b = b || {}, i.throwOnError) throw b;
    return { error: b, ...E };
  };
  return { buildUrl: O, connect: (o) => s({ ...o, method: "CONNECT" }), delete: (o) => s({ ...o, method: "DELETE" }), get: (o) => s({ ...o, method: "GET" }), getConfig: r, head: (o) => s({ ...o, method: "HEAD" }), interceptors: n, options: (o) => s({ ...o, method: "OPTIONS" }), patch: (o) => s({ ...o, method: "PATCH" }), post: (o) => s({ ...o, method: "POST" }), put: (o) => s({ ...o, method: "PUT" }), request: s, setConfig: a, trace: (o) => s({ ...o, method: "TRACE" }) };
};
const M = Ne(q({
  baseUrl: "http://localhost:36520"
}));
var We = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, N = (e) => {
  throw TypeError(e);
}, W = (e, t, r, a) => {
  for (var n = a > 1 ? void 0 : a ? ze(t, r) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (n = (a ? o(t, r, n) : o(n)) || n);
  return a && n && We(t, r, n), n;
}, Ke = (e, t, r) => t.has(e) || N("Cannot " + r), Fe = (e, t, r) => t.has(e) ? N("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), v = (e, t, r) => (Ke(e, t, "access private method"), r), h, z, K, F, H;
let A = class extends P {
  constructor() {
    super(...arguments), Fe(this, h), this.selection = [];
  }
  render() {
    var e = this.selection.map((t) => _`
				<uui-table-row>
					<uui-table-cell><umb-icon .name=${t.icon}></umb-icon></uui-table-cell>
					<uui-table-cell>${t.entityType}</uui-table-cell>
					<uui-table-cell>${t.name}</uui-table-cell>
					<uui-table-cell>
						<uui-toggle
							?checked=${t.includeChildren}
							@change=${() => v(this, h, F).call(this, t)}
							label="include children">
							<div slot="label"></div>
						</uui-toggle>
					</uui-table-cell>
					<uui-table-cell>
						<uui-toggle
							?checked=${t.includeDependencies}
							@change=${() => v(this, h, H).call(this, t)}
							label="Include dependencies">
							<div slot="label"></div>
						</uui-toggle>
					</uui-table-cell>
					<uui-table-cell>
						<uui-toggle
							?checked=${t.includeAncestors}
							@change=${() => v(this, h, K).call(this, t)}
							label="Include ancestors">
							<div slot="label"></div>
						</uui-toggle>
					</uui-table-cell>
					<uui-table-cell>
						<uui-button @click=${() => v(this, h, z).call(this, t)} label="Remove"
							><umb-icon name="icon-trash" color="red"></umb-icon
						></uui-button>
					</uui-table-cell>
				</uui-table-row>
			`);
    return this.selection.length === 0 ? $ : _`<uui-table>
					<uui-table-head>
						<uui-table-head-cell
							><umb-icon name="icon-flag"></umb-icon
						></uui-table-head-cell>
						<uui-table-head-cell>Type</uui-table-head-cell>
						<uui-table-head-cell>Name</uui-table-head-cell>
						<uui-table-head-cell>Children</uui-table-head-cell>
						<uui-table-head-cell>Dependencies</uui-table-head-cell>
						<uui-table-head-cell>Ancestors</uui-table-head-cell>
						<uui-table-head-cell></uui-table-head-cell>
					</uui-table-head>
					${e}
				</uui-table>`;
  }
};
h = /* @__PURE__ */ new WeakSet();
z = function(e) {
  this.dispatchEvent(new CustomEvent("remove", { detail: e }));
};
K = function(e) {
  e.includeAncestors = !e.includeAncestors, this.dispatchEvent(new CustomEvent("update", { detail: e }));
};
F = function(e) {
  e.includeChildren = !e.includeChildren, this.dispatchEvent(new CustomEvent("update", { detail: e }));
};
H = function(e) {
  e.includeDependencies = !e.includeDependencies, this.dispatchEvent(new CustomEvent("update", { detail: e }));
};
W([
  R({ type: Array })
], A.prototype, "selection", 2);
A = W([
  S("usync-exporter-selection")
], A);
var He = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, g = (e, t, r, a) => {
  for (var n = a > 1 ? void 0 : a ? Ve(t, r) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (n = (a ? o(t, r, n) : o(n)) || n);
  return a && n && He(t, r, n), n;
};
let d = class extends P {
  constructor() {
    super(...arguments), this.label = "Upload File", this.accept = "";
  }
  async _getFile(e) {
    return new Promise((t, r) => {
      e.file(t, r);
    });
  }
  fireChange() {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          file: this._file
        }
      })
    );
  }
  async _onFilePickerChange() {
    const t = (this._fileInput.files ? Array.from(this._fileInput.files) : [])[0], a = t instanceof File ? t : await this._getFile(t);
    this._file = a, this.fireChange();
  }
  async _onRemoveFile() {
    this._file = void 0, this._fileInput.value = "", this.fireChange();
  }
  _onUpload() {
    this._fileInput.click();
  }
  render() {
    return _`<input
				@click=${this._onUpload}
				type="file"
				id="file"
				accept="${this.accept}"
				@change=${this._onFilePickerChange} />
			${this._renderFile()} ${this._renderButton()}`;
  }
  _renderFile() {
    return this._file ? _`<div class="file">
			<div>${this._file.name}</div>
			<uui-button @click=${this._onRemoveFile} compact color="danger" label="Remove">
				<uui-icon name="icon-trash"></uui-icon>
			</uui-button>
		</div>` : $;
  }
  _renderButton() {
    return this._file ? $ : _`<uui-button
			look="placeholder"
			label="${this.label}"
			@click=${this._onUpload}></uui-button>`;
  }
};
d.styles = [
  me`
			.file {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-2);
			}

			#file {
				display: none;
			}
		`
];
g([
  R({ type: String })
], d.prototype, "label", 2);
g([
  R({ type: String })
], d.prototype, "accept", 2);
g([
  de("#file")
], d.prototype, "_fileInput", 2);
g([
  he()
], d.prototype, "_file", 2);
d = g([
  S("usync-exporter-file-upload")
], d);
const dt = (e, t) => {
  t.registerMany([
    ...ye,
    ...Ee,
    ...Ie,
    ...$e
  ]), e.consumeContext(G, (r) => {
    if (!r) return;
    const a = r.getOpenApiConfiguration();
    M.setConfig({
      baseUrl: a.base,
      credentials: a.credentials
    }), M.interceptors.request.use(async (n, s) => {
      const o = await r.getLatestToken();
      return n.headers.set("Authorization", `Bearer ${o}`), n;
    });
  });
};
export {
  p as a,
  M as c,
  dt as o,
  f as u
};
//# sourceMappingURL=index-CPaPWJuU.js.map

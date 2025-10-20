var w = /* @__PURE__ */ ((r) => (r.NEW = "New", r.SAVE = "Save", r.SAVE_VARIANT = "SaveVariant", r.OPEN = "Open", r.DELETE = "Delete", r.PUBLISH = "Publish", r.PUBLISH_VARIANT = "PublishVariant", r.SEND_TO_PUBLISH = "SendToPublish", r.SEND_TO_PUBLISH_VARIANT = "SendToPublishVariant", r.UNPUBLISH = "Unpublish", r.UNPUBLISH_VARIANT = "UnpublishVariant", r.MOVE = "Move", r.COPY = "Copy", r.ASSIGN_DOMAIN = "AssignDomain", r.PUBLIC_ACCESS = "PublicAccess", r.SORT = "Sort", r.NOTIFY = "Notify", r.SYSTEM = "System", r.ROLL_BACK = "RollBack", r.PACKAGER_INSTALL = "PackagerInstall", r.PACKAGER_UNINSTALL = "PackagerUninstall", r.CUSTOM = "Custom", r.CONTENT_VERSION_PREVENT_CLEANUP = "ContentVersionPreventCleanup", r.CONTENT_VERSION_ENABLE_CLEANUP = "ContentVersionEnableCleanup", r))(w || {}), A = /* @__PURE__ */ ((r) => (r.COMPOSITION = "Composition", r.INHERITANCE = "Inheritance", r))(A || {}), P = /* @__PURE__ */ ((r) => (r.TRUE = "True", r.FALSE = "False", r.FALSE_WITH_HELP_TEXT = "FalseWithHelpText", r))(P || {}), N = /* @__PURE__ */ ((r) => (r.ASCENDING = "Ascending", r.DESCENDING = "Descending", r))(N || {}), U = /* @__PURE__ */ ((r) => (r.NOT_CREATED = "NotCreated", r.DRAFT = "Draft", r.PUBLISHED = "Published", r.PUBLISHED_PENDING_CHANGES = "PublishedPendingChanges", r))(U || {}), L = /* @__PURE__ */ ((r) => (r.DEFAULT = "Default", r.INFO = "Info", r.ERROR = "Error", r.SUCCESS = "Success", r.WARNING = "Warning", r))(L || {}), O = /* @__PURE__ */ ((r) => (r.HEALTHY = "Healthy", r.UNHEALTHY = "Unhealthy", r.REBUILDING = "Rebuilding", r.CORRUPT = "Corrupt", r))(O || {}), F = /* @__PURE__ */ ((r) => (r.CROP = "Crop", r.MAX = "Max", r.STRETCH = "Stretch", r.PAD = "Pad", r.BOX_PAD = "BoxPad", r.MIN = "Min", r))(F || {}), _ = /* @__PURE__ */ ((r) => (r.VERBOSE = "Verbose", r.DEBUG = "Debug", r.INFORMATION = "Information", r.WARNING = "Warning", r.ERROR = "Error", r.FATAL = "Fatal", r))(_ || {}), k = /* @__PURE__ */ ((r) => (r.DEFAULT = "Default", r.API = "Api", r))(k || {}), V = /* @__PURE__ */ ((r) => (r.NOTHING = "Nothing", r.IN_MEMORY_AUTO = "InMemoryAuto", r.SOURCE_CODE_MANUAL = "SourceCodeManual", r.SOURCE_CODE_AUTO = "SourceCodeAuto", r))(V || {}), x = /* @__PURE__ */ ((r) => (r.EQUALS = "Equals", r.NOT_EQUALS = "NotEquals", r.CONTAINS = "Contains", r.NOT_CONTAINS = "NotContains", r.LESS_THAN = "LessThan", r.LESS_THAN_EQUAL_TO = "LessThanEqualTo", r.GREATER_THAN = "GreaterThan", r.GREATER_THAN_EQUAL_TO = "GreaterThanEqualTo", r))(x || {}), G = /* @__PURE__ */ ((r) => (r.OUT_OF_DATE = "OutOfDate", r.CURRENT = "Current", r.UNKNOWN = "Unknown", r))(G || {}), W = /* @__PURE__ */ ((r) => (r.ENABLED = "Enabled", r.DISABLED = "Disabled", r))(W || {}), H = /* @__PURE__ */ ((r) => (r.UNKNOWN = "Unknown", r.BOOT = "Boot", r.INSTALL = "Install", r.UPGRADE = "Upgrade", r.RUN = "Run", r.BOOT_FAILED = "BootFailed", r))(H || {}), M = /* @__PURE__ */ ((r) => (r.BACKOFFICE_DEVELOPMENT = "BackofficeDevelopment", r.DEVELOPMENT = "Development", r.PRODUCTION = "Production", r))(M || {}), q = /* @__PURE__ */ ((r) => (r.SUCCESS = "Success", r.WARNING = "Warning", r.ERROR = "Error", r.INFO = "Info", r))(q || {}), $ = /* @__PURE__ */ ((r) => (r.MINIMAL = "Minimal", r.BASIC = "Basic", r.DETAILED = "Detailed", r))($ || {}), z = /* @__PURE__ */ ((r) => (r.STRING = "String", r.DATE_TIME = "DateTime", r.INTEGER = "Integer", r))(z || {}), Q = /* @__PURE__ */ ((r) => (r.SUCCESS = "Success", r.NOT_FOUND = "NotFound", r.USER_NOT_FOUND = "UserNotFound", r.ALREADY_EXISTS = "AlreadyExists", r))(Q || {}), Y = /* @__PURE__ */ ((r) => (r.DEFAULT = "Default", r.API = "Api", r))(Y || {}), K = /* @__PURE__ */ ((r) => (r.USER_NAME = "UserName", r.LANGUAGE = "Language", r.NAME = "Name", r.EMAIL = "Email", r.ID = "Id", r.CREATE_DATE = "CreateDate", r.UPDATE_DATE = "UpdateDate", r.IS_APPROVED = "IsApproved", r.IS_LOCKED_OUT = "IsLockedOut", r.LAST_LOGIN_DATE = "LastLoginDate", r))(K || {}), J = /* @__PURE__ */ ((r) => (r.ACTIVE = "Active", r.DISABLED = "Disabled", r.LOCKED_OUT = "LockedOut", r.INVITED = "Invited", r.INACTIVE = "Inactive", r.ALL = "All", r))(J || {}), X = async (r, e) => {
  let a = typeof e == "function" ? await e(r) : e;
  if (a) return r.scheme === "bearer" ? `Bearer ${a}` : r.scheme === "basic" ? `Basic ${btoa(a)}` : a;
}, I = (r, e, a) => {
  typeof a == "string" || a instanceof Blob ? r.append(e, a) : r.append(e, JSON.stringify(a));
}, Z = { bodySerializer: (r) => {
  let e = new FormData();
  return Object.entries(r).forEach(([a, u]) => {
    u != null && (Array.isArray(u) ? u.forEach((i) => I(e, a, i)) : I(e, a, u));
  }), e;
} }, ee = { bodySerializer: (r) => JSON.stringify(r, (e, a) => typeof a == "bigint" ? a.toString() : a) }, te = (r) => {
  switch (r) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, re = (r) => {
  switch (r) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, ae = (r) => {
  switch (r) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, B = ({ allowReserved: r, explode: e, name: a, style: u, value: i }) => {
  if (!e) {
    let n = (r ? i : i.map((s) => encodeURIComponent(s))).join(re(u));
    switch (u) {
      case "label":
        return `.${n}`;
      case "matrix":
        return `;${a}=${n}`;
      case "simple":
        return n;
      default:
        return `${a}=${n}`;
    }
  }
  let m = te(u), c = i.map((n) => u === "label" || u === "simple" ? r ? n : encodeURIComponent(n) : v({ allowReserved: r, name: a, value: n })).join(m);
  return u === "label" || u === "matrix" ? m + c : c;
}, v = ({ allowReserved: r, name: e, value: a }) => {
  if (a == null) return "";
  if (typeof a == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${r ? a : encodeURIComponent(a)}`;
}, S = ({ allowReserved: r, explode: e, name: a, style: u, value: i }) => {
  if (i instanceof Date) return `${a}=${i.toISOString()}`;
  if (u !== "deepObject" && !e) {
    let n = [];
    Object.entries(i).forEach(([h, l]) => {
      n = [...n, h, r ? l : encodeURIComponent(l)];
    });
    let s = n.join(",");
    switch (u) {
      case "form":
        return `${a}=${s}`;
      case "label":
        return `.${s}`;
      case "matrix":
        return `;${a}=${s}`;
      default:
        return s;
    }
  }
  let m = ae(u), c = Object.entries(i).map(([n, s]) => v({ allowReserved: r, name: u === "deepObject" ? `${a}[${n}]` : n, value: s })).join(m);
  return u === "label" || u === "matrix" ? m + c : c;
}, ce = /\{[^{}]+\}/g, ne = ({ path: r, url: e }) => {
  let a = e, u = e.match(ce);
  if (u) for (let i of u) {
    let m = !1, c = i.substring(1, i.length - 1), n = "simple";
    c.endsWith("*") && (m = !0, c = c.substring(0, c.length - 1)), c.startsWith(".") ? (c = c.substring(1), n = "label") : c.startsWith(";") && (c = c.substring(1), n = "matrix");
    let s = r[c];
    if (s == null) continue;
    if (Array.isArray(s)) {
      a = a.replace(i, B({ explode: m, name: c, style: n, value: s }));
      continue;
    }
    if (typeof s == "object") {
      a = a.replace(i, S({ explode: m, name: c, style: n, value: s }));
      continue;
    }
    if (n === "matrix") {
      a = a.replace(i, `;${v({ name: c, value: s })}`);
      continue;
    }
    let h = encodeURIComponent(n === "label" ? `.${s}` : s);
    a = a.replace(i, h);
  }
  return a;
}, D = ({ allowReserved: r, array: e, object: a } = {}) => (u) => {
  let i = [];
  if (u && typeof u == "object") for (let m in u) {
    let c = u[m];
    if (c != null) {
      if (Array.isArray(c)) {
        i = [...i, B({ allowReserved: r, explode: !0, name: m, style: "form", value: c, ...e })];
        continue;
      }
      if (typeof c == "object") {
        i = [...i, S({ allowReserved: r, explode: !0, name: m, style: "deepObject", value: c, ...a })];
        continue;
      }
      i = [...i, v({ allowReserved: r, name: m, value: c })];
    }
  }
  return i.join("&");
}, ie = (r) => {
  if (!r) return "stream";
  let e = r.split(";")[0]?.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => e.startsWith(a))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, ue = async ({ security: r, ...e }) => {
  for (let a of r) {
    let u = await X(a, e.auth);
    if (!u) continue;
    let i = a.name ?? "Authorization";
    switch (a.in) {
      case "query":
        e.query || (e.query = {}), e.query[i] = u;
        break;
      case "cookie":
        e.headers.append("Cookie", `${i}=${u}`);
        break;
      case "header":
      default:
        e.headers.set(i, u);
        break;
    }
    return;
  }
}, C = (r) => me({ baseUrl: r.baseUrl, path: r.path, query: r.query, querySerializer: typeof r.querySerializer == "function" ? r.querySerializer : D(r.querySerializer), url: r.url }), me = ({ baseUrl: r, path: e, query: a, querySerializer: u, url: i }) => {
  let m = i.startsWith("/") ? i : `/${i}`, c = (r ?? "") + m;
  e && (c = ne({ path: e, url: c }));
  let n = a ? u(a) : "";
  return n.startsWith("?") && (n = n.substring(1)), n && (c += `?${n}`), c;
}, f = (r, e) => {
  let a = { ...r, ...e };
  return a.baseUrl?.endsWith("/") && (a.baseUrl = a.baseUrl.substring(0, a.baseUrl.length - 1)), a.headers = j(r.headers, e.headers), a;
}, j = (...r) => {
  let e = new Headers();
  for (let a of r) {
    if (!a || typeof a != "object") continue;
    let u = a instanceof Headers ? a.entries() : Object.entries(a);
    for (let [i, m] of u) if (m === null) e.delete(i);
    else if (Array.isArray(m)) for (let c of m) e.append(i, c);
    else m !== void 0 && e.set(i, typeof m == "object" ? JSON.stringify(m) : m);
  }
  return e;
}, T = class {
  _fns;
  constructor() {
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  exists(r) {
    return this._fns.indexOf(r) !== -1;
  }
  eject(r) {
    let e = this._fns.indexOf(r);
    e !== -1 && (this._fns = [...this._fns.slice(0, e), ...this._fns.slice(e + 1)]);
  }
  use(r) {
    this._fns = [...this._fns, r];
  }
}, se = () => ({ error: new T(), request: new T(), response: new T() }), pe = D({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), le = { "Content-Type": "application/json" }, R = (r = {}) => ({ ...ee, headers: le, parseAs: "auto", querySerializer: pe, ...r }), ye = (r = {}) => {
  let e = f(R(), r), a = () => ({ ...e }), u = (c) => (e = f(e, c), a()), i = se(), m = async (c) => {
    let n = { ...e, ...c, fetch: c.fetch ?? e.fetch ?? globalThis.fetch, headers: j(e.headers, c.headers) };
    n.security && await ue({ ...n, security: n.security }), n.body && n.bodySerializer && (n.body = n.bodySerializer(n.body)), (n.body === void 0 || n.body === "") && n.headers.delete("Content-Type");
    let s = C(n), h = { redirect: "follow", ...n }, l = new Request(s, h);
    for (let y of i.request._fns) l = await y(l, n);
    let E = n.fetch, p = await E(l);
    for (let y of i.response._fns) p = await y(p, l, n);
    let g = { request: l, response: p };
    if (p.ok) {
      if (p.status === 204 || p.headers.get("Content-Length") === "0") return { data: {}, ...g };
      let y = (n.parseAs === "auto" ? ie(p.headers.get("Content-Type")) : n.parseAs) ?? "json";
      if (y === "stream") return { data: p.body, ...g };
      let o = await p[y]();
      return y === "json" && (n.responseValidator && await n.responseValidator(o), n.responseTransformer && (o = await n.responseTransformer(o))), { data: o, ...g };
    }
    let b = await p.text();
    try {
      b = JSON.parse(b);
    } catch {
    }
    let d = b;
    for (let y of i.error._fns) d = await y(b, p, l, n);
    if (d = d || {}, n.throwOnError) throw d;
    return { error: d, ...g };
  };
  return { buildUrl: C, connect: (c) => m({ ...c, method: "CONNECT" }), delete: (c) => m({ ...c, method: "DELETE" }), get: (c) => m({ ...c, method: "GET" }), getConfig: a, head: (c) => m({ ...c, method: "HEAD" }), interceptors: i, options: (c) => m({ ...c, method: "OPTIONS" }), patch: (c) => m({ ...c, method: "PATCH" }), post: (c) => m({ ...c, method: "POST" }), put: (c) => m({ ...c, method: "PUT" }), request: m, setConfig: u, trace: (c) => m({ ...c, method: "TRACE" }) };
};
const t = ye(R({
  throwOnError: !0
}));
class he {
  static getCulture(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/culture",
      ...e
    });
  }
}
class de {
  static postDataType(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDataTypeById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/{id}",
      ...e
    });
  }
  static getDataTypeById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/{id}",
      ...e
    });
  }
  static putDataTypeById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postDataTypeByIdCopy(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/{id}/copy",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDataTypeByIdIsUsed(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/{id}/is-used",
      ...e
    });
  }
  static putDataTypeByIdMove(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDataTypeByIdReferencedBy(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/{id}/referenced-by",
      ...e
    });
  }
  /**
   * @deprecated
   */
  static getDataTypeByIdReferences(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/{id}/references",
      ...e
    });
  }
  static getDataTypeConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/configuration",
      ...e
    });
  }
  static postDataTypeFolder(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDataTypeFolderById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/folder/{id}",
      ...e
    });
  }
  static getDataTypeFolderById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/folder/{id}",
      ...e
    });
  }
  static putDataTypeFolderById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/data-type/folder/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getFilterDataType(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/filter/data-type",
      ...e
    });
  }
  static getItemDataType(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/data-type",
      ...e
    });
  }
  static getItemDataTypeSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/data-type/search",
      ...e
    });
  }
  static getTreeDataTypeAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/data-type/ancestors",
      ...e
    });
  }
  static getTreeDataTypeChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/data-type/children",
      ...e
    });
  }
  static getTreeDataTypeRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/data-type/root",
      ...e
    });
  }
}
class ge {
  static getDictionary(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dictionary",
      ...e
    });
  }
  static postDictionary(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dictionary",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDictionaryById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dictionary/{id}",
      ...e
    });
  }
  static getDictionaryById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dictionary/{id}",
      ...e
    });
  }
  static putDictionaryById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dictionary/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDictionaryByIdExport(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dictionary/{id}/export",
      ...e
    });
  }
  static putDictionaryByIdMove(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dictionary/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postDictionaryImport(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dictionary/import",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getItemDictionary(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/dictionary",
      ...e
    });
  }
  static getTreeDictionaryAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/dictionary/ancestors",
      ...e
    });
  }
  static getTreeDictionaryChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/dictionary/children",
      ...e
    });
  }
  static getTreeDictionaryRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/dictionary/root",
      ...e
    });
  }
}
class be {
  static postDocumentBlueprint(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDocumentBlueprintById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/{id}",
      ...e
    });
  }
  static getDocumentBlueprintById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/{id}",
      ...e
    });
  }
  static putDocumentBlueprintById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putDocumentBlueprintByIdMove(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentBlueprintByIdScaffold(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/{id}/scaffold",
      ...e
    });
  }
  static postDocumentBlueprintFolder(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDocumentBlueprintFolderById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/folder/{id}",
      ...e
    });
  }
  static getDocumentBlueprintFolderById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/folder/{id}",
      ...e
    });
  }
  static putDocumentBlueprintFolderById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/folder/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postDocumentBlueprintFromDocument(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-blueprint/from-document",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getItemDocumentBlueprint(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/document-blueprint",
      ...e
    });
  }
  static getTreeDocumentBlueprintAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document-blueprint/ancestors",
      ...e
    });
  }
  static getTreeDocumentBlueprintChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document-blueprint/children",
      ...e
    });
  }
  static getTreeDocumentBlueprintRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document-blueprint/root",
      ...e
    });
  }
}
class oe {
  static postDocumentType(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDocumentTypeById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}",
      ...e
    });
  }
  static getDocumentTypeById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}",
      ...e
    });
  }
  static putDocumentTypeById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentTypeByIdAllowedChildren(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}/allowed-children",
      ...e
    });
  }
  static getDocumentTypeByIdBlueprint(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}/blueprint",
      ...e
    });
  }
  static getDocumentTypeByIdCompositionReferences(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}/composition-references",
      ...e
    });
  }
  static postDocumentTypeByIdCopy(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}/copy",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentTypeByIdExport(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}/export",
      ...e
    });
  }
  static putDocumentTypeByIdImport(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}/import",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putDocumentTypeByIdMove(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentTypeAllowedAtRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/allowed-at-root",
      ...e
    });
  }
  static postDocumentTypeAvailableCompositions(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/available-compositions",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentTypeConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/configuration",
      ...e
    });
  }
  static postDocumentTypeFolder(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDocumentTypeFolderById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/folder/{id}",
      ...e
    });
  }
  static getDocumentTypeFolderById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/folder/{id}",
      ...e
    });
  }
  static putDocumentTypeFolderById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/folder/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postDocumentTypeImport(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-type/import",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getItemDocumentType(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/document-type",
      ...e
    });
  }
  static getItemDocumentTypeSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/document-type/search",
      ...e
    });
  }
  static getTreeDocumentTypeAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document-type/ancestors",
      ...e
    });
  }
  static getTreeDocumentTypeChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document-type/children",
      ...e
    });
  }
  static getTreeDocumentTypeRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document-type/root",
      ...e
    });
  }
}
class ve {
  static getDocumentVersion(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-version",
      ...e
    });
  }
  static getDocumentVersionById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-version/{id}",
      ...e
    });
  }
  static putDocumentVersionByIdPreventCleanup(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-version/{id}/prevent-cleanup",
      ...e
    });
  }
  static postDocumentVersionByIdRollback(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document-version/{id}/rollback",
      ...e
    });
  }
}
class Te {
  static getCollectionDocumentById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/collection/document/{id}",
      ...e
    });
  }
  static postDocument(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDocumentById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}",
      ...e
    });
  }
  static getDocumentById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}",
      ...e
    });
  }
  static putDocumentById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentByIdAuditLog(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/audit-log",
      ...e
    });
  }
  static postDocumentByIdCopy(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/copy",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentByIdDomains(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/domains",
      ...e
    });
  }
  static putDocumentByIdDomains(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/domains",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putDocumentByIdMove(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putDocumentByIdMoveToRecycleBin(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/move-to-recycle-bin",
      ...e
    });
  }
  static getDocumentByIdNotifications(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/notifications",
      ...e
    });
  }
  static putDocumentByIdNotifications(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/notifications",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteDocumentByIdPublicAccess(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/public-access",
      ...e
    });
  }
  static getDocumentByIdPublicAccess(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/public-access",
      ...e
    });
  }
  static postDocumentByIdPublicAccess(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/public-access",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putDocumentByIdPublicAccess(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/public-access",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putDocumentByIdPublish(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/publish",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putDocumentByIdPublishWithDescendants(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/publish-with-descendants",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentByIdPublishWithDescendantsResultByTaskId(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/publish-with-descendants/result/{taskId}",
      ...e
    });
  }
  static getDocumentByIdPublished(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/published",
      ...e
    });
  }
  static getDocumentByIdReferencedBy(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/referenced-by",
      ...e
    });
  }
  static getDocumentByIdReferencedDescendants(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/referenced-descendants",
      ...e
    });
  }
  static putDocumentByIdUnpublish(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/unpublish",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putUmbracoManagementApiV11DocumentByIdValidate11(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1.1/document/{id}/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentAreReferenced(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/are-referenced",
      ...e
    });
  }
  static getDocumentConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/configuration",
      ...e
    });
  }
  static putDocumentSort(e) {
    return (e?.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/sort",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDocumentUrls(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/urls",
      ...e
    });
  }
  static postDocumentValidate(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getItemDocument(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/document",
      ...e
    });
  }
  static getItemDocumentSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/document/search",
      ...e
    });
  }
  static deleteRecycleBinDocument(e) {
    return (e?.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document",
      ...e
    });
  }
  static deleteRecycleBinDocumentById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/{id}",
      ...e
    });
  }
  static getRecycleBinDocumentByIdOriginalParent(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/{id}/original-parent",
      ...e
    });
  }
  static putRecycleBinDocumentByIdRestore(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/{id}/restore",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getRecycleBinDocumentChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/children",
      ...e
    });
  }
  static getRecycleBinDocumentReferencedBy(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/referenced-by",
      ...e
    });
  }
  static getRecycleBinDocumentRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/root",
      ...e
    });
  }
  static getTreeDocumentAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document/ancestors",
      ...e
    });
  }
  static getTreeDocumentChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document/children",
      ...e
    });
  }
  static getTreeDocumentRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document/root",
      ...e
    });
  }
}
class Ie {
  static postDynamicRootQuery(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dynamic-root/query",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getDynamicRootSteps(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/dynamic-root/steps",
      ...e
    });
  }
}
class Ce {
  static getHealthCheckGroup(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/health-check-group",
      ...e
    });
  }
  static getHealthCheckGroupByName(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/health-check-group/{name}",
      ...e
    });
  }
  static postHealthCheckGroupByNameCheck(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/health-check-group/{name}/check",
      ...e
    });
  }
  static postHealthCheckExecuteAction(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/health-check/execute-action",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class fe {
  static getHelp(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/help",
      ...e
    });
  }
}
class Be {
  static getImagingResizeUrls(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/imaging/resize/urls",
      ...e
    });
  }
}
class Se {
  static getImportAnalyze(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/import/analyze",
      ...e
    });
  }
}
class De {
  static getIndexer(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/indexer",
      ...e
    });
  }
  static getIndexerByIndexName(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/indexer/{indexName}",
      ...e
    });
  }
  static postIndexerByIndexNameRebuild(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/indexer/{indexName}/rebuild",
      ...e
    });
  }
}
class je {
  static getInstallSettings(e) {
    return (e?.client ?? t).get({
      url: "/umbraco/management/api/v1/install/settings",
      ...e
    });
  }
  static postInstallSetup(e) {
    return (e?.client ?? t).post({
      url: "/umbraco/management/api/v1/install/setup",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postInstallValidateDatabase(e) {
    return (e?.client ?? t).post({
      url: "/umbraco/management/api/v1/install/validate-database",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class Re {
  static getItemLanguage(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/language",
      ...e
    });
  }
  static getItemLanguageDefault(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/language/default",
      ...e
    });
  }
  static getLanguage(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/language",
      ...e
    });
  }
  static postLanguage(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/language",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteLanguageByIsoCode(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/language/{isoCode}",
      ...e
    });
  }
  static getLanguageByIsoCode(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/language/{isoCode}",
      ...e
    });
  }
  static putLanguageByIsoCode(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/language/{isoCode}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class Ee {
  static getLogViewerLevel(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/level",
      ...e
    });
  }
  static getLogViewerLevelCount(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/level-count",
      ...e
    });
  }
  static getLogViewerLog(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/log",
      ...e
    });
  }
  static getLogViewerMessageTemplate(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/message-template",
      ...e
    });
  }
  static getLogViewerSavedSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/saved-search",
      ...e
    });
  }
  static postLogViewerSavedSearch(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/saved-search",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteLogViewerSavedSearchByName(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/saved-search/{name}",
      ...e
    });
  }
  static getLogViewerSavedSearchByName(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/saved-search/{name}",
      ...e
    });
  }
  static getLogViewerValidateLogsSize(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/log-viewer/validate-logs-size",
      ...e
    });
  }
}
class we {
  static getManifestManifest(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/manifest/manifest",
      ...e
    });
  }
  static getManifestManifestPrivate(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/manifest/manifest/private",
      ...e
    });
  }
  static getManifestManifestPublic(e) {
    return (e?.client ?? t).get({
      url: "/umbraco/management/api/v1/manifest/manifest/public",
      ...e
    });
  }
}
class Ae {
  static getItemMediaType(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/media-type",
      ...e
    });
  }
  static getItemMediaTypeAllowed(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/media-type/allowed",
      ...e
    });
  }
  static getItemMediaTypeFolders(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/media-type/folders",
      ...e
    });
  }
  static getItemMediaTypeSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/media-type/search",
      ...e
    });
  }
  static postMediaType(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteMediaTypeById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}",
      ...e
    });
  }
  static getMediaTypeById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}",
      ...e
    });
  }
  static putMediaTypeById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMediaTypeByIdAllowedChildren(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}/allowed-children",
      ...e
    });
  }
  static getMediaTypeByIdCompositionReferences(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}/composition-references",
      ...e
    });
  }
  static postMediaTypeByIdCopy(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}/copy",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMediaTypeByIdExport(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}/export",
      ...e
    });
  }
  static putMediaTypeByIdImport(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}/import",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putMediaTypeByIdMove(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMediaTypeAllowedAtRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/allowed-at-root",
      ...e
    });
  }
  static postMediaTypeAvailableCompositions(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/available-compositions",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMediaTypeConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/configuration",
      ...e
    });
  }
  static postMediaTypeFolder(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteMediaTypeFolderById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/folder/{id}",
      ...e
    });
  }
  static getMediaTypeFolderById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/folder/{id}",
      ...e
    });
  }
  static putMediaTypeFolderById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/folder/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postMediaTypeImport(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media-type/import",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getTreeMediaTypeAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/media-type/ancestors",
      ...e
    });
  }
  static getTreeMediaTypeChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/media-type/children",
      ...e
    });
  }
  static getTreeMediaTypeRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/media-type/root",
      ...e
    });
  }
}
class Pe {
  static getCollectionMedia(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/collection/media",
      ...e
    });
  }
  static getItemMedia(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/media",
      ...e
    });
  }
  static getItemMediaSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/media/search",
      ...e
    });
  }
  static postMedia(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteMediaById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}",
      ...e
    });
  }
  static getMediaById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}",
      ...e
    });
  }
  static putMediaById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMediaByIdAuditLog(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}/audit-log",
      ...e
    });
  }
  static putMediaByIdMove(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putMediaByIdMoveToRecycleBin(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}/move-to-recycle-bin",
      ...e
    });
  }
  static getMediaByIdReferencedBy(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}/referenced-by",
      ...e
    });
  }
  static getMediaByIdReferencedDescendants(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}/referenced-descendants",
      ...e
    });
  }
  static putMediaByIdValidate(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/{id}/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMediaAreReferenced(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/are-referenced",
      ...e
    });
  }
  /**
   * @deprecated
   */
  static getMediaConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/configuration",
      ...e
    });
  }
  static putMediaSort(e) {
    return (e?.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/sort",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMediaUrls(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/urls",
      ...e
    });
  }
  static postMediaValidate(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/media/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteRecycleBinMedia(e) {
    return (e?.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/media",
      ...e
    });
  }
  static deleteRecycleBinMediaById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/media/{id}",
      ...e
    });
  }
  static getRecycleBinMediaByIdOriginalParent(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/media/{id}/original-parent",
      ...e
    });
  }
  static putRecycleBinMediaByIdRestore(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/media/{id}/restore",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getRecycleBinMediaChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/media/children",
      ...e
    });
  }
  static getRecycleBinMediaReferencedBy(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/media/referenced-by",
      ...e
    });
  }
  static getRecycleBinMediaRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/media/root",
      ...e
    });
  }
  static getTreeMediaAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/media/ancestors",
      ...e
    });
  }
  static getTreeMediaChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/media/children",
      ...e
    });
  }
  static getTreeMediaRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/media/root",
      ...e
    });
  }
}
class Ne {
  static getItemMemberGroup(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/member-group",
      ...e
    });
  }
  static getMemberGroup(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-group",
      ...e
    });
  }
  static postMemberGroup(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-group",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteMemberGroupById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-group/{id}",
      ...e
    });
  }
  static getMemberGroupById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-group/{id}",
      ...e
    });
  }
  static putMemberGroupById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-group/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getTreeMemberGroupRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/member-group/root",
      ...e
    });
  }
}
class Ue {
  static getItemMemberType(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/member-type",
      ...e
    });
  }
  static getItemMemberTypeSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/member-type/search",
      ...e
    });
  }
  static postMemberType(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-type",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteMemberTypeById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-type/{id}",
      ...e
    });
  }
  static getMemberTypeById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-type/{id}",
      ...e
    });
  }
  static putMemberTypeById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-type/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMemberTypeByIdCompositionReferences(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-type/{id}/composition-references",
      ...e
    });
  }
  static postMemberTypeByIdCopy(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-type/{id}/copy",
      ...e
    });
  }
  static postMemberTypeAvailableCompositions(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-type/available-compositions",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMemberTypeConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member-type/configuration",
      ...e
    });
  }
  static getTreeMemberTypeRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/member-type/root",
      ...e
    });
  }
}
class Le {
  static getFilterMember(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/filter/member",
      ...e
    });
  }
  static getItemMember(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/member",
      ...e
    });
  }
  static getItemMemberSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/member/search",
      ...e
    });
  }
  static postMember(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteMemberById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/{id}",
      ...e
    });
  }
  static getMemberById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/{id}",
      ...e
    });
  }
  static putMemberById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMemberByIdReferencedBy(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/{id}/referenced-by",
      ...e
    });
  }
  static getMemberByIdReferencedDescendants(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/{id}/referenced-descendants",
      ...e
    });
  }
  static putMemberByIdValidate(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/{id}/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getMemberAreReferenced(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/are-referenced",
      ...e
    });
  }
  static getMemberConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/configuration",
      ...e
    });
  }
  static postMemberValidate(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/member/validate",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class Oe {
  static postModelsBuilderBuild(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/models-builder/build",
      ...e
    });
  }
  static getModelsBuilderDashboard(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/models-builder/dashboard",
      ...e
    });
  }
  static getModelsBuilderStatus(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/models-builder/status",
      ...e
    });
  }
}
class Fe {
  static getObjectTypes(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/object-types",
      ...e
    });
  }
}
class _e {
  static getOembedQuery(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/oembed/query",
      ...e
    });
  }
}
class ke {
  static postPackageByNameRunMigration(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/{name}/run-migration",
      ...e
    });
  }
  static getPackageConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/configuration",
      ...e
    });
  }
  static getPackageCreated(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/created",
      ...e
    });
  }
  static postPackageCreated(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/created",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deletePackageCreatedById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/created/{id}",
      ...e
    });
  }
  static getPackageCreatedById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/created/{id}",
      ...e
    });
  }
  static putPackageCreatedById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/created/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getPackageCreatedByIdDownload(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/created/{id}/download",
      ...e
    });
  }
  static getPackageMigrationStatus(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/package/migration-status",
      ...e
    });
  }
}
class Ve {
  static getItemPartialView(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/partial-view",
      ...e
    });
  }
  static postPartialView(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deletePartialViewByPath(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/{path}",
      ...e
    });
  }
  static getPartialViewByPath(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/{path}",
      ...e
    });
  }
  static putPartialViewByPath(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/{path}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putPartialViewByPathRename(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/{path}/rename",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postPartialViewFolder(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deletePartialViewFolderByPath(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/folder/{path}",
      ...e
    });
  }
  static getPartialViewFolderByPath(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/folder/{path}",
      ...e
    });
  }
  static getPartialViewSnippet(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/snippet",
      ...e
    });
  }
  static getPartialViewSnippetById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/partial-view/snippet/{id}",
      ...e
    });
  }
  static getTreePartialViewAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/partial-view/ancestors",
      ...e
    });
  }
  static getTreePartialViewChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/partial-view/children",
      ...e
    });
  }
  static getTreePartialViewRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/partial-view/root",
      ...e
    });
  }
}
class xe {
  static deletePreview(e) {
    return (e?.client ?? t).delete({
      url: "/umbraco/management/api/v1/preview",
      ...e
    });
  }
  static postPreview(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/preview",
      ...e
    });
  }
}
class Ge {
  static getProfilingStatus(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/profiling/status",
      ...e
    });
  }
  static putProfilingStatus(e) {
    return (e?.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/profiling/status",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class We {
  static getPropertyTypeIsUsed(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/property-type/is-used",
      ...e
    });
  }
}
class He {
  static postPublishedCacheRebuild(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/published-cache/rebuild",
      ...e
    });
  }
  static getPublishedCacheRebuildStatus(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/published-cache/rebuild/status",
      ...e
    });
  }
  static postPublishedCacheReload(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/published-cache/reload",
      ...e
    });
  }
}
class Me {
  static getRedirectManagement(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/redirect-management",
      ...e
    });
  }
  static deleteRedirectManagementById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/redirect-management/{id}",
      ...e
    });
  }
  static getRedirectManagementById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/redirect-management/{id}",
      ...e
    });
  }
  static getRedirectManagementStatus(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/redirect-management/status",
      ...e
    });
  }
  static postRedirectManagementStatus(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/redirect-management/status",
      ...e
    });
  }
}
class qe {
  static getItemRelationType(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/relation-type",
      ...e
    });
  }
  static getRelationType(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/relation-type",
      ...e
    });
  }
  static getRelationTypeById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/relation-type/{id}",
      ...e
    });
  }
}
class $e {
  static getRelationByRelationTypeId(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/relation/type/{id}",
      ...e
    });
  }
}
class ze {
  static getItemScript(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/script",
      ...e
    });
  }
  static postScript(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/script",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteScriptByPath(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/script/{path}",
      ...e
    });
  }
  static getScriptByPath(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/script/{path}",
      ...e
    });
  }
  static putScriptByPath(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/script/{path}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putScriptByPathRename(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/script/{path}/rename",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postScriptFolder(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/script/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteScriptFolderByPath(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/script/folder/{path}",
      ...e
    });
  }
  static getScriptFolderByPath(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/script/folder/{path}",
      ...e
    });
  }
  static getTreeScriptAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/script/ancestors",
      ...e
    });
  }
  static getTreeScriptChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/script/children",
      ...e
    });
  }
  static getTreeScriptRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/script/root",
      ...e
    });
  }
}
class Qe {
  static getSearcher(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/searcher",
      ...e
    });
  }
  static getSearcherBySearcherNameQuery(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/searcher/{searcherName}/query",
      ...e
    });
  }
}
class Ye {
  static getSecurityConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/security/configuration",
      ...e
    });
  }
  static postSecurityForgotPassword(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/security/forgot-password",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postSecurityForgotPasswordReset(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/security/forgot-password/reset",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postSecurityForgotPasswordVerify(e) {
    return (e?.client ?? t).post({
      url: "/umbraco/management/api/v1/security/forgot-password/verify",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class Ke {
  static getSegment(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/segment",
      ...e
    });
  }
}
class Je {
  static getServerConfiguration(e) {
    return (e?.client ?? t).get({
      url: "/umbraco/management/api/v1/server/configuration",
      ...e
    });
  }
  static getServerInformation(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/server/information",
      ...e
    });
  }
  static getServerStatus(e) {
    return (e?.client ?? t).get({
      url: "/umbraco/management/api/v1/server/status",
      ...e
    });
  }
  static getServerTroubleshooting(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/server/troubleshooting",
      ...e
    });
  }
  static getServerUpgradeCheck(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/server/upgrade-check",
      ...e
    });
  }
}
class Xe {
  static getItemStaticFile(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/static-file",
      ...e
    });
  }
  static getTreeStaticFileAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/static-file/ancestors",
      ...e
    });
  }
  static getTreeStaticFileChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/static-file/children",
      ...e
    });
  }
  static getTreeStaticFileRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/static-file/root",
      ...e
    });
  }
}
class Ze {
  static getItemStylesheet(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/stylesheet",
      ...e
    });
  }
  static postStylesheet(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/stylesheet",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteStylesheetByPath(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/stylesheet/{path}",
      ...e
    });
  }
  static getStylesheetByPath(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/stylesheet/{path}",
      ...e
    });
  }
  static putStylesheetByPath(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/stylesheet/{path}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putStylesheetByPathRename(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/stylesheet/{path}/rename",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postStylesheetFolder(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/stylesheet/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteStylesheetFolderByPath(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/stylesheet/folder/{path}",
      ...e
    });
  }
  static getStylesheetFolderByPath(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/stylesheet/folder/{path}",
      ...e
    });
  }
  static getTreeStylesheetAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/stylesheet/ancestors",
      ...e
    });
  }
  static getTreeStylesheetChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/stylesheet/children",
      ...e
    });
  }
  static getTreeStylesheetRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/stylesheet/root",
      ...e
    });
  }
}
class et {
  static getTag(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tag",
      ...e
    });
  }
}
class tt {
  static getTelemetry(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/telemetry",
      ...e
    });
  }
  static getTelemetryLevel(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/telemetry/level",
      ...e
    });
  }
  static postTelemetryLevel(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/telemetry/level",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class rt {
  static getItemTemplate(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/template",
      ...e
    });
  }
  static getItemTemplateSearch(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/template/search",
      ...e
    });
  }
  static postTemplate(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/template",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteTemplateById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/template/{id}",
      ...e
    });
  }
  static getTemplateById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/template/{id}",
      ...e
    });
  }
  static putTemplateById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/template/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getTemplateConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/template/configuration",
      ...e
    });
  }
  static postTemplateQueryExecute(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/template/query/execute",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getTemplateQuerySettings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/template/query/settings",
      ...e
    });
  }
  static getTreeTemplateAncestors(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/template/ancestors",
      ...e
    });
  }
  static getTreeTemplateChildren(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/template/children",
      ...e
    });
  }
  static getTreeTemplateRoot(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/template/root",
      ...e
    });
  }
}
class at {
  static postTemporaryFile(e) {
    return (e?.client ?? t).post({
      ...Z,
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/temporary-file",
      ...e,
      headers: {
        "Content-Type": null,
        ...e?.headers
      }
    });
  }
  static deleteTemporaryFileById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/temporary-file/{id}",
      ...e
    });
  }
  static getTemporaryFileById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/temporary-file/{id}",
      ...e
    });
  }
  static getTemporaryFileConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/temporary-file/configuration",
      ...e
    });
  }
}
class ct {
  static postUpgradeAuthorize(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/upgrade/authorize",
      ...e
    });
  }
  static getUpgradeSettings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/upgrade/settings",
      ...e
    });
  }
}
class nt {
  static getUserData(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-data",
      ...e
    });
  }
  static postUserData(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-data",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static putUserData(e) {
    return (e?.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-data",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getUserDataById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-data/{id}",
      ...e
    });
  }
}
class it {
  static getFilterUserGroup(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/filter/user-group",
      ...e
    });
  }
  static getItemUserGroup(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/user-group",
      ...e
    });
  }
  static deleteUserGroup(e) {
    return (e?.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-group",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getUserGroup(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-group",
      ...e
    });
  }
  static postUserGroup(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-group",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteUserGroupById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-group/{id}",
      ...e
    });
  }
  static getUserGroupById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-group/{id}",
      ...e
    });
  }
  static putUserGroupById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-group/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteUserGroupByIdUsers(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-group/{id}/users",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserGroupByIdUsers(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user-group/{id}/users",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class ut {
  static getFilterUser(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/filter/user",
      ...e
    });
  }
  static getItemUser(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/user",
      ...e
    });
  }
  static deleteUser(e) {
    return (e?.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getUser(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user",
      ...e
    });
  }
  static postUser(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteUserById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}",
      ...e
    });
  }
  static getUserById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}",
      ...e
    });
  }
  static putUserById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getUserById2Fa(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}/2fa",
      ...e
    });
  }
  static deleteUserById2FaByProviderName(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}/2fa/{providerName}",
      ...e
    });
  }
  static getUserByIdCalculateStartNodes(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}/calculate-start-nodes",
      ...e
    });
  }
  static postUserByIdChangePassword(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}/change-password",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getUserByIdClientCredentials(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}/client-credentials",
      ...e
    });
  }
  static postUserByIdClientCredentials(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}/client-credentials",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteUserByIdClientCredentialsByClientId(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}/client-credentials/{clientId}",
      ...e
    });
  }
  static postUserByIdResetPassword(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/{id}/reset-password",
      ...e
    });
  }
  static deleteUserAvatarById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/avatar/{id}",
      ...e
    });
  }
  static postUserAvatarById(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/avatar/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getUserConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/configuration",
      ...e
    });
  }
  static getUserCurrent(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current",
      ...e
    });
  }
  static getUserCurrent2Fa(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/2fa",
      ...e
    });
  }
  static deleteUserCurrent2FaByProviderName(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/2fa/{providerName}",
      ...e
    });
  }
  static getUserCurrent2FaByProviderName(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/2fa/{providerName}",
      ...e
    });
  }
  static postUserCurrent2FaByProviderName(e) {
    return (e.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/2fa/{providerName}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserCurrentAvatar(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/avatar",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserCurrentChangePassword(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/change-password",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getUserCurrentConfiguration(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/configuration",
      ...e
    });
  }
  static getUserCurrentLoginProviders(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/login-providers",
      ...e
    });
  }
  static getUserCurrentPermissions(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/permissions",
      ...e
    });
  }
  static getUserCurrentPermissionsDocument(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/permissions/document",
      ...e
    });
  }
  static getUserCurrentPermissionsMedia(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/current/permissions/media",
      ...e
    });
  }
  static postUserDisable(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/disable",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserEnable(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/enable",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserInvite(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/invite",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserInviteCreatePassword(e) {
    return (e?.client ?? t).post({
      url: "/umbraco/management/api/v1/user/invite/create-password",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserInviteResend(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/invite/resend",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserInviteVerify(e) {
    return (e?.client ?? t).post({
      url: "/umbraco/management/api/v1/user/invite/verify",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserSetUserGroups(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/set-user-groups",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static postUserUnlock(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/user/unlock",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
}
class mt {
  static getItemWebhook(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/item/webhook",
      ...e
    });
  }
  static getWebhook(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/webhook",
      ...e
    });
  }
  static postWebhook(e) {
    return (e?.client ?? t).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/webhook",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static deleteWebhookById(e) {
    return (e.client ?? t).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/webhook/{id}",
      ...e
    });
  }
  static getWebhookById(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/webhook/{id}",
      ...e
    });
  }
  static putWebhookById(e) {
    return (e.client ?? t).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/webhook/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e?.headers
      }
    });
  }
  static getWebhookByIdLogs(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/webhook/{id}/logs",
      ...e
    });
  }
  static getWebhookEvents(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/webhook/events",
      ...e
    });
  }
  static getWebhookLogs(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/webhook/logs",
      ...e
    });
  }
}
export {
  w as AuditTypeModel,
  A as CompositionTypeModel,
  he as CultureService,
  P as DataTypeChangeModeModel,
  de as DataTypeService,
  ge as DictionaryService,
  N as DirectionModel,
  be as DocumentBlueprintService,
  Te as DocumentService,
  oe as DocumentTypeService,
  U as DocumentVariantStateModel,
  ve as DocumentVersionService,
  Ie as DynamicRootService,
  L as EventMessageTypeModel,
  Ce as HealthCheckService,
  O as HealthStatusModel,
  fe as HelpService,
  F as ImageCropModeModel,
  Be as ImagingService,
  Se as ImportService,
  De as IndexerService,
  je as InstallService,
  Re as LanguageService,
  _ as LogLevelModel,
  Ee as LogViewerService,
  we as ManifestService,
  Pe as MediaService,
  Ae as MediaTypeService,
  Ne as MemberGroupService,
  k as MemberKindModel,
  Le as MemberService,
  Ue as MemberTypeService,
  Oe as ModelsBuilderService,
  V as ModelsModeModel,
  _e as OEmbedService,
  Fe as ObjectTypesService,
  x as OperatorModel,
  G as OutOfDateTypeModel,
  ke as PackageService,
  Ve as PartialViewService,
  xe as PreviewService,
  Ge as ProfilingService,
  We as PropertyTypeService,
  He as PublishedCacheService,
  Me as RedirectManagementService,
  W as RedirectStatusModel,
  $e as RelationService,
  qe as RelationTypeService,
  H as RuntimeLevelModel,
  M as RuntimeModeModel,
  ze as ScriptService,
  Qe as SearcherService,
  Ye as SecurityService,
  Ke as SegmentService,
  Je as ServerService,
  Xe as StaticFileService,
  q as StatusResultTypeModel,
  Ze as StylesheetService,
  et as TagService,
  $ as TelemetryLevelModel,
  tt as TelemetryService,
  z as TemplateQueryPropertyTypeModel,
  rt as TemplateService,
  at as TemporaryFileService,
  ct as UpgradeService,
  Q as UserDataOperationStatusModel,
  nt as UserDataService,
  it as UserGroupService,
  Y as UserKindModel,
  K as UserOrderModel,
  ut as UserService,
  J as UserStateModel,
  mt as WebhookService,
  t as client
};
//# sourceMappingURL=index.js.map

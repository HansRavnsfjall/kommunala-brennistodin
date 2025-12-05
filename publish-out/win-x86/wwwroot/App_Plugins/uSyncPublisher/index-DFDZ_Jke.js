var Oi = Object.defineProperty;
var mr = (t) => {
  throw TypeError(t);
};
var xi = (t, e, r) => e in t ? Oi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var br = (t, e, r) => xi(t, typeof e != "symbol" ? e + "" : e, r), At = (t, e, r) => e.has(t) || mr("Cannot " + r);
var l = (t, e, r) => (At(t, e, "read from private field"), r ? r.call(t) : e.get(t)), v = (t, e, r) => e.has(t) ? mr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), y = (t, e, r, s) => (At(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r), W = (t, e, r) => (At(t, e, "access private method"), r);
import { UMB_AUTH_CONTEXT as ki } from "@umbraco-cms/backoffice/auth";
import { state as S, customElement as f, when as N, html as c, nothing as p, property as u, css as w, LitElement as J, classMap as Se } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalToken as qt, UmbModalBaseElement as Ai, UMB_MODAL_MANAGER_CONTEXT as St } from "@umbraco-cms/backoffice/modal";
import { UmbControllerBase as Xe } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as d } from "@umbraco-cms/backoffice/resources";
import { UmbElementMixin as ce } from "@umbraco-cms/backoffice/element-api";
import { UmbContextToken as Ae } from "@umbraco-cms/backoffice/context-api";
import { UmbArrayState as Dt, UmbObjectState as De, UmbBooleanState as Ui, UmbStringState as Ii } from "@umbraco-cms/backoffice/observable-api";
import { UMB_NOTIFICATION_CONTEXT as Ni } from "@umbraco-cms/backoffice/notification";
import { UMB_USER_GROUP_PICKER_MODAL as Ri } from "@umbraco-cms/backoffice/user-group";
import { UMB_TEMPLATE_ENTITY_TYPE as Dr, UMB_TEMPLATE_ROOT_ENTITY_TYPE as Mi } from "@umbraco-cms/backoffice/template";
import { UMB_DOCUMENT_ENTITY_TYPE as Kt, UMB_USER_PERMISSION_DOCUMENT_PUBLISH as Di, UMB_DOCUMENT_ROOT_ENTITY_TYPE as Bi } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_ENTITY_TYPE as Br, UMB_MEDIA_ROOT_ENTITY_TYPE as Li } from "@umbraco-cms/backoffice/media";
import { UMB_DATA_TYPE_ENTITY_TYPE as Lr, UMB_DATA_TYPE_ROOT_ENTITY_TYPE as Yi, UMB_DATA_TYPE_FOLDER_ENTITY_TYPE as ji } from "@umbraco-cms/backoffice/data-type";
import { UmbTreeServerDataSourceBase as Gi, UmbUniqueTreeStore as Vi, UmbTreeRepositoryBase as zi } from "@umbraco-cms/backoffice/tree";
import { UmbStoreConnector as Wi } from "@umbraco-cms/backoffice/store";
import { UmbEditableWorkspaceContextBase as Yr, UmbWorkspaceActionBase as Xt } from "@umbraco-cms/backoffice/workspace";
import { UMB_DOCUMENT_TYPE_ENTITY_TYPE as Hi, UMB_DOCUMENT_TYPE_ROOT_ENTITY_TYPE as Fi, UMB_DOCUMENT_TYPE_FOLDER_ENTITY_TYPE as qi } from "@umbraco-cms/backoffice/document-type";
import { UMB_MEDIA_TYPE_ENTITY_TYPE as Ki, UMB_MEDIA_TYPE_ROOT_ENTITY_TYPE as Xi } from "@umbraco-cms/backoffice/media-type";
import { UMB_MEMBER_TYPE_ENTITY_TYPE as Ji, UMB_MEMBER_TYPE_ROOT_ENTITY_TYPE as Qi } from "@umbraco-cms/backoffice/member-type";
import { UMB_STATIC_FILE_ENTITY_TYPE as Zi, UMB_STATIC_FILE_FOLDER_ENTITY_TYPE as ea, UMB_STATIC_FILE_ROOT_ENTITY_TYPE as ta } from "@umbraco-cms/backoffice/static-file";
import { UMB_PARTIAL_VIEW_ENTITY_TYPE as ra, UMB_PARTIAL_VIEW_ROOT_ENTITY_TYPE as sa } from "@umbraco-cms/backoffice/partial-view";
import { UMB_STYLESHEET_ROOT_ENTITY_TYPE as ia, UMB_STYLESHEET_ENTITY_TYPE as aa } from "@umbraco-cms/backoffice/stylesheet";
import { UMB_DICTIONARY_ROOT_ENTITY_TYPE as na, UMB_DICTIONARY_ENTITY_TYPE as la } from "@umbraco-cms/backoffice/dictionary";
import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as ca } from "@umbraco-cms/backoffice/recycle-bin";
import { UMB_DOCUMENT_BLUEPRINT_ROOT_ENTITY_TYPE as oa, UMB_DOCUMENT_BLUEPRINT_ENTITY_TYPE as ua, UMB_DOCUMENT_BLUEPRINT_FOLDER_ENTITY_TYPE as ha } from "@umbraco-cms/backoffice/document-blueprint";
import { UMB_ENTITY_ACTION_DEFAULT_KIND_MANIFEST as jr } from "@umbraco-cms/backoffice/entity-action";
import { UMB_SCRIPT_ROOT_ENTITY_TYPE as da, UMB_SCRIPT_ENTITY_TYPE as pa } from "@umbraco-cms/backoffice/script";
import { UmbConditionBase as Jt } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_ENTITY_CONTEXT as va } from "@umbraco-cms/backoffice/entity";
import { UMB_CURRENT_USER_CONTEXT as ya } from "@umbraco-cms/backoffice/current-user";
var ma = /* @__PURE__ */ ((t) => (t.NO_CHANGE = "NoChange", t.CREATE = "Create", t.UPDATE = "Update", t.DELETE = "Delete", t.ERROR = "Error", t.WARNING = "Warning", t))(ma || {}), q = /* @__PURE__ */ ((t) => (t.NO_CHANGE = "NoChange", t.CREATE = "Create", t.IMPORT = "Import", t.EXPORT = "Export", t.UPDATE = "Update", t.DELETE = "Delete", t.WILL_CHANGE = "WillChange", t.INFORMATION = "Information", t.ROLLEDBACK = "Rolledback", t.FAIL = "Fail", t.IMPORT_FAIL = "ImportFail", t.MISMATCH = "Mismatch", t.PARENT_MISSING = "ParentMissing", t.HIDDEN = "Hidden", t.CLEAN = "Clean", t.REMOVED = "Removed", t))(q || {}), ba = /* @__PURE__ */ ((t) => (t.NONE = "None", t.INCLUDE_CHILDREN = "IncludeChildren", t.INCLUDE_ANCESTORS = "IncludeAncestors", t.INCLUDE_DEPENDENCIES = "IncludeDependencies", t.INCLUDE_VIEWS = "IncludeViews", t.INCLUDE_MEDIA = "IncludeMedia", t.INCLUDE_LINKED = "IncludeLinked", t.INCLUDE_MEDIA_FILES = "IncludeMediaFiles", t.INCLUDE_CONFIG = "IncludeConfig", t.ADJACENT_ONLY = "AdjacentOnly", t.ROOT_SYNC = "RootSync", t.INCLUDE_CONTENTS = "IncludeContents", t.PUBLISHED_DEPENDENCIES = "PublishedDependencies", t))(ba || {}), Ue = /* @__PURE__ */ ((t) => (t.PUSH = "Push", t.PULL = "Pull", t.PUSH_MEDIA = "PushMedia", t.PULL_MEDIA = "PullMedia", t.REPORT = "Report", t.CONFIG_PUSH = "ConfigPush", t.CONFIG_PULL = "ConfigPull", t.SETTINGS_PUSH = "SettingsPush", t.SETTINGS_PULL = "SettingsPull", t.FILE_PUSH = "FilePush", t.FILE_PULL = "FilePull", t.SEED = "Seed", t.SYNC_SETUP = "SyncSetup", t.ANY = "Any", t))(Ue || {}), Gr = /* @__PURE__ */ ((t) => (t.UNKNOWN = "Unknown", t.UNAVAILABLE = "Unavailable", t.UNREACHABLE = "Unreachable", t.UNAUTHORIZED = "Unauthorized", t.SERVER_ERROR = "ServerError", t.DISABLED = "Disabled", t.API_MISMATCH = "ApiMismatch", t.UNLICENCED = "Unlicenced", t.NOT_ENABLED = "NotEnabled", t.UNKNOWN_SERVER = "UnknownServer", t.NO_PUBLISHER = "NoPublisher", t.NOT_FOUND = "NotFound", t.INVALID_RESPONSE = "InvalidResponse", t.SUCCESS = "Success", t))(Gr || {}), fa = async (t, e) => {
  let r = typeof e == "function" ? await e(t) : e;
  if (r) return t.scheme === "bearer" ? `Bearer ${r}` : t.scheme === "basic" ? `Basic ${btoa(r)}` : r;
}, _a = { bodySerializer: (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() : r) }, ga = (t) => {
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
}, Sa = (t) => {
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
}, wa = (t) => {
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
}, Vr = ({ allowReserved: t, explode: e, name: r, style: s, value: i }) => {
  if (!e) {
    let o = (t ? i : i.map((_) => encodeURIComponent(_))).join(Sa(s));
    switch (s) {
      case "label":
        return `.${o}`;
      case "matrix":
        return `;${r}=${o}`;
      case "simple":
        return o;
      default:
        return `${r}=${o}`;
    }
  }
  let a = ga(s), n = i.map((o) => s === "label" || s === "simple" ? t ? o : encodeURIComponent(o) : wt({ allowReserved: t, name: r, value: o })).join(a);
  return s === "label" || s === "matrix" ? a + n : n;
}, wt = ({ allowReserved: t, name: e, value: r }) => {
  if (r == null) return "";
  if (typeof r == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${t ? r : encodeURIComponent(r)}`;
}, zr = ({ allowReserved: t, explode: e, name: r, style: s, value: i }) => {
  if (i instanceof Date) return `${r}=${i.toISOString()}`;
  if (s !== "deepObject" && !e) {
    let o = [];
    Object.entries(i).forEach(([Ie, Q]) => {
      o = [...o, Ie, t ? Q : encodeURIComponent(Q)];
    });
    let _ = o.join(",");
    switch (s) {
      case "form":
        return `${r}=${_}`;
      case "label":
        return `.${_}`;
      case "matrix":
        return `;${r}=${_}`;
      default:
        return _;
    }
  }
  let a = wa(s), n = Object.entries(i).map(([o, _]) => wt({ allowReserved: t, name: s === "deepObject" ? `${r}[${o}]` : o, value: _ })).join(a);
  return s === "label" || s === "matrix" ? a + n : n;
}, Ca = /\{[^{}]+\}/g, Ea = ({ path: t, url: e }) => {
  let r = e, s = e.match(Ca);
  if (s) for (let i of s) {
    let a = !1, n = i.substring(1, i.length - 1), o = "simple";
    n.endsWith("*") && (a = !0, n = n.substring(0, n.length - 1)), n.startsWith(".") ? (n = n.substring(1), o = "label") : n.startsWith(";") && (n = n.substring(1), o = "matrix");
    let _ = t[n];
    if (_ == null) continue;
    if (Array.isArray(_)) {
      r = r.replace(i, Vr({ explode: a, name: n, style: o, value: _ }));
      continue;
    }
    if (typeof _ == "object") {
      r = r.replace(i, zr({ explode: a, name: n, style: o, value: _ }));
      continue;
    }
    if (o === "matrix") {
      r = r.replace(i, `;${wt({ name: n, value: _ })}`);
      continue;
    }
    let Ie = encodeURIComponent(o === "label" ? `.${_}` : _);
    r = r.replace(i, Ie);
  }
  return r;
}, Wr = ({ allowReserved: t, array: e, object: r } = {}) => (s) => {
  let i = [];
  if (s && typeof s == "object") for (let a in s) {
    let n = s[a];
    if (n != null) if (Array.isArray(n)) {
      let o = Vr({ allowReserved: t, explode: !0, name: a, style: "form", value: n, ...e });
      o && i.push(o);
    } else if (typeof n == "object") {
      let o = zr({ allowReserved: t, explode: !0, name: a, style: "deepObject", value: n, ...r });
      o && i.push(o);
    } else {
      let o = wt({ allowReserved: t, name: a, value: n });
      o && i.push(o);
    }
  }
  return i.join("&");
}, Pa = (t) => {
  var r;
  if (!t) return "stream";
  let e = (r = t.split(";")[0]) == null ? void 0 : r.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((s) => e.startsWith(s))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, $a = async ({ security: t, ...e }) => {
  for (let r of t) {
    let s = await fa(r, e.auth);
    if (!s) continue;
    let i = r.name ?? "Authorization";
    switch (r.in) {
      case "query":
        e.query || (e.query = {}), e.query[i] = s;
        break;
      case "cookie":
        e.headers.append("Cookie", `${i}=${s}`);
        break;
      case "header":
      default:
        e.headers.set(i, s);
        break;
    }
    return;
  }
}, fr = (t) => Ta({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : Wr(t.querySerializer), url: t.url }), Ta = ({ baseUrl: t, path: e, query: r, querySerializer: s, url: i }) => {
  let a = i.startsWith("/") ? i : `/${i}`, n = (t ?? "") + a;
  e && (n = Ea({ path: e, url: n }));
  let o = r ? s(r) : "";
  return o.startsWith("?") && (o = o.substring(1)), o && (n += `?${o}`), n;
}, _r = (t, e) => {
  var s;
  let r = { ...t, ...e };
  return (s = r.baseUrl) != null && s.endsWith("/") && (r.baseUrl = r.baseUrl.substring(0, r.baseUrl.length - 1)), r.headers = Hr(t.headers, e.headers), r;
}, Hr = (...t) => {
  let e = new Headers();
  for (let r of t) {
    if (!r || typeof r != "object") continue;
    let s = r instanceof Headers ? r.entries() : Object.entries(r);
    for (let [i, a] of s) if (a === null) e.delete(i);
    else if (Array.isArray(a)) for (let n of a) e.append(i, n);
    else a !== void 0 && e.set(i, typeof a == "object" ? JSON.stringify(a) : a);
  }
  return e;
}, Ut = class {
  constructor() {
    br(this, "_fns");
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
    let r = this.getInterceptorIndex(t);
    return this._fns[r] ? (this._fns[r] = e, t) : !1;
  }
  use(t) {
    return this._fns = [...this._fns, t], this._fns.length - 1;
  }
}, Oa = () => ({ error: new Ut(), request: new Ut(), response: new Ut() }), xa = Wr({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), ka = { "Content-Type": "application/json" }, Fr = (t = {}) => ({ ..._a, headers: ka, parseAs: "auto", querySerializer: xa, ...t }), Aa = (t = {}) => {
  let e = _r(Fr(), t), r = () => ({ ...e }), s = (n) => (e = _r(e, n), r()), i = Oa(), a = async (n) => {
    let o = { ...e, ...n, fetch: n.fetch ?? e.fetch ?? globalThis.fetch, headers: Hr(e.headers, n.headers) };
    o.security && await $a({ ...o, security: o.security }), o.body && o.bodySerializer && (o.body = o.bodySerializer(o.body)), (o.body === void 0 || o.body === "") && o.headers.delete("Content-Type");
    let _ = fr(o), Ie = { redirect: "follow", ...o }, Q = new Request(_, Ie);
    for (let M of i.request._fns) M && (Q = await M(Q, o));
    let Ti = o.fetch, B = await Ti(Q);
    for (let M of i.response._fns) M && (B = await M(B, Q, o));
    let tt = { request: Q, response: B };
    if (B.ok) {
      if (B.status === 204 || B.headers.get("Content-Length") === "0") return { data: {}, ...tt };
      let M = (o.parseAs === "auto" ? Pa(B.headers.get("Content-Type")) : o.parseAs) ?? "json";
      if (M === "stream") return { data: B.body, ...tt };
      let st = await B[M]();
      return M === "json" && (o.responseValidator && await o.responseValidator(st), o.responseTransformer && (st = await o.responseTransformer(st))), { data: st, ...tt };
    }
    let rt = await B.text();
    try {
      rt = JSON.parse(rt);
    } catch {
    }
    let Ne = rt;
    for (let M of i.error._fns) M && (Ne = await M(rt, B, Q, o));
    if (Ne = Ne || {}, o.throwOnError) throw Ne;
    return { error: Ne, ...tt };
  };
  return { buildUrl: fr, connect: (n) => a({ ...n, method: "CONNECT" }), delete: (n) => a({ ...n, method: "DELETE" }), get: (n) => a({ ...n, method: "GET" }), getConfig: r, head: (n) => a({ ...n, method: "HEAD" }), interceptors: i, options: (n) => a({ ...n, method: "OPTIONS" }), patch: (n) => a({ ...n, method: "PATCH" }), post: (n) => a({ ...n, method: "POST" }), put: (n) => a({ ...n, method: "PUT" }), request: a, setConfig: s, trace: (n) => a({ ...n, method: "TRACE" }) };
};
const h = Aa(Fr({
  baseUrl: "http://localhost:36520",
  throwOnError: !0
}));
class L {
  static calculateContentChanges(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/CalculateContentChanges",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static calculateMediaChanges(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/CalculateMediaChanges",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getContentEntity(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetContentEntity",
      ...e
    });
  }
  static getContentFolders(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetContentFolders",
      ...e
    });
  }
  static getLocalContentFolders(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetLocalContentFolders",
      ...e
    });
  }
  static getLocalMediaFolders(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetLocalMediaFolders",
      ...e
    });
  }
  static getMediaEntity(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetMediaEntity",
      ...e
    });
  }
  static getMediaFolders(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetMediaFolders",
      ...e
    });
  }
  static hasContent(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/HasContent",
      ...e
    });
  }
  static hasContentOrMedia(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/HasContentOrMedia",
      ...e
    });
  }
  static hasMedia(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/HasMedia",
      ...e
    });
  }
}
class mo {
  static getVariants(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/GetVariants",
      ...e
    });
  }
}
class It {
  static createKeys(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/CreateKeys",
      ...e
    });
  }
  static hasKeys(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/HasKeys",
      ...e
    });
  }
  static saveKeys(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/SaveKeys",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
}
class Ua {
  static getPublisher(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetPublisher",
      ...e
    });
  }
  static getPublishers(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetPublishers",
      ...e
    });
  }
}
class bo {
  static getSiteStatus(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetSiteStatus",
      ...e
    });
  }
}
class O {
  static addToAllServers(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/AddToAllServers",
      ...e
    });
  }
  static checkServer(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/CheckServer",
      ...e
    });
  }
  static checkServerUrl(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/CheckServerUrl",
      ...e
    });
  }
  static copyServer(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/CopyServer",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deleteServer(e) {
    return ((e == null ? void 0 : e.client) ?? h).delete({
      url: "/umbraco/usync/api/v1/Publisher/DeleteServer",
      ...e
    });
  }
  static getAllServers(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetAllServers",
      ...e
    });
  }
  static getAvailableServers(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/GetAvailableServers",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getServer(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetServer",
      ...e
    });
  }
  static getServerByUrl(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetServerByUrl",
      ...e
    });
  }
  static getServers(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetServers",
      ...e
    });
  }
  static saveServer(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/SaveServer",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static setServerOrder(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/SetServerOrder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getAncestors(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/tree/server/ServerAncestors",
      ...e
    });
  }
  static getChildren(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/tree/server/ServerChildren",
      ...e
    });
  }
  static root(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/tree/server/ServerRoot",
      ...e
    });
  }
}
class qr {
  static getButtons(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetButtons",
      ...e
    });
  }
  static getDescendantCount(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetDescendantCount",
      ...e
    });
  }
  static getSettings(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetSettings",
      ...e
    });
  }
  static getUserGroups(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetUserGroups",
      ...e
    });
  }
  static reloadSettings(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/ReloadSettings",
      ...e
    });
  }
  static saveSettings(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/SaveSettings",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static syncSettings(e) {
    return ((e == null ? void 0 : e.client) ?? h).post({
      url: "/umbraco/usync/api/v1/Publisher/SyncSettings",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
}
class fo {
  static getActionView(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetActionViewModel",
      ...e
    });
  }
  static getServerByAlias(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetServerByAlias",
      ...e
    });
  }
  static getStrategyByPublisher(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetStrategyByPublisher",
      ...e
    });
  }
  static getStrategyByServer(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetStrategyByServer",
      ...e
    });
  }
  static getSyncItem(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetSyncItem",
      ...e
    });
  }
  /**
   * @deprecated
   */
  static getSyncSendOptions(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetSyncSendOptions",
      ...e
    });
  }
  static getSyncSendOptionsByMode(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v2/Publisher/GetSyncSendOptions",
      ...e
    });
  }
}
class Ia {
  static getTemplates(e) {
    return ((e == null ? void 0 : e.client) ?? h).get({
      url: "/umbraco/usync/api/v1/Publisher/GetTemplates",
      ...e
    });
  }
}
const Kr = "usync.publisher.details.modal", Xr = new qt(Kr, {
  modal: {
    type: "sidebar",
    size: "full"
  }
});
var x;
class Na {
  constructor(e) {
    v(this, x);
    y(this, x, e);
  }
  async getContentFolders(e, r, s) {
    return await d(
      l(this, x),
      L.getContentFolders({ query: { id: e, server: r, page: s } })
    );
  }
  async getMediaFolders(e, r, s) {
    return await d(
      l(this, x),
      L.getMediaFolders({ query: { id: e, server: r, page: s } })
    );
  }
  async getLocalContentFolders(e, r) {
    return await d(
      l(this, x),
      L.getLocalContentFolders({ query: { id: e, page: r } })
    );
  }
  async getLocalMediaFolders(e, r) {
    return await d(
      l(this, x),
      L.getLocalMediaFolders({ query: { id: e, page: r } })
    );
  }
  async calculateContentChanges(e, r) {
    return await d(
      l(this, x),
      L.calculateContentChanges({ query: { server: e }, body: r })
    );
  }
  async calculateMediaChanges(e, r) {
    return await d(
      l(this, x),
      L.calculateMediaChanges({ query: { server: e }, body: r })
    );
  }
  async getContentEntity(e, r) {
    return await d(
      l(this, x),
      L.getContentEntity({ query: { id: e, server: r } })
    );
  }
  async getMediaEntity(e, r) {
    return await d(
      l(this, x),
      L.getMediaEntity({ query: { id: e, server: r } })
    );
  }
  async hasContent() {
    return await d(l(this, x), L.hasContent());
  }
  async hasMedia() {
    return await d(l(this, x), L.hasMedia());
  }
  async hasContentOrMedia(e) {
    return await d(
      l(this, x),
      L.hasContentOrMedia({ query: { checkEnabled: e } })
    );
  }
}
x = new WeakMap();
var k;
class Jr extends Xe {
  constructor(r) {
    super(r);
    v(this, k);
    y(this, k, new Na(this));
  }
  async getContentFolders(r, s, i) {
    return (await l(this, k).getContentFolders(r, s, i)).data;
  }
  async getMediaFolders(r, s, i) {
    return (await l(this, k).getMediaFolders(r, s, i)).data;
  }
  async getLocalContentFolders(r, s) {
    return (await l(this, k).getLocalContentFolders(r, s)).data;
  }
  async getLocalMediaFolders(r, s) {
    return (await l(this, k).getLocalMediaFolders(r, s)).data;
  }
  async calculateContentChanges(r, s) {
    return (await l(this, k).calculateContentChanges(r, s)).data;
  }
  async calculateMediaChanges(r, s) {
    return (await l(this, k).calculateMediaChanges(r, s)).data;
  }
  async getContentEntity(r, s) {
    return (await l(this, k).getContentEntity(r, s)).data;
  }
  async getMediaEntity(r, s) {
    return (await l(this, k).getMediaEntity(r, s)).data;
  }
  async hasContent() {
    return (await l(this, k).hasContent()).data;
  }
  async hasMedia() {
    return (await l(this, k).hasMedia()).data;
  }
  async hasContentOrMedia(r = !1) {
    return (await l(this, k).hasContentOrMedia(r)).data;
  }
}
k = new WeakMap();
var Ra = Object.defineProperty, Ma = Object.getOwnPropertyDescriptor, Qr = (t) => {
  throw TypeError(t);
}, Ct = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Ma(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && Ra(e, r, i), i;
}, Qt = (t, e, r) => e.has(t) || Qr("Cannot " + r), gr = (t, e, r) => (Qt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Sr = (t, e, r) => e.has(t) ? Qr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Da = (t, e, r, s) => (Qt(t, e, "write to private field"), e.set(t, r), r), wr = (t, e, r) => (Qt(t, e, "access private method"), r), Be, at, Zr, es;
let Oe = class extends Ai {
  constructor() {
    super(), Sr(this, at), Sr(this, Be), this.isContent = !0, this.hasCompare = !1, this.viewDetails = !0, Da(this, Be, new Jr(this));
  }
  async connectedCallback() {
    var t, e, r, s, i, a;
    super.connectedCallback(), this.isContent = ((t = this.data) == null ? void 0 : t.item.itemType) == "IContent", this.hasCompare = ((e = this.data) == null ? void 0 : e.item.itemType) == "IContent" || ((r = this.data) == null ? void 0 : r.item.itemType) == "IMedia", this.viewDetails = !(((s = this.data) == null ? void 0 : s.compareDefault) ?? !1), await wr(this, at, Zr).call(this, (i = this.data) == null ? void 0 : i.item.key, (a = this.data) == null ? void 0 : a.server);
  }
  render() {
    var t;
    return c`
			<umb-body-layout headline="Changes: ${((t = this.data) == null ? void 0 : t.item.name) ?? ""}">
				${this.renderTabs()}
				${N(
      this.viewDetails == !0,
      () => this.renderDetail(),
      () => this.renderCompare()
    )}
				<div slot="actions">
					<uui-button
						type="button"
						id="cancel"
						label=${this.localize.term("general_close")}
						@click=${wr(this, at, es)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
  renderTabs() {
    var t;
    return c`
			<uui-tab-group slot="navigation">
				${(t = this.data) != null && t.item ? c` <uui-tab
							label="details"
							?active=${this.viewDetails}
							@click=${() => this.viewDetails = !0}>
							<umb-localize key="usyncpublish_detailsTab"></umb-localize>
							<uui-icon slot="icon" name="icon-bulleted-list"></uui-icon>
						</uui-tab>` : p}
				${this.hasCompare ? c`
							<uui-tab
								label="compare"
								?active=${!this.viewDetails}
								@click=${() => this.viewDetails = !1}>
								<umb-localize key="usyncpublish_compareTab"></umb-localize>
								<uui-icon slot="icon" name="icon-display"></uui-icon>
							</uui-tab>
						` : p}
			</uui-tab-group>
		`;
  }
  renderDetail() {
    var t;
    return (t = this.data) != null && t.item ? c`<usync-publisher-change-details-default
					.item=${this.data.item}></usync-publisher-change-details-default>` : p;
  }
  renderCompare() {
    return this.entityView ? c`<usync-publisher-change-compare
					.isContent=${this.isContent}
					.details=${this.entityView}></usync-publisher-change-compare> ` : p;
  }
};
Be = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakSet();
Zr = async function(t, e) {
  if (!t || !e) return;
  const r = this.isContent ? await gr(this, Be).getContentEntity(t, e) : await gr(this, Be).getMediaEntity(t, e);
  r && (this.entityView = r);
};
es = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
Ct([
  S()
], Oe.prototype, "entityView", 2);
Ct([
  S()
], Oe.prototype, "hasCompare", 2);
Ct([
  S()
], Oe.prototype, "viewDetails", 2);
Oe = Ct([
  f("usync-publisher-change-details-modal")
], Oe);
const Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return Oe;
  }
}, Symbol.toStringTag, { value: "Module" }));
var La = Object.defineProperty, Ya = Object.getOwnPropertyDescriptor, ts = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Ya(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && La(e, r, i), i;
};
let Bt = class extends V {
  render() {
    return c`
			<uui-box .headline=${this.localize.term("uSync_detailHeadline")}>
				<div slot="header">
					<umb-localize key="uSync_detailHeader"></umb-localize>
				</div>
				<usync-change-view .item=${this.item}></usync-change-view>
			</uui-box>
		`;
  }
};
ts([
  u({ type: Object })
], Bt.prototype, "item", 2);
Bt = ts([
  f("usync-publisher-change-details-default")
], Bt);
var ja = Object.defineProperty, Ga = Object.getOwnPropertyDescriptor, rs = (t) => {
  throw TypeError(t);
}, Zt = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Ga(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && ja(e, r, i), i;
}, Va = (t, e, r) => e.has(t) || rs("Cannot " + r), za = (t, e, r) => e.has(t) ? rs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Wa = (t, e, r) => (Va(t, e, "access private method"), r), Lt, ss;
let Le = class extends V {
  constructor() {
    super(...arguments), za(this, Lt), this.isContent = !0;
  }
  render() {
    return c`<div class="compare">
			${this.isContent ? this.renderContent() : this.renderMedia()}
		</div>`;
  }
  renderContent() {
    return c`${this.renderLocalContent()} ${this.renderRemoteContent()}`;
  }
  renderLocalContent() {
    var t, e, r, s;
    return (e = (t = this.details) == null ? void 0 : t.local) != null && e.localUrl ? c`
			<div class="view">
				<h4>${this.details.local.localUrl}</h4>
				<iframe
					.src=${(s = (r = this.details) == null ? void 0 : r.local) == null ? void 0 : s.localUrl}
					frameborder="0"
					scrolling="no"
					.onload=${Wa(this, Lt, ss)}></iframe>
			</div>
		` : p;
  }
  renderRemoteContent() {
    var t, e, r, s;
    return (e = (t = this.details) == null ? void 0 : t.remote) != null && e.remoteUrl ? c` <div class="view">
			<h4>${this.details.remote.remoteUrl}</h4>
			<iframe
				id="target-view"
				.src=${(s = (r = this.details) == null ? void 0 : r.remote) == null ? void 0 : s.remoteUrl}
				frameborder="0"
				scrolling="no"></iframe>
		</div>` : p;
  }
  renderMedia() {
    var t, e;
    return c` ${this.renderMediaView((t = this.details) == null ? void 0 : t.local)}
		${this.renderMediaView((e = this.details) == null ? void 0 : e.remote)}`;
  }
  renderMediaView(t) {
    return t != null && t.localUrl ? c`
			<div class="view">
				<h4>${t.localUrl}</h4>
				<div class="main">
					<img .src=${t.localUrl} />
				</div>
				<div class="crops">${this.renderCrops(t.mediaProperty)}</div>
			</div>
		` : c`<div class="view">No item</div>`;
  }
  renderCrops(t) {
    if (!t) return p;
    const e = JSON.parse(t);
    return e ? (e.crops || (e.crops = []), c`
			<umb-image-cropper-field .value=${e} .crops=${[]}></umb-image-cropper-field>
		`) : p;
  }
};
Lt = /* @__PURE__ */ new WeakSet();
ss = function(t) {
  var s, i, a;
  const e = t.target;
  if (!e) return;
  try {
    e.style.height = ((s = e.contentWindow) == null ? void 0 : s.document.documentElement.scrollHeight) + "px";
  } catch {
    e.style.height = "2000px";
  }
  Array.from(
    ((a = (i = this.parentElement) == null ? void 0 : i.parentElement) == null ? void 0 : a.getElementsByTagName("iframe")) ?? []
  ).forEach((n) => {
    n.style.height = e.style.height;
  });
};
Le.styles = w`
		.compare {
			display: flex;
			gap: 20px;
			justify-content: stretch;
			height: calc(100vh - 250px);
			width: 100%;
		}

		.compare .view {
			flex-grow: 2;
		}

		.compare iframe {
			border: 1px solid #567;
			width: 100%;
		}

		.view img {
			max-width: 100%;
		}
	`;
Zt([
  u({ type: Boolean })
], Le.prototype, "isContent", 2);
Zt([
  u({ type: Object })
], Le.prototype, "details", 2);
Le = Zt([
  f("usync-publisher-change-compare")
], Le);
var Ha = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, is = (t) => {
  throw TypeError(t);
}, ge = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Fa(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && Ha(e, r, i), i;
}, qa = (t, e, r) => e.has(t) || is("Cannot " + r), Ka = (t, e, r) => e.has(t) ? is("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Cr = (t, e, r) => (qa(t, e, "access private method"), r), nt, as, ns;
let se = class extends V {
  constructor() {
    super(), Ka(this, nt), this._modalPath = "", this.showAll = !1, this.headline = "Change report", this.isReport = !0;
  }
  render() {
    const t = Cr(this, nt, as).call(this);
    return c`
			${this.renderChangeSummary(t)}
			<uui-box .headline=${this.headline} style="--uui-box-default-padding: 0px;">
				<div slot="header-actions">${this.renderToggle()}</div>
			</uui-box>
			${N(this.showAll || t > 0, () => this.renderTable())}
		`;
  }
  renderToggle() {
    return c`
			<uui-toggle
				.label=${this.localize.term("uSync_showAll")}
				labelPosition="left"
				?checked=${this.showAll}
				@change=${() => {
      this.showAll = !this.showAll;
    }}></uui-toggle>
		`;
  }
  renderChangeSummary(t) {
    return this.isReport ? this.renderReportSummary(t) : this.renderResultSummary(t);
  }
  renderReportSummary(t) {
    var e, r, s;
    return t > 0 ? c`<div class="change-msg warning">
					<div><uui-icon name="icon-layout"></uui-icon></div>
					<div>
						<h3>
							${t} pending change${N(t > 1, () => "s")} across
							${(e = this.results) == null ? void 0 : e.length} items.
						</h3>
						<p>You can review the changes here before they are applied.</p>
					</div>
				</div>` : c`<div class="change-msg positive">
					<div><uui-icon name="icon-checkbox-dotted"></uui-icon></div>
					<div>
						<h3>No changes detected</h3>
						<p>
							${(r = this.results) == null ? void 0 : r.length}
							item${N(
      ((s = this.results) == null ? void 0 : s.length) ?? !1,
      () => "s where",
      () => " was"
    )}
							checked. It looks like the server is upto date and there are no new changes
							to be made.
						</p>
					</div>
				</div>`;
  }
  renderResultSummary(t) {
    var e, r, s;
    return t > 0 ? c`<div class="change-msg positive	">
					<div><uui-icon name="icon-check"></uui-icon></div>
					<div>
						<h3>
							${t}
							change${N(
      t > 1,
      () => "s where",
      () => " was"
    )}
							made across ${(e = this.results) == null ? void 0 : e.length} items.
						</h3>
						<p>You can see what changes were made in the report below.</p>
					</div>
				</div>` : c`<div class="change-msg positive">
					<div><uui-icon name="icon-checkbox-dotted"></uui-icon></div>
					<div>
						<h3>No changes detected</h3>
						<p>
							${(r = this.results) == null ? void 0 : r.length}
							item${N(
      ((s = this.results) == null ? void 0 : s.length) ?? !1,
      () => "s where",
      () => " was"
    )}
							checked. Nothing changed.
						</p>
					</div>
				</div>`;
  }
  renderTable() {
    return c` ${this.renderGroups()} `;
  }
  renderGroups() {
    const t = this.groupBy(this.results ?? [], (s) => s.itemType), e = [];
    return Object.keys(t).sort().forEach((s) => {
      if (t[s].length === 0) return p;
      if (this.showAll === !1 && this.getChangeCount(t[s]) === 0)
        return p;
      const i = c`<usync-publisher-grouped-report-table
				.results=${t[s]}
				.showAll=${this.showAll}
				@show-detail=${Cr(this, nt, ns)}
				.groupName=${s}></usync-publisher-grouped-report-table>`;
      e.push(i);
    }), c`<div class="groups">${e}</div>`;
  }
  groupBy(t, e) {
    return t.reduce((r, s) => {
      const i = e(s), a = r[i] || [];
      return a.push(s), { ...r, [i]: a };
    }, {});
  }
  getChangeCount(t) {
    return t == null ? void 0 : t.filter((e) => e.change !== q.NO_CHANGE).length;
  }
};
nt = /* @__PURE__ */ new WeakSet();
as = function() {
  var e;
  let t = 0;
  return (e = this.results) == null || e.forEach((r) => {
    r.change !== q.NO_CHANGE && t++;
  }), t;
};
ns = async function(t) {
  const e = t.detail;
  if (e.change == q.NO_CHANGE) return;
  const r = await this.getContext(St), s = r == null ? void 0 : r.open(this, Xr, {
    data: { server: this.server, item: e }
  });
  await (s == null ? void 0 : s.onSubmit());
};
se.styles = w`
		.groups {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		.change-msg {
			display: flex;
			gap: var(--uui-size-space-4);
			padding: var(--uui-size-3);
			margin-bottom: var(--uui-size-3);
			background-color: var(--uui-color-border);
		}

		.change-msg.positive {
			background-color: var(--uui-color-positive-emphasis);
			color: var(--uui-color-positive-contrast);
			box-shadow: var(--uui-shadow-depth-1);
		}

		.change-msg.warning {
			background-color: var(--uui-color-selected);
			color: var(--uui-color-selected-contrast);
			box-shadow: var(--uui-shadow-depth-1);
		}

		.change-msg > * {
			margin: var(--uui-size-4) 0;
		}

		.change-msg uui-icon {
			font-size: 40pt;
		}

		h3 {
			margin: 0;
		}

		uui-box {
			margin-bottom: var(--uui-size-3);
		}

		uui-table-row:hover {
			background-color: var(--uui-color-disabled);
		}
	`;
ge([
  S()
], se.prototype, "_modalPath", 2);
ge([
  S()
], se.prototype, "showAll", 2);
ge([
  u({ type: String })
], se.prototype, "headline", 2);
ge([
  u({ type: Boolean })
], se.prototype, "isReport", 2);
ge([
  u({ type: Array })
], se.prototype, "results", 2);
ge([
  u({ type: String })
], se.prototype, "server", 2);
se = ge([
  f("usync-publisher-report-view")
], se);
var Xa = Object.defineProperty, Ja = Object.getOwnPropertyDescriptor, ls = (t) => {
  throw TypeError(t);
}, er = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Ja(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && Xa(e, r, i), i;
}, Qa = (t, e, r) => e.has(t) || ls("Cannot " + r), Za = (t, e, r) => e.has(t) ? ls("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), en = (t, e, r) => (Qa(t, e, "access private method"), r), Yt, cs;
let Ye = class extends ce(J) {
  constructor() {
    super(...arguments), Za(this, Yt), this.label = "";
  }
  render() {
    var t, e;
    return ((t = this.value) == null ? void 0 : t.editable) == !1 ? p : c`
					<uui-checkbox
						name="checkbox"
						.label=${this.localize.term(this.label)}
						.checked=${((e = this.value) == null ? void 0 : e.value) ?? !1}
						@change=${en(this, Yt, cs)}></uui-checkbox>
				`;
  }
};
Yt = /* @__PURE__ */ new WeakSet();
cs = function(t) {
  const e = t.target;
  this.dispatchEvent(
    new CustomEvent("item-selected", {
      bubbles: !0,
      composed: !0,
      detail: {
        id: this.id,
        selected: e.checked
      }
    })
  );
};
Ye.styles = w`
		:host {
			display: block;
		}
	`;
er([
  u({ type: Object })
], Ye.prototype, "value", 2);
er([
  u()
], Ye.prototype, "label", 2);
Ye = er([
  f("usync-publisher-yes-no-checkbox")
], Ye);
var tn = Object.defineProperty, rn = Object.getOwnPropertyDescriptor, os = (t) => {
  throw TypeError(t);
}, oe = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? rn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && tn(e, r, i), i;
}, sn = (t, e, r) => e.has(t) || os("Cannot " + r), an = (t, e, r) => e.has(t) ? os("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), T = (t, e, r) => (sn(t, e, "access private method"), r), g, Et, us, jt, H, hs;
let K = class extends ce(
  J
) {
  constructor() {
    super(...arguments), an(this, g), this.showAdvanced = !1, this.canBeScheduled = !0;
  }
  _hasAdvanced(t, e) {
    var r;
    return this._showAdvanced === void 0 && (this._showAdvanced = !t.hideAdvanced), t.includeConfig.editable || t.createRestorePoint.editable || t.includeAncestors.editable || t.includeDependencies.editable || t.includeFiles.editable || t.includeLinked.editable || e && ((r = this.publisherSettings) == null ? void 0 : r.canSchedule) && this.canBeScheduled;
  }
  _isSendOption(t) {
    return t.value !== void 0;
  }
  render() {
    var e;
    return this._userRemoveValue == null && this.settings !== void 0 && (this._userRemoveValue = ((e = this.settings) == null ? void 0 : e.deleteMissing.value) ?? !1), c`
			<uui-box .headline=${"Settings"}>
				${this.renderDocumentOptionBoxes(this.settings)}
			</uui-box>

			${this.renderAdvancedToggle(this.settings)}
			${this.renderAdvancedBoxes(this.settings)}
			${this.renderPublisherSettings(this.publisherSettings)}
		`;
  }
  renderAdvancedToggle(t) {
    return !t || !this._hasAdvanced(t, !0) ? p : this._showAdvanced ? p : c`<uui-button
					look="placeholder"
					color="positive"
					label="Show advanced"
					@click=${() => {
      this._showAdvanced = !this._showAdvanced;
    }}></uui-button>`;
  }
  renderDocumentOptionBoxes(t) {
    return t ? c`
					<usync-publisher-yes-no-checkbox
						id="includeChildren"
						label="Include children"
						.value=${t == null ? void 0 : t.includeChildren}
						@item-selected=${() => T(this, g, jt).call(this, "includeChildren", t == null ? void 0 : t.includeChildren)}></usync-publisher-yes-no-checkbox>
					${N(
      (t == null ? void 0 : t.includeChildren.value) == !0,
      () => c` <div
								class="${t.includeChildren.editable == !0 ? "indent" : ""}">
								<usync-publisher-yes-no-checkbox
									id="deleteMissing"
									label="Delete missing"
									.value=${t == null ? void 0 : t.deleteMissing}
									@item-selected=${() => T(this, g, jt).call(this, "deleteMissing", t == null ? void 0 : t.deleteMissing)}></usync-publisher-yes-no-checkbox>
							</div>`,
      () => p
    )}

					<usync-publisher-yes-no-checkbox
						id="includeMedia"
						label="Include media"
						.value=${t == null ? void 0 : t.includeMedia}
						@item-selected=${T(this, g, H)}></usync-publisher-yes-no-checkbox>
				` : p;
  }
  renderAdvancedBoxes(t) {
    return !t || !this._hasAdvanced(t, !1) || !this._showAdvanced ? p : c`
					<uui-box headline="Advanced">
						${N(
      this._showAdvanced,
      () => c`<div>
									<usync-publisher-yes-no-checkbox
										id="includeMediaFiles"
										label="Include media files"
										.value=${t == null ? void 0 : t.includeMediaFiles}
										@item-selected=${T(this, g, H)}></usync-publisher-yes-no-checkbox>

									<usync-publisher-yes-no-checkbox
										id="includeDependencies"
										label="Include dependencies"
										.value=${t == null ? void 0 : t.includeDependencies}
										@item-selected=${T(this, g, H)}></usync-publisher-yes-no-checkbox>

									<usync-publisher-ys-no-checkbox
										id="createRestorePoint"
										label="Create restore point"
										.value=${t == null ? void 0 : t.createRestorePoint}
										@item-selected=${T(this, g, H)}></usync-publisher-ys-no-checkbox>

									<usync-publisher-yes-no-checkbox
										id="includeFiles"
										label="Include files"
										.value=${t == null ? void 0 : t.includeFiles}
										@item-selected=${T(this, g, H)}></usync-publisher-yes-no-checkbox>

									<usync-publisher-yes-no-checkbox
										id="includeConfig"
										label="Include config"
										.value=${t == null ? void 0 : t.includeConfig}
										@item-selected=${T(this, g, H)}></usync-publisher-yes-no-checkbox>

									<usync-publisher-yes-no-checkbox
										id="createRestorePoint"
										label="Create restore point"
										.value=${t == null ? void 0 : t.createRestorePoint}
										@item-selected=${T(this, g, H)}></usync-publisher-yes-no-checkbox>

									<usync-publisher-yes-no-checkbox
										id="includeAncestors"
										label="Include ancestors"
										.value=${t == null ? void 0 : t.includeAncestors}
										@item-selected=${T(this, g, H)}></usync-publisher-yes-no-checkbox>

									<usync-publisher-yes-no-checkbox
										id="includeLinked"
										label="Include linked items"
										.value=${t == null ? void 0 : t.includeLinked}
										@item-selected=${T(this, g, H)}></usync-publisher-yes-no-checkbox>
								</div>`
    )}
					</uui-box>
				`;
  }
  renderPublisherSettings(t) {
    return !this.canBeScheduled || !this._showAdvanced ? p : !t || !t.canSchedule ? p : c`
			<uui-box style="--uui-box-default-padding: 0px 20px;">
				<umb-property-layout
					class="scheduled"
					label="Scheduled publish"
					alias="schedule"
					orientation="vertical"
					description="Select a date and time to publish the content">
					<div slot="editor">
						<uui-input
							label="scheduled date"
							class="date"
							type="datetime-local"
							@change=${T(this, g, hs)}></uui-input>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
};
g = /* @__PURE__ */ new WeakSet();
Et = function(t, e, r) {
  const s = {
    [e]: {
      editable: t.editable,
      value: r
    }
  }, i = Object.assign({}, this.settings, s);
  return this.dispatchEvent(
    new CustomEvent("update-settings", {
      bubbles: !0,
      composed: !0,
      detail: i
    })
  ), s;
};
us = function(t) {
  this.settings && (t == !1 && (this.settings.deleteMissing.value = !1), t == !0 && (this.settings.deleteMissing.value = this._userRemoveValue ?? !1), T(this, g, Et).call(this, this.settings.deleteMissing, "deleteMissing", !1));
};
jt = function(t, e) {
  e.value = !e.value, T(this, g, Et).call(this, e, t, e.value), t == "includeChildren" && (T(this, g, us).call(this, e.value), this.requestUpdate()), t == "deleteMissing" && (this._userRemoveValue = e.value);
};
H = async function(t) {
  if (this.settings == null) return;
  const e = this.settings[t.detail.id];
  if (!this._isSendOption(e)) return;
  const r = e;
  T(this, g, Et).call(this, r, t.detail.id, t.detail.selected);
};
hs = function(t) {
  const e = t.target;
  e && this.dispatchEvent(
    new CustomEvent("update-release-date", {
      bubbles: !0,
      composed: !0,
      detail: e.value
    })
  );
};
K.styles = w`
		:host {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.indent {
			padding-left: 10px;
		}

		usync-publisher-yes-no-checkbox {
			margin-bottom: 3px;
		}

		uui-input {
			width: 100%;
		}
	`;
oe([
  u({ type: Object })
], K.prototype, "settings", 2);
oe([
  u({ type: Object })
], K.prototype, "serverSettings", 2);
oe([
  u({ type: Boolean })
], K.prototype, "showAdvanced", 2);
oe([
  u({ type: Object })
], K.prototype, "publisherSettings", 2);
oe([
  u({ type: Boolean })
], K.prototype, "canBeScheduled", 2);
oe([
  S()
], K.prototype, "_showAdvanced", 2);
oe([
  S()
], K.prototype, "_userRemoveValue", 2);
K = oe([
  f("usync-publisher-sync-options")
], K);
var nn = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, ds = (t) => {
  throw TypeError(t);
}, Je = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? ln(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && nn(e, r, i), i;
}, cn = (t, e, r) => e.has(t) || ds("Cannot " + r), on = (t, e, r) => e.has(t) ? ds("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), un = (t, e, r) => (cn(t, e, "access private method"), r), Gt, ps;
let fe = class extends V {
  constructor() {
    super(...arguments), on(this, Gt), this.showAll = !1, this.expanded = !1, this.groupName = "";
  }
  getChangeCount() {
    var t;
    return (t = this.results) == null ? void 0 : t.filter((e) => e.change !== q.NO_CHANGE).length;
  }
  render() {
    var e;
    const t = this.getChangeCount() ?? 0;
    return t == 0 && this.showAll == !1 ? p : c`
			<uui-box class=${Se({ has_changes: t > 0 })}>
				<div
					class="summary ${N(this.expanded, () => "expanded")}"
					@click=${() => this.expanded = !this.expanded}>
					<h4>${this.localize.term("usyncpublish_" + this.groupName)}</h4>
					<h4 class="count">${t}/${(e = this.results) == null ? void 0 : e.length}</h4>
				</div>
				<uui-table>
					${N(
      this.expanded == !0,
      () => c`${this.renderTableHeader()}${this.renderGroupedRows(this.results)}`
    )}
				</uui-table>
			</uui-box>
		`;
  }
  renderTableHeader() {
    return c`
			<uui-table-head>
				<uui-table-head-cell class="icon-cell" .noPadding=${!0}>
					<!-- <umb-icon name="icon-checkbox-dotted"></umb-icon> -->
				</uui-table-head-cell>
				<uui-table-head-cell style="--uui-table-cell-padding: var(--uui-size-space-2);">
					<umb-localize key="uSync_changeName">Name</umb-localize>
				</uui-table-head-cell>
			</uui-table-head>
		`;
  }
  renderGroupedRows(t) {
    t == null || t.sort();
    const e = t == null ? void 0 : t.map((r) => {
      if (!this.showAll && r.change == q.NO_CHANGE) return p;
      const s = r.change == q.NO_CHANGE ? "icon-trafic" : r.success ? "icon-check color-green" : "icon-wrong color-red";
      return c`
				<uui-table-row
					class=${Se({ changerow: r.change != q.NO_CHANGE })}>
					<uui-table-cell class="icon-cell" .noPadding=${!0}>
						<umb-icon .name=${s}></umb-icon>
					</uui-table-cell>
					<uui-table-cell
						@click=${() => un(this, Gt, ps).call(this, r)}
						.clipText=${!0}
						style="--uui-table-cell-padding: var(--uui-size-space-2);">
						<div>${r.name}</div>
						<div class="item-detail">
							<div>${r.itemType}</div>
							<div>${r.change}</div>
						</div>
					</uui-table-cell>
				</uui-table-row>
			`;
    });
    return c`${e}`;
  }
};
Gt = /* @__PURE__ */ new WeakSet();
ps = async function(t) {
  this.dispatchEvent(
    new CustomEvent("show-detail", { detail: t })
  );
};
fe.styles = w`
		uui-box {
			cursor: pointer;
			--uui-box-default-padding: 1px 20px;
		}

		.summary {
			display: flex;
			margin: 0 -20px;
			padding: 0 20px;
			justify-content: space-between;
		}

		.expanded {
			border-bottom: 1px solid var(--uui-color-border);
		}

		.count {
			color: var(--uui-color-border);
		}

		.has_changes .count {
			color: var(--uui-text);
		}

		.changerow {
			cursor: pointer;
		}

		.icon-cell {
			width: var(--uui-size-8);
		}

		.item-detail {
			display: flex;
			justify-content: space-between;
			font-size: smaller;
			color: var(--uui-color-disabled-contrast);
		}
	`;
Je([
  u({ type: Boolean })
], fe.prototype, "showAll", 2);
Je([
  u({ type: Array })
], fe.prototype, "results", 2);
Je([
  S()
], fe.prototype, "expanded", 2);
Je([
  u({ type: String })
], fe.prototype, "groupName", 2);
fe = Je([
  f("usync-publisher-grouped-report-table")
], fe);
var m, ae;
class hn {
  constructor(e) {
    v(this, m);
    v(this, ae, []);
    y(this, m, e), y(this, ae, []);
  }
  async addToAllServers(e) {
    return await d(
      l(this, m),
      O.addToAllServers({ query: { server: e } })
    );
  }
  async checkServer(e) {
    return await d(
      l(this, m),
      O.checkServer({ query: { server: e } })
    );
  }
  async checkServerUrl(e) {
    return await d(
      l(this, m),
      O.checkServerUrl({ query: { url: e } })
    );
  }
  async copyServer(e) {
    return await d(l(this, m), O.copyServer({ body: e }));
  }
  async deleteServer(e) {
    return await d(
      l(this, m),
      O.deleteServer({ query: { key: e } })
    );
  }
  async getAllServers(e) {
    return await d(
      l(this, m),
      O.getAllServers({ query: { enabledOnly: e } })
    );
  }
  async getAvailableServers(e) {
    const r = l(this, ae).find(
      (s) => s.mode === e.mode && s.entityType === e.entityType && s.enabledOnly === e.enabledOnly
    );
    if (r)
      return { data: r.servers };
    {
      const s = await d(
        l(this, m),
        O.getAvailableServers({ body: e })
      );
      return s.data && l(this, ae).push({
        mode: e.mode,
        entityType: e.entityType,
        enabledOnly: e.enabledOnly,
        servers: s.data
      }), s;
    }
  }
  async getServer(e) {
    return await d(
      l(this, m),
      O.getServer({ query: { key: e } })
    );
  }
  async getServerByUrl(e) {
    return await d(
      l(this, m),
      O.getServerByUrl({ query: { url: e } })
    );
  }
  async getServers(e, r) {
    return await d(
      l(this, m),
      O.getServers({ query: { action: e, enabledOnly: r } })
    );
  }
  async saveServer(e) {
    return y(this, ae, []), await d(l(this, m), O.saveServer({ body: e }));
  }
  async setServerOrder(e) {
    return await d(l(this, m), O.setServerOrder({ body: e }));
  }
  async getTemplates() {
    return await d(l(this, m), Ia.getTemplates());
  }
  async getPublishers() {
    return await d(l(this, m), Ua.getPublishers());
  }
  async syncSettings(e) {
    return y(this, ae, []), await d(
      l(this, m),
      qr.syncSettings({ body: { servers: e } })
    );
  }
  async hasKeys() {
    return await d(l(this, m), It.hasKeys());
  }
  async createKeys() {
    return await d(l(this, m), It.createKeys());
  }
  async saveKeys(e) {
    return await d(l(this, m), It.saveKeys({ body: e }));
  }
}
m = new WeakMap(), ae = new WeakMap();
var b;
class dn extends Xe {
  constructor(r) {
    super(r);
    v(this, b);
    y(this, b, new hn(this));
  }
  async addToAllServers(r) {
    return (await l(this, b).addToAllServers(r)).data;
  }
  async checkServer(r) {
    return (await l(this, b).checkServer(r)).data;
  }
  async checkServerUrl(r) {
    return (await l(this, b).checkServerUrl(r)).data;
  }
  async copyServer(r) {
    return (await l(this, b).copyServer(r)).data;
  }
  async deleteServer(r) {
    return (await l(this, b).deleteServer(r)).data;
  }
  async getAllServers(r) {
    return (await l(this, b).getAllServers(r)).data;
  }
  async getAvailableServers(r, s, i, a) {
    let n;
    return await navigator.locks.request("serversSource", async () => {
      n = (await l(this, b).getAvailableServers({
        udi: r,
        entityType: s,
        enabledOnly: i,
        mode: a
      })).data;
    }), n;
  }
  async getServer(r) {
    return (await l(this, b).getServer(r)).data;
  }
  async getServerByUrl(r) {
    return (await l(this, b).getServerByUrl(r)).data;
  }
  async getServers(r, s) {
    return (await l(this, b).getServers(r, s)).data;
  }
  async saveServer(r) {
    return (await l(this, b).saveServer(r)).data;
  }
  async setServerOrder(r) {
    return (await l(this, b).setServerOrder(r)).data;
  }
  async getTemplates() {
    return (await l(this, b).getTemplates()).data;
  }
  async getPublishers() {
    return (await l(this, b).getPublishers()).data;
  }
  async syncSettings(r) {
    return (await l(this, b).syncSettings(r)).data;
  }
  async hasKeys() {
    return (await l(this, b).hasKeys()).data;
  }
  async createKeys() {
    return (await l(this, b).createKeys()).data;
  }
  async saveKeys(r, s) {
    return (await l(this, b).saveKeys({
      appId: r,
      appKey: s
    })).data;
  }
}
b = new WeakMap();
var qe, C, pe, Ce;
class Er extends Xe {
  constructor(r) {
    super(r);
    v(this, qe);
    v(this, C);
    v(this, pe);
    v(this, Ce);
    y(this, pe, new Dt([], (s) => s.alias)), this.servers = l(this, pe).asObservable(), y(this, Ce, new Dt([], (s) => s.alias)), this.allServers = l(this, Ce).asObservable(), this.consumeContext(Ni, (s) => {
      y(this, qe, s);
    }), this.provideContext(ue, this), y(this, C, new dn(this));
  }
  /**
   * @name getAllServers
   * @description get all the configured servers
   * @param includeDisabled include servers that are disabled
   * @returns a list of configured servers
   */
  async getAllServers(r = !1) {
    const s = await l(this, C).getAllServers(r);
    return s && (l(this, Ce).setValue(s), l(this, pe).setValue(s)), s;
  }
  /**
   * get a list of avalible servers for this action.
   * @param unique unique id of the root element
   * @param entityType entity type of the root element
   * @param mode publisher mode
   * @param includeDisabled do we include servers that are disabled by default?
   * @returns list of servers.
   */
  async getAvailableServers(r, s, i, a = !1) {
    const n = await l(this, C).getAvailableServers(
      r,
      s,
      !a,
      i ?? Ue.PUSH
    );
    return n && l(this, pe).setValue(n), n;
  }
  /**
   * checks to see if we can reach a server by its URL
   * @param url the url of the server to check
   * @returns the status of the check.
   */
  async checkServerUrl(r) {
    return await l(this, C).checkServerUrl(r);
  }
  /**
   * checks a server based on the alias of that server.
   * @param alias alias to the server you want to check
   * @returns the status of that server
   */
  async checkServer(r) {
    return await l(this, C).checkServer(r);
  }
  /**
   * @name deleteServer
   * @param alias the alias of the server you want to delete
   * @returns true if the server is deleted
   */
  async deleteServer(r) {
    return await l(this, C).deleteServer(r);
  }
  /**
   * @name saveServer
   * @description save or create a server
   * @param server the server details to save.
   * @returns true if the server was saved
   * @abstract if the server id is -1, then this will add a server
   */
  async saveServer(r) {
    var i;
    const s = await l(this, C).saveServer(r);
    return s ? (await this.getAllServers(), (i = l(this, qe)) == null || i.peek("positive", {
      data: { headline: "Saved", message: "Server settings updated" }
    }), s) : !1;
  }
  async getServer(r) {
    return await l(this, C).getServer(r);
  }
  /**
   * fetch the possible templates we can use when creating a server.
   * @returns an array of template models we can use to create a server
   */
  async getTemplates() {
    return await l(this, C).getTemplates() ?? [];
  }
  /**
   * fetch all the possible publishers we can set.
   * @returns list of avalible publishers
   */
  async getPublishers() {
    return await l(this, C).getPublishers() ?? [];
  }
  /**
   * sync the settings across the servers.
   * @param servers list of servers to sync
   */
  async syncSettings(r) {
    return await l(this, C).syncSettings(r);
  }
  /**
   * checks to see if this server has appid/key set
   * @returns true if the server's appid and appkey are set
   */
  async hasKeys() {
    return await l(this, C).hasKeys();
  }
  /**
   * generates a new set of keys for the server
   * @returns information for a new set of keys
   */
  async createKeys() {
    return await l(this, C).createKeys();
  }
  /**
   * save an appid and appkey in the config.
   */
  async saveKeys(r, s) {
    return await l(this, C).saveKeys(r, s);
  }
}
qe = new WeakMap(), C = new WeakMap(), pe = new WeakMap(), Ce = new WeakMap();
const ue = new Ae("uSyncPublisherServersContext"), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SyncPublisherServersContext: Er,
  USYNC_PUBLISHER_SERVER_CONTEXT: ue,
  default: Er
}, Symbol.toStringTag, { value: "Module" }));
var vn = Object.defineProperty, yn = Object.getOwnPropertyDescriptor, vs = (t) => {
  throw TypeError(t);
}, he = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? yn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && vn(e, r, i), i;
}, tr = (t, e, r) => e.has(t) || vs("Cannot " + r), Pr = (t, e, r) => (tr(t, e, "read from private field"), e.get(t)), $r = (t, e, r) => e.has(t) ? vs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), mn = (t, e, r, s) => (tr(t, e, "write to private field"), e.set(t, r), r), bn = (t, e, r) => (tr(t, e, "access private method"), r), je, Vt, ys;
let X = class extends ce(
  J
) {
  constructor() {
    super(), $r(this, Vt), $r(this, je), this.selected = !1, this.add = !1, this.hideUrl = !1, this.performCheck = !0, this.selectDisabled = !1, this.consumeContext(ue, (t) => {
      t && (mn(this, je, t), this.server && bn(this, Vt, ys).call(this, this.server));
    });
  }
  render() {
    var e, r, s, i;
    const t = {
      selected: this.selected,
      disabled: !(((e = this.status) == null ? void 0 : e.enabled) ?? !1)
    };
    return this.add ? this.renderAddButton() : c`
					<uui-box @click=${this._handleSelect} class=${Se(t)}>
						<div>
							<div class="server-header">
								<umb-icon .name=${((r = this.server) == null ? void 0 : r.icon) ?? "icon-bug"}></umb-icon>
								<div>
									<h4>${(s = this.server) == null ? void 0 : s.name}</h4>
									<small>${(i = this.server) == null ? void 0 : i.description}</small>
								</div>
							</div>
							${this.renderDetails()} ${this.renderStatus()}
						</div>
					</uui-box>
				`;
  }
  renderDetails() {
    return this.hideUrl ? p : c`<div class="detail">${this.renderUrl()} ${this.renderPublisher()}</div>`;
  }
  renderPublisher() {
    var t;
    return c`<small class="publisher"><em>[${(t = this.server) == null ? void 0 : t.publisher}]</em></small>`;
  }
  renderStatus() {
    return this.performCheck == !1 ? p : c`<usync-publisher-server-status
					.status=${this.status}></usync-publisher-server-status>`;
  }
  renderUrl() {
    var t;
    return this.hideUrl == !0 ? p : c`<small class="url">${(t = this.server) == null ? void 0 : t.url}</small>`;
  }
  _handleSelect() {
    var t;
    this.server && (!this.selectDisabled && !((t = this.status) != null && t.enabled) || this.dispatchEvent(
      new CustomEvent("server-selected", {
        bubbles: !0,
        composed: !0,
        detail: this.server
      })
    ));
  }
  _handleAddServer() {
    this.dispatchEvent(new Event("add-server", { bubbles: !0, composed: !0 }));
  }
  renderAddButton() {
    return c`
			<uui-box @click=${this._handleAddServer} class="add-box">
				<div class="add-button">
					<umb-icon name="icon-add"></umb-icon>
					<h4><umb-localize key="usyncpublish_addServer"></umb-localize></h4>
				</div>
			</uui-box>
		`;
  }
};
je = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakSet();
ys = async function(t) {
  Pr(this, je) !== void 0 && (this.performCheck ? this.status = await Pr(this, je).checkServerUrl(t.url) : this.status = { enabled: !0, status: Gr.UNKNOWN, message: "" });
};
X.styles = w`
		uui-box {
			height: 100%;
			display: flex;
			flex-flow: column;
			align-items: center;
			align-content: center;
			justify-content: center;
			cursor: pointer;
		}

		.add-box {
			box-shadow: none;
			background-color: transparent;
			border: 1px dashed #aaa;
			min-height: 155px;
		}

		uui-box > div {
			display: flex;
			flex-flow: column;
			align-items: center;
			align-content: center;
			justify-content: center;
			height: 100%;
		}

		.selected {
			background-color: lightblue;
		}

		.disabled {
			cursor: not-allowed;
			opacity: 0.6;
		}

		.add-button {
			color: var(--uui-color-positive);
		}

		.server-header {
			display: flex;
			padding: var(--uui-size-3);
			gap: var(--uui-size-space-2);
			align-items: center;
		}

		h4 {
			margin: 0;
			line-height: 1.1;
		}

		.server-header small {
			font-style: italic;
		}

		.detail {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.url {
			font-size: calc(var(--uui-size-layout-1) / 2);
			text-overflow: clip;
		}

		umb-icon {
			font-size: var(--uui-type-h2-size);
		}

		usync-publisher-server-status {
			margin: var(--uui-size-2) 0;
		}
	`;
he([
  u({ type: Object })
], X.prototype, "server", 2);
he([
  S()
], X.prototype, "status", 2);
he([
  u({ type: Boolean })
], X.prototype, "selected", 2);
he([
  u({ type: Boolean })
], X.prototype, "add", 2);
he([
  u({ type: Boolean })
], X.prototype, "hideUrl", 2);
he([
  u({ type: Boolean })
], X.prototype, "performCheck", 2);
he([
  u({ type: Boolean })
], X.prototype, "selectDisabled", 2);
X = he([
  f("usync-publisher-server-button")
], X);
var fn = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, rr = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? _n(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && fn(e, r, i), i;
};
let Ge = class extends ce(J) {
  constructor() {
    super(...arguments), this.showStatus = !1;
  }
  render() {
    var t;
    return this.status === void 0 ? this.renderWaiting() : (t = this.status) != null && t.enabled ? this.renderAvailible() : this.renderUnavailible();
  }
  renderWaiting() {
    return c`
			<div>
				<umb-icon name="icon-sync color-blue" class="waiting"></umb-icon>
				<umb-localize key="usyncpublish_working"></umb-localize>
			</div>
		`;
  }
  renderAvailible() {
    return c`
			<div>
				<umb-icon name="icon-check color-green"></umb-icon>
				<umb-localize key="usyncpublish_availible"></umb-localize>
			</div>
		`;
  }
  renderUnavailible() {
    var t;
    return c`
			<div class="status" .title=${((t = this.status) == null ? void 0 : t.status) ?? ""}>
				${N(this.showStatus, () => {
      var e;
      return c`${(e = this.status) == null ? void 0 : e.status}`;
    })}
				<umb-icon name="icon-wrong color-red"></umb-icon>
				<umb-localize key="usyncpublish_unavailible"></umb-localize>
			</div>
		`;
  }
};
Ge.styles = w`
		.status {
			display: flex;
			gap: var(--uui-size-3);
		}

		umb-icon {
			font-size: 15pt;
		}

		umb-icon.waiting {
			margin: 0;
			padding: 0;
			display: flex;
			animation-name: spin;
			animation-duration: 1000ms;
			animation-iteration-count: infinite;
			animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
		}

		@keyframes spin {
			from {
				transform: rotate(360deg);
			}
			to {
				transform: rotate(0deg);
			}
		}
	`;
rr([
  u({ type: Object })
], Ge.prototype, "status", 2);
rr([
  u({ type: Boolean })
], Ge.prototype, "showStatus", 2);
Ge = rr([
  f("usync-publisher-server-status")
], Ge);
var gn = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, ie = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Sn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && gn(e, r, i), i;
};
let G = class extends ce(J) {
  constructor() {
    super(...arguments), this.showAdd = !0, this.hideUrl = !1, this.performCheck = !0, this.openServer = !1, this.selectDisabled = !1, this.useGrid = !1;
  }
  render() {
    var e, r;
    const t = (e = this.servers) == null ? void 0 : e.map((s) => s ? c`
				<usync-publisher-server-button
					.server=${s}
					.hideUrl=${this.hideUrl}
					.performCheck=${this.performCheck}
					.selectDisabled=${this.selectDisabled}
					.selected=${s.alias == this.selected}></usync-publisher-server-button>
			` : c`<!-- no server -->`);
    return c`<div
			class="server-list ${this.getLayoutClass(((r = this.servers) == null ? void 0 : r.length) || 0)}">
			${t}${this.renderAddButton()}
		</div> `;
  }
  getLayoutClass(t) {
    return this.useGrid == !1 ? "dashboard" : t == 1 ? "single" : "grid";
  }
  renderAddButton() {
    return this.showAdd == !1 ? p : c`<usync-publisher-server-button
					.add=${!0}></usync-publisher-server-button>`;
  }
};
G.styles = w`
		.server-list {
			display: flex;
			justify-content: stretch;
			flex-flow: row;
			flex-wrap: wrap;
			gap: var(--uui-size-4) var(--uui-size-4);
		}

		.server-list.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		usync-publisher-server-button {
			flex-grow: 2;
			max-width: 450px;
			min-width: 200px;
		}
	`;
ie([
  u({ type: Array })
], G.prototype, "servers", 2);
ie([
  u({ type: Boolean })
], G.prototype, "showAdd", 2);
ie([
  u({ type: String })
], G.prototype, "selected", 2);
ie([
  u({ type: Boolean })
], G.prototype, "hideUrl", 2);
ie([
  u({ type: Boolean })
], G.prototype, "performCheck", 2);
ie([
  u({ type: Boolean })
], G.prototype, "openServer", 2);
ie([
  u({ type: Boolean })
], G.prototype, "selectDisabled", 2);
ie([
  u({ type: Boolean })
], G.prototype, "useGrid", 2);
G = ie([
  f("usync-publisher-server-list")
], G);
var wn = Object.defineProperty, Cn = Object.getOwnPropertyDescriptor, ms = (t) => {
  throw TypeError(t);
}, sr = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Cn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && wn(e, r, i), i;
}, ir = (t, e, r) => e.has(t) || ms("Cannot " + r), Tr = (t, e, r) => (ir(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Nt = (t, e, r) => e.has(t) ? ms("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Or = (t, e, r, s) => (ir(t, e, "write to private field"), e.set(t, r), r), bs = (t, e, r) => (ir(t, e, "access private method"), r), lt, ct, ht, fs, _s;
let Ve = class extends ce(J) {
  constructor() {
    super(...arguments), Nt(this, ht), Nt(this, lt, !1), Nt(this, ct);
  }
  get templates() {
    return Tr(this, ct);
  }
  set templates(t) {
    t && (Or(this, ct, t), Tr(this, lt) || (this.selectedTemplate = t[0], Or(this, lt, !0)));
  }
  render() {
    var e;
    const t = (e = this.templates) == null ? void 0 : e.map((r) => {
      var s;
      return c`
                <input 
                    id="template-${r.id}"
                    name="template"
                    type="radio"
                    class="form-check-input"
                    @click=${() => bs(this, ht, fs).call(this, r)}
                    ?checked=${((s = this.selectedTemplate) == null ? void 0 : s.id) === r.id}>
                    <label for="template-${r.id}">
                        <div>
                            <uui-icon name=${r.icon ?? "icon-bug"}></uui-icon>
                        </div>
                        <div>
                            <h4>${r.heading}</h4>
                            <small>${r.subHeading}</small>
                        </div>
                    </label>
                </div>
            `;
    });
    return c` <div>${t}</div>`;
  }
};
lt = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakSet();
fs = function(t) {
  this.selectedTemplate = t, bs(this, ht, _s).call(this);
};
_s = function() {
  this.dispatchEvent(
    new CustomEvent("template-selected", {
      detail: this.selectedTemplate
    })
  );
};
Ve.styles = w`
		label {
			border-radius: var(--uui-button-border-radius, var(--uui-border-radius, 3px));
			border: 1px solid var(--uui-color-border);
			cursor: pointer;
			display: flex;
			align-items: center;
			margin: 10px 0;
			padding: 10px;
		}

		label:hover {
			background-color: var(--uui-color-background);
		}

		input[type='radio'] {
			display: none;
		}

		input[type='radio']:checked + label {
			background-color: var(--uui-color-positive);
			color: var(--uui-color-positive-contrast);
		}

		h4,
		p {
			margin: 0;
		}

		uui-icon {
			font-size: 20pt;
			margin-right: 20px;
		}
	`;
sr([
  u({ type: Array })
], Ve.prototype, "templates", 1);
sr([
  S()
], Ve.prototype, "selectedTemplate", 2);
Ve = sr([
  f("usync-publisher-template-list")
], Ve);
var En = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, gs = (t) => {
  throw TypeError(t);
}, z = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Pn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && En(e, r, i), i;
}, $n = (t, e, r) => e.has(t) || gs("Cannot " + r), Tn = (t, e, r) => e.has(t) ? gs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), xr = (t, e, r) => ($n(t, e, "access private method"), r), ot, Ss, ws;
let R = class extends ce(J) {
  constructor() {
    super(), Tn(this, ot), this.action = null, this.mode = Ue.PUSH, this.hideUrl = !1, this.performCheck = !0, this.showAll = !1, this.useGrid = !1, this.consumeContext(ue, (t) => {
      t && (this.showAll == !1 ? t.getAvailableServers(this.primary, this.entityType, this.mode, !1) : t.getAllServers(), this.observe(t.servers, (e) => {
        var r;
        this.servers = e, ((r = this.servers) == null ? void 0 : r.length) === 1 && (this.selected = this.servers[0].alias, xr(this, ot, ws).call(this, this.servers[0]));
      }));
    });
  }
  render() {
    return c`
			<div class="servers">
				<usync-publisher-server-list
					.servers=${this.servers}
					.showAdd=${!1}
					.selected=${this.selected}
					.hideUrl=${this.hideUrl}
					.performCheck=${this.performCheck}
					.useGrid=${this.useGrid}
					@server-selected=${xr(this, ot, Ss)}></usync-publisher-server-list>
			</div>
		`;
  }
};
ot = /* @__PURE__ */ new WeakSet();
Ss = function(t) {
  this.selected = t.detail.alias;
};
ws = function(t) {
  this.dispatchEvent(
    new CustomEvent("server-selected", {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
};
R.styles = w`
		div.servers {
			display: flex;
			justify-content: center;
		}

		usync-publisher-server-list {
			width: 100%;
		}
	`;
z([
  u({ type: String })
], R.prototype, "action", 2);
z([
  u({ type: String })
], R.prototype, "mode", 2);
z([
  u({ type: Boolean })
], R.prototype, "hideUrl", 2);
z([
  u({ type: String })
], R.prototype, "entityType", 2);
z([
  u({ type: String })
], R.prototype, "primary", 2);
z([
  u({ type: Boolean })
], R.prototype, "performCheck", 2);
z([
  u({ type: Boolean })
], R.prototype, "showAll", 2);
z([
  u({ type: Boolean })
], R.prototype, "useGrid", 2);
z([
  S()
], R.prototype, "servers", 2);
z([
  S()
], R.prototype, "selected", 2);
R = z([
  f("usync-publisher-server-picker")
], R);
var On = Object.defineProperty, xn = Object.getOwnPropertyDescriptor, Cs = (t) => {
  throw TypeError(t);
}, ar = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? xn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && On(e, r, i), i;
}, kn = (t, e, r) => e.has(t) || Cs("Cannot " + r), An = (t, e, r) => e.has(t) ? Cs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), kr = (t, e, r) => (kn(t, e, "access private method"), r), ut, Es, Ps;
let ze = class extends ce(J) {
  constructor() {
    super(...arguments), An(this, ut), this.label = "";
  }
  render() {
    return c`
			<div class="lockable-checkbox">
				${this.renderCheckbox()} ${this.renderLockButton()}
			</div>
		`;
  }
  renderCheckbox() {
    var t;
    return c`
			<uui-checkbox
				name="checkbox"
				@change=${kr(this, ut, Es)}
				.checked=${((t = this.value) == null ? void 0 : t.value) ?? !1}
				label="select item">
				<div slot="label"></div>
			</uui-checkbox>
		`;
  }
  renderLockButton() {
    var e, r, s;
    const t = ((e = this.value) == null ? void 0 : e.editable) ?? !1 ? "unlocked" : "locked";
    return c`
			<label for="locked" class="locked-label">
				${N(
      ((r = this.value) == null ? void 0 : r.editable) ?? !1,
      () => c`<umb-icon name="unlock" color="green"></umb-icon>`,
      () => c`<umb-icon name="lock" color="red"></umb-icon>`
    )}
				${t}

				<input
					type="checkbox"
					id="locked"
					.checked=${((s = this.value) == null ? void 0 : s.editable) ?? !1}
					@change=${kr(this, ut, Ps)} />
			</label>
		`;
  }
};
ut = /* @__PURE__ */ new WeakSet();
Es = function(t) {
  var r;
  const e = t.target;
  e && this.dispatchEvent(
    new CustomEvent("value-change", {
      detail: {
        id: this.id,
        editable: ((r = this.value) == null ? void 0 : r.editable) ?? !1,
        checked: e.checked
      }
    })
  );
};
Ps = function(t) {
  var r;
  const e = t.target;
  e && this.dispatchEvent(
    new CustomEvent("value-change", {
      detail: {
        id: this.id,
        editable: e.checked,
        checked: ((r = this.value) == null ? void 0 : r.value) ?? !1
      }
    })
  );
};
ze.styles = w`
		.lockable-checkbox {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.locked-label {
			cursor: pointer;
			display: flex;
			padding: 5px;
			background-color: #efefef;
			border-radius: 10px;
			width: 80px;
		}

		umb-icon {
			margin-top: -5px;
			margin-right: 5px;
		}

		.locked-label input {
			display: none;
		}
	`;
ar([
  u({ type: Object })
], ze.prototype, "value", 2);
ar([
  u()
], ze.prototype, "label", 2);
ze = ar([
  f("usync-publisher-yes-no-server-option")
], ze);
var Un = Object.defineProperty, In = Object.getOwnPropertyDescriptor, $s = (t) => {
  throw TypeError(t);
}, Pt = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? In(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && Un(e, r, i), i;
}, Nn = (t, e, r) => e.has(t) || $s("Cannot " + r), Rn = (t, e, r) => e.has(t) ? $s("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Mn = (t, e, r) => (Nn(t, e, "access private method"), r), zt, Ts;
let xe = class extends J {
  constructor() {
    super(...arguments), Rn(this, zt), this.hidden = !0;
  }
  render() {
    return c`
			<div @click=${Mn(this, zt, Ts)}>
				<h4>Debug: ${this.headline ?? ""}</h4>
				${N(
      !this.hidden,
      () => c` <div>
							<pre>${JSON.stringify(this.data, null, 1)}</pre>
						</div>`
    )}
			</div>
		`;
  }
};
zt = /* @__PURE__ */ new WeakSet();
Ts = function() {
  this.hidden = !this.hidden;
};
xe.styles = w`
		:host {
			display: block;
			background-color: #ffebee;
			border-radius: 5px;
			margin: 5px 0;
			padding: 3px;
			box-shadow: 1px 1px #ddd;
		}

		h4 {
			cursor: pointer;
			padding: 2px;
			margin: 0;
		}
	`;
Pt([
  u({ type: String })
], xe.prototype, "headline", 2);
Pt([
  u({ type: Object })
], xe.prototype, "data", 2);
Pt([
  S()
], xe.prototype, "hidden", 2);
xe = Pt([
  f("usync-debug")
], xe);
var Dn = Object.defineProperty, Bn = Object.getOwnPropertyDescriptor, Os = (t) => {
  throw TypeError(t);
}, xs = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Bn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && Dn(e, r, i), i;
}, Ln = (t, e, r) => e.has(t) || Os("Cannot " + r), Yn = (t, e, r) => e.has(t) ? Os("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Z = (t, e, r) => (Ln(t, e, "access private method"), r), Y, ks, As, Us, Is, Ns, Rs, $t;
const jn = "usync-publisher-server-sync-settings";
let dt = class extends J {
  constructor() {
    super(...arguments), Yn(this, Y);
  }
  render() {
    return c`
			<div class="options">
				<div
					class="option ${Se({ selected: Z(this, Y, ks).call(this) })}"
					@click=${Z(this, Y, Is)}>
					<h3>
						<umb-localize key="usyncpublish_quickContentTitle">Content</umb-localize>
					</h3>
					<umb-localize key="usyncpublish_quickContentDesc"></umb-localize>
				</div>
				<div
					class="option ${Se({ selected: Z(this, Y, As).call(this) })}"
					@click=${Z(this, Y, Ns)}>
					<h3>
						<umb-localize key="usyncpublish_quickSettingsTitle">Settings</umb-localize>
					</h3>
					<umb-localize key="usyncpublish_quickSettingsDesc"></umb-localize>
				</div>
				<div
					class="option ${Se({ selected: Z(this, Y, Us).call(this) })}"
					@click=${Z(this, Y, Rs)}>
					<h3>
						<umb-localize key="usyncpublish_quickFilesTitle">Files</umb-localize>
					</h3>
					<umb-localize key="usyncpublish_quickFilesDesc"></umb-localize>
				</div>
			</div>
		`;
  }
};
Y = /* @__PURE__ */ new WeakSet();
ks = function() {
  var t;
  return ((t = this.settings) == null ? void 0 : t.includeMedia.value) === !0;
};
As = function() {
  var t;
  return ((t = this.settings) == null ? void 0 : t.includeDependencies.value) === !0;
};
Us = function() {
  var t;
  return ((t = this.settings) == null ? void 0 : t.includeFiles.value) === !0;
};
Is = function() {
  var r;
  const t = !((r = this.settings) != null && r.includeChildren.value), e = {
    includeChildren: { editable: t, value: t },
    deleteMissing: { editable: t, value: t },
    includeMedia: { editable: t, value: t }
  };
  Z(this, Y, $t).call(this, e);
};
Ns = function() {
  var r;
  const t = !((r = this.settings) != null && r.includeDependencies.value), e = {
    includeDependencies: { editable: !1, value: t },
    includeConfig: { editable: !1, value: t },
    includeMediaFiles: { editable: !1, value: !1 }
  };
  Z(this, Y, $t).call(this, e);
};
Rs = function() {
  var r;
  const e = {
    includeFiles: { editable: !1, value: !((r = this.settings) != null && r.includeFiles.value) }
  };
  Z(this, Y, $t).call(this, e);
};
$t = function(t) {
  if (!this.settings) return;
  const e = { ...this.settings, ...t };
  this.dispatchEvent(
    new CustomEvent("usync-publisher-server-update-sync", {
      detail: e
    })
  );
};
dt.styles = w`
		.options {
			display: flex;
			justify-content: space-between;
		}

		.option {
			flex-grow: 1;
			border: 1px solid #aaa;
			border-radius: 5px;
			margin: 5px 10px;
			padding: 10px;
			cursor: pointer;
		}

		.option.selected {
			background-color: #a5d6a7;
		}
	`;
xs([
  u({ type: Object })
], dt.prototype, "settings", 2);
dt = xs([
  f(jn)
], dt);
var Gn = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, Ms = (t) => {
  throw TypeError(t);
}, nr = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Vn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && Gn(e, r, i), i;
}, zn = (t, e, r) => e.has(t) || Ms("Cannot " + r), Wn = (t, e, r) => e.has(t) ? Ms("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), pt = (t, e, r) => (zn(t, e, "access private method"), r), we, Ds, Bs, lr;
let We = class extends V {
  constructor() {
    super(), Wn(this, we), this.loadGroups().then(() => {
    });
  }
  async loadGroups() {
    this.userGroups = (await qr.getUserGroups()).data;
  }
  render() {
    var e;
    const t = (e = this.userGroups) == null ? void 0 : e.map((r) => {
      var s;
      return (s = this.groups) != null && s.includes(r.key) ? c`
				<div class="group">
					<div class="icon">
						<umb-icon name=${r.icon}></umb-icon>
					</div>
					<div class="name">${r.name} (${r.alias})</div>
					<div class="remove">
						<uui-button
							id=${r.key}
							label="remove"
							@click=${() => pt(this, we, Bs).call(this, r.key)}></uui-button>
					</div>
				</div>
			` : p;
    });
    return c`
			${t}

			<uui-button id="addButton" label="pick" @click=${pt(this, we, Ds)}
				>Add Group</uui-button
			>
		`;
  }
};
we = /* @__PURE__ */ new WeakSet();
Ds = async function() {
  const t = await this.getContext(St);
  if (!t) return;
  const e = t.open(this, Ri);
  if (!e) return;
  const r = await e.onSubmit(), s = [...this.groups ?? [], ...r.selection];
  pt(this, we, lr).call(this, s);
};
Bs = async function(t) {
  var s, i;
  if ((((s = this.groups) == null ? void 0 : s.indexOf(t)) ?? -1) == -1) return;
  const r = (i = this.groups) == null ? void 0 : i.filter((a) => a != t);
  pt(this, we, lr).call(this, r);
};
lr = function(t) {
  this.dispatchEvent(
    new CustomEvent("usync-server-update-groups", {
      bubbles: !0,
      composed: !0,
      detail: { groups: t }
    })
  );
};
We.styles = w`
		.group {
			display: flex;
			padding: 10px;
			margin: 5px 0;
			border: 1px dotted #888;
			align-items: center;
		}

		.name {
			flex-grow: 2;
		}

		.icon {
			padding-right: 10px;
			font-size: 15pt;
		}

		#addButton {
			display: block;
			margin: 5px 0;
			border: 1px dotted #888;
			align-items: center;
		}
	`;
nr([
  u({ type: Array })
], We.prototype, "groups", 2);
nr([
  S()
], We.prototype, "userGroups", 2);
We = nr([
  f("usync-publisher-server-user-groups")
], We);
const Hn = "usync.publisher.add.server.modal", Ls = "usync.publisher.connected.server.modal", Fn = "usync.publisher.generate.key.modal", qn = new qt(Ls, {
  modal: { type: "sidebar", size: "small" }
});
var Kn = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, Ys = (t) => {
  throw TypeError(t);
}, js = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Xn(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && Kn(e, r, i), i;
}, cr = (t, e, r) => e.has(t) || Ys("Cannot " + r), Jn = (t, e, r) => (cr(t, e, "read from private field"), e.get(t)), Ar = (t, e, r) => e.has(t) ? Ys("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Qn = (t, e, r, s) => (cr(t, e, "write to private field"), e.set(t, r), r), le = (t, e, r) => (cr(t, e, "access private method"), r), vt, F, Qe, Gs, Vs, zs, Ws;
let yt = class extends V {
  constructor() {
    super(), Ar(this, F), Ar(this, vt), this.consumeContext(St, (t) => {
      Qn(this, vt, t);
    });
  }
  render() {
    return c`
			${this.renderServers()}
			<uui-button
				class="add-btn"
				.label=${this.localize.term("usyncpublish_addServer")}
				@click=${le(this, F, Gs)}></uui-button>
		`;
  }
  renderServers() {
    return this.allowedServers == null ? p : this.allowedServers.map((t) => c`
						<div class="server">
							<umb-icon name=${t.icon}></umb-icon>
							<div class="name">${t.name}</div>

							<uui-checkbox
								id="${t.alias}-push-toggle"
								data-alias=${t.alias}
								.label=${this.localize.term("usyncpublish_push")}
								.checked=${t.push}
								@change=${le(this, F, Vs)}></uui-checkbox>

							<uui-checkbox
								id="${t.alias}-pull-toggle"
								.label=${this.localize.term("usyncpublish_pull")}
								.checked=${t.pull}
								data-alias=${t.alias}
								@change=${le(this, F, zs)}></uui-checkbox>

							<uui-button
								id="remove"
								color="danger"
								.label=${this.localize.term("general_remove")}
								data-alias=${t.alias}
								@click=${le(this, F, Ws)}
								>Remove</uui-button
							>
						</div>
					`);
  }
};
vt = /* @__PURE__ */ new WeakMap();
F = /* @__PURE__ */ new WeakSet();
Qe = function(t) {
  this.dispatchEvent(
    new CustomEvent("update-allowed-servers", { detail: { allowedServers: t } })
  );
};
Gs = async function() {
  var s, i;
  const t = (s = Jn(this, vt)) == null ? void 0 : s.open(
    this,
    qn,
    { data: {} }
  ), e = await (t == null ? void 0 : t.onSubmit());
  if (!e) return;
  const r = (i = this.allowedServers) == null ? void 0 : i.filter(
    (a) => {
      var n;
      return (a == null ? void 0 : a.alias) == ((n = e.allowedServer) == null ? void 0 : n.alias);
    }
  );
  if ((r == null ? void 0 : r.length) == 0) {
    const a = [...this.allowedServers ?? [], e.allowedServer];
    le(this, F, Qe).call(this, a);
  }
};
Vs = function(t) {
  const e = t.target;
  if (!e) return;
  const r = e.getAttribute("data-alias");
  if (!r) return;
  const s = structuredClone(this.allowedServers);
  let i = !1;
  const a = s == null ? void 0 : s.map((n) => (n.alias == r && (n.push = e.checked, i = !0), n));
  i && le(this, F, Qe).call(this, a);
};
zs = function(t) {
  const e = t.target;
  if (!e) return;
  const r = e.getAttribute("data-alias");
  if (!r) return;
  const s = structuredClone(this.allowedServers);
  let i = !1;
  const a = s == null ? void 0 : s.map((n) => (n.alias == r && (n.pull = e.checked, i = !0), n));
  i && le(this, F, Qe).call(this, a);
};
Ws = function(t) {
  const e = t.target;
  if (!e) return;
  const r = e.getAttribute("data-alias");
  if (!r) return;
  const s = structuredClone(this.allowedServers), i = s == null ? void 0 : s.filter((a) => a.alias != r);
  (s == null ? void 0 : s.length) != this.allowedServers && le(this, F, Qe).call(this, i);
};
yt.styles = w`
		.server {
			display: flex;
			align-content: center;
			align-items: center;
			margin-bottom: 10px;
		}

		.name {
			font-weight: bold;
			width: 200px;
			padding: 0 10px;
		}

		uui-icon,
		uui-checkbox {
			padding: 0 10px;
		}

		.add-btn {
			width: 100%;
			border: 1px dashed #ddd;
		}
	`;
js([
  u({ type: Array })
], yt.prototype, "allowedServers", 2);
yt = js([
  f("usync-publisher-connected-servers")
], yt);
const Zn = {
  emptyGuid: "00000000-0000-0000-0000-000000000000",
  emptyString: ""
}, P = Zn, el = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
var tl = Object.defineProperty, rl = Object.getOwnPropertyDescriptor, Hs = (t) => {
  throw TypeError(t);
}, Fs = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? rl(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && tl(e, r, i), i;
}, sl = (t, e, r) => e.has(t) || Hs("Cannot " + r), il = (t, e, r) => e.has(t) ? Hs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), de = (t, e, r) => (sl(t, e, "access private method"), r), te, qs, Ks, Xs, Ze;
let mt = class extends V {
  constructor() {
    super(...arguments), il(this, te), this._entityies = [
      {
        name: "Settings",
        entities: [
          {
            label: "Document types",
            entity: "document-type",
            selected: !0,
            rootId: P.emptyGuid
          },
          {
            label: "Data types",
            entity: Lr,
            selected: !0,
            rootId: P.emptyGuid
          },
          {
            label: "Member types",
            entity: "member-type",
            selected: !0,
            rootId: P.emptyGuid
          },
          {
            label: "Media types",
            entity: "media-type",
            selected: !0,
            rootId: P.emptyGuid
          },
          {
            label: "Document blueprints",
            entity: "document-blueprint",
            selected: !0,
            rootId: P.emptyGuid
          }
        ]
      },
      {
        name: "Languages",
        entities: [
          {
            label: "Languages",
            entity: "language",
            selected: !0,
            rootId: P.emptyString
          },
          {
            label: "Dictionary items",
            entity: "dictionary-item",
            selected: !0,
            rootId: P.emptyGuid
          }
        ]
      },
      {
        name: "Files",
        entities: [
          {
            label: "Templates",
            entity: Dr,
            selected: !0,
            rootId: P.emptyString
          },
          {
            label: "Partial views",
            entity: "partial-view",
            selected: !0,
            rootId: P.emptyString
          },
          {
            label: "Scripts",
            entity: "script",
            selected: !0,
            rootId: P.emptyString
          },
          {
            label: "Stylesheets",
            entity: "stylesheet",
            selected: !0,
            rootId: P.emptyString
          }
        ]
      },
      {
        name: "Content",
        entities: [
          {
            label: "Content",
            entity: Kt,
            selected: !1,
            rootId: P.emptyGuid
          },
          {
            label: "Media",
            entity: Br,
            selected: !1,
            rootId: P.emptyGuid
          }
        ]
      }
    ];
  }
  connectedCallback() {
    super.connectedCallback(), de(this, te, Ze).call(this);
  }
  render() {
    return c`
			${this.renderSelectAll()}
			<div class="entity-list">${this.renderEntityList()}</div>
		`;
  }
  renderEntityList() {
    return this._entityies.map((t) => c`
				<div>
					${this.renderGroupSelect(t)}
					${t.entities.map((e) => this.renderToggle(t.name, e))}
				</div>
			`);
  }
  renderGroupSelect(t) {
    return c`<h4>
			<uui-checkbox
				label=${t.name}
				data-list=${t.name}
				@change=${de(this, te, Xs)}
				.checked=${t.entities.every((e) => e.selected)}>
				${t.name}</uui-checkbox
			>
		</h4>`;
  }
  renderSelectAll() {
    return c`
			<div>
				<uui-checkbox
					label="Select all"
					@change=${de(this, te, Ks)}
					.checked=${this._entityies.every(
      (t) => t.entities.every((e) => e.selected)
    )}></uui-checkbox>
			</div>
		`;
  }
  renderToggle(t, e) {
    return c`
			<div class="toggle">
				<uui-checkbox
					id=${e.entity}
					label-position="right"
					.label=${e.label}
					.checked=${e.selected}
					@change=${() => de(this, te, qs).call(this, t, e)}></uui-checkbox>
			</div>
		`;
  }
};
te = /* @__PURE__ */ new WeakSet();
qs = function(t, e) {
  const r = this._entityies.find((a) => a.name === t);
  if (!r) return;
  const s = r.entities.find((a) => a.entity === e.entity);
  if (!s) return;
  s.selected = !s.selected;
  const i = r.entities.findIndex((a) => a.entity === e.entity);
  r.entities.splice(i, 1, s), this.requestUpdate(), de(this, te, Ze).call(this);
};
Ks = function(t) {
  const e = t.target.checked;
  this._entityies.forEach((r) => {
    r.entities.forEach((s) => {
      s.selected = e;
    });
  }), this.requestUpdate(), de(this, te, Ze).call(this);
};
Xs = function(t) {
  const e = t.target, r = e.checked, s = e.getAttribute("data-list");
  this._entityies.forEach((i) => {
    i.name === s && i.entities.forEach((a) => {
      a.selected = r;
    });
  }), this.requestUpdate(), de(this, te, Ze).call(this);
};
Ze = function() {
  this.dispatchEvent(
    new CustomEvent("update-selected-entities", {
      detail: this._entityies.flatMap(
        (t) => t.entities.filter((e) => e.selected).map((e) => `umb://${e.entity}/${e.rootId}`)
      )
    })
  );
};
mt.styles = w`
		.entity-list {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 20px;
		}

		.toggle {
			padding-left: var(--uui-size-space-4);
		}

		h4 {
			border-bottom: 1px solid var(--uui-color-border);
			margin-bottom: var(--uui-size-space-4);
		}
	`;
Fs([
  S()
], mt.prototype, "_entityies", 2);
mt = Fs([
  f("usync-publisher-server-sync-list")
], mt);
var $, A, Ee;
class Js extends Xe {
  constructor(r, s) {
    super(r);
    v(this, $);
    v(this, A);
    v(this, Ee);
    y(this, A, new De(void 0)), this.data = l(this, A).asObservable(), y(this, Ee, new Ui(void 0)), this.hasKeys = l(this, Ee).asObservable(), this.provideContext(Qs, this), this.consumeContext(ue, (i) => {
      y(this, $, i), s && this.load(s), this.checkKeys();
    });
  }
  async getPublishers() {
    var r;
    return await ((r = l(this, $)) == null ? void 0 : r.getPublishers()) ?? [];
  }
  setIcon(r) {
    r.icon && (r.color ? this.set({ icon: `${r.icon} color-${r.color}` }) : this.set({ icon: r.icon }));
  }
  setName(r) {
    this.set({ name: r });
  }
  set(r) {
    l(this, A).update(r);
  }
  setSyncOption(r, s) {
    var a;
    const i = (a = l(this, A).getValue()) == null ? void 0 : a.sendSettings;
    i && l(this, A).update({ sendSettings: { ...i, [r]: s } });
  }
  setSyncBoolOption(r, s) {
    var a;
    const i = (a = l(this, A).getValue()) == null ? void 0 : a.sendSettings;
    i && l(this, A).update({ sendSettings: { ...i, [r]: s } });
  }
  setPublisherSetting(r, s) {
    var a;
    const i = (a = l(this, A).getValue()) == null ? void 0 : a.publisherSettings;
    i && l(this, A).update({
      publisherSettings: { ...i, [r]: s }
    });
  }
  setUserGroups(r) {
    l(this, A).update({ userGroups: r });
  }
  async submit() {
    var s;
    const r = this.getData();
    r && (await ((s = l(this, $)) == null ? void 0 : s.saveServer(r)), await this.load(r.key));
  }
  async load(r) {
    var i;
    const s = await ((i = l(this, $)) == null ? void 0 : i.getServer(r));
    l(this, A).setValue(s);
  }
  async checkServer(r) {
    if (l(this, $))
      return await l(this, $).checkServer(r);
  }
  async syncSettings(r) {
    var s;
    l(this, $) && await ((s = l(this, $)) == null ? void 0 : s.syncSettings(r));
  }
  getData() {
    return l(this, A).getValue();
  }
  async checkKeys() {
    var s;
    const r = await ((s = l(this, $)) == null ? void 0 : s.hasKeys());
    l(this, Ee).setValue(r);
  }
  async createKeys() {
    if (l(this, $))
      return await l(this, $).createKeys();
  }
  async saveKeys(r, s) {
    if (l(this, $))
      return await l(this, $).saveKeys(r, s);
  }
}
$ = new WeakMap(), A = new WeakMap(), Ee = new WeakMap();
const Qs = new Ae(
  "SyncPublisherServerWorkspaceSharedContext"
);
var al = Object.defineProperty, nl = (t, e, r, s) => {
  for (var i = void 0, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = n(e, r, i) || i);
  return i && al(e, r, i), i;
};
class ll extends V {
  constructor() {
    super(), this.consumeContext(Qs, async (e) => {
      this.sharedContext = e;
    });
  }
  onPublisherSettingChange(e) {
    var s;
    const r = e.target;
    r && ((s = this.sharedContext) == null || s.setPublisherSetting(r.id, r.checked));
  }
}
nl([
  u({ type: Object })
], ll.prototype, "options");
var U, ne, E, ee, ve, I, Zs, ei, ti, ri, si, ii;
class cl extends Xe {
  constructor(r) {
    super(r);
    v(this, I);
    v(this, U);
    v(this, ne);
    v(this, E);
    v(this, ee);
    v(this, ve);
    y(this, ne, new Ii("document")), this.entityType = l(this, ne).getValue(), y(this, E, new De(void 0)), this.server = l(this, E).asObservable(), y(this, ee, new De(void 0)), this.folder = l(this, ee).asObservable(), y(this, ve, new Dt([], (s) => s.udi)), this.changes = l(this, ve).asObservable(), y(this, U, new Jr(this)), this.provideContext(ol, this);
  }
  async setEntityType(r) {
    l(this, ne).setValue(r);
  }
  async updateServer(r) {
    l(this, E).setValue(r);
  }
  /**
   * get the folders for a given id.
   */
  async getFolders(r, s) {
    const i = l(this, ne).getValue();
    return i ? i == "document" ? await W(this, I, Zs).call(this, r, s) : await W(this, I, ti).call(this, r, s) : null;
  }
  async calculateChanges(r) {
    const s = l(this, ne).getValue();
    return s ? s === "document" ? await W(this, I, si).call(this, r) : await W(this, I, ii).call(this, r) : null;
  }
  async getContentEntity(r) {
    const s = l(this, E).getValue();
    return s ? l(this, U).getContentEntity(r, s.alias) : void 0;
  }
  async getMediaEntity(r) {
    const s = l(this, E).getValue();
    return s ? l(this, U).getMediaEntity(r, s.alias) : void 0;
  }
  async HasContent() {
    if (l(this, E).getValue())
      return l(this, U).hasContent();
  }
  async HasMedia() {
    if (l(this, E).getValue())
      return l(this, U).hasMedia();
  }
  async HasContentOrMedia() {
    if (l(this, E).getValue())
      return l(this, U).hasContentOrMedia();
  }
}
U = new WeakMap(), ne = new WeakMap(), E = new WeakMap(), ee = new WeakMap(), ve = new WeakMap(), I = new WeakSet(), Zs = async function(r, s) {
  const i = l(this, E).getValue();
  if (!i)
    return await W(this, I, ei).call(this, r, s);
  const a = await l(this, U).getContentFolders(r, i.alias, s);
  if (a)
    return l(this, ee).setValue(a), a;
}, ei = async function(r, s) {
  if (!l(this, E).getValue()) return;
  const a = await l(this, U).getLocalContentFolders(r, s);
  if (a)
    return l(this, ee).setValue(a), a;
}, ti = async function(r, s) {
  const i = l(this, E).getValue();
  if (!i)
    return await W(this, I, ri).call(this, r, s);
  const a = await l(this, U).getMediaFolders(r, i.alias, s);
  if (a)
    return l(this, ee).setValue(a), a;
}, ri = async function(r, s) {
  if (!l(this, E).getValue()) return;
  const a = await l(this, U).getLocalMediaFolders(r, s);
  if (a)
    return l(this, ee).setValue(a), a;
}, si = async function(r) {
  const s = l(this, E).getValue();
  if (!s) return;
  const i = await l(this, U).calculateContentChanges(s.alias, r);
  if (i)
    return l(this, ve).setValue(i), i;
}, ii = async function(r) {
  const s = l(this, E).getValue();
  if (!s) return;
  const i = await l(this, U).calculateContentChanges(s.alias, r);
  if (i)
    return l(this, ve).setValue(i), i;
};
const ol = new Ae("uSyncPublisherBrowserContext");
var ul = Object.defineProperty, hl = Object.getOwnPropertyDescriptor, ai = (t) => {
  throw TypeError(t);
}, Tt = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? hl(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && ul(e, r, i), i;
}, or = (t, e, r) => e.has(t) || ai("Cannot " + r), Ot = (t, e, r) => (or(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ur = (t, e, r) => e.has(t) ? ai("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), dl = (t, e, r, s) => (or(t, e, "write to private field"), e.set(t, r), r), re = (t, e, r) => (or(t, e, "access private method"), r), be, j, ni, li, ci, xt, oi, ui, hi;
let _e = class extends V {
  constructor() {
    super(), Ur(this, j), Ur(this, be), dl(this, be, new cl(this)), Ot(this, be).setEntityType("document");
  }
  render() {
    return c`<umb-body-layout
			><usync-licence-notice></usync-licence-notice>${this.renderSources()}
			${this.renderBreadcrumb()} ${this.renderContent()}
		</umb-body-layout>`;
  }
  renderSources() {
    return c`
			<uui-box headline=${this.localize.term("usyncpublish_pickServer")}>
				<div slot="header">
					<small><umb-localize key="usyncpublish_pickServerTag"></umb-localize></small>
				</div>
				<usync-publisher-server-picker
					@server-selected=${re(this, j, li)}></usync-publisher-server-picker
			></uui-box>
		`;
  }
  renderBreadcrumb() {
    return c`<usync-publisher-browser-folder-path
			@navigate=${re(this, j, ui)}
			.folder=${this._folder}></usync-publisher-browser-folder-path>`;
  }
  renderContent() {
    return c`<usync-publisher-browser-folder-view
			.folder=${this._folder}
			.changes=${this._changes}
			@open-item=${re(this, j, oi)}
			@view-details=${re(this, j, hi)}></usync-publisher-browser-folder-view>`;
  }
};
be = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakSet();
ni = async function(t) {
  var s;
  if (!this._server) return;
  const e = (s = t.folders) == null ? void 0 : s.map((i) => i.udi).filter((i) => i != null || i != null);
  if (!e) return;
  const r = await Ot(this, be).calculateChanges(e);
  r && (this._changes = r);
};
li = async function(t) {
  t.detail && (this._folder = void 0, this._server = t.detail, Ot(this, be).updateServer(t.detail), await re(this, j, xt).call(this, P.emptyGuid, 1));
};
ci = function(t) {
  if (this._changes)
    return this._changes.find((e) => {
      var r;
      return ((r = e.udi) == null ? void 0 : r.uriValue) == t.uriValue;
    });
};
xt = async function(t, e) {
  const r = await Ot(this, be).getFolders(t, e);
  r && (await re(this, j, ni).call(this, r), this._folder = r);
};
oi = async function(t) {
  re(this, j, xt).call(this, t.detail.key, 1);
};
ui = async function(t) {
  re(this, j, xt).call(this, t.detail, 1);
};
hi = async function(t) {
  var a, n;
  if (!((a = t.detail) != null && a.udi)) return;
  const e = re(this, j, ci).call(this, t.detail.udi);
  if ((e == null ? void 0 : e.action) == null) return;
  const r = await this.getContext(St), s = r == null ? void 0 : r.open(this, Xr, {
    data: {
      server: ((n = this._server) == null ? void 0 : n.alias) ?? "",
      item: e.action,
      compareDefault: !0
    }
  });
  await (s == null ? void 0 : s.onSubmit());
};
Tt([
  S()
], _e.prototype, "_folder", 2);
Tt([
  S()
], _e.prototype, "_server", 2);
Tt([
  S()
], _e.prototype, "_changes", 2);
_e = Tt([
  f("usync-publisher-browser-dashboard")
], _e);
const pl = _e, vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pl,
  get uSyncPublisherContentBrowserDashboardElement() {
    return _e;
  }
}, Symbol.toStringTag, { value: "Module" }));
var yl = Object.defineProperty, ml = Object.getOwnPropertyDescriptor, di = (t) => {
  throw TypeError(t);
}, ur = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? ml(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && yl(e, r, i), i;
}, bl = (t, e, r) => e.has(t) || di("Cannot " + r), fl = (t, e, r) => e.has(t) ? di("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Rt = (t, e, r) => (bl(t, e, "access private method"), r), Me, pi, vi, yi;
let He = class extends V {
  constructor() {
    super(...arguments), fl(this, Me);
  }
  render() {
    var t;
    return (t = this.folder) != null && t.folders ? c` <div class="item-list">${this.renderItems(this.folder.folders)}</div>` : p;
  }
  renderItems(t) {
    return t.map((e) => {
      if (!e.udi) return p;
      const r = new Date(e.update).toISOString(), s = Rt(this, Me, pi).call(this, e.udi);
      return c`
				<uui-card-content-node
					.name=${e.name}
					@open=${() => Rt(this, Me, vi).call(this, e)}
					.selectable=${!0}>
					<div slot="icon"><umb-icon .name=${e.icon}></umb-icon></div>
					<div slot="actions">
						<uui-button
							label="Compare"
							look="outline"
							color=${s.color}
							@click=${() => Rt(this, Me, yi).call(this, e)}></uui-button>
					</div>
					<div class="detail">
						<div class="title">Type</div>
						<div class="value">${e.type}</div>
					</div>
					<div class="detail">
						<div class="title">Update</div>
						<div class="value">${this.localize.date(r, el)}</div>
					</div>
					<div class="detail">
						<div class="title">Url</div>
						<div class="value">${e.remoteUrl}</div>
					</div>
				</uui-card-content-node>
			`;
    });
  }
};
Me = /* @__PURE__ */ new WeakSet();
pi = function(t) {
  if (!this.changes) return { tag: "...", color: "warning" };
  const e = this.changes.find((r) => {
    var s;
    return ((s = r.udi) == null ? void 0 : s.uriValue) == t.uriValue;
  });
  if (!e) return { tag: "...", color: "warning" };
  switch (e.action.change) {
    case q.NO_CHANGE:
      return { tag: "in-sync", color: "positive" };
    case q.CLEAN:
      return { tag: "missing", color: "warning" };
    default:
      return { tag: "out of sync", color: "warning" };
  }
};
vi = async function(t) {
  t.hasChildren && this.dispatchEvent(
    new CustomEvent("open-item", {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
};
yi = async function(t) {
  this.dispatchEvent(
    new CustomEvent("view-details", {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
};
He.styles = w`
		.item-list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 10px;
			margin: var(--uui-size-3) 0;
		}

		uui-card-content-node ul {
			list-style: none;
			padding-inline-start: 0px;
			margin: 0px;
		}

		uui-tag {
			cursor: zoom-in;
		}

		.detail {
			display: flex;
			gap: 5px;
		}

		.detail .title {
			font-weight: bold;
			min-width: 60px;
			text-align: right;
		}

		.detail .title::after {
			content: ' :';
		}
	`;
ur([
  u({ type: Object })
], He.prototype, "folder", 2);
ur([
  u({ type: Array })
], He.prototype, "changes", 2);
He = ur([
  f("usync-publisher-browser-folder-view")
], He);
var _l = Object.defineProperty, gl = Object.getOwnPropertyDescriptor, mi = (t) => {
  throw TypeError(t);
}, bi = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? gl(e, r) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (i = (s ? n(e, r, i) : n(i)) || i);
  return s && i && _l(e, r, i), i;
}, Sl = (t, e, r) => e.has(t) || mi("Cannot " + r), wl = (t, e, r) => e.has(t) ? mi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Cl = (t, e, r) => (Sl(t, e, "access private method"), r), Wt, fi;
let bt = class extends V {
  constructor() {
    super(...arguments), wl(this, Wt);
  }
  render() {
    var t;
    return (t = this.folder) != null && t.path ? c`<uui-breadcrumbs>
			${this.folder.path.map(
      (e) => {
        var r;
        return c`<uui-breadcrumb-item
						.lastItem=${e.key == ((r = this.folder) == null ? void 0 : r.key)}
						@click=${() => Cl(this, Wt, fi).call(this, e.key)}
						>${e.name}</uui-breadcrumb-item
					>`;
      }
    )}</uui-breadcrumbs
		>` : p;
  }
};
Wt = /* @__PURE__ */ new WeakSet();
fi = function(t) {
  var e;
  ((e = this.folder) == null ? void 0 : e.key) != t && this.dispatchEvent(
    new CustomEvent("navigate", { bubbles: !0, composed: !0, detail: t })
  );
};
bt.styles = w`
		uui-breadcrumbs {
			margin: 15px 0;
		}

		uui-breadcrumb-item {
			cursor: pointer;
		}
	`;
bi([
  u({ type: Object })
], bt.prototype, "folder", 2);
bt = bi([
  f("usync-publisher-browser-folder-path")
], bt);
const El = {
  type: "globalContext",
  alias: "usync.publisher.settings.context",
  name: "usync publisher settings context",
  js: () => import("./settings.context-DF4xXEoj.js")
}, Pl = [El], hr = "sync-server-root", dr = "sync-server-item";
class $l extends Gi {
  constructor(e) {
    super(e, { getRootItems: _i, getChildrenOf: Ol, getAncestorsOf: Tl, mapper: xl });
  }
}
const Tl = async (t) => await O.getAncestors({ query: { id: t.treeItem.unique } }), _i = async (t) => await O.root({ query: { skip: t.skip, take: t.take } }), Ol = async (t) => {
  var e;
  return ((e = t.parent) == null ? void 0 : e.unique) === null ? await _i(t) : await O.getChildren({ query: { parent: t.parent.unique } });
}, xl = (t) => ({
  unique: t.id ?? "",
  parent: { unique: "", entityType: hr },
  name: t.name ?? "unknown",
  entityType: dr,
  hasChildren: t.hasChildren,
  isFolder: !1,
  icon: t.icon ?? "icon-bug"
});
var ft, Si;
class gi extends Vi {
  constructor(r) {
    super(r, Ht.toString());
    v(this, ft);
    new Wi(r, {
      store: this,
      connectToStoreAlias: Ht,
      updateStoreItemMapper: (s) => W(this, ft, Si).call(this, s)
    });
  }
}
ft = new WeakSet(), Si = function(r) {
  return {
    name: r.name
  };
};
const Ht = new Ae(gi.name);
class kl extends zi {
  constructor(e) {
    super(e, $l, Ht);
  }
  async requestTreeRoot() {
    return { data: {
      unique: null,
      entityType: hr,
      name: "#usyncpublish_menuName",
      hasChildren: !0,
      isFolder: !0,
      icon: "icon-truck"
    } };
  }
}
const wi = {
  type: "repository",
  alias: "usync.publish.server.tree.repository",
  name: "Publisher tree repository",
  api: kl
}, Al = {
  type: "treeStore",
  alias: "usync.publish.server.tree.store",
  name: "Publisher tree store",
  api: gi
}, Ci = {
  type: "tree",
  kind: "default",
  alias: "usync.publisher.server.tree",
  name: "Publisher tree",
  meta: {
    repositoryAlias: wi.alias
  }
}, Ul = {
  type: "treeItem",
  kind: "default",
  alias: "sync.publisher.server.tree.rootitem",
  name: "Publisher server tree root item",
  forEntityTypes: [dr, hr]
}, Il = {
  type: "menuItem",
  kind: "tree",
  alias: "usync.publisher.server.tree.menuitem",
  name: "Publisher server menu item",
  weight: -1,
  meta: {
    label: "usyncpublish_publisher",
    icon: "icon-clock-alt",
    entityType: dr,
    menus: ["usync.menu"],
    treeAlias: Ci.alias
  }
}, Nl = [wi, Al, Ci, Ul, Il], et = "usync.publisher.server.workspace", ke = "usync.publisher.server.root.workspace", pr = "sync-server-item", kt = "sync-server-root", it = [
  {
    alias: "Umb.Condition.WorkspaceAlias",
    match: et
  }
], Rl = [
  {
    type: "workspaceView",
    alias: "usync.publisher.server.workspace.view.default",
    name: "Publisher default server view",
    js: () => import("./server-item-default.element-Bf7UM__L.js"),
    weight: 100,
    meta: {
      label: "#usyncpublish_server",
      pathname: "default",
      icon: "icon-server"
    },
    conditions: it
  },
  {
    type: "workspaceView",
    alias: "usync.publisher.server.workspace.view.advanced",
    name: "Publisher Advanced server view",
    js: () => import("./server-item-advanced.element-BVhs0eEO.js"),
    weight: 25,
    meta: {
      label: "#usyncpublish_advanced",
      pathname: "advanced",
      icon: "icon-settings"
    },
    conditions: it
  },
  {
    type: "workspaceView",
    alias: "usync.publisher.server.workspace.view.permissions",
    name: "Publisher server permissions view",
    js: () => import("./server-item-permissions.element-Cp8seqZw.js"),
    weight: 50,
    meta: {
      label: "#usyncpublish_permissions",
      pathname: "permissions",
      icon: "icon-lock"
    },
    conditions: it
  },
  {
    type: "workspaceView",
    alias: "usync.publisher.server.workspace.view.sync",
    name: "Publisher sync view",
    js: () => import("./server-item-sync.element-BwSJwgj2.js"),
    weight: 10,
    meta: {
      label: "#usyncpublish_sync",
      pathname: "sync",
      icon: "icon-refresh"
    },
    conditions: it
  }
], Ml = [...Rl];
var ye, Pe;
class Ir extends Yr {
  constructor(r) {
    super(r, et);
    v(this, ye);
    v(this, Pe);
    y(this, Pe, new De(void 0)), this.data = l(this, Pe).asObservable(), this.unique = l(this, Pe).asObservablePart((s) => s == null ? void 0 : s.id), this.provideContext(vr, this), y(this, ye, new Js(r, void 0));
  }
  getData() {
    var r;
    return (r = l(this, ye)) == null ? void 0 : r.getData();
  }
  getUnique() {
  }
  getEntityType() {
    return pr;
  }
  async submit() {
    var r;
    (r = l(this, ye)) == null || r.submit();
  }
  async load(r) {
    var s;
    (s = l(this, ye)) == null || s.load(r);
  }
  destroy() {
    super.destroy();
  }
}
ye = new WeakMap(), Pe = new WeakMap();
const vr = new Ae(
  "SyncPublisherServerWorkspaceContext",
  void 0,
  (t) => {
    var e;
    return ((e = t.getEntityType) == null ? void 0 : e.call(t)) === "sync-server-item";
  }
), Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SyncPublisherServerWorkspaceContext: Ir,
  USYNC_PUBLISHER_SERVER_WORKSPACE_CONTEXT: vr,
  default: Ir
}, Symbol.toStringTag, { value: "Module" }));
class Bl extends Xt {
  async execute() {
    const e = await this.getContext(vr);
    e == null || e.submit();
  }
}
const Ll = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "usync.publisher.server.workspace.action.save",
    name: "Save server",
    api: Bl,
    meta: {
      look: "primary",
      color: "positive",
      label: "#buttons_save"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: et
      }
    ]
  }
], Yl = [
  {
    type: "entityAction",
    alias: "usync.publish.server.delete",
    name: "Delete action",
    api: () => import("./delete-action-CsQGL4v4.js"),
    forEntityTypes: [pr],
    weight: 10,
    meta: {
      icon: "icon-trash",
      label: "#general_delete"
    }
  }
], jl = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "usync.publish.server.reload",
    name: "Reload servers list",
    forEntityTypes: [kt]
  }
], Gl = [...Ll, ...Yl, ...jl], Vl = {
  type: "workspace",
  alias: et,
  name: "publisher item workspace",
  js: () => import("./server-item-workspace.element-CmGuGO4g.js"),
  meta: {
    entityType: pr
  }
}, zl = {
  type: "workspaceContext",
  alias: "usync.publisher.server.workspace.context",
  name: "Publisher workspace context",
  js: () => Promise.resolve().then(() => Dl),
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: et
    }
  ]
}, Wl = [Vl, zl, ...Gl, ...Ml];
class Hl extends Xt {
  async execute() {
    const e = await this.getContext(ue);
    if (!e) return;
    const r = await e.getAllServers(), s = r == null ? void 0 : r.map((i) => i.alias);
    await e.syncSettings(s ?? []);
  }
}
var me, $e;
class Nr extends Yr {
  constructor(r) {
    super(r, ke);
    v(this, me);
    v(this, $e);
    y(this, $e, new De(void 0)), this.data = l(this, $e).asObservable(), this.unique = l(this, $e).asObservablePart((s) => s == null ? void 0 : s.id), this.provideContext(yr, this), y(this, me, new Js(
      r,
      P.emptyGuid
    )), this.consumeContext(ue, async (s) => {
      s != null && await this.load();
    });
  }
  getEntityType() {
    return kt;
  }
  getUnique() {
  }
  getData() {
    var r;
    return (r = l(this, me)) == null ? void 0 : r.getData();
  }
  async submit() {
    var r;
    await ((r = l(this, me)) == null ? void 0 : r.submit()), this.load();
  }
  async load() {
    var r;
    await ((r = l(this, me)) == null ? void 0 : r.load(P.emptyGuid));
  }
}
me = new WeakMap(), $e = new WeakMap();
const yr = new Ae(
  "SyncPublisherServerRootWorkspaceContext",
  void 0,
  (t) => t.getEntityType() === kt
), Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SyncPublisherServerRootWorkspaceContext: Nr,
  USYNC_PUBLISHER_SERVER_ROOT_WORKSPACE_CONTEXT: yr,
  default: Nr
}, Symbol.toStringTag, { value: "Module" }));
class ql extends Xt {
  async execute() {
    const e = await this.getContext(yr);
    await (e == null ? void 0 : e.submit());
  }
}
const Kl = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "usync.publisher.server.root.workspace.action.save",
    name: "Save",
    api: ql,
    weight: 10,
    meta: {
      look: "primary",
      color: "positive",
      label: "Save settings"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: ke
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "usync.publisher.server.workspace.action.sync",
    name: "Sync servers",
    api: Hl,
    weight: 20,
    meta: {
      look: "default",
      color: "default",
      label: "Sync servers"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: ke
      }
    ]
  }
], Xl = [...Kl], Re = [
  {
    alias: "Umb.Condition.WorkspaceAlias",
    match: ke
  }
], Jl = [
  {
    type: "workspaceView",
    alias: "usync.publisher.server.root.workspace.view.default",
    name: "Publisher default server root view",
    js: () => import("./server-root-default.element-BvEUCQrp.js"),
    weight: 100,
    meta: {
      label: "#usyncpublish_servers",
      pathname: "root",
      icon: "icon-server"
    },
    conditions: Re
  },
  {
    type: "workspaceView",
    alias: "usync.publisher.server.root.workspace.view.settings",
    name: "Publisher server settings view",
    js: () => import("./server-root-settings.element-Co_dKIFF.js"),
    weight: 90,
    meta: {
      label: "#usyncpublish_defaults",
      pathname: "settings",
      icon: "icon-list"
    },
    conditions: Re
  },
  {
    type: "workspaceView",
    alias: "usync.publisher.server.root.workspace.view.advanced",
    name: "Publisher Advanced server view",
    js: () => import("./server-item-advanced.element-BVhs0eEO.js"),
    weight: 25,
    meta: {
      label: "#usyncpublish_advanced",
      pathname: "advanced",
      icon: "icon-settings"
    },
    conditions: Re
  },
  {
    type: "workspaceView",
    alias: "usync.publisher.server.root.workspace.view.permissions",
    name: "Publisher server permissions view",
    js: () => import("./server-item-permissions.element-Cp8seqZw.js"),
    weight: 50,
    meta: {
      label: "#usyncpublish_permissions",
      pathname: "permissions",
      icon: "icon-lock"
    },
    conditions: Re
  },
  {
    type: "workspaceView",
    alias: "usync.publisher.server.root.workspace.seed",
    name: "uSync server seed view",
    js: () => import("./server-seed.element-BEMsG6s7.js"),
    weight: 0,
    meta: {
      label: "#usyncpublish_seed",
      pathname: "seed",
      icon: "icon-sprout color-green"
    },
    conditions: [
      ...Re,
      {
        alias: "usync.publisher.query.condition",
        query: "seed"
      }
    ]
  }
], Ql = [...Jl], Zl = {
  type: "workspace",
  alias: ke,
  name: "publisher root workspace",
  js: () => import("./server-root-workspace.element-Dgqcyowx.js"),
  meta: {
    entityType: kt
  }
}, ec = {
  type: "workspaceContext",
  alias: "usync.publisher.server.root.workspace.context",
  name: "publisher root workspace",
  js: () => Promise.resolve().then(() => Fl),
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: ke
    }
  ]
}, tc = [ec, Zl, ...Xl, ...Ql], rc = [...Wl, ...tc], sc = {
  type: "modal",
  alias: Ls,
  name: "Connected servers modal",
  js: () => import("./connected-server-modal.element-SQWlUql6.js")
}, ic = [sc], ac = {
  type: "modal",
  alias: Hn,
  name: "add server modal",
  js: () => import("./add-server.modal-element-Cf-C7S1s.js")
}, nc = {
  type: "modal",
  alias: Fn,
  name: "generate key modal",
  js: () => import("./generate-key.modal-element-CbpoA1K_.js")
}, lc = [ac, nc], cc = [
  {
    type: "usync-publisher-config",
    alias: "usync-publisher-realtime-config",
    name: "realtime-config",
    weight: 100,
    js: () => import("./realtime-config.element-4oCZ1b9T.js"),
    elementName: "usync-publisher-realtime-config"
  }
], oc = [...cc], uc = {
  type: "globalContext",
  alias: "usync.publisher.servers.context",
  name: "usync publisher servers context",
  js: () => Promise.resolve().then(() => pn)
}, hc = [
  uc,
  ...lc,
  ...Nl,
  ...rc,
  ...ic,
  ...oc
], Fe = "uSync.UserPermission.Push", Rr = "uSync.UserPermission.Pull", Ft = "uSync.UserPermission.Browse", dc = {
  type: "kind",
  alias: "usync.publisher.push.kind",
  matchType: "entityAction",
  matchKind: "publisher-push",
  manifest: {
    ...jr.manifest,
    type: "entityAction",
    kind: "default",
    api: () => import("./push.action-Dw88KXB5.js"),
    weight: 21,
    meta: {
      icon: "icon-arrow-right",
      label: "#usyncpublish_pushItems"
    },
    conditions: [
      {
        alias: "usync.publisher.push.condition",
        mode: Ue.PUSH
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [Fe]
      }
    ]
  }
}, pc = {
  type: "kind",
  alias: "usync.publisher.pull.kind",
  matchType: "entityAction",
  matchKind: "publisher-pull",
  manifest: {
    ...jr.manifest,
    type: "entityAction",
    kind: "default",
    weight: 20,
    meta: {
      icon: "icon-arrow-left",
      label: "#usyncpublish_pullItems"
    },
    conditions: [
      {
        alias: "usync.publisher.push.condition",
        mode: Ue.PULL
      },
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [Fe]
      }
    ],
    api: () => import("./pull.action-BAYQzJ6X.js")
  }
}, vc = [
  dc,
  pc
], Mr = [
  Bi,
  Kt,
  Li,
  Br,
  Hi,
  Fi,
  qi,
  Ki,
  Xi,
  Ji,
  Qi,
  Dr,
  Mi,
  Lr,
  Yi,
  ji,
  Zi,
  ea,
  ta,
  ra,
  sa,
  ia,
  aa,
  na,
  la,
  oa,
  ua,
  ha,
  da,
  pa
  // these folder are not supported because there is no internal UDI type for them
  // UMB_PARTIAL_VIEW_FOLDER_ENTITY_TYPE,
  // UMB_STYLESHEET_FOLDER_ENTITY_TYPE,
  // UMB_SCRIPT_FOLDER_ENTITY_TYPE,
], yc = [
  {
    type: "entityAction",
    kind: "publisher-push",
    name: "Push action",
    alias: "usync.publisher.action.push",
    forEntityTypes: Mr
  },
  {
    type: "entityAction",
    kind: "publisher-pull",
    name: "Pull action",
    alias: "usync.publisher.action.pull",
    forEntityTypes: Mr
  }
], mc = [
  {
    type: "workspaceActionMenuItem",
    kind: "default",
    alias: "usync.publish.push.entity.action",
    name: "Workspace push action",
    weight: -10,
    forWorkspaceActions: "Umb.WorkspaceAction.Document.SaveAndPublish",
    api: () => import("./push.workspace-action-DOkBKPr6.js"),
    meta: {
      icon: "icon-arrow-right",
      label: "#usyncpublish_publishAction"
    },
    conditions: [
      {
        alias: "Umb.Condition.UserPermission.Document",
        allOf: [Di, Fe]
      },
      {
        alias: ca
      },
      {
        alias: "usync.publisher.push.condition",
        mode: Ue.PUSH
      }
    ]
  }
], bc = [...vc, ...yc, ...mc], fc = [
  {
    type: "dashboard",
    alias: "usync.publisher.content.browser.dashboard",
    name: "content browser dashboard",
    js: () => Promise.resolve().then(() => vl),
    weight: -20,
    meta: {
      label: "#usyncpublish_contentBrowser",
      pathname: "usync-content"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      },
      {
        alias: "usync.publisher.user.dashboard.condition",
        allOf: [Ft]
      }
    ]
  }
  // TODO: media dashboards are not quite right in v14 yet. (putting a dashboard in media section looses the default one)
  // {
  // 	type: 'dashboard',
  // 	alias: 'usync.publisher.media.browser.dashboard',
  // 	name: 'media browser dashboard',
  // 	js: () => import('./dashboard/content-browser-dashboard.element'),
  // 	weight: -20,
  // 	meta: {
  // 		label: '#us',
  // 		pathname: 'usync-media',
  // 	},
  // 	conditions: [
  // 		{
  // 			alias: 'Umb.Condition.SectionAlias',
  // 			match: 'Umb.Section.Media',
  // 		},
  // 	],
  // },
], _c = [...fc], gc = {
  type: "modal",
  alias: Kr,
  name: "uSync change details modal",
  js: () => Promise.resolve().then(() => Ba)
}, Sc = [gc], Ei = "usync-publisher-process-modal", _o = new qt(Ei, {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), wc = [
  {
    type: "modal",
    alias: Ei,
    name: "usync-publisher-process-modal",
    js: () => import("./process-modal.element-BW5CJiny.js")
  }
], Cc = [...wc], D = {
  pipelines: {
    publish: "PublisherPipeline"
  },
  strategies: {
    realtimePush: "RealtimePushStrategy"
  },
  elements: {
    language: "usync-publish-lang-step",
    report: "usync-publish-report-step",
    result: "usync-publish-result-step",
    config: "usync-publish-config-step",
    backgroundScheduled: "usync-publish-background-scheduled-step",
    backgroundCompleted: "usync-publish-background-completed-step"
  }
}, Ec = [
  {
    type: "jumoo-process-step",
    alias: D.elements.config,
    name: "push-config",
    weight: 100,
    js: () => import("./config-step.element-BdwVM2kj.js"),
    elementName: D.elements.config
  },
  {
    type: "jumoo-process-step",
    alias: D.elements.language,
    name: "push-language",
    weight: 200,
    js: () => import("./lang-step.element-h8p9VjoY.js"),
    elementName: D.elements.language
  },
  {
    type: "jumoo-process-step",
    alias: D.elements.report,
    name: "report",
    weight: 300,
    js: () => import("./report-step.element-DsjaNEpm.js"),
    elementName: D.elements.report
  },
  {
    type: "jumoo-process-step",
    alias: D.elements.result,
    name: "result",
    weight: 400,
    js: () => import("./result-step.element-iXCpULQt.js"),
    elementName: D.elements.result
  },
  {
    type: "jumoo-process-step",
    alias: D.elements.backgroundCompleted,
    name: "background",
    weight: 500,
    js: () => import("./background-completed-step.element-CLFjDGom.js"),
    elementName: D.elements.backgroundCompleted
  },
  {
    type: "jumoo-process-step",
    alias: D.elements.backgroundScheduled,
    name: "background-scheduled",
    weight: 600,
    js: () => import("./background-scheduled-step.element-DOROOeyE.js"),
    elementName: D.elements.backgroundScheduled
  }
], Pc = [...Ec], $c = {
  type: "globalContext",
  alias: "usync-publisher-strategy-context",
  name: "uSync Publisher Strategy Context",
  js: () => import("./strategy.context-Nd7v-g-Q.js")
}, Tc = [$c, ...Cc, ...Pc], Oc = [
  {
    type: "localization",
    alias: "usync.publisher.enus",
    name: "English (us)",
    weight: 0,
    meta: { culture: "en-us" },
    js: () => import("./en-us-BP1Wls6D.js")
  },
  {
    type: "localization",
    alias: "usync.publisher.en",
    name: "English",
    weight: 0,
    meta: { culture: "en" },
    js: () => import("./en-us-BP1Wls6D.js")
  }
], xc = [...Oc];
var Te, _t, Pi;
class kc extends Jt {
  constructor(r, s) {
    super(r, s);
    v(this, _t);
    v(this, Te);
    this.config = s.config, this.consumeContext(ue, (i) => {
      y(this, Te, i);
    }), this.consumeContext(va, (i) => {
      i && W(this, _t, Pi).call(this, i.getEntityType(), i.getUnique());
    });
  }
}
Te = new WeakMap(), _t = new WeakSet(), Pi = function(r, s) {
  if (!r || !l(this, Te)) return;
  r && r.indexOf("forms") == -1 && (r = r.replace("-folder", ""));
  const i = `umb://${r}/${s ?? P.emptyGuid}`;
  l(this, Te).getAvailableServers(i, r, this.config.mode, !1).then((a) => {
    this.permitted = ((a == null ? void 0 : a.length) ?? 0) > 0;
  });
};
class Ac extends Jt {
  constructor(e, r) {
    super(e, r), this.permitted = window.location.search.indexOf(this.config.query) !== -1;
  }
}
var Ke, gt, $i;
class Uc extends Jt {
  constructor(r, s) {
    super(r, s);
    v(this, gt);
    v(this, Ke, []);
    this.consumeContext(ya, (i) => {
      i && this.observe(i.currentUser, (a) => {
        y(this, Ke, (a == null ? void 0 : a.fallbackPermissions) || []), W(this, gt, $i).call(this);
      });
    });
  }
}
Ke = new WeakMap(), gt = new WeakSet(), $i = function() {
  var a, n;
  let r = !0, s = !0;
  const i = l(this, Ke);
  (a = this.config.allOf) != null && a.length && (r = this.config.allOf.every((o) => i.includes(o))), (n = this.config.oneOf) != null && n.length && (s = this.config.oneOf.some((o) => i.includes(o))), !r && !s && (r = !1, s = !1), this.permitted = r && s;
};
const Ic = [
  {
    type: "condition",
    alias: "usync.publisher.push.condition",
    name: "uSync Publisher Push Condition",
    api: kc
  },
  {
    type: "condition",
    alias: "usync.publisher.user.dashboard.condition",
    name: "uSync Publisher Dashboard Condition",
    api: Uc
  },
  {
    type: "condition",
    alias: "usync.publisher.query.condition",
    name: "uSync Publisher Query Condition",
    api: Ac
  }
], Mt = [Kt], Nc = [
  {
    type: "entityUserPermission",
    alias: Fe,
    name: "uSync User Push Permission",
    forEntityTypes: Mt,
    meta: {
      verbs: [Fe],
      label: "Publisher Push",
      description: "Permission to push content to another server",
      group: "Publisher"
    }
  },
  {
    type: "entityUserPermission",
    alias: Rr,
    name: "uSync User Pull Permission",
    forEntityTypes: Mt,
    meta: {
      verbs: [Rr],
      label: "Publisher Pull",
      description: "Permission to pull content from a server",
      group: "Publisher"
    }
  },
  {
    type: "entityUserPermission",
    alias: Ft,
    name: "uSync User Browse Permission",
    forEntityTypes: Mt,
    meta: {
      verbs: [Ft],
      label: "Publisher Browse",
      description: "Permission to view the browse dashboard",
      group: "Publisher"
    }
  }
], Rc = [...Nc], go = (t, e) => {
  e.registerMany([
    ...Pl,
    ...hc,
    ...bc,
    ..._c,
    ...Sc,
    ...xc,
    ...Tc,
    ...Ic,
    ...Rc
  ]), t.consumeContext(ki, (r) => {
    if (!r) return;
    const s = r.getOpenApiConfiguration();
    h.setConfig({ baseUrl: s.base, credentials: s.credentials }), h.interceptors.request.use(async (i, a) => {
      const n = await r.getLatestToken();
      return i.headers.set("Authorization", `Bearer ${n}`), i;
    });
  });
};
export {
  q as C,
  ba as D,
  Ue as P,
  D as S,
  _o as U,
  ue as a,
  Qs as b,
  ll as c,
  mo as d,
  ma as e,
  fo as f,
  el as g,
  Ir as h,
  Fn as i,
  Nr as j,
  Hn as k,
  pr as l,
  qr as m,
  bo as n,
  O as o,
  go as p,
  P as u
};
//# sourceMappingURL=index-DFDZ_Jke.js.map

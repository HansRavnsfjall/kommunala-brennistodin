var Wm = Object.defineProperty;
var Qs = (t) => {
  throw TypeError(t);
};
var Lm = (t, e, r) => e in t ? Wm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Zs = (t, e, r) => Lm(t, typeof e != "symbol" ? e + "" : e, r), Xa = (t, e, r) => e.has(t) || Qs("Cannot " + r);
var c = (t, e, r) => (Xa(t, e, "read from private field"), r ? r.call(t) : e.get(t)), f = (t, e, r) => e.has(t) ? Qs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), y = (t, e, r, a) => (Xa(t, e, "write to private field"), a ? a.call(t, r) : e.set(t, r), r), w = (t, e, r) => (Xa(t, e, "access private method"), r);
import { UmbModalToken as C, UMB_MODAL_MANAGER_CONTEXT as q, UmbModalBaseElement as we, umbConfirmModal as qo } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionBase as ie } from "@umbraco-cms/backoffice/entity-action";
import { UmbConditionBase as Wn, umbExtensionsRegistry as Ln } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextToken as L } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as Nm, UmbControllerBase as Nn } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as d, UmbApiError as Vm } from "@umbraco-cms/backoffice/resources";
import { UmbObjectState as en, partialUpdateFrozenArray as Ut, filterFrozenArray as tn, appendToFrozenArray as rn, assignToFrozenObject as qm } from "@umbraco-cms/backoffice/observable-api";
import { UMB_CURRENT_USER_CONTEXT as Vn } from "@umbraco-cms/backoffice/current-user";
import { UmbTreeServerDataSourceBase as Fa, UmbUniqueTreeStore as Ea, UmbTreeRepositoryBase as $a, UMB_TREE_PICKER_MODAL_ALIAS as qn } from "@umbraco-cms/backoffice/tree";
import { UmbDetailStoreBase as Fe, UmbItemStoreBase as jn } from "@umbraco-cms/backoffice/store";
import { UmbId as K } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as Ee, UmbItemServerDataSourceBase as Bn, UmbItemRepositoryBase as Yn } from "@umbraco-cms/backoffice/repository";
import { UmbWorkspaceActionBase as jm, UmbSaveWorkspaceAction as Pr } from "@umbraco-cms/backoffice/workspace";
import { customElement as p, html as n, css as O, property as m, when as h, map as Bm, state as b, queryAll as Gn, repeat as _i, unsafeHTML as jo, LitElement as kt } from "@umbraco-cms/backoffice/external/lit";
import { UmbSorterController as Si } from "@umbraco-cms/backoffice/sorter";
import { UmbLitElement as $e } from "@umbraco-cms/backoffice/lit-element";
import { UMB_NOTIFICATION_CONTEXT as bi } from "@umbraco-cms/backoffice/notification";
import { firstValueFrom as Bo, first as Ym } from "@umbraco-cms/backoffice/external/rxjs";
import { generateAlias as an, blobDownload as Gm, ensurePathEndsWithSlash as Hm, splitStringToArray as Hn } from "@umbraco-cms/backoffice/utils";
import { UMB_DOCUMENT_ENTITY_TYPE as Km, UmbDocumentPreviewRepository as Xm } from "@umbraco-cms/backoffice/document";
import { UMB_SERVER_CONTEXT as Jm } from "@umbraco-cms/backoffice/server";
import { UmbLocalizationController as Qm } from "@umbraco-cms/backoffice/localization-api";
import { loadManifestApi as Zm } from "@umbraco-cms/backoffice/extension-api";
import { MediaService as ep } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbTextStyles as Ca } from "@umbraco-cms/backoffice/style";
import { encodeFolderName as tp } from "@umbraco-cms/backoffice/router";
import { UMB_COLLECTION_ALIAS_CONDITION as Yo, UmbDefaultCollectionContext as rp, UMB_COLLECTION_CONTEXT as ip } from "@umbraco-cms/backoffice/collection";
import { UmbEntityBulkActionBase as ap } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_AUTH_CONTEXT as op } from "@umbraco-cms/backoffice/auth";
import { UmbElementMixin as lt } from "@umbraco-cms/backoffice/element-api";
import { UUITextareaEvent as sp, UUIRefNodeFormElement as np, UUIRefNodeElement as lp, UUIFormControlMixin as Kn } from "@umbraco-cms/backoffice/external/uui";
import { UmbPickerInputContext as Xn } from "@umbraco-cms/backoffice/picker-input";
const cp = [
  {
    type: "localization",
    alias: "Forms.Localization.En",
    weight: -100,
    name: "English (US)",
    meta: {
      culture: "en"
    },
    js: () => import("./en.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Cs_CZ",
    weight: -100,
    name: "Czech",
    meta: {
      culture: "cs-cz"
    },
    js: () => import("./cs-cz.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Da_DK",
    weight: -100,
    name: "Danish",
    meta: {
      culture: "da-dk"
    },
    js: () => import("./da-dk.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.En_GB",
    weight: -100,
    name: "English (UK)",
    meta: {
      culture: "en-gb"
    },
    js: () => import("./en-gb.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Es_ES",
    weight: -100,
    name: "Spanish",
    meta: {
      culture: "es-es"
    },
    js: () => import("./es-es.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Fr_FR",
    weight: -100,
    name: "French",
    meta: {
      culture: "fr-fr"
    },
    js: () => import("./fr-fr.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.It_IT",
    weight: -100,
    name: "French",
    meta: {
      culture: "it-it"
    },
    js: () => import("./it-it.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Pl_PL",
    weight: -100,
    name: "Polish",
    meta: {
      culture: "pl-pl"
    },
    js: () => import("./pl-pl.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Nl_NL",
    weight: -100,
    name: "Dutch",
    meta: {
      culture: "nl-nl"
    },
    js: () => import("./nl-nl.js")
  }
], up = [...cp], Rt = "forms-datasource", wi = "forms-datasource-root", dp = new C(
  "Forms.Modal.DataSourceCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class mp extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      dp
    ).onSubmit().catch(() => {
    });
  }
}
const pp = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.DataSource.Create",
    name: "Create Data Source Entity Action",
    weight: 1e3,
    api: mp,
    forEntityTypes: [wi],
    meta: {
      icon: "icon-add",
      label: "Create..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.DataSourceCreateOptions",
    name: "Data Source Create Options Modal",
    js: () => import("./datasource-create-options-modal.element.js")
  }
], hp = [...pp], fp = new C(
  "Forms.Modal.DatasourceDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class yp extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      fp,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const gp = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Datasource.Delete",
    name: "Delete Datasource Entity Action",
    weight: 100,
    api: yp,
    forEntityTypes: [Rt],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.DatasourceDeleteConfirm",
    name: "Prevalue Source Delete Confirm Modal",
    js: () => import("./datasource-delete-confirm-modal.element.js")
  }
], vp = [...gp], _p = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Forms.EntityAction.DataSource.ReloadChildrenOf",
    name: "Reload Children",
    forEntityTypes: [wi]
  }
], Sp = [
  ..._p,
  ...hp,
  ...vp
], Jn = "Forms.Condition.DataSourceCreated", bp = [
  {
    type: "condition",
    name: "Forms Data Source Created Condition",
    alias: Jn,
    api: () => import("./datasource-created.condition.js")
  }
], wp = [...bp], Go = "Umb.Section.Forms", Ot = "Umb.Menu.Forms", Fp = {
  type: "section",
  alias: Go,
  name: "Forms Section",
  weight: 0,
  meta: {
    label: "Forms",
    pathname: "forms"
  }
}, Ep = [
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarMenu.Forms",
    name: "Forms Section Sidebar Menu Forms",
    weight: 400,
    meta: {
      label: "Forms",
      menu: Ot
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: Go
      }
    ]
  }
], $p = [
  {
    type: "menu",
    alias: Ot,
    name: "Forms Menu",
    meta: {
      label: "Forms"
    }
  }
], Cp = [Fp, ...Ep, ...$p], Fi = new L("forms-context");
var Ho = /* @__PURE__ */ ((t) => (t.SHOW = "Show", t.HIDE = "Hide", t))(Ho || {}), Ko = /* @__PURE__ */ ((t) => (t.ALL = "All", t.ANY = "Any", t))(Ko || {}), Qn = /* @__PURE__ */ ((t) => (t.IS = "Is", t.IS_NOT = "IsNot", t.GREATER_THEN = "GreaterThen", t.LESS_THEN = "LessThen", t.CONTAINS = "Contains", t.CONTAINS_IGNORE_CASE = "ContainsIgnoreCase", t.STARTS_WITH = "StartsWith", t.STARTS_WITH_IGNORE_CASE = "StartsWithIgnoreCase", t.ENDS_WITH = "EndsWith", t.ENDS_WITH_IGNORE_CASE = "EndsWithIgnoreCase", t.NOT_CONTAINS = "NotContains", t.NOT_CONTAINS_IGNORE_CASE = "NotContainsIgnoreCase", t.NOT_STARTS_WITH = "NotStartsWith", t.NOT_STARTS_WITH_IGNORE_CASE = "NotStartsWithIgnoreCase", t.NOT_ENDS_WITH = "NotEndsWith", t.NOT_ENDS_WITH_IGNORE_CASE = "NotEndsWithIgnoreCase", t))(Qn || {}), Zn = /* @__PURE__ */ ((t) => (t.NO_INDICATOR = "NoIndicator", t.MARK_MANDATORY_FIELDS = "MarkMandatoryFields", t.MARK_OPTIONAL_FIELDS = "MarkOptionalFields", t))(Zn || {}), Qe = /* @__PURE__ */ ((t) => (t.FALSE = "False", t.TRUE = "True", t.UNDEFINED = "Undefined", t))(Qe || {}), ce = /* @__PURE__ */ ((t) => (t.NONE = "None", t.SHOW_AT_TOP = "ShowAtTop", t.SHOW_AT_BOTTOM = "ShowAtBottom", t))(ce || {}), Xo = /* @__PURE__ */ ((t) => (t.ASCENDING = "Ascending", t.DESCENDING = "Descending", t))(Xo || {}), Tp = async (t, e) => {
  let r = typeof e == "function" ? await e(t) : e;
  if (r) return t.scheme === "bearer" ? `Bearer ${r}` : t.scheme === "basic" ? `Basic ${btoa(r)}` : r;
}, Op = { bodySerializer: (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() : r) }, Pp = (t) => {
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
}, xp = (t) => {
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
}, Mp = (t) => {
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
}, el = ({ allowReserved: t, explode: e, name: r, style: a, value: i }) => {
  if (!e) {
    let l = (t ? i : i.map((g) => encodeURIComponent(g))).join(xp(a));
    switch (a) {
      case "label":
        return `.${l}`;
      case "matrix":
        return `;${r}=${l}`;
      case "simple":
        return l;
      default:
        return `${r}=${l}`;
    }
  }
  let o = Pp(a), s = i.map((l) => a === "label" || a === "simple" ? t ? l : encodeURIComponent(l) : Ta({ allowReserved: t, name: r, value: l })).join(o);
  return a === "label" || a === "matrix" ? o + s : s;
}, Ta = ({ allowReserved: t, name: e, value: r }) => {
  if (r == null) return "";
  if (typeof r == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${t ? r : encodeURIComponent(r)}`;
}, tl = ({ allowReserved: t, explode: e, name: r, style: a, value: i, valueOnly: o }) => {
  if (i instanceof Date) return o ? i.toISOString() : `${r}=${i.toISOString()}`;
  if (a !== "deepObject" && !e) {
    let g = [];
    Object.entries(i).forEach(([D, P]) => {
      g = [...g, D, t ? P : encodeURIComponent(P)];
    });
    let S = g.join(",");
    switch (a) {
      case "form":
        return `${r}=${S}`;
      case "label":
        return `.${S}`;
      case "matrix":
        return `;${r}=${S}`;
      default:
        return S;
    }
  }
  let s = Mp(a), l = Object.entries(i).map(([g, S]) => Ta({ allowReserved: t, name: a === "deepObject" ? `${r}[${g}]` : g, value: S })).join(s);
  return a === "label" || a === "matrix" ? s + l : l;
}, Dp = /\{[^{}]+\}/g, Ap = ({ path: t, url: e }) => {
  let r = e, a = e.match(Dp);
  if (a) for (let i of a) {
    let o = !1, s = i.substring(1, i.length - 1), l = "simple";
    s.endsWith("*") && (o = !0, s = s.substring(0, s.length - 1)), s.startsWith(".") ? (s = s.substring(1), l = "label") : s.startsWith(";") && (s = s.substring(1), l = "matrix");
    let g = t[s];
    if (g == null) continue;
    if (Array.isArray(g)) {
      r = r.replace(i, el({ explode: o, name: s, style: l, value: g }));
      continue;
    }
    if (typeof g == "object") {
      r = r.replace(i, tl({ explode: o, name: s, style: l, value: g, valueOnly: !0 }));
      continue;
    }
    if (l === "matrix") {
      r = r.replace(i, `;${Ta({ name: s, value: g })}`);
      continue;
    }
    let S = encodeURIComponent(l === "label" ? `.${g}` : g);
    r = r.replace(i, S);
  }
  return r;
}, rl = ({ allowReserved: t, array: e, object: r } = {}) => (a) => {
  let i = [];
  if (a && typeof a == "object") for (let o in a) {
    let s = a[o];
    if (s != null) if (Array.isArray(s)) {
      let l = el({ allowReserved: t, explode: !0, name: o, style: "form", value: s, ...e });
      l && i.push(l);
    } else if (typeof s == "object") {
      let l = tl({ allowReserved: t, explode: !0, name: o, style: "deepObject", value: s, ...r });
      l && i.push(l);
    } else {
      let l = Ta({ allowReserved: t, name: o, value: s });
      l && i.push(l);
    }
  }
  return i.join("&");
}, kp = (t) => {
  var r;
  if (!t) return "stream";
  let e = (r = t.split(";")[0]) == null ? void 0 : r.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => e.startsWith(a))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, Rp = async ({ security: t, ...e }) => {
  for (let r of t) {
    let a = await Tp(r, e.auth);
    if (!a) continue;
    let i = r.name ?? "Authorization";
    switch (r.in) {
      case "query":
        e.query || (e.query = {}), e.query[i] = a;
        break;
      case "cookie":
        e.headers.append("Cookie", `${i}=${a}`);
        break;
      case "header":
      default:
        e.headers.set(i, a);
        break;
    }
    return;
  }
}, on = (t) => Ip({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : rl(t.querySerializer), url: t.url }), Ip = ({ baseUrl: t, path: e, query: r, querySerializer: a, url: i }) => {
  let o = i.startsWith("/") ? i : `/${i}`, s = (t ?? "") + o;
  e && (s = Ap({ path: e, url: s }));
  let l = r ? a(r) : "";
  return l.startsWith("?") && (l = l.substring(1)), l && (s += `?${l}`), s;
}, sn = (t, e) => {
  var a;
  let r = { ...t, ...e };
  return (a = r.baseUrl) != null && a.endsWith("/") && (r.baseUrl = r.baseUrl.substring(0, r.baseUrl.length - 1)), r.headers = il(t.headers, e.headers), r;
}, il = (...t) => {
  let e = new Headers();
  for (let r of t) {
    if (!r || typeof r != "object") continue;
    let a = r instanceof Headers ? r.entries() : Object.entries(r);
    for (let [i, o] of a) if (o === null) e.delete(i);
    else if (Array.isArray(o)) for (let s of o) e.append(i, s);
    else o !== void 0 && e.set(i, typeof o == "object" ? JSON.stringify(o) : o);
  }
  return e;
}, Ja = class {
  constructor() {
    Zs(this, "_fns");
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
}, Up = () => ({ error: new Ja(), request: new Ja(), response: new Ja() }), zp = rl({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), Wp = { "Content-Type": "application/json" }, al = (t = {}) => ({ ...Op, headers: Wp, parseAs: "auto", querySerializer: zp, ...t }), Lp = (t = {}) => {
  let e = sn(al(), t), r = () => ({ ...e }), a = (s) => (e = sn(e, s), r()), i = Up(), o = async (s) => {
    let l = { ...e, ...s, fetch: s.fetch ?? e.fetch ?? globalThis.fetch, headers: il(e.headers, s.headers) };
    l.security && await Rp({ ...l, security: l.security }), l.body && l.bodySerializer && (l.body = l.bodySerializer(l.body)), (l.body === void 0 || l.body === "") && l.headers.delete("Content-Type");
    let g = on(l), S = { redirect: "follow", ...l }, D = new Request(g, S);
    for (let A of i.request._fns) A && (D = await A(D, l));
    let P = l.fetch, z = await P(D);
    for (let A of i.response._fns) A && (z = await A(z, D, l));
    let Z = { request: D, response: z };
    if (z.ok) {
      if (z.status === 204 || z.headers.get("Content-Length") === "0") return l.responseStyle === "data" ? {} : { data: {}, ...Z };
      let A = (l.parseAs === "auto" ? kp(z.headers.get("Content-Type")) : l.parseAs) ?? "json";
      if (A === "stream") return l.responseStyle === "data" ? z.body : { data: z.body, ...Z };
      let x = await z[A]();
      return A === "json" && (l.responseValidator && await l.responseValidator(x), l.responseTransformer && (x = await l.responseTransformer(x))), l.responseStyle === "data" ? x : { data: x, ...Z };
    }
    let _ = await z.text();
    try {
      _ = JSON.parse(_);
    } catch {
    }
    let j = _;
    for (let A of i.error._fns) A && (j = await A(_, z, D, l));
    if (j = j || {}, l.throwOnError) throw j;
    return l.responseStyle === "data" ? void 0 : { error: j, ...Z };
  };
  return { buildUrl: on, connect: (s) => o({ ...s, method: "CONNECT" }), delete: (s) => o({ ...s, method: "DELETE" }), get: (s) => o({ ...s, method: "GET" }), getConfig: r, head: (s) => o({ ...s, method: "HEAD" }), interceptors: i, options: (s) => o({ ...s, method: "OPTIONS" }), patch: (s) => o({ ...s, method: "PATCH" }), post: (s) => o({ ...s, method: "POST" }), put: (s) => o({ ...s, method: "PUT" }), request: o, setConfig: a, trace: (s) => o({ ...s, method: "TRACE" }) };
};
const u = Lp(
  al({
    baseUrl: "http://localhost:50866",
    throwOnError: !0
  })
);
class Np {
  static getConfig(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/config",
      ...e
    });
  }
}
class Vp {
  static getDataSourceType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source-type",
      ...e
    });
  }
  static getDataSourceTypeById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source-type/{id}",
      ...e
    });
  }
}
class Ke {
  static getDataSource(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source",
      ...e
    });
  }
  static postDataSource(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deleteDataSourceById(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source/{id}",
      ...e
    });
  }
  static getDataSourceById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source/{id}",
      ...e
    });
  }
  static putDataSourceById(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getDataSourceScaffold(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source/scaffold",
      ...e
    });
  }
  static getDatasourceWizardByIdScaffold(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/datasource/wizard/{id}/scaffold",
      ...e
    });
  }
  static postDatasourceWizardCreateForm(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/datasource/wizard/create-form",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getTreeDataSourceRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/data-source/root",
      ...e
    });
  }
}
class yC {
  static getTreeEmailTemplateChildrenByParentPath(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/email-template/children/{parentPath}",
      ...e
    });
  }
  static getTreeEmailTemplateRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/email-template/root",
      ...e
    });
  }
}
class po {
  static getExport(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/export",
      ...e
    });
  }
  static postExport(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/export",
      ...e
    });
  }
  static getExportTypes(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/export/types",
      ...e
    });
  }
}
class Oa {
  static getFieldType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/field-type",
      ...e
    });
  }
  static getFieldTypeById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/field-type/{id}",
      ...e
    });
  }
  static getFieldTypeRichtextDatatype(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/field-type/richtext-datatype",
      ...e
    });
  }
  static getFieldTypeValidationPattern(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/field-type/validation-pattern",
      ...e
    });
  }
}
class pt {
  static postFolder(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deleteFolderById(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}",
      ...e
    });
  }
  static getFolderById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}",
      ...e
    });
  }
  static putFolderById(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFolderByIdIsEmpty(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}/is-empty",
      ...e
    });
  }
  static putFolderByIdMove(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getItemFolder(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/item/folder",
      ...e
    });
  }
}
class qp {
  static getFormTemplate(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form-template",
      ...e
    });
  }
}
class ee {
  static getForm(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form",
      ...e
    });
  }
  static postForm(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static postFormFieldByIdValidateSettings(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form-field/{id}/validate-settings",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static postFormWorkflowByIdValidateSettings(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form-workflow/{id}/validate-settings",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static deleteFormById(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}",
      ...e
    });
  }
  static getFormById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}",
      ...e
    });
  }
  static putFormById(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static postFormByIdCopy(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/copy",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static postFormByIdCopyWorkflows(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/copy-workflows",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFormByIdHasRelations(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/has-relations",
      ...e
    });
  }
  static putFormByIdMove(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFormByIdRelations(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/relations",
      ...e
    });
  }
  static getFormExport(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/export",
      ...e
    });
  }
  static postFormImport(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/import",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getFormScaffold(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/scaffold",
      ...e
    });
  }
  static getFormScaffoldByTemplate(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/scaffold/{template}",
      ...e
    });
  }
  static getItemForm(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/item/form",
      ...e
    });
  }
  static getTreeFormChildrenByParentId(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/form/children/{parentId}",
      ...e
    });
  }
  static getTreeFormRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/form/root",
      ...e
    });
  }
}
class gC {
  static getLicensingStatus(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/licensing/status",
      ...e
    });
  }
}
class jp {
  static getMediaByPath(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/media/by-path",
      ...e
    });
  }
}
class vC {
  static getPickerDataType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/picker/data-type",
      ...e
    });
  }
  static getPickerDocumentType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/picker/document-type",
      ...e
    });
  }
  static getPickerDocumentTypeByAliasProperties(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/picker/document-type/{alias}/properties",
      ...e
    });
  }
  static postPickerDocumentTypeMappingsRefresh(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/picker/document-type/mappings/refresh",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
}
class Bp {
  static getPrevalueSourceType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source-type",
      ...e
    });
  }
  static getPrevalueSourceTypeById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source-type/{id}",
      ...e
    });
  }
}
class ht {
  static getPrevalueSource(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source",
      ...e
    });
  }
  static postPrevalueSource(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deletePrevalueSourceById(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/{id}",
      ...e
    });
  }
  static getPrevalueSourceById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/{id}",
      ...e
    });
  }
  static putPrevalueSourceById(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getPrevalueSourceByIdValues(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/{id}/values",
      ...e
    });
  }
  static getPrevalueSourceScaffold(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/scaffold",
      ...e
    });
  }
  static getTreePrevalueSourceRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/prevalue-source/root",
      ...e
    });
  }
}
class Ze {
  static getFormByFormIdRecord(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record",
      ...e
    });
  }
  static putFormByFormIdRecordByRecordId(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/{recordId}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFormByFormIdRecordByRecordIdAuditTrail(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/{recordId}/audit-trail",
      ...e
    });
  }
  static getFormByFormIdRecordByRecordIdWorkflowAuditTrail(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/{recordId}/workflow-audit-trail",
      ...e
    });
  }
  static postFormByFormIdRecordByRecordIdWorkflowByWorkflowIdRetry(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/{recordId}/workflow/{workflowId}/retry",
      ...e
    });
  }
  static postFormByFormIdRecordActionsByActionIdExecute(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/actions/{actionId}/execute",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFormByFormIdRecordMetadata(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/metadata",
      ...e
    });
  }
  static getFormByFormIdRecordPageNumber(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/page-number",
      ...e
    });
  }
  static getRecordSetActions(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/record-set-actions",
      ...e
    });
  }
}
class ne {
  static deleteSecurityUserGroupByIdFormSecurity(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user-group/{id}/form-security",
      ...e
    });
  }
  static getSecurityUserGroupByIdFormSecurity(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user-group/{id}/form-security",
      ...e
    });
  }
  static postSecurityUserGroupByIdFormSecurity(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user-group/{id}/form-security",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static putSecurityUserGroupByIdFormSecurity(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user-group/{id}/form-security",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static deleteSecurityUserByIdFormSecurity(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/{id}/form-security",
      ...e
    });
  }
  static getSecurityUserByIdFormSecurity(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/{id}/form-security",
      ...e
    });
  }
  static postSecurityUserByIdFormSecurity(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/{id}/form-security",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static putSecurityUserByIdFormSecurity(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/{id}/form-security",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getSecurityUserCurrentFormSecurity(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/current/form-security",
      ...e
    });
  }
  static getSecurityUserUsersToAssign(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/users-to-assign",
      ...e
    });
  }
  static getTreeSecurityChildrenByParentId(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/security/children/{parentId}",
      ...e
    });
  }
  static getTreeSecurityRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/security/root",
      ...e
    });
  }
}
class Yp {
  static getTheme(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/theme",
      ...e
    });
  }
}
class _C {
  static getUpdatesVersion(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/updates/version",
      ...e
    });
  }
}
class ol {
  static getWorkflowType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/workflow-type",
      ...e
    });
  }
  static getWorkflowTypeById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/workflow-type/{id}",
      ...e
    });
  }
}
var Gt, Ht, ba, sl;
class nn extends Nm {
  constructor(r) {
    super(r, Fi);
    f(this, ba);
    f(this, Gt);
    f(this, Ht);
    y(this, Gt, new en(void 0)), this.config = c(this, Gt).asObservable(), y(this, Ht, new en(
      void 0
    )), this.userSecurity = c(this, Ht).asObservable();
  }
  async hostConnected() {
    super.hostConnected(), this.consumeContext(Vn, (r) => {
      this.observe(r == null ? void 0 : r.currentUser, async (a) => {
        var i;
        (i = a == null ? void 0 : a.allowedSections) != null && i.includes(Go) && (w(this, ba, sl).call(this), this.getUserSecurity());
      });
    });
  }
  async getUserSecurity() {
    const { data: r } = await d(
      this,
      ne.getSecurityUserCurrentFormSecurity({
        query: { includeFormFieldDetails: !1 }
      })
    );
    c(this, Ht).setValue(r);
  }
}
Gt = new WeakMap(), Ht = new WeakMap(), ba = new WeakSet(), sl = async function() {
  const { data: r } = await d(this, Np.getConfig());
  c(this, Gt).setValue(r);
};
const Gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsContext: nn,
  default: nn
}, Symbol.toStringTag, { value: "Module" }));
class Hp extends Wn {
  constructor(e, r) {
    super(e, r), this.consumeContext(Fi, (a) => {
      this.observe(a == null ? void 0 : a.userSecurity, (i) => {
        i && (this.permitted = this.config.match(i));
      });
    });
  }
}
const Jo = "Forms.Condition.SecurityOption", de = "Forms.Condition.SecurityPermission", Kp = [
  {
    type: "condition",
    name: "Form Workspace View Condition",
    alias: de,
    api: Hp
  },
  {
    type: "condition",
    name: "Form Security Options Condition",
    alias: Jo,
    api: () => import("./security-options.condition.js")
  }
], Xp = [...Kp];
class Jp extends Fa {
  constructor(e) {
    super(e, {
      getRootItems: nl,
      getChildrenOf: Qp,
      getAncestorsOf: Zp,
      mapper: eh
    });
  }
}
const nl = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  Ke.getTreeDataSourceRoot()
), Qp = (t) => {
  if (t.parent.unique === null)
    return nl();
  throw new Error("Not supported for the data source tree");
}, Zp = () => {
  throw new Error("Not supported for the data source tree");
}, eh = (t) => ({
  unique: t.id,
  parent: {
    unique: null,
    entityType: wi
  },
  name: t.name,
  entityType: Rt,
  isFolder: t.isFolder,
  hasChildren: t.hasChildren
});
class th extends Ea {
  constructor(e) {
    super(e, ll.contextAlias);
  }
}
const ll = new L("FormsDataSourceTreeStore");
class rh extends $a {
  constructor(e) {
    super(
      e,
      Jp,
      ll
    );
  }
  async requestTreeRoot() {
    return { data: {
      unique: null,
      entityType: wi,
      name: "Data Sources",
      hasChildren: !0,
      isFolder: !0
    } };
  }
}
const ih = {
  type: "menuItem",
  kind: "tree",
  alias: "Forms.MenuItem.DataSource",
  name: "Forms Data Source Menu Item",
  weight: 400,
  meta: {
    label: "Data Sources",
    entityType: Rt,
    treeAlias: "Forms.Tree.DataSources",
    menus: [Ot]
  }
}, ah = [ih], cl = "Forms.Repository.DataSources.Tree", oh = "Forms.Store.DataSources.Tree", sh = "Forms.Tree.DataSources", nh = {
  type: "repository",
  alias: cl,
  name: "Data Source Tree Repository",
  api: rh
}, lh = {
  type: "treeStore",
  alias: oh,
  name: "Data Source Tree Store",
  api: th
}, ch = {
  type: "tree",
  kind: "default",
  alias: sh,
  name: "Data Source Tree",
  meta: {
    repositoryAlias: cl
  },
  conditions: [
    {
      alias: de,
      match: (t) => t.userSecurity.manageDataSources
    }
  ]
}, uh = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.DataSource",
  name: "Data Source Tree Item",
  forEntityTypes: [
    wi,
    Rt
  ]
}, dh = [
  nh,
  lh,
  ch,
  uh,
  ...ah
];
class mh extends Fe {
  constructor(e) {
    super(e, ul.contextAlias);
  }
}
const ul = new L("DataSourceDetailStore");
var qe;
class ph {
  constructor(e) {
    f(this, qe);
    y(this, qe, e);
  }
  /**
   * Creates a new data source scaffold
   * @param {(string | null)} parentUnique
   * @return { DataSourceDetailModel }
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async createScaffold() {
    return { data: {
      entityType: Rt,
      unique: K.new(),
      id: K.new(),
      created: "",
      name: "",
      settings: {},
      formDataSourceTypeId: "",
      valid: !1,
      updated: ""
    } };
  }
  /**
   * Fetches a data source with the given id from the server
   * @param {string} unique
   * @return {FormDataSource}
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, qe),
      Ke.getDataSourceById({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  /**
   * Inserts a new data source on the server
   * @param {FormDataSource} dataSource
   * @return {*}
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Datasource is missing");
    if (!e.unique) throw new Error("Datasource unique is missing");
    const { error: r } = await d(
      c(this, qe),
      Ke.postDataSource({ body: e })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Updates a data source on the server
   * @param {FormDataSource} dataSource
   * @return {*}
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, qe),
      Ke.putDataSourceById({
        path: { id: e.id },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a data source on the server
   * @param {string} unique
   * @return {*}
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, qe),
      Ke.deleteDataSourceById({ path: { id: e } })
    );
  }
}
qe = new WeakMap();
class hh extends Ee {
  constructor(e) {
    super(
      e,
      ph,
      ul
    );
  }
  async requestDataSourceScaffold() {
    const { data: e, error: r } = await d(
      this._host,
      Ke.getDataSourceScaffold()
    );
    return r ? { error: r } : { data: e };
  }
  async requestDataSourceWizardScaffold(e) {
    const { data: r, error: a } = await d(
      this._host,
      Ke.getDatasourceWizardByIdScaffold({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
}
const fh = "Forms.Repository.DataSource.Detail", yh = "Forms.Store.DataSource.Detail", gh = {
  type: "repository",
  alias: fh,
  name: "Data Source Detail Repository",
  api: hh
}, vh = {
  type: "store",
  alias: yh,
  name: "Data Source Detail Store",
  api: mh
}, _h = [gh, vh], Sh = [..._h], bh = new L(
  "UmbWorkspaceContext",
  void 0,
  (t) => {
    var e;
    return ((e = t.getEntityType) == null ? void 0 : e.call(t)) === Rt;
  }
);
var ei;
class wh {
  constructor(e) {
    f(this, ei);
    y(this, ei, e);
  }
  async getCollection() {
    const { data: e, error: r } = await d(
      c(this, ei),
      Oa.getFieldType()
    );
    return r ? { error: r } : {
      data: {
        items: e,
        total: e.length
      }
    };
  }
}
ei = new WeakMap();
var ti;
class Xi {
  constructor(e) {
    f(this, ti);
    y(this, ti, new wh(e));
  }
  async requestCollection() {
    return c(this, ti).getCollection();
  }
  destroy() {
  }
}
ti = new WeakMap();
const Fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsFieldTypeCollectionRepository: Xi,
  default: Xi
}, Symbol.toStringTag, { value: "Module" })), Eh = "Forms.Repository.FieldType.Collection", $h = {
  type: "repository",
  alias: Eh,
  name: "Field Type Collection Repository",
  api: () => Promise.resolve().then(() => Fh)
}, Ch = [$h], oe = "forms-form", pr = "forms-form-root", me = "forms-folder", ho = "forms-form-entry";
class Th extends Fa {
  constructor(e) {
    super(e, {
      getRootItems: dl,
      getChildrenOf: Oh,
      getAncestorsOf: Ph,
      mapper: xh
    });
  }
}
const dl = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  ee.getTreeFormRoot({})
), Oh = (t) => t.parent.unique === null ? dl() : ee.getTreeFormChildrenByParentId({
  path: { parentId: t.parent.unique }
}), Ph = () => {
  throw new Error("Not supported for the forms tree");
}, xh = (t) => {
  var e;
  return {
    unique: t.id,
    parent: {
      unique: ((e = t.parent) == null ? void 0 : e.id) || null,
      entityType: t.parent ? me : pr
    },
    name: t.name,
    path: t.path,
    entityType: t.isFolder ? me : oe,
    isFolder: t.isFolder,
    hasChildren: t.hasChildren
  };
};
class Mh extends Ea {
  constructor(e) {
    super(e, ml.contextAlias);
  }
}
const ml = new L("FormsFormTreeStore");
class Dh extends $a {
  constructor(e) {
    super(e, Th, ml);
  }
  async requestTreeRoot() {
    return { data: {
      unique: null,
      entityType: pr,
      name: "Forms",
      hasChildren: !0,
      isFolder: !0
    } };
  }
}
const Ah = {
  type: "menuItem",
  kind: "tree",
  alias: "Forms.MenuItem.Form",
  name: "Forms Form Menu Item",
  weight: 600,
  meta: {
    label: "Forms",
    entityType: oe,
    icon: "icon-folder",
    treeAlias: "Forms.Tree.Forms",
    menus: [Ot]
  }
}, kh = [Ah], pl = "Forms.Repository.Forms.Tree", Rh = "Forms.Store.Forms.Tree", Qo = "Forms.Tree.Forms", Ih = {
  type: "repository",
  alias: pl,
  name: "Form Tree Repository",
  api: Dh
}, Uh = {
  type: "treeStore",
  alias: Rh,
  name: "Form Tree Store",
  api: Mh
}, zh = {
  type: "tree",
  kind: "default",
  alias: Qo,
  name: "Forms Tree",
  meta: {
    repositoryAlias: pl
  }
  // No condition on this tree, as it's accessible from content for picking forms.
}, Wh = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.Form",
  name: "Form Tree Item",
  forEntityTypes: [
    pr,
    oe,
    me
  ]
}, Lh = [
  Ih,
  Uh,
  zh,
  Wh,
  ...kh
], Nh = new C(qn, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: Qo
  }
}), hl = "Umb.Modal.Forms.ChooseFieldType", fl = new C(hl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), yl = "Umb.Modal.Forms.ChooseWorkflowType", Vh = new C(yl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), gl = "Umb.Modal.Forms.ConfigureWorkflow", qh = new C(gl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), vl = "Umb.Modal.Forms.CreateFormFromDataSource", jh = new C(vl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), _l = "Umb.Modal.Forms.EditPage", Bh = new C(_l, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), Sl = "Umb.Modal.Forms.EditFieldset", Yh = new C(Sl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), bl = "Umb.Modal.Forms.EditField", Gh = new C(bl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), wl = "Umb.Modal.Forms.EditSubmitMessage", Fl = new C(wl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), El = "Umb.Modal.Forms.EditWorkflow", $l = new C(El, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), Cl = "Forms.EntryDetails.Modal", Hh = new C(Cl, {
  modal: {
    type: "sidebar",
    size: "large"
  }
}), Kh = new C(qn, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: Qo
  }
}), Tl = "Umb.Modal.Forms.ExportEntries", Xh = new C(Tl, {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), Ol = "Umb.Modal.Forms.Preview", SC = new C(Ol, {
  modal: {
    type: "dialog",
    size: "medium"
  }
});
var Jh = Object.getOwnPropertyDescriptor, Pl = (t) => {
  throw TypeError(t);
}, Qh = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Jh(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, Zo = (t, e, r) => e.has(t) || Pl("Cannot " + r), Zh = (t, e, r) => (Zo(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ln = (t, e, r) => e.has(t) ? Pl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ef = (t, e, r, a) => (Zo(t, e, "write to private field"), e.set(t, r), r), cn = (t, e, r) => (Zo(t, e, "access private method"), r), Ji, Ai, xl, Ml;
const tf = "form-choose-field-type-modal";
let Qi = class extends we {
  constructor() {
    super(), ln(this, Ai), ln(this, Ji, []), cn(this, Ai, xl).call(this);
  }
  render() {
    return n`<umb-body-layout
      .headline=${this.localize.term("formEdit_chooseFieldType")}
    >
      <uui-box>
        <uui-ref-list>
          ${Zh(this, Ji).map(
      (t) => n`<umb-ref-item
                .name=${t.name}
                .detail=${t.description}
                .icon=${t.icon}
                @open=${() => cn(this, Ai, Ml).call(this, t)}
              ></umb-ref-item>`
    )}
        </uui-ref-list>
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
Ji = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakSet();
xl = async function() {
  const t = new Xi(this), { data: e } = await t.requestCollection();
  ef(this, Ji, (e == null ? void 0 : e.items) || []), this.requestUpdate();
};
Ml = function(t) {
  var e, r;
  (e = this.modalContext) == null || e.updateValue({ selectedValue: t }), (r = this.modalContext) == null || r.submit();
};
Qi = Qh([
  p(tf)
], Qi);
const rf = Qi, af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsChooseFieldTypeModalElement() {
    return Qi;
  },
  default: rf
}, Symbol.toStringTag, { value: "Module" }));
var ri;
class of {
  constructor(e) {
    f(this, ri);
    y(this, ri, e);
  }
  async getCollection() {
    const { data: e, error: r } = await d(
      c(this, ri),
      ol.getWorkflowType()
    );
    return r ? { error: r } : {
      data: {
        items: e,
        total: e.length
      }
    };
  }
}
ri = new WeakMap();
var ii;
class fo {
  constructor(e) {
    f(this, ii);
    y(this, ii, new of(
      e
    ));
  }
  async requestCollection() {
    return c(this, ii).getCollection();
  }
  destroy() {
  }
}
ii = new WeakMap();
const sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsWorkflowTypeCollectionRepository: fo,
  default: fo
}, Symbol.toStringTag, { value: "Module" }));
var nf = Object.getOwnPropertyDescriptor, Dl = (t) => {
  throw TypeError(t);
}, lf = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? nf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, es = (t, e, r) => e.has(t) || Dl("Cannot " + r), cf = (t, e, r) => (es(t, e, "read from private field"), r ? r.call(t) : e.get(t)), un = (t, e, r) => e.has(t) ? Dl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), uf = (t, e, r, a) => (es(t, e, "write to private field"), e.set(t, r), r), dn = (t, e, r) => (es(t, e, "access private method"), r), Zi, ki, Al, kl;
const df = "form-choose-workflow-type-modal";
let ea = class extends we {
  constructor() {
    super(), un(this, ki), un(this, Zi, []), dn(this, ki, Al).call(this);
  }
  render() {
    return n`<umb-body-layout
      headline=${this.localize.term("formWorkflows_chooseWorkflowType")}
    >
      <uui-box>
        <uui-ref-list>
          ${cf(this, Zi).map(
      (t) => n`<umb-ref-item
                .name=${t.name}
                .detail=${t.description}
                .icon=${t.icon}
                @open=${() => dn(this, ki, kl).call(this, t)}
              ></umb-ref-item>`
    )}
        </uui-ref-list>
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click="${this._rejectModal}"
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
Zi = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakSet();
Al = async function() {
  const t = new fo(this), { data: e } = await t.requestCollection();
  uf(this, Zi, (e == null ? void 0 : e.items) || []), this.requestUpdate();
};
kl = function(t) {
  var e, r;
  (e = this.modalContext) == null || e.updateValue({ selectedValue: t }), (r = this.modalContext) == null || r.submit();
};
ea = lf([
  p(df)
], ea);
const mf = ea, pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsChooseWorkflowTypeModalElement() {
    return ea;
  },
  default: mf
}, Symbol.toStringTag, { value: "Module" })), Re = new L(
  "UmbWorkspaceContext",
  void 0,
  (t) => {
    var e;
    return ((e = t.getEntityType) == null ? void 0 : e.call(t)) === oe;
  }
);
class it {
  static getPageScaffold() {
    const e = K.new(), r = this.getFieldsetScaffold();
    return r.page = e, {
      caption: "",
      fieldSets: [r],
      sortOrder: 0,
      id: e,
      form: "",
      buttonCondition: null
    };
  }
  static getFieldsetScaffold() {
    return {
      caption: "",
      sortOrder: 0,
      id: K.new(),
      page: "",
      containers: [this.getContainerScaffold()],
      condition: null
    };
  }
  static getContainerScaffold() {
    return {
      id: K.new(),
      caption: "",
      width: 12,
      fields: []
    };
  }
  static getQuestionScaffold() {
    return {
      caption: "",
      alias: "",
      tooltip: "",
      id: K.new(),
      cssClass: "",
      fieldTypeId: "",
      mandatory: !1,
      prevalueSourceId: "",
      preValues: [],
      dataSourceFieldKey: "",
      condition: this.getConditionScaffold(),
      regex: "",
      requiredErrorMessage: "",
      invalidErrorMessage: "",
      containsSensitiveData: !1,
      settings: {},
      allowedUploadTypes: [],
      allowMultipleFileUploads: !1
    };
  }
  static getConditionScaffold() {
    return {
      id: K.new(),
      enabled: !1,
      actionType: Ho.SHOW,
      logicType: Ko.ALL,
      rules: []
    };
  }
  static getWorkflowScaffold() {
    return {
      id: K.new(),
      name: "",
      form: "",
      active: !0,
      includeSensitiveData: Qe.FALSE,
      isDeleted: !1,
      sortOrder: 0,
      workflowTypeId: "",
      workflowTypeName: "",
      workflowTypeDescription: "",
      workflowTypeIcon: "",
      workflowTypeGroup: "",
      settings: {},
      isMandatory: !1,
      condition: null
    };
  }
}
class Ei {
  constructor(e, r, a) {
    this.config = {
      getUniqueOfElement: (i) => i.getAttribute("sort-unique"),
      getUniqueOfModel: (i) => i,
      identifier: e,
      itemSelector: r,
      containerSelector: a
    };
  }
}
var hf = Object.defineProperty, ff = Object.getOwnPropertyDescriptor, Rl = (t) => {
  throw TypeError(t);
}, Ie = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? ff(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && hf(e, r, i), i;
}, ts = (t, e, r) => e.has(t) || Rl("Cannot " + r), v = (t, e, r) => (ts(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ze = (t, e, r) => e.has(t) ? Rl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Xe = (t, e, r, a) => (ts(t, e, "write to private field"), e.set(t, r), r), N = (t, e, r) => (ts(t, e, "access private method"), r), Ae, at, te, Cr, fe, et, Pa, I, Il, rs, Ul, zl, Wl, is, as, Ll, hr, Sr;
const yf = "form-configure-workflow-stage";
let _e = class extends $e {
  constructor() {
    super(), ze(this, I), ze(this, Ae), ze(this, at), this.collectionName = "", ze(this, te, []), ze(this, Cr, {}), ze(this, fe), this.label = "", this.description = "", this.icon = "", this.allFields = [], ze(this, et, []), ze(this, Pa), this.consumeContext(q, (t) => {
      Xe(this, Ae, t);
    }), this.consumeContext(Re, (t) => {
      Xe(this, at, t);
    });
  }
  set workflows(t) {
    Xe(this, te, structuredClone(t));
    for (let e = 0; e < v(this, te).length; e++) {
      const r = v(this, te)[e];
      v(this, Cr)[r.id] = this.collectionName;
    }
    N(this, I, Il).call(this), N(this, I, rs).call(this);
  }
  get workflows() {
    return v(this, te);
  }
  get workflowStages() {
    return v(this, Cr);
  }
  set submitMessageDetail(t) {
    Xe(this, fe, structuredClone(t));
  }
  get submitMessageDetail() {
    return v(this, fe);
  }
  render() {
    return n` ${N(this, I, Sr).call(this, {
      icon: this.icon,
      label: this.label,
      description: this.description
    })}
      ${h(
      this.submitMessageDetail,
      () => n`<uui-button @click=${N(this, I, Ul)}>
            ${N(this, I, Sr).call(this, {
        icon: "icon-document",
        label: this.localize.term("formWorkflows_submitMessage"),
        description: this.localize.term(
          "formWorkflows_defaultWorkflowDescription"
        ),
        iconClass: "square"
      })}
          </uui-button>`
    )}
      <div class="workflows-${this.collectionName}">
        ${this.workflows.map(
      (t, e) => n` <div
              class="sortable-stage workflow-${this.collectionName}"
              sort-unique=${t.id}
            >
              <uui-button
                @click=${async () => await N(this, I, zl).call(this, e)}
              >
                ${N(this, I, Sr).call(this, {
        icon: t.workflowTypeIcon,
        label: t.name,
        description: t.workflowTypeDescription,
        iconClass: "square"
      })}
              </uui-button>
              ${h(
        !t.isMandatory,
        () => n` <uui-action-bar>
                    <uui-button
                      label=${this.localize.term("general_remove")}
                      @click=${() => N(this, I, Ll).call(this, e)}
                    ></uui-button>
                  </uui-action-bar>`
      )}
            </div>`
    )}
      </div>
      <uui-button @click=${N(this, I, Wl)}>
        ${N(this, I, Sr).call(this, {
      label: this.localize.term("formWorkflows_addWorkflow"),
      iconClass: "square dashed"
    })}
      </uui-button>`;
  }
};
Ae = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakMap();
te = /* @__PURE__ */ new WeakMap();
Cr = /* @__PURE__ */ new WeakMap();
fe = /* @__PURE__ */ new WeakMap();
et = /* @__PURE__ */ new WeakMap();
Pa = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
Il = function() {
  Xe(this, Pa, new Si(this, {
    ...new Ei(
      "Forms.SorterIdentifier.Workflows",
      `.workflow-${this.collectionName}`,
      `.workflows-${this.collectionName}`
    ).config,
    onChange: ({ model: t }) => {
      Xe(this, et, t);
    },
    onEnd: () => {
      Xe(this, te, [...v(this, te)].sort(
        (t, e) => v(this, et).indexOf(t.id) - v(this, et).indexOf(e.id)
      )), N(this, I, hr).call(this);
    }
  }));
};
rs = function() {
  var t;
  Xe(this, et, []);
  for (let e = 0; e < v(this, te).length; e++) {
    const r = v(this, te)[e];
    v(this, et).push(r.id);
  }
  (t = v(this, Pa)) == null || t.setModel(v(this, et));
};
Ul = async function() {
  var a, i, o;
  if (!v(this, Ae) || !v(this, at)) return;
  const t = await v(this, at).getRichTextConfiguration(), r = await v(this, Ae).open(
    this,
    Fl,
    {
      data: {
        richTextConfiguration: t
      },
      value: {
        messageOnSubmit: (a = v(this, fe)) == null ? void 0 : a.messageOnSubmit,
        messageOnSubmitIsHtml: ((i = v(this, fe)) == null ? void 0 : i.messageOnSubmitIsHtml) || !1,
        goToPageOnSubmit: (o = v(this, fe)) == null ? void 0 : o.goToPageOnSubmit
      }
    }
  ).onSubmit().catch(() => {
  });
  !r || !v(this, fe) || (v(this, fe).messageOnSubmit = r.messageOnSubmit, v(this, fe).messageOnSubmitIsHtml = r.messageOnSubmitIsHtml, v(this, fe).goToPageOnSubmit = r.goToPageOnSubmit, N(this, I, hr).call(this));
};
zl = async function(t) {
  if (!v(this, Ae)) return;
  const e = v(this, te)[t], a = await (await N(this, I, is).call(this, e, !1)).onSubmit().catch(() => {
  });
  a && (N(this, I, as).call(this, v(this, te)[t], a), v(this, Cr)[v(this, te)[t].id] = a.collectionName, N(this, I, hr).call(this));
};
Wl = async function() {
  var o;
  if (!v(this, Ae)) return;
  if (!v(this, at)) throw new Error("No workspace context");
  const e = await v(this, Ae).open(
    this,
    Vh
  ).onSubmit().catch(() => {
  });
  if (!(e != null && e.selectedValue)) return;
  const r = it.getWorkflowScaffold();
  r.form = (o = v(this, at)) == null ? void 0 : o.getUnique(), r.sortOrder = v(this, te).length, r.workflowTypeId = e.selectedValue.id, r.workflowTypeName = e.selectedValue.name, r.workflowTypeIcon = e.selectedValue.icon, r.workflowTypeDescription = e.selectedValue.description, r.workflowTypeGroup = e.selectedValue.group;
  const i = await (await N(this, I, is).call(this, r, !0)).onSubmit().catch(() => {
  });
  i && (N(this, I, as).call(this, r, i), v(this, te).push(r), N(this, I, rs).call(this), N(this, I, hr).call(this));
};
is = async function(t, e) {
  const r = await v(this, at).loadWorkflowType(
    t.workflowTypeId
  );
  if (!r)
    throw new Error(
      "Workflow type with id " + t.workflowTypeId + " could not be found."
    );
  const a = t.settings;
  if (e)
    for (let i = 0; i < r.settings.length; i++) {
      const o = r.settings[i];
      o.defaultValue && (a[o.alias] = o.defaultValue);
    }
  return v(this, Ae).open(this, $l, {
    data: {
      fields: this.allFields,
      workflowType: r,
      isNew: e
    },
    value: {
      name: t.name,
      active: t.active,
      includeSensitiveData: t.includeSensitiveData === Qe.TRUE,
      collectionName: this.collectionName,
      settings: a,
      condition: t.condition
    }
  });
};
as = function(t, e) {
  t.name = e.name, t.active = e.active, t.includeSensitiveData = e.includeSensitiveData ? Qe.TRUE : Qe.FALSE, t.settings = e.settings, t.condition = e.condition;
};
Ll = function(t) {
  v(this, te).splice(t, 1), N(this, I, hr).call(this);
};
hr = function() {
  this.requestUpdate(), this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  );
};
Sr = function(t) {
  return n`<div class="stage-block">
      <uui-icon
        .name=${t.icon ?? null}
        class="stage-icon ${t.iconClass}"
      ></uui-icon>
      <div>
        ${h(t.label, () => n`<strong>${t.label}</strong>`)}
        ${h(
    t.description,
    () => n`<small> ${t.description} </small>`
  )}
      </div>
    </div>`;
};
_e.styles = [
  O`
      :host {
        display: block;
        position: relative;
        z-index: 1;
      }

      :host:after {
        content: "";
        display: block;
        width: 1px;
        background-color: var(--uui-color-border-standalone);
        position: absolute;
        top: var(--uui-size-5);
        bottom: var(--uui-size-5);
        left: 27px;
        z-index: -1;
      }

      uui-button {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-bottom-factor: 1;
        --uui-button-padding-top-factor: 1;
        text-align: left;
      }

      /* uui-button internally multiplies the above factors by --uui-size 2,
        but since we're setting the factor to 1, we don't need the calc()
      */
      :host > .stage-block {
        padding: var(--uui-size-2);
      }

      .stage-block {
        display: flex;
        column-gap: var(--uui-size-3);
        align-items: center;
        --icon-radius: 50%;
        --border-style: solid;
      }

      .stage-block > div {
        display: flex;
        flex-direction: column;
        line-height: 1.4;
      }

      .stage-icon {
        position: relative;
        background: white;
        padding: var(--uui-size-3);
        border-radius: var(--icon-radius);
        border-width: 1px;
        border-style: var(--border-style);
        border-color: var(--uui-color-border-standalone);
        width: 22px;
        height: 22px;
      }

      .square {
        --icon-radius: var(--uui-border-radius);
      }

      .dashed {
        --border-style: dashed;
      }

      .sortable-stage {
        display: flex;
        align-items: center;
        cursor: move;
      }

      .sortable-stage > uui-button {
        margin-right: auto;
      }

      uui-action-bar {
        opacity: 0;
        transition: opacity 120ms;
        margin-left: auto;
      }

      .sortable-stage:hover uui-action-bar {
        opacity: 1;
      }
    `
];
Ie([
  m()
], _e.prototype, "collectionName", 2);
Ie([
  m({ type: Array })
], _e.prototype, "workflows", 1);
Ie([
  m()
], _e.prototype, "workflowStages", 1);
Ie([
  m({ type: Object })
], _e.prototype, "submitMessageDetail", 1);
Ie([
  m()
], _e.prototype, "label", 2);
Ie([
  m()
], _e.prototype, "description", 2);
Ie([
  m()
], _e.prototype, "icon", 2);
Ie([
  m({ type: Array })
], _e.prototype, "allFields", 2);
_e = Ie([
  p(yf)
], _e);
var gf = Object.getOwnPropertyDescriptor, Nl = (t) => {
  throw TypeError(t);
}, vf = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? gf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, _f = (t, e, r) => e.has(t) || Nl("Cannot " + r), Sf = (t, e, r) => e.has(t) ? Nl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ri = (t, e, r) => (_f(t, e, "access private method"), r), zt, Ii, Vl;
const bf = "form-configure-workflow-modal";
let xr = class extends we {
  constructor() {
    super(...arguments), Sf(this, zt);
  }
  render() {
    var t, e, r, a, i;
    return n`<umb-body-layout
      headline=${this.localize.term("formWorkflows_configureWorkflow")}
    >
      <uui-box>
        <form-configure-workflow-stage
          collectionName="onSubmit"
          .workflows=${((t = this.value.workflows) == null ? void 0 : t.onSubmit) ?? []}
          .submitMessageDetail=${this.value.submitMessageDetail}
          .allFields=${((e = this.data) == null ? void 0 : e.fields) ?? []}
          .label=${this.localize.term("formWorkflows_onSubmit")}
          .description=${this.localize.term(
      "formWorkflows_onSubmitDescription"
    )}
          icon="icon-check"
          @change=${(o) => Ri(this, zt, Ii).call(this, o, "onSubmit")}
        >
        </form-configure-workflow-stage>
        <form-configure-workflow-stage
          collectionName="onApprove"
          .workflows=${((r = this.value.workflows) == null ? void 0 : r.onApprove) ?? []}
          .allFields=${((a = this.data) == null ? void 0 : a.fields) ?? []}
          .label=${this.localize.term("formWorkflows_onApprove")}
          .description=${this.localize.term(
      "formWorkflows_onApproveDescription"
    )}
          icon="icon-thumb-up"
          @change=${(o) => Ri(this, zt, Ii).call(this, o, "onApprove")}
        >
        </form-configure-workflow-stage>

        ${h(
      (i = this.data) == null ? void 0 : i.manualApproval,
      () => {
        var o, s;
        return n`<form-configure-workflow-stage
              collectionName="onReject"
              .workflows=${((o = this.value.workflows) == null ? void 0 : o.onReject) ?? []}
              .allFields=${((s = this.data) == null ? void 0 : s.fields) ?? []}
              .label=${this.localize.term("formWorkflows_onReject")}
              .description=${this.localize.term(
          "formWorkflows_onRejectDescription"
        )}
              icon="icon-delete"
              @change=${(l) => Ri(this, zt, Ii).call(this, l, "onReject")}
            >
            </form-configure-workflow-stage>`;
      }
    )}
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click="${this._rejectModal}"
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${this._submitModal}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
zt = /* @__PURE__ */ new WeakSet();
Ii = function(t, e) {
  var l, g;
  const r = t.target, a = r.submitMessageDetail;
  a && ((l = this.modalContext) == null || l.updateValue({ submitMessageDetail: a }));
  const i = r.workflows, o = structuredClone(this.value.workflows);
  o && (o[e] = i, (g = this.modalContext) == null || g.updateValue({ workflows: o }));
  const s = r.workflowStages;
  for (let S = 0; S < i.length; S++) {
    const D = i[S], P = s[D.id];
    P && P !== e && Ri(this, zt, Vl).call(this, S, e, s[D.id]);
  }
};
Vl = function(t, e, r) {
  var l;
  if (!this.value.workflows) return;
  const a = structuredClone(this.value.workflows), o = a[e].splice(t, 1)[0];
  a[r].push(o), (l = this.modalContext) == null || l.updateValue({ workflows: a });
};
xr.styles = O`
    form-configure-workflow-stage + form-configure-workflow-stage {
      margin-top: var(--uui-size-5);
    }
  `;
xr = vf([
  p(bf)
], xr);
const wf = xr, Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsConfigureWorkflowModalElement() {
    return xr;
  },
  default: wf
}, Symbol.toStringTag, { value: "Module" })), Pt = "00000000-0000-0000-0000-000000000000", bC = {
  year: "numeric",
  month: "long",
  day: "numeric"
}, Ef = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
var $f = Object.getOwnPropertyDescriptor, ql = (t) => {
  throw TypeError(t);
}, Cf = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? $f(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, os = (t, e, r) => e.has(t) || ql("Cannot " + r), Qa = (t, e, r) => (os(t, e, "read from private field"), e.get(t)), mn = (t, e, r) => e.has(t) ? ql("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Tf = (t, e, r, a) => (os(t, e, "write to private field"), e.set(t, r), r), Pe = (t, e, r) => (os(t, e, "access private method"), r), Nt, ye, jl, Bl, Yl, Gl, xa, Hl, Kl;
const Of = "form-create-from-datasource-modal";
let ta = class extends we {
  constructor() {
    super(), mn(this, ye), mn(this, Nt), this.consumeContext(bi, (t) => {
      Tf(this, Nt, t);
    });
  }
  render() {
    var t, e, r, a;
    return n`<umb-body-layout headline=${this.localize.term("formDataSources_createFormFromDataSource")}>
      <uui-box>
        <umb-property-layout
          alias="name"
          label=${this.localize.term("formDataSources_formName")}
        >
          <uui-input
            slot="editor"
            id="name"
            .value=${(e = (t = this.value) == null ? void 0 : t.wizard) == null ? void 0 : e.formName}
            @change=${Pe(this, ye, jl)}
            label="name"
          >
        </umb-property-layout>
        <umb-property-layout
          alias="mapping"
          label=${this.localize.term("formDataSources_selectFields")}
          description=${this.localize.term(
      "formDataSources_selectFieldsDescription"
    )}
        >
          <table
            slot="editor"
            >
            <thead>
              <tr>
                <th>${this.localize.term("general_name")}</th>
                <th>Include</th>
                <th>Field Type</th>
                <th>${this.localize.term("formDataSources_defaultValue")}</th>
              </tr>
            </thead>
            <tbody>
              ${Bm(
      (a = (r = this.value) == null ? void 0 : r.wizard) == null ? void 0 : a.mappings,
      (i, o) => {
        var s;
        return n`
                  <tr>
                    <td>${i.name}</td>
                    <td>
                      <uui-toggle
                        ?checked=${i.include}
                        @change=${(l) => Pe(this, ye, Bl).call(this, l, o)}
                      ></uui-toggle>
                    </td>
                    <td>
                      <uui-select
                        .disabled=${!i.include}
                        @change=${(l) => Pe(this, ye, Yl).call(this, l, o)}
                        .options=${((s = this.data) == null ? void 0 : s.fieldTypes.map((l) => ({
          name: l.name,
          value: l.id,
          selected: l.id === i.fieldTypeId
        }))) ?? []}
                      >
                      </uui-select>
                    </td>
                    <td>
                      <uui-input
                        id="defaultValue"
                        .value=${i.defaultValue}
                        @change=${(l) => Pe(this, ye, Gl).call(this, l, o)}
                        label=${this.localize.term(
          "formDataSources_defaultValue"
        )}
                      >
                    </td>
                  </tr>
                `;
      }
    )}
            </tbody>
          </table>
        </umb-property-layout>
      </uui-box>
      <div slot="actions">
        <uui-button
          .label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${Pe(this, ye, Hl)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
Nt = /* @__PURE__ */ new WeakMap();
ye = /* @__PURE__ */ new WeakSet();
jl = function(t) {
  var a, i, o;
  if (!((a = this.value) != null && a.wizard)) return;
  const e = t.target.value.toString(), r = structuredClone((i = this.value) == null ? void 0 : i.wizard);
  r.formName = e, (o = this.modalContext) == null || o.updateValue({ wizard: r });
};
Bl = function(t, e) {
  Pe(this, ye, xa).call(this, e, "include", t.target.checked);
};
Yl = function(t, e) {
  Pe(this, ye, xa).call(this, e, "fieldTypeId", t.target.value.toString());
};
Gl = function(t, e) {
  Pe(this, ye, xa).call(this, e, "defaultValue", t.target.value.toString());
};
xa = function(t, e, r) {
  var i, o, s;
  if (!((i = this.value) != null && i.wizard)) return;
  const a = structuredClone((o = this.value) == null ? void 0 : o.wizard);
  a.mappings[t][e] = r, (s = this.modalContext) == null || s.updateValue({ wizard: a });
};
Hl = async function() {
  var t, e, r, a, i;
  if ((t = this.value) != null && t.wizard)
    if (Pe(this, ye, Kl).call(this)) {
      const { error: o } = await d(
        this,
        Ke.postDatasourceWizardCreateForm({
          body: this.value.wizard
        }),
        {
          disableNotifications: !0
        }
      );
      if (o) {
        const s = { data: { message: "Could not create form." } };
        (a = Qa(this, Nt)) == null || a.peek("danger", s);
      } else {
        const s = {
          data: {
            message: "Form '" + this.value.wizard.formName + "' created."
          }
        };
        (e = Qa(this, Nt)) == null || e.peek("positive", s), (r = this.modalContext) == null || r.submit();
      }
    } else {
      const o = {
        data: {
          message: "Could not create form. Please select a type for each included field."
        }
      };
      (i = Qa(this, Nt)) == null || i.peek("danger", o);
    }
};
Kl = function() {
  var t;
  if (!((t = this.value) != null && t.wizard)) return !1;
  for (let e = 0; e < this.value.wizard.mappings.length; e++) {
    const r = this.value.wizard.mappings[e];
    if (r.include && r.fieldTypeId === Pt)
      return !1;
  }
  return !0;
};
ta = Cf([
  p(Of)
], ta);
const Pf = ta, xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFormCreateFromDataSourceModalElement() {
    return ta;
  },
  default: Pf
}, Symbol.toStringTag, { value: "Module" }));
var Mf = Object.defineProperty, Df = Object.getOwnPropertyDescriptor, Xl = (t) => {
  throw TypeError(t);
}, Ma = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Df(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Mf(e, r, i), i;
}, ss = (t, e, r) => e.has(t) || Xl("Cannot " + r), G = (t, e, r) => (ss(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Za = (t, e, r) => e.has(t) ? Xl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), pn = (t, e, r, a) => (ss(t, e, "write to private field"), e.set(t, r), r), X = (t, e, r) => (ss(t, e, "access private method"), r), Wt, H, V, Jl, Ql, Zl, ec, tc, rc, yo, ic, ct, ac, oc;
const Af = "form-edit-conditions";
var $i = /* @__PURE__ */ ((t) => (t[t.FIELD = 0] = "FIELD", t[t.FIELDSET = 1] = "FIELDSET", t[t.PAGE = 2] = "PAGE", t[t.WORKFLOW = 3] = "WORKFLOW", t))($i || {});
let ir = class extends $e {
  constructor() {
    super(), Za(this, V), Za(this, Wt), Za(this, H, {
      id: "",
      enabled: !1,
      actionType: Ho.SHOW,
      logicType: Ko.ALL,
      rules: []
    }), this.fields = [], this.appliedTo = 0, this.consumeContext(Re, (t) => {
      pn(this, Wt, t);
    });
  }
  set value(t) {
    pn(this, H, t ? structuredClone(t) : G(this, H));
    for (let e = 0; e < G(this, H).rules.length; e++)
      G(this, H).rules[e] = structuredClone(G(this, H).rules[e]);
  }
  get value() {
    return G(this, H);
  }
  render() {
    var t, e;
    return n` <div class="flex center">
        <uui-select
          name="actionType"
          @change=${X(this, V, Ql)}
          .options=${((t = G(this, Wt)) == null ? void 0 : t.getConditionActionTypes.map(
      (r) => ({
        name: this.localize.term(
          `formConditions_${this.appliedTo === 3 ? "workflow" : ""}actionType${r.value}`
        ),
        value: r.value,
        selected: r.value === G(this, H).actionType
      })
    )) ?? []}
        ></uui-select>
        <span
          >${this.localize.term(
      "formConditions_" + X(this, V, ac).call(this)
    )}</span
        >
        <uui-select
          name="logicType"
          @change=${X(this, V, Zl)}
          .options=${((e = G(this, Wt)) == null ? void 0 : e.getConditionLogicTypes.map(
      (r) => ({
        name: this.localize.term("formConditions_logicType" + r.value),
        value: r.value,
        selected: r.value === G(this, H).logicType
      })
    )) ?? []}
        >
        </uui-select>
        <span
          >${this.localize.term("formConditions_ofTheFollowingMatch")}:</span
        >
      </div>

      ${G(this, H).rules.map((r, a) => X(this, V, oc).call(this, r, a))}

      <uui-button
        label=${this.localize.term("formConditions_addCondition")}
        look="secondary"
        color="default"
        @click=${X(this, V, ec)}
        >${this.localize.term("formConditions_addCondition")}</uui-button
      >`;
  }
};
Wt = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakSet();
Jl = function(t) {
  const e = this.fields.find((r) => r.id === t);
  return (e == null ? void 0 : e.preValues.map((r) => r.value)) ?? [];
};
Ql = function(t) {
  G(this, H).actionType = t.target.value, X(this, V, ct).call(this);
};
Zl = function(t) {
  G(this, H).logicType = t.target.value, X(this, V, ct).call(this);
};
ec = function() {
  G(this, H).rules.push({
    id: K.new(),
    field: Pt,
    operator: Qn.IS,
    value: ""
  }), X(this, V, ct).call(this);
};
tc = function(t, e) {
  G(this, H).rules[e].field = t.target.value.toString(), X(this, V, ct).call(this);
};
rc = function(t, e) {
  G(this, H).rules[e].operator = t.target.value, X(this, V, ct).call(this);
};
yo = function(t, e) {
  G(this, H).rules[e].value = t, X(this, V, ct).call(this);
};
ic = function(t) {
  G(this, H).rules.splice(t, 1), X(this, V, ct).call(this);
};
ct = function() {
  this.requestUpdate(), this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  );
};
ac = function() {
  switch (this.appliedTo) {
    case 1:
      return "thisFieldSetIf";
    case 2:
      return "buttonsForThisPageIf";
    case 3:
      return "thisWorkflowIf";
    default:
      return "thisFieldIf";
  }
};
oc = function(t, e) {
  var a;
  const r = X(this, V, Jl).call(this, t.field);
  return n`<div class="flex center condition-rule">
      <uui-select
        name="field"
        .placeholder=${this.localize.term("formConditions_selectField")}
        @change=${(i) => X(this, V, tc).call(this, i, e)}
        .options=${this.fields.map((i) => ({
    name: i.caption,
    value: i.id,
    selected: i.id === t.field
  }))}
      >
      </uui-select>

      <uui-select
        name="operator"
        @change=${(i) => X(this, V, rc).call(this, i, e)}
        .options=${((a = G(this, Wt)) == null ? void 0 : a.getConditionOperators.map((i) => ({
    name: this.localize.term("formConditions_operator" + i.value),
    value: i.value,
    selected: i.value === t.operator
  }))) ?? []}
      >
      </uui-select>

      ${h(
    r.length > 0,
    () => n`<uui-select
            name="value"
            @change=${(i) => X(this, V, yo).call(this, i.target.value.toString(), e)}
            .options=${r.map((i) => ({
      name: i,
      value: i,
      selected: i === t.value
    }))}
          >
          </uui-select>`,
    () => n`<uui-input
            name="value"
            type="text"
            value=${t.value}
            @change=${(i) => X(this, V, yo).call(this, i.target.value.toString(), e)}
          ></uui-input>`
  )}

      <uui-button
        label=${this.localize.term("general_delete")}
        look="secondary"
        color="default"
        @click=${() => X(this, V, ic).call(this, e)}
      >
        <uui-icon name="delete"></uui-icon>
      </uui-button>
    </div>`;
};
ir.styles = [
  O`
      .flex {
        display: flex;
        column-gap: var(--uui-size-3);
      }
      .center {
        align-items: center;
      }

      :host > uui-button {
        margin-top: var(--uui-size-5);
      }

      .condition-rule {
        margin-top: var(--uui-size-3);
      }

      .condition-rule:first-of-type {
        margin-top: var(--uui-size-5);
      }
    `
];
Ma([
  m({ type: Object })
], ir.prototype, "value", 1);
Ma([
  m({ type: Array })
], ir.prototype, "fields", 2);
Ma([
  m({ type: $i })
], ir.prototype, "appliedTo", 2);
ir = Ma([
  p(Af)
], ir);
var kf = Object.defineProperty, Rf = Object.getOwnPropertyDescriptor, sc = (t) => {
  throw TypeError(t);
}, nc = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Rf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && kf(e, r, i), i;
}, If = (t, e, r) => e.has(t) || sc("Cannot " + r), Uf = (t, e, r) => e.has(t) ? sc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), hn = (t, e, r) => (If(t, e, "access private method"), r), Ui, lc, cc;
const zf = "form-edit-page-modal";
let Mr = class extends we {
  constructor() {
    super(...arguments), Uf(this, Ui), this._conditionEnabled = !1;
  }
  connectedCallback() {
    var t, e;
    super.connectedCallback(), this._conditionEnabled = ((e = (t = this.value) == null ? void 0 : t.buttonCondition) == null ? void 0 : e.enabled) ?? !1;
  }
  render() {
    return n`<umb-body-layout
      headline=${this.localize.term("formEdit_editPage")}
    >
      <div id="main">
        <uui-box>
          <umb-property-layout
            alias="conditions"
            .label=${this.localize.term("formConditions_title")}
            .description=${this.localize.term(
      "formConditions_pageConditionsDescription"
    )}
          >
            <div slot="editor">
              <uui-toggle
                ?checked=${this._conditionEnabled}
                .label=${this._conditionEnabled ? "On" : "Off"}
                @change=${hn(this, Ui, lc)}
              ></uui-toggle>
              ${h(
      this._conditionEnabled,
      () => {
        var t;
        return n`<form-edit-conditions
                    .value=${this.value.buttonCondition}
                    .fields=${((t = this.data) == null ? void 0 : t.fields) ?? []}
                    .appliedTo=${$i.PAGE}
                    @change=${hn(this, Ui, cc)}
                  ></form-edit-conditions>`;
      }
    )}
            </div>
          </umb-property-layout>
        </uui-box>
      </div>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${this._submitModal}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
Ui = /* @__PURE__ */ new WeakSet();
lc = function(t) {
  var r;
  this._conditionEnabled = t.target.checked;
  const e = {
    ...this.value.buttonCondition,
    enabled: this._conditionEnabled
  };
  (r = this.modalContext) == null || r.updateValue({ buttonCondition: e });
};
cc = function(t) {
  var r;
  const e = t.target.value ?? void 0;
  (r = this.modalContext) == null || r.updateValue({ buttonCondition: e });
};
nc([
  b()
], Mr.prototype, "_conditionEnabled", 2);
Mr = nc([
  p(zf)
], Mr);
const Wf = Mr, Lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsEditPageModalElement() {
    return Mr;
  },
  default: Wf
}, Symbol.toStringTag, { value: "Module" }));
var Nf = Object.defineProperty, Vf = Object.getOwnPropertyDescriptor, uc = (t) => {
  throw TypeError(t);
}, ns = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Vf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Nf(e, r, i), i;
}, ls = (t, e, r) => e.has(t) || uc("Cannot " + r), dc = (t, e, r) => (ls(t, e, "read from private field"), r ? r.call(t) : e.get(t)), fn = (t, e, r) => e.has(t) ? uc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), qf = (t, e, r, a) => (ls(t, e, "write to private field"), e.set(t, r), r), We = (t, e, r) => (ls(t, e, "access private method"), r), ra, he, mc, pc, hc, cs, fc, yc, gc, vc;
const jf = "form-edit-fieldset-modal";
let xt = class extends we {
  constructor() {
    super(), fn(this, he), this._conditionEnabled = !1, this._containers = [], fn(this, ra, 12), this.consumeContext(Fi, (t) => {
      t && this.observe(t.config, (e) => {
        e && qf(this, ra, e == null ? void 0 : e.maxNumberOfColumnsInFormGroup);
      });
    });
  }
  connectedCallback() {
    var t, e, r;
    super.connectedCallback(), this._conditionEnabled = ((e = (t = this.value) == null ? void 0 : t.condition) == null ? void 0 : e.enabled) ?? !1, this._containers = structuredClone((r = this.value) == null ? void 0 : r.containers) ?? [];
  }
  render() {
    var t;
    return n`<umb-body-layout
      headline=${this.localize.term("formEdit_editGroup")}
    >
      <div id="main">
        <uui-box>
          <umb-property-layout alias="page" label="Page">
            <div slot="editor">
              <uui-select
                label="Page"
                @change=${We(this, he, mc)}
                .options=${((t = this.data) == null ? void 0 : t.pages.map((e, r) => {
      var a;
      return {
        name: e.caption ?? `Page ${r + 1}`,
        value: e.id,
        selected: r === ((a = this.value) == null ? void 0 : a.pageIndex)
      };
    })) ?? []}
              >
              </uui-select>
            </div>
          </umb-property-layout>

          <umb-property-layout
            alias="columns"
            orientation="vertical"
            .label=${this.localize.term("fieldSetColumns_title")}
            .description=${this.localize.term("fieldSetColumns_setNumber")}
          >
            <div slot="editor">
              <strong
                >${this.localize.term(
      "fieldSetColumns_columnNumberDescription",
      this._containers.length
    )}</strong
              >
              <div id="columnsTemplate">
                ${this._containers.map(
      (e, r) => h(
        this._containers.length === 1,
        () => n`<div></div>`,
        () => n`<uui-button
                        id="container-${r}"
                        label="Remove column"
                        color="default"
                        look="primary"
                        @click=${() => We(this, he, hc).call(this, r)}
                      ></uui-button>`
      )
    )}
              </div>
              <uui-button
                id="addColumn"
                label="Add column"
                look="primary"
                color="default"
                ?disabled=${dc(this, he, vc)}
                @click=${We(this, he, pc)}
              ></uui-button>
            </div>
          </umb-property-layout>
          <umb-property-layout
            alias="conditions"
            .label=${this.localize.term("formConditions_title")}
          >
            <div slot="editor">
              <uui-toggle
                ?checked=${this._conditionEnabled}
                .label=${this._conditionEnabled ? "On" : "Off"}
                @change=${We(this, he, fc)}
              ></uui-toggle>
              ${h(
      this._conditionEnabled,
      () => {
        var e;
        return n`<form-edit-conditions
                    .value=${this.value.condition}
                    .fields=${((e = this.data) == null ? void 0 : e.fields) ?? []}
                    .appliedTo=${$i.FIELDSET}
                    @change=${We(this, he, yc)}
                  ></form-edit-conditions>`;
      }
    )}
            </div>
          </umb-property-layout>
        </uui-box>
      </div>
      <div slot="actions">
        <uui-button
          .label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${We(this, he, gc)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
ra = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakSet();
mc = function(t) {
  var r;
  const e = t.target._input.selectedIndex - 1;
  (r = this.modalContext) == null || r.updateValue({ pageIndex: e });
};
pc = function() {
  this._containers.push(it.getContainerScaffold()), We(this, he, cs).call(this);
};
hc = function(t) {
  this._containers.splice(t, 1), We(this, he, cs).call(this);
};
cs = function() {
  const t = 12 / this._containers.length;
  this._containers.forEach((e) => e.width = t), this.requestUpdate();
};
fc = function(t) {
  var r;
  this._conditionEnabled = t.target.checked;
  const e = structuredClone(this.value.condition);
  e.enabled = this._conditionEnabled, (r = this.modalContext) == null || r.updateValue({ condition: e });
};
yc = function(t) {
  var r;
  const e = t.target.value ?? void 0;
  (r = this.modalContext) == null || r.updateValue({ condition: e });
};
gc = function() {
  var t, e;
  (t = this.modalContext) == null || t.updateValue({ containers: this._containers }), (e = this.modalContext) == null || e.submit();
};
vc = function() {
  return this._containers.length === dc(this, ra);
};
xt.styles = [
  O`
      #columnsTemplate {
        width: 100%;
        height: var(--uui-size-24);
        box-sizing: border-box;
        padding: var(--uui-size-1);
        border: 2px solid var(--uui-color-border);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-bottom: var(--uui-size-4);
        gap: var(--uui-size-1);
        border-radius: var(--uui-border-radius);
      }

      #columnsTemplate > * {
        background: var(--uui-color-interactive);
        flex: 1;
      }
    `
];
ns([
  b()
], xt.prototype, "_conditionEnabled", 2);
ns([
  b()
], xt.prototype, "_containers", 2);
xt = ns([
  p(jf)
], xt);
const Bf = xt, Yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsEditFieldsetModalElement() {
    return xt;
  },
  default: Bf
}, Symbol.toStringTag, { value: "Module" }));
var Kt, Xt, St, ai, oi, J, go, zi, _c, Wi, Sc;
class Gf {
  constructor(e, r, a) {
    f(this, J);
    f(this, Kt);
    f(this, Xt);
    f(this, St);
    f(this, ai);
    f(this, oi, {});
    y(this, Kt, e), y(this, Xt, new Qm(c(this, Kt))), y(this, St, r), y(this, ai, a);
  }
  async loadSettingValueConverterApis() {
    const e = Ln.getAllExtensions().filter((r) => r.type === "formsSettingValueConverter").map((r) => r);
    for (let r = 0; r < e.length; r++) {
      const a = e[r], i = await Zm(a.api);
      if (i) {
        const o = new i(c(this, Kt));
        o && (c(this, oi)[a.propertyEditorUiAlias] = o);
      }
    }
  }
  setProviderType(e) {
    y(this, St, e);
  }
  getLocalizedSettingDetail(e, r, a) {
    const i = c(this, ai) + "_" + c(this, St).alias + e.alias + r, o = c(this, Xt).term(i);
    return o && o.length > 0 && o !== i ? o : a;
  }
  async getSettingValues(e) {
    const r = [];
    for (const [a, i] of Object.entries(e)) {
      const o = await w(this, J, _c).call(this, a, i);
      r.push({ alias: a, value: o });
    }
    return r;
  }
  async getSettingsConfig(e, r) {
    const a = [];
    for (const i of e)
      await w(this, J, go).call(this, a, i.alias, e);
    for (const i of r)
      a.find((o) => o.alias === i.alias) || await w(this, J, go).call(this, a, i.alias, []);
    return a;
  }
  async getSettingPropertyConfig(e, r) {
    const a = w(this, J, Wi).call(this, e);
    if (!a)
      return [];
    const i = w(this, J, zi).call(this, a.view);
    return i ? await i.getSettingPropertyConfig(
      a,
      e,
      r
    ) : [];
  }
  async getUpdatedSettingsForPersistence(e, r) {
    if (r) {
      const i = Object.fromEntries(
        r.map((o) => [o.alias, o.defaultValue])
      );
      e = e.filter((o) => o.value !== i[o.alias]);
    }
    const a = {};
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      a[o.alias] = await w(this, J, Sc).call(this, o);
    }
    return a;
  }
  createValidationErrorNotification(e, r) {
    var o;
    const a = Vm.isUmbApiError(r) ? ((o = r.problemDetails.detail) == null ? void 0 : o.split("|").join(", ")) ?? r.message : r.message;
    return {
      data: {
        headline: c(this, Xt).term(e),
        message: a
      }
    };
  }
  getPropertyConfigForSetting(e, r) {
    var a;
    return ((a = e.find((i) => i.alias === r.alias)) == null ? void 0 : a.value) ?? [];
  }
  getPropertyAppearanceForSetting(e) {
    return e === "Umb.PropertyEditorUi.Tiptap" ? { labelOnTop: !0 } : void 0;
  }
}
Kt = new WeakMap(), Xt = new WeakMap(), St = new WeakMap(), ai = new WeakMap(), oi = new WeakMap(), J = new WeakSet(), go = async function(e, r, a) {
  e.push({
    alias: r,
    value: await this.getSettingPropertyConfig(r, a)
  });
}, zi = function(e) {
  return c(this, oi)[e];
}, _c = async function(e, r) {
  const a = w(this, J, Wi).call(this, e);
  if (!a)
    return null;
  const i = w(this, J, zi).call(this, a.view);
  return i ? await i.getSettingValueForEditor(
    a,
    e,
    r
  ) : r;
}, Wi = function(e) {
  return c(this, St).settings.find((r) => r.alias === e);
}, Sc = async function(e) {
  const r = w(this, J, Wi).call(this, e.alias);
  if (!r)
    return "";
  const a = w(this, J, zi).call(this, r.view);
  return a ? await a.getSettingValueForPersistence(
    r,
    e
  ) : e.value;
};
var Hf = Object.defineProperty, Kf = Object.getOwnPropertyDescriptor, bc = (t) => {
  throw TypeError(t);
}, ut = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Kf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Hf(e, r, i), i;
}, us = (t, e, r) => e.has(t) || bc("Cannot " + r), ue = (t, e, r) => (us(t, e, "read from private field"), r ? r.call(t) : e.get(t)), eo = (t, e, r) => e.has(t) ? bc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), yn = (t, e, r, a) => (us(t, e, "write to private field"), e.set(t, r), r), T = (t, e, r) => (us(t, e, "access private method"), r), ae, Li, E, wc, Fc, Ec, $c, Cc, Tc, Oc, Pc, xc, Mc, Dc, Ac, kc, Rc, Ic, Uc, zc, Wc, Lc, Nc, ds, ms, Vc, qc, jc, Bc;
const Xf = "form-edit-field-modal";
let pe = class extends we {
  constructor() {
    super(...arguments), eo(this, E), eo(this, ae), this._aliasLocked = !0, this._settingValues = [], this._settingsConfig = [], this._settingsConfigLoaded = !1, this._showRegex = !1, this._showRegexReadonly = !1, this._conditionEnabled = !1, eo(this, Li);
  }
  async connectedCallback() {
    var e, r;
    super.connectedCallback();
    const t = await this.getContext(Vn);
    if (!t) throw new Error("Current user context not found");
    yn(this, Li, await Bo(t.currentUser)), yn(this, ae, new Gf(
      this,
      this.value.fieldType,
      "formProviderFieldTypes"
    )), await ue(this, ae).loadSettingValueConverterApis(), await T(this, E, wc).call(this), this._settingsConfig = await ue(this, ae).getSettingsConfig(
      this._settingValues,
      this.value.fieldType.settings
    ), this._settingsConfigLoaded = !0, this._conditionEnabled = ((r = (e = this.value) == null ? void 0 : e.condition) == null ? void 0 : r.enabled) ?? !1, T(this, E, ds).call(this);
  }
  render() {
    var t, e, r, a, i, o, s, l, g, S, D, P, z, Z;
    return n`<umb-body-layout
      headline=${this.localize.term("formEdit_editField")}
    >
      <div id="main">
        <uui-box>
          <uui-input
            id="caption"
            .value=${(t = this.value) == null ? void 0 : t.caption}
            @change=${T(this, E, Fc)}
            label="caption"
          >
            <uui-input
              name="alias"
              slot="append"
              label="alias"
              .value=${(e = this.value) == null ? void 0 : e.alias}
              @change=${T(this, E, $c)}
              placeholder="Enter alias..."
              ?disabled=${this._aliasLocked}
            >
              <!-- TODO: validation for bad characters -->
              <div
                @click=${T(this, E, Ec)}
                @keydown=${() => ""}
                id="alias-lock"
                slot="prepend"
              >
                <uui-icon
                  name=${this._aliasLocked ? "icon-lock" : "icon-unlocked"}
                ></uui-icon>
              </div> </uui-input
          ></uui-input>

          <umb-ref-property-editor-ui
            standalone
            .name=${(r = this.value) == null ? void 0 : r.fieldType.name}
            .alias=${(a = this.value) == null ? void 0 : a.fieldType.alias}
            .propertyEditorSchemaAlias=${(i = this.value) == null ? void 0 : i.fieldType.description}
          >
            <umb-icon name=${(o = this.value) == null ? void 0 : o.fieldType.icon} slot="icon"></umb-icon>
            <uui-action-bar slot="actions">
              <uui-button
                label="Change"
                @click=${T(this, E, Tc)}
              ></uui-button>
            </uui-action-bar>
          </umb-ref-property-editor-ui>

          <umb-property-layout
            alias="tooltip"
            label=${this.localize.term("formEdit_helpText")}
          >
            <uui-textarea
              slot="editor"
              name="tooltip"
              .value=${(s = this.value) == null ? void 0 : s.tooltip}
              @change=${T(this, E, Cc)}
              label="tooltip"
            ></uui-textarea>
          </umb-property-layout>

          ${h(
      this.data && !this.data.isNew,
      () => n`<umb-property-layout alias="group" label="Group">
                <uui-select
                  label="Group"
                  slot="editor"
                  @change=${T(this, E, Pc)}
                  .options=${T(this, E, Oc).call(this).map((_) => ({
        name: _.name,
        value: _.id,
        selected: _.selected
      })) ?? []}
                >
                </uui-select>
              </umb-property-layout>`
    )}

          <umb-property-layout
            alias="fieldSettings_sensitiveData"
            .label=${this.localize.term("fieldSettings_sensitiveData")}
          >
            <!--
            // Verify that the current user is allowed to view & change the property 'containsSensitiveData'.
            // We allow a user that doesn't have the permission to set the value to true or false, but if
            // they or anyone else has previously set it to true, they aren't allowed to see or edit it.
            // See: https://github.com/umbraco/Umbraco.Forms.Issues/issues/1233
            -->
            ${(l = ue(this, Li)) != null && l.hasAccessToSensitiveData || ((g = this.value) == null ? void 0 : g.containsSensitiveData) === !1 ? n` <uui-toggle
                  slot="editor"
                  ?checked=${(S = this.value) == null ? void 0 : S.containsSensitiveData}
                  .label=${this.localize.term(
      "fieldSettings_sensitiveDataLabel"
    )}
                  @change=${T(this, E, Dc)}
                ></uui-toggle>` : n` <div slot="editor">
                  ${this.localize.term("fieldSettings_sensitiveDataLabel")}
                </div>`}
          </umb-property-layout>

          ${h(
      (D = this.value) == null ? void 0 : D.fieldType.supportsUploadTypes,
      () => {
        var _, j;
        return n`<umb-property-layout
                  alias="allowedUploadTypes"
                  .label=${this.localize.term(
          "fieldSettings_allowedFileUploadTypes"
        )}
                >
                  <form-edit-allowed-file-upload-types
                    slot="editor"
                    .value=${this.value.allowedUploadTypes ?? []}
                    @change=${T(this, E, Mc)}
                  ></form-edit-allowed-file-upload-types>
                </umb-property-layout>
                <umb-property-layout
                  alias="allowMultipleFileUploads"
                  .label=${this.localize.term(
          "fieldSettings_allowMultipleFileUploads"
        )}
                >
                  <uui-toggle
                    slot="editor"
                    ?checked=${(_ = this.value) == null ? void 0 : _.allowMultipleFileUploads}
                    label=${(j = this.value) != null && j.allowedUploadTypes ? "Multiple files" : "Single file only"}
                    @change=${T(this, E, Ac)}
                  ></uui-toggle>
                </umb-property-layout>`;
      }
    )}
          ${h(
      (P = this.value) == null ? void 0 : P.fieldType.supportsPrevalues,
      () => {
        var _, j, A, x;
        return n`<umb-property-layout
                alias="prevalues"
                .label=${this.localize.term("fieldSettings_prevalues")}
                .description=${this.localize.term(
          (((j = (_ = this.data) == null ? void 0 : _.prevalueSources) == null ? void 0 : j.length) ?? 0) > 0 ? "fieldSettings_prevaluesProvideWithSources" : "fieldSettings_prevaluesProvide"
        )}
              >
                <div slot="editor">
                  ${h(
          !this.value.prevalueSourceId || this.value.prevalueSourceId === Pt,
          () => n`<form-edit-prevalues
                        .value=${this.value.prevalues}
                        @change=${T(this, E, kc)}
                      ></form-edit-prevalues>`
        )}
                  ${h(
          (((x = (A = this.data) == null ? void 0 : A.prevalueSources) == null ? void 0 : x.length) ?? 0) > 0,
          () => n`<div id="prevalueSource">
                        <label for="prevalueSource"
                          >${this.localize.term(
            "fieldSettings_prevaluesSource"
          )}</label
                        >
                        <uui-select
                          label="Prevalue Source"
                          name="prevalueSource"
                          @change=${T(this, E, Ic)}
                          .options=${T(this, E, Rc).call(this)}
                        >
                        </uui-select>
                      </div>`
        )}
                </div>
              </umb-property-layout>`;
      }
    )}
          ${h(
      ue(this, ae) && this.value && this._settingsConfigLoaded,
      () => n` <umb-property-dataset
                .value=${this._settingValues}
                @change=${T(this, E, xc)}
              >
                ${this.value.fieldType.settings.map(
        (_) => n`
                    <umb-property
                      ?inert=${_.isReadOnly}
                      .label=${ue(this, ae).getLocalizedSettingDetail(
          _,
          "Label",
          _.name
        )}
                      .description=${ue(this, ae).getLocalizedSettingDetail(
          _,
          "Description",
          _.description
        )}
                      alias=${_.alias}
                      .config=${ue(this, ae).getPropertyConfigForSetting(
          this._settingsConfig,
          _
        )}
                      .appearance=${ue(this, ae).getPropertyAppearanceForSetting(
          _.view
        )}
                      property-editor-ui-alias=${_.view}
                    >
                    </umb-property>
                  `
      )}
              </umb-property-dataset>`
    )}
          ${h(
      (z = this.value) == null ? void 0 : z.fieldType.supportsMandatory,
      () => {
        var _, j, A;
        return n`<umb-property-layout
                alias="mandatory"
                .label=${this.localize.term("fieldSettings_mandatory")}
              >
                <div slot="editor">
                  <uui-toggle
                    ?checked=${(_ = this.value) == null ? void 0 : _.mandatory}
                    .label=${(j = this.value) != null && j.mandatory ? "On" : "Off"}
                    @change=${T(this, E, Uc)}
                  ></uui-toggle>
                  ${h(
          (A = this.value) == null ? void 0 : A.mandatory,
          () => {
            var x;
            return n`<uui-input
                        id="requiredErrorMessage"
                        name="requiredErrorMessage"
                        .value=${(x = this.value) == null ? void 0 : x.requiredErrorMessage}
                        @change=${T(this, E, zc)}
                        label="Error message"
                        placeholder=${this.localize.term(
              "validation_mandatoryMessage"
            )}
                      ></uui-input>`;
          }
        )}
                </div>
              </umb-property-layout>`;
      }
    )}
          <!-- TODO => make this a component-->
          ${h(
      (Z = this.value) == null ? void 0 : Z.fieldType.supportsRegex,
      () => {
        var _, j, A;
        return n`<umb-property-layout
                alias="regex"
                .label=${this.localize.term("formSettings_validation")}
              >
                <div slot="editor">
                  <uui-select
                    name="regex"
                    @change=${T(this, E, Wc)}
                    .options=${[
          {
            name: "",
            value: "",
            selected: !this.value.regex
          },
          ...((_ = this.data) == null ? void 0 : _.validationPatterns.map((x) => ({
            name: x.labelKey.length > 0 ? this.localize.term(x.labelKey) : x.name,
            value: x.pattern,
            selected: x.pattern === this.value.regex
          }))) ?? [],
          {
            name: this.localize.term(
              "validation_enterCustomValidation"
            ),
            value: "custom",
            selected: T(this, E, Lc).call(this)
          }
        ]}
                  >
                  </uui-select>

                  ${h(
          this._showRegex,
          () => {
            var x;
            return n`
                      <textarea
                        placeholder=${this.localize.term(
              "fieldSettings_enterRegex"
            )}
                        ?disabled=${this._showRegexReadonly}
                        @change=${T(this, E, Nc)}
                      >
${(x = this.value) == null ? void 0 : x.regex}</textarea
                      >
                    `;
          }
        )}
                  ${h(
          (((A = (j = this.value) == null ? void 0 : j.regex) == null ? void 0 : A.length) ?? 0) > 0,
          () => {
            var x;
            return n`
                      <uui-input
                        id="invalidErrorMessage"
                        name="invalidErrorMessage"
                        .value=${(x = this.value) == null ? void 0 : x.invalidErrorMessage}
                        @change=${T(this, E, Vc)}
                        label="Error message"
                        placeholder=${this.localize.term(
              "validation_mandatoryMessage"
            )}
                      ></uui-input>
                    `;
          }
        )}
                </div>
              </umb-property-layout>`;
      }
    )}

          <umb-property-layout
            alias="conditions"
            .label=${this.localize.term("formConditions_title")}
          >
            <div slot="editor">
              <uui-toggle
                ?checked=${this._conditionEnabled}
                .label=${this._conditionEnabled ? "On" : "Off"}
                @change=${T(this, E, qc)}
              ></uui-toggle>
              ${h(
      this._conditionEnabled,
      () => {
        var _;
        return n`<form-edit-conditions
                    .value=${this.value.condition}
                    .fields=${((_ = this.data) == null ? void 0 : _.fields) ?? []}
                    .appliedTo=${$i.FIELD}
                    @change=${T(this, E, jc)}
                  ></form-edit-conditions>`;
      }
    )}
            </div>
          </umb-property-layout>
        </uui-box>
      </div>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${T(this, E, Bc)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
ae = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakSet();
wc = async function() {
  var e;
  const t = { ...this.value.settings };
  (e = this.value) == null || e.fieldType.settings.forEach((r) => {
    t[r.alias] || (t[r.alias] = r.defaultValue);
  }), this._settingValues = await ue(this, ae).getSettingValues(t);
};
Fc = function(t) {
  var i, o;
  const e = t.target.value.toString(), r = this.value.caption, a = this.value.alias;
  this._aliasLocked && an(r ?? "") === a && ((i = this.modalContext) == null || i.updateValue({ alias: an(e) })), (o = this.modalContext) == null || o.updateValue({ caption: e });
};
Ec = function() {
  this._aliasLocked = !this._aliasLocked;
};
$c = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ alias: e });
};
Cc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ tooltip: e });
};
Tc = async function() {
  const t = await this.getContext(q);
  if (!t) throw new Error("Modal manager not found");
  t.open(
    this,
    fl
  ).onSubmit().then(async (r) => {
    var a, i;
    r.selectedValue && ((a = this.modalContext) == null || a.updateValue({ fieldType: r.selectedValue }), (i = ue(this, ae)) == null || i.setProviderType(r.selectedValue), this.requestUpdate());
  }).catch(() => {
  });
};
Oc = function() {
  const t = [];
  if (!this.data) return t;
  for (let e = 0; e < this.data.pages.length; e++) {
    const r = this.data.pages[e];
    for (let a = 0; a < r.fieldSets.length; a++) {
      const i = r.fieldSets[a];
      for (let o = 0; o < i.containers.length; o++) {
        const s = i.containers[o], l = e + "_" + a + "_" + o;
        t.push({
          id: l,
          name: (r.caption || "Page " + (e + 1)) + " > " + (i.caption || "Group " + (a + 1)) + " > " + (s.caption || "Container " + (o + 1)),
          selected: this.value.containerIndexPath === l
        });
      }
    }
  }
  return t;
};
Pc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ containerIndexPath: e });
};
xc = async function(t) {
  const e = t.target.value;
  this._settingValues = e;
};
Mc = function(t) {
  var r;
  const e = t.target.value;
  (r = this.modalContext) == null || r.updateValue({ allowedUploadTypes: e });
};
Dc = function(t) {
  var r;
  const e = t.target.checked;
  (r = this.modalContext) == null || r.updateValue({ containsSensitiveData: e });
};
Ac = function(t) {
  var r;
  const e = t.target.checked;
  (r = this.modalContext) == null || r.updateValue({ allowMultipleFileUploads: e });
};
kc = function(t) {
  var r;
  const e = t.target.value;
  (r = this.modalContext) == null || r.updateValue({ prevalues: e });
};
Rc = function() {
  var e;
  const t = ((e = this.data) == null ? void 0 : e.prevalueSources.map((r) => ({
    name: r.name,
    value: r.id,
    selected: r.id === this.value.prevalueSourceId
  }))) ?? [];
  return t.unshift({
    name: "---" + this.localize.term("general_choose") + "---",
    value: Pt,
    selected: this.value.prevalueSourceId === Pt
  }), t;
};
Ic = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ prevalueSourceId: e });
};
Uc = function(t) {
  var r;
  const e = t.target.checked;
  (r = this.modalContext) == null || r.updateValue({ mandatory: e });
};
zc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ requiredErrorMessage: e });
};
Wc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ regex: e }), T(this, E, ds).call(this);
};
Lc = function() {
  return this.value.regex ? T(this, E, ms).call(this, this.value.regex) === void 0 : !1;
};
Nc = function(t) {
  var a;
  const r = t.target.value.trim();
  (a = this.modalContext) == null || a.updateValue({ regex: r.length > 0 ? r : null });
};
ds = function() {
  var t, e;
  if ((e = (t = this.value) == null ? void 0 : t.regex) != null && e.length) {
    const r = T(this, E, ms).call(this, this.value.regex);
    this._showRegex = !0, this._showRegexReadonly = r !== void 0;
  } else
    this._showRegex = !1, this._showRegexReadonly = !1;
};
ms = function(t) {
  var e;
  return (e = this.data) == null ? void 0 : e.validationPatterns.find((r) => r.pattern === t);
};
Vc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ invalidErrorMessage: e });
};
qc = function(t) {
  var r;
  this._conditionEnabled = t.target.checked;
  const e = structuredClone(this.value.condition);
  e.enabled = this._conditionEnabled, (r = this.modalContext) == null || r.updateValue({ condition: e });
};
jc = function(t) {
  var r;
  const e = t.target.value ?? void 0;
  (r = this.modalContext) == null || r.updateValue({ condition: e });
};
Bc = async function() {
  var a;
  const t = await ue(this, ae).getUpdatedSettingsForPersistence(
    this._settingValues,
    this.value.fieldType.settings
  ), e = {
    path: {
      id: this.value.fieldType.id
    },
    body: {
      caption: this.value.caption,
      alias: this.value.alias,
      settings: t,
      allowedUploadTypes: this.value.allowedUploadTypes
    }
  }, { error: r } = await d(
    this,
    ee.postFormFieldByIdValidateSettings(e),
    {
      disableNotifications: !0
    }
  );
  if (r) {
    const i = ue(this, ae).createValidationErrorNotification(
      "formEdit_saveFieldFailedTitle",
      r
    ), o = await this.getContext(
      bi
    );
    o == null || o.peek("danger", i);
  } else
    (a = this.modalContext) == null || a.updateValue({ settings: t }), this._submitModal();
};
pe.styles = [
  O`
      #caption {
        display: flex;
        flex: 1 1 auto;
        margin-bottom: var(--uui-size-6);
      }

      uui-toggle {
        display: block;
      }

      textarea {
        box-sizing: border-box;
        width: 100%;
      }

      textarea + *,
      uui-select + *,
      uui-toggle + * {
        display: block;
        margin-top: var(--uui-size-3);
      }

      #prevalueSource {
        margin-top: var(--uui-size-5);
      }

      [inert] {
        opacity: 0.5;
      }
    `
];
ut([
  b()
], pe.prototype, "_aliasLocked", 2);
ut([
  b()
], pe.prototype, "_settingValues", 2);
ut([
  b()
], pe.prototype, "_settingsConfig", 2);
ut([
  b()
], pe.prototype, "_settingsConfigLoaded", 2);
ut([
  b()
], pe.prototype, "_showRegex", 2);
ut([
  b()
], pe.prototype, "_showRegexReadonly", 2);
ut([
  b()
], pe.prototype, "_conditionEnabled", 2);
pe = ut([
  p(Xf)
], pe);
const Jf = pe, Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsEditFieldModalElement() {
    return pe;
  },
  default: Jf
}, Symbol.toStringTag, { value: "Module" }));
var Zf = Object.defineProperty, ey = Object.getOwnPropertyDescriptor, Yc = (t) => {
  throw TypeError(t);
}, Da = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? ey(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Zf(e, r, i), i;
}, ty = (t, e, r) => e.has(t) || Yc("Cannot " + r), ry = (t, e, r) => e.has(t) ? Yc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), De = (t, e, r) => (ty(t, e, "access private method"), r), ve, ia, Gc, Hc, Kc, Xc, Jc, Qc;
const iy = "form-edit-submit-message-modal";
let Mt = class extends we {
  constructor() {
    super(...arguments), ry(this, ve), this._richTextConfiguration = [], this._value = [];
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), this._richTextConfiguration = (t = this.data) == null ? void 0 : t.richTextConfiguration, this._value = Object.keys(this.value ?? {}).map((e) => ({
      alias: e,
      value: this.value[e]
    })), De(this, ve, Gc).call(this);
  }
  render() {
    return n`<umb-body-layout
      headline=${this.localize.term("formEdit_editSubmitMessage")}
    >
      <uui-box>
        <umb-property-dataset .value=${this._value} @change=${De(this, ve, Jc)}>
          <umb-property
            .alias=${"messageOnSubmitIsHtml"}
            .label=${this.localize.term("formWorkflows_messageOnSubmitFormat")}
            .config=${[
      {
        alias: "showLabels",
        value: !0
      },
      {
        alias: "labelOn",
        value: this.localize.term(
          "formWorkflows_messageOnSubmitIsHtmlToggleTextOn"
        )
      },
      {
        alias: "labelOff",
        value: this.localize.term(
          "formWorkflows_messageOnSubmitIsHtmlToggleTextOff"
        )
      }
    ]}
            property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"
          ></umb-property>
          <umb-property
            .alias=${"messageOnSubmit"}
            .label=${this.localize.term("formWorkflows_messageOnSubmit")}
            .description=${this.localize.term(
      "formWorkflows_messageOnSubmitDescription"
    )}
            .appearance=${{ labelOnTop: this._isHtml ?? !1 }}
            .config=${this._richTextConfiguration}
            .propertyEditorUiAlias=${`Umb.PropertyEditorUi.${this._isHtml ? "Tiptap" : "TextArea"}`}
          >
          </umb-property>
          <umb-property 
            .alias=${"goToPageOnSubmit"}
            .label=${this.localize.term("formWorkflows_goToPage")}
            .description=${this.localize.term(
      "formWorkflows_goToPageDescription"
    )}
            .config=${[{ alias: "validationLimit", value: { max: 1 } }]}
            property-editor-ui-alias="Umb.PropertyEditorUi.DocumentPicker"></umb-property>
          </umb-property>        
        </umb-property-dataset>
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${De(this, ve, Qc)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
ve = /* @__PURE__ */ new WeakSet();
ia = function(t, e) {
  return t.find((r) => r.alias === e);
};
Gc = function() {
  if (this._isHtml = this.value.messageOnSubmitIsHtml, this._isHtml) {
    const t = De(this, ve, ia).call(this, this._value, "messageOnSubmit");
    t.value = {
      markup: t == null ? void 0 : t.value
    };
  }
};
Hc = function(t) {
  if (!t.trim().length) return "";
  let r = "<p>" + t.replace(/\r/g, "").split(/\n\n/).join("</p><p>") + "</p>";
  return r = r.replace(/\n/g, "<br/>"), { markup: r };
};
Kc = function(t) {
  return new DOMParser().parseFromString(t, "text/html").body.textContent || "";
};
Xc = function(t) {
  return this._isHtml ? typeof t == "string" ? De(this, ve, Hc).call(this, t) : t : typeof t == "object" ? De(this, ve, Kc).call(this, t == null ? void 0 : t.markup) : t;
};
Jc = function(t) {
  var a, i;
  let e = t.target.value;
  this._isHtml = !!((a = De(this, ve, ia).call(this, e, "messageOnSubmitIsHtml")) != null && a.value);
  const r = (i = De(this, ve, ia).call(this, e, "messageOnSubmit")) == null ? void 0 : i.value;
  e = Ut(
    e,
    {
      alias: "messageOnSubmit",
      value: De(this, ve, Xc).call(this, r)
    },
    (o) => o.alias === "messageOnSubmit"
  ), this._value = e;
};
Qc = function() {
  var e;
  const t = Object.fromEntries(
    this._value.map(({ alias: r, value: a }) => [r, a])
  );
  typeof t.messageOnSubmit == "object" && (t.messageOnSubmit = ((e = t.messageOnSubmit) == null ? void 0 : e.markup) ?? ""), this.updateValue(t), this._submitModal();
};
Da([
  b()
], Mt.prototype, "_richTextConfiguration", 2);
Da([
  b()
], Mt.prototype, "_value", 2);
Da([
  b()
], Mt.prototype, "_isHtml", 2);
Mt = Da([
  p(iy)
], Mt);
const ay = Mt, oy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsEditSubmitMessageModalElement() {
    return Mt;
  },
  default: ay
}, Symbol.toStringTag, { value: "Module" }));
var sy = Object.defineProperty, ny = Object.getOwnPropertyDescriptor, Zc = (t) => {
  throw TypeError(t);
}, eu = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? ny(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && sy(e, r, i), i;
}, ps = (t, e, r) => e.has(t) || Zc("Cannot " + r), Vt = (t, e, r) => (ps(t, e, "read from private field"), r ? r.call(t) : e.get(t)), _r = (t, e, r) => e.has(t) ? Zc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), to = (t, e, r, a) => (ps(t, e, "write to private field"), e.set(t, r), r), se = (t, e, r) => (ps(t, e, "access private method"), r), Dr, hs, aa, Ar, re, tu, Tr, vo, ru, iu, au, Aa;
const ly = "form-edit-allowed-file-upload-types";
let _o = class extends $e {
  constructor() {
    super(), _r(this, re), this._value = [], _r(this, Dr), _r(this, hs, [
      {
        name: "Allow all files",
        type: ""
      },
      {
        name: "PDF",
        type: "pdf"
      },
      {
        name: "DOCX",
        type: "docx"
      },
      {
        name: "XLSX",
        type: "xlsx"
      },
      {
        name: "TXT",
        type: "txt"
      },
      {
        name: "PNG",
        type: "png"
      },
      {
        name: "JPG",
        type: "jpg"
      },
      {
        name: "GIF",
        type: "gif"
      }
    ]), _r(this, aa, []), _r(this, Ar, []), this.consumeContext(bi, (t) => {
      to(this, Dr, t);
    }), this.consumeContext(Fi, (t) => {
      t && this.observe(t.config, (e) => {
        e && (to(this, aa, e == null ? void 0 : e.disallowedFileUploadExtensions.split(",").filter(Boolean)), to(this, Ar, e == null ? void 0 : e.allowedFileUploadExtensions.split(",").filter(Boolean)));
      });
    });
  }
  set value(t) {
    this._value = structuredClone(t), se(this, re, tu).call(this);
  }
  get value() {
    return this._value;
  }
  render() {
    return n`<div>
      ${this.value.filter((t) => t.checked.length > 0).map(
      (t, e) => n`<div>
              <uui-toggle
                ?checked=${t.checked === "true"}
                ?disabled=${e > 0 && se(this, re, vo).call(this)}
                .label=${t.name}
                @change=${() => se(this, re, ru).call(this, e)}
              ></uui-toggle>
            </div>`
    )}
      <div>
        <b
          >${this.localize.term(
      "formFileUpload_userDefinedAllowedFileTypes"
    )}</b
        >
      </div>
      <div>
        ${this.value.filter((t) => t.checked.length === 0).map(
      (t, e) => n`<div>
                <span>${t.name}</span>
                <uui-button
                  label=${this.localize.term("general_delete")}
                  look="secondary"
                  color="default"
                  @click=${() => se(this, re, au).call(this, e)}
                >
                  <uui-icon name="icon-delete"></uui-icon>
                </uui-button>
              </div>`
    )}
      </div>
      <form>
        <uui-input
          id="addNew"
          type="text"
          size="30"
          .placeholder=${this.localize.term(
      "formFileUpload_addAllowedFileType"
    )}
        ></uui-input>
        <uui-button
          label=${this.localize.term("general_add")}
          look="secondary"
          color="default"
          .disabled="${se(this, re, vo).call(this)}"
          @click=${() => se(this, re, iu).call(this)}
        >
          <uui-icon name="icon-add"></uui-icon>
        </uui-button>
      </form>
    </div>`;
  }
};
Dr = /* @__PURE__ */ new WeakMap();
hs = /* @__PURE__ */ new WeakMap();
aa = /* @__PURE__ */ new WeakMap();
Ar = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakSet();
tu = function() {
  Vt(this, hs).filter(
    (e) => se(this, re, Tr).call(this, e.type)
  ).forEach((e) => {
    this._value.find((r) => r.type === e.type) || this._value.push({
      name: e.name,
      type: e.type,
      checked: "false"
    });
  }), this._value.filter((e) => se(this, re, Tr).call(this, e.type)).length > 0 && (this._value = this._value.filter(
    (e) => se(this, re, Tr).call(this, e.type)
  ));
};
Tr = function(t) {
  return t === "" ? !0 : !(Vt(this, aa).includes(t) || Vt(this, Ar).length > 0 && Vt(this, Ar).includes(t) === !1);
};
vo = function() {
  return this.value[0].checked === "true";
};
ru = function(t) {
  const e = this._value[t].checked;
  this._value[t].checked = e === "true" ? "false" : "true", se(this, re, Aa).call(this);
};
iu = function() {
  var a, i, o;
  const t = (a = this.shadowRoot) == null ? void 0 : a.getElementById(
    "addNew"
  ), e = t.value.toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (t.value = "", e.length === 0)
    return;
  if (!se(this, re, Tr).call(this, e)) {
    (i = Vt(this, Dr)) == null || i.peek("danger", {
      data: {
        headline: this.localize.term(
          "formFileUpload_disallowedFileExtensionErrorTitle"
        ),
        message: this.localize.term(
          "formFileUpload_disallowedFileExtensionErrorMessage"
        )
      }
    });
    return;
  }
  if (this._value.findIndex(function(s) {
    return s.type.toLowerCase() === e;
  }) >= 0) {
    (o = Vt(this, Dr)) == null || o.peek("danger", {
      data: {
        headline: this.localize.term(
          "formFileUpload_duplicateFileTypeErrorTitle"
        ),
        message: this.localize.term(
          "formFileUpload_duplicateFileTypeErrorMessage"
        )
      }
    });
    return;
  }
  this._value.push({
    type: e,
    name: e.toUpperCase(),
    checked: ""
  }), se(this, re, Aa).call(this);
};
au = function(t) {
  const e = this.value.filter(
    (r) => r.checked.length > 0
  ).length;
  this._value.splice(t + e, 1), se(this, re, Aa).call(this);
};
Aa = function() {
  this.requestUpdate(), this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  );
};
eu([
  m()
], _o.prototype, "value", 1);
_o = eu([
  p(ly)
], _o);
var cy = Object.defineProperty, uy = Object.getOwnPropertyDescriptor, ou = (t) => {
  throw TypeError(t);
}, fs = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? uy(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && cy(e, r, i), i;
}, ys = (t, e, r) => e.has(t) || ou("Cannot " + r), oa = (t, e, r) => (ys(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ro = (t, e, r) => e.has(t) ? ou("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), su = (t, e, r, a) => (ys(t, e, "write to private field"), e.set(t, r), r), W = (t, e, r) => (ys(t, e, "access private method"), r), ft, gs, k, nu, sa, ka, Ra, vs, _s, lu, cu, uu, du, Ia;
const dy = "form-edit-prevalues";
let kr = class extends $e {
  constructor() {
    super(...arguments), ro(this, k), ro(this, ft, []), ro(this, gs, new Si(this, {
      ...new Ei(
        "Forms.SorterIdentifier.Prevalues",
        "tr.prevalue-row",
        "tbody.prevalues-container"
      ).config,
      onChange: ({ model: t }) => {
        su(this, ft, t);
      },
      onEnd: () => {
        const t = structuredClone(this._value);
        t.sort(
          (e, r) => oa(this, ft).indexOf(e.value) - oa(this, ft).indexOf(r.value)
        ), this._value = t, W(this, k, Ia).call(this);
      }
    })), this._value = [], this._editIndex = -1;
  }
  set value(t) {
    this._value = structuredClone(t), W(this, k, nu).call(this);
  }
  get value() {
    return this._value;
  }
  render() {
    return n` <table>
      <thead>
        <tr>
          <th></th>
          <th>Value</th>
          <th>Caption</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="prevalues-container">
        ${this.value.map(
      (t, e) => n`<tr class="prevalue-row" sort-unique=${t.value}>
              <td><uui-icon name="icon-navigation"></uui-icon></td>
              <td>${t.value}</td>
              <td>${t.caption}</td>
              <td>
                <uui-action-bar>
                  <uui-button
                    label="edit"
                    look="secondary"
                    color="default"
                    @click=${() => W(this, k, lu).call(this, e)}
                  >
                    <uui-icon name="edit"></uui-icon>
                  </uui-button>
                  <uui-button
                    label=${this.localize.term("general_delete")}
                    look="secondary"
                    color="default"
                    @click=${() => W(this, k, du).call(this, e)}
                  >
                    <uui-icon name="delete"></uui-icon>
                  </uui-button>
                </uui-action-bar>
              </td>
            </tr>`
    )}

        <tr>
          <td></td>
          <td>
            <uui-input
              id="value"
              name="value"
              type="text"
              size="30"
              maxlength="255"
              .placeholder=${this.localize.term("formPrevalues_newValue")}
            ></uui-input>
          </td>
          <td>
            <uui-input
              id="caption"
              name="caption"
              type="text"
              size="30"
              maxlength="255"
              .placeholder=${this.localize.term("formPrevalues_newCaption")}
            ></uui-input>
          </td>
          <td>
            <uui-action-bar>
              <uui-button
                label="add"
                look="secondary"
                color="default"
                @click=${W(this, k, cu)}
              >
                <uui-icon
                  .name=${W(this, k, sa).call(this) ? "icon-save" : "add"}
                ></uui-icon>
              </uui-button>
              ${h(
      W(this, k, sa).call(this),
      () => n`<uui-button
                    label="add"
                    look="secondary"
                    color="default"
                    @click=${W(this, k, uu)}
                    ><uui-icon name="wrong"></uui-icon
                  ></uui-button>`
    )}
            </uui-action-bar>
          </td>
        </tr>
      </tbody>
    </table>`;
  }
};
ft = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakSet();
nu = function() {
  su(this, ft, this._value.map((t) => t.value)), oa(this, gs).setModel(oa(this, ft));
};
sa = function() {
  return this._editIndex > -1;
};
ka = function() {
  return W(this, k, vs).call(this, "value");
};
Ra = function() {
  return W(this, k, vs).call(this, "caption");
};
vs = function(t) {
  var e;
  return (e = this.shadowRoot) == null ? void 0 : e.getElementById(t);
};
_s = function() {
  W(this, k, ka).call(this).value = "", W(this, k, Ra).call(this).value = "", this._editIndex = -1;
};
lu = function(t) {
  this._editIndex = t;
  const e = this._value[this._editIndex];
  W(this, k, ka).call(this).value = e.value, W(this, k, Ra).call(this).value = e.caption || "";
};
cu = function() {
  const t = W(this, k, ka).call(this).value, e = W(this, k, Ra).call(this).value;
  W(this, k, sa).call(this) ? (this._value[this._editIndex].value = t, this._value[this._editIndex].caption = e) : this._value.push({
    value: t,
    caption: e
  }), W(this, k, _s).call(this), W(this, k, Ia).call(this);
};
uu = function() {
  W(this, k, _s).call(this);
};
du = async function(t) {
  await qo(this, {
    headline: this.localize.term("formPrevalues_deletePrevalueHeadline"),
    content: this.localize.term("formPrevalues_deletePrevalueMessage"),
    confirmLabel: this.localize.term("general_yes"),
    color: "danger"
  }), this._value.splice(t, 1), W(this, k, Ia).call(this);
};
Ia = function() {
  this.requestUpdate(), this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  );
};
kr.styles = [
  O`
      table {
        width: 100%;
      }

      th:last-child {
        width: 120px;
      }

      /* match padding to uui-input */
      td:not(:has(uui-input, uui-button)) {
        padding: var(--uui-size-1, 3px) var(--uui-size-space-3, 9px);
      }

      th {
        text-align: left;
      }

      .prevalue-row {
        cursor: move;
      }
    `
];
fs([
  m({ type: Array })
], kr.prototype, "value", 1);
fs([
  b()
], kr.prototype, "_editIndex", 2);
kr = fs([
  p(dy)
], kr);
const Ua = new L("UmbCollectionContext");
var my = Object.defineProperty, py = Object.getOwnPropertyDescriptor, mu = (t) => {
  throw TypeError(t);
}, Ci = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? py(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && my(e, r, i), i;
}, hy = (t, e, r) => e.has(t) || mu("Cannot " + r), fy = (t, e, r) => e.has(t) ? mu("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), io = (t, e, r) => (hy(t, e, "access private method"), r), br, pu, hu, fu;
const yy = "form-export-entries-modal";
let ot = class extends we {
  constructor() {
    super(...arguments), fy(this, br), this._exportTypes = [], this._selectedExportType = void 0, this._exporting = !1;
  }
  async connectedCallback() {
    var e;
    super.connectedCallback();
    const { data: t } = await d(
      this,
      po.getExportTypes({ query: { formId: (e = this.data) == null ? void 0 : e.unique } })
    );
    this._exportTypes = t;
  }
  render() {
    return n`<umb-body-layout
      .headline=${this.localize.term("formEntries_export")}
    >
      <uui-box>
        <umb-property-layout
          orientation="vertical"
          .label=${this.localize.term("formEntries_chooseExportFormat")}
        >
          <div slot="editor">
            <uui-ref-list>
              ${this._exportTypes.map(
      (t) => n`<umb-ref-item
                    selectable
                    select-only
                    id=${t.alias}
                    .name=${this.localize.term(
        `formProviderExportTypes_${t.alias}`
      )}
                    .icon=${t.icon}
                    .detail=${this.localize.term(
        `formProviderExportTypes_${t.alias}Description`
      )}
                    @selected=${() => io(this, br, pu).call(this, t)}
                    @deselected=${io(this, br, hu)}
                  ></umb-ref-item>`
    )}
            </uui-ref-list>
          </div>
        </umb-property-layout>
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          look="primary"
          color="positive"
          label=${this.localize.term("actions_export")}
          .disabled=${!this._selectedExportType || this._exporting}
          @click=${io(this, br, fu)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
br = /* @__PURE__ */ new WeakSet();
pu = function(t) {
  var e;
  (e = this._refItems) == null || e.forEach((r) => {
    r.id !== t.alias && (r.selected = !1);
  }), this._selectedExportType = t.id;
};
hu = function() {
  this._selectedExportType = void 0;
};
fu = async function() {
  var s;
  if (this._exporting || !this._selectedExportType) return;
  this._exporting = !0;
  const t = await this.getContext(
    Ua
  );
  if (!t)
    throw new Error("Form entry collection context not found");
  const e = {
    ...await Bo(t.filter),
    formId: (s = this.data) == null ? void 0 : s.unique,
    exportType: this._selectedExportType
  }, {
    data: { formId: r, fileName: a }
  } = await d(this, po.postExport({ query: e })), { data: i } = await d(
    this,
    po.getExport({ query: { fileName: a, formId: r } })
  );
  Gm(i, a, "text/xml"), this._exporting = !1;
  const o = await this.getContext(bi);
  o == null || o.peek("positive", {
    data: {
      message: "Export complete."
    }
  }), this._submitModal();
};
Ci([
  b()
], ot.prototype, "_exportTypes", 2);
Ci([
  Gn("umb-ref-item")
], ot.prototype, "_refItems", 2);
Ci([
  b()
], ot.prototype, "_selectedExportType", 2);
Ci([
  b()
], ot.prototype, "_exporting", 2);
ot = Ci([
  p(yy)
], ot);
const gy = ot, vy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsExportEntriesModalElement() {
    return ot;
  },
  default: gy
}, Symbol.toStringTag, { value: "Module" }));
var _y = Object.defineProperty, Sy = Object.getOwnPropertyDescriptor, yu = (t) => {
  throw TypeError(t);
}, gu = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Sy(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && _y(e, r, i), i;
}, by = (t, e, r) => e.has(t) || yu("Cannot " + r), wy = (t, e, r) => e.has(t) ? yu("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Fy = (t, e, r) => (by(t, e, "access private method"), r), So, vu;
const Ey = "form-preview-modal";
let Rr = class extends we {
  constructor() {
    super(...arguments), wy(this, So), this._relations = [];
  }
  async connectedCallback() {
    var e;
    await super.connectedCallback();
    const t = (e = this.data) == null ? void 0 : e.unique;
    if (t) {
      const { data: r } = await d(
        this,
        ee.getFormByIdRelations({ path: { id: t } })
      );
      r && (this._relations = r.items.filter(
        (a) => a.nodeType === Km
      ));
    }
  }
  render() {
    return n`
      <umb-body-layout headline=${this.localize.term("formPreview_headline")}>
        ${h(
      this._relations.length === 0,
      () => this.localize.term("formPreview_descriptionNoItems"),
      () => n`
            <p>${this.localize.term("formPreview_description")}</p>
            <uui-box>
              <uui-ref-list>
                ${this._relations.map(
        (t) => n`
                    <uui-ref-node
                      .name="${t.nodeName}"
                      @open=${() => Fy(this, So, vu).call(this, t.nodeKey)}
                    >
                      ${h(
          t.contentTypeIcon,
          () => n`<umb-icon slot="icon" name="${t.contentTypeIcon}"></uui-icon>`
        )}
                      ${h(
          t.nodePublished,
          () => n`<uui-tag size="s" slot="tag" color="positive"
                            >${this.localize.term("content_published")}</uui-tag
                          >`
        )}
                    </uui-ref-node>
                  `
      )}
              </uui-ref-list>
            </uui-box>
          `
    )}
        <uui-button
          slot="actions"
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
      </umb-body-layout>
    `;
  }
};
So = /* @__PURE__ */ new WeakSet();
vu = async function(t) {
  await new Xm(this).enter();
  const e = await this.getContext(Jm);
  if (!e)
    throw new Error("Server context is missing");
  const r = e.getBackofficePath(), a = new URL(
    Hm(r) + "preview",
    window.location.origin
  );
  a.searchParams.set("id", t);
  const i = window.open(
    a.toString(),
    `umbpreview-${t}`
  );
  i == null || i.focus(), this._rejectModal();
};
gu([
  b()
], Rr.prototype, "_relations", 2);
Rr = gu([
  p(Ey)
], Rr);
const $y = Rr, Cy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsPreviewModalElement() {
    return Rr;
  },
  default: $y
}, Symbol.toStringTag, { value: "Module" }));
class Ty extends jm {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager context not found");
    const r = await this.getContext(
      bh
    ), a = new Xi(this), { data: i } = await a.requestCollection(), o = (i == null ? void 0 : i.items) || [];
    e.open(
      this,
      jh,
      {
        data: {
          fieldTypes: o
        },
        value: {
          wizard: await (r == null ? void 0 : r.getWizardScaffold())
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Ir = "Forms.Workspace.DataSource", Oy = {
  type: "workspace",
  kind: "routable",
  alias: Ir,
  name: "Data Source Workspace",
  api: () => import("./datasource-workspace.context.js"),
  meta: {
    entityType: Rt
  }
}, Py = [
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.DataSource.Design",
    name: "Form Workspace Design View",
    element: () => import("./workspace-view-datasource-design.element.js"),
    weight: 90,
    meta: {
      label: "Design",
      pathname: "design",
      icon: "document"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ir
      },
      {
        alias: de,
        match: (t) => t.userSecurity.manageDataSources
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.DataSource.Info",
    name: "Form Workspace Info View",
    element: () => import("./workspace-view-datasource-info.element.js"),
    weight: 90,
    meta: {
      label: "Info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ir
      },
      {
        alias: de,
        match: (t) => t.userSecurity.manageDataSources
      }
    ]
  }
], xy = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.DataSource.Save",
    name: "Save Data Source Workspace Action",
    api: Pr,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ir
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.DataSource.CreateForm",
    name: "Create Form From Data Source Workspace Action",
    api: Ty,
    meta: {
      label: "Create Form"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ir
      },
      {
        alias: Jn
      }
    ]
  }
], My = [Oy, ...Py, ...xy], Dy = [
  ...wp,
  ...dh,
  ...Sh,
  ...Sp,
  ...My
], Ay = "Forms.Repository.DataSourceType.Collection", ky = {
  type: "repository",
  alias: Ay,
  name: "Data Source Type Collection Repository",
  api: () => import("./datasource-type-collection.repository.js")
}, Ry = [ky];
var si;
class Iy {
  constructor(e) {
    f(this, si);
    y(this, si, e);
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, si),
      Vp.getDataSourceTypeById({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  createScaffold() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
si = new WeakMap();
class Uy extends Fe {
  constructor(e) {
    super(e, _u.contextAlias);
  }
}
const _u = new L(
  "FormsDataSourceTypeDetailStore"
);
class zy extends Ee {
  constructor(e) {
    super(
      e,
      Iy,
      _u
    );
  }
}
const Wy = "Forms.Repository.DataSourceType.Detail", Ly = "Forms.Store.DataSourceType.Detail", Ny = {
  type: "repository",
  alias: Wy,
  name: "Data Source Type Detail Repository",
  api: zy
}, Vy = {
  type: "store",
  alias: Ly,
  name: "Field Data Source Type Detail Store",
  api: Uy
}, qy = [Ny, Vy], jy = [
  ...Ry,
  ...qy
];
var ni;
class By {
  constructor(e) {
    f(this, ni);
    y(this, ni, e);
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, ni),
      Oa.getFieldTypeById({ path: { id: e } })
    );
  }
  createScaffold() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
ni = new WeakMap();
class Yy extends Fe {
  constructor(e) {
    super(e, Su.contextAlias);
  }
}
const Su = new L("FormsFieldTypeDetailStore");
class Gy extends Ee {
  constructor(e) {
    super(
      e,
      By,
      Su
    );
  }
  async requestValidationPatterns() {
    const { data: e, error: r } = await d(
      this._host,
      Oa.getFieldTypeValidationPattern()
    );
    return r ? { error: r } : { data: e };
  }
}
const Hy = "Forms.Repository.FieldType.Detail", Ky = "Forms.Store.FieldType.Detail", Xy = {
  type: "repository",
  alias: Hy,
  name: "Field Type Detail Repository",
  api: Gy
}, Jy = {
  type: "store",
  alias: Ky,
  name: "Field Type Detail Store",
  api: Yy
}, Qy = [Xy, Jy], Zy = [
  ...Ch,
  ...Qy
], eg = "Forms.Repository.PrevalueSourceType.Collection", tg = {
  type: "repository",
  alias: eg,
  name: "Prevalue Source Type Collection Repository",
  api: () => import("./prevaluesource-type-collection.repository.js")
}, rg = [tg];
var li;
class ig {
  constructor(e) {
    f(this, li);
    y(this, li, e);
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, li),
      Bp.getPrevalueSourceTypeById({
        path: { id: e }
      })
    );
  }
  createScaffold() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
li = new WeakMap();
class ag extends Fe {
  constructor(e) {
    super(e, bu.contextAlias);
  }
}
const bu = new L(
  "FormsPrevalueSourceTypeDetailStore"
);
class og extends Ee {
  constructor(e) {
    super(
      e,
      ig,
      bu
    );
  }
}
const sg = "Forms.Repository.PrevalueSourceType.Detail", ng = "Forms.Store.PrevalueSourceType.Detail", lg = {
  type: "repository",
  alias: sg,
  name: "Prevalue Source Type Detail Repository",
  api: og
}, cg = {
  type: "store",
  alias: ng,
  name: "Field Prevalue Source Type Detail Store",
  api: ag
}, ug = [lg, cg], dg = [
  ...rg,
  ...ug
];
class mg {
  async getSettingValueForEditor(e, r, a) {
    return Promise.resolve(a);
  }
  async getSettingValueForPersistence(e, r) {
    var a;
    if (Array.isArray(r.value)) {
      const i = r.value;
      return Promise.resolve((i == null ? void 0 : i.length) > 0 ? i[0] : "");
    } else
      return Promise.resolve(((a = r.value) == null ? void 0 : a.toString()) || "");
  }
  async getSettingPropertyConfig(e) {
    const r = [];
    return r.push({
      alias: "multiple",
      value: !1
    }), r.push({
      alias: "items",
      value: e.prevalues
    }), Promise.resolve(r);
  }
  destroy() {
  }
}
class pg {
  async getSettingValueForEditor(e, r, a) {
    return Promise.resolve(a);
  }
  async getSettingValueForPersistence(e, r) {
    var a;
    return Promise.resolve(((a = r.value) == null ? void 0 : a.toString()) || "");
  }
  async getSettingPropertyConfig(e) {
    const r = [];
    return e.prevalues.length >= 1 && (r.push({
      alias: "min",
      value: e.prevalues[0]
    }), e.prevalues.length >= 2 && (r.push({
      alias: "max",
      value: e.prevalues[1]
    }), e.prevalues.length >= 3 && r.push({
      alias: "step",
      value: e.prevalues[2]
    }))), Promise.resolve(r);
  }
  destroy() {
  }
}
var Jt;
class hg {
  constructor(e) {
    f(this, Jt);
    y(this, Jt, e);
  }
  async getSettingValueForEditor(e, r, a) {
    if (a) {
      const { data: i, error: o } = await d(
        c(this, Jt),
        jp.getMediaByPath({
          query: { path: encodeURIComponent(a) }
        }),
        {
          disableNotifications: !0
        }
      );
      if (!o)
        return Promise.resolve(i.id);
    }
    return Promise.resolve("");
  }
  async getSettingValueForPersistence(e, r) {
    var i, o;
    const a = r.value;
    if (a) {
      const { data: s } = await d(
        c(this, Jt),
        ep.getMediaUrls({ query: { id: [a] } }),
        {
          disableNotifications: !0
        }
      ), l = (o = (i = s == null ? void 0 : s[0]) == null ? void 0 : i.urlInfos) == null ? void 0 : o[0].url;
      if (!l) return Promise.resolve("");
      const g = new URL(l).pathname;
      return Promise.resolve(g);
    }
    return Promise.resolve("");
  }
  async getSettingPropertyConfig() {
    const e = [];
    return e.push({
      alias: "validationLimit",
      value: {
        min: 1,
        max: 1
      }
    }), Promise.resolve(e);
  }
  destroy() {
  }
}
Jt = new WeakMap();
class fg {
  async getSettingValueForEditor(e, r, a) {
    if (!isNaN(parseFloat(a))) {
      const i = Math.trunc(parseFloat(a) * 10);
      return Promise.resolve({ from: i, to: i });
    }
    return Promise.resolve(void 0);
  }
  async getSettingValueForPersistence(e, r) {
    const a = ((r.value ? parseInt(r.value.from) : 5) / 10).toFixed(1);
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig(e, r, a) {
    var s, l;
    const i = [];
    i.push({
      alias: "enableRange",
      value: !1
    });
    let o = ((l = (s = a.find((g) => g.alias === r)) == null ? void 0 : s.value) == null ? void 0 : l.toString()) || "";
    return isNaN(parseFloat(o)) && (o = ""), e.prevalues.length >= 1 && (i.push({
      alias: "minVal",
      value: parseFloat(e.prevalues[0]) * 10
    }), e.prevalues.length >= 2 && (i.push({
      alias: "maxVal",
      value: parseFloat(e.prevalues[1]) * 10
    }), e.prevalues.length >= 3 && (i.push({
      alias: "step",
      value: parseFloat(e.prevalues[2]) * 10
    }), e.prevalues.length >= 3 && o.length === 0 ? i.push({
      alias: "initVal1",
      value: parseFloat(e.prevalues[3]) * 10
    }) : i.push({
      alias: "initVal1",
      value: parseFloat(o)
    })))), Promise.resolve(i);
  }
  destroy() {
  }
}
var ci;
class gn {
  constructor(e) {
    f(this, ci);
    y(this, ci, e);
  }
  async getSettingValueForEditor(e, r, a) {
    const i = { markup: a };
    return Promise.resolve(i);
  }
  async getSettingValueForPersistence(e, r) {
    const a = r.value ? r.value.markup : "";
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig() {
    const e = [], { data: r } = await d(
      c(this, ci),
      Oa.getFieldTypeRichtextDatatype(),
      {
        disableNotifications: !0
      }
    );
    return r.configurationData && (e.push({
      alias: "maxImageSize",
      value: r.configurationData.maxImageSize
    }), e.push({
      alias: "toolbar",
      value: r.configurationData.toolbar
    }), r.configurationData.extensions && e.push({
      alias: "extensions",
      value: r.configurationData.extensions
    }), r.configurationData.mode && (e.push({
      alias: "mode",
      value: r.configurationData.mode
    }), r.configurationData.mode && e.push({
      alias: "stylesheets",
      value: r.configurationData.stylesheets
    }))), e;
  }
  destroy() {
  }
}
ci = new WeakMap();
class yg {
  async getSettingValueForEditor(e, r, a) {
    let i = !1;
    return a ? i = a.toLowerCase() === "true" : i = e.prevalues.length >= 1 && e.prevalues[0].toLowerCase() === "true", Promise.resolve(i);
  }
  async getSettingValueForPersistence(e, r) {
    const a = r.value ? "True" : "False";
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig() {
    const e = [];
    return Promise.resolve(e);
  }
  destroy() {
  }
}
class gg {
  async getSettingValueForEditor(e, r, a) {
    return Promise.resolve(a);
  }
  async getSettingValueForPersistence(e, r) {
    const a = r.value ? r.value.temporaryFileId : "";
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig() {
    const e = [];
    return e.push({
      alias: "multiple",
      value: !1
    }), e.push({
      alias: "fileExtensions",
      value: ["txt"]
    }), Promise.resolve(e);
  }
  destroy() {
  }
}
class vg {
  async getSettingValueForEditor(e, r, a) {
    return a.length === 0 ? Promise.resolve({}) : Promise.resolve(JSON.parse(a));
  }
  async getSettingValueForPersistence(e, r) {
    return Promise.resolve(JSON.stringify(r.value));
  }
  async getSettingPropertyConfig() {
    return Promise.resolve([]);
  }
  destroy() {
  }
}
class _g {
  async getSettingValueForEditor(e, r, a) {
    let i = [];
    return a ? i = a.split(",") : i = [], Promise.resolve(i);
  }
  async getSettingValueForPersistence(e, r) {
    const a = r.value.join(",");
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig() {
    const e = [];
    return Promise.resolve(e);
  }
  destroy() {
  }
}
class Sg {
  async getSettingValueForEditor(e, r, a) {
    return Promise.resolve(a);
  }
  async getSettingValueForPersistence(e, r) {
    var a;
    return Promise.resolve(((a = r.value) == null ? void 0 : a.toString()) || "");
  }
  async getSettingPropertyConfig(e) {
    const r = [];
    return r.push({
      alias: "settingProvidingDocTypeAlias",
      value: e.prevalues.length > 0 ? e.prevalues[0] : ""
    }), Promise.resolve(r);
  }
  destroy() {
  }
}
const bg = [
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Dropdown",
    name: "Dropdown Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Dropdown",
    api: mg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Integer",
    name: "Number Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
    api: pg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.MediaEntityPicker",
    name: "Media Entity Picker Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaEntityPicker",
    api: hg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Slider",
    name: "Number Slider Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Slider",
    api: fg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.RichText.TinyMCE",
    name: "Rich Text Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TinyMCE",
    api: gn
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.RichText.Tiptap",
    name: "Rich Text Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap",
    api: gn
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Toggle",
    name: "Number Toggle Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
    api: yg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Upload",
    name: "Upload Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.UploadField",
    api: gg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.SourcePicker",
    name: "Source Picker Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.ContentPicker.Source",
    api: vg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.MultipleTextString",
    name: "Multiple Text String Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.MultipleTextString",
    api: _g
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.DocumentTypeFieldPicker",
    name: "Document Type Field Picker Setting Value Converter",
    propertyEditorUiAlias: "Forms.PropertyEditorUi.DocumentTypeFieldPicker",
    api: Sg
  }
], wg = "Forms.Repository.WorkflowType.Collection", Fg = {
  type: "repository",
  alias: wg,
  name: "Workflow Type Collection Repository",
  api: () => Promise.resolve().then(() => sf)
}, Eg = [Fg];
var ui;
class $g {
  constructor(e) {
    f(this, ui);
    y(this, ui, e);
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, ui),
      ol.getWorkflowTypeById({ path: { id: e } })
    );
  }
  createScaffold() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
ui = new WeakMap();
class Cg extends Fe {
  constructor(e) {
    super(e, wu.contextAlias);
  }
}
const wu = new L(
  "FormsWorkflowTypeDetailStore"
);
class Tg extends Ee {
  constructor(e) {
    super(
      e,
      $g,
      wu
    );
  }
}
const Og = "Forms.Repository.WorkflowType.Detail", Pg = "Forms.Store.WorkflowType.Detail", xg = {
  type: "repository",
  alias: Og,
  name: "Workflow Type Detail Repository",
  api: Tg
}, Mg = {
  type: "store",
  alias: Pg,
  name: "Field Workflow Type Detail Store",
  api: Cg
}, Dg = [xg, Mg], Ag = [
  ...Eg,
  ...Dg
], kg = [
  ...jy,
  ...Zy,
  ...dg,
  ...bg,
  ...Ag
], Rg = "email-template", Ig = "email-template-root", Ug = "email-template-folder", Fu = "Forms.Repository.EmailTemplate.Tree", zg = "Forms.Store.EmailTemplate.Tree", Wg = "Forms.Tree.EmailTemplate", Lg = {
  type: "repository",
  alias: Fu,
  name: "Email Template Tree Repository",
  api: () => import("./email-template-tree.repository.js")
}, Ng = {
  type: "treeStore",
  alias: zg,
  name: "Email Template Tree Store",
  api: () => import("./email-template-tree.store.js")
}, Vg = {
  type: "tree",
  kind: "default",
  alias: Wg,
  name: "Email Template Tree",
  meta: {
    repositoryAlias: Fu
  }
}, qg = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.EmailTemplate",
  name: "Email Template Tree Item",
  forEntityTypes: [
    Ig,
    Rg,
    Ug
  ]
}, jg = [
  Lg,
  Ng,
  Vg,
  qg
], Bg = [...jg];
class Yg extends Wn {
  constructor(e, r) {
    super(e, r), this.consumeContext(Re, (a) => {
      const i = a == null ? void 0 : a.getData();
      this.permitted = i ? this.config.match(i) : !1;
    });
  }
}
const bo = "Forms.Condition.FormSettings", Gg = [
  {
    type: "condition",
    name: "Form Settings Condition",
    alias: bo,
    api: Yg
  }
], Hg = [...Gg];
class Kg extends Fe {
  constructor(e) {
    super(e, Eu.contextAlias);
  }
}
const Eu = new L("FormDetailStore");
var je;
class Xg {
  constructor(e) {
    f(this, je);
    y(this, je, e);
  }
  /**
   * Creates a new Form scaffold
   * @param {(string | null)} parentUnique
   * @return { FormDetailModel }
   * @memberof FormsFormDetailServerDataSource
   */
  async createScaffold() {
    const e = K.new();
    return { data: {
      entityType: "form",
      unique: e,
      id: e,
      created: (/* @__PURE__ */ new Date()).toJSON(),
      updated: (/* @__PURE__ */ new Date()).toJSON(),
      messageOnSubmitIsHtml: !1,
      displayDefaultFields: !0,
      daysToRetainApprovedRecordsFor: 0,
      daysToRetainRejectedRecordsFor: 0,
      daysToRetainSubmittedRecordsFor: 0,
      selectedDisplayFields: [],
      nodeId: 0,
      name: "",
      path: "",
      formWorkflows: {
        onSubmit: [],
        onApprove: [],
        onReject: []
      },
      pages: [],
      fieldIndicationType: Zn.MARK_MANDATORY_FIELDS,
      indicator: "*",
      showValidationSummary: !1,
      hideFieldValidation: !1,
      requiredErrorMessage: "",
      invalidErrorMessage: "",
      messageOnSubmit: "",
      manualApproval: !1,
      storeRecordsLocally: !1,
      autocompleteAttribute: "",
      disableDefaultStylesheet: !1,
      submitLabel: "",
      nextLabel: "",
      prevLabel: "",
      showPagingOnMultiPageForms: ce.NONE,
      pagingDetailsFormat: "",
      pageCaptionFormat: "",
      showSummaryPageOnMultiPageForms: !1,
      validationRules: []
    } };
  }
  /**
   * Fetches a Form with the given id from the server
   * @param {string} unique
   * @return {FormDesign}
   * @memberof FormsFormDetailServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, je),
      ee.getFormById({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  /**
   * Inserts a new Form on the server
   * @param {FormDetailModel} form
   * @return {*}
   * @memberof FormsFormDetailServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Form is missing");
    if (!e.unique) throw new Error("Form unique is missing");
    const { error: r } = await d(
      c(this, je),
      ee.postForm({ body: e })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Updates a Form on the server
   * @param {FormDetailModel} Form
   * @return {*}
   * @memberof FormsFormDetailServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, je),
      ee.putFormById({ path: { id: e.id }, body: e })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a Form on the server
   * @param {string} unique
   * @return {*}
   * @memberof FormsFormDetailServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, je),
      ee.deleteFormById({ path: { id: e } })
    );
  }
}
je = new WeakMap();
class Jg extends Ee {
  constructor(e) {
    super(
      e,
      Xg,
      Eu
    );
  }
  async requestRecordsMetaData(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      this._host,
      Ze.getFormByFormIdRecordMetadata({ path: { formId: e } })
    );
    return a ? { error: a } : { data: r };
  }
  async requestHasRelations(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      this._host,
      ee.getFormByIdHasRelations({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  async requestTemplates() {
    const { data: e, error: r } = await d(
      this._host,
      qp.getFormTemplate()
    );
    return r ? { error: r } : { data: e };
  }
  async requestFormScaffold(e) {
    const { data: r, error: a } = e.length === 0 ? await d(this, ee.getFormScaffold()) : await d(
      this,
      ee.getFormScaffoldByTemplate({ path: { template: e } })
    );
    return a ? { error: a } : { data: r };
  }
  async copyForm(e, r, a, i) {
    if (!e) throw new Error("Unique is missing");
    const o = {
      newName: a,
      copyWorkflows: r,
      copyToFolderId: i
    }, { data: s, error: l } = await d(
      this._host,
      ee.postFormByIdCopy({ path: { id: e }, body: o })
    );
    return l ? { error: l } : { data: s };
  }
  async copyFormWorkflows(e, r, a) {
    if (!e) throw new Error("sourceId is missing");
    if (!r) throw new Error("destinationId is missing");
    const i = {
      sourceId: e,
      destinationId: r,
      workflowIds: a
    }, { data: o, error: s } = await d(
      this._host,
      ee.postFormByIdCopyWorkflows({ path: { id: e }, body: i })
    );
    return s ? { error: s } : { data: o };
  }
  async moveForm(e, r) {
    if (!e) throw new Error("Unique is missing");
    const a = {
      parentId: r
    }, { data: i, error: o } = await d(
      this._host,
      ee.putFormByIdMove({ path: { id: e }, body: a })
    );
    return o ? { error: o } : { data: i };
  }
}
var Be;
class Qg {
  constructor(e) {
    f(this, Be);
    y(this, Be, e);
  }
  async createScaffold(e) {
    return { data: {
      entityType: me,
      unique: K.new(),
      name: "",
      ...e
    } };
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, Be),
      pt.getFolderById({ path: { id: e } })
    );
    return a ? { error: a } : {
      data: {
        unique: r.id,
        entityType: me,
        name: r.name,
        isFolder: !0,
        hasChildren: !0,
        // TODO: Check if the folder has children
        parent: {
          unique: r.parentId ? r.parentId : null,
          entityType: me
        }
      }
    };
  }
  async create(e, r) {
    if (!e) throw new Error("Data is missing");
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Name is missing");
    const a = {
      id: e.unique,
      parent: r ? { id: r } : null,
      name: e.name
    }, { error: i } = await d(
      c(this, Be),
      pt.postFolder({ body: a })
    );
    return i ? { error: i } : this.read(e.unique);
  }
  async update(e) {
    if (!e) throw new Error("Data is missing");
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Folder name is missing");
    const { error: r } = await d(
      c(this, Be),
      pt.putFolderById({
        path: { id: e.unique },
        body: { name: e.name }
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Be),
      pt.deleteFolderById({ path: { id: e } })
    );
  }
}
Be = new WeakMap();
class Zg extends Fe {
  constructor(e) {
    super(e, $u.contextAlias);
  }
}
const $u = new L("FormFolderDetailStore");
class ev extends Ee {
  constructor(e) {
    super(
      e,
      Qg,
      $u
    );
  }
  async isEmpty(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r } = await d(
      this._host,
      pt.getFolderByIdIsEmpty({ path: { id: e } })
    );
    return r;
  }
  async moveFolder(e, r) {
    if (!e) throw new Error("Unique is missing");
    const a = {
      parentId: r
    }, { data: i, error: o } = await d(
      this._host,
      pt.putFolderByIdMove({ path: { id: e }, body: a })
    );
    return o ? { error: o } : { data: i };
  }
}
const tv = "Forms.Repository.Form.Detail", rv = "Forms.Store.Form.Detail", Cu = "Forms.Repository.Folder.Detail", iv = "Forms.Store.Folder.Detail", av = [
  {
    type: "repository",
    alias: tv,
    name: "Form Detail Repository",
    api: Jg
  },
  {
    type: "repository",
    alias: Cu,
    name: "Form Folder Detail Repository",
    api: ev
  }
], ov = [
  {
    type: "store",
    alias: rv,
    name: "Form Detail Store",
    api: Kg
  },
  {
    type: "store",
    alias: iv,
    name: "Form Folder Detail Store",
    api: Zg
  }
], sv = [...av, ...ov];
class nv extends Bn {
  constructor(e) {
    super(e, { getItems: lv, mapper: cv });
  }
}
const lv = (t) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  ee.getItemForm({ query: { id: t } })
), cv = (t) => ({
  unique: t.id,
  name: t.name
});
class uv extends jn {
  constructor(e) {
    super(e, Tu.contextAlias);
  }
}
const Tu = new L("FormsFormItemStore");
class dv extends Yn {
  constructor(e) {
    super(e, nv, Tu);
  }
}
class mv extends jn {
  constructor(e) {
    super(e, Ou.contextAlias);
  }
}
const Ou = new L("FormsFolderItemStore");
class pv extends Bn {
  constructor(e) {
    super(e, { getItems: hv, mapper: fv });
  }
}
const hv = (t) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  pt.getItemFolder({ query: { id: t } })
), fv = (t) => ({
  unique: t.id,
  name: t.name
});
class yv extends Yn {
  constructor(e) {
    super(
      e,
      pv,
      Ou
    );
  }
}
const Pu = "Forms.Repository.Form.Item", xu = "Forms.Repository.Folder.Item", gv = "Forms.Store.Form.Item", vv = "Forms.Store.Folder.Item", _v = [
  {
    type: "repository",
    alias: Pu,
    name: "Forms Form Item Repository",
    api: dv
  },
  {
    type: "repository",
    alias: xu,
    name: "Forms Folder Item Repository",
    api: yv
  }
], Sv = [
  {
    type: "itemStore",
    alias: gv,
    name: "Forms Form Item Store",
    api: uv
  },
  {
    type: "itemStore",
    alias: vv,
    name: "Forms Folder Item Store",
    api: mv
  }
], bv = [..._v, ...Sv], wv = new C(
  "Forms.Modal.FormCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Fv extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      wv,
      {
        data: {
          parent: {
            entityType: this.args.entityType,
            unique: this.args.unique
          }
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Ev = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Create",
    name: "Create Form Entity Action",
    weight: 100,
    api: Fv,
    forEntityTypes: [
      pr,
      me
    ],
    meta: {
      icon: "icon-add",
      label: "Create..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormCreateOptions",
    name: "Form Create Options Modal",
    js: () => import("./form-create-options-modal.element.js")
  }
], $v = [...Ev], Cv = new C(
  "Forms.Modal.FormCopyOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Tv extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Cv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Ov = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Copy",
    name: "Copy Form Entity Action",
    weight: 80,
    api: Tv,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-documents",
      label: "Copy..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormCopyOptions",
    name: "Form Copy Options Modal",
    js: () => import("./form-copy-options-modal.element.js")
  }
], Pv = [...Ov], xv = new C(
  "Forms.Modal.FormCopyWorkflowsOptions",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
class Mv extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      xv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Dv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.CopyWorkflows",
    name: "Copy Form Workflows Entity Action",
    weight: 75,
    api: Mv,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-documents",
      label: "Copy Workflows..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormCopyWorkflowsOptions",
    name: "Form Copy Workflows Options Modal",
    js: () => import("./form-copy-workflows-options-modal.element.js")
  }
], Av = [...Dv], kv = new C(
  "Forms.Modal.FormDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Rv extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      kv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Iv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Delete",
    name: "Delete Form Entity Action",
    weight: 50,
    api: Rv,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormDeleteConfirm",
    name: "Form Delete Confirm Modal",
    js: () => import("./form-delete-confirm-modal.element.js")
  }
], Uv = [...Iv], zv = new C(
  "Forms.Modal.FolderDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Wv extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      zv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Lv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Folder.Delete",
    name: "Delete Folder Entity Action",
    weight: 50,
    api: Wv,
    forEntityTypes: [me],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FolderDeleteConfirm",
    name: "Folder Delete Confirm Modal",
    js: () => import("./folder-delete-confirm-modal.element.js")
  }
], Nv = [...Lv], Vv = new C(
  "Forms.Modal.FormMoveOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class qv extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Vv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const jv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Move",
    name: "Copy Form Entity Action",
    weight: 90,
    api: qv,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-enter",
      label: "Move..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormMoveOptions",
    name: "Form Move Options Modal",
    js: () => import("./form-move-options-modal.element.js")
  }
], Bv = [...jv], Yv = new C(
  "Forms.Modal.FolderMoveOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Gv extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Yv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Hv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Folder.Move",
    name: "Copy Form Entity Action",
    weight: 90,
    api: Gv,
    forEntityTypes: [me],
    meta: {
      icon: "icon-enter",
      label: "Move..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FolderMoveOptions",
    name: "Folder Move Options Modal",
    js: () => import("./folder-move-options-modal.element.js")
  }
], Kv = [...Hv], Xv = new C("Forms.Modal.ExportForm", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
class Jv extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(this, Xv, {
      data: {
        unique: this.args.unique
      }
    }).onSubmit().catch(() => {
    });
  }
}
const Qv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Export",
    name: "Export Form Entity Action",
    weight: 60,
    api: Jv,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-download-alt",
      label: "Export Form Definition"
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.ExportForm",
    name: "Export Form Modal",
    js: () => import("./form-export-modal.element.js")
  }
], Zv = [...Qv], e_ = new C("Forms.Modal.ImportForm", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
class t_ extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(this, e_, {
      data: {
        unique: this.args.unique
      }
    }).onSubmit().catch(() => {
    });
  }
}
const r_ = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Import",
    name: "Import Form Entity Action",
    weight: 70,
    api: t_,
    forEntityTypes: [
      pr,
      me
    ],
    meta: {
      icon: "icon-page-up",
      label: "Import Form Definition"
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.ImportForm",
    name: "Import Form Modal",
    js: () => import("./form-import-modal.element.js")
  }
], i_ = [...r_], a_ = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Forms.EntityAction.Folder.ReloadChildrenOf",
    name: "Reload Children",
    forEntityTypes: [
      me,
      pr
    ]
  },
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Forms.EntityAction.Folder.Rename",
    name: "Rename Folder",
    weight: 95,
    forEntityTypes: [me],
    meta: {
      folderRepositoryAlias: Cu
    }
  }
], o_ = [
  ...a_,
  ...$v,
  ...Pv,
  ...Av,
  ...Uv,
  ...Nv,
  ...Bv,
  ...Kv,
  ...Zv,
  ...i_
];
var s_ = Object.defineProperty, Mu = (t, e, r, a) => {
  for (var i = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(e, r, i) || i);
  return i && s_(e, r, i), i;
};
class Q extends $e {
  constructor() {
    super(...arguments), this.prevalues = [], this.settings = {};
  }
  getSettingValue(e) {
    return this.settings[e];
  }
}
Mu([
  m({ type: Array })
], Q.prototype, "prevalues");
Mu([
  m()
], Q.prototype, "settings");
var n_ = Object.getOwnPropertyDescriptor, l_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? n_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const c_ = "forms-field-preview-checkbox";
let Ur = class extends Q {
  render() {
    return n`<input type="checkbox" disabled tabindex="-1" />`;
  }
};
Ur = l_([
  p(c_)
], Ur);
const u_ = Ur, d_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewCheckbox() {
    return Ur;
  },
  default: u_
}, Symbol.toStringTag, { value: "Module" }));
var m_ = Object.getOwnPropertyDescriptor, p_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? m_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const h_ = "forms-field-preview-checkboxlist";
let ar = class extends Q {
  render() {
    return n`
      ${_i(
      this.prevalues.slice(0, 5),
      (t) => n`
          <div
            class=${this.getSettingValue("DisplayLayout") ? this.getSettingValue("DisplayLayout").toLowerCase() : ""}
          >
            <span>
              <input type="checkbox" disabled tabindex="-1" />
              <label>${t.caption || t.value}</label>
            </span>
          </div>
        `
    )}
      ${h(
      this.prevalues.length > 5,
      () => n` <span class="ellipsis">...</span> `
    )}
    `;
  }
};
ar.styles = [
  Ca,
  O`
      .horizontal {
        display: inline;
      }

      .horizontal .span {
        margin-right: 10px;
      }

      .ellipsis {
        margin-left: 24px;
      }
    `
];
ar = p_([
  p(h_)
], ar);
const f_ = ar, y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewCheckboxList() {
    return ar;
  },
  default: f_
}, Symbol.toStringTag, { value: "Module" }));
var g_ = Object.getOwnPropertyDescriptor, v_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? g_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const __ = "forms-field-preview-dataconsent";
let zr = class extends Q {
  render() {
    return n`<input type="checkbox" disabled tabindex="-1" />
      <label>${this.getSettingValue("AcceptCopy")}</label>`;
  }
};
zr = v_([
  p(__)
], zr);
const S_ = zr, b_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewDataConsent() {
    return zr;
  },
  default: S_
}, Symbol.toStringTag, { value: "Module" }));
var w_ = Object.getOwnPropertyDescriptor, F_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? w_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const E_ = "forms-field-preview-datepicker";
let Wr = class extends Q {
  render() {
    return n`<input
        type="text"
        autocomplete="off"
        disabled
        readonly
        placeholder="${this.getSettingValue("Placeholder")}"
      />
      <button class="btn" disabled>
        <uui-icon name="icon-calendar"></uui-icon>
      </button>`;
  }
};
Wr = F_([
  p(E_)
], Wr);
const $_ = Wr, C_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewDatePicker() {
    return Wr;
  },
  default: $_
}, Symbol.toStringTag, { value: "Module" }));
var T_ = Object.getOwnPropertyDescriptor, O_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? T_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const P_ = "forms-field-preview-dropdown";
let Lr = class extends Q {
  render() {
    return n`<select tabindex="-1" style="opacity: 0.5; min-width: 300px">
      <option>${this.getSettingValue("SelectPrompt")}</option>
      ${_i(
      this.prevalues,
      (t) => n`<option>${t.caption || t.value}</option>`
    )}
    </select>`;
  }
};
Lr = O_([
  p(P_)
], Lr);
const x_ = Lr, M_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewDropdown() {
    return Lr;
  },
  default: x_
}, Symbol.toStringTag, { value: "Module" }));
var D_ = Object.getOwnPropertyDescriptor, A_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? D_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const k_ = "forms-field-preview-fileupload";
let Nr = class extends Q {
  render() {
    return n`<input disabled type="file" />
      <p>
        <strong>Current file(s):</strong>
      </p>`;
  }
};
Nr = A_([
  p(k_)
], Nr);
const R_ = Nr, I_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewFileUpload() {
    return Nr;
  },
  default: R_
}, Symbol.toStringTag, { value: "Module" }));
var U_ = Object.getOwnPropertyDescriptor, z_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? U_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const W_ = "forms-field-preview-hiddenfield";
let Vr = class extends Q {
  render() {
    return n`<input disabled type="hidden" />`;
  }
};
Vr = z_([
  p(W_)
], Vr);
const L_ = Vr, N_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewHiddenField() {
    return Vr;
  },
  default: L_
}, Symbol.toStringTag, { value: "Module" }));
var V_ = Object.getOwnPropertyDescriptor, q_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? V_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const j_ = "forms-field-preview-password";
let qr = class extends Q {
  render() {
    return n`<input
      type="password"
      readonly
      disabled
      tabindex="-1"
      placeholder=${this.getSettingValue("Placeholder")}
    />`;
  }
};
qr = q_([
  p(j_)
], qr);
const B_ = qr, Y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewPassword() {
    return qr;
  },
  default: B_
}, Symbol.toStringTag, { value: "Module" }));
var G_ = Object.getOwnPropertyDescriptor, H_ = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? G_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const K_ = "forms-field-preview-radiobuttonlist";
let or = class extends Q {
  render() {
    return n`
      ${_i(
      this.prevalues.slice(0, 5),
      (t) => n`
          <div
            class=${this.getSettingValue("DisplayLayout") ? this.getSettingValue("DisplayLayout").toLowerCase() : ""}
          >
            <span>
              <input type="radio" disabled tabindex="-1" />
              <label>${t.caption || t.value}</label>
            </span>
          </div>
        `
    )}
      ${h(
      this.prevalues.length > 5,
      () => n` <span class="ellipsis">...</span> `
    )}
    `;
  }
};
or.styles = [
  Ca,
  O`
      .horizontal {
        display: inline;
      }

      .horizontal .span {
        margin-right: 10px;
      }

      .ellipsis {
        margin-left: 24px;
      }
    `
];
or = H_([
  p(K_)
], or);
const X_ = or, J_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewRadioButtonList() {
    return or;
  },
  default: X_
}, Symbol.toStringTag, { value: "Module" }));
var vn = Object.freeze, Q_ = Object.defineProperty, Z_ = Object.getOwnPropertyDescriptor, eS = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Z_(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, tS = (t, e) => vn(Q_(t, "raw", { value: vn(t.slice()) })), _n;
const rS = "forms-field-preview-recaptchav2";
let jr = class extends Q {
  render() {
    return n(_n || (_n = tS([`<script
      src="https://www.google.com/recaptcha/api.js"
      async
      defer
      type="application/javascript"
    ><\/script>`])));
  }
};
jr = eS([
  p(rS)
], jr);
const iS = jr, aS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewRecaptchaV2() {
    return jr;
  },
  default: iS
}, Symbol.toStringTag, { value: "Module" }));
var Sn = Object.freeze, oS = Object.defineProperty, sS = Object.getOwnPropertyDescriptor, nS = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? sS(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, lS = (t, e) => Sn(oS(t, "raw", { value: Sn(t.slice()) })), bn;
const cS = "forms-field-preview-recaptchav3";
let Br = class extends Q {
  render() {
    return n(bn || (bn = lS([`<script
      src="https://www.google.com/recaptcha/api.js"
      async
      defer
      type="application/javascript"
    ><\/script>`])));
  }
};
Br = nS([
  p(cS)
], Br);
const uS = Br, dS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewRecaptchaV3() {
    return Br;
  },
  default: uS
}, Symbol.toStringTag, { value: "Module" }));
var mS = Object.getOwnPropertyDescriptor, pS = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? mS(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const hS = "forms-field-preview-richtext";
let Yr = class extends Q {
  render() {
    return jo(this.getSettingValue("Html"));
  }
};
Yr = pS([
  p(hS)
], Yr);
const fS = Yr, yS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewRichtext() {
    return Yr;
  },
  default: fS
}, Symbol.toStringTag, { value: "Module" }));
var gS = Object.getOwnPropertyDescriptor, vS = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? gS(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const _S = "forms-field-preview-titleanddescription";
let Gr = class extends Q {
  render() {
    return n` <h3>
        ${this.getSettingValue("Headline") ?? "Sample headline"}
      </h3>
      <div>${this.getSettingValue("BodyText") ?? "Sample body text"}</div>`;
  }
};
Gr = vS([
  p(_S)
], Gr);
const SS = Gr, bS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewTitleAndDescription() {
    return Gr;
  },
  default: SS
}, Symbol.toStringTag, { value: "Module" }));
var wS = Object.getOwnPropertyDescriptor, FS = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? wS(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const ES = "forms-field-preview-text-area";
let Hr = class extends Q {
  render() {
    return n`<textarea
      rows="5"
      readonly
      disabled
      tabindex="-1"
      placeholder=${this.getSettingValue("Placeholder")}
    >
${this.getSettingValue("DefaultValue")}</textarea
    >`;
  }
};
Hr = FS([
  p(ES)
], Hr);
const $S = Hr, CS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewTextArea() {
    return Hr;
  },
  default: $S
}, Symbol.toStringTag, { value: "Module" }));
var TS = Object.getOwnPropertyDescriptor, OS = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? TS(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const PS = "forms-field-preview-text-box";
let Kr = class extends Q {
  render() {
    return n`<input
      type="${this.getSettingValue("FieldType") || "text"}"
      readonly
      disabled
      tabindex="-1"
      placeholder="${this.getSettingValue("Placeholder")}"
      value="${this.getSettingValue("DefaultValue")}"
    />`;
  }
};
Kr = OS([
  p(PS)
], Kr);
const xS = Kr, MS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewTextBox() {
    return Kr;
  },
  default: xS
}, Symbol.toStringTag, { value: "Module" })), DS = [
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.TextBox",
    name: "Text Box Field Preview",
    api: Kr,
    element: () => Promise.resolve().then(() => MS)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.TextArea",
    name: "Text Area Field Preview",
    api: Hr,
    element: () => Promise.resolve().then(() => CS)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.Checkbox",
    name: "Checkbox Field Preview",
    api: Ur,
    element: () => Promise.resolve().then(() => d_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.DataConsent",
    name: "Data Consent Field Preview",
    api: zr,
    element: () => Promise.resolve().then(() => b_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.DatePicker",
    name: "Date Picker Field Preview",
    api: Wr,
    element: () => Promise.resolve().then(() => C_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.Dropdown",
    name: "Dropdown Field Preview",
    api: Lr,
    element: () => Promise.resolve().then(() => M_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.FileUpload",
    name: "File Upload Field Preview",
    api: Nr,
    element: () => Promise.resolve().then(() => I_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.HiddenField",
    name: "Hidden Field Preview",
    api: Vr,
    element: () => Promise.resolve().then(() => N_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.PasswordField",
    name: "Password Field Preview",
    api: qr,
    element: () => Promise.resolve().then(() => Y_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.RadioButtonList",
    name: "Radio Button List Field Preview",
    api: or,
    element: () => Promise.resolve().then(() => J_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.CheckboxList",
    name: "Checkbox List Field Preview",
    api: ar,
    element: () => Promise.resolve().then(() => y_)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.RecaptchaV2",
    name: "Recaptcha V2 Field Preview",
    api: jr,
    element: () => Promise.resolve().then(() => aS)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.RecaptchaV3",
    name: "Recaptcha V3 Field Preview",
    api: Br,
    element: () => Promise.resolve().then(() => dS)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.TitleAndDescription",
    name: "Title And Description Field Preview",
    api: Gr,
    element: () => Promise.resolve().then(() => bS)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.Richtext",
    name: "Richtext Field Preview",
    api: Yr,
    element: () => Promise.resolve().then(() => yS)
  }
], AS = [
  ...sv,
  ...bv
];
var Qt, bt;
class kS extends Nn {
  constructor(r) {
    super(r);
    f(this, Qt);
    f(this, bt);
    y(this, Qt, r);
  }
  async getCollection(r) {
    var D;
    const a = await this.getContext(Re);
    if (!a) throw new Error("Form workspace context not found");
    if (y(this, bt, await Bo(
      a.unique.pipe(Ym((P) => !!P))
    )), !c(this, bt))
      return {
        data: {
          total: 0,
          items: []
        }
      };
    if (location.href.includes(
      `modal/${tp(Hh.toString())}`
    )) {
      const P = location.href.split("/").pop(), z = ((D = await d(
        this,
        Ze.getFormByFormIdRecordPageNumber({
          path: {
            formId: c(this, bt)
          },
          query: {
            recordId: P,
            skip: 0,
            take: r.take,
            sortBy: "created",
            sortOrder: Xo.DESCENDING
          }
        })
      )) == null ? void 0 : D.data) ?? 1;
      r = {
        ...r,
        skip: (z - 1) * r.take
      };
      const Z = await this.getContext(
        Ua
      );
      Z == null || Z.pagination.setCurrentPageNumber(z);
    }
    const { data: i, error: o } = await d(
      c(this, Qt),
      Ze.getFormByFormIdRecord({
        path: {
          formId: c(this, bt)
        },
        query: {
          ...r
        }
      })
    );
    if (o)
      return { error: o };
    const { schema: s, results: l, totalNumberOfResults: g } = i, S = l.map(
      (P) => {
        var Z, _;
        return {
          unique: P.uniqueId,
          entityType: ho,
          id: P.id,
          created: new Date(P.created),
          updated: new Date(P.updated),
          state: P.state,
          pageName: (Z = P.umbracoPage) == null ? void 0 : Z.name,
          documentUnique: (_ = P.umbracoPage) == null ? void 0 : _.unique,
          fields: P.fields,
          member: P.member
        };
      }
    );
    return S.unshift({
      entityType: ho,
      schema: s,
      unique: "",
      fields: [],
      id: 0,
      created: /* @__PURE__ */ new Date(),
      updated: /* @__PURE__ */ new Date(),
      state: "",
      pageName: "",
      documentUnique: ""
    }), {
      data: {
        items: S,
        total: g
      }
    };
  }
  async execute(r, a, i) {
    return await d(
      c(this, Qt),
      Ze.postFormByFormIdRecordActionsByActionIdExecute({
        path: { formId: r, actionId: i },
        body: { recordKeys: a }
      })
    );
  }
}
Qt = new WeakMap(), bt = new WeakMap();
var Zt;
class wo {
  constructor(e) {
    f(this, Zt);
    y(this, Zt, new kS(e));
  }
  async requestCollection(e = {
    skip: 0,
    take: 10,
    formId: ""
  }) {
    return e.sortBy || (e = {
      ...e,
      sortBy: "created",
      sortOrder: Xo.DESCENDING
    }), c(this, Zt).getCollection(e);
  }
  async execute(e, r, a) {
    return c(this, Zt).execute(e, r, a);
  }
  destroy() {
  }
}
Zt = new WeakMap();
const RS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsFormEntryCollectionRepository: wo,
  default: wo
}, Symbol.toStringTag, { value: "Module" }));
var er;
class IS {
  constructor(e) {
    f(this, er);
    y(this, er, e);
  }
  async getCollection(e) {
    const { data: r, error: a } = await d(
      c(this, er),
      Ze.getFormByFormIdRecordByRecordIdWorkflowAuditTrail({
        path: e
      })
    );
    if (a)
      return { error: a };
    const i = r.map(
      (o) => ({
        entityType: "forms-record-workflow-audit-entry",
        unique: o.id.toString(),
        workflowKey: o.workflowKey,
        name: o.name,
        typeName: o.typeName,
        executedOn: new Date(o.executedOn),
        executionStage: o.executionStage,
        result: o.result
      })
    );
    return { data: { items: i, total: i.length } };
  }
  async executeWorkflow(e, r, a) {
    await d(
      c(this, er),
      Ze.postFormByFormIdRecordByRecordIdWorkflowByWorkflowIdRetry({
        path: {
          formId: e,
          recordId: r,
          workflowId: a
        }
      })
    );
  }
}
er = new WeakMap();
var tr;
class wn {
  constructor(e) {
    f(this, tr);
    y(this, tr, new IS(e));
  }
  async requestCollection(e = {
    formId: "",
    recordId: ""
  }) {
    return c(this, tr).getCollection(e);
  }
  async executeWorkflow(e, r, a) {
    await c(this, tr).executeWorkflow(e, r, a);
  }
  destroy() {
  }
}
tr = new WeakMap();
const US = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsFormEntryWorkflowAuditCollectionRepository: wn,
  default: wn
}, Symbol.toStringTag, { value: "Module" }));
var di;
class zS {
  constructor(e) {
    f(this, di);
    y(this, di, e);
  }
  async getCollection(e) {
    const { data: r, error: a } = await d(
      c(this, di),
      Ze.getFormByFormIdRecordByRecordIdAuditTrail({ path: e })
    );
    if (a)
      return { error: a };
    const i = r.map(
      (o) => ({
        entityType: "forms-record-audit-entry",
        unique: o.id.toString(),
        updatedBy: o.updatedBy,
        updatedOn: new Date(o.updatedOn)
      })
    );
    return {
      data: {
        items: i,
        total: i.length
      }
    };
  }
}
di = new WeakMap();
var mi;
class Fn {
  constructor(e) {
    f(this, mi);
    y(this, mi, new zS(e));
  }
  async requestCollection(e = {
    formId: "",
    recordId: ""
  }) {
    return c(this, mi).getCollection(e);
  }
  destroy() {
  }
}
mi = new WeakMap();
const WS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsFormEntryRecordAuditCollectionRepository: Fn,
  default: Fn
}, Symbol.toStringTag, { value: "Module" })), Du = "Forms.Repository.Entry.Collection", LS = "Forms.Repository.EntryWorkflowAudit.Collection", NS = "Forms.Repository.EntryRecordAudit.Collection", VS = [
  {
    type: "repository",
    alias: Du,
    name: "Entry Collection Repository",
    api: () => Promise.resolve().then(() => RS)
  },
  {
    type: "repository",
    alias: LS,
    name: "Entry Workflow Audit Collection Repository",
    api: () => Promise.resolve().then(() => US)
  },
  {
    type: "repository",
    alias: NS,
    name: "Entry Record Audit Collection Repository",
    api: () => Promise.resolve().then(() => WS)
  }
], qS = [...VS], Au = "Forms.CollectionView.Entry.Table", jS = {
  type: "collectionView",
  alias: Au,
  name: "Form Entries Table Collection View",
  js: () => import("./form-entry-table-collection-view.element.js"),
  meta: {
    label: "Table",
    icon: "icon-list",
    pathName: "table"
  },
  conditions: [
    {
      alias: Yo,
      match: "Forms.Collection.Entry"
    }
  ]
}, BS = [jS];
class YS extends Nn {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    const r = await this.getContext(
      Re
    );
    if (!r) throw new Error("Form workspace context not found");
    await e.open(this, Xh, {
      data: {
        unique: r.getUnique()
      }
    }).onSubmit().catch(() => {
    });
  }
}
const GS = {
  type: "collectionAction",
  kind: "button",
  name: "Export Records Collection Action",
  alias: "Forms.CollectionAction.Records.Export",
  api: YS,
  weight: 200,
  meta: {
    label: "Export"
  },
  conditions: [
    {
      alias: Yo,
      match: "Forms.Collection.Entry"
    }
  ]
}, HS = [GS];
var pi, Fo;
class KS extends rp {
  constructor(r) {
    super(r, Au);
    f(this, pi);
  }
  oneMonthAgo() {
    const r = /* @__PURE__ */ new Date(), a = new Date(r.setMonth(r.getMonth() - 1));
    return w(this, pi, Fo).call(this, a);
  }
  today() {
    return w(this, pi, Fo).call(this, /* @__PURE__ */ new Date());
  }
}
pi = new WeakSet(), Fo = function(r) {
  const a = String(r.getDate()).padStart(2, "0"), i = String(r.getMonth() + 1).padStart(2, "0");
  return r.getFullYear() + "-" + i + "-" + a;
};
const ku = "Forms.Collection.Entry", XS = {
  type: "collection",
  alias: ku,
  name: "Form Entries Collection",
  api: KS,
  element: () => import("./form-entry-collection.element.js"),
  meta: {
    repositoryAlias: Du
  }
}, JS = [
  XS,
  ...BS,
  ...qS,
  ...HS
];
var hi, fi, yi;
class Ss extends ap {
  constructor(r, a, i) {
    super(r, a);
    f(this, hi);
    f(this, fi);
    f(this, yi, "");
    this.consumeContext(Re, async (o) => {
      y(this, hi, o);
    }), this.consumeContext(ip, (o) => {
      y(this, fi, o);
    }), y(this, yi, i);
  }
  async execute() {
    await new wo(this._host).execute(
      c(this, hi).getUnique(),
      this.selection,
      c(this, yi)
    ), c(this, fi).requestCollection();
  }
}
hi = new WeakMap(), fi = new WeakMap(), yi = new WeakMap();
const QS = "cb126b70-9011-11df-a4ee-0800200c9a66";
class ZS extends Ss {
  constructor(e, r) {
    super(e, r, QS);
  }
}
const eb = "cb126b79-9011-11df-a4ee-0800200c9a66";
class tb extends Ss {
  constructor(e, r) {
    super(e, r, eb);
  }
}
const rb = "84cd75a7-d3d9-4551-9c1a-3f478b4ec9ed";
class ib extends Ss {
  constructor(e, r) {
    super(e, r, rb);
  }
}
const ab = [
  {
    name: "Approve",
    weight: 100,
    api: tb,
    conditions: [
      {
        alias: bo,
        match: (t) => t.manualApproval
      }
    ]
  },
  {
    name: "Reject",
    weight: 90,
    api: ib,
    conditions: [
      {
        alias: bo,
        match: (t) => t.manualApproval
      }
    ]
  },
  {
    name: "Delete",
    weight: 10,
    api: ZS,
    conditions: [
      {
        alias: de,
        match: (t) => t.userSecurity.deleteEntries
      }
    ]
  }
], ob = ab.map(
  (t) => ({
    type: "entityBulkAction",
    alias: `Forms.EntityBulkAction.Entry.${t.name}`,
    name: `${t.name} Form Entry Bulk Action`,
    weight: t.weight,
    api: t.api,
    meta: {
      label: t.name
    },
    forEntityTypes: [ho],
    conditions: [
      {
        alias: Yo,
        match: ku
      },
      ...t.conditions ?? []
    ]
  })
), sb = [...ob], Ne = "Forms.Workspace.Form", nb = {
  type: "workspace",
  kind: "routable",
  alias: Ne,
  name: "Form Workspace",
  api: () => import("./form-workspace.context.js"),
  meta: {
    entityType: oe
  }
}, lb = [
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Design",
    name: "Form Workspace Design View",
    element: () => import("./workspace-view-form-design.element.js"),
    weight: 50,
    meta: {
      label: "Design",
      pathname: "design",
      icon: "document"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ne
      },
      {
        alias: de,
        match: (t) => t.userSecurity.manageForms
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Settings",
    name: "Form Workspace Settings View",
    element: () => import("./workspace-view-form-settings.element.js"),
    weight: 40,
    meta: {
      label: "Settings",
      pathname: "settings",
      icon: "settings"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ne
      },
      {
        alias: de,
        match: (t) => t.userSecurity.manageForms
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Advanced",
    name: "Form Workspace Advanced View",
    element: () => import("./workspace-view-form-advanced.element.js"),
    weight: 30,
    meta: {
      label: "Advanced",
      pathname: "advanced",
      icon: "code"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ne
      },
      {
        alias: de,
        match: (t) => t.userSecurity.manageForms
      },
      {
        alias: Jo,
        match: (t) => t.enableAdvancedValidationRules
      }
      // This is necessary as ConditionType is defined in core, and we don't have the ability to extend it.
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Entries",
    name: "Form Workspace Entries View",
    element: () => import("./workspace-view-form-entries.element.js"),
    weight: 20,
    meta: {
      label: "Entries",
      pathname: "entries",
      icon: "icon-categories"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ne
      },
      {
        alias: de,
        match: (t) => t.userSecurity.viewEntries
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Info",
    name: "Form Workspace Info View",
    element: () => import("./workspace-view-form-info.element.js"),
    weight: 10,
    meta: {
      label: "Info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ne
      }
    ]
  }
], cb = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.Form.Save",
    name: "Save Form Workspace Action",
    weight: 80,
    api: Pr,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ne
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.Form.SaveAndPreview",
    name: "Save And Preview Form Workspace Action",
    weight: 90,
    api: () => import("./save-and-preview.action.js"),
    meta: {
      label: "#buttons_saveAndPreview"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ne
      }
    ]
  }
], ub = [
  nb,
  ...lb,
  ...cb,
  ...sb
], db = [...JS], mb = [
  ...Hg,
  ...o_,
  ...DS,
  ...Lh,
  ...AS,
  ...ub,
  ...db
], fr = "forms-prevalue", Ti = "forms-prevalue-root";
class pb extends Fa {
  constructor(e) {
    super(e, {
      getRootItems: Ru,
      getChildrenOf: hb,
      getAncestorsOf: fb,
      mapper: yb
    });
  }
}
const Ru = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  ht.getTreePrevalueSourceRoot()
), hb = (t) => {
  if (t.parent.unique === null)
    return Ru();
  throw new Error("Not supported for the data source tree");
}, fb = () => {
  throw new Error("Not supported for the data source tree");
}, yb = (t) => ({
  unique: t.id,
  parent: {
    unique: null,
    entityType: Ti
  },
  name: t.name,
  entityType: fr,
  isFolder: t.isFolder,
  hasChildren: t.hasChildren
});
class gb extends Ea {
  constructor(e) {
    super(e, Iu.contextAlias);
  }
}
const Iu = new L(
  "FormsPrevalueSourceTreeStore"
);
class vb extends $a {
  constructor(e) {
    super(
      e,
      pb,
      Iu
    );
  }
  async requestTreeRoot() {
    return { data: {
      unique: null,
      entityType: Ti,
      name: "Prevalue Sources",
      hasChildren: !0,
      isFolder: !0
    } };
  }
}
const _b = {
  type: "menuItem",
  kind: "tree",
  alias: "Forms.MenuItem.PrevalueSource",
  name: "Forms Prevalue Source Menu Item",
  weight: 200,
  meta: {
    label: "Prevalue Sources",
    entityType: fr,
    treeAlias: "Forms.Tree.PrevalueSources",
    menus: [Ot]
  }
}, Sb = [_b], Uu = "Forms.Repository.PrevalueSources.Tree", bb = "Forms.Store.PrevalueSources.Tree", wb = "Forms.Tree.PrevalueSources", Fb = {
  type: "repository",
  alias: Uu,
  name: "Prevalue Source Tree Repository",
  api: vb
}, Eb = {
  type: "treeStore",
  alias: bb,
  name: "Prevalue Source Tree Store",
  api: gb
}, $b = {
  type: "tree",
  kind: "default",
  alias: wb,
  name: "Prevalue Source Tree",
  meta: {
    repositoryAlias: Uu
  },
  conditions: [
    {
      alias: de,
      match: (t) => t.userSecurity.managePreValueSources
    }
  ]
}, Cb = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.PrevalueSource",
  name: "Prevalue Source Tree Item",
  forEntityTypes: [
    Ti,
    fr
  ]
}, Tb = [
  Fb,
  Eb,
  $b,
  Cb,
  ...Sb
], Ob = "Forms.Repository.PrevalueSourceCollection", Pb = {
  type: "repository",
  alias: Ob,
  name: "Prevalue Source Collection Repository",
  api: () => import("./prevaluesource-collection.repository.js")
}, xb = [Pb];
class Mb extends Fe {
  constructor(e) {
    super(e, zu.contextAlias);
  }
}
const zu = new L(
  "PrevalueSourceDetailStore"
);
var Ye;
class Db {
  constructor(e) {
    f(this, Ye);
    y(this, Ye, e);
  }
  /**
   * Creates a new prevalue source scaffold
   * @param {(string | null)} parentUnique
   * @return { FieldPreValueSource }
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async createScaffold() {
    return { data: {
      entityType: fr,
      unique: K.new(),
      id: K.new(),
      created: "",
      name: "",
      settings: {},
      fieldPreValueSourceTypeId: "",
      cachePrevaluesFor: "",
      updated: ""
    } };
  }
  /**
   * Fetches a prevalue source with the given id from the server
   * @param {string} unique
   * @return {FieldPreValueSource}
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, Ye),
      ht.getPrevalueSourceById({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  /**
   * Inserts a new prevalue source on the server
   * @param {FormDetailModel} form
   * @return {*}
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Prevalue source is missing");
    if (!e.unique)
      throw new Error("Prevalue source unique is missing");
    const { error: r } = await d(
      c(this, Ye),
      ht.postPrevalueSource({ body: e })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Updates a prevalue source on the server
   * @param {FormDetailModel} Form
   * @return {*}
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, Ye),
      ht.putPrevalueSourceById({
        path: { id: e.id },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a prevalue source on the server
   * @param {string} unique
   * @return {*}
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Ye),
      ht.deletePrevalueSourceById({ path: { id: e } })
    );
  }
}
Ye = new WeakMap();
class Wu extends Ee {
  constructor(e) {
    super(
      e,
      Db,
      zu
    );
  }
  async requestPrevalueSourceScaffold() {
    const { data: e, error: r } = await d(
      this._host,
      ht.getPrevalueSourceScaffold()
    );
    return r ? { error: r } : { data: e };
  }
  async requestPrevalues(e, r, a) {
    const { data: i, error: o } = await d(
      this._host,
      ht.getPrevalueSourceByIdValues({
        path: { id: e },
        query: { formId: r, fieldId: a }
      })
    );
    return o ? { error: o } : { data: i };
  }
}
const Ab = "Forms.Repository.PrevalueSource.Detail", kb = "Forms.Store.PrevalueSource.Detail", Rb = {
  type: "repository",
  alias: Ab,
  name: "Prevalue Source Detail Repository",
  api: Wu
}, Ib = {
  type: "store",
  alias: kb,
  name: "PRevalue Source Detail Store",
  api: Mb
}, Ub = [Rb, Ib], zb = [...xb, ...Ub], Wb = new C(
  "Forms.Modal.PrevalueSourceCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Lb extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Wb,
      {
        data: {}
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Nb = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.PrevalueSource.Create",
    name: "Create Prevalue Source Entity Action",
    weight: 1e3,
    api: Lb,
    forEntityTypes: [Ti],
    meta: {
      icon: "icon-add",
      label: "Create..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.PrevalueSourceCreateOptions",
    name: "Prevalue Source Create Options Modal",
    js: () => import("./prevaluesource-create-options-modal.element.js")
  }
], Vb = [...Nb], qb = new C(
  "Forms.Modal.PrevalueSourceDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class jb extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      qb,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Bb = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.PrevalueSource.Delete",
    name: "Delete Form Entity Action",
    weight: 100,
    api: jb,
    forEntityTypes: [fr],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.PrevalueSourceDeleteConfirm",
    name: "Prevalue Source Delete Confirm Modal",
    js: () => import("./prevaluesource-delete-confirm-modal.element.js")
  }
], Yb = [...Bb], Gb = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Forms.EntityAction.PrevalueSource.ReloadChildrenOf",
    name: "Reload Children",
    forEntityTypes: [Ti]
  }
], Hb = [
  ...Gb,
  ...Vb,
  ...Yb
], na = "Forms.Workspace.PrevalueSource", Kb = {
  type: "workspace",
  kind: "routable",
  alias: na,
  name: "Prevalue Source Workspace",
  api: () => import("./prevaluesource-workspace.context.js"),
  meta: {
    entityType: fr
  }
}, Xb = [
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.PrevalueSource.Design",
    name: "Form Workspace Design View",
    element: () => import("./workspace-view-prevaluesource-design.element.js"),
    weight: 90,
    meta: {
      label: "Design",
      pathname: "design",
      icon: "document"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: na
      },
      {
        alias: de,
        match: (t) => t.userSecurity.managePreValueSources
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.PrevalueSource.Info",
    name: "Form Workspace Info View",
    element: () => import("./workspace-view-prevaluesource-info.element.js"),
    weight: 90,
    meta: {
      label: "Info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: na
      },
      {
        alias: de,
        match: (t) => t.userSecurity.managePreValueSources
      }
    ]
  }
], Jb = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.PrevalueSource.Save",
    name: "Save Prevalue Source Workspace Action",
    api: Pr,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: na
      }
    ]
  }
], Qb = [Kb, ...Xb, ...Jb], Zb = [
  ...Tb,
  ...zb,
  ...Hb,
  ...Qb
], yr = "forms-security-user", Oi = "forms-security-user-group", za = "forms-security-user-folder", bs = "forms-security-user-group-folder", ws = "forms-security-root", ew = new C(
  "Forms.Modal.UserSecurityCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class tw extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      ew,
      {
        data: {}
      }
    ).onSubmit().catch(() => {
    });
  }
}
const rw = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Security.User.Create",
    name: "Create User Security Record Entity Action",
    weight: 1e3,
    api: tw,
    forEntityTypes: [za],
    meta: {
      icon: "icon-add",
      label: "Create..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.UserSecurityCreateOptions",
    name: "User Security Create Options Modal",
    js: () => import("./user-security-create-options-modal.element.js")
  }
], iw = [...rw], aw = new C(
  "Forms.Modal.UserSecurityDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class ow extends ie {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      aw,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const sw = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Security.User.Delete",
    name: "Delete Form Entity Action",
    weight: 100,
    api: ow,
    forEntityTypes: [yr],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    },
    conditions: [
      {
        alias: Jo,
        match: (t) => t.manageSecurityWithUserGroups
      }
      // This is necessary as ConditionType is defined in core, and we don't have the ability to extend it.
    ]
  },
  {
    type: "modal",
    alias: "Forms.Modal.UserSecurityDeleteConfirm",
    name: "User Security Delete Confirm Modal",
    js: () => import("./user-security-delete-confirm-modal.element.js")
  }
], nw = [...sw], lw = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Forms.EntityAction.Security.ReloadChildrenOf",
    name: "Reload Children",
    forEntityTypes: [
      ws,
      za,
      bs
    ]
  }
], cw = [
  ...lw,
  ...iw,
  ...nw
];
class uw extends Fe {
  constructor(e) {
    super(e, Lu.contextAlias);
  }
}
const Lu = new L(
  "FormsSecurityUserDetailStore"
);
var Ge;
class dw {
  constructor(e) {
    f(this, Ge);
    y(this, Ge, e);
  }
  async createScaffold(e = {}) {
    const r = e.unique ? e.unique : K.new();
    return { data: {
      entityType: yr,
      unique: r,
      name: "",
      key: r,
      userSecurity: {
        manageDataSources: !1,
        managePreValueSources: !1,
        manageWorkflows: !1,
        manageForms: !1,
        viewEntries: !1,
        editEntries: !1,
        deleteEntries: !1,
        user: ""
      },
      startFolderIds: [],
      formsSecurity: []
    } };
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Ge),
      ne.getSecurityUserByIdFormSecurity({ path: { id: e } })
    );
  }
  async create(e) {
    if (!e) throw new Error("Security item is missing");
    if (!e.unique) throw new Error("Security item unique is missing");
    const { error: r } = await d(
      c(this, Ge),
      ne.postSecurityUserByIdFormSecurity({
        path: { id: e.unique },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, Ge),
      ne.putSecurityUserByIdFormSecurity({
        path: { id: e.unique },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Ge),
      ne.deleteSecurityUserByIdFormSecurity({
        path: { id: e }
      })
    );
  }
}
Ge = new WeakMap();
class mw extends Ee {
  constructor(e) {
    super(
      e,
      dw,
      Lu
    );
  }
  async requestUsersToAssign() {
    return await d(
      this,
      ne.getSecurityUserUsersToAssign()
    );
  }
}
const pw = "Forms.Repository.Security.User.Detail", hw = "Forms.Store.Security.User.Detail", fw = {
  type: "repository",
  alias: pw,
  name: "Form User Source Detail Repository",
  api: mw
}, yw = {
  type: "store",
  alias: hw,
  name: "Form User Security Detail Store",
  api: uw
}, gw = [fw, yw];
class vw extends Fe {
  constructor(e) {
    super(e, Nu.contextAlias);
  }
}
const Nu = new L(
  "FormsSecurityUserGroupDetailStore"
);
var He;
class _w {
  constructor(e) {
    f(this, He);
    y(this, He, e);
  }
  async createScaffold() {
    return { data: {
      entityType: Oi,
      unique: K.new(),
      name: "",
      key: "",
      userGroupSecurity: {
        manageDataSources: !1,
        managePreValueSources: !1,
        manageWorkflows: !1,
        manageForms: !1,
        viewEntries: !1,
        editEntries: !1,
        deleteEntries: !1,
        userGroupId: 0
      },
      startFolderIds: [],
      formsSecurity: []
    } };
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, He),
      ne.getSecurityUserGroupByIdFormSecurity({
        path: { id: e }
      })
    );
  }
  async create(e) {
    if (!e) throw new Error("Security item is missing");
    if (!e.unique) throw new Error("Security item unique is missing");
    const { error: r } = await d(
      c(this, He),
      ne.postSecurityUserGroupByIdFormSecurity({
        path: { id: e.unique },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, He),
      ne.putSecurityUserGroupByIdFormSecurity({
        path: { id: e.unique },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, He),
      ne.deleteSecurityUserGroupByIdFormSecurity({
        path: { id: e }
      })
    );
  }
}
He = new WeakMap();
class Sw extends Ee {
  constructor(e) {
    super(
      e,
      _w,
      Nu
    );
  }
}
const bw = "Forms.Repository.Security.UserGroup.Detail", ww = "Forms.Store.Security.UserGroup.Detail", Fw = {
  type: "repository",
  alias: bw,
  name: "Form User Group Source Detail Repository",
  api: Sw
}, Ew = {
  type: "store",
  alias: ww,
  name: "Form User Group Security Detail Store",
  api: vw
}, $w = [Fw, Ew], Cw = [...gw, ...$w];
class Tw extends Fa {
  constructor(e) {
    super(e, {
      getRootItems: Vu,
      getChildrenOf: Ow,
      getAncestorsOf: Pw,
      mapper: xw
    });
  }
}
const Vu = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  ne.getTreeSecurityRoot()
), Ow = (t) => t.parent.unique === null ? Vu() : (
  // eslint-disable-next-line local-rules/no-direct-api-import
  ne.getTreeSecurityChildrenByParentId({
    path: { parentId: t.parent.unique }
  })
), Pw = () => {
  throw new Error("Not supported for the security tree");
}, xw = (t) => {
  var e;
  return {
    unique: t.id,
    parent: { unique: ((e = t.parent) == null ? void 0 : e.id) || "", entityType: "" },
    name: t.name,
    entityType: t.isFolder ? t.id === "207c2294-970b-4e1f-82fd-ae8996ef171d" ? za : bs : t.isGroup ? Oi : yr,
    isFolder: t.isFolder,
    hasChildren: t.hasChildren
  };
};
class Mw extends Ea {
  constructor(e) {
    super(e, qu.contextAlias);
  }
}
const qu = new L("FormsSecurityTreeStore");
class Dw extends $a {
  constructor(e) {
    super(
      e,
      Tw,
      qu
    );
  }
  async requestTreeRoot() {
    return { data: {
      unique: null,
      entityType: ws,
      name: "Security",
      hasChildren: !0,
      isFolder: !0
    } };
  }
}
const Aw = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Forms.MenuItem.UserSecurity",
    name: "Forms Security User Menu Item",
    weight: 200,
    meta: {
      label: "User Security",
      entityType: yr,
      treeAlias: "Forms.Tree.Security",
      menus: [Ot]
    }
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: "Forms.MenuItem.UserGroupSecurity",
    name: "Forms Security User Group Menu Item",
    weight: 200,
    meta: {
      label: "User Group Security",
      entityType: Oi,
      treeAlias: "Forms.Tree.GroupSecurity",
      menus: [Ot]
    }
  }
], kw = [...Aw], ju = "Forms.Repository.Security.Tree", Rw = "Forms.Store.Security.Tree", Iw = "Forms.Tree.Security", Uw = {
  type: "repository",
  alias: ju,
  name: "Forms Security Tree Repository",
  api: Dw
}, zw = {
  type: "treeStore",
  alias: Rw,
  name: "Forms Security Tree Store",
  api: Mw
}, Ww = {
  type: "tree",
  kind: "default",
  alias: Iw,
  name: "Forms Security Tree",
  meta: {
    repositoryAlias: ju
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionUserPermission",
      match: "Umb.Section.Users"
    }
  ]
}, Lw = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.Security",
  name: "Forms Security Tree Item",
  forEntityTypes: [
    yr,
    Oi,
    za,
    bs,
    ws
  ]
}, Nw = [
  Uw,
  zw,
  Ww,
  Lw,
  ...kw
], Fs = "Forms.Workspace.Security.User", Es = "Forms.Workspace.Security.UserGroup", Vw = [
  {
    type: "workspace",
    kind: "routable",
    alias: Fs,
    name: "Forms User Security Workspace",
    api: () => import("./security-user-workspace.context.js"),
    meta: {
      entityType: yr
    }
  },
  {
    type: "workspace",
    kind: "routable",
    alias: Es,
    name: "Forms User Group Security Workspace",
    api: () => import("./security-user-group-workspace.context.js"),
    meta: {
      entityType: Oi
    }
  }
], qw = [
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Security.User.Permissions",
    name: "Security Workspace User Permissions View",
    element: () => import("./workspace-view-security-user-permissions.element.js"),
    weight: 90,
    meta: {
      label: "Permissions",
      pathname: "permissions",
      icon: "user"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Fs
      }
      // TODO: user permissions for access to manage form security
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Security.UserGroup.Permissions",
    name: "Security Workspace User Group Permissions View",
    element: () => import("./workspace-view-security-user-group-permissions.element.js"),
    weight: 90,
    meta: {
      label: "Permissions",
      pathname: "permissions",
      icon: "user"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Es
      }
      // TODO: user permissions for access to manage form security
    ]
  }
], jw = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.Security.User.Save",
    name: "Save Security Workspace Action",
    api: Pr,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Fs
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.Security.UserGroup.Save",
    name: "Save Security Workspace Action",
    api: Pr,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Es
      }
    ]
  }
], Bw = [
  ...Vw,
  ...qw,
  ...jw
], Yw = [
  ...Xp,
  ...cw,
  ...Cw,
  ...Nw,
  ...Bw
], Gw = [
  {
    type: "dashboard",
    alias: "forms.dashboard",
    name: "Forms Dashboard",
    weight: 100,
    elementName: "forms-dashboard",
    js: () => import("./forms-dashboard.element.js"),
    meta: {
      label: "Forms",
      pathname: "forms"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Forms"
      }
    ]
  }
], Hw = [...Gw], Kw = [
  ...Dy,
  ...kg,
  ...Bg,
  ...mb,
  ...Zb,
  ...Cp,
  ...Yw,
  ...Hw
], Xw = [
  {
    type: "modal",
    alias: _l,
    name: "Forms Edit Page Modal",
    js: () => Promise.resolve().then(() => Lf)
  },
  {
    type: "modal",
    alias: Sl,
    name: "Forms Edit Fieldset Modal",
    js: () => Promise.resolve().then(() => Yf)
  },
  {
    type: "modal",
    alias: bl,
    name: "Forms Edit Field Modal",
    js: () => Promise.resolve().then(() => Qf)
  },
  {
    type: "modal",
    alias: gl,
    name: "Forms Configure Workflow Modal",
    js: () => Promise.resolve().then(() => Ff)
  },
  {
    type: "modal",
    alias: vl,
    name: "Forms Create Form From DataSource Modal",
    js: () => Promise.resolve().then(() => xf)
  },
  {
    type: "modal",
    alias: wl,
    name: "Forms Edit Submit Message Modal",
    js: () => Promise.resolve().then(() => oy)
  },
  {
    type: "modal",
    alias: El,
    name: "Forms Edit Workflow Modal",
    js: () => import("./form-edit-workflow-modal.element.js")
  },
  {
    type: "modal",
    alias: hl,
    name: "Forms Choose Field Type Modal",
    js: () => Promise.resolve().then(() => af)
  },
  {
    type: "modal",
    alias: yl,
    name: "Forms Choose Workflow Type Modal",
    js: () => Promise.resolve().then(() => pf)
  },
  {
    type: "modal",
    alias: Cl,
    name: "Forms Entry Details Modal",
    js: () => import("./form-entry-details-modal.element.js")
  },
  {
    type: "modal",
    alias: Tl,
    name: "Forms Export Entries Modal",
    js: () => Promise.resolve().then(() => vy)
  },
  {
    type: "modal",
    alias: Ol,
    name: "Forms Preview Modal",
    js: () => Promise.resolve().then(() => Cy)
  }
], Jw = [...Xw], Qw = [
  {
    type: "propertyEditorUi",
    alias: "Forms.PropertyEditorUi.FormPicker.Single",
    name: "Single Form Picker Property Editor",
    js: () => import("./form-picker-single-property-editor.element.js"),
    meta: {
      label: "Form Picker (Single)",
      propertyEditorSchemaAlias: "UmbracoForms.FormPicker",
      icon: "icon-umb-contour",
      group: "forms"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Forms.PropertyEditorUi.FormPicker.Multiple",
    name: "Multiple Form Picker Property Editor",
    js: () => import("./form-picker-multiple-property-editor.element.js"),
    meta: {
      label: "Form Picker (Multiple)",
      propertyEditorSchemaAlias: "UmbracoForms.FormPicker",
      icon: "icon-umb-contour",
      group: "forms"
    }
  }
], Zw = {
  type: "propertyEditorSchema",
  name: "Form Picker",
  alias: "UmbracoForms.FormPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Forms.PropertyEditorUi.FormPicker.Single",
    settings: {
      properties: [
        {
          alias: "allowedFolders",
          label: "Allowed Folders",
          description: "Select the folders from which forms that can be chosen in the picker, or leave empty to allow all folders to be used.",
          propertyEditorUiAlias: "Forms.PropertyEditorUi.FolderPicker.Multiple"
        },
        {
          alias: "allowedForms",
          label: "Allowed Forms",
          description: "Select the individual forms that can be chosen in the picker, or leave empty to allow all forms to be used.",
          propertyEditorUiAlias: "Forms.PropertyEditorUi.FormPicker.Multiple"
        }
      ]
    }
  }
}, eF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.FormDetailsPicker",
  name: "Form Details Picker Property Editor",
  js: () => import("./form-details-picker-property-editor.element.js"),
  meta: {
    label: "Form Details Picker",
    propertyEditorSchemaAlias: "UmbracoForms.FormDetailsPicker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, tF = {
  type: "propertyEditorSchema",
  name: "Form Details Picker",
  alias: "UmbracoForms.FormDetailsPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Forms.PropertyEditorUi.FormDetailsPicker",
    settings: {
      properties: [
        {
          alias: "allowedFolders",
          label: "Allowed Folders",
          description: "Select the folders from which forms that can be chosen in the picker, or leave empty to allow all folders to be used.",
          propertyEditorUiAlias: "Forms.PropertyEditorUi.FolderPicker.Multiple"
        },
        {
          alias: "allowedForms",
          label: "Allowed Forms",
          description: "Select the individual forms that can be chosen in the picker, or leave empty to allow all forms to be used.",
          propertyEditorUiAlias: "Forms.PropertyEditorUi.FormPicker.Multiple"
        },
        {
          alias: "includeThemePicker",
          label: "Include Theme Picker",
          description: "Select whether to allow editors to select the theme for the form.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "includeRedirectPicker",
          label: "Include Redirect Picker",
          description: "Select whether to allow editors to override the page to redirect to after the form is submitted.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, rF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.FolderPicker.Multiple",
  name: "Multiple Folder Picker Property Editor",
  js: () => import("./folder-picker-multiple-property-editor.element.js"),
  meta: {
    label: "Folder Picker (Multiple)",
    propertyEditorSchemaAlias: "UmbracoForms.FolderPicker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, iF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.ThemePicker",
  name: "Theme Picker Property Editor",
  js: () => import("./theme-picker-property-editor.element.js"),
  meta: {
    label: "Theme Picker",
    propertyEditorSchemaAlias: "UmbracoForms.ThemePicker",
    icon: "icon-brush",
    group: "forms"
  }
}, aF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DataTypePicker",
  name: "Forms Data Type Picker Property Editor",
  js: () => import("./data-type-picker-property-editor.element.js"),
  meta: {
    label: "Data Type Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, oF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DatePicker.Relative",
  name: "Forms Relative Date Picker Property Editor",
  js: () => import("./date-picker-relative-property-editor.element.js"),
  meta: {
    label: "Relative Date Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, sF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DocumentMapper",
  name: "Forms Document Mapper Property Editor",
  js: () => import("./document-mapper-property-editor.element.js"),
  meta: {
    label: "Document Mapper",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, nF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DocumentTypePicker",
  name: "Forms Document Type Picker Property Editor",
  js: () => import("./document-type-picker-property-editor.element.js"),
  meta: {
    label: "Document Type Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, lF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DocumentTypeFieldPicker",
  name: "Forms Document Type Field Picker Property Editor",
  js: () => import("./document-type-field-picker-property-editor.element.js"),
  meta: {
    label: "Document Type Field Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, cF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.EmailTemplatePicker",
  name: "Forms Email Template Picker Property Editor",
  js: () => import("./email-template-picker-property-editor.element.js"),
  meta: {
    label: "Email Template Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, uF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.FieldMapper",
  name: "Forms Field Mapper Property Editor",
  js: () => import("./field-mapper-property-editor.element.js"),
  meta: {
    label: "Field Mapper",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, dF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.Password",
  name: "Forms Password Property Editor",
  js: () => import("./password-property-editor.element.js"),
  meta: {
    label: "Password",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, mF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.StandardFieldMapper",
  name: "Forms Standard Field Mapper Property Editor",
  js: () => import("./standard-field-mapper-property-editor.element.js"),
  meta: {
    label: "Standard Field Mapper",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, pF = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.TextWithFieldPicker",
  name: "Forms Text With Field Picker Property Editor",
  js: () => import("./text-with-field-picker-property-editor.element.js"),
  meta: {
    label: "Text with Field Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, hF = [
  ...Qw,
  Zw,
  eF,
  tF,
  rF,
  iF,
  aF,
  oF,
  sF,
  nF,
  lF,
  cF,
  uF,
  dF,
  mF,
  pF
], fF = {
  type: "globalContext",
  alias: "Forms.GlobalContext",
  name: "Umbraco Forms Global Context",
  api: () => Promise.resolve().then(() => Gp)
}, yF = [fF], gF = [
  {
    type: "ufmComponent",
    alias: "Forms.Markdown.FormName",
    name: "Form Name UFM Component",
    api: () => import("./form-name.component.js"),
    meta: { marker: "umbFormName:", alias: "umbFormName" }
  }
];
var vF = Object.defineProperty, _F = Object.getOwnPropertyDescriptor, Bu = (t) => {
  throw TypeError(t);
}, $s = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? _F(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && vF(e, r, i), i;
}, Cs = (t, e, r) => e.has(t) || Bu("Cannot " + r), la = (t, e, r) => (Cs(t, e, "read from private field"), e.get(t)), ao = (t, e, r) => e.has(t) ? Bu("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), SF = (t, e, r, a) => (Cs(t, e, "write to private field"), e.set(t, r), r), wr = (t, e, r) => (Cs(t, e, "access private method"), r), sr, Ts, mt, Yu, Gu, Hu, Eo;
const bF = "form-grid";
let Xr = class extends lt(kt) {
  constructor() {
    super(...arguments), ao(this, mt), ao(this, sr, 10), ao(this, Ts, 10), this._forms = [];
  }
  async connectedCallback() {
    super.connectedCallback();
    const { data: t } = await d(this, ee.getForm());
    this._forms = t;
  }
  render() {
    return n`<div class="header">
        <h4>${this.localize.term("formsDashboard_yourForms")}</h4>
        ${wr(this, mt, Eo).call(this)}
      </div>
      <uui-ref-list>
        ${this._forms.slice(0, la(this, sr) - 1).map(
      (t) => n`<ref-form
                .model=${t}
                .config=${this.config}
                @edit=${() => wr(this, mt, Yu).call(this, t.id)}
                @view=${() => wr(this, mt, Gu).call(this, t.id)}
              ></ref-form>`
    )}
      </uui-ref-list>
      <div class="footer">${wr(this, mt, Eo).call(this)}</div>`;
  }
};
sr = /* @__PURE__ */ new WeakMap();
Ts = /* @__PURE__ */ new WeakMap();
mt = /* @__PURE__ */ new WeakSet();
Yu = function(t) {
  history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${oe}/edit/${t}`
  );
};
Gu = function(t) {
  history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${oe}/edit/${t}/view/entries`
  );
};
Hu = function() {
  SF(this, sr, la(this, sr) + la(this, Ts)), this.requestUpdate();
};
Eo = function() {
  if (!(this._forms.length <= la(this, sr)))
    return n` <uui-button
      @click=${wr(this, mt, Hu)}
      .label=${this.localize.term("formsDashboard_showMore")}
    ></uui-button>`;
};
Xr.styles = [
  O`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .footer {
        margin-top: 10px;
        width: 100%;
        text-align: right;
      }
    `
];
$s([
  m({ type: Object })
], Xr.prototype, "config", 2);
$s([
  b()
], Xr.prototype, "_forms", 2);
Xr = $s([
  p(bF)
], Xr);
var wF = Object.defineProperty, FF = Object.getOwnPropertyDescriptor, Ku = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? FF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && wF(e, r, i), i;
};
const EF = "forms-licensing";
let ca = class extends lt(
  kt
) {
  render() {
    var t, e;
    return h(
      ((t = this.status) == null ? void 0 : t.isValid) == !1 || ((e = this.status) == null ? void 0 : e.isTrial),
      () => {
        var r, a;
        return n`
        <uui-box
          headline="${this.localize.term(
          ((r = this.status) == null ? void 0 : r.isValid) == !1 ? "formsDashboard_invalidLicense" : "formsDashboard_trialTitle"
        )}"
        >
          ${h(
          ((a = this.status) == null ? void 0 : a.isValid) == !1,
          () => {
            var i;
            return n`
              <div class="alert alert-error">
                ${this.localize.term("formsDashboard_invalidLicenseValidFor")}
                <pre>${(i = this.status) == null ? void 0 : i.licenseLimitations}</pre>
                ${this.localize.term("formsDashboard_reconfigure")}
              </div>
            `;
          }
        )}
          <p>${this.localize.term("formsDashboard_trialDescription")}</p>
          <uui-button
            look="primary"
            color="positive"
            href="https://umbra.co/43Rr7TT"
            target="_blank"
            .label=${this.localize.term("formsDashboard_buyLicense")}
          ></uui-button>
          <uui-button
            look="primary"
            color="default"
            href="https://docs.umbraco.com/umbraco-forms/installation/the-licensing-model#configuring-your-license"
            target="_blank"
            .label=${this.localize.term("formsDashboard_configureLicense")}
          ></uui-button>
        </uui-box>
      `;
      }
    );
  }
};
ca.styles = [
  O`
      .alert {
        border-left: 4px solid;
        border-radius: var(--uui-border-radius);
        padding: var(--uui-size-3);
      }

      .alert-error {
        border-left-color: var(--uui-color-danger);
      }
    `
];
Ku([
  m({ type: Object })
], ca.prototype, "status", 2);
ca = Ku([
  p(EF)
], ca);
var $F = Object.defineProperty, CF = (t, e, r, a) => {
  for (var i = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(e, r, i) || i);
  return i && $F(e, r, i), i;
}, wt, wa, Xu;
const Ks = class Ks extends lt(
  kt
) {
  constructor() {
    super();
    f(this, wa);
    f(this, wt);
    this.consumeContext(Re, (r) => {
      r && (y(this, wt, r), w(this, wa, Xu).call(this));
    });
  }
  onObserveForm() {
  }
  getAllFieldsForForm() {
    var r;
    return (r = c(this, wt)) == null ? void 0 : r.getAllFields();
  }
  setPropertyValue(r, a) {
    var i;
    (i = c(this, wt)) == null || i.setFormProperty(r, a), this.dispatchEvent(new CustomEvent("valueChange"));
  }
};
wt = new WeakMap(), wa = new WeakSet(), Xu = function() {
  this.observe(c(this, wt).data, (r) => {
    r && (this.form = r, this.onObserveForm());
  });
}, Ks.styles = [
  O`
      .flex {
        display: flex;
        flex-direction: column;
      }

      .flex + .flex {
        margin-top: var(--uui-size-3);
      }

      .flex.gap {
        margin-top: var(--uui-size-5);
      }

      .flex + uui-toggle {
        display: block;
        margin-top: var(--uui-size-3);
      }
    `
];
let ua = Ks;
CF([
  b()
], ua.prototype, "form");
var TF = Object.defineProperty, OF = Object.getOwnPropertyDescriptor, Ju = (t) => {
  throw TypeError(t);
}, Qu = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? OF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && TF(e, r, i), i;
}, Os = (t, e, r) => e.has(t) || Ju("Cannot " + r), oo = (t, e, r) => (Os(t, e, "read from private field"), e.get(t)), En = (t, e, r) => e.has(t) ? Ju("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), PF = (t, e, r, a) => (Os(t, e, "write to private field"), e.set(t, r), r), U = (t, e, r) => (Os(t, e, "access private method"), r), qt, M, da, Wa, La, Ps, xs, Ms, Zu, ed, td, rd, Ds, id;
const xF = "forms-advanced-validation-rules";
let ma = class extends ua {
  constructor() {
    super(), En(this, M), En(this, qt), this._editIndex = -1, this.consumeContext(bi, (t) => {
      PF(this, qt, t);
    });
  }
  render() {
    return n`<umb-property-layout
      alias="validationRules"
      .label=${this.localize.term("formAdvanced_validationRules")}
      .description=${this.localize.term(
      "formAdvanced_validationRulesDescription"
    )}
    >
      <div slot="editor">
        <div class="flex">
          <uui-table>
            <uui-table-head>
              <uui-table-head-cell>
                Rule
                <small
                  >${jo(
      this.localize.term(
        "formAdvanced_validationRulesRuleDescription"
      )
    )}</small
                >
              </uui-table-head-cell>
              <uui-table-head-cell>
                Message
                <small
                  >${this.localize.term(
      "formAdvanced_validationRulesErrorMessageDescription"
    )}</small
                >
              </uui-table-head-cell>
              <uui-table-head-cell>
                Field
                <small
                  >${this.localize.term(
      "formAdvanced_validationRulesFieldDescription"
    )}</small
                >
              </uui-table-head-cell>
              <uui-table-head-cell> </uui-table-head-cell>
            </uui-table-head>
            ${this.form.validationRules.map(
      (t, e) => n` <uui-table-row>
                  <uui-table-cell
                    ><code>${U(this, M, Ds).call(this, t.rule)}</code></uui-table-cell
                  >
                  <uui-table-cell>${t.errorMessage}</uui-table-cell>
                  <uui-table-cell
                    >${U(this, M, id).call(this, t.fieldId)}</uui-table-cell
                  >
                  <uui-table-head-cell>
                    <uui-action-bar>
                      <uui-button
                        label="edit"
                        look="secondary"
                        color="default"
                        @click=${() => U(this, M, Zu).call(this, e)}
                      >
                        <uui-icon name="edit"></uui-icon>
                      </uui-button>
                      <uui-button
                        label=${this.localize.term("general_delete")}
                        look="secondary"
                        color="default"
                        @click=${() => U(this, M, rd).call(this, e)}
                      >
                        <uui-icon name="delete"></uui-icon>
                      </uui-button>
                    </uui-action-bar>
                  </uui-table-head-cell>
                </uui-table-row>`
    )}

            <uui-table-row>
              <uui-table-cell>
                <uui-textarea
                  id="rule"
                  rows="8"
                  class="json"
                  placeholder="${this.localize.term(
      "formAdvanced_validationRuleDefinition"
    )}"
                ></uui-textarea>
              </uui-table-cell>
              <uui-table-cell>
                <uui-textarea
                  id="errorMessage"
                  rows="8"
                  placeholder="${this.localize.term(
      "formAdvanced_validationRuleErrorMessage"
    )}"
                ></uui-textarea>
              </uui-table-cell>
              <uui-table-cell>
                <uui-select
                  id="fieldId"
                  .options=${this.getAllFieldsForForm().map((t) => ({
      name: this.localize.term(t.caption),
      value: t.id,
      selected: this._editIndex > -1 && t.id === this.form.validationRules[this._editIndex].fieldId
    }))}
                >
                </uui-select>
              </uui-table-cell>
              <uui-table-cell>
                <uui-action-bar>
                  <uui-button
                    label="add"
                    look="secondary"
                    color="default"
                    @click=${U(this, M, ed)}
                  >
                    <uui-icon
                      .name=${U(this, M, da).call(this) ? "icon-save" : "add"}
                    ></uui-icon>
                  </uui-button>
                  ${h(
      U(this, M, da).call(this),
      () => n`<uui-button
                        label="add"
                        look="secondary"
                        color="default"
                        @click=${U(this, M, td)}
                        ><uui-icon name="wrong"></uui-icon
                      ></uui-button>`
    )}
                </uui-action-bar>
              </uui-table-cell>
            </uui-table-row>
          </uui-table>
        </div>
      </div>
    </umb-property-layout>`;
  }
};
qt = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakSet();
da = function() {
  return this._editIndex > -1;
};
Wa = function() {
  return U(this, M, xs).call(this, "rule");
};
La = function() {
  return U(this, M, xs).call(this, "errorMessage");
};
Ps = function() {
  var t;
  return (t = this.shadowRoot) == null ? void 0 : t.getElementById("fieldId");
};
xs = function(t) {
  var e;
  return (e = this.shadowRoot) == null ? void 0 : e.getElementById(t);
};
Ms = function() {
  U(this, M, Wa).call(this).value = "", U(this, M, La).call(this).value = "", U(this, M, Ps).call(this).value = "", this._editIndex = -1;
};
Zu = function(t) {
  this._editIndex = t;
  const e = this.form.validationRules[this._editIndex];
  U(this, M, Wa).call(this).value = U(this, M, Ds).call(this, e.rule), U(this, M, La).call(this).value = e.errorMessage;
};
ed = function() {
  var i, o, s;
  let t = U(this, M, Wa).call(this).value.toString();
  const e = U(this, M, La).call(this).value.toString(), r = U(this, M, Ps).call(this).value.toString();
  try {
    t = JSON.stringify(JSON.parse(t));
  } catch {
    const l = {
      data: {
        headline: this.localize.term(
          "formAdvanced_validationRulesErrorTitle"
        ),
        message: this.localize.term(
          "formAdvanced_validationRulesRuleErrorDescription"
        )
      }
    };
    (i = oo(this, qt)) == null || i.peek("danger", l);
    return;
  }
  if (e.trim().length === 0) {
    const l = {
      data: {
        headline: this.localize.term(
          "formAdvanced_validationRulesErrorTitle"
        ),
        message: this.localize.term(
          "formAdvanced_validationRulesMessageErrorDescription"
        )
      }
    };
    (o = oo(this, qt)) == null || o.peek("danger", l);
    return;
  }
  if (r.length === 0) {
    const l = {
      data: {
        headline: this.localize.term(
          "formAdvanced_validationRulesErrorTitle"
        ),
        message: this.localize.term(
          "formAdvanced_validationRulesFieldErrorDescription"
        )
      }
    };
    (s = oo(this, qt)) == null || s.peek("danger", l);
    return;
  }
  const a = structuredClone(this.form.validationRules);
  U(this, M, da).call(this) ? (a[this._editIndex].rule = t, a[this._editIndex].errorMessage = e, a[this._editIndex].fieldId = r) : a.push({
    rule: t,
    errorMessage: e,
    fieldId: r
  }), this.setPropertyValue("validationRules", a), U(this, M, Ms).call(this);
};
td = function() {
  U(this, M, Ms).call(this);
};
rd = async function(t) {
  await qo(this, {
    headline: this.localize.term("formAdvanced_deleteValidationRuleHeadline"),
    content: this.localize.term("formAdvanced_deleteValidationRuleMessage"),
    confirmLabel: this.localize.term("general_yes"),
    color: "danger"
  });
  const e = structuredClone(this.form.validationRules);
  e.splice(t, 1), this.setPropertyValue("validationRules", e);
};
Ds = function(t) {
  const e = JSON.parse(t);
  return JSON.stringify(e, null, 2);
};
id = function(t) {
  const e = this.getAllFieldsForForm().filter(
    (a) => a.id === t
  );
  if (e.length === 0)
    return "";
  const r = e[0];
  return r.caption + " (" + r.alias + ")";
};
ma.styles = [
  O`
      uui-table-head-cell,
      uui-table-cell {
        vertical-align: top;
      }
      uui-table-head-cell small {
        display: block;
        font-weight: normal;
      }
      uui-table-cell code {
        background-color: var(--uui-color-surface-alt);
        border: solid 1px var(--uui-color-border-standalone);
        display: block;
        white-space: pre;
        font-family: monospace;
        font-size: 13px;
        padding: 4px;
        white-space: pre;
      }
      uui-textarea {
        width: 100%;
      }
      uui-textarea.json {
        font-family: monospace;
      }
    `
];
Qu([
  b()
], ma.prototype, "_editIndex", 2);
ma = Qu([
  p(xF)
], ma);
var B, rr, R, Ni, $o, Co, To, Fr, Oo;
class wC {
  constructor(e, r) {
    f(this, R);
    f(this, B);
    f(this, rr);
    if (!r) throw new Error("workspaceContext is missing");
    if (!e) throw new Error("host is missing");
    y(this, rr, e), y(this, B, r);
  }
  getHostElement() {
    return c(this, rr).getHostElement();
  }
  addFormPage(e = !1) {
    const r = c(this, B).getData();
    if (!r) return;
    const a = it.getPageScaffold();
    a.form = r.unique;
    const i = [...c(this, B).getData().pages];
    e ? i.unshift(a) : i.push(a), c(this, B).setFormProperty("pages", i);
  }
  async deleteFormPage(e) {
    if (!e) throw new Error("page is missing");
    w(this, R, Ni).call(this, "page", () => {
      const r = c(this, B).getData().pages;
      c(this, B).setFormProperty(
        "pages",
        tn(r, (a) => a.id !== e.id)
      );
    });
  }
  addFormGroup(e) {
    if (!e) throw new Error("page is missing");
    const r = it.getFieldsetScaffold();
    r.sortOrder = e.fieldSets.length, r.page = e.id, w(this, R, Fr).call(this, e, r);
  }
  deleteFormGroup(e) {
    if (!e) throw new Error("fieldset is missing");
    w(this, R, Ni).call(this, "group", () => {
      const r = w(this, R, Oo).call(this, e.page), a = [...r.fieldSets];
      a.splice(a.indexOf(e), 1), c(this, B).setFormProperty(
        "pages",
        Ut(
          c(this, B).getData().pages,
          {
            ...r,
            fieldSets: a
          },
          (i) => i.id === r.id
        )
      );
    });
  }
  copyFormGroup(e) {
    if (!e) throw new Error("fieldset is missing");
    const r = w(this, R, Oo).call(this, e.page), a = structuredClone(e);
    a.sortOrder = r.fieldSets.length, a.page = r.id, a.id = K.new(), a.containers.forEach(
      (i) => i.fields.forEach((o) => o.id = K.new())
    ), w(this, R, Fr).call(this, r, a);
  }
  deleteQuestion(e, r, a) {
    if (!r) throw new Error("fieldsetId is missing");
    if (!a) throw new Error("pageId is missing");
    w(this, R, Ni).call(this, "question", () => {
      const { page: i, fieldset: o, container: s } = w(this, R, To).call(this, e, r, a);
      w(this, R, Fr).call(this, i, {
        ...o,
        containers: Ut(
          o.containers,
          {
            ...s,
            fields: tn(
              s.fields,
              (l) => l.id !== e.id
            )
          },
          (l) => l === s
        )
      });
    });
  }
  copyQuestion(e, r, a) {
    if (!r) throw new Error("fieldsetId is missing");
    if (!a) throw new Error("pageId is missing");
    const i = structuredClone(e);
    i.id = K.new(), i.alias = w(this, R, $o).call(this, e.alias, c(this, B).getAllFieldAliases());
    const { fieldset: o, container: s } = w(this, R, To).call(this, e, r, a);
    this.insertQuestion(
      i,
      o,
      s,
      s.fields.indexOf(e) + 1
    );
  }
  /**
   * Handles inserting a copied field into the correct fieldset
   */
  insertQuestion(e, r, a, i) {
    if (!r) throw new Error("fieldset is missing");
    if (!a) throw new Error("container is missing");
    const o = r.containers.findIndex((l) => l === a), s = rn(a.fields, e, (l) => l.id);
    i !== void 0 && s.splice(i, 0, s.pop()), w(this, R, Co).call(this, r, a, o, s);
  }
  /** returns an array of objects sorted against the sortedIds array */
  reorderArray(e, r) {
    const a = [...e];
    return a.sort((i, o) => r.indexOf(i.id) - r.indexOf(o.id)), a;
  }
  reorderGroups(e, r) {
    c(this, B).setFormProperty(
      "pages",
      Ut(
        c(this, B).getData().pages,
        qm(e, {
          fieldSets: this.reorderArray(
            e.fieldSets,
            r
          )
        }),
        (a) => a.id === e.id
      )
    );
  }
  reorderQuestions(e, r, a) {
    const i = this.reorderArray(r.fields, a), o = e.containers.findIndex((s) => s === r);
    w(this, R, Co).call(this, e, r, o, i);
  }
}
B = new WeakMap(), rr = new WeakMap(), R = new WeakSet(), Ni = async function(e, r) {
  await qo(c(this, rr), {
    headline: `Delete ${e}`,
    content: `Are you sure you want to delete this ${e}?`,
    confirmLabel: "Delete",
    color: "danger"
  }), r();
}, $o = function(e, r) {
  let a = "";
  const i = e.match(/\d+$/);
  if (i) {
    const s = e.substring(0, e.length - i[0].length), g = parseInt(i[0], 10) + 1;
    a = s + g;
  } else
    a = e + "2";
  let o = !1;
  for (let s = 0; s < r.length; s++)
    if (r[s] === a) {
      o = !0;
      break;
    }
  return o ? w(this, R, $o).call(this, a, r) : a;
}, Co = function(e, r, a, i) {
  const o = {
    ...r,
    fields: i
  }, s = {
    ...e,
    containers: Ut(
      e.containers,
      o,
      (S) => e.containers.indexOf(S) === a
    )
  }, g = c(this, B).getData().pages.find((S) => S.id === s.page);
  w(this, R, Fr).call(this, g, s);
}, To = function(e, r, a) {
  function i(S, D) {
    return S.length === 1 ? S[0] : S.find(D);
  }
  const o = c(this, B).getData(), s = i(o.pages, (S) => S.id === a), l = i(s.fieldSets, (S) => S.id === r), g = i(
    l.containers,
    (S) => S.fields.some((D) => D.id === e.id)
  );
  return { page: s, fieldset: l, container: g };
}, Fr = function(e, r) {
  const a = {
    ...e,
    fieldSets: rn(e.fieldSets, r, (i) => i.id)
  };
  c(this, B).setFormProperty(
    "pages",
    Ut(
      c(this, B).getData().pages,
      a,
      (i) => i.id === a.id
    )
  );
}, Oo = function(e) {
  const r = c(this, B).getData().pages.find((a) => a.id === e);
  if (!r) throw new Error("page is missing");
  return r;
};
const MF = new L("FormStructureManager");
var DF = Object.defineProperty, AF = Object.getOwnPropertyDescriptor, Na = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? AF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && DF(e, r, i), i;
}, Ft;
class Ce extends lt(
  kt
) {
  constructor() {
    super();
    f(this, Ft);
    this.index = 0, this.allFields = [], this.allFieldTypes = [], y(this, Ft, !1), this.consumeContext(Re, (r) => {
      this.workspaceContext = r;
    }), this.consumeContext(q, (r) => {
      this.modalContext = r;
    }), this.consumeContext(MF, (r) => {
      this.structureManager = r;
    });
  }
  set sortModeActive(r) {
    var a, i;
    y(this, Ft, r), c(this, Ft) ? (a = this.sortModeEnabled) == null || a.call(this) : (i = this.sortModeDisabled) == null || i.call(this);
  }
  get sortModeActive() {
    return c(this, Ft);
  }
  async editNewOrExistingField(r, a, i) {
    if (!this.modalContext) return;
    const o = await this.workspaceContext.loadFieldType(
      r.fieldTypeId
    );
    if (!o)
      throw new Error(
        "Field type with id " + r.fieldTypeId + " could not be found."
      );
    const s = this.workspaceContext.getAllPages();
    let l = [];
    if (o.supportsRegex) {
      const Te = await this.workspaceContext.loadValidationPatterns();
      Te && (l = Te);
    }
    let g = [];
    if (o.supportsPrevalues) {
      const Te = await this.workspaceContext.loadPrevalueSources();
      Te && (g = Te);
    }
    const S = r.caption, D = r.alias, P = r.tooltip, z = r.containsSensitiveData, Z = r.allowedUploadTypes, _ = r.allowMultipleFileUploads, j = r.preValues, A = r.prevalueSourceId, x = r.mandatory, km = r.requiredErrorMessage, Rm = r.regex, Im = r.invalidErrorMessage, Um = r.condition ? structuredClone(r.condition) : it.getConditionScaffold(), Js = r.settings;
    if (a)
      for (let Te = 0; Te < o.settings.length; Te++) {
        const Ka = o.settings[Te];
        Ka.defaultValue && (Js[Ka.alias] = Ka.defaultValue);
      }
    const zm = this.workspaceContext.getContainerIndexPathForField(r.id);
    this.modalContext.open(this, Gh, {
      data: {
        fields: this.allFields,
        pages: s,
        validationPatterns: l,
        prevalueSources: g,
        isNew: a
      },
      value: {
        caption: S,
        alias: D,
        tooltip: P,
        fieldType: o,
        containsSensitiveData: z,
        allowedUploadTypes: Z,
        allowMultipleFileUploads: _,
        prevalues: j,
        prevalueSourceId: A,
        mandatory: x,
        requiredErrorMessage: km,
        regex: Rm,
        invalidErrorMessage: Im,
        condition: Um,
        settings: Js,
        containerIndexPath: zm
      }
    }).onSubmit().then(i).catch(() => {
    });
  }
}
Ft = new WeakMap();
Na([
  m({ type: Number })
], Ce.prototype, "index", 2);
Na([
  m({ type: Array })
], Ce.prototype, "allFields", 2);
Na([
  m({ type: Array })
], Ce.prototype, "allFieldTypes", 2);
Na([
  m({ type: Boolean, reflect: !0, attribute: "sort-mode-active" })
], Ce.prototype, "sortModeActive", 1);
var kF = Object.defineProperty, RF = Object.getOwnPropertyDescriptor, ad = (t) => {
  throw TypeError(t);
}, od = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? RF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && kF(e, r, i), i;
}, As = (t, e, r) => e.has(t) || ad("Cannot " + r), Vi = (t, e, r) => (As(t, e, "read from private field"), r ? r.call(t) : e.get(t)), so = (t, e, r) => e.has(t) ? ad("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Po = (t, e, r, a) => (As(t, e, "write to private field"), e.set(t, r), r), dt = (t, e, r) => (As(t, e, "access private method"), r), Va, $t, Oe, sd, nd, ld, cd, ud, dd, md;
const IF = "forms-form-page";
let pa = class extends Ce {
  constructor() {
    super(...arguments), so(this, Oe), so(this, Va), so(this, $t, []);
  }
  sortModeEnabled() {
    dt(this, Oe, sd).call(this), dt(this, Oe, nd).call(this);
  }
  render() {
    var t, e, r;
    return n`<div id="pageHeader">
        <div id="pageNumber">${this.index + 1}</div>
        <uui-input
          .value=${(t = this.page) == null ? void 0 : t.caption}
          @change=${dt(this, Oe, dd)}
          label="caption"
          .placeholder=${this.localize.term("formEdit_pageTitlePlaceholder")}
        ></uui-input>
        ${h(
      !this.sortModeActive,
      () => n`<div id="pageActions">
              <uui-action-bar>
                <uui-button
                  label="edit"
                  look="secondary"
                  color="default"
                  @click=${dt(this, Oe, ld)}
                >
                  <uui-icon name="settings"></uui-icon>
                </uui-button>
                <uui-button
                  label=${this.localize.term("general_delete")}
                  look="secondary"
                  color="default"
                  @click=${dt(this, Oe, cd)}
                >
                  <uui-icon name="delete"></uui-icon>
                </uui-button>
              </uui-action-bar>
            </div>`
    )}
      </div>

      ${h(
      !this.sortModeActive,
      () => {
        var a, i;
        return n` <forms-form-condition-summary
            formElement="pageButton"
            .condition=${(a = this.page) == null ? void 0 : a.buttonCondition}
            .operatorTypes=${((i = this.workspaceContext) == null ? void 0 : i.getConditionOperators) ?? []}
            .allFields=${this.allFields}
          >
          </forms-form-condition-summary>`;
      }
    )}

      <div id="pageFieldsets" class="page-${(e = this.page) == null ? void 0 : e.id}">
        ${(r = this.page) == null ? void 0 : r.fieldSets.map(
      (a, i) => {
        var o;
        return n`<forms-form-fieldset
              class="fieldset-${(o = this.page) == null ? void 0 : o.id}"
              sort-unique="${a.id}"
              .fieldset=${a}
              .index=${i}
              .pageIndex=${this.index}
              .allFields=${this.allFields}
              .allFieldTypes=${this.allFieldTypes}
              .sortModeActive=${this.sortModeActive}
            ></forms-form-fieldset>`;
      }
    )}
      </div>
      <div id="pageFooter">
        ${h(
      !this.sortModeActive,
      () => n` <uui-button
              @click=${dt(this, Oe, ud)}
              look="outline"
              label=${this.localize.term("formEdit_addGroup")}
            ></uui-button>`
    )}
      </div>`;
  }
};
Va = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
Oe = /* @__PURE__ */ new WeakSet();
sd = function() {
  var t, e;
  Po(this, Va, new Si(this, {
    ...new Ei(
      "Forms.SorterIdentifier.Fieldset",
      `forms-form-fieldset.fieldset-${(t = this.page) == null ? void 0 : t.id}`,
      `.page-${(e = this.page) == null ? void 0 : e.id}`
    ).config,
    onChange: ({ model: r }) => {
      Po(this, $t, r);
    },
    onEnd: () => {
      var r;
      (r = this.structureManager) == null || r.reorderGroups(this.page, Vi(this, $t));
    }
  }));
};
nd = function() {
  var e;
  Po(this, $t, []);
  const t = this.page.fieldSets;
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    Vi(this, $t).push(a.id);
  }
  (e = Vi(this, Va)) == null || e.setModel(Vi(this, $t));
};
ld = async function() {
  var a;
  if (!this.modalContext) return;
  const t = (a = this.page) != null && a.buttonCondition ? structuredClone(this.page.buttonCondition) : it.getConditionScaffold(), r = await this.modalContext.open(this, Bh, {
    data: {
      fields: this.allFields
    },
    value: {
      buttonCondition: t
    }
  }).onSubmit().catch(() => {
  });
  r && dt(this, Oe, md).call(this, "buttonCondition", r.buttonCondition);
};
cd = function() {
  var t;
  (t = this.structureManager) == null || t.deleteFormPage(this.page);
};
ud = function() {
  var t;
  (t = this.structureManager) == null || t.addFormGroup(this.page);
};
dd = function(t) {
  if (this.page) {
    const e = t.target.value.toString();
    this.workspaceContext.setPageProperty(this.index, "caption", e);
  }
};
md = function(t, e) {
  this.workspaceContext.setPageProperty(this.index, t, e);
};
pa.styles = [
  O`
      :host {
        display: block;
        background: #e9e9eb;
        padding: 15px;
        margin-bottom: 30px;
        border-radius: 3px;
      }

      #pageHeader {
        margin-bottom: 15px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
      }
      #pageNumber {
        width: 23px;
        height: 23px;
        line-height: 23px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border: 1px solid #bbbabf;
        margin-right: 5px;
      }
      #pageActions {
        color: #817f85;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-left: auto;
        padding-left: 10px;
      }
      #pageFooter {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
      }

      forms-form-fieldset + forms-form-fieldset {
        display: block;
        margin-top: var(--uui-size-5);
      }
    `
];
od([
  m({ type: Object })
], pa.prototype, "page", 2);
pa = od([
  p(IF)
], pa);
var UF = Object.defineProperty, zF = Object.getOwnPropertyDescriptor, pd = (t) => {
  throw TypeError(t);
}, Pi = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? zF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && UF(e, r, i), i;
}, WF = (t, e, r) => e.has(t) || pd("Cannot " + r), LF = (t, e, r) => e.has(t) ? pd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), $n = (t, e, r) => (WF(t, e, "access private method"), r), qi, hd, fd;
const NF = "forms-form-condition-summary";
let Dt = class extends lt(
  kt
) {
  constructor() {
    super(...arguments), LF(this, qi), this.allFields = [], this.operatorTypes = [], this.formElement = "field";
  }
  render() {
    var t;
    return n` ${h(
      (t = this.condition) == null ? void 0 : t.enabled,
      () => {
        var e, r, a;
        return n`<div class="condition-summary">
          ${jo(
          `<span>${this.localize.term("formConditions_" + this.formElement + "ConditionStatus", (e = this.condition) == null ? void 0 : e.actionType, (r = this.condition) == null ? void 0 : r.logicType.toLowerCase())}</span`
        )}
          ${(a = this.condition) == null ? void 0 : a.rules.map(
          (i, o) => n`<span>
              <strong>${$n(this, qi, hd).call(this, i.field)}</strong>
              ${$n(this, qi, fd).call(this, i.operator)}</span>
              <strong>${i.value.length > 0 ? n`${i.value}` : this.localize.term("formConditions_empty")}</strong>${h(o < this.condition.rules.length - 1, () => n`<span>, </span>`)}
            </span>`
        )}
        </div>`;
      }
    )}`;
  }
};
qi = /* @__PURE__ */ new WeakSet();
hd = function(t) {
  var e;
  return (e = this.allFields.find((r) => r.id === t)) == null ? void 0 : e.caption;
};
fd = function(t) {
  var e;
  return (e = this.operatorTypes.find((r) => r.value === t)) == null ? void 0 : e.name;
};
Dt.styles = [
  O`
      .condition-summary {
        font-size: 12px;
        margin-top: 8px;
        padding-left: 6px;
        padding-right: 6px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        background: #f6f3fd;
        border: 1px solid #413659;
        border-radius: 3px;
        display: inline-block;
        max-width: 800px;

        span {
          font-style: italic;
        }
      }
    `
];
Pi([
  m({ type: Object })
], Dt.prototype, "condition", 2);
Pi([
  m({ type: Array })
], Dt.prototype, "allFields", 2);
Pi([
  m({ type: Array })
], Dt.prototype, "operatorTypes", 2);
Pi([
  m()
], Dt.prototype, "formElement", 2);
Dt = Pi([
  p(NF)
], Dt);
var VF = Object.defineProperty, qF = Object.getOwnPropertyDescriptor, yd = (t) => {
  throw TypeError(t);
}, Ue = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? qF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && VF(e, r, i), i;
}, jF = (t, e, r) => e.has(t) || yd("Cannot " + r), BF = (t, e, r) => e.has(t) ? yd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), $ = (t, e, r) => (jF(t, e, "access private method"), r), F, gd, ks, vd, _d, Sd, bd, wd, Fd, Ed, Y, $d, Cd;
const YF = "forms-form-field";
let Se = class extends Ce {
  constructor() {
    super(...arguments), BF(this, F), this.pageIndex = 0, this.fieldsetIndex = 0, this.containerIndex = 0, this._aliasLocked = !0, this._fieldPrevalues = [];
  }
  async connectedCallback() {
    super.connectedCallback(), await $(this, F, gd).call(this);
  }
  renderSortableField() {
    return n`<div class="sortable">
      <uui-icon name="icon-navigation"></uui-icon>
      ${this.field.caption}
      <span style="color: var(--uui-color-disabled-contrast)"
        >(${this.field.alias})</span
      >
    </div>`;
  }
  render() {
    return this.sortModeActive ? this.renderSortableField() : n`<div id="fieldHeader">
        <!-- TODO => lifted from doc type header, confirm changes are ok -->
        <uui-input
          id="caption"
          name="caption"
          .value=${this.field.caption}
          @change="${$(this, F, bd)}"
          label="caption"
        >
          <!-- TODO: should use UUI-LOCK-INPUT, but that does not fire an event when its locked/unlocked -->
          <uui-input
            name="alias"
            slot="append"
            label="alias"
            @change=${$(this, F, Fd)}
            .value=${this.field.alias}
            placeholder="Enter alias..."
            ?disabled=${this._aliasLocked}
          >
            <!-- TODO: validation for bad characters -->
            <div
              @click=${$(this, F, wd)}
              @keydown=${() => ""}
              id="alias-lock"
              slot="prepend"
            >
              <uui-icon
                name=${this._aliasLocked ? "icon-lock" : "icon-unlocked"}
              ></uui-icon>
            </div>
          </uui-input>
        </uui-input>

        <uui-action-bar>
          <uui-button
            label="edit"
            look="secondary"
            color="default"
            @click=${$(this, F, vd)}
          >
            <uui-icon name="settings"></uui-icon>
          </uui-button>
          <uui-button
            label="copy"
            look="secondary"
            color="default"
            @click=${$(this, F, Sd)}
          >
            <uui-icon name="copy"></uui-icon>
          </uui-button>
          <uui-button
            label=${this.localize.term("general_delete")}
            look="secondary"
            color="default"
            @click=${$(this, F, _d)}
          >
            <uui-icon name="delete"></uui-icon>
          </uui-button>
        </uui-action-bar>
      </div>

      <div id="fieldContent">
        <div id="help">
          <uui-textarea
            name="tooltip"
            .placeholder=${this.localize.term("formEdit_helpText")}
            .value=${this.field.tooltip}
            @change="${$(this, F, Ed)}"
            label="tooltip"
          ></uui-textarea>
        </div>
        ${$(this, F, $d).call(this, this.field)}
      </div>

      ${h(
      !this.sortModeActive,
      () => {
        var t;
        return n` <forms-form-condition-summary
            formElement="field"
            .condition=${this.field.condition ?? void 0}
            .operatorTypes=${((t = this.workspaceContext) == null ? void 0 : t.getConditionOperators) ?? []}
            .allFields=${this.allFields}
          >
          </forms-form-condition-summary>`;
      }
    )} `;
  }
};
F = /* @__PURE__ */ new WeakSet();
gd = async function() {
  await $(this, F, ks).call(this, this.field.prevalueSourceId, this.field.preValues);
};
ks = async function(t, e) {
  if (this.workspaceContext)
    if (t !== Pt) {
      const r = new Wu(this), { data: a } = await r.requestPrevalues(
        this.field.prevalueSourceId,
        this.workspaceContext.getUnique(),
        this.field.id
      );
      a && (this._fieldPrevalues = a.map((i) => ({ value: i.value, caption: i.caption })));
    } else
      this._fieldPrevalues = e;
};
vd = async function() {
  const t = async (e) => {
    $(this, F, Y).call(this, "caption", e.caption), $(this, F, Y).call(this, "alias", e.alias), $(this, F, Y).call(this, "tooltip", e.tooltip), $(this, F, Y).call(this, "fieldTypeId", e.fieldType.id), $(this, F, Y).call(this, "containsSensitiveData", e.containsSensitiveData), $(this, F, Y).call(this, "allowedUploadTypes", e.allowedUploadTypes), $(this, F, Y).call(this, "allowMultipleFileUploads", e.allowMultipleFileUploads), $(this, F, Y).call(this, "preValues", e.prevalues), $(this, F, Y).call(this, "prevalueSourceId", e.prevalueSourceId), $(this, F, Y).call(this, "mandatory", e.mandatory), $(this, F, Y).call(this, "requiredErrorMessage", e.requiredErrorMessage), $(this, F, Y).call(this, "regex", e.regex), $(this, F, Y).call(this, "invalidErrorMessage", e.invalidErrorMessage), $(this, F, Y).call(this, "settings", e.settings), $(this, F, Y).call(this, "condition", e.condition);
    const r = this.workspaceContext.getContainerIndexPathForField(this.field.id);
    this.workspaceContext.moveField(
      this.field.id,
      r,
      e.containerIndexPath
    ), await $(this, F, ks).call(this, e.prevalueSourceId, e.prevalues);
  };
  await this.editNewOrExistingField(this.field, !1, t);
};
_d = function() {
  var t;
  (t = this.structureManager) == null || t.deleteQuestion(
    this.field,
    this.fieldsetId,
    this.pageId
  );
};
Sd = function() {
  var t;
  (t = this.structureManager) == null || t.copyQuestion(
    this.field,
    this.fieldsetId,
    this.pageId
  );
};
bd = function(t) {
  if (this.field) {
    const e = "caption";
    t.target.name === e && $(this, F, Y).call(this, e, t.target.value.toString());
  }
};
wd = function() {
  this._aliasLocked = !this._aliasLocked;
};
Fd = function(t) {
  if (this.field) {
    const e = "alias";
    t.target.name === e && $(this, F, Y).call(this, e, t.target.value.toString());
  }
};
Ed = function(t) {
  if (t instanceof sp && this.field) {
    const e = t.composedPath()[0], r = "tooltip";
    e.name === r && $(this, F, Y).call(this, r, e.value.toString());
  }
};
Y = function(t, e) {
  this.workspaceContext.setFieldProperty(
    this.pageIndex,
    this.fieldsetIndex,
    this.containerIndex,
    this.index,
    t,
    e
  );
};
$d = function(t) {
  const e = this.allFieldTypes.find(
    (r) => r.id == t.fieldTypeId
  );
  if (e)
    return n`<div id="fieldType">
      <div id="tags">
        <uui-tag look="default">${e.name}</uui-tag>
        ${h(
      t.mandatory,
      () => n`<uui-tag look="default"
              ><span
                >* ${this.localize.term("general_mandatory")}</span
              ></uui-tag
            >`
    )}
        ${h(
      t.containsSensitiveData,
      () => n`<uui-tag look="default"
              ><span
                ><uui-icon name="icon-lock"></uui-icon>${this.localize.term(
        "fieldSettings_sensitiveData"
      )}</span
              ></uui-tag
            >`
    )}
      </div>
      ${$(this, F, Cd).call(this, t, e)}
    </div>`;
};
Cd = function(t, e) {
  return Ln.getByAlias(
    e.previewView
  ) ? n`<umb-extension-slot
        type="formsFieldPreview"
        .filter=${(a) => a.alias === e.previewView}
        .props=${{ settings: t.settings, prevalues: this._fieldPrevalues }}
      >
      </umb-extension-slot>` : n``;
};
Se.styles = [
  O`
      :host {
        display: block;
        border-bottom: 1px solid #e9e9eb;
        padding: var(--uui-size-layout-1) 0;
      }

      #fieldHeader {
        display: flex;
        margin-bottom: var(--uui-size-3);
      }

      uui-action-bar {
        margin-left: var(--uui-size-3);
      }

      #caption {
        flex: 1;
        margin-right: var(--uui-size-3);
      }

      #help {
        width: 300px;
      }

      #fieldContent {
        display: flex;
      }

      #fieldType {
        flex: 1 1 auto;
        background-color: var(--uui-color-surface-alt);
        margin-left: var(--uui-size-3);
        padding: var(--uui-size-3);
      }

      #tags {
        margin-bottom: var(--uui-size-3);
        display: flex;
        gap: var(--uui-size-space-2);
      }

      :host([sort-mode-active]) {
        position: relative;
        display: flex;
        padding: 0;
        margin-bottom: var(--uui-size-3);
      }

      :host([sort-mode-active]:last-of-type) {
        margin-bottom: 0;
      }

      :host([sort-mode-active]:not([inherited])) {
        cursor: grab;
      }

      :host([sort-mode-active]) .sortable {
        flex: 1;
        display: flex;
        background-color: var(--uui-color-divider);
        align-items: center;
        padding: 0 var(--uui-size-3);
        gap: var(--uui-size-3);
      }

      :host([sort-mode-active]) uui-input {
        max-width: 75px;
      }

      /* Placeholder style, used when property is being dragged.*/
      :host(.--umb-sorter-placeholder) > * {
        visibility: hidden;
      }

      :host(.--umb-sorter-placeholder)::after {
        content: "";
        inset: 0;
        position: absolute;
        border: 1px dashed var(--uui-color-divider-emphasis);
        border-radius: var(--uui-border-radius);
      }

      uui-tag uui-icon {
        font-size: xx-small;
        margin-right: 4px;
      }
    `
];
Ue([
  m({ type: Object })
], Se.prototype, "field", 2);
Ue([
  m()
], Se.prototype, "fieldsetId", 2);
Ue([
  m()
], Se.prototype, "pageId", 2);
Ue([
  m({ type: Number })
], Se.prototype, "pageIndex", 2);
Ue([
  m({ type: Number })
], Se.prototype, "fieldsetIndex", 2);
Ue([
  m({ type: Number })
], Se.prototype, "containerIndex", 2);
Ue([
  b()
], Se.prototype, "_aliasLocked", 2);
Ue([
  b()
], Se.prototype, "_fieldPrevalues", 2);
Se = Ue([
  p(YF)
], Se);
var GF = Object.defineProperty, HF = Object.getOwnPropertyDescriptor, Td = (t) => {
  throw TypeError(t);
}, qa = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? HF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && GF(e, r, i), i;
}, KF = (t, e, r) => e.has(t) || Td("Cannot " + r), XF = (t, e, r) => e.has(t) ? Td("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), yt = (t, e, r) => (KF(t, e, "access private method"), r), xe, Od, Pd, xd, Md, ha;
const JF = "forms-form-fieldset";
let nr = class extends Ce {
  constructor() {
    super(...arguments), XF(this, xe), this.pageIndex = 0, this.fieldTypes = [];
  }
  render() {
    var t;
    return n`<uui-box
      ><div slot="header">
        ${h(
      !this.sortModeActive,
      () => {
        var e;
        return n` <uui-input
              .value=${(e = this.fieldset) == null ? void 0 : e.caption}
              label="caption"
              .placeholder=${this.localize.term(
          "formEdit_groupTitlePlaceholder"
        )}
              @change=${yt(this, xe, Md)}
            ></uui-input>`;
      },
      () => {
        var e;
        return n`<uui-icon name="icon-navigation"></uui-icon>
          ${((e = this.fieldset) == null ? void 0 : e.caption) ?? this.localize.term("formEdit_groupTitlePlaceholder")}
        </div>`;
      }
    )}
      </div>
      ${h(
      !this.sortModeActive,
      () => n`<div slot="header-actions">
            <uui-action-bar>
              <uui-button
                label="edit"
                look="secondary"
                color="default"
                @click=${yt(this, xe, Od)}
              >
                <uui-icon name="settings"></uui-icon>
              </uui-button>
              <uui-button
                label="copy"
                look="secondary"
                color="default"
                @click=${yt(this, xe, xd)}
              >
                <uui-icon name="copy"></uui-icon>
              </uui-button>
              <uui-button
                label=${this.localize.term("general_delete")}
                look="secondary"
                color="default"
                @click=${yt(this, xe, Pd)}
              >
                <uui-icon name="delete"></uui-icon>
              </uui-button>
            </uui-action-bar>
          </div>`
    )}
      ${h(
      !this.sortModeActive,
      () => {
        var e, r;
        return n` <forms-form-condition-summary
            formElement="fieldset"
            .condition=${((e = this.fieldset) == null ? void 0 : e.condition) ?? void 0}
            .operatorTypes=${((r = this.workspaceContext) == null ? void 0 : r.getConditionOperators) ?? []}
            .allFields=${this.allFields}
          >
          </forms-form-condition-summary>`;
      }
    )}

      <div id="fieldsetContainers">
        ${(t = this.fieldset) == null ? void 0 : t.containers.map(
      (e, r) => n`<forms-form-fieldset-container
              .fieldset=${this.fieldset}
              .container=${e}
              .index=${r}
              .fieldsetIndex=${this.index}
              .pageIndex=${this.pageIndex}
              .allFields=${this.allFields}
              .allFieldTypes=${this.allFieldTypes}
              .sortModeActive=${this.sortModeActive}
            ></forms-form-fieldset-container>`
    )}
      </div>
    </uui-box>`;
  }
};
xe = /* @__PURE__ */ new WeakSet();
Od = async function() {
  if (!this.modalContext || !this.workspaceContext || !this.fieldset) return;
  const t = this.workspaceContext.getAllPages(), e = this.pageIndex, r = this.fieldset.condition ? structuredClone(this.fieldset.condition) : it.getConditionScaffold(), a = structuredClone(this.fieldset.containers), o = await this.modalContext.open(
    this,
    Yh,
    {
      data: {
        fields: this.allFields,
        pages: t
      },
      value: {
        condition: r,
        containers: a,
        pageIndex: e
      }
    }
  ).onSubmit().catch(() => {
  });
  o && (this.fieldset && this.workspaceContext.moveFieldSet(
    this.pageIndex,
    this.index,
    o.pageIndex
  ), yt(this, xe, ha).call(this, "condition", o.condition), yt(this, xe, ha).call(this, "containers", o.containers));
};
Pd = function() {
  var t;
  (t = this.structureManager) == null || t.deleteFormGroup(this.fieldset);
};
xd = function() {
  var t;
  (t = this.structureManager) == null || t.copyFormGroup(this.fieldset);
};
Md = function(t) {
  if (this.fieldset) {
    const e = t.target.value.toString();
    yt(this, xe, ha).call(this, "caption", e);
  }
};
ha = function(t, e) {
  this.workspaceContext.setFieldsetProperty(
    this.pageIndex,
    this.index,
    t,
    e
  );
};
nr.styles = [
  O`
      uui-input {
        flex: 1;
      }

      #header {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-2);
      }

      #fieldsetContainers {
        display: flex;
        column-gap: var(--uui-size-space-5);
      }

      forms-form-fieldset-container {
        box-sizing: border-box;
        display: flex;
        flex: 1;
      }
    `
];
qa([
  m({ type: Object })
], nr.prototype, "fieldset", 2);
qa([
  m({ type: Number })
], nr.prototype, "pageIndex", 2);
qa([
  m({ type: Array })
], nr.prototype, "fieldTypes", 2);
nr = qa([
  p(JF)
], nr);
var QF = Object.defineProperty, ZF = Object.getOwnPropertyDescriptor, Dd = (t) => {
  throw TypeError(t);
}, gr = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? ZF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && QF(e, r, i), i;
}, Rs = (t, e, r) => e.has(t) || Dd("Cannot " + r), ji = (t, e, r) => (Rs(t, e, "read from private field"), r ? r.call(t) : e.get(t)), no = (t, e, r) => e.has(t) ? Dd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), xo = (t, e, r, a) => (Rs(t, e, "write to private field"), e.set(t, r), r), lo = (t, e, r) => (Rs(t, e, "access private method"), r), Ct, ja, Er, Ad, kd, Rd;
const eE = "forms-form-fieldset-container";
let st = class extends Ce {
  constructor() {
    super(...arguments), no(this, Er), this.pageIndex = 0, this.fieldsetIndex = 0, this.fieldTypes = [], no(this, Ct, []), no(this, ja);
  }
  sortModeEnabled() {
    lo(this, Er, Ad).call(this), lo(this, Er, kd).call(this);
  }
  render() {
    var t, e, r;
    return n`<div
      class="fieldset-container fieldset-container-${(t = this.container) == null ? void 0 : t.id} ${(e = this.container) != null && e.fields.length ? "" : "empty"}"
    >
      ${(r = this.container) == null ? void 0 : r.fields.map(
      (a, i) => {
        var o;
        return n`<forms-form-field
            class="container-${(o = this.container) == null ? void 0 : o.id}"
            sort-unique=${a.id}
            .field=${a}
            .fieldsetId=${this.fieldset.id}
            .pageId=${this.fieldset.page}
            .pageIndex=${this.pageIndex}
            .fieldsetIndex=${this.fieldsetIndex}
            .containerIndex=${this.index}
            .index=${i}
            .allFields=${this.allFields}
            .allFieldTypes=${this.allFieldTypes}
            .sortModeActive=${this.sortModeActive}
          ></forms-form-field>`;
      }
    )}
      ${h(
      !this.sortModeActive,
      () => n` <uui-button
            class="add-question-button"
            @click=${lo(this, Er, Rd)}
            look="secondary"
            label=${this.localize.term("formEdit_addQuestion")}
          ></uui-button>`
    )}
    </div>`;
  }
};
Ct = /* @__PURE__ */ new WeakMap();
ja = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakSet();
Ad = function() {
  var t, e;
  xo(this, ja, new Si(this, {
    ...new Ei(
      "Forms.SorterIdentifier.Field",
      `forms-form-field.container-${(t = this.container) == null ? void 0 : t.id}`,
      `.fieldset-container-${(e = this.container) == null ? void 0 : e.id}`
    ).config,
    onChange: ({ model: r }) => {
      xo(this, Ct, r);
    },
    onEnd: () => {
      var r;
      (r = this.structureManager) == null || r.reorderQuestions(
        this.fieldset,
        this.container,
        ji(this, Ct)
      );
    }
  }));
};
kd = function() {
  var e;
  xo(this, Ct, []);
  const t = this.container.fields;
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    ji(this, Ct).push(a.id);
  }
  (e = ji(this, ja)) == null || e.setModel(ji(this, Ct));
};
Rd = function() {
  this.modalContext.open(
    this,
    fl
  ).onSubmit().then(async (e) => {
    if (!e.selectedValue) return;
    if (!this.workspaceContext) throw new Error("No workspace context");
    const r = it.getQuestionScaffold();
    r.fieldTypeId = e.selectedValue.id;
    const a = async (i) => {
      var o;
      r.caption = i.caption, r.alias = i.alias, r.tooltip = i.tooltip, r.fieldTypeId = i.fieldType.id, r.containsSensitiveData = i.containsSensitiveData, r.allowedUploadTypes = i.allowedUploadTypes, r.allowMultipleFileUploads = i.allowMultipleFileUploads, r.preValues = i.prevalues, r.prevalueSourceId = i.prevalueSourceId || Pt, r.mandatory = i.mandatory, r.requiredErrorMessage = i.requiredErrorMessage, r.regex = i.regex, r.invalidErrorMessage = i.invalidErrorMessage, r.settings = i.settings, r.condition = i.condition, (o = this.structureManager) == null || o.insertQuestion(
        r,
        this.fieldset,
        this.container
      );
    };
    await this.editNewOrExistingField(r, !0, a);
  }).catch(() => {
  });
};
st.styles = [
  O`
      uui-input,
      .fieldset-container {
        flex: 1;
      }

      .fieldset-container + .fieldset-container {
        border-left: 1px solid var(--uui-color-divider-standalone);
      }

      .add-question-button {
        margin-top: var(--add-button-margin, var(--uui-size-3));
      }

      .empty {
        --add-button-margin: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border: 2px dashed var(--uui-color-divider-standalone);
      }
    `
];
gr([
  m({ type: Object })
], st.prototype, "fieldset", 2);
gr([
  m({ type: Object })
], st.prototype, "container", 2);
gr([
  m({ type: Number })
], st.prototype, "pageIndex", 2);
gr([
  m({ type: Number })
], st.prototype, "fieldsetIndex", 2);
gr([
  m({ type: Array })
], st.prototype, "fieldTypes", 2);
st = gr([
  p(eE)
], st);
var tE = Object.defineProperty, rE = Object.getOwnPropertyDescriptor, Id = (t) => {
  throw TypeError(t);
}, Ba = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? rE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && tE(e, r, i), i;
}, iE = (t, e, r) => e.has(t) || Id("Cannot " + r), aE = (t, e, r) => e.has(t) ? Id("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), oE = (t, e, r) => (iE(t, e, "access private method"), r), Mo, Ud;
const sE = "forms-form-workflow-summary";
let lr = class extends Ce {
  constructor() {
    super(...arguments), aE(this, Mo), this.manualApproval = !1;
  }
  render() {
    var t, e, r;
    return n`<uui-box>
      <div class="flex">
        <div>
          <forms-form-workflow-summary-stage
            .workflows=${((t = this.workflows) == null ? void 0 : t.onSubmit) ?? []}
            .submitMessageDetail=${this.submitMessageDetail}
            .allFields=${this.allFields}
            .label=${this.localize.term("formWorkflows_onSubmit")}
            collectionName="onSubmit"
            icon="icon-check"
          ></forms-form-workflow-summary-stage>
          ${h(
      (((e = this.workflows) == null ? void 0 : e.onApprove) ?? []).length > 0,
      () => {
        var a;
        return n`<forms-form-workflow-summary-stage
                .workflows=${((a = this.workflows) == null ? void 0 : a.onApprove) ?? []}
                .allFields=${this.allFields}
                .label=${this.localize.term("formWorkflows_onApprove") + (this.manualApproval ? " (" + this.localize.term("formWorkflows_automatic") + ")" : "")}
                collectionName="onApprove"
                icon="icon-thumb-up"
              ></forms-form-workflow-summary-stage>`;
      }
    )}
          ${h(
      this.manualApproval && (((r = this.workflows) == null ? void 0 : r.onReject) ?? []).length > 0,
      () => {
        var a;
        return n`<forms-form-workflow-summary-stage
                .workflows=${((a = this.workflows) == null ? void 0 : a.onReject) ?? []}
                .allFields=${this.allFields}
                .label=${this.localize.term("formWorkflows_onReject")}
                collectionName="onReject"
                icon="icon-delete"
              ></forms-form-workflow-summary-stage>`;
      }
    )}
        </div>
        <uui-button
          @click=${oE(this, Mo, Ud)}
          look="secondary"
          label=${this.localize.term("formWorkflows_configureWorkflow")}
        ></uui-button>
      </div>
    </uui-box>`;
  }
};
Mo = /* @__PURE__ */ new WeakSet();
Ud = function() {
  if (!this.modalContext) return;
  this.modalContext.open(
    this,
    qh,
    {
      data: {
        manualApproval: this.manualApproval,
        fields: this.allFields
      },
      value: {
        workflows: this.workflows,
        submitMessageDetail: this.submitMessageDetail
      }
    }
  ).onSubmit().then((e) => {
    e.submitMessageDetail && (this.workspaceContext.setFormProperty(
      "messageOnSubmit",
      e.submitMessageDetail.messageOnSubmit
    ), this.workspaceContext.setFormProperty(
      "messageOnSubmitIsHtml",
      e.submitMessageDetail.messageOnSubmitIsHtml
    ), this.workspaceContext.setFormProperty(
      "goToPageOnSubmit",
      e.submitMessageDetail.goToPageOnSubmit
    )), e.workflows && this.workspaceContext.setFormProperty(
      "formWorkflows",
      e.workflows
    );
  }).catch(() => {
  });
};
lr.styles = [
  O`
      .flex {
        display: flex;
        column-gap: var(--uui-size-5);
      }

      .flex > div:first-child {
        flex: 1;
      }

      uui-button {
        align-self: center;
      }

      forms-form-workflow-summary-stage + forms-form-workflow-summary-stage {
        margin-top: var(--uui-size-5);
      }
    `
];
Ba([
  m({ type: Object })
], lr.prototype, "workflows", 2);
Ba([
  m({ type: Object })
], lr.prototype, "submitMessageDetail", 2);
Ba([
  m({ type: Boolean })
], lr.prototype, "manualApproval", 2);
lr = Ba([
  p(sE)
], lr);
var nE = Object.defineProperty, lE = Object.getOwnPropertyDescriptor, zd = (t) => {
  throw TypeError(t);
}, vr = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? lE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && nE(e, r, i), i;
}, cE = (t, e, r) => e.has(t) || zd("Cannot " + r), uE = (t, e, r) => e.has(t) ? zd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Cn = (t, e, r) => (cE(t, e, "access private method"), r), Bi, Wd, Ld;
const dE = "forms-form-workflow-summary-stage";
let nt = class extends Ce {
  constructor() {
    super(...arguments), uE(this, Bi), this.workflows = [], this.collectionName = "", this.label = "", this.icon = "";
  }
  render() {
    var t;
    return n` <uui-icon .name=${this.icon}></uui-icon>
      <span>${this.label}</span>
      <uui-icon name="icon-arrow-right"></uui-icon>
      ${h(
      this.submitMessageDetail,
      () => n`<uui-button
            compact
            look="outline"
            color="positive"
            .label=${this.localize.term("formWorkflows_submitMessage")}
            @click=${Cn(this, Bi, Wd)}
          ></uui-button>`
    )}
      ${(t = this.workflows) == null ? void 0 : t.map(
      (e, r) => n` ${h(
        this.submitMessageDetail || r > 0,
        () => n`<span>and</span>`
      )}
            <uui-button
              compact
              label=${e.name}
              look=${e.active ? "outline" : "placeholder"}
              color=${e.active ? "positive" : "default"}
              @click=${() => Cn(this, Bi, Ld).call(this, r)}
            ></uui-button>`
    )}`;
  }
};
Bi = /* @__PURE__ */ new WeakSet();
Wd = async function() {
  var a, i, o;
  if (!this.modalContext || !this.workspaceContext) return;
  const t = await this.workspaceContext.getRichTextConfiguration(), r = await this.modalContext.open(
    this,
    Fl,
    {
      data: {
        richTextConfiguration: t
      },
      value: {
        messageOnSubmit: (a = this.submitMessageDetail) == null ? void 0 : a.messageOnSubmit,
        messageOnSubmitIsHtml: ((i = this.submitMessageDetail) == null ? void 0 : i.messageOnSubmitIsHtml) || !1,
        goToPageOnSubmit: (o = this.submitMessageDetail) == null ? void 0 : o.goToPageOnSubmit
      }
    }
  ).onSubmit().catch(() => {
  });
  r && (this.workspaceContext.setFormProperty(
    "messageOnSubmit",
    r.messageOnSubmit
  ), this.workspaceContext.setFormProperty(
    "messageOnSubmitIsHtml",
    r.messageOnSubmitIsHtml
  ), this.workspaceContext.setFormProperty(
    "goToPageOnSubmit",
    r.goToPageOnSubmit
  ));
};
Ld = async function(t) {
  if (!this.modalContext) return;
  const e = this.workflows[t], r = await this.workspaceContext.loadWorkflowType(
    e.workflowTypeId
  );
  if (!r)
    throw new Error(
      `Workflow type with id ${e.workflowTypeId} could not be found.`
    );
  const i = await this.modalContext.open(
    this,
    $l,
    {
      data: {
        fields: this.allFields,
        workflowType: r,
        isNew: !1
      },
      value: {
        name: e.name,
        active: e.active,
        includeSensitiveData: e.includeSensitiveData === Qe.TRUE,
        collectionName: this.collectionName,
        settings: e.settings,
        condition: e.condition
      }
    }
  ).onSubmit().catch(() => {
  });
  !this.workspaceContext || !i || (this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "name",
    i.name
  ), this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "active",
    i.active
  ), this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "includeSensitiveData",
    i.includeSensitiveData ? Qe.TRUE : Qe.FALSE
  ), this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "settings",
    i.settings
  ), this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "condition",
    i.condition
  ), i.collectionName != this.collectionName && this.workspaceContext.moveWorkflow(
    t,
    this.collectionName,
    i.collectionName
  ));
};
nt.styles = [
  O`
      :host {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-3);
      }

      uui-icon:first-of-type {
        border: 1px solid var(--uui-color-border-standalone);
        border-radius: 50%;
        padding: var(--uui-size-2);
        width: var(--uui-size-6);
        height: var(--uui-size-6);
      }
    `
];
vr([
  m({ type: Array })
], nt.prototype, "workflows", 2);
vr([
  m()
], nt.prototype, "collectionName", 2);
vr([
  m({ type: Object })
], nt.prototype, "submitMessageDetail", 2);
vr([
  m()
], nt.prototype, "label", 2);
vr([
  m()
], nt.prototype, "icon", 2);
nt = vr([
  p(dE)
], nt);
var mE = Object.defineProperty, pE = (t, e, r, a) => {
  for (var i = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(e, r, i) || i);
  return i && mE(e, r, i), i;
}, Et, mr, Nd, Vd;
const Xs = class Xs extends lt(
  kt
) {
  constructor() {
    super();
    f(this, mr);
    f(this, Et);
    this.consumeContext(Re, (r) => {
      r && (y(this, Et, r), w(this, mr, Nd).call(this));
    });
  }
  onObserveForm() {
  }
  getAllFieldsForForm() {
    var r;
    return (r = c(this, Et)) == null ? void 0 : r.getAllFields();
  }
  onInputChange(r, a) {
    const i = r.composedPath()[0];
    this.setPropertyValue(a, i.value.toString());
  }
  onRadioChange(r, a) {
    this.setPropertyValue(a, r.target.value);
  }
  onSelectChange(r, a) {
    this.setPropertyValue(a, r.target.value);
  }
  setPropertyValue(r, a) {
    var i;
    (i = c(this, Et)) == null || i.setFormProperty(r, a), this.dispatchEvent(new CustomEvent("valueChange"));
  }
  renderToggle(r, a, i) {
    const o = this.localize.term(i);
    return n`<uui-toggle
      ?checked=${r}
      .label=${o}
      @change=${(s) => w(this, mr, Vd).call(this, s, a)}
    ></uui-toggle>`;
  }
};
Et = new WeakMap(), mr = new WeakSet(), Nd = function() {
  this.observe(c(this, Et).data, (r) => {
    r && (this.form = r, this.onObserveForm());
  });
}, Vd = function(r, a) {
  this.setPropertyValue(a, r.target.checked);
}, Xs.styles = [
  O`
      .flex {
        display: flex;
        flex-direction: column;
      }

      .flex + .flex {
        margin-top: var(--uui-size-3);
      }

      .flex.gap {
        margin-top: var(--uui-size-5);
      }

      .flex + uui-toggle {
        display: block;
        margin-top: var(--uui-size-3);
      }
    `
];
let le = Xs;
pE([
  b()
], le.prototype, "form");
var hE = Object.getOwnPropertyDescriptor, fE = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? hE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const yE = "forms-settings-store-records";
let Tn = class extends le {
  constructor() {
    super(...arguments), this.alias = "storeRecordsLocally";
  }
  render() {
    return n` <umb-property-layout
      .alias=${this.alias}
      .label=${this.localize.term("formSettings_storeRecords")}
      .description=${this.localize.term("formSettings_storeRecordsDescription")}
    >
      <div slot="editor">
        ${this.renderToggle(
      this.form.storeRecordsLocally,
      this.alias,
      "formSettings_storeRecordsConfirm"
    )}
      </div>
    </umb-property-layout>`;
  }
};
Tn = fE([
  p(yE)
], Tn);
var gE = Object.getOwnPropertyDescriptor, vE = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? gE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const _E = "forms-settings-captions";
let On = class extends le {
  render() {
    var t, e, r;
    return n` <umb-property-layout
      alias="captions"
      .label=${this.localize.term("formSettings_captions")}
      .description=${this.localize.term("formSettings_captionsDescription")}
    >
      <div slot="editor">
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_captionSubmitButton"
    )}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_captionSubmitButton")}
            .value=${(t = this.form) == null ? void 0 : t.submitLabel}
            @change=${(a) => this.onInputChange(a, "submitLabel")}
          ></uui-input>
        </div>
        <div class="flex">
          <uui-label
            >${this.localize.term("formSettings_captionNextButton")}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_captionNextButton")}
            .value=${(e = this.form) == null ? void 0 : e.nextLabel}
            @change=${(a) => this.onInputChange(a, "nextLabel")}
          ></uui-input>
        </div>
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_captionPreviousButton"
    )}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_captionPreviousButton")}
            .value=${(r = this.form) == null ? void 0 : r.prevLabel}
            @change=${(a) => this.onInputChange(a, "prevLabel")}
          ></uui-input>
        </div>
      </div>
    </umb-property-layout>`;
  }
};
On = vE([
  p(_E)
], On);
var SE = Object.getOwnPropertyDescriptor, bE = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? SE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const wE = "forms-settings-styling";
let Pn = class extends le {
  render() {
    var t, e;
    return n` <umb-property-layout
      alias="styling"
      .label=${this.localize.term("formSettings_styling")}
      .description=${this.localize.term("formSettings_stylingDescription")}
    >
      <div slot="editor">
        <div class="flex">
          <uui-label
            >${this.localize.term("formSettings_formCssClass")}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_formCssClass")}
            .value=${((t = this.form) == null ? void 0 : t.cssClass) ?? ""}
            @change=${(r) => this.onInputChange(r, "cssClass")}
          ></uui-input>
        </div>
        ${this.renderToggle(
      (e = this.form) == null ? void 0 : e.disableDefaultStylesheet,
      "disableDefaultStylesheet",
      "formSettings_disableDefaultStylesheet"
    )}
      </div>
    </umb-property-layout>`;
  }
};
Pn = bE([
  p(wE)
], Pn);
var FE = Object.getOwnPropertyDescriptor, qd = (t) => {
  throw TypeError(t);
}, EE = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? FE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, $E = (t, e, r) => e.has(t) || qd("Cannot " + r), CE = (t, e, r) => ($E(t, e, "read from private field"), r ? r.call(t) : e.get(t)), TE = (t, e, r) => e.has(t) ? qd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Do;
const OE = "forms-settings-validation";
let xn = class extends le {
  constructor() {
    super(...arguments), TE(this, Do, [
      {
        label: this.localize.term("formSettings_markFieldsNoIndicator"),
        value: "NoIndicator"
      },
      {
        label: this.localize.term("formSettings_markMandatoryFields"),
        value: "MarkMandatoryFields"
      },
      {
        label: this.localize.term("formSettings_markOptionalFields"),
        value: "MarkOptionalFields"
      }
    ]);
  }
  render() {
    var t, e, r, a, i, o;
    return n` <umb-property-layout
      alias="validation"
      .label=${this.localize.term("formSettings_validation")}
      .description=${this.localize.term("formSettings_validationDescription")}
    >
      <div slot="editor">
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_mandatoryErrorMessage"
    )}</uui-label
          >
          <small
            >${this.localize.term(
      "formSettings_mandatoryErrorMessageDescription"
    )}</small
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_mandatoryErrorMessage")}
            .value=${((t = this.form) == null ? void 0 : t.requiredErrorMessage) ?? ""}
            @change=${(s) => this.onInputChange(s, "requiredErrorMessage")}
          ></uui-input>
        </div>
        <div class="flex gap">
          <uui-label
            >${this.localize.term(
      "formSettings_invalidErrorMessage"
    )}</uui-label
          >
          <small
            >${this.localize.term(
      "formSettings_invalidErrorMessageDescription"
    )}</small
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_invalidErrorMessage")}
            .value=${((e = this.form) == null ? void 0 : e.invalidErrorMessage) ?? ""}
            @change=${(s) => this.onInputChange(s, "invalidErrorMessage")}
          ></uui-input>
        </div>
        ${this.renderToggle(
      (r = this.form) == null ? void 0 : r.showValidationSummary,
      "showValidationSummary",
      "formSettings_showValidationSummary"
    )}
        ${this.renderToggle(
      (a = this.form) == null ? void 0 : a.hideFieldValidation,
      "hideFieldValidation",
      "formSettings_hideFieldValidationLabels"
    )}
        <div class="flex gap">
          <uui-label
            >${this.localize.term("formSettings_markFields")}</uui-label
          >
          <uui-radio-group
            .value=${(i = this.form) == null ? void 0 : i.fieldIndicationType}
            @change=${(s) => this.onRadioChange(s, "fieldIndicationType")}
          >
            ${CE(this, Do).map(
      (s) => n`<uui-radio
                  name=${"fieldIndicationType"}
                  value=${s.value}
                  label=${s.label}
                ></uui-radio>`
    )}
          </uui-radio-group>
        </div>
        <div class="flex gap">
          <uui-label>${this.localize.term("formSettings_indicator")}</uui-label>
          <small
            >${this.localize.term("formSettings_changeIndicatorSymbol")}</small
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_indicator")}
            .value=${((o = this.form) == null ? void 0 : o.indicator) ?? ""}
            @change=${(s) => this.onInputChange(s, "indicator")}
          ></uui-input>
        </div>
      </div>
    </umb-property-layout>`;
  }
};
Do = /* @__PURE__ */ new WeakMap();
xn = EE([
  p(OE)
], xn);
var PE = Object.getOwnPropertyDescriptor, jd = (t) => {
  throw TypeError(t);
}, xE = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? PE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, ME = (t, e, r) => e.has(t) || jd("Cannot " + r), DE = (t, e, r) => (ME(t, e, "read from private field"), r ? r.call(t) : e.get(t)), AE = (t, e, r) => e.has(t) ? jd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ao;
const kE = "forms-settings-autocomplete";
let Mn = class extends le {
  constructor() {
    super(...arguments), AE(this, Ao, [
      {
        label: this.localize.term("formSettings_autocompleteNone"),
        value: "None"
      },
      {
        label: this.localize.term("formSettings_autocompleteOn"),
        value: "On"
      },
      {
        label: this.localize.term("formSettings_autocompleteOff"),
        value: "Off"
      }
    ]);
  }
  render() {
    return n` <umb-property-layout
      alias="autocomplete"
      .label=${this.localize.term("formSettings_autocomplete")}
      .description=${this.localize.term("formSettings_autocompleteDescription")}
    >
      <div slot="editor" class="flex">
        <uui-label
          >${this.localize.term(
      "formSettings_autocompleteAttributeValue"
    )}</uui-label
        >
        <uui-radio-group
          .value=${this.form.autocompleteAttribute}
          @change=${(t) => this.onRadioChange(t, "autoCompleteAttribute")}
        >
          ${DE(this, Ao).map(
      (t) => n`<uui-radio
                name=${"autoCompleteAttribute"}
                value=${t.value}
                label=${t.label}
              ></uui-radio>`
    )}
        </uui-radio-group>
      </div>
    </umb-property-layout>`;
  }
};
Ao = /* @__PURE__ */ new WeakMap();
Mn = xE([
  p(kE)
], Mn);
var RE = Object.getOwnPropertyDescriptor, IE = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? RE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const UE = "forms-settings-moderation";
let Dn = class extends le {
  constructor() {
    super(...arguments), this.alias = "manualApproval";
  }
  render() {
    var t;
    return n` <umb-property-layout
      .alias=${this.alias}
      .label=${this.localize.term("formSettings_moderation")}
      .description=${this.localize.term("formSettings_moderationDescription")}
    >
      <div slot="editor">
        ${this.renderToggle(
      (t = this.form) == null ? void 0 : t.manualApproval,
      this.alias,
      "formSettings_enablePostModeration"
    )}
      </div>
    </umb-property-layout>`;
  }
};
Dn = IE([
  p(UE)
], Dn);
var zE = Object.getOwnPropertyDescriptor, Bd = (t) => {
  throw TypeError(t);
}, WE = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? zE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, Yd = (t, e, r) => e.has(t) || Bd("Cannot " + r), LE = (t, e, r) => (Yd(t, e, "read from private field"), r ? r.call(t) : e.get(t)), NE = (t, e, r) => e.has(t) ? Bd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), VE = (t, e, r, a) => (Yd(t, e, "write to private field"), e.set(t, r), r), Yi;
const qE = "forms-settings-data-retention";
let ko = class extends le {
  constructor() {
    super(), NE(this, Yi, !1), this.consumeContext(Fi, (t) => {
      t && this.observe(t.config, (e) => {
        e && VE(this, Yi, e == null ? void 0 : e.scheduledRecordDeletionEnabled);
      });
    });
  }
  render() {
    return n`<umb-property-layout
      alias="dataRetention"
      .label=${this.localize.term("formSettings_dataRetention")}
      .description=${this.localize.term(
      "formSettings_dataRetentionDescription"
    )}
    >
      <div slot="editor">
        <forms-settings-data-retention-stage stage="Submitted">
        </forms-settings-data-retention-stage>
        <forms-settings-data-retention-stage stage="Approved">
        </forms-settings-data-retention-stage>
        <forms-settings-data-retention-stage stage="Rejected">
        </forms-settings-data-retention-stage>

        ${h(
      !LE(this, Yi),
      () => n`<div class="note">
              ${this.localize.term(
        "formSettings_scheduledRecordDeletionNotEnabled"
      )}
            </div>`
    )}
      </div>
    </umb-property-layout>`;
  }
};
Yi = /* @__PURE__ */ new WeakMap();
ko.styles = [
  O`
      .note {
        font-style: italic;
        margin-top: 10px;
      }
    `
];
ko = WE([
  p(qE)
], ko);
var jE = Object.defineProperty, BE = Object.getOwnPropertyDescriptor, Gd = (t) => {
  throw TypeError(t);
}, Is = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? BE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && jE(e, r, i), i;
}, Us = (t, e, r) => e.has(t) || Gd("Cannot " + r), YE = (t, e, r) => (Us(t, e, "read from private field"), r ? r.call(t) : e.get(t)), An = (t, e, r) => e.has(t) ? Gd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), GE = (t, e, r, a) => (Us(t, e, "write to private field"), e.set(t, r), r), Me = (t, e, r) => (Us(t, e, "access private method"), r), fa, ge, zs, Ro, Jr, Hd;
const HE = "forms-settings-data-retention-stage";
let ya = class extends le {
  constructor() {
    super(...arguments), An(this, ge), An(this, fa, 365), this._showDaysToRetain = !1, this.stage = "";
  }
  connectedCallback() {
    super.connectedCallback(), this._showDaysToRetain = this.form[Me(this, ge, Jr).call(this)] > 0;
  }
  render() {
    return n` <div>
      <uui-toggle
        ?checked=${this._showDaysToRetain}
        .label=${this.localize.term(
      `formSettings_dataRetention${this._showDaysToRetain ? "Remove" : "Retain"}${this.stage}Records`
    )}
        @change=${Me(this, ge, Hd)}
      ></uui-toggle>
      ${h(
      this._showDaysToRetain,
      () => n`<div>
            <uui-label>
              ${this.localize.term(
        `formSettings_dataRetentionFor${this.stage}Records`
      )}
            </uui-label>
            <uui-input
              type="number"
              name="numberOfDays"
              .value=${Me(this, ge, zs).call(this)}
              @change=${(t) => this.onInputChange(t, Me(this, ge, Jr).call(this))}
              label="numberOfDays"
            ></uui-input>
          </div>`
    )}
    </div>`;
  }
};
fa = /* @__PURE__ */ new WeakMap();
ge = /* @__PURE__ */ new WeakSet();
zs = function() {
  return this.form[Me(this, ge, Jr).call(this)];
};
Ro = function(t) {
  return this.setPropertyValue(Me(this, ge, Jr).call(this), t);
};
Jr = function() {
  return `daysToRetain${this.stage}RecordsFor`;
};
Hd = function() {
  this._showDaysToRetain = !this._showDaysToRetain, this._showDaysToRetain ? Me(this, ge, Ro).call(this, YE(this, fa)) : (GE(this, fa, Me(this, ge, zs).call(this)), Me(this, ge, Ro).call(this, 0));
};
Is([
  b()
], ya.prototype, "_showDaysToRetain", 2);
Is([
  m()
], ya.prototype, "stage", 2);
ya = Is([
  p(HE)
], ya);
var KE = Object.defineProperty, XE = Object.getOwnPropertyDescriptor, Kd = (t) => {
  throw TypeError(t);
}, Xd = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? XE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && KE(e, r, i), i;
}, Ws = (t, e, r) => e.has(t) || Kd("Cannot " + r), Tt = (t, e, r) => (Ws(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Mi = (t, e, r) => e.has(t) ? Kd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Jd = (t, e, r, a) => (Ws(t, e, "write to private field"), e.set(t, r), r), tt = (t, e, r) => (Ws(t, e, "access private method"), r), Je, Ls, Ya, be, Qd, Io, Zd, em, tm, rm, im;
const JE = "forms-settings-fields-display";
let Uo = class extends le {
  constructor() {
    super(...arguments), Mi(this, be), Mi(this, Je, []), Mi(this, Ls, new Si(this, {
      ...new Ei(
        "Forms.SorterIdentifier.DisplayField",
        ".display-field-row"
      ).config,
      onChange: ({ model: t }) => {
        Jd(this, Je, t);
      },
      onEnd: () => {
        const t = structuredClone(
          this.form.selectedDisplayFields
        );
        t.sort(
          (e, r) => Tt(this, Je).indexOf(e.alias) - Tt(this, Je).indexOf(r.alias)
        ), this.setPropertyValue("selectedDisplayFields", t);
      }
    })), this.formFields = [], Mi(this, Ya, [
      {
        name: "member",
        labelKey: "formEntries_member"
      },
      {
        name: "state",
        labelKey: "formEntries_state"
      },
      {
        name: "created",
        labelKey: "formEntries_submittedOn"
      },
      {
        name: "update",
        labelKey: "formEntries_updatedOn"
      },
      {
        name: "workflows",
        labelKey: "formEdit_workflows"
      }
    ]);
  }
  onObserveForm() {
    tt(this, be, Qd).call(this);
  }
  render() {
    return n`<umb-property-layout
      alias="fieldsDisplayed"
      .label=${this.localize.term("formSettings_fieldsDisplayed")}
      .description=${this.localize.term(
      "formSettings_fieldsDisplayedDescription"
    )}
    >
      <div slot="editor">
        <div class="flex">
          ${this.renderToggle(
      this.form.displayDefaultFields,
      "displayDefaultFields",
      "formSettings_displayDefaultFields"
    )}
        </div>
        <div class="flex">
          ${h(
      this.form.displayDefaultFields,
      () => n`
              ${this.localize.term(
        "formSettings_displayDefaultFieldsDescription"
      )}
            `,
      () => n` ${tt(this, be, rm).call(this)} ${tt(this, be, im).call(this)} `
    )}
        </div>
      </div>
    </umb-property-layout>`;
  }
};
Je = /* @__PURE__ */ new WeakMap();
Ls = /* @__PURE__ */ new WeakMap();
Ya = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakSet();
Qd = function() {
  Jd(this, Je, []);
  const t = this.form.selectedDisplayFields;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    Tt(this, Je).push(r.alias);
  }
  Tt(this, Ls).setModel(Tt(this, Je));
};
Io = function(t, e) {
  return this.form.selectedDisplayFields.some(
    (r) => r.alias === t && r.isSystem === e
  );
};
Zd = function() {
  var a;
  const t = (a = this.shadowRoot) == null ? void 0 : a.getElementById(
    "fields"
  ), e = t.value.toString(), r = structuredClone(
    this.form.selectedDisplayFields
  );
  if (e.startsWith("_system_")) {
    const i = Tt(this, Ya).find(
      (o) => "_system_" + o.name === e
    );
    i && r.push({
      alias: i.name,
      caption: this.localize.term(i.labelKey),
      isSystem: !0
    });
  } else {
    const i = this.formFields.find(
      (o) => o.alias === e
    );
    i && r.push({
      alias: i.alias,
      caption: i.caption,
      isSystem: !1
    });
  }
  this.setPropertyValue("selectedDisplayFields", r), t.value = "";
};
em = function(t, e) {
  const r = t.target.value.toString(), a = structuredClone(
    this.form.selectedDisplayFields
  );
  a[e].caption = r || "", this.setPropertyValue("selectedDisplayFields", a);
};
tm = function(t) {
  const e = structuredClone(
    this.form.selectedDisplayFields
  );
  e.splice(t, 1), this.setPropertyValue("selectedDisplayFields", e);
};
rm = function() {
  return n`<div>
      <uui-select
        style="width:300px"
        id="fields"
        .options=${[
    ...this.formFields.filter((t) => !tt(this, be, Io).call(this, t.alias, !1)).map((t) => ({
      name: this.localize.term(t.caption),
      value: t.alias,
      group: this.localize.term("formSettings_formFields")
    })),
    ...Tt(this, Ya).filter((t) => !tt(this, be, Io).call(this, t.name, !0)).map((t) => ({
      name: this.localize.term(t.labelKey),
      value: `_system_${t.name}`,
      group: this.localize.term("formSettings_systemFields")
    }))
  ]}
      >
      </uui-select>
      <uui-button
        label=${this.localize.term("general_add")}
        look="secondary"
        color="default"
        @click=${tt(this, be, Zd)}
      ></uui-button>
    </div>`;
};
im = function() {
  return this.form.selectedDisplayFields.length === 0 ? n` ${this.localize.term("formSettings_noSelectedDisplayFields")} ` : n`<uui-table>
          <uui-table-head>
            <uui-table-head-cell></uui-table-head-cell>
            <uui-table-head-cell
              >${this.localize.term("general_alias")}</uui-table-head-cell
            >
            <uui-table-head-cell
              >${this.localize.term("general_header")}</uui-table-head-cell
            >
            <uui-table-head-cell></uui-table-head-cell>
          </uui-table-head>
          ${this.form.selectedDisplayFields.map(
    (t, e) => n`<uui-table-row
                class="display-field-row"
                sort-unique=${t.alias}
              >
                <uui-table-cell
                  ><uui-icon name="icon-navigation"></uui-icon
                ></uui-table-cell>
                <uui-table-cell>
                  ${t.alias}
                  ${h(
      t.isSystem,
      () => n`<span
                        >(${this.localize.term("general_systemField")})</span
                      >`
    )}
                </uui-table-cell>
                <uui-table-cell>
                  ${t.isSystem ? n`<uui-input
                        id="caption"
                        name="caption"
                        .value=${t.caption}
                        @change=${(r) => tt(this, be, em).call(this, r, e)}
                        label="Caption"
                      ></uui-input>` : n`${t.caption}`}
                </uui-table-cell>
                <uui-table-cell>
                  <uui-button
                    label="Remove Field"
                    look="secondary"
                    color="default"
                    @click=${() => tt(this, be, tm).call(this, e)}
                    ><uui-icon name="icon-trash"></uui-icon
                  ></uui-button>
                </uui-table-cell>
              </uui-table-row>`
  )}
        </uui-table>`;
};
Xd([
  m({ type: Array })
], Uo.prototype, "formFields", 2);
Uo = Xd([
  p(JE)
], Uo);
var QE = Object.getOwnPropertyDescriptor, am = (t) => {
  throw TypeError(t);
}, ZE = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? QE(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, e$ = (t, e, r) => e.has(t) || am("Cannot " + r), t$ = (t, e, r) => e.has(t) ? am("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), r$ = (t, e, r) => (e$(t, e, "access private method"), r), zo, om;
const i$ = "forms-settings-multi-page";
let kn = class extends le {
  constructor() {
    super(...arguments), t$(this, zo);
  }
  render() {
    var t, e, r, a;
    return n`<umb-property-layout
      alias="multipage"
      .label=${this.localize.term("formSettings_multiPageForms")}
      .description=${this.localize.term(
      "formSettings_multiPageFormsDescription"
    )}
    >
      <div slot="editor">
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_multiPageFormsShowPaging"
    )}</uui-label
          >
          <uui-select
            id="multiPageFormsShowPaging"
            .options=${r$(this, zo, om).call(this, this.form.showPagingOnMultiPageForms)}
            @change=${(i) => this.onSelectChange(i, "showPagingOnMultiPageForms")}
          >
          </uui-select>
        </div>
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_pagingDetailsFormat"
    )}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_pagingDetailsFormat")}
            .value=${(t = this.form) == null ? void 0 : t.pagingDetailsFormat}
            @change=${(i) => this.onInputChange(i, "pagingDetailsFormat")}
          ></uui-input>
        </div>
        <div class="flex">
          <uui-label
            >${this.localize.term("formSettings_pageCaptionFormat")}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_pageCaptionFormat")}
            .value=${(e = this.form) == null ? void 0 : e.pageCaptionFormat}
            @change=${(i) => this.onInputChange(i, "pageCaptionFormat")}
          ></uui-input>
        </div>
        ${this.renderToggle(
      (r = this.form) == null ? void 0 : r.showSummaryPageOnMultiPageForms,
      "showSummaryPageOnMultiPageForms",
      "formSettings_multiPageFormsShowSummaryPage"
    )}
        <div class="flex">
          <uui-label
            >${this.localize.term("formSettings_summaryLabel")}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_summaryLabel")}
            .value=${(a = this.form) == null ? void 0 : a.summaryLabel}
            @change=${(i) => this.onInputChange(i, "summaryLabel")}
          ></uui-input>
        </div>
      </div>
    </umb-property-layout>`;
  }
};
zo = /* @__PURE__ */ new WeakSet();
om = function(t) {
  return [
    {
      name: this.localize.term("formSettings_multiPageFormsNavigationNone"),
      value: ce.NONE.toString(),
      selected: t === ce.NONE.toString()
    },
    {
      name: this.localize.term(
        "formSettings_multiPageFormsNavigationShowOnTop"
      ),
      value: ce.SHOW_AT_TOP.toString(),
      selected: t === ce.SHOW_AT_TOP.toString()
    },
    {
      name: this.localize.term(
        "formSettings_multiPageFormsNavigationShowOnBottom"
      ),
      value: ce.SHOW_AT_BOTTOM.toString(),
      selected: t === ce.SHOW_AT_BOTTOM.toString()
    },
    {
      name: this.localize.term(
        "formSettings_multiPageFormsNavigationShowOnTopAndBottom"
      ),
      value: ce.SHOW_AT_TOP.toString() + ", " + ce.SHOW_AT_BOTTOM.toString(),
      selected: t === ce.SHOW_AT_TOP.toString() + ", " + ce.SHOW_AT_BOTTOM.toString()
    }
  ];
};
kn = ZE([
  p(i$)
], kn);
var a$ = Object.defineProperty, o$ = Object.getOwnPropertyDescriptor, sm = (t) => {
  throw TypeError(t);
}, xi = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? o$(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && a$(e, r, i), i;
}, Ns = (t, e, r) => e.has(t) || sm("Cannot " + r), jt = (t, e, r) => (Ns(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Di = (t, e, r) => e.has(t) ? sm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), co = (t, e, r, a) => (Ns(t, e, "write to private field"), e.set(t, r), r), Gi = (t, e, r) => (Ns(t, e, "access private method"), r), Qr, gt, Vs, Lt, nm, lm, cm, um;
const s$ = "form-security-table";
let At = class extends lt(kt) {
  constructor() {
    super(...arguments), Di(this, Lt), this.records = [], Di(this, Qr, "formName"), Di(this, gt, "asc"), Di(this, Vs, [
      {
        key: "formName",
        label: "formSecurity_formName"
      },
      {
        key: "formCreated",
        label: "content_createDate",
        labelSuffix: "(UTC)"
      },
      {
        key: "hasAccess",
        label: "formSecurity_hasAccess"
      }
    ]);
  }
  get _allFormsAccessible() {
    return this.records.every((t) => t.hasAccess);
  }
  render() {
    return n`<div id="header">
        ${this.localize.term("formSecurity_selectAndDeselect")}
        <uui-toggle
          ?checked=${this._allFormsAccessible}
          @change=${Gi(this, Lt, nm)}
        ></uui-toggle>
      </div>
      <uui-table>
        <uui-table-head> ${Gi(this, Lt, um).call(this)} </uui-table-head>
        ${this.records.map(
      (t) => n`<uui-table-row>
              <uui-table-cell>
                <div>${t.formName}</div>
                <small>${t.fields}</small>
              </uui-table-cell>
              <uui-table-cell>
                <umb-localize-date
                  .date=${t.formCreated}
                  .options=${Ef}
                ></umb-localize-date>
              </uui-table-cell>
              <uui-table-cell>
                <uui-toggle
                  ?checked=${t.hasAccess}
                  label=${this.localize.term("formSecurity_hasAccess")}
                  @change=${() => Gi(this, Lt, cm).call(this, t.form)}
                ></uui-toggle>
              </uui-table-cell>
            </uui-table-row>`
    )}
      </uui-table>`;
  }
};
Qr = /* @__PURE__ */ new WeakMap();
gt = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakSet();
nm = function() {
  const t = !this._allFormsAccessible;
  this.records.forEach((e) => {
    var r;
    (r = this.set) == null || r.call(this, e.form, t), e = { ...e, hasAccess: t };
  }), this.dispatchEvent(new CustomEvent("valueChange"));
};
lm = function(t) {
  jt(this, Qr) !== t ? co(this, gt, "asc") : co(this, gt, jt(this, gt) === "asc" ? "desc" : "asc"), co(this, Qr, t), this.records = [...this.records].sort((e, r) => {
    switch (t) {
      case "hasAccess":
        return Number(e.hasAccess) - Number(r.hasAccess);
      case "formCreated":
        return Date.parse(e.formCreated) - Date.parse(r.formCreated);
      default:
        return e[t].localeCompare(r[t]);
    }
  }), jt(this, gt) === "desc" && this.records.reverse();
};
cm = function(t) {
  var r;
  (r = this.toggle) == null || r.call(this, t);
  let e = this.records.find((a) => a.form === t);
  e && (e = { ...e, hasAccess: !(e != null && e.hasAccess) }), this.dispatchEvent(new CustomEvent("valueChange"));
};
um = function() {
  return n`${jt(this, Vs).map(
    (t) => n`<uui-table-head-cell>
          <button @click=${() => Gi(this, Lt, lm).call(this, t.key)}>
            ${this.localize.term(t.label) + (t.labelSuffix ? ` ${t.labelSuffix}` : "")}
            <uui-symbol-sort
              ?active=${jt(this, Qr) === t.key}
              ?descending=${jt(this, gt) === "desc"}
            ></uui-symbol-sort>
          </button>
        </uui-table-head-cell>`
  )}`;
};
At.styles = O`
    #header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      column-gap: var(--uui-size-3);
    }

    uui-table-head-cell button {
      background-color: transparent;
      color: inherit;
      border: none;
      cursor: pointer;
      font-weight: inherit;
      font-size: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: var(--uui-size-5) var(--uui-size-1);
    }
  `;
xi([
  m()
], At.prototype, "set", 2);
xi([
  m()
], At.prototype, "toggle", 2);
xi([
  m({ type: Array })
], At.prototype, "records", 2);
xi([
  b()
], At.prototype, "_allFormsAccessible", 1);
At = xi([
  p(s$)
], At);
var n$ = Object.defineProperty, l$ = Object.getOwnPropertyDescriptor, dm = (t) => {
  throw TypeError(t);
}, Ga = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? l$(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && n$(e, r, i), i;
}, qs = (t, e, r) => e.has(t) || dm("Cannot " + r), $r = (t, e, r) => (qs(t, e, "read from private field"), e.get(t)), Rn = (t, e, r) => e.has(t) ? dm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), c$ = (t, e, r, a) => (qs(t, e, "write to private field"), e.set(t, r), r), In = (t, e, r) => (qs(t, e, "access private method"), r), Le, Hi, Wo;
let cr = class extends $e {
  constructor() {
    super(), Rn(this, Hi), Rn(this, Le), this.consumeContext(Ua, (t) => {
      var e, r;
      c$(this, Le, t), this._startDate = (e = $r(this, Le)) == null ? void 0 : e.oneMonthAgo(), this._endDate = (r = $r(this, Le)) == null ? void 0 : r.today();
    });
  }
  render() {
    var t, e;
    return n`
      <div class="input-container">
        <uui-label for="start-date">From:</uui-label>
        <uui-input
          id="start-date"
          type="date"
          label="From"
          .max=${(t = $r(this, Le)) == null ? void 0 : t.today()}
          .value=${this._startDate}
          @change=${In(this, Hi, Wo)}
        ></uui-input>
      </div>
      <div class="input-container">
        <uui-label for="end-date">To: </uui-label>
        <uui-input
          id="end-date"
          type="date"
          label="To"
          .min=${this._startDate}
          .max=${(e = $r(this, Le)) == null ? void 0 : e.today()}
          .value=${this._endDate}
          @change=${In(this, Hi, Wo)}
        ></uui-input>
      </div>
    `;
  }
};
Le = /* @__PURE__ */ new WeakMap();
Hi = /* @__PURE__ */ new WeakSet();
Wo = function() {
  var t;
  this._inputs.forEach((e) => {
    e.id === "start-date" ? this._startDate = e.value.toString() : e.id === "end-date" && (this._endDate = e.value.toString());
  }), (t = $r(this, Le)) == null || t.setFilter({
    startDate: this._startDate,
    endDate: this._endDate
  });
};
cr.styles = [
  Ca,
  O`
      :host {
        display: flex;
        gap: var(--uui-size-space-5);
      }

      .input-container {
        display: flex;
        align-items: baseline;
        column-gap: var(--uui-size-space-3);
      }
    `
];
Ga([
  b()
], cr.prototype, "_startDate", 2);
Ga([
  b()
], cr.prototype, "_endDate", 2);
Ga([
  Gn("uui-input")
], cr.prototype, "_inputs", 2);
cr = Ga([
  p("form-entry-filter-date-range-selector")
], cr);
var u$ = Object.defineProperty, d$ = Object.getOwnPropertyDescriptor, mm = (t) => {
  throw TypeError(t);
}, pm = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? d$(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && u$(e, r, i), i;
}, js = (t, e, r) => e.has(t) || mm("Cannot " + r), m$ = (t, e, r) => (js(t, e, "read from private field"), e.get(t)), Un = (t, e, r) => e.has(t) ? mm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), p$ = (t, e, r, a) => (js(t, e, "write to private field"), e.set(t, r), r), h$ = (t, e, r) => (js(t, e, "access private method"), r), ga, Lo, hm;
let va = class extends $e {
  constructor() {
    super(), Un(this, Lo), this._filterText = "", Un(this, ga), this.consumeContext(Ua, (t) => {
      p$(this, ga, t);
    });
  }
  render() {
    return n`
      <uui-input
        label="Filter entries"
        placeholder=${this.localize.term("formEntries_filterEntries")}
        .value=${this._filterText}
        @change=${h$(this, Lo, hm)}
      ></uui-input>
    `;
  }
};
ga = /* @__PURE__ */ new WeakMap();
Lo = /* @__PURE__ */ new WeakSet();
hm = function(t) {
  var r;
  const e = t.target.value;
  this._filterText = e.toString(), (r = m$(this, ga)) == null || r.setFilter({ filter: this._filterText });
};
va.styles = [
  Ca,
  O`
      :host,
      uui-input {
        width: 100%;
      }
    `
];
pm([
  b()
], va.prototype, "_filterText", 2);
va = pm([
  p("form-entry-filter-text")
], va);
var f$ = Object.defineProperty, y$ = Object.getOwnPropertyDescriptor, fm = (t) => {
  throw TypeError(t);
}, Ha = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? y$(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && f$(e, r, i), i;
}, g$ = (t, e, r) => e.has(t) || fm("Cannot " + r), v$ = (t, e, r) => e.has(t) ? fm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), No = (t, e, r) => (g$(t, e, "access private method"), r), Or, ym, Vo;
const _$ = "ref-form";
let ur = class extends lt(
  np
) {
  constructor() {
    super(...arguments), v$(this, Or), this.selectable = !1, this._count = 0;
  }
  async connectedCallback() {
    var t, e;
    if (super.connectedCallback(), !(!this.model || !((t = this.config) != null && t.viewEntries)))
      if ("count" in this.model)
        this._count = this.model.count;
      else {
        const { data: r } = await d(
          this,
          Ze.getFormByFormIdRecordMetadata({
            path: { formId: (e = this.model) == null ? void 0 : e.id }
          })
        );
        this._count = r.count;
      }
  }
  render() {
    var t, e, r;
    return n`
      <div id="open-part" tabindex="0">
        <div id="content">
          <span id="icon"><uui-icon .svg=${this.fallbackIcon}></uui-icon></span>
          <div id="info">
            <div id="name">${this.model.name}</div>
            ${this.renderDetail()}
          </div>
        </div>
      </div>
      <div id="select-border"></div>

      <slot name="actions" id="actions-container">
        <uui-action-bar>
          ${h(
      (t = this.config) == null ? void 0 : t.manageForms,
      () => No(this, Or, Vo).call(this, "edit", "formsDashboard_editForm")
    )}
          ${h(
      (e = this.config) == null ? void 0 : e.viewEntries,
      () => No(this, Or, Vo).call(this, "view", "formsDashboard_viewEntries")
    )}
        </uui-action-bar>
      </slot>
      ${h(
      (r = this.config) == null ? void 0 : r.viewEntries,
      () => n` <uui-tag size="s" slot="tag" color="positive"
            >${this.localize.term(
        "formsDashboard_entriesCount",
        this._count
      )}</uui-tag
          >`
    )}
    `;
  }
};
Or = /* @__PURE__ */ new WeakSet();
ym = function(t) {
  this.dispatchEvent(new CustomEvent(t));
};
Vo = function(t, e) {
  return n`<uui-button
      @click=${() => No(this, Or, ym).call(this, t)}
      label=${this.localize.term(e)}
    ></uui-button>`;
};
ur.styles = [
  ...lp.styles,
  O`
      #open-part {
        cursor: default;
      }

      #open-part:hover #name,
      #open-part:hover #icon {
        color: var(--uui-color-text) !important;
        text-decoration: none !important;
      }

      #info {
        min-width: 150px;
      }

      #actions-container {
        margin-left: auto;
      }

      uui-action-bar {
        justify-content: end;
      }

      uui-tag {
        margin: 0 var(--uui-size-8);
      }
    `
];
Ha([
  m({ type: Object })
], ur.prototype, "model", 2);
Ha([
  m({ type: Object })
], ur.prototype, "config", 2);
Ha([
  b()
], ur.prototype, "_count", 2);
ur = Ha([
  p(_$)
], ur);
class S$ extends Xn {
  constructor(e) {
    super(
      e,
      Pu,
      Kh,
      (r) => r.unique
    );
  }
}
var b$ = Object.defineProperty, w$ = Object.getOwnPropertyDescriptor, gm = (t) => {
  throw TypeError(t);
}, It = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? w$(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && b$(e, r, i), i;
}, vm = (t, e, r) => e.has(t) || gm("Cannot " + r), Bt = (t, e, r) => (vm(t, e, "read from private field"), r ? r.call(t) : e.get(t)), uo = (t, e, r) => e.has(t) ? gm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), dr = (t, e, r) => (vm(t, e, "access private method"), r), vt, rt, _m, Sm, Bs, bm, wm, Fm, Em;
const F$ = "forms-input-form";
let ke = class extends Kn(
  $e,
  ""
) {
  constructor() {
    super(), uo(this, rt), this.multiple = !1, this.allowedFolders = [], this.allowedForms = [], uo(this, vt, new S$(this)), uo(this, Bs, (t) => !t.isFolder && (this.allowedForms.length === 0 || this.allowedForms.indexOf(t.unique) > -1) && (this.allowedFolders.length === 0 || this.allowedFolders.some(
      (e) => Hn(t.path).includes(e)
    ))), this.observe(
      Bt(this, vt).selectedItems,
      (t) => this._items = t
    );
  }
  get selection() {
    return Bt(this, vt).getSelection();
  }
  set selection(t) {
    Bt(this, vt).setSelection(t ?? []);
  }
  async connectedCallback() {
    super.connectedCallback();
    const { data: t } = await d(
      this,
      ne.getSecurityUserCurrentFormSecurity({
        query: { includeFormFieldDetails: !1 }
      })
    );
    this._userSecurity = t.userSecurity;
  }
  getFormElement() {
  }
  render() {
    return n`${dr(this, rt, wm).call(this)} ${dr(this, rt, Fm).call(this)}`;
  }
};
vt = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakSet();
_m = function(t) {
  history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${oe}/edit/${t}`
  );
};
Sm = function(t) {
  history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${oe}/edit/${t}/view/entries`
  );
};
Bs = /* @__PURE__ */ new WeakMap();
bm = function() {
  Bt(this, vt).openPicker({
    hideTreeRoot: !0,
    multiple: this.multiple,
    pickableFilter: Bt(this, Bs)
  });
};
wm = function() {
  var t;
  if ((t = this._items) != null && t.length)
    return n`<uui-ref-list>
      ${_i(
      this._items,
      (e) => e.unique,
      (e) => dr(this, rt, Em).call(this, e)
    )}
    </uui-ref-list>`;
};
Fm = function() {
  return n`<uui-button
      id="add-button"
      look="placeholder"
      @click=${dr(this, rt, bm)}
      label=${this.localize.term("general_choose")}
    ></uui-button>`;
};
Em = function(t) {
  var e, r;
  if (t.unique)
    return n`
      <uui-ref-node name=${t.name}>
        <umb-icon slot="icon" name="icon-umb-contour"></umb-icon>
        <uui-action-bar slot="actions">
          ${h(
      (e = this._userSecurity) == null ? void 0 : e.manageForms,
      () => n`<uui-button
                @click=${() => dr(this, rt, _m).call(this, t.unique)}
                label=${this.localize.term("general_edit")}
              ></uui-button>`
    )}
          ${h(
      (r = this._userSecurity) == null ? void 0 : r.viewEntries,
      () => n`<uui-button
                @click=${() => dr(this, rt, Sm).call(this, t.unique)}
                label=${this.localize.term("general_open")}
              ></uui-button>`
    )}
          <uui-button
            @click=${() => Bt(this, vt).requestRemoveItem(t.unique)}
            label=${this.localize.term(
      "formPicker_removeItemButtonLabel",
      t.name
    )}
          >
            ${this.localize.term("general_remove")}
          </uui-button>
        </uui-action-bar>
      </uui-ref-node>
    `;
};
ke.styles = [
  O`
      #add-button {
        width: 100%;
      }

      uui-ref-node[drag-placeholder] {
        opacity: 0.2;
      }
    `
];
It([
  m({ type: Array })
], ke.prototype, "selection", 1);
It([
  m({ type: Boolean })
], ke.prototype, "multiple", 2);
It([
  m({ type: Array })
], ke.prototype, "allowedFolders", 2);
It([
  m({ type: Array })
], ke.prototype, "allowedForms", 2);
It([
  b()
], ke.prototype, "_userSecurity", 2);
It([
  b()
], ke.prototype, "_items", 2);
ke = It([
  p(F$)
], ke);
class E$ extends Xn {
  constructor(e) {
    super(
      e,
      xu,
      Nh,
      (r) => r.unique
    );
  }
}
var $$ = Object.defineProperty, C$ = Object.getOwnPropertyDescriptor, $m = (t) => {
  throw TypeError(t);
}, Ys = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? C$(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && $$(e, r, i), i;
}, Cm = (t, e, r) => e.has(t) || $m("Cannot " + r), _t = (t, e, r) => (Cm(t, e, "read from private field"), r ? r.call(t) : e.get(t)), mo = (t, e, r) => e.has(t) ? $m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), _a = (t, e, r) => (Cm(t, e, "access private method"), r), Ve, Gs, Yt, Tm, Om, Pm, xm;
const T$ = "forms-input-folder";
let Zr = class extends Kn(
  $e,
  ""
) {
  constructor() {
    super(), mo(this, Yt), mo(this, Ve, new E$(this)), mo(this, Gs, (t) => t.isFolder), this.observe(
      _t(this, Ve).selection,
      (t) => this.value = t.join(",")
    ), this.observe(
      _t(this, Ve).selectedItems,
      (t) => this._items = t
    );
  }
  get selection() {
    return _t(this, Ve).getSelection();
  }
  set selection(t) {
    _t(this, Ve).setSelection(t ?? []);
  }
  set value(t) {
    this.selection = Hn(t);
  }
  get value() {
    return this.selection.join(",");
  }
  connectedCallback() {
    super.connectedCallback();
  }
  getFormElement() {
  }
  render() {
    return n`${_a(this, Yt, Om).call(this)} ${_a(this, Yt, Pm).call(this)}`;
  }
};
Ve = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakMap();
Yt = /* @__PURE__ */ new WeakSet();
Tm = function() {
  _t(this, Ve).openPicker({
    pickableFilter: _t(this, Gs)
  });
};
Om = function() {
  var t;
  if ((t = this._items) != null && t.length)
    return n`<uui-ref-list>
      ${_i(
      this._items,
      (e) => e.unique,
      (e) => _a(this, Yt, xm).call(this, e)
    )}
    </uui-ref-list>`;
};
Pm = function() {
  return n`<uui-button
      id="add-button"
      look="placeholder"
      @click=${_a(this, Yt, Tm)}
      label=${this.localize.term("general_choose")}
    ></uui-button>`;
};
xm = function(t) {
  if (t.unique)
    return n`
      <uui-ref-node name=${t.name}>
        <umb-icon slot="icon" name="icon-folder"></umb-icon>
        <uui-action-bar slot="actions">
          <uui-button
            @click=${() => _t(this, Ve).requestRemoveItem(t.unique)}
            label=${this.localize.term(
      "formPicker_removeItemButtonLabel",
      t.name
    )}
          >
            ${this.localize.term("general_remove")}
          </uui-button>
        </uui-action-bar>
      </uui-ref-node>
    `;
};
Zr.styles = [
  O`
      #add-button {
        width: 100%;
      }

      uui-ref-node[drag-placeholder] {
        opacity: 0.2;
      }
    `
];
Ys([
  m()
], Zr.prototype, "value", 1);
Ys([
  b()
], Zr.prototype, "_items", 2);
Zr = Ys([
  p(T$)
], Zr);
var gi;
class O$ {
  constructor(e) {
    f(this, gi);
    y(this, gi, e);
  }
  async getCollection() {
    const { data: e, error: r } = await d(
      c(this, gi),
      Yp.getTheme()
    );
    if (r)
      return { error: r };
    const a = e.map((i) => ({
      name: i.name,
      entityType: "forms-theme",
      unique: i.name
    }));
    return {
      data: {
        items: a,
        total: a.length
      }
    };
  }
}
gi = new WeakMap();
var vi;
class P$ {
  constructor(e) {
    f(this, vi);
    y(this, vi, new O$(e));
  }
  async requestCollection() {
    return c(this, vi).getCollection();
  }
  destroy() {
  }
}
vi = new WeakMap();
var x$ = Object.defineProperty, M$ = Object.getOwnPropertyDescriptor, Mm = (t) => {
  throw TypeError(t);
}, Hs = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? M$(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && x$(e, r, i), i;
}, D$ = (t, e, r) => e.has(t) || Mm("Cannot " + r), A$ = (t, e, r) => e.has(t) ? Mm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), zn = (t, e, r) => (D$(t, e, "access private method"), r), Ki, Dm, Am;
const k$ = "forms-input-theme";
let Sa = class extends $e {
  constructor() {
    super(...arguments), A$(this, Ki), this._options = [], this.value = "";
  }
  async connectedCallback() {
    super.connectedCallback(), await zn(this, Ki, Dm).call(this);
  }
  render() {
    return n`
      <uui-select
        name="themePicker"
        label="Theme picker"
        @change=${zn(this, Ki, Am)}
        .options=${this._options.map((t) => ({
      name: t,
      value: t,
      selected: t === this.value
    }))}
      >
      </uui-select>
    `;
  }
};
Ki = /* @__PURE__ */ new WeakSet();
Dm = async function() {
  const t = new P$(this), { data: e } = await t.requestCollection();
  this._options = (e == null ? void 0 : e.items.map((r) => r.name)) ?? [];
};
Am = function(t) {
  const e = t.target.value.toString();
  e !== this.value && (this.value = e, this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  ));
};
Hs([
  b()
], Sa.prototype, "_options", 2);
Hs([
  m()
], Sa.prototype, "value", 2);
Sa = Hs([
  p(k$)
], Sa);
const R$ = [
  ...yF,
  ...Kw,
  ...up,
  ...Jw,
  ...hF,
  ...gF
], FC = (t, e) => {
  e.registerMany(R$), t.consumeContext(op, async (r) => {
    if (!r) return;
    const a = r.getOpenApiConfiguration();
    u.setConfig({
      baseUrl: a.base,
      auth: async () => await r.getLatestToken(),
      credentials: a.credentials
    });
  });
};
export {
  Bp as $,
  ht as A,
  wC as B,
  $i as C,
  Ef as D,
  yC as E,
  Ko as F,
  Pt as G,
  MF as H,
  Xi as I,
  ku as J,
  SC as K,
  gC as L,
  na as M,
  Wu as N,
  og as O,
  Gf as P,
  Ti as Q,
  Ze as R,
  ne as S,
  Fs as T,
  _C as U,
  yr as V,
  mw as W,
  Es as X,
  Oi as Y,
  Sw as Z,
  Vp as _,
  Ho as a,
  Cl as a$,
  Cu as a0,
  me as a1,
  pr as a2,
  Qo as a3,
  ev as a4,
  Ua as a5,
  Hh as a6,
  za as a7,
  FC as a8,
  Xr as a9,
  LS as aA,
  NS as aB,
  cr as aC,
  va as aD,
  ur as aE,
  ke as aF,
  Zr as aG,
  Sa as aH,
  Nh as aI,
  hl as aJ,
  fl as aK,
  yl as aL,
  Vh as aM,
  gl as aN,
  qh as aO,
  vl as aP,
  jh as aQ,
  _l as aR,
  Bh as aS,
  Sl as aT,
  Yh as aU,
  bl as aV,
  Gh as aW,
  wl as aX,
  Fl as aY,
  El as aZ,
  $l as a_,
  ca as aa,
  Hr as ab,
  Kr as ac,
  ua as ad,
  ma as ae,
  pa as af,
  Dt as ag,
  Se as ah,
  nr as ai,
  st as aj,
  lr as ak,
  nt as al,
  le as am,
  Tn as an,
  On as ao,
  Pn as ap,
  xn as aq,
  Mn as ar,
  Dn as as,
  ko as at,
  ya as au,
  Uo as av,
  kn as aw,
  At as ax,
  wo as ay,
  Du as az,
  ee as b,
  Kh as b0,
  Tl as b1,
  Xh as b2,
  Ol as b3,
  Qi as b4,
  ea as b5,
  _e as b6,
  xr as b7,
  ta as b8,
  Mr as b9,
  xt as ba,
  pe as bb,
  Mt as bc,
  _o as bd,
  ir as be,
  kr as bf,
  ot as bg,
  Rr as bh,
  nn as bi,
  Re as c,
  Fi as d,
  wn as e,
  Fn as f,
  dv as g,
  bC as h,
  vC as i,
  bh as j,
  fr as k,
  Wg as l,
  Ir as m,
  hh as n,
  zy as o,
  wi as p,
  Rt as q,
  Ug as r,
  Rg as s,
  Ig as t,
  Ne as u,
  Jg as v,
  Gy as w,
  Tg as x,
  oe as y,
  Oa as z
};
//# sourceMappingURL=index.js.map

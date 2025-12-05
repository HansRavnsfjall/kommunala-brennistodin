var Q = /* @__PURE__ */ ((r) => (r.NEW = "New", r.SAVE = "Save", r.SAVE_VARIANT = "SaveVariant", r.OPEN = "Open", r.DELETE = "Delete", r.PUBLISH = "Publish", r.PUBLISH_VARIANT = "PublishVariant", r.SEND_TO_PUBLISH = "SendToPublish", r.SEND_TO_PUBLISH_VARIANT = "SendToPublishVariant", r.UNPUBLISH = "Unpublish", r.UNPUBLISH_VARIANT = "UnpublishVariant", r.MOVE = "Move", r.COPY = "Copy", r.ASSIGN_DOMAIN = "AssignDomain", r.PUBLIC_ACCESS = "PublicAccess", r.SORT = "Sort", r.NOTIFY = "Notify", r.SYSTEM = "System", r.ROLL_BACK = "RollBack", r.PACKAGER_INSTALL = "PackagerInstall", r.PACKAGER_UNINSTALL = "PackagerUninstall", r.CUSTOM = "Custom", r.CONTENT_VERSION_PREVENT_CLEANUP = "ContentVersionPreventCleanup", r.CONTENT_VERSION_ENABLE_CLEANUP = "ContentVersionEnableCleanup", r))(Q || {}), Y = /* @__PURE__ */ ((r) => (r.COMPOSITION = "Composition", r.INHERITANCE = "Inheritance", r))(Y || {}), J = /* @__PURE__ */ ((r) => (r.TRUE = "True", r.FALSE = "False", r.FALSE_WITH_HELP_TEXT = "FalseWithHelpText", r))(J || {}), K = /* @__PURE__ */ ((r) => (r.ASCENDING = "Ascending", r.DESCENDING = "Descending", r))(K || {}), X = /* @__PURE__ */ ((r) => (r.NOT_CREATED = "NotCreated", r.DRAFT = "Draft", r.PUBLISHED = "Published", r.PUBLISHED_PENDING_CHANGES = "PublishedPendingChanges", r.TRASHED = "Trashed", r))(X || {}), Z = /* @__PURE__ */ ((r) => (r.DEFAULT = "Default", r.INFO = "Info", r.ERROR = "Error", r.SUCCESS = "Success", r.WARNING = "Warning", r))(Z || {}), ee = /* @__PURE__ */ ((r) => (r.HEALTHY = "Healthy", r.UNHEALTHY = "Unhealthy", r.REBUILDING = "Rebuilding", r.CORRUPT = "Corrupt", r))(ee || {}), te = /* @__PURE__ */ ((r) => (r.CROP = "Crop", r.MAX = "Max", r.STRETCH = "Stretch", r.PAD = "Pad", r.BOX_PAD = "BoxPad", r.MIN = "Min", r))(te || {}), re = /* @__PURE__ */ ((r) => (r.VERBOSE = "Verbose", r.DEBUG = "Debug", r.INFORMATION = "Information", r.WARNING = "Warning", r.ERROR = "Error", r.FATAL = "Fatal", r))(re || {}), ae = /* @__PURE__ */ ((r) => (r.DEFAULT = "Default", r.API = "Api", r))(ae || {}), ce = /* @__PURE__ */ ((r) => (r.NOTHING = "Nothing", r.IN_MEMORY_AUTO = "InMemoryAuto", r.SOURCE_CODE_MANUAL = "SourceCodeManual", r.SOURCE_CODE_AUTO = "SourceCodeAuto", r))(ce || {}), ne = /* @__PURE__ */ ((r) => (r.EQUALS = "Equals", r.NOT_EQUALS = "NotEquals", r.CONTAINS = "Contains", r.NOT_CONTAINS = "NotContains", r.LESS_THAN = "LessThan", r.LESS_THAN_EQUAL_TO = "LessThanEqualTo", r.GREATER_THAN = "GreaterThan", r.GREATER_THAN_EQUAL_TO = "GreaterThanEqualTo", r))(ne || {}), ie = /* @__PURE__ */ ((r) => (r.OUT_OF_DATE = "OutOfDate", r.CURRENT = "Current", r.UNKNOWN = "Unknown", r))(ie || {}), ue = /* @__PURE__ */ ((r) => (r.ENABLED = "Enabled", r.DISABLED = "Disabled", r))(ue || {}), se = /* @__PURE__ */ ((r) => (r.UNKNOWN = "Unknown", r.BOOT = "Boot", r.INSTALL = "Install", r.UPGRADE = "Upgrade", r.RUN = "Run", r.BOOT_FAILED = "BootFailed", r))(se || {}), me = /* @__PURE__ */ ((r) => (r.BACKOFFICE_DEVELOPMENT = "BackofficeDevelopment", r.DEVELOPMENT = "Development", r.PRODUCTION = "Production", r))(me || {}), pe = /* @__PURE__ */ ((r) => (r.SUCCESS = "Success", r.WARNING = "Warning", r.ERROR = "Error", r.INFO = "Info", r))(pe || {}), le = /* @__PURE__ */ ((r) => (r.MINIMAL = "Minimal", r.BASIC = "Basic", r.DETAILED = "Detailed", r))(le || {}), ye = /* @__PURE__ */ ((r) => (r.STRING = "String", r.DATE_TIME = "DateTime", r.INTEGER = "Integer", r))(ye || {}), he = /* @__PURE__ */ ((r) => (r.SUCCESS = "Success", r.NOT_FOUND = "NotFound", r.USER_NOT_FOUND = "UserNotFound", r.ALREADY_EXISTS = "AlreadyExists", r))(he || {}), de = /* @__PURE__ */ ((r) => (r.DEFAULT = "Default", r.API = "Api", r))(de || {}), ge = /* @__PURE__ */ ((r) => (r.USER_NAME = "UserName", r.LANGUAGE = "Language", r.NAME = "Name", r.EMAIL = "Email", r.ID = "Id", r.CREATE_DATE = "CreateDate", r.UPDATE_DATE = "UpdateDate", r.IS_APPROVED = "IsApproved", r.IS_LOCKED_OUT = "IsLockedOut", r.LAST_LOGIN_DATE = "LastLoginDate", r))(ge || {}), be = /* @__PURE__ */ ((r) => (r.ACTIVE = "Active", r.DISABLED = "Disabled", r.LOCKED_OUT = "LockedOut", r.INVITED = "Invited", r.INACTIVE = "Inactive", r.ALL = "All", r))(be || {});
const L = (r, e, a) => {
  typeof a == "string" || a instanceof Blob ? r.append(e, a) : a instanceof Date ? r.append(e, a.toISOString()) : r.append(e, JSON.stringify(a));
}, oe = {
  bodySerializer: (r) => {
    const e = new FormData();
    return Object.entries(r).forEach(([a, n]) => {
      n != null && (Array.isArray(n) ? n.forEach((i) => L(e, a, i)) : L(e, a, n));
    }), e;
  }
}, ve = {
  bodySerializer: (r) => JSON.stringify(
    r,
    (e, a) => typeof a == "bigint" ? a.toString() : a
  )
}, Te = ({
  onRequest: r,
  onSseError: e,
  onSseEvent: a,
  responseTransformer: n,
  responseValidator: i,
  sseDefaultRetryDelay: p,
  sseMaxRetryAttempts: m,
  sseMaxRetryDelay: u,
  sseSleepFn: s,
  url: y,
  ...c
}) => {
  let h;
  const S = s ?? ((l) => new Promise((g) => setTimeout(g, l)));
  return { stream: async function* () {
    let l = p ?? 3e3, g = 0;
    const I = c.signal ?? new AbortController().signal;
    for (; !I.aborted; ) {
      g++;
      const D = c.headers instanceof Headers ? c.headers : new Headers(c.headers);
      h !== void 0 && D.set("Last-Event-ID", h);
      try {
        const C = {
          redirect: "follow",
          ...c,
          body: c.serializedBody,
          headers: D,
          signal: I
        };
        let v = new Request(y, C);
        r && (v = await r(y, C));
        const b = await (c.fetch ?? globalThis.fetch)(v);
        if (!b.ok)
          throw new Error(
            `SSE failed: ${b.status} ${b.statusText}`
          );
        if (!b.body) throw new Error("No body in SSE response");
        const T = b.body.pipeThrough(new TextDecoderStream()).getReader();
        let w = "";
        const N = () => {
          try {
            T.cancel();
          } catch {
          }
        };
        I.addEventListener("abort", N);
        try {
          for (; ; ) {
            const { done: M, value: q } = await T.read();
            if (M) break;
            w += q;
            const R = w.split(`

`);
            w = R.pop() ?? "";
            for (const W of R) {
              const $ = W.split(`
`), j = [];
              let U;
              for (const o of $)
                if (o.startsWith("data:"))
                  j.push(o.replace(/^data:\s*/, ""));
                else if (o.startsWith("event:"))
                  U = o.replace(/^event:\s*/, "");
                else if (o.startsWith("id:"))
                  h = o.replace(/^id:\s*/, "");
                else if (o.startsWith("retry:")) {
                  const O = Number.parseInt(
                    o.replace(/^retry:\s*/, ""),
                    10
                  );
                  Number.isNaN(O) || (l = O);
                }
              let B, k = !1;
              if (j.length) {
                const o = j.join(`
`);
                try {
                  B = JSON.parse(o), k = !0;
                } catch {
                  B = o;
                }
              }
              k && (i && await i(B), n && (B = await n(B))), a?.({
                data: B,
                event: U,
                id: h,
                retry: l
              }), j.length && (yield B);
            }
          }
        } finally {
          I.removeEventListener("abort", N), T.releaseLock();
        }
        break;
      } catch (C) {
        if (e?.(C), m !== void 0 && g >= m)
          break;
        const v = Math.min(
          l * 2 ** (g - 1),
          u ?? 3e4
        );
        await S(v);
      }
    }
  }() };
}, fe = (r) => {
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
}, Ie = (r) => {
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
}, Ce = (r) => {
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
}, _ = ({
  allowReserved: r,
  explode: e,
  name: a,
  style: n,
  value: i
}) => {
  if (!e) {
    const u = (r ? i : i.map((s) => encodeURIComponent(s))).join(Ie(n));
    switch (n) {
      case "label":
        return `.${u}`;
      case "matrix":
        return `;${a}=${u}`;
      case "simple":
        return u;
      default:
        return `${a}=${u}`;
    }
  }
  const p = fe(n), m = i.map((u) => n === "label" || n === "simple" ? r ? u : encodeURIComponent(u) : A({
    allowReserved: r,
    name: a,
    value: u
  })).join(p);
  return n === "label" || n === "matrix" ? p + m : m;
}, A = ({
  allowReserved: r,
  name: e,
  value: a
}) => {
  if (a == null)
    return "";
  if (typeof a == "object")
    throw new Error(
      "Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these."
    );
  return `${e}=${r ? a : encodeURIComponent(a)}`;
}, x = ({
  allowReserved: r,
  explode: e,
  name: a,
  style: n,
  value: i,
  valueOnly: p
}) => {
  if (i instanceof Date)
    return p ? i.toISOString() : `${a}=${i.toISOString()}`;
  if (n !== "deepObject" && !e) {
    let s = [];
    Object.entries(i).forEach(([c, h]) => {
      s = [
        ...s,
        c,
        r ? h : encodeURIComponent(h)
      ];
    });
    const y = s.join(",");
    switch (n) {
      case "form":
        return `${a}=${y}`;
      case "label":
        return `.${y}`;
      case "matrix":
        return `;${a}=${y}`;
      default:
        return y;
    }
  }
  const m = Ce(n), u = Object.entries(i).map(
    ([s, y]) => A({
      allowReserved: r,
      name: n === "deepObject" ? `${a}[${s}]` : s,
      value: y
    })
  ).join(m);
  return n === "label" || n === "matrix" ? m + u : u;
}, Be = /\{[^{}]+\}/g, Se = ({ path: r, url: e }) => {
  let a = e;
  const n = e.match(Be);
  if (n)
    for (const i of n) {
      let p = !1, m = i.substring(1, i.length - 1), u = "simple";
      m.endsWith("*") && (p = !0, m = m.substring(0, m.length - 1)), m.startsWith(".") ? (m = m.substring(1), u = "label") : m.startsWith(";") && (m = m.substring(1), u = "matrix");
      const s = r[m];
      if (s == null)
        continue;
      if (Array.isArray(s)) {
        a = a.replace(
          i,
          _({ explode: p, name: m, style: u, value: s })
        );
        continue;
      }
      if (typeof s == "object") {
        a = a.replace(
          i,
          x({
            explode: p,
            name: m,
            style: u,
            value: s,
            valueOnly: !0
          })
        );
        continue;
      }
      if (u === "matrix") {
        a = a.replace(
          i,
          `;${A({
            name: m,
            value: s
          })}`
        );
        continue;
      }
      const y = encodeURIComponent(
        u === "label" ? `.${s}` : s
      );
      a = a.replace(i, y);
    }
  return a;
}, De = ({
  baseUrl: r,
  path: e,
  query: a,
  querySerializer: n,
  url: i
}) => {
  const p = i.startsWith("/") ? i : `/${i}`;
  let m = (r ?? "") + p;
  e && (m = Se({ path: e, url: m }));
  let u = a ? n(a) : "";
  return u.startsWith("?") && (u = u.substring(1)), u && (m += `?${u}`), m;
};
function Ee(r) {
  const e = r.body !== void 0;
  if (e && r.bodySerializer)
    return "serializedBody" in r ? r.serializedBody !== void 0 && r.serializedBody !== "" ? r.serializedBody : null : r.body !== "" ? r.body : null;
  if (e)
    return r.body;
}
const je = async (r, e) => {
  const a = typeof e == "function" ? await e(r) : e;
  if (a)
    return r.scheme === "bearer" ? `Bearer ${a}` : r.scheme === "basic" ? `Basic ${btoa(a)}` : a;
}, G = ({
  allowReserved: r,
  array: e,
  object: a
} = {}) => (i) => {
  const p = [];
  if (i && typeof i == "object")
    for (const m in i) {
      const u = i[m];
      if (u != null)
        if (Array.isArray(u)) {
          const s = _({
            allowReserved: r,
            explode: !0,
            name: m,
            style: "form",
            value: u,
            ...e
          });
          s && p.push(s);
        } else if (typeof u == "object") {
          const s = x({
            allowReserved: r,
            explode: !0,
            name: m,
            style: "deepObject",
            value: u,
            ...a
          });
          s && p.push(s);
        } else {
          const s = A({
            allowReserved: r,
            name: m,
            value: u
          });
          s && p.push(s);
        }
    }
  return p.join("&");
}, Ae = (r) => {
  if (!r)
    return "stream";
  const e = r.split(";")[0]?.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json"))
      return "json";
    if (e === "multipart/form-data")
      return "formData";
    if (["application/", "audio/", "image/", "video/"].some(
      (a) => e.startsWith(a)
    ))
      return "blob";
    if (e.startsWith("text/"))
      return "text";
  }
}, we = (r, e) => e ? !!(r.headers.has(e) || r.query?.[e] || r.headers.get("Cookie")?.includes(`${e}=`)) : !1, Pe = async ({
  security: r,
  ...e
}) => {
  for (const a of r) {
    if (we(e, a.name))
      continue;
    const n = await je(a, e.auth);
    if (!n)
      continue;
    const i = a.name ?? "Authorization";
    switch (a.in) {
      case "query":
        e.query || (e.query = {}), e.query[i] = n;
        break;
      case "cookie":
        e.headers.append("Cookie", `${i}=${n}`);
        break;
      case "header":
      default:
        e.headers.set(i, n);
        break;
    }
  }
}, F = (r) => De({
  baseUrl: r.baseUrl,
  path: r.path,
  query: r.query,
  querySerializer: typeof r.querySerializer == "function" ? r.querySerializer : G(r.querySerializer),
  url: r.url
}), V = (r, e) => {
  const a = { ...r, ...e };
  return a.baseUrl?.endsWith("/") && (a.baseUrl = a.baseUrl.substring(0, a.baseUrl.length - 1)), a.headers = z(r.headers, e.headers), a;
}, Ne = (r) => {
  const e = [];
  return r.forEach((a, n) => {
    e.push([n, a]);
  }), e;
}, z = (...r) => {
  const e = new Headers();
  for (const a of r) {
    if (!a)
      continue;
    const n = a instanceof Headers ? Ne(a) : Object.entries(a);
    for (const [i, p] of n)
      if (p === null)
        e.delete(i);
      else if (Array.isArray(p))
        for (const m of p)
          e.append(i, m);
      else p !== void 0 && e.set(
        i,
        typeof p == "object" ? JSON.stringify(p) : p
      );
  }
  return e;
};
class P {
  constructor() {
    this.fns = [];
  }
  clear() {
    this.fns = [];
  }
  eject(e) {
    const a = this.getInterceptorIndex(e);
    this.fns[a] && (this.fns[a] = null);
  }
  exists(e) {
    const a = this.getInterceptorIndex(e);
    return !!this.fns[a];
  }
  getInterceptorIndex(e) {
    return typeof e == "number" ? this.fns[e] ? e : -1 : this.fns.indexOf(e);
  }
  update(e, a) {
    const n = this.getInterceptorIndex(e);
    return this.fns[n] ? (this.fns[n] = a, e) : !1;
  }
  use(e) {
    return this.fns.push(e), this.fns.length - 1;
  }
}
const Re = () => ({
  error: new P(),
  request: new P(),
  response: new P()
}), Ue = G({
  allowReserved: !1,
  array: {
    explode: !0,
    style: "form"
  },
  object: {
    explode: !0,
    style: "deepObject"
  }
}), ke = {
  "Content-Type": "application/json"
}, H = (r = {}) => ({
  ...ve,
  headers: ke,
  parseAs: "auto",
  querySerializer: Ue,
  ...r
}), Oe = (r = {}) => {
  let e = V(H(), r);
  const a = () => ({ ...e }), n = (y) => (e = V(e, y), a()), i = Re(), p = async (y) => {
    const c = {
      ...e,
      ...y,
      fetch: y.fetch ?? e.fetch ?? globalThis.fetch,
      headers: z(e.headers, y.headers),
      serializedBody: void 0
    };
    c.security && await Pe({
      ...c,
      security: c.security
    }), c.requestValidator && await c.requestValidator(c), c.body !== void 0 && c.bodySerializer && (c.serializedBody = c.bodySerializer(c.body)), (c.body === void 0 || c.serializedBody === "") && c.headers.delete("Content-Type");
    const h = F(c);
    return { opts: c, url: h };
  }, m = async (y) => {
    const { opts: c, url: h } = await p(y), S = {
      redirect: "follow",
      ...c,
      body: Ee(c)
    };
    let f = new Request(h, S);
    for (const d of i.request.fns)
      d && (f = await d(f, c));
    const E = c.fetch;
    let l = await E(f);
    for (const d of i.response.fns)
      d && (l = await d(l, f, c));
    const g = {
      request: f,
      response: l
    };
    if (l.ok) {
      const d = (c.parseAs === "auto" ? Ae(l.headers.get("Content-Type")) : c.parseAs) ?? "json";
      if (l.status === 204 || l.headers.get("Content-Length") === "0") {
        let T;
        switch (d) {
          case "arrayBuffer":
          case "blob":
          case "text":
            T = await l[d]();
            break;
          case "formData":
            T = new FormData();
            break;
          case "stream":
            T = l.body;
            break;
          case "json":
          default:
            T = {};
            break;
        }
        return c.responseStyle === "data" ? T : {
          data: T,
          ...g
        };
      }
      let b;
      switch (d) {
        case "arrayBuffer":
        case "blob":
        case "formData":
        case "json":
        case "text":
          b = await l[d]();
          break;
        case "stream":
          return c.responseStyle === "data" ? l.body : {
            data: l.body,
            ...g
          };
      }
      return d === "json" && (c.responseValidator && await c.responseValidator(b), c.responseTransformer && (b = await c.responseTransformer(b))), c.responseStyle === "data" ? b : {
        data: b,
        ...g
      };
    }
    const I = await l.text();
    let D;
    try {
      D = JSON.parse(I);
    } catch {
    }
    const C = D ?? I;
    let v = C;
    for (const d of i.error.fns)
      d && (v = await d(C, l, f, c));
    if (v = v || {}, c.throwOnError)
      throw v;
    return c.responseStyle === "data" ? void 0 : {
      error: v,
      ...g
    };
  }, u = (y) => (c) => m({ ...c, method: y }), s = (y) => async (c) => {
    const { opts: h, url: S } = await p(c);
    return Te({
      ...h,
      body: h.body,
      headers: h.headers,
      method: y,
      onRequest: async (f, E) => {
        let l = new Request(f, E);
        for (const g of i.request.fns)
          g && (l = await g(l, h));
        return l;
      },
      url: S
    });
  };
  return {
    buildUrl: F,
    connect: u("CONNECT"),
    delete: u("DELETE"),
    get: u("GET"),
    getConfig: a,
    head: u("HEAD"),
    interceptors: i,
    options: u("OPTIONS"),
    patch: u("PATCH"),
    post: u("POST"),
    put: u("PUT"),
    request: m,
    setConfig: n,
    sse: {
      connect: s("CONNECT"),
      delete: s("DELETE"),
      get: s("GET"),
      head: s("HEAD"),
      options: s("OPTIONS"),
      patch: s("PATCH"),
      post: s("POST"),
      put: s("PUT"),
      trace: s("TRACE")
    },
    trace: u("TRACE")
  };
}, t = Oe(H({
  throwOnError: !0
}));
class Ve {
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
class _e {
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
  static getTreeDataTypeSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/data-type/siblings",
      ...e
    });
  }
}
class xe {
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
        ...e.headers
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
        ...e.headers
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
class Ge {
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
  static getTreeDocumentBlueprintSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document-blueprint/siblings",
      ...e
    });
  }
}
class ze {
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
  static getTreeDocumentTypeSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document-type/siblings",
      ...e
    });
  }
}
class He {
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
class Le {
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
        ...e.headers
      }
    });
  }
}
class Fe {
  static {
    this.documentByIdValidate1Service = Le;
  }
}
class Me {
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
        ...e.headers
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
  /**
   * @deprecated
   */
  static getDocumentByIdAvailableSegmentOptions(e) {
    return (e.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/document/{id}/available-segment-options",
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
  static getRecycleBinDocumentSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/document/siblings",
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
  static getTreeDocumentSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/document/siblings",
      ...e
    });
  }
  static {
    this.putUmbracoManagementApiV1Service = Fe;
  }
}
class qe {
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
class We {
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
class $e {
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
class Qe {
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
class Ye {
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
class Je {
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
class Ke {
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
class Xe {
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
        ...e.headers
      }
    });
  }
}
class Ze {
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
class et {
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
class tt {
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
  static getTreeMediaTypeSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/media-type/siblings",
      ...e
    });
  }
}
class rt {
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
  static getRecycleBinMediaSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/recycle-bin/media/siblings",
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
  static getTreeMediaSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/media/siblings",
      ...e
    });
  }
}
class at {
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
        ...e.headers
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
class ct {
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
        ...e.headers
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
  static getTreeMemberTypeSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/member-type/siblings",
      ...e
    });
  }
}
class nt {
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
        ...e.headers
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
        ...e.headers
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
class it {
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
class ut {
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
class st {
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
class mt {
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
        ...e.headers
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
class pt {
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
        ...e.headers
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
        ...e.headers
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
  static getTreePartialViewSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/partial-view/siblings",
      ...e
    });
  }
}
class lt {
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
class yt {
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
class ht {
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
class dt {
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
class gt {
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
class bt {
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
class ot {
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
class vt {
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
        ...e.headers
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
        ...e.headers
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
  static getTreeScriptSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/script/siblings",
      ...e
    });
  }
}
class Tt {
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
class ft {
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
class It {
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
class Ct {
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
class Bt {
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
class St {
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
        ...e.headers
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
        ...e.headers
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
  static getTreeStylesheetSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/stylesheet/siblings",
      ...e
    });
  }
}
class Dt {
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
class Et {
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
class jt {
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
        ...e.headers
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
  static getTreeTemplateSiblings(e) {
    return (e?.client ?? t).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/management/api/v1/tree/template/siblings",
      ...e
    });
  }
}
class At {
  static postTemporaryFile(e) {
    return (e?.client ?? t).post({
      ...oe,
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
class wt {
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
class Pt {
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
  static deleteUserDataById(e) {
    return (e.client ?? t).delete({
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
class Nt {
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
      }
    });
  }
}
class Rt {
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
        ...e.headers
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
class Ut {
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
        ...e.headers
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
  Q as AuditTypeModel,
  Y as CompositionTypeModel,
  Ve as CultureService,
  J as DataTypeChangeModeModel,
  _e as DataTypeService,
  xe as DictionaryService,
  K as DirectionModel,
  Ge as DocumentBlueprintService,
  Le as DocumentByIdValidate1Service,
  Me as DocumentService,
  ze as DocumentTypeService,
  X as DocumentVariantStateModel,
  He as DocumentVersionService,
  qe as DynamicRootService,
  Z as EventMessageTypeModel,
  We as HealthCheckService,
  ee as HealthStatusModel,
  $e as HelpService,
  te as ImageCropModeModel,
  Qe as ImagingService,
  Ye as ImportService,
  Je as IndexerService,
  Ke as InstallService,
  Xe as LanguageService,
  re as LogLevelModel,
  Ze as LogViewerService,
  et as ManifestService,
  rt as MediaService,
  tt as MediaTypeService,
  at as MemberGroupService,
  ae as MemberKindModel,
  nt as MemberService,
  ct as MemberTypeService,
  it as ModelsBuilderService,
  ce as ModelsModeModel,
  st as OEmbedService,
  ut as ObjectTypesService,
  ne as OperatorModel,
  ie as OutOfDateTypeModel,
  mt as PackageService,
  pt as PartialViewService,
  lt as PreviewService,
  yt as ProfilingService,
  ht as PropertyTypeService,
  dt as PublishedCacheService,
  Fe as PutUmbracoManagementApiV1Service,
  gt as RedirectManagementService,
  ue as RedirectStatusModel,
  ot as RelationService,
  bt as RelationTypeService,
  se as RuntimeLevelModel,
  me as RuntimeModeModel,
  vt as ScriptService,
  Tt as SearcherService,
  ft as SecurityService,
  It as SegmentService,
  Ct as ServerService,
  Bt as StaticFileService,
  pe as StatusResultTypeModel,
  St as StylesheetService,
  Dt as TagService,
  le as TelemetryLevelModel,
  Et as TelemetryService,
  ye as TemplateQueryPropertyTypeModel,
  jt as TemplateService,
  At as TemporaryFileService,
  wt as UpgradeService,
  he as UserDataOperationStatusModel,
  Pt as UserDataService,
  Nt as UserGroupService,
  de as UserKindModel,
  ge as UserOrderModel,
  Rt as UserService,
  be as UserStateModel,
  Ut as WebhookService,
  t as client
};
//# sourceMappingURL=index.js.map

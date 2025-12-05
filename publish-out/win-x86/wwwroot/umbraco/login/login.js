import { property as p, customElement as x, ifDefined as ze, html as l, css as A, when as ve, nothing as R, query as ut, state as m, queryAssignedElements as Qt, unsafeHTML as Yt, until as Kt } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { umbExtensionsRegistry as pe, UmbAppEntryPointExtensionInitializer as Xt } from "@umbraco-cms/backoffice/extension-registry";
import { UmbRepositoryBase as er } from "@umbraco-cms/backoffice/repository";
import { UmbLocalizationController as tr } from "@umbraco-cms/backoffice/localization-api";
import { isProblemDetailsLike as rr } from "@umbraco-cms/backoffice/resources";
import { UmbContextBase as ar, UmbControllerBase as or } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as ir } from "@umbraco-cms/backoffice/context-api";
import { UmbBundleExtensionInitializer as sr, UmbServerExtensionRegistrator as nr } from "@umbraco-cms/backoffice/extension-api";
import { UUIIconRegistryEssential as ur } from "@umbraco-cms/backoffice/external/uui";
import { UmbServerConnection as lr, UmbServerContext as cr } from "@umbraco-cms/backoffice/server";
import { firstValueFrom as dr } from "@umbraco-cms/backoffice/external/rxjs";
import "@umbraco-cms/backoffice/localization";
const hr = {
  bodySerializer: (t) => JSON.stringify(
    t,
    (e, r) => typeof r == "bigint" ? r.toString() : r
  )
}, pr = ({
  onRequest: t,
  onSseError: e,
  onSseEvent: r,
  responseTransformer: o,
  responseValidator: a,
  sseDefaultRetryDelay: s,
  sseMaxRetryAttempts: i,
  sseMaxRetryDelay: n,
  sseSleepFn: c,
  url: h,
  ...u
}) => {
  let f;
  const K = c ?? ((d) => new Promise((v) => setTimeout(v, d)));
  return { stream: async function* () {
    let d = s ?? 3e3, v = 0;
    const M = u.signal ?? new AbortController().signal;
    for (; !M.aborted; ) {
      v++;
      const X = u.headers instanceof Headers ? u.headers : new Headers(u.headers);
      f !== void 0 && X.set("Last-Event-ID", f);
      try {
        const F = {
          redirect: "follow",
          ...u,
          body: u.serializedBody,
          headers: X,
          signal: M
        };
        let P = new Request(h, F);
        t && (P = await t(h, F));
        const b = await (u.fetch ?? globalThis.fetch)(P);
        if (!b.ok)
          throw new Error(
            `SSE failed: ${b.status} ${b.statusText}`
          );
        if (!b.body) throw new Error("No body in SSE response");
        const z = b.body.pipeThrough(new TextDecoderStream()).getReader();
        let Pe = "";
        const Ve = () => {
          try {
            z.cancel();
          } catch {
          }
        };
        M.addEventListener("abort", Ve);
        try {
          for (; ; ) {
            const { done: Ht, value: Gt } = await z.read();
            if (Ht) break;
            Pe += Gt;
            const Ne = Pe.split(`

`);
            Pe = Ne.pop() ?? "";
            for (const Jt of Ne) {
              const Zt = Jt.split(`
`), de = [];
              let He;
              for (const y of Zt)
                if (y.startsWith("data:"))
                  de.push(y.replace(/^data:\s*/, ""));
                else if (y.startsWith("event:"))
                  He = y.replace(/^event:\s*/, "");
                else if (y.startsWith("id:"))
                  f = y.replace(/^id:\s*/, "");
                else if (y.startsWith("retry:")) {
                  const Je = Number.parseInt(
                    y.replace(/^retry:\s*/, ""),
                    10
                  );
                  Number.isNaN(Je) || (d = Je);
                }
              let W, Ge = !1;
              if (de.length) {
                const y = de.join(`
`);
                try {
                  W = JSON.parse(y), Ge = !0;
                } catch {
                  W = y;
                }
              }
              Ge && (a && await a(W), o && (W = await o(W))), r?.({
                data: W,
                event: He,
                id: f,
                retry: d
              }), de.length && (yield W);
            }
          }
        } finally {
          M.removeEventListener("abort", Ve), z.releaseLock();
        }
        break;
      } catch (F) {
        if (e?.(F), i !== void 0 && v >= i)
          break;
        const P = Math.min(
          d * 2 ** (v - 1),
          n ?? 3e4
        );
        await K(P);
      }
    }
  }() };
}, mr = (t) => {
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
}, fr = (t) => {
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
}, gr = (t) => {
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
}, lt = ({
  allowReserved: t,
  explode: e,
  name: r,
  style: o,
  value: a
}) => {
  if (!e) {
    const n = (t ? a : a.map((c) => encodeURIComponent(c))).join(fr(o));
    switch (o) {
      case "label":
        return `.${n}`;
      case "matrix":
        return `;${r}=${n}`;
      case "simple":
        return n;
      default:
        return `${r}=${n}`;
    }
  }
  const s = mr(o), i = a.map((n) => o === "label" || o === "simple" ? t ? n : encodeURIComponent(n) : ye({
    allowReserved: t,
    name: r,
    value: n
  })).join(s);
  return o === "label" || o === "matrix" ? s + i : i;
}, ye = ({
  allowReserved: t,
  name: e,
  value: r
}) => {
  if (r == null)
    return "";
  if (typeof r == "object")
    throw new Error(
      "Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these."
    );
  return `${e}=${t ? r : encodeURIComponent(r)}`;
}, ct = ({
  allowReserved: t,
  explode: e,
  name: r,
  style: o,
  value: a,
  valueOnly: s
}) => {
  if (a instanceof Date)
    return s ? a.toISOString() : `${r}=${a.toISOString()}`;
  if (o !== "deepObject" && !e) {
    let c = [];
    Object.entries(a).forEach(([u, f]) => {
      c = [
        ...c,
        u,
        t ? f : encodeURIComponent(f)
      ];
    });
    const h = c.join(",");
    switch (o) {
      case "form":
        return `${r}=${h}`;
      case "label":
        return `.${h}`;
      case "matrix":
        return `;${r}=${h}`;
      default:
        return h;
    }
  }
  const i = gr(o), n = Object.entries(a).map(
    ([c, h]) => ye({
      allowReserved: t,
      name: o === "deepObject" ? `${r}[${c}]` : c,
      value: h
    })
  ).join(i);
  return o === "label" || o === "matrix" ? i + n : n;
}, wr = /\{[^{}]+\}/g, vr = ({ path: t, url: e }) => {
  let r = e;
  const o = e.match(wr);
  if (o)
    for (const a of o) {
      let s = !1, i = a.substring(1, a.length - 1), n = "simple";
      i.endsWith("*") && (s = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), n = "label") : i.startsWith(";") && (i = i.substring(1), n = "matrix");
      const c = t[i];
      if (c == null)
        continue;
      if (Array.isArray(c)) {
        r = r.replace(
          a,
          lt({ explode: s, name: i, style: n, value: c })
        );
        continue;
      }
      if (typeof c == "object") {
        r = r.replace(
          a,
          ct({
            explode: s,
            name: i,
            style: n,
            value: c,
            valueOnly: !0
          })
        );
        continue;
      }
      if (n === "matrix") {
        r = r.replace(
          a,
          `;${ye({
            name: i,
            value: c
          })}`
        );
        continue;
      }
      const h = encodeURIComponent(
        n === "label" ? `.${c}` : c
      );
      r = r.replace(a, h);
    }
  return r;
}, br = ({
  baseUrl: t,
  path: e,
  query: r,
  querySerializer: o,
  url: a
}) => {
  const s = a.startsWith("/") ? a : `/${a}`;
  let i = (t ?? "") + s;
  e && (i = vr({ path: e, url: i }));
  let n = r ? o(r) : "";
  return n.startsWith("?") && (n = n.substring(1)), n && (i += `?${n}`), i;
};
function yr(t) {
  const e = t.body !== void 0;
  if (e && t.bodySerializer)
    return "serializedBody" in t ? t.serializedBody !== void 0 && t.serializedBody !== "" ? t.serializedBody : null : t.body !== "" ? t.body : null;
  if (e)
    return t.body;
}
const _r = async (t, e) => {
  const r = typeof e == "function" ? await e(t) : e;
  if (r)
    return t.scheme === "bearer" ? `Bearer ${r}` : t.scheme === "basic" ? `Basic ${btoa(r)}` : r;
}, dt = ({
  allowReserved: t,
  array: e,
  object: r
} = {}) => (a) => {
  const s = [];
  if (a && typeof a == "object")
    for (const i in a) {
      const n = a[i];
      if (n != null)
        if (Array.isArray(n)) {
          const c = lt({
            allowReserved: t,
            explode: !0,
            name: i,
            style: "form",
            value: n,
            ...e
          });
          c && s.push(c);
        } else if (typeof n == "object") {
          const c = ct({
            allowReserved: t,
            explode: !0,
            name: i,
            style: "deepObject",
            value: n,
            ...r
          });
          c && s.push(c);
        } else {
          const c = ye({
            allowReserved: t,
            name: i,
            value: n
          });
          c && s.push(c);
        }
    }
  return s.join("&");
}, Cr = (t) => {
  if (!t)
    return "stream";
  const e = t.split(";")[0]?.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json"))
      return "json";
    if (e === "multipart/form-data")
      return "formData";
    if (["application/", "audio/", "image/", "video/"].some(
      (r) => e.startsWith(r)
    ))
      return "blob";
    if (e.startsWith("text/"))
      return "text";
  }
}, xr = (t, e) => e ? !!(t.headers.has(e) || t.query?.[e] || t.headers.get("Cookie")?.includes(`${e}=`)) : !1, $r = async ({
  security: t,
  ...e
}) => {
  for (const r of t) {
    if (xr(e, r.name))
      continue;
    const o = await _r(r, e.auth);
    if (!o)
      continue;
    const a = r.name ?? "Authorization";
    switch (r.in) {
      case "query":
        e.query || (e.query = {}), e.query[a] = o;
        break;
      case "cookie":
        e.headers.append("Cookie", `${a}=${o}`);
        break;
      case "header":
      default:
        e.headers.set(a, o);
        break;
    }
  }
}, Ze = (t) => br({
  baseUrl: t.baseUrl,
  path: t.path,
  query: t.query,
  querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : dt(t.querySerializer),
  url: t.url
}), Qe = (t, e) => {
  const r = { ...t, ...e };
  return r.baseUrl?.endsWith("/") && (r.baseUrl = r.baseUrl.substring(0, r.baseUrl.length - 1)), r.headers = ht(t.headers, e.headers), r;
}, Pr = (t) => {
  const e = [];
  return t.forEach((r, o) => {
    e.push([o, r]);
  }), e;
}, ht = (...t) => {
  const e = new Headers();
  for (const r of t) {
    if (!r)
      continue;
    const o = r instanceof Headers ? Pr(r) : Object.entries(r);
    for (const [a, s] of o)
      if (s === null)
        e.delete(a);
      else if (Array.isArray(s))
        for (const i of s)
          e.append(a, i);
      else s !== void 0 && e.set(
        a,
        typeof s == "object" ? JSON.stringify(s) : s
      );
  }
  return e;
};
class Ee {
  constructor() {
    this.fns = [];
  }
  clear() {
    this.fns = [];
  }
  eject(e) {
    const r = this.getInterceptorIndex(e);
    this.fns[r] && (this.fns[r] = null);
  }
  exists(e) {
    const r = this.getInterceptorIndex(e);
    return !!this.fns[r];
  }
  getInterceptorIndex(e) {
    return typeof e == "number" ? this.fns[e] ? e : -1 : this.fns.indexOf(e);
  }
  update(e, r) {
    const o = this.getInterceptorIndex(e);
    return this.fns[o] ? (this.fns[o] = r, e) : !1;
  }
  use(e) {
    return this.fns.push(e), this.fns.length - 1;
  }
}
const zr = () => ({
  error: new Ee(),
  request: new Ee(),
  response: new Ee()
}), Er = dt({
  allowReserved: !1,
  array: {
    explode: !0,
    style: "form"
  },
  object: {
    explode: !0,
    style: "deepObject"
  }
}), kr = {
  "Content-Type": "application/json"
}, pt = (t = {}) => ({
  ...hr,
  headers: kr,
  parseAs: "auto",
  querySerializer: Er,
  ...t
}), Sr = (t = {}) => {
  let e = Qe(pt(), t);
  const r = () => ({ ...e }), o = (h) => (e = Qe(e, h), r()), a = zr(), s = async (h) => {
    const u = {
      ...e,
      ...h,
      fetch: h.fetch ?? e.fetch ?? globalThis.fetch,
      headers: ht(e.headers, h.headers),
      serializedBody: void 0
    };
    u.security && await $r({
      ...u,
      security: u.security
    }), u.requestValidator && await u.requestValidator(u), u.body !== void 0 && u.bodySerializer && (u.serializedBody = u.bodySerializer(u.body)), (u.body === void 0 || u.serializedBody === "") && u.headers.delete("Content-Type");
    const f = Ze(u);
    return { opts: u, url: f };
  }, i = async (h) => {
    const { opts: u, url: f } = await s(h), K = {
      redirect: "follow",
      ...u,
      body: yr(u)
    };
    let S = new Request(f, K);
    for (const g of a.request.fns)
      g && (S = await g(S, u));
    const ce = u.fetch;
    let d = await ce(S);
    for (const g of a.response.fns)
      g && (d = await g(d, S, u));
    const v = {
      request: S,
      response: d
    };
    if (d.ok) {
      const g = (u.parseAs === "auto" ? Cr(d.headers.get("Content-Type")) : u.parseAs) ?? "json";
      if (d.status === 204 || d.headers.get("Content-Length") === "0") {
        let z;
        switch (g) {
          case "arrayBuffer":
          case "blob":
          case "text":
            z = await d[g]();
            break;
          case "formData":
            z = new FormData();
            break;
          case "stream":
            z = d.body;
            break;
          case "json":
          default:
            z = {};
            break;
        }
        return u.responseStyle === "data" ? z : {
          data: z,
          ...v
        };
      }
      let b;
      switch (g) {
        case "arrayBuffer":
        case "blob":
        case "formData":
        case "json":
        case "text":
          b = await d[g]();
          break;
        case "stream":
          return u.responseStyle === "data" ? d.body : {
            data: d.body,
            ...v
          };
      }
      return g === "json" && (u.responseValidator && await u.responseValidator(b), u.responseTransformer && (b = await u.responseTransformer(b))), u.responseStyle === "data" ? b : {
        data: b,
        ...v
      };
    }
    const M = await d.text();
    let X;
    try {
      X = JSON.parse(M);
    } catch {
    }
    const F = X ?? M;
    let P = F;
    for (const g of a.error.fns)
      g && (P = await g(F, d, S, u));
    if (P = P || {}, u.throwOnError)
      throw P;
    return u.responseStyle === "data" ? void 0 : {
      error: P,
      ...v
    };
  }, n = (h) => (u) => i({ ...u, method: h }), c = (h) => async (u) => {
    const { opts: f, url: K } = await s(u);
    return pr({
      ...f,
      body: f.body,
      headers: f.headers,
      method: h,
      onRequest: async (S, ce) => {
        let d = new Request(S, ce);
        for (const v of a.request.fns)
          v && (d = await v(d, f));
        return d;
      },
      url: K
    });
  };
  return {
    buildUrl: Ze,
    connect: n("CONNECT"),
    delete: n("DELETE"),
    get: n("GET"),
    getConfig: r,
    head: n("HEAD"),
    interceptors: a,
    options: n("OPTIONS"),
    patch: n("PATCH"),
    post: n("POST"),
    put: n("PUT"),
    request: i,
    setConfig: o,
    sse: {
      connect: c("CONNECT"),
      delete: c("DELETE"),
      get: c("GET"),
      head: c("HEAD"),
      options: c("OPTIONS"),
      patch: c("PATCH"),
      post: c("POST"),
      put: c("PUT"),
      trace: c("TRACE")
    },
    trace: n("TRACE")
  };
}, le = Sr(pt()), Ir = (t) => (t?.client ?? le).post({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/umbraco/management/api/v1/security/forgot-password",
  ...t,
  headers: {
    "Content-Type": "application/json",
    ...t?.headers
  }
}), Lr = (t) => (t?.client ?? le).post({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/umbraco/management/api/v1/security/forgot-password/reset",
  ...t,
  headers: {
    "Content-Type": "application/json",
    ...t?.headers
  }
}), Or = (t) => (t?.client ?? le).post({
  url: "/umbraco/management/api/v1/security/forgot-password/verify",
  ...t,
  headers: {
    "Content-Type": "application/json",
    ...t?.headers
  }
}), Ur = (t) => (t?.client ?? le).post({
  url: "/umbraco/management/api/v1/user/invite/create-password",
  ...t,
  headers: {
    "Content-Type": "application/json",
    ...t?.headers
  }
}), Dr = (t) => (t?.client ?? le).post({
  url: "/umbraco/management/api/v1/user/invite/verify",
  ...t,
  headers: {
    "Content-Type": "application/json",
    ...t?.headers
  }
});
class Tr extends er {
  #e = new tr(this);
  async login(e) {
    try {
      const r = new Request("/umbraco/management/api/v1/security/back-office/login", {
        method: "POST",
        body: JSON.stringify({
          username: e.username,
          password: e.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }), o = await fetch(r);
      if (!o.ok) {
        if (o.status === 402) {
          const a = await o.json();
          return {
            status: o.status,
            twoFactorView: a.twoFactorLoginView ?? "",
            twoFactorProviders: a.enabledTwoFactorProviderNames ?? []
          };
        }
        return {
          status: o.status,
          error: await this.#r(o)
        };
      }
      return {
        status: o.status,
        data: {
          username: e.username
        }
      };
    } catch (r) {
      return {
        status: 500,
        error: r instanceof Error ? r.message : this.#e.term("auth_receivedErrorFromServer")
      };
    }
  }
  async validateMfaCode(e, r) {
    try {
      const o = new Request("/umbraco/management/api/v1/security/back-office/verify-2fa", {
        method: "POST",
        body: JSON.stringify({
          code: e,
          provider: r
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }), a = await fetch(o);
      return a.ok ? {} : {
        error: a.status === 400 ? this.#e.term("auth_mfaInvalidCode") : await this.#r(a)
      };
    } catch (o) {
      return {
        error: o instanceof Error ? o.message : this.#e.term("auth_receivedErrorFromServer")
      };
    }
  }
  async resetPassword(e) {
    const { error: r } = await Ir({
      body: {
        email: e
      }
    });
    return r ? {
      error: this.#t(r, "Could not reset the password")
    } : {};
  }
  async validatePasswordResetCode(e, r) {
    const { data: o, error: a } = await Or({
      body: {
        user: {
          id: e
        },
        resetCode: r
      }
    });
    return a || !o ? {
      error: this.#t(a, "Could not validate the password reset code")
    } : o;
  }
  async newPassword(e, r, o) {
    const { error: a } = await Lr({
      body: {
        password: e,
        resetCode: r,
        user: {
          id: o
        }
      }
    });
    return a ? {
      error: this.#t(a, "Could not reset the password")
    } : {};
  }
  async validateInviteCode(e, r) {
    const { data: o, error: a } = await Dr({
      body: {
        token: e,
        user: {
          id: r
        }
      }
    });
    return a || !o ? {
      error: this.#t(a, "Could not validate the invite code")
    } : o;
  }
  async newInvitedUserPassword(e, r, o) {
    const { error: a } = await Ur({
      body: {
        password: e,
        token: r,
        user: {
          id: o
        }
      }
    });
    return a ? {
      error: this.#t(a, "Could not create a password for the invited user")
    } : {};
  }
  #t(e, r) {
    if (rr(e))
      return e.detail ?? e.title ?? void 0;
    if (!(e instanceof Error))
      return r ?? "An unknown error occurred.";
    if (e.name !== "CancelError")
      return e.message;
  }
  async #r(e) {
    switch (e.status) {
      case 400:
      case 401:
        return this.#e.term("auth_userFailedLogin");
      case 402:
        return this.#e.term("auth_mfaText");
      case 403:
        return this.#e.term("auth_userLockedOut");
      default:
        return this.#e.term("auth_receivedErrorFromServer");
    }
  }
}
class qr extends ar {
  constructor() {
    super(...arguments), this.supportsPersistLogin = !1, this.twoFactorView = "", this.isMfaEnabled = !1, this.mfaProviders = [], this.#e = new Tr(this), this.#t = "";
  }
  #e;
  #t;
  set returnPath(e) {
    this.#t = e;
  }
  /**
   * Gets the return path from the query string.
   *
   * It will first look for a `ReturnUrl` parameter, then a `returnPath` parameter, and finally the `returnPath` property.
   *
   * @returns The return path from the query string.
   */
  get returnPath() {
    const e = new URLSearchParams(window.location.search);
    let r = e.get("ReturnUrl") ?? e.get("returnPath") ?? this.#t;
    if (!r)
      return "";
    const o = new URL(r, window.location.origin);
    return o.origin !== window.location.origin ? "" : o.toString();
  }
  login(e) {
    return this.#e.login(e);
  }
  resetPassword(e) {
    return this.#e.resetPassword(e);
  }
  validatePasswordResetCode(e, r) {
    return this.#e.validatePasswordResetCode(e, r);
  }
  newPassword(e, r, o) {
    return this.#e.newPassword(e, r, o);
  }
  newInvitedUserPassword(e, r, o) {
    return this.#e.newInvitedUserPassword(e, r, o);
  }
  validateInviteCode(e, r) {
    return this.#e.validateInviteCode(e, r);
  }
  validateMfaCode(e, r) {
    return this.#e.validateMfaCode(e, r);
  }
}
const V = new ir("UmbAuthContext");
class Ar extends or {
  constructor(e) {
    super(e), new sr(e, pe), new ur().attach(e), e.classList.add("uui-text"), e.classList.add("uui-font");
  }
  async register(e) {
    const r = window.location.origin, o = new lr(e, r);
    new cr(this, {
      backofficePath: "/umbraco",
      serverUrl: r,
      serverConnection: o
    }), await new nr(this, pe).registerPublicExtensions().catch((s) => {
      console.error("Failed to register public extensions for the slim backoffice.", s);
    });
    const a = new Xt(e, pe);
    await dr(a.loaded);
  }
}
const Mr = "#umb-login-form input{width:100%;height:var(--input-height);box-sizing:border-box;display:block;border:1px solid var(--uui-color-border);border-radius:var(--uui-border-radius);background-color:var(--uui-color-surface);padding:var(--uui-size-1, 3px) var(--uui-size-space-4, 9px)}#umb-login-form uui-form-layout-item{margin-top:var(--uui-size-space-4);margin-bottom:var(--uui-size-space-4)}#umb-login-form input:focus-within{border-color:var(--uui-input-border-color-focus, var(--uui-color-border-emphasis, #a1a1a1));outline:calc(2px * var(--uui-show-focus-outline, 1)) solid var(--uui-color-focus)}#umb-login-form input:hover:not(:focus-within){border-color:var(--uui-input-border-color-hover, var(--uui-color-border-standalone, #c2c2c2))}#umb-login-form input::-ms-reveal{display:none}#umb-login-form input span{position:absolute;right:1px;top:50%;transform:translateY(-50%);z-index:100}#umb-login-form input span svg{background-color:#fff;display:block;padding:.2em;width:1.3em;height:1.3em}", Fr = [
  {
    name: "Auth Bundle",
    alias: "Umb.Auth.Bundle",
    type: "bundle",
    js: () => import("./manifests-CTnEFKn2.js")
  }
];
var Wr = Object.defineProperty, Br = Object.getOwnPropertyDescriptor, mt = (t) => {
  throw TypeError(t);
}, U = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? Br(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && Wr(e, r, a), a;
}, ft = (t, e, r) => e.has(t) || mt("Cannot " + r), ke = (t, e, r) => (ft(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ye = (t, e, r) => e.has(t) ? mt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Rr = (t, e, r) => (ft(t, e, "access private method"), r), te, Ie, gt;
const Ke = (t) => {
  const e = document.createElement("input");
  return e.type = t.type, e.name = t.name, e.autocomplete = t.autocomplete, e.id = t.id, e.required = !0, e.inputMode = t.inputmode, e.autofocus = t.autofocus || !1, e;
}, Xe = (t) => {
  const e = document.createElement("label"), r = document.createElement("umb-localize");
  return r.key = t.localizeAlias, r.innerHTML = t.localizeFallback, e.htmlFor = t.forId, e.appendChild(r), e;
}, et = (t, e) => {
  const r = document.createElement("uui-form-layout-item");
  return r.appendChild(t), r.appendChild(e), r;
}, jr = (t) => {
  const e = document.createElement("style");
  e.innerHTML = Mr;
  const r = document.createElement("form");
  return r.id = "umb-login-form", r.name = "login-form", r.spellcheck = !1, t.push(e), t.forEach((o) => r.appendChild(o)), r;
};
let k = class extends $ {
  constructor() {
    super(), Ye(this, Ie), this.disableLocalLogin = !1, this.usernameIsEmail = !1, this.allowPasswordReset = !1, this.allowUserInvite = !1, Ye(this, te, new qr(this, V)), this.addEventListener("umb-login-flow", (t) => {
      t instanceof CustomEvent && (this.flow = t.detail.flow || void 0), this.requestUpdate();
    });
  }
  set returnPath(t) {
    ke(this, te).returnPath = t;
  }
  get returnPath() {
    return ke(this, te).returnPath;
  }
  async firstUpdated() {
    await new Ar(this).register(this), pe.registerMany(Fr), setTimeout(() => {
      requestAnimationFrame(() => {
        Rr(this, Ie, gt).call(this);
      });
    }, 100);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._usernameLayoutItem?.remove(), this._passwordLayoutItem?.remove(), this._usernameLabel?.remove(), this._usernameInput?.remove(), this._passwordLabel?.remove(), this._passwordInput?.remove();
  }
  render() {
    return l`
			<umb-auth-layout
				background-image=${ze(this.backgroundImage)}
				logo-image=${ze(this.logoImage)}
				logo-image-alternative=${ze(this.logoImageAlternative)}>
				${this._renderFlowAndStatus()}
			</umb-auth-layout>
		`;
  }
  _renderFlowAndStatus() {
    if (this.disableLocalLogin)
      return l`
				<umb-error-layout no-back-link>
					<umb-localize key="auth_localLoginDisabled"
						>Unfortunately, it is not possible to log in directly. It has been disabled by a login
						provider.</umb-localize
					>
				</umb-error-layout>
			`;
    const t = new URLSearchParams(window.location.search);
    let e = this.flow || t.get("flow")?.toLowerCase();
    const r = t.get("status");
    if (r === "resetCodeExpired")
      return l` <umb-error-layout message=${this.localize.term("auth_resetCodeExpired")}> </umb-error-layout>`;
    if (e === "invite-user" && r === "false")
      return l` <umb-error-layout message=${this.localize.term("auth_userInviteExpiredMessage")}>
			</umb-error-layout>`;
    switch (e && e === "mfa" && !ke(this, te).isMfaEnabled && (e = void 0), e) {
      case "mfa":
        return l` <umb-mfa-page></umb-mfa-page>`;
      case "reset":
        return l` <umb-reset-password-page></umb-reset-password-page>`;
      case "reset-password":
        return l` <umb-new-password-page></umb-new-password-page>`;
      case "invite-user":
        return l` <umb-invite-page></umb-invite-page>`;
      default:
        return l` <umb-login-page
					?allow-password-reset=${this.allowPasswordReset}
					?username-is-email=${this.usernameIsEmail}>
					<slot></slot>
					<slot name="subheadline" slot="subheadline"></slot>
				</umb-login-page>`;
    }
  }
};
te = /* @__PURE__ */ new WeakMap();
Ie = /* @__PURE__ */ new WeakSet();
gt = function() {
  this._usernameInput = Ke({
    id: "username-input",
    type: "text",
    name: "username",
    autocomplete: "username",
    inputmode: this.usernameIsEmail ? "email" : "",
    autofocus: !0
  }), this._passwordInput = Ke({
    id: "password-input",
    type: "password",
    name: "password",
    autocomplete: "current-password",
    inputmode: ""
  }), this._usernameLabel = Xe({
    forId: "username-input",
    localizeAlias: this.usernameIsEmail ? "auth_email" : "auth_username",
    localizeFallback: this.usernameIsEmail ? "Email" : "Username"
  }), this._passwordLabel = Xe({
    forId: "password-input",
    localizeAlias: "auth_password",
    localizeFallback: "Password"
  }), this._usernameLayoutItem = et(this._usernameLabel, this._usernameInput), this._passwordLayoutItem = et(this._passwordLabel, this._passwordInput), this._form = jr([this._usernameLayoutItem, this._passwordLayoutItem]), this.insertAdjacentElement("beforeend", this._form);
};
U([
  p({ type: Boolean, attribute: "disable-local-login" })
], k.prototype, "disableLocalLogin", 2);
U([
  p({ attribute: "background-image" })
], k.prototype, "backgroundImage", 2);
U([
  p({ attribute: "logo-image" })
], k.prototype, "logoImage", 2);
U([
  p({ attribute: "logo-image-alternative" })
], k.prototype, "logoImageAlternative", 2);
U([
  p({ type: Boolean, attribute: "username-is-email" })
], k.prototype, "usernameIsEmail", 2);
U([
  p({ type: Boolean, attribute: "allow-password-reset" })
], k.prototype, "allowPasswordReset", 2);
U([
  p({ type: Boolean, attribute: "allow-user-invite" })
], k.prototype, "allowUserInvite", 2);
U([
  p({ attribute: "return-url" })
], k.prototype, "returnPath", 1);
k = U([
  x("umb-auth")
], k);
var Vr = Object.defineProperty, Nr = Object.getOwnPropertyDescriptor, wt = (t) => {
  throw TypeError(t);
}, _e = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? Nr(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && Vr(e, r, a), a;
}, Hr = (t, e, r) => e.has(t) || wt("Cannot " + r), Gr = (t, e, r) => e.has(t) ? wt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), tt = (t, e, r) => (Hr(t, e, "access private method"), r), me, vt, bt;
let J = class extends $ {
  constructor() {
    super(...arguments), Gr(this, me);
  }
  updated(t) {
    super.updated(t), t.has("backgroundImage") && (this.style.setProperty("--logo-alternative-display", this.backgroundImage ? "none" : "unset"), this.style.setProperty("--image", `url('${this.backgroundImage}') no-repeat center center/cover`));
  }
  render() {
    return l`
			<div id=${this.backgroundImage ? "main" : "main-no-image"}>
				${tt(this, me, vt).call(this)} ${tt(this, me, bt).call(this)}
			</div>
			${ve(
      this.logoImageAlternative,
      (t) => l`<img id="logo-on-background" src=${t} alt="logo" aria-hidden="true" />`
    )}
		`;
  }
};
me = /* @__PURE__ */ new WeakSet();
vt = function() {
  return this.backgroundImage ? l`
			<div id="image-container">
				<div id="image">
					<svg
						id="curve-top"
						width="1746"
						height="1374"
						viewBox="0 0 1746 1374"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M8 1C61.5 722.5 206.5 1366.5 1745.5 1366.5" stroke="currentColor" stroke-width="15" />
					</svg>
					<svg
						id="curve-bottom"
						width="1364"
						height="552"
						viewBox="0 0 1364 552"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M1 8C387 24 1109 11 1357 548" stroke="currentColor" stroke-width="15" />
					</svg>

					${ve(
    this.logoImage,
    (t) => l`<img id="logo-on-image" src=${t} alt="logo" aria-hidden="true" />`
  )}
				</div>
			</div>
		` : R;
};
bt = function() {
  return l`
			<div id="content-container">
				<div id="content">
					<slot></slot>
				</div>
			</div>
		`;
};
J.styles = [
  A`
			:host {
				--uui-color-interactive: var(--umb-login-primary-color, #283a97);
				--uui-button-border-radius: var(--umb-login-button-border-radius, 45px);
				--uui-color-default: var(--uui-color-interactive);
				--uui-button-height: 42px;
				--uui-select-height: 38px;

				--input-height: 40px;
				--header-font-size: var(--umb-login-header-font-size, 3rem);
				--header-secondary-font-size: var(--umb-login-header-secondary-font-size, 2.4rem);
				--curves-color: var(--umb-login-curves-color, #f5c1bc);
				--curves-display: var(--umb-login-curves-display, inline);

				display: block;
				background: var(--umb-login-background, #f4f4f4);
				color: var(--umb-login-text-color, #000);
			}

			#main-no-image,
			#main {
				max-width: 1920px;
				display: flex;
				justify-content: center;
				height: 100vh;
				padding: 8px;
				box-sizing: border-box;
				margin: 0 auto;
			}

			#image-container {
				display: var(--umb-login-image-display, none);
				width: 100%;
			}

			#content-container {
				background: var(--umb-login-content-background, none);
				display: var(--umb-login-content-display, flex);
				width: var(--umb-login-content-width, 100%);
				height: var(--umb-login-content-height, 100%);
				box-sizing: border-box;
				overflow: auto;
				border-radius: var(--umb-login-content-border-radius, 0);
			}

			#content {
				max-width: 360px;
				margin: auto;
				width: 100%;
			}

			#image {
				background: var(--umb-login-image, var(--image));
				width: 100%;
				height: 100%;
				border-radius: var(--umb-login-image-border-radius, 38px);
				position: relative;
				overflow: hidden;
				color: var(--curves-color);
			}

			#image svg {
				position: absolute;
				width: 45%;
				height: fit-content;
				display: var(--curves-display);
			}

			#curve-top {
				top: -9%;
				right: -9%;
			}

			#curve-bottom {
				bottom: -0.5%;
				left: -0.1%;
			}

			#logo-on-image,
			#logo-on-background {
				position: absolute;
				display: var(--umb-logo-display, block);
				top: var(--umb-logo-top, 24px);
				left: var(--umb-logo-left, 24px);
				width: var(--umb-logo-width, auto);
				height: var(--umb-logo-height, 55px);
			}

			@media only screen and (min-width: 900px) {
				:host {
					--header-font-size: var(--umb-login-header-font-size-large, 4rem);
				}

				#main {
					padding: 32px;
					padding-right: 0;
					align-items: var(--umb-login-align-items, unset);
				}

				#image-container {
					display: var(--umb-login-image-display, block);
				}

				#content-container {
					display: var(--umb-login-content-display, flex);
					padding: 16px;
				}

				#logo-on-background {
					display: var(--logo-alternative-display);
				}
			}
		`
];
_e([
  p({ attribute: "background-image" })
], J.prototype, "backgroundImage", 2);
_e([
  p({ attribute: "logo-image" })
], J.prototype, "logoImage", 2);
_e([
  p({ attribute: "logo-image-alternative" })
], J.prototype, "logoImageAlternative", 2);
J = _e([
  x("umb-auth-layout")
], J);
var Jr = Object.defineProperty, Zr = Object.getOwnPropertyDescriptor, qe = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? Zr(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && Jr(e, r, a), a;
};
let ie = class extends $ {
  constructor() {
    super(...arguments), this.header = "", this.message = "";
  }
  render() {
    return l`
      <header id="header">
        <h1>${this.header}</h1>
        <span>${this.message}</span>
      </header>

      <umb-back-to-login-button></umb-back-to-login-button>

      <slot></slot>
    `;
  }
};
ie.styles = [
  A`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `
];
qe([
  p({ type: String })
], ie.prototype, "header", 2);
qe([
  p({ type: String })
], ie.prototype, "message", 2);
ie = qe([
  x("umb-confirmation-layout")
], ie);
var Qr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, Ce = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? Yr(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && Qr(e, r, a), a;
};
let Z = class extends $ {
  constructor() {
    super(...arguments), this.header = "", this.message = "", this.noBackLink = !1;
  }
  render() {
    return l`
      <header id="header">
        <h1>${this.header?.length ? this.header : l`<umb-localize key="auth_friendlyGreeting">Hi there</umb-localize>`}</h1>
        <span>${this.message}</span>
      </header>
      <slot></slot>
      ${this.noBackLink ? "" : l`<umb-back-to-login-button></umb-back-to-login-button>`}
    `;
  }
};
Z.styles = [
  A`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-1);
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      ::slotted(uui-button) {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }
    `
];
Ce([
  p({ type: String })
], Z.prototype, "header", 2);
Ce([
  p({ type: String })
], Z.prototype, "message", 2);
Ce([
  p({ type: Boolean, attribute: "no-back-link" })
], Z.prototype, "noBackLink", 2);
Z = Ce([
  x("umb-error-layout")
], Z);
var Kr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, yt = (t) => {
  throw TypeError(t);
}, D = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? Xr(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && Kr(e, r, a), a;
}, ea = (t, e, r) => e.has(t) || yt("Cannot " + r), ta = (t, e, r) => e.has(t) ? yt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), rt = (t, e, r) => (ea(t, e, "access private method"), r), fe, _t, Ct;
let C = class extends $ {
  constructor() {
    super(), ta(this, fe), this.state = void 0, this.error = "", this.userId = "", this.isInvite = !1, this._passwordPattern = "", this.consumeContext(V, (t) => {
      let e = "";
      this._passwordConfiguration = t?.passwordConfiguration, this._passwordConfiguration?.requireDigit && (e += "(?=.*\\d)"), this._passwordConfiguration?.requireLowercase && (e += "(?=.*[a-z])"), this._passwordConfiguration?.requireUppercase && (e += "(?=.*[A-Z])"), this._passwordConfiguration?.requireNonLetterOrDigit && (e += "(?=.*\\W)"), e += `.{${this._passwordConfiguration?.minimumPasswordLength ?? 10},}`, this._passwordPattern = e;
    });
  }
  renderHeader() {
    return this.isInvite ? l`
        <h1>Hi!</h1>
        <span>
          <umb-localize key="auth_userInviteWelcomeMessage">
            Welcome to Umbraco! Just need to get your password setup and then you're good to go
          </umb-localize>
        </span>
      ` : l`
        <h1>
          <umb-localize key="auth_newPassword">New password</umb-localize>
        </h1>
        <span>
            <umb-localize key="auth_setPasswordInstruction">Please provide a new password.</umb-localize>
        </span>
      `;
  }
  render() {
    return l`
      <uui-form>
        <form id="LoginForm" name="login" @submit=${rt(this, fe, _t)}>
          <header id="header">${this.renderHeader()}</header>
          <uui-form-layout-item>
            <uui-label id="passwordLabel" for="password" slot="label" required>
              <umb-localize key="auth_newPassword">New password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="password"
              name="password"
              autocomplete="new-password"
              pattern="${this._passwordPattern}"
              .minlength=${this._passwordConfiguration?.minimumPasswordLength}
              .minlengthMessage=${this.localize.term("auth_passwordMinLength", this._passwordConfiguration?.minimumPasswordLength ?? 10)}
              .label=${this.localize.term("auth_newPassword")}
              required
              required-message=${this.localize.term("auth_passwordIsBlank")}>
            </uui-input-password>
          </uui-form-layout-item>

          <uui-form-layout-item>
            <uui-label id="confirmPasswordLabel" for="confirmPassword" slot="label" required>
              <umb-localize key="auth_confirmNewPassword">Confirm new password</umb-localize>
            </uui-label>
            <uui-input-password
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autocomplete="new-password"
              pattern="${this._passwordPattern}"
              .minlength=${this._passwordConfiguration?.minimumPasswordLength}
              .minlengthMessage=${this.localize.term("auth_passwordMinLength", this._passwordConfiguration?.minimumPasswordLength ?? 10)}
              .label=${this.localize.term("auth_confirmNewPassword")}
              required
              required-message=${this.localize.term("auth_required")}></uui-input-password>
          </uui-form-layout-item>

          ${rt(this, fe, Ct).call(this)}

          <uui-button
            type="submit"
            label=${this.localize.term("auth_continue")}
            look="primary"
            color="default"
            .state=${this.state}></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `;
  }
};
fe = /* @__PURE__ */ new WeakSet();
_t = function(t) {
  if (t.preventDefault(), !this._passwordConfiguration) return;
  const e = t.target;
  if (this.passwordElement.setCustomValidity(""), this.confirmPasswordElement.setCustomValidity(""), !e || !e.checkValidity()) return;
  const r = new FormData(e), o = r.get("password"), a = r.get("confirmPassword");
  let s = !1;
  if (this._passwordConfiguration.minimumPasswordLength > 0 && o.length < this._passwordConfiguration.minimumPasswordLength && (s = !0), this._passwordConfiguration.requireNonLetterOrDigit && (/\W/.test(o) || (s = !0)), this._passwordConfiguration.requireDigit && (/\d/.test(o) || (s = !0)), this._passwordConfiguration.requireLowercase && (/[a-z]/.test(o) || (s = !0)), this._passwordConfiguration.requireUppercase && (/[A-Z]/.test(o) || (s = !0)), s) {
    const i = this.localize.term(
      "auth_errorInPasswordFormat",
      this._passwordConfiguration.minimumPasswordLength,
      this._passwordConfiguration.requireNonLetterOrDigit ? 1 : 0
    ) ?? "The password does not meet the minimum requirements!";
    this.passwordElement.setCustomValidity(i);
    return;
  }
  if (o !== a) {
    const i = this.localize.term(
      "auth_passwordMismatch"
    ) ?? "The confirmed password doesn't match the new password!";
    this.confirmPasswordElement.setCustomValidity(i);
    return;
  }
  this.dispatchEvent(new CustomEvent("submit", { detail: { password: o } }));
};
Ct = function() {
  return !this.error || this.state !== "failed" ? R : l`<span class="text-danger">${this.error}</span>`;
};
C.styles = [
  A`
      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #header h1 {
        margin: 0;
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-button {
        width: 100%;
        margin-top: var(--uui-size-space-5);
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `
];
D([
  ut("#password")
], C.prototype, "passwordElement", 2);
D([
  ut("#confirmPassword")
], C.prototype, "confirmPasswordElement", 2);
D([
  p()
], C.prototype, "state", 2);
D([
  p()
], C.prototype, "error", 2);
D([
  p()
], C.prototype, "userId", 2);
D([
  p({ type: Boolean, attribute: "is-invite" })
], C.prototype, "isInvite", 2);
D([
  m()
], C.prototype, "_passwordConfiguration", 2);
D([
  m()
], C.prototype, "_passwordPattern", 2);
C = D([
  x("umb-new-password-layout")
], C);
var ra = Object.defineProperty, aa = Object.getOwnPropertyDescriptor, xt = (t) => {
  throw TypeError(t);
}, xe = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? aa(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && ra(e, r, a), a;
}, Ae = (t, e, r) => e.has(t) || xt("Cannot " + r), _ = (t, e, r) => (Ae(t, e, "read from private field"), r ? r.call(t) : e.get(t)), he = (t, e, r) => e.has(t) ? xt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Le = (t, e, r, o) => (Ae(t, e, "write to private field"), e.set(t, r), r), at = (t, e, r) => (Ae(t, e, "access private method"), r), se, Q, L, ge, $t, Pt;
let ne = class extends $ {
  constructor() {
    super(), he(this, ge), he(this, se, ""), he(this, Q, ""), this.state = void 0, this.error = "", this.loading = !0, he(this, L), this.consumeContext(V, (t) => {
      Le(this, L, t), at(this, ge, $t).call(this);
    });
  }
  render() {
    return this.loading ? l`<uui-loader-bar></uui-loader-bar>` : this.error ? l`
          <umb-error-layout
            header=${this.localize.term("auth_error")}
            message=${this.error ?? this.localize.term("auth_defaultError")}>
          </umb-error-layout>` : l`
        <umb-new-password-layout
          @submit=${at(this, ge, Pt)}
          is-invite
          .userId=${_(this, Q)}
          .state=${this.state}
          .error=${this.error}></umb-new-password-layout>`;
  }
};
se = /* @__PURE__ */ new WeakMap();
Q = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakMap();
ge = /* @__PURE__ */ new WeakSet();
$t = async function() {
  const t = new URLSearchParams(window.location.search), e = t.get("inviteCode"), r = t.get("userId");
  if (!e || !r) {
    this.error = "The invite has expired or is invalid", this.loading = !1;
    return;
  }
  if (!_(this, L)) return;
  Le(this, se, e), Le(this, Q, r);
  const o = await _(this, L).validateInviteCode(_(this, se), _(this, Q));
  if (o.error) {
    this.error = o.error, this.loading = !1;
    return;
  }
  if (!o.passwordConfiguration) {
    this.error = "There is no password configuration for the invite code. Please contact the administrator.", this.loading = !1;
    return;
  }
  _(this, L).passwordConfiguration = o.passwordConfiguration, this.loading = !1;
};
Pt = async function(t) {
  t.preventDefault();
  const e = t.detail.password;
  if (!e || !_(this, L)) return;
  this.state = "waiting";
  const r = await _(this, L).newInvitedUserPassword(e, _(this, se), _(this, Q));
  if (r.error) {
    this.error = r.error, this.state = "failed";
    return;
  }
  this.state = "success", window.location.href = _(this, L).returnPath;
};
xe([
  m()
], ne.prototype, "state", 2);
xe([
  m()
], ne.prototype, "error", 2);
xe([
  m()
], ne.prototype, "loading", 2);
ne = xe([
  x("umb-invite-page")
], ne);
var oa = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, zt = (t) => {
  throw TypeError(t);
}, N = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? ia(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && oa(e, r, a), a;
}, Me = (t, e, r) => e.has(t) || zt("Cannot " + r), w = (t, e, r) => (Me(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ee = (t, e, r) => e.has(t) ? zt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Et = (t, e, r, o) => (Me(t, e, "write to private field"), e.set(t, r), r), Se = (t, e, r) => (Me(t, e, "access private method"), r), B, I, G, kt, Fe, St, be, It, Lt;
let O = class extends $ {
  constructor() {
    super(), ee(this, G), this.usernameIsEmail = !1, this.allowPasswordReset = !1, this._loginError = "", this.supportPersistLogin = !1, ee(this, B), ee(this, I), ee(this, Fe, async (t) => {
      if (t.preventDefault(), !w(this, I)) return;
      const e = t.target;
      if (!e) return;
      const r = new FormData(e), o = r.get("username"), a = r.get("password"), s = r.has("persist");
      if (!o || !a) {
        this._loginError = this.localize.term("auth_userFailedLogin"), this._loginState = "failed";
        return;
      }
      this._loginState = "waiting";
      const i = await w(this, I).login({
        username: o,
        password: a,
        persist: s
      });
      if (this._loginError = i.error || "", this._loginState = i.error ? "failed" : "success", i.status === 402) {
        w(this, I).isMfaEnabled = !0, i.twoFactorView && (w(this, I).twoFactorView = i.twoFactorView), i.twoFactorProviders && (w(this, I).mfaProviders = i.twoFactorProviders), this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "mfa" } }));
        return;
      }
      if (i.error)
        return;
      const n = w(this, I).returnPath;
      n && (location.href = n);
    }), ee(this, be, () => {
      w(this, B)?.requestSubmit();
    }), this.consumeContext(V, (t) => {
      Et(this, I, t), this.supportPersistLogin = t?.supportsPersistLogin ?? !1;
    });
  }
  render() {
    return l`
      <header id="header">
        <h1 id="greeting">
          <umb-localize .key=${w(this, G, St)}></umb-localize>
        </h1>
        <slot name="subheadline"></slot>
      </header>
      <slot @slotchange=${Se(this, G, kt)}></slot>
      <div id="secondary-actions">
        ${ve(
      this.supportPersistLogin,
      () => l`
            <uui-form-layout-item>
              <uui-checkbox
                name="persist"
                .label=${this.localize.term("auth_rememberMe")}>
                <umb-localize key="auth_rememberMe">Remember me</umb-localize>
              </uui-checkbox>
            </uui-form-layout-item>`
    )}
        ${ve(
      this.allowPasswordReset,
      () => l`
              <button type="button" id="forgot-password" @click=${Se(this, G, Lt)}>
                <umb-localize key="auth_forgottenPassword">Forgotten password?</umb-localize>
              </button>`
    )}
      </div>
      <uui-button
        type="submit"
        id="umb-login-button"
        look="primary"
        @click=${w(this, be)}
        .label=${this.localize.term("auth_login")}
        color="default"
        .state=${this._loginState}></uui-button>

      ${Se(this, G, It).call(this)}
    `;
  }
};
B = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakSet();
kt = async function() {
  Et(this, B, this.slottedElements?.find((t) => t.id === "umb-login-form")), w(this, B) && (w(this, B).addEventListener("keypress", (t) => {
    t.key === "Enter" && w(this, be).call(this);
  }), w(this, B).onsubmit = w(this, Fe));
};
Fe = /* @__PURE__ */ new WeakMap();
St = function() {
  return [
    "auth_greeting0",
    "auth_greeting1",
    "auth_greeting2",
    "auth_greeting3",
    "auth_greeting4",
    "auth_greeting5",
    "auth_greeting6"
  ][(/* @__PURE__ */ new Date()).getDay()];
};
be = /* @__PURE__ */ new WeakMap();
It = function() {
  return !this._loginError || this._loginState !== "failed" ? R : l`<span class="text-error text-danger">${this._loginError}</span>`;
};
Lt = function() {
  this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "reset" } }));
};
O.styles = [
  A`
      :host {
        display: flex;
        flex-direction: column;
      }

      #header {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-space-5);
      }

      #header span {
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        font-size: 14px;
      }

      #greeting {
        color: var(--uui-color-interactive);
        text-align: center;
        font-weight: 400;
        font-size: var(--header-font-size);
        margin: 0 0 var(--uui-size-layout-1);
        line-height: 1.2;
      }

      #umb-login-button {
        margin-top: var(--uui-size-space-4);
        width: 100%;
      }

      #forgot-password {
        cursor: pointer;
        background: none;
        border: 0;
        height: 1rem;
        color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
        gap: var(--uui-size-space-1);
        align-self: center;
        text-decoration: none;
        display: inline-flex;
        line-height: 1;
        font-size: 14px;
        font-family: var(--uui-font-family),sans-serif;
        margin-left: auto;
        margin-bottom: var(--uui-size-space-3);
      }

      #forgot-password:hover {
        color: var(--uui-color-interactive-emphasis);
      }

      .text-error {
        margin-top: var(--uui-size-space-4);
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }

      #secondary-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `
];
N([
  p({ type: Boolean, attribute: "username-is-email" })
], O.prototype, "usernameIsEmail", 2);
N([
  Qt({ flatten: !0 })
], O.prototype, "slottedElements", 2);
N([
  p({ type: Boolean, attribute: "allow-password-reset" })
], O.prototype, "allowPasswordReset", 2);
N([
  m()
], O.prototype, "_loginState", 2);
N([
  m()
], O.prototype, "_loginError", 2);
N([
  m()
], O.prototype, "supportPersistLogin", 2);
O = N([
  x("umb-login-page")
], O);
async function sa(t) {
  if (t.endsWith(".html"))
    return fetch(t).then((r) => r.text());
  const e = await import(
    /* @vite-ignore */
    t
  );
  if (!e.default) throw new Error("No default export found");
  return new e.default();
}
function na(t) {
  return typeof t == "string" ? l`${Yt(t)}` : t;
}
var ua = Object.defineProperty, la = Object.getOwnPropertyDescriptor, Ot = (t) => {
  throw TypeError(t);
}, $e = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? la(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && ua(e, r, a), a;
}, We = (t, e, r) => e.has(t) || Ot("Cannot " + r), j = (t, e, r) => (We(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ot = (t, e, r) => e.has(t) ? Ot("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ca = (t, e, r, o) => (We(t, e, "write to private field"), e.set(t, r), r), it = (t, e, r) => (We(t, e, "access private method"), r), E, we, Ut, Dt;
let Y = class extends $ {
  constructor() {
    super(), ot(this, we), this.providers = [], this.error = null, ot(this, E), this.consumeContext(V, (t) => {
      ca(this, E, t), it(this, we, Ut).call(this);
    });
  }
  renderDefaultView() {
    return l`
      <uui-form>
        <form id="LoginForm" @submit=${it(this, we, Dt)} novalidate>
          <header id="header">
            <h1>
              <umb-localize key="auth_mfaTitle">One last step</umb-localize>
            </h1>

            <p>
              <umb-localize key="auth_mfaText">
                You have enabled 2-factor authentication and must verify your identity.
              </umb-localize>
            </p>
          </header>

          <!-- if there's only one provider active, it will skip this step! -->
          ${this.providers.length > 1 ? l`
              <uui-form-layout-item>
                <uui-label id="providerLabel" for="provider" slot="label" required>
                  <umb-localize key="auth_mfaMultipleText">Please choose a 2-factor provider</umb-localize>
                </uui-label>
                <uui-select label=${this.localize.term("auth_mfaMultipleText")} id="provider" name="provider" .options=${this.providers} aria-required="true" required></uui-select>
              </uui-form-layout-item>
            ` : R}

          <uui-form-layout-item>
            <uui-label id="mfacodeLabel" for="mfacode" slot="label" required>
              <umb-localize key="auth_mfaCodeInput">Verification code</umb-localize>
            </uui-label>

            <uui-input
              autofocus
              id="mfacode"
              type="text"
              name="token"
              inputmode="numeric"
              autocomplete="one-time-code"
              placeholder=${this.localize.term("auth_mfaCodeInputHelp")}
              aria-required="true"
              required
              required-message=${this.localize.term("auth_mfaCodeInputHelp")}
              label=${this.localize.term("auth_mfaCodeInput")}
              style="width:100%;">
            </uui-input>
          </uui-form-layout-item>

          ${this.error ? l` <span class="text-danger">${this.error}</span> ` : R}

          <uui-button
            .state=${this.buttonState}
            button-style="success"
            look="primary"
            color="default"
            label=${this.localize.term("auth_validate")}
            type="submit"></uui-button>
        </form>
      </uui-form>

      <umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
    `;
  }
  async renderCustomView() {
    const t = j(this, E)?.twoFactorView;
    if (!t) return R;
    try {
      const e = await sa(t);
      return typeof e == "object" && (e.providers = this.providers.map((r) => r.value), e.returnPath = j(this, E)?.returnPath ?? ""), na(e);
    } catch (e) {
      const r = e instanceof Error ? e.message : "Unknown error";
      return console.group("[MFA login] Failed to load custom view"), console.log("Element reference", this), console.log("Custom view", t), console.error("Failed to load custom view:", e), console.groupEnd(), l`<span class="text-danger">${r}</span>`;
    }
  }
  render() {
    return j(this, E)?.twoFactorView ? Kt(this.renderCustomView(), l`
          <uui-loader-bar></uui-loader-bar>`) : this.renderDefaultView();
  }
};
E = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakSet();
Ut = function() {
  this.providers = j(this, E)?.mfaProviders.map((t) => ({ name: t, value: t, selected: !1 })) ?? [], this.providers.length ? this.providers[0].selected = !0 : this.error = "Error: No providers available";
};
Dt = async function(t) {
  if (t.preventDefault(), !j(this, E)) return;
  this.error = null;
  const e = t.target;
  if (!e) return;
  const r = e.elements.namedItem("mfacode");
  if (r && (r.error = !1, r.errorMessage = "", r.setCustomValidity("")), !e.checkValidity()) return;
  const o = new FormData(e);
  let a = o.get("provider");
  if (!a) {
    if (!this.providers.length) {
      this.error = "No providers available";
      return;
    }
    a = this.providers[0].value;
  }
  if (!a) {
    this.error = "No provider selected";
    return;
  }
  const s = o.get("token");
  this.buttonState = "waiting";
  const i = await j(this, E).validateMfaCode(s, a);
  if (i.error) {
    r ? (r.error = !0, r.errorMessage = i.error) : this.error = i.error, this.buttonState = "failed";
    return;
  }
  this.buttonState = "success";
  const n = j(this, E).returnPath;
  n && (location.href = n);
};
Y.styles = [
  A`
      #header {
        text-align: center;
      }

      #header h1 {
        font-weight: 400;
        font-size: var(--header-secondary-font-size);
        color: var(--uui-color-interactive);
        line-height: 1.2;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: var(--uui-size-layout-2);
      }

      #provider {
        width: 100%;
      }

      uui-form-layout-item {
        margin: 0;
      }

      uui-input,
      uui-input-password {
        width: 100%;
        height: var(--input-height);
        border-radius: var(--uui-border-radius);
      }

      uui-input {
        width: 100%;
      }

      uui-button {
        width: 100%;
        --uui-button-padding-top-factor: 1.5;
        --uui-button-padding-bottom-factor: 1.5;
      }

      .text-danger {
        color: var(--uui-color-danger-standalone);
      }
    `
];
$e([
  m()
], Y.prototype, "providers", 2);
$e([
  m()
], Y.prototype, "buttonState", 2);
$e([
  m()
], Y.prototype, "error", 2);
Y = $e([
  x("umb-mfa-page")
], Y);
var da = Object.defineProperty, ha = Object.getOwnPropertyDescriptor, Tt = (t) => {
  throw TypeError(t);
}, H = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? ha(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && da(e, r, a), a;
}, Be = (t, e, r) => e.has(t) || Tt("Cannot " + r), re = (t, e, r) => (Be(t, e, "read from private field"), e.get(t)), st = (t, e, r) => e.has(t) ? Tt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), pa = (t, e, r, o) => (Be(t, e, "write to private field"), e.set(t, r), r), Oe = (t, e, r) => (Be(t, e, "access private method"), r), T, ae, qt, At, Mt;
let q = class extends $ {
  constructor() {
    super(), st(this, ae), this.state = void 0, this.page = "new", this.error = "", this.userId = "", this.resetCode = "", this.loading = !0, st(this, T), this.consumeContext(V, (t) => {
      pa(this, T, t), Oe(this, ae, qt).call(this);
    });
  }
  render() {
    return this.loading ? l`<uui-loader-bar></uui-loader-bar>` : Oe(this, ae, Mt).call(this);
  }
};
T = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakSet();
qt = async function() {
  const t = new URLSearchParams(window.location.search), e = t.get("resetCode"), r = t.get("userId");
  if (!r || !e) {
    this.page = "error", this.loading = !1;
    return;
  }
  if (!re(this, T)) return;
  this.resetCode = e, this.userId = r;
  const o = await re(this, T).validatePasswordResetCode(this.userId, this.resetCode);
  if (o.error) {
    this.page = "error", this.error = o.error, this.loading = !1;
    return;
  }
  if (!o.passwordConfiguration) {
    this.page = "error", this.error = "Password configuration is missing", this.loading = !1;
    return;
  }
  re(this, T).passwordConfiguration = o.passwordConfiguration, this.loading = !1;
};
At = async function(t) {
  if (t.preventDefault(), this.error = "", !re(this, T)) return;
  const e = t.detail.password;
  this.state = "waiting";
  const r = await re(this, T).newPassword(e, this.resetCode, this.userId);
  if (r.error) {
    this.state = "failed", this.error = r.error;
    return;
  }
  this.state = "success", this.page = "done";
};
Mt = function() {
  switch (this.page) {
    case "new":
      return l`
          <umb-new-password-layout
            @submit=${Oe(this, ae, At)}
            .userId=${this.userId}
            .state=${this.state}
            .error=${this.error}></umb-new-password-layout>`;
    case "error":
      return l`
          <umb-error-layout
            header=${this.localize.term("auth_error")}
            message=${this.error ?? this.localize.term("auth_defaultError")}>
          </umb-error-layout>`;
    case "done":
      return l`
          <umb-confirmation-layout
            header=${this.localize.term("auth_success")}
            message=${this.localize.term("auth_setPasswordConfirmation")}>
          </umb-confirmation-layout>`;
  }
};
H([
  m()
], q.prototype, "state", 2);
H([
  m()
], q.prototype, "page", 2);
H([
  m()
], q.prototype, "error", 2);
H([
  m()
], q.prototype, "userId", 2);
H([
  m()
], q.prototype, "resetCode", 2);
H([
  m()
], q.prototype, "loading", 2);
q = H([
  x("umb-new-password-page")
], q);
var ma = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, Ft = (t) => {
  throw TypeError(t);
}, Re = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? fa(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && ma(e, r, a), a;
}, Wt = (t, e, r) => e.has(t) || Ft("Cannot " + r), ga = (t, e, r) => (Wt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), nt = (t, e, r) => e.has(t) ? Ft("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ue = (t, e, r) => (Wt(t, e, "access private method"), r), je, oe, Bt, Rt, jt;
let ue = class extends $ {
  constructor() {
    super(...arguments), nt(this, oe), this.resetCallState = void 0, this.error = "", nt(this, je, async (t) => {
      t.preventDefault();
      const e = t.target;
      if (!e || !e.checkValidity()) return;
      const o = new FormData(e).get("email");
      this.resetCallState = "waiting";
      const a = await this.getContext(V);
      if (!a) {
        this.resetCallState = "failed", this.error = "Authentication context not available.";
        return;
      }
      const s = await a.resetPassword(o);
      this.resetCallState = s.error ? "failed" : "success", this.error = s.error || "";
    });
  }
  render() {
    return this.resetCallState === "success" ? Ue(this, oe, jt).call(this) : Ue(this, oe, Bt).call(this);
  }
};
je = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakSet();
Bt = function() {
  return l`
			<uui-form>
				<form id="LoginForm" name="login" @submit="${ga(this, je)}">
					<header id="header">
						<h1>
							<umb-localize key="auth_forgottenPassword">Forgotten password?</umb-localize>
						</h1>
						<span>
							<umb-localize key="auth_forgottenPasswordInstruction">
								An email will be sent to the address specified with a link to reset your password
							</umb-localize>
						</span>
					</header>

					<uui-form-layout-item>
						<uui-label for="email" slot="label" required>
							<umb-localize key="auth_email">Email</umb-localize>
						</uui-label>
						<uui-input
							type="email"
							id="email"
							name="email"
							.label=${this.localize.term("auth_email")}
							required
							required-message=${this.localize.term("auth_required")}>
						</uui-input>
					</uui-form-layout-item>

					${Ue(this, oe, Rt).call(this)}

					<uui-button
						type="submit"
						.label=${this.localize.term("auth_submit")}
						look="primary"
						color="default"
						.state=${this.resetCallState}></uui-button>
				</form>
			</uui-form>

			<umb-back-to-login-button style="margin-top: var(--uui-size-space-6)"></umb-back-to-login-button>
		`;
};
Rt = function() {
  return !this.error || this.resetCallState !== "failed" ? R : l`<span class="text-danger">${this.error}</span>`;
};
jt = function() {
  return l`
			<umb-confirmation-layout
				header=${this.localize.term("auth_forgottenPassword")}
				message=${this.localize.term("auth_requestPasswordResetConfirmation")}>
			</umb-confirmation-layout>
		`;
};
ue.styles = [
  A`
			#header {
				text-align: center;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-5);
			}

			#header span {
				color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
				font-size: 14px;
			}

			#header h1 {
				margin: 0;
				font-weight: 400;
				font-size: var(--header-secondary-font-size);
				color: var(--uui-color-interactive);
				line-height: 1.2;
			}

			form {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-layout-2);
			}

			uui-form-layout-item {
				margin: 0;
			}

			uui-input,
			uui-input-password {
				width: 100%;
				height: var(--input-height);
				border-radius: var(--uui-border-radius);
			}

			uui-input {
				width: 100%;
			}

			uui-button {
				width: 100%;
				--uui-button-padding-top-factor: 1.5;
				--uui-button-padding-bottom-factor: 1.5;
			}

			#resend {
				display: inline-flex;
				font-size: 14px;
				align-self: center;
				gap: var(--uui-size-space-1);
			}

			#resend a {
				color: var(--uui-color-selected);
				font-weight: 600;
				text-decoration: none;
			}

			#resend a:hover {
				color: var(--uui-color-interactive-emphasis);
			}
		`
];
Re([
  m()
], ue.prototype, "resetCallState", 2);
Re([
  m()
], ue.prototype, "error", 2);
ue = Re([
  x("umb-reset-password-page")
], ue);
var wa = Object.getOwnPropertyDescriptor, Vt = (t) => {
  throw TypeError(t);
}, va = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? wa(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = i(a) || a);
  return a;
}, ba = (t, e, r) => e.has(t) || Vt("Cannot " + r), ya = (t, e, r) => e.has(t) ? Vt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), _a = (t, e, r) => (ba(t, e, "access private method"), r), De, Nt;
let Te = class extends $ {
  constructor() {
    super(...arguments), ya(this, De);
  }
  render() {
    return l`
			<button type="button" @click=${_a(this, De, Nt)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
				</svg>
				<span><umb-localize key="auth_returnToLogin">Return to login form</umb-localize></span>
			</button>
		`;
  }
};
De = /* @__PURE__ */ new WeakSet();
Nt = function() {
  this.dispatchEvent(new CustomEvent("umb-login-flow", { composed: !0, detail: { flow: "login" } }));
};
Te.styles = [
  A`
			:host {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			button {
				cursor: pointer;
				background: none;
				border: 0;
				height: 1rem;
				color: var(--uui-color-text-alt); /* TODO Change to uui color when uui gets a muted text variable */
				gap: var(--uui-size-space-1);
				align-self: center;
				text-decoration: none;
				display: inline-flex;
				line-height: 1;
				font-size: 14px;
				font-family: var(--uui-font-family),sans-serif;
			}
			button svg {
				width: 1rem;
			}
			button:hover {
				color: var(--uui-color-interactive-emphasis);
			}
		`
];
Te = va([
  x("umb-back-to-login-button")
], Te);
export {
  V as UMB_AUTH_CONTEXT,
  qr as UmbAuthContext,
  J as UmbAuthLayoutElement,
  Ar as UmbSlimBackofficeController
};
//# sourceMappingURL=login.js.map

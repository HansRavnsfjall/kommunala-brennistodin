import { a as N, U as b } from "./ufm-element-base-CIbtrvQg.js";
import { a as R } from "./ufm-render.context-DsMm52fq.js";
import { property as g, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { UmbDocumentItemRepository as I, UMB_DOCUMENT_ENTITY_TYPE as P } from "@umbraco-cms/backoffice/document";
import { UmbId as d } from "@umbraco-cms/backoffice/id";
import { UMB_MEDIA_ENTITY_TYPE as U, UmbMediaItemRepository as x } from "@umbraco-cms/backoffice/media";
import { UMB_MEMBER_ENTITY_TYPE as B, UmbMemberItemRepository as D } from "@umbraco-cms/backoffice/member";
var O = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, v = (e, t, r, s) => {
  for (var i = s > 1 ? void 0 : s ? Y(t, r) : t, h = e.length - 1, _; h >= 0; h--)
    (_ = e[h]) && (i = (s ? _(t, r, i) : _(i)) || i);
  return s && i && O(t, r, i), i;
}, l = (e, t, r) => t.has(e) || E("Cannot " + r), a = (e, t, r) => (l(e, t, "read from private field"), r ? r.call(e) : t.get(e)), f = (e, t, r) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), u = (e, t, r, s) => (l(e, t, "write to private field"), t.set(e, r), r), c = (e, t, r) => (l(e, t, "access private method"), r), o, m, p, n, w, M, T, C;
const W = "ufm-content-name";
let y = class extends N {
  constructor() {
    super(), f(this, n), f(this, o), f(this, m), f(this, p), this.consumeContext(R, (e) => {
      this.observe(
        e?.value,
        async (t) => {
          const r = this.alias && typeof t == "object" ? t[this.alias] : t;
          if (!r) return;
          const s = c(this, n, w).call(this, r), i = c(this, n, M).call(this, r);
          this.value = await c(this, n, T).call(this, s, i);
        },
        "observeValue"
      );
    });
  }
};
o = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
w = function(e) {
  if (Array.isArray(e) && e.length > 0) {
    const t = e[0];
    if (t.type) return t.type;
    if (t.mediaKey) return U;
  }
  return null;
};
M = function(e) {
  return Array.isArray(e) ? e.map((t) => t.unique ?? t.mediaKey ?? t).filter((t) => d.validate(t)) : typeof e == "string" && d.validate(e) ? [e] : [];
};
T = async function(e, t) {
  if (t?.length) {
    const r = c(this, n, C).call(this, e);
    if (r) {
      const { data: s } = await r.requestItems(t);
      if (Array.isArray(s) && s.length > 0)
        return s.map((i) => i.name).join(", ");
    }
  }
  return "";
};
C = function(e) {
  switch (e) {
    case U:
      return a(this, m) || u(this, m, new x(this)), a(this, m);
    case B:
      return a(this, p) || u(this, p, new D(this)), a(this, p);
    case P:
    default:
      return a(this, o) || u(this, o, new I(this)), a(this, o);
  }
};
v([
  g()
], y.prototype, "alias", 2);
y = v([
  A(W)
], y);
class X extends b {
  render(t) {
    return t.text ? (t.prefix === "~" && console.warn(`Please update your UFM syntax from \`${t.raw}\` to \`{umbContentName:${t.text}}\`.`), `<ufm-content-name ${super.getAttributes(t.text)}></ufm-content-name>`) : void 0;
  }
}
export {
  X as UmbUfmContentNameComponent,
  X as api
};
//# sourceMappingURL=content-name.component-IlSUfsTr.js.map

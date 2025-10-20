import { a as E, U as w } from "./ufm-element-base-CIbtrvQg.js";
import { a as T } from "./ufm-render.context-DsMm52fq.js";
import { property as M, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbDocumentItemRepository as A, UMB_DOCUMENT_ENTITY_TYPE as N } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_ENTITY_TYPE as P, UmbMediaItemRepository as R } from "@umbraco-cms/backoffice/media";
var b = Object.defineProperty, k = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, v = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? k(t, s) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (r = (i ? n(t, s, r) : n(r)) || r);
  return i && r && b(t, s, r), r;
}, h = (e, t, s) => t.has(e) || u("Cannot " + s), p = (e, t, s) => (h(e, t, "read from private field"), s ? s.call(e) : t.get(e)), f = (e, t, s) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), l = (e, t, s, i) => (h(e, t, "write to private field"), t.set(e, s), s), y = (e, t, s) => (h(e, t, "access private method"), s), o, m, c, U, d;
const x = "ufm-link";
let _ = class extends E {
  constructor() {
    super(), f(this, c), f(this, o), f(this, m), this.consumeContext(T, (e) => {
      this.observe(
        e?.value,
        async (t) => {
          const s = this.alias && typeof t == "object" ? t[this.alias] : t;
          if (!s) return;
          const i = Array.isArray(s) ? s : [s], r = await Promise.all(i.map(async (a) => await y(this, c, U).call(this, a)));
          this.value = r.filter((a) => a).join(", ");
        },
        "observeValue"
      );
    });
  }
};
o = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
U = async function(e) {
  const t = e;
  if (t.name)
    return t.name;
  const s = t.type, i = t.unique;
  if (i) {
    const r = y(this, c, d).call(this, s);
    if (r) {
      const { data: a } = await r.requestItems([i]);
      if (Array.isArray(a) && a.length > 0)
        return a.map((n) => n.name).join(", ");
    }
  }
  return "";
};
d = function(e) {
  switch (e) {
    case P:
      return p(this, m) || l(this, m, new R(this)), p(this, m);
    case N:
    default:
      return p(this, o) || l(this, o, new A(this)), p(this, o);
  }
};
v([
  M()
], _.prototype, "alias", 2);
_ = v([
  C(x)
], _);
class W extends w {
  render(t) {
    return t.text ? `<ufm-link ${super.getAttributes(t.text)}></ufm-link>` : void 0;
  }
}
export {
  W as UmbUfmLinkComponent,
  W as api
};
//# sourceMappingURL=link.component-DUlB2PUb.js.map

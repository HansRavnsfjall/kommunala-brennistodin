import { a as E, U as w } from "./ufm-element-base-nPz4MeAx.js";
import { a as T } from "./ufm-render.context-DsMm52fq.js";
import { property as M, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbDocumentItemRepository as A, UMB_DOCUMENT_ENTITY_TYPE as P } from "@umbraco-cms/backoffice/document";
import { UMB_MEDIA_ENTITY_TYPE as R, UmbMediaItemRepository as b } from "@umbraco-cms/backoffice/media";
var k = Object.defineProperty, x = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, v = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? x(t, r) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (s = (i ? n(t, r, s) : n(s)) || s);
  return i && s && k(t, r, s), s;
}, h = (e, t, r) => t.has(e) || l("Cannot " + r), p = (e, t, r) => (h(e, t, "read from private field"), r ? r.call(e) : t.get(e)), f = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), u = (e, t, r, i) => (h(e, t, "write to private field"), t.set(e, r), r), y = (e, t, r) => (h(e, t, "access private method"), r), o, m, c, U, d;
let _ = class extends E {
  constructor() {
    super(), f(this, c), f(this, o), f(this, m), this.consumeContext(T, (e) => {
      this.observe(
        e?.value,
        async (t) => {
          const r = this.alias && typeof t == "object" ? t[this.alias] : t;
          if (!r) return;
          const i = Array.isArray(r) ? r : [r], s = await Promise.all(i.map(async (a) => await y(this, c, U).call(this, a)));
          this.value = s.filter((a) => a).join(", ");
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
  const r = t.type, i = t.unique;
  if (i) {
    const s = y(this, c, d).call(this, r);
    if (s) {
      const { data: a } = await s.requestItems([i]);
      if (Array.isArray(a) && a.length > 0)
        return a.map((n) => n.name).join(", ");
    }
  }
  return "";
};
d = function(e) {
  switch (e) {
    case R:
      return p(this, m) || u(this, m, new b(this)), p(this, m);
    case P:
    default:
      return p(this, o) || u(this, o, new A(this)), p(this, o);
  }
};
v([
  M()
], _.prototype, "alias", 2);
_ = v([
  C("ufm-link")
], _);
class g extends w {
  render(t) {
    return t.text ? `<ufm-link ${super.getAttributes(t.text)}></ufm-link>` : void 0;
  }
}
export {
  g as UmbUfmLinkComponent,
  g as api
};
//# sourceMappingURL=link.component-CBoNPvyv.js.map

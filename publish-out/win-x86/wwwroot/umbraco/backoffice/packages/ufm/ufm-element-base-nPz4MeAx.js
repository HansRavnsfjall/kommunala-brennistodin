import { UMB_UFM_CONTEXT as f } from "./ufm.context-CodmBAew.js";
import { property as m, state as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
class U {
  getAttributes(t) {
    if (!t) return null;
    const r = t.indexOf("|");
    if (r === -1)
      return `alias="${t.trim()}"`;
    const e = t.substring(0, r).trim(), s = t.substring(r + 1).trim();
    return Object.entries({ alias: e, filters: s }).map(([i, n]) => n ? `${i}="${n.trim()}"` : null).join(" ");
  }
  destroy() {
  }
}
var c = Object.defineProperty, h = Object.getOwnPropertyDescriptor, a = (o, t, r, e) => {
  for (var s = e > 1 ? void 0 : e ? h(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (e ? n(t, r, s) : n(s)) || s);
  return e && s && c(t, r, s), s;
};
class l extends u {
  #t;
  #r;
  set filters(t) {
    this.#s = t, this.#t = t?.split("|").filter((r) => r).map((r) => {
      const [e, ...s] = r.split(":").map((i) => i.trim());
      return { alias: e, args: s };
    });
  }
  get filters() {
    return this.#s;
  }
  #s;
  constructor() {
    super(), this.consumeContext(f, (t) => {
      this.#r = t;
    });
  }
  render() {
    let t = Array.isArray(this.value) ? this.value : [this.value];
    if (this.#t) {
      const r = /* @__PURE__ */ new Set();
      for (const e of this.#t) {
        const s = this.#r?.getFilterByAlias(e.alias);
        s ? t = t.map((i) => s(i, ...e.args)) : r.add(e.alias);
      }
      r.size > 0 && console.warn(`UFM filters with aliases "${Array.from(r).join('", "')}" were not found.`);
    }
    return t.join(", ");
  }
}
a([
  m()
], l.prototype, "filters", 1);
a([
  p()
], l.prototype, "value", 2);
export {
  U,
  l as a
};
//# sourceMappingURL=ufm-element-base-nPz4MeAx.js.map

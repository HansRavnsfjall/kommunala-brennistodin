import { U as f } from "./ufm.context-ej9QaPDH.js";
import { property as m, state as p, nothing as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
class _ {
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
var h = Object.defineProperty, b = Object.getOwnPropertyDescriptor, l = (o, t, r, e) => {
  for (var s = e > 1 ? void 0 : e ? b(t, r) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (e ? n(t, r, s) : n(s)) || s);
  return e && s && h(t, r, s), s;
};
class a extends c {
  #t;
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
  #r;
  constructor() {
    super(), this.consumeContext(f, (t) => {
      this.#r = t;
    });
  }
  render() {
    if (!this.#r) return u;
    let t = Array.isArray(this.value) ? this.value : [this.value];
    if (this.#t)
      for (const r of this.#t) {
        const e = this.#r.getFilterByAlias(r.alias);
        e && (t = t.map((s) => e(s, ...r.args)));
      }
    return t.join(", ");
  }
}
l([
  m()
], a.prototype, "filters", 1);
l([
  p()
], a.prototype, "value", 2);
export {
  _ as U,
  a
};
//# sourceMappingURL=ufm-element-base-CIbtrvQg.js.map

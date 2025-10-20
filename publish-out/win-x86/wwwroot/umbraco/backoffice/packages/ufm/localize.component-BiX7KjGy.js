import { a as m, U as _ } from "./ufm-element-base-CIbtrvQg.js";
import { property as v, customElement as u } from "@umbraco-cms/backoffice/external/lit";
var h = Object.defineProperty, d = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, c = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? d(t, r) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (a = (s ? o(t, r, a) : o(a)) || a);
  return s && a && h(t, r, a), a;
}, f = (e, t, r) => t.has(e) || p("Cannot " + r), U = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), z = (e, t, r) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, s) => (f(e, t, "write to private field"), t.set(e, r), r), i;
const w = "ufm-localize";
let l = class extends m {
  constructor() {
    super(...arguments), z(this, i);
  }
  set alias(e) {
    e && (C(this, i, e), this.value = this.localize.term(e));
  }
  get alias() {
    return U(this, i);
  }
};
i = /* @__PURE__ */ new WeakMap();
c([
  v()
], l.prototype, "alias", 1);
l = c([
  u(w)
], l);
class y extends _ {
  render(t) {
    return t.text ? `<ufm-localize ${super.getAttributes(t.text)}></ufm-localize>` : void 0;
  }
}
export {
  y as UmbUfmLocalizeComponent,
  y as api
};
//# sourceMappingURL=localize.component-BiX7KjGy.js.map

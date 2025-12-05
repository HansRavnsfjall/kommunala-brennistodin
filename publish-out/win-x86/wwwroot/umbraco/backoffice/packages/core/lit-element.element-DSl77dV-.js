import { LitElement as l, property as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as a } from "@umbraco-cms/backoffice/element-api";
var f = Object.defineProperty, s = (t, i, n, d) => {
  for (var r = void 0, e = t.length - 1, o; e >= 0; e--)
    (o = t[e]) && (r = o(i, n, r) || r);
  return r && f(i, n, r), r;
};
class m extends a(l) {
  constructor() {
    super(...arguments), this.dir = "", this.lang = "";
  }
}
s([
  p()
], m.prototype, "dir");
s([
  p()
], m.prototype, "lang");
export {
  m as U
};
//# sourceMappingURL=lit-element.element-DSl77dV-.js.map

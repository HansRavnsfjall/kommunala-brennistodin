import { a as i, U as n } from "./ufm-element-base-CIbtrvQg.js";
import { a as p } from "./ufm-render.context-DsMm52fq.js";
import { property as f, customElement as b } from "@umbraco-cms/backoffice/external/lit";
var v = Object.defineProperty, c = Object.getOwnPropertyDescriptor, u = (s, e, r, a) => {
  for (var t = a > 1 ? void 0 : a ? c(e, r) : e, l = s.length - 1, o; l >= 0; l--)
    (o = s[l]) && (t = (a ? o(e, r, t) : o(t)) || t);
  return a && t && v(e, r, t), t;
};
const U = "ufm-label-value";
let m = class extends i {
  constructor() {
    super(), this.consumeContext(p, (s) => {
      this.observe(
        s?.value,
        (e) => {
          this.alias !== void 0 && e !== void 0 && typeof e == "object" ? this.value = e[this.alias] : this.value = e;
        },
        "observeValue"
      );
    });
  }
};
u([
  f()
], m.prototype, "alias", 2);
m = u([
  b(U)
], m);
class E extends n {
  render(e) {
    return e.text ? `<ufm-label-value ${super.getAttributes(e.text)}></ufm-label-value>` : void 0;
  }
}
export {
  E as UmbUfmLabelValueComponent,
  E as api
};
//# sourceMappingURL=label-value.component-LX5Ohqa0.js.map

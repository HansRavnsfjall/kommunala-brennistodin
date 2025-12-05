import { a as i, U as p } from "./ufm-element-base-nPz4MeAx.js";
import { a as f } from "./ufm-render.context-DsMm52fq.js";
import { property as b, customElement as n } from "@umbraco-cms/backoffice/external/lit";
var v = Object.defineProperty, U = Object.getOwnPropertyDescriptor, u = (s, e, r, a) => {
  for (var t = a > 1 ? void 0 : a ? U(e, r) : e, l = s.length - 1, o; l >= 0; l--)
    (o = s[l]) && (t = (a ? o(e, r, t) : o(t)) || t);
  return a && t && v(e, r, t), t;
};
let m = class extends i {
  constructor() {
    super(), this.consumeContext(f, (s) => {
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
  b()
], m.prototype, "alias", 2);
m = u([
  n("ufm-label-value")
], m);
class x extends p {
  render(e) {
    return e.text ? `<ufm-label-value ${super.getAttributes(e.text)}></ufm-label-value>` : void 0;
  }
}
export {
  x as UmbUfmLabelValueComponent,
  x as api
};
//# sourceMappingURL=label-value.component-DnyEchJR.js.map

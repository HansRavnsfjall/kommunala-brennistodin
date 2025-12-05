import { UmbUfmElementBase as u, UMB_UFM_RENDER_CONTEXT as l, UmbUfmComponentBase as v } from "@umbraco-cms/backoffice/ufm";
import { g as _ } from "./index.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { property as h, customElement as d } from "@umbraco-cms/backoffice/external/lit";
var F = Object.defineProperty, b = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, p = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? b(t, r) : t, a = e.length - 1, m; a >= 0; a--)
    (m = e[a]) && (s = (o ? m(t, r, s) : m(s)) || s);
  return o && s && F(t, r, s), s;
}, y = (e, t, r) => t.has(e) || f("Cannot " + r), E = (e, t, r) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r) => (y(e, t, "access private method"), r), n, c;
const C = "ufm-form-name";
let i = class extends u {
  constructor() {
    super(), E(this, n), this.consumeContext(l, (e) => {
      this.observe(
        e == null ? void 0 : e.value,
        async (t) => {
          const r = U(this, n, c).call(this, t);
          if (r) {
            const o = new _(this), { data: s } = await o.requestItems([r]);
            s && s.length > 0 && (this.value = s[0].name);
          }
        },
        "observeValue"
      );
    });
  }
};
n = /* @__PURE__ */ new WeakSet();
c = function(e) {
  if (this.alias && typeof e == "object") {
    const r = e[this.alias];
    return r ? typeof r == "object" ? r.formId.toString() : r.toString() : void 0;
  }
};
p([
  h()
], i.prototype, "alias", 2);
i = p([
  d(C)
], i);
class A extends v {
  render(t) {
    return t.text ? `<ufm-form-name ${super.getAttributes(t.text)}></ufm-form-name>` : void 0;
  }
}
export {
  A as FormsUfmFormNameComponent,
  A as api
};
//# sourceMappingURL=form-name.component.js.map

import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { c as s } from "./paths-pWW_vsmu.js";
import { html as c, state as p, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var u = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, m = (a, e, l, o) => {
  for (var t = o > 1 ? void 0 : o ? _(e, l) : e, i = a.length - 1, n; i >= 0; i--)
    (n = a[i]) && (t = (o ? n(e, l, t) : n(t)) || t);
  return o && t && u(e, l, t), t;
};
let r = class extends f {
  constructor() {
    super(...arguments), this._tableConfig = {
      allowSelection: !1
    };
  }
  render() {
    return c` <umb-collection alias=${s}></umb-collection>`;
  }
};
m([
  p()
], r.prototype, "_tableConfig", 2);
r = m([
  b("umb-dictionary-collection-dashboard")
], r);
const E = r;
export {
  r as UmbDictionaryCollectionDashboardElement,
  E as default
};
//# sourceMappingURL=dictionary-overview-dashboard.element-CsTGx_XD.js.map

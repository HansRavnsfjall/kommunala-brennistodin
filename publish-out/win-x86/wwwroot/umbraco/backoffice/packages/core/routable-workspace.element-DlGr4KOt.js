import { html as a, state as b, customElement as n } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
var _ = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = (r, t, u, s) => {
  for (var e = s > 1 ? void 0 : s ? f(t, u) : t, m = r.length - 1, l; m >= 0; m--)
    (l = r[m]) && (e = (s ? l(t, u, e) : l(e)) || e);
  return s && e && _(t, u, e), e;
};
let o = class extends c {
  constructor() {
    super(...arguments), this._routes = [];
  }
  set api(r) {
    this.observe(r.routes.routes, (t) => this._routes = t);
  }
  render() {
    return a`<umb-router-slot .routes="${this._routes}"></umb-router-slot>`;
  }
};
p([
  b()
], o.prototype, "_routes", 2);
o = p([
  n("umb-routable-workspace")
], o);
const h = o;
export {
  o as UmbRoutableWorkspaceElement,
  h as default
};
//# sourceMappingURL=routable-workspace.element-DlGr4KOt.js.map

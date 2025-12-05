import { state as w, property as E, customElement as A, html as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbExtensionsElementAndApiInitializer as C, UmbExtensionsApiInitializer as g } from "@umbraco-cms/backoffice/extension-api";
import { UMB_MARK_ATTRIBUTE_NAME as k } from "@umbraco-cms/backoffice/const";
import { umbExtensionsRegistry as l } from "@umbraco-cms/backoffice/extension-registry";
var x = Object.defineProperty, M = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, d = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? M(e, r) : e, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (i = (s ? m(e, r, i) : m(i)) || i);
  return s && i && x(e, r, i), i;
}, f = (t, e, r) => e.has(t) || v("Cannot " + r), a = (t, e, r) => (f(t, e, "read from private field"), r ? r.call(t) : e.get(t)), _ = (t, e, r) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), y = (t, e, r, s) => (f(t, e, "write to private field"), e.set(t, r), r), W = (t, e, r) => (f(t, e, "access private method"), r), o, n, h, u;
const b = (t) => [{ manifest: t }];
let p = class extends U {
  constructor() {
    super(...arguments), _(this, h), _(this, o), _(this, n);
  }
  get entityType() {
    return a(this, n);
  }
  set entityType(t) {
    t === a(this, n) || !t || (y(this, n, t), W(this, h, u).call(this, t));
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.setAttribute(k, "workspace");
  }
  render() {
    return this._component ?? T`<umb-view-loader></umb-view-loader>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
u = function(t) {
  a(this, o) && a(this, o).destroy(), y(this, o, new C(
    this,
    l,
    "workspace",
    b,
    (e) => e.meta.entityType === t,
    (e) => {
      this._component = e[0]?.component;
      const r = e[0]?.api;
      r && new g(r, l, "workspaceContext", [r]);
    },
    void 0,
    // We can leave the alias to undefined, as we destroy this our selfs.
    void 0,
    () => import("./default-workspace.context-DCkjRn1m.js"),
    { single: !0 }
  ));
};
d([
  w()
], p.prototype, "_component", 2);
d([
  E({ type: String, attribute: "entity-type" })
], p.prototype, "entityType", 1);
p = d([
  A("umb-workspace")
], p);
export {
  p as UmbWorkspaceElement,
  p as element
};
//# sourceMappingURL=workspace.element-tg2OuAH5.js.map

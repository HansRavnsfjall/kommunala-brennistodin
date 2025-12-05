import { m as E, i as u, q as f, l as A } from "./partial-view-workspace.context-token-DmMOFZmM.js";
import { html as w, css as P, state as R, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as W } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as I } from "@umbraco-cms/backoffice/workspace";
var C = Object.defineProperty, L = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, d = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? L(t, r) : t, n = e.length - 1, _; n >= 0; n--)
    (_ = e[n]) && (a = (s ? _(t, r, a) : _(a)) || a);
  return s && a && C(t, r, a), a;
}, m = (e, t, r) => t.has(e) || h("Cannot " + r), c = (e, t, r) => (m(e, t, "read from private field"), t.get(e)), l = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), U = (e, t, r, s) => (m(e, t, "write to private field"), t.set(e, r), r), y = (e, t, r) => (m(e, t, "access private method"), r), o, p, v;
const S = "umb-partial-view-folder-workspace-editor";
let i = class extends T {
  constructor() {
    super(), l(this, p), this._name = "", l(this, o), this.consumeContext(E, (e) => {
      U(this, o, e), y(this, p, v).call(this);
    });
  }
  render() {
    return w`<umb-workspace-editor headline=${this._name}> </umb-workspace-editor>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
v = function() {
  c(this, o) && this.observe(
    c(this, o).name,
    (e) => {
      e !== this._name && (this._name = e ?? "");
    },
    "observeName"
  );
};
i.styles = [W, P``];
d([
  R()
], i.prototype, "_name", 2);
i = d([
  O(S)
], i);
class b extends I {
  constructor(t) {
    super(t, {
      workspaceAlias: A,
      entityType: f,
      detailRepositoryAlias: u
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: i,
        setup: (r, s) => {
          const a = s.match.params.unique;
          this.load(a);
        }
      }
    ]);
  }
}
export {
  b as UmbPartialViewFolderWorkspaceContext,
  b as api
};
//# sourceMappingURL=partial-view-folder-workspace.context-xruXlbvX.js.map

import { n as v, j as u, m as f } from "./manifests-CkeJWkpV.js";
import { b as S } from "./entity-CA4W0tlV.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as T, css as y, state as O, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as L } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as R } from "@umbraco-cms/backoffice/workspace";
var U = Object.defineProperty, A = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, E = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? A(t, r) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (s = (o ? p(t, r, s) : p(s)) || s);
  return o && s && U(t, r, s), s;
}, _ = (e, t, r) => t.has(e) || l("Cannot " + r), c = (e, t, r) => (_(e, t, "read from private field"), t.get(e)), h = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), W = (e, t, r, o) => (_(e, t, "write to private field"), t.set(e, r), r), k = (e, t, r) => (_(e, t, "access private method"), r), a, m, d;
const x = "umb-stylesheet-folder-workspace-editor";
let i = class extends C {
  constructor() {
    super(), h(this, m), this._name = "", h(this, a), this.consumeContext(v, (e) => {
      W(this, a, e), k(this, m, d).call(this);
    });
  }
  render() {
    return T`<umb-workspace-editor headline=${this._name}> </umb-workspace-editor>`;
  }
};
a = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
d = function() {
  c(this, a) && this.observe(
    c(this, a).name,
    (e) => {
      e !== this._name && (this._name = e ?? "");
    },
    "observeName"
  );
};
i.styles = [L, y``];
E([
  O()
], i.prototype, "_name", 2);
i = E([
  w(x)
], i);
class g extends R {
  constructor(t) {
    super(t, {
      workspaceAlias: f,
      entityType: S,
      detailRepositoryAlias: u
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: i,
        setup: (r, o) => {
          const s = o.match.params.unique;
          this.load(s);
        }
      }
    ]);
  }
}
export {
  g as UmbStylesheetFolderWorkspaceContext,
  g as api
};
//# sourceMappingURL=stylesheet-folder-workspace.context-vIB0irbB.js.map

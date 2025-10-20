import { r as u, n as f, w as E, q as S } from "./manifests-cHFy6NXv.js";
import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { html as C, css as R, state as O, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as w } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as U } from "@umbraco-cms/backoffice/workspace";
var y = Object.defineProperty, A = Object.getOwnPropertyDescriptor, l = (e) => {
  throw TypeError(e);
}, d = (e, t, r, a) => {
  for (var s = a > 1 ? void 0 : a ? A(t, r) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (s = (a ? p(t, r, s) : p(s)) || s);
  return a && s && y(t, r, s), s;
}, m = (e, t, r) => t.has(e) || l("Cannot " + r), c = (e, t, r) => (m(e, t, "read from private field"), t.get(e)), h = (e, t, r) => t.has(e) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), W = (e, t, r, a) => (m(e, t, "write to private field"), t.set(e, r), r), k = (e, t, r) => (m(e, t, "access private method"), r), o, _, v;
const x = "umb-script-folder-workspace-editor";
let i = class extends w {
  constructor() {
    super(), h(this, _), this._name = "", h(this, o), this.consumeContext(u, (e) => {
      W(this, o, e), k(this, _, v).call(this);
    });
  }
  render() {
    return C`<umb-workspace-editor headline=${this._name}> </umb-workspace-editor>`;
  }
};
o = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
v = function() {
  c(this, o) && this.observe(
    c(this, o).name,
    (e) => {
      e !== this._name && (this._name = e ?? "");
    },
    "observeName"
  );
};
i.styles = [P, R``];
d([
  O()
], i.prototype, "_name", 2);
i = d([
  T(x)
], i);
class g extends U {
  constructor(t) {
    super(t, {
      workspaceAlias: S,
      entityType: E,
      detailRepositoryAlias: f
    }), this.routes.setRoutes([
      {
        path: "edit/:unique",
        component: i,
        setup: (r, a) => {
          const s = a.match.params.unique;
          this.load(s);
        }
      }
    ]);
  }
}
export {
  g as UmbScriptFolderWorkspaceContext,
  g as api
};
//# sourceMappingURL=script-folder-workspace.context-DKTwlo4k.js.map

import { UmbLanguageDetailRepository as d } from "./language-detail.repository-B-DILFxF.js";
import { q as m, s as h, j as A, b as E, o as w, c as C } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/entity-item";
import { html as l, state as U, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as y } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as T, UmbWorkspaceIsNewRedirectController as b, UmbWorkspaceIsNewRedirectControllerAlias as N } from "@umbraco-cms/backoffice/workspace";
var O = Object.defineProperty, g = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, u = (t, e, a, r) => {
  for (var s = r > 1 ? void 0 : r ? g(e, a) : e, n = t.length - 1, p; n >= 0; n--)
    (p = t[n]) && (s = (r ? p(e, a, s) : p(s)) || s);
  return r && s && O(e, a, s), s;
}, c = (t, e, a) => e.has(t) || _("Cannot " + a), k = (t, e, a) => (c(t, e, "read from private field"), e.get(t)), G = (t, e, a) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), L = (t, e, a, r) => (c(t, e, "write to private field"), e.set(t, a), a), i;
let o = class extends v {
  constructor() {
    super(), G(this, i), this.consumeContext(m, (t) => {
      L(this, i, t), this.observe(k(this, i)?.isNew, (e) => this._isNew = e);
    });
  }
  render() {
    return l`<umb-entity-detail-workspace-editor .backPath=${h}>
			${this._isNew ? l`<h3 slot="header">Add language</h3>` : l`<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable> `}
		</umb-entity-detail-workspace-editor>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
o.styles = [y];
u([
  U()
], o.prototype, "_isNew", 2);
o = u([
  f("umb-language-workspace-editor")
], o);
class q extends T {
  constructor(e) {
    super(e, {
      workspaceAlias: w,
      entityType: E,
      detailRepositoryAlias: A
    }), this.repository = new d(this), this.routes.setRoutes([
      {
        path: "create",
        component: o,
        setup: async () => {
          await this.createScaffold({ parent: { entityType: C, unique: null } }), new b(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: o,
        setup: (a, r) => {
          this.removeUmbControllerByAlias(N), this.load(r.match.params.unique);
        }
      }
    ]);
  }
  setCulture(e) {
    this._data.updateCurrent({ unique: e });
  }
  setMandatory(e) {
    this._data.updateCurrent({ isMandatory: e });
  }
  setDefault(e) {
    this._data.updateCurrent({ isDefault: e });
  }
  setFallbackCulture(e) {
    this._data.updateCurrent({ fallbackIsoCode: e });
  }
}
export {
  q as UmbLanguageWorkspaceContext,
  q as api
};
//# sourceMappingURL=language-workspace.context-DJvyozfu.js.map

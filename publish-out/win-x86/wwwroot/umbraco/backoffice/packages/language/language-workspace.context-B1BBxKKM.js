import { UmbLanguageDetailRepository as m } from "./language-detail.repository-B-DILFxF.js";
import { q as u, s as c, j as _, b as d, o as h, c as A } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import "./language-item.server.cache-BGldxR4I.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/management-api";
import "@umbraco-cms/backoffice/repository";
import { html as p, state as b, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { UmbEntityNamedDetailWorkspaceContextBase as C, UmbWorkspaceIsNewRedirectController as y, UmbWorkspaceIsNewRedirectControllerAlias as N } from "@umbraco-cms/backoffice/workspace";
var T = Object.defineProperty, f = Object.getOwnPropertyDescriptor, l = (a, e, o, r) => {
  for (var t = r > 1 ? void 0 : r ? f(e, o) : e, i = a.length - 1, n; i >= 0; i--)
    (n = a[i]) && (t = (r ? n(e, o, t) : n(t)) || t);
  return r && t && T(e, o, t), t;
};
let s = class extends U {
  constructor() {
    super(), this.consumeContext(u, (a) => {
      this.observe(a?.isNew, (e) => this._isNew = e);
    });
  }
  render() {
    return p`<umb-entity-detail-workspace-editor .backPath=${c}>
			${this._isNew ? p`<h3 slot="header">Add language</h3>` : p`<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable> `}
		</umb-entity-detail-workspace-editor>`;
  }
};
s.styles = [w];
l([
  b()
], s.prototype, "_isNew", 2);
s = l([
  E("umb-language-workspace-editor")
], s);
class B extends C {
  constructor(e) {
    super(e, {
      workspaceAlias: h,
      entityType: d,
      detailRepositoryAlias: _
    }), this.repository = new m(this), this.routes.setRoutes([
      {
        path: "create",
        component: s,
        setup: async () => {
          await this.createScaffold({ parent: { entityType: A, unique: null } }), new y(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: s,
        setup: (o, r) => {
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
  B as UmbLanguageWorkspaceContext,
  B as api
};
//# sourceMappingURL=language-workspace.context-B1BBxKKM.js.map

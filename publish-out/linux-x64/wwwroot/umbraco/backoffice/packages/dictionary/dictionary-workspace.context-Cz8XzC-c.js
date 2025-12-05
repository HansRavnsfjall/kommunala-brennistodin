import { g as p, b as m, s as c } from "./paths-pWW_vsmu.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
import { a as u } from "./constants-Dw55vzll.js";
import { html as l, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
import { UmbEntityNamedDetailWorkspaceContextBase as _, UmbWorkspaceIsNewRedirectController as y } from "@umbraco-cms/backoffice/workspace";
var b = Object.getOwnPropertyDescriptor, A = (n, a, o, t) => {
  for (var e = t > 1 ? void 0 : t ? b(a, o) : a, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (e = i(e) || e);
  return e;
};
let s = class extends h {
  render() {
    return l`
			<umb-entity-detail-workspace-editor .backPath=${u}>
				<umb-workspace-header-name-editable slot="header"></umb-workspace-header-name-editable>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
s = A([
  d("umb-dictionary-workspace-editor")
], s);
class k extends _ {
  constructor(a) {
    super(a, {
      workspaceAlias: c,
      entityType: m,
      detailRepositoryAlias: p
    }), this.dictionary = this._data.createObservablePartOfCurrent((o) => o), this.routes.setRoutes([
      {
        path: "create/parent/:entityType/:parentUnique",
        component: s,
        setup: async (o, t) => {
          const e = t.match.params.entityType, r = t.match.params.parentUnique === "null" ? null : t.match.params.parentUnique;
          await this.createScaffold({ parent: { entityType: e, unique: r } }), new y(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: "edit/:unique",
        component: s,
        setup: (o, t) => {
          const e = t.match.params.unique;
          this.load(e);
        }
      }
    ]);
  }
  setPropertyValue(a, o) {
    const t = this._data.getCurrent();
    if (!t) return;
    const e = t.translations?.map((r) => r.isoCode === a ? { ...r, translation: o } : r) ?? [];
    e?.find((r) => r.isoCode === a) || e?.push({ isoCode: a, translation: o }), this._data.setCurrent({ ...t, translations: e });
  }
}
export {
  k as UmbDictionaryWorkspaceContext,
  k as api
};
//# sourceMappingURL=dictionary-workspace.context-Cz8XzC-c.js.map

import { p as u, b as l, q as c, e as m, c as T, f as d, g as h } from "./constants-D9L2jSGX.js";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { html as y, css as w, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbContentTypeWorkspaceContextBase as C } from "@umbraco-cms/backoffice/content-type";
import { UmbWorkspaceIsNewRedirectController as A, UmbWorkspaceIsNewRedirectControllerAlias as f } from "@umbraco-cms/backoffice/workspace";
import { UmbTemplateDetailRepository as O } from "@umbraco-cms/backoffice/template";
import { CompositionTypeModel as P } from "@umbraco-cms/backoffice/external/backend-api";
var U = Object.getOwnPropertyDescriptor, b = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? U(e, t) : e, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (r = a(r) || r);
  return r;
};
let n = class extends E {
  render() {
    return y`
			<umb-entity-detail-workspace-editor>
				<umb-content-type-workspace-editor-header slot="header"></umb-content-type-workspace-editor-header>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
n.styles = [
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
n = b([
  _("umb-document-type-workspace-editor")
], n);
class q extends C {
  constructor(e) {
    super(e, {
      workspaceAlias: c,
      entityType: l,
      detailRepositoryAlias: u
    }), this.createTemplateMode = !1, this.#e = new O(this), this.allowedTemplateIds = this.structure.ownerContentTypeObservablePart((t) => t?.allowedTemplates), this.defaultTemplate = this.structure.ownerContentTypeObservablePart((t) => t?.defaultTemplate), this.cleanup = this.structure.ownerContentTypeObservablePart((t) => t?.cleanup), this.routes.setRoutes([
      {
        path: m.toString(),
        component: n,
        setup: async (t, s) => {
          const r = s.match.params, o = r.parentEntityType, a = r.parentUnique === "null" ? null : r.parentUnique, p = r.presetAlias === "null" ? null : r.presetAlias ?? null;
          if (a === void 0)
            throw new Error("ParentUnique url parameter is required to create a document type");
          await this.#t({ entityType: o, unique: a }, p), new A(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: T.toString(),
        component: n,
        setup: (t, s) => {
          this.removeUmbControllerByAlias(f);
          const r = s.match.params.unique;
          this.load(r);
        }
      }
    ]);
  }
  #e;
  setAllowedAtRoot(e) {
    this.structure.updateOwnerContentType({ allowedAtRoot: e });
  }
  setVariesByCulture(e) {
    this.structure.updateOwnerContentType({ variesByCulture: e });
  }
  setVariesBySegment(e) {
    this.structure.updateOwnerContentType({ variesBySegment: e });
  }
  setIsElement(e) {
    this.structure.updateOwnerContentType({ isElement: e });
  }
  setAllowedContentTypes(e) {
    this.structure.updateOwnerContentType({ allowedContentTypes: e });
  }
  setCleanup(e) {
    this.structure.updateOwnerContentType({ cleanup: e });
  }
  setCollection(e) {
    this.structure.updateOwnerContentType({ collection: e });
  }
  // Document type specific:
  getAllowedTemplateIds() {
    return this.structure.getOwnerContentType()?.allowedTemplates;
  }
  setAllowedTemplateIds(e) {
    this.structure.updateOwnerContentType({ allowedTemplates: e });
  }
  setDefaultTemplate(e) {
    this.structure.updateOwnerContentType({ defaultTemplate: e });
  }
  async #t(e, t) {
    let s;
    switch (t) {
      case d: {
        s = {
          icon: "icon-document-html"
        }, this.createTemplateMode = !0;
        break;
      }
      case h: {
        s = {
          icon: "icon-plugin",
          isElement: !0
        };
        break;
      }
    }
    e.unique && e.entityType === l && (s = {
      ...s,
      compositions: [
        {
          contentType: { unique: e.unique },
          compositionType: P.INHERITANCE
        }
      ]
    }), this.createScaffold({ parent: e, preset: s });
  }
  async _create(e, t) {
    this.createTemplateMode && await this.#s();
    try {
      super._create(e, t), this.createTemplateMode = !1;
    } catch (s) {
      console.warn(s);
    }
  }
  // TODO: move this responsibility to the template package
  async #s() {
    const { data: e } = await this.#e.createScaffold({
      name: this.getName(),
      alias: this.getName()
      // NOTE: Uses "name" over alias, as the server handle the template filename. [LK]
    });
    if (!e) throw new Error("Could not create template scaffold");
    const { data: t } = await this.#e.create(e, null);
    if (!t) throw new Error("Could not create template");
    const s = { id: t.unique }, r = this.getAllowedTemplateIds() ?? [];
    this.setAllowedTemplateIds([s, ...r]), this.setDefaultTemplate(s);
  }
  /**
   * @deprecated Use the createScaffold method instead. Will be removed in 17.
   * @param presetAlias
   * @param {UmbEntityModel} parent
   * @memberof UmbMediaTypeWorkspaceContext
   */
  async create(e, t) {
    this.#t(e, t);
  }
}
export {
  q as UmbDocumentTypeWorkspaceContext,
  q as api
};
//# sourceMappingURL=document-type-workspace.context-CbCunNQk.js.map

import { p as u, b as l, q as c, e as m, c as T, f as d, g as E } from "./constants-rt5n84j4.js";
import { UmbLitElement as h } from "@umbraco-cms/backoffice/lit-element";
import { html as y, css as w, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { CompositionTypeModel as C } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbContentTypeWorkspaceContextBase as A } from "@umbraco-cms/backoffice/content-type";
import { UmbRequestReloadChildrenOfEntityEvent as f } from "@umbraco-cms/backoffice/entity-action";
import { UmbWorkspaceIsNewRedirectController as O, UmbWorkspaceIsNewRedirectControllerAlias as P } from "@umbraco-cms/backoffice/workspace";
import { UMB_ACTION_EVENT_CONTEXT as U } from "@umbraco-cms/backoffice/action";
import { UmbTemplateDetailRepository as b, UMB_TEMPLATE_ROOT_ENTITY_TYPE as R } from "@umbraco-cms/backoffice/template";
var M = Object.getOwnPropertyDescriptor, N = (i, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? M(e, t) : e, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (r = n(r) || r);
  return r;
};
let a = class extends h {
  render() {
    return y`
			<umb-entity-detail-workspace-editor>
				<umb-content-type-workspace-editor-header slot="header"></umb-content-type-workspace-editor-header>
			</umb-entity-detail-workspace-editor>
		`;
  }
};
a.styles = [
  w`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`
];
a = N([
  _("umb-document-type-workspace-editor")
], a);
class W extends A {
  constructor(e) {
    super(e, {
      workspaceAlias: c,
      entityType: l,
      detailRepositoryAlias: u
    }), this.createTemplateMode = !1, this.#e = new b(this), this.allowedTemplateIds = this.structure.ownerContentTypeObservablePart((t) => t?.allowedTemplates), this.defaultTemplate = this.structure.ownerContentTypeObservablePart((t) => t?.defaultTemplate), this.cleanup = this.structure.ownerContentTypeObservablePart((t) => t?.cleanup), this.routes.setRoutes([
      {
        path: m.toString(),
        component: a,
        setup: async (t, s) => {
          const r = s.match.params, o = r.parentEntityType, n = r.parentUnique === "null" ? null : r.parentUnique, p = r.presetAlias === "null" ? null : r.presetAlias ?? null;
          if (n === void 0)
            throw new Error("ParentUnique url parameter is required to create a document type");
          await this.#t({ entityType: o, unique: n }, p), new O(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: T.toString(),
        component: a,
        setup: (t, s) => {
          this.removeUmbControllerByAlias(P);
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
      case E: {
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
          compositionType: C.INHERITANCE
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
    const s = await this.getContext(U);
    if (!s)
      throw new Error("Could not get the action event context");
    const r = new f({
      entityType: R,
      unique: null
    });
    s.dispatchEvent(r);
    const o = { id: t.unique }, n = this.getAllowedTemplateIds() ?? [];
    this.setAllowedTemplateIds([o, ...n]), this.setDefaultTemplate(o);
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
  W as UmbDocumentTypeWorkspaceContext,
  W as api
};
//# sourceMappingURL=document-type-workspace.context-DYrPZML8.js.map

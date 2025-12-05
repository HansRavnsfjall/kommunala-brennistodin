import { UmbDocumentTypeDetailRepository as C } from "./document-type-detail.repository-V__Mk04y.js";
import { UmbContentPropertyDatasetContext as w, UmbContentDetailWorkspaceContextBase as y } from "@umbraco-cms/backoffice/content";
import { N as O, O as f, P as v, Q as P, e as S, i as g, R as d, S as h, z as l, n as D, k as N, f as b, T as R } from "./manifests-BP7S9LPy.js";
import "@umbraco-cms/backoffice/id";
import { DocumentService as T } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as E } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as I } from "@umbraco-cms/backoffice/repository";
import { U as M } from "./document-preview.repository-C-iB7zsP.js";
import { UmbDocumentPublishingRepository as A } from "./document-publishing.repository-BtIywgYV.js";
import "@umbraco-cms/backoffice/picker-input";
import { UmbVariantId as u } from "@umbraco-cms/backoffice/variant";
import "./culture-and-hostnames-modal.element-DgqNE89K.js";
import "@umbraco-cms/backoffice/class-api";
import { UMB_DOCUMENT_CONFIGURATION_CONTEXT as q } from "./document-configuration.context-Bz7FvH_D.js";
import "@umbraco-cms/backoffice/entity-item";
import { observeMultiple as B } from "@umbraco-cms/backoffice/observable-api";
import "./document-variant-language-picker.element-azTXCKTU.js";
import "@umbraco-cms/backoffice/tree";
import "@umbraco-cms/backoffice/property";
import { UmbWorkspaceIsNewRedirectController as _, UmbWorkspaceIsNewRedirectControllerAlias as W } from "@umbraco-cms/backoffice/workspace";
import { UmbDocumentBlueprintDetailRepository as V } from "@umbraco-cms/backoffice/document-blueprint";
import { UmbIsTrashedEntityContext as x } from "@umbraco-cms/backoffice/recycle-bin";
import { ensurePathEndsWithSlash as L, UmbDeprecation as o } from "@umbraco-cms/backoffice/utils";
import { createExtensionApiByAlias as U } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_SERVER_CONTEXT as K } from "@umbraco-cms/backoffice/server";
class F extends w {
  constructor(e, t, i) {
    super(e, t, i);
  }
}
class H {
  #t;
  constructor(e) {
    this.#t = e;
  }
  /**
   * Validate a new Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param parentUnique - Parent Unique
   * @returns {*}
   */
  async validateCreate(e, t = null) {
    if (!e) throw new Error("Document is missing");
    if (!e.unique) throw new Error("Document unique is missing");
    if (t === void 0) throw new Error("Parent unique is missing");
    const i = {
      id: e.unique,
      parent: t ? { id: t } : null,
      documentType: { id: e.documentType.unique },
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { data: n, error: a } = await E(
      this.#t,
      T.postDocumentValidate({
        body: i
      }),
      {
        disableNotifications: !0
      }
    );
    return n && typeof n == "string" ? { data: n } : { error: a };
  }
  /**
   * Validate a existing Document
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param {Array<UmbVariantId>} variantIds - Variant Ids
   * @returns {*}
   */
  async validateUpdate(e, t) {
    if (!e.unique) throw new Error("Unique is missing");
    const i = t.map((r) => r.culture).filter((r) => r !== null), n = {
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants,
      cultures: i
    }, { data: a, error: s } = await E(
      this.#t,
      T.putUmbracoManagementApiV11DocumentByIdValidate11({
        path: { id: e.unique },
        body: n
      }),
      {
        disableNotifications: !0
      }
    );
    return a && typeof a == "string" ? { data: a } : { error: s };
  }
}
class X extends I {
  #t;
  constructor(e) {
    super(e), this.#t = new H(this);
  }
  /**
   * Returns a promise with an observable of the detail for the given unique
   * @param {DetailModelType} model
   * @param {string | null} [parentUnique]
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async validateCreate(e, t) {
    if (!e) throw new Error("Data is missing");
    return this.#t.validateCreate(e, t);
  }
  /**
   * Saves the given data
   * @param {DetailModelType} model
   * @param variantIds
   * @returns {*}
   * @memberof UmbDetailRepositoryBase
   */
  async validateSave(e, t) {
    if (!e) throw new Error("Data is missing");
    if (!e.unique) throw new Error("Unique is missing");
    return this.#t.validateUpdate(e, t);
  }
}
class Et extends y {
  constructor(e) {
    super(e, {
      entityType: S,
      workspaceAlias: P,
      detailRepositoryAlias: v,
      contentTypeDetailRepository: C,
      contentValidationRepository: X,
      skipValidationOnSubmit: !1,
      ignoreValidationResultOnSubmit: !0,
      contentVariantScaffold: f,
      contentTypePropertyName: "documentType",
      saveModalToken: O
    }), this.publishingRepository = new A(this), this.isTrashed = this._data.createObservablePartOfCurrent((t) => t?.isTrashed), this.contentTypeUnique = this._data.createObservablePartOfCurrent((t) => t?.documentType.unique), this.contentTypeHasCollection = this._data.createObservablePartOfCurrent(
      (t) => !!t?.documentType.collection
    ), this.templateId = this._data.createObservablePartOfCurrent((t) => t?.template?.unique || null), this.#t = new x(this), this.#i = !1, this.#n = !1, this.consumeContext(q, async (t) => {
      const i = await t?.getDocumentConfiguration(), n = i?.allowNonExistingSegmentsCreation ?? !1, a = i?.allowEditInvariantFromNonDefault ?? !0;
      this._variantOptionsFilter = (s) => {
        const r = s.segment && !s.variant;
        return !(!n && r);
      }, a === !1 && this.#r();
    }), this.observe(
      this.contentTypeUnique,
      (t) => {
        t && this.structure.loadType(t);
      },
      null
    ), this.consumeContext(g, (t) => {
      this.#e = t;
    }), U(this, d, [
      {
        config: {
          allOf: [h]
        },
        onChange: (t) => {
          t !== this.#i && (this.#i = t, this.#a(
            h,
            this.#i,
            "You do not have permission to create documents."
          ));
        }
      }
    ]), U(this, d, [
      {
        config: {
          allOf: [l]
        },
        onChange: (t) => {
          t !== this.#n && (this.#n = t, this.#a(
            l,
            this.#n,
            "You do not have permission to update documents."
          ));
        }
      }
    ]), this.observe(this.variants, () => {
      this.#a(
        h,
        this.#i,
        "You do not have permission to create documents."
      ), this.#a(
        l,
        this.#n,
        "You do not have permission to update documents."
      );
    }), this.routes.setRoutes([
      {
        path: D.toString(),
        component: () => import("./document-workspace-editor.element-DHa6R-n-.js"),
        setup: async (t, i) => {
          const n = i.match.params.parentEntityType, a = i.match.params.parentUnique === "null" ? null : i.match.params.parentUnique, s = i.match.params.documentTypeUnique, r = i.match.params.blueprintUnique;
          await this.create(
            { entityType: n, unique: a },
            s,
            r
          ), new _(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: N.toString(),
        component: () => import("./document-workspace-editor.element-DHa6R-n-.js"),
        setup: async (t, i) => {
          const n = i.match.params.parentEntityType, a = i.match.params.parentUnique === "null" ? null : i.match.params.parentUnique, s = i.match.params.documentTypeUnique;
          await this.create({ entityType: n, unique: a }, s), new _(
            this,
            this,
            this.getHostElement().shadowRoot.querySelector("umb-router-slot")
          );
        }
      },
      {
        path: b.toString(),
        component: () => import("./document-workspace-editor.element-DHa6R-n-.js"),
        setup: async (t, i) => {
          this.removeUmbControllerByAlias(W);
          const n = i.match.params.unique;
          await this.load(n);
        }
      }
    ]);
  }
  #t;
  #e;
  #i;
  #n;
  resetState() {
    super.resetState(), this.#t.setIsTrashed(!1);
  }
  async load(e) {
    const t = await super.load(e);
    return t?.data && this.#t.setIsTrashed(t.data.isTrashed), t;
  }
  async create(e, t, i) {
    if (i) {
      const n = new V(this), { data: a } = await n.scaffoldByUnique(i);
      if (!a) throw new Error("Blueprint data is missing");
      return this.createScaffold({
        parent: e,
        preset: {
          documentType: a.documentType,
          values: a.values,
          variants: a.variants
        }
      });
    }
    return this.createScaffold({
      parent: e,
      preset: {
        documentType: {
          unique: t,
          collection: null
        }
      }
    });
  }
  getCollectionAlias() {
    return R;
  }
  /**
   * Gets the unique identifier of the content type.
   * @deprecated Use `getContentTypeUnique` instead.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeId() {
    return this.getContentTypeUnique();
  }
  /**
   * Gets the unique identifier of the content type.
   * @returns { string | undefined} The unique identifier of the content type.
   * @memberof UmbDocumentWorkspaceContext
   */
  getContentTypeUnique() {
    return this.getData()?.documentType.unique;
  }
  /**
   * Set the template
   * @param {string} templateUnique The unique identifier of the template.
   * @memberof UmbDocumentWorkspaceContext
   */
  setTemplate(e) {
    this._data.updateCurrent({ template: { unique: e } });
  }
  async _handleSave() {
    const e = this.getHostElement().style;
    e.setProperty("--uui-color-invalid", "var(--uui-color-warning)"), e.setProperty("--uui-color-invalid-emphasis", "var(--uui-color-warning-emphasis)"), e.setProperty("--uui-color-invalid-standalone", "var(--uui-color-warning-standalone)"), e.setProperty("--uui-color-invalid-contrast", "var(--uui-color-warning-contrast)"), await super._handleSave();
  }
  async saveAndPreview() {
    return await this.#s();
  }
  async #s() {
    const e = this.getUnique();
    if (!e) throw new Error("Unique is missing");
    let t = u.CreateInvariant();
    const { selected: i } = await this._determineVariantOptions();
    if (i.length > 0) {
      t = u.FromString(i[0]);
      const p = [t], m = await this._data.constructData(p);
      await this.runMandatoryValidationForSaveData(m), await this.performCreateOrUpdate(p, m);
    }
    await new M(this).enter();
    const n = await this.getContext(K);
    if (!n)
      throw new Error("Server context is missing");
    const a = n.getBackofficePath(), s = new URL(L(a) + "preview", window.location.origin);
    s.searchParams.set("id", e), t.culture && s.searchParams.set("culture", t.culture), t.segment && s.searchParams.set("segment", t.segment), window.open(s.toString(), `umbpreview-${e}`)?.focus();
  }
  async publish() {
    if (new o({
      deprecated: "The Publish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Publish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.publish();
  }
  /**
   * Save the document and publish it.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async saveAndPublish() {
    if (new o({
      deprecated: "The SaveAndPublish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the SaveAndPublish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.saveAndPublish();
  }
  /**
   * Schedule the document to be published at a later date.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async schedule() {
    if (new o({
      deprecated: "The Schedule method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Schedule method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.schedule();
  }
  /**
   * Unpublish the document.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async unpublish() {
    if (new o({
      deprecated: "The Unpublish method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the Unpublish method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.unpublish();
  }
  /**
   * Publish the document and all its descendants.
   * @deprecated Will be removed in v17. Use the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead.
   */
  async publishWithDescendants() {
    if (new o({
      deprecated: "The PublishWithDescendants method on the UMB_DOCUMENT_WORKSPACE_CONTEXT is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the PublishWithDescendants method on the UMB_DOCUMENT_PUBLISHING_WORKSPACE_CONTEXT instead."
    }).warn(), !this.#e) throw new Error("Publishing context is missing");
    await this.#e.publishWithDescendants();
  }
  createPropertyDatasetContext(e, t) {
    return new F(e, this, t);
  }
  async #a(e, t, i) {
    if (t) {
      this.readOnlyGuard?.removeRule(e);
      return;
    }
    this.readOnlyGuard?.addRule({
      unique: e,
      message: i
    });
  }
  #r() {
    this.observe(
      B([this.structure.contentTypeProperties, this.variantOptions]),
      ([e, t]) => {
        e.length !== 0 && t.length !== 0 && t.forEach((i) => {
          if (i.language.isDefault) return;
          const n = u.CreateFromPartial(i), a = u.CreateInvariant(), r = {
            unique: `UMB_PREVENT_EDIT_INVARIANT_FROM_NON_DEFAULT_DATASET=${n.toString()}_PROPERTY_${a.toString()}`,
            message: "Shared properties can only be edited in the default language",
            variantId: a,
            datasetVariantId: n,
            permitted: !1
          };
          this.propertyWriteGuard.addRule(r);
        });
      }
    );
  }
}
export {
  Et as UmbDocumentWorkspaceContext,
  Et as default
};
//# sourceMappingURL=document-workspace.context-2iTL70-k.js.map

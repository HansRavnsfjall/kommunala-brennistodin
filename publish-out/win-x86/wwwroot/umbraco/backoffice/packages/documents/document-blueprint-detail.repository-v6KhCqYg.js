import { a as s, k as c } from "./paths-BF32ZUyU.js";
import { UmbId as l } from "@umbraco-cms/backoffice/id";
import { DocumentBlueprintService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { UMB_DOCUMENT_PROPERTY_VALUE_ENTITY_TYPE as p } from "@umbraco-cms/backoffice/document";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as m } from "@umbraco-cms/backoffice/repository";
class d {
  #e;
  /**
   * Creates an instance of UmbDocumentBlueprintServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Document scaffold
   * @param preset
   * @returns { UmbDocumentBlueprintDetailModel }
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: s,
      unique: l.new(),
      documentType: {
        unique: "",
        collection: null
      },
      values: [],
      variants: [],
      ...e
    } };
  }
  /**
   * Creates a new variant scaffold.
   * @returns A new variant scaffold.
   */
  /*
  // TDOD: remove if not used
  createVariantScaffold(): UmbDocumentBlueprintVariantModel {
  	return {
  		state: null,
  		culture: null,
  		segment: null,
  		name: '',
  		publishDate: null,
  		createDate: null,
  		updateDate: null,
  	};
  }
  */
  /**
   * Fetches a Document with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: n } = await u(
      this.#e,
      i.getDocumentBlueprintById({ path: { id: e } })
    );
    return n || !t ? { error: n } : { data: this.#t(t) };
  }
  async scaffoldByUnique(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: n } = await u(
      this.#e,
      i.getDocumentBlueprintByIdScaffold({ path: { id: e } })
    );
    return n || !t ? { error: n } : { data: this.#t(t) };
  }
  /**
   * Inserts a new Document on the server
   * @param {UmbDocumentBlueprintDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async create(e, t = null) {
    if (!e) throw new Error("Document is missing");
    if (!e.unique) throw new Error("Document unique is missing");
    const n = {
      id: e.unique,
      parent: t ? { id: t } : null,
      documentType: { id: e.documentType.unique },
      values: e.values,
      variants: e.variants
    }, { data: r, error: a } = await u(
      this.#e,
      i.postDocumentBlueprint({
        body: n
      })
    );
    return r && typeof r == "string" ? this.read(r) : { error: a };
  }
  /**
   * Updates a Document on the server
   * @param {UmbDocumentBlueprintDetailModel} Document
   * @param model
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const t = {
      values: e.values,
      variants: e.variants
    }, { error: n } = await u(
      this.#e,
      i.putDocumentBlueprintById({
        path: { id: e.unique },
        body: t
      })
    );
    return n ? { error: n } : this.read(e.unique);
  }
  /**
   * Deletes a Document on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentBlueprintServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return u(this.#e, i.deleteDocumentBlueprintById({ path: { id: e } }));
  }
  #t(e) {
    return {
      entityType: s,
      unique: e.id,
      values: e.values.map((t) => ({
        editorAlias: t.editorAlias,
        entityType: p,
        culture: t.culture || null,
        segment: t.segment || null,
        alias: t.alias,
        value: t.value
      })),
      variants: e.variants.map((t) => ({
        state: t.state,
        culture: t.culture || null,
        segment: t.segment || null,
        name: t.name,
        publishDate: t.publishDate || null,
        createDate: t.createDate,
        updateDate: t.updateDate
      })),
      documentType: {
        unique: e.documentType.id,
        collection: e.documentType.collection ? { unique: e.documentType.collection.id } : null
      }
    };
  }
}
class E extends m {
  constructor(e) {
    super(e, d, c);
  }
  /**
   * Gets an existing document blueprint by its unique identifier for scaffolding purposes, i.e. to create a new document based on an existing blueprint.
   * @param {string} unique - The unique identifier of the document blueprint.
   * @returns {UmbRepositoryResponse<UmbDocumentBlueprintDetailModel>} - The document blueprint data.
   * @memberof UmbDocumentBlueprintDetailRepository
   */
  scaffoldByUnique(e) {
    return this.detailDataSource.scaffoldByUnique(e);
  }
}
export {
  E as UmbDocumentBlueprintDetailRepository,
  E as api
};
//# sourceMappingURL=document-blueprint-detail.repository-v6KhCqYg.js.map

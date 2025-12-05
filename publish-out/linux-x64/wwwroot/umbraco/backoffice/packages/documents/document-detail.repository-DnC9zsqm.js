import { e as a, c, t as o } from "./manifests-BP7S9LPy.js";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { DocumentService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as s } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as d } from "@umbraco-cms/backoffice/repository";
class m {
  #e;
  /**
   * Creates an instance of UmbDocumentServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Creates a new Document scaffold
   * @param preset
   * @returns { UmbDocumentDetailModel }
   * @memberof UmbDocumentServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: a,
      unique: p.new(),
      template: null,
      documentType: {
        unique: "",
        collection: null,
        icon: null
      },
      isTrashed: !1,
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
  createVariantScaffold(): UmbDocumentVariantModel {
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
   * @memberof UmbDocumentServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: t, error: n } = await s(this.#e, i.getDocumentById({ path: { id: e } }));
    return n || !t ? { error: n } : { data: {
      entityType: a,
      unique: t.id,
      values: t.values.map((u) => ({
        editorAlias: u.editorAlias,
        entityType: c,
        culture: u.culture || null,
        segment: u.segment || null,
        alias: u.alias,
        value: u.value
      })),
      variants: t.variants.map((u) => ({
        culture: u.culture || null,
        segment: u.segment || null,
        state: u.state,
        name: u.name,
        publishDate: u.publishDate || null,
        createDate: u.createDate,
        updateDate: u.updateDate,
        scheduledPublishDate: u.scheduledPublishDate || null,
        scheduledUnpublishDate: u.scheduledUnpublishDate || null
      })),
      template: t.template ? { unique: t.template.id } : null,
      documentType: {
        unique: t.documentType.id,
        collection: t.documentType.collection ? { unique: t.documentType.collection.id } : null,
        icon: t.documentType.icon
      },
      isTrashed: t.isTrashed
    } };
  }
  /**
   * Inserts a new Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async create(e, t = null) {
    if (!e) throw new Error("Document is missing");
    if (!e.unique) throw new Error("Document unique is missing");
    const n = {
      id: e.unique,
      parent: t ? { id: t } : null,
      documentType: { id: e.documentType.unique },
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { data: r, error: u } = await s(
      this.#e,
      i.postDocument({
        body: n
      })
    );
    return r ? this.read(r) : { error: u };
  }
  /**
   * Updates a Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const t = {
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { error: n } = await s(
      this.#e,
      i.putDocumentById({
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
   * @memberof UmbDocumentServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return s(this.#e, i.deleteDocumentById({ path: { id: e } }));
  }
}
class f extends d {
  constructor(e) {
    super(e, m, o);
  }
}
export {
  f as UmbDocumentDetailRepository,
  f as api
};
//# sourceMappingURL=document-detail.repository-DnC9zsqm.js.map

import { e as r, c, t as m } from "./manifests-BfVrApfB.js";
import { UmbId as p } from "@umbraco-cms/backoffice/id";
import { DocumentService as s } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as a } from "@umbraco-cms/backoffice/resources";
import { umbDeepMerge as d } from "@umbraco-cms/backoffice/utils";
import { UmbDocumentTypeDetailServerDataSource as y } from "@umbraco-cms/backoffice/document-type";
import { UmbControllerBase as T } from "@umbraco-cms/backoffice/class-api";
import { UmbDetailRepositoryBase as D } from "@umbraco-cms/backoffice/repository";
class f extends T {
  /**
   * Creates a new Document scaffold
   * @param preset
   * @returns { UmbDocumentDetailModel }
   * @memberof UmbDocumentServerDataSource
   */
  async createScaffold(e = {}) {
    let n = null, u = null;
    const i = e.documentType?.unique;
    if (!i)
      throw new Error("Document type unique is missing");
    const { data: t } = await new y(this).read(i);
    n = t?.icon ?? null, u = t?.collection ?? null;
    const o = {
      entityType: r,
      unique: p.new(),
      template: null,
      documentType: {
        unique: i,
        collection: u,
        icon: n
      },
      isTrashed: !1,
      values: [],
      variants: [],
      flags: []
    };
    return { data: d(e, o) };
  }
  /**
   * Fetches a Document with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: n, error: u } = await a(this, s.getDocumentById({ path: { id: e } }));
    return u || !n ? { error: u } : { data: {
      entityType: r,
      unique: n.id,
      values: n.values.map((t) => ({
        editorAlias: t.editorAlias,
        entityType: c,
        culture: t.culture || null,
        segment: t.segment || null,
        alias: t.alias,
        value: t.value
      })),
      variants: n.variants.map((t) => ({
        culture: t.culture || null,
        segment: t.segment || null,
        state: t.state,
        name: t.name,
        publishDate: t.publishDate || null,
        createDate: t.createDate,
        updateDate: t.updateDate,
        scheduledPublishDate: t.scheduledPublishDate || null,
        scheduledUnpublishDate: t.scheduledUnpublishDate || null,
        flags: t.flags
      })),
      template: n.template ? { unique: n.template.id } : null,
      documentType: {
        unique: n.documentType.id,
        collection: n.documentType.collection ? { unique: n.documentType.collection.id } : null,
        icon: n.documentType.icon
      },
      isTrashed: n.isTrashed,
      flags: n.flags
    } };
  }
  /**
   * Inserts a new Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async create(e, n = null) {
    if (!e) throw new Error("Document is missing");
    if (!e.unique) throw new Error("Document unique is missing");
    const u = {
      id: e.unique,
      parent: n ? { id: n } : null,
      documentType: { id: e.documentType.unique },
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { data: i, error: t } = await a(
      this,
      s.postDocument({
        body: u
      })
    );
    return i ? this.read(i) : { error: t };
  }
  /**
   * Updates a Document on the server
   * @param {UmbDocumentDetailModel} model - Document Model
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const n = {
      template: e.template ? { id: e.template.unique } : null,
      values: e.values,
      variants: e.variants
    }, { error: u } = await a(
      this,
      s.putDocumentById({
        path: { id: e.unique },
        body: n
      })
    );
    return u ? { error: u } : this.read(e.unique);
  }
  /**
   * Deletes a Document on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbDocumentServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return a(this, s.deleteDocumentById({ path: { id: e } }));
  }
}
class I extends D {
  constructor(e) {
    super(e, f, m);
  }
}
export {
  I as UmbDocumentDetailRepository,
  I as api
};
//# sourceMappingURL=document-detail.repository-CtE7HTwC.js.map

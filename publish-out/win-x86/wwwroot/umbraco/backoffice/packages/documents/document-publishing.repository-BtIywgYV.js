import { c as m, e as b } from "./manifests-BP7S9LPy.js";
import { DocumentService as n } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as u } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as y } from "@umbraco-cms/backoffice/repository";
class D {
  #e;
  /**
   * Creates an instance of UmbDocumentPublishingServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentPublishingServerDataSource
   */
  constructor(s) {
    this.#e = s;
  }
  /**
   * Publish one or more variants of a Document
   * @param {string} unique
   * @param {Array<UmbVariantId>} variantIds
   * @param variants
   * @returns {*}
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async publish(s, t) {
    if (!s) throw new Error("Id is missing");
    const r = {
      publishSchedules: t.map(
        (e) => ({
          culture: e.variantId.isCultureInvariant() ? null : e.variantId.toCultureString(),
          schedule: e.schedule
        })
      )
    };
    return u(this.#e, n.putDocumentByIdPublish({ path: { id: s }, body: r }));
  }
  /**
   * Unpublish one or more variants of a Document
   * @param {string} unique
   * @param {Array<UmbVariantId>} variantIds
   * @returns {*}
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async unpublish(s, t) {
    if (!s) throw new Error("Id is missing");
    if (t.some((e) => e.isCultureInvariant())) {
      const e = {
        cultures: null
      };
      return u(this.#e, n.putDocumentByIdUnpublish({ path: { id: s }, body: e }));
    }
    const r = {
      cultures: t.map((e) => e.toCultureString())
    };
    return u(this.#e, n.putDocumentByIdUnpublish({ path: { id: s }, body: r }));
  }
  /**
   * Publish variants of a document and all its descendants
   * @param unique
   * @param variantIds
   * @param includeUnpublishedDescendants
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async publishWithDescendants(s, t, i) {
    if (!s) throw new Error("Id is missing");
    const r = {
      cultures: t.map((l) => l.toCultureString()),
      includeUnpublishedDescendants: i
    }, { data: e, error: o } = await u(
      this.#e,
      n.putDocumentByIdPublishWithDescendants({ path: { id: s }, body: r })
    );
    if (o || !e)
      return { error: o };
    const d = e.taskId;
    let a = !0;
    for (; ; ) {
      await new Promise((p) => setTimeout(p, a ? 1e3 : 5e3)), a = !1;
      const { data: l, error: h } = await u(
        this.#e,
        n.getDocumentByIdPublishWithDescendantsResultByTaskId({ path: { id: s, taskId: d } })
      );
      if (h || !l)
        return { error: h };
      if (l.isComplete)
        return { error: null };
    }
  }
  /**
   * Get the published Document by its unique
   * @param {string} unique - Document unique
   * @returns {Promise<UmbDataSourceResponse<UmbDocumentDetailModel>>} Published document
   * @memberof UmbDocumentPublishingServerDataSource
   */
  async published(s) {
    if (!s) throw new Error("Unique is missing");
    const { data: t, error: i } = await u(
      this.#e,
      n.getDocumentByIdPublished({ path: { id: s } })
    );
    return i || !t ? { error: i } : { data: {
      entityType: b,
      unique: t.id,
      values: t.values.map((e) => ({
        editorAlias: e.editorAlias,
        entityType: m,
        culture: e.culture || null,
        segment: e.segment || null,
        alias: e.alias,
        value: e.value
      })),
      variants: t.variants.map((e) => ({
        culture: e.culture || null,
        segment: e.segment || null,
        state: e.state,
        name: e.name,
        publishDate: e.publishDate || null,
        createDate: e.createDate,
        updateDate: e.updateDate,
        scheduledPublishDate: e.scheduledPublishDate || null,
        scheduledUnpublishDate: e.scheduledUnpublishDate || null
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
}
class T extends y {
  #e = new D(this);
  /**
   * Publish one or more variants of a Document
   * @param {string} id
   * @param {Array<UmbVariantId>} variantIds
   * @param unique
   * @param variants
   * @returns {*}
   * @memberof UmbDocumentPublishingRepository
   */
  async publish(s, t) {
    if (!s) throw new Error("id is missing");
    if (!t.length) throw new Error("variant IDs are missing");
    return this.#e.publish(s, t);
  }
  /**
   * Unpublish one or more variants of a Document
   * @param {string} id
   * @param {Array<UmbVariantId>} variantIds
   * @returns {*}
   * @memberof UmbDocumentPublishingRepository
   */
  async unpublish(s, t) {
    if (!s) throw new Error("id is missing");
    if (!t) throw new Error("variant IDs are missing");
    return this.#e.unpublish(s, t);
  }
  /**
   * Publish variants of a document including its descendants
   * @param id
   * @param variantIds
   * @param includeUnpublishedDescendants
   * @memberof UmbDocumentPublishingRepository
   */
  async publishWithDescendants(s, t, i) {
    if (!s) throw new Error("id is missing");
    if (!t) throw new Error("variant IDs are missing");
    return this.#e.publishWithDescendants(s, t, i);
  }
  /**
   * Get the published data of a document
   * @param {string} unique Document unique
   * @returns { Promise<UmbRepositoryResponse<UmbDocumentDetailModel>>} Published document
   * @memberof UmbDocumentPublishingRepository
   */
  async published(s) {
    return this.#e.published(s);
  }
}
export {
  T as UmbDocumentPublishingRepository,
  T as api
};
//# sourceMappingURL=document-publishing.repository-BtIywgYV.js.map

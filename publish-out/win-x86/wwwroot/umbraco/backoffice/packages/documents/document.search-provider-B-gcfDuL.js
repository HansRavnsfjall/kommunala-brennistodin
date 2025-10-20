import { e as u } from "./manifests-BP7S9LPy.js";
import { DocumentService as i } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as d } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as c } from "@umbraco-cms/backoffice/class-api";
class l {
  #e;
  /**
   * Creates an instance of UmbDocumentSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbDocumentSearchServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Get a list of versions for a document
   * @param {UmbDocumentSearchRequestArgs} args - The arguments for the search
   * @returns {*}
   * @memberof UmbDocumentSearchServerDataSource
   */
  async search(e) {
    const { data: r, error: a } = await d(
      this.#e,
      i.getItemDocumentSearch({
        query: {
          allowedDocumentTypes: e.allowedContentTypes?.map((s) => s.unique),
          culture: e.culture || void 0,
          parentId: e.searchFrom?.unique ?? void 0,
          query: e.query,
          trashed: e.includeTrashed
        }
      })
    );
    return r ? { data: { items: r.items.map((t) => ({
      documentType: {
        collection: t.documentType.collection ? { unique: t.documentType.collection.id } : null,
        icon: t.documentType.icon,
        unique: t.documentType.id
      },
      entityType: u,
      hasChildren: t.hasChildren,
      href: "/section/content/workspace/document/edit/" + t.id,
      isProtected: t.isProtected,
      isTrashed: t.isTrashed,
      name: t.variants[0]?.name,
      // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
      parent: t.parent ? { unique: t.parent.id } : null,
      unique: t.id,
      variants: t.variants.map((o) => ({
        culture: o.culture || null,
        name: o.name,
        state: o.state
      }))
    })), total: r.total } } : { error: a };
  }
}
class p extends c {
  #e;
  constructor(e) {
    super(e), this.#e = new l(this);
  }
  /**
   * Search for documents
   * @param {UmbDocumentSearchRequestArgs} args - The arguments for the search
   * @returns {Promise<UmbRepositoryResponse<UmbPagedModel<UmbDocumentSearchItemModel>>>} - The search results
   * @memberof UmbDocumentSearchRepository
   */
  search(e) {
    return this.#e.search(e);
  }
}
class q extends c {
  #e = new p(this);
  /**
   * Search for documents
   * @param {UmbDocumentSearchRequestArgs} args - The arguments for the search
   * @returns {Promise<UmbRepositoryResponse<UmbPagedModel<UmbDocumentSearchItemModel>>>} - The search results
   * @memberof UmbDocumentSearchProvider
   */
  search(e) {
    return this.#e.search(e);
  }
  destroy() {
    this.#e.destroy();
  }
}
export {
  q as UmbDocumentSearchProvider,
  q as api
};
//# sourceMappingURL=document.search-provider-B-gcfDuL.js.map

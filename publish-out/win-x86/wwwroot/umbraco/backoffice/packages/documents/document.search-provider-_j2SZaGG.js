import { e as u } from "./manifests-BfVrApfB.js";
import { DocumentService as d } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as i } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as a } from "@umbraco-cms/backoffice/class-api";
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
    const { data: o, error: c } = await i(
      this.#e,
      d.getItemDocumentSearch({
        query: {
          allowedDocumentTypes: e.allowedContentTypes?.map((s) => s.unique),
          culture: e.culture || void 0,
          parentId: e.searchFrom?.unique ?? void 0,
          query: e.query,
          trashed: e.includeTrashed,
          dataTypeId: e.dataTypeUnique
        }
      })
    );
    return o ? { data: { items: o.items.map((t) => ({
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
      variants: t.variants.map((r) => ({
        culture: r.culture || null,
        name: r.name,
        state: r.state,
        flags: r.flags
      })),
      flags: t.flags
    })), total: o.total } } : { error: c };
  }
}
class p extends a {
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
class f extends a {
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
  f as UmbDocumentSearchProvider,
  f as api
};
//# sourceMappingURL=document.search-provider-_j2SZaGG.js.map

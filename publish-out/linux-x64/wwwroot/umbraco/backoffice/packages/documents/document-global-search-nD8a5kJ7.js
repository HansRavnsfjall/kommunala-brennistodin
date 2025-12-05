import { UmbGlobalSearchBase as r } from "@umbraco-cms/backoffice/search";
import { UMB_VARIANT_CONTEXT as e } from "@umbraco-cms/backoffice/variant";
class c extends r {
  async search(t) {
    if (await this._init, !this._searchProvider)
      throw new Error("Search provider is not available");
    const a = await (await this.getContext(e))?.getDisplayCulture();
    return await this._searchProvider.search({ culture: a, query: t.query });
  }
}
export {
  c as UmbDocumentGlobalSearch,
  c as api
};
//# sourceMappingURL=document-global-search-nD8a5kJ7.js.map

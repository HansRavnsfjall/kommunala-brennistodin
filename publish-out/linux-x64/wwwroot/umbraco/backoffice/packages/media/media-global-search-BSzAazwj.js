import { UmbGlobalSearchBase as t } from "@umbraco-cms/backoffice/search";
import { UMB_VARIANT_CONTEXT as e } from "@umbraco-cms/backoffice/variant";
class c extends t {
  async search(a) {
    if (await this._init, !this._searchProvider)
      throw new Error("Search provider is not available");
    const r = await (await this.getContext(e))?.getDisplayCulture();
    return await this._searchProvider.search({ culture: r, query: a.query });
  }
}
export {
  c as UmbMediaGlobalSearch,
  c as api
};
//# sourceMappingURL=media-global-search-BSzAazwj.js.map

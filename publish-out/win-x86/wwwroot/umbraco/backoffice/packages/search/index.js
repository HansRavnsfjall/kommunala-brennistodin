import { U as E } from "./search-modal.token-CTxun4lq.js";
import { U as l, a as p } from "./examine-fields-viewer-modal.token-ML1Zowxx.js";
import { UmbExtensionApiInitializer as t } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as s } from "@umbraco-cms/backoffice/extension-registry";
import { UmbControllerBase as a } from "@umbraco-cms/backoffice/class-api";
class _ extends a {
  constructor() {
    super(...arguments), this.#i = !1, this._init = new Promise((i) => {
      this.#i ? i() : this.#r = i;
    });
  }
  #r;
  #i;
  #e() {
    this._searchProvider && (this.#i = !0, this.#r?.());
  }
  set manifest(i) {
    this._manifest !== i && (this._manifest = i, this.#t(this._manifest?.meta.searchProviderAlias));
  }
  get manifest() {
    return this._manifest;
  }
  #t(i) {
    if (!i) throw new Error("Search provider alias is required");
    new t(
      this,
      s,
      i,
      [this],
      (r, e) => {
        this._searchProvider = r ? e.api : void 0, this.#e();
      }
    );
  }
  async search(i) {
    if (await this._init, !this._searchProvider)
      throw new Error("Search provider is not available");
    return await this._searchProvider.search({ query: i.query });
  }
}
export {
  l as UMB_EXAMINE_FIELDS_SETTINGS_MODAL,
  p as UMB_EXAMINE_FIELDS_VIEWER_MODAL,
  E as UMB_SEARCH_MODAL,
  _ as UmbGlobalSearchBase
};
//# sourceMappingURL=index.js.map

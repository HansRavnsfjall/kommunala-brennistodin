import { UmbControllerBase as s } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as e } from "@umbraco-cms/backoffice/observable-api";
import { UMB_VARIANT_CONTEXT as a } from "@umbraco-cms/backoffice/variant";
class n extends s {
  constructor(t) {
    super(t), this.#r = new e([], (r) => r.url), this.urls = this.#r.asObservable(), this.#e = Promise.all([
      this.consumeContext(a, async (r) => {
        this.#s = await r?.getVariantId();
      }).asPromise()
    ]);
  }
  #a;
  #s;
  #t;
  #e;
  #r;
  /**
   * Get the current data
   * @returns {Array<UmbDocumentUrlModel> | undefined} The current data
   * @memberof UmbDocumentUrlsDataResolver
   */
  getData() {
    return this.#t;
  }
  /**
   * Set the current data
   * @param {Array<UmbDocumentUrlModel> | undefined} data The current data
   * @memberof UmbDocumentUrlsDataResolver
   */
  setData(t) {
    if (this.#t = t, !this.#t) {
      this.#r.setValue([]);
      return;
    }
    this.#i();
  }
  /**
   * Get the urls for the current culture
   * @returns {(Promise<Array<UmbDocumentUrlModel> | []>)} The urls for the current culture
   * @memberof UmbDocumentUrlsDataResolver
   */
  async getUrls() {
    return await this.#e, this.#r.getValue();
  }
  #i() {
    this.#u();
  }
  #u() {
    const t = this.#h();
    this.#r.setValue(t ?? []);
  }
  #l() {
    return this.#s?.culture || this.#a;
  }
  #h() {
    const t = this.#l();
    return t ? this.#t?.filter((r) => r.culture === t) : this.#t;
  }
}
export {
  n as U
};
//# sourceMappingURL=document-urls-data-resolver-C8TSLzpK.js.map

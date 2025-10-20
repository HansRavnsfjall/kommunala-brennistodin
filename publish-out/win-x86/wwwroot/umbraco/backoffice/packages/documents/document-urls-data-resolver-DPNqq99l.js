import { UmbControllerBase as e } from "@umbraco-cms/backoffice/class-api";
import { UmbArrayState as s } from "@umbraco-cms/backoffice/observable-api";
import { UMB_PROPERTY_DATASET_CONTEXT as a } from "@umbraco-cms/backoffice/property";
class o extends e {
  constructor(t) {
    super(t), this.#r = new s([], (r) => r.url), this.urls = this.#r.asObservable(), this.#s = Promise.all([
      this.consumeContext(a, (r) => {
        this.#e = r?.getVariantId(), this.#a();
      }).asPromise()
    ]);
  }
  #u;
  #e;
  #t;
  #s;
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
    this.#a();
  }
  /**
   * Get the urls for the current culture
   * @returns {(Promise<Array<UmbDocumentUrlModel> | []>)} The urls for the current culture
   * @memberof UmbDocumentUrlsDataResolver
   */
  async getUrls() {
    return await this.#s, this.#r.getValue();
  }
  #a() {
    this.#i();
  }
  #i() {
    const t = this.#h();
    this.#r.setValue(t ?? []);
  }
  #l() {
    return this.#e?.culture || this.#u;
  }
  #h() {
    const t = this.#l();
    return t ? this.#t?.filter((r) => r.culture === t) : this.#t;
  }
}
export {
  o as U
};
//# sourceMappingURL=document-urls-data-resolver-DPNqq99l.js.map

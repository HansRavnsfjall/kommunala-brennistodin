import { DocumentVariantStateModel as a } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as i } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as r, UmbStringState as e, UmbBooleanState as n } from "@umbraco-cms/backoffice/observable-api";
import { UMB_VARIANT_CONTEXT as h } from "@umbraco-cms/backoffice/variant";
class b extends i {
  constructor(t) {
    super(t), this.#t = new r(void 0), this.unique = this.#t.asObservablePart((s) => s?.unique), this.icon = this.#t.asObservablePart((s) => s?.documentType.icon), this.isTrashed = this.#t.asObservablePart((s) => s?.isTrashed), this.#s = new e(void 0), this.name = this.#s.asObservable(), this.#i = new e(void 0), this.state = this.#i.asObservable(), this.#r = new n(void 0), this.isDraft = this.#r.asObservable(), this.consumeContext(h, (s) => {
      this.#a = s, this.#l();
    });
  }
  #t;
  #s;
  #i;
  #r;
  #a;
  #n;
  #h;
  #l() {
    this.observe(
      this.#a?.displayCulture,
      (t) => {
        t !== void 0 && (this.#h = t, this.#o());
      },
      "umbObserveVariantId"
    ), this.observe(
      this.#a?.fallbackCulture,
      (t) => {
        t !== void 0 && (this.#n = t, this.#o());
      },
      "umbObserveFallbackCulture"
    );
  }
  /**
   * Get the current item
   * @returns {DataType | undefined} The current item
   * @memberof UmbDocumentItemDataResolver
   */
  getData() {
    return this.#t.getValue();
  }
  /**
   * Set the current item
   * @param {DataType | undefined} data The current item
   * @memberof UmbDocumentItemDataResolver
   */
  setData(t) {
    this.#t.setValue(t), this.#o();
  }
  /**
   * Get the unique of the item
   * @returns {Promise<string | undefined>} The unique of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getUnique() {
    return await this.observe(this.unique).asPromise();
  }
  /**
   * Get the name of the item
   * @returns {Promise<string>} The name of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getName() {
    return await this.observe(this.name).asPromise() || "";
  }
  /**
   * Get the icon of the item
   * @returns {Promise<string | undefined>} The icon of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getIcon() {
    return await this.observe(this.icon).asPromise();
  }
  /**
   * Get the state of the item
   * @returns {Promise<string | undefined>} The state of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getState() {
    return (await this.#e())?.state;
  }
  /**
   * Get the isDraft of the item
   * @returns {Promise<boolean>} The isDraft of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getIsDraft() {
    return await this.observe(this.isDraft).asPromise() ?? !1;
  }
  /**
   * Get the isTrashed of the item
   * @returns {Promise<boolean | undefined>} The isTrashed of the item
   * @memberof UmbDocumentItemDataResolver
   */
  async getIsTrashed() {
    return await this.observe(this.isTrashed).asPromise() ?? !1;
  }
  #o() {
    this.#a && this.#h && this.#n && this.#t && (this.#v(), this.#c(), this.#b());
  }
  async #v() {
    const t = await this.#e();
    if (t) {
      this.#s.setValue(t.name);
      return;
    }
    const s = this.#u(this.#n)?.name;
    this.#s.setValue(`(${s})`);
  }
  async #c() {
    const s = (await this.#e())?.state === a.DRAFT || !1;
    this.#r.setValue(s);
  }
  async #b() {
    const s = (await this.#e())?.state || a.NOT_CREATED;
    this.#i.setValue(s);
  }
  #u(t) {
    return this.getData()?.variants.find((s) => s.culture === t);
  }
  async #e() {
    return this.#m() ? this.getData()?.variants?.[0] : this.#u(this.#h);
  }
  #m() {
    return this.getData()?.variants?.[0]?.culture === null;
  }
}
export {
  b as U
};
//# sourceMappingURL=document-item-data-resolver-ClBbqArt.js.map

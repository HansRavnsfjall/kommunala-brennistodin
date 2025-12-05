import { DocumentVariantStateModel as i } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbControllerBase as h } from "@umbraco-cms/backoffice/class-api";
import { UmbObjectState as o, UmbStringState as r, UmbBooleanState as u, UmbArrayState as l } from "@umbraco-cms/backoffice/observable-api";
import { UMB_VARIANT_CONTEXT as v } from "@umbraco-cms/backoffice/variant";
function b(e) {
  return e?.[0]?.culture === null;
}
function n(e, t) {
  return e.find((s) => s.culture === t);
}
class g extends h {
  constructor(t) {
    super(t), this.#t = new o(void 0), this.unique = this.#t.asObservablePart((s) => s?.unique), this.icon = this.#t.asObservablePart((s) => s?.documentType.icon), this.isTrashed = this.#t.asObservablePart((s) => s?.isTrashed), this.#s = new r(void 0), this.name = this.#s.asObservable(), this.#r = new r(void 0), this.state = this.#r.asObservable(), this.#n = new u(void 0), this.isDraft = this.#n.asObservable(), this.#e = new l([], (s) => s.alias), this.flags = this.#e.asObservable(), this.consumeContext(v, (s) => {
      this.#a = s, this.#l();
    });
  }
  #t;
  #s;
  #r;
  #n;
  #e;
  #a;
  #h;
  #o;
  #l() {
    this.observe(
      this.#a?.displayCulture,
      (t) => {
        t !== void 0 && (this.#o = t, this.#u());
      },
      "umbObserveVariantId"
    ), this.observe(
      this.#a?.fallbackCulture,
      (t) => {
        t !== void 0 && (this.#h = t, this.#u());
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
    this.#t.setValue(t), this.#u();
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
    return await this.observe(this.state).asPromise();
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
  #u() {
    this.#a && this.#o && this.#h && this.#t && (this.#v(), this.#b(), this.#c(), this.#f());
  }
  #v() {
    const t = this.#i();
    if (t) {
      this.#s.setValue(t.name);
      return;
    }
    const s = this.getData()?.variants;
    if (s) {
      const a = n(s, this.#h)?.name;
      this.#s.setValue(`(${a})`);
    } else
      this.#s.setValue(void 0);
  }
  #b() {
    const s = this.#i()?.state === i.DRAFT || !1;
    this.#n.setValue(s);
  }
  #c() {
    const s = this.#i()?.state || i.NOT_CREATED;
    this.#r.setValue(s);
  }
  #f() {
    const t = this.getData();
    if (!t) {
      this.#e.setValue([]);
      return;
    }
    const s = t.flags ?? [], a = this.#i()?.flags ?? [];
    this.#e.setValue([...s, ...a]);
  }
  #i() {
    const t = this.getData()?.variants;
    if (t)
      return b(t) ? t[0] : n(t, this.#o);
  }
}
export {
  g as U
};
//# sourceMappingURL=document-item-data-resolver-D2-3CuIM.js.map

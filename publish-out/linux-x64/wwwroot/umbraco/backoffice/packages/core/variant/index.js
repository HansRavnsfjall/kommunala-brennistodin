import { UmbContextToken as l } from "@umbraco-cms/backoffice/context-api";
import { U as r } from "../variant-id.class-CbSg1vyg.js";
import { a as y, v as U } from "../variant-id.class-CbSg1vyg.js";
import { UmbContextBase as n } from "@umbraco-cms/backoffice/class-api";
import { UmbClassState as o, UmbStringState as a, mergeObservables as h } from "@umbraco-cms/backoffice/observable-api";
const u = new l("UmbVariantContext");
class p extends n {
  constructor(t) {
    super(t, u), this.#t = new o(void 0), this.variantId = this.#t.asObservable(), this.culture = this.#t.asObservablePart((e) => e?.culture), this.segment = this.#t.asObservablePart((e) => e?.segment), this.#e = new a(void 0), this.fallbackCulture = this.#e.asObservable(), this.#s = new a(void 0), this.appCulture = this.#s.asObservable(), this.displayCulture = h([this.culture, this.appCulture], ([e, i]) => e ?? i);
  }
  #t;
  #e;
  #s;
  /**
   * Inherit values from the parent variant context
   * @returns {UmbVariantContext} - The current instance of the context
   * @memberof UmbVariantContext
   */
  inherit() {
    return this.consumeContext(u, (t) => {
      this.observe(
        t?.fallbackCulture,
        (e) => {
          e && this.#e.setValue(e);
        },
        "observeFallbackCulture"
      ), this.observe(
        t?.appCulture,
        (e) => {
          e && this.#s.setValue(e);
        },
        "observeAppCulture"
      );
    }).skipHost(), this;
  }
  /**
   * Sets the variant id state
   * @param {UmbVariantId | undefined} variantId - The variant to set
   * @memberof UmbVariantContext
   */
  async setVariantId(t) {
    this.#t.setValue(t);
  }
  /**
   * Gets variant state
   * @returns {Promise<UmbVariantId | undefined>} - The variant state
   * @memberof UmbVariantContext
   */
  async getVariantId() {
    return this.#t.getValue();
  }
  /**
   * Gets the culture state
   * @returns {(Promise<string | null | undefined>)} - The culture state
   * @memberof UmbVariantContext
   */
  async getCulture() {
    return this.#t.getValue()?.culture;
  }
  /**
   * Sets the variant culture state
   * @param {string | undefined} culture - The culture to set
   * @memberof UmbVariantContext
   */
  async setCulture(t) {
    const e = new r(t, this.#t.getValue()?.segment);
    this.#t.setValue(e);
  }
  /**
   * Gets the variant segment state
   * @returns {(Promise<string | null | undefined>)} - The segment state
   * @memberof UmbVariantContext
   */
  async getSegment() {
    return this.#t.getValue()?.segment;
  }
  /**
   * Sets the variant segment state
   * @param {string | undefined} segment - The segment to set
   * @memberof UmbVariantContext
   */
  async setSegment(t) {
    const e = new r(this.#t.getValue()?.culture, t);
    this.#t.setValue(e);
  }
  /**
   * Gets the fallback culture state
   * @returns {(Promise<string | null | undefined>)} - The fallback culture state
   * @memberof UmbVariantContext
   */
  async getFallbackCulture() {
    return this.#e.getValue();
  }
  /**
   * Sets the fallback culture state
   * @param {string | undefined} culture - The fallback culture to set
   * @memberof UmbVariantContext
   */
  async setFallbackCulture(t) {
    this.removeUmbControllerByAlias("observeFallbackCulture"), this.#e.setValue(t);
  }
  /**
   * Gets the app culture state
   * @returns {(Promise<string | null | undefined>)} - The app culture state
   * @memberof UmbVariantContext
   */
  async getAppCulture() {
    return this.#s.getValue();
  }
  /**
   * Sets the app culture state
   * @param {string | undefined} culture - The app culture to set
   * @memberof UmbVariantContext
   */
  async setAppCulture(t) {
    this.removeUmbControllerByAlias("observeAppCulture"), this.#s.setValue(t);
  }
  /**
   * Gets the display culture state
   * @returns {(Promise<string | null | undefined>)} - The app culture state
   * @memberof UmbVariantContext
   */
  async getDisplayCulture() {
    return this.observe(this.displayCulture).asPromise();
  }
}
function g(s, t) {
  return s.culture === t.culture && s.segment === t.segment;
}
export {
  y as UMB_INVARIANT_CULTURE,
  u as UMB_VARIANT_CONTEXT,
  p as UmbVariantContext,
  r as UmbVariantId,
  g as umbVariantObjectCompare,
  U as variantPropertiesObjectToString
};
//# sourceMappingURL=index.js.map

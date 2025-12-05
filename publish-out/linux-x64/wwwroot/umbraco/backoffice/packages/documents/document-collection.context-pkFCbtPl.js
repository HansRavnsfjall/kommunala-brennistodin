import { d as s } from "./manifests-BP7S9LPy.js";
import { UmbDefaultCollectionContext as r } from "@umbraco-cms/backoffice/collection";
import { UMB_VARIANT_CONTEXT as o } from "@umbraco-cms/backoffice/variant";
import { UmbStringState as i } from "@umbraco-cms/backoffice/observable-api";
class C extends r {
  #e;
  #t = new i(void 0);
  #s = this.#t.asObservable();
  constructor(t) {
    super(t, s), this.consumeContext(o, async (e) => {
      this.#e = e, this.#r();
    });
  }
  #r() {
    this.observe(
      this.#e?.displayCulture,
      (t) => {
        t && this.#t.getValue() !== t && (this.#t.setValue(t), this.setFilter({ orderCulture: t }));
      },
      "umbDocumentCollectionDisplayCultureObserver"
    );
  }
  async requestCollection() {
    await this.observe(this.#s)?.asPromise(), await super.requestCollection();
  }
}
export {
  C as UmbDocumentCollectionContext,
  C as api
};
//# sourceMappingURL=document-collection.context-pkFCbtPl.js.map

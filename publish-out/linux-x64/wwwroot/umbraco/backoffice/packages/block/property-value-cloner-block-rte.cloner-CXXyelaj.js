import { UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS as n } from "@umbraco-cms/backoffice/rte";
import { UmbFlatLayoutBlockPropertyValueCloner as a } from "@umbraco-cms/backoffice/block";
class c {
  #t;
  #e;
  async cloneValue(t) {
    if (t) {
      this.#t = t.markup;
      const r = new DOMParser();
      this.#e = r.parseFromString(this.#t, "text/html");
      const o = new a(n, {
        contentIdUpdatedCallback: this.#r
      }), e = {};
      return t.blocks && (e.blocks = await o.cloneValue(t.blocks)), e.markup = this.#t, e;
    }
    return t;
  }
  #r = (t, r) => {
    if (!this.#e) throw new Error("Markup document is not initialized");
    this.#e.querySelectorAll(
      `umb-rte-block[data-content-key='${t}'], umb-rte-block-inline[data-content-key='${t}']`
    ).forEach((e) => {
      e.setAttribute("data-content-key", r);
    }), this.#t = this.#e.body.innerHTML ?? void 0;
  };
  destroy() {
  }
}
export {
  c as UmbBlockRTEPropertyValueCloner,
  c as api
};
//# sourceMappingURL=property-value-cloner-block-rte.cloner-CXXyelaj.js.map

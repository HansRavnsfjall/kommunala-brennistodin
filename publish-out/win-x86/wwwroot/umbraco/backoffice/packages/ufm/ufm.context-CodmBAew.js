import { DOMPurify as f } from "@umbraco-cms/backoffice/external/dompurify";
import { Marked as u } from "@umbraco-cms/backoffice/external/marked";
import { UmbArrayState as p } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as b } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as c } from "@umbraco-cms/backoffice/context-api";
import { UmbExtensionsApiInitializer as n } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as o } from "@umbraco-cms/backoffice/extension-registry";
const m = f(window), U = {
  USE_PROFILES: { html: !0 },
  CUSTOM_ELEMENT_HANDLING: {
    tagNameCheck: /^(?:ufm|umb|uui)-.*$/,
    attributeNameCheck: /.+/,
    allowCustomizedBuiltInElements: !1
  }
};
m.addHook("afterSanitizeAttributes", function(e) {
  "target" in e && e instanceof HTMLElement && e.setAttribute("target", "_blank");
});
const a = new u({
  async: !0,
  gfm: !0,
  breaks: !0,
  hooks: {
    postprocess: (e) => m.sanitize(e, U)
  }
});
class M extends b {
  constructor(i) {
    super(i, h), this.#t = new p([], (t) => t.alias), this.filters = this.#t.asObservable(), new n(this, o, "markedExtension", [a]), new n(this, o, "ufmFilter", [], void 0, (t) => {
      const l = t.map((s) => {
        const r = s;
        return !r.manifest || !r.api ? null : { alias: r.manifest.meta.alias, filter: r.api.filter };
      }).filter((s) => s);
      this.#t.setValue(l);
    });
  }
  #t;
  /**
   * Get the filters registered in the UFM context.
   * @returns {Array<UmbUfmFilterType>} An array of filters with their aliases and filter functions.
   */
  getFilters() {
    return this.#t.getValue();
  }
  /**
   * Get a filter by its alias.
   * @param alias The alias of the filter to retrieve.
   * @returns {UmbUfmFilterFunction} The filter function associated with the alias, or undefined if not found.
   */
  getFilterByAlias(i) {
    return this.#t.getValue().find((t) => t.alias === i)?.filter;
  }
  /**
   * Parse markdown content, optionally inline.
   * @param markdown The markdown string to parse.
   * @param inline If true, parse inline markdown; otherwise, parse block markdown.
   * @returns {Promise<string>} A promise that resolves to the parsed HTML string.
   */
  async parse(i, t) {
    return t ? await a.parseInline(i) : await a.parse(i);
  }
}
const h = new c("UmbUfmContext");
export {
  h as UMB_UFM_CONTEXT,
  a as UmbMarked,
  M as UmbUfmContext,
  M as api
};
//# sourceMappingURL=ufm.context-CodmBAew.js.map

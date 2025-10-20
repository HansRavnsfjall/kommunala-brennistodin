import { DOMPurify as d } from "@umbraco-cms/backoffice/external/dompurify";
import { Marked as g } from "@umbraco-cms/backoffice/external/marked";
import { UmbArrayState as k } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextBase as w } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as y } from "@umbraco-cms/backoffice/context-api";
import { UmbExtensionsApiInitializer as m } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as f } from "@umbraco-cms/backoffice/extension-registry";
function C(i = []) {
  return {
    extensions: i.map(({ alias: r, marker: e, render: a }) => {
      const t = `(${r}:${e ? `|${e}` : ""})`;
      return {
        name: r,
        level: "inline",
        start: (n) => n.search(`{${t}`),
        tokenizer: (n) => {
          const p = `^\\{${t}([^}]*)\\}`, b = new RegExp(p), o = n.match(b);
          if (o) {
            const [x, U, h = ""] = o;
            return {
              type: r,
              raw: x,
              tokens: [],
              prefix: U,
              text: h.trim()
            };
          }
        },
        renderer: a
      };
    })
  };
}
const l = d(window), E = {
  USE_PROFILES: { html: !0 },
  CUSTOM_ELEMENT_HANDLING: {
    tagNameCheck: /^(?:ufm|umb|uui)-.*$/,
    attributeNameCheck: /.+/,
    allowCustomizedBuiltInElements: !1
  }
};
l.addHook("afterSanitizeAttributes", function(i) {
  "target" in i && i instanceof HTMLElement && i.setAttribute("target", "_blank");
});
const s = new g({
  async: !0,
  gfm: !0,
  breaks: !0,
  hooks: {
    postprocess: (i) => l.sanitize(i, E)
  }
});
class u extends w {
  constructor(r) {
    super(r, c), this.#t = new k([], (e) => e.alias), this.filters = this.#t.asObservable(), new m(this, f, "ufmComponent", [], void 0, (e) => {
      s.use(
        C(
          e.map((a) => {
            const t = a;
            if (!(!t.manifest || !t.api))
              return {
                alias: t.manifest.meta.alias || t.manifest.alias,
                marker: t.manifest.meta.marker,
                render: t.api.render
              };
          }).filter((a) => a)
        )
      );
    }), new m(this, f, "ufmFilter", [], void 0, (e) => {
      const a = e.map((t) => {
        const n = t;
        return !n.manifest || !n.api ? null : { alias: n.manifest.meta.alias, filter: n.api.filter };
      }).filter((t) => t);
      this.#t.setValue(a);
    });
  }
  #t;
  getFilterByAlias(r) {
    return this.#t.getValue().find((e) => e.alias === r)?.filter;
  }
  async parse(r, e) {
    return e ? await s.parseInline(r) : await s.parse(r);
  }
}
const c = new y("UmbUfmContext"), A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UMB_UFM_CONTEXT: c,
  UmbMarked: s,
  UmbUfmContext: u,
  api: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  c as U,
  s as a,
  u as b,
  A as c,
  C as u
};
//# sourceMappingURL=ufm.context-ej9QaPDH.js.map

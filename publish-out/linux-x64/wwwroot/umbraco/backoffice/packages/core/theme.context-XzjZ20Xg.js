import { loadManifestPlainCss as h } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as l } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextBase as m } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as n } from "@umbraco-cms/backoffice/context-api";
import { UmbStringState as a } from "@umbraco-cms/backoffice/observable-api";
const o = "umb-theme-alias";
class T extends m {
  constructor(t) {
    super(t, c), this.#t = new a("umb-light-theme"), this.theme = this.#t.asObservable(), this.#e = null;
    const e = localStorage.getItem(o);
    e && this.setThemeByAlias(e);
  }
  #t;
  #s;
  #e;
  setThemeByAlias(t) {
    this.#t.setValue(t), this.#s?.destroy(), t ? (localStorage.setItem(o, t), this.#s = this.observe(
      l.byTypeAndFilter("theme", (e) => e.alias === t),
      async (e) => {
        if (this.#e?.remove(), e.length > 0 && e[0].css) {
          const s = e[0];
          if (typeof s.css == "function") {
            this.#e = document.createElement("style");
            const i = this.#e;
            i.setAttribute("type", "text/css");
            const r = await h(s.css);
            r && i === this.#e && (i.appendChild(document.createTextNode(r)), document.head.appendChild(i));
          } else typeof s.css == "string" && (this.#e = document.createElement("link"), this.#e.setAttribute("rel", "stylesheet"), this.#e.setAttribute("href", s.css), document.head.appendChild(this.#e));
        } else
          localStorage.removeItem(o), this.#e?.childNodes.forEach((s) => s.remove()), this.#e?.setAttribute("href", ""), this.#e = null;
      }
    )) : (localStorage.removeItem(o), this.#e?.remove(), this.#e?.childNodes.forEach((e) => e.remove()), this.#e?.setAttribute("href", ""), this.#e = null);
  }
}
const c = new n("umbThemeContext");
export {
  c as UMB_THEME_CONTEXT,
  T as UmbThemeContext,
  T as default
};
//# sourceMappingURL=theme.context-XzjZ20Xg.js.map

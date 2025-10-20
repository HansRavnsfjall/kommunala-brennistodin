import { a as u } from "./base-CzBFGKJV.js";
import { UmbLink as l } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_LINK_PICKER_MODAL as f } from "@umbraco-cms/backoffice/multi-url-picker";
import { umbOpenModal as h } from "@umbraco-cms/backoffice/modal";
class x extends u {
  async execute(t) {
    const i = t?.getAttributes(l.name) ?? {}, n = this.#t(i), r = { config: {}, index: null, isNew: n?.url === void 0 }, o = { link: n }, s = this.configuration?.getValueByAlias("overlaySize") ?? "small", e = await h(this, f, { data: r, value: o, modal: { size: s } }).catch(
      () => {
      }
    );
    if (!e?.link) return;
    const a = this.#n(e.link);
    a ? t?.chain().focus().extendMarkRange(l.name).setUmbLink(a).run() : t?.chain().focus().extendMarkRange(l.name).unsetLink().run();
  }
  #t(t) {
    const i = t["data-anchor"], n = t.href?.substring(0, t.href.length - (i?.length ?? 0)), r = n?.includes("localLink:") ? n.substring(n.indexOf(":") + 1, n.indexOf("}")) : null;
    return {
      name: t.title,
      queryString: i,
      target: t.target,
      type: t.type,
      unique: r,
      url: n
    };
  }
  #n(t) {
    const { name: i, target: n, type: r, unique: o } = t;
    let { queryString: s, url: e } = t;
    if (s = this.#r(s), !s) {
      const c = this.#e(e, s);
      e = c.url, s = c.queryString;
    }
    o ? e = `/{localLink:${o}}` : (e = this.#s(e), e = this.#i(e));
    const a = this.#a(s);
    return a && (e = (e ?? "") + a), e ? {
      type: r ?? "external",
      href: e,
      "data-anchor": a,
      target: n,
      title: i ?? e
    } : null;
  }
  #e(t, i) {
    const n = t?.split(/([#?])/);
    return n?.length === 3 && (t = n[0], i = n[1] + n[2]), { url: t, queryString: i };
  }
  /**
   * If the URL is prefixed "www.", then prepend "http://" protocol scheme.
   * @param url
   */
  #i(t) {
    return t ? (/^\s*www\./i.test(t) && (t = `http://${t}`), t) : null;
  }
  /**
   * If the URL is an email address, then prepend "mailto:" protocol scheme.
   * @param url
   */
  #s(t) {
    return t ? (t?.includes("@") && !t.includes("//") && !t.includes(":") && (t = `mailto:${t}`), t) : null;
  }
  /**
   * If the URL contains an anchor, then return the anchor.
   * @param queryString
   */
  #a(t) {
    return t && (t.startsWith("#") || t.startsWith("?")) ? t : null;
  }
  /**
   * If the query string does not start with "?" or "#", then prepend it.
   * @param queryString
   */
  #r(t) {
    return t ? (!t.startsWith("?") && !t.startsWith("#") && (t = (t.startsWith("=") ? "#" : "?") + t), t) : null;
  }
}
export {
  x as default
};
//# sourceMappingURL=link.tiptap-toolbar-api-5BE_vOxQ.js.map

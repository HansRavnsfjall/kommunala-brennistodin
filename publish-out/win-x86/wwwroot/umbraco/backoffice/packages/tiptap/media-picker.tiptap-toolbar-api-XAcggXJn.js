import { a as c } from "./base-CzBFGKJV.js";
import { getGuidFromUdi as u, imageSize as l } from "@umbraco-cms/backoffice/utils";
import { ImageCropModeModel as g } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbImagingRepository as d } from "@umbraco-cms/backoffice/imaging";
import { UMB_MEDIA_PICKER_MODAL as p, UMB_MEDIA_CAPTION_ALT_TEXT_MODAL as h } from "@umbraco-cms/backoffice/media";
import { UMB_MODAL_MANAGER_CONTEXT as f } from "@umbraco-cms/backoffice/modal";
class b extends c {
  constructor(t) {
    super(t), this.#e = new d(this), this.maxWidth = this.maxImageSize, this.consumeContext(f, (e) => {
      this.#t = e;
    });
  }
  #e;
  #t;
  /**
   * @returns {number} The configured maximum allowed image size
   */
  get maxImageSize() {
    const t = parseInt(this.configuration?.getValueByAlias("maxImageSize") ?? "", 10);
    return isNaN(t) ? 500 : t;
  }
  isActive(t) {
    return t?.isActive("image") === !0 || t?.isActive("figure") === !0;
  }
  async execute(t) {
    const e = t.getAttributes("image"), i = t.getAttributes("figure");
    let r;
    e?.["data-udi"] && (r = u(e["data-udi"]));
    let a;
    e?.alt && (a = e.alt);
    let o;
    i?.figcaption && (o = i.figcaption);
    const m = await this.#i(r);
    if (!m?.length) return;
    const n = m[0];
    if (!n)
      throw new Error("No media selected");
    const s = await this.#a(n, a, o);
    s && this.#r(t, n, s);
  }
  async #i(t) {
    const e = this.#t?.open(this, p, {
      data: {
        multiple: !1
        //startNodeIsVirtual,
      },
      value: {
        selection: t ? [t] : []
      }
    });
    if (!e) return;
    const { selection: i } = await e.onSubmit().catch(() => ({ selection: void 0 }));
    return i;
  }
  async #a(t, e, i) {
    return await this.#t?.open(this, h, {
      data: { mediaUnique: t },
      value: {
        url: "",
        altText: e,
        caption: i
      }
    })?.onSubmit().catch(() => null);
  }
  async #r(t, e, i) {
    if (!i?.url) return;
    const r = this.maxImageSize, { data: a } = await this.#e.requestResizedItems([e], {
      width: r,
      height: r,
      mode: g.MAX
    });
    if (!a?.length || !a[0]?.url) {
      console.error("No data returned from imaging repository");
      return;
    }
    const o = a[0].url, { width: m, height: n } = await l(o), s = {
      src: o,
      alt: i.altText,
      "data-udi": `umb://media/${e.replace(/-/g, "")}`,
      width: m.toString(),
      height: n.toString()
    };
    return i.caption ? t.commands.insertContent({
      type: "figure",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "image",
              attrs: s
            }
          ]
        },
        {
          type: "figcaption",
          content: [
            {
              type: "text",
              text: i.caption
            }
          ]
        }
      ]
    }) : t.commands.setImage(s);
  }
}
export {
  b as default
};
//# sourceMappingURL=media-picker.tiptap-toolbar-api-XAcggXJn.js.map

import { a as d } from "./base-CzBFGKJV.js";
import { umbEmbeddedMedia as r } from "@umbraco-cms/backoffice/external/tiptap";
import { UMB_EMBEDDED_MEDIA_MODAL as o } from "@umbraco-cms/backoffice/embedded-media";
import { umbOpenModal as m } from "@umbraco-cms/backoffice/modal";
class p extends d {
  async execute(i) {
    const e = {
      constrain: !1,
      height: 240,
      width: 360,
      url: ""
    }, a = i?.getAttributes(r.name);
    a && (e.constrain = a["data-embed-constrain"], e.height = a["data-embed-height"], e.width = a["data-embed-width"], e.url = a["data-embed-url"]);
    const t = await m(this, o, { data: e }).catch(() => {
    });
    t && i?.commands.setEmbeddedMedia({
      markup: t.markup,
      url: t.url,
      constrain: t.constrain,
      height: t.height?.toString(),
      width: t.width?.toString()
    });
  }
}
export {
  p as default
};
//# sourceMappingURL=embedded-media.tiptap-toolbar-api-CNB_fZwn.js.map

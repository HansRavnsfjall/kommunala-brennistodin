import { a } from "./base-CzBFGKJV.js";
import { UMB_CODE_EDITOR_MODAL as e } from "@umbraco-cms/backoffice/code-editor";
import { umbOpenModal as n } from "@umbraco-cms/backoffice/modal";
import { UmbLocalizationController as r } from "@umbraco-cms/backoffice/localization-api";
class c extends a {
  #t = new r(this);
  async execute(t) {
    if (!t) return;
    const o = await n(this, e, {
      data: {
        headline: this.#t.term("tiptap_sourceCodeEdit"),
        content: t?.getHTML() ?? "",
        language: "html",
        formatOnLoad: !0
      }
    }).catch(() => {
    });
    o && t?.commands.setContent(o.content, !0);
  }
}
export {
  c as default
};
//# sourceMappingURL=source-editor.tiptap-toolbar-api-6Rxfutm0.js.map

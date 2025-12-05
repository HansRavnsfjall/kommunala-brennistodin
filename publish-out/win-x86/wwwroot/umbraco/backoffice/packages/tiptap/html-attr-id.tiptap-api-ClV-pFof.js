import { U as o } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { Extension as a } from "@umbraco-cms/backoffice/external/tiptap";
const p = a.create({
  name: "htmlIdAttribute",
  addOptions() {
    return { types: [] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: { id: {} }
      }
    ];
  },
  addCommands() {
    return {
      setId: (t, e) => ({ commands: i }) => t ? (e ? [e] : this.options.types).map((r) => i.updateAttributes(r, { id: t })).every((r) => r) : !1,
      toggleId: (t, e) => ({ commands: i, editor: s }) => t ? (e ? [e] : this.options.types).map((n) => s.getAttributes(n)?.id).filter((n) => n).length ? i.unsetId(e) : i.setId(t, e) : !1,
      unsetId: (t) => ({ commands: e }) => (t ? [t] : this.options.types).map((s) => e.resetAttributes(s, "id")).every((s) => s)
    };
  }
});
class b extends o {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      p.configure({
        types: [
          "bold",
          "blockquote",
          "bulletList",
          "codeBlock",
          "div",
          "figcaption",
          "figure",
          "heading",
          "horizontalRule",
          "italic",
          "image",
          "link",
          "orderedList",
          "paragraph",
          "span",
          "strike",
          "subscript",
          "superscript",
          "table",
          "tableHeader",
          "tableRow",
          "tableCell",
          "underline",
          "umbLink"
        ]
      })
    ];
  }
}
export {
  b as default
};
//# sourceMappingURL=html-attr-id.tiptap-api-ClV-pFof.js.map

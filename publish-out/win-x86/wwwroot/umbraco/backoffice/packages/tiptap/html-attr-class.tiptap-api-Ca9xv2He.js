import { U as n } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { Extension as l } from "@umbraco-cms/backoffice/external/tiptap";
const o = l.create({
  name: "htmlClassAttribute",
  addOptions() {
    return { types: [] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: { class: {} }
      }
    ];
  },
  addCommands() {
    return {
      setClassName: (t, s) => ({ commands: i }) => t ? (s ? [s] : this.options.types).map((r) => i.updateAttributes(r, { class: t })).every((r) => r) : !1,
      toggleClassName: (t, s) => ({ commands: i, editor: e }) => t ? (s ? [s] : this.options.types).map((a) => e.getAttributes(a)?.class).filter((a) => a).length ? i.unsetClassName(s) : i.setClassName(t, s) : !1,
      unsetClassName: (t) => ({ commands: s }) => (t ? [t] : this.options.types).map((e) => s.resetAttributes(e, "class")).every((e) => e)
    };
  }
});
class m extends n {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      o.configure({
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
  m as default
};
//# sourceMappingURL=html-attr-class.tiptap-api-Ca9xv2He.js.map

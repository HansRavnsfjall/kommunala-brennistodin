import { U as l } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { Extension as o } from "@umbraco-cms/backoffice/external/tiptap";
const a = o.create({
  name: "htmlStyleAttribute",
  addOptions() {
    return { types: [] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          style: {
            parseHTML: (t) => t.style.length ? t.style.cssText : null
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setStyles: (t, e) => ({ commands: i }) => t ? (e ? [e] : this.options.types).map((r) => i.updateAttributes(r, { style: t })).every((r) => r) : !1,
      toggleStyles: (t, e) => ({ commands: i, editor: s }) => t ? (e ? [e] : this.options.types).map((n) => s.getAttributes(n)?.style).filter((n) => n).length ? i.unsetStyles(e) : i.setStyles(t, e) : !1,
      unsetStyles: (t) => ({ commands: e }) => (t ? [t] : this.options.types).map((s) => e.resetAttributes(s, "style")).every((s) => s)
    };
  }
});
class b extends l {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      a.configure({
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
//# sourceMappingURL=html-attr-style.tiptap-api-BOZbpxk8.js.map

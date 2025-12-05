import { U as n } from "./tiptap-extension-api-base-Dc5dmxjn.js";
import { Extension as o } from "@umbraco-cms/backoffice/external/tiptap";
function p(t) {
  return t.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, s) => (s ? "-" : "") + e.toLowerCase());
}
const u = o.create({
  name: "htmlDatasetAttributes",
  addOptions() {
    return { types: [] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          dataset: {
            parseHTML: (t) => t.dataset,
            renderHTML: (t) => {
              const e = t.dataset ? Object.keys(t.dataset) : [];
              if (!e.length) return {};
              const s = {};
              return e.forEach((a) => {
                s["data-" + p(a)] = t.dataset[a];
              }), s;
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setId: (t, e) => ({ commands: s }) => t ? (e ? [e] : this.options.types).map((r) => s.updateAttributes(r, { id: t })).every((r) => r) : !1,
      toggleId: (t, e) => ({ commands: s, editor: a }) => t ? (e ? [e] : this.options.types).map((i) => a.getAttributes(i)?.id).filter((i) => i).length ? s.unsetId(e) : s.setId(t, e) : !1,
      unsetId: (t) => ({ commands: e }) => (t ? [t] : this.options.types).map((a) => e.resetAttributes(a, "id")).every((a) => a)
    };
  }
});
class b extends n {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [
      u.configure({
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
//# sourceMappingURL=html-attr-dataset.tiptap-api-B_eBwDxR.js.map

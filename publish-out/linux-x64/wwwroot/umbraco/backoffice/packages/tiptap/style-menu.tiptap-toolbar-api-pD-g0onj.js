import { a as m } from "./base-CzBFGKJV.js";
class p extends m {
  #e = {
    h1: { type: "heading", command: (e) => e.toggleHeading({ level: 1 }) },
    h2: { type: "heading", command: (e) => e.toggleHeading({ level: 2 }) },
    h3: { type: "heading", command: (e) => e.toggleHeading({ level: 3 }) },
    h4: { type: "heading", command: (e) => e.toggleHeading({ level: 4 }) },
    h5: { type: "heading", command: (e) => e.toggleHeading({ level: 5 }) },
    h6: { type: "heading", command: (e) => e.toggleHeading({ level: 6 }) },
    p: { type: "paragraph", command: (e) => e.setParagraph() },
    blockquote: { type: "blockquote", command: (e) => e.toggleBlockquote() },
    code: { type: "code", command: (e) => e.toggleCode() },
    codeBlock: { type: "codeBlock", command: (e) => e.toggleCodeBlock() },
    div: { type: "div", command: (e) => e.toggleNode("div", "paragraph") },
    em: { type: "italic", command: (e) => e.setItalic() },
    ol: { type: "orderedList", command: (e) => e.toggleOrderedList() },
    strong: { type: "bold", command: (e) => e.setBold() },
    s: { type: "strike", command: (e) => e.setStrike() },
    span: { type: "span", command: (e) => e.toggleMark("span") },
    u: { type: "underline", command: (e) => e.setUnderline() },
    ul: { type: "bulletList", command: (e) => e.toggleBulletList() }
  };
  execute(e, a) {
    if (!e || !a?.data) return;
    const { tag: o, id: l, class: n } = a.data, d = e.chain().focus(), t = o ? this.#e[o] : null;
    (t?.command?.(d) ?? d).setId(l, t?.type).setClassName(n, t?.type).run();
  }
}
export {
  p as default
};
//# sourceMappingURL=style-menu.tiptap-toolbar-api-pD-g0onj.js.map

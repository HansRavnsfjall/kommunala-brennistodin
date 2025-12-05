import { U as g } from "./tiptap-toolbar-element-api-base-BQtOaJBO.js";
class r extends g {
  #t(t) {
    return {
      type: "heading",
      command: (e) => e.toggleHeading({ level: t }),
      isActive: (e) => e?.isActive("heading", { level: t })
    };
  }
  #e = {
    h1: this.#t(1),
    h2: this.#t(2),
    h3: this.#t(3),
    h4: this.#t(4),
    h5: this.#t(5),
    h6: this.#t(6),
    p: { type: "paragraph", command: (t) => t.setParagraph() },
    blockquote: { type: "blockquote", command: (t) => t.toggleBlockquote() },
    code: { type: "code", command: (t) => t.toggleCode() },
    codeBlock: { type: "codeBlock", command: (t) => t.toggleCodeBlock() },
    div: { type: "div", command: (t) => t.toggleNode("div", "paragraph") },
    em: { type: "italic", command: (t) => t.toggleItalic() },
    ol: { type: "orderedList", command: (t) => t.toggleOrderedList() },
    strong: { type: "bold", command: (t) => t.toggleBold() },
    s: { type: "strike", command: (t) => t.toggleStrike() },
    span: { type: "span", command: (t) => t.toggleMark("span") },
    u: { type: "underline", command: (t) => t.toggleUnderline() },
    ul: { type: "bulletList", command: (t) => t.toggleBulletList() }
  };
  isActive(t, e) {
    if (!t || !e?.data) return !1;
    const { tag: o, id: c, class: l } = e.data, a = o ? this.#e[o] : null, s = t?.getAttributes(a?.type ?? "paragraph"), n = o ? a ? a.isActive?.(t) ?? t?.isActive(a.type) ?? !1 : !1 : !0, d = c ? s.id === c : !0, i = l ? s.class?.includes(l) === !0 : !0;
    return n && d && i;
  }
  execute(t, e) {
    if (!t || !e?.data) return;
    const { tag: o, id: c, class: l } = e.data, a = t.chain().focus(), s = o ? this.#e[o] : null;
    (s?.command?.(a) ?? a).toggleId(c, s?.type).toggleClassName(l, s?.type).run();
  }
}
export {
  r as default
};
//# sourceMappingURL=style-menu.tiptap-toolbar-api-BBZLB52s.js.map

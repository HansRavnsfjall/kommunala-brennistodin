import { a as n } from "./base-CzBFGKJV.js";
import { U as i } from "./table-properties-modal.token-F6pN6QTg.js";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
class f extends n {
  #e = {
    // Cells
    mergeCells: (e) => e?.chain().focus().mergeCells().run(),
    splitCell: (e) => e?.chain().focus().splitCell().run(),
    mergeOrSplit: (e) => e?.chain().focus().mergeOrSplit().run(),
    toggleHeaderCell: (e) => e?.chain().focus().toggleHeaderCell().run(),
    // Rows
    addRowBefore: (e) => e?.chain().focus().addRowBefore().run(),
    addRowAfter: (e) => e?.chain().focus().addRowAfter().run(),
    deleteRow: (e) => e?.chain().focus().deleteRow().run(),
    toggleHeaderRow: (e) => e?.chain().focus().toggleHeaderRow().run(),
    // Columns
    addColumnBefore: (e) => e?.chain().focus().addColumnBefore().run(),
    addColumnAfter: (e) => e?.chain().focus().addColumnAfter().run(),
    deleteColumn: (e) => e?.chain().focus().deleteColumn().run(),
    toggleHeaderColumn: (e) => e?.chain().focus().toggleHeaderColumn().run(),
    // Table
    deleteTable: (e) => e?.chain().focus().deleteTable().run(),
    tableProperties: (e) => this.#t(e)
  };
  async #t(e) {
    if (!e || !e.isActive("table")) return;
    const a = this.#r(e), t = (await this.getContext(s))?.open(this, i, a);
    if (!t) return;
    const o = await t.onSubmit().catch(() => {
    });
    if (!o) return;
    const l = this.#o(o);
    l && e?.chain().focus().updateAttributes("table", { style: l }).run();
  }
  #r(e) {
    const a = e?.getAttributes("table").style ?? "", r = document.createElement("table");
    r.style.cssText = a;
    const t = {};
    return t.alignment = this.#a(r.style), r.style.backgroundColor && (t.backgroundColor = r.style.backgroundColor), r.style.borderColor && (t.borderColor = r.style.borderColor), r.style.borderStyle && (t.borderStyle = r.style.borderStyle), r.style.borderWidth && (t.borderWidth = r.style.borderWidth), r.style.height && (t.height = r.style.height), r.style.width && (t.width = r.style.width), { data: t };
  }
  #a(e) {
    return e.marginLeft === "auto" && e.marginRight === "auto" ? "center" : e.marginRight === "auto" ? "left" : e.marginLeft === "auto" ? "right" : "none";
  }
  #o(e) {
    const a = {}, r = (t) => t.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (o, l) => (l ? "-" : "") + o.toLowerCase());
    for (const t of e)
      if (t.value)
        switch (t.alias) {
          case "alignment": {
            switch (Array.isArray(t.value) && t.value.length ? t.value[0] : t.value ?? "") {
              case "left":
                a["margin-right"] = "auto";
                break;
              case "center":
                a["margin-left"] = "auto", a["margin-right"] = "auto";
                break;
              case "right":
                a["margin-left"] = "auto;";
                break;
              default:
                a["margin-left"] = "none", a["margin-right"] = "none";
                break;
            }
            break;
          }
          case "borderStyle": {
            const o = Array.isArray(t.value) && t.value.length ? t.value[0] : t.value ?? "";
            o && (a["border-style"] = o);
            break;
          }
          case "backgroundColor":
          case "borderColor":
          case "borderWidth":
          case "height":
          case "width": {
            const o = r(t.alias);
            a[o] = t.value;
            break;
          }
        }
    return Object.entries(a).map(([t, o]) => `${t}: ${o}`).join(";");
  }
  execute(e, a) {
    if (!a?.data) return;
    const r = a.data.toString();
    this.#e[r](e);
  }
}
export {
  f as UmbTiptapToolbarTableExtensionApi,
  f as api
};
//# sourceMappingURL=table.tiptap-toolbar-api-BkJ1Brwz.js.map

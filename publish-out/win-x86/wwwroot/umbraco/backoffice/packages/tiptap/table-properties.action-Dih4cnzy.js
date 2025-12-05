import { U as n } from "./tiptap-menu-item-api-base-DXuOn0Ew.js";
import { U as s } from "./tiptap-rte.context-token-DQjBmxxS.js";
import { U as l } from "./table-properties-modal.token-F6pN6QTg.js";
import { UMB_MODAL_MANAGER_CONTEXT as c } from "@umbraco-cms/backoffice/modal";
class h extends n {
  async #e(r) {
    if (!r || !r.isActive("table")) return;
    const a = this.#t(r), e = (await this.getContext(c))?.open(this, l, a);
    if (!e) return;
    const o = await e.onSubmit().catch(() => {
    });
    if (!o) return;
    const i = this.#a(o);
    i && r?.chain().focus().updateAttributes("table", { style: i }).run();
  }
  #t(r) {
    const a = r?.getAttributes("table").style ?? "", t = document.createElement("table");
    t.style.cssText = a;
    const e = {};
    return e.alignment = this.#r(t.style), t.style.backgroundColor && (e.backgroundColor = t.style.backgroundColor), t.style.borderColor && (e.borderColor = t.style.borderColor), t.style.borderStyle && (e.borderStyle = t.style.borderStyle), t.style.borderWidth && (e.borderWidth = t.style.borderWidth), t.style.height && (e.height = t.style.height), t.style.width && (e.width = t.style.width), { data: e };
  }
  #r(r) {
    return r.marginLeft === "auto" && r.marginRight === "auto" ? "center" : r.marginRight === "auto" ? "left" : r.marginLeft === "auto" ? "right" : "none";
  }
  #a(r) {
    const a = {}, t = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (o, i) => (i ? "-" : "") + o.toLowerCase());
    for (const e of r)
      if (e.value)
        switch (e.alias) {
          case "alignment": {
            switch (Array.isArray(e.value) && e.value.length ? e.value[0] : e.value ?? "") {
              case "left":
                a["margin-right"] = "auto";
                break;
              case "center":
                a["margin-left"] = "auto", a["margin-right"] = "auto";
                break;
              case "right":
                a["margin-left"] = "auto";
                break;
              default:
                a["margin-left"] = "none", a["margin-right"] = "none";
                break;
            }
            break;
          }
          case "borderStyle": {
            const o = Array.isArray(e.value) && e.value.length ? e.value[0] : e.value ?? "";
            o && (a["border-style"] = o);
            break;
          }
          case "backgroundColor":
          case "borderColor":
          case "borderWidth":
          case "height":
          case "width": {
            const o = t(e.alias);
            a[o] = e.value;
            break;
          }
        }
    return Object.entries(a).map(([e, o]) => `${e}: ${o}`).join(";");
  }
  async execute() {
    const r = await this.getContext(s);
    this.#e(r?.getEditor());
  }
}
export {
  h as default
};
//# sourceMappingURL=table-properties.action-Dih4cnzy.js.map

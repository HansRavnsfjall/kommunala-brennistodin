import { U as s } from "./link-picker-modal.token-D9E3VS6O.js";
import { monaco as m } from "@umbraco-cms/backoffice/external/monaco-editor";
import { UmbControllerBase as c } from "@umbraco-cms/backoffice/class-api";
import { UmbLocalizationController as u } from "@umbraco-cms/backoffice/localization-api";
import { UMB_MODAL_MANAGER_CONTEXT as d } from "@umbraco-cms/backoffice/modal";
class E extends c {
  #n = new u(this);
  constructor(e) {
    super(e);
  }
  getUnique() {
    return "Umb.MonacoMarkdownEditorAction.UrlPicker";
  }
  getLabel() {
    return this.#n.term("general_insertLink");
  }
  getKeybindings() {
    return [m.KeyMod.CtrlCmd | m.KeyCode.KeyK];
  }
  async execute({ editor: e, overlaySize: l }) {
    if (!e) throw new Error("Editor not found");
    const r = await this.getContext(d);
    if (!r) throw new Error("Modal manager not found");
    const n = e?.getSelections()[0];
    if (!n) return;
    const o = e?.getValueInRange(n);
    e.monacoEditor?.focus(), r.open(this, s, {
      modal: { size: l },
      data: {
        index: null,
        isNew: o === "",
        config: {}
      },
      value: {
        link: { name: o }
      }
    })?.onSubmit().then((t) => {
      if (!t) return;
      const i = this.#n.term("general_name"), a = this.#n.term("general_url");
      e.monacoEditor?.executeEdits("", [
        { range: n, text: `[${t.link.name || i}](${t.link.url || a})` }
      ]), t.link.name ? t.link.url || e.select({
        startColumn: n.startColumn + 3 + t.link.name.length,
        endColumn: n.startColumn + 3 + t.link.name.length + a.length,
        endLineNumber: n.startLineNumber,
        startLineNumber: n.startLineNumber
      }) : e.select({
        startColumn: n.startColumn + 1,
        endColumn: n.startColumn + 1 + i.length,
        endLineNumber: n.startLineNumber,
        startLineNumber: n.startLineNumber
      });
    }).catch(() => {
    }).finally(() => e.monacoEditor?.focus());
  }
}
export {
  E as UmbUrlPickerMonacoMarkdownEditorAction,
  E as api
};
//# sourceMappingURL=url-picker-monaco-markdown-editor-action-3fddidQp.js.map

import "./clipboard-entry-picker-modal.token-BY5g5-fO.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/current-user";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "./manifests-D6Yzql_a.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { UmbClipboardEntryItemRepository as s } from "./clipboard-entry-item.repository-CIuifbrD.js";
import { U as p } from "./clipboard.property-context-token-DMlYzAUk.js";
import { umbConfirmModal as l } from "@umbraco-cms/backoffice/modal";
import { UMB_PROPERTY_CONTEXT as m } from "@umbraco-cms/backoffice/property";
import { UmbPropertyActionBase as c } from "@umbraco-cms/backoffice/property-action";
class _ extends c {
  #e;
  #t;
  #r;
  constructor(r, e) {
    super(r, e), this.#e = Promise.all([
      this.consumeContext(m, (t) => {
        this.#t = t;
      }).asPromise({ preventTimeout: !0 }),
      this.consumeContext(p, (t) => {
        this.#r = t;
      }).asPromise({ preventTimeout: !0 })
    ]);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async _pickerFilter(r, e) {
    return !0;
  }
  async execute() {
    if (await this.#e, !this.#r) throw new Error("Clipboard context not found");
    if (!this.#t) throw new Error("Property context not found");
    const r = this.#t.getEditorManifest();
    if (!r)
      throw new Error("Property editor manifest not found");
    const e = await this.#r.pick({
      propertyEditorUiAlias: r.alias,
      multiple: !1,
      filter: this._pickerFilter
    }), t = e.selection[0], i = e.propertyValues[0];
    if (!t)
      throw new Error("No clipboard entry selected");
    if (!i)
      throw new Error("No property value found");
    if (this.#t.getValue()) {
      const n = new s(this), { data: o } = await n.requestItems([t]);
      if (!o || o.length === 0)
        throw new Error("Clipboard entry not found");
      const a = o[0];
      await l(this, {
        headline: "Paste from clipboard",
        content: `The property already contains a value. Paste from the property action will overwrite the current value.
				Do you want to replace the current value with ${a.name}?`,
        confirmLabel: "Paste"
      });
    }
    this.#t?.setValue(i);
  }
}
export {
  _ as UmbPasteFromClipboardPropertyAction,
  _ as api
};
//# sourceMappingURL=paste-from-clipboard.property-action-BPQNO_f2.js.map

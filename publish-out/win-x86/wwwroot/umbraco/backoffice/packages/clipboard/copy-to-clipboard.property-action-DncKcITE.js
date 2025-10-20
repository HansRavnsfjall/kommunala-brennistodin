import { U as a } from "./clipboard.property-context-token-DMlYzAUk.js";
import { UMB_NOTIFICATION_CONTEXT as n } from "@umbraco-cms/backoffice/notification";
import { UMB_PROPERTY_DATASET_CONTEXT as p, UMB_PROPERTY_CONTEXT as c } from "@umbraco-cms/backoffice/property";
import { UmbPropertyActionBase as m } from "@umbraco-cms/backoffice/property-action";
class E extends m {
  #e;
  #t;
  #o;
  #r;
  #i;
  constructor(e, o) {
    super(e, o), this.#i = Promise.all([
      this.consumeContext(p, (t) => {
        this.#e = t;
      }).asPromise({ preventTimeout: !0 }),
      this.consumeContext(c, (t) => {
        this.#t = t;
      }).asPromise({ preventTimeout: !0 }),
      this.consumeContext(n, (t) => {
        this.#o = t;
      }).asPromise({ preventTimeout: !0 }),
      this.consumeContext(a, (t) => {
        this.#r = t;
      }).asPromise({ preventTimeout: !0 })
    ]);
  }
  async execute() {
    if (await this.#i, !this.#e) throw new Error("Property dataset context is not available");
    if (!this.#t) throw new Error("Property context is not available");
    if (!this.#o) throw new Error("Notification context is not available");
    if (!this.#r) throw new Error("Clipboard context is not available");
    const e = this.#t.getEditorManifest()?.alias;
    if (!e)
      throw new Error("Property editor alias is not available");
    const o = this.#e.getName(), t = this.#t.getLabel(), i = o ? `${o} - ${t}` : t, r = this.#t.getValue();
    if (!r) {
      this.#o.peek("danger", { data: { message: "The property does not have a value to copy" } });
      return;
    }
    const s = this.#t.getEditorManifest()?.meta.icon;
    await this.#r.write({
      name: i,
      icon: s,
      propertyValue: r,
      propertyEditorUiAlias: e
    });
  }
}
export {
  E as UmbCopyToClipboardPropertyAction,
  E as api
};
//# sourceMappingURL=copy-to-clipboard.property-action-DncKcITE.js.map

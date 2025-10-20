import { UmbPropertyActionBase as r } from "@umbraco-cms/backoffice/property-action";
import { UMB_CODE_EDITOR_MODAL as i } from "@umbraco-cms/backoffice/code-editor";
import { UMB_MODAL_MANAGER_CONTEXT as s } from "@umbraco-cms/backoffice/modal";
import { UMB_PROPERTY_CONTEXT as l } from "@umbraco-cms/backoffice/property";
class E extends r {
  async execute() {
    const t = await this.getContext(l);
    if (!t) return;
    const n = t.getValue(), e = await this.getContext(s);
    if (!e) return;
    const o = await e.open(this, i, {
      data: {
        headline: this.args.meta.label ?? "Edit raw value",
        content: JSON.stringify(n, null, 2),
        language: "json",
        confirmLabel: "#bulk_done"
      }
    }).onSubmit().catch(() => {
    });
    if (!o) return;
    const a = JSON.parse(o.content);
    t.setValue(a);
  }
}
export {
  E as ContentmentPropertyActionEditJsonElement,
  E as api
};
//# sourceMappingURL=edit-json.controller.js.map

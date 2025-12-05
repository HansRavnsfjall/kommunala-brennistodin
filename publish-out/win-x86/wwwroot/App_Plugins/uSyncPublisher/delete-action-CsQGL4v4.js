import { UmbEntityActionBase as n } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as s, UMB_CONFIRM_MODAL as i } from "@umbraco-cms/backoffice/modal";
import { a as o } from "./index-DFDZ_Jke.js";
class m extends n {
  constructor(e, t) {
    super(e, t);
  }
  async execute() {
    if (this.args.unique == null) return;
    const e = await this.getContext(o);
    if (!e) return;
    const t = await e.getServer(this.args.unique);
    if (!t) return;
    const a = await this.getContext(s);
    if (!a) return;
    const r = a.open(this, i, {
      data: {
        headline: "Delete server?",
        content: `Are you sure you want to delete the server [${t.name}]?`,
        confirmLabel: "Delete",
        color: "danger"
      }
    });
    await (r == null ? void 0 : r.onSubmit().then(async () => {
      await e.deleteServer(this.args.unique);
    }).catch(() => {
    }));
  }
}
export {
  m as SyncPublisherServerDeleteAction,
  m as default
};
//# sourceMappingURL=delete-action-CsQGL4v4.js.map

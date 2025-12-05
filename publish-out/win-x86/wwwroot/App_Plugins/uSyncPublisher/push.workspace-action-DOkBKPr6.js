var c = (e) => {
  throw TypeError(e);
};
var m = (e, o, t) => o.has(e) || c("Cannot " + t);
var u = (e, o, t) => (m(e, o, "read from private field"), t ? t.call(e) : o.get(e)), p = (e, o, t) => o.has(e) ? c("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), C = (e, o, t, n) => (m(e, o, "write to private field"), n ? n.call(e, t) : o.set(e, t), t);
import { UMB_MODAL_MANAGER_CONTEXT as h } from "@umbraco-cms/backoffice/modal";
import { U as x, P as y } from "./index-DFDZ_Jke.js";
import { PublisherStrategyContext as S } from "./strategy.context-Nd7v-g-Q.js";
import { UmbWorkspaceActionBase as f } from "@umbraco-cms/backoffice/workspace";
import { UMB_DOCUMENT_WORKSPACE_CONTEXT as E } from "@umbraco-cms/backoffice/document";
var i;
class A extends f {
  constructor(t, n) {
    super(t, n);
    p(this, i);
    C(this, i, new S(t));
  }
  async execute() {
    const t = await this.getContext(E);
    if (!t) return;
    const n = t.getUnique();
    if (!n) return;
    const r = t.getEntityType(), s = await u(this, i).getSyncItem(r, n);
    if (!s) return;
    const a = await this.getContext(h);
    if (!a) return;
    await a.open(this, x, {
      data: {
        action: "push",
        items: [s.udi],
        entityType: r,
        mode: y.PUSH
      }
    }).onSubmit().catch(() => {
    });
  }
}
i = new WeakMap();
export {
  A as SyncPublisherPushEntityAction,
  A as api
};
//# sourceMappingURL=push.workspace-action-DOkBKPr6.js.map

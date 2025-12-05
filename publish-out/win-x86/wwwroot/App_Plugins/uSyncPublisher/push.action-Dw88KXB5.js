var o = (t) => {
  throw TypeError(t);
};
var m = (t, i, e) => i.has(t) || o("Cannot " + e);
var u = (t, i, e) => (m(t, i, "read from private field"), e ? e.call(t) : i.get(t)), c = (t, i, e) => i.has(t) ? o("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), h = (t, i, e, s) => (m(t, i, "write to private field"), s ? s.call(t, e) : i.set(t, e), e);
import { UmbEntityActionBase as y } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as p } from "@umbraco-cms/backoffice/modal";
import { P as S, U as d } from "./index-DFDZ_Jke.js";
import { PublisherStrategyContext as g } from "./strategy.context-Nd7v-g-Q.js";
var r;
class _ extends y {
  constructor(e, s) {
    super(e, s);
    c(this, r);
    this.mode = S.PUSH, h(this, r, new g(e));
  }
  async execute() {
    var a;
    const e = await ((a = u(this, r)) == null ? void 0 : a.getSyncItem(
      this.args.entityType,
      this.args.unique ?? ""
    ));
    if (!e) return;
    const s = await this.getContext(p);
    if (!s) return;
    const n = s.open(this, d, {
      data: {
        action: "push",
        items: [e.udi],
        entityType: this.args.entityType,
        mode: this.mode
      }
    });
    await (n == null ? void 0 : n.onSubmit().catch(() => {
    }));
  }
}
r = new WeakMap();
export {
  _ as default
};
//# sourceMappingURL=push.action-Dw88KXB5.js.map

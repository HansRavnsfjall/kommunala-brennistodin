var o = (e) => {
  throw TypeError(e);
};
var h = (e, i, t) => i.has(e) || o("Cannot " + t);
var u = (e, i, t) => (h(e, i, "read from private field"), t ? t.call(e) : i.get(e)), m = (e, i, t) => i.has(e) ? o("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), c = (e, i, t, s) => (h(e, i, "write to private field"), s ? s.call(e, t) : i.set(e, t), t);
import { UmbEntityActionBase as y, UmbRequestReloadChildrenOfEntityEvent as p } from "@umbraco-cms/backoffice/entity-action";
import { UMB_MODAL_MANAGER_CONTEXT as f } from "@umbraco-cms/backoffice/modal";
import { P as g, U as E } from "./index-DFDZ_Jke.js";
import { PublisherStrategyContext as T } from "./strategy.context-Nd7v-g-Q.js";
import { UMB_ACTION_EVENT_CONTEXT as d } from "@umbraco-cms/backoffice/action";
var n;
class A extends y {
  constructor(t, s) {
    super(t, s);
    m(this, n);
    this._mode = g.PULL, c(this, n, new T(t));
  }
  async execute() {
    var a;
    const t = await ((a = u(this, n)) == null ? void 0 : a.getSyncItem(
      this.args.entityType,
      this.args.unique ?? ""
    ));
    if (!t) return;
    const s = await this.getContext(f);
    if (!s) return;
    const r = s.open(this, E, {
      data: {
        action: "push",
        items: [t.udi],
        entityType: this.args.entityType,
        mode: this._mode
      }
    });
    await (r == null ? void 0 : r.onSubmit().catch(() => {
    })), this.args.unique && this.refreshTree(this.args.unique, this.args.entityType);
  }
  async refreshTree(t, s) {
    const r = await this.getContext(d);
    r == null || r.dispatchEvent(
      new p({
        unique: t,
        entityType: s
      })
    );
  }
}
n = new WeakMap();
export {
  A as default
};
//# sourceMappingURL=pull.action-BAYQzJ6X.js.map

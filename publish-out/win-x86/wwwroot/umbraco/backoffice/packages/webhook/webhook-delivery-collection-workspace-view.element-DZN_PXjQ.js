import { UmbCollectionWorkspaceViewElement as v } from "@umbraco-cms/backoffice/collection";
import { h as _ } from "./paths-CYf6P2Vl.js";
import { customElement as p } from "@umbraco-cms/backoffice/external/lit";
var m = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, d = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? m(t, o) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
}, f = (e, t, o) => t.has(e) || c("Cannot " + o), k = (e, t, o) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), w = (e, t, o) => (f(e, t, "access private method"), o), a, h;
let l = class extends v {
  constructor() {
    super(), k(this, a), this.consumeContext(_, (e) => {
      this.observe(e?.unique, (t) => w(this, a, h).call(this, t));
    });
  }
};
a = /* @__PURE__ */ new WeakSet();
h = function(e) {
  e === void 0 ? this._filter = void 0 : this._filter = {
    webhook: e ? { unique: e } : null
  };
};
l = d([
  p("umb-webhook-delivery-collection-workspace-view")
], l);
export {
  l as UmbWebhookDeliveryCollectionWorkspaceViewElement,
  l as element
};
//# sourceMappingURL=webhook-delivery-collection-workspace-view.element-DZN_PXjQ.js.map

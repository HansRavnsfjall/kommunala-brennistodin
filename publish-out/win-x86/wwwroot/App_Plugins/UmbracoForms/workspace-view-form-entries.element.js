import { c as f, J as w } from "./index.js";
import { LitElement as E, when as d, html as _, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as C } from "@umbraco-cms/backoffice/element-api";
var u = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, k = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? u(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (a = p(a) || a);
  return a;
}, h = (e, t, r) => t.has(e) || v("Cannot " + r), l = (e, t, r) => (h(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r, n) => (h(e, t, "write to private field"), t.set(e, r), r), s, i;
const S = "workspace-view-form-entries";
let c = class extends C(E) {
  constructor() {
    super(), m(this, s), m(this, i, {
      pageSize: 10
    }), this.consumeContext(f, (e) => {
      M(this, s, e);
    });
  }
  render() {
    var e;
    return _` ${d(
      !((e = l(this, s)) != null && e.getIsNew()),
      () => _`<umb-collection
          alias=${w}
          .config=${l(this, i)}
        ></umb-collection>`
    )}`;
  }
};
s = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
c = k([
  O(S)
], c);
const W = c;
export {
  c as UmbWorkspaceViewFormEntriesElement,
  W as default
};
//# sourceMappingURL=workspace-view-form-entries.element.js.map

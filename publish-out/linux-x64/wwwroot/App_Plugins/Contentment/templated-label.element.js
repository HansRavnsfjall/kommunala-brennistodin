import { t as P } from "./hide-label.function.js";
import { t as E } from "./move-before-property-group.function.js";
import { p as c } from "./parse-boolean.function.js";
import { until as M, unsafeHTML as C, nothing as W, property as B, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { L as U } from "./liquid.browser.js";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
var A = Object.defineProperty, G = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, w = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? G(t, r) : t, d = e.length - 1, u; d >= 0; d--)
    (u = e[d]) && (a = (i ? u(t, r, a) : u(a)) || a);
  return i && a && A(t, r, a), a;
}, v = (e, t, r) => t.has(e) || y("Cannot " + r), s = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), n = (e, t, r) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), f = (e, t, r, i) => (v(e, t, "write to private field"), t.set(e, r), r), O = (e, t, r) => (v(e, t, "access private method"), r), p, l, h, o, m, L;
let _ = class extends g {
  constructor() {
    super(...arguments), n(this, m), n(this, p, new U({ cache: !0 })), n(this, l, !1), n(this, h, !1), n(this, o);
  }
  set config(e) {
    if (!e) return;
    f(this, l, c(e.getValueByAlias("hideLabel"))), f(this, h, c(e.getValueByAlias("hidePropertyGroup")));
    const t = e.getValueByAlias("notes") ?? "";
    f(this, o, s(this, p).parse(t));
  }
  firstUpdated(e) {
    super.firstUpdated(e), s(this, l) && P(this), s(this, h) && E(this);
  }
  render() {
    return M(O(this, m, L).call(this));
  }
};
p = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
L = async function() {
  if (!s(this, p) || !s(this, o)) return null;
  const e = await s(this, p).render(s(this, o), { model: { value: this.value } });
  return e ? C(e) : W;
};
w([
  B({ attribute: !1 })
], _.prototype, "value", 2);
_ = w([
  T("contentment-property-editor-ui-templated-label")
], _);
export {
  _ as ContentmentPropertyEditorUITemplatedLabelElement,
  _ as element
};
//# sourceMappingURL=templated-label.element.js.map

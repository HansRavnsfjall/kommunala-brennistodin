import { html as B, property as P, customElement as A } from "@umbraco-cms/backoffice/external/lit";
import { t as E } from "./hide-label.function.js";
import { t as M } from "./move-before-property-group.function.js";
import { p as v } from "./parse-boolean.function.js";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
var V = Object.defineProperty, C = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, w = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? C(t, r) : t, u = e.length - 1, m; u >= 0; u--)
    (m = e[u]) && (s = (n ? m(t, r, s) : m(s)) || s);
  return n && s && V(t, r, s), s;
}, g = (e, t, r) => t.has(e) || c("Cannot " + r), a = (e, t, r) => (g(e, t, "read from private field"), t.get(e)), p = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), i = (e, t, r, n) => (g(e, t, "write to private field"), t.set(e, r), r), h, l, d, o, _, f;
let y = class extends W {
  constructor() {
    super(...arguments), p(this, h, !1), p(this, l, !1), p(this, d), p(this, o), p(this, _), p(this, f);
  }
  set config(e) {
    if (!e) return;
    i(this, d, e.getValueByAlias("alertType") || "default"), i(this, o, e.getValueByAlias("icon")), i(this, _, e.getValueByAlias("heading"));
    const t = e.getValueByAlias("message");
    i(this, f, (t == null ? void 0 : t.markup) ?? t), i(this, h, v(e.getValueByAlias("hideLabel"))), i(this, l, v(e.getValueByAlias("hidePropertyGroup"))), a(this, o) && i(this, o, a(this, o).split(" ")[0]);
  }
  firstUpdated(e) {
    super.firstUpdated(e), a(this, h) && E(this), a(this, l) && M(this);
  }
  render() {
    return B`
			<contentment-info-box
				.type=${a(this, d)}
				.icon=${a(this, o)}
				.heading=${a(this, _)}
				.message=${a(this, f)}></contentment-info-box>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
w([
  P()
], y.prototype, "value", 2);
y = w([
  A("contentment-property-editor-ui-editor-notes")
], y);
export {
  y as ContentmentPropertyEditorUIEditorNotesElement,
  y as element
};
//# sourceMappingURL=editor-notes.element.js.map

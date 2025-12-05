import { U as b } from "./current-user-history.store.token-C66NWwR2.js";
import { map as C, html as u, ifDefined as E, css as g, state as H, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
var T = Object.defineProperty, w = Object.getOwnPropertyDescriptor, d = (r) => {
  throw TypeError(r);
}, v = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? w(e, t) : e, o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (s = (i ? a(e, t, s) : a(s)) || s);
  return i && s && T(e, t, s), s;
}, f = (r, e, t) => e.has(r) || d("Cannot " + t), p = (r, e, t) => (f(r, e, "read from private field"), e.get(r)), _ = (r, e, t) => e.has(r) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), P = (r, e, t, i) => (f(r, e, "write to private field"), e.set(r, t), t), c = (r, e, t) => (f(r, e, "access private method"), t), l, n, y, m, U;
let h = class extends A {
  constructor() {
    super(), _(this, n), this._history = [], _(this, l), this.consumeContext(b, (r) => {
      P(this, l, r), c(this, n, y).call(this);
    });
  }
  render() {
    return u`
			<uui-box headline=${this.localize.term("user_yourHistory")}>
				<uui-ref-list>${C(this._history, (r) => u` ${c(this, n, U).call(this, r)} `)}</uui-ref-list>
			</uui-box>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
y = function() {
  p(this, l) && this.observe(
    p(this, l).latestHistory,
    (r) => {
      this._history = r.reverse();
    },
    "umbCurrentUserHistoryObserver"
  );
};
m = function(r, e, t = "...") {
  if (r.length <= e) return r;
  const i = t.length, s = e - i, o = Math.ceil(s / 2), a = Math.floor(s / 2);
  return r.substring(9, o) + t + r.substring(r.length - a);
};
U = function(r) {
  const e = Array.isArray(r.label) ? r.label[0] : r.label, t = Array.isArray(r.label) ? r.label.join(" > ") : c(this, n, m).call(this, r.path, 50);
  return u`
			<uui-ref-node name=${e} detail=${E(t)} href=${r.path}>
				<uui-icon slot="icon" name="icon-link"></uui-icon>
			</uui-ref-node>
		`;
};
h.styles = [
  O,
  g`
			uui-ref-node {
				padding-left: 0;
				padding-right: 0;
			}
		`
];
v([
  H()
], h.prototype, "_history", 2);
h = v([
  S("umb-current-user-history-user-profile-app")
], h);
const D = h;
export {
  h as UmbCurrentUserHistoryUserProfileAppElement,
  D as default
};
//# sourceMappingURL=current-user-history-user-profile-app.element-BqV3tCoX.js.map

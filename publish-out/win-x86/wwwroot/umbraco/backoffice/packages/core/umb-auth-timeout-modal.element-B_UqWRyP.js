import { html as b, css as C, state as T, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { umbFocus as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as S } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as I } from "@umbraco-cms/backoffice/style";
var x = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, g = (e, t, i, s) => {
  for (var n = s > 1 ? void 0 : s ? $(t, i) : t, u = e.length - 1, c; u >= 0; u--)
    (c = e[u]) && (n = (s ? c(t, i, n) : c(n)) || n);
  return s && n && x(t, i, n), n;
}, d = (e, t, i) => t.has(e) || p("Cannot " + i), m = (e, t, i) => (d(e, t, "read from private field"), t.get(e)), _ = (e, t, i) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), k = (e, t, i, s) => (d(e, t, "write to private field"), t.set(e, i), i), l = (e, t, i) => (d(e, t, "access private method"), i), a, o, v, h, f;
let r = class extends S {
  constructor() {
    super(...arguments), _(this, o), this._remainingTimeInSeconds = 60, _(this, a);
  }
  connectedCallback() {
    super.connectedCallback(), l(this, o, v).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), m(this, a) && clearInterval(m(this, a));
  }
  render() {
    return b`
			<uui-dialog-layout class="uui-text" .headline=${this.localize.term("timeout_warningHeadline")}>
				<umb-localize key="timeout_warningText" .args=${[this._remainingTimeInSeconds]}>
					Your session is about to expire and you will be logged out in
					<strong>${this._remainingTimeInSeconds} seconds</strong>.
				</umb-localize>

				<uui-button
					slot="actions"
					look="secondary"
					label=${this.localize.term("timeout_warningLogoutAction")}
					@click=${l(this, o, h)}></uui-button>
				<uui-button
					slot="actions"
					id="confirm"
					color="positive"
					look="primary"
					label=${this.localize.term("timeout_warningContinueAction")}
					@click=${l(this, o, f)}
					${y()}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
v = function() {
  this._remainingTimeInSeconds = this.data?.remainingTimeInSeconds ?? 60, k(this, a, setInterval(() => {
    this._remainingTimeInSeconds > 0 ? this._remainingTimeInSeconds-- : (clearInterval(m(this, a)), l(this, o, h).call(this));
  }, 1e3));
};
h = function() {
  this.data?.onLogout?.(), this.modalContext?.submit();
};
f = function() {
  this.data?.onContinue?.(), this.modalContext?.submit();
};
r.styles = [
  I,
  C`
			uui-dialog-layout {
				max-inline-size: 60ch;
			}
		`
];
g([
  T()
], r.prototype, "_remainingTimeInSeconds", 2);
r = g([
  w("umb-auth-timeout-modal")
], r);
const U = r;
export {
  r as UmbAuthTimeoutModalElement,
  U as default
};
//# sourceMappingURL=umb-auth-timeout-modal.element-B_UqWRyP.js.map

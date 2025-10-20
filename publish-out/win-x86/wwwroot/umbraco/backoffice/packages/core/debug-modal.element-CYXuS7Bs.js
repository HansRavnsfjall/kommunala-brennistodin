import { html as u, css as c, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as h } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as p } from "@umbraco-cms/backoffice/style";
var _ = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, b = (e, t, r, l) => {
  for (var a = l > 1 ? void 0 : l ? _(t, r) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (a = i(a) || a);
  return a;
}, g = (e, t, r) => t.has(e) || m("Cannot " + r), f = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), y = (e, t, r) => (g(e, t, "access private method"), r), s, d;
let n = class extends h {
  constructor() {
    super(...arguments), f(this, s);
  }
  render() {
    return u`
			<umb-body-layout headline="Debug: Contexts">
				<div id="main">${this.data?.content}</div>
				<div slot="actions">
					<uui-button @click=${y(this, s, d)} label=${this.localize.term("general_close")}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
d = function() {
  this.modalContext?.reject();
};
n.styles = [
  p,
  c`
			summary {
				cursor: pointer;
			}

			details > details {
				margin-left: 1rem;
			}

			ul {
				margin-top: 0;
			}
		`
];
n = b([
  v("umb-context-debugger-modal")
], n);
export {
  n as default
};
//# sourceMappingURL=debug-modal.element-CYXuS7Bs.js.map

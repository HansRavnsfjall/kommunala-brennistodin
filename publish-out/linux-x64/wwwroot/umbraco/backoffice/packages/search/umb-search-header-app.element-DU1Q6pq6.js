import { U as u } from "./search-modal.token-CTxun4lq.js";
import { html as l, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { umbOpenModal as _ } from "@umbraco-cms/backoffice/modal";
import { UmbHeaderAppButtonElement as i } from "@umbraco-cms/backoffice/components";
var v = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, f = (e, t, r, c) => {
  for (var a = c > 1 ? void 0 : c ? v(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (a = p(a) || a);
  return a;
}, E = (e, t, r) => t.has(e) || m("Cannot " + r), y = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r) => (E(e, t, "access private method"), r), s, h;
let n = class extends i {
  constructor() {
    super(...arguments), y(this, s);
  }
  render() {
    return l`
			<uui-button @click=${A(this, s, h)} look="primary" label="search" compact>
				<uui-icon name="icon-search"></uui-icon>
			</uui-button>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
h = async function() {
  await _(this, u).catch(() => {
  });
};
n.styles = i.styles;
n = f([
  d("umb-search-header-app")
], n);
const k = n;
export {
  n as UmbSearchHeaderAppElement,
  k as default
};
//# sourceMappingURL=umb-search-header-app.element-DU1Q6pq6.js.map

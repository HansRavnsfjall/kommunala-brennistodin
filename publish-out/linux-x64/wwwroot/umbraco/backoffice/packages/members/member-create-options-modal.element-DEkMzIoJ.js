import { b as y } from "./paths-5w3AgLWB.js";
import { html as u, repeat as M, css as E, state as T, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as C } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as P } from "@umbraco-cms/backoffice/modal";
import { UmbMemberTypeTreeRepository as U } from "@umbraco-cms/backoffice/member-type";
var $ = Object.defineProperty, g = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, d = (e, t, o, i) => {
  for (var r = i > 1 ? void 0 : i ? g(t, o) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (r = (i ? l(t, o, r) : l(r)) || r);
  return i && r && $(t, o, r), r;
}, h = (e, t, o) => t.has(e) || _("Cannot " + o), w = (e, t, o) => (h(e, t, "read from private field"), o ? o.call(e) : t.get(e)), p = (e, t, o) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), c = (e, t, o) => (h(e, t, "access private method"), o), m, a, b, f, v;
const R = "umb-member-create-options-modal";
let n = class extends P {
  constructor() {
    super(...arguments), p(this, a), this._options = [], p(this, m, new U(this));
  }
  firstUpdated() {
    c(this, a, b).call(this);
  }
  render() {
    return u`
			<umb-body-layout headline=${this.localize.term("actions_create")}>
				${c(this, a, v).call(this)}
				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("general_cancel")}
					@click="${this._rejectModal}"></uui-button>
			</umb-body-layout>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
b = async function() {
  const { data: e } = await w(this, m).requestTreeRootItems({});
  e && (this._options = e.items.map((t) => ({
    label: t.name,
    unique: t.unique,
    icon: t.icon || ""
  })));
};
f = function(e, t) {
  e?.stopPropagation();
  const o = y.generateAbsolute({
    memberTypeUnique: t
  });
  history.pushState(null, "", o), this._submitModal();
};
v = function() {
  return u`
			<uui-box>
				${M(
    this._options,
    (e) => e.unique,
    (e) => u`
						<uui-ref-node
							.name=${this.localize.string(e.label)}
							@open=${(t) => c(this, a, f).call(this, t, e.unique)}>
							<umb-icon slot="icon" name=${e.icon || "icon-circle-dotted"}></umb-icon>
						</uui-ref-node>
					`
  )}
			</uui-box>
		`;
};
n.styles = [
  C,
  E`
			#blank {
				border-bottom: 1px solid var(--uui-color-border);
			}

			#edit-permissions {
				margin-top: var(--uui-size-6);
			}
		`
];
d([
  T()
], n.prototype, "_options", 2);
n = d([
  O(R)
], n);
export {
  n as UmbMemberCreateOptionsModalElement,
  n as element
};
//# sourceMappingURL=member-create-options-modal.element-DEkMzIoJ.js.map

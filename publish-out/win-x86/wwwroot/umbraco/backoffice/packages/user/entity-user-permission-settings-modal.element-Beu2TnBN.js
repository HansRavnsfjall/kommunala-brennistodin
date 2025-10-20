import { UmbTextStyles as h } from "@umbraco-cms/backoffice/style";
import { nothing as b, html as d, css as _, state as u, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as v } from "@umbraco-cms/backoffice/modal";
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, o = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? g(t, s) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (i = (n ? l(t, s, i) : l(i)) || i);
  return n && i && f(t, s, i), i;
}, w = (e, t, s) => t.has(e) || m("Cannot " + s), C = (e, t, s) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), E = (e, t, s) => (w(e, t, "access private method"), s), p, c;
let r = class extends v {
  constructor() {
    super(...arguments), C(this, p), this._headline = "Set permissions";
  }
  set data(e) {
    super.data = e, this._entityType = e?.entityType, this._headline = e?.headline ?? this._headline, this._preset = e?.preset;
  }
  connectedCallback() {
    super.connectedCallback(), this._preset?.allowedVerbs && !this.value?.allowedVerbs && this.updateValue({ allowedVerbs: this._preset.allowedVerbs });
  }
  render() {
    return d`
			<umb-body-layout headline=${this._headline}>
				<uui-box>
					${this._entityType ? d` <umb-input-entity-user-permission
								.entityType=${this._entityType}
								.allowedVerbs=${this.value?.allowedVerbs ?? []}
								@change=${E(this, p, c)}></umb-input-entity-user-permission>` : b}
				</uui-box>

				<uui-button slot="actions" id="cancel" label="Cancel" @click="${this._rejectModal}">Cancel</uui-button>
				<uui-button
					slot="actions"
					id="confirm"
					color="positive"
					look="primary"
					label="Confirm"
					@click=${this._submitModal}></uui-button>
			</umb-body-layout>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
c = function(e) {
  const t = e.target;
  this.updateValue({ allowedVerbs: t.allowedVerbs });
};
r.styles = [
  h,
  _`
			.permission-toggle {
				display: flex;
				align-items: center;
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-space-3) 0 var(--uui-size-space-4) 0;
			}

			.permission-meta {
				margin-left: var(--uui-size-space-4);
				line-height: 1.2em;
			}

			.permission-name {
				font-weight: bold;
			}
		`
];
o([
  u()
], r.prototype, "_headline", 2);
o([
  u()
], r.prototype, "_entityType", 2);
o([
  u()
], r.prototype, "_preset", 2);
r = o([
  y("umb-entity-user-permission-settings-modal")
], r);
const U = r;
export {
  r as UmbEntityUserPermissionSettingsModalElement,
  U as default
};
//# sourceMappingURL=entity-user-permission-settings-modal.element-Beu2TnBN.js.map

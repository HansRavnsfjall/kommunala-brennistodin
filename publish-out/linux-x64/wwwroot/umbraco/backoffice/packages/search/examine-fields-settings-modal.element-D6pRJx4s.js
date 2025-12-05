import { html as o, css as p, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as g } from "@umbraco-cms/backoffice/modal";
var f = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, x = (e, t, a, s) => {
  for (var n = s > 1 ? void 0 : s ? f(t, a) : t, i = e.length - 1, u; i >= 0; i--)
    (u = e[i]) && (n = u(n) || n);
  return n;
}, b = (e, t, a) => t.has(e) || m("Cannot " + a), y = (e, t, a) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), d = (e, t, a) => (b(e, t, "access private method"), a), l, c, h;
let r = class extends g {
  constructor() {
    super(...arguments), y(this, l);
  }
  render() {
    return o`<umb-body-layout headline=${this.localize.term("examineManagement_fields")}>
			<uui-scroll-container id="field-settings"> ${d(this, l, h).call(this)} </uui-scroll-container>
			<div slot="actions">
				<uui-button
					look="primary"
					label=${this.localize.term("general_close")}
					@click="${this._submitModal}"></uui-button>
			</div>
		</umb-body-layout>`;
  }
};
l = /* @__PURE__ */ new WeakSet();
c = function(e) {
  const t = { ...e, exposed: !e.exposed }, a = this.modalContext?.getValue().fields.map((s) => s.name === e.name ? t : s) ?? [];
  this.modalContext?.updateValue({ fields: a });
};
h = function() {
  if (this.value.fields.length)
    return o`<span>
			${Object.values(this.value.fields).map((e) => o`<uui-toggle
						name="${e.name}"
						label="${e.name}"
						.checked="${e.exposed}"
						@change="${() => d(this, l, c).call(this, e)}"></uui-toggle>
					<br />`)}
		</span>`;
};
r.styles = [
  _,
  p`
			:host {
				display: relative;
			}

			uui-scroll-container {
				overflow-y: scroll;
				max-height: 100%;
				min-height: 0;
				flex: 1;
			}
		`
];
r = x([
  v("umb-examine-fields-settings-modal")
], r);
const w = r;
export {
  r as UmbExamineFieldsSettingsModalElement,
  w as default
};
//# sourceMappingURL=examine-fields-settings-modal.element-D6pRJx4s.js.map

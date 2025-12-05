import { html as m, css as c, query as d, state as v, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as y } from "@umbraco-cms/backoffice/modal";
var f = Object.defineProperty, b = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, n = (t, e, a, l) => {
  for (var u = l > 1 ? void 0 : l ? b(e, a) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (u = (l ? o(e, a, u) : o(u)) || u);
  return l && u && f(e, a, u), u;
}, S = (t, e, a) => e.has(t) || h("Cannot " + a), g = (t, e, a) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), C = (t, e, a) => (S(t, e, "access private method"), a), s, p;
let i = class extends y {
  constructor() {
    super(...arguments), g(this, s), this._hasValue = !1;
  }
  _handleClose() {
    this.modalContext?.reject();
  }
  _handleSubmit() {
    this.data?.query && (this.value = { name: this._input.value, query: this.data.query }, this.modalContext?.submit());
  }
  render() {
    return m`
			<uui-dialog-layout headline="Save Search">
				<span>Enter a friendly name for your search query</span>
				<uui-form-layout-item>
					<uui-label slot="label">Query:</uui-label>
					<span>${this.data?.query}</span>
				</uui-form-layout-item>
				<uui-form-layout-item>
					<uui-label slot="label" for="input">Name:</uui-label>
					<uui-input label="Search name" id="input" @input=${C(this, s, p)}></uui-input>
				</uui-form-layout-item>

				<uui-button slot="actions" @click="${this._handleClose}" label="Close dialog">Close</uui-button>
				<uui-button
					.disabled=${!this._hasValue}
					slot="actions"
					look="primary"
					color="positive"
					label="Save search"
					@click="${this._handleSubmit}"
					>Save</uui-button
				>
			</uui-dialog-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
p = function(t) {
  const e = t.target;
  this._hasValue = e.value.length > 0;
};
i.styles = [
  c`
			uui-input {
				width: 100%;
			}
		`
];
n([
  d("uui-input")
], i.prototype, "_input", 2);
n([
  v()
], i.prototype, "_hasValue", 2);
i = n([
  _("umb-log-viewer-save-search-modal")
], i);
export {
  i as default
};
//# sourceMappingURL=log-viewer-search-input-modal.element-DMBMYwuM.js.map

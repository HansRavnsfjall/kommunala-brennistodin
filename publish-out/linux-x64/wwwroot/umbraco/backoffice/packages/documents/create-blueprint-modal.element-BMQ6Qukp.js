import { UmbDocumentDetailRepository as g } from "./document-detail.repository-DnC9zsqm.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "./manifests-BP7S9LPy.js";
import { html as v, css as U, state as f, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as M } from "@umbraco-cms/backoffice/modal";
var B = Object.defineProperty, D = Object.getOwnPropertyDescriptor, b = (t) => {
  throw TypeError(t);
}, c = (t, e, a, o) => {
  for (var n = o > 1 ? void 0 : o ? D(e, a) : e, u = t.length - 1, m; u >= 0; u--)
    (m = t[u]) && (n = (o ? m(e, a, n) : m(n)) || n);
  return o && n && B(e, a, n), n;
}, h = (t, e, a) => e.has(t) || b("Cannot " + a), _ = (t, e, a) => (h(t, e, "read from private field"), a ? a.call(t) : e.get(t)), p = (t, e, a) => e.has(t) ? b("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), x = (t, e, a, o) => (h(t, e, "write to private field"), e.set(t, a), a), s = (t, e, a) => (h(t, e, "access private method"), a), d, l, i, y, C, w, N;
let r = class extends M {
  constructor() {
    super(...arguments), p(this, i), p(this, d, new g(this)), p(this, l, ""), this._documentName = "", this._blueprintName = "";
  }
  firstUpdated() {
    x(this, l, this.data?.unique ?? ""), s(this, i, y).call(this);
  }
  render() {
    return v`
			<umb-body-layout headline="Create Content Template">
				${s(this, i, w).call(this)}
				<uui-button
					slot="actions"
					id="close"
					label=${this.localize.term("general_close")}
					@click="${s(this, i, N)}"></uui-button>
				<uui-button
					slot="actions"
					id="save"
					look="primary"
					color="positive"
					label=${this.localize.term("buttons_save")}
					@click="${s(this, i, C)}"></uui-button>
			</umb-body-layout>
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
y = async function() {
  const { data: t } = await _(this, d).requestByUnique(_(this, l));
  t && (this._documentName = t.variants[0].name, this._blueprintName = t.variants[0].name);
};
C = async function() {
  this.value = { name: this._blueprintName, parent: null }, this.modalContext?.submit();
};
w = function() {
  return v`<strong>Create a new Content Template from ${this._documentName}</strong>
			A Content Template is predefined content that an editor can select to use as the basis for creating new content .
			<uui-label for="name">Name</uui-label>
			<uui-input
				id="name"
				label="name"
				.value=${this._blueprintName}
				@input=${(t) => this._blueprintName = t.target.value}></uui-input>`;
};
N = function() {
  this.modalContext?.reject();
};
r.styles = [
  E,
  U`
			strong,
			uui-label,
			uui-input {
				width: 100%;
			}

			uui-label {
				margin-top: var(--uui-size-space-6);
			}
		`
];
c([
  f()
], r.prototype, "_documentName", 2);
c([
  f()
], r.prototype, "_blueprintName", 2);
r = c([
  $("umb-create-blueprint-modal")
], r);
const A = r;
export {
  r as UmbCreateBlueprintModalElement,
  A as default
};
//# sourceMappingURL=create-blueprint-modal.element-BMQ6Qukp.js.map

import { UmbDocumentDetailRepository as C } from "./document-detail.repository-CtE7HTwC.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "./manifests-BfVrApfB.js";
import { html as N, css as $, state as b, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as z } from "@umbraco-cms/backoffice/modal";
var g = Object.defineProperty, D = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, c = (t, e, a, n) => {
  for (var i = n > 1 ? void 0 : n ? D(e, a) : e, s = t.length - 1, u; s >= 0; s--)
    (u = t[s]) && (i = (n ? u(e, a, i) : u(i)) || i);
  return n && i && g(e, a, i), i;
}, d = (t, e, a) => e.has(t) || v("Cannot " + a), _ = (t, e, a) => (d(t, e, "read from private field"), a ? a.call(t) : e.get(t)), m = (t, e, a) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), E = (t, e, a, n) => (d(t, e, "write to private field"), e.set(t, a), a), p = (t, e, a) => (d(t, e, "access private method"), a), h, l, o, f, y, w;
let r = class extends z {
  constructor() {
    super(...arguments), m(this, o), m(this, h, new C(this)), m(this, l, ""), this._documentName = "", this._blueprintName = "";
  }
  firstUpdated() {
    E(this, l, this.data?.unique ?? ""), p(this, o, f).call(this);
  }
  render() {
    return N`
			<umb-body-layout headline=${this.localize.term("actions_createblueprint")}>
				<uui-box id="tree-box" headline=${this.localize.term("blueprints_createBlueprintFrom", this._documentName)}>
					<umb-localize key="blueprints_blueprintDescription"></umb-localize>
					<umb-property-layout label=${this.localize.term("general_name")} orientation="vertical">
						<div slot="editor">
							<uui-input
								id="name"
								label="name"
								.value=${this._blueprintName}
								@input=${(t) => this._blueprintName = t.target.value}></uui-input>
						</div>
					</umb-property-layout>
				</uui-box>
				<uui-button
					slot="actions"
					id="close"
					label=${this.localize.term("general_close")}
					@click="${p(this, o, w)}"></uui-button>
				<uui-button
					slot="actions"
					id="save"
					look="primary"
					color="positive"
					label=${this.localize.term("buttons_save")}
					@click="${p(this, o, y)}"></uui-button>
			</umb-body-layout>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
f = async function() {
  const { data: t } = await _(this, h).requestByUnique(_(this, l));
  t && (this._documentName = t.variants[0].name, this._blueprintName = t.variants[0].name);
};
y = async function() {
  this.value = { name: this._blueprintName, parent: null }, this.modalContext?.submit();
};
w = function() {
  this.modalContext?.reject();
};
r.styles = [
  x,
  $`
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
  b()
], r.prototype, "_documentName", 2);
c([
  b()
], r.prototype, "_blueprintName", 2);
r = c([
  U("umb-create-blueprint-modal")
], r);
const R = r;
export {
  r as UmbCreateBlueprintModalElement,
  R as default
};
//# sourceMappingURL=create-blueprint-modal.element-5V97z8Rc.js.map

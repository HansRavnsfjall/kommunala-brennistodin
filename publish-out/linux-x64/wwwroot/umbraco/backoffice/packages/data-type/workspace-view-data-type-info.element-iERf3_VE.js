import { d as _ } from "./constants-DE93IEgK.js";
import { UmbTextStyles as h } from "@umbraco-cms/backoffice/style";
import { html as u, css as v, state as c, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var g = Object.defineProperty, x = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, o = (e, t, s, r) => {
  for (var a = r > 1 ? void 0 : r ? x(t, s) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (a = (r ? p(t, s, a) : p(a)) || a);
  return r && a && g(t, s, a), a;
}, b = (e, t, s) => t.has(e) || d("Cannot " + s), w = (e, t, s) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), A = (e, t, s) => (b(e, t, "access private method"), s), l, m;
let i = class extends y {
  constructor() {
    super(), w(this, l), this._unique = "", this.consumeContext(_, (e) => {
      this._workspaceContext = e, this._observeDataType();
    });
  }
  _observeDataType() {
    this._workspaceContext && (this.observe(this._workspaceContext.unique, (e) => {
      this._unique = e;
    }), this.observe(this._workspaceContext.propertyEditorSchemaAlias, (e) => {
      this._schemaAlias = e;
    }), this.observe(this._workspaceContext.propertyEditorUiAlias, (e) => {
      this._uiAlias = e;
    }));
  }
  render() {
    return u`
			<div class="container">
				<umb-extension-slot id="workspace-info-apps" type="workspaceInfoApp"></umb-extension-slot>
			</div>
			<div class="container">${A(this, l, m).call(this)}</div>
		`;
  }
};
l = /* @__PURE__ */ new WeakSet();
m = function() {
  return u`
			<uui-box id="general-section" headline="General">
				<div class="general-item">
					<strong><umb-localize key="template_id">Id</umb-localize></strong>
					<span>${this._unique}</span>
				</div>
				<div class="general-item">
					<strong>Property Editor Schema Alias</strong>
					<span>${this._schemaAlias}</span>
				</div>
				<div class="general-item">
					<strong>Property Editor UI Alias</strong>
					<span>${this._uiAlias}</span>
				</div>
			</uui-box>
		`;
};
i.styles = [
  h,
  v`
			:host {
				display: grid;
				gap: var(--uui-size-layout-1);
				padding: var(--uui-size-layout-1);
				grid-template-columns: 1fr 350px;
			}

			.container {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-layout-1);
			}

			#general-section {
				display: flex;
				flex-direction: column;
			}

			.general-item {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-1);
			}

			.general-item:not(:last-child) {
				margin-bottom: var(--uui-size-space-6);
			}
		`
];
o([
  c()
], i.prototype, "_unique", 2);
o([
  c()
], i.prototype, "_schemaAlias", 2);
o([
  c()
], i.prototype, "_uiAlias", 2);
i = o([
  f("umb-workspace-view-data-type-info")
], i);
const D = i;
export {
  i as UmbWorkspaceViewDataTypeInfoElement,
  D as default
};
//# sourceMappingURL=workspace-view-data-type-info.element-iERf3_VE.js.map

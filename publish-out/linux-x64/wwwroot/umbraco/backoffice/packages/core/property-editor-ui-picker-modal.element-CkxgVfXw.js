import { html as l, repeat as m, css as P, state as h, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { fromCamelCase as U } from "@umbraco-cms/backoffice/utils";
import { umbExtensionsRegistry as k } from "@umbraco-cms/backoffice/extension-registry";
import { umbFocus as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as x } from "@umbraco-cms/backoffice/modal";
var I = Object.defineProperty, z = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, d = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? z(e, r) : e, c = t.length - 1, u; c >= 0; c--)
    (u = t[c]) && (a = (o ? u(e, r, a) : u(a)) || a);
  return o && a && I(e, r, a), a;
}, w = (t, e, r) => e.has(t) || f("Cannot " + r), M = (t, e, r) => e.has(t) ? f("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), s = (t, e, r) => (w(t, e, "access private method"), r), i, b, y, _, p, v, g, E;
let n = class extends x {
  constructor() {
    super(...arguments), M(this, i), this._groupedPropertyEditorUIs = [], this._propertyEditorUIs = [];
  }
  connectedCallback() {
    super.connectedCallback(), s(this, i, b).call(this);
  }
  render() {
    return l`
			<umb-body-layout headline=${this.localize.term("propertyEditorPicker_openPropertyEditorPicker")}>
				<uui-box>${s(this, i, v).call(this)} ${s(this, i, g).call(this)}</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
b = function() {
  this.observe(k.byType("propertyEditorUi"), (t) => {
    this._propertyEditorUIs = t.filter((e) => !!e.meta.propertyEditorSchemaAlias).sort((e, r) => e.meta.label.localeCompare(r.meta.label)), s(this, i, p).call(this, this._propertyEditorUIs);
  });
};
y = function(t) {
  this.value = { selection: [t.alias] }, this._submitModal();
};
_ = function(t) {
  const e = (t.target.value || "").toLowerCase(), r = e ? this._propertyEditorUIs.filter(
    (o) => o.name.toLowerCase().includes(e) || o.alias.toLowerCase().includes(e)
  ) : this._propertyEditorUIs;
  s(this, i, p).call(this, r);
};
p = function(t) {
  const e = Object.groupBy(
    t,
    (r) => U(r.meta.group)
  );
  this._groupedPropertyEditorUIs = Object.keys(e).sort((r, o) => r.localeCompare(o)).map((r) => ({ key: r, items: e[r] }));
};
v = function() {
  return l`
			<uui-input
				type="search"
				id="filter"
				@input=${s(this, i, _)}
				placeholder=${this.localize.term("placeholders_filter")}
				label=${this.localize.term("placeholders_filter")}
				${C()}>
				<uui-icon name="search" slot="prepend" id="filter-icon"></uui-icon>
			</uui-input>
		`;
};
g = function() {
  return l`
			${m(
    this._groupedPropertyEditorUIs,
    (t) => t.key,
    (t) => l`
					<h4>${t.key}</h4>
					${s(this, i, E).call(this, t.items)}
				`
  )}
		`;
};
E = function(t) {
  return l`
			<ul id="item-grid">
				${m(
    t,
    (e) => e.alias,
    (e) => l`
						<li class="item" ?selected=${this.value.selection.includes(e.alias)}>
							<button type="button" @click=${() => s(this, i, y).call(this, e)}>
								<umb-icon name=${e.meta.icon} class="icon"></umb-icon>
								${e.meta.label || e.name}
							</button>
						</li>
					`
  )}
			</ul>
		`;
};
n.styles = [
  P`
			#filter {
				width: 100%;
				margin-bottom: var(--uui-size-space-4);
			}

			#filter-icon {
				height: 100%;
				padding-left: var(--uui-size-space-2);
				display: flex;
				color: var(--uui-color-border);
			}

			#item-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
				margin: 0;
				padding: 0;
				grid-gap: var(--uui-size-space-4);
			}

			#item-grid .item {
				display: flex;
				align-items: flex-start;
				justify-content: center;
				list-style: none;
				height: 100%;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);
			}

			#item-grid .item:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
				cursor: pointer;
			}

			#item-grid .item[selected] button {
				background: var(--uui-color-selected);
				color: var(--uui-color-selected-contrast);
			}

			#item-grid .item button {
				background: none;
				border: none;
				cursor: pointer;
				padding: var(--uui-size-space-3);
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				font-size: 0.8rem;
				height: 100%;
				width: 100%;
				color: var(--uui-color-interactive);
				border-radius: var(--uui-border-radius);
			}

			#item-grid .item .icon {
				font-size: 2em;
				margin-bottom: var(--uui-size-space-2);
			}
		`
];
d([
  h()
], n.prototype, "_groupedPropertyEditorUIs", 2);
d([
  h()
], n.prototype, "_propertyEditorUIs", 2);
n = d([
  $("umb-property-editor-ui-picker-modal")
], n);
const A = n;
export {
  n as UmbPropertyEditorUIPickerModalElement,
  A as default
};
//# sourceMappingURL=property-editor-ui-picker-modal.element-CkxgVfXw.js.map

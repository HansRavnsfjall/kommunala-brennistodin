import { UmbDataTypeCollectionRepository as y } from "./data-type-collection.repository-8M3nG1By.js";
import { html as u, repeat as _, css as x, state as w, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as C } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
var T = Object.defineProperty, z = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, p = (t, e, i, r) => {
  for (var o = r > 1 ? void 0 : r ? z(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (o = (r ? c(e, i, o) : c(o)) || o);
  return r && o && T(e, i, o), o;
}, U = (t, e, i) => e.has(t) || d("Cannot " + i), $ = (t, e, i) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), n = (t, e, i) => (U(t, e, "access private method"), i), a, h, m, b, f, g, v;
let l = class extends C {
  constructor() {
    super(...arguments), $(this, a);
  }
  connectedCallback() {
    super.connectedCallback(), this.data && (this._propertyEditorUiAlias = this.data.propertyEditorUiAlias, n(this, a, h).call(this, this._propertyEditorUiAlias));
  }
  render() {
    return u`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectEditorConfiguration")}>
				<uui-box>${n(this, a, g).call(this)} ${n(this, a, v).call(this)}</uui-box>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${n(this, a, f)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
a = /* @__PURE__ */ new WeakSet();
h = async function(t) {
  if (!this.data) return;
  const i = await new y(this).requestCollection({
    skip: 0,
    take: 1e3,
    editorUiAlias: t
  });
  this.observe(i.asObservable(), (r) => {
    this._dataTypes = r.sort((o, s) => o.name.localeCompare(s.name));
  });
};
m = function(t) {
  t.unique && (this.value = { dataTypeId: t.unique }, this.modalContext?.submit());
};
b = function() {
  this.value = { createNewWithPropertyEditorUiAlias: this._propertyEditorUiAlias }, this.modalContext?.submit();
};
f = function() {
  this.modalContext?.reject();
};
g = function() {
  if (this._dataTypes?.length)
    return u`
			<ul id="item-grid">
				${_(
      this._dataTypes,
      (t) => t.unique,
      (t) => u`
						<li class="item">
							<uui-button label=${t.name} @click=${() => n(this, a, m).call(this, t)}>
								<div class="item-content">
									<umb-icon name=${t.icon ?? "icon-circle-dotted"} class="icon"></umb-icon>
									${t.name}
								</div>
							</uui-button>
						</li>
					`
    )}
			</ul>
		`;
};
v = function() {
  return u`
			<uui-button id="create-button" look="placeholder" @click=${n(this, a, b)}>
				<div class="content">
					<uui-icon name="icon-add" class="icon"></uui-icon>
					<umb-localize key="contentTypeEditor_availableEditors">Create new</umb-localize>
				</div>
			</uui-button>
		`;
};
l.styles = [
  E,
  x`
			uui-box {
				min-height: 100%;
			}
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
				grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
				margin: 0;
				padding: 0;
			}

			#item-grid:not(:last-child) {
				border-bottom: 1px solid var(--uui-color-divider);
				padding-bottom: var(--uui-size-space-5);
			}

			.item {
				list-style: none;
				height: 100%;
				width: 100%;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);
				box-sizing: border-box;
				color: var(--uui-color-interactive);
			}

			.item:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
				cursor: pointer;
			}

			.item uui-button {
				--uui-button-padding-left-factor: 0;
				--uui-button-padding-right-factor: 0;
				--uui-button-padding-top-factor: 0;
				--uui-button-padding-bottom-factor: 0;
				width: 100%;
				height: 100%;
			}

			.item .item-content {
				text-align: center;
				box-sizing: border-box;

				padding: var(--uui-size-space-2);

				display: grid;
				grid-template-rows: 40px 1fr;
				height: 100%;
				width: 100%;
				word-break: break-word;
			}
			.icon {
				font-size: 2em;
				margin: auto;
			}

			#create-button {
				max-width: 100px;
				--uui-button-padding-left-factor: 0;
				--uui-button-padding-right-factor: 0;
				--uui-button-padding-top-factor: 0;
				--uui-button-padding-bottom-factor: 0;
				width: 100%;
				height: 100%;
			}
			#create-button .content {
				text-align: center;
				box-sizing: border-box;

				padding: var(--uui-size-space-2);

				display: grid;
				grid-template-rows: 40px 1fr;
				height: 100%;
				width: 100%;
			}
			#create-button:not(:first-child) {
				margin-top: var(--uui-size-layout-1);
			}
		`
];
p([
  w()
], l.prototype, "_dataTypes", 2);
l = p([
  k("umb-data-type-picker-flow-data-type-picker-modal")
], l);
const M = l;
export {
  l as UmbDataTypePickerFlowDataTypePickerModalElement,
  M as default
};
//# sourceMappingURL=data-type-picker-flow-data-type-picker-modal.element-CEO-g4oi.js.map

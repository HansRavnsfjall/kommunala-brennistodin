import { repeat as S, html as o, css as q, query as P, state as m, property as O, customElement as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { generateAlias as w } from "@umbraco-cms/backoffice/utils";
import { UmbSorterController as V } from "@umbraco-cms/backoffice/sorter";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
var L = Object.defineProperty, F = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, c = (e, t, i, a) => {
  for (var l = a > 1 ? void 0 : a ? F(t, i) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (l = (a ? p(t, i, l) : p(l)) || l);
  return a && l && L(t, i, l), l;
}, g = (e, t, i) => t.has(e) || $("Cannot " + i), x = (e, t, i) => (g(e, t, "read from private field"), i ? i.call(e) : t.get(e)), h = (e, t, i) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), H = (e, t, i, a) => (g(e, t, "write to private field"), t.set(e, i), i), u = (e, t, i) => (g(e, t, "access private method"), i), d, f, s, E, A, I, U, v, k;
let r = class extends M {
  constructor() {
    super(...arguments), h(this, s), this._value = [], this._isCreating = !1, this.editCropAlias = "", h(this, d, ""), h(this, f, new V(this, {
      getUniqueOfElement: (e) => e.dataset.alias,
      getUniqueOfModel: (e) => e.alias,
      identifier: "Umb.SorterIdentifier.ImageCrops",
      itemSelector: ".crop",
      containerSelector: ".crops",
      onChange: ({ model: e }) => {
        const t = this._value;
        this._value = e, this.requestUpdate("_value", t), this.dispatchEvent(new b());
      }
    }));
  }
  set value(e) {
    this._value = e ?? [], x(this, f).setModel(this.value);
  }
  get value() {
    return this._value;
  }
  render() {
    return o`
			<uui-ref-list class="crops">
				${S(
      this.value,
      (e) => e.alias,
      (e) => o`
						${this.editCropAlias === e.alias ? o`<div class="crop-form">${u(this, s, v).call(this, e)}</div>` : o`
									<uui-ref-node
										class="crop"
										data-alias="${e.alias}"
										detail="${e.width} x ${e.height}px"
										name="${e.label} (${e.alias})">
										<uui-icon slot="icon" name="icon-crop"></uui-icon>
										<uui-action-bar slot="actions">
											<uui-button
												label=${this.localize.term("general_edit")}
												data-mark="action:crop-edit"
												@click=${() => u(this, s, A).call(this, e)}></uui-button>
											<uui-button
												label=${this.localize.term("general_remove")}
												data-mark="action:crop-remove"
												@click=${() => u(this, s, E).call(this, e.alias)}></uui-button>
										</uui-action-bar>
									</uui-ref-node>
								`}
					`
    )}
			</uui-ref-list>
			${!this._isCreating && !this.editCropAlias ? o`<uui-button
						id="create"
						data-mark="action:crop-create"
						look="placeholder"
						@click=${() => this._isCreating = !0}
						label=${this.localize.term("general_create")}></uui-button>` : ""}
			${this._isCreating ? u(this, s, v).call(this) : ""}
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
E = function(e) {
  this.value = [...this.value.filter((t) => t.alias !== e)], this.dispatchEvent(new b());
};
A = function(e) {
  this.editCropAlias = e.alias, this._isCreating = !1;
};
I = function() {
  this.editCropAlias = "", this._isCreating = !1;
};
U = function(e) {
  e.preventDefault();
  const t = e.target;
  if (!t || !t.checkValidity()) return;
  const i = new FormData(t), a = i.get("label"), l = i.get("alias"), n = i.get("width"), p = i.get("height");
  if (!a || !l || !n || !p) return;
  const _ = {
    label: a,
    alias: l,
    width: parseInt(n),
    height: parseInt(p)
  };
  if (this.editCropAlias) {
    const y = this.value.findIndex((z) => z.alias === this.editCropAlias);
    if (y === -1) return;
    const C = [...this.value];
    C[y] = _, this.value = [...C], this.editCropAlias = "";
  } else
    this.value = [...this.value, _];
  this.dispatchEvent(new b()), t.reset(), this._labelInput?.focus(), this._isCreating = !1;
};
v = function(e) {
  return o`
			<uui-form>
				<form @submit=${u(this, s, U)}>
					<div class="input">
						<uui-label for="label">Label</uui-label>
						<uui-input
							@input=${u(this, s, k)}
							label="Label"
							id="label"
							name="label"
							type="text"
							required
							.value=${e?.label ?? ""}></uui-input>
					</div>
					<div class="input">
						<uui-label for="alias">Alias</uui-label>
						<uui-input
							label="Alias"
							id="alias"
							name="alias"
							type="text"
							autocomplete="false"
							required
							.value=${e?.alias ?? ""}></uui-input>
					</div>
					<div class="input">
						<uui-label for="width">Width</uui-label>
						<uui-input
							label="Width"
							id="width"
							name="width"
							type="number"
							autocomplete="false"
							required
							.value=${e?.width ?? ""}
							min="0">
							<span class="append" slot="append">px</span>
						</uui-input>
					</div>
					<div class="input">
						<uui-label for="height">Height</uui-label>
						<uui-input
							label="Height"
							id="height"
							name="height"
							type="number"
							autocomplete="false"
							required
							.value=${e?.height ?? ""}
							min="0">
							<span class="append" slot="append">px</span>
						</uui-input>
					</div>
					<div class="action-wrapper">
						${this.editCropAlias ? o`<uui-button @click=${u(this, s, I)}>Cancel</uui-button>
									<uui-button look="secondary" type="submit" label=${this.localize.term("general_edit")}></uui-button>` : o`<uui-button
									look="secondary"
									type="submit"
									label=${this.localize.term("general_create")}></uui-button>`}
					</div>
				</form>
			</uui-form>
		`;
};
k = function() {
  const e = this._labelInput.value ?? "", t = w(e), i = this.shadowRoot?.querySelector("#alias");
  if (!i) return;
  const a = w(x(this, d));
  (i.value === a || !i.value) && (i.value = t), H(this, d, e);
};
r.styles = [
  D,
  q`
			:host {
				display: block;
			}
			.crops {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-2);
				margin-top: var(--uui-size-space-4);
			}
			.crop {
				display: flex;
				align-items: center;
			}
			form {
				display: flex;
				gap: var(--uui-size-space-2);
				flex-wrap: wrap;
			}
			.input {
				display: flex;
				flex-direction: column;
				flex: 1 1 200px;
			}
			uui-input[type='number'] {
				text-align: right;
			}
			.append {
				padding-inline: var(--uui-size-space-4);
				background: var(--uui-color-disabled);
				border-left: 1px solid var(--uui-color-border);
				color: var(--uui-color-disabled-contrast);
				font-size: var(--uui-type-small-size);
				display: flex;
				align-items: center;
				height: 100%;
			}
			.action-wrapper {
				display: flex;
				align-items: flex-end;
			}
			#create {
				width: 100%;
			}
		`
];
c([
  P("#label")
], r.prototype, "_labelInput", 2);
c([
  m()
], r.prototype, "_value", 2);
c([
  m()
], r.prototype, "_isCreating", 2);
c([
  O({ type: Array })
], r.prototype, "value", 1);
c([
  m()
], r.prototype, "editCropAlias", 2);
r = c([
  W("umb-property-editor-ui-image-crops")
], r);
const N = r;
export {
  r as UmbPropertyEditorUIImageCropsElement,
  N as default
};
//# sourceMappingURL=property-editor-ui-image-crops.element-CdcyV4VN.js.map

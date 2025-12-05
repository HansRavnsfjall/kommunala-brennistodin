import { repeat as q, html as c, css as k, query as P, state as w, property as O, customElement as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { generateAlias as _ } from "@umbraco-cms/backoffice/utils";
import { UmbSorterController as V } from "@umbraco-cms/backoffice/sorter";
import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
var L = Object.defineProperty, R = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, p = (e, t, i, a) => {
  for (var l = a > 1 ? void 0 : a ? R(t, i) : t, s = e.length - 1, u; s >= 0; s--)
    (u = e[s]) && (l = (a ? u(t, i, l) : u(l)) || l);
  return a && l && L(t, i, l), l;
}, m = (e, t, i) => t.has(e) || x("Cannot " + i), C = (e, t, i) => (m(e, t, "read from private field"), i ? i.call(e) : t.get(e)), h = (e, t, i) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), H = (e, t, i, a) => (m(e, t, "write to private field"), t.set(e, i), i), n = (e, t, i) => (m(e, t, "access private method"), i), d, v, r, S, E, A, I, $, U;
let o = class extends M {
  constructor() {
    super(...arguments), h(this, r), this._value = [], this.editCropAlias = "", h(this, d, ""), h(this, v, new V(this, {
      getUniqueOfElement: (e) => e.dataset.alias,
      getUniqueOfModel: (e) => e.alias,
      identifier: "Umb.SorterIdentifier.ImageCrops",
      itemSelector: ".crop",
      containerSelector: ".crops",
      onChange: ({ model: e }) => {
        const t = this._value;
        this._value = e, this.requestUpdate("_value", t), this.dispatchEvent(new f());
      }
    }));
  }
  set value(e) {
    this._value = e ?? [], C(this, v).setModel(this.value);
  }
  get value() {
    return this._value;
  }
  render() {
    return this.value || (this.value = []), c`
			<uui-form>
				<form @submit=${n(this, r, I)}>
					<div class="input">
						<uui-label for="label">Label</uui-label>
						<uui-input
							@input=${n(this, r, U)}
							label="Label"
							id="label"
							name="label"
							type="text"
							autocomplete="false"
							value=""></uui-input>
					</div>
					<div class="input">
						<uui-label for="alias">Alias</uui-label>
						<uui-input label="Alias" id="alias" name="alias" type="text" autocomplete="false" value=""></uui-input>
					</div>
					<div class="input">
						<uui-label for="width">Width</uui-label>
						<uui-input label="Width" id="width" name="width" type="number" autocomplete="false" value="" min="0">
							<span class="append" slot="append">px</span>
						</uui-input>
					</div>
					<div class="input">
						<uui-label for="height">Height</uui-label>
						<uui-input label="Height" id="height" name="height" type="number" autocomplete="false" value="" min="0">
							<span class="append" slot="append">px</span>
						</uui-input>
					</div>
					<div class="action-wrapper">${n(this, r, $).call(this)}</div>
				</form>
			</uui-form>
			<div class="crops">
				${q(
      this.value,
      (e) => e.alias,
      (e) => c`
						<div class="crop" data-alias="${e.alias}">
							<uui-icon name="icon-grip" class="crop-drag"></uui-icon>
							<span><strong>${e.label}</strong> <em>(${e.alias})</em></span>
							<span class="crop-size">(${e.width} x ${e.height}px)</span>
							<div class="crop-actions">
								<uui-button
									label=${this.localize.term("general_edit")}
									color="default"
									@click=${() => n(this, r, E).call(this, e)}></uui-button>
								<uui-button
									label=${this.localize.term("general_remove")}
									color="danger"
									@click=${() => n(this, r, S).call(this, e.alias)}></uui-button>
							</div>
						</div>
					`
    )}
			</div>
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
S = function(e) {
  this.value = [...this.value.filter((t) => t.alias !== e)], this.dispatchEvent(new f());
};
E = function(e) {
  this.editCropAlias = e.alias;
  const t = this.shadowRoot?.querySelector("form");
  if (!t) return;
  const i = t.querySelector("#label"), a = t.querySelector("#alias"), l = t.querySelector("#width"), s = t.querySelector("#height");
  !a || !l || !s || (i.value = e.label, a.value = e.alias, l.value = e.width.toString(), s.value = e.height.toString());
};
A = function() {
  this.editCropAlias = "";
};
I = function(e) {
  e.preventDefault();
  const t = e.target;
  if (!t || !t.checkValidity()) return;
  const i = new FormData(t), a = i.get("label"), l = i.get("alias"), s = i.get("width"), u = i.get("height");
  if (!a || !l || !s || !u) return;
  this.value || (this.value = []);
  const b = {
    label: a,
    alias: l,
    width: parseInt(s),
    height: parseInt(u)
  };
  if (this.editCropAlias) {
    const g = this.value.findIndex((z) => z.alias === this.editCropAlias);
    if (g === -1) return;
    const y = [...this.value];
    y[g] = b, this.value = [...y], this.editCropAlias = "";
  } else
    this.value = [...this.value, b];
  this.dispatchEvent(new f()), t.reset(), this._labelInput.focus();
};
$ = function() {
  return this.editCropAlias ? c`<uui-button @click=${n(this, r, A)}>Cancel</uui-button>
					<uui-button look="secondary" type="submit" label="Save"></uui-button>` : c`<uui-button look="secondary" type="submit" label="Add"></uui-button>`;
};
U = function() {
  const e = this._labelInput.value ?? "", t = _(e), i = this.shadowRoot?.querySelector("#alias");
  if (!i) return;
  const a = _(C(this, d));
  (i.value === a || !i.value) && (i.value = t), H(this, d, e);
};
o.styles = [
  D,
  k`
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
				background: var(--uui-color-background);
			}
			.crop-drag {
				cursor: grab;
				padding-inline: var(--uui-size-space-4);
				color: var(--uui-color-disabled-contrast);
				font-weight: bold;
			}

			.crop-drag:active {
				cursor: grabbing;
			}

			.crop-size {
				font-size: 0.9em;
				padding-inline: var(--uui-size-space-4);
			}
			.crop-actions {
				display: flex;
				margin-left: auto;
			}
			form {
				display: flex;
				gap: var(--uui-size-space-2);
			}
			.input {
				display: flex;
				flex-direction: column;
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
			}
			.action-wrapper {
				display: flex;
				align-items: flex-end;
			}
		`
];
p([
  P("#label")
], o.prototype, "_labelInput", 2);
p([
  w()
], o.prototype, "_value", 2);
p([
  O({ type: Array })
], o.prototype, "value", 1);
p([
  w()
], o.prototype, "editCropAlias", 2);
o = p([
  W("umb-property-editor-ui-image-crops")
], o);
const N = o;
export {
  o as UmbPropertyEditorUIImageCropsElement,
  N as default
};
//# sourceMappingURL=property-editor-ui-image-crops.element-BRXgzNWw.js.map

import { html as v, css as w, property as n, customElement as x, state as z } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as U } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbTemplateItemRepository as A } from "./template-item.repository-CVFneNIa.js";
import { U as D } from "./query-builder-modal.token-wTFAMSqZ.js";
import { umbOpenModal as R } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_MODAL as I } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as W } from "@umbraco-cms/backoffice/router";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
var B = Object.defineProperty, F = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, f = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? F(t, i) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (s = (a ? u(t, i, s) : u(s)) || s);
  return a && s && B(t, i, s), s;
}, L = (e, t, i) => t.has(e) || $("Cannot " + i), K = (e, t, i) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), b = (e, t, i) => (L(e, t, "access private method"), i), m, T, q;
let c = class extends U(E, "") {
  constructor() {
    super(...arguments), K(this, m), this.name = "", this.default = !1, this._id = "";
  }
  set id(e) {
    this._id = e, super.value = e;
  }
  get id() {
    return this._id;
  }
  getFormElement() {
  }
  render() {
    return v`<div id="card">
			<button id="open-part" aria-label="Open ${this.name}" @click="${b(this, m, q)}">
				<uui-icon class="logo" name="icon-document-html"></uui-icon>
				<strong>${this.name.length ? this.name : "Untitled template"}</strong>
			</button>
			<uui-button
				id="bottom"
				label="${this.localize.term("settings_defaulttemplate")}"
				?disabled="${this.default}"
				@click="${b(this, m, T)}">
				(${this.localize.term(this.default ? "settings_defaulttemplate" : "grid_setAsDefault")})
			</uui-button>
			<slot name="actions"></slot>
		</div>`;
  }
};
m = /* @__PURE__ */ new WeakSet();
T = function(e) {
  e.preventDefault(), e.stopPropagation(), this.dispatchEvent(new CustomEvent("change", { bubbles: !1, composed: !0 }));
};
q = function(e) {
  e.preventDefault(), e.stopPropagation(), this.dispatchEvent(new CustomEvent("open", { bubbles: !1, composed: !0 }));
};
c.styles = [
  w`
			:host {
				box-sizing: border-box;
				display: contents;
				position: relative;

				height: 100%;
				border: 1px solid red;
				margin: auto;
			}

			#card {
				box-sizing: border-box;
				width: 100%;
				max-width: 180px;
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: stretch;
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-divider-emphasis);
				background-color: var(--uui-color-background);
				padding: var(--uui-size-4);
			}

			#bottom {
				margin-top: auto;
			}

			slot[name='actions'] {
				position: absolute;
				top: var(--uui-size-4);
				right: var(--uui-size-4);
				display: flex;
				justify-content: right;

				opacity: 0;
				transition: opacity 120ms;
			}

			:host(:focus) slot[name='actions'],
			:host(:focus-within) slot[name='actions'],
			:host(:hover) slot[name='actions'] {
				opacity: 1;
			}

			#open-part {
				border: none;
				outline: none;
				background: none;
				text-align: center;
				display: flex;
				flex-direction: column;
				font-weight: 700;
				align-items: center;
				cursor: pointer;
				flex-grow: 1;
				font-family: inherit;
			}

			#open-part,
			#card {
				gap: var(--uui-size-space-2);
			}

			#open-part strong {
				flex-grow: 1;
				display: flex;
				align-items: center;
			}

			:host([disabled]) #open-part {
				pointer-events: none;
			}

			#open-part:focus-visible,
			#open-part:focus-visible uui-icon,
			#open-part:hover,
			#open-part:hover uui-icon {
				text-decoration: underline;
				color: var(--uui-color-interactive-emphasis);
			}

			#open-part uui-icon {
				font-size: var(--uui-size-20);
				color: var(--uui-color-divider-emphasis);
			}
		`
];
f([
  n({ type: String })
], c.prototype, "name", 2);
f([
  n({ type: Boolean, reflect: !0 })
], c.prototype, "default", 2);
f([
  n({ type: String })
], c.prototype, "id", 1);
c = f([
  x("umb-template-card")
], c);
var N = Object.defineProperty, G = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, r = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? G(t, i) : t, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (s = (a ? u(t, i, s) : u(s)) || s);
  return a && s && N(t, i, s), s;
}, g = (e, t, i) => t.has(e) || C("Cannot " + i), V = (e, t, i) => (g(e, t, "read from private field"), t.get(e)), y = (e, t, i) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), H = (e, t, i, a) => (g(e, t, "write to private field"), t.set(e, i), i), d = (e, t, i) => (g(e, t, "access private method"), i), h, p, P, M, k, O, S;
let o = class extends U(E, "") {
  constructor() {
    super(), y(this, p), this.minMessage = "This field needs more items", this.maxMessage = "This field exceeds the allowed amount of items", this._selection = [], this._defaultUnique = "", this._templateItemRepository = new A(this), this._pickedTemplates = [], y(this, h, ""), new W(this, I).addAdditionalPath("template").onSetup(() => ({ data: { entityType: "template", preset: {} } })).observeRouteBuilder((e) => {
      H(this, h, e({}));
    });
  }
  set selection(e) {
    this._selection = e ?? [], d(this, p, P).call(this);
  }
  get selection() {
    return this._selection;
  }
  set defaultUnique(e) {
    this._defaultUnique = e, super.value = e;
  }
  get defaultUnique() {
    return this._defaultUnique;
  }
  getFormElement() {
    return this;
  }
  render() {
    return v`
			${this._pickedTemplates.map(
      (e) => v`
					<umb-template-card
						.id=${e.unique}
						.name=${e.name}
						@change=${d(this, p, k)}
						@open=${() => window.history.pushState({}, "", V(this, h) + "edit/" + e.unique)}
						?default=${e.unique === this.defaultUnique}>
						<uui-button
							slot="actions"
							compact
							label=${this.localize.term("general_remove") + " " + e.name}
							@click=${() => d(this, p, S).call(this, e.unique ?? "")}>
							<uui-icon name="icon-trash"></uui-icon>
						</uui-button>
					</umb-template-card>
				`
    )}
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${d(this, p, O)}></uui-button>
		`;
  }
};
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
P = async function() {
  this.observe(
    (await this._templateItemRepository?.requestItems(this._selection))?.asObservable?.(),
    (e) => {
      const t = this._pickedTemplates;
      this._pickedTemplates = e ?? [], this.requestUpdate("_pickedTemplates", t);
    },
    "_observeTemplates"
  );
};
M = function(e) {
  this.selection = [...this.selection ?? [], ...e], !this.defaultUnique && this.selection.length && (this.defaultUnique = this.selection[0]), this.dispatchEvent(new _());
};
k = function(e) {
  e.stopPropagation();
  const t = e.target.value;
  this.defaultUnique = t, this.dispatchEvent(new _());
};
O = async function() {
  const e = await R(this, D, {
    data: {
      multiple: !0,
      pickableFilter: (i) => i.unique !== null && !this._selection.includes(i.unique)
    }
  }).catch(() => {
  });
  if (!e?.selection) return;
  const t = e.selection.filter((i) => i !== null);
  t.length && d(this, p, M).call(this, t);
};
S = function(e) {
  this.selection = this._selection.filter((t) => t !== e), e === this.defaultUnique && (this.selection.length ? this.defaultUnique = this.selection[0] : this.defaultUnique = ""), this.dispatchEvent(new _());
};
o.styles = [
  w`
			:host {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-template-rows: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}
		`
];
r([
  n({ type: Number })
], o.prototype, "min", 2);
r([
  n({ type: String, attribute: "min-message" })
], o.prototype, "minMessage", 2);
r([
  n({ type: Number })
], o.prototype, "max", 2);
r([
  n({ type: String, attribute: "min-message" })
], o.prototype, "maxMessage", 2);
r([
  n({ type: Array })
], o.prototype, "selection", 1);
r([
  n({ type: String })
], o.prototype, "defaultUnique", 1);
r([
  z()
], o.prototype, "_pickedTemplates", 2);
o = r([
  x("umb-input-template")
], o);
export {
  c as U,
  o as a
};
//# sourceMappingURL=input-template.element-PJjhpawg.js.map

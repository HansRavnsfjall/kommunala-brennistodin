import { html as x, css as M, property as o, customElement as k, state as L } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as P } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { UmbTemplateItemRepository as G } from "./template-item.repository-BhoNWIA3.js";
import { U as K } from "./query-builder-modal.token-wTFAMSqZ.js";
import { umbOpenModal as N } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_MODAL as V } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as H } from "@umbraco-cms/backoffice/router";
import { UmbChangeEvent as U } from "@umbraco-cms/backoffice/event";
var J = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, O = (e) => {
  throw TypeError(e);
}, y = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Q(t, i) : t, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (a = (s ? p(t, i, a) : p(a)) || a);
  return s && a && J(t, i, a), a;
}, $ = (e, t, i) => t.has(e) || O("Cannot " + i), X = (e, t, i) => ($(e, t, "read from private field"), i ? i.call(e) : t.get(e)), q = (e, t, i) => t.has(e) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Y = (e, t, i, s) => ($(e, t, "write to private field"), t.set(e, i), i), C = (e, t, i) => ($(e, t, "access private method"), i), v, _, z, W;
let h = class extends P(S, "") {
  constructor() {
    super(...arguments), q(this, _), this.name = "", this.default = !1, q(this, v, "");
  }
  set id(e) {
    Y(this, v, e), super.value = e;
  }
  get id() {
    return X(this, v);
  }
  getFormElement() {
  }
  render() {
    return x`<div id="card">
			<button id="open-part" aria-label="Open ${this.name}" @click="${C(this, _, W)}">
				<uui-icon class="logo" name="icon-document-html"></uui-icon>
				<strong>${this.name.length ? this.name : "Untitled template"}</strong>
			</button>
			<uui-button
				id="bottom"
				label="${this.localize.term("settings_defaulttemplate")}"
				?disabled="${this.default}"
				@click="${C(this, _, z)}">
				(${this.localize.term(this.default ? "settings_defaulttemplate" : "grid_setAsDefault")})
			</uui-button>
			<slot name="actions"></slot>
		</div>`;
  }
};
v = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakSet();
z = function(e) {
  e.preventDefault(), e.stopPropagation(), this.dispatchEvent(new CustomEvent("change", { bubbles: !1, composed: !0 }));
};
W = function(e) {
  e.preventDefault(), e.stopPropagation(), this.dispatchEvent(new CustomEvent("open", { bubbles: !1, composed: !0 }));
};
h.styles = [
  M`
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
y([
  o({ type: String })
], h.prototype, "name", 2);
y([
  o({ type: Boolean, reflect: !0 })
], h.prototype, "default", 2);
y([
  o({ type: String })
], h.prototype, "id", 1);
h = y([
  k("umb-template-card")
], h);
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, r = (e, t, i, s) => {
  for (var a = s > 1 ? void 0 : s ? j(t, i) : t, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (a = (s ? p(t, i, a) : p(a)) || a);
  return s && a && Z(t, i, a), a;
}, E = (e, t, i) => t.has(e) || A("Cannot " + i), c = (e, t, i) => (E(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? A("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), w = (e, t, i, s) => (E(e, t, "write to private field"), t.set(e, i), i), f = (e, t, i) => (E(e, t, "access private method"), i), d, g, T, b, u, D, R, I, B, F;
let n = class extends P(S, "") {
  constructor() {
    super(), m(this, u), this.minMessage = "This field needs more items", this.maxMessage = "This field exceeds the allowed amount of items", m(this, d, []), m(this, g, ""), this._pickedTemplates = [], m(this, T, new G(this)), m(this, b, ""), new H(this, V).addAdditionalPath("template").onSetup(() => ({ data: { entityType: "template", preset: {} } })).observeRouteBuilder((e) => {
      w(this, b, e({}));
    });
  }
  set selection(e) {
    w(this, d, e ?? []), f(this, u, D).call(this);
  }
  get selection() {
    return c(this, d);
  }
  set defaultUnique(e) {
    w(this, g, e), super.value = e;
  }
  get defaultUnique() {
    return c(this, g);
  }
  getFormElement() {
  }
  render() {
    return x`
			${this._pickedTemplates.map(
      (e) => x`
					<umb-template-card
						.id=${e.unique}
						.name=${e.name}
						@change=${f(this, u, I)}
						@open=${() => window.history.pushState({}, "", c(this, b) + "edit/" + e.unique)}
						?default=${e.unique === this.defaultUnique}>
						<uui-button
							slot="actions"
							compact
							label=${this.localize.term("general_remove") + " " + e.name}
							@click=${() => f(this, u, F).call(this, e.unique ?? "")}>
							<uui-icon name="icon-trash"></uui-icon>
						</uui-button>
					</umb-template-card>
				`
    )}
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${f(this, u, B)}></uui-button>
		`;
  }
};
d = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
D = async function() {
  this.observe(
    (await c(this, T)?.requestItems(c(this, d)))?.asObservable?.(),
    (e) => {
      const t = this._pickedTemplates;
      this._pickedTemplates = e ?? [], this.requestUpdate("_pickedTemplates", t);
    },
    "_observeTemplates"
  );
};
R = function(e) {
  this.selection = [...this.selection ?? [], ...e], !this.defaultUnique && this.selection.length && (this.defaultUnique = this.selection[0]), this.dispatchEvent(new U());
};
I = function(e) {
  e.stopPropagation();
  const t = e.target.value;
  this.defaultUnique = t, this.dispatchEvent(new U());
};
B = async function() {
  const e = await N(this, K, {
    data: {
      multiple: !0,
      pickableFilter: (i) => i.unique !== null && !c(this, d).includes(i.unique)
    }
  }).catch(() => {
  });
  if (!e?.selection) return;
  const t = e.selection.filter((i) => i !== null);
  t.length && f(this, u, R).call(this, t);
};
F = function(e) {
  this.selection = c(this, d).filter((t) => t !== e), e === this.defaultUnique && (this.selection.length ? this.defaultUnique = this.selection[0] : this.defaultUnique = ""), this.dispatchEvent(new U());
};
n.styles = [
  M`
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
  o({ type: Number })
], n.prototype, "min", 2);
r([
  o({ type: String, attribute: "min-message" })
], n.prototype, "minMessage", 2);
r([
  o({ type: Number })
], n.prototype, "max", 2);
r([
  o({ type: String, attribute: "min-message" })
], n.prototype, "maxMessage", 2);
r([
  o({ type: Array })
], n.prototype, "selection", 1);
r([
  o({ type: String })
], n.prototype, "defaultUnique", 1);
r([
  L()
], n.prototype, "_pickedTemplates", 2);
n = r([
  k("umb-input-template")
], n);
export {
  h as U,
  n as a
};
//# sourceMappingURL=input-template.element-uGKj933R.js.map

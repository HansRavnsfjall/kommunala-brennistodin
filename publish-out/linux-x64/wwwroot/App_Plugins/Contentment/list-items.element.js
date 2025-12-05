import { p as m } from "./parse-boolean.function.js";
import { p as U } from "./parse-int.function.js";
import { html as u, nothing as E, repeat as R, when as b, ifDefined as I, css as F, property as G, customElement as H } from "@umbraco-cms/backoffice/external/lit";
import { umbConfirmModal as N } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as T, umbFocus as j } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as v } from "@umbraco-cms/backoffice/event";
var q = Object.defineProperty, J = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, C = (e, t, i, s) => {
  for (var r = s > 1 ? void 0 : s ? J(t, i) : t, w = e.length - 1, z; w >= 0; w--)
    (z = e[w]) && (r = (s ? z(t, i, r) : z(r)) || r);
  return s && r && q(t, i, r), r;
}, x = (e, t, i) => t.has(e) || k("Cannot " + i), l = (e, t, i) => (x(e, t, "read from private field"), i ? i.call(e) : t.get(e)), o = (e, t, i) => t.has(e) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), c = (e, t, i, s) => (x(e, t, "write to private field"), t.set(e, i), i), a = (e, t, i) => (x(e, t, "access private method"), i), _, p, g, d, h, f, n, M, V, A, B, D, W, P, $, S, L, O;
let y = class extends T {
  constructor() {
    super(...arguments), o(this, n), o(this, _, !1), o(this, p, !1), o(this, g, !1), o(this, d, !1), o(this, h, 1 / 0), o(this, f);
  }
  set value(e) {
    c(this, f, e ?? []);
  }
  get value() {
    return l(this, f);
  }
  set config(e) {
    e && (c(this, _, m(e.getValueByAlias("confirmRemoval"))), c(this, g, m(e.getValueByAlias("hideDescription"))), c(this, d, m(e.getValueByAlias("hideIcon"))), c(this, h, U(e.getValueByAlias("maxItems")) || 1 / 0), c(this, p, l(this, h) === 1 ? !0 : m(e.getValueByAlias("disableSorting"))));
  }
  render() {
    return u`${a(this, n, L).call(this)}${a(this, n, S).call(this)}`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
M = function() {
  this.value = [
    ...this.value ?? [],
    {
      name: "",
      value: "",
      icon: "icon-stop",
      description: ""
    }
  ], this.dispatchEvent(new v());
};
V = function(e, t) {
  const i = e.target.value;
  a(this, n, $).call(this, { description: i }, t);
};
A = function(e, t) {
  const i = e.target.value;
  if (!i) return;
  const s = [...this.value ?? []];
  s[t] = { ...s[t], icon: i }, this.value = s, this.dispatchEvent(new v());
};
B = function(e, t) {
  const i = e.target.value;
  a(this, n, $).call(this, { name: i }, t);
};
D = function(e, t) {
  const i = e.target.value;
  a(this, n, $).call(this, { value: i }, t);
};
W = async function(e, t) {
  l(this, _) && await N(this, {
    color: "danger",
    headline: this.localize.term("contentment_removeItemHeadline", [e.name]),
    content: this.localize.term("contentment_removeItemMessage"),
    confirmLabel: this.localize.term("contentment_removeItemButton")
  });
  const i = [...this.value ?? []];
  i.splice(t, 1), this.value = i, this.dispatchEvent(new v());
};
P = function(e) {
  const t = [...this.value ?? []];
  t.splice(e.detail.newIndex, 0, t.splice(e.detail.oldIndex, 1)[0]), this.value = t, this.dispatchEvent(new v());
};
$ = function(e, t) {
  if (!e || t === -1) return;
  this.value || (this.value = []);
  const i = [...this.value], s = i[t];
  i[t] = { ...s, ...e }, this.value = i, this.dispatchEvent(new v());
};
S = function() {
  return this.value && this.value.length >= l(this, h) ? E : u`
			<uui-button
				id="btn-add"
				label=${this.localize.term("contentment_addItem")}
				look="placeholder"
				@click=${a(this, n, M)}></uui-button>
		`;
};
L = function() {
  return !this.value || this.value.length === 0 ? E : u`
			<contentment-sortable-list
				item-selector=".item"
				handle-selector=".handle"
				?disabled=${l(this, p)}
				@sort-end=${a(this, n, P)}>
				${R(
    this.value,
    (e, t) => e.value + t,
    (e, t) => a(this, n, O).call(this, e, t)
  )}
			</contentment-sortable-list>
		`;
};
O = function(e, t) {
  return u`
			<div class="item">
				${b(!l(this, p), () => u`<div class="handle"><uui-icon name="icon-grip"></uui-icon></div>`)}
				${b(
    !l(this, d),
    () => u`
						<contentment-icon-picker
							.value=${e.icon}
							@change=${(i) => a(this, n, A).call(this, i, t)}>
						</contentment-icon-picker>
					`
  )}
				<div class="inputs">
					<div>
						<uui-input
							label=${this.localize.term("placeholders_entername")}
							value=${I(e.name)}
							placeholder=${this.localize.term("placeholders_entername")}
							@change=${(i) => a(this, n, B).call(this, i, t)}
							${l(this, d) ? j() : E}></uui-input>
						<uui-input
							label=${this.localize.term("placeholders_enterValue")}
							value=${I(e.value)}
							placeholder=${this.localize.term("placeholders_enterValue")}
							@change=${(i) => a(this, n, D).call(this, i, t)}></uui-input>
					</div>
					${b(
    !l(this, g),
    () => u`
							<div>
								<uui-input
									label=${this.localize.term("placeholders_enterDescription")}
									value=${I(e.description ?? void 0)}
									placeholder=${this.localize.term("placeholders_enterDescription")}
									@change=${(i) => a(this, n, V).call(this, i, t)}></uui-input>
							</div>
						`
  )}
				</div>
				<div class="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => a(this, n, W).call(this, e, t)}>
						<uui-icon name="delete"></uui-icon>
					</uui-button>
				</div>
			</div>
		`;
};
y.styles = [
  F`
			#btn-add {
				display: block;
			}

			contentment-sortable-list {
				display: flex;
				flex-direction: column;
				gap: 1px;
				margin-bottom: var(--uui-size-1);
			}

			.item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: var(--uui-size-6);

				padding: var(--uui-size-3) var(--uui-size-6);
				background-color: var(--uui-color-surface-alt);

				&[drag-placeholder] {
					opacity: 0.5;
				}

				> .handle {
					cursor: grab;
				}

				> contentment-icon-picker {
					flex: 0 0 var(--uui-size-10);

					font-size: var(--uui-size-layout-2);
					height: var(--uui-size-layout-4);
					width: var(--uui-size-layout-4);
				}

				> .inputs {
					flex: 1;

					display: flex;
					flex-direction: column;
					gap: var(--uui-size-1);

					> div {
						display: flex;
						justify-content: space-between;
						gap: var(--uui-size-1);

						> * {
							flex: 1;
						}
					}
				}

				> .actions {
					flex: 0 0 auto;
					display: flex;
					justify-content: flex-end;
				}
			}
		`
];
C([
  G({ type: Array })
], y.prototype, "value", 1);
y = C([
  H("contentment-property-editor-ui-list-items")
], y);
export {
  y as ContentmentPropertyEditorUIListItemsElement,
  y as element
};
//# sourceMappingURL=list-items.element.js.map

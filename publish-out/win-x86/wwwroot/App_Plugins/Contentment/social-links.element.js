import { p as z } from "./parse-boolean.function.js";
import { p as D } from "./parse-int.function.js";
import { html as u, nothing as S, repeat as V, when as I, ifDefined as M, css as G, property as K, customElement as F } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as k } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as H, umbFocus as X } from "@umbraco-cms/backoffice/lit-element";
import { CONTENTMENT_SOCIAL_LINKS_SELECTION_MODAL as q } from "./social-links-selection-modal.element.js";
import { UMB_MODAL_MANAGER_CONTEXT as J, umbConfirmModal as Q } from "@umbraco-cms/backoffice/modal";
var Y = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, x = (t) => {
  throw TypeError(t);
}, L = (t, e, i, o) => {
  for (var l = o > 1 ? void 0 : o ? Z(e, i) : e, y = t.length - 1, b; y >= 0; y--)
    (b = t[y]) && (l = (o ? b(e, i, l) : b(l)) || l);
  return o && l && Y(e, i, l), l;
}, $ = (t, e, i) => e.has(t) || x("Cannot " + i), s = (t, e, i) => ($(t, e, "read from private field"), i ? i.call(t) : e.get(t)), r = (t, e, i) => e.has(t) ? x("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), c = (t, e, i, o) => ($(t, e, "write to private field"), e.set(t, i), i), a = (t, e, i) => ($(t, e, "access private method"), i), f, m, _, h, p, d, v, n, N, A, O, E, B, W, C, U, g, T, P, R;
let w = class extends H {
  constructor() {
    super(), r(this, n), r(this, f, !1), r(this, m, !1), r(this, _, {}), r(this, h, 1 / 0), r(this, p), r(this, d), r(this, v), this.consumeContext(J, (t) => {
      c(this, p, t);
    });
  }
  set value(t) {
    c(this, v, t ?? []);
  }
  get value() {
    return s(this, v);
  }
  set config(t) {
    if (!t) return;
    c(this, f, z(t.getValueByAlias("confirmRemoval"))), c(this, h, D(t.getValueByAlias("maxItems")) || 1 / 0), c(this, m, s(this, h) === 1 ? !0 : z(t.getValueByAlias("disableSorting")));
    const e = t.getValueByAlias("networks");
    e && (c(this, d, []), e.forEach((i) => {
      var l;
      const o = i.value;
      s(this, _)[o.network] = o, (l = s(this, d)) == null || l.push(o);
    }));
  }
  render() {
    return u`${a(this, n, P).call(this)}${a(this, n, T).call(this)}`;
  }
};
f = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
N = function(t) {
  return s(this, _)[t];
};
A = async function() {
  const t = await a(this, n, C).call(this);
  if (!t) return;
  const e = this.value ? [...this.value] : [];
  e.push(t), this.value = e, this.dispatchEvent(new k());
};
O = function(t, e) {
  const i = t.target.value;
  a(this, n, g).call(this, { name: i }, e);
};
E = async function(t) {
  const e = await a(this, n, C).call(this);
  if (!e) return;
  const i = e.network;
  a(this, n, g).call(this, { network: i }, t);
};
B = function(t, e) {
  const i = t.target.value;
  a(this, n, g).call(this, { url: i }, e);
};
W = async function(t, e) {
  s(this, f) && await Q(this, {
    color: "danger",
    headline: this.localize.term("contentment_removeItemHeadline", [t.name]),
    content: this.localize.term("contentment_removeItemMessage"),
    confirmLabel: this.localize.term("contentment_removeItemButton")
  });
  const i = [...this.value ?? []];
  i.splice(e, 1), this.value = i, this.dispatchEvent(new k());
};
C = async function() {
  return s(this, p) ? await s(this, p).open(this, q, {
    data: { items: s(this, d) ?? [] }
  }).onSubmit().catch(() => {
  }) : void 0;
};
U = function(t) {
  const e = [...this.value ?? []];
  e.splice(t.detail.newIndex, 0, e.splice(t.detail.oldIndex, 1)[0]), this.value = e, this.dispatchEvent(new k());
};
g = function(t, e) {
  if (!t || e === -1) return;
  this.value || (this.value = []);
  const i = [...this.value], o = i[e];
  i[e] = { ...o, ...t }, this.value = i, this.dispatchEvent(new k());
};
T = function() {
  return this.value && this.value.length >= s(this, h) ? S : u`
			<uui-button
				id="btn-add"
				label=${this.localize.term("contentment_addSocialLink")}
				look="placeholder"
				@click=${a(this, n, A)}></uui-button>
		`;
};
P = function() {
  return !this.value || this.value.length === 0 ? S : u`
			<contentment-sortable-list
				item-selector=".item"
				handle-selector=".handle"
				?disabled=${s(this, m)}
				@sort-end=${a(this, n, U)}>
				${V(
    this.value,
    (t) => t.network + t.name + t.url,
    (t, e) => a(this, n, R).call(this, t, e)
  )}
			</contentment-sortable-list>
		`;
};
R = function(t, e) {
  const i = a(this, n, N).call(this, t.network);
  return u`
			<div class="item">
				${I(!s(this, m), () => u`<div class="handle"><uui-icon name="icon-grip"></uui-icon></div>`)}
				${I(
    !i,
    () => u`
						<uui-button
							look="placeholder"
							label=${this.localize.term("contentment_selectSocialNetwork")}
							@click=${() => a(this, n, E).call(this, e)}>
							<uui-icon name="add"></uui-icon>
						</uui-button>
					`,
    () => u`
						<uui-button
							look="default"
							label=${this.localize.term("contentment_selectSocialNetwork")}
							style="--uui-button-background-color: ${i.backgroundColor};"
							@click=${() => a(this, n, E).call(this, e)}>
							<uui-icon name=${i.icon} style="--uui-icon-color: ${i.iconColor};"></uui-icon>
						</uui-button>
					`
  )}
				<div class="inputs">
					<uui-input
						label="Enter a social network name"
						value=${M(t.name)}
						placeholder=${this.localize.term("placeholders_entername")}
						${X()}
						@change=${(o) => a(this, n, O).call(this, o, e)}></uui-input>
					<uui-input
						label="Enter a social network URL"
						value=${M(t.url)}
						placeholder="Enter a URL..."
						@change=${(o) => a(this, n, B).call(this, o, e)}></uui-input>
				</div>
				<div class="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => a(this, n, W).call(this, t, e)}>
						<uui-icon name="delete"></uui-icon>
					</uui-button>
				</div>
			</div>
		`;
};
w.styles = [
  G`
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

				> uui-button {
					--uui-button-background-color-hover: var(--uui-button-background-color);

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
				}

				> .actions {
					flex: 0 0 auto;
					display: flex;
					justify-content: flex-end;
				}
			}
		`
];
L([
  K({ type: Array })
], w.prototype, "value", 1);
w = L([
  F("contentment-property-editor-ui-social-links")
], w);
export {
  w as ContentmentPropertyEditorUISocialLinksElement,
  w as element
};
//# sourceMappingURL=social-links.element.js.map

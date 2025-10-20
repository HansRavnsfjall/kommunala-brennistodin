import { p as _ } from "./parse-boolean.function.js";
import { p as F } from "./parse-int.function.js";
import { html as m, nothing as W, repeat as G, when as H, css as K, state as X, property as q, customElement as J } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as $ } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as Q } from "@umbraco-cms/backoffice/lit-element";
import { UMB_MODAL_MANAGER_CONTEXT as Y, umbConfirmModal as Z } from "@umbraco-cms/backoffice/modal";
import { CONTENTMENT_ITEM_PICKER_MODAL as j } from "./item-picker-modal.element.js";
var tt = Object.defineProperty, et = Object.getOwnPropertyDescriptor, T = (t) => {
  throw TypeError(t);
}, C = (t, e, i, h) => {
  for (var l = h > 1 ? void 0 : h ? et(e, i) : e, p = t.length - 1, c; p >= 0; p--)
    (c = t[p]) && (l = (h ? c(e, i, l) : c(l)) || l);
  return h && l && tt(e, i, l), l;
}, V = (t, e, i) => e.has(t) || T("Cannot " + i), s = (t, e, i) => (V(t, e, "read from private field"), i ? i.call(t) : e.get(t)), n = (t, e, i) => e.has(t) ? T("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), o = (t, e, i, h) => (V(t, e, "write to private field"), e.set(t, i), i), r = (t, e, i) => (V(t, e, "access private method"), i), M, b, f, I, E, g, k, B, u, d, A, y, a, P, w, S, x, z, O, D, L, N, R;
let v = class extends Q {
  constructor() {
    super(), n(this, a), this._items = [], n(this, M, !1), n(this, b, !1), n(this, f), n(this, I, !1), n(this, E, !0), n(this, g, !1), n(this, k, "list"), n(this, B, {}), n(this, u, 1 / 0), n(this, d), n(this, A, "small"), n(this, y, []), this.consumeContext(Y, (t) => {
      o(this, d, t);
    });
  }
  set value(t) {
    o(this, y, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return s(this, y);
  }
  set config(t) {
    t && (o(this, M, _(t.getValueByAlias("allowDuplicates"))), o(this, b, _(t.getValueByAlias("confirmRemoval"))), o(this, f, t.getValueByAlias("defaultIcon")), o(this, E, _(t.getValueByAlias("enableFilter") ?? "1")), o(this, g, _(t.getValueByAlias("enableMultiple"))), o(this, k, t.getValueByAlias("listType") ?? "list"), o(this, u, F(t.getValueByAlias("maxItems")) || 1 / 0), o(this, A, t.getValueByAlias("overlaySize") ?? "small"), o(this, I, s(this, u) === 1 ? !0 : _(t.getValueByAlias("disableSorting"))), this._items = t.getValueByAlias("items") ?? [], r(this, a, S).call(this));
  }
  render() {
    var t;
    return (t = this._items) != null && t.length ? m`${r(this, a, N).call(this)} ${r(this, a, L).call(this)}` : m`
				<contentment-info-box
					compact
					type="warning"
					icon="icon-alert"
					heading="There are no items to display"></contentment-info-box>
			`;
  }
};
M = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
P = function(t) {
  return s(this, B)[t];
};
w = function(t, e) {
  return t[e];
};
S = function() {
  this._items && this._items.forEach((t) => {
    s(this, B)[t.value] = t;
  });
};
x = function(t, e) {
  if (!t || e === -1) return;
  this.value || (this.value = []);
  const i = [...this.value];
  i.splice(e, 0, ...t), this.value = i, this.dispatchEvent(new $());
};
z = async function() {
  var h, l;
  if (!s(this, d)) return;
  const t = s(this, M) ? this._items : this._items.filter((p) => {
    var c;
    return ((c = this.value) == null ? void 0 : c.some((U) => p.value === U)) === !1;
  }), i = await s(this, d).open(this, j, {
    data: {
      defaultIcon: s(this, f),
      enableFilter: s(this, E),
      enableMultiple: s(this, g),
      items: t ?? [],
      listType: s(this, k),
      maxItems: s(this, u) === 0 ? s(this, u) : s(this, u) - (((h = this.value) == null ? void 0 : h.length) ?? 0)
    },
    modal: { size: s(this, A) }
  }).onSubmit().catch(() => {
  });
  r(this, a, x).call(this, i == null ? void 0 : i.selection, ((l = this.value) == null ? void 0 : l.length) ?? 0);
};
O = async function(t, e) {
  if (!t || !this.value || e == -1) return;
  s(this, b) && await Z(this, {
    color: "danger",
    headline: this.localize.term("contentment_removeItemHeadline", [t.name]),
    content: this.localize.term("contentment_removeItemMessage"),
    confirmLabel: this.localize.term("contentment_removeItemButton")
  });
  const i = [...this.value];
  i.splice(e, 1), this.value = i, this.dispatchEvent(new $());
};
D = function(t) {
  const e = [...this.value ?? []];
  e.splice(t.detail.newIndex, 0, e.splice(t.detail.oldIndex, 1)[0]), this.value = e, this.dispatchEvent(new $());
};
L = function() {
  return this.value && this.value.length >= s(this, u) ? W : m`
			<uui-button
				id="btn-add"
				label=${this.localize.term("general_choose")}
				look="placeholder"
				@click=${r(this, a, z)}></uui-button>
		`;
};
N = function() {
  return this.value ? m`
			<contentment-sortable-list
				class="uui-ref-list"
				item-selector="uui-ref-node"
				?disabled=${s(this, I)}
				@sort-end=${r(this, a, D)}>
				${G(
    this.value,
    (t) => t,
    (t, e) => r(this, a, R).call(this, t, e)
  )}
			</contentment-sortable-list>
		` : W;
};
R = function(t, e) {
  const i = r(this, a, P).call(this, t);
  if (!i) return W;
  const h = r(this, a, w).call(this, i, "icon") ?? s(this, f);
  return m`
			<uui-ref-node
				name=${r(this, a, w).call(this, i, "name") ?? t}
				detail=${r(this, a, w).call(this, i, "description") ?? ""}
				?standalone=${s(this, u) === 1}>
				${H(h, (l) => m`<umb-icon slot="icon" name=${l}></umb-icon>`)}
				<uui-action-bar slot="actions">
					<uui-button
						label=${this.localize.term("general_remove")}
						@click=${() => r(this, a, O).call(this, i, e)}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
v.styles = [
  K`
			#btn-add {
				display: block;
			}
		`
];
C([
  X()
], v.prototype, "_items", 2);
C([
  q({ type: Array })
], v.prototype, "value", 1);
v = C([
  J("contentment-property-editor-ui-item-picker")
], v);
export {
  v as ContentmentPropertyEditorUIItemPickerElement,
  v as element
};
//# sourceMappingURL=item-picker.element.js.map

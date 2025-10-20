import { when as E, html as l, nothing as v, repeat as k, ifDefined as b, css as P, state as _, customElement as L } from "@umbraco-cms/backoffice/external/lit";
import { debounce as z } from "@umbraco-cms/backoffice/utils";
import { umbFocus as S } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalToken as T, UmbModalBaseElement as O } from "@umbraco-cms/backoffice/modal";
var U = Object.defineProperty, D = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, u = (t, e, i, a) => {
  for (var s = a > 1 ? void 0 : a ? D(e, i) : e, c = t.length - 1, d; c >= 0; c--)
    (d = t[c]) && (s = (a ? d(e, i, s) : d(s)) || s);
  return a && s && U(e, i, s), s;
}, $ = (t, e, i) => e.has(t) || C("Cannot " + i), w = (t, e, i) => ($(t, e, "read from private field"), i ? i.call(t) : e.get(t)), m = (t, e, i) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), n = (t, e, i) => ($(t, e, "access private method"), i), f, h, o, p, I, M, x, y, g;
const B = new T("Umb.Contentment.Modal.ItemPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
let r = class extends O {
  constructor() {
    super(...arguments), m(this, o), this._allowSubmit = !1, this._itemCount = 0, this._items = [], m(this, f, z((t) => {
      this.data && (t = (t || "").toLocaleLowerCase(), this._items = t ? this.data.items.filter((e) => w(this, h).call(this, t, e)) : this.data.items);
    }, 100)), m(this, h, (t, e) => {
      var i;
      return e.name.toLocaleLowerCase().includes(t) || e.value.toLocaleLowerCase().includes(t) || ((i = e.description) == null ? void 0 : i.toLocaleLowerCase().includes(t));
    });
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), this._items = (t = this.data) != null && t.items ? this.data.items : [];
  }
  render() {
    var t;
    return l`
			<umb-body-layout headline=${this.localize.term("general_choose")}>
				${n(this, o, x).call(this)} ${n(this, o, y).call(this)} ${n(this, o, g).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_cancel")} @click=${this._rejectModal}></uui-button>
					${E(
      (t = this.data) == null ? void 0 : t.enableMultiple,
      () => l`
							<uui-button
								color="positive"
								look="primary"
								label=${this.localize.term("buttons_select")}
								?disabled=${!this._allowSubmit}
								@click=${n(this, o, I)}></uui-button>
						`
    )}
				</div>
			</umb-body-layout>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
p = function(t) {
  var e, i, a;
  t.disabled || ((e = this.data) != null && e.enableMultiple ? (t.selected = !t.selected, this._itemCount = this._items.filter((s) => s.selected === !0).length, this._allowSubmit = this._itemCount > 0 && (((i = this.data) == null ? void 0 : i.maxItems) === 0 || this._itemCount <= ((a = this.data) == null ? void 0 : a.maxItems))) : (this.value = { selection: [t.value] }, this._submitModal()));
};
I = function() {
  const t = [];
  this._items.forEach((e) => {
    e.selected && (delete e.selected, t.push(e.value));
  }), this.value = { selection: t }, this._submitModal();
};
M = function(t) {
  w(this, f).call(this, t.target.value);
};
x = function() {
  var e;
  if (!((e = this.data) != null && e.enableFilter)) return v;
  const t = this.localize.term("placeholders_filter");
  return l`
			<uui-input
				type="search"
				id="filter"
				autocomplete="off"
				label=${t}
				placeholder=${t}
				@input=${n(this, o, M)}
				${S()}>
				<uui-icon name="search" slot="prepend" id="filter-icon"></uui-icon>
			</uui-input>
		`;
};
y = function() {
  var t, e, i, a, s;
  return !((t = this.data) != null && t.enableMultiple) || this._itemCount === 0 || ((e = this.data) == null ? void 0 : e.maxItems) === 0 || this._itemCount <= ((i = this.data) == null ? void 0 : i.maxItems) ? v : l`
			<contentment-info-box type="danger">
				<span>
					Too many items selected, please unselect
					<strong>${this._itemCount - (((a = this.data) == null ? void 0 : a.maxItems) ?? 0)}</strong>
					${this._itemCount - (((s = this.data) == null ? void 0 : s.maxItems) ?? 0) === 1 ? "item" : "items"}.
				</span>
			</contentment-info-box>
		`;
};
g = function() {
  var t;
  return (t = this._items) != null && t.length ? l`
			<uui-box>
				<uui-ref-list>
					${k(
    this._items,
    (e) => e.value,
    (e) => {
      var i;
      return l`
							<umb-ref-item
								name=${e.name}
								detail=${b(e.description ?? void 0)}
								icon=${b(e.icon ?? ((i = this.data) == null ? void 0 : i.defaultIcon) ?? "icon-document")}
								select-only
								selectable
								@selected=${() => n(this, o, p).call(this, e)}
								@deselected=${() => n(this, o, p).call(this, e)}>
							</umb-ref-item>
						`;
    }
  )}
				</uui-ref-list>
			</uui-box>
		` : l`<uui-box><p>No items found</p></uui-box>`;
};
r.styles = [
  P`
			#filter {
				width: 100%;
				margin-bottom: var(--uui-size-space-4);
			}

			#filter-icon {
				display: flex;
				color: var(--uui-color-border);
				height: 100%;
				padding-left: var(--uui-size-space-2);
			}

			contentment-info-box {
				margin-bottom: var(--uui-size-space-4);
			}
		`
];
u([
  _()
], r.prototype, "_allowSubmit", 2);
u([
  _()
], r.prototype, "_itemCount", 2);
u([
  _()
], r.prototype, "_items", 2);
r = u([
  L("contentment-property-editor-ui-item-picker-modal")
], r);
export {
  B as CONTENTMENT_ITEM_PICKER_MODAL,
  r as ContentmentPropertyEditorUIItemPickerModalElement,
  r as element
};
//# sourceMappingURL=item-picker-modal.element.js.map

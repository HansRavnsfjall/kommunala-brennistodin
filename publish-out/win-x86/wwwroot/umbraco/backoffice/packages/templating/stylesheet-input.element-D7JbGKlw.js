import "@umbraco-cms/backoffice/server-file-system";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/external/backend-api";
import { b as g, U as y } from "./stylesheet-picker-modal.token-CeSiGQ35.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/store";
import { UmbPickerInputContext as b } from "@umbraco-cms/backoffice/picker-input";
import { repeat as S, html as d, css as x, property as m, state as E, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as I } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as U } from "@umbraco-cms/backoffice/lit-element";
import { splitStringToArray as w } from "@umbraco-cms/backoffice/utils";
class T extends b {
  constructor(t) {
    super(t, g, y);
  }
}
var C = Object.defineProperty, P = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, o = (e, t, r, l) => {
  for (var a = l > 1 ? void 0 : l ? P(t, r) : t, u = e.length - 1, p; u >= 0; u--)
    (p = e[u]) && (a = (l ? p(t, r, a) : p(a)) || a);
  return l && a && C(t, r, a), a;
}, v = (e, t, r) => t.has(e) || _("Cannot " + r), s = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), c = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r) => (v(e, t, "access private method"), r), i, h, f;
let n = class extends I(U, "") {
  constructor() {
    super(), c(this, h), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this._items = [], c(this, i, new T(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && s(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && s(this, i).getSelection().length > this.max
    ), this.observe(s(this, i).selection, (e) => this.value = e.join(",")), this.observe(s(this, i).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    s(this, i).min = e;
  }
  get min() {
    return s(this, i).min;
  }
  set max(e) {
    s(this, i).max = e;
  }
  get max() {
    return s(this, i).max;
  }
  set selection(e) {
    s(this, i).setSelection(e ?? []);
  }
  get selection() {
    return s(this, i).getSelection();
  }
  set value(e) {
    this.selection = w(e);
  }
  get value() {
    return s(this, i).getSelection().join(",");
  }
  getFormElement() {
  }
  render() {
    return d`
			<uui-ref-list>
				${S(
      this._items,
      (e) => e.unique,
      (e) => O(this, h, f).call(this, e)
    )}
			</uui-ref-list>
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${() => s(this, i).openPicker({ pickableFilter: (e) => !e.isFolder })}
				label="Add stylesheet"></uui-button>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
f = function(e) {
  if (e.unique)
    return d`
			<uui-ref-node name=${e.name}>
				<uui-icon slot="icon" name="icon-palette"></uui-icon>
				<uui-action-bar slot="actions">
					<uui-button
						@click=${() => s(this, i).requestRemoveItem(e.unique)}
						label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
n.styles = [
  x`
			#btn-add {
				width: 100%;
			}
		`
];
o([
  m({ type: Number })
], n.prototype, "min", 1);
o([
  m({ type: String, attribute: "min-message" })
], n.prototype, "minMessage", 2);
o([
  m({ type: Number })
], n.prototype, "max", 1);
o([
  m({ type: String, attribute: "min-message" })
], n.prototype, "maxMessage", 2);
o([
  m({ type: Array })
], n.prototype, "selection", 1);
o([
  m()
], n.prototype, "value", 1);
o([
  E()
], n.prototype, "_items", 2);
n = o([
  M("umb-stylesheet-input")
], n);
export {
  T as U,
  n as a
};
//# sourceMappingURL=stylesheet-input.element-D7JbGKlw.js.map

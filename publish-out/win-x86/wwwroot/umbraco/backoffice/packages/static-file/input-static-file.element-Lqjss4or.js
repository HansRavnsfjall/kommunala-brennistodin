import { e as x, U as y } from "./constants-CwKQXLDb.js";
import { UMB_TREE_PICKER_MODAL_ALIAS as I } from "@umbraco-cms/backoffice/tree";
import { UmbModalToken as E } from "@umbraco-cms/backoffice/modal";
import { UmbPickerInputContext as M } from "@umbraco-cms/backoffice/picker-input";
import { nothing as T, repeat as w, html as d, css as U, property as l, state as A, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as C } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UmbServerFilePathUniqueSerializer as F } from "@umbraco-cms/backoffice/server-file-system";
import { UmbFormControlMixin as O } from "@umbraco-cms/backoffice/validation";
const L = new E(I, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: x
  }
});
class R extends M {
  constructor(t) {
    super(t, y, L);
  }
}
var $ = Object.defineProperty, q = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, a = (e, t, s, m) => {
  for (var o = m > 1 ? void 0 : m ? q(t, s) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (o = (m ? p(t, s, o) : p(o)) || o);
  return m && o && $(t, s, o), o;
}, v = (e, t, s) => t.has(e) || f("Cannot " + s), r = (e, t, s) => (v(e, t, "read from private field"), s ? s.call(e) : t.get(e)), c = (e, t, s) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), g = (e, t, s) => (v(e, t, "access private method"), s), _, i, u, b, S;
let n = class extends O(
  P
) {
  constructor() {
    super(), c(this, u), c(this, _, new F()), this.minMessage = "This field need more files", this.maxMessage = "This field exceeds the allowed amount of files", c(this, i, new R(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && r(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && r(this, i).getSelection().length > this.max
    ), this.observe(r(this, i).selection, (e) => this.value = e.join(",")), this.observe(r(this, i).selectedItems, (e) => this._items = e);
  }
  set min(e) {
    r(this, i).min = e;
  }
  get min() {
    return r(this, i).min;
  }
  set max(e) {
    r(this, i).max = e;
  }
  get max() {
    return r(this, i).max;
  }
  set selection(e) {
    r(this, i).setSelection(e);
  }
  get selection() {
    return r(this, i).getSelection();
  }
  set value(e) {
    this.selection = C(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return this._items ? d`
			<uui-ref-list>
				${w(
      this._items,
      (e) => e.unique,
      (e) => this._renderItem(e)
    )}
			</uui-ref-list>
			${g(this, u, S).call(this)}
		` : T;
  }
  _renderItem(e) {
    if (e.unique)
      return d`
			<uui-ref-node name=${e.name} .detail=${r(this, _).toServerPath(e.unique) || ""}>
				<!-- TODO: implement is trashed, if we cant retrieve the item on the server (but only ask the server if we need to anyway...). <uui-tag size="s" slot="tag" color="danger">Trashed</uui-tag> -->
				<uui-action-bar slot="actions">
					<uui-button
						label=${this.localize.term("general_remove")}
						@click=${() => r(this, i).requestRemoveItem(e.unique)}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
b = function() {
  r(this, i).openPicker({
    pickableFilter: this.pickableFilter,
    multiple: this.max !== 1,
    hideTreeRoot: !0
  });
};
S = function() {
  if (!(this.max === 1 && this.selection.length >= this.max))
    return d`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${g(this, u, b)}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
};
n.styles = [
  U`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  l({ type: Number })
], n.prototype, "min", 1);
a([
  l({ type: String, attribute: "min-message" })
], n.prototype, "minMessage", 2);
a([
  l({ type: Number })
], n.prototype, "max", 1);
a([
  l({ type: String, attribute: "min-message" })
], n.prototype, "maxMessage", 2);
a([
  l({ type: String })
], n.prototype, "value", 1);
a([
  l()
], n.prototype, "pickableFilter", 2);
a([
  A()
], n.prototype, "_items", 2);
n = a([
  k("umb-input-static-file")
], n);
export {
  R as U,
  n as a,
  L as b
};
//# sourceMappingURL=input-static-file.element-Lqjss4or.js.map

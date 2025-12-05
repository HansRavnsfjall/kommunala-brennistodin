import { html as l, repeat as I, css as $, state as C, property as E, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as w } from "@umbraco-cms/backoffice/lit-element";
import { UmbMemberTypePickerInputContext as S } from "@umbraco-cms/backoffice/member-type";
var M = Object.defineProperty, T = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, m = (e, t, r, c) => {
  for (var n = c > 1 ? void 0 : c ? T(t, r) : t, p = e.length - 1, h; p >= 0; p--)
    (h = e[p]) && (n = (c ? h(t, r, n) : h(n)) || n);
  return c && n && M(t, r, n), n;
}, v = (e, t, r) => t.has(e) || d("Cannot " + r), s = (e, t, r) => (v(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _ = (e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), a = (e, t, r) => (v(e, t, "access private method"), r), i, o, f, b, y, P, k;
let u = class extends w {
  constructor() {
    super(), _(this, o), _(this, i, new S(this)), this.observe(s(this, i).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(s(this, i).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set value(e) {
    var t;
    (t = s(this, i)) == null || t.setSelection(e ? [e] : []);
  }
  get value() {
    var t;
    const e = ((t = s(this, i)) == null ? void 0 : t.getSelection()) ?? [];
    return e.length > 0 ? e.join(",") : void 0;
  }
  render() {
    return l`${a(this, o, P).call(this)} ${a(this, o, y).call(this)}`;
  }
};
i = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
f = function() {
  var e;
  (e = s(this, i)) == null || e.openPicker({
    hideTreeRoot: !0
  });
};
b = function(e) {
  var t;
  (t = s(this, i)) == null || t.requestRemoveItem(e.unique);
};
y = function() {
  if (!this.value)
    return l`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${a(this, o, f)}
				label=${this.localize.term("general_choose")}></uui-button>
		`;
};
P = function() {
  if (this._items)
    return l`
			<uui-ref-list>
				${I(
      this._items,
      (e) => e.unique,
      (e) => a(this, o, k).call(this, e)
    )}
			</uui-ref-list>
		`;
};
k = function(e) {
  if (e.unique)
    return l`
			<uui-ref-node name=${e.name} id=${e.unique}>
				<umb-icon slot="icon" name="icon-user"></umb-icon>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => a(this, o, b).call(this, e)}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
u.styles = [
  $`
			#btn-add {
				display: block;
			}
		`
];
m([
  C()
], u.prototype, "_items", 2);
m([
  E({ type: String })
], u.prototype, "value", 1);
u = m([
  g("contentment-property-editor-ui-member-type-picker")
], u);
export {
  u as ContentmentPropertyEditorUIMemberTypePickerElement,
  u as element
};
//# sourceMappingURL=member-type-picker.element.js.map

import { html as u, repeat as $, css as I, state as C, property as E, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbDictionaryPickerInputContext as w } from "@umbraco-cms/backoffice/dictionary";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
var D = Object.defineProperty, q = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, m = (e, t, i, l) => {
  for (var n = l > 1 ? void 0 : l ? q(t, i) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (n = (l ? p(t, i, n) : p(n)) || n);
  return l && n && D(t, i, n), n;
}, v = (e, t, i) => t.has(e) || d("Cannot " + i), s = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), _ = (e, t, i) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), a = (e, t, i) => (v(e, t, "access private method"), i), r, o, f, b, y, k, P;
let c = class extends S {
  constructor() {
    super(), _(this, o), _(this, r, new w(this)), this.observe(s(this, r).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(s(this, r).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set value(e) {
    var t;
    (t = s(this, r)) == null || t.setSelection(e ? [e] : []);
  }
  get value() {
    var t;
    const e = ((t = s(this, r)) == null ? void 0 : t.getSelection()) ?? [];
    return e.length > 0 ? e.join(",") : void 0;
  }
  render() {
    return u`${a(this, o, k).call(this)} ${a(this, o, y).call(this)}`;
  }
};
r = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
f = function() {
  var e;
  (e = s(this, r)) == null || e.openPicker();
};
b = function(e) {
  var t;
  (t = s(this, r)) == null || t.requestRemoveItem(e.unique);
};
y = function() {
  if (!this.value)
    return u`
			<uui-button
				id="btn-add"
				label=${this.localize.term("general_choose")}
				look="placeholder"
				@click=${a(this, o, f)}></uui-button>
		`;
};
k = function() {
  if (this._items)
    return u`
			<uui-ref-list>
				${$(
      this._items,
      (e) => e.unique,
      (e) => a(this, o, P).call(this, e)
    )}
			</uui-ref-list>
		`;
};
P = function(e) {
  var t;
  if (e.unique)
    return u`
			<uui-ref-node name=${e.name} id=${e.unique} ?standalone=${((t = this._items) == null ? void 0 : t.length) === 1}>
				<umb-icon slot="icon" name="icon-book-alt"></umb-icon>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => a(this, o, b).call(this, e)}></uui-button>
				</uui-action-bar>
			</uui-ref-node>
		`;
};
c.styles = [
  I`
			#btn-add {
				display: block;
			}
		`
];
m([
  C()
], c.prototype, "_items", 2);
m([
  E({ type: String })
], c.prototype, "value", 1);
c = m([
  g("contentment-property-editor-ui-dictionary-picker")
], c);
export {
  c as ContentmentPropertyEditorUIDictionaryPickerElement,
  c as element
};
//# sourceMappingURL=dictionary-picker.element.js.map

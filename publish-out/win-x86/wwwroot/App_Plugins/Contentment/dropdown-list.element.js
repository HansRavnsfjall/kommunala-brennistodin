import { p as d } from "./parse-boolean.function.js";
import { html as r, ifDefined as g, repeat as x, when as _, unsafeHTML as $, css as D, property as E, state as h, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as O } from "@umbraco-cms/backoffice/event";
var A = Object.defineProperty, B = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, a = (t, e, o, n) => {
  for (var s = n > 1 ? void 0 : n ? B(e, o) : e, u = t.length - 1, c; u >= 0; u--)
    (c = t[u]) && (s = (n ? c(e, o, s) : c(s)) || s);
  return n && s && A(e, o, s), s;
}, m = (t, e, o) => e.has(t) || w("Cannot " + o), P = (t, e, o) => (m(t, e, "read from private field"), o ? o.call(t) : e.get(t)), v = (t, e, o) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), U = (t, e, o, n) => (m(t, e, "write to private field"), e.set(t, o), o), f = (t, e, o) => (m(t, e, "access private method"), o), p, l, y, b;
let i = class extends I {
  constructor() {
    super(...arguments), v(this, l), v(this, p, ""), this._items = [], this._showDescriptions = !1, this._showIcons = !1;
  }
  set value(t) {
    U(this, p, Array.isArray(t) === !0 ? t[0] : t ?? "");
  }
  get value() {
    return P(this, p);
  }
  set config(t) {
    t && (this._items = t.getValueByAlias("items") ?? [], this._showDescriptions = d(t.getValueByAlias("showDescriptions")), this._showIcons = d(t.getValueByAlias("showIcons")));
  }
  render() {
    var t;
    return (t = this._items) != null && t.length ? r`
			<uui-combobox value=${g(this.value)} @change=${f(this, l, y)}>
				<uui-combobox-list>
					${x(
      this._items,
      (e) => e.value,
      (e) => f(this, l, b).call(this, e)
    )}
				</uui-combobox-list>
			</uui-combobox>
		` : r`
				<contentment-info-box
					compact
					type="warning"
					icon="icon-alert"
					heading="There are no items to display"></contentment-info-box>
			`;
  }
};
p = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
y = function(t) {
  t.target.nodeName === "UUI-COMBOBOX" && (this.value = t.target.value, this.dispatchEvent(new O()));
};
b = function(t) {
  return r`
			<uui-combobox-list-option
				display-value=${this.localize.string(t.name)}
				value=${t.value}
				?disabled=${t.disabled}>
				<div class="outer">
					${_(this._showIcons && t.icon, (e) => r`<umb-icon name=${e}></umb-icon>`)}
					${_(
    this._showDescriptions && t.description,
    () => r`
							<uui-form-layout-item>
								<span slot="label">${this.localize.string(t.name)}</span>
								<span slot="description">${$(t.description)}</span>
							</uui-form-layout-item>
						`,
    () => r`<span>${this.localize.string(t.name)}</span>`
  )}
				</div>
			</uui-combobox-list-option>
		`;
};
i.styles = [
  D`
			uui-combobox {
				width: 100%;
			}

			.outer {
				display: flex;
				flex-direction: row;
				gap: 0.5rem;
				align-items: flex-start;
			}

			uui-combobox-list-option {
				padding: 0.5rem;
			}

			uui-form-layout-item {
				margin-top: 3px;
				margin-bottom: 0;
			}

			umb-icon {
				font-size: 1.2rem;
			}
		`
];
a([
  E()
], i.prototype, "value", 1);
a([
  h()
], i.prototype, "_items", 2);
a([
  h()
], i.prototype, "_showDescriptions", 2);
a([
  h()
], i.prototype, "_showIcons", 2);
i = a([
  C("contentment-property-editor-ui-dropdown-list")
], i);
export {
  i as ContentmentPropertyEditorUIDropdownListElement,
  i as element
};
//# sourceMappingURL=dropdown-list.element.js.map

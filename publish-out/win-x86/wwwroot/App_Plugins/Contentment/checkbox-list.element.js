import { html as l, when as m, repeat as x, unsafeHTML as A, css as $, property as E, state as r, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { p as d } from "./parse-boolean.function.js";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as k } from "@umbraco-cms/backoffice/event";
var L = Object.defineProperty, P = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, n = (e, t, s, o) => {
  for (var c = o > 1 ? void 0 : o ? P(t, s) : t, u = e.length - 1, _; u >= 0; u--)
    (_ = e[u]) && (c = (o ? _(t, s, c) : _(c)) || c);
  return o && c && L(t, s, c), c;
}, v = (e, t, s) => t.has(e) || g("Cannot " + s), B = (e, t, s) => (v(e, t, "read from private field"), s ? s.call(e) : t.get(e)), f = (e, t, s) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), U = (e, t, s, o) => (v(e, t, "write to private field"), t.set(e, s), s), p = (e, t, s) => (v(e, t, "access private method"), s), a, h, y, w, C, b;
let i = class extends D {
  constructor() {
    super(...arguments), f(this, h), f(this, a, []), this._checkAll = !1, this._items = [], this._showDescriptions = !1, this._showIcons = !1, this._toggleChecked = !1;
  }
  set value(e) {
    U(this, a, e ?? []);
  }
  get value() {
    return B(this, a);
  }
  set config(e) {
    if (!e) return;
    this._checkAll = d(e.getValueByAlias("checkAll")), this._showDescriptions = d(e.getValueByAlias("showDescriptions")), this._showIcons = d(e.getValueByAlias("showIcons"));
    const t = e.getValueByAlias("items") ?? [];
    this._items = t.map((s) => {
      var o;
      return { ...s, checked: ((o = this.value) == null ? void 0 : o.includes(s.value)) ?? !1 };
    }), this._checkAll && (this._toggleChecked = this._items.every((s) => s.checked));
  }
  render() {
    var e;
    return (e = this._items) != null && e.length ? l`
			${m(this._checkAll, () => p(this, h, C).call(this))}
			<ul>
				${x(
      this._items,
      (t) => t.value,
      (t) => p(this, h, b).call(this, t)
    )}
			</ul>
		` : l`
				<contentment-info-box
					compact
					type="warning"
					icon="icon-alert"
					heading="There are no items to display"></contentment-info-box>
			`;
  }
};
a = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
y = function(e) {
  e.checked = !e.checked, this._toggleChecked = this._items.every((s) => s.checked);
  const t = [];
  this._items.forEach((s) => {
    s.checked && (t == null || t.push(s.value));
  }), this.value = t, this.dispatchEvent(new k());
};
w = function(e) {
  this._toggleChecked = e.target.checked;
  const t = [];
  this._items.forEach((s) => {
    s.checked = this._toggleChecked, s.checked && t.push(s.value);
  }), this.value = t, this.dispatchEvent(new k());
};
C = function() {
  const e = this._toggleChecked ? this.localize.term("contentment_checkboxListUncheckAll") : this.localize.term("contentment_checkboxListCheckAll");
  return l`
			<ul>
				<li>
					<uui-checkbox label=${e} ?checked=${this._toggleChecked} @change=${p(this, h, w)}></uui-checkbox>
				</li>
			</ul>
		`;
};
b = function(e) {
  return l`
			<li>
				<uui-checkbox
					label=${e.name}
					value=${e.value}
					?checked=${e.checked}
					?disabled=${e.disabled}
					@change=${() => p(this, h, y).call(this, e)}>
					<div class="outer">
						${m(this._showIcons && e.icon, (t) => l`<umb-icon name=${t}></umb-icon>`)}
						<uui-form-layout-item>
							<span slot="label">${this.localize.string(e.name)}</span>
							${m(
    this._showDescriptions && e.description,
    () => l`<span slot="description">${A(e.description)}</span>`
  )}
						</uui-form-layout-item>
					</div>
				</uui-checkbox>
			</li>
		`;
};
i.styles = [
  $`
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			.outer {
				display: flex;
				flex-direction: row;
				gap: 0.5rem;
			}

			uui-form-layout-item {
				margin-top: 10px;
				margin-bottom: 0;
			}

			umb-icon {
				font-size: 1.2rem;
			}
		`
];
n([
  E({ type: Array })
], i.prototype, "value", 1);
n([
  r()
], i.prototype, "_checkAll", 2);
n([
  r()
], i.prototype, "_items", 2);
n([
  r()
], i.prototype, "_showDescriptions", 2);
n([
  r()
], i.prototype, "_showIcons", 2);
n([
  r()
], i.prototype, "_toggleChecked", 2);
i = n([
  I("contentment-property-editor-ui-checkbox-list")
], i);
export {
  i as ContentmentPropertyEditorUICheckboxListElement,
  i as element
};
//# sourceMappingURL=checkbox-list.element.js.map

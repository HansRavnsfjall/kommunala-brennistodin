import { html as n, repeat as E, classMap as k, ifDefined as w, when as v, css as z, property as $, state as r, customElement as B } from "@umbraco-cms/backoffice/external/lit";
import { p as S } from "./parse-boolean.function.js";
import { UmbLitElement as M } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as V } from "@umbraco-cms/backoffice/event";
var C = Object.defineProperty, I = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, l = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? I(t, s) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (o = (i ? p(t, s, o) : p(o)) || o);
  return i && o && C(t, s, o), o;
}, _ = (e, t, s) => t.has(e) || f("Cannot " + s), b = (e, t, s) => (_(e, t, "read from private field"), s ? s.call(e) : t.get(e)), m = (e, t, s) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), x = (e, t, s, i) => (_(e, t, "write to private field"), t.set(e, s), s), d = (e, t, s) => (_(e, t, "access private method"), s), u, c, y, g, A;
let a = class extends M {
  constructor() {
    super(...arguments), m(this, c), m(this, u, []), this._enableMultiple = !1, this._items = [], this._labelStyle = "both", this._look = "secondary", this._size = "m";
  }
  set value(e) {
    x(this, u, Array.isArray(e) ? e : e ? [e] : []), d(this, c, g).call(this);
  }
  get value() {
    return b(this, u);
  }
  set config(e) {
    if (!e) return;
    this._defaultIcon = e.getValueByAlias("defaultIcon"), this._enableMultiple = S(e.getValueByAlias("enableMultiple")), this._labelStyle = e.getValueByAlias("labelStyle") ?? "both", this._look = e.getValueByAlias("look") ?? "secondary", this._size = e.getValueByAlias("size") ?? "m";
    const t = e.getValueByAlias("items") ?? [];
    if (this._items = t.map((s) => {
      var i;
      return { ...s, selected: ((i = this.value) == null ? void 0 : i.includes(s.value)) ?? !1 };
    }), !this.value) {
      const s = e.getValueByAlias("defaultValue") ?? [];
      this.value = this._enableMultiple && Array.isArray(s) ? s : [s];
    }
  }
  render() {
    var e;
    return (e = this._items) != null && e.length ? n`
			<uui-button-group>
				${E(
      this._items,
      (t) => t.value,
      (t) => d(this, c, A).call(this, t)
    )}
			</uui-button-group>
		` : n`
				<contentment-info-box
					compact
					type="warning"
					icon="icon-alert"
					heading="There are no items to display"></contentment-info-box>
			`;
  }
};
u = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
y = function(e) {
  e.selected = !e.selected;
  const t = [];
  this._items.forEach((s) => {
    this._enableMultiple || (s.selected = e.selected && s.value === e.value), s.selected && (t == null || t.push(s.value));
  }), this.value = t, this.dispatchEvent(new V());
};
g = function() {
  var e;
  (e = this._items) != null && e.length && this._items.forEach((t) => {
    var s;
    t.selected = ((s = b(this, u)) == null ? void 0 : s.includes(t.value)) ?? !1;
  });
};
A = function(e) {
  const t = {
    active: e.selected,
    small: this._size === "s",
    medium: this._size === "m",
    large: this._size === "l"
  }, s = this._labelStyle === "icon" ? [e.name, e.description].join(", ") : e.description;
  return n`
			<uui-button
				class=${k(t)}
				look=${this._look}
				label=${s ?? e.name}
				title=${w(s ?? void 0)}
				?disabled=${e.disabled}
				@click=${() => d(this, c, y).call(this, e)}>
				<div>
					${v(
    this._labelStyle !== "text",
    () => n`<umb-icon .name=${e.icon ?? this._defaultIcon}></umb-icon>`
  )}
					${v(this._labelStyle !== "icon", () => n`<span>${this.localize.string(e.name)}</span>`)}
				</div>
			</uui-button>
		`;
};
a.styles = [
  z`
			uui-button-group {
				flex-wrap: wrap;
			}
			uui-button.small {
				font-size: 0.8rem;
			}
			uui-button.medium {
				font-size: 1rem;
			}
			uui-button.large {
				font-size: 1.2rem;
			}
			uui-button.active {
				--uui-button-background-color: var(--uui-menu-item-background-color-active, var(--uui-color-current, #f5c1bc));
				--uui-button-contrast: var(--uui-color-default-standalone, #1c233b);
			}
			uui-button.active:hover {
				--uui-button-background-color-hover: var(
					--uui-menu-item-background-color-active-hover,
					var(--uui-color-current-emphasis, #f8d6d3)
				);
				--uui-button-contrast-hover: var(--uui-color-default-standalone, #1c233b);
			}
			uui-button > div {
				display: flex;
				align-items: center;
				gap: 0.3rem;
			}
		`
];
l([
  $({ type: Array })
], a.prototype, "value", 1);
l([
  r()
], a.prototype, "_defaultIcon", 2);
l([
  r()
], a.prototype, "_enableMultiple", 2);
l([
  r()
], a.prototype, "_items", 2);
l([
  r()
], a.prototype, "_labelStyle", 2);
l([
  r()
], a.prototype, "_look", 2);
l([
  r()
], a.prototype, "_size", 2);
a = l([
  B("contentment-property-editor-ui-buttons")
], a);
export {
  a as ContentmentPropertyEditorUIButtonsElement,
  a as element
};
//# sourceMappingURL=buttons.element.js.map

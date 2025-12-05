import { ifDefined as d, html as _, css as v, property as l, state as h, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { p as y } from "./parse-int.function.js";
import { UmbLitElement as w } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as E } from "@umbraco-cms/backoffice/event";
var x = Object.defineProperty, b = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, s = (e, t, r, p) => {
  for (var n = p > 1 ? void 0 : p ? b(t, r) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (n = (p ? o(t, r, n) : o(n)) || n);
  return p && n && x(t, r, n), n;
}, C = (e, t, r) => t.has(e) || m("Cannot " + r), I = (e, t, r) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r) => (C(e, t, "access private method"), r), u, c;
let a = class extends w {
  constructor() {
    super(...arguments), I(this, u);
  }
  set config(e) {
    e && (this._placeholderText = e.getValueByAlias("placeholderText"), this._size = e.getValueByAlias("size") ?? "s");
  }
  render() {
    var e;
    return _`
			<uui-input
				type="number"
				class=${this._size ?? "s"}
				label=${this.name ?? "Number input"}
				autocomplete="off"
				pattern="[-0-9]*"
				placeholder=${d(this._placeholderText)}
				.value=${((e = this.value) == null ? void 0 : e.toString()) ?? ""}
				@input=${P(this, u, c)}>
			</uui-input>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = y(e.target.value), this.dispatchEvent(new E());
};
a.styles = [
  v`
			.s {
				width: 10ch;
			}
			.m {
				width: 20ch;
			}
			.l {
				width: 40ch;
			}
			.xl {
				width: 100%;
			}
			uui-input {
				max-width: 100%;
			}
		`
];
s([
  l()
], a.prototype, "name", 2);
s([
  l({ type: Number })
], a.prototype, "value", 2);
s([
  h()
], a.prototype, "_placeholderText", 2);
s([
  h()
], a.prototype, "_size", 2);
a = s([
  f("contentment-property-editor-ui-number-input")
], a);
export {
  a as ContentmentPropertyEditorUINumberInputElement,
  a as element
};
//# sourceMappingURL=number-input.element.js.map

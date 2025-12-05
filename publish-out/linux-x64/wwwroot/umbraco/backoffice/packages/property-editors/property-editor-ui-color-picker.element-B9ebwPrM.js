import { html as b, property as m, state as y, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as L } from "@umbraco-cms/backoffice/event";
var U = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, w = (e) => {
  throw TypeError(e);
}, i = (e, t, a, o) => {
  for (var r = o > 1 ? void 0 : o ? $(t, a) : t, p = e.length - 1, u; p >= 0; p--)
    (u = e[p]) && (r = (o ? u(t, a, r) : u(r)) || r);
  return o && r && U(t, a, r), r;
}, f = (e, t, a) => t.has(e) || w("Cannot " + a), c = (e, t, a) => (f(e, t, "read from private field"), a ? a.call(e) : t.get(e)), v = (e, t, a) => t.has(e) ? w("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), g = (e, t, a, o) => (f(e, t, "write to private field"), t.set(e, a), a), _ = (e, t, a) => (f(e, t, "access private method"), a), n, h, l, d, E;
let s = class extends C {
  constructor() {
    super(...arguments), v(this, l), v(this, n, !1), v(this, h), this.readonly = !1, this._showLabels = c(this, n), this._swatches = [];
  }
  set value(e) {
    g(this, h, e ? _(this, l, d).call(this, e) : void 0);
  }
  get value() {
    return c(this, h);
  }
  set config(e) {
    if (!e) return;
    this._showLabels = e?.getValueByAlias("useLabel") ?? c(this, n);
    const t = e?.getValueByAlias("items") ?? [];
    this._swatches = t.map((a) => _(this, l, d).call(this, a));
  }
  render() {
    return b`<umb-input-color
			value=${this.value?.value ?? ""}
			.swatches=${this._swatches}
			?showLabels=${this._showLabels}
			@change=${_(this, l, E)}
			?readonly=${this.readonly}></umb-input-color>`;
  }
};
n = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
d = function(e) {
  return {
    label: e.label,
    // hex color regex adapted from: https://stackoverflow.com/a/9682781/12787
    value: e.value.match(/^(?:[0-9a-f]{3}){1,2}$/i) ? `#${e.value}` : e.value
  };
};
E = function(e) {
  const t = e.target.value;
  this.value = this._swatches.find((a) => a.value === t), this.dispatchEvent(new L());
};
i([
  m({ type: Object })
], s.prototype, "value", 1);
i([
  m({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 2);
i([
  y()
], s.prototype, "_showLabels", 2);
i([
  y()
], s.prototype, "_swatches", 2);
s = i([
  P("umb-property-editor-ui-color-picker")
], s);
const W = s;
export {
  s as UmbPropertyEditorUIColorPickerElement,
  W as default
};
//# sourceMappingURL=property-editor-ui-color-picker.element-B9ebwPrM.js.map

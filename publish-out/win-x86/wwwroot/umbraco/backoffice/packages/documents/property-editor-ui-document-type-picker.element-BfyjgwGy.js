import { UmbChangeEvent as h } from "@umbraco-cms/backoffice/event";
import { html as _, property as y, state as l, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, i = (e, t, n, o) => {
  for (var a = o > 1 ? void 0 : o ? E(t, n) : t, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (a = (o ? p(t, n, a) : p(a)) || a);
  return o && a && f(t, n, a), a;
}, P = (e, t, n) => t.has(e) || u("Cannot " + n), x = (e, t, n) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), T = (e, t, n) => (P(e, t, "access private method"), n), m, c;
let r = class extends v {
  constructor() {
    super(...arguments), x(this, m), this.readonly = !1, this._min = 0, this._max = 1 / 0;
  }
  set config(e) {
    if (!e) return;
    const t = e?.getValueByAlias("validationLimit");
    this._min = t?.min ?? 0, this._max = t?.max ?? 1 / 0, this._elementTypesOnly = e.getValueByAlias("onlyPickElementTypes") ?? !1;
  }
  render() {
    return _`
			<umb-input-document-type
				.min=${this._min}
				.max=${this._max}
				.value=${this.value}
				.readonly=${this.readonly}
				.elementTypesOnly=${this._elementTypesOnly ?? !1}
				@change=${T(this, m, c)}>
			</umb-input-document-type>
		`;
  }
};
m = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = e.target.value, this.dispatchEvent(new h());
};
i([
  y()
], r.prototype, "value", 2);
i([
  y({ type: Boolean, attribute: "readonly" })
], r.prototype, "readonly", 2);
i([
  l()
], r.prototype, "_min", 2);
i([
  l()
], r.prototype, "_max", 2);
i([
  l()
], r.prototype, "_elementTypesOnly", 2);
r = i([
  d("umb-property-editor-ui-document-type-picker")
], r);
const $ = r;
export {
  r as UmbPropertyEditorUIDocumentTypePickerElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-document-type-picker.element-BfyjgwGy.js.map

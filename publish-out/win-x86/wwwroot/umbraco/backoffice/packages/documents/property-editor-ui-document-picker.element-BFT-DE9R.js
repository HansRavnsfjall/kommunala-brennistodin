import { e as h } from "./manifests-BP7S9LPy.js";
import { UmbChangeEvent as l } from "@umbraco-cms/backoffice/event";
import { html as v, property as u, state as d, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var E = Object.defineProperty, x = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, n = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? x(t, r) : t, s = e.length - 1, m; s >= 0; s--)
    (m = e[s]) && (o = (i ? m(t, r, o) : m(o)) || o);
  return i && o && E(t, r, o), o;
}, P = (e, t, r) => t.has(e) || _("Cannot " + r), U = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), I = (e, t, r) => (P(e, t, "access private method"), r), p, c;
let a = class extends f {
  constructor() {
    super(...arguments), U(this, p), this.readonly = !1, this._min = 0, this._max = 1;
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("validationLimit");
    t && (this._min = t.min && t.min > 0 ? t.min : 0, this._max = t.max && t.max > 0 ? t.max : 1), this._startNodeId = e.getValueByAlias("startNodeId");
  }
  render() {
    const e = this._startNodeId ? { unique: this._startNodeId, entityType: h } : void 0;
    return v`
			<umb-input-document
				.min=${this._min}
				.max=${this._max}
				.startNode=${e}
				.value=${this.value}
				@change=${I(this, p, c)}
				?readonly=${this.readonly}>
			</umb-input-document>
		`;
  }
};
p = /* @__PURE__ */ new WeakSet();
c = function(e) {
  this.value = e.target.value, this.dispatchEvent(new l());
};
n([
  u()
], a.prototype, "value", 2);
n([
  u({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
n([
  d()
], a.prototype, "_min", 2);
n([
  d()
], a.prototype, "_max", 2);
n([
  d()
], a.prototype, "_startNodeId", 2);
a = n([
  y("umb-property-editor-ui-document-picker")
], a);
const g = a;
export {
  a as UmbPropertyEditorUIDocumentPickerElement,
  g as default
};
//# sourceMappingURL=property-editor-ui-document-picker.element-BFT-DE9R.js.map

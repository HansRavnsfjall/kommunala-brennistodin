import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
import { html as b, property as i, state as n, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as c, UMB_VALIDATION_FALSE_LOCALIZATION_KEY as f } from "@umbraco-cms/backoffice/validation";
var v = Object.defineProperty, L = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, o = (e, t, r, s) => {
  for (var l = s > 1 ? void 0 : s ? L(t, r) : t, h = e.length - 1, p; h >= 0; h--)
    (p = e[h]) && (l = (s ? p(t, r, l) : p(l)) || l);
  return s && l && v(t, r, l), l;
}, O = (e, t, r) => t.has(e) || _("Cannot " + r), E = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), w = (e, t, r) => (O(e, t, "access private method"), r), m, d;
let a = class extends c(u) {
  constructor() {
    super(...arguments), E(this, m), this.readonly = !1, this.mandatoryMessage = f, this._showLabels = !1;
  }
  set config(e) {
    e && (this._labelOff = e.getValueByAlias("labelOff"), this._labelOn = e.getValueByAlias("labelOn"), this._showLabels = !!e.getValueByAlias("showLabels"), this._ariaLabel = e.getValueByAlias("ariaLabel"));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-toggle"));
  }
  render() {
    return b`
			<umb-input-toggle
				.ariaLabel=${this._ariaLabel ? this.localize.string(this._ariaLabel) : this.localize.term("general_toggleFor", [this.name])}
				.labelOn=${this._labelOn}
				.labelOff=${this._labelOff}
				?checked=${this.value}
				?showLabels=${this._showLabels}
				?required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				@change=${w(this, m, d)}
				?readonly=${this.readonly}>
			</umb-input-toggle>
		`;
  }
};
m = /* @__PURE__ */ new WeakSet();
d = function(e) {
  const t = e.target.checked;
  this.value = this.mandatory ? t ?? null : t, this.dispatchEvent(new y());
};
o([
  i({ type: String })
], a.prototype, "name", 2);
o([
  i({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
o([
  i({ type: Boolean })
], a.prototype, "mandatory", 2);
o([
  i({ type: String })
], a.prototype, "mandatoryMessage", 2);
o([
  n()
], a.prototype, "_ariaLabel", 2);
o([
  n()
], a.prototype, "_labelOff", 2);
o([
  n()
], a.prototype, "_labelOn", 2);
o([
  n()
], a.prototype, "_showLabels", 2);
a = o([
  g("umb-property-editor-ui-toggle")
], a);
const B = a;
export {
  a as UmbPropertyEditorUIToggleElement,
  B as default
};
//# sourceMappingURL=property-editor-ui-toggle.element-BvT7fQn-.js.map

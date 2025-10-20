import { html as i, repeat as w, when as m, unsafeHTML as x, css as I, property as p, state as n, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { p as c } from "./parse-boolean.function.js";
import { UmbChangeEvent as A } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as D, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as y } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
var V = Object.defineProperty, b = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, r = (e, t, a, l) => {
  for (var s = l > 1 ? void 0 : l ? b(t, a) : t, h = e.length - 1, d; h >= 0; h--)
    (d = e[h]) && (s = (l ? d(t, a, s) : d(s)) || s);
  return l && s && V(t, a, s), s;
}, B = (e, t, a) => t.has(e) || f("Cannot " + a), M = (e, t, a) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), _ = (e, t, a) => (B(e, t, "access private method"), a), u, v, g;
let o = class extends D(E) {
  constructor() {
    super(), M(this, u), this.mandatory = !1, this.mandatoryMessage = y, this.readonly = !1, this._defaultValue = "", this._flexDirection = "column", this._items = [], this._showDescriptions = !1, this._showIcons = !1, this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? y,
      () => !this.readonly && !!this.mandatory && (this.value === void 0 || this.value === null || this.value === "")
    );
  }
  set value(e) {
    super.value = Array.isArray(e) === !0 ? e[0] : e ?? "";
  }
  get value() {
    return super.value;
  }
  set config(e) {
    e && (this._defaultValue = e.getValueByAlias("defaultValue") ?? "", this._items = e.getValueByAlias("items") ?? [], this._showDescriptions = c(e.getValueByAlias("showDescriptions")), this._showIcons = c(e.getValueByAlias("showIcons")), this._flexDirection = e.getValueByAlias("orientation") === "horizontal" ? "row" : "column");
  }
  render() {
    var e;
    return (e = this._items) != null && e.length ? i`
			<uui-radio-group
				class=${this._flexDirection}
				.requiredMessage=${this.mandatoryMessage}
				.value=${this.value || this._defaultValue}
				?required=${this.mandatory}
				?readonly=${this.readonly}
				@change=${_(this, u, v)}>
				${w(
      this._items,
      (t) => t.value,
      (t) => _(this, u, g).call(this, t)
    )}
			</uui-radio-group>
		` : i`
				<contentment-info-box
					compact
					type="warning"
					icon="icon-alert"
					heading="There are no items to display"></contentment-info-box>
			`;
  }
};
u = /* @__PURE__ */ new WeakSet();
v = function(e) {
  e.target.nodeName === "UUI-RADIO" && (this.value = e.target.value, this.dispatchEvent(new A()));
};
g = function(e) {
  return i`
			<uui-radio value=${e.value} ?disabled=${e.disabled}>
				<div class="outer">
					${m(this._showIcons && e.icon, (t) => i`<umb-icon name=${t}></umb-icon>`)}
					<uui-form-layout-item>
						<span slot="label">${this.localize.string(e.name)}</span>
						${m(
    this._showDescriptions && e.description,
    () => i`<span slot="description">${x(e.description)}</span>`
  )}
					</uui-form-layout-item>
				</div>
			</uui-radio>
		`;
};
o.styles = [
  I`
			.row {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 1rem;
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
r([
  p({ type: Boolean })
], o.prototype, "mandatory", 2);
r([
  p({ type: String })
], o.prototype, "mandatoryMessage", 2);
r([
  p()
], o.prototype, "value", 1);
r([
  p({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
r([
  n()
], o.prototype, "_defaultValue", 2);
r([
  n()
], o.prototype, "_flexDirection", 2);
r([
  n()
], o.prototype, "_items", 2);
r([
  n()
], o.prototype, "_showDescriptions", 2);
r([
  n()
], o.prototype, "_showIcons", 2);
o = r([
  $("contentment-property-editor-ui-radio-button-list")
], o);
export {
  o as ContentmentPropertyEditorUIRadioButtonListElement,
  o as element
};
//# sourceMappingURL=radio-button-list.element.js.map

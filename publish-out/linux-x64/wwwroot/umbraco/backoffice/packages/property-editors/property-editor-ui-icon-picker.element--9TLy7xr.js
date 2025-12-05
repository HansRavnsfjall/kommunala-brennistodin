import { html as a, property as p, state as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { umbOpenModal as _ } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as h } from "@umbraco-cms/backoffice/icon";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
import { extractUmbColorVariable as f } from "@umbraco-cms/backoffice/resources";
import { UmbChangeEvent as b } from "@umbraco-cms/backoffice/event";
var d = Object.defineProperty, y = Object.getOwnPropertyDescriptor, l = (o, t, c, i) => {
  for (var e = i > 1 ? void 0 : i ? y(t, c) : t, s = o.length - 1, n; s >= 0; s--)
    (n = o[s]) && (e = (i ? n(t, c, e) : n(e)) || e);
  return i && e && d(t, c, e), e;
};
let r = class extends v {
  constructor() {
    super(...arguments), this._value = "", this._icon = "", this._color = "";
  }
  set value(o) {
    this._value = o ?? "";
    const t = this._value.split(" ");
    t.length === 2 ? (this._icon = t[0], this._color = t[1].replace("color-", "")) : (this._icon = this._value, this._color = "");
  }
  get value() {
    return this._value;
  }
  async _openModal() {
    const o = await _(this, h).catch(() => {
    });
    o && (o.color ? this.value = `${o.icon} color-${o.color}` : this.value = o.icon, this.dispatchEvent(new b()));
  }
  render() {
    return a`
			<uui-button
				compact
				label=${this.localize.term("defaultdialogs_selectIcon")}
				look="outline"
				@click=${this._openModal}>
				${this._color ? a` <uui-icon name="${this._icon}" style="color:var(${f(this._color)})"></uui-icon>` : a` <uui-icon name="${this._icon}"></uui-icon>`}
			</uui-button>
		`;
  }
};
l([
  p()
], r.prototype, "value", 1);
l([
  u()
], r.prototype, "_icon", 2);
l([
  u()
], r.prototype, "_color", 2);
r = l([
  m("umb-property-editor-ui-icon-picker")
], r);
const g = r;
export {
  r as UmbPropertyEditorUIIconPickerElement,
  g as default
};
//# sourceMappingURL=property-editor-ui-icon-picker.element--9TLy7xr.js.map

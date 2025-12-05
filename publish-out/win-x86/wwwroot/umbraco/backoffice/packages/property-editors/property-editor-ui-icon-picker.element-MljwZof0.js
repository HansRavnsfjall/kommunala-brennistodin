import { ifDefined as h, html as n, property as u, state as p, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { umbOpenModal as d } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as _ } from "@umbraco-cms/backoffice/icon";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { extractUmbColorVariable as v } from "@umbraco-cms/backoffice/resources";
import { UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
import { UmbFormControlMixin as b } from "@umbraco-cms/backoffice/validation";
var I = Object.defineProperty, E = Object.getOwnPropertyDescriptor, l = (o, t, i, c) => {
  for (var r = c > 1 ? void 0 : c ? E(t, i) : t, s = o.length - 1, a; s >= 0; s--)
    (a = o[s]) && (r = (c ? a(t, i, r) : a(r)) || r);
  return c && r && I(t, i, r), r;
};
let e = class extends b(f, void 0) {
  constructor() {
    super(...arguments), this.mandatory = !1, this._icon = "", this._color = "", this._placeholderIcon = "";
  }
  firstUpdated() {
    this.addValidator(
      "valueMissing",
      () => "Icon is required",
      () => this.mandatory && !this._icon
    );
  }
  set value(o) {
    const t = o ?? "";
    super.value = t;
    const i = t.split(" ");
    i.length === 2 ? (this._icon = i[0], this._color = i[1].replace("color-", "")) : (this._icon = t, this._color = "");
  }
  get value() {
    return super.value ?? "";
  }
  set config(o) {
    if (!o) return;
    const t = o.getValueByAlias("placeholder");
    this._placeholderIcon = typeof t == "string" ? t : "";
  }
  async _openModal() {
    const o = await d(this, _, {
      value: {
        icon: this._icon,
        color: this._color
      },
      data: { placeholder: this._placeholderIcon, showEmptyOption: !this.mandatory }
    }).catch(() => {
    });
    o && (o.icon ? o.color ? this.value = `${o.icon} color-${o.color}` : this.value = o.icon : this.value = "", this.dispatchEvent(new y()));
  }
  render() {
    const o = !this._icon;
    return n`
			<uui-button
				compact
				look="outline"
				label=${this.localize.term("defaultdialogs_selectIcon")}
				@click=${this._openModal}>
				${o ? n` <uui-icon name="${h(this._placeholderIcon)}" style="opacity:.35"></uui-icon> ` : this._color ? n`
								<uui-icon name="${this._icon}" style="color:var(${v(this._color)})"> </uui-icon>
							` : n`<uui-icon name="${this._icon}"></uui-icon>`}
			</uui-button>
		`;
  }
};
l([
  u({ type: Boolean })
], e.prototype, "mandatory", 2);
l([
  u()
], e.prototype, "value", 1);
l([
  p()
], e.prototype, "_icon", 2);
l([
  p()
], e.prototype, "_color", 2);
l([
  p()
], e.prototype, "_placeholderIcon", 2);
e = l([
  m("umb-property-editor-ui-icon-picker")
], e);
const w = e;
export {
  e as UmbPropertyEditorUIIconPickerElement,
  w as default
};
//# sourceMappingURL=property-editor-ui-icon-picker.element-MljwZof0.js.map

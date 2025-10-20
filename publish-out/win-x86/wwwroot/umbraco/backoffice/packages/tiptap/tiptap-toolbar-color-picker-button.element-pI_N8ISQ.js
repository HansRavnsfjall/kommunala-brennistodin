import { UmbTiptapToolbarButtonElement as h } from "./tiptap-toolbar-button.element-Boria81H.js";
import { when as b, html as n, css as m, state as v, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
var g = Object.defineProperty, f = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, p = (e, o, t, i) => {
  for (var r = i > 1 ? void 0 : i ? f(o, t) : o, u = e.length - 1, l; u >= 0; u--)
    (l = e[u]) && (r = (i ? l(o, t, r) : l(r)) || r);
  return i && r && g(o, t, r), r;
}, C = (e, o, t) => o.has(e) || c("Cannot " + t), k = (e, o, t) => o.has(e) ? c("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), $ = (e, o, t) => (C(e, o, "access private method"), t), s, d;
let a = class extends h {
  constructor() {
    super(...arguments), k(this, s);
  }
  render() {
    const e = this.localize.string(this.manifest?.meta.label);
    return n`
			<uui-button-group>
				<uui-button
					compact
					label=${e}
					popovertarget=${this._selectedColor ? "" : "color-picker-popover"}
					title=${e}
					?disabled=${this.api && this.editor && this.api.isDisabled(this.editor)}
					@click=${() => this.api?.execute(this.editor, this._selectedColor)}>
					<div>
						${b(
      this.manifest?.meta.icon,
      (o) => n`<umb-icon name=${o}></umb-icon>`,
      () => n`<span>${e}</span>`
    )}
						<div id="color-selected" style="background-color:${this._selectedColor ?? "#000"};"></div>
					</div>
				</uui-button>
				<uui-button compact popovertarget="color-picker-popover" label="Open color picker">
					<uui-symbol-expand open></uui-symbol-expand>
				</uui-button>
				<uui-popover-container id="color-picker-popover" placement="bottom-end">
					<umb-popover-layout>
						<uui-scroll-container>
							<uui-color-picker inline label=${e} @change=${$(this, s, d)}></uui-color-picker>
						</uui-scroll-container>
					</umb-popover-layout>
				</uui-popover-container>
			</uui-button-group>
		`;
  }
};
s = /* @__PURE__ */ new WeakSet();
d = function(e) {
  this._selectedColor = e.target.value, this.api?.execute(this.editor, this._selectedColor);
};
a.styles = [
  m`
			uui-button-group:hover {
				background-color: var(--uui-color-background);
				border-radius: var(--uui-border-radius);
			}

			uui-scroll-container {
				border-radius: var(--uui-border-radius);
				overflow-x: hidden;
			}

			umb-icon {
				height: 1em;
				width: 1em;
				margin-bottom: 1px;
			}

			#color-selected {
				height: var(--uui-size-1);
			}
		`
];
p([
  v()
], a.prototype, "_selectedColor", 2);
a = p([
  _("umb-tiptap-toolbar-color-picker-button")
], a);
export {
  a as UmbTiptapToolbarColorPickerButtonElement,
  a as element
};
//# sourceMappingURL=tiptap-toolbar-color-picker-button.element-pI_N8ISQ.js.map

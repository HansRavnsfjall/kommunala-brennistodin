import { UmbTiptapToolbarButtonElement as b } from "./tiptap-toolbar-button.element-CVnmHwBo.js";
import { when as h, html as n, css as m, state as v, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
var g = Object.defineProperty, f = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, p = (e, o, t, i) => {
  for (var r = i > 1 ? void 0 : i ? f(o, t) : o, u = e.length - 1, l; u >= 0; u--)
    (l = e[u]) && (r = (i ? l(o, t, r) : l(r)) || r);
  return i && r && g(o, t, r), r;
}, C = (e, o, t) => o.has(e) || c("Cannot " + t), $ = (e, o, t) => o.has(e) ? c("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), k = (e, o, t) => (C(e, o, "access private method"), t), s, d;
let a = class extends b {
  constructor() {
    super(...arguments), $(this, s);
  }
  render() {
    const e = this.localize.string(this.manifest?.meta.label), o = this.api?.isDisabled(this.editor);
    return n`
			<uui-button-group>
				<uui-button
					compact
					label=${e}
					popovertarget=${this._selectedColor ? "" : "color-picker-popover"}
					title=${e}
					?disabled=${o}
					@click=${() => this.api?.execute(this.editor, this._selectedColor)}>
					<div>
						${h(
      this.manifest?.meta.icon,
      (t) => n`<umb-icon name=${t}></umb-icon>`,
      () => n`<span>${e}</span>`
    )}
						<div id="color-selected" style="background-color:${this._selectedColor ?? "#000"};"></div>
					</div>
				</uui-button>
				<uui-button compact popovertarget="color-picker-popover" label="Open color picker" ?disabled=${o}>
					<uui-symbol-expand open></uui-symbol-expand>
				</uui-button>
				<uui-popover-container id="color-picker-popover" placement="bottom-end">
					<umb-popover-layout>
						<uui-scroll-container>
							<uui-color-picker inline label=${e} @change=${k(this, s, d)}></uui-color-picker>
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

			uui-button[disabled] {
				#color-selected {
					opacity: 0.3;
				}
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
//# sourceMappingURL=tiptap-toolbar-color-picker-button.element-B47xvS3V.js.map

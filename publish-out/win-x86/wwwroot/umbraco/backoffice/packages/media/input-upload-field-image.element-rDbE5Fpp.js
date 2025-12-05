import { html as l, css as n, property as m, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
var c = Object.defineProperty, d = Object.getOwnPropertyDescriptor, h = (e, r, p, i) => {
  for (var t = i > 1 ? void 0 : i ? d(r, p) : r, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (t = (i ? s(r, p, t) : s(t)) || t);
  return i && t && c(r, p, t), t;
};
let a = class extends g {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    if (!this.path) return l`<uui-loader></uui-loader>`;
    const e = this.path.split("/").pop() ?? "";
    return l`<img src=${this.path} alt=${e} loading="lazy" />`;
  }
};
a.styles = [
  n`
			:host {
				position: relative;
				min-height: 240px;
				max-height: 400px;
				width: fit-content;
				max-width: 100%;
			}

			img {
				object-fit: contain;
				width: auto;
				height: 100%;
				background-color: #fff;
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-repeat: repeat;
				background-size: 10px 10px;
			}
		`
];
h([
  m({ type: String })
], a.prototype, "path", 2);
a = h([
  u("umb-input-upload-field-image")
], a);
export {
  a as default
};
//# sourceMappingURL=input-upload-field-image.element-rDbE5Fpp.js.map

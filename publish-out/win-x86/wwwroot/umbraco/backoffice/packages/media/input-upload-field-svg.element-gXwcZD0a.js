import { html as h, css as n, property as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
var c = Object.defineProperty, d = Object.getOwnPropertyDescriptor, l = (e, r, p, a) => {
  for (var t = a > 1 ? void 0 : a ? d(r, p) : r, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (t = (a ? s(r, p, t) : s(t)) || t);
  return a && t && c(r, p, t), t;
};
let i = class extends g {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    if (!this.path) return h`<uui-loader></uui-loader>`;
    const e = this.path.split("/").pop() ?? "";
    return h`<img src=${this.path} alt=${e} loading="lazy" />`;
  }
};
i.styles = [
  n`
			:host {
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
				max-width: 100%;
			}
		`
];
l([
  u({ type: String })
], i.prototype, "path", 2);
i = l([
  m("umb-input-upload-field-svg")
], i);
export {
  i as default
};
//# sourceMappingURL=input-upload-field-svg.element-gXwcZD0a.js.map

import { html as u, css as d, property as n, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as m } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, c = Object.getOwnPropertyDescriptor, a = (e, r, s, p) => {
  for (var t = p > 1 ? void 0 : p ? c(r, s) : r, i = e.length - 1, l; i >= 0; i--)
    (l = e[i]) && (t = (p ? l(r, s, t) : l(t)) || t);
  return p && t && f(r, s, t), t;
};
let o = class extends m {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    if (!this.path) return u`<uui-loader></uui-loader>`;
    const e = this.path.split("/").pop() ?? "";
    return u`<audio controls src=${this.path} title=${e}></audio>`;
  }
};
o.styles = [
  d`
			:host {
				display: flex;
				width: 999px;
				max-width: 100%;
			}

			audio {
				width: 100%;
			}
		`
];
a([
  n({ type: String })
], o.prototype, "path", 2);
o = a([
  h("umb-input-upload-field-audio")
], o);
export {
  o as default
};
//# sourceMappingURL=input-upload-field-audio.element-lrG6Dl5g.js.map

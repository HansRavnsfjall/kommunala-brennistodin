import { html as u, css as h, property as n, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as m } from "@umbraco-cms/backoffice/lit-element";
var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, a = (e, r, i, o) => {
  for (var t = o > 1 ? void 0 : o ? f(r, i) : r, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (t = (o ? l(r, i, t) : l(t)) || t);
  return o && t && c(r, i, t), t;
};
let p = class extends m {
  constructor() {
    super(...arguments), this.path = "";
  }
  render() {
    if (!this.path) return u`<uui-loader></uui-loader>`;
    const e = this.path.split("/").pop() ?? "";
    return u`
			<video controls title=${e}>
				<source src=${this.path} />
				Video format not supported
			</video>
		`;
  }
};
p.styles = [
  h`
			video {
				height: 100%;
				max-height: 500px;
				width: 100%;
				max-width: 800px;
			}
		`
];
a([
  n({ type: String })
], p.prototype, "path", 2);
p = a([
  d("umb-input-upload-field-video")
], p);
export {
  p as default
};
//# sourceMappingURL=input-upload-field-video.element-BulE3-rF.js.map

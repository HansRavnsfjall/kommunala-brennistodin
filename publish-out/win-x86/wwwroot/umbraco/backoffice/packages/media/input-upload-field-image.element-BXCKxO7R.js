import { html as o, css as u, property as m, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, l = (t) => {
  throw TypeError(t);
}, d = (t, e, a, i) => {
  for (var r = i > 1 ? void 0 : i ? _(e, a) : e, p = t.length - 1, s; p >= 0; p--)
    (s = t[p]) && (r = (i ? s(e, a, r) : s(r)) || r);
  return i && r && v(e, a, r), r;
}, w = (t, e, a) => e.has(t) || l("Cannot " + a), x = (t, e, a) => (w(t, e, "read from private field"), a ? a.call(t) : e.get(t)), y = (t, e, a) => e.has(t) ? l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), h, c;
let n = class extends f {
  constructor() {
    super(...arguments), y(this, h), this.path = "";
  }
  render() {
    if (!this.path) return o`<uui-loader></uui-loader>`;
    const t = x(this, h, c);
    return o`<uui-card-media id="card" .name=${t} href="${this.path}" target="_blank">
			<img id="image" src=${this.path} alt="${t}" loading="lazy" />
		</uui-card-media>`;
  }
};
h = /* @__PURE__ */ new WeakSet();
c = function() {
  return this.path.split("/").pop() ?? "";
};
n.styles = [
  u`
			:host {
				position: relative;
				min-height: 240px;
				max-height: 400px;
				width: fit-content;
				max-width: 100%;
			}

			#card {
				width: 100%;
				height: 100%;
			}

			#image {
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
d([
  m({ type: String })
], n.prototype, "path", 2);
n = d([
  g("umb-input-upload-field-image")
], n);
export {
  n as default
};
//# sourceMappingURL=input-upload-field-image.element-BXCKxO7R.js.map

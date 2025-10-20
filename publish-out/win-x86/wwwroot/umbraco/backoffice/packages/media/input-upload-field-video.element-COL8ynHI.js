import { html as l, css as v, property as c, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
var m = Object.defineProperty, y = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, h = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? y(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && m(e, r, a), a;
}, w = (t, e, r) => e.has(t) || d("Cannot " + r), E = (t, e, r) => (w(t, e, "read from private field"), r ? r.call(t) : e.get(t)), x = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), n, u;
let p = class extends f {
  constructor() {
    super(...arguments), x(this, n), this.path = "";
  }
  render() {
    return this.path ? l`
			<video controls title=${E(this, n, u)}>
				<source src=${this.path} />
				Video format not supported
			</video>
		` : l`<uui-loader></uui-loader>`;
  }
};
n = /* @__PURE__ */ new WeakSet();
u = function() {
  return this.path.split("/").pop() ?? "";
};
p.styles = [
  v`
			:host {
				display: flex;
			}
			video {
				width: 100%;
				max-width: 800px;
			}
		`
];
h([
  c({ type: String })
], p.prototype, "path", 2);
p = h([
  _("umb-input-upload-field-video")
], p);
export {
  p as default
};
//# sourceMappingURL=input-upload-field-video.element-COL8ynHI.js.map

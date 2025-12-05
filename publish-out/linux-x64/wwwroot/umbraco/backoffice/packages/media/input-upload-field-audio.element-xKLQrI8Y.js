import { html as l, css as c, property as _, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var m = Object.defineProperty, w = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, u = (t, e, r, i) => {
  for (var a = i > 1 ? void 0 : i ? w(e, r) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (a = (i ? o(e, r, a) : o(a)) || a);
  return i && a && m(e, r, a), a;
}, y = (t, e, r) => e.has(t) || d("Cannot " + r), E = (t, e, r) => (y(t, e, "read from private field"), r ? r.call(t) : e.get(t)), x = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), n, h;
let p = class extends v {
  constructor() {
    super(...arguments), x(this, n), this.path = "";
  }
  render() {
    return this.path ? l`<audio controls src=${this.path} title=${E(this, n, h)}></audio>` : l`<uui-loader></uui-loader>`;
  }
};
n = /* @__PURE__ */ new WeakSet();
h = function() {
  return this.path.split("/").pop() ?? "";
};
p.styles = [
  c`
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
u([
  _({ type: String })
], p.prototype, "path", 2);
p = u([
  f("umb-input-upload-field-audio")
], p);
export {
  p as default
};
//# sourceMappingURL=input-upload-field-audio.element-xKLQrI8Y.js.map

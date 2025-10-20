import { html as f, property as d, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var E = Object.defineProperty, g = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, u = (e, t, r, l) => {
  for (var a = l > 1 ? void 0 : l ? g(t, r) : t, p = e.length - 1, s; p >= 0; p--)
    (s = e[p]) && (a = (l ? s(t, r, a) : s(a)) || a);
  return l && a && E(t, r, a), a;
}, y = (e, t, r) => t.has(e) || _("Cannot " + r), o = (e, t, r) => (y(e, t, "read from private field"), r ? r.call(e) : t.get(e)), U = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), i, h, c;
let n = class extends v {
  constructor() {
    super(...arguments), U(this, i), this.path = "";
  }
  render() {
    return !this.path && !this.file ? f`<uui-loader></uui-loader>` : f`
			<uui-card-media
				.name=${o(this, i, h)}
				.fileExt=${o(this, i, c)}
				href=${this.path}
				target="_blank"></uui-card-media>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
h = function() {
  return this.file ? this.file.name : this.path.split("/").pop() ?? `(${this.localize.term("general_loading")}...)`;
};
c = function() {
  return o(this, i, h).split(".").pop() ?? "";
};
u([
  d()
], n.prototype, "path", 2);
u([
  d({ attribute: !1 })
], n.prototype, "file", 2);
n = u([
  m("umb-input-upload-field-file")
], n);
export {
  n as default
};
//# sourceMappingURL=input-upload-field-file.element-BPVW48sc.js.map

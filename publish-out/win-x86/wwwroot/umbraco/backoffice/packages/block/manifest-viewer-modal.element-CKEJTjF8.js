import { nothing as f, html as u, css as h, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as b } from "@umbraco-cms/backoffice/modal";
var v = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, _ = (t, a, n, e) => {
  for (var o = e > 1 ? void 0 : e ? v(a, n) : a, i = t.length - 1, c; i >= 0; i--)
    (c = t[i]) && (o = c(o) || o);
  return o;
}, y = (t, a, n) => a.has(t) || d("Cannot " + n), g = (t, a, n) => a.has(t) ? d("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(t) : a.set(t, n), m = (t, a, n) => (y(t, a, "access private method"), n), r, l;
let s = class extends b {
  constructor() {
    super(...arguments), g(this, r);
  }
  render() {
    return u`
			<umb-body-layout headline=${this.localize.term("general_manifest")} main-no-padding>
				${this.data ? u`<umb-code-block language="JSON" copy>${m(this, r, l).call(this, this.data)}</umb-code-block>` : f}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
r = /* @__PURE__ */ new WeakSet();
l = function(t) {
  let a = "{";
  for (const n in t) {
    let e = t[n];
    typeof e == "function" ? e = e.toString() : e instanceof Array ? e = JSON.stringify(e) : typeof e == "object" ? e = m(this, r, l).call(this, e) : typeof e == "number" ? e = `${e}` : typeof e == "boolean" ? e = `${e}` : e = `"${e}"`, a += `
  ${n}: ${e},`;
  }
  return a + `
}`;
};
s.styles = [
  h`
			umb-code-block {
				border: none;
				height: 100%;
			}
		`
];
s = _([
  p("umb-manifest-viewer-modal")
], s);
const w = s;
export {
  s as UmbManifestViewerModalElement,
  w as default
};
//# sourceMappingURL=manifest-viewer-modal.element-CKEJTjF8.js.map

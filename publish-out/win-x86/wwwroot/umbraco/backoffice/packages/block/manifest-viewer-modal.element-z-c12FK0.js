import { nothing as h, html as d, css as f, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as v } from "@umbraco-cms/backoffice/modal";
var _ = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, b = (e, a, n, t) => {
  for (var o = t > 1 ? void 0 : t ? _(a, n) : a, i = e.length - 1, c; i >= 0; i--)
    (c = e[i]) && (o = c(o) || o);
  return o;
}, y = (e, a, n) => a.has(e) || u("Cannot " + n), g = (e, a, n) => a.has(e) ? u("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, n), m = (e, a, n) => (y(e, a, "access private method"), n), r, l;
let s = class extends v {
  constructor() {
    super(...arguments), g(this, r);
  }
  render() {
    return d`
			<umb-body-layout headline=${this.localize.term("general_manifest")} main-no-padding>
				${this.data ? d`<umb-code-block language="JSON" copy>${m(this, r, l).call(this, this.data)}</umb-code-block>` : h}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
r = /* @__PURE__ */ new WeakSet();
l = function(e) {
  let a = "{";
  for (const n in e) {
    let t = e[n];
    typeof t == "function" ? t = t.toString() : t instanceof Array ? t = JSON.stringify(t) : typeof t == "object" ? t = m(this, r, l).call(this, t) : t = `"${t}"`, a += `
  ${n}: ${t},`;
  }
  return a + `
}`;
};
s.styles = [
  f`
			umb-code-block {
				border: none;
				height: 100%;
			}
		`
];
s = b([
  p("umb-manifest-viewer-modal")
], s);
const w = s;
export {
  s as UmbManifestViewerModalElement,
  w as default
};
//# sourceMappingURL=manifest-viewer-modal.element-z-c12FK0.js.map

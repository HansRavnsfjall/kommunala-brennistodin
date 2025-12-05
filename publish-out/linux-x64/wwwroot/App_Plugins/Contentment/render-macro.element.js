import { when as u, html as p, css as v, property as _, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var w = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, m = (e, t, r, a) => {
  for (var n = a > 1 ? void 0 : a ? g(t, r) : t, i = e.length - 1, c; i >= 0; i--)
    (c = e[i]) && (n = (a ? c(t, r, n) : c(n)) || n);
  return a && n && w(t, r, n), n;
}, f = (e, t, r) => t.has(e) || d("Cannot " + r), l = (e, t, r) => (f(e, t, "read from private field"), r ? r.call(e) : t.get(e)), E = (e, t, r) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), P = (e, t, r, a) => (f(e, t, "write to private field"), t.set(e, r), r), o;
let s = class extends y {
  constructor() {
    super(...arguments), E(this, o, "");
  }
  set config(e) {
    e && P(this, o, JSON.stringify(e, null, 2));
  }
  render() {
    return p`
			<contentment-info-box type="warning" icon="icon-alert" heading="Render Macro has been deprecated">
				<p><em>Support for Macros were deprecated in Umbraco 14. Please consider alternative functionality.</em></p>
				${u(
      l(this, o),
      () => p`
							<details>
								<summary>Macro configuration</summary>
								<umb-code-block copy>${l(this, o)}</umb-code-block>
							</details>
						`
    )}
			</contentment-info-box>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
s.styles = [
  v`
			details > summary {
				cursor: pointer;
				font-weight: bold;
			}
		`
];
m([
  _()
], s.prototype, "value", 2);
s = m([
  h("contentment-property-editor-ui-render-macro")
], s);
export {
  s as ContentmentPropertyEditorUIRenderMacroElement,
  s as element
};
//# sourceMappingURL=render-macro.element.js.map

import { t as b } from "./hide-label.function.js";
import { p as g } from "./parse-boolean.function.js";
import { when as y, html as m, css as w, property as C, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as k } from "@umbraco-cms/backoffice/lit-element";
var E = Object.defineProperty, P = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, v = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? P(t, r) : t, c = e.length - 1, d; c >= 0; c--)
    (d = e[c]) && (a = (s ? d(t, r, a) : d(a)) || a);
  return s && a && E(t, r, a), a;
}, _ = (e, t, r) => t.has(e) || f("Cannot " + r), i = (e, t, r) => (_(e, t, "read from private field"), t.get(e)), u = (e, t, r) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), h = (e, t, r, s) => (_(e, t, "write to private field"), t.set(e, r), r), o, l, n;
let p = class extends k {
  constructor() {
    super(...arguments), u(this, o), u(this, l, !1), u(this, n);
  }
  set config(e) {
    e && (h(this, o, JSON.stringify(e, null, 2)), h(this, l, g(e.getValueByAlias("hideLabel"))), h(this, n, JSON.stringify(this.value, null, 2)));
  }
  connectedCallback() {
    super.connectedCallback(), i(this, l) && b(this);
  }
  render() {
    return m`
			<contentment-info-box type="warning" icon="icon-alert" heading="This property editor is in read-only mode.">
				${y(
      i(this, n),
      () => m`
							<details>
								<summary>Value</summary>
								<umb-code-block copy>${i(this, n)}</umb-code-block>
							</details>
						`
    )}
				${y(
      i(this, o),
      () => m`
							<details>
								<summary>Configuration</summary>
								<umb-code-block copy>${i(this, o)}</umb-code-block>
							</details>
						`
    )}
			</contentment-info-box>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
p.styles = [
  w`
			details > summary {
				cursor: pointer;
			}
		`
];
v([
  C({ attribute: !1 })
], p.prototype, "value", 2);
p = v([
  O("contentment-property-editor-ui-read-only")
], p);
export {
  p as ContentmentPropertyEditorUIReadOnlyElement,
  p as element
};
//# sourceMappingURL=read-only.element.js.map

import { unsafeHTML as _, css as g, property as w, customElement as P } from "@umbraco-cms/backoffice/external/lit";
import { t as E } from "./hide-label.function.js";
import { t as b } from "./move-before-property-group.function.js";
import { p as f } from "./parse-boolean.function.js";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as B } from "@umbraco-cms/backoffice/style";
var C = Object.defineProperty, L = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, c = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? L(t, r) : t, d = e.length - 1, l; d >= 0; d--)
    (l = e[d]) && (a = (s ? l(t, r, a) : l(a)) || a);
  return s && a && C(t, r, a), a;
}, y = (e, t, r) => t.has(e) || h("Cannot " + r), u = (e, t, r) => (y(e, t, "read from private field"), t.get(e)), v = (e, t, r) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r, s) => (y(e, t, "write to private field"), t.set(e, r), r), o, i, p;
let n = class extends x {
  constructor() {
    super(...arguments), v(this, o, !1), v(this, i, !1), v(this, p);
  }
  set config(e) {
    if (!e) return;
    const t = e.getValueByAlias("notes");
    m(this, p, typeof t == "string" ? t : t.markup), m(this, o, f(e.getValueByAlias("hideLabel"))), m(this, i, f(e.getValueByAlias("hidePropertyGroup")));
  }
  firstUpdated(e) {
    super.firstUpdated(e), u(this, o) && E(this), u(this, i) && b(this);
  }
  render() {
    return _(u(this, p));
  }
};
o = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
n.styles = [
  B,
  g`
			details {
				> summary {
					cursor: pointer;
				}

				&.well {
					background-color: var(--uui-color-divider);
					border: 1px solid var(--uui-color-divider-standalone);
					border-radius: var(--uui-border-radius, 3px);
					padding: var(--uui-size-space-5);
				}

				& + details {
					margin-top: var(--uui-size-space-3);
				}

				p {
					margin-bottom: 0;

					&:last-of-type {
						margin-bottom: var(--uui-size-space-3);
					}
				}
			}
		`
];
c([
  w()
], n.prototype, "value", 2);
n = c([
  P("contentment-property-editor-ui-notes")
], n);
export {
  n as ContentmentPropertyEditorUINotesElement,
  n as element
};
//# sourceMappingURL=notes.element.js.map

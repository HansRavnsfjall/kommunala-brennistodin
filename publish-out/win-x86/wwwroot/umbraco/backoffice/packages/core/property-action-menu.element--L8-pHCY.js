import { css as l, state as d, property as v, customElement as y, nothing as h, repeat as _, html as f } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as b } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsElementAndApiInitializer as g } from "@umbraco-cms/backoffice/extension-api";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as A } from "@umbraco-cms/backoffice/style";
var U = Object.defineProperty, x = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, u = (t, r, e, i) => {
  for (var o = i > 1 ? void 0 : i ? x(r, e) : r, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (o = (i ? a(r, e, o) : a(o)) || o);
  return i && o && U(r, e, o), o;
}, c = (t, r, e) => r.has(t) || m("Cannot " + e), w = (t, r, e) => (c(t, r, "read from private field"), e ? e.call(t) : r.get(t)), P = (t, r, e) => r.has(t) ? m("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(t) : r.set(t, e), z = (t, r, e, i) => (c(t, r, "write to private field"), r.set(t, e), e), n;
function C(t) {
  return [{ meta: t.meta }];
}
let p = class extends E {
  constructor() {
    super(...arguments), this._actions = [], P(this, n, "");
  }
  set propertyEditorUiAlias(t) {
    z(this, n, t), new g(
      this,
      b,
      "propertyAction",
      C,
      (r) => r.forPropertyEditorUis.includes(t),
      (r) => this._actions = r,
      "extensionsInitializer"
    );
  }
  get propertyEditorUiAlias() {
    return w(this, n);
  }
  render() {
    return this._actions?.length ? f`
			<uui-button
				id="popover-trigger"
				popovertarget="property-action-popover"
				data-mark="open-property-actions"
				label=${this.localize.term("actions_viewActionsFor")}
				compact>
				<uui-symbol-more id="more-symbol"></uui-symbol-more>
			</uui-button>
			<uui-popover-container id="property-action-popover">
				<umb-popover-layout>
					${_(
      this._actions,
      (t) => t.alias,
      (t) => t.component
    )}
				</umb-popover-layout>
			</uui-popover-container>
		` : h;
  }
};
n = /* @__PURE__ */ new WeakMap();
p.styles = [
  A,
  l`
			:host {
				--uui-menu-item-flat-structure: 1;
			}

			#more-symbol {
				font-size: 1rem;
			}

			#popover-trigger {
				--uui-button-padding-top-factor: 0.5;
				--uui-button-padding-bottom-factor: 0.1;
				--uui-button-height: 18px;
				--uui-button-border-radius: 6px;
			}
		`
];
u([
  d()
], p.prototype, "_actions", 2);
u([
  v()
], p.prototype, "propertyEditorUiAlias", 1);
p = u([
  y("umb-property-action-menu")
], p);
export {
  p as U
};
//# sourceMappingURL=property-action-menu.element--L8-pHCY.js.map

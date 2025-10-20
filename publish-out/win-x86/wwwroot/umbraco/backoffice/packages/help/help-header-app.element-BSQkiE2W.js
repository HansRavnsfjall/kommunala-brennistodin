import { UMB_HELP_MENU_ALIAS as m } from "./index.js";
import { html as i, nothing as d, css as b, state as M, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { umbExtensionsRegistry as E } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as H } from "@umbraco-cms/backoffice/extension-api";
import { UmbHeaderAppButtonElement as c } from "@umbraco-cms/backoffice/components";
var I = Object.defineProperty, x = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, _ = (e, t, n, o) => {
  for (var r = o > 1 ? void 0 : o ? x(t, n) : t, u = e.length - 1, p; u >= 0; u--)
    (p = e[u]) && (r = (o ? p(t, n, r) : p(r)) || r);
  return o && r && I(t, n, r), r;
}, A = (e, t, n) => t.has(e) || h("Cannot " + n), P = (e, t, n) => t.has(e) ? h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), l = (e, t, n) => (A(e, t, "access private method"), n), s, f, v;
let a = class extends c {
  constructor() {
    super(), P(this, s), this._helpMenuHasMenuItems = !1, new H(
      this,
      E,
      "menuItem",
      (e) => e.meta.menus.includes(m),
      (e) => {
        const t = e.map((n) => n.manifest);
        this._helpMenuHasMenuItems = t.length > 0;
      }
    );
  }
  render() {
    return i`${l(this, s, f).call(this)} ${l(this, s, v).call(this)}`;
  }
};
s = /* @__PURE__ */ new WeakSet();
f = function() {
  return this._helpMenuHasMenuItems ? i`
			<uui-button compact label=${this.localize.term("general_help")} look="primary" popovertarget="help-menu-popover">
				<uui-icon name="icon-help-alt"></uui-icon>
			</uui-button>
		` : d;
};
v = function() {
  return i`
			<uui-popover-container id="help-menu-popover" placement="top-end">
				<umb-popover-layout>
					<uui-scroll-container>
						<umb-extension-slot
							type="menu"
							.filter=${(e) => e.alias === m}
							default-element="umb-menu"></umb-extension-slot>
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
a.styles = [
  ...c.styles,
  b`
			:host {
				--uui-menu-item-flat-structure: 1;
			}
		`
];
_([
  M()
], a.prototype, "_helpMenuHasMenuItems", 2);
a = _([
  y("umb-help-header-app")
], a);
export {
  a as UmbHelpHeaderAppElement,
  a as element
};
//# sourceMappingURL=help-header-app.element-BSQkiE2W.js.map

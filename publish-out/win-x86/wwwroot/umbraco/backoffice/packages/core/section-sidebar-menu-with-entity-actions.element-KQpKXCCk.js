import { UmbSectionSidebarMenuElement as c } from "./section-sidebar-menu.element-BXQpqNZq.js";
import { html as h, css as m, state as p, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbParentEntityContext as f } from "@umbraco-cms/backoffice/entity";
var _ = Object.defineProperty, v = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, u = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? v(t, i) : t, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && _(t, i, n), n;
}, b = (e, t, i) => t.has(e) || d("Cannot " + i), E = (e, t, i) => (b(e, t, "read from private field"), i ? i.call(e) : t.get(e)), w = (e, t, i) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), l;
let a = class extends c {
  constructor() {
    super(...arguments), this._unique = null, w(this, l, new f(this));
  }
  updated(e) {
    if (e.has("manifest")) {
      const t = this.manifest?.meta.entityType;
      E(this, l).setParent(t ? { unique: this._unique, entityType: t } : void 0);
    }
  }
  renderHeader() {
    const e = this.localize.string(this.manifest?.meta?.label ?? "");
    return h`
			<div id="header">
				<h3>${e}</h3>
				<umb-entity-actions-bundle
					slot="actions"
					.unique=${this._unique}
					.entityType=${this.manifest?.meta.entityType}
					.label=${e}>
				</umb-entity-actions-bundle>
			</div>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
a.styles = [
  ...c.styles,
  m`
			#header {
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			#header > :first-child {
				flex-grow: 1;
			}
		`
];
u([
  p()
], a.prototype, "_unique", 2);
u([
  p()
], a.prototype, "_entityType", 2);
a = u([
  y("umb-section-sidebar-menu-with-entity-actions")
], a);
const C = a;
export {
  a as UmbSectionSidebarMenuWithEntityActionsElement,
  C as default
};
//# sourceMappingURL=section-sidebar-menu-with-entity-actions.element-KQpKXCCk.js.map

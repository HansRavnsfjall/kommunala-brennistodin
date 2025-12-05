import { html as p, state as f, property as S, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { b as E } from "./index-DFDZ_Jke.js";
var $ = Object.defineProperty, A = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, d = (e, s, r, t) => {
  for (var a = t > 1 ? void 0 : t ? A(s, r) : s, l = e.length - 1, u; l >= 0; l--)
    (u = e[l]) && (a = (t ? u(s, r, a) : u(a)) || a);
  return t && a && $(s, r, a), a;
}, c = (e, s, r) => s.has(e) || y("Cannot " + r), _ = (e, s, r) => (c(e, s, "read from private field"), s.get(e)), h = (e, s, r) => s.has(e) ? y("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(e) : s.set(e, r), G = (e, s, r, t) => (c(e, s, "write to private field"), s.set(e, r), r), v = (e, s, r) => (c(e, s, "access private method"), r), o, n, m, b;
let i = class extends g {
  constructor() {
    super(), h(this, n), h(this, o), this.collapse = !0, this.consumeContext(E, (e) => {
      e && (G(this, o, e), this.observe(e.data, (s) => {
        this.data = s;
      }));
    });
  }
  render() {
    return p`<umb-body-layout>
			<uui-box .headline=${this.localize.term("usyncpublish_permissions")}>
				${this.renderUserGroups()} ${this.renderCollapseAdvanced()}
			</uui-box>
		</umb-body-layout>`;
  }
  renderUserGroups() {
    var e;
    return p`
			<umb-property-layout
				.label=${this.localize.term("usyncpublish_userGroups")}
				.description=${this.localize.term("usyncpublish_userGroupsDesc")}>
				<div slot="editor">
					<usync-publisher-server-user-groups
						.groups=${(e = this.data) == null ? void 0 : e.userGroups}
						@usync-server-update-groups=${v(this, n, b)}></usync-publisher-server-user-groups>
				</div>
			</umb-property-layout>
		`;
  }
  renderCollapseAdvanced() {
    var e, s;
    return p`
			<umb-property-layout
				.label=${this.localize.term("usyncpublish_collapseAdvanced")}
				.description=${this.localize.term("usyncpublish_collapseAdvancedDesc")}>
				<div slot="editor">
					<uui-checkbox
						id="collapseAdvancedCheck"
						name="Collapse advanced"
						label="Collapse advanced"
						@change=${v(this, n, m)}
						.checked=${((s = (e = this.data) == null ? void 0 : e.sendSettings) == null ? void 0 : s.hideAdvanced) ?? !0}>
						<div slot="label"></div
					></uui-checkbox>
				</div>
			</umb-property-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
m = function() {
  var s, r, t;
  const e = !(((r = (s = this.data) == null ? void 0 : s.sendSettings) == null ? void 0 : r.hideAdvanced) ?? !0);
  (t = _(this, o)) == null || t.setSyncBoolOption("hideAdvanced", e);
};
b = function(e) {
  var s;
  (s = _(this, o)) == null || s.setUserGroups(e.detail.groups);
};
d([
  f()
], i.prototype, "data", 2);
d([
  S({ type: Boolean })
], i.prototype, "collapse", 2);
i = d([
  C("usync-publisher-server-permissions")
], i);
const x = i;
export {
  x as default,
  i as uSyncServerPermissionsElement
};
//# sourceMappingURL=server-item-permissions.element-Cp8seqZw.js.map

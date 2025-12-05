import { a as P } from "./member-type-tree.store.context-token-D6BHGtN0.js";
import { f as E } from "./input-member-type.element-Tx7SxrMW.js";
import { nothing as u, ifDefined as b, html as y, property as h, state as v, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as R } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as U } from "@umbraco-cms/backoffice/workspace";
var B = Object.defineProperty, D = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, a = (e, t, r, s) => {
  for (var n = s > 1 ? void 0 : s ? D(t, r) : t, p = e.length - 1, l; p >= 0; p--)
    (l = e[p]) && (n = (s ? l(t, r, n) : l(n)) || n);
  return s && n && B(t, r, n), n;
}, O = (e, t, r) => t.has(e) || _("Cannot " + r), w = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r) => (O(e, t, "access private method"), r), i, c, f, d, T;
let o = class extends $ {
  constructor() {
    super(), w(this, i), this.readonly = !1, this.standalone = !1, this._editPath = "", new R(this, U).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: P, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    });
  }
  render() {
    return this.item ? y`
			<uui-ref-node
				name=${m(this, i, f).call(this)}
				detail=${m(this, i, d).call(this)}
				href=${b(m(this, i, c).call(this))}
				?readonly=${this.readonly}
				?standalone=${this.standalone}>
				<slot name="actions" slot="actions"></slot>
				${m(this, i, T).call(this)}
			</uui-ref-node>
		` : u;
  }
};
i = /* @__PURE__ */ new WeakSet();
c = function() {
  if (!this.item?.unique) return;
  const e = E.generateLocal({ unique: this.item.memberType.unique });
  return `${this._editPath}/${e}`;
};
f = function() {
  return `Member Type: ${this.item?.memberType.name ?? "Unknown"}`;
};
d = function() {
  return `Property Type: ${this.item?.name ? this.item.name + " (" + this.item.alias + ")" : "Unknown"}`;
};
T = function() {
  return this.item?.memberType.icon ? y`<umb-icon slot="icon" name=${this.item.memberType.icon}></umb-icon>` : u;
};
a([
  h({ type: Object })
], o.prototype, "item", 2);
a([
  h({ type: Boolean })
], o.prototype, "readonly", 2);
a([
  h({ type: Boolean })
], o.prototype, "standalone", 2);
a([
  v()
], o.prototype, "_editPath", 2);
o = a([
  M("umb-member-type-property-type-item-ref")
], o);
export {
  o as UmbMemberTypePropertyTypeItemRefElement,
  o as element
};
//# sourceMappingURL=member-type-property-type-item-ref.element-t93TA-CW.js.map

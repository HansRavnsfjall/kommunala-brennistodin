import { b as P, c as v } from "./constants-D9L2jSGX.js";
import { nothing as l, ifDefined as E, html as h, property as c, state as D, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as $ } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as O } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as C } from "@umbraco-cms/backoffice/workspace";
var b = Object.defineProperty, M = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, a = (e, t, n, s) => {
  for (var o = s > 1 ? void 0 : s ? M(t, n) : t, m = e.length - 1, u; m >= 0; m--)
    (u = e[m]) && (o = (s ? u(t, n, o) : u(o)) || o);
  return s && o && b(t, n, o), o;
}, R = (e, t, n) => t.has(e) || y("Cannot " + n), w = (e, t, n) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), p = (e, t, n) => (R(e, t, "access private method"), n), r, d, _, f, T;
let i = class extends $ {
  constructor() {
    super(), w(this, r), this.readonly = !1, this.standalone = !1, this._editPath = "", new O(this, C).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: P, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    });
  }
  render() {
    return this.item ? h`
			<uui-ref-node
				name=${p(this, r, _).call(this)}
				detail=${p(this, r, f).call(this)}
				href=${E(p(this, r, d).call(this))}
				?readonly=${this.readonly}
				?standalone=${this.standalone}>
				<slot name="actions" slot="actions"></slot>
				${p(this, r, T).call(this)}
			</uui-ref-node>
		` : l;
  }
};
r = /* @__PURE__ */ new WeakSet();
d = function() {
  if (!this.item?.unique) return;
  const e = v.generateLocal({ unique: this.item.documentType.unique });
  return `${this._editPath}/${e}`;
};
_ = function() {
  return `Document Type: ${this.item?.documentType.name ?? "Unknown"}`;
};
f = function() {
  return `Property Type: ${this.item?.name ? this.item.name + " (" + this.item.alias + ")" : "Unknown"}`;
};
T = function() {
  return this.item?.documentType.icon ? h`<umb-icon slot="icon" name=${this.item.documentType.icon}></umb-icon>` : l;
};
a([
  c({ type: Object })
], i.prototype, "item", 2);
a([
  c({ type: Boolean })
], i.prototype, "readonly", 2);
a([
  c({ type: Boolean })
], i.prototype, "standalone", 2);
a([
  D()
], i.prototype, "_editPath", 2);
i = a([
  U("umb-document-type-property-type-item-ref")
], i);
export {
  i as UmbDocumentTypePropertyTypeItemRefElement,
  i as element
};
//# sourceMappingURL=document-type-property-type-item-ref.element-BHqImEIM.js.map

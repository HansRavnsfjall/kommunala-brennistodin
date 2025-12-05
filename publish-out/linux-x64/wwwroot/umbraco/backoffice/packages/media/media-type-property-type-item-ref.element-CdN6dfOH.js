import { b as P, c as v } from "./constants-DT5L-WXf.js";
import { nothing as d, ifDefined as E, html as u, property as h, state as M, customElement as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as U } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as b } from "@umbraco-cms/backoffice/workspace";
var A = Object.defineProperty, O = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, o = (e, t, i, s) => {
  for (var n = s > 1 ? void 0 : s ? O(t, i) : t, m = e.length - 1, l; m >= 0; m--)
    (l = e[m]) && (n = (s ? l(t, i, n) : l(n)) || n);
  return s && n && A(t, i, n), n;
}, R = (e, t, i) => t.has(e) || y("Cannot " + i), w = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), p = (e, t, i) => (R(e, t, "access private method"), i), r, c, _, f, T;
let a = class extends D {
  constructor() {
    super(), w(this, r), this.readonly = !1, this.standalone = !1, this._editPath = "", new U(this, b).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: P, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    });
  }
  render() {
    return this.item ? u`
			<uui-ref-node
				name=${p(this, r, _).call(this)}
				detail=${p(this, r, f).call(this)}
				href=${E(p(this, r, c).call(this))}
				?readonly=${this.readonly}
				?standalone=${this.standalone}>
				<slot name="actions" slot="actions"></slot>
				${p(this, r, T).call(this)}
			</uui-ref-node>
		` : d;
  }
};
r = /* @__PURE__ */ new WeakSet();
c = function() {
  if (!this.item?.unique) return;
  const e = v.generateLocal({ unique: this.item.mediaType.unique });
  return `${this._editPath}/${e}`;
};
_ = function() {
  return `Media Type: ${this.item?.mediaType.name ?? "Unknown"}`;
};
f = function() {
  return `Property Type: ${this.item?.name ? this.item.name + " (" + this.item.alias + ")" : "Unknown"}`;
};
T = function() {
  return this.item?.mediaType.icon ? u`<umb-icon slot="icon" name=${this.item.mediaType.icon}></umb-icon>` : d;
};
o([
  h({ type: Object })
], a.prototype, "item", 2);
o([
  h({ type: Boolean })
], a.prototype, "readonly", 2);
o([
  h({ type: Boolean })
], a.prototype, "standalone", 2);
o([
  M()
], a.prototype, "_editPath", 2);
a = o([
  $("umb-media-type-property-type-item-ref")
], a);
export {
  a as UmbMediaTypePropertyTypeItemRefElement,
  a as element
};
//# sourceMappingURL=media-type-property-type-item-ref.element-CdN6dfOH.js.map

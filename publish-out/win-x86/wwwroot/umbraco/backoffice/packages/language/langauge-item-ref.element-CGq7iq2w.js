import { b as _, v as d } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { nothing as f, ifDefined as c, html as v, property as p, state as y, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as P } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as g } from "@umbraco-cms/backoffice/router";
import { UMB_WORKSPACE_MODAL as A } from "@umbraco-cms/backoffice/workspace";
var U = Object.defineProperty, b = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, o = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? b(t, n) : t, s = e.length - 1, l; s >= 0; s--)
    (l = e[s]) && (r = (i ? l(t, n, r) : l(r)) || r);
  return i && r && U(t, n, r), r;
}, T = (e, t, n) => t.has(e) || u("Cannot " + n), O = (e, t, n) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), R = (e, t, n) => (T(e, t, "access private method"), n), m, h;
let a = class extends P {
  constructor() {
    super(), O(this, m), this.readonly = !1, this.standalone = !1, this._editPath = "", new g(this, A).addUniquePaths(["unique"]).onSetup(() => ({ data: { entityType: _, preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    });
  }
  render() {
    return this.item ? v`
			<uui-ref-node
				name=${this.item.name}
				href=${c(R(this, m, h).call(this))}
				?readonly=${this.readonly}
				?standalone=${this.standalone}>
				<slot name="actions" slot="actions"></slot>
				<umb-icon slot="icon" name="icon-globe"></umb-icon>
			</uui-ref-node>
		` : f;
  }
};
m = /* @__PURE__ */ new WeakSet();
h = function() {
  if (!this.item?.unique) return;
  const e = d.generateLocal({ unique: this.item.unique });
  return `${this._editPath}/${e}`;
};
o([
  p({ type: Object })
], a.prototype, "item", 2);
o([
  p({ type: Boolean })
], a.prototype, "readonly", 2);
o([
  p({ type: Boolean })
], a.prototype, "standalone", 2);
o([
  y()
], a.prototype, "_editPath", 2);
a = o([
  E("umb-language-item-ref")
], a);
export {
  a as UmbLanguageItemRefElement,
  a as element
};
//# sourceMappingURL=langauge-item-ref.element-CGq7iq2w.js.map

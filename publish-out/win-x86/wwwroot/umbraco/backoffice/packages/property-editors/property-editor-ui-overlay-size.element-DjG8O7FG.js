import { html as h, property as v, state as c, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
var y = Object.defineProperty, E = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, i = (e, t, r, s) => {
  for (var a = s > 1 ? void 0 : s ? E(t, r) : t, o = e.length - 1, n; o >= 0; o--)
    (n = e[o]) && (a = (s ? n(t, r, a) : n(a)) || a);
  return s && a && y(t, r, a), a;
}, g = (e, t, r) => t.has(e) || p("Cannot " + r), U = (e, t, r) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r) => (g(e, t, "access private method"), r), u, m;
let l = class extends d {
  constructor() {
    super(...arguments), U(this, u), this.value = "", this._list = [
      { value: void 0, name: "Default", selected: !0 },
      { value: "small", name: "Small" },
      { value: "medium", name: "Medium" },
      { value: "large", name: "Large" },
      { value: "full", name: "Full" }
    ];
  }
  firstUpdated() {
    this.value && (this._list = this._list.map((e) => ({
      ...e,
      selected: e.value === this.value
    })));
  }
  render() {
    return h`
			<uui-select
				label=${this.localize.term("rte_config_overlaySize")}
				.options=${this._list}
				@change=${O(this, u, m)}>
			</uui-select>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
m = function(e) {
  this.value = e.target.value, this.dispatchEvent(new f());
};
i([
  v()
], l.prototype, "value", 2);
i([
  c()
], l.prototype, "_list", 2);
i([
  v({ attribute: !1 })
], l.prototype, "config", 2);
l = i([
  _("umb-property-editor-ui-overlay-size")
], l);
const z = l;
export {
  l as UmbPropertyEditorUIOverlaySizeElement,
  z as default
};
//# sourceMappingURL=property-editor-ui-overlay-size.element-DjG8O7FG.js.map

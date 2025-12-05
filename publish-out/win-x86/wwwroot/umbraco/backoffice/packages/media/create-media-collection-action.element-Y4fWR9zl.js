import { H as w, s as U, o as m, x as C, p as O } from "./input-upload-field.element-DEgpG3Zz.js";
import "./media-url.repository-B5RzlWhD.js";
import { html as h, map as A, state as s, property as P, customElement as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbMediaTypeStructureRepository as g } from "@umbraco-cms/backoffice/media-type";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
var $ = Object.defineProperty, D = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, r = (e, t, i, p) => {
  for (var n = p > 1 ? void 0 : p ? D(t, i) : t, u = e.length - 1, c; u >= 0; u--)
    (c = e[u]) && (n = (p ? c(t, i, n) : c(n)) || n);
  return p && n && $(t, i, n), n;
}, T = (e, t, i) => t.has(e) || y("Cannot " + i), I = (e, t, i) => (T(e, t, "read from private field"), i ? i.call(e) : t.get(e)), f = (e, t, i) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), l = (e, t, i) => (T(e, t, "access private method"), i), _, a, v, b, d, E, M;
let o = class extends B {
  constructor() {
    super(), f(this, a), this._allowedMediaTypes = [], this._popoverOpen = !1, f(this, _, new g(this)), this.consumeContext(w, (e) => {
      this.observe(e?.unique, (t) => {
        this._mediaUnique = t;
      }), this.observe(e?.contentTypeUnique, (t) => {
        this._mediaTypeUnique = t;
      });
    }), this.consumeContext(U, (e) => {
      this.observe(e?.workspacePathBuilder, (t) => {
        this._workspacePathBuilder = t;
      });
    });
  }
  async firstUpdated() {
    l(this, a, v).call(this, this._mediaTypeUnique ?? "", this._mediaUnique || null);
  }
  render() {
    return this._allowedMediaTypes.length !== 1 ? l(this, a, M).call(this) : l(this, a, E).call(this);
  }
};
_ = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
v = async function(e, t) {
  const { data: i } = await I(this, _).requestAllowedChildrenOf(e, t);
  i && i.items && (this._allowedMediaTypes = i.items);
};
b = function(e) {
  this._popoverOpen = e.newState === "open";
};
d = function(e) {
  return e.unique && this._workspacePathBuilder ? this._workspacePathBuilder({ entityType: m }) + C.generateLocal({
    parentEntityType: this._mediaUnique ? m : O,
    parentUnique: this._mediaUnique ?? "null",
    mediaTypeUnique: e.unique
  }) : "";
};
E = function() {
  if (this._allowedMediaTypes.length !== 1) return;
  const e = this._allowedMediaTypes[0], t = (this.manifest?.meta.label ? this.localize.string(this.manifest?.meta.label) : this.localize.term("general_create")) + " " + e.name;
  return h`<uui-button
			color="default"
			href=${l(this, a, d).call(this, e)}
			label=${t}
			look="outline"></uui-button>`;
};
M = function() {
  if (!this._allowedMediaTypes.length) return;
  const e = this.manifest?.meta.label ? this.localize.string(this.manifest?.meta.label) : this.localize.term("general_create");
  return h`
			<uui-button popovertarget="collection-action-menu-popover" label=${e} color="default" look="outline">
				${e}
				<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="collection-action-menu-popover"
				placement="bottom-start"
				@toggle=${l(this, a, b)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${A(
    this._allowedMediaTypes,
    (t) => h`
								<uui-menu-item label=${t.name} href=${l(this, a, d).call(this, t)}>
									<umb-icon slot="icon" name=${t.icon ?? "icon-picture"}></umb-icon>
								</uui-menu-item>
							`
  )}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
r([
  s()
], o.prototype, "_allowedMediaTypes", 2);
r([
  s()
], o.prototype, "_workspacePathBuilder", 2);
r([
  s()
], o.prototype, "_mediaUnique", 2);
r([
  s()
], o.prototype, "_mediaTypeUnique", 2);
r([
  s()
], o.prototype, "_popoverOpen", 2);
r([
  P({ attribute: !1 })
], o.prototype, "manifest", 2);
o = r([
  q("umb-create-media-collection-action")
], o);
const W = o;
export {
  o as UmbCreateMediaCollectionActionElement,
  W as default
};
//# sourceMappingURL=create-media-collection-action.element-Y4fWR9zl.js.map

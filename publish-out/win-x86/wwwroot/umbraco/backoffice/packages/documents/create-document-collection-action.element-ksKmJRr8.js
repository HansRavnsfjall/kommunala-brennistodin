import { g as E, j as w, e as d, k as O, l as D } from "./manifests-BfVrApfB.js";
import { html as m, map as g, css as q, state as l, property as P, customElement as M } from "@umbraco-cms/backoffice/external/lit";
import { UmbDocumentTypeStructureRepository as A } from "@umbraco-cms/backoffice/document-type";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
var N = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, a = (e, t, o, u) => {
  for (var r = u > 1 ? void 0 : u ? $(t, o) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (r = (u ? p(t, o, r) : p(r)) || r);
  return u && r && N(t, o, r), r;
}, y = (e, t, o) => t.has(e) || f("Cannot " + o), x = (e, t, o) => (y(e, t, "read from private field"), o ? o.call(e) : t.get(e)), T = (e, t, o) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), s = (e, t, o) => (y(e, t, "access private method"), o), h, i, v, U, _, C, b;
let n = class extends B {
  constructor() {
    super(), T(this, i), this._allowedDocumentTypes = [], this._popoverOpen = !1, T(this, h, new A(this)), this.consumeContext(E, (e) => {
      this.observe(e?.unique, (t) => {
        this._documentUnique = t;
      }), this.observe(e?.contentTypeUnique, (t) => {
        this._documentTypeUnique = t;
      });
    }), this.consumeContext(w, (e) => {
      this.observe(e?.workspacePathBuilder, (t) => {
        this._workspacePathBuilder = t;
      });
    });
  }
  async firstUpdated() {
    this._documentTypeUnique && s(this, i, v).call(this, this._documentTypeUnique, this._documentUnique || null);
  }
  render() {
    return this._allowedDocumentTypes.length !== 1 ? s(this, i, b).call(this) : s(this, i, C).call(this);
  }
};
h = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
v = async function(e, t) {
  const { data: o } = await x(this, h).requestAllowedChildrenOf(e, t);
  o && o.items && (this._allowedDocumentTypes = o.items);
};
U = function(e) {
  this._popoverOpen = e.newState === "open";
};
_ = function(e) {
  return e.unique && this._workspacePathBuilder ? this._workspacePathBuilder({ entityType: d }) + O.generateLocal({
    parentEntityType: this._documentUnique ? d : D,
    parentUnique: this._documentUnique ?? "null",
    documentTypeUnique: e.unique
  }) : "";
};
C = function() {
  if (this._allowedDocumentTypes.length !== 1) return;
  const e = this._allowedDocumentTypes[0], t = (this.manifest?.meta.label ? this.localize.string(this.manifest?.meta.label) : this.localize.term("general_create")) + " " + e.name;
  return m`
			<uui-button color="default" href=${s(this, i, _).call(this, e)} label=${t} look="outline"></uui-button>
		`;
};
b = function() {
  if (!this._allowedDocumentTypes.length) return;
  const e = this.manifest?.meta.label ? this.localize.string(this.manifest?.meta.label) : this.localize.term("general_create");
  return m`
			<uui-button popovertarget="collection-action-menu-popover" label=${e} color="default" look="outline">
				${e}
				<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="collection-action-menu-popover"
				placement="bottom-start"
				@toggle=${s(this, i, U)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${g(
    this._allowedDocumentTypes,
    (t) => m`
								<uui-menu-item label=${t.name} href=${s(this, i, _).call(this, t)}>
									<umb-icon slot="icon" name=${t.icon ?? "icon-document"}></umb-icon>
								</uui-menu-item>
							`
  )}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
};
n.styles = [
  q`
			uui-scroll-container {
				max-height: 500px;
			}
		`
];
a([
  l()
], n.prototype, "_allowedDocumentTypes", 2);
a([
  l()
], n.prototype, "_workspacePathBuilder", 2);
a([
  l()
], n.prototype, "_documentUnique", 2);
a([
  l()
], n.prototype, "_documentTypeUnique", 2);
a([
  l()
], n.prototype, "_popoverOpen", 2);
a([
  P({ attribute: !1 })
], n.prototype, "manifest", 2);
n = a([
  M("umb-create-document-collection-action")
], n);
const z = n;
export {
  n as UmbCreateDocumentCollectionActionElement,
  z as default
};
//# sourceMappingURL=create-document-collection-action.element-ksKmJRr8.js.map

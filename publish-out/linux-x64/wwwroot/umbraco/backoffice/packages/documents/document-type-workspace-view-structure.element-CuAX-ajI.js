import { k as h } from "./constants-D9L2jSGX.js";
import { html as m, css as v, state as p, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
var w = Object.defineProperty, f = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, a = (e, t, o, l) => {
  for (var r = l > 1 ? void 0 : l ? f(t, o) : t, c = e.length - 1, u; c >= 0; c--)
    (u = e[c]) && (r = (l ? u(t, o, r) : u(r)) || r);
  return l && r && w(t, o, r), r;
}, y = (e, t, o) => t.has(e) || d("Cannot " + o), n = (e, t, o) => (y(e, t, "read from private field"), t.get(e)), g = (e, t, o) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), C = (e, t, o, l) => (y(e, t, "write to private field"), t.set(e, o), o), i;
let s = class extends T {
  constructor() {
    super(), g(this, i), this.consumeContext(h, (e) => {
      C(this, i, e), this._observeDocumentType();
    });
  }
  _observeDocumentType() {
    n(this, i) && (this.observe(
      n(this, i).allowedAtRoot,
      (e) => this._allowedAtRoot = e,
      "_allowedAtRootObserver"
    ), this.observe(
      n(this, i).allowedContentTypes,
      (e) => {
        const t = this._allowedContentTypeUniques;
        this._allowedContentTypeUniques = e?.map((o) => o.contentType.unique).filter((o) => o !== void 0), this.requestUpdate("_allowedContentTypeUniques", t);
      },
      "_allowedContentTypesObserver"
    ), this.observe(
      n(this, i).collection,
      (e) => {
        this._collection = e?.unique;
      },
      "_collectionObserver"
    ));
  }
  render() {
    return m`
			<uui-box headline=${this.localize.term("contentTypeEditor_structure")}>
				<umb-property-layout alias="Root" label=${this.localize.term("contentTypeEditor_allowAtRootHeading")}>
					<div slot="description">${this.localize.term("contentTypeEditor_allowAtRootDescription")}</div>
					<div slot="editor">
						<uui-toggle
							label=${this.localize.term("contentTypeEditor_allowAtRootHeading")}
							?checked=${this._allowedAtRoot}
							@change=${(e) => {
      n(this, i)?.setAllowedAtRoot(e.target.checked);
    }}></uui-toggle>
					</div>
				</umb-property-layout>
				<umb-property-layout alias="ChildNodeType" label=${this.localize.term("contentTypeEditor_childNodesHeading")}>
					<div slot="description">${this.localize.term("contentTypeEditor_childNodesDescription")}</div>
					<div slot="editor">
						<!-- TODO: maybe we want to somehow display the hierarchy, but not necessary in the same way as old backoffice? -->
						<umb-input-document-type
							.documentTypesOnly=${!0}
							.selection=${this._allowedContentTypeUniques ?? []}
							@change="${(e) => {
      const t = e.target.selection.map((o, l) => ({
        contentType: { unique: o },
        sortOrder: l
      }));
      n(this, i)?.setAllowedContentTypes(t);
    }}">
						</umb-input-document-type>
					</div>
				</umb-property-layout>
			</uui-box>
			<uui-box headline=${this.localize.term("contentTypeEditor_presentation")}>
				<umb-property-layout alias="collection" label="${this.localize.term("contentTypeEditor_collection")}">
					<div slot="description">${this.localize.term("contentTypeEditor_collectionDescription")}</div>
					<div slot="editor">
						<umb-input-content-type-collection-configuration
							default-value="c0808dd3-8133-4e4b-8ce8-e2bea84a96a4"
							.value=${this._collection ?? void 0}
							@change=${(e) => {
      const t = e.target.value;
      n(this, i)?.setCollection({ unique: t });
    }}>
						</umb-input-content-type-collection-configuration>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
s.styles = [
  b,
  v`
			:host {
				display: block;
				margin: var(--uui-size-layout-1);
				padding-bottom: var(--uui-size-layout-1); // To enforce some distance to the bottom of the scroll-container.
			}
			uui-box {
				margin-top: var(--uui-size-layout-1);
			}
			uui-label,
			umb-property-editor-ui-number {
				display: block;
			}

			// TODO: is this necessary?
			uui-toggle {
				display: flex;
			}
		`
];
a([
  p()
], s.prototype, "_allowedAtRoot", 2);
a([
  p()
], s.prototype, "_allowedContentTypeUniques", 2);
a([
  p()
], s.prototype, "_collection", 2);
s = a([
  _("umb-document-type-workspace-view-structure")
], s);
const z = s;
export {
  s as UmbDocumentTypeWorkspaceViewStructureElement,
  z as default
};
//# sourceMappingURL=document-type-workspace-view-structure.element-CuAX-ajI.js.map

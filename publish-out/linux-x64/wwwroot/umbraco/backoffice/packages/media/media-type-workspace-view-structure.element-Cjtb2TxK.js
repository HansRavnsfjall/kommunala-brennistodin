import { e as h } from "./constants-DT5L-WXf.js";
import { html as m, css as _, state as d, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
var w = Object.defineProperty, f = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, n = (e, t, o, l) => {
  for (var r = l > 1 ? void 0 : l ? f(t, o) : t, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (r = (l ? p(t, o, r) : p(r)) || r);
  return l && r && w(t, o, r), r;
}, y = (e, t, o) => t.has(e) || u("Cannot " + o), s = (e, t, o) => (y(e, t, "read from private field"), t.get(e)), g = (e, t, o) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), C = (e, t, o, l) => (y(e, t, "write to private field"), t.set(e, o), o), i;
let a = class extends T {
  constructor() {
    super(), g(this, i), this.consumeContext(h, (e) => {
      C(this, i, e), this._observeMediaType();
    });
  }
  _observeMediaType() {
    s(this, i) && (this.observe(
      s(this, i).allowedAtRoot,
      (e) => this._allowedAtRoot = e,
      "_allowedAtRootObserver"
    ), this.observe(
      s(this, i).allowedContentTypes,
      (e) => {
        const t = this._allowedContentTypeIDs;
        this._allowedContentTypeIDs = e?.map((o) => o.contentType.unique).filter((o) => o !== void 0), this.requestUpdate("_allowedContentTypeIDs", t);
      },
      "_allowedContentTypesObserver"
    ), this.observe(
      s(this, i).collection,
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
      s(this, i)?.setAllowedAtRoot(e.target.checked);
    }}></uui-toggle>
					</div>
				</umb-property-layout>
				<umb-property-layout alias="ChildNodeType" label=${this.localize.term("contentTypeEditor_childNodesHeading")}>
					<div slot="description">${this.localize.term("contentTypeEditor_childNodesDescription")}</div>
					<div slot="editor">
						<!-- TODO: maybe we want to somehow display the hierarchy, but not necessary in the same way as old backoffice? -->
						<umb-input-media-type
							.selection=${this._allowedContentTypeIDs ?? []}
							@change="${(e) => {
      const t = e.target.selection.map((o, l) => ({
        contentType: { unique: o },
        sortOrder: l
      }));
      s(this, i)?.setAllowedContentTypes(t);
    }}">
						</umb-input-media-type>
					</div>
				</umb-property-layout>
			</uui-box>
			<uui-box headline=${this.localize.term("contentTypeEditor_presentation")}>
				<umb-property-layout alias="collection" label="${this.localize.term("contentTypeEditor_collections")}">
					<div slot="description">${this.localize.term("contentTypeEditor_collectionsDescription")}</div>
					<div slot="editor">
						<umb-input-content-type-collection-configuration
							default-value="3a0156c4-3b8c-4803-bdc1-6871faa83fff"
							.value=${this._collection}
							@change=${(e) => {
      const t = e.target.value;
      s(this, i)?.setCollection({ unique: t });
    }}>
						</umb-input-content-type-collection-configuration>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
a.styles = [
  b,
  _`
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
n([
  d()
], a.prototype, "_allowedAtRoot", 2);
n([
  d()
], a.prototype, "_allowedContentTypeIDs", 2);
n([
  d()
], a.prototype, "_collection", 2);
a = n([
  v("umb-media-type-workspace-view-structure")
], a);
const D = a;
export {
  a as UmbMediaTypeWorkspaceViewStructureElement,
  D as default
};
//# sourceMappingURL=media-type-workspace-view-structure.element-Cjtb2TxK.js.map

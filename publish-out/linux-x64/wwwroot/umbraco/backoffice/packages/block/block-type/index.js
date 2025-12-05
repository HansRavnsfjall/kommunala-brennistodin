import { U as J, a as Q } from "../input-block-type.element-CMYE0OTx.js";
import { UmbModalToken as O, umbOpenModal as k } from "@umbraco-cms/backoffice/modal";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { css as g, property as x, state as V, customElement as W, html as v } from "@umbraco-cms/backoffice/external/lit";
import { UMB_PROPERTY_DATASET_CONTEXT as P } from "@umbraco-cms/backoffice/property";
import { umbExtensionsRegistry as S } from "@umbraco-cms/backoffice/extension-registry";
import { stringOrStringArrayContains as w } from "@umbraco-cms/backoffice/utils";
import { UmbExtensionsManifestInitializer as D } from "@umbraco-cms/backoffice/extension-api";
import { UmbDocumentTypeDetailRepository as R } from "@umbraco-cms/backoffice/document-type";
import { U as j } from "../block-type-workspace.context-token-C9eNrOiR.js";
const C = new O(
  "Umb.Modal.ManifestViewer",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var I = Object.defineProperty, G = Object.getOwnPropertyDescriptor, M = (t) => {
  throw TypeError(t);
}, E = (t, e, i, o) => {
  for (var a = o > 1 ? void 0 : o ? G(e, i) : e, h = t.length - 1, u; h >= 0; h--)
    (u = t[h]) && (a = (o ? u(e, i, a) : u(a)) || a);
  return o && a && I(e, i, a), a;
}, b = (t, e, i) => e.has(t) || M("Cannot " + i), s = (t, e, i) => (b(t, e, "read from private field"), i ? i.call(t) : e.get(t)), l = (t, e, i) => e.has(t) ? M("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), d = (t, e, i, o) => (b(t, e, "write to private field"), e.set(t, i), i), c = (t, e, i) => (b(t, e, "access private method"), i), f, n, r, y, p, _, T, B, U;
let m = class extends A {
  constructor() {
    super(), l(this, p), l(this, f), l(this, n), l(this, r), l(this, y, new R(this)), l(this, T, (t) => !(!s(this, r) || !s(this, n) || t.forContentTypeAlias && !w(t.forContentTypeAlias, s(this, n)) || t.forBlockEditor && !w(t.forBlockEditor, s(this, r)))), this.consumeContext(P, async (t) => {
      this.observe(
        await t?.propertyValueByAlias("contentElementTypeKey"),
        async (e) => {
          if (!e) return;
          const { asObservable: i } = await s(this, y).requestByUnique(e);
          this.observe(
            i(),
            (o) => {
              d(this, f, o?.name), d(this, n, o?.alias), c(this, p, _).call(this);
            },
            "observeContentType"
          );
        },
        "observeContentElementTypeKey"
      );
    });
  }
  get blockEditorType() {
    return s(this, r);
  }
  set blockEditorType(t) {
    d(this, r, t), c(this, p, _).call(this);
  }
  render() {
    return this._manifests && this._manifests.length > 0 ? v` <div>
					<umb-ref-manifest
						standalone
						@open=${() => c(this, p, B).call(this, this._manifests[0])}
						.manifest=${this._manifests[0]}></umb-ref-manifest>
				</div>` : v`<uui-button
					id="add-button"
					look="placeholder"
					label="Generate manifest for this Block Type"
					type="button"
					color="default"
					@click=${() => c(this, p, U).call(this)}></uui-button>`;
  }
};
f = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
_ = function() {
  !s(this, r) || !s(this, n) || new D(
    this,
    S,
    "blockEditorCustomView",
    s(this, T),
    async (t) => {
      this._manifests = t.map((e) => e.manifest);
    },
    "manifestInitializer"
  );
};
T = /* @__PURE__ */ new WeakMap();
B = async function(t) {
  k(this, C, { data: t });
};
U = async function() {
  const t = {
    type: "blockEditorCustomView",
    alias: "Local.blockEditorCustomView." + s(this, n),
    name: "Block Editor Custom View for " + s(this, f),
    element: "[replace with path to your web component js file...]",
    forContentTypeAlias: s(this, n),
    forBlockEditor: s(this, r)
  };
  k(this, C, { data: t });
};
m.styles = [
  g`
			#add-button {
				text-align: center;
				width: 100%;
			}
		`
];
E([
  x({ type: String, attribute: "block-editor-type" })
], m.prototype, "blockEditorType", 1);
E([
  V()
], m.prototype, "_manifests", 2);
m = E([
  W("umb-block-type-custom-view-guide")
], m);
export {
  j as UMB_BLOCK_TYPE_WORKSPACE_CONTEXT,
  J as UmbBlockTypeCardElement,
  m as UmbBlockTypeCustomViewGuideElement,
  Q as UmbInputBlockTypeElement
};
//# sourceMappingURL=index.js.map

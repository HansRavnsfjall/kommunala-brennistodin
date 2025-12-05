import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as ce, UMB_DOCUMENT_TYPE_PICKER_MODAL as he, UMB_DOCUMENT_TYPE_ITEM_STORE_CONTEXT as ue, UmbDocumentTypeDetailRepository as me } from "@umbraco-cms/backoffice/document-type";
import { property as c, state as y, customElement as q, ifDefined as G, html as m, css as Z, repeat as de } from "@umbraco-cms/backoffice/external/lit";
import { UmbRepositoryItemsManager as _e } from "@umbraco-cms/backoffice/repository";
import { UmbLitElement as F } from "@umbraco-cms/backoffice/lit-element";
import { transformServerPathToClientPath as ye, stringOrStringArrayContains as Y } from "@umbraco-cms/backoffice/utils";
import { UUICardEvent as X } from "@umbraco-cms/backoffice/external/uui";
import { UMB_SERVER_CONTEXT as fe } from "@umbraco-cms/backoffice/server";
import { umbConfirmModal as ve, UmbModalToken as Ee, umbOpenModal as j } from "@umbraco-cms/backoffice/modal";
import { UmbModalRouteRegistrationController as be } from "@umbraco-cms/backoffice/router";
import { UMB_PROPERTY_DATASET_CONTEXT as ee } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as H } from "@umbraco-cms/backoffice/event";
import { UmbSorterController as Te, UmbSorterResolvePlacementAsGrid as ke } from "@umbraco-cms/backoffice/sorter";
import { umbExtensionsRegistry as we } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as Ce } from "@umbraco-cms/backoffice/extension-api";
import { U as Ye } from "../block-type-workspace.context-token-C9eNrOiR.js";
var ge = Object.defineProperty, Me = Object.getOwnPropertyDescriptor, te = (e) => {
  throw TypeError(e);
}, p = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Me(t, i) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && ge(t, i, n), n;
}, ie = (e, t, i) => t.has(e) || te("Cannot " + i), _ = (e, t, i) => (ie(e, t, "read from private field"), i ? i.call(e) : t.get(e)), C = (e, t, i) => t.has(e) ? te("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), J = (e, t, i, r) => (ie(e, t, "write to private field"), t.set(e, i), i), M, P, E, K;
let l = class extends F {
  constructor() {
    super(), C(this, M), C(this, P, ""), C(this, E, new _e(
      this,
      ce
    )), this._name = "", C(this, K, () => {
      this.dispatchEvent(new X(X.OPEN));
    }), J(this, M, this.consumeContext(fe, (e) => {
      J(this, P, e?.getServerUrl() ?? "");
    }).asPromise({ preventTimeout: !0 })), this.observe(_(this, E).statuses, async (e) => {
      const t = e[0];
      if (t?.state.type === "success") {
        const i = await _(this, E).getItemByUnique(t.unique);
        this._fallbackIcon = i.icon, this._name = i.name ? this.localize.string(i.name) : this.localize.term("general_unknown"), this._description = this.localize.string(i.description);
      } else t?.state.type === "error" && (this._fallbackIcon = "icon-alert", this._name = this.localize.term("blockEditor_elementTypeDoesNotExistHeadline"), this._description = this.localize.term("blockEditor_elementTypeDoesNotExistDescription"));
    });
  }
  set iconFile(e) {
    e = ye(e), e ? _(this, M).then(() => {
      const t = new URL(e, _(this, P));
      this._iconFile = t.href;
    }) : this._iconFile = void 0;
  }
  get iconFile() {
    return this._iconFile;
  }
  set contentElementTypeKey(e) {
    this._elementTypeKey = e, e ? _(this, E).setUniques([e]) : _(this, E).setUniques([]);
  }
  get contentElementTypeKey() {
    return this._elementTypeKey;
  }
  // TODO: Support image files instead of icons.
  render() {
    return m`
			<uui-card-block-type
				href=${G(this.href)}
				@open=${_(this, K)}
				.name=${this._name}
				.description=${this._description}
				.background=${this.backgroundColor}>
				${this._iconFile ? m`<img src=${this._iconFile} alt="" />` : m`<umb-icon name=${this._fallbackIcon ?? ""} color=${G(this.iconColor)}></umb-icon>`}
				<slot name="actions" slot="actions"> </slot>
			</uui-card-block-type>
		`;
  }
};
M = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakMap();
p([
  c({ type: String })
], l.prototype, "href", 2);
p([
  c({ type: String, attribute: !1 })
], l.prototype, "iconFile", 1);
p([
  y()
], l.prototype, "_iconFile", 2);
p([
  c({ type: String, attribute: !1 })
], l.prototype, "iconColor", 2);
p([
  c({ type: String, attribute: !1 })
], l.prototype, "backgroundColor", 2);
p([
  c({ type: String, attribute: !1 })
], l.prototype, "contentElementTypeKey", 1);
p([
  y()
], l.prototype, "_name", 2);
p([
  y()
], l.prototype, "_description", 2);
p([
  y()
], l.prototype, "_fallbackIcon", 2);
l = p([
  q("umb-block-type-card")
], l);
var Pe = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, ne = (e) => {
  throw TypeError(e);
}, T = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ue(t, i) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && Pe(t, i, n), n;
}, z = (e, t, i) => t.has(e) || ne("Cannot " + i), k = (e, t, i) => (z(e, t, "read from private field"), i ? i.call(e) : t.get(e)), f = (e, t, i) => t.has(e) ? ne("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), B = (e, t, i, r) => (z(e, t, "write to private field"), t.set(e, i), i), Q = (e, t, i) => (z(e, t, "access private method"), i), x, U, $, O, S, re, W, oe;
let d = class extends F {
  constructor() {
    super(), f(this, S), f(this, x, new Te(this, {
      getUniqueOfElement: (e) => e.contentElementTypeKey,
      getUniqueOfModel: (e) => e.contentElementTypeKey,
      itemSelector: "umb-block-type-card",
      identifier: "umb-block-type-sorter",
      containerSelector: "#blocks",
      resolvePlacement: ke,
      onContainerChange: ({ item: e, model: t }) => {
        this.dispatchEvent(new CustomEvent("container-change", { detail: { item: e, model: t } }));
      },
      onChange: ({ model: e }) => {
        this._value = e, this.dispatchEvent(new H());
      }
      /*onEnd: () => {
      	// TODO: Investigate if onEnd is called when a container move has been performed, if not then I would say it should be. [NL]
      	this.dispatchEvent(new UmbChangeEvent());
      },*/
    })), f(this, U), this._value = [], f(this, $), f(this, O, []), f(this, W, (e) => m`
			<umb-block-type-card
				.iconFile=${e.thumbnail}
				.iconColor=${e.iconColor}
				.backgroundColor=${e.backgroundColor}
				.href="${this.workspacePath}edit/${e.contentElementTypeKey}"
				.contentElementTypeKey=${e.contentElementTypeKey}>
				<uui-action-bar slot="actions">
					<uui-button @click=${() => Q(this, S, re).call(this, e)} label="Remove block">
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				</uui-action-bar>
			</umb-block-type-card>
		`), this.consumeContext(ee, async (e) => {
      B(this, $, e), this.observe(
        await k(this, $)?.propertyValueByAlias("blocks"),
        (t) => {
          B(this, O, t);
        },
        "observeBlocks"
      );
    }), B(this, U, new be(this, he).addUniquePaths(["propertyAlias"]).onSetup(() => ({
      data: {
        hideTreeRoot: !0,
        multiple: !1,
        createAction: {
          extendWithPathParams: {
            parentUnique: null,
            presetAlias: "element"
          }
        },
        // TODO: hide the queryParams and filter config under a "elementTypesOnly" field. [MR]
        search: {
          queryParams: {
            isElementType: !0
          }
        },
        pickableFilter: (e) => (
          // Only pick elements:
          e.isElement && // Prevent picking the an already used element type:
          k(this, O)?.find((t) => t.contentElementTypeKey === e.unique) === void 0
        )
      },
      value: {
        selection: []
      }
    })).onSubmit((e) => {
      const t = e.selection[0];
      t && this.dispatchEvent(new CustomEvent("create", { detail: { contentElementTypeKey: t } }));
    }).observeRouteBuilder((e) => {
      const t = this._pickerPath;
      this._pickerPath = e({}), this.requestUpdate("_pickerPath", t);
    }));
  }
  set value(e) {
    this._value = e ?? [], this._value = this._value.filter(
      (t, i, r) => r.findIndex((n) => n.contentElementTypeKey === t.contentElementTypeKey) === i
    ), k(this, x).setModel(this._value);
  }
  get value() {
    return this._value;
  }
  set propertyAlias(e) {
    k(this, U).setUniquePathValue("propertyAlias", e);
  }
  get propertyAlias() {
  }
  deleteItem(e) {
    this._value = this.value.filter((t) => t.contentElementTypeKey !== e), this.dispatchEvent(new H());
  }
  render() {
    return m`<div id="blocks">
			${de(this.value, (e) => e.contentElementTypeKey, k(this, W))} ${Q(this, S, oe).call(this)}
		</div>`;
  }
};
x = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
re = async function(e) {
  const t = await this.getContext(ue);
  if (!t)
    return;
  const i = t.getItems([e.contentElementTypeKey]);
  await ve(this, {
    color: "danger",
    headline: "#blockEditor_confirmDeleteBlockTypeTitle",
    content: this.localize.term("blockEditor_confirmDeleteBlockTypeMessage", [i[0]?.name]),
    confirmLabel: "#general_remove"
  }), this.deleteItem(e.contentElementTypeKey);
};
W = /* @__PURE__ */ new WeakMap();
oe = function() {
  return this._pickerPath ? m`
					<uui-button id="add-button" look="placeholder" href=${this._pickerPath} label="open">
						<uui-icon name="icon-add"></uui-icon>
						Add
					</uui-button>
				` : null;
};
d.styles = [
  Z`
			div {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-template-rows: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
			}

			[drag-placeholder] {
				opacity: 0.5;
			}

			#add-button {
				text-align: center;
				min-height: 150px;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-input {
				border: none;
				margin: var(--uui-size-space-6) 0 var(--uui-size-space-4);
			}

			uui-input:hover uui-button {
				opacity: 1;
			}
			uui-input uui-button {
				opacity: 0;
			}
		`
];
T([
  c({ type: Array, attribute: !1 })
], d.prototype, "value", 1);
T([
  c({ type: String })
], d.prototype, "propertyAlias", 1);
T([
  c({ type: String })
], d.prototype, "workspacePath", 2);
T([
  y()
], d.prototype, "_pickerPath", 2);
T([
  y()
], d.prototype, "_value", 2);
d = T([
  q("umb-input-block-type")
], d);
const se = new Ee(
  "Umb.Modal.ManifestViewer",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var $e = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, ae = (e) => {
  throw TypeError(e);
}, N = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Oe(t, i) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && $e(t, i, n), n;
}, V = (e, t, i) => t.has(e) || ae("Cannot " + i), o = (e, t, i) => (V(e, t, "read from private field"), i ? i.call(e) : t.get(e)), v = (e, t, i) => t.has(e) ? ae("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), I = (e, t, i, r) => (V(e, t, "write to private field"), t.set(e, i), i), g = (e, t, i) => (V(e, t, "access private method"), i), A, u, h, D, b, R, L, le, pe;
let w = class extends F {
  constructor() {
    super(), v(this, b), v(this, A), v(this, u), v(this, h), v(this, D, new me(this)), v(this, L, (e) => !(!o(this, h) || !o(this, u) || e.forContentTypeAlias && !Y(e.forContentTypeAlias, o(this, u)) || e.forBlockEditor && !Y(e.forBlockEditor, o(this, h)))), this.consumeContext(ee, async (e) => {
      this.observe(
        await e?.propertyValueByAlias("contentElementTypeKey"),
        async (t) => {
          if (!t) return;
          const { asObservable: i } = await o(this, D).requestByUnique(t);
          this.observe(
            i(),
            (r) => {
              I(this, A, r?.name), I(this, u, r?.alias), g(this, b, R).call(this);
            },
            "observeContentType"
          );
        },
        "observeContentElementTypeKey"
      );
    });
  }
  get blockEditorType() {
    return o(this, h);
  }
  set blockEditorType(e) {
    I(this, h, e), g(this, b, R).call(this);
  }
  render() {
    return this._manifests && this._manifests.length > 0 ? m` <div>
					<umb-ref-manifest
						standalone
						@open=${() => g(this, b, le).call(this, this._manifests[0])}
						.manifest=${this._manifests[0]}></umb-ref-manifest>
				</div>` : m`<uui-button
					id="add-button"
					look="placeholder"
					label="Generate manifest for this Block Type"
					type="button"
					color="default"
					@click=${() => g(this, b, pe).call(this)}></uui-button>`;
  }
};
A = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
R = function() {
  !o(this, h) || !o(this, u) || new Ce(
    this,
    we,
    "blockEditorCustomView",
    o(this, L),
    async (e) => {
      this._manifests = e.map((t) => t.manifest);
    },
    "manifestInitializer"
  );
};
L = /* @__PURE__ */ new WeakMap();
le = async function(e) {
  j(this, se, { data: e });
};
pe = async function() {
  const e = {
    type: "blockEditorCustomView",
    alias: "Local.blockEditorCustomView." + o(this, u),
    name: "Block Editor Custom View for " + o(this, A),
    element: "[replace with path to your web component js file...]",
    forContentTypeAlias: o(this, u),
    forBlockEditor: o(this, h)
  };
  j(this, se, { data: e });
};
w.styles = [
  Z`
			#add-button {
				text-align: center;
				width: 100%;
			}
		`
];
N([
  c({ type: String, attribute: "block-editor-type" })
], w.prototype, "blockEditorType", 1);
N([
  y()
], w.prototype, "_manifests", 2);
w = N([
  q("umb-block-type-custom-view-guide")
], w);
export {
  Ye as UMB_BLOCK_TYPE_WORKSPACE_CONTEXT,
  l as UmbBlockTypeCardElement,
  w as UmbBlockTypeCustomViewGuideElement,
  d as UmbInputBlockTypeElement
};
//# sourceMappingURL=index.js.map

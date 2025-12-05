import { umbConfirmModal as N } from "@umbraco-cms/backoffice/modal";
import { UmbModalRouteRegistrationController as z } from "@umbraco-cms/backoffice/router";
import { property as l, state as _, customElement as R, ifDefined as S, html as d, css as L, repeat as Y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_DATASET_CONTEXT as G } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as O } from "@umbraco-cms/backoffice/event";
import { UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS as V, UMB_DOCUMENT_TYPE_PICKER_MODAL as X, UMB_DOCUMENT_TYPE_ITEM_STORE_CONTEXT as H } from "@umbraco-cms/backoffice/document-type";
import { UmbSorterController as J, UmbSorterResolvePlacementAsGrid as Q } from "@umbraco-cms/backoffice/sorter";
import { UmbRepositoryItemsManager as Z } from "@umbraco-cms/backoffice/repository";
import { transformServerPathToClientPath as j } from "@umbraco-cms/backoffice/utils";
import { UUICardEvent as A } from "@umbraco-cms/backoffice/external/uui";
import { UMB_SERVER_CONTEXT as ee } from "@umbraco-cms/backoffice/server";
var te = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, B = (e) => {
  throw TypeError(e);
}, a = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ie(t, i) : t, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (n = (r ? c(t, i, n) : c(n)) || n);
  return r && n && te(t, i, n), n;
}, D = (e, t, i) => t.has(e) || B("Cannot " + i), u = (e, t, i) => (D(e, t, "read from private field"), i ? i.call(e) : t.get(e)), f = (e, t, i) => t.has(e) ? B("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), I = (e, t, i, r) => (D(e, t, "write to private field"), t.set(e, i), i), E, b, m, P;
let o = class extends x {
  constructor() {
    super(), f(this, E), f(this, b, ""), f(this, m, new Z(
      this,
      V
    )), this._name = "", f(this, P, () => {
      this.dispatchEvent(new A(A.OPEN));
    }), I(this, E, this.consumeContext(ee, (e) => {
      I(this, b, e?.getServerUrl() ?? "");
    }).asPromise({ preventTimeout: !0 })), this.observe(u(this, m).statuses, async (e) => {
      const t = e[0];
      if (t?.state.type === "success") {
        const i = await u(this, m).getItemByUnique(t.unique);
        this._fallbackIcon = i.icon, this._name = i.name ? this.localize.string(i.name) : this.localize.term("general_unknown"), this._description = this.localize.string(i.description);
      } else t?.state.type === "error" && (this._fallbackIcon = "icon-alert", this._name = this.localize.term("blockEditor_elementTypeDoesNotExistHeadline"), this._description = this.localize.term("blockEditor_elementTypeDoesNotExistDescription"));
    });
  }
  set iconFile(e) {
    e = j(e), e ? u(this, E).then(() => {
      const t = new URL(e, u(this, b));
      this._iconFile = t.href;
    }) : this._iconFile = void 0;
  }
  get iconFile() {
    return this._iconFile;
  }
  set contentElementTypeKey(e) {
    this._elementTypeKey = e, e ? u(this, m).setUniques([e]) : u(this, m).setUniques([]);
  }
  get contentElementTypeKey() {
    return this._elementTypeKey;
  }
  // TODO: Support image files instead of icons.
  render() {
    return d`
			<uui-card-block-type
				href=${S(this.href)}
				@open=${u(this, P)}
				.name=${this._name}
				.description=${this._description}
				.background=${this.backgroundColor}>
				${this._iconFile ? d`<img src=${this._iconFile} alt="" />` : d`<umb-icon name=${this._fallbackIcon ?? ""} color=${S(this.iconColor)}></umb-icon>`}
				<slot name="actions" slot="actions"> </slot>
			</uui-card-block-type>
		`;
  }
};
E = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
a([
  l({ type: String })
], o.prototype, "href", 2);
a([
  l({ type: String, attribute: !1 })
], o.prototype, "iconFile", 1);
a([
  _()
], o.prototype, "_iconFile", 2);
a([
  l({ type: String, attribute: !1 })
], o.prototype, "iconColor", 2);
a([
  l({ type: String, attribute: !1 })
], o.prototype, "backgroundColor", 2);
a([
  l({ type: String, attribute: !1 })
], o.prototype, "contentElementTypeKey", 1);
a([
  _()
], o.prototype, "_name", 2);
a([
  _()
], o.prototype, "_description", 2);
a([
  _()
], o.prototype, "_fallbackIcon", 2);
o = a([
  R("umb-block-type-card")
], o);
var ne = Object.defineProperty, re = Object.getOwnPropertyDescriptor, q = (e) => {
  throw TypeError(e);
}, y = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? re(t, i) : t, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (n = (r ? c(t, i, n) : c(n)) || n);
  return r && n && ne(t, i, n), n;
}, $ = (e, t, i) => t.has(e) || q("Cannot " + i), v = (e, t, i) => ($(e, t, "read from private field"), i ? i.call(e) : t.get(e)), h = (e, t, i) => t.has(e) ? q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), w = (e, t, i, r) => ($(e, t, "write to private field"), t.set(e, i), i), K = (e, t, i) => ($(e, t, "access private method"), i), U, T, g, k, C, W, M, F;
let s = class extends x {
  constructor() {
    super(), h(this, C), h(this, U, new J(this, {
      getUniqueOfElement: (e) => e.contentElementTypeKey,
      getUniqueOfModel: (e) => e.contentElementTypeKey,
      itemSelector: "umb-block-type-card",
      identifier: "umb-block-type-sorter",
      containerSelector: "#blocks",
      resolvePlacement: Q,
      onContainerChange: ({ item: e, model: t }) => {
        this.dispatchEvent(new CustomEvent("container-change", { detail: { item: e, model: t } }));
      },
      onChange: ({ model: e }) => {
        this._value = e, this.dispatchEvent(new O());
      }
      /*onEnd: () => {
      	// TODO: Investigate if onEnd is called when a container move has been performed, if not then I would say it should be. [NL]
      	this.dispatchEvent(new UmbChangeEvent());
      },*/
    })), h(this, T), this._value = [], h(this, g), h(this, k, []), h(this, M, (e) => d`
			<umb-block-type-card
				.iconFile=${e.thumbnail}
				.iconColor=${e.iconColor}
				.backgroundColor=${e.backgroundColor}
				.href="${this.workspacePath}edit/${e.contentElementTypeKey}"
				.contentElementTypeKey=${e.contentElementTypeKey}>
				<uui-action-bar slot="actions">
					<uui-button @click=${() => K(this, C, W).call(this, e)} label="Remove block">
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				</uui-action-bar>
			</umb-block-type-card>
		`), this.consumeContext(G, async (e) => {
      w(this, g, e), this.observe(
        await v(this, g)?.propertyValueByAlias("blocks"),
        (t) => {
          w(this, k, t);
        },
        "observeBlocks"
      );
    }), w(this, T, new z(this, X).addUniquePaths(["propertyAlias"]).onSetup(() => ({
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
          v(this, k)?.find((t) => t.contentElementTypeKey === e.unique) === void 0
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
    ), v(this, U).setModel(this._value);
  }
  get value() {
    return this._value;
  }
  set propertyAlias(e) {
    v(this, T).setUniquePathValue("propertyAlias", e);
  }
  get propertyAlias() {
  }
  deleteItem(e) {
    this._value = this.value.filter((t) => t.contentElementTypeKey !== e), this.dispatchEvent(new O());
  }
  render() {
    return d`<div id="blocks">
			${Y(this.value, (e) => e.contentElementTypeKey, v(this, M))} ${K(this, C, F).call(this)}
		</div>`;
  }
};
U = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakSet();
W = async function(e) {
  const t = await this.getContext(H);
  if (!t)
    return;
  const i = t.getItems([e.contentElementTypeKey]);
  await N(this, {
    color: "danger",
    headline: `Remove ${i[0]?.name}?`,
    // TODO: Translations: [NL]
    content: "Are you sure you want to remove this Block Type Configuration?",
    confirmLabel: "Remove"
  }), this.deleteItem(e.contentElementTypeKey);
};
M = /* @__PURE__ */ new WeakMap();
F = function() {
  return this._pickerPath ? d`
					<uui-button id="add-button" look="placeholder" href=${this._pickerPath} label="open">
						<uui-icon name="icon-add"></uui-icon>
						Add
					</uui-button>
				` : null;
};
s.styles = [
  L`
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
y([
  l({ type: Array, attribute: !1 })
], s.prototype, "value", 1);
y([
  l({ type: String })
], s.prototype, "propertyAlias", 1);
y([
  l({ type: String })
], s.prototype, "workspacePath", 2);
y([
  _()
], s.prototype, "_pickerPath", 2);
y([
  _()
], s.prototype, "_value", 2);
s = y([
  R("umb-input-block-type")
], s);
export {
  o as U,
  s as a
};
//# sourceMappingURL=input-block-type.element-CMYE0OTx.js.map

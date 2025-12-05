import { UmbBooleanState as mt, mergeObservables as be, observeMultiple as St, jsonStringComparison as _e } from "@umbraco-cms/backoffice/observable-api";
import { UmbBlockManagerContext as me, UmbBlockEntryContext as fe, UMB_BLOCK_WORKSPACE_ALIAS as ve, UmbDataPathBlockElementDataQuery as Vt } from "@umbraco-cms/backoffice/block";
import { U as ye } from "./block-catalogue-modal.token-CqYZWuQE.js";
import "./block-entry.context-token-DG6_TzkT.js";
import "@umbraco-cms/backoffice/class-api";
import { stringOrStringArrayContains as $t } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/localization-api";
import { UmbModalRouteRegistrationController as Pt } from "@umbraco-cms/backoffice/router";
import "@umbraco-cms/backoffice/variant";
import "@umbraco-cms/backoffice/ufm";
import "./block-workspace.modal-token-DM3FsY2R.js";
import { U as ge } from "./block-entries.context-scfFicem.js";
import "@umbraco-cms/backoffice/document-type";
import { UmbContentTypeContainerStructureHelper as ke } from "@umbraco-cms/backoffice/content-type";
import "@umbraco-cms/backoffice/id";
import { UMB_PROPERTY_CONTEXT as ft, UMB_PROPERTY_DATASET_CONTEXT as Lt } from "@umbraco-cms/backoffice/property";
import { UmbLanguageItemRepository as we } from "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/data-type";
import "./block-catalogue-modal.element-DgrfRSxG.js";
import { UmbObserveValidationStateController as Ut, UmbFormControlMixin as xe, UmbValidationContext as Ce, extractJsonQueryProps as Tt, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as Ee } from "@umbraco-cms/backoffice/validation";
import { U as $e } from "./block-workspace.context-token-DTpZ56Fk.js";
import { d as At, a as X, f as Pe, U as ot, b as Te, c as Be } from "./index-BbCqfSen.js";
import { UMB_CLIPBOARD_PROPERTY_CONTEXT as ht, UmbClipboardPastePropertyValueTranslatorValueResolver as Oe } from "@umbraco-cms/backoffice/clipboard";
import { UmbLitElement as D, umbDestroyOnDisconnect as st } from "@umbraco-cms/backoffice/lit-element";
import { css as N, property as m, customElement as W, when as It, html as l, state as h, nothing as y, repeat as Rt } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as nt } from "@umbraco-cms/backoffice/style";
import { UmbSorterController as Me } from "@umbraco-cms/backoffice/sorter";
import { a as Se } from "./constants-DzGYudYo.js";
import { UUIBlinkKeyframes as Ve, UUIBlinkAnimationValue as Le } from "@umbraco-cms/backoffice/external/uui";
import { UmbExtensionApiInitializer as Ue, UmbExtensionsApiInitializer as Ae } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Bt } from "@umbraco-cms/backoffice/extension-registry";
import "./block-workspace-view-edit-tab.element-BH25ClZn.js";
import { debounceTime as Ie } from "@umbraco-cms/backoffice/external/rxjs";
import { UMB_CONTENT_WORKSPACE_CONTEXT as Re } from "@umbraco-cms/backoffice/content";
class Ke extends me {
  constructor() {
    super(...arguments), this.#t = new mt(void 0), this.inlineEditingMode = this.#t.asObservable();
  }
  #t;
  setInlineEditingMode(e) {
    this.#t.setValue(e ?? !1);
  }
  getInlineEditingMode() {
    return this.#t.getValue();
  }
  /**
   * @param contentElementTypeKey
   * @param partialLayoutEntry
   * @param _originData
   * @deprecated Use createWithPresets instead. Will be removed in v.17.
   */
  create(e, i, s) {
    throw new Error("Method deparecated use createWithPresets");
  }
  async createWithPresets(e, i, s) {
    return await super._createBlockData(e, i);
  }
  insert(e, i, s, o) {
    return this._layouts.appendOneAt(e, o.index ?? -1), this.insertBlockData(e, i, s, o), !0;
  }
}
class ze extends ge {
  constructor(e) {
    super(e, At), this.canCreate = new mt(!0).asObservable(), new Pt(this, ye).addAdditionalPath("_catalogue/:view/:index").onSetup(async (i) => {
      if (await this._retrieveManager, !this._manager) return !1;
      const s = i.index ? parseInt(i.index) : -1, o = await this.getContext(ht);
      if (!o)
        throw new Error("Clipboard context not found");
      const n = o.getPasteTranslatorManifests(
        X
      ), u = await this.getContext(ft);
      if (!u)
        throw new Error("Property context not found");
      const C = u.getConfig(), G = new Oe(this);
      return {
        data: {
          blocks: this._manager?.getBlockTypes() ?? [],
          blockGroups: [],
          openClipboard: i.view === "clipboard",
          clipboardFilter: async (U) => {
            if (!o.hasSupportedPasteTranslator(
              n,
              U.values
            ))
              return !1;
            const Z = await G.getPasteTranslator(
              U.values,
              X
            );
            if (Z.isCompatibleValue) {
              const de = await G.resolve(
                U.values,
                X
              );
              return Z.isCompatibleValue(de, C);
            }
            return !0;
          },
          originData: { index: s },
          createBlockInWorkspace: this._manager.getInlineEditingMode() === !1
        }
      };
    }).onSubmit(async (i, s) => {
      if (i?.create && s) {
        const o = await this.create(
          i.create.contentElementTypeKey,
          {},
          s.originData
        );
        if (o)
          this.insert(
            o.layout,
            o.content,
            o.settings,
            s.originData
          );
        else
          throw new Error("Failed to create block");
      } else if (i?.clipboard && i.clipboard.selection?.length && s) {
        const o = await this.getContext(ht);
        if (!o)
          throw new Error("Clipboard context not found");
        const n = await o.readMultiple(
          i.clipboard.selection,
          X
        );
        this._insertFromPropertyValues(n, s.originData);
      }
    }).observeRouteBuilder((i) => {
      this._catalogueRouteBuilderState.setValue(i);
    }), new Pt(this, Pe).addAdditionalPath("block").onSetup(() => ({
      data: { entityType: "block", preset: {}, baseDataPath: this._dataPath },
      modal: { size: "medium" }
    })).observeRouteBuilder((i) => {
      const s = i({});
      this._workspacePath.setValue(s);
    });
  }
  _gotBlockManager() {
    this._manager && (this.observe(
      this._manager.layouts,
      (e) => {
        this._layoutEntries.setValue(e);
      },
      "observeParentLayouts"
    ), this.observe(
      this.layoutEntries,
      (e) => {
        this._manager?.setLayouts(e);
      },
      "observeThisLayouts"
    ));
  }
  getPathForCreateBlock(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "create", index: e });
  }
  getPathForClipboard(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "clipboard", index: e });
  }
  async setLayouts(e) {
    await this._retrieveManager, this._manager?.setLayouts(e);
  }
  async create(e, i, s) {
    return await this._retrieveManager, await this._manager?.createWithPresets(e, i, s);
  }
  // insert Block?
  async insert(e, i, s, o) {
    return await this._retrieveManager, this._manager?.insert(e, i, s, o) ?? !1;
  }
  async _insertFromPropertyValue(e, i) {
    const s = e.layout[ot];
    if (!s)
      throw new Error("No layout entries found");
    return await Promise.all(
      s.map(async (o) => {
        this._insertBlockFromPropertyValue(o, e, i), i.index !== -1 && (i = { ...i, index: i.index + 1 });
      })
    ), i;
  }
}
class De extends fe {
  constructor(e) {
    super(e, At, Te), this.#t = new mt(void 0), this.inlineEditingMode = this.#t.asObservable(), this.forceHideContentEditorInOverlay = this._blockType.asObservablePart(
      (i) => i ? i.forceHideContentEditorInOverlay ?? !1 : void 0
    ), this.showContentEdit = be(
      [this._contentStructureHasProperties, this.forceHideContentEditorInOverlay, this.inlineEditingMode],
      ([i, s, o]) => i === !0 && s === !1 && o === !1
    );
  }
  #t;
  _gotManager() {
    this.observe(
      this._manager?.inlineEditingMode,
      (e) => {
        this.#t.setValue(e);
      },
      "observeInlineEditingMode"
    );
  }
  _gotEntries() {
  }
  _gotContentType() {
  }
}
var Ne = Object.defineProperty, We = Object.getOwnPropertyDescriptor, O = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? We(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && Ne(e, i, o), o;
};
let P = class extends D {
  render() {
    const t = { ...this.content, $settings: this.settings, $index: this.index };
    return l`
			<uui-ref-node standalone href=${(this.config?.showContentEdit ? this.config?.editContentPath : void 0) ?? ""}>
				<umb-icon slot="icon" .name=${this.icon}></umb-icon>
				<umb-ufm-render slot="name" inline .markdown=${this.label} .value=${t}></umb-ufm-render>
				${It(
      this.unpublished,
      () => l`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
							><umb-localize key="blockEditor_notExposedLabel"></umb-localize
						></uui-tag>`
    )}
			</uui-ref-node>
		`;
  }
};
P.styles = [
  N`
			uui-ref-node {
				min-height: var(--uui-size-16);
			}
			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}
			:host([unpublished]) umb-icon,
			:host([unpublished]) umb-ufm-render {
				opacity: 0.6;
			}
		`
];
O([
  m({ type: String, reflect: !1 })
], P.prototype, "label", 2);
O([
  m({ type: String, reflect: !1 })
], P.prototype, "icon", 2);
O([
  m({ type: Number, attribute: !1 })
], P.prototype, "index", 2);
O([
  m({ type: Boolean, reflect: !0 })
], P.prototype, "unpublished", 2);
O([
  m({ attribute: !1 })
], P.prototype, "content", 2);
O([
  m({ attribute: !1 })
], P.prototype, "settings", 2);
O([
  m({ attribute: !1 })
], P.prototype, "config", 2);
P = O([
  W("umb-ref-list-block")
], P);
var Ge = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, Kt = (t) => {
  throw TypeError(t);
}, rt = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Fe(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && Ge(e, i, o), o;
}, vt = (t, e, i) => e.has(t) || Kt("Cannot " + i), V = (t, e, i) => (vt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), lt = (t, e, i) => e.has(t) ? Kt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Xe = (t, e, i, s) => (vt(t, e, "write to private field"), e.set(t, i), i), Y = (t, e, i) => (vt(t, e, "access private method"), i), K, I, S, zt, yt, pt;
let z = class extends D {
  constructor() {
    super(), lt(this, S), this._hasRootGroups = !1, lt(this, K), lt(this, I, new ke(this)), V(this, I).setIsRoot(!0), V(this, I).setContainerChildType("Tab"), this.observe(V(this, I).childContainers, (t) => {
      this._tabs = t, Y(this, S, yt).call(this);
    }), this.consumeContext($e, (t) => {
      Xe(this, K, t), V(this, I).setStructureManager(t?.content.structure), Y(this, S, zt).call(this);
    });
  }
  render() {
    if (this._tabs)
      return l`
			${this._tabs.length > 1 || this._tabs.length === 1 && this._hasRootGroups ? l`<uui-tab-group slot="header">
						${this._hasRootGroups && this._tabs.length > 0 ? l`<uui-tab
									label=${this.localize.term("general_generic")}
									.active=${this._activeTabKey === null}
									@click=${() => Y(this, S, pt).call(this, null)}
									>Content</uui-tab
								>` : y}
						${Rt(
        this._tabs,
        (t) => t.name,
        (t) => {
          const e = t.ownerId ?? t.ids[0];
          return l`<uui-tab
									label=${this.localize.string(t.name ?? "#general_unnamed")}
									.active=${this._activeTabKey === e}
									@click=${() => Y(this, S, pt).call(this, e)}
									>${t.name}</uui-tab
								>`;
        }
      )}
					</uui-tab-group>` : y}
			${this._activeTabKey !== void 0 ? l`<umb-block-workspace-view-edit-tab
						.managerName=${"content"}
						.hideSingleGroup=${!0}
						.containerId=${this._activeTabKey}>
					</umb-block-workspace-view-edit-tab>` : y}
		`;
  }
};
K = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
S = /* @__PURE__ */ new WeakSet();
zt = async function() {
  V(this, K) && this.observe(
    await V(this, K).content.structure.hasRootContainers("Group"),
    (t) => {
      this._hasRootGroups = t, Y(this, S, yt).call(this);
    },
    "observeGroups"
  );
};
yt = function() {
  if (!(!this._tabs || !V(this, K)) && this._activeTabKey === void 0) {
    if (this._hasRootGroups)
      this._activeTabKey = null;
    else if (this._tabs.length > 0) {
      const t = this._tabs[0];
      this._activeTabKey = t.ownerId ?? t.ids[0];
    }
  }
};
pt = function(t) {
  this._activeTabKey = t;
};
z.styles = [
  nt,
  N`
			:host {
				position: relative;
				display: block;
				height: 100%;
				--uui-tab-background: var(--uui-color-surface);

				padding: calc(var(--uui-size-layout-1));
			}
		`
];
rt([
  h()
], z.prototype, "_hasRootGroups", 2);
rt([
  h()
], z.prototype, "_tabs", 2);
rt([
  h()
], z.prototype, "_activeTabKey", 2);
z = rt([
  W("umb-block-workspace-view-edit-content-no-router")
], z);
var Ye = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, Dt = (t) => {
  throw TypeError(t);
}, w = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? qe(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && Ye(e, i, o), o;
}, gt = (t, e, i) => e.has(t) || Dt("Cannot " + i), $ = (t, e, i) => (gt(t, e, "read from private field"), e.get(t)), F = (t, e, i) => e.has(t) ? Dt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ct = (t, e, i, s) => (gt(t, e, "write to private field"), e.set(t, i), i), j = (t, e, i) => (gt(t, e, "access private method"), i), tt, T, J, R, dt, kt, Nt, Wt;
const He = (t) => [{ manifest: t }];
let k = class extends D {
  constructor() {
    super(), F(this, R), F(this, tt), F(this, T), F(this, J), this._isOpen = !1, F(this, kt, () => {
      $(this, T)?.expose();
    }), this.consumeContext(Be, (t) => {
      ct(this, tt, t), this.observe(
        $(this, tt)?.unique,
        (e) => {
          ct(this, J, e), j(this, R, dt).call(this);
        },
        "observeContentKey"
      );
    }), new Ue(
      this,
      Bt,
      ve,
      He,
      (t, e) => {
        const i = e.api;
        t && i && (ct(this, T, i), $(this, T).establishLiveSync(), j(this, R, dt).call(this), this.observe(
          $(this, T).exposed,
          (s) => {
            this._exposed = s;
          },
          "observeExposed"
        ), this.observe(
          i.content.structure.ownerContentTypeName,
          (s) => {
            this._ownerContentTypeName = s;
          },
          "observeContentTypeName"
        ), this.observe(
          i.variantId,
          async (s) => {
            if (s) {
              i.content.setup(this, s);
              const o = s.culture;
              if (o) {
                const n = new we(this), { data: u } = await n.requestItems([o]), C = u?.[0].name;
                this._variantName = C ? this.localize.string(C) : void 0;
              }
            }
          },
          "observeVariant"
        ), new Ae(this, Bt, "workspaceContext", [$(this, T)]));
      }
    );
  }
  render() {
    return l`
			<div id="host">
				<button
					id="open-part"
					tabindex="0"
					@keydown=${(t) => {
      t.key !== " " && t.key !== "Enter" || (t.preventDefault(), t.stopPropagation(), this._isOpen = !this._isOpen);
    }}
					@click=${() => {
      this._isOpen = !this._isOpen;
    }}>
					<uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
					${j(this, R, Nt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</button>
				${this._isOpen === !0 ? j(this, R, Wt).call(this) : y}
			</div>
		`;
  }
};
tt = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakSet();
dt = function() {
  !$(this, T) || !$(this, J) || $(this, T).load($(this, J));
};
kt = /* @__PURE__ */ new WeakMap();
Nt = function() {
  const t = { ...this.content, $settings: this.settings, $index: this.index };
  return l`
			<span id="content">
				<span id="icon">
					<umb-icon .name=${this.icon}></umb-icon>
				</span>
				<div id="info">
					<umb-ufm-render id="name" inline .markdown=${this.label} .value=${t}></umb-ufm-render>
				</div>
			</span>
			${It(
    this.unpublished,
    () => l`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
						><umb-localize key="blockEditor_notExposedLabel"></umb-localize
					></uui-tag>`
  )}
		`;
};
Wt = function() {
  return this._exposed === !1 ? l`<uui-button id="exposeButton" draggable="false" @click=${$(this, kt)}
				><uui-icon name="icon-add"></uui-icon>
				<umb-localize
					key="blockEditor_createThisFor"
					.args=${[this._ownerContentTypeName, this._variantName]}></umb-localize
			></uui-button>` : l`<umb-block-workspace-view-edit-content-no-router
				draggable="false"></umb-block-workspace-view-edit-content-no-router>`;
};
k.styles = [
  nt,
  N`
			#host {
				position: relative;
				display: block;
				width: 100%;

				box-sizing: border-box;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface);

				border: 1px solid var(--uui-color-border);
				transition: border-color 80ms;

				min-width: 250px;
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

			#open-part + * {
				border-top: 1px solid var(--uui-color-border);
			}
			:host([disabled]) #open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			:host(:not([disabled])) #host:has(#open-part:hover) {
				border-color: var(--uui-color-border-emphasis);
			}
			:host(:not([disabled])) #open-part:hover + * {
				border-color: var(--uui-color-border-emphasis);
			}
			:host([disabled]) #host {
				border-color: var(--uui-color-disabled-standalone);
			}

			:host([unpublished]) #open-part #content {
				opacity: 0.6;
			}

			slot[name='tag'] {
				flex-grow: 1;

				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			button {
				font-size: inherit;
				font-family: inherit;
				border: 0;
				padding: 0;
				background-color: transparent;
				text-align: left;
				color: var(--uui-color-text);
			}

			#content {
				align-self: stretch;
				line-height: normal;
				display: flex;
				position: relative;
				align-items: center;
			}

			#open-part {
				color: inherit;
				text-decoration: none;
				cursor: pointer;

				display: flex;
				text-align: left;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				border: none;
				background: none;

				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			#icon {
				font-size: 1.2em;
				margin-left: var(--uui-size-2);
				margin-right: var(--uui-size-1);
			}

			#info {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				height: 100%;
				padding-left: var(--uui-size-2, 6px);
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}

			:host(:not([disabled])) #open-part:hover #icon {
				color: var(--uui-color-interactive-emphasis);
			}
			:host(:not([disabled])) #open-part:hover #name {
				color: var(--uui-color-interactive-emphasis);
			}

			:host([disabled]) #icon {
				color: var(--uui-color-disabled-contrast);
			}
			:host([disabled]) #name {
				color: var(--uui-color-disabled-contrast);
			}
		`
];
w([
  m({ type: String, reflect: !1 })
], k.prototype, "label", 2);
w([
  m({ type: String, reflect: !1 })
], k.prototype, "icon", 2);
w([
  m({ type: Number, attribute: !1 })
], k.prototype, "index", 2);
w([
  m({ type: Boolean, reflect: !0 })
], k.prototype, "unpublished", 2);
w([
  m({ attribute: !1 })
], k.prototype, "content", 2);
w([
  m({ attribute: !1 })
], k.prototype, "settings", 2);
w([
  h()
], k.prototype, "_exposed", 2);
w([
  h()
], k.prototype, "_isOpen", 2);
w([
  h()
], k.prototype, "_ownerContentTypeName", 2);
w([
  h()
], k.prototype, "_variantName", 2);
k = w([
  W("umb-inline-list-block")
], k);
var Qe = Object.getOwnPropertyDescriptor, Gt = (t) => {
  throw TypeError(t);
}, Je = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Qe(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = u(o) || o);
  return o;
}, Ze = (t, e, i) => e.has(t) || Gt("Cannot " + i), je = (t, e, i) => e.has(t) ? Gt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ti = (t, e, i) => (Ze(t, e, "access private method"), i), bt, Ft;
let _t = class extends D {
  constructor() {
    super(...arguments), je(this, bt);
  }
  render() {
    return l`
			<div id="host">
				<div id="open-part">
					${ti(this, bt, Ft).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</div>
				<div id="inside" draggable="false">${this.localize.term("blockEditor_unsupportedBlockDescription")}</div>
			</div>
		`;
  }
};
bt = /* @__PURE__ */ new WeakSet();
Ft = function() {
  return l`
			<span id="content">
				<span id="icon">
					<umb-icon name="icon-alert"></umb-icon>
				</span>
				<div id="info">
					<span id="name">${this.localize.term("blockEditor_unsupportedBlockName")}</span>
				</div>
			</span>
		`;
};
_t.styles = [
  nt,
  N`
			#host {
				position: relative;
				display: block;
				width: 100%;

				box-sizing: border-box;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-surface);

				border: 1px solid var(--uui-color-border);
				transition: border-color 80ms;

				min-width: 250px;
			}

			#open-part + * {
				border-top: 1px solid var(--uui-color-border);
			}
			:host([disabled]) #open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			:host([disabled]) #host {
				border-color: var(--uui-color-disabled-standalone);
			}

			:host([unpublished]) #open-part #content {
				opacity: 0.6;
			}

			slot[name='tag'] {
				flex-grow: 1;

				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			button {
				font-size: inherit;
				font-family: inherit;
				border: 0;
				padding: 0;
				background-color: transparent;
				text-align: left;
				color: var(--uui-color-text);
			}

			#content {
				align-self: stretch;
				line-height: normal;
				display: flex;
				position: relative;
				align-items: center;
			}

			#open-part {
				color: inherit;
				text-decoration: none;

				display: flex;
				text-align: left;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				border: none;
				background: none;

				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			#icon {
				font-size: 1.2em;
				margin-left: var(--uui-size-2);
				margin-right: var(--uui-size-1);
			}

			#info {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				height: 100%;
				padding-left: var(--uui-size-2, 6px);
			}

			#name {
				font-weight: 700;
			}

			uui-tag {
				margin-left: 0.5em;
				margin-bottom: -0.3em;
				margin-top: -0.3em;
				vertical-align: text-top;
			}

			:host([disabled]) #icon {
				color: var(--uui-color-disabled-contrast);
			}
			:host([disabled]) #name {
				color: var(--uui-color-disabled-contrast);
			}

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
_t = Je([
  W("umb-unsupported-list-block")
], _t);
var ei = Object.defineProperty, ii = Object.getOwnPropertyDescriptor, Xt = (t) => {
  throw TypeError(t);
}, v = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? ii(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && ei(e, i, o), o;
}, Yt = (t, e, i) => e.has(t) || Xt("Cannot " + i), a = (t, e, i) => (Yt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), A = (t, e, i) => e.has(t) ? Xt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), b = (t, e, i) => (Yt(t, e, "access private method"), i), c, p, g, qt, Ht, et, Qt, wt, xt, Jt, Zt, jt, Ct, te, ee, ie, oe, se, ne;
let _ = class extends D {
  constructor() {
    super(), A(this, p), A(this, c, new De(this)), this._showContentEdit = !1, this._hasSettings = !1, this._label = "", this._blockViewProps = {
      contentKey: void 0,
      config: { showContentEdit: !1, showSettingsEdit: !1 }
    }, this._isReadOnly = !1, A(this, et, () => {
      a(this, c).expose();
    }), A(this, wt, (t) => !(this._unsupported || t.forContentTypeAlias && !$t(t.forContentTypeAlias, this._contentTypeAlias) || t.forBlockEditor && !$t(t.forBlockEditor, Se))), A(this, xt, (t) => (t.component?.setAttribute("part", "component"), this._exposed ? t.component : l`<div style="min-height: var(--uui-size-16);">
				${t.component}
				<umb-block-overlay-expose-button
					.contentTypeName=${this._contentTypeName}
					@click=${a(this, et)}></umb-block-overlay-expose-button>
			</div>`)), A(this, Ct, () => this._unsupported ? b(this, p, jt).call(this) : this._inlineEditingMode ? b(this, p, Zt).call(this) : b(this, p, Jt).call(this)), b(this, p, qt).call(this);
  }
  set index(t) {
    a(this, c).setIndex(t);
  }
  get index() {
    return a(this, c).getIndex();
  }
  set contentKey(t) {
    t && (this._contentKey = t, a(this, c).setContentKey(t), new Ut(
      this,
      `$.contentData[${Vt({ key: t })}]`,
      (e) => {
        this._contentInvalid = e, this._blockViewProps.contentInvalid = e;
      },
      "observeMessagesForContent"
    ));
  }
  get contentKey() {
    return this._contentKey;
  }
  connectedCallback() {
    super.connectedCallback(), this.observe(
      a(this, c).contentElementTypeKey,
      (t) => {
        t && this.setAttribute("data-content-element-type-key", t);
      },
      "contentElementTypeKey"
    ), this.observe(
      a(this, c).contentElementTypeAlias,
      (t) => {
        t && (this._contentTypeAlias = t, this.setAttribute("data-content-element-type-alias", t));
      },
      "contentElementTypeAlias"
    ), this.observe(
      a(this, c).contentElementTypeName,
      (t) => {
        this._contentTypeName = t;
      },
      "contentElementTypeName"
    );
  }
  render() {
    return b(this, p, te).call(this);
  }
};
c = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
g = function(t) {
  this._blockViewProps = { ...this._blockViewProps, ...t }, this.requestUpdate("_blockViewProps");
};
qt = function() {
  this.observe(
    a(this, c).showContentEdit,
    (t) => {
      this._showContentEdit = t, b(this, p, g).call(this, { config: { ...this._blockViewProps.config, showContentEdit: t } });
    },
    null
  ), this.observe(
    a(this, c).settingsElementTypeKey,
    (t) => {
      this._hasSettings = !!t, b(this, p, g).call(this, { config: { ...this._blockViewProps.config, showSettingsEdit: !!t } });
    },
    null
  ), this.observe(
    a(this, c).blockType,
    (t) => {
      b(this, p, g).call(this, { blockType: t });
    },
    null
  ), this.observe(a(this, c).index, (t) => b(this, p, g).call(this, { index: t }), null), this.observe(
    a(this, c).label,
    (t) => {
      b(this, p, g).call(this, { label: t }), this._label = t;
    },
    null
  ), this.observe(
    a(this, c).contentElementTypeIcon,
    (t) => {
      b(this, p, g).call(this, { icon: t }), this._icon = t;
    },
    null
  ), this.observe(
    a(this, c).hasExpose,
    (t) => {
      b(this, p, g).call(this, { unpublished: !t }), this._exposed = t;
    },
    null
  ), this.observe(
    a(this, c).unsupported,
    (t) => {
      t !== void 0 && (b(this, p, g).call(this, { unsupported: t }), this._unsupported = t, this.toggleAttribute("unsupported", t));
    },
    null
  ), this.observe(
    a(this, c).actionsVisibility,
    (t) => {
      this._showActions = t;
    },
    null
  ), this.observe(
    a(this, c).inlineEditingMode,
    (t) => {
      this._inlineEditingMode = t;
    },
    null
  ), this.observe(
    a(this, c).layout,
    (t) => {
      b(this, p, g).call(this, { layout: t });
    },
    null
  ), b(this, p, Ht).call(this), this.observe(
    a(this, c).settingsKey,
    (t) => {
      this.removeUmbControllerByAlias("observeMessagesForSettings"), t && new Ut(
        this,
        `$.settingsData[${Vt({ key: t })}]`,
        (e) => {
          this._settingsInvalid = e, this._blockViewProps.settingsInvalid = e;
        },
        "observeMessagesForSettings"
      );
    },
    null
  ), this.observe(
    a(this, c).workspaceEditContentPath,
    (t) => {
      this._workspaceEditContentPath = t, b(this, p, g).call(this, { config: { ...this._blockViewProps.config, editContentPath: t } });
    },
    null
  ), this.observe(
    a(this, c).workspaceEditSettingsPath,
    (t) => {
      this._workspaceEditSettingsPath = t, b(this, p, g).call(this, { config: { ...this._blockViewProps.config, editSettingsPath: t } });
    },
    null
  ), this.observe(
    a(this, c).readOnlyGuard.permitted,
    (t) => this._isReadOnly = t,
    "umbReadOnlyObserver"
  );
};
Ht = async function() {
  this.observe(
    await a(this, c).contentValues(),
    (t) => {
      b(this, p, g).call(this, { content: t });
    },
    null
  ), this.observe(
    await a(this, c).settingsValues(),
    (t) => {
      b(this, p, g).call(this, { settings: t });
    },
    null
  );
};
et = /* @__PURE__ */ new WeakMap();
Qt = async function() {
  const t = await this.getContext(Lt), e = await this.getContext(ft), i = await this.getContext(ht);
  if (!t || !e || !i)
    throw new Error("Could not get required contexts to copy.");
  const s = t?.getName(), o = e?.getLabel(), n = a(this, c).getName(), u = s ? `${s} - ${o} - ${n}` : `${o} - ${n}`, C = a(this, c).getContent(), G = a(this, c).getLayout(), U = a(this, c).getSettings(), at = a(this, c).getExpose(), Z = {
    contentData: C ? [structuredClone(C)] : [],
    layout: {
      [ot]: G ? [structuredClone(G)] : void 0
    },
    settingsData: U ? [structuredClone(U)] : [],
    expose: at ? [structuredClone(at)] : []
  };
  i.write({
    icon: this._icon,
    name: u,
    propertyValue: Z,
    propertyEditorUiAlias: X
  });
};
wt = /* @__PURE__ */ new WeakMap();
xt = /* @__PURE__ */ new WeakMap();
Jt = function() {
  return l`<umb-ref-list-block
			.label=${this._label}
			.icon=${this._icon}
			.index=${this._blockViewProps.index}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${st()}></umb-ref-list-block>`;
};
Zt = function() {
  return l`<umb-inline-list-block
			.label=${this._label}
			.icon=${this._icon}
			.index=${this._blockViewProps.index}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${st()}></umb-inline-list-block>`;
};
jt = function() {
  return l`<umb-unsupported-list-block
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			${st()}></umb-unsupported-list-block>`;
};
Ct = /* @__PURE__ */ new WeakMap();
te = function() {
  return this.contentKey && (this._contentTypeAlias || this._unsupported) ? l`
					<div class="umb-block-list__block">
						<umb-extension-slot
							type="blockEditorCustomView"
							default-element=${this._inlineEditingMode ? "umb-inline-list-block" : "umb-ref-list-block"}
							.renderMethod=${a(this, xt)}
							.fallbackRenderMethod=${a(this, Ct)}
							.props=${this._blockViewProps}
							.filter=${a(this, wt)}
							single></umb-extension-slot>
						${b(this, p, ee).call(this)}
						${!this._showContentEdit && this._contentInvalid ? l`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : y}
					</div>
				` : y;
};
ee = function() {
  return this._showActions ? l`<uui-action-bar>
					${b(this, p, ie).call(this)} ${b(this, p, oe).call(this)} ${b(this, p, ne).call(this)}
					${b(this, p, se).call(this)}
				</uui-action-bar>` : y;
};
ie = function() {
  return this._showContentEdit && this._workspaceEditContentPath ? l`<uui-button
					label="edit"
					look="secondary"
					color=${this._contentInvalid ? "invalid" : ""}
					href=${this._workspaceEditContentPath}>
					<uui-icon name=${this._exposed === !1 && this._isReadOnly === !1 ? "icon-add" : "icon-edit"}></uui-icon>
					${this._contentInvalid ? l`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : y}
				</uui-button>` : this._showContentEdit === !1 && this._exposed === !1 ? l`<uui-button
						@click=${a(this, et)}
						label=${this.localize.term("blockEditor_createThisFor", this._contentTypeName)}
						look="secondary"
						><uui-icon name="icon-add"></uui-icon
					></uui-button>` : y;
};
oe = function() {
  return l`
			${this._hasSettings && this._workspaceEditSettingsPath ? l`<uui-button
						label="Edit settings"
						look="secondary"
						color=${this._settingsInvalid ? "invalid" : ""}
						href=${this._workspaceEditSettingsPath}>
						<uui-icon name="icon-settings"></uui-icon>
						${this._settingsInvalid ? l`<uui-badge attention color="invalid" label="Invalid settings">!</uui-badge>` : y}
					</uui-button>` : y}
		`;
};
se = function() {
  return this._isReadOnly ? y : l` <uui-button label="delete" look="secondary" @click=${() => a(this, c).requestDelete()}>
			<uui-icon name="icon-remove"></uui-icon>
		</uui-button>`;
};
ne = function() {
  return l`<uui-button label="Copy to clipboard" look="secondary" @click=${() => b(this, p, Qt).call(this)}>
			<uui-icon name="icon-clipboard-copy"></uui-icon>
		</uui-button>`;
};
_.styles = [
  Ve,
  N`
			:host {
				position: relative;
				display: block;
				--umb-block-list-entry-actions-opacity: 0;
			}

			:host([settings-invalid]),
			:host([content-invalid]),
			:host(:hover),
			:host(:focus-within) {
				--umb-block-list-entry-actions-opacity: 1;
			}

			:host::after {
				content: '';
				position: absolute;
				z-index: 1;
				pointer-events: none;
				inset: 0;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);

				transition: border-color 240ms ease-in;
			}

			:host([settings-invalid])::after,
			:host([content-invalid])::after {
				border-color: var(--uui-color-invalid);
			}

			umb-extension-slot::part(component) {
				position: relative;
				z-index: 0;
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
				opacity: var(--umb-block-list-entry-actions-opacity, 0);
				transition: opacity 120ms;
			}

			uui-badge {
				z-index: 2;
			}

			:host::after {
				content: '';
				position: absolute;
				z-index: 1;
				pointer-events: none;
				inset: 0;
				border: 1px solid transparent;
				border-radius: var(--uui-border-radius);

				transition: border-color 240ms ease-in;
			}
			:host(:hover):not(:drop)::after {
				display: block;
				border-color: var(--uui-color-interactive-emphasis);
				box-shadow:
					0 0 0 1px rgba(255, 255, 255, 0.7),
					inset 0 0 0 1px rgba(255, 255, 255, 0.7);
			}

			:host([drag-placeholder])::after {
				display: block;
				border-width: 2px;
				border-color: var(--uui-color-interactive-emphasis);
				animation: ${Le};
			}
			:host([drag-placeholder])::before {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: var(--uui-border-radius);
				background-color: var(--uui-color-interactive-emphasis);
				opacity: 0.12;
			}
			:host([drag-placeholder]) .umb-block-list__block {
				transition: opacity 50ms 16ms;
				opacity: 0;
			}
		`
];
v([
  m({ type: Number })
], _.prototype, "index", 1);
v([
  m({ attribute: !1 })
], _.prototype, "contentKey", 1);
v([
  h()
], _.prototype, "_contentTypeAlias", 2);
v([
  h()
], _.prototype, "_contentTypeName", 2);
v([
  h()
], _.prototype, "_showContentEdit", 2);
v([
  h()
], _.prototype, "_hasSettings", 2);
v([
  h()
], _.prototype, "_label", 2);
v([
  h()
], _.prototype, "_icon", 2);
v([
  h()
], _.prototype, "_exposed", 2);
v([
  h()
], _.prototype, "_unsupported", 2);
v([
  h()
], _.prototype, "_showActions", 2);
v([
  h()
], _.prototype, "_workspaceEditContentPath", 2);
v([
  h()
], _.prototype, "_workspaceEditSettingsPath", 2);
v([
  h()
], _.prototype, "_inlineEditingMode", 2);
v([
  m({ type: Boolean, attribute: "content-invalid", reflect: !0 })
], _.prototype, "_contentInvalid", 2);
v([
  m({ type: Boolean, attribute: "settings-invalid", reflect: !0 })
], _.prototype, "_settingsInvalid", 2);
v([
  h()
], _.prototype, "_blockViewProps", 2);
v([
  h()
], _.prototype, "_isReadOnly", 2);
_ = v([
  W("umb-block-list-entry")
], _);
var oi = Object.defineProperty, si = Object.getOwnPropertyDescriptor, re = Object.getPrototypeOf, ni = Reflect.get, ri = Reflect.set, ae = (t) => {
  throw TypeError(t);
}, x = (t, e, i, s) => {
  for (var o = s > 1 ? void 0 : s ? si(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (o = (s ? u(e, i, o) : u(o)) || o);
  return s && o && oi(e, i, o), o;
}, Et = (t, e, i) => e.has(t) || ae("Cannot " + i), r = (t, e, i) => (Et(t, e, "read from private field"), i ? i.call(t) : e.get(t)), M = (t, e, i) => e.has(t) ? ae("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ot = (t, e, i, s) => (Et(t, e, "write to private field"), e.set(t, i), i), Q = (t, e, i) => (Et(t, e, "access private method"), i), ut = (t, e, i) => ni(re(t), i, e), Mt = (t, e, i, s) => (ri(re(t), i, s, e), s), q, B, it, H, d, E, L, le, ce, ue, he, pe;
const ai = {
  getUniqueOfElement: (t) => t.contentKey,
  getUniqueOfModel: (t) => t.contentKey,
  //identifier: 'block-list-editor',
  itemSelector: "umb-block-list-entry"
  //containerSelector: 'EMPTY ON PURPOSE, SO IT BECOMES THE HOST ELEMENT',
};
let f = class extends xe(D) {
  constructor() {
    super(), M(this, L), M(this, q, new Me(this, {
      ...ai,
      onChange: ({ model: t }) => {
        r(this, E).setLayouts(t);
      }
    })), M(this, B, new Ce(this)), M(this, it), this._createButtonLabel = this.localize.term("content_createEmpty"), M(this, H, !1), this._layouts = [], M(this, d, new Ke(this)), M(this, E, new ze(this)), this.consumeContext(Re, (t) => {
      t ? this.observe(
        St([
          r(this, d).blockTypes,
          t.structure.variesByCulture,
          t.structure.variesBySegment
        ]),
        async ([e, i, s]) => {
          if (e.length > 0 && (i === !1 || s === !1)) {
            const o = await Promise.all(
              e.map(async (n) => {
                const u = n.contentElementTypeKey;
                await r(this, d).contentTypesLoaded;
                const C = await r(this, d).getStructure(u);
                return i === !1 && C?.getVariesByCulture() === !0 ? !0 : s === !1 && C?.getVariesBySegment() === !0;
              })
            );
            this._notSupportedVariantSetting = o.filter((n) => n === !0).length > 0, this._notSupportedVariantSetting && r(this, B).messages.addMessage(
              "config",
              "$",
              "#blockEditor_blockVariantConfigurationNotSupported",
              "blockConfigurationNotSupported"
            );
          }
        },
        "blockTypeConfigurationCheck"
      ) : this.removeUmbControllerByAlias("blockTypeConfigurationCheck");
    }).passContextAliasMatches(), this.consumeContext(ft, (t) => {
      Q(this, L, le).call(this, t);
    }), this.observe(
      r(this, d).layouts,
      (t) => {
        const e = [], i = t.map((o) => o.contentKey);
        r(this, B).messages.getMessagesOfPathAndDescendant("$.contentData").forEach((o) => {
          const n = Tt(o.path).key;
          n && i.indexOf(n) === -1 && e.push(o.key);
        });
        const s = t.map((o) => o.settingsKey).filter((o) => o !== void 0);
        r(this, B).messages.getMessagesOfPathAndDescendant("$.settingsData").forEach((o) => {
          const n = Tt(o.path).key;
          n && s.indexOf(n) === -1 && e.push(o.key);
        }), r(this, B).messages.removeMessageByKeys(e);
      },
      null
    ), this.consumeContext(Lt, async (t) => {
      r(this, d).setVariantId(t?.getVariantId());
    }), this.addValidator(
      "rangeUnderflow",
      () => this.localize.term(
        "validation_entriesShort",
        this._limitMin,
        (this._limitMin ?? 0) - r(this, E).getLength()
      ),
      () => !!this._limitMin && r(this, E).getLength() < this._limitMin
    ), this.addValidator(
      "rangeOverflow",
      () => this.localize.term(
        "validation_entriesExceed",
        this._limitMax,
        r(this, E).getLength() - (this._limitMax || 0)
      ),
      () => !!this._limitMax && r(this, E).getLength() > this._limitMax
    ), this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage ?? Ee,
      () => !!this.mandatory && r(this, E).getLength() === 0
    ), this.observe(
      r(this, E).layoutEntries,
      (t) => {
        this._layouts = t, r(this, q).setModel(t), r(this, d).setLayouts(t);
      },
      null
    ), this.observe(
      r(this, d).blockTypes,
      (t) => {
        this._blocks = t;
      },
      null
    ), this.observe(
      r(this, E).catalogueRouteBuilder,
      (t) => {
        this._catalogueRouteBuilder = t;
      },
      null
    );
  }
  set value(t) {
    if (Ot(this, it, t), !t) {
      super.value = void 0;
      return;
    }
    const e = t ? { ...t } : {};
    e.layout ??= {}, e.contentData ??= [], e.settingsData ??= [], e.expose ??= [], super.value = e, r(this, d).setLayouts(super.value.layout[ot] ?? []), r(this, d).setContents(super.value.contentData), r(this, d).setSettings(super.value.settingsData), r(this, d).setExposes(super.value.expose);
  }
  get value() {
    return super.value;
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("validationLimit");
    this._limitMin = e?.min, this._limitMax = e?.max;
    const i = t.getValueByAlias("blocks") ?? [];
    r(this, d).setBlockTypes(i);
    const s = t.getValueByAlias("useInlineEditingAsDefault");
    r(this, d).setInlineEditingMode(s), this.style.maxWidth = t.getValueByAlias("maxPropertyWidth") ?? "", r(this, d).setEditorConfiguration(t);
    const o = t.getValueByAlias("createLabel");
    o ? this._createButtonLabel = this.localize.string(o) : i.length === 1 && r(this, d).contentTypesLoaded.then(() => {
      const n = r(this, d).getContentTypeNameOf(i[0].contentElementTypeKey);
      this._createButtonLabel = this.localize.term("blockEditor_addThis", this.localize.string(n));
    });
  }
  /**
   * Sets the input to readonly mode, meaning value cannot be changed but still able to read and select its content.
   * @type {boolean}
   * @default
   */
  set readonly(t) {
    Ot(this, H, t), r(this, H) ? (r(this, q).disable(), r(this, d).readOnlyState.fallbackToPermitted()) : (r(this, q).enable(), r(this, d).readOnlyState.fallbackToNotPermitted());
  }
  get readonly() {
    return r(this, H);
  }
  getFormElement() {
  }
  render() {
    return this._notSupportedVariantSetting ? y : l`
			${Rt(
      this._layouts,
      (t, e) => `${e}_${t.contentKey}`,
      (t, e) => l`
					${Q(this, L, ue).call(this, e)}
					<umb-block-list-entry
						index=${e}
						.contentKey=${t.contentKey}
						.layout=${t}
						${st()}>
					</umb-block-list-entry>
				`
    )}
			${Q(this, L, ce).call(this)}
		`;
  }
};
q = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
L = /* @__PURE__ */ new WeakSet();
le = function(t) {
  this.observe(
    t?.dataPath,
    (e) => {
      e && (r(this, B).setDataPath(e), r(this, B).autoReport());
    },
    "observeDataPath"
  ), this.observe(
    t?.alias,
    (e) => {
      r(this, d).setPropertyAlias(e);
    },
    "observePropertyAlias"
  ), this.observe(
    St([
      r(this, d).layouts,
      r(this, d).contents,
      r(this, d).settings,
      r(this, d).exposes
    ]).pipe(Ie(20)),
    ([e, i, s, o]) => {
      if (e.length === 0) {
        if (this.value === void 0)
          return;
        Mt(f.prototype, this, "value", void 0);
      } else {
        const n = {
          ...ut(f.prototype, this, "value"),
          layout: { [ot]: e },
          contentData: i,
          settingsData: s,
          expose: o
        };
        if (_e(this.value, n))
          return;
        Mt(f.prototype, this, "value", n);
      }
      r(this, it) === void 0 && ut(f.prototype, this, "value") === void 0 || t?.setValue(ut(f.prototype, this, "value"));
    },
    "motherObserver"
  );
};
ce = function() {
  return this.readonly && this._layouts.length > 0 ? y : l`<uui-button-group>${Q(this, L, he).call(this)}${Q(this, L, pe).call(this)}</uui-button-group>`;
};
ue = function(t) {
  return this.readonly ? y : l`<uui-button-inline-create
			label=${this._createButtonLabel}
			href=${this._catalogueRouteBuilder?.({ view: "create", index: t }) ?? ""}></uui-button-inline-create>`;
};
he = function() {
  let t;
  if (this._blocks?.length === 1) {
    const e = this._blocks[0].contentElementTypeKey;
    t = this._catalogueRouteBuilder?.({ view: "create", index: -1 }) + "modal/umb-modal-workspace/create/" + e;
  } else
    t = this._catalogueRouteBuilder?.({ view: "create", index: -1 });
  return l`
			<uui-button
				look="placeholder"
				label=${this._createButtonLabel}
				href=${t ?? ""}
				?disabled=${this.readonly}></uui-button>
		`;
};
pe = function() {
  return l`
			<uui-button
				label=${this.localize.term("content_createFromClipboard")}
				look="placeholder"
				href=${this._catalogueRouteBuilder?.({ view: "clipboard", index: -1 }) ?? ""}
				?disabled=${this.readonly}>
				<uui-icon name="icon-clipboard-paste"></uui-icon>
			</uui-button>
		`;
};
f.styles = [
  nt,
  N`
			:host {
				display: grid;
				gap: 1px;
			}
			> div {
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}

			uui-button-group {
				padding-top: 1px;
				display: grid;
				grid-template-columns: 1fr auto;
			}
		`
];
x([
  m({ attribute: !1 })
], f.prototype, "value", 1);
x([
  h()
], f.prototype, "_createButtonLabel", 2);
x([
  m({ type: Boolean })
], f.prototype, "mandatory", 2);
x([
  m({ type: String })
], f.prototype, "mandatoryMessage", 2);
x([
  h()
], f.prototype, "_limitMin", 2);
x([
  h()
], f.prototype, "_limitMax", 2);
x([
  h()
], f.prototype, "_blocks", 2);
x([
  h()
], f.prototype, "_layouts", 2);
x([
  h()
], f.prototype, "_catalogueRouteBuilder", 2);
x([
  h()
], f.prototype, "_notSupportedVariantSetting", 2);
f = x([
  W("umb-property-editor-ui-block-list")
], f);
const Wi = f;
export {
  f as UmbPropertyEditorUIBlockListElement,
  Wi as default
};
//# sourceMappingURL=property-editor-ui-block-list.element-z8jC0iNy.js.map

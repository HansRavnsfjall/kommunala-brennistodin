import { U as Rt } from "./constants-D1CA0epN.js";
import { UmbBooleanState as fe, UmbArrayState as De, pushAtToUniqueArray as Lt, appendToFrozenArray as de, UmbNumberState as it, UmbObjectState as je, UmbStringState as Dt, mergeObservables as zt, observeMultiple as N, jsonStringComparison as Gt } from "@umbraco-cms/backoffice/observable-api";
import { transformServerPathToClientPath as Nt, isWithinRect as Wt, getAccumulatedValueOfIndex as qt, getInterpolatedIndexOfPositionInWeightMap as Ft, stringOrStringArrayContains as Qe } from "@umbraco-cms/backoffice/utils";
import { UmbBlockManagerContext as Ht, UMB_BLOCK_WORKSPACE_ALIAS as Xt, UmbBlockEntriesContext as Yt, UMB_BLOCK_CATALOGUE_MODAL as jt, UmbBlockEntryContext as Qt, UmbDataPathBlockElementDataQuery as ot } from "@umbraco-cms/backoffice/block";
import { UMB_SERVER_CONTEXT as Jt } from "@umbraco-cms/backoffice/server";
import { i as ze, b as Ge, h as rt, l as re, n as Zt, k as _e, a as ei } from "./index-q0gJfrDp.js";
import { UmbLitElement as H } from "@umbraco-cms/backoffice/lit-element";
import { css as L, state as c, customElement as D, repeat as nt, html as l, property as C, when as st, nothing as k, ref as ti } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as Ce } from "@umbraco-cms/backoffice/style";
import { UMB_PROPERTY_CONTEXT as ve, UMB_PROPERTY_DATASET_CONTEXT as at } from "@umbraco-cms/backoffice/property";
import { UmbDataPathPropertyValueQuery as ii, UmbFormControlMixin as lt, UmbFormControlValidator as Je, UmbObserveValidationStateController as ut, UmbValidationContext as oi } from "@umbraco-cms/backoffice/validation";
import { debounceTime as ri } from "@umbraco-cms/backoffice/external/rxjs";
import { umbExtensionsRegistry as Ze } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionApiInitializer as ni, UmbExtensionsApiInitializer as si } from "@umbraco-cms/backoffice/extension-api";
import { UmbLanguageItemRepository as ai } from "@umbraco-cms/backoffice/language";
import "@umbraco-cms/backoffice/ufm";
import { f as Be, U as li, c as ui } from "./block-scale-handler.element-BKzGcvEu.js";
import { UmbRoutePathAddendumContext as ci, UmbModalRouteRegistrationController as et } from "@umbraco-cms/backoffice/router";
import { UMB_CLIPBOARD_PROPERTY_CONTEXT as Se, UmbClipboardPastePropertyValueTranslatorValueResolver as hi } from "@umbraco-cms/backoffice/clipboard";
import { UmbSorterController as di } from "@umbraco-cms/backoffice/sorter";
import { UUIBlinkKeyframes as pi, UUIBlinkAnimationValue as bi, UUIRefNodeElement as ct } from "@umbraco-cms/backoffice/external/uui";
import { UMB_CONTENT_WORKSPACE_CONTEXT as mi } from "@umbraco-cms/backoffice/content";
class yi extends Ht {
  constructor(e) {
    super(e), this.#o = new fe(void 0), this.inlineEditingMode = this.#o.asObservable(), this.#t = new De([], (i) => i.key), this.blockGroups = this.#t.asObservable(), this.layoutStylesheet = this._editorConfiguration.asObservablePart((i) => {
      if (!i) return;
      const o = i.getValueByAlias("layoutStylesheet");
      if (!o) return Rt;
      if (o)
        return new URL(Nt(o), this.#r).href;
    }), this.gridColumns = this._editorConfiguration.asObservablePart((i) => {
      const o = i?.getValueByAlias("gridColumns");
      return parseInt(o && o !== "" ? o : "12");
    }), this.#i = this.consumeContext(Jt, (i) => {
      this.#r = i?.getServerUrl();
    }).asPromise({ preventTimeout: !0 });
  }
  #o;
  setInlineEditingMode(e) {
    this.#o.setValue(e ?? !1);
  }
  getInlineEditingMode() {
    return this.#o.getValue();
  }
  #i;
  #r;
  #t;
  getMinAllowed() {
    return this._editorConfiguration.getValue()?.getValueByAlias("validationLimit")?.min ?? 0;
  }
  getMaxAllowed() {
    return this._editorConfiguration.getValue()?.getValueByAlias("validationLimit")?.max ?? 1 / 0;
  }
  setEditorConfiguration(e) {
    this.#i.then(() => {
      super.setEditorConfiguration(e);
    });
  }
  setBlockGroups(e) {
    this.#t.setValue(e);
  }
  getBlockGroups() {
    return this.#t.value;
  }
  getBlockGroupName(e) {
    return this.#t.getValue().find((i) => i.key === e)?.name;
  }
  /**
   * @param contentElementTypeKey
   * @param partialLayoutEntry
   * @param _originData
   * @deprecated Use createWithPresets instead. Will be removed in v.17.
   */
  create(e, i, o) {
    throw new Error("Method deparecated use createWithPresets");
  }
  async createWithPresets(e, i, o) {
    return await super._createBlockData(e, i);
  }
  /**
   * Inserts a layout entry into an area of a layout entry.
   * @param layoutEntry The layout entry to insert.
   * @param insert
   * @param entries The layout entries to search within.
   * @param parentUnique The parentUnique to search for.
   * @param parentId
   * @param areaKey The areaKey to insert the layout entry into.
   * @param index The index to insert the layout entry at.
   * @returns a updated layout entries array if the insert was successful.
   * @remarks
   * This method is recursive and will search for the parentUnique in the layout entries.
   * If the parentUnique is found, the layout entry will be inserted into the items of the area that matches the areaKey.
   * This returns a new array of layout entries with the updated layout entry inserted.
   * Because the layout entries are frozen, the affected parts is replaced with a new. Only updating/unfreezing the affected part of the structure.
   */
  #n(e, i, o, r, n) {
    let s = i.length;
    for (; s--; ) {
      const u = i[s];
      if (u.contentKey === o) {
        const d = u.areas?.map(
          (_) => _.key === r ? {
            ..._,
            items: Lt([..._.items], e, (A) => A.contentKey === e.contentKey, n)
          } : _
        ) ?? [];
        return de(
          i,
          {
            ...u,
            areas: d
          },
          (_) => _.contentKey === u.contentKey
        );
      }
      if (u.areas) {
        let d = u.areas.length;
        for (; d--; ) {
          const _ = this.#n(
            e,
            u.areas[d].items,
            o,
            r,
            n
          );
          if (_) {
            const A = u.areas[d];
            return de(
              i,
              {
                ...u,
                areas: de(
                  u.areas,
                  { ...A, items: _ },
                  ($) => $.key === A.key
                )
              },
              ($) => $.contentKey === u.contentKey
            );
          }
        }
      }
    }
  }
  insert(e, i, o, r) {
    return this.setOneLayout(e, r), this.insertBlockData(e, i, o, r), !0;
  }
  setOneLayout(e, i) {
    const o = i?.index ?? -1;
    if (i?.parentUnique && i?.areaKey) {
      const r = this.#n(
        e,
        this._layouts.getValue(),
        i?.parentUnique,
        i?.areaKey,
        o
      );
      r && this._layouts.setValue(r);
    } else
      this._layouts.appendOneAt(e, o);
  }
  onDragStart() {
    this.getHostElement().style.setProperty("--umb-block-grid--is-dragging", " ");
  }
  onDragEnd() {
    this.getHostElement().style.removeProperty("--umb-block-grid--is-dragging");
  }
}
var gi = Object.defineProperty, fi = Object.getOwnPropertyDescriptor, Ee = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? fi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && gi(e, i, r), r;
};
let ie = class extends H {
  constructor() {
    super(), this._areas = [], this.consumeContext(ze, (t) => {
      this.observe(
        t?.areas,
        (e) => {
          this._areas = e;
        },
        "observeAreas"
      ), this.observe(
        t?.areaGridColumns,
        (e) => {
          this._areaGridColumns = e;
        },
        "observeAreaGridColumns"
      );
    }), this.consumeContext(Ge, (t) => {
      this.observe(
        t?.layoutStylesheet,
        (e) => {
          !e || this._styleElement?.href === e || (this._styleElement = document.createElement("link"), this._styleElement.rel = "stylesheet", this._styleElement.href = e);
        },
        "observeStylesheet"
      );
    });
  }
  render() {
    return this._areas && this._areas.length > 0 ? l` ${this._styleElement}
					<div
						class="umb-block-grid__area-container"
						part="area-container"
						style="--umb-block-grid--area-grid-columns: ${this._areaGridColumns}">
						${nt(
      this._areas,
      (t) => t.key,
      (t) => l`<umb-block-grid-entries
									part="area"
									class="umb-block-grid__area"
									.areaKey=${t.key}
									.layoutColumns=${t.columnSpan}></umb-block-grid-entries>`
    )}
					</div>` : "";
  }
};
ie.styles = [
  L`
			:host {
				display: block;
				width: 100%;
			}
		`
];
Ee([
  c()
], ie.prototype, "_styleElement", 2);
Ee([
  c()
], ie.prototype, "_areas", 2);
Ee([
  c()
], ie.prototype, "_areaGridColumns", 2);
ie = Ee([
  D("umb-block-grid-areas-container")
], ie);
var _i = Object.defineProperty, vi = Object.getOwnPropertyDescriptor, ht = (t) => {
  throw TypeError(t);
}, S = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? vi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && _i(e, i, r), r;
}, Ne = (t, e, i) => e.has(t) || ht("Cannot " + i), E = (t, e, i) => (Ne(t, e, "read from private field"), e.get(t)), M = (t, e, i) => e.has(t) ? ht("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Y = (t, e, i, o) => (Ne(t, e, "write to private field"), e.set(t, i), i), j = (t, e, i) => (Ne(t, e, "access private method"), i), pe, K, te, ce, ne, se, I, Ae, $e, We, dt, pt;
const ki = (t) => [{ manifest: t }];
let P = class extends H {
  constructor() {
    super(), M(this, I), M(this, pe), M(this, K), M(this, te), M(this, ce), M(this, ne), M(this, se), M(this, We, () => {
      E(this, K)?.expose();
    }), this.consumeContext(ze, (t) => {
      Y(this, pe, t), this.observe(
        E(this, pe)?.unique,
        (e) => {
          Y(this, ce, e), j(this, I, Ae).call(this);
        },
        "observeContentKey"
      );
    }), this.consumeContext(rt, (t) => {
      Y(this, ne, t?.getParentUnique()), Y(this, se, t?.getAreaKey());
    }), new ni(
      this,
      Ze,
      Xt,
      ki,
      (t, e) => {
        const i = e.api;
        if (t && i) {
          if (E(this, ne) === void 0 || E(this, se) === void 0)
            throw new Error("Parent unique and area key must be defined");
          Y(this, K, i), i.setOriginData({
            areaKey: E(this, se),
            parentUnique: E(this, ne)
          }), E(this, K).establishLiveSync(), j(this, I, Ae).call(this), this.observe(
            E(this, K).content.structure.contentTypeProperties,
            (o) => {
              this._inlineProperty = o[0], j(this, I, $e).call(this);
            },
            "observeProperties"
          ), this.observe(
            i.content.structure.ownerContentTypeName,
            (o) => {
              this._ownerContentTypeName = o;
            },
            "observeContentTypeName"
          ), this.observe(
            i.variantId,
            async (o) => {
              if (Y(this, te, o), j(this, I, $e).call(this), o) {
                i.content.setup(this, o);
                const r = o.culture;
                if (r) {
                  const n = new ai(this), { data: s } = await n.requestItems([r]), u = s?.[0].name;
                  this._variantName = u ? this.localize.string(u) : void 0;
                }
              }
            },
            "observeVariant"
          ), new si(this, Ze, "workspaceContext", [E(this, K)]);
        }
      }
    );
  }
  render() {
    return l`
			<div id="host">
				<button id="open-part" tabindex="0">
					${j(this, I, dt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</button>
				${j(this, I, pt).call(this)}
			</div>
		`;
  }
};
pe = /* @__PURE__ */ new WeakMap();
K = /* @__PURE__ */ new WeakMap();
te = /* @__PURE__ */ new WeakMap();
ce = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
Ae = function() {
  !E(this, K) || !E(this, ce) || E(this, K).load(E(this, ce));
};
$e = function() {
  if (!E(this, te) || !this._inlineProperty) return;
  const t = this._inlineProperty;
  this._inlinePropertyDataPath = `$.values[${ii({
    alias: t.alias,
    culture: t.variesByCulture ? E(this, te).culture : null,
    segment: t.variesBySegment ? E(this, te).segment : null
  })}].value`;
};
We = /* @__PURE__ */ new WeakMap();
dt = function() {
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
			${st(
    this.unpublished,
    () => l`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
						><umb-localize key="blockEditor_notExposedLabel"></umb-localize
					></uui-tag>`
  )}
		`;
};
pt = function() {
  return this.unpublished === !0 ? l`<uui-button id="exposeButton" @click=${E(this, We)}
				><uui-icon name="icon-add"></uui-icon>
				<umb-localize
					key="blockEditor_createThisFor"
					.args=${[this._ownerContentTypeName, this._variantName]}></umb-localize
			></uui-button>` : l`<div id="inside" draggable="false">
				<umb-property-type-based-property
					.property=${this._inlineProperty}
					.dataPath=${this._inlinePropertyDataPath ?? ""}
					slot="areas"></umb-property-type-based-property>
				<umb-block-grid-areas-container slot="areas" draggable="false"></umb-block-grid-areas-container>
			</div>`;
};
P.styles = [
  Ce,
  L`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

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

			#name {
				font-weight: 700;
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

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
S([
  C({ attribute: !1 })
], P.prototype, "config", 2);
S([
  C({ type: String, reflect: !1 })
], P.prototype, "label", 2);
S([
  C({ type: String, reflect: !1 })
], P.prototype, "icon", 2);
S([
  C({ type: Number, attribute: !1 })
], P.prototype, "index", 2);
S([
  C({ type: Boolean, reflect: !0 })
], P.prototype, "unpublished", 2);
S([
  C({ attribute: !1 })
], P.prototype, "content", 2);
S([
  C({ attribute: !1 })
], P.prototype, "settings", 2);
S([
  c()
], P.prototype, "_inlineProperty", 2);
S([
  c()
], P.prototype, "_inlinePropertyDataPath", 2);
S([
  c()
], P.prototype, "_ownerContentTypeName", 2);
S([
  c()
], P.prototype, "_variantName", 2);
P = S([
  D("umb-block-grid-block-inline")
], P);
var wi = Object.getOwnPropertyDescriptor, bt = (t) => {
  throw TypeError(t);
}, Ci = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? wi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = s(r) || r);
  return r;
}, Ei = (t, e, i) => e.has(t) || bt("Cannot " + i), xi = (t, e, i) => e.has(t) ? bt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), tt = (t, e, i) => (Ei(t, e, "access private method"), i), be, mt, yt;
let Oe = class extends H {
  constructor() {
    super(...arguments), xi(this, be);
  }
  render() {
    return l`
			<div id="host">
				<div id="open-part">
					${tt(this, be, mt).call(this)}
					<slot></slot>
					<slot name="tag"></slot>
				</div>
				${tt(this, be, yt).call(this)}
			</div>
		`;
  }
};
be = /* @__PURE__ */ new WeakSet();
mt = function() {
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
yt = function() {
  return l`<div id="inside" draggable="false">
			${this.localize.term("blockEditor_unsupportedBlockDescription")}
			<umb-block-grid-areas-container slot="areas"></umb-block-grid-areas-container>
		</div>`;
};
Oe.styles = [
  Ce,
  L`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
			}

			#exposeButton {
				width: 100%;
				min-height: var(--uui-size-16);
			}

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
			#open-part {
				cursor: default;
				transition: border-color 80ms;
			}
			#host {
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

			#inside {
				position: relative;
				display: block;
				padding: calc(var(--uui-size-layout-1));
			}
		`
];
Oe = Ci([
  D("umb-block-grid-block-unsupported")
], Oe);
var Pi = Object.defineProperty, Ti = Object.getOwnPropertyDescriptor, z = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Ti(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && Pi(e, i, r), r;
};
let O = class extends H {
  render() {
    const t = { ...this.content, $settings: this.settings, $index: this.index };
    return l`
			<umb-ref-grid-block
				standalone
				href=${(this.config?.showContentEdit ? this.config?.editContentPath : void 0) ?? ""}>
				<umb-icon slot="icon" .name=${this.icon}></umb-icon>
				<umb-ufm-render slot="name" inline .markdown=${this.label} .value=${t}></umb-ufm-render>
				${st(
      this.unpublished,
      () => l`<uui-tag slot="name" look="secondary" title=${this.localize.term("blockEditor_notExposedDescription")}
							><umb-localize key="blockEditor_notExposedLabel"></umb-localize
						></uui-tag>`
    )}
				<umb-block-grid-areas-container slot="areas" draggable="false"></umb-block-grid-areas-container>
			</umb-ref-grid-block>
		`;
  }
};
O.styles = [
  L`
			umb-block-grid-areas-container {
				margin-top: calc(var(--uui-size-2) + 1px);
			}
			umb-block-grid-areas-container::part(area) {
				margin: var(--uui-size-2);
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
z([
  C({ attribute: !1 })
], O.prototype, "label", 2);
z([
  C({ type: String, reflect: !1 })
], O.prototype, "icon", 2);
z([
  C({ type: Number, attribute: !1 })
], O.prototype, "index", 2);
z([
  C({ attribute: !1 })
], O.prototype, "config", 2);
z([
  C({ type: Boolean, reflect: !0 })
], O.prototype, "unpublished", 2);
z([
  C({ attribute: !1 })
], O.prototype, "content", 2);
z([
  C({ attribute: !1 })
], O.prototype, "settings", 2);
O = z([
  D("umb-block-grid-block")
], O);
class Bi extends Yt {
  constructor(e) {
    super(e, Ge), this.#o = new ci(this), this.#r = new it(void 0), this.layoutColumns = this.#r.asObservable(), this.#t = new je(void 0), this.areaType = this.#t.asObservable(), this.areaTypeCreateLabel = this.#t.asObservablePart((i) => i?.createLabel), this.#a = new je(void 0), this.rangeLimits = this.#a.asObservable(), this.#s = new De([], (i) => i.contentElementTypeKey), this.allowedBlockTypes = this.#s.asObservable(), this.amountOfAllowedBlockTypes = this.#s.asObservablePart((i) => i.length), this.canCreate = this.#s.asObservablePart((i) => i.length > 0), this.#l = new fe(void 0), this.hasTypeLimits = this.#l.asObservable(), this.consumeContext(ze, (i) => {
      this.#i = i, this.#p();
    }), new et(this, jt).addAdditionalPath("_catalogue/:view/:index").onSetup(async (i) => {
      if (!this._manager) return !1;
      const o = i.index ? parseInt(i.index) : -1, r = await this.getContext(Se);
      if (!r)
        throw new Error("Clipboard context not available");
      const n = r.getPasteTranslatorManifests(
        re
      ), s = await this.getContext(ve);
      if (!s)
        throw new Error("Property context not available");
      const u = s.getConfig(), d = new hi(this);
      return {
        data: {
          blocks: this.#s.getValue(),
          blockGroups: this._manager.getBlockGroups() ?? [],
          openClipboard: i.view === "clipboard",
          clipboardFilter: async (_) => {
            if (!r.hasSupportedPasteTranslator(
              n,
              _.values
            ))
              return !1;
            const $ = await d.getPasteTranslator(
              _.values,
              re
            );
            if ($.isCompatibleValue) {
              const oe = await d.resolve(
                _.values,
                re
              );
              return $.isCompatibleValue(oe, u, (T) => this.#m(T));
            }
            return !0;
          },
          originData: {
            index: o,
            areaKey: this.#e,
            parentUnique: this.#n
          },
          createBlockInWorkspace: this._manager.getInlineEditingMode() === !1
        }
      };
    }).onSubmit(async (i, o) => {
      if (i?.create && o) {
        const r = await this.create(
          i.create.contentElementTypeKey,
          // We can parse an empty object, cause the rest will be filled in by others.
          {},
          o.originData
        );
        if (r)
          await this.insert(
            r.layout,
            r.content,
            r.settings,
            o.originData
          );
        else
          throw new Error("Failed to create block");
      } else if (i?.clipboard && i.clipboard.selection?.length && o) {
        const r = await this.getContext(Se);
        if (!r)
          throw new Error("Clipboard context not available");
        const n = await r.readMultiple(
          i.clipboard.selection,
          re
        );
        this._insertFromPropertyValues(n, o.originData);
      }
    }).observeRouteBuilder((i) => {
      this._catalogueRouteBuilderState.setValue(i);
    }), new et(this, Zt).addAdditionalPath("block").onSetup(() => ({
      data: {
        entityType: "block",
        preset: {},
        originData: {
          index: -1,
          areaKey: this.#e,
          parentUnique: this.#n,
          baseDataPath: this._dataPath
        }
      },
      modal: { size: "medium" }
    })).observeRouteBuilder((i) => {
      const o = i({});
      this._workspacePath.setValue(o);
    });
  }
  #o;
  #i;
  #r;
  #t;
  #n;
  #e;
  #a;
  #s;
  #l;
  firstAllowedBlockTypeName() {
    if (!this._manager)
      throw new Error("Manager not ready");
    const e = new Dt(void 0);
    return this.observe(this.allowedBlockTypes, (i) => {
      i.length === 1 ? this.observe(
        this._manager.contentTypeNameOf(i[0].contentElementTypeKey),
        (o) => {
          e.setValue(o);
        },
        "getFirstAllowedBlockTypeName"
      ) : this.removeUmbControllerByAlias("getFirstAllowedBlockTypeName");
    }), e.asObservable();
  }
  setParentUnique(e) {
    this.#n = e;
  }
  getParentUnique() {
    return this.#n;
  }
  setAreaKey(e) {
    this.#e = e, this.#o.setAddendum(e ?? ""), this.#y();
  }
  getAreaKey() {
    return this.#e;
  }
  setLayoutColumns(e) {
    this.#r.setValue(e);
  }
  getLayoutColumns() {
    return this.#r.getValue();
  }
  getMinAllowed() {
    return this.#e ? this.#t.getValue()?.minAllowed ?? 0 : this._manager?.getMinAllowed() ?? 0;
  }
  getMaxAllowed() {
    return this.#e ? this.#t.getValue()?.maxAllowed ?? 1 / 0 : this._manager?.getMaxAllowed() ?? 1 / 0;
  }
  getLayoutContainerElement() {
    return this.getHostElement().shadowRoot?.querySelector(".umb-block-grid__layout-container");
  }
  async #m(e) {
    const i = this.#b().map((s) => s.contentElementTypeKey), o = e.layout["Umbraco.BlockGrid"]?.map((s) => s.contentKey) ?? [];
    return e.contentData.filter((s) => o.includes(s.key)).map((s) => s.contentTypeKey).every(
      (s) => i.includes(s)
    );
  }
  _gotBlockManager() {
    this._manager && (this.#u(), this.#c());
  }
  #y() {
    this.#e !== void 0 && this.#p();
  }
  async #p() {
    if (this.#e !== void 0)
      if (this.#e === null) {
        if (await this._retrieveManager, !this._manager) return;
        this.removeUmbControllerByAlias("observeParentUnique"), this.setParentUnique(null), this.observe(
          this._manager.layouts,
          (i) => {
            this._layoutEntries.setValue(i);
          },
          "observeParentLayouts"
        ), this.observe(
          this.layoutEntries,
          (i) => {
            this._manager?.setLayouts(i);
          },
          "observeThisLayouts"
        );
        const e = this.getHostElement();
        e && (e.removeAttribute("data-area-alias"), e.removeAttribute("data-area-col-span"), e.removeAttribute("data-area-row-span"), e.style.removeProperty("--umb-block-grid--grid-columns"), e.style.removeProperty("--umb-block-grid--area-column-span"), e.style.removeProperty("--umb-block-grid--area-row-span")), this.removeUmbControllerByAlias("observeAreaType"), this.#u(), this.#c();
      } else {
        if (!this.#i) return;
        this.observe(
          this.#i.unique,
          (e) => {
            this.setParentUnique(e ?? null);
          },
          "observeParentUnique"
        ), this.observe(
          this.#i.layoutsOfArea(this.#e),
          (e) => {
            e && this._layoutEntries.setValue(e);
          },
          "observeParentLayouts"
        ), this.observe(
          this.layoutEntries,
          (e) => {
            this.#e && this.#i?.setLayoutsOfArea(this.#e, e);
          },
          "observeThisLayouts"
        ), this.observe(
          this.#i.areaType(this.#e),
          (e) => {
            this.#t.setValue(e);
            const i = this.getHostElement();
            i && (i.setAttribute("data-area-alias", e?.alias ?? ""), i.setAttribute("data-area-col-span", e?.columnSpan?.toString() ?? ""), i.setAttribute("data-area-row-span", e?.rowSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--grid-columns", e?.columnSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--area-column-span", e?.columnSpan?.toString() ?? ""), i.style.setProperty("--umb-block-grid--area-row-span", e?.rowSpan?.toString() ?? ""), this.#u(), this.#c());
          },
          "observeAreaType"
        );
      }
  }
  #u() {
    this._manager && (this.#s.setValue(this.#b()), this.#g());
  }
  #c() {
    if (this._manager) {
      if (this.#e != null) {
        const e = this.#t.getValue();
        if (this.removeUmbControllerByAlias("observeConfigurationRootLimits"), !e) return;
        this.#a.setValue({
          min: e.minAllowed ?? 0,
          max: e.maxAllowed ?? 1 / 0
        });
      } else if (this.#e === null) {
        if (!this._manager) return;
        this.observe(
          this._manager.editorConfiguration,
          (e) => {
            const i = e?.getValueByAlias("validationLimit")?.min ?? 0, o = e?.getValueByAlias("validationLimit")?.max ?? 1 / 0;
            this.#a.setValue({ min: i, max: o });
          },
          "observeConfigurationRootLimits"
        );
      }
    }
  }
  getPathForCreateBlock(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "create", index: e });
  }
  getPathForClipboard(e) {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "clipboard", index: e });
  }
  isBlockTypeAllowed(e) {
    return this.#s.asObservablePart(
      (i) => i.some((o) => o.contentElementTypeKey === e)
    );
  }
  /*
  async setLayouts(layouts: Array<UmbBlockGridLayoutModel>) {
  	await this._retrieveManager;
  	if (this.#areaKey === null) {
  		this._manager?.setLayouts(layouts);
  	} else {
  		if (!this.#parentUnique || !this.#areaKey) {
  			throw new Error('ParentUnique or AreaKey not set');
  		}
  		this._manager?.setLayoutsOfArea(this.#parentUnique, this.#areaKey, layouts);
  	}
  }
  */
  async create(e, i, o) {
    return await this._retrieveManager, await this._manager?.createWithPresets(e, i, o);
  }
  // insert Block?
  async insert(e, i, o, r) {
    return await this._retrieveManager, this._manager?.insert(e, i, o, r) ?? !1;
  }
  // create Block?
  async delete(e) {
    const i = this._layoutEntries.getValue().find((o) => o.contentKey === e);
    if (!i)
      throw new Error(`Cannot delete block, missing layout for ${e}`);
    Be(i, async (o) => {
      o.settingsKey && this._manager.removeOneSettings(o.settingsKey), this._manager.removeOneContent(e), this._manager.removeExposesOf(e);
    }), await super.delete(e);
  }
  async _insertFromPropertyValue(e, i) {
    const o = e.layout[_e];
    if (!o)
      throw new Error("No layout entries found");
    return await Promise.all(
      o.map(async (r) => {
        await this._insertBlockFromPropertyValue(r, e, i), i.index !== -1 && (i = { ...i, index: i.index + 1 });
      })
    ), i;
  }
  async _insertBlockFromPropertyValue(e, i, o) {
    await super._insertBlockFromPropertyValue(e, i, o), await Be(e, async (r, n, s) => {
      const u = { index: -1, parentUnique: n, areaKey: s };
      await this._insertBlockFromPropertyValue(r, i, u);
    });
  }
  /**
   * @internal
   * @returns {Array<UmbBlockGridTypeModel>} an Array of ElementTypeKeys that are allowed in the current area. Or undefined if not ready jet.
   */
  #b() {
    if (!this._manager) return [];
    if (this.#e) {
      const e = this.#t.getValue();
      return e ? e.specifiedAllowance && e.specifiedAllowance?.length > 0 ? e.specifiedAllowance.flatMap((i) => i.groupKey ? this._manager?.getBlockTypes().filter((o) => o.groupKey === i.groupKey) ?? [] : i.elementTypeKey ? this._manager?.getBlockTypes().filter((o) => o.contentElementTypeKey === i.elementTypeKey) ?? [] : []).filter((i, o, r) => r.findIndex((n) => n.contentElementTypeKey === i.contentElementTypeKey) === o) : this._manager.getBlockTypes().filter((i) => i.allowInAreas) : [];
    } else if (this.#e === null)
      return this._manager.getBlockTypes().filter((e) => e.allowAtRoot);
    return [];
  }
  /**
   * @internal
   */
  #g() {
    if (this._manager)
      if (this.#e) {
        const e = this.#t.getValue();
        if (!e) return;
        e.specifiedAllowance && e.specifiedAllowance?.length > 0 && this.#l.setValue(!0);
      } else this.#e;
  }
  // Property to hold the result of the check, used to make a meaningful Validation Message
  #h;
  getInvalidBlockTypeLimits() {
    return this.#h ?? [];
  }
  /**
   * @internal
   * @returns {boolean} - True if the block type limits are valid, otherwise false.
   */
  checkBlockTypeLimitsValidity() {
    const e = this.#t.getValue();
    if (!e || !e.specifiedAllowance) return !1;
    const i = this._layoutEntries.getValue();
    return this.#h = e.specifiedAllowance.map((o) => {
      const r = o.minAllowed || 0, n = o.maxAllowed || 0;
      if (o.groupKey) {
        const s = this._manager?.getBlockTypes().filter((d) => d.groupKey === o.groupKey && d.allowInAreas === !0).map((d) => d.contentElementTypeKey) ?? [], u = i.filter((d) => {
          const _ = this._manager.getContentTypeKeyOfContentKey(d.contentKey);
          return _ ? s.indexOf(_) !== -1 : !1;
        }).length;
        return u < r || n > 0 && u > n ? {
          groupKey: o.groupKey,
          name: this._manager.getBlockGroupName(o.groupKey) ?? "?",
          amount: u,
          minRequirement: r,
          maxRequirement: n
        } : void 0;
      } else if (o.elementTypeKey) {
        const s = i.filter((u) => this._manager.getContentOf(u.contentKey)?.contentTypeKey === o.elementTypeKey).length;
        return s < r || n > 0 && s > n ? {
          key: o.elementTypeKey,
          name: this._manager.getContentTypeNameOf(o.elementTypeKey) ?? "?",
          amount: s,
          minRequirement: r,
          maxRequirement: n
        } : void 0;
      }
      console.error("Invalid block type limit rule.", o);
    }).filter((o) => o !== void 0), this.#h.length === 0;
  }
  #d;
  getInvalidBlockTypeConfigurations() {
    return this.#d ?? [];
  }
  /**
   * @internal
   * @returns {boolean} - True if the block type limits are valid, otherwise false.
   */
  checkBlockTypeConfigurationValidity() {
    this.#d = [];
    const e = this._layoutEntries.getValue();
    if (e.length === 0) return !0;
    const i = this.#s.getValue();
    if (i.length === 0) return !1;
    const o = i.map((n) => n.contentElementTypeKey);
    return e.filter((n) => {
      const s = this._manager.getContentTypeKeyOfContentKey(n.contentKey);
      if (!s)
        return !1;
      const u = o.indexOf(s) === -1;
      return s && u && this.#d?.push(
        this._manager?.getContentTypeNameOf(s) ?? s
      ), u;
    }).length === 0;
  }
  /**
   * Check if given contentKey is allowed in the current area.
   * @param {string} contentKey - The contentKey of the content to check.
   * @returns {boolean} - True if the content is allowed in the current area, otherwise false.
   */
  allowDrop(e) {
    const i = this._manager?.getContentOf(e), o = this.#s.getValue();
    return !i || !o ? !1 : o.map((r) => r.contentElementTypeKey).indexOf(i.contentTypeKey) !== -1;
  }
  onDragStart() {
    this._manager?.onDragStart();
  }
  onDragEnd() {
    this._manager?.onDragEnd();
  }
}
var Si = Object.defineProperty, Ai = Object.getOwnPropertyDescriptor, gt = (t) => {
  throw TypeError(t);
}, V = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Ai(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && Si(e, i, r), r;
}, qe = (t, e, i) => e.has(t) || gt("Cannot " + i), p = (t, e, i) => (qe(t, e, "read from private field"), i ? i.call(t) : e.get(t)), G = (t, e, i) => e.has(t) ? gt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), R = (t, e, i, o) => (qe(t, e, "write to private field"), e.set(t, i), i), ue = (t, e, i) => (qe(t, e, "access private method"), i), me, v, ye, W, J, Z, q, ft, _t, vt, kt, wt;
function $i(t) {
  if (t.relatedModel.areas && t.relatedModel.areas.length > 0 && Wt(t.pointerX, t.pointerY, t.relatedRect, -10))
    return null;
  const e = getComputedStyle(t.containerElement), i = Number(e.columnGap.split("px")[0]) || 0, o = parseInt(
    e.getPropertyValue("--umb-block-grid--grid-columns"),
    10
  ), r = parseInt(t.relatedElement.dataset.colSpan ?? "", 10), n = t.item.columnSpan;
  if (n >= o)
    return !0;
  const s = e.gridTemplateColumns.trim().split("px").map((T) => Number(T)).filter((T) => T > 0).map((T, X, Pe) => Pe.length === X ? T : T + i);
  let u = s.length;
  const d = o - u;
  if (d > 0) {
    const T = qt(u, s) || 0, X = (t.containerRect.width - T) / d;
    if (X > 0)
      for (; u++ < o; )
        s.push(X);
  }
  let _ = 0;
  t.placeholderIsInThisRow && t.elementRect.left < t.relatedRect.left && (_ = -(t.elementRect.width + i));
  const A = Math.max(t.relatedRect.left - t.containerRect.left + _, 0);
  return Math.round(
    Ft(A, s)
  ) + r + n > o;
}
const Oi = {
  getUniqueOfElement: (t) => t.contentKey,
  getUniqueOfModel: (t) => t.contentKey,
  resolvePlacement: $i,
  identifier: "block-grid-editor",
  itemSelector: "umb-block-grid-entry",
  containerSelector: ".umb-block-grid__layout-container"
};
let B = class extends lt(H) {
  constructor() {
    super(), G(this, q), G(this, me, new di(this, {
      ...Oi,
      onStart: () => {
        p(this, v).onDragStart();
      },
      onEnd: () => {
        p(this, v).onDragEnd();
      },
      onChange: ({ model: t }) => {
        p(this, v).setLayouts(t);
      },
      onRequestMove: ({ item: t }) => p(this, v).allowDrop(t.contentKey),
      onDisallowed: () => {
        this.setAttribute("disallow-drop", "");
      },
      onAllowed: () => {
        this.removeAttribute("disallow-drop");
      }
    })), G(this, v, new Bi(this)), G(this, ye), G(this, W), G(this, J), G(this, Z), this._layoutEntries = [], this._isReadOnly = !1, this.observe(
      p(this, v).layoutEntries,
      (t) => {
        p(this, me).setModel(t), this._layoutEntries = t;
      },
      null
    ), this.observe(
      p(this, v).amountOfAllowedBlockTypes,
      (t) => {
        this._canCreate = t > 0, t === 1 ? this.observe(
          p(this, v).firstAllowedBlockTypeName(),
          (e) => {
            this._createLabel = this.localize.term("blockEditor_addThis", this.localize.string(e));
          },
          "observeSingleBlockTypeName"
        ) : (this.removeUmbControllerByAlias("observeSingleBlockTypeName"), this._createLabel = this.localize.term("blockEditor_addBlock"));
      },
      null
    ), this.observe(
      p(this, v).rangeLimits,
      (t) => {
        ue(this, q, ft).call(this, t);
      },
      null
    ), this.observe(
      p(this, v).hasTypeLimits,
      (t) => {
        ue(this, q, _t).call(this, t);
      },
      null
    ), p(this, v).getManager().then((t) => {
      this.observe(
        t.layoutStylesheet,
        (e) => {
          !e || this._styleElement?.href === e || (this._styleElement = document.createElement("link"), this._styleElement.rel = "stylesheet", this._styleElement.href = e);
        },
        "observeStylesheet"
      ), this.observe(
        t.readOnlyState.permitted,
        (e) => this._isReadOnly = e,
        "observeIsReadOnly"
      ), this.observe(
        t.variantId,
        (e) => {
          e && (p(this, me).identifier = "umb-block-grid-" + e.toString());
        },
        "observeVariantId"
      ), this.areaKey ? this.observe(
        p(this, v).areaTypeCreateLabel,
        (e) => this._configCreateLabel = e,
        "observeConfigCreateLabel"
      ) : this.observe(
        t.editorConfigurationPart((e) => e?.find((i) => i.alias === "createLabel")?.value),
        (e) => this._configCreateLabel = e,
        "observeConfigCreateLabel"
      );
    }), new Je(
      this,
      this
      /*, this.#dataPath*/
    );
  }
  set areaKey(t) {
    this._areaKey = t, p(this, v).setAreaKey(t ?? null), p(this, ye)?.destroy(), this.areaKey && R(this, ye, new Je(this, this));
  }
  get areaKey() {
    return this._areaKey;
  }
  set layoutColumns(t) {
    p(this, v).setLayoutColumns(t);
  }
  get layoutColumns() {
    return p(this, v).getLayoutColumns();
  }
  // TODO: Missing ability to jump directly to creating a Block, when there is only one Block Type. [NL]
  render() {
    return l`
			${this._styleElement}
			<div class="umb-block-grid__layout-container" data-area-length=${this._layoutEntries.length}>
				${nt(
      this._layoutEntries,
      (t, e) => `${e}_${t.contentKey}`,
      (t, e) => l`<umb-block-grid-entry
							class="umb-block-grid__layout-item"
							index=${e}
							.contentKey=${t.contentKey}
							.layout=${t}>
						</umb-block-grid-entry>`
    )}
			</div>
			${this._canCreate ? ue(this, q, vt).call(this) : k}
			${this._areaKey ? l` <uui-form-validation-message .for=${this}></uui-form-validation-message>` : k}
		`;
  }
};
me = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
ye = /* @__PURE__ */ new WeakMap();
W = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
Z = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakSet();
ft = async function(t) {
  p(this, J) && (this.removeValidator(p(this, J)), R(this, J, void 0)), t?.min !== 0 && R(this, J, this.addValidator(
    "rangeUnderflow",
    () => this.localize.term(
      "validation_entriesShort",
      t.min,
      (t.min ?? 0) - this._layoutEntries.length
    ),
    () => this._layoutEntries.length < (t?.min ?? 0)
  )), p(this, Z) && (this.removeValidator(p(this, Z)), R(this, Z, void 0)), t?.max !== 1 / 0 && R(this, Z, this.addValidator(
    "rangeOverflow",
    () => this.localize.term(
      "validation_entriesExceed",
      t.max,
      this._layoutEntries.length - (t.max ?? this._layoutEntries.length)
    ),
    () => this._layoutEntries.length > (t?.max ?? 1 / 0)
  ));
};
_t = async function(t) {
  p(this, W) && (this.removeValidator(p(this, W)), R(this, W, void 0)), t ? R(this, W, this.addValidator(
    "customError",
    () => p(this, v).getInvalidBlockTypeLimits().map(
      (i) => this.localize.term(
        i.amount < i.minRequirement ? "blockEditor_areaValidationEntriesShort" : "blockEditor_areaValidationEntriesExceed",
        i.name,
        i.amount,
        i.minRequirement,
        i.maxRequirement
      )
    ).join(", "),
    () => !p(this, v).checkBlockTypeLimitsValidity()
  )) : R(this, W, this.addValidator(
    "customError",
    () => {
      const e = p(this, v).getInvalidBlockTypeConfigurations().filter((i, o, r) => r.indexOf(i) === o).join(", ");
      return this.localize.term(
        this._areaKey ? "blockEditor_areaValidationEntriesNotAllowed" : "blockEditor_rootValidationEntriesNotAllowed",
        e
      );
    },
    () => !p(this, v).checkBlockTypeConfigurationValidity()
  ));
};
vt = function() {
  return this._areaKey === null || this._layoutEntries.length === 0 ? l` <uui-button-group id="createButton">
				${ue(this, q, kt).call(this)} ${ue(this, q, wt).call(this)}
			</uui-button-group>` : this._isReadOnly === !1 ? l`<uui-button-inline-create
				href=${p(this, v).getPathForCreateBlock(-1) ?? ""}
				label=${this.localize.term("blockEditor_addBlock")}></uui-button-inline-create> ` : k;
};
kt = function() {
  return this._isReadOnly && this._layoutEntries.length > 0 ? k : l`
			<uui-button
				look="placeholder"
				color=${this.pristine === !1 && this.validity.valid === !1 ? "invalid" : "default"}
				label=${this._configCreateLabel ?? this._createLabel ?? ""}
				href=${p(this, v).getPathForCreateBlock(-1) ?? ""}
				?disabled=${this._isReadOnly}></uui-button>
		`;
};
wt = function() {
  return this._areaKey ? k : this._isReadOnly && this._layoutEntries.length > 0 ? k : l`
			<uui-button
				label=${this.localize.term("content_createFromClipboard")}
				look="placeholder"
				href=${p(this, v).getPathForClipboard(-1) ?? ""}
				?disabled=${this._isReadOnly}>
				<uui-icon name="icon-clipboard-paste"></uui-icon>
			</uui-button>
		`;
};
B.styles = [
  Ce,
  L`
			:host {
				position: relative;
				display: grid;
				gap: 1px;
			}
			:host([disallow-drop])::before {
				content: '';
				position: absolute;
				z-index: 1;
				inset: 0;
				border: 2px solid var(--uui-color-danger);
				border-radius: calc(var(--uui-border-radius) * 2);
				pointer-events: none;
			}
			:host([disallow-drop])::after {
				content: '';
				position: absolute;
				z-index: 1;
				inset: 0;
				border-radius: calc(var(--uui-border-radius) * 2);
				background-color: var(--uui-color-danger);
				opacity: 0.2;
				pointer-events: none;
			}

			> div {
				display: flex;
				flex-direction: column;
				align-items: stretch;
			}

			#createButton {
				grid-template-columns: 1fr auto;
				display: grid;
			}

			/* Only when we are n an area, we like to hide the button on drag */
			:host([area-key]) #createButton {
				--umb-block-grid--create-button--is-dragging--variable: var(--umb-block-grid--is-dragging) none;
				display: var(--umb-block-grid--create-button--is-dragging--variable, grid);
			}

			.umb-block-grid__layout-container[data-area-length='0'] {
				--umb-block-grid--layout-container--is-dragging--variable: var(--umb-block-grid--is-dragging) 1;
				min-height: calc(var(--umb-block-grid--layout-container--is-dragging--variable, 0) * var(--uui-size-11));
			}

			.umb-block-grid__layout-container[data-area-length='0']::after {
				content: '';
				position: absolute;
				inset: 0;
				top: 1px;
				border: calc(var(--umb-block-grid--layout-container--is-dragging--variable, 0) * 1px) dashed
					var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}
		`
];
V([
  C({ type: String, attribute: "area-key", reflect: !0 })
], B.prototype, "areaKey", 1);
V([
  C({ attribute: !1 })
], B.prototype, "layoutColumns", 1);
V([
  c()
], B.prototype, "_areaKey", 2);
V([
  c()
], B.prototype, "_canCreate", 2);
V([
  c()
], B.prototype, "_createLabel", 2);
V([
  c()
], B.prototype, "_configCreateLabel", 2);
V([
  c()
], B.prototype, "_styleElement", 2);
V([
  c()
], B.prototype, "_layoutEntries", 2);
V([
  c()
], B.prototype, "_isReadOnly", 2);
B = V([
  D("umb-block-grid-entries")
], B);
class Vi extends Qt {
  constructor(e) {
    super(e, Ge, rt), this.columnSpan = this._layout.asObservablePart((i) => i ? i.columnSpan ?? null : void 0), this.rowSpan = this._layout.asObservablePart((i) => i ? i.rowSpan ?? null : void 0), this.layoutAreas = this._layout.asObservablePart((i) => i?.areas), this.columnSpanOptions = this._blockType.asObservablePart((i) => i?.columnSpanOptions ?? []), this.areaTypeGridColumns = this._blockType.asObservablePart((i) => i?.areaGridColumns), this.areas = this._blockType.asObservablePart((i) => i?.areas ?? []), this.minMaxRowSpan = this._blockType.asObservablePart(
      (i) => i ? [i.rowMinSpan ?? 1, i.rowMaxSpan ?? 1] : void 0
    ), this.forceHideContentEditorInOverlay = this._blockType.asObservablePart(
      (i) => i ? i.forceHideContentEditorInOverlay ?? !1 : void 0
    ), this.inlineEditingMode = this._blockType.asObservablePart((i) => i?.inlineEditing === !0), this.#o = new De([], (i) => i), this.relevantColumnSpanOptions = this.#o.asObservable(), this.#i = new fe(!1), this.canScale = this.#i.asObservable(), this.#r = new fe(!1), this.isAllowed = this.#r.asObservable(), this.#t = new it(void 0), this.areaGridColumns = this.#t.asObservable(), this.showContentEdit = zt(
      [this._contentStructureHasProperties, this.forceHideContentEditorInOverlay],
      ([i, o]) => i === !0 && o === !1
    ), this.scaleManager = new li(this);
  }
  getMinMaxRowSpan() {
    const e = this._blockType.getValue();
    if (e)
      return [e.rowMinSpan ?? 1, e.rowMaxSpan ?? 1];
  }
  #o;
  getRelevantColumnSpanOptions() {
    return this.#o.getValue();
  }
  #i;
  #r;
  #t;
  layoutsOfArea(e) {
    return this._layout.asObservablePart((i) => i?.areas?.find((o) => o.key === e)?.items);
  }
  areaType(e) {
    return this._blockType.asObservablePart((i) => i?.areas?.find((o) => o.key === e));
  }
  setLayoutsOfArea(e, i) {
    const o = this._layout.value;
    if (!o) return;
    const r = de(
      o?.areas ?? [],
      {
        key: e,
        items: i
      },
      (n) => n.key
    );
    this._layout.update({ areas: r });
  }
  /**
   * Set the column span of this entry.
   * @param columnSpan {number} The new column span.
   */
  setColumnSpan(e) {
    if (!this._entries) return;
    const i = this._entries.getLayoutColumns();
    if (!i || (e = this.#e(e, this.getRelevantColumnSpanOptions(), i), e === this.getColumnSpan())) return;
    const o = this._layout.getValue();
    o && this._layout.setValue({
      ...o,
      columnSpan: e
    });
  }
  /**
   * Get the column span of this entry.
   * @returns {number} The column span.
   */
  getColumnSpan() {
    return this._layout.getValue()?.columnSpan;
  }
  /**
   * Set the row span of this entry.
   * @param rowSpan {number} The new row span.
   */
  setRowSpan(e) {
    const i = this.getMinMaxRowSpan();
    if (!i || (e = Math.max(i[0], Math.min(e, i[1])), e === this.getRowSpan())) return;
    const o = this._layout.getValue();
    o && this._layout.setValue({
      ...o,
      rowSpan: e
    });
  }
  /**
   * Get the row span of this entry.
   * @returns {number} The row span.
   */
  getRowSpan() {
    return this._layout.getValue()?.rowSpan;
  }
  _gotManager() {
    this.#n();
  }
  _gotEntries() {
    this.scaleManager.setEntriesContext(this._entries), this._entries && (this.#n(), this.observe(
      this.contentElementTypeKey,
      (e) => {
        this.observe(
          e ? this._entries?.isBlockTypeAllowed(e) : void 0,
          (i) => {
            i !== void 0 && this.#r.setValue(i);
          },
          "observeIsAllowed"
        );
      },
      "observeContentElementTypeKey"
    ), this.observe(
      N([this.minMaxRowSpan, this.columnSpanOptions, this._entries.layoutColumns]),
      ([e, i, o]) => {
        if (!o || !e) return;
        const r = i ? i.filter((d) => d.columnSpan <= o).map((d) => d.columnSpan).sort((d, _) => d > _ ? 1 : _ > d ? -1 : 0) : [];
        this.#o.setValue(r);
        const n = r.length > 1, s = e[0] !== e[1], u = n || s;
        this.#i.setValue(u);
      },
      "observeScaleOptions"
    ), this.observe(
      N([this.areaTypeGridColumns, this._entries.layoutColumns]),
      ([e, i]) => {
        this.#t.setValue(e ?? i);
      },
      "observeAreaGridColumns"
    ));
  }
  #n() {
    !this._entries || !this._manager || (this.observe(
      N([this.areas, this.layoutAreas]),
      ([e, i]) => {
        if (!e || !i) return;
        if ((e.length === i.length && e.every((r) => i.some((n) => n.key === r.key))) === !1) {
          const r = this._layout.getValue();
          if (!r) return;
          this._layout.setValue({
            ...r,
            areas: i.map((n) => e.find((s) => s.key === n.key) ? n : { key: n.key, items: [] })
          });
        }
      },
      "observeAreaValidation"
    ), this.observe(
      N([this.columnSpan, this.relevantColumnSpanOptions, this._entries.layoutColumns]),
      ([e, i, o]) => {
        if (!o || e === void 0) return;
        const r = this.#e(
          e ?? o,
          i,
          o
        );
        if (r !== e) {
          const n = this._layout.getValue();
          if (!n) return;
          this._layout.setValue({
            ...n,
            columnSpan: r
          });
        }
      },
      "observeColumnSpanValidation"
    ), this.observe(
      N([this.minMaxRowSpan, this.rowSpan]),
      ([e, i]) => {
        if (!e || i === void 0) return;
        const o = Math.max(e[0], Math.min(i ?? 1, e[1]));
        if (o !== i) {
          const r = this._layout.getValue();
          if (!r) return;
          this._layout.setValue({
            ...r,
            rowSpan: o
          });
        }
      },
      "observeRowSpanValidation"
    ));
  }
  _gotContentType() {
  }
  #e(e, i, o) {
    if (i.length > 0) {
      const r = ui(e, i, o) ?? o;
      if (r !== e)
        return r;
    } else
      return o;
    return e;
  }
  async copyToClipboard() {
    if (!this._manager) return;
    const e = await this.getContext(at), i = await this.getContext(ve), o = await this.getContext(Se);
    if (!o)
      throw new Error("No clipboard context found");
    const r = e?.getName(), n = i?.getLabel(), s = this.getName(), u = r ? `${r} - ${n} - ${s}` : `${n} - ${s}`, d = this.getLayout();
    if (!d)
      throw new Error("No layout found");
    const _ = this.getContent(), A = this.getSettings(), $ = this.getExpose(), oe = _ ? [structuredClone(_)] : [], T = A ? [structuredClone(A)] : [], X = $ ? [structuredClone($)] : [];
    Be(d, async (Te) => {
      const Xe = this._manager.getContentOf(Te.contentKey);
      if (!Xe)
        throw new Error("No content found");
      if (oe.push(structuredClone(Xe)), Te.settingsKey) {
        const Ye = this._manager.getSettingsOf(Te.settingsKey);
        Ye && T.push(structuredClone(Ye));
      }
    });
    const Pe = {
      layout: {
        [_e]: d ? [structuredClone(d)] : void 0
      },
      contentData: oe,
      settingsData: T,
      expose: X
    };
    o.write({
      icon: this.getContentElementTypeIcon(),
      name: u,
      propertyValue: Pe,
      propertyEditorUiAlias: re
    });
  }
}
var Ki = Object.defineProperty, Mi = Object.getOwnPropertyDescriptor, Ct = (t) => {
  throw TypeError(t);
}, g = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Mi(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && Ki(e, i, r), r;
}, Fe = (t, e, i) => e.has(t) || Ct("Cannot " + i), a = (t, e, i) => (Fe(t, e, "read from private field"), i ? i.call(t) : e.get(t)), U = (t, e, i) => e.has(t) ? Ct("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Et = (t, e, i, o) => (Fe(t, e, "write to private field"), e.set(t, i), i), f = (t, e, i) => (Fe(t, e, "access private method"), i), h, he, y, x, xt, Pt, ke, Ve, we, Ke, Me, Ue, Tt, Bt, St, At, $t, Ot, Vt, Kt, Mt;
let b = class extends H {
  constructor() {
    super(), U(this, y), U(this, h, new Vi(this)), U(this, he), this._showContentEdit = !1, this._hasSettings = !1, this._label = "", this._blockViewProps = {
      contentKey: void 0,
      config: { showContentEdit: !1, showSettingsEdit: !1 }
    }, this._isReadOnly = !1, U(this, ke, () => {
      a(this, h).expose();
    }), U(this, we, () => {
      const t = this.parentElement;
      if (!t) return;
      const e = t.getBoundingClientRect();
      if (e.width === 0) {
        this._showInlineCreateBefore = !1, this._showInlineCreateAfter = !1, this._inlineCreateAboveWidth = void 0, Et(this, he, setTimeout(a(this, we), 100));
        return;
      }
      const i = this.getBoundingClientRect();
      i.right > e.right - 5 ? this._showInlineCreateAfter = !1 : this._showInlineCreateAfter = !0, i.left > e.left + 5 ? (this._showInlineCreateBefore = !1, this._inlineCreateAboveWidth = void 0) : (this._inlineCreateAboveWidth = getComputedStyle(t).width, this._showInlineCreateBefore = !0);
    }), U(this, Ke, (t) => !(!this._contentTypeAlias || t.forContentTypeAlias && !Qe(t.forContentTypeAlias, this._contentTypeAlias) || t.forBlockEditor && !Qe(t.forBlockEditor, ei))), U(this, Me, (t) => (t.component && (t.component.classList.add("umb-block-grid__block--view"), t.component.setAttribute("part", "component")), this._exposed ? t.component : l`<div>
				${t.component}
				<umb-block-overlay-expose-button
					.contentTypeName=${this._contentTypeName}
					@click=${a(this, ke)}></umb-block-overlay-expose-button>
			</div>`)), U(this, Ue, () => this._unsupported ? f(this, y, Tt).call(this) : this._inlineEditingMode ? this.renderInlineBlock() : f(this, y, Bt).call(this)), f(this, y, xt).call(this);
  }
  get index() {
    return a(this, h).getIndex();
  }
  set index(t) {
    a(this, h).setIndex(t);
  }
  get contentKey() {
    return this._contentKey;
  }
  set contentKey(t) {
    !t || t === this._contentKey || (this._contentKey = t, this._blockViewProps.contentKey = t, this.setAttribute("data-element-key", t), a(this, h).setContentKey(t), new ut(
      this,
      `$.contentData[${ot({ key: t })}]`,
      (e) => {
        this._contentInvalid = e, this._blockViewProps.contentInvalid = e;
      },
      "observeMessagesForContent"
    ));
  }
  connectedCallback() {
    super.connectedCallback(), this.observe(
      a(this, h).columnSpan,
      (t) => {
        this._columnSpan = t, this.setAttribute("data-col-span", t ? t.toString() : ""), this.style.setProperty("--umb-block-grid--item-column-span", t ? t.toString() : "");
      },
      "columnSpan"
    ), this.observe(
      a(this, h).rowSpan,
      (t) => {
        this._rowSpan = t, this.setAttribute("data-row-span", t ? t.toString() : ""), this.style.setProperty("--umb-block-grid--item-row-span", t ? t.toString() : "");
      },
      "rowSpan"
    ), this.observe(
      a(this, h).contentElementTypeKey,
      (t) => {
        t && this.setAttribute("data-content-element-type-key", t);
      },
      "contentElementTypeKey"
    ), this.observe(
      a(this, h).contentElementTypeAlias,
      (t) => {
        t && (this._contentTypeAlias = t, this.setAttribute("data-content-element-type-alias", t));
      },
      "contentElementTypeAlias"
    ), this.observe(
      a(this, h).contentElementTypeName,
      (t) => {
        this._contentTypeName = t;
      },
      "contentElementTypeName"
    ), f(this, y, Ve).call(this);
  }
  updated(t) {
    super.updated(t), (t.has("_blockViewProps") || t.has("_columnSpan")) && f(this, y, Ve).call(this);
  }
  render() {
    return this.contentKey && (this._contentTypeAlias || this._unsupported) ? l`
					${f(this, y, St).call(this)}
					<div class="umb-block-grid__block" part="umb-block-grid__block">
						<umb-extension-slot
							.filter=${a(this, Ke)}
							.renderMethod=${a(this, Me)}
							.fallbackRenderMethod=${a(this, Ue)}
							.props=${this._blockViewProps}
							default-element=${this._inlineEditingMode ? "umb-block-grid-block-inline" : "umb-block-grid-block"}
							type="blockEditorCustomView"
							single></umb-extension-slot>
						${f(this, y, $t).call(this)}
						${!this._showContentEdit && this._contentInvalid ? l`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : k}
						${this._invalidLocation ? l`<uui-tag id="invalidLocation" color="danger"
									><umb-localize key="blockEditor_invalidDropPosition" .args=${[this._label]}></umb-localize
								></uui-tag>` : k}
						${this._canScale ? l` <umb-block-scale-handler
									@mousedown=${(t) => a(this, h).scaleManager.onScaleMouseDown(t)}>
									${this._columnSpan}x${this._rowSpan}
								</umb-block-scale-handler>` : k}
					</div>
					${f(this, y, At).call(this)}
				` : k;
  }
  renderInlineBlock() {
    return l`<umb-block-grid-block-inline
			class="umb-block-grid__block--view"
			.label=${this._label}
			.icon=${this._icon}
			.index=${this._blockViewProps.index}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block-inline>`;
  }
};
h = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
y = /* @__PURE__ */ new WeakSet();
x = function(t) {
  this._blockViewProps = { ...this._blockViewProps, ...t }, this.requestUpdate("_blockViewProps");
};
xt = function() {
  this.observe(
    a(this, h).showContentEdit,
    (t) => {
      this._showContentEdit = t, f(this, y, x).call(this, { config: { ...this._blockViewProps.config, showContentEdit: t } });
    },
    null
  ), this.observe(
    a(this, h).settingsElementTypeKey,
    (t) => {
      this._hasSettings = !!t, f(this, y, x).call(this, { config: { ...this._blockViewProps.config, showSettingsEdit: !!t } });
    },
    null
  ), this.observe(
    a(this, h).canScale,
    (t) => {
      this._canScale = t;
    },
    null
  ), this.observe(
    a(this, h).isAllowed,
    (t) => {
      this._invalidLocation = !t;
    },
    null
  ), this.observe(
    a(this, h).blockType,
    (t) => {
      f(this, y, x).call(this, { blockType: t });
    },
    null
  ), this.observe(a(this, h).index, (t) => f(this, y, x).call(this, { index: t }), null), this.observe(
    a(this, h).label,
    (t) => {
      f(this, y, x).call(this, { label: t }), this._label = t;
    },
    null
  ), this.observe(
    a(this, h).contentElementTypeIcon,
    (t) => {
      f(this, y, x).call(this, { icon: t }), this._icon = t;
    },
    null
  ), this.observe(
    a(this, h).hasExpose,
    (t) => {
      f(this, y, x).call(this, { unpublished: !t }), this._exposed = t;
    },
    null
  ), this.observe(
    a(this, h).unsupported,
    (t) => {
      t !== void 0 && (f(this, y, x).call(this, { unsupported: t }), this._unsupported = t, this.toggleAttribute("unsupported", t));
    },
    null
  ), this.observe(
    a(this, h).actionsVisibility,
    (t) => {
      this._showActions = t;
    },
    null
  ), this.observe(
    a(this, h).inlineEditingMode,
    (t) => {
      this._inlineEditingMode = t;
    },
    null
  ), this.observe(
    a(this, h).layout,
    (t) => {
      f(this, y, x).call(this, { layout: t });
    },
    null
  ), f(this, y, Pt).call(this), this.observe(
    a(this, h).settingsKey,
    (t) => {
      this.removeUmbControllerByAlias("observeMessagesForSettings"), t && new ut(
        this,
        `$.settingsData[${ot({ key: t })}]`,
        (e) => {
          this._settingsInvalid = e, this._blockViewProps.settingsInvalid = e;
        },
        "observeMessagesForSettings"
      );
    },
    null
  ), this.observe(
    a(this, h).createBeforePath,
    (t) => {
      this._createBeforePath = t;
    },
    null
  ), this.observe(
    a(this, h).createAfterPath,
    (t) => {
      this._createAfterPath = t;
    },
    null
  ), this.observe(
    a(this, h).workspaceEditContentPath,
    (t) => {
      this._workspaceEditContentPath = t, f(this, y, x).call(this, { config: { ...this._blockViewProps.config, editContentPath: t } });
    },
    null
  ), this.observe(
    a(this, h).workspaceEditSettingsPath,
    (t) => {
      this._workspaceEditSettingsPath = t, f(this, y, x).call(this, { config: { ...this._blockViewProps.config, editSettingsPath: t } });
    },
    null
  ), this.observe(
    a(this, h).readOnlyGuard.permitted,
    (t) => this._isReadOnly = t,
    "umbReadOnlyObserver"
  );
};
Pt = async function() {
  this.observe(
    await a(this, h).contentValues(),
    (t) => {
      f(this, y, x).call(this, { content: t });
    },
    null
  ), this.observe(
    await a(this, h).settingsValues(),
    (t) => {
      f(this, y, x).call(this, { settings: t });
    },
    null
  );
};
ke = /* @__PURE__ */ new WeakMap();
Ve = function() {
  clearTimeout(a(this, he)), Et(this, he, setTimeout(a(this, we), 100));
};
we = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakMap();
Tt = function() {
  return l`<umb-block-grid-block-unsupported
			class="umb-block-grid__block--view"
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block-unsupported>`;
};
Bt = function() {
  return l`<umb-block-grid-block
			class="umb-block-grid__block--view"
			.label=${this._label}
			.icon=${this._icon}
			.index=${this._blockViewProps.index}
			.unpublished=${!this._exposed}
			.config=${this._blockViewProps.config}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}></umb-block-grid-block>`;
};
St = function() {
  return this._isReadOnly ? k : this._createBeforePath ? this._showInlineCreateBefore ? l`<uui-button-inline-create
			href=${this._createBeforePath}
			label=${this.localize.term("blockEditor_addBlock")}
			style=${this._inlineCreateAboveWidth ? `width: ${this._inlineCreateAboveWidth}` : ""}></uui-button-inline-create>` : k : k;
};
At = function() {
  return this._isReadOnly ? k : this._createAfterPath ? this._showInlineCreateAfter ? l`
			<uui-button-inline-create
				vertical
				label=${this.localize.term("blockEditor_addBlock")}
				href=${this._createAfterPath}></uui-button-inline-create>
		` : k : k;
};
$t = function() {
  return this._showActions ? l`
					<uui-action-bar>
						${f(this, y, Ot).call(this)} ${f(this, y, Vt).call(this)} ${f(this, y, Kt).call(this)}
						${f(this, y, Mt).call(this)}</uui-action-bar
					>
				` : k;
};
Ot = function() {
  return this._showContentEdit && this._workspaceEditContentPath ? l`<uui-button
					label="edit"
					look="secondary"
					color=${this._contentInvalid ? "danger" : ""}
					href=${this._workspaceEditContentPath}>
					<uui-icon name=${this._exposed === !1 ? "icon-add" : "icon-edit"}></uui-icon>
					${this._contentInvalid ? l`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : k}
				</uui-button>` : this._showContentEdit === !1 && this._exposed === !1 ? l`<uui-button
						@click=${a(this, ke)}
						label=${this.localize.term("blockEditor_createThisFor", this._contentTypeName)}
						look="secondary"
						><uui-icon name="icon-add"></uui-icon
					></uui-button>` : k;
};
Vt = function() {
  return l`
			${this._hasSettings && this._workspaceEditSettingsPath ? l`<uui-button
						label="Edit settings"
						look="secondary"
						color=${this._settingsInvalid ? "invalid" : ""}
						href=${this._workspaceEditSettingsPath}>
						<uui-icon name="icon-settings"></uui-icon>
						${this._settingsInvalid ? l`<uui-badge attention color="invalid" label="Invalid settings">!</uui-badge>` : k}
					</uui-button>` : k}
		`;
};
Kt = function() {
  return l`<uui-button label="Copy to clipboard" look="secondary" @click=${() => a(this, h).copyToClipboard()}>
			<uui-icon name="icon-clipboard-copy"></uui-icon>
		</uui-button>`;
};
Mt = function() {
  return this._isReadOnly ? k : l`
			<uui-button label="delete" look="secondary" @click=${() => a(this, h).requestDelete()}>
				<uui-icon name="icon-remove"></uui-icon>
			</uui-button>
		`;
};
b.styles = [
  pi,
  L`
			:host {
				position: relative;
				display: block;
				--umb-block-grid-entry-actions-opacity: 0;
			}

			:host([settings-invalid]),
			:host([content-invalid]),
			:host(:hover),
			:host(:focus-within) {
				--umb-block-grid-entry-actions-opacity: 1;
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

			:host([location-invalid])::after,
			:host([settings-invalid])::after,
			:host([content-invalid])::after {
				border-color: var(--uui-color-invalid);
			}

			umb-extension-slot::part(component) {
				position: relative;
				z-index: 0;
			}

			#invalidLocation {
				position: absolute;
				top: -1em;
				left: var(--uui-size-space-2);
				z-index: 2;
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
				opacity: var(--umb-block-grid-entry-actions-opacity, 0);
				transition: opacity 120ms;
			}
			uui-button-inline-create {
				top: 0px;
				position: absolute;

				--umb-block-grid__block--inline-create-button-display--condition: var(--umb-block-grid--dragging-mode) none;
				display: var(--umb-block-grid__block--inline-create-button-display--condition);
			}
			uui-button-inline-create:not([vertical]) {
				left: 0;
				width: var(--umb-block-grid-editor--inline-create-width, 100%);
			}
			:host(:not([index='0'])) uui-button-inline-create:not([vertical]) {
				top: calc(var(--umb-block-grid--row-gap, 0px) * -0.5);
			}
			uui-button-inline-create[vertical] {
				right: calc(1px - (var(--umb-block-grid--column-gap, 0px) * 0.5));
			}

			.umb-block-grid__block {
				height: 100%;
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
				animation: ${bi};
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
			:host([drag-placeholder]) .umb-block-grid__block {
				transition: opacity 50ms 16ms;
				opacity: 0;
			}

			uui-badge {
				z-index: 2;
			}
		`
];
g([
  C({ type: Number, reflect: !0 })
], b.prototype, "index", 1);
g([
  C({ attribute: !1 })
], b.prototype, "contentKey", 1);
g([
  c()
], b.prototype, "_contentTypeAlias", 2);
g([
  c()
], b.prototype, "_contentTypeName", 2);
g([
  c()
], b.prototype, "_columnSpan", 2);
g([
  c()
], b.prototype, "_rowSpan", 2);
g([
  c()
], b.prototype, "_showContentEdit", 2);
g([
  c()
], b.prototype, "_hasSettings", 2);
g([
  c()
], b.prototype, "_createBeforePath", 2);
g([
  c()
], b.prototype, "_createAfterPath", 2);
g([
  c()
], b.prototype, "_label", 2);
g([
  c()
], b.prototype, "_icon", 2);
g([
  c()
], b.prototype, "_exposed", 2);
g([
  c()
], b.prototype, "_unsupported", 2);
g([
  c()
], b.prototype, "_showActions", 2);
g([
  c()
], b.prototype, "_workspaceEditContentPath", 2);
g([
  c()
], b.prototype, "_workspaceEditSettingsPath", 2);
g([
  c()
], b.prototype, "_inlineEditingMode", 2);
g([
  c()
], b.prototype, "_canScale", 2);
g([
  c()
], b.prototype, "_showInlineCreateBefore", 2);
g([
  c()
], b.prototype, "_showInlineCreateAfter", 2);
g([
  c()
], b.prototype, "_inlineCreateAboveWidth", 2);
g([
  C({ type: Boolean, attribute: "location-invalid", reflect: !0 })
], b.prototype, "_invalidLocation", 2);
g([
  C({ type: Boolean, attribute: "content-invalid", reflect: !0 })
], b.prototype, "_contentInvalid", 2);
g([
  C({ type: Boolean, attribute: "settings-invalid", reflect: !0 })
], b.prototype, "_settingsInvalid", 2);
g([
  c()
], b.prototype, "_blockViewProps", 2);
g([
  c()
], b.prototype, "_isReadOnly", 2);
b = g([
  D("umb-block-grid-entry")
], b);
var Ui = Object.getOwnPropertyDescriptor, Ii = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Ui(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = s(r) || r);
  return r;
};
let Ie = class extends ct {
  render() {
    return l`
			${super.render()}
			<div class="break"></div>
			<slot name="areas"></slot>
		`;
  }
};
Ie.styles = [
  ...ct.styles,
  L`
			:host {
				min-width: 20px; /* Set to something, to overwrite UUI min width. */
				height: 100%; /* Help to fill out the whole layout entry. */
				min-height: var(--uui-size-16);
				flex-flow: row wrap;
				background-color: var(--uui-color-surface);
			}

			.break {
				flex-basis: 100%;
				height: 0;
			}

			#open-part {
				display: flex;
				min-height: var(--uui-size-16);
				padding: calc(var(--uui-size-2) + 1px);
			}

			:host([unpublished]) #open-part {
				opacity: 0.6;
			}
		`
];
Ie = Ii([
  D("umb-ref-grid-block")
], Ie);
var Ri = Object.defineProperty, Li = Object.getOwnPropertyDescriptor, Ut = (t) => {
  throw TypeError(t);
}, xe = (t, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Li(e, i) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (r = (o ? s(e, i, r) : s(r)) || r);
  return o && r && Ri(e, i, r), r;
}, He = (t, e, i) => e.has(t) || Ut("Cannot " + i), m = (t, e, i) => (He(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Q = (t, e, i) => e.has(t) ? Ut("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Re = (t, e, i, o) => (He(t, e, "write to private field"), e.set(t, i), i), Di = (t, e, i) => (He(t, e, "access private method"), i), ae, w, ge, le, ee, Le, It;
let F = class extends lt(H) {
  constructor() {
    super(), Q(this, Le), Q(this, ae, new oi(this)), Q(this, w, new yi(this)), Q(this, ge), Q(this, le, !1), Q(this, ee), this.consumeContext(mi, (t) => {
      t ? this.observe(
        N([
          m(this, w).blockTypes,
          t.structure.variesByCulture,
          t.structure.variesBySegment
        ]),
        async ([e, i, o]) => {
          if (e.length > 0 && (i === !1 || o === !1)) {
            const r = await Promise.all(
              e.map(async (n) => {
                const s = n.contentElementTypeKey;
                await m(this, w).contentTypesLoaded;
                const u = await m(this, w).getStructure(s);
                return i === !1 && u?.getVariesByCulture() === !0 ? !0 : o === !1 && u?.getVariesBySegment() === !0;
              })
            );
            this._notSupportedVariantSetting = r.filter((n) => n === !0).length > 0, this._notSupportedVariantSetting && m(this, ae).messages.addMessage(
              "config",
              "$",
              "#blockEditor_blockVariantConfigurationNotSupported"
            );
          }
        },
        "observeBlockTypes"
      ) : this.removeUmbControllerByAlias("observeBlockTypes");
    }).passContextAliasMatches(), this.consumeContext(ve, (t) => {
      this.observe(
        t?.dataPath,
        (e) => {
          e && (m(this, ae).setDataPath(e), m(this, ae).autoReport());
        },
        "observeDataPath"
      );
    }), this.consumeContext(ve, (t) => {
      this.observe(
        N([
          m(this, w).layouts,
          m(this, w).contents,
          m(this, w).settings,
          m(this, w).exposes
        ]).pipe(ri(20)),
        ([e, i, o, r]) => {
          if (e.length === 0) {
            if (this.value === void 0)
              return;
            super.value = void 0;
          } else {
            const n = {
              ...super.value,
              layout: { [_e]: e },
              contentData: i,
              settingsData: o,
              expose: r
            };
            if (Gt(this.value, n))
              return;
            super.value = n;
          }
          m(this, ge) === void 0 && super.value === void 0 || t?.setValue(super.value);
        },
        "motherObserver"
      ), this.observe(
        t?.alias,
        (e) => {
          m(this, w).setPropertyAlias(e);
        },
        "observePropertyAlias"
      );
    }), this.consumeContext(at, (t) => {
      m(this, w).setVariantId(t?.getVariantId());
    });
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("blocks") ?? [];
    m(this, w).setBlockTypes(e);
    const i = t.getValueByAlias("blockGroups") ?? [];
    m(this, w).setBlockGroups(i);
    const o = t.getValueByAlias("useInlineEditingAsDefault");
    m(this, w).setInlineEditingMode(o), this.style.maxWidth = t.getValueByAlias("maxPropertyWidth") ?? "", m(this, w).setEditorConfiguration(t);
  }
  /**
   * Sets the input to readonly mode, meaning value cannot be changed but still able to read and select its content.
   * @type {boolean}
   * @default
   */
  set readonly(t) {
    Re(this, le, t), m(this, le) ? m(this, w).readOnlyState.fallbackToPermitted() : m(this, w).readOnlyState.fallbackToNotPermitted();
  }
  get readonly() {
    return m(this, le);
  }
  set value(t) {
    if (Re(this, ge, t), !t) {
      super.value = void 0;
      return;
    }
    const e = t ? { ...t } : {};
    e.layout ??= {}, e.contentData ??= [], e.settingsData ??= [], e.expose ??= [], super.value = e, m(this, w).setLayouts(super.value.layout[_e] ?? []), m(this, w).setContents(super.value.contentData), m(this, w).setSettings(super.value.settingsData), m(this, w).setExposes(super.value.expose);
  }
  get value() {
    return super.value;
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.observe(m(this, w).gridColumns, (e) => {
      e && (this._layoutColumns = e, this.style.setProperty("--umb-block-grid--grid-columns", e.toString()));
    });
  }
  render() {
    return this._notSupportedVariantSetting ? k : l` <umb-block-grid-entries
			${ti(Di(this, Le, It))}
			.areaKey=${null}
			.layoutColumns=${this._layoutColumns}></umb-block-grid-entries>`;
  }
};
ae = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
ge = /* @__PURE__ */ new WeakMap();
le = /* @__PURE__ */ new WeakMap();
ee = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakSet();
It = function(t) {
  m(this, ee) !== t && (m(this, ee) && this.removeFormControlElement(m(this, ee)), Re(this, ee, t), t && this.addFormControlElement(t));
};
F.styles = [
  Ce,
  L`
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
xe([
  c()
], F.prototype, "_layoutColumns", 2);
xe([
  C({ attribute: !1 })
], F.prototype, "value", 1);
xe([
  c()
], F.prototype, "_notSupportedVariantSetting", 2);
F = xe([
  D("umb-property-editor-ui-block-grid")
], F);
const uo = F;
export {
  F as UmbPropertyEditorUIBlockGridElement,
  uo as default
};
//# sourceMappingURL=property-editor-ui-block-grid.element-E2GsijpN.js.map

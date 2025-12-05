import { a as F, b as z } from "../index-Z0CAdsE6.js";
import { c as Ct, U as Pt, d as Bt } from "../index-Z0CAdsE6.js";
import { UmbContextToken as w } from "@umbraco-cms/backoffice/context-api";
import { UmbBlockEntryContext as H, UMB_BLOCK_ENTRY_CONTEXT as Y, UmbDataPathBlockElementDataQuery as x, UmbBlockEntriesContext as G, UMB_BLOCK_CATALOGUE_MODAL as X, UmbBlockManagerContext as j } from "@umbraco-cms/backoffice/block";
import { mergeObservables as q, observeMultiple as Q, UmbBooleanState as J } from "@umbraco-cms/backoffice/observable-api";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { css as C, property as m, state as b, customElement as P, html as _, nothing as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as Z } from "@umbraco-cms/backoffice/style";
import { stringOrStringArrayContains as $ } from "@umbraco-cms/backoffice/utils";
import { UmbObserveValidationStateController as R } from "@umbraco-cms/backoffice/validation";
import { UmbModalRouteRegistrationController as S } from "@umbraco-cms/backoffice/router";
const M = new w(
  "UmbBlockManagerContext"
), tt = new w("UmbBlockEntriesContext");
class et extends H {
  constructor(e) {
    super(e, M, tt), this.displayInline = this._layout.asObservablePart((i) => i ? i.displayInline ?? !1 : void 0), this.displayInlineConfig = this._blockType.asObservablePart((i) => i ? i.displayInline ?? !1 : void 0), this.forceHideContentEditorInOverlay = this._blockType.asObservablePart(
      (i) => i ? i.forceHideContentEditorInOverlay ?? !1 : void 0
    ), this.showContentEdit = q(
      [this._contentStructureHasProperties, this.forceHideContentEditorInOverlay],
      ([i, o]) => i === !0 && o === !1
    );
  }
  _gotManager() {
  }
  _gotEntries() {
    this.observe(
      Q([this.displayInline, this.displayInlineConfig]),
      ([e, i]) => {
        if (i !== void 0 && e !== void 0 && i !== e) {
          const o = this._layout.getValue();
          if (!o) return;
          this._layout.setValue({
            ...o,
            displayInline: i
          });
        }
      },
      "displayInlineCorrection"
    );
  }
  _gotContentType() {
  }
}
var it = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, v = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? ot(e, i) : e, u = t.length - 1, d; u >= 0; u--)
    (d = t[u]) && (s = (o ? d(e, i, s) : d(s)) || s);
  return o && s && it(e, i, s), s;
};
let y = class extends A {
  constructor() {
    super(), this.consumeContext(Y, (t) => {
      this.observe(
        t?.workspaceEditContentPath,
        (e) => {
          this._workspaceEditPath = e;
        },
        "observeWorkspaceEditPath"
      );
    });
  }
  render() {
    const t = { ...this.content, $settings: this.settings, $index: this.index };
    return _`
			<uui-ref-node standalone href=${(this.config?.showContentEdit ? this._workspaceEditPath : void 0) ?? ""}>
				<div class="selection-background" aria-hidden="true">&emsp;</div>
				<umb-icon slot="icon" .name=${this.icon}></umb-icon>
				<umb-ufm-render slot="name" inline .markdown=${this.label} .value=${t}></umb-ufm-render>
			</uui-ref-node>
		`;
  }
};
y.styles = [
  C`
			:host {
				display: block;
			}

			uui-ref-node {
				min-height: var(--uui-size-16);
			}

			:host([unpublished]) umb-icon,
			:host([unpublished]) umb-ufm-render {
				opacity: 0.6;
			}

			/* HACK: Stretches a space character (&emsp;) to be full-width to make the RTE block appear text-selectable. [LK,NL] */
			.selection-background {
				position: absolute;
				pointer-events: none;
				font-size: 100vw;
				inset: 0;
				overflow: hidden;
				z-index: 0;
			}

			umb-icon,
			umb-ufm-render {
				z-index: 1;
			}
		`
];
v([
  m({ type: String })
], y.prototype, "label", 2);
v([
  m({ type: String })
], y.prototype, "icon", 2);
v([
  m({ type: Number, attribute: !1 })
], y.prototype, "index", 2);
v([
  m({ type: Boolean, reflect: !0 })
], y.prototype, "unpublished", 2);
v([
  m({ attribute: !1 })
], y.prototype, "content", 2);
v([
  m({ attribute: !1 })
], y.prototype, "settings", 2);
v([
  b()
], y.prototype, "_workspaceEditPath", 2);
v([
  m({ attribute: !1 })
], y.prototype, "config", 2);
y = v([
  P("umb-ref-rte-block")
], y);
var st = Object.defineProperty, nt = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, h = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? nt(e, i) : e, u = t.length - 1, d; u >= 0; u--)
    (d = t[u]) && (s = (o ? d(e, i, s) : d(s)) || s);
  return o && s && st(e, i, s), s;
}, V = (t, e, i) => e.has(t) || U("Cannot " + i), n = (t, e, i) => (V(t, e, "read from private field"), i ? i.call(t) : e.get(t)), g = (t, e, i) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), c = (t, e, i) => (V(t, e, "access private method"), i), r, a, p, I, B, k, T, L, K, O, D, N, W;
let l = class extends A {
  constructor() {
    super(), g(this, a), g(this, r, new et(this)), this._showContentEdit = !1, this._hasSettings = !1, this._label = "", this._blockViewProps = {
      contentKey: void 0,
      config: { showContentEdit: !1, showSettingsEdit: !1 }
    }, g(this, B, (t) => {
      const e = this._contentTypeAlias ?? "", i = !t.forBlockEditor || $(t.forBlockEditor, F), o = !t.forContentTypeAlias || $(t.forContentTypeAlias, e);
      return i && o;
    }), g(this, k, () => {
      n(this, r).expose();
    }), g(this, T, (t) => (t.component?.setAttribute("part", "component"), this._exposed ? t.component : _`<div>
				${t.component}
				<umb-block-overlay-expose-button
					.contentTypeName=${this._contentTypeName}
					@click=${n(this, k)}></umb-block-overlay-expose-button>
			</div>`)), g(this, O, () => c(this, a, D).call(this)), n(this, r).setIndex(0), this.observe(
      n(this, r).showContentEdit,
      (t) => {
        this._showContentEdit = t, c(this, a, p).call(this, { config: { ...this._blockViewProps.config, showContentEdit: t } });
      },
      null
    ), this.observe(
      n(this, r).settingsElementTypeKey,
      (t) => {
        this._hasSettings = !!t, c(this, a, p).call(this, { config: { ...this._blockViewProps.config, showSettingsEdit: !!t } });
      },
      null
    ), this.observe(
      n(this, r).contentElementTypeAlias,
      (t) => {
        this._contentTypeAlias = t;
      },
      null
    ), this.observe(
      n(this, r).contentElementTypeName,
      (t) => {
        this._contentTypeName = t;
      },
      null
    ), this.observe(
      n(this, r).blockType,
      (t) => {
        c(this, a, p).call(this, { blockType: t });
      },
      null
    ), this.observe(n(this, r).index, (t) => c(this, a, p).call(this, { index: t }), null), this.observe(
      n(this, r).label,
      (t) => {
        c(this, a, p).call(this, { label: t }), this._label = t;
      },
      null
    ), this.observe(
      n(this, r).contentElementTypeIcon,
      (t) => {
        c(this, a, p).call(this, { icon: t }), this._icon = t;
      },
      null
    ), this.observe(
      n(this, r).hasExpose,
      (t) => {
        c(this, a, p).call(this, { unpublished: !t }), this._exposed = t;
      },
      null
    ), this.observe(
      n(this, r).actionsVisibility,
      (t) => {
        this._showActions = t;
      },
      null
    ), this.observe(
      n(this, r).layout,
      (t) => {
        c(this, a, p).call(this, { layout: t });
      },
      null
    ), c(this, a, I).call(this), this.observe(
      n(this, r).settingsKey,
      (t) => {
        this.removeUmbControllerByAlias("observeMessagesForSettings"), t && new R(
          this,
          `$.settingsData[${x({ key: t })}]`,
          (e) => {
            this._settingsInvalid = e, this._blockViewProps.settingsInvalid = e;
          },
          "observeMessagesForSettings"
        );
      },
      null
    ), this.observe(
      n(this, r).workspaceEditContentPath,
      (t) => {
        this._workspaceEditContentPath = t, c(this, a, p).call(this, { config: { ...this._blockViewProps.config, editContentPath: t } });
      },
      null
    ), this.observe(
      n(this, r).workspaceEditSettingsPath,
      (t) => {
        this._workspaceEditSettingsPath = t, c(this, a, p).call(this, { config: { ...this._blockViewProps.config, editSettingsPath: t } });
      },
      null
    );
  }
  set contentKey(t) {
    t && (this._contentKey = t, n(this, r).setContentKey(t), new R(
      this,
      `$.contentData[${x({ key: t })}]`,
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
    super.connectedCallback(), this.setAttribute("contenteditable", "false");
  }
  render() {
    return c(this, a, L).call(this);
  }
};
r = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
p = function(t) {
  this._blockViewProps = { ...this._blockViewProps, ...t }, this.requestUpdate("_blockViewProps");
};
I = async function() {
  this.observe(
    await n(this, r).contentValues(),
    (t) => {
      c(this, a, p).call(this, { content: t });
    },
    null
  ), this.observe(
    await n(this, r).settingsValues(),
    (t) => {
      c(this, a, p).call(this, { settings: t });
    },
    null
  );
};
B = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
L = function() {
  return this.contentKey && this._contentTypeAlias ? _`
					<div class="uui-text uui-font">
						<umb-extension-slot
							type="blockEditorCustomView"
							default-element="umb-ref-rte-block"
							.renderMethod=${n(this, T)}
							.fallbackRenderMethod=${n(this, O)}
							.props=${this._blockViewProps}
							.filter=${n(this, B)}
							single></umb-extension-slot>
						${c(this, a, K).call(this)}
						${!this._showContentEdit && this._contentInvalid ? _`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : f}
					</div>
				` : f;
};
K = function() {
  return this._showActions ? _`<uui-action-bar>${c(this, a, N).call(this)}${c(this, a, W).call(this)}</uui-action-bar>` : f;
};
O = /* @__PURE__ */ new WeakMap();
D = function() {
  return _`<umb-ref-rte-block
			.label=${this._label}
			.icon=${this._icon}
			.index=${this._blockViewProps.index}
			.unpublished=${!this._exposed}
			.content=${this._blockViewProps.content}
			.settings=${this._blockViewProps.settings}
			.config=${this._blockViewProps.config}></umb-ref-rte-block>`;
};
N = function() {
  return this._showContentEdit && this._workspaceEditContentPath ? _`<uui-button
					label="edit"
					look="secondary"
					color=${this._contentInvalid ? "invalid" : ""}
					href=${this._workspaceEditContentPath}>
					<uui-icon name=${this._exposed === !1 ? "icon-add" : "icon-edit"}></uui-icon>
					${this._contentInvalid ? _`<uui-badge attention color="invalid" label="Invalid content">!</uui-badge>` : f}
				</uui-button>` : this._showContentEdit === !1 && this._exposed === !1 ? _`<uui-button
						@click=${n(this, k)}
						label=${this.localize.term("blockEditor_createThisFor", this._contentTypeName)}
						look="secondary">
						<uui-icon name="icon-add"></uui-icon>
					</uui-button>` : f;
};
W = function() {
  return _`
			${this._hasSettings && this._workspaceEditSettingsPath ? _`<uui-button
						label="Edit settings"
						look="secondary"
						color=${this._settingsInvalid ? "invalid" : ""}
						href=${this._workspaceEditSettingsPath}>
						<uui-icon name="icon-settings"></uui-icon>
						${this._settingsInvalid ? _`<uui-badge attention color="invalid" label="Invalid settings">!</uui-badge>` : f}
					</uui-button>` : f}
		`;
};
l.styles = [
  Z,
  C`
			:host {
				position: relative;
				display: block;
				user-select: all;
				user-drag: auto;
				white-space: nowrap;
			}

			:host(.ProseMirror-selectednode) {
				umb-ref-rte-block {
					--uui-color-default-contrast: initial;
					outline: 3px solid var(--uui-color-focus);
				}
			}

			umb-extension-slot::part(component) {
				position: relative;
				z-index: 0;
			}

			uui-action-bar {
				position: absolute;
				top: var(--uui-size-2);
				right: var(--uui-size-2);
			}

			:host([drag-placeholder]) {
				opacity: 0.2;
			}
		`
];
h([
  m({ type: String, attribute: "data-content-key", reflect: !0 })
], l.prototype, "contentKey", 1);
h([
  b()
], l.prototype, "_showContentEdit", 2);
h([
  b()
], l.prototype, "_hasSettings", 2);
h([
  b()
], l.prototype, "_label", 2);
h([
  b()
], l.prototype, "_icon", 2);
h([
  b()
], l.prototype, "_exposed", 2);
h([
  b()
], l.prototype, "_showActions", 2);
h([
  b()
], l.prototype, "_workspaceEditContentPath", 2);
h([
  b()
], l.prototype, "_workspaceEditSettingsPath", 2);
h([
  b()
], l.prototype, "_contentTypeAlias", 2);
h([
  b()
], l.prototype, "_contentTypeName", 2);
h([
  b()
], l.prototype, "_blockViewProps", 2);
h([
  m({ type: Boolean, attribute: "content-invalid", reflect: !0 })
], l.prototype, "_contentInvalid", 2);
h([
  m({ type: Boolean, attribute: "settings-invalid", reflect: !0 })
], l.prototype, "_settingsInvalid", 2);
l = h([
  P("umb-rte-block")
], l);
var rt = Object.getOwnPropertyDescriptor, at = (t, e, i, o) => {
  for (var s = o > 1 ? void 0 : o ? rt(e, i) : e, u = t.length - 1, d; u >= 0; u--)
    (d = t[u]) && (s = d(s) || s);
  return s;
};
let E = class extends l {
};
E.styles = [
  ...l.styles,
  C`
			:host {
				display: inline-block;
			}
		`
];
E = at([
  P("umb-rte-block-inline")
], E);
const lt = "Umbraco.RichText";
class ft extends G {
  constructor(e) {
    super(e, M), this.canCreate = new J(!0).asObservable(), new S(this, X).addAdditionalPath("_catalogue/:view").onSetup((i) => ({
      data: {
        blocks: this._manager?.getBlockTypes() ?? [],
        blockGroups: [],
        openClipboard: i.view === "clipboard",
        originData: {},
        createBlockInWorkspace: !0
      }
    })).onSubmit(async (i, o) => {
      if (i?.create && o) {
        const s = await this.create(
          i.create.contentElementTypeKey,
          // We can parse an empty object, cause the rest will be filled in by others.
          {}
        );
        if (s)
          this.insert(
            s.layout,
            s.content,
            s.settings,
            o.originData
          );
        else
          throw new Error("Failed to create block");
      }
    }).observeRouteBuilder((i) => {
      this._catalogueRouteBuilderState.setValue(i);
    }), new S(this, z).addAdditionalPath("block").onSetup(() => ({ data: { entityType: "block", preset: {}, baseDataPath: this._dataPath }, modal: { size: "medium" } })).observeRouteBuilder((i) => {
      const o = i({});
      this._workspacePath.setValue(o);
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
  getPathForCreateBlock() {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "create" });
  }
  getPathForClipboard() {
    return this._catalogueRouteBuilderState.getValue()?.({ view: "clipboard" });
  }
  async setLayouts(e) {
    await this._retrieveManager, this._manager?.setLayouts(e);
  }
  async create(e, i, o) {
    return await this._retrieveManager, await this._manager?.createWithPresets(e, i, o);
  }
  // insert Block?
  async insert(e, i, o, s) {
    return await this._retrieveManager, this._manager?.insert(e, i, o, s) ?? !1;
  }
  // create Block?
  async delete(e) {
    await super.delete(e), this._manager?.deleteLayoutElement(e);
  }
  async _insertFromPropertyValue(e, i) {
    const o = e.layout[lt];
    if (!o)
      throw new Error("No layout entries found");
    return await Promise.all(
      o.map(async (s) => {
        this._insertBlockFromPropertyValue(s, e, i);
      })
    ), i;
  }
}
const gt = new w("UmbBlockEntryContext");
class kt extends j {
  removeOneLayout(e) {
    this._layouts.removeOne(e);
  }
  removeManyLayouts(e) {
    this._layouts.remove(e);
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
    const s = await super._createBlockData(e, i), u = this.getBlockTypes().find((d) => d.contentElementTypeKey === e);
    if (!u)
      throw new Error(`Cannot create block, missing block type for ${e}`);
    return u.displayInline && (s.layout.displayInline = !0), s;
  }
  insert(e, i, o, s) {
    return this._layouts.appendOne(e), this.insertBlockData(e, i, o, s), !0;
  }
  /**
   * @param contentKey
   * @internal
   */
  deleteLayoutElement(e) {
    this.removeBlockKey(e);
  }
}
export {
  F as UMB_BLOCK_RTE,
  tt as UMB_BLOCK_RTE_ENTRIES_CONTEXT,
  gt as UMB_BLOCK_RTE_ENTRY_CONTEXT,
  M as UMB_BLOCK_RTE_MANAGER_CONTEXT,
  Ct as UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS,
  Pt as UMB_BLOCK_RTE_TYPE,
  Bt as UMB_BLOCK_RTE_TYPE_WORKSPACE_ALIAS,
  z as UMB_BLOCK_RTE_WORKSPACE_MODAL,
  ft as UmbBlockRteEntriesContext,
  l as UmbBlockRteEntryElement,
  E as UmbBlockRteEntryInlineElement,
  kt as UmbBlockRteManagerContext
};
//# sourceMappingURL=index.js.map

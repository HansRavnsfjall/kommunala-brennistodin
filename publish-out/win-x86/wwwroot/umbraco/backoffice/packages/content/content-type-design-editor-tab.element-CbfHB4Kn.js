import { b as A, U as ht, a as Mt } from "./content-type-move-root-containers-into-first-tab-helper.class-CkGOWf1Z.js";
import { UmbContextBase as qt } from "@umbraco-cms/backoffice/class-api";
import { UmbStringState as ut } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/id";
import { generateAlias as zt } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/external/rxjs";
import "@umbraco-cms/backoffice/resources";
import { UmbModalRouteRegistrationController as X } from "@umbraco-cms/backoffice/router";
import { css as L, property as p, state as d, customElement as G, nothing as g, html as n, repeat as rt, when as B, ifDefined as At } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as F, umbFocus as Bt } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as lt } from "@umbraco-cms/backoffice/sorter";
import { UMB_WORKSPACE_MODAL as Wt } from "@umbraco-cms/backoffice/workspace";
import { U as Ht, a as Dt } from "./content-type-property-structure-helper.class-jQi1Hj18.js";
import { UmbTextStyles as it } from "@umbraco-cms/backoffice/style";
import { UMB_EDIT_PROPERTY_TYPE_WORKSPACE_PATH_PATTERN as Rt, UMB_PROPERTY_TYPE_WORKSPACE_MODAL as pt, UMB_CREATE_PROPERTY_TYPE_WORKSPACE_PATH_PATTERN as Vt } from "@umbraco-cms/backoffice/property-type";
import { umbConfirmModal as ct } from "@umbraco-cms/backoffice/modal";
import { UmbDataTypeDetailRepository as Nt } from "@umbraco-cms/backoffice/data-type";
import { UUIBlinkKeyframes as Lt, UUIBlinkAnimationValue as Gt } from "@umbraco-cms/backoffice/external/uui";
class Ft extends qt {
  constructor(e) {
    super(e, Ht), this.#t = new ut(void 0), this.alias = this.#t.asObservable(), this.#e = new ut(void 0), this.label = this.#e.asObservable();
  }
  #t;
  #e;
  setAlias(e) {
    this.#t.setValue(e);
  }
  getAlias() {
    return this.#t.getValue();
  }
  setLabel(e) {
    this.#e.setValue(e);
  }
  getLabel() {
    return this.#e.getValue();
  }
  destroy() {
    super.destroy(), this.#t.destroy(), this.#e.destroy();
  }
}
var Yt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, yt = (t) => {
  throw TypeError(t);
}, m = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? Kt(e, r) : e, s = t.length - 1, u; s >= 0; s--)
    (u = t[s]) && (o = (i ? u(e, r, o) : u(o)) || o);
  return i && o && Yt(e, r, o), o;
}, ot = (t, e, r) => e.has(t) || yt("Cannot " + r), S = (t, e, r) => (ot(t, e, "read from private field"), r ? r.call(t) : e.get(t)), O = (t, e, r) => e.has(t) ? yt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), M = (t, e, r, i) => (ot(t, e, "write to private field"), e.set(t, r), r), y = (t, e, r) => (ot(t, e, "access private method"), r), W, nt, H, N, q, h, _t, J, gt, D, mt, vt, ft, bt, wt, Q, Ct;
let l = class extends F {
  constructor() {
    super(...arguments), O(this, h), O(this, W, new Ft(this)), O(this, nt, new Nt(this)), O(this, H), O(this, N), this.sortModeActive = !1, this._aliasLocked = !0, O(this, q, !0), O(this, Q, (t) => y(this, h, gt).call(this, { sortOrder: parseInt(t.target.value) ?? 0 }));
  }
  set propertyStructureHelper(t) {
    t !== this._propertyStructureHelper && (this._propertyStructureHelper = t, y(this, h, J).call(this));
  }
  get propertyStructureHelper() {
    return this._propertyStructureHelper;
  }
  get property() {
    return this._property;
  }
  set property(t) {
    const e = this._property;
    t !== e && (this._property = t, S(this, W).setAlias(t?.alias), S(this, W).setLabel(t?.name), y(this, h, _t).call(this, this._property?.unique), y(this, h, J).call(this), y(this, h, vt).call(this, this._property?.dataType?.unique), this.requestUpdate("property", e));
  }
  render() {
    return this._inherited ? this.renderInheritedProperty() : this.renderEditableProperty();
  }
  renderInheritedProperty() {
    if (this.property)
      return this.sortModeActive ? this.renderSortableProperty() : n`
				<div id="header">
					<p><b>${this.property.name}</b></p>
					<p><i>${this.property.alias}</i></p>
					<p>${this.property.description}</p>
				</div>
				<div id="editor">
					${this.renderPropertyTags()}
					${this._inherited ? n`<uui-tag look="default" class="inherited">
								<uui-icon name="icon-merge"></uui-icon>
								<span
									>${this.localize.term("contentTypeEditor_inheritedFrom")}
									<a href=${this.editContentTypePath + "edit/" + this._inheritedContentTypeId}>
										${this._inheritedContentTypeName ?? "??"}
									</a>
								</span>
							</uui-tag>` : g}
				</div>
			`;
  }
  renderEditableProperty() {
    if (!(!this.property || !this.editPropertyTypePath))
      return this.sortModeActive ? this.renderSortableProperty() : n`
				<div id="header">
					<uui-input
						name="label"
						id="label-input"
						placeholder=${this.localize.term("placeholders_label")}
						label="label"
						.value=${this.property.name}
						@input=${y(this, h, wt)}></uui-input>
					${this.renderPropertyAlias()}
					<slot name="action-menu"></slot>
					<p>
						<uui-textarea
							label="description"
							name="description"
							id="description-input"
							placeholder=${this.localize.term("placeholders_enterDescription")}
							.value=${this.property.description}
							@input=${(t) => {
        t.target && y(this, h, D).call(this, "description", t.target.value);
      }}
							auto-height></uui-textarea>
					</p>
				</div>
				<uui-button
					id="editor"
					look="outline"
					label=${this.localize.term("contentTypeEditor_editorSettings")}
					href=${this.editPropertyTypePath + Rt.generateLocal({ unique: this.property.unique })}>
					${this.renderPropertyTags()}
					<uui-action-bar>
						<uui-button label="${this.localize.term("actions_delete")}" @click="${y(this, h, ft)}">
							<uui-icon name="delete"></uui-icon>
						</uui-button>
					</uui-action-bar>
				</uui-button>
			`;
  }
  renderSortableProperty() {
    if (this.property)
      return n`
			<div class="sortable">
				<uui-icon name="icon-grip"></uui-icon>
				<span>${this.property.name}</span>
				<span style="color: var(--uui-color-disabled-contrast)">(${this.property.alias})</span>
			</div>
			<uui-input
				type="number"
				?disabled=${this._inherited}
				label="sort order"
				@change=${S(this, Q)}
				.value=${(this.property.sortOrder ?? 0).toString()}></uui-input>
		`;
  }
  renderPropertyAlias() {
    if (this.property)
      return n`
			<uui-input-lock
				name="alias"
				id="alias-input"
				label=${this.localize.term("placeholders_enterAlias")}
				placeholder=${this.localize.term("placeholders_enterAlias")}
				.value=${this.property.alias}
				?locked=${this._aliasLocked}
				@input=${y(this, h, bt)}
				@lock-change=${y(this, h, mt)}>
			</uui-input-lock>
		`;
  }
  renderPropertyTags() {
    return this.property ? n`<div class="types">
					${this.property.dataType?.unique ? n`<uui-tag look="default">${this._dataTypeName}</uui-tag>` : g}
					${y(this, h, Ct).call(this)}
					${this.property.appearance?.labelOnTop == !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-stretch-horizontal"></uui-icon>
								<span>${this.localize.term("contentTypeEditor_displaySettingsLabelOnTop")}</span>
							</uui-tag>` : g}
					${this.property.validation.mandatory === !0 ? n`<uui-tag look="default">
								<span>* ${this.localize.term("general_mandatory")}</span>
							</uui-tag>` : g}
					${this.property.visibility?.memberCanView === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-eye"></uui-icon> ${this.localize.term("contentTypeEditor_showOnMemberProfile")}
							</uui-tag>` : g}
					${this.property.visibility?.memberCanEdit === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-edit"></uui-icon> ${this.localize.term("contentTypeEditor_memberCanEdit")}
							</uui-tag>` : g}
					${this.property.isSensitive === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-lock"></uui-icon> ${this.localize.term("contentTypeEditor_isSensitiveData")}
							</uui-tag>` : g}
				</div>` : g;
  }
};
W = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
_t = function(t) {
  t !== S(this, N) && (M(this, N, t), S(this, W).getAlias() && M(this, q, !1));
};
J = async function() {
  this._propertyStructureHelper && this._property && this.observe(
    await this._propertyStructureHelper.contentTypeOfProperty(this._property.unique),
    (t) => {
      this._inherited = this._propertyStructureHelper?.getStructureManager()?.getOwnerContentTypeUnique() !== t?.unique, this._inheritedContentTypeId = t?.unique, this._inheritedContentTypeName = t?.name;
    },
    "observeIsOwnerProperty"
  );
};
gt = function(t) {
  !this._property || !this._propertyStructureHelper || this._propertyStructureHelper.partialUpdateProperty(this._property.unique, t);
};
D = function(t, e) {
  if (!this._property || !this._propertyStructureHelper) return;
  const r = {};
  r[t] = e === null ? void 0 : e, this._propertyStructureHelper.partialUpdateProperty(this._property.unique, r);
};
mt = function(t) {
  !this.property?.alias && t.target.locked ? M(this, q, !0) : M(this, q, !1), this._aliasLocked = !this._aliasLocked, this._aliasLocked || t.target?.focus();
};
vt = async function(t) {
  if (!t) {
    this._dataTypeName = void 0, M(this, H, void 0);
    return;
  }
  t !== S(this, H) && (M(this, H, t), S(this, nt).requestByUnique(t).then((e) => this._dataTypeName = e?.data?.name));
};
ft = async function(t) {
  if (t.preventDefault(), t.stopImmediatePropagation(), !this._property || !this._property.unique) return;
  const e = this._property.unique;
  await ct(this, {
    headline: `${this.localize.term("actions_delete")} property`,
    content: n`<umb-localize key="contentTypeEditor_confirmDeletePropertyMessage" .args=${[this._property.name ?? e]}>Are you sure you want to delete the property <strong>${this._property.name ?? e}</strong></umb-localize></div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  }), this._propertyStructureHelper?.removeProperty(e);
};
bt = function(t) {
  y(this, h, D).call(this, "alias", t.target.value.toString());
};
wt = function(t) {
  const e = t.target.value.toString();
  S(this, q) && y(this, h, D).call(this, "alias", zt(e ?? "")), y(this, h, D).call(this, "name", e);
};
Q = /* @__PURE__ */ new WeakMap();
Ct = function() {
  return this.property ? this.ownerVariesByCulture && this.ownerVariesBySegment && !this.property.variesByCulture && !this.property.variesBySegment ? n`
				<uui-tag look="default">
					<uui-icon name="icon-trending-up-down"></uui-icon> ${this.localize.term(
    "contentTypeEditor_cultureAndVariantInvariantLabel"
  )}
				</uui-tag>
			` : this.ownerVariesByCulture && !this.property.variesByCulture ? n`<uui-tag look="default">
				<uui-icon name="icon-trending-up-down"></uui-icon> ${this.localize.term(
    "contentTypeEditor_cultureInvariantLabel"
  )}
			</uui-tag>` : this.ownerVariesBySegment && !this.property.variesBySegment ? n`<uui-tag look="default">
				<uui-icon name="icon-trending-up-down"></uui-icon> ${this.localize.term(
    "contentTypeEditor_segmentInvariantLabel"
  )}
			</uui-tag>` : g : g;
};
l.styles = [
  it,
  L`
			:host(:not([sort-mode-active])) {
				display: grid;
				grid-template-columns: 200px auto;
				column-gap: var(--uui-size-layout-2);
				border-bottom: 1px solid var(--uui-color-divider);
				padding: var(--uui-size-layout-1) 0;
				container-type: inline-size;
			}

			:host > div {
				grid-column: span 2;
			}

			@container (width > 600px) {
				:host(:not([orientation='vertical'])) > div {
					grid-column: span 1;
				}
			}

			:host(:first-of-type) {
				padding-top: 0;
			}
			:host(:last-of-type) {
				border-bottom: none;
			}

			:host([sort-mode-active]) {
				position: relative;
				display: flex;
				padding: 0;
				margin-bottom: var(--uui-size-3);
			}

			:host([sort-mode-active]:last-of-type) {
				margin-bottom: 0;
			}

			:host([sort-mode-active]:not([_inherited])) {
				cursor: grab;
			}

			:host([sort-mode-active]) .sortable {
				flex: 1;
				display: flex;
				align-items: center;
				padding: 0 var(--uui-size-3);
				gap: var(--uui-size-3);
			}
			:host([sort-mode-active][_inherited]) .sortable {
				color: var(--uui-color-disabled-contrast);
			}
			:host([sort-mode-active]:not([_inherited])) .sortable {
				background-color: var(--uui-color-divider);
			}

			:host([sort-mode-active]) uui-input {
				max-width: 75px;
			}

			/* Placeholder style, used when property is being dragged.*/
			:host(.--umb-sorter-placeholder) > * {
				visibility: hidden;
			}

			:host(.--umb-sorter-placeholder)::after {
				content: '';
				inset: 0;
				position: absolute;
				border: 1px dashed var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
			}

			:host([_inherited]) {
				#header {
					padding: 0 var(--uui-size-3, 9px);
				}
			}

			p {
				margin-bottom: 0;
			}

			#header {
				position: sticky;
				top: var(--uui-size-space-4);
				height: min-content;
			}

			#header i {
				opacity: 0.55;
			}

			#editor {
				position: relative;
				--uui-button-background-color: var(--uui-color-background);
				--uui-button-background-color-hover: var(--uui-color-background);
			}
			#editor:not(uui-button) {
				background-color: var(--uui-color-background);
				border-radius: var(--uui-button-border-radius, var(--uui-border-radius, 3px));
				min-height: 143px;
			}
			#editor uui-action-bar {
				--uui-button-background-color: var(--uui-color-surface);
				--uui-button-background-color-hover: var(--uui-color-surface);
			}
			#alias-input,
			#label-input,
			#description-input {
				width: 100%;
			}

			#alias-input {
				border-color: transparent;
				background: var(--uui-color-surface);
			}

			#label-input {
				font-weight: bold; /* TODO: UUI Input does not support bold text yet */
				--uui-input-border-color: transparent;
			}
			#label-input input {
				font-weight: bold;
				--uui-input-border-color: transparent;
			}

			#description-input {
				--uui-textarea-border-color: transparent;
				font-weight: 0.5rem; /* TODO: Cant change font size of UUI textarea yet */
			}

			.types > div uui-icon,
			.inherited uui-icon {
				vertical-align: sub;
				margin-right: var(--uui-size-space-1);
			}

			.inherited {
				position: absolute;
				top: var(--uui-size-space-2);
				right: var(--uui-size-space-2);
			}

			.types {
				position: absolute;
				top: var(--uui-size-space-2);
				left: var(--uui-size-space-2);
				display: flex;
				flex-flow: wrap;
				gap: var(--uui-size-space-2);
			}

			#editor uui-action-bar {
				position: absolute;
				top: var(--uui-size-space-2);
				right: var(--uui-size-space-2);
				opacity: 0;
			}

			#editor:hover uui-action-bar,
			#editor:focus uui-action-bar,
			#editor:focus-within uui-action-bar {
				opacity: 1;
			}

			a {
				color: inherit;
			}

			:host([drag-placeholder]) {
				opacity: 0.5;
			}
			:host([drag-placeholder]) uui-input {
				visibility: hidden;
			}
		`
];
m([
  p({ attribute: !1 })
], l.prototype, "propertyStructureHelper", 1);
m([
  p({ type: Object })
], l.prototype, "property", 1);
m([
  p({ type: Boolean, reflect: !0, attribute: "sort-mode-active" })
], l.prototype, "sortModeActive", 2);
m([
  p({ attribute: !1 })
], l.prototype, "editContentTypePath", 2);
m([
  p({ attribute: !1 })
], l.prototype, "ownerVariesByCulture", 2);
m([
  p({ attribute: !1 })
], l.prototype, "ownerVariesBySegment", 2);
m([
  p({ type: Boolean, reflect: !0, attribute: "_inherited" })
], l.prototype, "_inherited", 2);
m([
  d()
], l.prototype, "_inheritedContentTypeId", 2);
m([
  d()
], l.prototype, "_inheritedContentTypeName", 2);
m([
  p({ type: String, reflect: !1 })
], l.prototype, "editPropertyTypePath", 2);
m([
  d()
], l.prototype, "_dataTypeName", 2);
m([
  d()
], l.prototype, "_aliasLocked", 2);
l = m([
  G("umb-content-type-design-editor-property")
], l);
var Xt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, $t = (t) => {
  throw TypeError(t);
}, C = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? Jt(e, r) : e, s = t.length - 1, u; s >= 0; s--)
    (u = t[s]) && (o = (i ? u(e, r, o) : u(o)) || o);
  return i && o && Xt(e, r, o), o;
}, Tt = (t, e, r) => e.has(t) || $t("Cannot " + r), c = (t, e, r) => (Tt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), R = (t, e, r) => e.has(t) ? $t("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), dt = (t, e, r, i) => (Tt(t, e, "write to private field"), e.set(t, r), r), Z, x, U, $;
const Qt = {
  getUniqueOfElement: (t) => t.getAttribute("data-umb-property-id"),
  getUniqueOfModel: (t) => t.unique,
  identifier: "content-type-property-sorter",
  itemSelector: "umb-content-type-design-editor-property",
  disabledItemSelector: "[_inherited]",
  //TODO: Set the property list (sorter wrapper) to inherited, if its inherited
  // This is because we don't want to move local properties into an inherited group container.
  // Or maybe we do, but we still need to check if the group exists locally, if not, then it needs to be created before we move a property into it.
  // TODO: Fix bug where a local property turn into an inherited when moved to a new group container.
  containerSelector: "#property-list"
};
let v = class extends F {
  constructor() {
    super(), R(this, Z, new lt(this, {
      ...Qt,
      onChange: ({ model: t }) => {
        this._properties = t;
      },
      onContainerChange: ({ item: t }) => {
        if (this._containerId === void 0)
          throw new Error("ContainerId is not set");
        c(this, $).partialUpdateProperty(t.unique, {
          container: this._containerId ? { id: this._containerId } : null
        });
      },
      onEnd: ({ item: t }) => {
        if (this._containerId === void 0)
          throw new Error("ContainerId is not set.");
        const e = this._properties, r = e.findIndex((u) => u.unique === t.unique);
        if (r === -1) return;
        let i = -1;
        r > 0 && e.length > 0 && (i = e[r - 1].sortOrder), c(this, $).partialUpdateProperty(t.unique, {
          sortOrder: ++i
        });
        let o = r + 1, s;
        for (; (s = e[o]) !== void 0 && s.sortOrder <= i; )
          c(this, $).partialUpdateProperty(s.unique, {
            sortOrder: ++i
          }), o++;
      },
      onRequestDrop: async ({ unique: t }) => {
        const e = await this.getContext(A);
        if (!e)
          throw new Error("Could not get Workspace Context");
        return e.structure.getOwnerPropertyById(t);
      },
      requestExternalRemove: async ({ item: t }) => {
        const e = await this.getContext(A);
        if (!e)
          throw new Error("Could not get Workspace Context");
        return await e.structure.removeProperty(null, t.unique).then(
          () => !0,
          () => !1
        );
      },
      requestExternalInsert: async ({ item: t }) => {
        const e = await this.getContext(A);
        if (!e)
          throw new Error("Could not get Workspace Context");
        const r = this._containerId ? { id: this._containerId } : null, i = { ...t, parent: r };
        return await e.structure.insertProperty(null, i).then(
          () => !0,
          () => !1
        );
      }
    })), R(this, x), R(this, U), R(this, $, new Dt(this)), this._properties = [], this.consumeContext(ht, (t) => {
      this.observe(
        t?.isSorting,
        (e) => {
          this._sortModeActive = e;
        },
        "_observeIsSorting"
      );
    }), this.consumeContext(A, async (t) => {
      t && c(this, $).setStructureManager(t.structure), this._ownerContentTypeUnique = t?.structure.getOwnerContentTypeUnique(), this.createPropertyTypeWorkspaceRoutes(), this.observe(
        t?.variesByCulture,
        (e) => {
          this._ownerContentTypeVariesByCulture = e;
        },
        "observeOwnerVariesByCulture"
      ), this.observe(
        t?.variesBySegment,
        (e) => {
          this._ownerContentTypeVariesBySegment = e;
        },
        "observeOwnerVariesBySegment"
      );
    }), this.observe(c(this, $).propertyStructure, (t) => {
      this._properties = t, c(this, Z).setModel(this._properties);
    });
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(t) {
    t !== this._containerId && (this._containerId = t, this.createPropertyTypeWorkspaceRoutes(), c(this, $).setContainerId(t), c(this, x)?.setUniquePathValue("container-id", t === null ? "root" : t), c(this, U)?.setUniquePathValue("container-id", t === null ? "root" : t));
  }
  createPropertyTypeWorkspaceRoutes() {
    !this._ownerContentTypeUnique || this._containerId === void 0 || (c(this, x)?.destroy(), dt(this, x, new X(
      this,
      pt,
      "addPropertyModal"
    ).addUniquePaths(["container-id"]).addAdditionalPath("add-property/:sortOrder").onSetup(async (t) => {
      if (!this._ownerContentTypeUnique || this._containerId === void 0) return !1;
      const e = {};
      if (t.sortOrder !== void 0) {
        let r = parseInt(t.sortOrder);
        r === -1 && (r = Math.max(...this._properties.map((i) => i.sortOrder), -1) + 1), e.sortOrder = r;
      }
      return { data: { contentTypeUnique: this._ownerContentTypeUnique, preset: e } };
    }).observeRouteBuilder((t) => {
      this._newPropertyPath = t({ sortOrder: "-1" }) + Vt.generateLocal({
        containerUnique: this._containerId
      });
    })), this._containerId !== void 0 && c(this, x)?.setUniquePathValue(
      "container-id",
      this._containerId === null ? "root" : this._containerId
    ), c(this, U)?.destroy(), dt(this, U, new X(
      this,
      pt,
      "editPropertyModal"
    ).addUniquePaths(["container-id"]).addAdditionalPath("edit-property").onSetup(async () => !this._ownerContentTypeUnique || this._containerId === void 0 ? !1 : { data: { contentTypeUnique: this._ownerContentTypeUnique, preset: void 0 } }).observeRouteBuilder((t) => {
      this._editPropertyTypePath = t(null);
    })), this._containerId !== void 0 && c(this, U)?.setUniquePathValue(
      "container-id",
      this._containerId === null ? "root" : this._containerId
    ));
  }
  render() {
    return this._ownerContentTypeUnique ? n`
					<div id="property-list" ?sort-mode-active=${this._sortModeActive}>
						${rt(
      this._properties,
      (t) => t.unique,
      (t) => n`
									<umb-content-type-design-editor-property
										data-umb-property-id=${t.unique}
										data-mark="property-type:${t.name}"
										.editContentTypePath=${this.editContentTypePath}
										.editPropertyTypePath=${this._editPropertyTypePath}
										?sort-mode-active=${this._sortModeActive}
										.propertyStructureHelper=${c(this, $)}
										.property=${t}
										.ownerVariesByCulture=${this._ownerContentTypeVariesByCulture}
										.ownerVariesBySegment=${this._ownerContentTypeVariesBySegment}>
									</umb-content-type-design-editor-property>
								`
    )}
					</div>

					${B(
      !this._sortModeActive,
      () => n`
							<uui-button
								id="btn-add"
								href=${At(this._newPropertyPath)}
								label=${this.localize.term("contentTypeEditor_addProperty")}
								look="placeholder"></uui-button>
						`
    )}
				` : "";
  }
};
Z = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
v.styles = [
  it,
  L`
			:host {
				display: block;
			}

			#property-list {
				/* enables dropping things into this despite it begin empty. */
				margin-top: -20px;
				padding-top: 20px;
			}

			#btn-add {
				width: 100%;
				--uui-button-height: var(--uui-size-14);
			}

			#property-list[sort-mode-active]:not(:has(umb-content-type-design-editor-property)) {
				/* Some height so that the sorter can target the area if the group is empty*/
				min-height: var(--uui-size-layout-1);
			}
		`
];
C([
  p({ type: String, attribute: "container-id", reflect: !1 })
], v.prototype, "containerId", 1);
C([
  p({ attribute: !1 })
], v.prototype, "editContentTypePath", 2);
C([
  d()
], v.prototype, "_properties", 2);
C([
  d()
], v.prototype, "_ownerContentTypeUnique", 2);
C([
  d()
], v.prototype, "_ownerContentTypeVariesByCulture", 2);
C([
  d()
], v.prototype, "_ownerContentTypeVariesBySegment", 2);
C([
  d()
], v.prototype, "_newPropertyPath", 2);
C([
  d()
], v.prototype, "_editPropertyTypePath", 2);
C([
  d()
], v.prototype, "_sortModeActive", 2);
v = C([
  G("umb-content-type-design-editor-properties")
], v);
var Zt = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, Pt = (t) => {
  throw TypeError(t);
}, I = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? jt(e, r) : e, s = t.length - 1, u; s >= 0; s--)
    (u = t[s]) && (o = (i ? u(e, r, o) : u(o)) || o);
  return i && o && Zt(e, r, o), o;
}, te = (t, e, r) => e.has(t) || Pt("Cannot " + r), ee = (t, e, r) => e.has(t) ? Pt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), T = (t, e, r) => (te(t, e, "access private method"), r), b, j, Y, It, St, Ot, Et;
let w = class extends F {
  constructor() {
    super(...arguments), ee(this, b), this.sortModeActive = !1;
  }
  set group(t) {
    t !== this._group && (this._group = t, this._groupId = t?.ownerId ?? t?.ids[0], T(this, b, j).call(this));
  }
  get group() {
    return this._group;
  }
  set groupStructureHelper(t) {
    t !== this._groupStructureHelper && (this._groupStructureHelper = t, T(this, b, j).call(this));
  }
  get groupStructureHelper() {
    return this._groupStructureHelper;
  }
  render() {
    return this._inherited === void 0 || !this._groupId ? g : n`
			<uui-box>
				${T(this, b, Et).call(this)}
				<umb-content-type-design-editor-properties
					.editContentTypePath=${this.editContentTypePath}
					.containerId=${this._groupId}></umb-content-type-design-editor-properties>
			</uui-box>
		`;
  }
};
b = /* @__PURE__ */ new WeakSet();
j = function() {
  if (this.groupStructureHelper && this.group) {
    this.group.ownerId && (this._hasOwnerContainer = !0);
    const t = this.group.ids.filter((e) => e !== this.group.ownerId);
    t.length > 0 ? (this._inheritedFrom = t.map((e) => this.groupStructureHelper.getContentTypeOfContainer(e)).filter((e) => e !== void 0), this._inherited = !0) : (this._inheritedFrom = void 0, this._inherited = !1);
  }
};
Y = function(t, e) {
  if (!this._groupStructureHelper || !this._group) return;
  const r = this._group.ownerId;
  if (!r) return;
  const i = {};
  i[t] = e, this._groupStructureHelper.partialUpdateContainer(r, i);
};
It = function(t) {
  if (!this.groupStructureHelper || !this._group) return;
  const e = this._group.ownerId;
  if (!e) return;
  let r = t.target.value;
  const i = this.groupStructureHelper.getStructureManager().makeContainerNameUniqueForOwnerContentType(e, r);
  i && (r = i), T(this, b, Y).call(this, "name", r), t.target.value = r;
};
St = function(t) {
  if (!this.groupStructureHelper || !this._group) return;
  const e = this._group.ownerId;
  if (!e) return;
  if (t.target.value === "") {
    const i = this.groupStructureHelper.getStructureManager().makeEmptyContainerName(e);
    T(this, b, Y).call(this, "name", i), t.target.value = i;
  }
};
Ot = async function(t) {
  t.preventDefault(), t.stopImmediatePropagation(), !(!this.groupStructureHelper || !this._group) && this._group.ownerId !== void 0 && (await ct(this, {
    headline: `${this.localize.term("actions_delete")} group`,
    content: n`<umb-localize key="contentTypeEditor_confirmDeleteGroupMessage" .args=${[
      this._group.name ?? this._group.ownerId
    ]}>
					Are you sure you want to delete the group <strong>${this._group.name ?? this._group.ownerId}</strong>
				</umb-localize>
				</div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  }), this.groupStructureHelper.removeContainer(this._group.ownerId));
};
Et = function() {
  return n`
			<div slot="header" class="drag-handle">
				<div>
					${B(this.sortModeActive && this._hasOwnerContainer, () => n`<uui-icon name="icon-grip"></uui-icon>`)}
					<uui-input
						id="group-name"
						label=${this.localize.term("contentTypeEditor_group")}
						placeholder=${this.localize.term("placeholders_entername")}
						.value=${this._group.name}
						?disabled=${!this._hasOwnerContainer}
						@blur=${T(this, b, St)}
						@change=${T(this, b, It)}
						${this._group.name === "" ? Bt() : g}
						auto-width></uui-input>
				</div>
			</div>
			<div slot="header-actions">
				${B(
    this._hasOwnerContainer === !1 && this._inheritedFrom && this._inheritedFrom.length > 0,
    () => n`
						<uui-tag look="default" class="inherited">
							<uui-icon name="icon-merge"></uui-icon>
							<span
								>${this.localize.term("contentTypeEditor_inheritedFrom")}
								${rt(
      this._inheritedFrom,
      (t) => t.unique,
      (t) => n`
										<a href=${this.editContentTypePath + "edit/" + t.unique}>${t.name}</a>
									`
    )}
							</span>
						</uui-tag>
					`
  )}
				${B(
    !this._inherited && !this.sortModeActive,
    () => n`
						<uui-button compact label=${this.localize.term("actions_delete")} @click=${T(this, b, Ot)}>
							<uui-icon name="delete"></uui-icon>
						</uui-button>
					`
  )}
				${B(
    this.sortModeActive,
    () => n`
						<uui-input
							type="number"
							label=${this.localize.term("sort_sortOrder")}
							.value=${this.group.sortOrder.toString()}
							?disabled=${!this._hasOwnerContainer}
							@change=${(t) => T(this, b, Y).call(this, "sortOrder", parseInt(t.target.value) ?? 0)}></uui-input>
					`
  )}
			</div>
		`;
};
w.styles = [
  it,
  Lt,
  L`
			:host {
				position: relative;
			}

			:host([drag-placeholder]) {
				opacity: 0.5;
			}

			:host::before,
			:host::after {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: var(--uui-border-radius);
				opacity: 0;
				transition:
					opacity 60ms linear 1ms,
					border-color,
					10ms;
			}

			:host::after {
				display: block;
				z-index: 1;
				border: 2px solid transparent;
			}

			:host([drag-placeholder])::after {
				opacity: 1;
				border-color: var(--uui-color-interactive-emphasis);
				animation: ${Gt};
			}
			:host([drag-placeholder])::before {
				background-color: var(--uui-color-interactive-emphasis);
				opacity: 0.12;
			}

			:host([drag-placeholder]) uui-box {
				--uui-box-default-padding: 0;
			}
			:host([drag-placeholder]) div[slot='header'],
			:host([drag-placeholder]) div[slot='header-actions'] {
				transition: opacity 60ms linear 1ms;
				opacity: 0;
			}
			:host([drag-placeholder]) umb-content-type-design-editor-properties {
				visibility: hidden;
				display: none;
			}

			uui-box {
				--uui-box-header-padding: 0;
			}

			div[slot='header'] {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
			}

			:host([has-owner-container]) div[slot='header'] {
				cursor: grab;
			}

			div[slot='header'] > div {
				display: flex;
				align-items: center;
				gap: var(--uui-size-3);
				width: 100%;
			}

			#group-name {
				--uui-input-border-color: transparent;
				min-width: 200px;
			}

			uui-input[type='number'] {
				max-width: 75px;
			}

			.inherited uui-icon {
				vertical-align: sub;
			}

			div[slot='header-actions'] {
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
			}
		`
];
I([
  p({ attribute: !1 })
], w.prototype, "group", 1);
I([
  p({ attribute: !1 })
], w.prototype, "groupStructureHelper", 1);
I([
  p({ type: Boolean, attribute: "sort-mode-active", reflect: !0 })
], w.prototype, "sortModeActive", 2);
I([
  p({ attribute: !1 })
], w.prototype, "editContentTypePath", 2);
I([
  d()
], w.prototype, "_groupId", 2);
I([
  p({ type: Boolean, reflect: !0, attribute: "has-owner-container" })
], w.prototype, "_hasOwnerContainer", 2);
I([
  p({ type: Boolean, reflect: !0, attribute: "inherited" })
], w.prototype, "_inherited", 2);
I([
  d()
], w.prototype, "_inheritedFrom", 2);
w = I([
  G("umb-content-type-design-editor-group")
], w);
var re = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, xt = (t) => {
  throw TypeError(t);
}, z = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? ie(e, r) : e, s = t.length - 1, u; s >= 0; s--)
    (u = t[s]) && (o = (i ? u(e, r, o) : u(o)) || o);
  return i && o && re(e, r, o), o;
}, at = (t, e, r) => e.has(t) || xt("Cannot " + r), a = (t, e, r) => (at(t, e, "read from private field"), r ? r.call(t) : e.get(t)), E = (t, e, r) => e.has(t) ? xt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), K = (t, e, r, i) => (at(t, e, "write to private field"), e.set(t, r), r), oe = (t, e, r) => (at(t, e, "access private method"), r), tt, V, _, f, k, st, et, Ut;
const ne = {
  getUniqueOfElement: (t) => t.group?.ownerId ?? t.group?.ids[0],
  getUniqueOfModel: (t) => t.ownerId ?? t.ids[0],
  // TODO: Make specific to the current owner document. [NL]
  identifier: "content-type-container-sorter",
  itemSelector: "umb-content-type-design-editor-group",
  handleSelector: ".drag-handle",
  disabledItemSelector: ":not([has-owner-container])",
  // Inherited attribute is set by the umb-content-type-design-editor-group.
  containerSelector: ".container-list"
};
let P = class extends F {
  constructor() {
    super(), E(this, et), E(this, tt, new lt(
      this,
      {
        ...ne,
        onChange: ({ model: t }) => {
          this._groups = t;
        },
        onContainerChange: ({ item: t }) => {
          if (a(this, _) === void 0)
            throw new Error("ContainerId is not set");
          if (t.ownerId === void 0)
            throw new Error(
              "OwnerId is not set for the given container, we cannot move containers that are not owned by the current Document."
            );
          a(this, f).partialUpdateContainer(t.ownerId, {
            parent: a(this, _) ? { id: a(this, _) } : null
          });
        },
        onEnd: ({ item: t }) => {
          if (t.ownerId === void 0)
            throw new Error(
              "OwnerId is not set for the given container, we cannot move containers that are not owned by the current Document."
            );
          const e = this._groups, r = e.findIndex((kt) => kt.ownerId === t.ownerId);
          if (r === -1) return;
          let i = -1;
          r > 0 && e.length > 0 && (i = e[r - 1].sortOrder);
          const o = t.ownerId;
          if (o === void 0)
            throw new Error(
              "OwnerId is not set for the given container, we cannot move containers that are not owned by the current Document."
            );
          a(this, f).partialUpdateContainer(o, {
            sortOrder: ++i
          });
          let s = r + 1, u;
          for (; (u = e[s]) !== void 0 && u.sortOrder <= i; )
            u.ownerId && a(this, f).partialUpdateContainer(u.ownerId, {
              sortOrder: ++i
            }), s++;
        },
        onRequestDrop: async ({ unique: t }) => {
          const e = a(this, k);
          if (!e)
            throw new Error("Could not get Workspace Context");
          return e.structure.getMergedContainerById(t);
        },
        requestExternalRemove: async ({ item: t }) => {
          const e = a(this, k);
          if (!e)
            throw new Error("Could not get Workspace Context");
          return await e.structure.removeContainer(null, t.ownerId, { preventRemovingProperties: !0 }).then(
            () => !0,
            () => !1
          );
        },
        requestExternalInsert: async ({ item: t }) => {
          const e = a(this, k);
          if (!e)
            throw new Error("Could not get Workspace Context");
          if (t.ownerId === void 0)
            throw new Error("OwnerId is not set, we cannot move containers that are not owned by the current Document.");
          const r = a(this, _) ? { id: a(this, _) } : null, i = {
            id: t.ownerId,
            name: t.name,
            sortOrder: t.sortOrder,
            type: t.type,
            parent: r
          };
          return await e.structure.insertContainer(null, i).then(
            () => !0,
            () => !1
          );
        }
      }
    )), E(this, V), E(this, _), this._groups = [], this._hasProperties = !1, E(this, f, new Mt(this)), E(this, k), E(this, st, () => {
      const t = this._groups.length, e = t === 0 ? 0 : this._groups[t - 1].sortOrder + 1;
      a(this, f).addContainer(a(this, _), e);
    }), this.consumeContext(A, (t) => {
      K(this, k, t), a(this, f).setStructureManager(t?.structure);
      const e = t?.getEntityType();
      a(this, V)?.destroy(), K(this, V, new X(this, Wt).addAdditionalPath(e ?? "unknown").onSetup(async () => ({ data: { entityType: e, preset: {} } })).observeRouteBuilder((r) => {
        this._editContentTypePath = r({});
      }));
    }), this.consumeContext(ht, (t) => {
      this.observe(
        t?.isSorting,
        (e) => {
          this._sortModeActive = e;
        },
        "_observeIsSorting"
      );
    }), this.observe(
      a(this, f).childContainers,
      (t) => {
        this._groups = t, a(this, tt).setModel(this._groups);
      },
      null
    ), this.observe(
      a(this, f).hasProperties,
      (t) => {
        this._hasProperties = t, this.requestUpdate("_hasProperties");
      },
      null
    );
  }
  get containerId() {
    return a(this, _);
  }
  set containerId(t) {
    const e = a(this, _);
    t !== a(this, _) && (K(this, _, t), a(this, f).setContainerId(t), this.requestUpdate("containerId", e));
  }
  render() {
    return n`
			${a(this, _) ? n`
							<uui-box class="${this._hasProperties ? "" : "opaque"}">
								<umb-content-type-design-editor-properties
									.containerId=${this.containerId}
									.editContentTypePath=${this._editContentTypePath}></umb-content-type-design-editor-properties>
							</uui-box>
						` : g}

				<div class="container-list" ?sort-mode-active=${this._sortModeActive}>
					${rt(
      this._groups,
      (t) => t.ids[0],
      (t) => n`
							<umb-content-type-design-editor-group
								?sort-mode-active=${this._sortModeActive}
								.editContentTypePath=${this._editContentTypePath}
								.group=${t}
								.groupStructureHelper=${a(this, f)}
								data-umb-group-id=${t.ownerId ?? t.ids[0]}
								data-mark="group:${t.name}">
							</umb-content-type-design-editor-group>
						`
    )}
				</div>
				${oe(this, et, Ut).call(this)}
			</div>
		`;
  }
};
tt = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
et = /* @__PURE__ */ new WeakSet();
Ut = function() {
  if (!this._sortModeActive)
    return n`
			<uui-button
				id="btn-add"
				label=${this.localize.term("contentTypeEditor_addGroup")}
				look="placeholder"
				@click=${a(this, st)}></uui-button>
		`;
};
P.styles = [
  L`
			#btn-add {
				width: 100%;
				--uui-button-height: var(--uui-size-24);
			}

			uui-box,
			umb-content-type-design-editor-group {
				margin-bottom: var(--uui-size-layout-1);
			}
			uui-box.opaque {
				background-color: transparent;
				border-color: transparent;
			}

			.container-list {
				display: grid;
				gap: 10px;
				align-content: start;
			}

			/* Ensure the container-list has some height when its empty so groups can be dropped into it.*/
			.container-list {
				margin-top: calc(var(--uui-size-layout-1) * -1);
				padding-top: var(--uui-size-layout-1);
			}

			.container-list #convert-to-tab {
				margin-bottom: var(--uui-size-layout-1);
				display: flex;
			}

			.container-list[sort-mode-active] {
				min-height: 100px;
			}
		`
];
z([
  p({ type: String })
], P.prototype, "containerId", 1);
z([
  d()
], P.prototype, "_groups", 2);
z([
  d()
], P.prototype, "_hasProperties", 2);
z([
  d()
], P.prototype, "_sortModeActive", 2);
z([
  d()
], P.prototype, "_editContentTypePath", 2);
P = z([
  G("umb-content-type-design-editor-tab")
], P);
const Se = P;
export {
  P as UmbContentTypeDesignEditorTabElement,
  Se as default
};
//# sourceMappingURL=content-type-design-editor-tab.element-CbfHB4Kn.js.map

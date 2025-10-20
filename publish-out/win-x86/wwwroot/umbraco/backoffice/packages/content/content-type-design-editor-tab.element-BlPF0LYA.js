import { b as P, U as pt, a as Ut } from "./content-type-move-root-containers-into-first-tab-helper.class-BMcf-7X5.js";
import { UmbContextBase as xt } from "@umbraco-cms/backoffice/class-api";
import { UmbStringState as nt } from "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/id";
import { generateAlias as kt } from "@umbraco-cms/backoffice/utils";
import "@umbraco-cms/backoffice/extension-api";
import "@umbraco-cms/backoffice/extension-registry";
import "@umbraco-cms/backoffice/external/rxjs";
import { css as G, property as h, state as p, customElement as L, nothing as _, html as n, repeat as j, when as z, ifDefined as Mt } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as F, umbFocus as At } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as Y } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as dt } from "@umbraco-cms/backoffice/sorter";
import { UMB_WORKSPACE_MODAL as qt } from "@umbraco-cms/backoffice/workspace";
import { U as zt, a as Bt } from "./content-type-property-structure-helper.class-DttfFuly.js";
import { UmbTextStyles as tt } from "@umbraco-cms/backoffice/style";
import { UMB_EDIT_PROPERTY_TYPE_WORKSPACE_PATH_PATTERN as Ht, UMB_PROPERTY_TYPE_WORKSPACE_MODAL as at, UMB_CREATE_PROPERTY_TYPE_WORKSPACE_PATH_PATTERN as Rt } from "@umbraco-cms/backoffice/property-type";
import { umbConfirmModal as lt } from "@umbraco-cms/backoffice/modal";
import { UmbDataTypeDetailRepository as Wt } from "@umbraco-cms/backoffice/data-type";
import { UUIBlinkKeyframes as Vt, UUIBlinkAnimationValue as Dt } from "@umbraco-cms/backoffice/external/uui";
class Nt extends xt {
  constructor(e) {
    super(e, zt), this.#t = new nt(void 0), this.alias = this.#t.asObservable(), this.#e = new nt(void 0), this.label = this.#e.asObservable();
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
var Gt = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, ht = (t) => {
  throw TypeError(t);
}, g = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Lt(e, r) : e, a = t.length - 1, u; a >= 0; a--)
    (u = t[a]) && (i = (o ? u(e, r, i) : u(i)) || i);
  return o && i && Gt(e, r, i), i;
}, et = (t, e, r) => e.has(t) || ht("Cannot " + r), O = (t, e, r) => (et(t, e, "read from private field"), r ? r.call(t) : e.get(t)), E = (t, e, r) => e.has(t) ? ht("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), M = (t, e, r, o) => (et(t, e, "write to private field"), e.set(t, r), r), y = (t, e, r) => (et(t, e, "access private method"), r), H, rt, R, N, A, d, ct, K, yt, W, _t, gt, mt, vt, ft, X, bt;
let l = class extends F {
  constructor() {
    super(...arguments), E(this, d), E(this, H, new Nt(this)), E(this, rt, new Wt(this)), E(this, R), E(this, N), this.sortModeActive = !1, this._aliasLocked = !0, E(this, A, !0), E(this, X, (t) => y(this, d, yt).call(this, { sortOrder: parseInt(t.target.value) ?? 0 }));
  }
  set propertyStructureHelper(t) {
    t !== this._propertyStructureHelper && (this._propertyStructureHelper = t, y(this, d, K).call(this));
  }
  get propertyStructureHelper() {
    return this._propertyStructureHelper;
  }
  get property() {
    return this._property;
  }
  set property(t) {
    const e = this._property;
    t !== e && (this._property = t, O(this, H).setAlias(t?.alias), O(this, H).setLabel(t?.name), y(this, d, ct).call(this, this._property?.unique), y(this, d, K).call(this), y(this, d, gt).call(this, this._property?.dataType?.unique), this.requestUpdate("property", e));
  }
  render() {
    return this._inherited ? this.renderInheritedProperty() : this.renderEditableProperty();
  }
  renderInheritedProperty() {
    if (this.property)
      return this.sortModeActive ? this.renderSortableProperty() : n`
				<div id="header">
					<b>${this.property.name}</b>
					<i>${this.property.alias}</i>
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
							</uui-tag>` : _}
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
						@input=${y(this, d, ft)}></uui-input>
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
        t.target && y(this, d, W).call(this, "description", t.target.value);
      }}
							auto-height></uui-textarea>
					</p>
				</div>
				<uui-button
					id="editor"
					look="outline"
					label=${this.localize.term("contentTypeEditor_editorSettings")}
					href=${this.editPropertyTypePath + Ht.generateLocal({ unique: this.property.unique })}>
					${this.renderPropertyTags()}
					<uui-action-bar>
						<uui-button label="${this.localize.term("actions_delete")}" @click="${y(this, d, mt)}">
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
				@change=${O(this, X)}
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
				@input=${y(this, d, vt)}
				@lock-change=${y(this, d, _t)}>
			</uui-input-lock>
		`;
  }
  renderPropertyTags() {
    return this.property ? n`<div class="types">
					${this.property.dataType?.unique ? n`<uui-tag look="default">${this._dataTypeName}</uui-tag>` : _}
					${y(this, d, bt).call(this)}
					${this.property.appearance?.labelOnTop == !0 ? n`<uui-tag look="default">
								<span>${this.localize.term("contentTypeEditor_displaySettingsLabelOnTop")}</span>
							</uui-tag>` : _}
					${this.property.validation.mandatory === !0 ? n`<uui-tag look="default">
								<span>* ${this.localize.term("general_mandatory")}</span>
							</uui-tag>` : _}
					${this.property.visibility?.memberCanView === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-eye"></uui-icon> ${this.localize.term("contentTypeEditor_showOnMemberProfile")}
							</uui-tag>` : _}
					${this.property.visibility?.memberCanEdit === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-edit"></uui-icon> ${this.localize.term("contentTypeEditor_memberCanEdit")}
							</uui-tag>` : _}
					${this.property.isSensitive === !0 ? n`<uui-tag look="default">
								<uui-icon name="icon-lock"></uui-icon> ${this.localize.term("contentTypeEditor_isSensitiveData")}
							</uui-tag>` : _}
				</div>` : _;
  }
};
H = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
ct = function(t) {
  t !== O(this, N) && (M(this, N, t), O(this, H).getAlias() && M(this, A, !1));
};
K = async function() {
  this._propertyStructureHelper && this._property && this.observe(
    await this._propertyStructureHelper.contentTypeOfProperty(this._property.unique),
    (t) => {
      this._inherited = this._propertyStructureHelper?.getStructureManager()?.getOwnerContentTypeUnique() !== t?.unique, this._inheritedContentTypeId = t?.unique, this._inheritedContentTypeName = t?.name;
    },
    "observeIsOwnerProperty"
  );
};
yt = function(t) {
  !this._property || !this._propertyStructureHelper || this._propertyStructureHelper.partialUpdateProperty(this._property.unique, t);
};
W = function(t, e) {
  if (!this._property || !this._propertyStructureHelper) return;
  const r = {};
  r[t] = e === null ? void 0 : e, this._propertyStructureHelper.partialUpdateProperty(this._property.unique, r);
};
_t = function(t) {
  !this.property?.alias && t.target.locked ? M(this, A, !0) : M(this, A, !1), this._aliasLocked = !this._aliasLocked, this._aliasLocked || t.target?.focus();
};
gt = async function(t) {
  if (!t) {
    this._dataTypeName = void 0, M(this, R, void 0);
    return;
  }
  t !== O(this, R) && (M(this, R, t), O(this, rt).requestByUnique(t).then((e) => this._dataTypeName = e?.data?.name));
};
mt = async function(t) {
  if (t.preventDefault(), t.stopImmediatePropagation(), !this._property || !this._property.unique) return;
  const e = this._property.unique;
  await lt(this, {
    headline: `${this.localize.term("actions_delete")} property`,
    content: n`<umb-localize key="contentTypeEditor_confirmDeletePropertyMessage" .args=${[this._property.name ?? e]}>Are you sure you want to delete the property <strong>${this._property.name ?? e}</strong></umb-localize></div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  }), this._propertyStructureHelper?.removeProperty(e);
};
vt = function(t) {
  y(this, d, W).call(this, "alias", t.target.value.toString());
};
ft = function(t) {
  const e = t.target.value.toString();
  O(this, A) && y(this, d, W).call(this, "alias", kt(e ?? "")), y(this, d, W).call(this, "name", e);
};
X = /* @__PURE__ */ new WeakMap();
bt = function() {
  return this.property ? this.ownerVariesByCulture && this.ownerVariesBySegment && !this.property.variesByCulture && !this.property.variesBySegment ? n`
				<uui-tag look="default">
					<uui-icon name="icon-shared-value"></uui-icon> ${this.localize.term(
    "contentTypeEditor_cultureAndVariantInvariantLabel"
  )}
				</uui-tag>
			` : this.ownerVariesByCulture && !this.property.variesByCulture ? n`<uui-tag look="default">
				<uui-icon name="icon-shuffle"></uui-icon> ${this.localize.term("contentTypeEditor_cultureInvariantLabel")}
			</uui-tag>` : this.ownerVariesBySegment && !this.property.variesBySegment ? n`<uui-tag look="default">
				<uui-icon name="icon-shuffle"></uui-icon> ${this.localize.term("contentTypeEditor_segmentInvariantLabel")}
			</uui-tag>` : _ : _;
};
l.styles = [
  tt,
  G`
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

			p {
				margin-bottom: 0;
			}

			#header {
				position: sticky;
				top: var(--uui-size-space-4);
				height: min-content;
			}

			#editor {
				position: relative;
				--uui-button-background-color: var(--uui-color-background);
				--uui-button-background-color-hover: var(--uui-color-background);
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
g([
  h({ attribute: !1 })
], l.prototype, "propertyStructureHelper", 1);
g([
  h({ type: Object })
], l.prototype, "property", 1);
g([
  h({ type: Boolean, reflect: !0, attribute: "sort-mode-active" })
], l.prototype, "sortModeActive", 2);
g([
  h({ attribute: !1 })
], l.prototype, "editContentTypePath", 2);
g([
  h({ attribute: !1 })
], l.prototype, "ownerVariesByCulture", 2);
g([
  h({ attribute: !1 })
], l.prototype, "ownerVariesBySegment", 2);
g([
  h({ type: Boolean, reflect: !0, attribute: "_inherited" })
], l.prototype, "_inherited", 2);
g([
  p()
], l.prototype, "_inheritedContentTypeId", 2);
g([
  p()
], l.prototype, "_inheritedContentTypeName", 2);
g([
  h({ type: String, reflect: !1 })
], l.prototype, "editPropertyTypePath", 2);
g([
  p()
], l.prototype, "_dataTypeName", 2);
g([
  p()
], l.prototype, "_aliasLocked", 2);
l = g([
  L("umb-content-type-design-editor-property")
], l);
var Ft = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Ct = (t) => {
  throw TypeError(t);
}, C = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Yt(e, r) : e, a = t.length - 1, u; a >= 0; a--)
    (u = t[a]) && (i = (o ? u(e, r, i) : u(i)) || i);
  return o && i && Ft(e, r, i), i;
}, wt = (t, e, r) => e.has(t) || Ct("Cannot " + r), c = (t, e, r) => (wt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), V = (t, e, r) => e.has(t) ? Ct("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), st = (t, e, r, o) => (wt(t, e, "write to private field"), e.set(t, r), r), J, U, x, w;
const Kt = {
  getUniqueOfElement: (t) => t.getAttribute("data-umb-property-id"),
  getUniqueOfModel: (t) => t.unique,
  identifier: "content-type-property-sorter",
  itemSelector: "umb-content-type-design-editor-property",
  //disabledItemSelector: '[inherited]',
  //TODO: Set the property list (sorter wrapper) to inherited, if its inherited
  // This is because we don't want to move local properties into an inherited group container.
  // Or maybe we do, but we still need to check if the group exists locally, if not, then it needs to be created before we move a property into it.
  // TODO: Fix bug where a local property turn into an inherited when moved to a new group container.
  containerSelector: "#property-list"
};
let m = class extends F {
  constructor() {
    super(), V(this, J, new dt(this, {
      ...Kt,
      onChange: ({ model: t }) => {
        this._properties = t;
      },
      onContainerChange: ({ item: t }) => {
        if (this._containerId === void 0)
          throw new Error("ContainerId is not set");
        c(this, w).partialUpdateProperty(t.unique, {
          container: this._containerId ? { id: this._containerId } : null
        });
      },
      onEnd: ({ item: t }) => {
        if (this._containerId === void 0)
          throw new Error("ContainerId is not set.");
        const e = this._properties, r = e.findIndex((u) => u.unique === t.unique);
        if (r === -1) return;
        let o = -1;
        r > 0 && e.length > 0 && (o = e[r - 1].sortOrder), c(this, w).partialUpdateProperty(t.unique, {
          sortOrder: ++o
        });
        let i = r + 1, a;
        for (; (a = e[i]) !== void 0 && a.sortOrder <= o; )
          c(this, w).partialUpdateProperty(a.unique, {
            sortOrder: ++o
          }), i++;
      },
      onRequestDrop: async ({ unique: t }) => {
        const e = await this.getContext(P);
        if (!e)
          throw new Error("Could not get Workspace Context");
        return e.structure.getOwnerPropertyById(t);
      },
      requestExternalRemove: async ({ item: t }) => {
        const e = await this.getContext(P);
        if (!e)
          throw new Error("Could not get Workspace Context");
        return await e.structure.removeProperty(null, t.unique).then(
          () => !0,
          () => !1
        );
      },
      requestExternalInsert: async ({ item: t }) => {
        const e = await this.getContext(P);
        if (!e)
          throw new Error("Could not get Workspace Context");
        const r = this._containerId ? { id: this._containerId } : null, o = { ...t, parent: r };
        return await e.structure.insertProperty(null, o).then(
          () => !0,
          () => !1
        );
      }
    })), V(this, U), V(this, x), V(this, w, new Bt(this)), this._properties = [], this.consumeContext(pt, (t) => {
      this.observe(
        t?.isSorting,
        (e) => {
          this._sortModeActive = e;
        },
        "_observeIsSorting"
      );
    }), this.consumeContext(P, async (t) => {
      t && c(this, w).setStructureManager(t.structure), this._ownerContentTypeUnique = t?.structure.getOwnerContentTypeUnique(), this.createPropertyTypeWorkspaceRoutes(), this.observe(
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
    }), this.observe(c(this, w).propertyStructure, (t) => {
      this._properties = t, c(this, J).setModel(this._properties);
    });
  }
  get containerId() {
    return this._containerId;
  }
  set containerId(t) {
    t !== this._containerId && (this._containerId = t, this.createPropertyTypeWorkspaceRoutes(), c(this, w).setContainerId(t), c(this, U)?.setUniquePathValue("container-id", t === null ? "root" : t), c(this, x)?.setUniquePathValue("container-id", t === null ? "root" : t));
  }
  createPropertyTypeWorkspaceRoutes() {
    !this._ownerContentTypeUnique || this._containerId === void 0 || (c(this, U)?.destroy(), st(this, U, new Y(
      this,
      at,
      "addPropertyModal"
    ).addUniquePaths(["container-id"]).addAdditionalPath("add-property/:sortOrder").onSetup(async (t) => {
      if (!this._ownerContentTypeUnique || this._containerId === void 0) return !1;
      const e = {};
      if (t.sortOrder !== void 0) {
        let r = parseInt(t.sortOrder);
        r === -1 && (r = Math.max(...this._properties.map((o) => o.sortOrder), -1) + 1), e.sortOrder = r;
      }
      return { data: { contentTypeUnique: this._ownerContentTypeUnique, preset: e } };
    }).observeRouteBuilder((t) => {
      this._newPropertyPath = t({ sortOrder: "-1" }) + Rt.generateLocal({
        containerUnique: this._containerId
      });
    })), this._containerId !== void 0 && c(this, U)?.setUniquePathValue(
      "container-id",
      this._containerId === null ? "root" : this._containerId
    ), c(this, x)?.destroy(), st(this, x, new Y(
      this,
      at,
      "editPropertyModal"
    ).addUniquePaths(["container-id"]).addAdditionalPath("edit-property").onSetup(async () => !this._ownerContentTypeUnique || this._containerId === void 0 ? !1 : { data: { contentTypeUnique: this._ownerContentTypeUnique, preset: void 0 } }).observeRouteBuilder((t) => {
      this._editPropertyTypePath = t(null);
    })), this._containerId !== void 0 && c(this, x)?.setUniquePathValue(
      "container-id",
      this._containerId === null ? "root" : this._containerId
    ));
  }
  render() {
    return this._ownerContentTypeUnique ? n`
					<div id="property-list" ?sort-mode-active=${this._sortModeActive}>
						${j(
      this._properties,
      (t) => t.unique,
      (t) => n`
									<umb-content-type-design-editor-property
										data-umb-property-id=${t.unique}
										data-mark="property-type:${t.name}"
										.editContentTypePath=${this.editContentTypePath}
										.editPropertyTypePath=${this._editPropertyTypePath}
										?sort-mode-active=${this._sortModeActive}
										.propertyStructureHelper=${c(this, w)}
										.property=${t}
										.ownerVariesByCulture=${this._ownerContentTypeVariesByCulture}
										.ownerVariesBySegment=${this._ownerContentTypeVariesBySegment}>
									</umb-content-type-design-editor-property>
								`
    )}
					</div>

					${z(
      !this._sortModeActive,
      () => n`
							<uui-button
								id="btn-add"
								href=${Mt(this._newPropertyPath)}
								label=${this.localize.term("contentTypeEditor_addProperty")}
								look="placeholder"></uui-button>
						`
    )}
				` : "";
  }
};
J = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakMap();
m.styles = [
  tt,
  G`
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
  h({ type: String, attribute: "container-id", reflect: !1 })
], m.prototype, "containerId", 1);
C([
  h({ attribute: !1 })
], m.prototype, "editContentTypePath", 2);
C([
  p()
], m.prototype, "_properties", 2);
C([
  p()
], m.prototype, "_ownerContentTypeUnique", 2);
C([
  p()
], m.prototype, "_ownerContentTypeVariesByCulture", 2);
C([
  p()
], m.prototype, "_ownerContentTypeVariesBySegment", 2);
C([
  p()
], m.prototype, "_newPropertyPath", 2);
C([
  p()
], m.prototype, "_editPropertyTypePath", 2);
C([
  p()
], m.prototype, "_sortModeActive", 2);
m = C([
  L("umb-content-type-design-editor-properties")
], m);
var Xt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, $t = (t) => {
  throw TypeError(t);
}, T = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? Jt(e, r) : e, a = t.length - 1, u; a >= 0; a--)
    (u = t[a]) && (i = (o ? u(e, r, i) : u(i)) || i);
  return o && i && Xt(e, r, i), i;
}, Qt = (t, e, r) => e.has(t) || $t("Cannot " + r), Zt = (t, e, r) => e.has(t) ? $t("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), k = (t, e, r) => (Qt(t, e, "access private method"), r), S, Q, Tt, Pt, St, Ot;
let v = class extends F {
  constructor() {
    super(...arguments), Zt(this, S), this.sortModeActive = !1;
  }
  set group(t) {
    t !== this._group && (this._group = t, this._groupId = t?.id, k(this, S, Q).call(this));
  }
  get group() {
    return this._group;
  }
  set groupStructureHelper(t) {
    t !== this._groupStructureHelper && (this._groupStructureHelper = t, k(this, S, Q).call(this));
  }
  get groupStructureHelper() {
    return this._groupStructureHelper;
  }
  _singleValueUpdate(t, e) {
    if (!this._groupStructureHelper || !this.group) return;
    const r = {};
    r[t] = e, this._groupStructureHelper.partialUpdateContainer(this.group.id, r);
  }
  render() {
    return this._inherited === void 0 || !this._groupId ? _ : n`
			<uui-box>
				${k(this, S, Ot).call(this)}
				<umb-content-type-design-editor-properties
					.editContentTypePath=${this.editContentTypePath}
					.containerId=${this._groupId}></umb-content-type-design-editor-properties>
			</uui-box>
		`;
  }
};
S = /* @__PURE__ */ new WeakSet();
Q = function() {
  this.groupStructureHelper && this.group && (this.group.name ? this.observe(
    this.groupStructureHelper.containersByNameAndType(this.group.name, "Group"),
    (t) => {
      const e = t.find((i) => this.groupStructureHelper.isOwnerChildContainer(i.id)), r = !!e, o = r && t.length === 1;
      this._hasOwnerContainer = r, this._inherited = !o, this._inheritedFrom = t.filter((i) => i.id !== e?.id).map((i) => this.groupStructureHelper.getContentTypeOfContainer(i.id)).filter((i) => i !== void 0);
    },
    "observeGroupContainers"
  ) : (this._inherited = !1, this._hasOwnerContainer = !0, this.removeUmbControllerByAlias("observeGroupContainers")));
};
Tt = function(t) {
  if (!this.groupStructureHelper || !this._group) return;
  let e = t.target.value;
  const r = this.groupStructureHelper.getStructureManager().makeContainerNameUniqueForOwnerContentType(this._group.id, e, "Group", this._group.parent?.id ?? null);
  r && (e = r), this._singleValueUpdate("name", e), t.target.value = e;
};
Pt = function(t) {
  if (!this.groupStructureHelper || !this._group) return;
  if (t.target.value === "") {
    const r = this.groupStructureHelper.getStructureManager().makeEmptyContainerName(this._group.id, "Group", this._group.parent?.id ?? null);
    this._singleValueUpdate("name", r), t.target.value = r;
  }
};
St = async function(t) {
  t.preventDefault(), t.stopImmediatePropagation(), !(!this.groupStructureHelper || !this._group) && (await lt(this, {
    headline: `${this.localize.term("actions_delete")} group`,
    content: n`<umb-localize key="contentTypeEditor_confirmDeleteGroupMessage" .args=${[
      this._group.name ?? this._group.id
    ]}>
					Are you sure you want to delete the group <strong>${this._group.name ?? this._group.id}</strong>
				</umb-localize>
				</div>`,
    confirmLabel: this.localize.term("actions_delete"),
    color: "danger"
  }), this.groupStructureHelper.removeContainer(this._group.id));
};
Ot = function() {
  return n`
			<div slot="header" class="drag-handle">
				<div>
					${z(this.sortModeActive && this._hasOwnerContainer, () => n`<uui-icon name="icon-grip"></uui-icon>`)}
					<uui-input
						id="group-name"
						label=${this.localize.term("contentTypeEditor_group")}
						placeholder=${this.localize.term("placeholders_entername")}
						.value=${this._group.name}
						?disabled=${!this._hasOwnerContainer}
						@blur=${k(this, S, Pt)}
						@change=${k(this, S, Tt)}
						${this._group.name === "" ? At() : _}
						auto-width></uui-input>
				</div>
			</div>
			<div slot="header-actions">
				${z(
    this._hasOwnerContainer === !1 && this._inheritedFrom && this._inheritedFrom.length > 0,
    () => n`
						<uui-tag look="default" class="inherited">
							<uui-icon name="icon-merge"></uui-icon>
							<span
								>${this.localize.term("contentTypeEditor_inheritedFrom")}
								${j(
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
				${z(
    !this._inherited && !this.sortModeActive,
    () => n`
						<uui-button compact label=${this.localize.term("actions_delete")} @click=${k(this, S, St)}>
							<uui-icon name="delete"></uui-icon>
						</uui-button>
					`
  )}
				${z(
    this.sortModeActive,
    () => n`
						<uui-input
							type="number"
							label=${this.localize.term("sort_sortOrder")}
							.value=${this.group.sortOrder.toString()}
							?disabled=${!this._hasOwnerContainer}
							@change=${(t) => this._singleValueUpdate("sortOrder", parseInt(t.target.value) ?? 0)}></uui-input>
					`
  )}
			</div>
		`;
};
v.styles = [
  tt,
  Vt,
  G`
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
				animation: ${Dt};
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
				cursor: grab;
				padding: var(--uui-size-space-4) var(--uui-size-space-5);
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
T([
  h({ attribute: !1 })
], v.prototype, "group", 1);
T([
  h({ attribute: !1 })
], v.prototype, "groupStructureHelper", 1);
T([
  h({ type: Boolean, attribute: "sort-mode-active", reflect: !0 })
], v.prototype, "sortModeActive", 2);
T([
  h({ attribute: !1 })
], v.prototype, "editContentTypePath", 2);
T([
  p()
], v.prototype, "_groupId", 2);
T([
  p()
], v.prototype, "_hasOwnerContainer", 2);
T([
  p()
], v.prototype, "_inherited", 2);
T([
  p()
], v.prototype, "_inheritedFrom", 2);
v = T([
  L("umb-content-type-design-editor-group")
], v);
var jt = Object.defineProperty, te = Object.getOwnPropertyDescriptor, Et = (t) => {
  throw TypeError(t);
}, q = (t, e, r, o) => {
  for (var i = o > 1 ? void 0 : o ? te(e, r) : e, a = t.length - 1, u; a >= 0; a--)
    (u = t[a]) && (i = (o ? u(e, r, i) : u(i)) || i);
  return o && i && jt(e, r, i), i;
}, it = (t, e, r) => e.has(t) || Et("Cannot " + r), s = (t, e, r) => (it(t, e, "read from private field"), r ? r.call(t) : e.get(t)), I = (t, e, r) => e.has(t) ? Et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ut = (t, e, r, o) => (it(t, e, "write to private field"), e.set(t, r), r), ee = (t, e, r) => (it(t, e, "access private method"), r), B, D, f, b, ot, Z, It;
const re = {
  getUniqueOfElement: (t) => t.group?.id,
  getUniqueOfModel: (t) => t.id,
  // TODO: Make specific to the current owner document. [NL]
  identifier: "content-type-container-sorter",
  itemSelector: "umb-content-type-design-editor-group",
  handleSelector: ".drag-handle",
  containerSelector: ".container-list"
};
let $ = class extends F {
  constructor() {
    super(), I(this, Z), I(this, B, new dt(this, {
      ...re,
      onChange: ({ model: t }) => {
        this._groups = t;
      },
      onEnd: ({ item: t }) => {
        const e = this._groups, r = e.findIndex((u) => u.id === t.id);
        if (r === -1) return;
        let o = -1;
        r > 0 && e.length > 0 && (o = e[r - 1].sortOrder), s(this, b).partialUpdateContainer(t.id, {
          sortOrder: ++o
        });
        let i = r + 1, a;
        for (; (a = e[i]) !== void 0 && a.sortOrder <= o; )
          s(this, b).partialUpdateContainer(a.id, {
            sortOrder: ++o
          }), i++;
      },
      onRequestDrop: async ({ unique: t }) => {
        const e = await this.getContext(P);
        if (!e)
          throw new Error("Could not get Workspace Context");
        return e.structure.getOwnerContainerById(t);
      },
      requestExternalRemove: async ({ item: t }) => {
        const e = await this.getContext(P);
        if (!e)
          throw new Error("Could not get Workspace Context");
        return await e.structure.removeContainer(null, t.id, { preventRemovingProperties: !0 }).then(
          () => !0,
          () => !1
        );
      },
      requestExternalInsert: async ({ item: t }) => {
        const e = await this.getContext(P);
        if (!e)
          throw new Error("Could not get Workspace Context");
        const r = s(this, f) ? { id: s(this, f) } : null, o = { ...t, parent: r };
        return await e.structure.insertContainer(null, o).then(
          () => !0,
          () => !1
        );
      }
    })), I(this, D), I(this, f), this._groups = [], this._hasProperties = !1, I(this, b, new Ut(this)), I(this, ot, () => {
      const t = this._groups.length, e = t === 0 ? 0 : this._groups[t - 1].sortOrder + 1;
      s(this, b).addContainer(s(this, f), e);
    }), this.consumeContext(P, (t) => {
      s(this, b).setStructureManager(t?.structure);
      const e = t?.getEntityType();
      s(this, D)?.destroy(), ut(this, D, new Y(this, qt).addAdditionalPath(e ?? "unknown").onSetup(async () => ({ data: { entityType: e, preset: {} } })).observeRouteBuilder((r) => {
        this._editContentTypePath = r({});
      }));
    }), this.consumeContext(pt, (t) => {
      this.observe(
        t?.isSorting,
        (e) => {
          this._sortModeActive = e, e ? s(this, B).enable() : s(this, B).disable();
        },
        "_observeIsSorting"
      );
    }), this.observe(
      s(this, b).mergedContainers,
      (t) => {
        this._groups = t, s(this, B).setModel(this._groups);
      },
      null
    ), this.observe(
      s(this, b).hasProperties,
      (t) => {
        this._hasProperties = t, this.requestUpdate("_hasProperties");
      },
      null
    );
  }
  get containerId() {
    return s(this, f);
  }
  set containerId(t) {
    const e = s(this, f);
    t !== s(this, f) && (ut(this, f, t), s(this, b).setContainerId(t), this.requestUpdate("containerId", e));
  }
  render() {
    return n`
			${s(this, f) ? n`
							<uui-box class="${this._hasProperties ? "" : "opaque"}">
								<umb-content-type-design-editor-properties
									.containerId=${this.containerId}
									.editContentTypePath=${this._editContentTypePath}></umb-content-type-design-editor-properties>
							</uui-box>
						` : _}

				<div class="container-list" ?sort-mode-active=${this._sortModeActive}>
					${j(
      this._groups,
      (t) => t.id,
      (t) => n`
							<umb-content-type-design-editor-group
								?sort-mode-active=${this._sortModeActive}
								.editContentTypePath=${this._editContentTypePath}
								.group=${t}
								.groupStructureHelper=${s(this, b)}
								data-umb-group-id=${t.id}
								data-mark="group:${t.name}">
							</umb-content-type-design-editor-group>
						`
    )}
				</div>
				${ee(this, Z, It).call(this)}
			</div>
		`;
  }
};
B = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
Z = /* @__PURE__ */ new WeakSet();
It = function() {
  if (!this._sortModeActive)
    return n`
			<uui-button
				id="btn-add"
				label=${this.localize.term("contentTypeEditor_addGroup")}
				look="placeholder"
				@click=${s(this, ot)}></uui-button>
		`;
};
$.styles = [
  G`
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

			.container-list #convert-to-tab {
				margin-bottom: var(--uui-size-layout-1);
				display: flex;
			}
		`
];
q([
  h({ type: String })
], $.prototype, "containerId", 1);
q([
  p()
], $.prototype, "_groups", 2);
q([
  p()
], $.prototype, "_hasProperties", 2);
q([
  p()
], $.prototype, "_sortModeActive", 2);
q([
  p()
], $.prototype, "_editContentTypePath", 2);
$ = q([
  L("umb-content-type-design-editor-tab")
], $);
const $e = $;
export {
  $ as UmbContentTypeDesignEditorTabElement,
  $e as default
};
//# sourceMappingURL=content-type-design-editor-tab.element-BlPF0LYA.js.map

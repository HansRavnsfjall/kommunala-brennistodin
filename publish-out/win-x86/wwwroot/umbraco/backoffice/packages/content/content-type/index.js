import { b as st } from "../content-type-move-root-containers-into-first-tab-helper.class-CkGOWf1Z.js";
import { d as le, U as de, a as ce, c as fe } from "../content-type-move-root-containers-into-first-tab-helper.class-CkGOWf1Z.js";
import { U as me, a as Ce } from "../content-type-property-structure-helper.class-jQi1Hj18.js";
import { U as ve } from "../property-structure-workspace.context-token-Et7VqtUe.js";
import { UmbLitElement as L, umbFocus as ot } from "@umbraco-cms/backoffice/lit-element";
import { css as F, state as C, customElement as Y, ifDefined as at, html as M, nothing as K, property as ut } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as ht } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as pt } from "@umbraco-cms/backoffice/icon";
import { umbBindToValidation as lt, UmbFormControlMixin as dt } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as ct } from "@umbraco-cms/backoffice/event";
import { UMB_DATA_TYPE_PICKER_FLOW_DATA_TYPE_PICKER_MODAL as ft, UMB_DATATYPE_WORKSPACE_MODAL as yt, UMB_DATA_TYPE_ENTITY_TYPE as G } from "@umbraco-cms/backoffice/data-type";
import { UmbModalRouteRegistrationController as U, encodeFolderName as mt } from "@umbraco-cms/backoffice/router";
import { UmbRepositoryBase as Ct, UmbRepositoryDetailsManager as wt } from "@umbraco-cms/backoffice/repository";
import { tryExecute as vt, UmbError as $ } from "@umbraco-cms/backoffice/resources";
import { UmbId as R } from "@umbraco-cms/backoffice/id";
import { UmbArrayState as I, createObservablePart as h, mergeObservables as Tt, observationAsPromise as gt, appendToFrozenArray as V, partialUpdateFrozenArray as q, filterFrozenArray as Ot } from "@umbraco-cms/backoffice/observable-api";
import { incrementString as _t } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as bt } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionApiInitializer as Pt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Et } from "@umbraco-cms/backoffice/extension-registry";
import { firstValueFrom as k } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbEntityDetailWorkspaceContextBase as At } from "@umbraco-cms/backoffice/workspace";
import { UmbRequestReloadChildrenOfEntityEvent as St, UmbRequestReloadStructureForEntityEvent as Mt, UmbEntityUpdatedEvent as Nt } from "@umbraco-cms/backoffice/entity-action";
import { UMB_ACTION_EVENT_CONTEXT as x } from "@umbraco-cms/backoffice/action";
import { U as ge } from "../property-type-based-property.element-BMqRIO7K.js";
const se = "Umb.Condition.WorkspaceContentTypeAlias";
var Bt = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, H = (i) => {
  throw TypeError(i);
}, w = (i, t, r, e) => {
  for (var n = e > 1 ? void 0 : e ? Dt(t, r) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (e ? o(t, r, n) : o(n)) || n);
  return e && n && Bt(t, r, n), n;
}, N = (i, t, r) => t.has(i) || H("Cannot " + r), d = (i, t, r) => (N(i, t, "read from private field"), t.get(i)), z = (i, t, r) => t.has(i) ? H("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, r), Ut = (i, t, r, e) => (N(i, t, "write to private field"), t.set(i, r), r), A = (i, t, r) => (N(i, t, "access private method"), r), l, v, X, Q, J;
let m = class extends L {
  constructor() {
    super(), z(this, v), z(this, l), this.consumeContext(st, (i) => {
      Ut(this, l, i), A(this, v, X).call(this);
    });
  }
  async _handleIconClick() {
    const [i, t] = this._icon?.replace("color-", "")?.split(" ") ?? [], r = await this.getContext(ht);
    if (!r)
      throw new Error("Modal manager not found.");
    r.open(this, pt, {
      value: {
        icon: i,
        color: t
      }
    })?.onSubmit().then((n) => {
      n.icon && n.color ? d(this, l)?.setIcon(`${n.icon} color-${n.color}`) : n.icon && d(this, l)?.setIcon(n.icon);
    });
  }
  render() {
    return M`
			<div id="header">
				<uui-button id="icon" compact label="icon" look="outline" @click=${this._handleIconClick}>
					<umb-icon name=${at(this._icon)}></umb-icon>
				</uui-button>

				<div id="editors">
					<umb-input-with-alias
						id="name"
						label=${this.localize.term("placeholders_entername")}
						.value=${this._name}
						.alias=${this._alias}
						?auto-generate-alias=${this._isNew}
						@change=${A(this, v, Q)}
						required
						${lt(this, "$.name", this._name)}
						${ot()}>
					</umb-input-with-alias>

					<uui-input
						id="description"
						.label=${this.localize.term("placeholders_enterDescription")}
						.value=${this._description}
						.placeholder=${this.localize.term("placeholders_enterDescription")}
						@input=${A(this, v, J)}></uui-input>
				</div>
			</div>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakSet();
X = function() {
  d(this, l) && (this.observe(d(this, l).name, (i) => this._name = i, "_observeName"), this.observe(d(this, l).alias, (i) => this._alias = i, "_observeAlias"), this.observe(
    d(this, l).description,
    (i) => this._description = i,
    "_observeDescription"
  ), this.observe(d(this, l).icon, (i) => this._icon = i, "_observeIcon"), this.observe(d(this, l).isNew, (i) => this._isNew = i, "_observeIsNew"));
};
Q = function(i) {
  d(this, l)?.setName(i.target.value ?? ""), d(this, l)?.setAlias(i.target.alias ?? "");
};
J = function(i) {
  d(this, l)?.setDescription(i.target.value.toString() ?? "");
};
m.styles = [
  F`
			:host {
				display: contents;
			}

			#header {
				display: flex;
				flex: 1 1 auto;
				gap: var(--uui-size-space-2);
			}

			#editors {
				display: flex;
				flex: 1 1 auto;
				flex-direction: column;
				gap: 1px;
			}

			#name {
				width: 100%;
				z-index: 1;
			}

			#description {
				width: 100%;
				--uui-input-height: var(--uui-size-8);
				--uui-input-border-color: transparent;
			}

			#description:hover {
				--uui-input-border-color: var(--uui-color-border);
			}

			#icon {
				font-size: var(--uui-size-8);
				height: 60px;
				width: 60px;
				--uui-button-border-color: transparent;
				--uui-button-border-color-hover: var(--uui-color-border);
			}
		`
];
w([
  C()
], m.prototype, "_name", 2);
w([
  C()
], m.prototype, "_alias", 2);
w([
  C()
], m.prototype, "_description", 2);
w([
  C()
], m.prototype, "_icon", 2);
w([
  C()
], m.prototype, "_isNew", 2);
m = w([
  Y("umb-content-type-workspace-editor-header")
], m);
var $t = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, Z = (i) => {
  throw TypeError(i);
}, B = (i, t, r, e) => {
  for (var n = e > 1 ? void 0 : e ? Rt(t, r) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (e ? o(t, r, n) : o(n)) || n);
  return e && n && $t(t, r, n), n;
}, D = (i, t, r) => t.has(i) || Z("Cannot " + r), b = (i, t, r) => (D(i, t, "read from private field"), r ? r.call(i) : t.get(i)), S = (i, t, r) => t.has(i) ? Z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, r), It = (i, t, r, e) => (D(i, t, "write to private field"), t.set(i, r), r), y = (i, t, r) => (D(i, t, "access private method"), r), T, P, c, E, j, tt, et, rt, nt;
let g = class extends dt(L) {
  constructor() {
    super(), S(this, c), S(this, T), S(this, P, "Umb.PropertyEditorUi.Collection"), new U(this, ft).addAdditionalPath(":uiAlias").onSetup((i) => ({
      data: {
        propertyEditorUiAlias: i.uiAlias
      },
      value: void 0
    })).onSubmit((i) => {
      i?.createNewWithPropertyEditorUiAlias ? y(this, c, tt).call(this) : y(this, c, E).call(this, i?.dataTypeId ?? this.defaultValue ?? "");
    }).observeRouteBuilder((i) => {
      this._dataTypePickerModalPath = i({ uiAlias: b(this, P) });
    }), It(this, T, new U(this, yt).addAdditionalPath(":uiAlias").onSetup((i) => ({ data: { entityType: G, preset: { editorUiAlias: i.uiAlias } } })).onSubmit((i) => {
      y(this, c, E).call(this, i?.unique ?? this.defaultValue ?? "");
    }));
  }
  getFormElement() {
  }
  render() {
    return this.value ? y(this, c, nt).call(this) : y(this, c, rt).call(this);
  }
};
T = /* @__PURE__ */ new WeakMap();
P = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
E = function(i) {
  this.value = i, this.dispatchEvent(new ct());
};
j = function() {
  y(this, c, E).call(this, void 0);
};
tt = function() {
  b(this, T).open(
    { uiAlias: b(this, P) },
    `create/parent/${G}/null`
  );
};
et = function() {
  b(this, T)?.open({}, `edit/${this.value}`);
};
rt = function() {
  return this._dataTypePickerModalPath ? M`
			<uui-button
				id="create-button"
				color="default"
				look="placeholder"
				label=${this.localize.term("collection_addCollectionConfiguration")}
				href=${this._dataTypePickerModalPath}></uui-button>
		` : K;
};
nt = function() {
  return !this.value || !this._dataTypePickerModalPath ? K : M`
			<uui-ref-list>
				<umb-ref-data-type standalone data-type-id=${this.value} @open=${y(this, c, et)}>
					<uui-action-bar slot="actions">
						<uui-button
							label=${this.localize.term("general_choose")}
							href=${this._dataTypePickerModalPath}></uui-button>
						<uui-button @click=${y(this, c, j)} label=${this.localize.term("general_remove")}></uui-button>
					</uui-action-bar>
				</umb-ref-data-type>
			</uui-ref-list>
		`;
};
g.styles = [
  F`
			#create-button {
				width: 100%;
			}
		`
];
B([
  C()
], g.prototype, "_dataTypePickerModalPath", 2);
B([
  ut({ attribute: "default-value" })
], g.prototype, "defaultValue", 2);
g = B([
  Y("umb-input-content-type-collection-configuration")
], g);
class oe extends Ct {
  #n;
  constructor(t, r) {
    super(t), this.#n = new r(t);
  }
  /**
   * Returns a promise with the allowed children of a content type
   * @param {string} unique
   * @param parentContentUnique
   * @returns {*}
   * @memberof UmbContentTypeStructureRepositoryBase
   */
  requestAllowedChildrenOf(t, r) {
    return this.#n.getAllowedChildrenOf(t, r);
  }
}
class ae {
  #n;
  #i;
  #e;
  /**
   * Creates an instance of UmbContentTypeStructureServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbItemServerDataSourceBase
   */
  constructor(t, r) {
    this.#n = t, this.#i = r.getAllowedChildrenOf, this.#e = r.mapper;
  }
  /**
   * Returns a promise with the allowed content types for the given unique
   * @param {string} unique
   * @param parentContentUnique
   * @returns {*}
   * @memberof UmbContentTypeStructureServerDataSourceBase
   */
  async getAllowedChildrenOf(t, r) {
    const { data: e, error: n } = await vt(this.#n, this.#i(t, r));
    return e ? { data: { items: e.items.map((o) => this.#e(o)), total: e.total } } : { error: n };
  }
}
const W = (i, t, r) => r.indexOf(i) === t;
class Vt extends bt {
  constructor(t, r) {
    super(t), this.#e = new Promise((e, n) => {
      this.#n = e, this.#i = n;
    }), this.#s = new I([], (e) => e), this.#h = new Promise((e) => {
      this.#o ? e(this.#o) : this.#l = e;
    }), this.#d = new Array(), this.#t = new I([], (e) => e.unique), this.contentTypes = this.#t.asObservable(), this.ownerContentType = this.#t.asObservablePart(
      (e) => e.find((n) => n.unique === this.#r)
    ), this.ownerContentTypeAlias = h(this.ownerContentType, (e) => e?.alias), this.ownerContentTypeName = h(this.ownerContentType, (e) => e?.name), this.ownerContentTypeCompositions = h(this.ownerContentType, (e) => e?.compositions), this.contentTypeCompositions = this.#t.asObservablePart((e) => e.flatMap((n) => n.compositions ?? [])), this.#a = this.#t.asObservablePart((e) => e.flatMap((n) => n.containers ?? [])), this.contentTypeProperties = this.#t.asObservablePart((e) => e.flatMap((n) => n.properties ?? [])), this.contentTypeDataTypeUniques = this.#t.asObservablePart((e) => e.flatMap((n) => n.properties?.map((s) => s.dataType.unique) ?? []).filter(W)), this.contentTypeHasProperties = this.#t.asObservablePart((e) => e.some((n) => n.properties.length > 0)), this.contentTypePropertyAliases = h(
      this.contentTypeProperties,
      (e) => e.map((n) => n.alias)
    ), this.contentTypeUniques = this.#t.asObservablePart((e) => e.map((n) => n.unique)), this.contentTypeAliases = this.#t.asObservablePart((e) => e.map((n) => n.alias)), this.contentTypeLoaded = Tt(
      [this.contentTypeCompositions, this.contentTypeUniques],
      ([e, n]) => e.every((s) => n.includes(s.contentType.unique))
    ), this.variesByCulture = h(this.ownerContentType, (e) => e?.variesByCulture), this.variesBySegment = h(this.ownerContentType, (e) => e?.variesBySegment), this.#p = [], this.contentTypeMergedContainers = h(
      this.#a,
      (e) => {
        const n = /* @__PURE__ */ new Map();
        for (const a of e)
          n.set(a.id, a);
        const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
        for (const a of e) {
          const p = it(a, n, s), u = p?.join("|") ?? null, f = this.isOwnerContainer(a.id);
          if (!o.has(u))
            o.set(u, {
              key: u,
              ids: [a.id],
              ownerId: f ? a.id : void 0,
              parentIds: /* @__PURE__ */ new Set([a.parent?.id ?? null]),
              path: p,
              type: a.type,
              name: a.name,
              sortOrder: a.sortOrder
              // Heavily assuming the first is the owner content type container, this could maybe turn out not always to be the case?
            });
          else {
            const O = o.get(u);
            O.ids.push(a.id), O.parentIds.add(a.parent?.id ?? null), O.ownerId ??= f ? a.id : void 0, f && (O.sortOrder = a.sortOrder);
          }
        }
        return this.#p = Array.from(o.values());
      }
    ), typeof r == "string" ? this.#f(r) : (this.#o = r, this.#l?.(r)), this.#h.then(() => {
      if (!this.#o)
        throw new Error(
          "Content Type Structure Manager failed cause it could not initialize or receive the Content Type Detail Repository."
        );
      this.#u = new wt(this, r), this.observe(
        this.#u.entries,
        (e) => {
          const n = e.filter(
            (o) => !(this.#s.getHasOne(o.unique) && this.#t.getHasOne(o.unique))
          ), s = this.#t.getValue().filter((o) => !e.some((a) => a.unique === o.unique)).map((o) => o.unique);
          this.#t.mute(), this.#t.remove(s), this.#t.append(n), this.#t.unmute();
        },
        null
      );
    }), this.observe(
      this.contentTypeCompositions,
      (e) => {
        this.#c(e);
      },
      null
    );
  }
  #n;
  #i;
  #e;
  #s;
  #o;
  #l;
  #h;
  #u;
  async whenLoaded() {
    return await this.#e, !0;
  }
  #r;
  #d;
  #t;
  async getContentTypeCompositions() {
    return await this.observe(this.contentTypeCompositions).asPromise();
  }
  async getOwnerContentTypeCompositions() {
    return await this.observe(this.ownerContentTypeCompositions).asPromise();
  }
  #a;
  async getContentTypeProperties() {
    return await this.observe(this.contentTypeProperties).asPromise();
  }
  containerById(t) {
    return h(this.#a, (r) => r.find((e) => e.id === t));
  }
  /**
   * loadType will load the ContentType and all inherited and composed ContentTypes.
   * This will give us all the structure for properties and containers.
   * @param {string} unique - The unique of the ContentType to load.
   * @returns {Promise} - Promise resolved
   */
  async loadType(t) {
    if (this.#r === t)
      return await this.#e, { data: this.getOwnerContentType(), asObservable: () => this.ownerContentType };
    if (await this.#h, this.clear(), this.#r = t, !t)
      return this.#i?.(`Content Type structure manager could not load: ${t}`), this.#n = void 0, this.#i = void 0, Promise.reject(
        new Error("The unique identifier is missing. A valid unique identifier is required to load the content type.")
      );
    this.#u.setUniques([t]);
    const r = this.#u.entryByUnique(t), e = await this.observe(r).asPromise();
    return e ? (await gt(this.contentTypeLoaded, async (n) => n === !0).catch(() => {
      const n = `Content Type structure manager could not load: ${t}. Not all Content Types loaded successfully.`;
      return this.#i?.(n), this.#n = void 0, this.#i = void 0, Promise.reject(new $(n));
    }), this.#n?.(e), this.#n = void 0, this.#i = void 0, { data: e, asObservable: () => this.ownerContentType }) : (this.#i?.(`Content Type structure manager could not load: ${t}`), this.#n = void 0, this.#i = void 0, {
      error: new $(`Content Type structure manager could not load: ${t}`),
      asObservable: () => r
    });
  }
  async createScaffold(t) {
    await this.#h, this.clear();
    const r = await this.#o.createScaffold(t), { data: e } = r;
    return e ? (this.#r = e.unique, this.#t.appendOne(e), this.#u.addEntry(e), this.#n?.(e), this.#n = void 0, this.#i = void 0, r) : (this.#i?.("Content Type structure manager could not create scaffold"), this.#n = void 0, this.#i = void 0, { error: r.error });
  }
  /**
   * Save the owner content type. Notice this is for a Content Type that is already stored on the server.
   * @returns {Promise} - A promise that will be resolved when the content type is saved.
   */
  async save() {
    await this.#h;
    const t = this.getOwnerContentType();
    if (!t || !t.unique) throw new Error("Could not find the Content Type to save");
    const { error: r, data: e } = await this.#o.save(t);
    if (r || !e)
      throw r?.message ?? "Repository did not return data after save.";
    return this.#t.updateOne(t.unique, e), this.#u.addEntry(e), e;
  }
  /**
   * Create the owner content type. Notice this is for a Content Type that is NOT already stored on the server.
   * @param {string | null} parentUnique - The unique of the parent content type
   * @returns {Promise} - a promise that is resolved when the content type has been created.
   */
  async create(t) {
    await this.#h;
    const r = this.getOwnerContentType();
    if (!r || !r.unique)
      throw new Error("Could not find the Content Type to create");
    const { error: e, data: n } = await this.#o.create(r, t);
    if (e || !n)
      throw e?.message ?? "Repository did not return data after create.";
    return this.#t.updateOne(r.unique, n), this.#u.addEntry(n), n;
  }
  async #c(t) {
    await Promise.resolve();
    const r = this.getOwnerContentTypeUnique();
    if (!r) return;
    const e = t?.map((s) => s.contentType.unique) ?? [], n = [r, ...e];
    this.#t.filter((s) => n.includes(s.unique)), this.#u.setUniques(n);
  }
  /** Public methods for consuming structure: */
  ownerContentTypeObservablePart(t) {
    return h(this.ownerContentType, t);
  }
  getOwnerContentType() {
    return this.#t.getValue().find((t) => t.unique === this.#r);
  }
  getOwnerContentTypeName() {
    return this.getOwnerContentType()?.name;
  }
  getOwnerContentTypeUnique() {
    return this.#r;
  }
  getVariesByCulture() {
    return this.getOwnerContentType()?.variesByCulture;
  }
  getVariesBySegment() {
    return this.getOwnerContentType()?.variesBySegment;
  }
  /**
   * Figure out if any of the Content Types has a Property.
   * @returns {boolean} - true if any of the Content Type in this composition has a Property.
   */
  getHasProperties() {
    return this.#t.getValue().some((t) => t.properties.length > 0);
  }
  updateOwnerContentType(t) {
    this.#s.appendOne(this.#r), this.#t.updateOne(this.#r, t);
  }
  getContentTypes() {
    return this.#t.getValue();
  }
  getContentTypeUniques() {
    return this.#t.getValue().map((t) => t.unique);
  }
  getContentTypeAliases() {
    return this.#t.getValue().map((t) => t.alias);
  }
  // TODO: We could move the actions to another class?
  /**
   * Ensure a container exists for a specific Content Type. Otherwise clone it.
   * @param {string} containerId - The container to ensure exists on the given ContentType.
   * @param {string} contentTypeUnique - The content type to ensure the container for.
   * @returns {Promise<UmbPropertyTypeContainerModel | undefined>} - The container found or created for the owner ContentType.
   */
  async ensureContainerOf(t, r) {
    await this.#e;
    const e = this.#t.getValue().find((s) => s.unique === r);
    if (!e)
      throw new Error("Could not find the Content Type to ensure containers for");
    const n = e?.containers?.find((s) => s.id === t);
    return n || this.cloneContainerTo(t, r);
  }
  /**
   * Clone a container to a specific Content Type.
   * @param {string} containerId - The container to clone, assuming it does not already exist on the given Content Type.
   * @param {string} toContentTypeUnique - The content type to clone to.
   * @returns {Promise<UmbPropertyTypeContainerModel | undefined>} - The container cloned or found for the owner ContentType.
   */
  async cloneContainerTo(t, r) {
    await this.#e, r = r ?? this.#r, this.#s.appendOne(r);
    const e = (await k(this.#a)).find((o) => o.id === t);
    if (!e) throw new Error("Container to clone was not found");
    const n = {
      ...e,
      id: R.new()
    };
    if (e.parent) {
      const o = await this.ensureContainerOf(e.parent.id, r);
      if (!o)
        throw new Error("Parent container for cloning could not be found or created");
      n.parent = { id: o.id };
    }
    const s = [
      ...this.#t.getValue().find((o) => o.unique === r)?.containers ?? []
    ];
    return s.push(n), this.#t.updateOne(r, { containers: s }), n;
  }
  ensureContainerNames(t, r, e = null) {
    t = t ?? this.#r, this.getOwnerContainers(r, e)?.forEach((n) => {
      if (n.name === "") {
        const s = "Unnamed";
        this.#s.appendOne(t), this.updateContainer(null, n.id, {
          name: this.makeContainerNameUniqueForOwnerContentType(n.id, s, r, e) ?? s
        });
      }
    });
  }
  async createContainer(t, r = null, e = "Group", n) {
    if (await this.#e, t = t ?? this.#r, this.#s.appendOne(t), r) {
      const o = await this.ensureContainerOf(r, t);
      if (!o)
        throw new Error("Parent container for creating a new container could not be found or created");
      r = o.id;
    }
    const s = {
      id: R.new(),
      parent: r ? { id: r } : null,
      name: "",
      type: e,
      sortOrder: n ?? 0
    };
    return this.insertContainer(t, s);
  }
  async insertContainer(t, r) {
    await this.#e, t = t ?? this.#r;
    const e = { ...r }, n = e.type, s = e.parent?.id ?? null;
    if (e.parent) {
      const p = await this.ensureContainerOf(e.parent.id, t);
      if (!p)
        throw new Error("Container for inserting property could not be found or created");
      e.parent.id = p.id;
    }
    this.ensureContainerNames(t, n, s);
    const o = this.#t.getValue().find((p) => p.unique === t)?.containers ?? [], a = V(o, e, (p) => p.id === e.id);
    return this.#t.updateOne(t, { containers: a }), e;
  }
  makeEmptyContainerName(t, r, e) {
    return this.makeContainerNameUniqueForOwnerContentType(t, "Unnamed", r, e) ?? "Unnamed";
  }
  /**
   *
   * @param {string} containerId - The id of the container to make unique
   * @param {string} newName - The new name to make unique
   * @param {never} _legacyContainerType - do not use, has no effect. Is deprecated and will be removed in v.17
   * @param {never} _legacyParentId - do not use, has no effect. Is deprecated and will be removed in v.17
   * @returns
   */
  makeContainerNameUniqueForOwnerContentType(t, r, e, n) {
    const s = this.getOwnerContainerById(t);
    if (!s)
      return console.warn(`Container with id ${t} not found in owner content type.`), null;
    const o = s.type, a = s.parent?.id ?? null, p = this.getOwnerContainers(o, a);
    if (!p)
      return null;
    let u = r;
    for (; p.find((f) => f.name === u && f.id !== t); )
      u = _t(u);
    return u === r ? null : u;
  }
  async updateContainer(t, r, e) {
    await this.#e, t = t ?? this.#r, this.#s.appendOne(t);
    const n = this.#t.getValue().find((a) => a.unique === t)?.containers ?? [];
    n.find((a) => a.id === r) || console.error(
      "We do not have this container on the requested id, we should clone the container and append the change to it. [NL]"
    );
    const o = q(
      n,
      e,
      (a) => a.id === r
    );
    this.#t.updateOne(t, { containers: o });
  }
  async removeContainer(t, r = null, e) {
    await this.#e, t = t ?? this.#r, this.#s.appendOne(t);
    const n = this.#t.getValue().find((u) => u.unique === t);
    if (!n)
      throw new Error("Could not find the Content Type to remove container from");
    const s = n.containers ?? [], o = s.filter((u) => u.id === r || u.parent?.id === r).map((u) => u.id), p = { containers: s.filter((u) => u.id !== r && u.parent?.id !== r) };
    e?.preventRemovingProperties !== !0 && (p.properties = n.properties.filter(
      (u) => u.container ? !o.some((f) => f === u.container?.id) : !0
    )), this.#t.updateOne(t, p);
  }
  async insertProperty(t, r) {
    if (await this.#e, t = t ?? this.#r, this.#s.appendOne(t), r.container) {
      this.#t.mute();
      const s = await this.ensureContainerOf(r.container.id, t);
      if (this.#t.unmute(), !s)
        throw new Error("Container for inserting property could not be found or created");
      r = { ...r, container: { id: s.id } };
    }
    r.sortOrder === void 0 && (r.sortOrder = 0);
    const e = this.#t.getValue().find((s) => s.unique === t)?.properties ?? [], n = V(e, r, (s) => s.unique === r.unique);
    this.#t.updateOne(t, { properties: n });
  }
  async removeProperty(t, r) {
    await this.#e, t = t ?? this.#r, this.#s.appendOne(t);
    const e = this.#t.getValue().find((s) => s.unique === t)?.properties ?? [], n = Ot(e, (s) => s.unique !== r);
    this.#t.updateOne(t, { properties: n });
  }
  async updateProperty(t, r, e) {
    await this.#e, t = t ?? this.#r, this.#s.appendOne(t);
    const n = this.#t.getValue().find((o) => o.unique === t)?.properties ?? [], s = q(n, e, (o) => o.unique === r);
    this.#t.updateOne(t, { properties: s });
  }
  // TODO: Refactor: These property methods, should maybe be named without structure in their name.
  async propertyStructureById(t) {
    return await this.#e, this.#t.asObservablePart((r) => {
      for (const e of r) {
        const n = e.properties?.find((s) => s.unique === t);
        if (n)
          return n;
      }
    });
  }
  async propertyStructureByAlias(t) {
    return await this.#e, this.#t.asObservablePart((r) => {
      for (const e of r) {
        const n = e.properties?.find((s) => s.alias === t);
        if (n)
          return n;
      }
    });
  }
  async getPropertyStructureById(t) {
    await this.#e;
    for (const r of this.#t.getValue()) {
      const e = r.properties?.find((n) => n.unique === t);
      if (e)
        return e;
    }
  }
  async getOwnerPropertyById(t) {
    return await this.#e, this.getOwnerContentType()?.properties?.find((r) => r.unique === t);
  }
  async getPropertyStructureByAlias(t) {
    await this.#e;
    for (const r of this.#t.getValue()) {
      const e = r.properties?.find((n) => n.alias === t);
      if (e)
        return e;
    }
  }
  hasPropertyStructuresOf(t) {
    return this.#t.asObservablePart((r) => r.find((e) => e.properties?.find((n) => n.container?.id === t)) !== void 0);
  }
  rootPropertyStructures() {
    return this.propertyStructuresOf(null);
  }
  propertyStructuresOf(t) {
    return this.#t.asObservablePart((r) => {
      const e = [];
      return r.forEach((n) => {
        n.properties?.forEach((s) => {
          s.container?.id === t && e.push(s);
        });
      }), e;
    });
  }
  propertyStructuresOfGroupIds(t) {
    return this.#t.asObservablePart((r) => {
      const e = [];
      return r.forEach((n) => {
        n.properties?.forEach((s) => {
          s.container?.id && t.includes(s.container.id) && e.push(s);
        });
      }), e;
    });
  }
  hasPropertyStructuresOfGroupIds(t) {
    return this.#t.asObservablePart((r) => r.some((e) => e.properties?.some((n) => n.container?.id && t.includes(n.container.id))));
  }
  hasPropertyStructuresOfRoot() {
    return this.#t.asObservablePart((t) => t.some((r) => r.properties?.some((e) => !e.container)));
  }
  rootContainers(t) {
    return h(this.#a, (r) => r.filter((e) => e.parent === null && e.type === t));
  }
  async getRootContainers(t) {
    return (await k(this.#a)).filter(
      (r) => r.parent === null && r.type === t
    );
  }
  async hasRootContainers(t) {
    return h(this.#a, (r) => r.filter((e) => e.parent === null && e.type === t).length > 0);
  }
  ownerContainersOf(t, r) {
    return this.ownerContentTypeObservablePart(
      (e) => e?.containers?.filter(
        (n) => (r ? n.parent?.id === r : n.parent === null) && n.type === t
      ) ?? []
    );
  }
  getOwnerContainerById(t) {
    return this.getOwnerContentType()?.containers?.find((r) => r.id === t);
  }
  getOwnerContainers(t, r) {
    return this.getOwnerContentType()?.containers?.filter(
      (e) => (r ? e.parent?.id === r : e.parent === null) && e.type === t
    );
  }
  isOwnerContainer(t) {
    return this.getOwnerContentType()?.containers?.some((r) => r.id === t);
  }
  containersOfParentId(t, r) {
    return h(this.#a, (e) => e.filter((n) => n.parent?.id === t && n.type === r));
  }
  // In future this might need to take parentName(parentId lookup) into account as well? otherwise containers that share same name and type will always be merged, but their position might be different and they should not be merged. [NL]
  containersByNameAndType(t, r) {
    return h(this.#a, (e) => e.filter((n) => n.name === t && n.type === r));
  }
  containersByNameAndTypeAndParent(t, r, e, n) {
    return h(this.#a, (s) => s.filter(
      (o) => (
        // Match name and type:
        o.name === t && o.type === r && // If we look for a parent name, then we need to match that as well:
        (e !== null ? (
          // And we have a parent on this container, then we need to match the parent name and type as well
          o.parent ? s.some((a) => o.parent.id === a.id && a.name === e && a.type === n) : !1
        ) : (
          // if we do not have a parent then its not a match
          o.parent === null
        ))
      )
      // it parentName === null then we expect the container parent to be null.
    ));
  }
  getContentTypeOfContainer(t) {
    return this.#t.getValue().find((r) => r.containers.some((e) => e.id === t));
  }
  contentTypeOfProperty(t) {
    return this.#t.asObservablePart(
      (r) => r.find((e) => e.properties.some((n) => n.unique === t))
    );
  }
  #f(t) {
    if (!t) throw new Error("Content Type structure manager must have a repository alias.");
    new Pt(
      this,
      Et,
      t,
      [this._host],
      (r, e) => {
        this.#o = r ? e.api : void 0, this.#o && this.#l?.(this.#o);
      }
    );
  }
  /**
   * Get all property aliases for the content type including inherited and composed content types.
   * @returns {Promise<Array<string>>} - A promise that will be resolved with the list of all content type property aliases.
   */
  async getContentTypePropertyAliases() {
    return this.#t.getValue().flatMap((t) => t.properties?.map((r) => r.alias) ?? []).filter(W);
  }
  clear() {
    this.#d.forEach((t) => t.destroy()), this.#d = [], this.#u?.clear(), this.#t.setValue([]), this.#r = void 0;
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
  #p;
  mergedContainersOfId(t) {
    return h(this.contentTypeMergedContainers, (r) => r.find((e) => e.ids.includes(t)));
  }
  /**
   *
   * Find merged containers that match the provided container ids.
   * Notice if you can provide one or more ids matching the same container and it will still only return return the matching container once.
   * @param containerIds - An array of container ids to find merged containers for.
   * @returns {Observable} - An observable that emits the merged containers that match the provided container ids.
   */
  /*
  public mergedContainersOfIds(searchIds: Array<string>): Observable<Array<UmbPropertyTypeContainerMergedModel>> {
  	return createObservablePart(this.contentTypeMergedContainers, (mergedContainers) => {
  		return mergedContainers.filter((x) => searchIds.some((id) => x.ids.includes(id)));
  	});
  }
  */
  /**
   * Find a merged container that match the provided container id.
   * @param {string} id - The id to find the merged container of.
   * @returns {UmbPropertyTypeContainerMergedModel | undefined} - The merged containers that match the provided container ids.
   */
  getMergedContainerById(t) {
    return this.#p.find((r) => r.ids.includes(t));
  }
  /**
   * Find a merged container that match the provided merged-container key.
   * @param {string} key - The key to find the merged container of.
   * @returns {UmbPropertyTypeContainerMergedModel | undefined} - The merged containers that match the provided merged-container key.
   */
  getMergedContainerByKey(t) {
    return this.#p.find((r) => r.key === t);
  }
  /**
   *
   * Find merged child containers that are children of the provided parent container ids.
   * Notice this will find matching containers and include their child containers in this.
   * @param containerIds - An array of container ids to find merged child containers for.
   * @param searchId
   * @param type - The type of the containers to find.
   * @returns {Observable} - An observable that emits the merged child containers that match the provided container ids.
   */
  mergedContainersOfParentIdAndType(t, r) {
    return h(this.contentTypeMergedContainers, (e) => {
      const n = t ? e.find((s) => s.ids.includes(t))?.ids ?? [] : [null];
      return e.filter((s) => s.type === r && n.some((o) => s.parentIds.has(o)));
    });
  }
  /**
   *
   * Find merged child containers that are children of one of the provided parent container ids.
   * Notice if you can provide one or more ids matching the same parent and it will still only return return the matching child container once.
   * @param containerIds - An array of container ids to find merged child containers for.
   * @param type - The type of the containers to find.
   * @returns {Observable} - An observable that emits the merged child containers that match the provided container ids.
   */
  /*
  public mergedContainersOfParentIds(
  	searchIds: Array<string | null>,
  	type: UmbPropertyContainerTypes,
  ): Observable<Array<UmbPropertyTypeContainerMergedModel>> {
  	return createObservablePart(this.contentTypeMergedContainers, (mergedContainers) => {
  		return mergedContainers.filter((x) => x.type === type && searchIds.some((id) => x.parentIds.has(id)));
  	});
  }
  */
}
function it(i, t, r) {
  if (r.has(i.id))
    return r.get(i.id);
  let e = [`${i.type.toLowerCase()}/${mt(i.name)}`];
  if (i.parent && t.has(i.parent.id)) {
    const n = t.get(i.parent.id);
    e = [...it(n, t, r), ...e];
  } else !i.parent && i.type;
  return r.set(i.id, [...e]), e;
}
const _ = "umbLoadingContentTypeDetail";
class ue extends At {
  constructor(t, r) {
    super(t, r), this.IS_CONTENT_TYPE_WORKSPACE_CONTEXT = !0, this.structure = new Vt(this, r.detailRepositoryAlias), this.name = this.structure.ownerContentTypeObservablePart((e) => e?.name), this.alias = this.structure.ownerContentTypeObservablePart((e) => e?.alias), this.description = this.structure.ownerContentTypeObservablePart((e) => e?.description), this.icon = this.structure.ownerContentTypeObservablePart((e) => e?.icon), this.allowedAtRoot = this.structure.ownerContentTypeObservablePart((e) => e?.allowedAtRoot), this.variesByCulture = this.structure.ownerContentTypeObservablePart((e) => e?.variesByCulture), this.variesBySegment = this.structure.ownerContentTypeObservablePart((e) => e?.variesBySegment), this.isElement = this.structure.ownerContentTypeObservablePart((e) => e?.isElement), this.allowedContentTypes = this.structure.ownerContentTypeObservablePart((e) => e?.allowedContentTypes), this.compositions = this.structure.ownerContentTypeObservablePart((e) => e?.compositions), this.collection = this.structure.ownerContentTypeObservablePart((e) => e?.collection), this.observe(this.structure.ownerContentType, (e) => this._data.setCurrent(e), null), this.observe(this.name, (e) => this.view.setTitle(e), null);
  }
  /**
   * Creates a new scaffold
   * @param { UmbEntityDetailWorkspaceContextCreateArgs<DetailModelType> } args The arguments for creating a new scaffold
   * @returns { Promise<DetailModelType | undefined> } The new scaffold
   */
  async createScaffold(t) {
    this.resetState(), this.loading.addState({ unique: _, message: `Creating ${this.getEntityType()} scaffold` }), this._internal_setCreateUnderParent(t.parent);
    const r = this.structure.createScaffold(t.preset);
    this._getDataPromise = r;
    let { data: e } = await r;
    return e && (e = await this._processIncomingData(e), e = await this._scaffoldProcessData(e), this.modalContext && (e = { ...e, ...this.modalContext.data.preset }), this.setUnique(e.unique), this.setIsNew(!0), this._data.setPersisted(e)), this.loading.removeState(_), e;
  }
  /**
   * Loads the data for the workspace
   * @param { string } unique The unique identifier of the data to load
   * @returns { Promise<UmbRepositoryResponse<DetailModelType> | UmbRepositoryResponseWithAsObservable<DetailModelType>> } The loaded data
   */
  async load(t) {
    if (t === this.getUnique() && this._getDataPromise)
      return await this._getDataPromise;
    this.resetState(), this.setUnique(t), this.loading.addState({ unique: _, message: `Loading ${this.getEntityType()} Details` }), this._getDataPromise = this.structure.loadType(t);
    const r = await this._getDataPromise, e = r.data;
    return e && (this._data.setPersisted(e), this.setIsNew(!1), this.observe(
      this.structure.ownerContentType,
      (n) => this.#n(n),
      "umbContentTypeDetailStoreObserver"
    )), this.loading.removeState(_), r;
  }
  #n(t) {
    t || this._data.clear();
  }
  /**
   * Creates the Content Type
   * @param { DetailModelType } currentData The current data
   * @param { UmbEntityModel } parent The parent entity
   * @memberof UmbContentTypeWorkspaceContextBase
   */
  async _create(t, r) {
    try {
      await this.structure.create(r?.unique), this._data.setPersisted(this.structure.getOwnerContentType());
      const e = await this.getContext(x);
      if (!e)
        throw new Error("Could not get the action event context");
      const n = new St({
        entityType: r.entityType,
        unique: r.unique
      });
      e.dispatchEvent(n), this.setIsNew(!1);
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * Updates the content type for the workspace
   * @memberof UmbContentTypeWorkspaceContextBase
   */
  async _update() {
    try {
      await this.structure.save(), this._data.setPersisted(this.structure.getOwnerContentType());
      const t = await this.getContext(x);
      if (!t)
        throw new Error("Could not get the action event context");
      const r = this.getUnique(), e = this.getEntityType(), n = new Mt({
        unique: r,
        entityType: e
      });
      t.dispatchEvent(n);
      const s = new Nt({
        unique: r,
        entityType: e,
        eventUnique: this._workspaceEventUnique
      });
      t.dispatchEvent(s);
    } catch (t) {
      console.error(t);
    }
  }
  /**
   * Gets the name of the content type
   * @returns { string | undefined } The name of the content type
   */
  getName() {
    return this.structure.getOwnerContentType()?.name;
  }
  /**
   * Sets the name of the content type
   * @param { string } name The name of the content type
   */
  setName(t) {
    this.structure.updateOwnerContentType({ name: t });
  }
  /**
   * Gets the alias of the content type
   * @returns { string | undefined } The alias of the content type
   */
  getAlias() {
    return this.structure.getOwnerContentType()?.alias;
  }
  /**
   * Sets the alias of the content type
   * @param { string } alias The alias of the content type
   */
  setAlias(t) {
    this.structure.updateOwnerContentType({ alias: t });
  }
  /**
   * Gets the description of the content type
   * @returns { string | undefined } The description of the content type
   */
  getDescription() {
    return this.structure.getOwnerContentType()?.description;
  }
  /**
   * Sets the description of the content type
   * @param { string } description The description of the content type
   */
  setDescription(t) {
    this.structure.updateOwnerContentType({ description: t });
  }
  /**
   * Gets the compositions of the content type
   * @returns { string | undefined } The icon of the content type
   */
  getCompositions() {
    return this.structure.getOwnerContentType()?.compositions;
  }
  /**
   * Sets the compositions of the content type
   * @param { string } compositions The compositions of the content type
   * @returns { void }
   */
  setCompositions(t) {
    this.structure.updateOwnerContentType({ compositions: t });
  }
  /**
   * Gets the icon of the content type
   * @returns { string | undefined } The icon of the content type
   */
  getIcon() {
    return this.structure.getOwnerContentType()?.icon;
  }
  // TODO: manage setting icon color alias?
  setIcon(t) {
    this.structure.updateOwnerContentType({ icon: t });
  }
  getData() {
    return this.structure.getOwnerContentType();
  }
  destroy() {
    this.structure.destroy(), super.destroy();
  }
}
export {
  le as UMB_COMPOSITION_PICKER_MODAL,
  de as UMB_CONTENT_TYPE_DESIGN_EDITOR_CONTEXT,
  st as UMB_CONTENT_TYPE_WORKSPACE_CONTEXT,
  ve as UMB_PROPERTY_STRUCTURE_WORKSPACE_CONTEXT,
  me as UMB_PROPERTY_TYPE_CONTEXT,
  se as UMB_WORKSPACE_CONTENT_TYPE_ALIAS_CONDITION_ALIAS,
  ce as UmbContentTypeContainerStructureHelper,
  fe as UmbContentTypeMoveRootGroupsIntoFirstTabHelper,
  Ce as UmbContentTypePropertyStructureHelper,
  Vt as UmbContentTypeStructureManager,
  oe as UmbContentTypeStructureRepositoryBase,
  ae as UmbContentTypeStructureServerDataSourceBase,
  ue as UmbContentTypeWorkspaceContextBase,
  m as UmbContentTypeWorkspaceEditorHeaderElement,
  g as UmbInputContentTypeCollectionConfigurationElement,
  ge as UmbPropertyTypeBasedPropertyElement
};
//# sourceMappingURL=index.js.map

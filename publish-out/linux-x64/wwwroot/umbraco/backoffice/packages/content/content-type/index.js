import { b as rt } from "../content-type-move-root-containers-into-first-tab-helper.class-BMcf-7X5.js";
import { d as ie, U as se, a as oe, c as ae } from "../content-type-move-root-containers-into-first-tab-helper.class-BMcf-7X5.js";
import { U as he, a as pe } from "../content-type-property-structure-helper.class-DttfFuly.js";
import { U as ce } from "../property-structure-workspace.context-token-Et7VqtUe.js";
import { UmbLitElement as x, umbFocus as nt } from "@umbraco-cms/backoffice/lit-element";
import { css as z, state as m, customElement as W, ifDefined as it, html as A, nothing as F, property as st } from "@umbraco-cms/backoffice/external/lit";
import { UMB_MODAL_MANAGER_CONTEXT as ot } from "@umbraco-cms/backoffice/modal";
import { UMB_ICON_PICKER_MODAL as at } from "@umbraco-cms/backoffice/icon";
import { umbBindToValidation as ut, UmbFormControlMixin as ht } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as pt } from "@umbraco-cms/backoffice/event";
import { UMB_DATA_TYPE_PICKER_FLOW_DATA_TYPE_PICKER_MODAL as lt, UMB_DATATYPE_WORKSPACE_MODAL as ct, UMB_DATA_TYPE_ENTITY_TYPE as L } from "@umbraco-cms/backoffice/data-type";
import { UmbModalRouteRegistrationController as D } from "@umbraco-cms/backoffice/router";
import { UmbRepositoryBase as dt, UmbRepositoryDetailsManager as ft } from "@umbraco-cms/backoffice/repository";
import { tryExecute as yt } from "@umbraco-cms/backoffice/resources";
import { UmbId as M } from "@umbraco-cms/backoffice/id";
import { UmbArrayState as R, createObservablePart as h, appendToFrozenArray as U, partialUpdateFrozenArray as $, filterFrozenArray as mt } from "@umbraco-cms/backoffice/observable-api";
import { incrementString as Ct } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as wt } from "@umbraco-cms/backoffice/class-api";
import { UmbExtensionApiInitializer as Tt } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as vt } from "@umbraco-cms/backoffice/extension-registry";
import { firstValueFrom as I } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbEntityDetailWorkspaceContextBase as _t } from "@umbraco-cms/backoffice/workspace";
import { UMB_ACTION_EVENT_CONTEXT as V } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as Ot, UmbRequestReloadStructureForEntityEvent as gt } from "@umbraco-cms/backoffice/entity-action";
import { U as fe } from "../property-type-based-property.element-BMqRIO7K.js";
const Zt = "Umb.Condition.WorkspaceContentTypeAlias";
var bt = Object.defineProperty, Pt = Object.getOwnPropertyDescriptor, Y = (i) => {
  throw TypeError(i);
}, C = (i, t, r, e) => {
  for (var n = e > 1 ? void 0 : e ? Pt(t, r) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (e ? o(t, r, n) : o(n)) || n);
  return e && n && bt(t, r, n), n;
}, S = (i, t, r) => t.has(i) || Y("Cannot " + r), l = (i, t, r) => (S(i, t, "read from private field"), t.get(i)), q = (i, t, r) => t.has(i) ? Y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, r), Et = (i, t, r, e) => (S(i, t, "write to private field"), t.set(i, r), r), P = (i, t, r) => (S(i, t, "access private method"), r), u, w, H, K, G;
let y = class extends x {
  constructor() {
    super(), q(this, w), q(this, u), this.consumeContext(rt, (i) => {
      Et(this, u, i), P(this, w, H).call(this);
    });
  }
  async _handleIconClick() {
    const [i, t] = this._icon?.replace("color-", "")?.split(" ") ?? [], r = await this.getContext(ot);
    if (!r)
      throw new Error("Modal manager not found.");
    r.open(this, at, {
      value: {
        icon: i,
        color: t
      }
    })?.onSubmit().then((n) => {
      n.icon && n.color ? l(this, u)?.setIcon(`${n.icon} color-${n.color}`) : n.icon && l(this, u)?.setIcon(n.icon);
    });
  }
  render() {
    return A`
			<div id="header">
				<uui-button id="icon" compact label="icon" look="outline" @click=${this._handleIconClick}>
					<umb-icon name=${it(this._icon)}></umb-icon>
				</uui-button>

				<div id="editors">
					<umb-input-with-alias
						id="name"
						label=${this.localize.term("placeholders_entername")}
						.value=${this._name}
						.alias=${this._alias}
						?auto-generate-alias=${this._isNew}
						@change=${P(this, w, K)}
						required
						${ut(this, "$.name", this._name)}
						${nt()}>
					</umb-input-with-alias>

					<uui-input
						id="description"
						.label=${this.localize.term("placeholders_enterDescription")}
						.value=${this._description}
						.placeholder=${this.localize.term("placeholders_enterDescription")}
						@input=${P(this, w, G)}></uui-input>
				</div>
			</div>
		`;
  }
};
u = /* @__PURE__ */ new WeakMap();
w = /* @__PURE__ */ new WeakSet();
H = function() {
  l(this, u) && (this.observe(l(this, u).name, (i) => this._name = i, "_observeName"), this.observe(l(this, u).alias, (i) => this._alias = i, "_observeAlias"), this.observe(
    l(this, u).description,
    (i) => this._description = i,
    "_observeDescription"
  ), this.observe(l(this, u).icon, (i) => this._icon = i, "_observeIcon"), this.observe(l(this, u).isNew, (i) => this._isNew = i, "_observeIsNew"));
};
K = function(i) {
  l(this, u)?.setName(i.target.value ?? ""), l(this, u)?.setAlias(i.target.alias ?? "");
};
G = function(i) {
  l(this, u)?.setDescription(i.target.value.toString() ?? "");
};
y.styles = [
  z`
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
			}

			#name {
				width: 100%;
				z-index: 1;
			}

			#description {
				width: 100%;
				margin-top: 1px;
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
C([
  m()
], y.prototype, "_name", 2);
C([
  m()
], y.prototype, "_alias", 2);
C([
  m()
], y.prototype, "_description", 2);
C([
  m()
], y.prototype, "_icon", 2);
C([
  m()
], y.prototype, "_isNew", 2);
y = C([
  W("umb-content-type-workspace-editor-header")
], y);
var At = Object.defineProperty, St = Object.getOwnPropertyDescriptor, X = (i) => {
  throw TypeError(i);
}, N = (i, t, r, e) => {
  for (var n = e > 1 ? void 0 : e ? St(t, r) : t, s = i.length - 1, o; s >= 0; s--)
    (o = i[s]) && (n = (e ? o(t, r, n) : o(n)) || n);
  return e && n && At(t, r, n), n;
}, B = (i, t, r) => t.has(i) || X("Cannot " + r), O = (i, t, r) => (B(i, t, "read from private field"), r ? r.call(i) : t.get(i)), E = (i, t, r) => t.has(i) ? X("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, r), Nt = (i, t, r, e) => (B(i, t, "write to private field"), t.set(i, r), r), f = (i, t, r) => (B(i, t, "access private method"), r), T, g, c, b, Q, J, Z, j, tt;
let v = class extends ht(x) {
  constructor() {
    super(), E(this, c), E(this, T), E(this, g, "Umb.PropertyEditorUi.Collection"), new D(this, lt).addAdditionalPath(":uiAlias").onSetup((i) => ({
      data: {
        propertyEditorUiAlias: i.uiAlias
      },
      value: void 0
    })).onSubmit((i) => {
      i?.createNewWithPropertyEditorUiAlias ? f(this, c, J).call(this) : f(this, c, b).call(this, i?.dataTypeId ?? this.defaultValue ?? "");
    }).observeRouteBuilder((i) => {
      this._dataTypePickerModalPath = i({ uiAlias: O(this, g) });
    }), Nt(this, T, new D(this, ct).addAdditionalPath(":uiAlias").onSetup((i) => ({ data: { entityType: L, preset: { editorUiAlias: i.uiAlias } } })).onSubmit((i) => {
      f(this, c, b).call(this, i?.unique ?? this.defaultValue ?? "");
    }));
  }
  getFormElement() {
  }
  render() {
    return this.value ? f(this, c, tt).call(this) : f(this, c, j).call(this);
  }
};
T = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakSet();
b = function(i) {
  this.value = i, this.dispatchEvent(new pt());
};
Q = function() {
  f(this, c, b).call(this, void 0);
};
J = function() {
  O(this, T).open(
    { uiAlias: O(this, g) },
    `create/parent/${L}/null`
  );
};
Z = function() {
  O(this, T)?.open({}, `edit/${this.value}`);
};
j = function() {
  return this._dataTypePickerModalPath ? A`
			<uui-button
				id="create-button"
				color="default"
				look="placeholder"
				label=${this.localize.term("collection_addCollectionConfiguration")}
				href=${this._dataTypePickerModalPath}></uui-button>
		` : F;
};
tt = function() {
  return !this.value || !this._dataTypePickerModalPath ? F : A`
			<uui-ref-list>
				<umb-ref-data-type standalone data-type-id=${this.value} @open=${f(this, c, Z)}>
					<uui-action-bar slot="actions">
						<uui-button
							label=${this.localize.term("general_choose")}
							href=${this._dataTypePickerModalPath}></uui-button>
						<uui-button @click=${f(this, c, Q)} label=${this.localize.term("general_remove")}></uui-button>
					</uui-action-bar>
				</umb-ref-data-type>
			</uui-ref-list>
		`;
};
v.styles = [
  z`
			#create-button {
				width: 100%;
			}
		`
];
N([
  m()
], v.prototype, "_dataTypePickerModalPath", 2);
N([
  st({ attribute: "default-value" })
], v.prototype, "defaultValue", 2);
v = N([
  W("umb-input-content-type-collection-configuration")
], v);
class jt extends dt {
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
class te {
  #n;
  #u;
  #e;
  /**
   * Creates an instance of UmbContentTypeStructureServerDataSourceBase.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @param args
   * @memberof UmbItemServerDataSourceBase
   */
  constructor(t, r) {
    this.#n = t, this.#u = r.getAllowedChildrenOf, this.#e = r.mapper;
  }
  /**
   * Returns a promise with the allowed content types for the given unique
   * @param {string} unique
   * @param parentContentUnique
   * @returns {*}
   * @memberof UmbContentTypeStructureServerDataSourceBase
   */
  async getAllowedChildrenOf(t, r) {
    const { data: e, error: n } = await yt(this.#n, this.#u(t, r));
    return e ? { data: { items: e.items.map((o) => this.#e(o)), total: e.total } } : { error: n };
  }
}
const k = (i, t, r) => r.indexOf(i) === t;
class Bt extends wt {
  constructor(t, r) {
    super(t), this.#e = new Promise((e, n) => {
      this.#n = e, this.#u = n;
    }), this.#i = new R([], (e) => e), this.#h = new Promise((e) => {
      this.#s ? e(this.#s) : this.#p = e;
    }), this.#l = new Array(), this.#t = new R([], (e) => e.unique), this.contentTypes = this.#t.asObservable(), this.ownerContentType = this.#t.asObservablePart(
      (e) => e.find((n) => n.unique === this.#r)
    ), this.ownerContentTypeAlias = h(this.ownerContentType, (e) => e?.alias), this.ownerContentTypeName = h(this.ownerContentType, (e) => e?.name), this.ownerContentTypeCompositions = h(this.ownerContentType, (e) => e?.compositions), this.contentTypeCompositions = this.#t.asObservablePart((e) => e.flatMap((n) => n.compositions ?? [])), this.#a = this.#t.asObservablePart((e) => e.flatMap((n) => n.containers ?? [])), this.contentTypeProperties = this.#t.asObservablePart((e) => e.flatMap((n) => n.properties ?? [])), this.contentTypeDataTypeUniques = this.#t.asObservablePart((e) => e.flatMap((n) => n.properties?.map((s) => s.dataType.unique) ?? []).filter(k)), this.contentTypeHasProperties = this.#t.asObservablePart((e) => e.some((n) => n.properties.length > 0)), this.contentTypePropertyAliases = h(
      this.contentTypeProperties,
      (e) => e.map((n) => n.alias)
    ), this.contentTypeUniques = this.#t.asObservablePart((e) => e.map((n) => n.unique)), this.contentTypeAliases = this.#t.asObservablePart((e) => e.map((n) => n.alias)), this.variesByCulture = h(this.ownerContentType, (e) => e?.variesByCulture), this.variesBySegment = h(this.ownerContentType, (e) => e?.variesBySegment), typeof r == "string" ? this.#d(r) : (this.#s = r, this.#p?.(r)), this.#h.then(() => {
      if (!this.#s)
        throw new Error(
          "Content Type Structure Manager failed cause it could not initialize or receive the Content Type Detail Repository."
        );
      this.#o = new ft(this, r), this.observe(
        this.#o.entries,
        (e) => {
          const n = e.filter(
            (o) => !(this.#i.getHasOne(o.unique) && this.#t.getHasOne(o.unique))
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
  #u;
  #e;
  #i;
  #s;
  #p;
  #h;
  #o;
  async whenLoaded() {
    return await this.#e, !0;
  }
  #r;
  #l;
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
      return this.#u?.(`Content Type structure manager could not load: ${t}`), Promise.reject(
        new Error("The unique identifier is missing. A valid unique identifier is required to load the content type.")
      );
    this.#o.setUniques([t]);
    const r = await this.observe(this.#o.entryByUnique(t)).asPromise();
    return this.#n?.(r), await this.#e, { data: r, asObservable: () => this.ownerContentType };
  }
  async createScaffold(t) {
    await this.#h, this.clear();
    const r = await this.#s.createScaffold(t), { data: e } = r;
    return e ? (this.#r = e.unique, this.#t.appendOne(e), this.#o.addEntry(e), this.#n?.(e), r) : (this.#u?.("Content Type structure manager could not create scaffold"), { error: r.error });
  }
  /**
   * Save the owner content type. Notice this is for a Content Type that is already stored on the server.
   * @returns {Promise} - A promise that will be resolved when the content type is saved.
   */
  async save() {
    await this.#h;
    const t = this.getOwnerContentType();
    if (!t || !t.unique) throw new Error("Could not find the Content Type to save");
    const { error: r, data: e } = await this.#s.save(t);
    if (r || !e)
      throw r?.message ?? "Repository did not return data after save.";
    return this.#t.updateOne(t.unique, e), this.#o.addEntry(e), e;
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
    const { error: e, data: n } = await this.#s.create(r, t);
    if (e || !n)
      throw e?.message ?? "Repository did not return data after create.";
    return this.#t.updateOne(r.unique, n), this.#o.addEntry(n), n;
  }
  async #c(t) {
    await Promise.resolve();
    const r = this.getOwnerContentTypeUnique();
    if (!r) return;
    const e = t?.map((s) => s.contentType.unique) ?? [], n = [r, ...e];
    this.#t.filter((s) => n.includes(s.unique)), this.#o.setUniques(n);
  }
  /** Public methods for consuming structure: */
  ownerContentTypeObservablePart(t) {
    return h(this.ownerContentType, t);
  }
  getOwnerContentType() {
    return this.#t.getValue().find((t) => t.unique === this.#r);
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
    this.#i.appendOne(this.#r), this.#t.updateOne(this.#r, t);
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
    await this.#e, r = r ?? this.#r, this.#i.appendOne(r);
    const e = (await I(this.#a)).find((o) => o.id === t);
    if (!e) throw new Error("Container to clone was not found");
    const n = {
      ...e,
      id: M.new()
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
        this.#i.appendOne(t), this.updateContainer(null, n.id, {
          name: this.makeContainerNameUniqueForOwnerContentType(n.id, s, r, e) ?? s
        });
      }
    });
  }
  async createContainer(t, r = null, e = "Group", n) {
    if (await this.#e, t = t ?? this.#r, this.#i.appendOne(t), r) {
      const o = await this.ensureContainerOf(r, t);
      if (!o)
        throw new Error("Parent container for creating a new container could not be found or created");
      r = o.id;
    }
    const s = {
      id: M.new(),
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
      const d = await this.ensureContainerOf(e.parent.id, t);
      if (!d)
        throw new Error("Container for inserting property could not be found or created");
      e.parent.id = d.id;
    }
    this.ensureContainerNames(t, n, s);
    const o = this.#t.getValue().find((d) => d.unique === t)?.containers ?? [], a = U(o, e, (d) => d.id === e.id);
    return this.#t.updateOne(t, { containers: a }), e;
  }
  makeEmptyContainerName(t, r, e = null) {
    return this.makeContainerNameUniqueForOwnerContentType(t, "Unnamed", r, e) ?? "Unnamed";
  }
  makeContainerNameUniqueForOwnerContentType(t, r, e, n = null) {
    const s = this.getOwnerContainers(e, n);
    if (!s)
      return null;
    let o = r;
    for (; s.find((a) => a.name === o && a.id !== t); )
      o = Ct(o);
    return o === r ? null : o;
  }
  async updateContainer(t, r, e) {
    await this.#e, t = t ?? this.#r, this.#i.appendOne(t);
    const n = this.#t.getValue().find((a) => a.unique === t)?.containers ?? [];
    n.find((a) => a.id === r) || console.error(
      "We do not have this container on the requested id, we should clone the container and append the change to it. [NL]"
    );
    const o = $(
      n,
      e,
      (a) => a.id === r
    );
    this.#t.updateOne(t, { containers: o });
  }
  async removeContainer(t, r = null, e) {
    await this.#e, t = t ?? this.#r, this.#i.appendOne(t);
    const n = this.#t.getValue().find((p) => p.unique === t);
    if (!n)
      throw new Error("Could not find the Content Type to remove container from");
    const s = n.containers ?? [], o = s.filter((p) => p.id === r || p.parent?.id === r).map((p) => p.id), d = { containers: s.filter((p) => p.id !== r && p.parent?.id !== r) };
    e?.preventRemovingProperties !== !0 && (d.properties = n.properties.filter(
      (p) => p.container ? !o.some((et) => et === p.container?.id) : !0
    )), this.#t.updateOne(t, d);
  }
  async insertProperty(t, r) {
    if (await this.#e, t = t ?? this.#r, this.#i.appendOne(t), r.container) {
      this.#t.mute();
      const s = await this.ensureContainerOf(r.container.id, t);
      if (this.#t.unmute(), !s)
        throw new Error("Container for inserting property could not be found or created");
      r = { ...r, container: { id: s.id } };
    }
    r.sortOrder === void 0 && (r.sortOrder = 0);
    const e = this.#t.getValue().find((s) => s.unique === t)?.properties ?? [], n = U(e, r, (s) => s.unique === r.unique);
    this.#t.updateOne(t, { properties: n });
  }
  async removeProperty(t, r) {
    await this.#e, t = t ?? this.#r, this.#i.appendOne(t);
    const e = this.#t.getValue().find((s) => s.unique === t)?.properties ?? [], n = mt(e, (s) => s.unique !== r);
    this.#t.updateOne(t, { properties: n });
  }
  async updateProperty(t, r, e) {
    await this.#e, t = t ?? this.#r, this.#i.appendOne(t);
    const n = this.#t.getValue().find((o) => o.unique === t)?.properties ?? [], s = $(n, e, (o) => o.unique === r);
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
  rootContainers(t) {
    return h(this.#a, (r) => r.filter((e) => e.parent === null && e.type === t));
  }
  async getRootContainers(t) {
    return (await I(this.#a)).filter(
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
    return this.getOwnerContentType()?.containers?.filter((r) => r.id === t);
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
  #d(t) {
    if (!t) throw new Error("Content Type structure manager must have a repository alias.");
    new Tt(
      this,
      vt,
      t,
      [this._host],
      (r, e) => {
        this.#s = r ? e.api : void 0, this.#s && this.#p?.(this.#s);
      }
    );
  }
  /**
   * Get all property aliases for the content type including inherited and composed content types.
   * @returns {Promise<Array<string>>} - A promise that will be resolved with the list of all content type property aliases.
   */
  async getContentTypePropertyAliases() {
    return this.#t.getValue().flatMap((t) => t.properties?.map((r) => r.alias) ?? []).filter(k);
  }
  clear() {
    this.#l.forEach((t) => t.destroy()), this.#l = [], this.#o?.clear(), this.#t.setValue([]), this.#r = void 0;
  }
  destroy() {
    this.#t.destroy(), super.destroy();
  }
}
const _ = "umbLoadingContentTypeDetail";
class ee extends _t {
  constructor(t, r) {
    super(t, r), this.IS_CONTENT_TYPE_WORKSPACE_CONTEXT = !0, this.structure = new Bt(this, r.detailRepositoryAlias), this.name = this.structure.ownerContentTypeObservablePart((e) => e?.name), this.alias = this.structure.ownerContentTypeObservablePart((e) => e?.alias), this.description = this.structure.ownerContentTypeObservablePart((e) => e?.description), this.icon = this.structure.ownerContentTypeObservablePart((e) => e?.icon), this.allowedAtRoot = this.structure.ownerContentTypeObservablePart((e) => e?.allowedAtRoot), this.variesByCulture = this.structure.ownerContentTypeObservablePart((e) => e?.variesByCulture), this.variesBySegment = this.structure.ownerContentTypeObservablePart((e) => e?.variesBySegment), this.isElement = this.structure.ownerContentTypeObservablePart((e) => e?.isElement), this.allowedContentTypes = this.structure.ownerContentTypeObservablePart((e) => e?.allowedContentTypes), this.compositions = this.structure.ownerContentTypeObservablePart((e) => e?.compositions), this.collection = this.structure.ownerContentTypeObservablePart((e) => e?.collection), this.observe(this.structure.ownerContentType, (e) => this._data.setCurrent(e));
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
    return e && (e = await this._scaffoldProcessData(e), this.modalContext && (e = { ...e, ...this.modalContext.data.preset }), this.setUnique(e.unique), this.setIsNew(!0), this._data.setPersisted(e)), this.loading.removeState(_), e;
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
      const e = await this.getContext(V);
      if (!e)
        throw new Error("Could not get the action event context");
      const n = new Ot({
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
      const t = await this.getContext(V);
      if (!t)
        throw new Error("Could not get the action event context");
      const r = new gt({
        unique: this.getUnique(),
        entityType: this.getEntityType()
      });
      t.dispatchEvent(r);
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
  ie as UMB_COMPOSITION_PICKER_MODAL,
  se as UMB_CONTENT_TYPE_DESIGN_EDITOR_CONTEXT,
  rt as UMB_CONTENT_TYPE_WORKSPACE_CONTEXT,
  ce as UMB_PROPERTY_STRUCTURE_WORKSPACE_CONTEXT,
  he as UMB_PROPERTY_TYPE_CONTEXT,
  Zt as UMB_WORKSPACE_CONTENT_TYPE_ALIAS_CONDITION_ALIAS,
  oe as UmbContentTypeContainerStructureHelper,
  ae as UmbContentTypeMoveRootGroupsIntoFirstTabHelper,
  pe as UmbContentTypePropertyStructureHelper,
  Bt as UmbContentTypeStructureManager,
  jt as UmbContentTypeStructureRepositoryBase,
  te as UmbContentTypeStructureServerDataSourceBase,
  ee as UmbContentTypeWorkspaceContextBase,
  y as UmbContentTypeWorkspaceEditorHeaderElement,
  v as UmbInputContentTypeCollectionConfigurationElement,
  fe as UmbPropertyTypeBasedPropertyElement
};
//# sourceMappingURL=index.js.map

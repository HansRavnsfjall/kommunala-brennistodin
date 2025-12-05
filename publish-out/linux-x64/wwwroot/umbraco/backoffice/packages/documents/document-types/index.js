import { t as M, o as Y, e as L, b as P, u as B, v as b, c as v } from "../constants-D9L2jSGX.js";
import { g as de, f as ye, C as Ae, w as Ce, p as Re, D as Se, i as De, n as Ie, r as fe, I as Ne, l as Ye, s as Le, J as Be, K as be, F as ve, h as ge, z as xe, E as we, j as We, a as Ke, N as Fe, H as qe, L as $e, M as ke, U as He, G as Xe, d as ze, q as Ve, k as Ge, B as je, x as Je, m as Qe, y as Ze, A as et } from "../constants-D9L2jSGX.js";
import { UmbModalToken as g } from "@umbraco-cms/backoffice/modal";
import { UMB_TREE_PICKER_MODAL_ALIAS as x } from "@umbraco-cms/backoffice/tree";
import { UmbPickerInputContext as w } from "@umbraco-cms/backoffice/picker-input";
import { html as u, nothing as U, repeat as W, when as K, css as F, property as a, state as d, customElement as q } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as $ } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as k } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as H } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as X } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as z } from "@umbraco-cms/backoffice/sorter";
import { UmbFormControlMixin as V } from "@umbraco-cms/backoffice/validation";
import { UmbDocumentTypeDetailRepository as nt } from "../document-type-detail.repository-V__Mk04y.js";
import { UmbDocumentTypeItemRepository as st } from "../document-type-item.repository-CK9-9XMP.js";
import { DocumentTypeService as h } from "@umbraco-cms/backoffice/external/backend-api";
import { UmbContentTypeStructureServerDataSourceBase as G, UmbContentTypeStructureRepositoryBase as j } from "@umbraco-cms/backoffice/content-type";
const he = "Umb.Repository.DocumentType.Structure", J = new g(x, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: "Umb.Tree.DocumentType",
    createAction: {
      label: "#content_createEmpty",
      modalData: {
        entityType: P,
        preset: {}
      },
      extendWithPathPattern: L,
      extendWithPathParams: {
        parentEntityType: Y,
        parentUnique: null,
        presetAlias: null
      }
    },
    search: {
      providerAlias: M
    }
  }
});
class Q extends w {
  constructor(t) {
    super(t, B, J);
  }
  async openPicker(t, n) {
    if (n?.documentTypesOnly && n?.elementTypesOnly)
      throw new Error("You cannot set both documentTypesOnly and elementTypesOnly to true.");
    const l = n?.elementTypesOnly ?? (n?.documentTypesOnly === !0 ? !1 : void 0), _ = {
      ...t
    };
    t?.search || (_.search = {
      providerAlias: M,
      ...t?.search
    }), _.search.queryParams = {
      isElementType: l,
      ...t?.search?.queryParams
    }, await super.openPicker(_);
  }
}
var Z = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, o = (e, t, n, l) => {
  for (var _ = l > 1 ? void 0 : l ? ee(t, n) : t, m = e.length - 1, O; m >= 0; m--)
    (O = e[m]) && (_ = (l ? O(t, n, _) : O(_)) || _);
  return l && _ && Z(t, n, _), _;
}, A = (e, t, n) => t.has(e) || y("Cannot " + n), i = (e, t, n) => (A(e, t, "read from private field"), n ? n.call(e) : t.get(e)), c = (e, t, n) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), E = (e, t, n) => (A(e, t, "access private method"), n), p, r, T, C, R, S, D, I, f, N;
let s = class extends V(
  H,
  void 0
) {
  constructor() {
    super(), c(this, T), c(this, p, new z(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputDocumentType",
      itemSelector: "uui-ref-node-document-type",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new k());
      }
    })), this.elementTypesOnly = !1, this.documentTypesOnly = !1, this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this._editPath = "", c(this, r, new Q(this)), new X(this, b).addAdditionalPath("document-type").onSetup(() => ({})).observeRouteBuilder((e) => {
      this._editPath = e({});
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && i(this, r).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && i(this, r).getSelection().length > this.max
    ), this.observe(i(this, r).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(i(this, r).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    i(this, r).min = e;
  }
  get min() {
    return i(this, r).min;
  }
  set max(e) {
    i(this, r).max = e;
  }
  get max() {
    return i(this, r).max;
  }
  set selection(e) {
    i(this, r).setSelection(e), i(this, p).setModel(e);
  }
  get selection() {
    return i(this, r).getSelection();
  }
  set value(e) {
    this.selection = $(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return u`${E(this, T, I).call(this)} ${E(this, T, D).call(this)}`;
  }
};
p = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakSet();
C = function() {
  if (this.documentTypesOnly)
    return (e) => !e.isFolder && e.isElement === !1;
  if (this.elementTypesOnly)
    return (e) => e.isElement;
};
R = function() {
  if (this.documentTypesOnly && this.elementTypesOnly)
    throw new Error("You cannot set both documentTypesOnly and elementTypesOnly to true.");
  const e = {};
  this.documentTypesOnly ? e.documentTypesOnly = !0 : this.elementTypesOnly && (e.elementTypesOnly = !0), i(this, r).openPicker(
    {
      hideTreeRoot: !0,
      pickableFilter: E(this, T, C).call(this)
    },
    e
  );
};
S = function(e) {
  i(this, r).requestRemoveItem(e.unique);
};
D = function() {
  return this.readonly || this.max > 0 && this.selection.length >= this.max ? U : u`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${E(this, T, R)}
				label="${this.localize.term("general_choose")}"></uui-button>
		`;
};
I = function() {
  return this._items ? u`
			<uui-ref-list>
				${W(
    this._items,
    (e) => e.unique,
    (e) => E(this, T, f).call(this, e)
  )}
			</uui-ref-list>
		` : U;
};
f = function(e) {
  if (!e.unique) return;
  const t = this._editPath + v.generateLocal({ unique: e.unique });
  return u`
			<uui-ref-node-document-type id=${e.unique} name=${this.localize.string(e.name)} href=${t}>
				${E(this, T, N).call(this, e)}
				<uui-action-bar slot="actions">
					${K(
    !this.readonly,
    () => u`
							<uui-button
								label=${this.localize.term("general_remove")}
								@click=${() => E(this, T, S).call(this, e)}></uui-button>
						`
  )}
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
N = function(e) {
  if (e.icon)
    return u`<umb-icon slot="icon" name=${e.icon}></umb-icon>`;
};
s.styles = [
  F`
			#btn-add {
				width: 100%;
			}
		`
];
o([
  a({ attribute: !1 })
], s.prototype, "elementTypesOnly", 2);
o([
  a({ attribute: !1 })
], s.prototype, "documentTypesOnly", 2);
o([
  a({ type: Number })
], s.prototype, "min", 1);
o([
  a({ type: String, attribute: "min-message" })
], s.prototype, "minMessage", 2);
o([
  a({ type: Number })
], s.prototype, "max", 1);
o([
  a({ type: String, attribute: "min-message" })
], s.prototype, "maxMessage", 2);
o([
  a({ type: Array })
], s.prototype, "selection", 1);
o([
  a({ type: String })
], s.prototype, "value", 1);
o([
  a({ type: Boolean, attribute: "readonly" })
], s.prototype, "readonly", 2);
o([
  d()
], s.prototype, "_items", 2);
o([
  d()
], s.prototype, "_editPath", 2);
s = o([
  q("umb-input-document-type")
], s);
class te extends G {
  constructor(t) {
    super(t, { getAllowedChildrenOf: ne, mapper: re });
  }
}
const ne = (e, t) => e ? h.getDocumentTypeByIdAllowedChildren({
  path: { id: e },
  query: { parentContentKey: t ?? void 0 }
}) : h.getDocumentTypeAllowedAtRoot({}), re = (e) => ({
  unique: e.id,
  entityType: P,
  name: e.name,
  description: e.description || null,
  icon: e.icon || null
});
class Me extends j {
  constructor(t) {
    super(t, te);
  }
}
export {
  L as UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PATH_PATTERN,
  de as UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PRESET_ELEMENT,
  ye as UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PRESET_TEMPLATE,
  Ae as UMB_DOCUMENT_TYPE_COMPOSITION_REPOSITORY_ALIAS,
  Ce as UMB_DOCUMENT_TYPE_CREATE_OPTIONS_MODAL,
  Re as UMB_DOCUMENT_TYPE_DETAIL_REPOSITORY_ALIAS,
  Se as UMB_DOCUMENT_TYPE_DETAIL_STORE_ALIAS,
  De as UMB_DOCUMENT_TYPE_DETAIL_STORE_CONTEXT,
  P as UMB_DOCUMENT_TYPE_ENTITY_TYPE,
  Ie as UMB_DOCUMENT_TYPE_FOLDER_ENTITY_TYPE,
  fe as UMB_DOCUMENT_TYPE_FOLDER_REPOSITORY_ALIAS,
  Ne as UMB_DOCUMENT_TYPE_FOLDER_STORE_ALIAS,
  Ye as UMB_DOCUMENT_TYPE_FOLDER_STORE_CONTEXT,
  Le as UMB_DOCUMENT_TYPE_FOLDER_WORKSPACE_ALIAS,
  Be as UMB_DOCUMENT_TYPE_FOLDER_WORKSPACE_CONTEXT,
  be as UMB_DOCUMENT_TYPE_FOLDER_WORKSPACE_PATH,
  ve as UMB_DOCUMENT_TYPE_GLOBAL_SEARCH_ALIAS,
  ge as UMB_DOCUMENT_TYPE_IMPORT_MODAL,
  xe as UMB_DOCUMENT_TYPE_IMPORT_REPOSITORY_ALIAS,
  B as UMB_DOCUMENT_TYPE_ITEM_REPOSITORY_ALIAS,
  we as UMB_DOCUMENT_TYPE_ITEM_STORE_ALIAS,
  We as UMB_DOCUMENT_TYPE_ITEM_STORE_CONTEXT,
  J as UMB_DOCUMENT_TYPE_PICKER_MODAL,
  Ke as UMB_DOCUMENT_TYPE_PROPERTY_TYPE_ENTITY_TYPE,
  Y as UMB_DOCUMENT_TYPE_ROOT_ENTITY_TYPE,
  Fe as UMB_DOCUMENT_TYPE_ROOT_WORKSPACE_ALIAS,
  M as UMB_DOCUMENT_TYPE_SEARCH_PROVIDER_ALIAS,
  he as UMB_DOCUMENT_TYPE_STRUCTURE_REPOSITORY_ALIAS,
  qe as UMB_DOCUMENT_TYPE_TREE_ALIAS,
  $e as UMB_DOCUMENT_TYPE_TREE_ITEM_CHILDREN_COLLECTION_ALIAS,
  ke as UMB_DOCUMENT_TYPE_TREE_ITEM_CHILDREN_COLLECTION_REPOSITORY_ALIAS,
  He as UMB_DOCUMENT_TYPE_TREE_REPOSITORY_ALIAS,
  Xe as UMB_DOCUMENT_TYPE_TREE_STORE_ALIAS,
  ze as UMB_DOCUMENT_TYPE_TREE_STORE_CONTEXT,
  Ve as UMB_DOCUMENT_TYPE_WORKSPACE_ALIAS,
  Ge as UMB_DOCUMENT_TYPE_WORKSPACE_CONTEXT,
  b as UMB_DOCUMENT_TYPE_WORKSPACE_MODAL,
  je as UMB_DOCUMENT_TYPE_WORKSPACE_PATH,
  Je as UMB_DUPLICATE_DOCUMENT_TYPE_REPOSITORY_ALIAS,
  Qe as UMB_EDIT_DOCUMENT_TYPE_FOLDER_WORKSPACE_PATH_PATTERN,
  v as UMB_EDIT_DOCUMENT_TYPE_WORKSPACE_PATH_PATTERN,
  Ze as UMB_EXPORT_DOCUMENT_TYPE_REPOSITORY_ALIAS,
  et as UMB_MOVE_DOCUMENT_TYPE_REPOSITORY_ALIAS,
  nt as UmbDocumentTypeDetailRepository,
  st as UmbDocumentTypeItemRepository,
  Q as UmbDocumentTypePickerInputContext,
  Me as UmbDocumentTypeStructureRepository,
  s as UmbInputDocumentTypeElement
};
//# sourceMappingURL=index.js.map

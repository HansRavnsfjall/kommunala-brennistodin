import { r as B, s as C, b as g } from "../constants-DTH5dSDc.js";
import { j as ce, u as Pe, l as he, c as Oe, v as Re, C as Se, t as Ue, o as ye, D as fe, h as De, m as Ye, f as Be, J as Ce, k as ge, q as Le, K as be, L as ve, G as xe, g as we, w as Ne, E as Fe, i as We, z as Ke, a as $e, n as qe, y as He, B as ke, F as Xe, I as ze, M as Ve, N as Ge, U as je, H as Je, d as Qe, p as Ze, e as et, A as tt, x as rt } from "../constants-DTH5dSDc.js";
import { MediaTypeService as A } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/repository";
import { UmbPickerInputContext as L } from "@umbraco-cms/backoffice/picker-input";
import { html as M, nothing as P, repeat as b, css as v, property as u, state as h, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { splitStringToArray as w } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as N } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as F } from "@umbraco-cms/backoffice/lit-element";
import { UMB_WORKSPACE_MODAL as W } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as K } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as $ } from "@umbraco-cms/backoffice/sorter";
import { UmbFormControlMixin as q } from "@umbraco-cms/backoffice/validation";
import { U as st, a as _t } from "../media-type-detail.repository-CZkUFcVY.js";
import { UmbMediaTypeItemRepository as ot } from "../media-type-item.repository-C3nDPj57.js";
import { UmbContentTypeStructureServerDataSourceBase as H, UmbContentTypeStructureRepositoryBase as k } from "@umbraco-cms/backoffice/content-type";
import { UmbMediaTypeFolderRepository as Et } from "../media-type-folder.repository-dIlFqffv.js";
const le = "Umb.Repository.MediaType.Structure";
class X extends L {
  constructor(t) {
    super(t, B, C);
  }
}
var z = Object.defineProperty, V = Object.getOwnPropertyDescriptor, O = (e) => {
  throw TypeError(e);
}, a = (e, t, r, _) => {
  for (var o = _ > 1 ? void 0 : _ ? V(t, r) : t, l = e.length - 1, p; l >= 0; l--)
    (p = e[l]) && (o = (_ ? p(t, r, o) : p(o)) || o);
  return _ && o && z(t, r, o), o;
}, R = (e, t, r) => t.has(e) || O("Cannot " + r), s = (e, t, r) => (R(e, t, "read from private field"), r ? r.call(e) : t.get(e)), d = (e, t, r) => t.has(e) ? O("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), T = (e, t, r) => (R(e, t, "access private method"), r), m, i, E, S, U, y, f, D, Y;
let n = class extends q(
  F
) {
  constructor() {
    super(), d(this, E), d(this, m, new $(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputMediaType",
      itemSelector: "uui-ref-node-document-type",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new N());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this._editPath = "", d(this, i, new X(this)), new K(this, W).addAdditionalPath("media-type").onSetup(() => ({ data: { entityType: "media-type", preset: {} } })).observeRouteBuilder((e) => {
      this._editPath = e({});
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && s(this, i).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && s(this, i).getSelection().length > this.max
    ), this.observe(s(this, i).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(s(this, i).selectedItems, (e) => this._items = e, "_observerItems");
  }
  set min(e) {
    s(this, i).min = e;
  }
  get min() {
    return s(this, i).min;
  }
  set max(e) {
    s(this, i).max = e;
  }
  get max() {
    return s(this, i).max;
  }
  set selection(e) {
    s(this, i).setSelection(e), s(this, m).setModel(e);
  }
  get selection() {
    return s(this, i).getSelection();
  }
  set value(e) {
    this.selection = w(e);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  getFormElement() {
  }
  render() {
    return M`${T(this, E, f).call(this)} ${T(this, E, y).call(this)}`;
  }
};
m = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakSet();
S = function() {
  s(this, i).openPicker({
    hideTreeRoot: !0
  });
};
U = function(e) {
  s(this, i).requestRemoveItem(e.unique);
};
y = function() {
  return this.max > 0 && this.selection.length >= this.max ? P : M`
			<uui-button
				id="btn-add"
				look="placeholder"
				@click=${T(this, E, S)}
				label="${this.localize.term("general_choose")}"></uui-button>
		`;
};
f = function() {
  return this._items ? M`
			<uui-ref-list>
				${b(
    this._items,
    (e) => e.unique,
    (e) => T(this, E, D).call(this, e)
  )}
			</uui-ref-list>
		` : P;
};
D = function(e) {
  if (!e.unique) return;
  const t = `${this._editPath}edit/${e.unique}`;
  return M`
			<uui-ref-node-document-type name=${this.localize.string(e.name)} id=${e.unique}>
				${T(this, E, Y).call(this, e)}
				<uui-action-bar slot="actions">
					<uui-button href=${t} label=${this.localize.term("general_open")}></uui-button>
					<uui-button @click=${() => T(this, E, U).call(this, e)} label=${this.localize.term("general_remove")}></uui-button>
				</uui-action-bar>
			</uui-ref-node-document-type>
		`;
};
Y = function(e) {
  if (e.icon)
    return M`<umb-icon slot="icon" name=${e.icon}></umb-icon>`;
};
n.styles = [
  v`
			#btn-add {
				width: 100%;
			}
		`
];
a([
  u({ type: Number })
], n.prototype, "min", 1);
a([
  u({ type: String, attribute: "min-message" })
], n.prototype, "minMessage", 2);
a([
  u({ type: Number })
], n.prototype, "max", 1);
a([
  u({ type: String, attribute: "min-message" })
], n.prototype, "maxMessage", 2);
a([
  u({ type: Array })
], n.prototype, "selection", 1);
a([
  u({ type: String })
], n.prototype, "value", 1);
a([
  h()
], n.prototype, "_items", 2);
a([
  h()
], n.prototype, "_editPath", 2);
n = a([
  x("umb-input-media-type")
], n);
class c extends H {
  constructor(t) {
    super(t, { getAllowedChildrenOf: G, mapper: I });
  }
  getMediaTypesOfFileExtension({ fileExtension: t, skip: r, take: _ }) {
    return J({ fileExtension: t, skip: r, take: _ });
  }
  getMediaTypesOfFolders({ skip: t, take: r }) {
    return j({ skip: t, take: r });
  }
}
const G = (e, t) => e ? A.getMediaTypeByIdAllowedChildren({
  path: { id: e },
  query: { parentContentKey: t ?? void 0 }
}) : A.getMediaTypeAllowedAtRoot({}), I = (e) => ({
  unique: e.id,
  entityType: g,
  name: e.name,
  description: e.description || null,
  icon: e.icon || null
}), j = async ({ skip: e, take: t }) => {
  const { data: r } = await A.getItemMediaTypeFolders({ query: { skip: e, take: t } });
  return r.items.map((_) => I(_));
}, J = async ({
  fileExtension: e,
  skip: t,
  take: r
}) => {
  const { data: _ } = await A.getItemMediaTypeAllowed({ query: { fileExtension: e, skip: t, take: r } });
  return _.items.map((o) => I(o));
};
class pe extends k {
  #e;
  constructor(t) {
    super(t, c), this.#e = new c(t);
  }
  async requestMediaTypesOf({
    fileExtension: t,
    skip: r = 0,
    take: _ = 100
  }) {
    return this.#e.getMediaTypesOfFileExtension({ fileExtension: t, skip: r, take: _ });
  }
  async requestMediaTypesOfFolders({ skip: t = 0, take: r = 100 } = {}) {
    return this.#e.getMediaTypesOfFolders({ skip: t, take: r });
  }
}
function Q() {
  return "f38bd2d7-65d0-48e6-95dc-87ce06ec2d3d";
}
function de(e) {
  return e === Q();
}
export {
  ce as UMB_CREATE_MEDIA_TYPE_WORKSPACE_PATH_PATTERN,
  Pe as UMB_DUPLICATE_MEDIA_TYPE_REPOSITORY_ALIAS,
  he as UMB_EDIT_MEDIA_TYPE_FOLDER_WORKSPACE_PATH_PATTERN,
  Oe as UMB_EDIT_MEDIA_TYPE_WORKSPACE_PATH_PATTERN,
  Re as UMB_EXPORT_MEDIA_TYPE_REPOSITORY_ALIAS,
  Se as UMB_MEDIA_TYPE_COMPOSITION_REPOSITORY_ALIAS,
  Ue as UMB_MEDIA_TYPE_CREATE_OPTIONS_MODAL,
  ye as UMB_MEDIA_TYPE_DETAIL_REPOSITORY_ALIAS,
  fe as UMB_MEDIA_TYPE_DETAIL_STORE_ALIAS,
  De as UMB_MEDIA_TYPE_DETAIL_STORE_CONTEXT,
  g as UMB_MEDIA_TYPE_ENTITY_TYPE,
  Ye as UMB_MEDIA_TYPE_FOLDER_ENTITY_TYPE,
  Be as UMB_MEDIA_TYPE_FOLDER_REPOSITORY_ALIAS,
  Ce as UMB_MEDIA_TYPE_FOLDER_STORE_ALIAS,
  ge as UMB_MEDIA_TYPE_FOLDER_STORE_CONTEXT,
  Le as UMB_MEDIA_TYPE_FOLDER_WORKSPACE_ALIAS,
  be as UMB_MEDIA_TYPE_FOLDER_WORKSPACE_CONTEXT,
  ve as UMB_MEDIA_TYPE_FOLDER_WORKSPACE_PATH,
  xe as UMB_MEDIA_TYPE_GLOBAL_SEARCH_ALIAS,
  we as UMB_MEDIA_TYPE_IMPORT_MODAL,
  Ne as UMB_MEDIA_TYPE_IMPORT_REPOSITORY_ALIAS,
  B as UMB_MEDIA_TYPE_ITEM_REPOSITORY_ALIAS,
  Fe as UMB_MEDIA_TYPE_ITEM_STORE_ALIAS,
  We as UMB_MEDIA_TYPE_ITEM_STORE_CONTEXT,
  Ke as UMB_MEDIA_TYPE_MENU_ITEM_ALIAS,
  C as UMB_MEDIA_TYPE_PICKER_MODAL,
  $e as UMB_MEDIA_TYPE_PROPERTY_TYPE_ENTITY_TYPE,
  qe as UMB_MEDIA_TYPE_ROOT_ENTITY_TYPE,
  He as UMB_MEDIA_TYPE_ROOT_WORKSPACE_ALIAS,
  ke as UMB_MEDIA_TYPE_ROOT_WORKSPACE_PATH,
  Xe as UMB_MEDIA_TYPE_SEARCH_PROVIDER_ALIAS,
  le as UMB_MEDIA_TYPE_STRUCTURE_REPOSITORY_ALIAS,
  ze as UMB_MEDIA_TYPE_TREE_ALIAS,
  Ve as UMB_MEDIA_TYPE_TREE_ITEM_CHILDREN_COLLECTION_ALIAS,
  Ge as UMB_MEDIA_TYPE_TREE_ITEM_CHILDREN_COLLECTION_REPOSITORY_ALIAS,
  je as UMB_MEDIA_TYPE_TREE_REPOSITORY_ALIAS,
  Je as UMB_MEDIA_TYPE_TREE_STORE_ALIAS,
  Qe as UMB_MEDIA_TYPE_TREE_STORE_CONTEXT,
  Ze as UMB_MEDIA_TYPE_WORKSPACE_ALIAS,
  et as UMB_MEDIA_TYPE_WORKSPACE_CONTEXT,
  tt as UMB_MEDIA_TYPE_WORKSPACE_PATH,
  rt as UMB_MOVE_MEDIA_TYPE_REPOSITORY_ALIAS,
  n as UmbInputMediaTypeElement,
  st as UmbMediaTypeDetailRepository,
  _t as UmbMediaTypeDetailServerDataSource,
  Et as UmbMediaTypeFolderRepository,
  ot as UmbMediaTypeItemRepository,
  X as UmbMediaTypePickerInputContext,
  pe as UmbMediaTypeStructureRepository,
  Q as getUmbracoFolderUnique,
  de as isUmbracoFolder
};
//# sourceMappingURL=index.js.map

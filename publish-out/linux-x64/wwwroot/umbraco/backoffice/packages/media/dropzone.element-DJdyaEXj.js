import { H as C, p as w } from "./input-upload-field.element-BKvVffkE.js";
import "./media-url.repository-B5RzlWhD.js";
import { css as U, state as P, query as B, customElement as E, repeat as q, html as A, property as z } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as F, UmbModalToken as N, umbOpenModal as Y } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { UmbDropzoneManager as $, UmbFileDropzoneItemStatus as r, UmbInputDropzoneElement as T, UmbDropzoneSubmittedEvent as x } from "@umbraco-cms/backoffice/dropzone";
import { UmbMediaTypeStructureRepository as V } from "@umbraco-cms/backoffice/media-type";
import { UmbArrayState as b } from "@umbraco-cms/backoffice/observable-api";
import { TemporaryFileStatus as f } from "@umbraco-cms/backoffice/temporary-file";
import { UMB_NOTIFICATION_CONTEXT as W } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as G } from "@umbraco-cms/backoffice/localization-api";
import { UmbDeprecation as j } from "@umbraco-cms/backoffice/utils";
const fe = "Umb.Repository.MediaCollection", Ie = "Umb.CollectionView.Media.Grid", ye = "Umb.CollectionView.Media.Table", Ue = "Umb.Collection.Media", Te = "Umb.Repository.Media.Move", Oe = "Umb.Repository.Media.SortChildrenOf", ve = "Umb.Repository.Media.BulkMove", Re = "Umb.Menu.Media", Se = "Umb.Repository.Media.Url", ge = "Umb.Store.MediaUrl", De = "Umb.Repository.Media.RecycleBin.Tree", Le = "Umb.Store.Media.RecycleBin.Tree", Ce = "Umb.Tree.Media.RecycleBin", we = "Umb.Repository.Media.RecycleBin", Pe = "Umb.Repository.Media.BulkTrash", Be = "media-recycle-bin-root", qe = "Umb.Repository.Media.Reference", ze = "Umb.Repository.Media.Detail", Fe = "Umb.Store.Media.Detail", Ne = "Umb.Repository.Document.Validation", Ye = "Umb.GlobalSearch.Media", ke = "Umb.Repository.Media.Tree", $e = "Umb.Store.Media.Tree", xe = "Umb.Tree.Media", Ve = "Umb.Workspace.Media", We = {
  culture: null,
  segment: null,
  name: "",
  createDate: null,
  updateDate: null
};
var H = Object.defineProperty, K = Object.getOwnPropertyDescriptor, O = (a) => {
  throw TypeError(a);
}, M = (a, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? K(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && H(e, t, n), n;
}, X = (a, e, t) => e.has(a) || O("Cannot " + t), Z = (a, e, t) => e.has(a) ? O("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), I = (a, e, t) => (X(a, e, "access private method"), t), p, v, R;
let d = class extends F {
  constructor() {
    super(...arguments), Z(this, p), this._options = [];
  }
  connectedCallback() {
    super.connectedCallback(), this._options = this.data?.options ?? [], requestAnimationFrame(() => this._buttonAuto.focus());
  }
  render() {
    return A` <div id="options">
			<uui-button id="auto" look="secondary" @click=${() => I(this, p, v).call(this)} label="Automatically" compact>
				<umb-icon name="icon-wand"></umb-icon> Auto pick
			</uui-button>
			${q(
      this._options,
      (a) => a.unique,
      (a) => A`<uui-button
						look="secondary"
						@click=${() => I(this, p, R).call(this, a.unique)}
						label=${a.name}
						compact>
						<umb-icon .name=${a.icon ?? "icon-circle-dotted"}></umb-icon>${a.name}
					</uui-button>`
    )}
		</div>`;
  }
};
p = /* @__PURE__ */ new WeakSet();
v = function() {
  this.value = { mediaTypeUnique: void 0 }, this._submitModal();
};
R = function(a) {
  if (!a)
    throw new Error("Invalid media type unique");
  this.value = { mediaTypeUnique: a }, this._submitModal();
};
d.styles = [
  k,
  U`
			#options {
				display: flex;
				margin: var(--uui-size-layout-1);
				gap: var(--uui-size-3);
			}
			uui-button {
				width: 150px;
				height: 150px;
			}
			umb-icon {
				font-size: var(--uui-size-10);
				margin-bottom: var(--uui-size-2);
			}
		`
];
M([
  P()
], d.prototype, "_options", 2);
M([
  B("#auto")
], d.prototype, "_buttonAuto", 2);
d = M([
  E("umb-dropzone-media-type-picker-modal")
], d);
const J = d, Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbDropzoneMediaTypePickerModalElement() {
    return d;
  },
  default: J
}, Symbol.toStringTag, { value: "Module" })), Q = new N("Umb.Modal.Dropzone.MediaTypePicker", {
  modal: {
    type: "dialog"
  }
});
class ee extends $ {
  // The available media types for a file extension.
  #a = new b([], (e) => e.extension);
  // The media types that the parent will allow to be created under it.
  #i = new b([], (e) => e.mediaTypeUnique);
  #t = new V(this);
  #e = new C(this);
  #n;
  #d = new G(this);
  constructor(e) {
    super(e), this.consumeContext(W, (t) => {
      this.#n = t;
    });
  }
  /**
   * Uploads files and folders to the server and creates the media items with corresponding media type.\
   * Allows the user to pick a media type option if multiple types are allowed.
   * @param {UmbFileDropzoneDroppedItems} items - The files and folders to upload.
   * @param {string | null} parentUnique - Where the items should be uploaded.
   * @returns {Array<UmbUploadableItem>} - The items about to be uploaded.
   */
  createMediaItems(e, t = null) {
    const i = this._setupProgress(e, t);
    return i.length ? (i.length === 1 ? this.#m(i[0]) : this.#u(i), i) : [];
  }
  async #u(e) {
    for (const t of e) {
      const i = await this.#r(t);
      if (!i.length) {
        this._updateStatus(t, r.NOT_ALLOWED);
        continue;
      }
      const n = i[0].unique;
      if (!n)
        throw new Error("Media type unique is not defined");
      t.temporaryFile ? this.#s(t, n) : t.folder && this.#o(t, n);
    }
  }
  async #s(e, t) {
    const i = await this._tempFileManager.uploadOne(e.temporaryFile);
    if (i.status === f.CANCELLED) {
      this._updateStatus(e, r.CANCELLED);
      return;
    }
    if (i.status !== f.SUCCESS) {
      this._updateStatus(e, r.ERROR);
      return;
    }
    const n = await this.#l(e, t), { data: s } = await this.#e.create(n, e.parentUnique);
    s ? this._updateStatus(e, r.COMPLETE) : this._updateStatus(e, r.ERROR);
  }
  async #o(e, t) {
    const i = await this.#l(e, t), { data: n } = await this.#e.create(i, e.parentUnique);
    n ? this._updateStatus(e, r.COMPLETE) : this._updateStatus(e, r.ERROR);
  }
  // Media types
  async #r(e) {
    const t = e.parentUnique ? await this.#e.requestByUnique(e.parentUnique) : null, i = await this.#p(t?.data?.mediaType.unique ?? null, e.parentUnique), n = e.temporaryFile?.file.name.split(".").pop() ?? null, s = await this.#c(n);
    return s.length ? i.filter((D) => s.find((L) => L.unique === D.unique)) : [];
  }
  async #c(e) {
    const t = this.#a.getValue().find((n) => n.extension === e)?.availableMediaTypes;
    if (t) return t;
    const i = e ? await this.#t.requestMediaTypesOf({ fileExtension: e }) : await this.#t.requestMediaTypesOfFolders();
    return this.#a.appendOne({ extension: e, availableMediaTypes: i }), i;
  }
  async #p(e, t) {
    const i = this.#i.getValue().find((s) => s.mediaTypeUnique === e)?.allowedChildren;
    if (i) return i;
    const { data: n } = await this.#t.requestAllowedChildrenOf(e, t);
    if (!n) throw new Error("Parent media type does not exist");
    return this.#i.appendOne({ mediaTypeUnique: e, allowedChildren: n.items }), n.items;
  }
  // Scaffold
  async #l(e, t) {
    const i = e.temporaryFile ? e.temporaryFile.file.name : e.folder?.name ?? "", n = {
      editorAlias: "",
      alias: "umbracoFile",
      value: { temporaryFileId: e.temporaryFile?.temporaryUnique },
      culture: null,
      segment: null,
      entityType: w
    }, s = {
      unique: e.unique,
      mediaType: { unique: t, collection: null },
      variants: [{ culture: null, segment: null, createDate: null, updateDate: null, name: i }],
      values: e.temporaryFile ? [n] : void 0
    }, { data: o } = await this.#e.createScaffold(s);
    return o;
  }
  async #_(e) {
    return (await Y(this, Q, { data: { options: e } }).catch(
      () => {
      }
    ))?.mediaTypeUnique;
  }
  async #m(e) {
    const t = await this.#r(e);
    if (!t.length)
      return this.#n?.peek("warning", {
        data: {
          message: `${this.#d.term("media_disallowedFileType")}: ${e.temporaryFile?.file.name}.`
        }
      }), this._updateStatus(e, r.NOT_ALLOWED);
    const i = t.length > 1 ? await this.#_(t) : t[0].unique;
    if (!i)
      return this._updateStatus(e, r.CANCELLED);
    e.temporaryFile ? this.#s(e, i) : e.folder && this.#o(e, i);
  }
}
var te = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, S = (a) => {
  throw TypeError(a);
}, g = (a, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? ae(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && te(e, t, n), n;
}, ie = (a, e, t) => e.has(a) || S("Cannot " + t), ne = (a, e, t) => e.has(a) ? S("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), u = (a, e, t) => (ie(a, e, "access private method"), t), l, _, m, h;
let c = class extends T {
  constructor() {
    super(), ne(this, l), this.parentUnique = null, this._manager = new ee(this), this.progressItems = () => this._manager.progressItems, this.progress = () => this._manager.progress, document.addEventListener("dragenter", u(this, l, _).bind(this)), document.addEventListener("dragleave", u(this, l, m).bind(this)), document.addEventListener("drop", u(this, l, h).bind(this)), this._observeProgress(), this._observeProgressItems();
  }
  /**
   * Gets the current value of the uploaded items.
   * @returns {Array<UmbUploadableItem>} An array of uploadable items.
   */
  getItems() {
    return this._progressItems;
  }
  _observeProgressItems() {
    super._observeProgressItems(), this.observe(
      this._manager.progressItems,
      (a) => {
        const e = a.find((t) => t.status === r.WAITING);
        a.length && !e && this.dispatchEvent(new CustomEvent("complete", { detail: a }));
      },
      "_observeProgressItemsComplete"
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("dragenter", u(this, l, _).bind(this)), document.removeEventListener("dragleave", u(this, l, m).bind(this)), document.removeEventListener("drop", u(this, l, h).bind(this));
  }
  async onUpload(a) {
    if (this.disabled || !a.detail.files.length && !a.detail.folders.length) return;
    const e = this._manager.createMediaItems(a.detail, this.parentUnique);
    this.dispatchEvent(new x(e));
  }
};
l = /* @__PURE__ */ new WeakSet();
_ = function(a) {
  if (this.disabled) return;
  const e = a.dataTransfer?.types;
  !e?.length || !e?.includes("Files") || this.toggleAttribute("dragging", !0);
};
m = function() {
  this.disabled || this.toggleAttribute("dragging", !1);
};
h = function(a) {
  a.preventDefault(), !this.disabled && this.toggleAttribute("dragging", !1);
};
c.styles = [
  ...T.styles,
  U`
			:host(:not([disabled])[dragging]) #dropzone {
				opacity: 1;
				pointer-events: all;
			}

			[dropzone] {
				opacity: 0;
			}

			#dropzone {
				opacity: 0;
				pointer-events: none;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				z-index: 100;
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-focus);
			}
		`
];
g([
  z({ attribute: "parent-unique" })
], c.prototype, "parentUnique", 2);
c = g([
  E("umb-dropzone-media")
], c);
var se = Object.getOwnPropertyDescriptor, oe = (a, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? se(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (n = o(n) || n);
  return n;
};
const re = new j({
  deprecated: "<umb-dropzone />",
  removeInVersion: "18",
  solution: "Use <umb-dropzone-media /> for media items and <umb-input-dropzone /> for all other files and folders."
});
let y = class extends c {
  connectedCallback() {
    super.connectedCallback(), re.warn();
  }
};
y = oe([
  E("umb-dropzone")
], y);
export {
  d as A,
  Q as B,
  Ge as C,
  Ue as U,
  fe as a,
  Ie as b,
  ye as c,
  Te as d,
  Oe as e,
  ve as f,
  Re as g,
  Be as h,
  De as i,
  Le as j,
  Ce as k,
  we as l,
  Pe as m,
  qe as n,
  ze as o,
  Fe as p,
  Ne as q,
  Ye as r,
  ke as s,
  $e as t,
  xe as u,
  Se as v,
  ge as w,
  Ve as x,
  We as y,
  c as z
};
//# sourceMappingURL=dropzone.element-DJdyaEXj.js.map

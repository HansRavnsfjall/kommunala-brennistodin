import { css as q, property as l, state as p, customElement as z, html as r, when as Vi, repeat as pt, query as et, nothing as k, classMap as Kn, ifDefined as zt } from "@umbraco-cms/backoffice/external/lit";
import { assignToFrozenObject as Qn } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as C } from "@umbraco-cms/backoffice/event";
import { UmbFileDropzoneItemStatus as Yi } from "@umbraco-cms/backoffice/dropzone";
import { UmbLitElement as X } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as Gi } from "@umbraco-cms/backoffice/style";
import { UmbTemporaryFileConfigRepository as Jn } from "@umbraco-cms/backoffice/temporary-file";
import { UmbFormControlMixin as ai, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as Xi } from "@umbraco-cms/backoffice/validation";
import { drag as Zn } from "@umbraco-cms/backoffice/external/uui";
import { clamp as I, calculateExtrapolatedValue as ge, inverseLerp as to, lerp as eo, debounce as io, UmbPaginationManager as ao, splitStringToArray as no, stringOrStringArrayContains as Wi } from "@umbraco-cms/backoffice/utils";
import { UmbContextToken as _t } from "@umbraco-cms/backoffice/context-api";
import { UmbModalToken as te, UmbModalBaseElement as ni, UMB_MODAL_MANAGER_CONTEXT as Ki, umbConfirmModal as oo } from "@umbraco-cms/backoffice/modal";
import { UMB_SECTION_PATH_PATTERN as so } from "@umbraco-cms/backoffice/section";
import { UMB_WORKSPACE_MODAL as Qi, UMB_WORKSPACE_PATH_PATTERN as ro } from "@umbraco-cms/backoffice/workspace";
import { UmbModalRouteRegistrationController as oi, UmbPathPattern as Ji } from "@umbraco-cms/backoffice/router";
import { UmbTreeServerDataSourceBase as lo, UmbTreeRepositoryBase as po, UMB_TREE_PICKER_MODAL_ALIAS as co } from "@umbraco-cms/backoffice/tree";
import { a as Zi } from "./media-url.repository-B5RzlWhD.js";
import { UmbPickerInputContext as uo } from "@umbraco-cms/backoffice/picker-input";
import { UMB_VARIANT_CONTEXT as ta } from "@umbraco-cms/backoffice/variant";
import { UmbSorterController as ea, UmbSorterResolvePlacementAsGrid as ia } from "@umbraco-cms/backoffice/sorter";
import { getUmbracoFolderUnique as mo, UmbMediaTypeStructureRepository as ho, isUmbracoFolder as vo, UMB_MEDIA_TYPE_ENTITY_TYPE as fo } from "@umbraco-cms/backoffice/media-type";
import "@umbraco-cms/backoffice/imaging";
import { UMB_SERVER_CONTEXT as aa } from "@umbraco-cms/backoffice/server";
import { UmbId as $e } from "@umbraco-cms/backoffice/id";
import { MediaService as H } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as Mt } from "@umbraco-cms/backoffice/resources";
import { UmbDetailRepositoryBase as go, UmbItemServerDataSourceBase as _o, UmbItemRepositoryBase as xo, UmbRepositoryItemsManager as yo } from "@umbraco-cms/backoffice/repository";
import { UmbItemDataApiGetRequestController as bo } from "@umbraco-cms/backoffice/entity-item";
import { UmbControllerBase as na } from "@umbraco-cms/backoffice/class-api";
import { UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as wo } from "@umbraco-cms/backoffice/content";
import { UmbExtensionsManifestInitializer as ko } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Mo } from "@umbraco-cms/backoffice/extension-registry";
class ee extends Event {
  static {
    this.TYPE = "imagecrop-change";
  }
  constructor(e) {
    super(ee.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...e });
  }
}
class si extends Event {
  static {
    this.TYPE = "focalpoint-change";
  }
  constructor(e, i) {
    super(si.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...i }), this.focalPoint = e;
  }
}
var $o = Object.defineProperty, Eo = Object.getOwnPropertyDescriptor, oa = (t) => {
  throw TypeError(t);
}, K = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Eo(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && $o(e, i, a), a;
}, ri = (t, e, i) => e.has(t) || oa("Cannot " + i), ae = (t, e, i) => (ri(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Rt = (t, e, i) => e.has(t) ? oa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), se = (t, e, i, n) => (ri(t, e, "write to private field"), e.set(t, i), i), qe = (t, e, i) => (ri(t, e, "access private method"), i), $t, re, Re, De, Wt, le;
let S = class extends X {
  constructor() {
    super(), Rt(this, Wt), Rt(this, $t), this.crops = [], Rt(this, re), this.focalPoint = { left: 0.5, top: 0.5 }, this.hideFocalPoint = !1, this.src = "", this._serverUrl = "", Rt(this, Re, (t) => {
      const i = t.target.value;
      if (!i) return;
      const n = this.crops.findIndex((a) => a.alias === i.alias);
      n !== void 0 && (this.crops[n] = i, this.currentCrop = void 0, qe(this, Wt, le).call(this));
    }), Rt(this, De, (t) => {
      this.focalPoint = { top: t.focalPoint.top, left: t.focalPoint.left }, qe(this, Wt, le).call(this);
    }), this.onResetFocalPoint = () => {
      this.focalPoint = { left: 0.5, top: 0.5 }, qe(this, Wt, le).call(this);
    }, this.consumeContext(aa, (t) => {
      this._serverUrl = t?.getServerUrl() ?? "";
    });
  }
  set value(t) {
    t ? (this.crops = [...t.crops], this.focalPoint = t.focalPoint || { left: 0.5, top: 0.5 }, this.src = t.src, se(this, $t, t)) : (this.crops = [], this.focalPoint = { left: 0.5, top: 0.5 }, this.src = "", se(this, $t, void 0)), this.requestUpdate();
  }
  get value() {
    return ae(this, $t);
  }
  set file(t) {
    se(this, re, t), t ? this.fileDataUrl = URL.createObjectURL(t) : this.fileDataUrl && (URL.revokeObjectURL(this.fileDataUrl), this.fileDataUrl = void 0);
  }
  get file() {
    return ae(this, re);
  }
  get source() {
    return this.src ? this.src.startsWith("/") ? `${this._serverUrl}${this.src}` : this.src : this.fileDataUrl ?? "";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.fileDataUrl && URL.revokeObjectURL(this.fileDataUrl);
  }
  onCropClick(t) {
    const e = this.crops.findIndex((i) => i.alias === t.alias);
    e !== -1 && (this.currentCrop = { ...this.crops[e] });
  }
  render() {
    return r`
			<div id="main">${this.renderMain()}</div>
			<div id="side">${this.renderSide()}</div>
		`;
  }
  renderMain() {
    return this.currentCrop ? r`
				<umb-image-cropper
					.focalPoint=${this.focalPoint}
					.src=${this.source}
					.value=${this.currentCrop}
					?hideFocalPoint=${this.hideFocalPoint}
					@imagecrop-change=${ae(this, Re)}>
				</umb-image-cropper>
			` : r`
			<umb-image-cropper-focus-setter
				.focalPoint=${this.focalPoint}
				.src=${this.source}
				?hideFocalPoint=${this.hideFocalPoint}
				@focalpoint-change=${ae(this, De)}>
			</umb-image-cropper-focus-setter>
			<div id="actions">${this.renderActions()}</div>
		`;
  }
  renderActions() {
    return r`<slot name="actions"></slot>
			${Vi(
      !this.hideFocalPoint,
      () => r`<uui-button
						label=${this.localize.term("content_resetFocalPoint")}
						@click=${this.onResetFocalPoint}></uui-button>`
    )} `;
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return pt(
        this.crops,
        (t) => t.alias + JSON.stringify(t.coordinates),
        (t) => r` <umb-image-cropper-preview
					@click=${() => this.onCropClick(t)}
					.crop=${t}
					.focalPoint=${this.focalPoint}
					.src=${this.source}></umb-image-cropper-preview>`
      );
  }
};
$t = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakSet();
le = function() {
  se(this, $t, {
    crops: [...this.crops],
    focalPoint: this.focalPoint,
    src: this.src
  }), this.dispatchEvent(new C());
};
S.styles = q`
		:host {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			gap: var(--uui-size-space-3);
			height: 400px;
		}

		#main {
			max-width: 500px;
			min-width: 300px;
			width: 100%;
			height: 100%;
			display: flex;
			gap: var(--uui-size-space-1);
			flex-direction: column;
		}

		#actions {
			display: flex;
			justify-content: space-between;
			margin-top: 0.5rem;
		}

		umb-image-cropper-focus-setter {
			height: calc(100% - 33px - var(--uui-size-space-1)); /* Temp solution to make room for actions */
		}

		#side {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			gap: var(--uui-size-space-3);
			flex-grow: 1;
			overflow-y: auto;
			height: fit-content;
			max-height: 100%;
		}
	`;
K([
  l({ attribute: !1 })
], S.prototype, "value", 1);
K([
  p()
], S.prototype, "crops", 2);
K([
  p()
], S.prototype, "currentCrop", 2);
K([
  l({ attribute: !1 })
], S.prototype, "file", 1);
K([
  l()
], S.prototype, "fileDataUrl", 2);
K([
  p()
], S.prototype, "focalPoint", 2);
K([
  l({ type: Boolean })
], S.prototype, "hideFocalPoint", 2);
K([
  p()
], S.prototype, "src", 2);
K([
  p()
], S.prototype, "_serverUrl", 2);
S = K([
  z("umb-image-cropper-field")
], S);
var To = Object.defineProperty, Co = Object.getOwnPropertyDescriptor, sa = (t) => {
  throw TypeError(t);
}, Q = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Co(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && To(e, i, a), a;
}, li = (t, e, i) => e.has(t) || sa("Cannot " + i), mt = (t, e, i) => (li(t, e, "read from private field"), i ? i.call(t) : e.get(t)), ze = (t, e, i) => e.has(t) ? sa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Po = (t, e, i, n) => (li(t, e, "write to private field"), e.set(t, i), i), y = (t, e, i) => (li(t, e, "access private method"), i), ut, Kt, g, ra, la, pa, ht, pi, ca, ci, Fe, da, ua;
let D = class extends X {
  constructor() {
    super(...arguments), ze(this, g), this._isDraggingGridHandle = !1, this.coords = { x: 0, y: 0 }, ze(this, ut, { left: 0.5, top: 0.5 }), this.hideFocalPoint = !1, this.disabled = !1, ze(this, Kt, 8);
  }
  set focalPoint(t) {
    Po(this, ut, t), y(this, g, pi).call(this, mt(this, ut).left, mt(this, ut).top), y(this, g, la).call(this);
  }
  get focalPoint() {
    return mt(this, ut);
  }
  update(t) {
    super.update(t), t.has("src") && this.src && y(this, g, ra).call(this);
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.style.setProperty("--dot-radius", `${mt(this, Kt)}px`);
  }
  render() {
    return this.src ? r`
			<div
				id="wrapper"
				@click=${y(this, g, da)}
				@mousedown=${y(this, g, Fe)}
				@touchstart=${y(this, g, Fe)}>
				<img id="image" @keydown=${() => k} src=${this.src} alt="" />
				<span
					id="focal-point"
					class=${Kn({
      "focal-point--dragging": this._isDraggingGridHandle,
      hidden: this.hideFocalPoint
    })}
					tabindex=${zt(this.disabled ? void 0 : "0")}
					aria-label="${this.localize.term("general_focalPoint")}"
					@keydown=${y(this, g, ua)}>
				</span>
			</div>
		` : k;
  }
};
ut = /* @__PURE__ */ new WeakMap();
Kt = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakSet();
ra = async function() {
  await this.updateComplete, this.hideFocalPoint || y(this, g, pi).call(this, this.focalPoint.left, this.focalPoint.top), this.imageElement.onload = () => {
    if (!this.imageElement || !this.wrapperElement) return;
    const t = this.imageElement.naturalWidth / this.imageElement.naturalHeight, e = this.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
    i.width > e.width && (this.imageElement.style.width = "100%"), i.height > e.height && (this.imageElement.style.height = "100%"), y(this, g, ci).call(this), this.imageElement.style.aspectRatio = `${t}`, this.wrapperElement.style.aspectRatio = `${t}`;
  };
};
la = function() {
  y(this, g, ca).call(this, mt(this, ut)) && y(this, g, ci).call(this);
};
pa = function(t, e) {
  const i = e / 100 / e * 50, n = t / 100 / t * 50;
  return { top: i, left: n };
};
ht = function(t, e, i, n) {
  const a = I(t / i, 0, 1), o = I(e / n, 0, 1);
  y(this, g, pa).call(this, t, e);
  const s = { left: a, top: o };
  this.dispatchEvent(new si(s));
};
pi = function(t, e) {
  this.focalPointElement && (this.focalPointElement.style.left = `calc(${t * 100}% - ${mt(this, Kt)}px)`, this.focalPointElement.style.top = `calc(${e * 100}% - ${mt(this, Kt)}px)`);
};
ca = function(t) {
  if (this.focalPoint)
    return t.left === 0.5 && t.top === 0.5;
};
ci = function() {
  this.imageElement && (this.coords.x = this.imageElement?.clientWidth / 2, this.coords.y = this.imageElement.clientHeight / 2);
};
Fe = function(t) {
  if (this.disabled || this.hideFocalPoint || t.button !== 0)
    return;
  const e = this.wrapperElement, i = this.focalPointElement;
  if (!e) return;
  const { width: n, height: a } = e.getBoundingClientRect();
  i?.focus(), t.preventDefault(), t.stopPropagation(), this._isDraggingGridHandle = !0, Zn(e, {
    onMove: (o, s) => {
      isNaN(o) || isNaN(s) || (this.coords.x = o, this.coords.y = s, y(this, g, ht).call(this, o, s, n, a));
    },
    onStop: () => this._isDraggingGridHandle = !1,
    initialEvent: t
  });
};
da = function(t) {
  if (this.disabled || this.hideFocalPoint || t.button !== 0)
    return;
  const e = this.wrapperElement, i = this.focalPointElement;
  if (!e) return;
  i?.focus();
  const n = e.getBoundingClientRect(), a = e.ownerDocument.defaultView, { width: o, height: s } = e.getBoundingClientRect(), c = n.left + a.scrollX, v = n.top + a.scrollY, x = t.pageX - c, at = t.pageY - v;
  y(this, g, ht).call(this, x, at, o, s);
};
ua = function(t) {
  if (this.disabled || this.hideFocalPoint) return;
  const e = t.shiftKey ? 1 : 10, i = this.wrapperElement;
  if (!i) return;
  const { width: n, height: a } = i.getBoundingClientRect();
  t.key === "ArrowLeft" && (t.preventDefault(), this.coords.x = I(this.coords.x - e, 0, n), y(this, g, ht).call(this, this.coords.x, this.coords.y, n, a)), t.key === "ArrowRight" && (t.preventDefault(), this.coords.x = I(this.coords.x + e, 0, n), y(this, g, ht).call(this, this.coords.x, this.coords.y, n, a)), t.key === "ArrowUp" && (t.preventDefault(), this.coords.y = I(this.coords.y - e, 0, a), y(this, g, ht).call(this, this.coords.x, this.coords.y, n, a)), t.key === "ArrowDown" && (t.preventDefault(), this.coords.y = I(this.coords.y + e, 0, a), y(this, g, ht).call(this, this.coords.x, this.coords.y, n, a));
};
D.styles = q`
		:host {
			display: flex;
			width: 100%;
			height: 100%;
			position: relative;
			user-select: none;
			background-color: var(--uui-color-surface);
			outline: 1px solid var(--uui-color-border);
		}
		/* Wrapper is used to make the focal point position responsive to the image size */
		#wrapper {
			position: relative;
			display: flex;
			margin: auto;
			max-width: 100%;
			max-height: 100%;
			box-sizing: border-box;
			forced-color-adjust: none;
		}
		:host(:not([hidefocalpoint])) #wrapper {
			cursor: crosshair;
		}
		#image {
			margin: auto;
			position: relative;
		}
		#focal-point {
			content: '';
			display: block;
			position: absolute;
			width: calc(2 * var(--dot-radius));
			height: calc(2 * var(--dot-radius));
			top: 0;
			box-shadow:
				rgba(0, 0, 0, 0.25) 0px 0px 0px 1px,
				inset rgba(0, 0, 0, 0.25) 0px 0px 0px 1px;
			border: solid 2px white;
			border-radius: 50%;
			pointer-events: none;
			transition: 150ms transform;
			box-sizing: inherit;
		}
		.focal-point--dragging {
			cursor: none;
			transform: scale(1.5);
		}
		#focal-point.hidden {
			display: none;
		}
	`;
Q([
  et("#image")
], D.prototype, "imageElement", 2);
Q([
  et("#wrapper")
], D.prototype, "wrapperElement", 2);
Q([
  et("#focal-point")
], D.prototype, "focalPointElement", 2);
Q([
  p()
], D.prototype, "_isDraggingGridHandle", 2);
Q([
  p()
], D.prototype, "coords", 2);
Q([
  l({ attribute: !1 })
], D.prototype, "focalPoint", 1);
Q([
  l({ type: Boolean })
], D.prototype, "hideFocalPoint", 2);
Q([
  l({ type: Boolean, reflect: !0 })
], D.prototype, "disabled", 2);
Q([
  l({ type: String })
], D.prototype, "src", 2);
D = Q([
  z("umb-image-cropper-focus-setter")
], D);
var qo = Object.defineProperty, zo = Object.getOwnPropertyDescriptor, ma = (t) => {
  throw TypeError(t);
}, xt = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? zo(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && qo(e, i, a), a;
}, di = (t, e, i) => e.has(t) || ma("Cannot " + i), We = (t, e, i) => (di(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Ni = (t, e, i) => e.has(t) ? ma("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Uo = (t, e, i, n) => (di(t, e, "write to private field"), e.set(t, i), i), Ne = (t, e, i) => (di(t, e, "access private method"), i), Ct, Vt, ha, ui;
let J = class extends X {
  constructor() {
    super(...arguments), Ni(this, Vt), this.src = "", Ni(this, Ct, { left: 0.5, top: 0.5 });
  }
  set focalPoint(t) {
    Uo(this, Ct, t), Ne(this, Vt, ui).call(this);
  }
  get focalPoint() {
    return We(this, Ct);
  }
  connectedCallback() {
    super.connectedCallback(), Ne(this, Vt, ha).call(this);
  }
  render() {
    return this.crop ? r`
			<div id="container">
				<img id="image" src=${this.src} alt="" />
			</div>
			<span id="alias">
				${this.crop.label !== void 0 ? this.localize.string(this.crop.label) : this.label ?? this.crop.alias}
			</span>
			<span id="dimensions">${this.crop.width} x ${this.crop.height}</span>
			${this.crop.coordinates ? r`<span id="user-defined"><umb-localize key="imagecropper_customCrop">User defined</umb-localize></span>` : k}
		` : r`<span id="label">${this.label}</span>`;
  }
};
Ct = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakSet();
ha = async function() {
  if (!this.crop) return;
  await this.updateComplete, await new Promise((x) => this.imageElement.onload = () => x(this.imageElement));
  const t = this.imageContainerElement.getBoundingClientRect(), e = this.crop.width / this.crop.height, i = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
  let n = 0, a = 0, o = 0, s = 0, c = 0, v = 0;
  if (e > 1 ? (n = t.width, a = t.width / e) : (n = t.height * e, a = t.height), this.crop.coordinates) {
    if (e > 1) {
      const x = this.crop.coordinates.x1 + this.crop.coordinates.x2;
      o = ge(n, x), s = o / i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    } else {
      const x = this.crop.coordinates.y1 + this.crop.coordinates.y2;
      s = ge(a, x), o = s * i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    }
    v = v / a * 100, c = c / n * 100, this.imageElement.style.top = `${v}%`, this.imageElement.style.left = `${c}%`;
  } else
    i > e ? (s = a, o = s * i) : (o = n, s = o / i), Ne(this, Vt, ui).call(this, o, s, n, a);
  this.imageContainerElement.style.width = `${n}px`, this.imageContainerElement.style.aspectRatio = `${e}`, o = o / n * 100, s = s / a * 100, this.imageElement.style.width = `${o}%`, this.imageElement.style.height = `${s}%`;
};
ui = function(t, e, i, n) {
  if (!this.crop || !this.imageElement || !this.imageContainerElement || this.crop.coordinates) return;
  if (!t || !e) {
    const s = this.imageElement.getBoundingClientRect();
    t = s.width, e = s.height;
  }
  if (!i || !n) {
    const s = this.imageContainerElement.getBoundingClientRect();
    i = s.width, n = s.height;
  }
  let a = i / 2 - t * We(this, Ct).left, o = n / 2 - e * We(this, Ct).top;
  a = I(a, i - t, 0), o = I(o, n - e, 0), a = a / i * 100, o = o / n * 100, this.imageElement.style.top = `${o}%`, this.imageElement.style.left = `${a}%`;
};
J.styles = q`
		:host {
			display: flex;
			flex-direction: column;
			padding: var(--uui-size-space-4);
			border-radius: var(--uui-border-radius);
			background-color: var(--uui-color-surface);
			cursor: pointer;
		}
		:host(:hover) {
			background-color: var(--uui-color-surface-alt);
		}
		#container {
			display: flex;
			width: 100%;
			aspect-ratio: 1;
			overflow: hidden;
			position: relative;
			overflow: hidden;
			margin: auto;
			max-width: 100%;
			max-height: 200px;
			user-select: none;
		}
		#label {
			font-weight: bold;
		}
		#alias {
			font-weight: bold;
			margin-top: var(--uui-size-space-3);
		}
		#dimensions,
		#user-defined {
			font-size: 0.8em;
		}
		#image {
			position: absolute;
			pointer-events: none;
		}
	`;
xt([
  et("#image")
], J.prototype, "imageElement", 2);
xt([
  et("#container")
], J.prototype, "imageContainerElement", 2);
xt([
  l({ type: Object, attribute: !1 })
], J.prototype, "crop", 2);
xt([
  l({ type: String, attribute: !1 })
], J.prototype, "src", 2);
xt([
  l({ type: String })
], J.prototype, "label", 2);
xt([
  l({ attribute: !1 })
], J.prototype, "focalPoint", 1);
J = xt([
  z("umb-image-cropper-preview")
], J);
var Io = Object.defineProperty, So = Object.getOwnPropertyDescriptor, va = (t) => {
  throw TypeError(t);
}, it = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? So(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Io(e, i, a), a;
}, mi = (t, e, i) => e.has(t) || va("Cannot " + i), h = (t, e, i) => (mi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), E = (t, e, i) => e.has(t) ? va("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), vt = (t, e, i, n) => (mi(t, e, "write to private field"), e.set(t, i), i), f = (t, e, i) => (mi(t, e, "access private method"), i), hi, vi, Be, ft, Qt, Yt, Nt, pe, ce, m, je, fa, ga, Le, He, fi, _a, st, xa, ya, ba, wa, Ee, de, ue, Te;
let j = class extends X {
  constructor() {
    super(...arguments), E(this, m), this.src = "", this.focalPoint = {
      left: 0.5,
      top: 0.5
    }, this._zoom = 0, E(this, hi, 50), E(this, vi, 4), E(this, Be, 1e-3), E(this, ft, 0), E(this, Qt, 0), E(this, Yt, 0), E(this, Nt, !1), E(this, pe, 0), E(this, ce, 0), E(this, Ee, (t) => {
      t.preventDefault(), vt(this, Nt, !0);
      const e = this.imageElement.getBoundingClientRect(), i = this.viewportElement.getBoundingClientRect();
      vt(this, pe, t.clientX - e.left + i.left), vt(this, ce, t.clientY - e.top + i.top), window.addEventListener("mousemove", h(this, de)), window.addEventListener("mouseup", h(this, ue));
    }), E(this, de, (t) => {
      if (h(this, Nt)) {
        const e = t.clientX - h(this, pe), i = t.clientY - h(this, ce);
        f(this, m, fi).call(this, i, e);
      }
    }), E(this, ue, () => {
      vt(this, Nt, !1), window.removeEventListener("mousemove", h(this, de)), window.removeEventListener("mouseup", h(this, ue));
    }), E(this, Te, (t) => {
      t.preventDefault(), f(this, m, He).call(this, t.deltaY * -h(this, Be), t.clientX, t.clientY);
    });
  }
  get zoom() {
    return this._zoom;
  }
  set zoom(t) {
    const e = t - this._zoom;
    f(this, m, He).call(this, e);
  }
  connectedCallback() {
    super.connectedCallback(), f(this, m, Le).call(this), f(this, m, fa).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), f(this, m, ga).call(this);
  }
  updated(t) {
    super.updated(t), t.has("value") && f(this, m, Le).call(this);
  }
  render() {
    return r`
			<div id="viewport">
				<img id="image" src=${this.src} alt="" />
				<div id="mask"></div>
			</div>
			<uui-slider
				@input=${f(this, m, wa)}
				.value=${this._zoom.toString()}
				hide-step-values
				id="slider"
				type="range"
				min="0"
				max="1"
				value="0"
				step="0.001">
			</uui-slider>
			<div id="actions">
				<uui-button @click=${f(this, m, ba)} label="${this.localize.term("imagecropper_reset")}"></uui-button>
				<uui-button
					look="secondary"
					@click=${f(this, m, ya)}
					label="${this.localize.term("general_cancel")}"></uui-button>
				<uui-button
					look="primary"
					color="positive"
					@click=${f(this, m, xa)}
					label="${this.localize.term("buttons_save")}"></uui-button>
			</div>
		`;
  }
};
hi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakMap();
ft = /* @__PURE__ */ new WeakMap();
Qt = /* @__PURE__ */ new WeakMap();
Yt = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
pe = /* @__PURE__ */ new WeakMap();
ce = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
je = function() {
  return eo(h(this, ft), h(this, Qt), this._zoom);
};
fa = async function() {
  await this.updateComplete, this.imageElement.addEventListener("mousedown", h(this, Ee)), this.addEventListener("wheel", h(this, Te), { passive: !1 });
};
ga = function() {
  this.imageElement.removeEventListener("mousedown", h(this, Ee)), this.removeEventListener("wheel", h(this, Te));
};
Le = async function() {
  if (!this.value) return;
  await this.updateComplete, this.imageElement.complete || await new Promise((N) => this.imageElement.onload = () => N(this.imageElement));
  const t = this.viewportElement.clientWidth, e = this.viewportElement.clientHeight, i = t / e, n = this.value.width / this.value.height;
  let a = 0, o = 0, s = 0, c = 0, v = 0, x = 0;
  {
    const N = 2 * h(this, hi), L = t - N, At = e - N, Fi = n > i;
    a = Fi ? L : At * n, o = Fi ? L / n : At;
  }
  const at = (t - a) / 2, wt = (e - o) / 2;
  this.maskElement.style.width = `${a}px`, this.maskElement.style.height = `${o}px`, this.maskElement.style.left = `${at}px`, this.maskElement.style.top = `${wt}px`;
  {
    const N = a / this.imageElement.naturalWidth, L = o / this.imageElement.naturalHeight, At = Math.max(N, L);
    vt(this, ft, At), vt(this, Qt, At * h(this, vi));
  }
  if (this.value.coordinates) {
    const N = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
    if (n > 1) {
      const L = this.value.coordinates.x1 + this.value.coordinates.x2;
      s = ge(a, L), c = s / N, v = -s * this.value.coordinates.x1 + at, x = -c * this.value.coordinates.y1 + wt;
    } else {
      const L = this.value.coordinates.y1 + this.value.coordinates.y2;
      c = ge(o, L), s = c * N, v = -s * this.value.coordinates.x1 + at, x = -c * this.value.coordinates.y1 + wt;
    }
  } else {
    s = this.imageElement.naturalWidth * h(this, ft), c = this.imageElement.naturalHeight * h(this, ft), v = at + a / 2 - s * this.focalPoint.left, x = wt + o / 2 - c * this.focalPoint.top;
    const N = at + a - s, L = wt + o - c;
    v = I(v, N, at), x = I(x, L, wt);
  }
  this.imageElement.style.left = `${v}px`, this.imageElement.style.top = `${x}px`, this.imageElement.style.width = `${s}px`, this.imageElement.style.height = `${c}px`;
  const Yn = s / this.imageElement.naturalWidth, Gn = c / this.imageElement.naturalHeight, Xn = Math.max(Yn, Gn);
  this._zoom = to(h(this, ft), h(this, Qt), Xn);
};
He = function(t, e, i) {
  vt(this, Yt, h(this, m, je)), this._zoom = I(this._zoom + t, 0, 1);
  const n = h(this, m, je), a = this.maskElement.getBoundingClientRect(), o = this.imageElement.getBoundingClientRect();
  let s = { left: 0, top: 0 };
  e && i ? s = f(this, m, st).call(this, e, i) : s = f(this, m, st).call(this, a.left + a.width / 2, a.top + a.height / 2);
  const c = f(this, m, st).call(this, o.left, o.top), v = s.left - (s.left - c.left) * (n / h(this, Yt)), x = s.top - (s.top - c.top) * (n / h(this, Yt));
  this.imageElement.style.width = `${this.imageElement.naturalWidth * n}px`, this.imageElement.style.height = `${this.imageElement.naturalHeight * n}px`, f(this, m, fi).call(this, x, v);
};
fi = function(t, e) {
  const i = this.maskElement.getBoundingClientRect(), n = this.imageElement.getBoundingClientRect(), a = f(this, m, st).call(this, i.left + i.width - n.width, 0).left, o = f(this, m, st).call(this, i.left, 0).left, s = f(this, m, st).call(this, 0, i.top + i.height - n.height).top, c = f(this, m, st).call(this, 0, i.top).top;
  e = I(e, a, o), t = I(t, s, c), this.imageElement.style.left = `${e}px`, this.imageElement.style.top = `${t}px`;
};
_a = function() {
  const t = { x1: 0, y1: 0, x2: 0, y2: 0 }, e = this.maskElement.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
  return t.x1 = (e.left - i.left) / i.width, t.y1 = (e.top - i.top) / i.height, t.x2 = Math.abs((e.right - i.right) / i.width), t.y2 = Math.abs((e.bottom - i.bottom) / i.height), t;
};
st = function(t, e) {
  const i = this.viewportElement.getBoundingClientRect();
  return {
    left: t - i.left,
    top: e - i.top
  };
};
xa = function() {
  if (!this.value) return;
  const { x1: t, x2: e, y1: i, y2: n } = f(this, m, _a).call(this);
  this.value = {
    ...this.value,
    coordinates: { x1: t, x2: e, y1: i, y2: n }
  }, this.dispatchEvent(new ee());
};
ya = function() {
  this.dispatchEvent(new ee());
};
ba = function() {
  this.value && (delete this.value.coordinates, this.dispatchEvent(new ee()));
};
wa = function(t) {
  const e = t.target;
  this.zoom = Number(e.value);
};
Ee = /* @__PURE__ */ new WeakMap();
de = /* @__PURE__ */ new WeakMap();
ue = /* @__PURE__ */ new WeakMap();
Te = /* @__PURE__ */ new WeakMap();
j.styles = q`
		:host {
			display: grid;
			grid-template-rows: 1fr auto auto;
			gap: var(--uui-size-space-3);
			height: 100%;
			width: 100%;
		}
		#viewport {
			background-color: #fff;
			background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
			background-repeat: repeat;
			background-size: 10px 10px;
			contain: strict;
			overflow: hidden;
			position: relative;
			width: 100%;
			height: 100%;
			outline: 1px solid var(--uui-color-border);
			border-radius: var(--uui-border-radius);
		}
		#actions {
			display: flex;
			justify-content: flex-end;
			gap: var(--uui-size-space-1);
			margin-top: 0.5rem;
		}

		#mask {
			display: block;
			position: absolute;
			box-shadow: 0 0 0 2000px hsla(0, 0%, 100%, 0.8);
			pointer-events: none;
		}

		#image {
			display: block;
			position: absolute;
			user-select: none;
		}

		#viewport #image {
			cursor: move;
		}

		#slider {
			width: 100%;
			height: 0px; /* TODO: FIX - This is needed to prevent the slider from taking up more space than needed */
			min-height: 22px; /* TODO: FIX - This is needed to prevent the slider from taking up more space than needed */
		}
	`;
it([
  et("#viewport")
], j.prototype, "viewportElement", 2);
it([
  et("#mask")
], j.prototype, "maskElement", 2);
it([
  et("#image")
], j.prototype, "imageElement", 2);
it([
  l({ type: Object, attribute: !1 })
], j.prototype, "value", 2);
it([
  l({ type: String })
], j.prototype, "src", 2);
it([
  l({ attribute: !1 })
], j.prototype, "focalPoint", 2);
it([
  l({ type: Number })
], j.prototype, "zoom", 1);
it([
  p()
], j.prototype, "_zoom", 2);
j = it([
  z("umb-image-cropper")
], j);
var Oo = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, ka = (t) => {
  throw TypeError(t);
}, yt = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ao(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Oo(e, i, a), a;
}, Ma = (t, e, i) => e.has(t) || ka("Cannot " + i), Ve = (t, e, i) => (Ma(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Ue = (t, e, i) => e.has(t) ? ka("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Et = (t, e, i) => (Ma(t, e, "access private method"), i), _e, ot, $a, Ea, gi, Ta, Ca, Pa, qa;
const Ro = { left: 0.5, top: 0.5 }, Do = {
  temporaryFileId: null,
  src: "",
  crops: [],
  focalPoint: Ro
};
let Z = class extends ai(X, void 0) {
  constructor() {
    super(), Ue(this, ot), this.crops = [], this._loading = !0, Ue(this, _e, new Jn(this)), Ue(this, gi, () => {
      this.value = void 0, this._file?.temporaryFile?.abortController?.abort(), this._file = void 0, this.dispatchEvent(new C());
    }), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? Xi,
      () => !!this.required && (!this.value || this.value.src === "" && this.value.temporaryFileId == null)
    );
  }
  firstUpdated() {
    Et(this, ot, Ta).call(this), Et(this, ot, $a).call(this);
  }
  render() {
    return this._loading ? r`<div id="loader"><uui-loader></uui-loader></div>` : this.value?.src || this._file ? Et(this, ot, qa).call(this) : Et(this, ot, Ca).call(this);
  }
};
_e = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakSet();
$a = async function() {
  await Ve(this, _e).initialized, this.observe(
    Ve(this, _e).part("imageFileTypes"),
    (t) => {
      this._accept = t.join(","), this._loading = !1;
    },
    "_observeFileTypes"
  );
};
Ea = function(t) {
  t.stopImmediatePropagation();
  const i = t.target.value?.[0];
  i?.status === Yi.COMPLETE && (this._file = i, this.value = Qn(this.value ?? Do, {
    temporaryFileId: i.temporaryFile?.temporaryUnique
  }), this.dispatchEvent(new C()));
};
gi = /* @__PURE__ */ new WeakMap();
Ta = function() {
  if (this.value) {
    const t = this.crops.map((e) => {
      const i = this.value.crops.find((a) => a.alias === e.alias);
      return {
        ...e,
        coordinates: i?.coordinates ?? void 0
      };
    });
    this.value = {
      ...this.value,
      crops: t
    };
  }
};
Ca = function() {
  return r`
			<umb-input-dropzone
				standalone
				accept=${zt(this._accept)}
				disable-folder-upload
				@change="${Et(this, ot, Ea)}"></umb-input-dropzone>
		`;
};
Pa = function(t) {
  const e = t.target.value;
  if (!e) {
    this.value = void 0, this.dispatchEvent(new C());
    return;
  }
  this.value && this.value.temporaryFileId && (e.temporaryFileId = this.value.temporaryFileId), (e.temporaryFileId || e.src !== "") && (this.value = e), this.dispatchEvent(new C());
};
qa = function() {
  return r`<umb-image-cropper-field
			.value=${this.value}
			.file=${this._file?.temporaryFile?.file}
			@change=${Et(this, ot, Pa)}>
			<uui-button slot="actions" @click=${Ve(this, gi)} label=${this.localize.term("content_uploadClear")}>
				<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
			</uui-button>
		</umb-image-cropper-field> `;
};
Z.styles = [
  Gi,
  q`
			umb-input-dropzone {
				max-width: 500px;
				min-width: 300px;
			}
			#loader {
				display: flex;
				justify-content: center;
			}
		`
];
yt([
  l({ type: Boolean })
], Z.prototype, "required", 2);
yt([
  l({ type: String })
], Z.prototype, "requiredMessage", 2);
yt([
  l({ attribute: !1 })
], Z.prototype, "crops", 2);
yt([
  p()
], Z.prototype, "_file", 2);
yt([
  p()
], Z.prototype, "_accept", 2);
yt([
  p()
], Z.prototype, "_loading", 2);
Z = yt([
  z("umb-input-image-cropper")
], Z);
const lr = new _t("UmbCollectionContext"), pr = new te("Umb.Modal.Media.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
var Fo = Object.getOwnPropertyDescriptor, za = (t) => {
  throw TypeError(t);
}, Wo = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Fo(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = s(a) || a);
  return a;
}, No = (t, e, i) => e.has(t) || za("Cannot " + i), Bo = (t, e, i) => e.has(t) ? za("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), jo = (t, e, i) => (No(t, e, "access private method"), i), Ye, Ua;
let Ge = class extends S {
  constructor() {
    super(...arguments), Bo(this, Ye);
  }
  renderActions() {
    return r`
			<slot name="actions"></slot>
			${Vi(
      !this.hideFocalPoint,
      () => r`
					<uui-button
						compact
						id="reset-focal-point"
						label=${this.localize.term("content_resetFocalPoint")}
						@click=${this.onResetFocalPoint}>
						<uui-icon name="icon-axis-rotation"></uui-icon>
						${this.localize.term("content_resetFocalPoint")}
					</uui-button>
				`
    )}
		`;
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return r` <umb-image-cropper-preview
				@click=${jo(this, Ye, Ua)}
				?active=${!this.currentCrop}
				.label=${this.localize.term("general_media")}></umb-image-cropper-preview>

			${pt(
        this.crops,
        (t) => t.alias + JSON.stringify(t.coordinates),
        (t) => r`
					<umb-image-cropper-preview
						?active=${this.currentCrop?.alias === t.alias}
						@click=${() => this.onCropClick(t)}
						.crop=${t}
						.focalPoint=${this.focalPoint}
						.src=${this.source}></umb-image-cropper-preview>
				`
      )}`;
  }
};
Ye = /* @__PURE__ */ new WeakSet();
Ua = function() {
  this.currentCrop = void 0;
};
Ge.styles = q`
		:host {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			gap: var(--uui-size-space-3);
			height: 400px;
		}

		#main {
			width: 100%;
			height: 100%;
			display: flex;
			gap: var(--uui-size-space-1);
			flex-direction: column;
		}

		#actions {
			display: flex;
			justify-content: space-between;
		}

		#reset-focal-point uui-icon {
			padding-right: var(--uui-size-3);
		}

		slot[name='actions'] {
			display: block;
			flex: 1;
		}

		#reset-current-crop[active],
		[active] {
			background-color: var(--uui-color-current);
		}

		umb-image-cropper-focus-setter {
			height: calc(100% - 33px - var(--uui-size-space-1)); /* Temp solution to make room for actions */
		}

		#side {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			flex: none;
			gap: var(--uui-size-space-3);
			flex-grow: 1;
			overflow-y: auto;
			height: fit-content;
			max-height: 100%;
		}
	`;
Ge = Wo([
  z("umb-image-cropper-editor-field")
], Ge);
const _i = new te(
  "Umb.Modal.MediaPicker",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var Lo = Object.defineProperty, Ho = Object.getOwnPropertyDescriptor, Ia = (t) => {
  throw TypeError(t);
}, ct = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ho(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Lo(e, i, a), a;
}, xi = (t, e, i) => e.has(t) || Ia("Cannot " + i), Sa = (t, e, i) => (xi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Ie = (t, e, i) => e.has(t) ? Ia("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Vo = (t, e, i, n) => (xi(t, e, "write to private field"), e.set(t, i), i), Jt = (t, e, i) => (xi(t, e, "access private method"), i), yi, xe, gt, bi, Oa, Aa, Ra;
let F = class extends ni {
  constructor() {
    super(), Ie(this, gt), Ie(this, yi, new Zi(this)), this._key = "", this._unique = "", this._hideFocalPoint = !1, this._crops = [], this._editMediaPath = "", Ie(this, xe), this.consumeContext(Ki, (t) => {
      Vo(this, xe, t);
    }), new oi(this, Qi).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((t) => {
      this._editMediaPath = t({});
    });
  }
  connectedCallback() {
    super.connectedCallback(), this._key = this.data?.key ?? "", this._unique = this.data?.unique ?? "", this._hideFocalPoint = this.data?.hideFocalPoint ?? !1, this._crops = this.data?.cropOptions ?? [], this._pickableFilter = this.data?.pickableFilter, Jt(this, gt, bi).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectMedia")}>
				${Jt(this, gt, Ra).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
yi = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
gt = /* @__PURE__ */ new WeakSet();
bi = async function() {
  const { data: t } = await Sa(this, yi).requestItems([this._unique]), e = t?.[0];
  if (!e?.url) return;
  const i = this._crops.map((a) => {
    const o = this.value.crops?.find((s) => s.alias === a.alias);
    return o ? { ...a, ...o } : a;
  }), n = {
    ...this.value,
    src: e.url,
    crops: i,
    focalPoint: this.value.focalPoint ?? { left: 0.5, top: 0.5 }
  };
  this._imageCropperValue = n;
};
Oa = async function() {
  const e = await Sa(this, xe)?.open(this, _i, {
    data: { multiple: !1, pickableFilter: this._pickableFilter },
    value: { selection: [this._unique] }
  })?.onSubmit().catch(() => null);
  if (!e) return;
  const i = e.selection[0];
  if (!i)
    throw new Error("No media selected");
  this._unique = i, this.value = { ...this.value, unique: this._unique }, Jt(this, gt, bi).call(this);
};
Aa = function(t) {
  const e = t.target.value;
  e && (this._imageCropperValue && (this._imageCropperValue.crops = e.crops, this._imageCropperValue.focalPoint = e.focalPoint), this.value = { key: this._key, unique: this._unique, crops: e.crops, focalPoint: e.focalPoint });
};
Ra = function() {
  return r`
			<div id="layout">
				<umb-image-cropper-editor-field
					.value=${this._imageCropperValue}
					?hideFocalPoint=${this._hideFocalPoint}
					@change=${Jt(this, gt, Aa)}>
					<div id="actions" slot="actions">
						<uui-button compact @click=${Jt(this, gt, Oa)} label=${this.localize.term("mediaPicker_changeMedia")}>
							<uui-icon name="icon-search"></uui-icon>${this.localize.term("mediaPicker_changeMedia")}
						</uui-button>
						<uui-button
							compact
							href=${this._editMediaPath + "edit/" + this._unique}
							label=${this.localize.term("mediaPicker_openMedia")}>
							<uui-icon name="icon-out"></uui-icon>${this.localize.term("mediaPicker_openMedia")}
						</uui-button>
					</div>
				</umb-image-cropper-editor-field>
			</div>
		`;
};
F.styles = [
  q`
			#layout {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			umb-image-cropper-editor-field {
				flex-grow: 1;
			}

			#actions {
				display: inline-flex;
				gap: var(--uui-size-space-3);
			}
			uui-icon {
				padding-right: var(--uui-size-3);
			}

			#options {
				display: flex;
				justify-content: center;
			}

			img {
				max-width: 80%;
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
ct([
  p()
], F.prototype, "_imageCropperValue", 2);
ct([
  p()
], F.prototype, "_key", 2);
ct([
  p()
], F.prototype, "_unique", 2);
ct([
  p()
], F.prototype, "_hideFocalPoint", 2);
ct([
  p()
], F.prototype, "_crops", 2);
ct([
  p()
], F.prototype, "_editMediaPath", 2);
ct([
  p()
], F.prototype, "_pickableFilter", 2);
F = ct([
  z("umb-image-cropper-editor-modal")
], F);
const Yo = F, cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbImageCropperEditorModalElement() {
    return F;
  },
  default: Yo
}, Symbol.toStringTag, { value: "Module" })), Go = new te("Umb.Modal.ImageCropperEditor", {
  modal: {
    type: "sidebar",
    size: "full"
  }
}), dr = new te("Umb.Modal.MediaCaptionAltText", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), G = "media", ie = "media-root", ur = "umb-media-placeholder", mr = `${G}-property-value`;
class Xo {
  #t;
  /**
   * Creates an instance of UmbMediaServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaServerDataSource
   */
  constructor(e) {
    this.#t = e;
  }
  /**
   * Creates a new Media scaffold
   * @param {Partial<UmbMediaDetailModel>} [preset]
   * @returns { UmbMediaDetailModel }
   * @memberof UmbMediaServerDataSource
   */
  async createScaffold(e = {}) {
    return { data: {
      entityType: G,
      unique: $e.new(),
      mediaType: {
        unique: "",
        collection: null,
        icon: null
      },
      isTrashed: !1,
      values: [],
      variants: [
        {
          culture: null,
          segment: null,
          name: "",
          createDate: null,
          updateDate: null
        }
      ],
      ...e
    } };
  }
  /**
   * Fetches a Media with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: i, error: n } = await Mt(this.#t, H.getMediaById({ path: { id: e } }));
    return n || !i ? { error: n } : { data: {
      entityType: G,
      unique: i.id,
      values: i.values,
      variants: i.variants.map((o) => ({
        state: null,
        culture: o.culture || null,
        segment: o.segment || null,
        name: o.name,
        createDate: o.createDate,
        updateDate: o.updateDate
      })),
      mediaType: {
        unique: i.mediaType.id,
        collection: i.mediaType.collection ? { unique: i.mediaType.collection.id } : null,
        icon: i.mediaType.icon
      },
      isTrashed: i.isTrashed
    } };
  }
  /**
   * Inserts a new Media on the server
   * @param {UmbMediaDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async create(e, i = null) {
    if (!e) throw new Error("Media is missing");
    if (!e.unique) throw new Error("Media unique is missing");
    const n = {
      id: e.unique,
      parent: i ? { id: i } : null,
      mediaType: { id: e.mediaType.unique },
      values: e.values,
      variants: e.variants.map((s) => ({
        culture: s.culture || null,
        segment: s.segment || null,
        name: s.name
      }))
    }, { data: a, error: o } = await Mt(
      this.#t,
      H.postMedia({
        body: n
      })
    );
    return a && typeof a == "string" ? this.read(a) : { error: o };
  }
  /**
   * Updates a Media on the server
   * @param {UmbMediaDetailModel} Media
   * @param model
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const i = {
      values: e.values,
      variants: e.variants
    }, { error: n } = await Mt(
      this.#t,
      H.putMediaById({
        path: { id: e.unique },
        body: i
      })
    );
    return n ? { error: n } : this.read(e.unique);
  }
  /**
   * Deletes a Media on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return Mt(this.#t, H.deleteMediaById({ path: { id: e } }));
  }
}
const Ko = new _t("UmbMediaDetailStore");
class Pt extends go {
  constructor(e) {
    super(e, Xo, Ko);
  }
}
const hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaDetailRepository: Pt,
  api: Pt,
  default: Pt
}, Symbol.toStringTag, { value: "Module" }));
class Bi extends _o {
  /**
   * Creates an instance of UmbMediaItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaItemServerDataSource
   */
  constructor(e) {
    super(e, {
      mapper: ji
    });
  }
  /**
   * @deprecated - The search method will be removed in v17. Use the
   * Use the UmbMediaSearchProvider instead.
   * Get it from:
   * ```ts
   * import { UmbMediaSearchProvider } from '@umbraco-cms/backoffice/media';
   * ```
   */
  async search({ query: e, skip: i, take: n }) {
    const { data: a, error: o } = await Mt(this, H.getItemMediaSearch({ query: { query: e, skip: i, take: n } }));
    return { data: a?.items.map((c) => ji(c)), error: o };
  }
  async getItems(e) {
    if (!e) throw new Error("Uniques are missing");
    const i = new bo(this, {
      // eslint-disable-next-line local-rules/no-direct-api-import
      api: (o) => H.getItemMedia({ query: { id: o.uniques } }),
      uniques: e
    }), { data: n, error: a } = await i.request();
    return { data: this._getMappedItems(n), error: a };
  }
}
const ji = (t) => ({
  entityType: G,
  hasChildren: t.hasChildren,
  isTrashed: t.isTrashed,
  unique: t.id,
  mediaType: {
    unique: t.mediaType.id,
    icon: t.mediaType.icon,
    collection: t.mediaType.collection ? { unique: t.mediaType.collection.id } : null
  },
  name: t.variants[0]?.name,
  // TODO: get correct variant name
  parent: t.parent ? { unique: t.parent.id } : null,
  variants: t.variants.map((e) => ({
    culture: e.culture || null,
    name: e.name
  }))
}), Qo = new _t("UmbMediaItemStore");
class Xe extends xo {
  #t;
  constructor(e) {
    super(e, Bi, Qo), this.#t = new Bi(this);
  }
  /**
   * @param root0
   * @param root0.query
   * @param root0.skip
   * @param root0.take
   * @deprecated - The search method will be removed in v17. Use the
   * Use the UmbMediaSearchProvider instead.
   * Get it from:
   * ```ts
   * import { UmbMediaSearchProvider } from '@umbraco-cms/backoffice/media';
   */
  async search({ query: e, skip: i, take: n }) {
    return this.#t.search({ query: e, skip: i, take: n });
  }
}
const vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaItemRepository: Xe,
  default: Xe
}, Symbol.toStringTag, { value: "Module" }));
class Jo extends lo {
  /**
   * Creates an instance of UmbMediaTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTreeServerDataSource
   */
  constructor(e) {
    super(e, {
      getRootItems: Da,
      getChildrenOf: Zo,
      getAncestorsOf: ts,
      mapper: es
    });
  }
}
const Da = (t) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  H.getTreeMediaRoot({ query: { dataTypeId: t.dataType?.unique, skip: t.skip, take: t.take } })
), Zo = (t) => t.parent.unique === null ? Da(t) : H.getTreeMediaChildren({
  query: { parentId: t.parent.unique, dataTypeId: t.dataType?.unique, skip: t.skip, take: t.take }
}), ts = (t) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  H.getTreeMediaAncestors({
    query: { descendantId: t.treeItem.unique }
  })
), es = (t) => ({
  unique: t.id,
  parent: {
    unique: t.parent ? t.parent.id : null,
    entityType: t.parent ? G : ie
  },
  entityType: G,
  hasChildren: t.hasChildren,
  noAccess: t.noAccess,
  isTrashed: t.isTrashed,
  isFolder: !1,
  mediaType: {
    unique: t.mediaType.id,
    icon: t.mediaType.icon,
    collection: t.mediaType.collection ? { unique: t.mediaType.collection.id } : null
  },
  name: t.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  variants: t.variants.map((e) => ({
    name: e.name,
    culture: e.culture || null
  })),
  createDate: t.createDate
}), is = new _t("UmbMediaTreeStore");
class ye extends po {
  constructor(e) {
    super(e, Jo, is);
  }
  async requestTreeRoot() {
    const { data: e } = await this._treeSource.getRootItems({ skip: 0, take: 1 }), i = e ? e.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: ie,
      name: "#treeHeaders_media",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
const fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaTreeRepository: ye,
  default: ye
}, Symbol.toStringTag, { value: "Module" }));
var as = Object.defineProperty, ns = Object.getOwnPropertyDescriptor, Fa = (t) => {
  throw TypeError(t);
}, St = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ns(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && as(e, i, a), a;
}, Wa = (t, e, i) => e.has(t) || Fa("Cannot " + i), Ke = (t, e, i) => (Wa(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Se = (t, e, i) => e.has(t) ? Fa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Dt = (t, e, i) => (Wa(t, e, "access private method"), i), wi, be, dt, Qe, Na, Ba, ja;
const me = { name: "Media", unique: null, entityType: ie };
let lt = class extends X {
  constructor() {
    super(...arguments), Se(this, dt), Se(this, wi, new ye(this)), Se(this, be, new Pt(this)), this.startNode = me, this._currentMedia = me, this._paths = [me], this._typingNewFolder = !1;
  }
  set currentMedia(t) {
    t !== this._currentMedia && (this._currentMedia = t, Dt(this, dt, Qe).call(this));
  }
  get currentMedia() {
    return this._currentMedia;
  }
  firstUpdated(t) {
    super.firstUpdated(t), Dt(this, dt, Qe).call(this);
  }
  render() {
    return r`<div id="path">
			${pt(
      this._paths,
      (t) => t.unique,
      (t) => r`<uui-button
							compact
							.label=${t.name}
							?disabled=${this.currentMedia.unique === t.unique}
							@click=${() => Dt(this, dt, Na).call(this, t)}></uui-button
						>/`
    )}${this._typingNewFolder ? r`<uui-input
						id="new-folder"
						label="enter a name"
						value="new folder name"
						@blur=${Dt(this, dt, ja)}
						auto-width></uui-input>` : r`<uui-button label="add folder" compact @click=${Dt(this, dt, Ba)}>+</uui-button>`}
		</div>`;
  }
};
wi = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakSet();
Qe = async function() {
  const t = this._currentMedia.unique, e = this._currentMedia.entityType, n = (t ? (await Ke(this, wi).requestTreeItemAncestors({
    treeItem: { unique: t, entityType: e }
  })).data || [] : []).map((a) => ({
    name: a.name,
    unique: a.unique,
    entityType: a.entityType
  }));
  this.startNode || n.unshift(me), this._paths = [...n];
};
Na = function(t) {
  this._paths = [...this._paths].slice(0, this._paths.findIndex((e) => e.unique === t.unique) + 1), this.currentMedia = t, this.dispatchEvent(new C());
};
Ba = function() {
  this._typingNewFolder = !0, requestAnimationFrame(() => {
    const t = this.getHostElement().shadowRoot.querySelector("#new-folder");
    t.focus(), t.select();
  });
};
ja = async function(t) {
  t.stopPropagation();
  const e = t.target.value;
  if (this._typingNewFolder = !1, !e) return;
  const i = $e.new(), n = this._paths[this._paths.length - 1].unique, a = {
    unique: i,
    mediaType: {
      unique: mo(),
      collection: null
    },
    variants: [
      {
        culture: null,
        segment: null,
        name: e,
        createDate: null,
        updateDate: null
      }
    ]
  }, { data: o } = await Ke(this, be).createScaffold(a);
  if (!o) return;
  const { data: s } = await Ke(this, be).create(o, n);
  if (!s) return;
  const c = s.variants[0].name, v = s.unique, x = s.entityType;
  this._paths = [...this._paths, { name: c, unique: v, entityType: x }], this.currentMedia = { name: c, unique: v, entityType: x }, this.dispatchEvent(new C());
};
lt.styles = [
  q`
			#path {
				display: flex;
				align-items: center;
				margin: 0 var(--uui-size-3);
			}
			#path uui-button {
				font-weight: bold;
			}
			#path uui-input {
				height: 100%;
			}
		`
];
St([
  l({ attribute: !1 })
], lt.prototype, "startNode", 2);
St([
  l({ attribute: !1 })
], lt.prototype, "currentMedia", 1);
St([
  p()
], lt.prototype, "_currentMedia", 2);
St([
  p()
], lt.prototype, "_paths", 2);
St([
  p()
], lt.prototype, "_typingNewFolder", 2);
lt = St([
  z("umb-media-picker-folder-path")
], lt);
var os = Object.defineProperty, ss = Object.getOwnPropertyDescriptor, La = (t) => {
  throw TypeError(t);
}, Ce = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ss(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && os(e, i, a), a;
}, Ha = (t, e, i) => e.has(t) || La("Cannot " + i), Va = (t, e, i) => (Ha(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Oe = (t, e, i) => e.has(t) ? La("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Je = (t, e, i) => (Ha(t, e, "access private method"), i), ki, Mi, Gt, Ya, Ga, Xa;
let Ut = class extends X {
  constructor() {
    super(...arguments), Oe(this, Gt), Oe(this, ki, new ho(this)), Oe(this, Mi, new Pt(this)), this._node = null, this._popoverOpen = !1, this._allowedMediaTypes = [];
  }
  set node(t) {
    this._node = t, Je(this, Gt, Ga).call(this);
  }
  get node() {
    return this._node;
  }
  render() {
    return r`
			<uui-button
				popovertarget="collection-action-menu-popover"
				label=${this.localize.term("actions_create")}
				color="default"
				look="outline">
				${this.localize.term("actions_create")}
				<uui-symbol-expand .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="collection-action-menu-popover"
				placement="bottom-start"
				@toggle=${Je(this, Gt, Xa)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${this._allowedMediaTypes.length ? pt(
      this._allowedMediaTypes,
      (t) => t.unique,
      (t) => r`<uui-menu-item label=${t.name}>
											<umb-icon slot="icon" name=${t.icon ?? "icon-circle-dotted"}></umb-icon>
										</uui-menu-item>`
    ) : r`<div id="not-allowed">${this.localize.term("mediaPicker_notAllowed")}</div>`}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
ki = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Gt = /* @__PURE__ */ new WeakSet();
Ya = async function() {
  if (!this._node) return null;
  const { data: t } = await Va(this, Mi).requestByUnique(this.node);
  return t?.mediaType.unique ?? null;
};
Ga = async function() {
  const t = await Je(this, Gt, Ya).call(this), { data: e } = await Va(this, ki).requestAllowedChildrenOf(t, this._node);
  this._allowedMediaTypes = e?.items ?? [];
};
Xa = function(t) {
  this._popoverOpen = t.newState === "open";
};
Ut.styles = [
  q`
			#not-allowed {
				padding: var(--uui-size-space-3);
			}
		`
];
Ce([
  l()
], Ut.prototype, "node", 1);
Ce([
  p()
], Ut.prototype, "_popoverOpen", 2);
Ce([
  p()
], Ut.prototype, "_allowedMediaTypes", 2);
Ut = Ce([
  z("umb-media-picker-create-item")
], Ut);
class rs {
  #t;
  /**
   * Creates an instance of UmbMediaSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaSearchServerDataSource
   */
  constructor(e) {
    this.#t = e;
  }
  /**
   * Get a list of versions for a data
   * @param {UmbMediaSearchRequestArgs}args - The arguments for the search
   * @returns {*}
   * @memberof UmbMediaSearchServerDataSource
   */
  async search(e) {
    const { data: i, error: n } = await Mt(
      this.#t,
      H.getItemMediaSearch({
        query: {
          allowedMediaTypes: e.allowedContentTypes?.map((a) => a.unique),
          culture: e.culture || void 0,
          parentId: e.searchFrom?.unique || void 0,
          query: e.query,
          trashed: e.includeTrashed
        }
      })
    );
    return i ? { data: { items: i.items.map((o) => ({
      entityType: G,
      hasChildren: o.hasChildren,
      href: "/section/media/workspace/media/edit/" + o.id,
      isTrashed: o.isTrashed,
      unique: o.id,
      mediaType: {
        collection: o.mediaType.collection ? { unique: o.mediaType.collection.id } : null,
        icon: o.mediaType.icon,
        unique: o.mediaType.id
      },
      name: o.variants[0]?.name,
      // TODO: get correct variant name
      parent: o.parent ? { unique: o.parent.id } : null,
      variants: o.variants.map((s) => ({
        culture: s.culture || null,
        name: s.name
      }))
    })), total: i.total } } : { error: n };
  }
}
class ls extends na {
  #t;
  constructor(e) {
    super(e), this.#t = new rs(this);
  }
  search(e) {
    return this.#t.search(e);
  }
}
class Ze extends na {
  #t = new ls(this);
  async search(e) {
    return this.#t.search(e);
  }
  destroy() {
    this.#t.destroy();
  }
}
const gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaSearchProvider: Ze,
  api: Ze
}, Symbol.toStringTag, { value: "Module" }));
var ps = Object.defineProperty, cs = Object.getOwnPropertyDescriptor, Ka = (t) => {
  throw TypeError(t);
}, O = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? cs(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && ps(e, i, a), a;
}, $i = (t, e, i) => e.has(t) || Ka("Cannot " + i), V = (t, e, i) => ($i(t, e, "read from private field"), i ? i.call(t) : e.get(t)), nt = (t, e, i) => e.has(t) ? Ka("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Li = (t, e, i, n) => ($i(t, e, "write to private field"), e.set(t, i), i), u = (t, e, i) => ($i(t, e, "access private method"), i), Ei, ti, Ti, we, It, ke, d, Ot, Qa, Ja, Ci, Za, Pi, tn, qi, en, an, nn, on, sn, rn, ln, pn, cn, zi, dn;
const un = { name: "Media", unique: null, entityType: ie };
let w = class extends ni {
  constructor() {
    super(), nt(this, d), nt(this, Ei, new ye(this)), nt(this, ti, new Xe(this)), nt(this, Ti, new Ze(this)), nt(this, we), this._selectableFilter = () => !0, this._currentChildren = [], this._currentPage = 1, this._currentTotalPages = 0, this._searchResult = [], this._searchQuery = "", this._currentMediaEntity = un, this._isSelectionMode = !1, this._searching = !1, nt(this, It, /* @__PURE__ */ new Map()), nt(this, ke), nt(this, qi, io(() => {
      u(this, d, tn).call(this);
    }, 500)), this.consumeContext(wo, (t) => {
      this.observe(t?.dataType, (e) => {
        Li(this, we, e);
      });
    }), this.consumeContext(ta, (t) => {
      this.observe(t?.culture, (e) => {
        Li(this, ke, e);
      });
    });
  }
  async connectedCallback() {
    super.connectedCallback(), this.data?.pickableFilter && (this._selectableFilter = this.data?.pickableFilter);
  }
  async firstUpdated(t) {
    super.firstUpdated(t);
    const e = this.data?.startNode;
    if (e) {
      const { data: i } = await V(this, ti).requestItems([e.unique]);
      this._startNode = i?.[0], this._startNode && (this._currentMediaEntity = {
        name: this._startNode.name,
        unique: this._startNode.unique,
        entityType: this._startNode.entityType
      }, this._searchFrom = { unique: this._startNode.unique, entityType: this._startNode.entityType });
    }
    u(this, d, Ot).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_chooseMedia")}>
				${u(this, d, rn).call(this)} ${u(this, d, dn).call(this)}
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_choose")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
Ei = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
ke = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
Ot = async function(t) {
  const e = this._currentMediaEntity.entityType + this._currentMediaEntity.unique;
  let i = V(this, It).get(e);
  i || (i = new ao(), i.setPageSize(100), V(this, It).set(e, i));
  const n = i.getSkip(), a = i.getPageSize(), { data: o } = await V(this, Ei).requestTreeItemsOf({
    parent: {
      unique: this._currentMediaEntity.unique,
      entityType: this._currentMediaEntity.entityType
    },
    dataType: V(this, we),
    skip: n,
    take: a
  });
  if (this._currentChildren = o?.items ?? [], i.setTotalItems(o?.total ?? 0), this._currentPage = i.getCurrentPageNumber(), this._currentTotalPages = i.getTotalPages(), t?.length) {
    const s = this._currentChildren.find((c) => c.unique == t[0].unique);
    s && u(this, d, Ci).call(this, s);
  }
};
Qa = function(t) {
  const e = t.target;
  u(this, d, Ot).call(this, e.value);
};
Ja = function(t) {
  u(this, d, Pi).call(this), this._currentMediaEntity = {
    name: t.name,
    unique: t.unique,
    entityType: ie
  }, this._searchFrom = this._currentMediaEntity.unique ? { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : void 0, u(this, d, Ot).call(this);
};
Ci = function(t) {
  const e = this.data?.multiple ? [...this.value.selection, t.unique] : [t.unique];
  this._isSelectionMode = e.length > 0, this.modalContext?.setValue({ selection: e });
};
Za = function(t) {
  const e = this.value.selection.filter((i) => i !== t.unique);
  this._isSelectionMode = e.length > 0, this.modalContext?.setValue({ selection: e });
};
Pi = function() {
  this._searchQuery = "", this._searchResult = [];
};
tn = async function() {
  if (!this._searchQuery) {
    u(this, d, Pi).call(this), this._searching = !1;
    return;
  }
  const t = this._searchQuery, { data: e } = await V(this, Ti).search({
    query: t,
    searchFrom: this._searchFrom,
    culture: V(this, ke),
    ...this.data?.search?.queryParams
  });
  if (!e) {
    this._searchResult = [], this._searching = !1;
    return;
  }
  this._searchResult = e.items, this._searching = !1;
};
qi = /* @__PURE__ */ new WeakMap();
en = function(t) {
  this._searchQuery = t.target.value.toLocaleLowerCase(), this._searching = !0, V(this, qi).call(this);
};
an = function(t) {
  const e = t.target;
  e.currentMedia ? this._currentMediaEntity = e.currentMedia : this._startNode ? this._currentMediaEntity = {
    name: this._startNode.name,
    unique: this._startNode.unique,
    entityType: this._startNode.entityType
  } : this._currentMediaEntity = un, this._currentMediaEntity.unique ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0, u(this, d, Ot).call(this);
};
nn = function(t) {
  t.stopPropagation();
  const e = this._currentMediaEntity.entityType + this._currentMediaEntity.unique, i = V(this, It).get(e);
  if (!i)
    throw new Error("Pagination manager not found");
  i.setCurrentPageNumber(t.target.current), V(this, It).set(e, i), u(this, d, Ot).call(this);
};
on = function(t) {
  return vo(t.mediaType.unique) || t.hasChildren;
};
sn = function(t) {
  t.target.checked ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0;
};
rn = function() {
  return r`${u(this, d, cn).call(this)}
			<umb-dropzone-media
				id="dropzone"
				multiple
				@change=${u(this, d, Qa)}
				.parentUnique=${this._currentMediaEntity.unique}></umb-dropzone-media>
			${this._searchQuery ? u(this, d, ln).call(this) : u(this, d, pn).call(this)} `;
};
ln = function() {
  return r`
			${!this._searchResult.length && !this._searching ? r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>` : r`<div id="media-grid">
						${pt(
    this._searchResult,
    (t) => t.unique,
    (t) => u(this, d, zi).call(this, t)
  )}
					</div>`}
		`;
};
pn = function() {
  return r`
			${this._currentChildren.length ? r`<div id="media-grid">
							${pt(
    this._currentChildren,
    (t) => t.unique,
    (t) => u(this, d, zi).call(this, t)
  )}
						</div>
						${this._currentTotalPages > 1 ? r`<uui-pagination
									.current=${this._currentPage}
									.total=${this._currentTotalPages}
									@change=${u(this, d, nn)}></uui-pagination>` : k}` : r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>`}
		`;
};
cn = function() {
  return r`
			<div id="toolbar">
				<div id="search">
					<uui-input
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}
						@input=${u(this, d, en)}
						value=${this._searchQuery}>
						<div slot="prepend">
							${this._searching ? r`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : r`<uui-icon name="search"></uui-icon>`}
						</div>
					</uui-input>

					${this._currentMediaEntity.unique && this._currentMediaEntity.unique !== this._startNode?.unique ? r`<uui-checkbox
								?checked=${this._searchFrom?.unique === this._currentMediaEntity.unique}
								@change=${u(this, d, sn)}
								label="Search only in ${this._currentMediaEntity.name}"></uui-checkbox>` : k}
				</div>
				<uui-button
					@click=${() => this._dropzone.browse()}
					label=${this.localize.term("general_upload")}
					look="outline"
					color="default"></uui-button>
			</div>
		`;
};
zi = function(t) {
  const e = u(this, d, on).call(this, t), i = this._selectableFilter(t);
  return r`
			<uui-card-media
				class=${zt(!(i || e) ? "not-allowed" : void 0)}
				.name=${t.name}
				data-mark="${t.entityType}:${t.unique}"
				@open=${() => u(this, d, Ja).call(this, t)}
				@selected=${() => u(this, d, Ci).call(this, t)}
				@deselected=${() => u(this, d, Za).call(this, t)}
				?selected=${this.value?.selection?.find((a) => a === t.unique)}
				?selectable=${i}
				?select-only=${this._isSelectionMode || e === !1}>
				<umb-imaging-thumbnail
					unique=${t.unique}
					alt=${t.name}
					icon=${t.mediaType.icon}></umb-imaging-thumbnail>
			</uui-card-media>
		`;
};
dn = function() {
  if (this._searchQuery && this._currentMediaEntity.unique && !this._searchFrom)
    return k;
  const t = this._startNode ? {
    entityType: this._startNode.entityType,
    unique: this._startNode.unique,
    name: this._startNode.name
  } : void 0;
  return r`<umb-media-picker-folder-path
			slot="footer-info"
			.currentMedia=${this._currentMediaEntity}
			.startNode=${t}
			@change=${u(this, d, an)}></umb-media-picker-folder-path>`;
};
w.styles = [
  q`
			#toolbar {
				display: flex;
				gap: var(--uui-size-6);
				align-items: flex-start;
				margin-bottom: var(--uui-size-3);
			}
			#search {
				flex: 1;
			}

			#search uui-input {
				width: 100%;
				margin-bottom: var(--uui-size-3);
			}
			#search uui-input [slot='prepend'] {
				display: flex;
				align-items: center;
			}

			#searching-indicator {
				margin-left: 7px;
				margin-top: 4px;
			}

			#media-grid {
				display: grid;
				gap: var(--uui-size-space-5);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
				padding-bottom: 5px; /** The modal is a bit jumpy due to the img card focus/hover border. This fixes the issue. */
			}

			/** TODO: Remove this fix when UUI gets upgrade to 1.3 */
			umb-imaging-thumbnail {
				pointer-events: none;
			}

			umb-icon {
				font-size: var(--uui-size-8);
			}

			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}

			#actions {
				max-width: 100%;
			}

			.not-allowed {
				cursor: not-allowed;
				opacity: 0.5;
			}

			uui-pagination {
				display: block;
				margin-top: var(--uui-size-layout-1);
			}
		`
];
O([
  p()
], w.prototype, "_selectableFilter", 2);
O([
  p()
], w.prototype, "_currentChildren", 2);
O([
  p()
], w.prototype, "_currentPage", 2);
O([
  p()
], w.prototype, "_currentTotalPages", 2);
O([
  p()
], w.prototype, "_searchResult", 2);
O([
  p()
], w.prototype, "_searchFrom", 2);
O([
  p()
], w.prototype, "_searchQuery", 2);
O([
  p()
], w.prototype, "_currentMediaEntity", 2);
O([
  p()
], w.prototype, "_isSelectionMode", 2);
O([
  p()
], w.prototype, "_startNode", 2);
O([
  p()
], w.prototype, "_searching", 2);
O([
  et("#dropzone")
], w.prototype, "_dropzone", 2);
w = O([
  z("umb-media-picker-modal")
], w);
const ds = w, _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaPickerModalElement() {
    return w;
  },
  default: ds
}, Symbol.toStringTag, { value: "Module" })), mn = "media";
so.generateAbsolute({
  sectionName: mn
});
const us = ro.generateAbsolute({
  sectionName: mn,
  entityType: G
}), xr = new Ji("create/parent/:parentEntityType/:parentUnique/:mediaTypeUnique", us), yr = new Ji("edit/:unique"), br = new _t(
  "UmbMediaRecycleBinTreeStore"
), hn = "Umb.Repository.MediaItem", wr = "Umb.Store.MediaItem", ms = "Umb.SearchProvider.Media", kr = new te(
  co,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.Media"
    }
  }
), Mr = new _t(
  "UmbWorkspaceContext",
  void 0,
  (t) => t.getEntityType?.() === G
), hs = (t) => t.getEntityType() === G, $r = new _t(
  "UmbVariantContext",
  void 0,
  hs
);
var vs = Object.getOwnPropertyDescriptor, vn = (t) => {
  throw TypeError(t);
}, fs = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? vs(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = s(a) || a);
  return a;
}, Ui = (t, e, i) => e.has(t) || vn("Cannot " + i), Ft = (t, e, i) => (Ui(t, e, "read from private field"), e.get(t)), ne = (t, e, i) => e.has(t) ? vn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), gs = (t, e, i, n) => (Ui(t, e, "write to private field"), e.set(t, i), i), _s = (t, e, i) => (Ui(t, e, "access private method"), i), qt, Ii, Si, ei, fn;
let Zt = class extends ni {
  constructor() {
    super(...arguments), ne(this, ei), ne(this, qt), ne(this, Ii, new Pt(this)), ne(this, Si, new Zi(this));
  }
  connectedCallback() {
    super.connectedCallback(), gs(this, qt, this.data?.mediaUnique), _s(this, ei, fn).call(this);
  }
  render() {
    return r`
			<umb-body-layout .headline=${this.localize.term("defaultdialogs_editSelectedMedia")}>
				<div id="wrapper">
					<uui-label for="alt-text">${this.localize.term("content_altTextOptional")}</uui-label>
					<uui-input
						id="alt-text"
						label="alt text"
						.value=${this.value?.altText ?? ""}
						@input=${(t) => this.value = { ...this.value, altText: t.target.value }}></uui-input>

					<uui-label for="caption">${this.localize.term("content_captionTextOptional")}</uui-label>
					<uui-input
						id="caption"
						label="caption"
						.value=${this.value?.caption ?? ""}
						@input=${(t) => this.value = { ...this.value, caption: t.target.value }}></uui-input>

					<figure id="mainobject">
						<img src=${this.value?.url ?? ""} alt=${this.value?.altText ?? ""} />
						<figcaption>${this.value?.caption ?? ""}</figcaption>
					</figure>
				</div>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${this._rejectModal}></uui-button>
					<uui-button
						label=${this.localize.term("general_submit")}
						look="primary"
						color="positive"
						@click=${this._submitModal}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
qt = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakSet();
fn = async function() {
  if (!Ft(this, qt)) return;
  const { data: t } = await Ft(this, Ii).requestByUnique(Ft(this, qt));
  if (!t) return;
  const { data: e } = await Ft(this, Si).requestItems([Ft(this, qt)]);
  this.value = {
    ...this.value,
    altText: this.value?.altText ?? t.variants[0].name,
    url: e?.[0].url ?? ""
  };
};
Zt.styles = [
  q`
			uui-input {
				margin-bottom: var(--uui-size-layout-1);
			}

			#wrapper {
				display: flex;
				flex-direction: column;
			}

			#mainobject {
				display: flex;
				flex-direction: column;
				max-width: 100%;

				img {
					max-width: 100%;
					height: auto;
				}
			}
		`
];
Zt = fs([
  z("umb-media-caption-alt-text-modal")
], Zt);
const xs = Zt, Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaCaptionAltTextModalElement() {
    return Zt;
  },
  default: xs
}, Symbol.toStringTag, { value: "Module" }));
class ys extends uo {
  constructor(e) {
    super(e, hn, _i);
  }
  async openPicker(e, i) {
    const n = {
      ...e
    };
    n.pickableFilter = (s) => this.#t(s, i?.allowedContentTypes), e?.search || (n.search = {
      providerAlias: ms,
      ...e?.search
    });
    const o = await (await this.getContext(ta))?.getDisplayCulture();
    n.search.queryParams = {
      allowedContentTypes: i?.allowedContentTypes,
      includeTrashed: i?.includeTrashed,
      culture: o,
      ...e?.search?.queryParams
    }, await super.openPicker(n);
  }
  #t = (e, i) => i && i.length > 0 ? i.map((n) => n.unique).includes(e.mediaType.unique) : !0;
}
var bs = Object.defineProperty, ws = Object.getOwnPropertyDescriptor, gn = (t) => {
  throw TypeError(t);
}, W = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ws(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && bs(e, i, a), a;
}, Oi = (t, e, i) => e.has(t) || gn("Cannot " + i), M = (t, e, i) => (Oi(t, e, "read from private field"), i ? i.call(t) : e.get(t)), oe = (t, e, i) => e.has(t) ? gn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), ks = (t, e, i, n) => (Oi(t, e, "write to private field"), e.set(t, i), i), rt = (t, e, i) => (Oi(t, e, "access private method"), i), Bt, Y, _n, jt, A, xn, yn, bn, wn, kn, Mn, $n;
const Ms = "umb-input-media";
let P = class extends ai(X) {
  constructor() {
    super(), oe(this, Y), oe(this, Bt, new ea(this, {
      getUniqueOfElement: (t) => t.getAttribute("detail"),
      getUniqueOfModel: (t) => t,
      identifier: "Umb.SorterIdentifier.InputMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: ia,
      onChange: ({ model: t }) => {
        this.selection = t, rt(this, Y, _n).call(this, t), this.dispatchEvent(new C());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.includeTrashed = !1, oe(this, jt, !1), this._editMediaPath = "", this._cards = [], oe(this, A, new ys(this)), new oi(this, Qi).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((t) => {
      this._editMediaPath = t({});
    }), this.observe(M(this, A).selection, (t) => this.value = t.join(",")), this.observe(M(this, A).selectedItems, async (t) => {
      const e = t.filter((i) => !this._cards.find((n) => n.unique === i.unique));
      t?.length && !e.length || (this._cards = t ?? []);
    }), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    );
  }
  set min(t) {
    M(this, A).min = t;
  }
  get min() {
    return M(this, A).min;
  }
  set max(t) {
    M(this, A).max = t;
  }
  get max() {
    return M(this, A).max;
  }
  set selection(t) {
    M(this, A).setSelection(t), M(this, Bt).setModel(t);
  }
  get selection() {
    return M(this, A).getSelection();
  }
  set value(t) {
    this.selection = no(t);
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return M(this, jt);
  }
  set readonly(t) {
    ks(this, jt, t), M(this, jt) ? M(this, Bt).disable() : M(this, Bt).enable();
  }
  render() {
    return r`<div class="container">${rt(this, Y, bn).call(this)} ${rt(this, Y, wn).call(this)}</div>`;
  }
};
Bt = /* @__PURE__ */ new WeakMap();
Y = /* @__PURE__ */ new WeakSet();
_n = function(t) {
  const e = {};
  t.forEach((n, a) => {
    e[n] = a;
  });
  const i = [...this._cards];
  this._cards = i.sort((n, a) => e[n.unique] - e[a.unique]);
};
jt = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
xn = function() {
  M(this, A).openPicker(
    {
      multiple: this.max > 1,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((t) => ({
        unique: t,
        entityType: fo
      })),
      includeTrashed: this.includeTrashed
    }
  );
};
yn = async function(t) {
  await M(this, A).requestRemoveItem(t.unique), this._cards = this._cards.filter((e) => e.unique !== t.unique);
};
bn = function() {
  return this._cards?.length ? r`
			${pt(
    this._cards,
    (t) => t.unique,
    (t) => rt(this, Y, kn).call(this, t)
  )}
		` : k;
};
wn = function() {
  return this._cards && this.max && this._cards.length >= this.max ? k : this.readonly && this._cards.length > 0 ? k : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${rt(this, Y, xn)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
kn = function(t) {
  const e = this.readonly ? void 0 : `${this._editMediaPath}edit/${t.unique}`;
  return r`
			<uui-card-media
				name=${zt(t.name === null ? void 0 : t.name)}
				data-mark="${t.entityType}:${t.unique}"
				href="${zt(e)}"
				?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${t.unique}
					alt=${t.name}
					icon=${t.mediaType.icon}></umb-imaging-thumbnail>
				${rt(this, Y, $n).call(this, t)}
				<uui-action-bar slot="actions"> ${rt(this, Y, Mn).call(this, t)}</uui-action-bar>
			</uui-card-media>
		`;
};
Mn = function(t) {
  return this.readonly ? k : r`
			<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => rt(this, Y, yn).call(this, t)}>
				<uui-icon name="icon-trash"></uui-icon>
			</uui-button>
		`;
};
$n = function(t) {
  return t.isTrashed ? r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		` : k;
};
P.styles = [
  q`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				gap: var(--uui-size-space-3);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media umb-icon {
				font-size: var(--uui-size-8);
			}

			uui-card-media[drag-placeholder] {
				opacity: 0.2;
			}
			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
W([
  l({ type: Number })
], P.prototype, "min", 1);
W([
  l({ type: String, attribute: "min-message" })
], P.prototype, "minMessage", 2);
W([
  l({ type: Number })
], P.prototype, "max", 1);
W([
  l({ type: String, attribute: "max-message" })
], P.prototype, "maxMessage", 2);
W([
  l({ type: Array })
], P.prototype, "allowedContentTypeIds", 2);
W([
  l({ type: Boolean, attribute: "include-trashed" })
], P.prototype, "includeTrashed", 2);
W([
  l({ type: Object, attribute: !1 })
], P.prototype, "startNode", 2);
W([
  l({ type: String })
], P.prototype, "value", 1);
W([
  l({ type: Boolean, reflect: !0 })
], P.prototype, "readonly", 1);
W([
  p()
], P.prototype, "_editMediaPath", 2);
W([
  p()
], P.prototype, "_cards", 2);
P = W([
  z(Ms)
], P);
var $s = Object.defineProperty, Es = Object.getOwnPropertyDescriptor, En = (t) => {
  throw TypeError(t);
}, b = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Es(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && $s(e, i, a), a;
}, Ai = (t, e, i) => e.has(t) || En("Cannot " + i), B = (t, e, i) => (Ai(t, e, "read from private field"), i ? i.call(t) : e.get(t)), kt = (t, e, i) => e.has(t) ? En("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Hi = (t, e, i, n) => (Ai(t, e, "write to private field"), e.set(t, i), i), U = (t, e, i) => (Ai(t, e, "access private method"), i), Lt, he, Ht, Xt, $, ii, Me, Ri, Tn, Cn, Pn, qn, zn, Un, In, Sn, On;
let _ = class extends ai(X, void 0) {
  constructor() {
    super(), kt(this, $), kt(this, Lt, new ea(this, {
      getUniqueOfElement: (t) => t.id,
      getUniqueOfModel: (t) => t.key,
      identifier: "Umb.SorterIdentifier.InputRichMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: ia,
      onChange: ({ model: t }) => {
        this.value = t, this.dispatchEvent(new C());
      }
    })), this.min = 0, this.minMessage = "This field need more items", this.max = 1 / 0, this.maxMessage = "This field exceeds the allowed amount of items", this.multiple = !1, kt(this, he, !1), kt(this, Ht, !1), this._cards = [], kt(this, Xt, new yo(this, hn)), kt(this, Me, (t) => this.allowedContentTypeIds && this.allowedContentTypeIds.length > 0 ? this.allowedContentTypeIds.includes(t.mediaType.unique) : !0), this.observe(B(this, Xt).items, () => {
      U(this, $, ii).call(this);
    }), new oi(this, Go).addAdditionalPath(":key").onSetup((t) => {
      const e = t.key;
      if (!e) return !1;
      const i = this.value?.find((n) => n.key === e);
      return i ? {
        data: {
          cropOptions: this.preselectedCrops,
          hideFocalPoint: !this.focalPointEnabled,
          key: e,
          unique: i.mediaKey,
          pickableFilter: B(this, Me)
        },
        value: {
          crops: i.crops ?? [],
          focalPoint: i.focalPoint ?? { left: 0.5, top: 0.5 },
          src: "",
          key: e,
          unique: i.mediaKey
        }
      } : !1;
    }).onSubmit((t) => {
      this.value = this.value?.map((e) => {
        if (e.key !== t.key) return e;
        const i = this.focalPointEnabled ? t.focalPoint : null, n = t.crops, a = t.unique, o = a === e.mediaKey ? e.key : $e.new();
        return { ...e, crops: n, mediaKey: a, focalPoint: i, key: o };
      }), this.dispatchEvent(new C());
    }).observeRouteBuilder((t) => {
      this._routeBuilder = t;
    }), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? Xi,
      () => !this.readonly && !!this.required && (!this.value || this.value.length === 0)
    ), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !this.readonly && // Only if min is set:
      !!this.min && // if the value is empty and not required, we should not validate the min:
      !(this.value?.length === 0 && this.required == !1) && // Validate the min:
      (this.value?.length ?? 0) < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !this.readonly && !!this.value && !!this.max && this.value?.length > this.max
    );
  }
  set value(t) {
    super.value = t, B(this, Lt).setModel(t), B(this, Xt).setUniques(t?.map((e) => e.mediaKey)), U(this, $, ii).call(this);
  }
  get value() {
    return super.value;
  }
  set focalPointEnabled(t) {
    Hi(this, he, t);
  }
  get focalPointEnabled() {
    return B(this, he);
  }
  /** @deprecated will be removed in v17 */
  set alias(t) {
  }
  get alias() {
  }
  /** @deprecated will be removed in v17 */
  set variantId(t) {
  }
  get variantId() {
  }
  get readonly() {
    return B(this, Ht);
  }
  set readonly(t) {
    Hi(this, Ht, t), B(this, Ht) ? B(this, Lt).disable() : B(this, Lt).enable();
  }
  getFormElement() {
  }
  render() {
    return r`
			${U(this, $, qn).call(this)}
			<div class="container">${U(this, $, zn).call(this)} ${U(this, $, Un).call(this)}</div>
		`;
  }
};
Lt = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
Xt = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakSet();
ii = async function() {
  const t = B(this, Xt).getItems();
  if (!t.length) {
    this._cards = [];
    return;
  }
  const e = t.filter((n) => !this._cards.find((a) => a.unique === n.unique)), i = this._cards.filter((n) => !t.find((a) => n.unique === a.unique));
  e.length === 0 && i.length === 0 || (this._cards = this.value?.map((n) => {
    const a = t.find((o) => o.unique === n.mediaKey);
    return {
      unique: n.key,
      media: n.mediaKey,
      name: a?.name ?? "",
      icon: a?.mediaType?.icon,
      isTrashed: a?.isTrashed ?? !1
    };
  }) ?? []);
};
Me = /* @__PURE__ */ new WeakMap();
Ri = function(t) {
  if (!t.length) return;
  const e = t.map((i) => ({
    key: $e.new(),
    mediaKey: i,
    mediaTypeAlias: "",
    crops: [],
    focalPoint: null
  }));
  this.value = [...this.value ?? [], ...e], this.dispatchEvent(new C());
};
Tn = async function() {
  const i = await (await this.getContext(Ki))?.open(this, _i, {
    data: {
      multiple: this.multiple,
      startNode: this.startNode,
      pickableFilter: B(this, Me)
    },
    value: { selection: [] }
  })?.onSubmit().catch(() => null);
  if (!i) return;
  const n = i.selection.filter((a) => a !== null);
  U(this, $, Ri).call(this, n);
};
Cn = async function(t) {
  await oo(this, {
    color: "danger",
    headline: `${this.localize.term("actions_remove")} ${t.name}?`,
    content: `${this.localize.term("defaultdialogs_confirmremove")} ${t.name}?`,
    confirmLabel: this.localize.term("actions_remove")
  }), this.value = this.value?.filter((e) => e.key !== t.unique), this.dispatchEvent(new C());
};
Pn = async function(t) {
  const i = t.detail.map((n) => n.unique);
  U(this, $, Ri).call(this, i);
};
qn = function() {
  if (this.readonly) return k;
  if (!(this._cards && this._cards.length >= this.max))
    return r`<umb-dropzone-media
			?multiple=${this.max > 1}
			@complete=${U(this, $, Pn)}></umb-dropzone-media>`;
};
zn = function() {
  if (this._cards.length)
    return r`
			${pt(
      this._cards,
      (t) => t.unique,
      (t) => U(this, $, In).call(this, t)
    )}
		`;
};
Un = function() {
  if (!(this._cards && this._cards.length && !this.multiple))
    return this.readonly && this._cards.length > 0 ? k : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@blur=${() => {
      this.pristine = !1, this.checkValidity();
    }}
					@click=${U(this, $, Tn)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
In = function(t) {
  if (!t.unique) return k;
  const e = this.readonly ? void 0 : this._routeBuilder?.({ key: t.unique });
  return r`
			<uui-card-media id=${t.unique} name=${t.name} .href=${e} ?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${t.media}
					alt=${t.name}
					icon=${t.icon ?? "icon-picture"}></umb-imaging-thumbnail>
				${U(this, $, On).call(this, t)} ${U(this, $, Sn).call(this, t)}
			</uui-card-media>
		`;
};
Sn = function(t) {
  return this.readonly ? k : r`
			<uui-action-bar slot="actions">
				<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => U(this, $, Cn).call(this, t)}>
					<uui-icon name="icon-trash"></uui-icon>
				</uui-button>
			</uui-action-bar>
		`;
};
On = function(t) {
  if (t.isTrashed)
    return r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		`;
};
_.styles = [
  q`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				gap: var(--uui-size-space-5);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
			}

			#btn-add {
				text-align: center;
				height: 100%;
			}

			uui-icon {
				display: block;
				margin: 0 auto;
			}

			uui-card-media umb-icon {
				font-size: var(--uui-size-8);
			}

			uui-card-media[drag-placeholder] {
				opacity: 0.2;
			}
			img {
				background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".1"><path d="M50 0h50v50H50zM0 50h50v50H0z"/></svg>');
				background-size: 10px 10px;
				background-repeat: repeat;
			}
		`
];
b([
  l({ type: Boolean })
], _.prototype, "required", 2);
b([
  l({ type: String })
], _.prototype, "requiredMessage", 2);
b([
  l({ type: Number })
], _.prototype, "min", 2);
b([
  l({ type: String, attribute: "min-message" })
], _.prototype, "minMessage", 2);
b([
  l({ type: Number })
], _.prototype, "max", 2);
b([
  l({ type: String, attribute: "min-message" })
], _.prototype, "maxMessage", 2);
b([
  l({ type: Array })
], _.prototype, "value", 1);
b([
  l({ type: Array })
], _.prototype, "allowedContentTypeIds", 2);
b([
  l({ type: Object, attribute: !1 })
], _.prototype, "startNode", 2);
b([
  l({ type: Boolean })
], _.prototype, "multiple", 2);
b([
  l({ type: Array })
], _.prototype, "preselectedCrops", 2);
b([
  l({ type: Boolean })
], _.prototype, "focalPointEnabled", 1);
b([
  l()
], _.prototype, "alias", 1);
b([
  l()
], _.prototype, "variantId", 1);
b([
  l({ type: Boolean, reflect: !0 })
], _.prototype, "readonly", 1);
b([
  p()
], _.prototype, "_cards", 2);
b([
  p()
], _.prototype, "_routeBuilder", 2);
_ = b([
  z("umb-input-rich-media")
], _);
function Ts(t) {
  return {
    ".123": "application/vnd.lotus-1-2-3",
    ".3dml": "text/vnd.in3d.3dml",
    ".3g2": "video/3gpp2",
    ".3gp": "video/3gpp",
    ".a": "application/octet-stream",
    ".aab": "application/x-authorware-bin",
    ".aac": "audio/x-aac",
    ".aam": "application/x-authorware-map",
    ".aas": "application/x-authorware-seg",
    ".abw": "application/x-abiword",
    ".acc": "application/vnd.americandynamics.acc",
    ".ace": "application/x-ace-compressed",
    ".acu": "application/vnd.acucobol",
    ".acutc": "application/vnd.acucorp",
    ".adp": "audio/adpcm",
    ".aep": "application/vnd.audiograph",
    ".afm": "application/x-font-type1",
    ".afp": "application/vnd.ibm.modcap",
    ".ai": "application/postscript",
    ".aif": "audio/x-aiff",
    ".aifc": "audio/x-aiff",
    ".aiff": "audio/x-aiff",
    ".air": "application/vnd.adobe.air-application-installer-package+zip",
    ".ami": "application/vnd.amiga.ami",
    ".apk": "application/vnd.android.package-archive",
    ".application": "application/x-ms-application",
    ".apr": "application/vnd.lotus-approach",
    ".asc": "application/pgp-signature",
    ".asf": "video/x-ms-asf",
    ".asm": "text/x-asm",
    ".aso": "application/vnd.accpac.simply.aso",
    ".asx": "video/x-ms-asf",
    ".atc": "application/vnd.acucorp",
    ".atom": "application/atom+xml",
    ".atomcat": "application/atomcat+xml",
    ".atomsvc": "application/atomsvc+xml",
    ".atx": "application/vnd.antix.game-component",
    ".au": "audio/basic",
    ".avi": "video/x-msvideo",
    ".aw": "application/applixware",
    ".azf": "application/vnd.airzip.filesecure.azf",
    ".azs": "application/vnd.airzip.filesecure.azs",
    ".azw": "application/vnd.amazon.ebook",
    ".bat": "application/x-msdownload",
    ".bcpio": "application/x-bcpio",
    ".bdf": "application/x-font-bdf",
    ".bdm": "application/vnd.syncml.dm+wbxml",
    ".bh2": "application/vnd.fujitsu.oasysprs",
    ".bin": "application/octet-stream",
    ".bmi": "application/vnd.bmi",
    ".bmp": "image/bmp",
    ".book": "application/vnd.framemaker",
    ".box": "application/vnd.previewsystems.box",
    ".boz": "application/x-bzip2",
    ".bpk": "application/octet-stream",
    ".btif": "image/prs.btif",
    ".bz": "application/x-bzip",
    ".bz2": "application/x-bzip2",
    ".c": "text/x-c",
    ".c4d": "application/vnd.clonk.c4group",
    ".c4f": "application/vnd.clonk.c4group",
    ".c4g": "application/vnd.clonk.c4group",
    ".c4p": "application/vnd.clonk.c4group",
    ".c4u": "application/vnd.clonk.c4group",
    ".cab": "application/vnd.ms-cab-compressed",
    ".car": "application/vnd.curl.car",
    ".cat": "application/vnd.ms-pki.seccat",
    ".cc": "text/x-c",
    ".cct": "application/x-director",
    ".ccxml": "application/ccxml+xml",
    ".cdbcmsg": "application/vnd.contact.cmsg",
    ".cdf": "application/x-netcdf",
    ".cdkey": "application/vnd.mediastation.cdkey",
    ".cdx": "chemical/x-cdx",
    ".cdxml": "application/vnd.chemdraw+xml",
    ".cdy": "application/vnd.cinderella",
    ".cer": "application/pkix-cert",
    ".cgm": "image/cgm",
    ".chat": "application/x-chat",
    ".chm": "application/vnd.ms-htmlhelp",
    ".chrt": "application/vnd.kde.kchart",
    ".cif": "chemical/x-cif",
    ".cii": "application/vnd.anser-web-certificate-issue-initiation",
    ".cil": "application/vnd.ms-artgalry",
    ".cla": "application/vnd.claymore",
    ".class": "application/java-vm",
    ".clkk": "application/vnd.crick.clicker.keyboard",
    ".clkp": "application/vnd.crick.clicker.palette",
    ".clkt": "application/vnd.crick.clicker.template",
    ".clkw": "application/vnd.crick.clicker.wordbank",
    ".clkx": "application/vnd.crick.clicker",
    ".clp": "application/x-msclip",
    ".cmc": "application/vnd.cosmocaller",
    ".cmdf": "chemical/x-cmdf",
    ".cml": "chemical/x-cml",
    ".cmp": "application/vnd.yellowriver-custom-menu",
    ".cmx": "image/x-cmx",
    ".cod": "application/vnd.rim.cod",
    ".com": "application/x-msdownload",
    ".conf": "text/plain",
    ".cpio": "application/x-cpio",
    ".cpp": "text/x-c",
    ".cpt": "application/mac-compactpro",
    ".crd": "application/x-mscardfile",
    ".crl": "application/pkix-crl",
    ".crt": "application/x-x509-ca-cert",
    ".csh": "application/x-csh",
    ".csml": "chemical/x-csml",
    ".csp": "application/vnd.commonspace",
    ".css": "text/css",
    ".cst": "application/x-director",
    ".csv": "text/csv",
    ".cu": "application/cu-seeme",
    ".curl": "text/vnd.curl",
    ".cww": "application/prs.cww",
    ".cxt": "application/x-director",
    ".cxx": "text/x-c",
    ".daf": "application/vnd.mobius.daf",
    ".dataless": "application/vnd.fdsn.seed",
    ".davmount": "application/davmount+xml",
    ".dcr": "application/x-director",
    ".dcurl": "text/vnd.curl.dcurl",
    ".dd2": "application/vnd.oma.dd2+xml",
    ".ddd": "application/vnd.fujixerox.ddd",
    ".deb": "application/x-debian-package",
    ".def": "text/plain",
    ".deploy": "application/octet-stream",
    ".der": "application/x-x509-ca-cert",
    ".dfac": "application/vnd.dreamfactory",
    ".dic": "text/x-c",
    ".diff": "text/plain",
    ".dir": "application/x-director",
    ".dis": "application/vnd.mobius.dis",
    ".dist": "application/octet-stream",
    ".distz": "application/octet-stream",
    ".djv": "image/vnd.djvu",
    ".djvu": "image/vnd.djvu",
    ".dll": "application/x-msdownload",
    ".dmg": "application/octet-stream",
    ".dms": "application/octet-stream",
    ".dna": "application/vnd.dna",
    ".doc": "application/msword",
    ".docm": "application/vnd.ms-word.document.macroenabled.12",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".dot": "application/msword",
    ".dotm": "application/vnd.ms-word.template.macroenabled.12",
    ".dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    ".dp": "application/vnd.osgi.dp",
    ".dpg": "application/vnd.dpgraph",
    ".dsc": "text/prs.lines.tag",
    ".dtb": "application/x-dtbook+xml",
    ".dtd": "application/xml-dtd",
    ".dts": "audio/vnd.dts",
    ".dtshd": "audio/vnd.dts.hd",
    ".dump": "application/octet-stream",
    ".dvi": "application/x-dvi",
    ".dwf": "model/vnd.dwf",
    ".dwg": "image/vnd.dwg",
    ".dxf": "image/vnd.dxf",
    ".dxp": "application/vnd.spotfire.dxp",
    ".dxr": "application/x-director",
    ".ecelp4800": "audio/vnd.nuera.ecelp4800",
    ".ecelp7470": "audio/vnd.nuera.ecelp7470",
    ".ecelp9600": "audio/vnd.nuera.ecelp9600",
    ".ecma": "application/ecmascript",
    ".edm": "application/vnd.novadigm.edm",
    ".edx": "application/vnd.novadigm.edx",
    ".efif": "application/vnd.picsel",
    ".ei6": "application/vnd.pg.osasli",
    ".elc": "application/octet-stream",
    ".eml": "message/rfc822",
    ".emma": "application/emma+xml",
    ".eol": "audio/vnd.digital-winds",
    ".eot": "application/vnd.ms-fontobject",
    ".eps": "application/postscript",
    ".epub": "application/epub+zip",
    ".es3": "application/vnd.eszigno3+xml",
    ".esf": "application/vnd.epson.esf",
    ".et3": "application/vnd.eszigno3+xml",
    ".etx": "text/x-setext",
    ".exe": "application/x-msdownload",
    ".ext": "application/vnd.novadigm.ext",
    ".ez": "application/andrew-inset",
    ".ez2": "application/vnd.ezpix-album",
    ".ez3": "application/vnd.ezpix-package",
    ".f": "text/x-fortran",
    ".f4v": "video/x-f4v",
    ".f77": "text/x-fortran",
    ".f90": "text/x-fortran",
    ".fbs": "image/vnd.fastbidsheet",
    ".fdf": "application/vnd.fdf",
    ".fe_launch": "application/vnd.denovo.fcselayout-link",
    ".fg5": "application/vnd.fujitsu.oasysgp",
    ".fgd": "application/x-director",
    ".fh": "image/x-freehand",
    ".fh4": "image/x-freehand",
    ".fh5": "image/x-freehand",
    ".fh7": "image/x-freehand",
    ".fhc": "image/x-freehand",
    ".fig": "application/x-xfig",
    ".fli": "video/x-fli",
    ".flo": "application/vnd.micrografx.flo",
    ".flv": "video/x-flv",
    ".flw": "application/vnd.kde.kivio",
    ".flx": "text/vnd.fmi.flexstor",
    ".fly": "text/vnd.fly",
    ".fm": "application/vnd.framemaker",
    ".fnc": "application/vnd.frogans.fnc",
    ".for": "text/x-fortran",
    ".fpx": "image/vnd.fpx",
    ".frame": "application/vnd.framemaker",
    ".fsc": "application/vnd.fsc.weblaunch",
    ".fst": "image/vnd.fst",
    ".ftc": "application/vnd.fluxtime.clip",
    ".fti": "application/vnd.anser-web-funds-transfer-initiation",
    ".fvt": "video/vnd.fvt",
    ".fzs": "application/vnd.fuzzysheet",
    ".g3": "image/g3fax",
    ".gac": "application/vnd.groove-account",
    ".gdl": "model/vnd.gdl",
    ".geo": "application/vnd.dynageo",
    ".gex": "application/vnd.geometry-explorer",
    ".ggb": "application/vnd.geogebra.file",
    ".ggt": "application/vnd.geogebra.tool",
    ".ghf": "application/vnd.groove-help",
    ".gif": "image/gif",
    ".gim": "application/vnd.groove-identity-message",
    ".gmx": "application/vnd.gmx",
    ".gnumeric": "application/x-gnumeric",
    ".gph": "application/vnd.flographit",
    ".gqf": "application/vnd.grafeq",
    ".gqs": "application/vnd.grafeq",
    ".gram": "application/srgs",
    ".gre": "application/vnd.geometry-explorer",
    ".grv": "application/vnd.groove-injector",
    ".grxml": "application/srgs+xml",
    ".gsf": "application/x-font-ghostscript",
    ".gtar": "application/x-gtar",
    ".gtm": "application/vnd.groove-tool-message",
    ".gtw": "model/vnd.gtw",
    ".gv": "text/vnd.graphviz",
    ".gz": "application/x-gzip",
    ".h": "text/x-c",
    ".h261": "video/h261",
    ".h263": "video/h263",
    ".h264": "video/h264",
    ".hbci": "application/vnd.hbci",
    ".hdf": "application/x-hdf",
    ".hh": "text/x-c",
    ".hlp": "application/winhlp",
    ".hpgl": "application/vnd.hp-hpgl",
    ".hpid": "application/vnd.hp-hpid",
    ".hps": "application/vnd.hp-hps",
    ".hqx": "application/mac-binhex40",
    ".htke": "application/vnd.kenameaapp",
    ".htm": "text/html",
    ".html": "text/html",
    ".hvd": "application/vnd.yamaha.hv-dic",
    ".hvp": "application/vnd.yamaha.hv-voice",
    ".hvs": "application/vnd.yamaha.hv-script",
    ".icc": "application/vnd.iccprofile",
    ".ice": "x-conference/x-cooltalk",
    ".icm": "application/vnd.iccprofile",
    ".ico": "image/x-icon",
    ".ics": "text/calendar",
    ".ief": "image/ief",
    ".ifb": "text/calendar",
    ".ifm": "application/vnd.shana.informed.formdata",
    ".iges": "model/iges",
    ".igl": "application/vnd.igloader",
    ".igs": "model/iges",
    ".igx": "application/vnd.micrografx.igx",
    ".iif": "application/vnd.shana.informed.interchange",
    ".imp": "application/vnd.accpac.simply.imp",
    ".ims": "application/vnd.ms-ims",
    ".in": "text/plain",
    ".ipk": "application/vnd.shana.informed.package",
    ".irm": "application/vnd.ibm.rights-management",
    ".irp": "application/vnd.irepository.package+xml",
    ".iso": "application/octet-stream",
    ".itp": "application/vnd.shana.informed.formtemplate",
    ".ivp": "application/vnd.immervision-ivp",
    ".ivu": "application/vnd.immervision-ivu",
    ".jad": "text/vnd.sun.j2me.app-descriptor",
    ".jam": "application/vnd.jam",
    ".jar": "application/java-archive",
    ".java": "text/x-java-source",
    ".jisp": "application/vnd.jisp",
    ".jlt": "application/vnd.hp-jlyt",
    ".jnlp": "application/x-java-jnlp-file",
    ".joda": "application/vnd.joost.joda-archive",
    ".jpe": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".jpgm": "video/jpm",
    ".jpgv": "video/jpeg",
    ".jpm": "video/jpm",
    ".js": "application/javascript",
    ".json": "application/json",
    ".kar": "audio/midi",
    ".karbon": "application/vnd.kde.karbon",
    ".kfo": "application/vnd.kde.kformula",
    ".kia": "application/vnd.kidspiration",
    ".kil": "application/x-killustrator",
    ".kml": "application/vnd.google-earth.kml+xml",
    ".kmz": "application/vnd.google-earth.kmz",
    ".kne": "application/vnd.kinar",
    ".knp": "application/vnd.kinar",
    ".kon": "application/vnd.kde.kontour",
    ".kpr": "application/vnd.kde.kpresenter",
    ".kpt": "application/vnd.kde.kpresenter",
    ".ksh": "text/plain",
    ".ksp": "application/vnd.kde.kspread",
    ".ktr": "application/vnd.kahootz",
    ".ktz": "application/vnd.kahootz",
    ".kwd": "application/vnd.kde.kword",
    ".kwt": "application/vnd.kde.kword",
    ".latex": "application/x-latex",
    ".lbd": "application/vnd.llamagraphics.life-balance.desktop",
    ".lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
    ".les": "application/vnd.hhe.lesson-player",
    ".lha": "application/octet-stream",
    ".link66": "application/vnd.route66.link66+xml",
    ".list": "text/plain",
    ".list3820": "application/vnd.ibm.modcap",
    ".listafp": "application/vnd.ibm.modcap",
    ".log": "text/plain",
    ".lostxml": "application/lost+xml",
    ".lrf": "application/octet-stream",
    ".lrm": "application/vnd.ms-lrm",
    ".ltf": "application/vnd.frogans.ltf",
    ".lvp": "audio/vnd.lucent.voice",
    ".lwp": "application/vnd.lotus-wordpro",
    ".lzh": "application/octet-stream",
    ".m13": "application/x-msmediaview",
    ".m14": "application/x-msmediaview",
    ".m1v": "video/mpeg",
    ".m2a": "audio/mpeg",
    ".m2v": "video/mpeg",
    ".m3a": "audio/mpeg",
    ".m3u": "audio/x-mpegurl",
    ".m4u": "video/vnd.mpegurl",
    ".m4v": "video/x-m4v",
    ".ma": "application/mathematica",
    ".mag": "application/vnd.ecowin.chart",
    ".maker": "application/vnd.framemaker",
    ".man": "text/troff",
    ".mathml": "application/mathml+xml",
    ".mb": "application/mathematica",
    ".mbk": "application/vnd.mobius.mbk",
    ".mbox": "application/mbox",
    ".mc1": "application/vnd.medcalcdata",
    ".mcd": "application/vnd.mcd",
    ".mcurl": "text/vnd.curl.mcurl",
    ".mdb": "application/x-msaccess",
    ".mdi": "image/vnd.ms-modi",
    ".me": "text/troff",
    ".mesh": "model/mesh",
    ".mfm": "application/vnd.mfmp",
    ".mgz": "application/vnd.proteus.magazine",
    ".mht": "message/rfc822",
    ".mhtml": "message/rfc822",
    ".mid": "audio/midi",
    ".midi": "audio/midi",
    ".mif": "application/vnd.mif",
    ".mime": "message/rfc822",
    ".mj2": "video/mj2",
    ".mjp2": "video/mj2",
    ".mlp": "application/vnd.dolby.mlp",
    ".mmd": "application/vnd.chipnuts.karaoke-mmd",
    ".mmf": "application/vnd.smaf",
    ".mmr": "image/vnd.fujixerox.edmics-mmr",
    ".mny": "application/x-msmoney",
    ".mobi": "application/x-mobipocket-ebook",
    ".mov": "video/quicktime",
    ".movie": "video/x-sgi-movie",
    ".mp2": "audio/mpeg",
    ".mp2a": "audio/mpeg",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".mp4a": "audio/mp4",
    ".mp4s": "application/mp4",
    ".mp4v": "video/mp4",
    ".mpa": "video/mpeg",
    ".mpc": "application/vnd.mophun.certificate",
    ".mpe": "video/mpeg",
    ".mpeg": "video/mpeg",
    ".mpg": "video/mpeg",
    ".mpg4": "video/mp4",
    ".mpga": "audio/mpeg",
    ".mpkg": "application/vnd.apple.installer+xml",
    ".mpm": "application/vnd.blueice.multipass",
    ".mpn": "application/vnd.mophun.application",
    ".mpp": "application/vnd.ms-project",
    ".mpt": "application/vnd.ms-project",
    ".mpy": "application/vnd.ibm.minipay",
    ".mqy": "application/vnd.mobius.mqy",
    ".mrc": "application/marc",
    ".ms": "text/troff",
    ".mscml": "application/mediaservercontrol+xml",
    ".mseed": "application/vnd.fdsn.mseed",
    ".mseq": "application/vnd.mseq",
    ".msf": "application/vnd.epson.msf",
    ".msh": "model/mesh",
    ".msi": "application/x-msdownload",
    ".msl": "application/vnd.mobius.msl",
    ".msty": "application/vnd.muvee.style",
    ".mts": "model/vnd.mts",
    ".mus": "application/vnd.musician",
    ".musicxml": "application/vnd.recordare.musicxml+xml",
    ".mvb": "application/x-msmediaview",
    ".mwf": "application/vnd.mfer",
    ".mxf": "application/mxf",
    ".mxl": "application/vnd.recordare.musicxml",
    ".mxml": "application/xv+xml",
    ".mxs": "application/vnd.triscape.mxs",
    ".mxu": "video/vnd.mpegurl",
    ".n-gage": "application/vnd.nokia.n-gage.symbian.install",
    ".nb": "application/mathematica",
    ".nc": "application/x-netcdf",
    ".ncx": "application/x-dtbncx+xml",
    ".ngdat": "application/vnd.nokia.n-gage.data",
    ".nlu": "application/vnd.neurolanguage.nlu",
    ".nml": "application/vnd.enliven",
    ".nnd": "application/vnd.noblenet-directory",
    ".nns": "application/vnd.noblenet-sealer",
    ".nnw": "application/vnd.noblenet-web",
    ".npx": "image/vnd.net-fpx",
    ".nsf": "application/vnd.lotus-notes",
    ".nws": "message/rfc822",
    ".o": "application/octet-stream",
    ".oa2": "application/vnd.fujitsu.oasys2",
    ".oa3": "application/vnd.fujitsu.oasys3",
    ".oas": "application/vnd.fujitsu.oasys",
    ".obd": "application/x-msbinder",
    ".obj": "application/octet-stream",
    ".oda": "application/oda",
    ".odb": "application/vnd.oasis.opendocument.database",
    ".odc": "application/vnd.oasis.opendocument.chart",
    ".odf": "application/vnd.oasis.opendocument.formula",
    ".odft": "application/vnd.oasis.opendocument.formula-template",
    ".odg": "application/vnd.oasis.opendocument.graphics",
    ".odi": "application/vnd.oasis.opendocument.image",
    ".odp": "application/vnd.oasis.opendocument.presentation",
    ".ods": "application/vnd.oasis.opendocument.spreadsheet",
    ".odt": "application/vnd.oasis.opendocument.text",
    ".oga": "audio/ogg",
    ".ogg": "audio/ogg",
    ".ogv": "video/ogg",
    ".ogx": "application/ogg",
    ".onepkg": "application/onenote",
    ".onetmp": "application/onenote",
    ".onetoc": "application/onenote",
    ".onetoc2": "application/onenote",
    ".opf": "application/oebps-package+xml",
    ".oprc": "application/vnd.palm",
    ".opus": "audio/ogg",
    ".org": "application/vnd.lotus-organizer",
    ".osf": "application/vnd.yamaha.openscoreformat",
    ".osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
    ".otc": "application/vnd.oasis.opendocument.chart-template",
    ".otf": "application/x-font-otf",
    ".otg": "application/vnd.oasis.opendocument.graphics-template",
    ".oth": "application/vnd.oasis.opendocument.text-web",
    ".oti": "application/vnd.oasis.opendocument.image-template",
    ".otm": "application/vnd.oasis.opendocument.text-master",
    ".otp": "application/vnd.oasis.opendocument.presentation-template",
    ".ots": "application/vnd.oasis.opendocument.spreadsheet-template",
    ".ott": "application/vnd.oasis.opendocument.text-template",
    ".oxt": "application/vnd.openofficeorg.extension",
    ".p": "text/x-pascal",
    ".p10": "application/pkcs10",
    ".p12": "application/x-pkcs12",
    ".p7b": "application/x-pkcs7-certificates",
    ".p7c": "application/pkcs7-mime",
    ".p7m": "application/pkcs7-mime",
    ".p7r": "application/x-pkcs7-certreqresp",
    ".p7s": "application/pkcs7-signature",
    ".pas": "text/x-pascal",
    ".pbd": "application/vnd.powerbuilder6",
    ".pbm": "image/x-portable-bitmap",
    ".pcf": "application/x-font-pcf",
    ".pcl": "application/vnd.hp-pcl",
    ".pclxl": "application/vnd.hp-pclxl",
    ".pct": "image/x-pict",
    ".pcurl": "application/vnd.curl.pcurl",
    ".pcx": "image/x-pcx",
    ".pdb": "application/vnd.palm",
    ".pdf": "application/pdf",
    ".pfa": "application/x-font-type1",
    ".pfb": "application/x-font-type1",
    ".pfm": "application/x-font-type1",
    ".pfr": "application/font-tdpfr",
    ".pfx": "application/x-pkcs12",
    ".pgm": "image/x-portable-graymap",
    ".pgn": "application/x-chess-pgn",
    ".pgp": "application/pgp-encrypted",
    ".pic": "image/x-pict",
    ".pkg": "application/octet-stream",
    ".pki": "application/pkixcmp",
    ".pkipath": "application/pkix-pkipath",
    ".pl": "text/plain",
    ".plb": "application/vnd.3gpp.pic-bw-large",
    ".plc": "application/vnd.mobius.plc",
    ".plf": "application/vnd.pocketlearn",
    ".pls": "application/pls+xml",
    ".pml": "application/vnd.ctc-posml",
    ".png": "image/png",
    ".pnm": "image/x-portable-anymap",
    ".portpkg": "application/vnd.macports.portpkg",
    ".pot": "application/vnd.ms-powerpoint",
    ".potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
    ".potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
    ".ppa": "application/vnd.ms-powerpoint",
    ".ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
    ".ppd": "application/vnd.cups-ppd",
    ".ppm": "image/x-portable-pixmap",
    ".pps": "application/vnd.ms-powerpoint",
    ".ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    ".ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    ".ppt": "application/vnd.ms-powerpoint",
    ".pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".pqa": "application/vnd.palm",
    ".prc": "application/x-mobipocket-ebook",
    ".pre": "application/vnd.lotus-freelance",
    ".prf": "application/pics-rules",
    ".ps": "application/postscript",
    ".psb": "application/vnd.3gpp.pic-bw-small",
    ".psd": "image/vnd.adobe.photoshop",
    ".psf": "application/x-font-linux-psf",
    ".ptid": "application/vnd.pvi.ptid1",
    ".pub": "application/x-mspublisher",
    ".pvb": "application/vnd.3gpp.pic-bw-var",
    ".pwn": "application/vnd.3m.post-it-notes",
    ".pwz": "application/vnd.ms-powerpoint",
    ".py": "text/x-python",
    ".pya": "audio/vnd.ms-playready.media.pya",
    ".pyc": "application/x-python-code",
    ".pyo": "application/x-python-code",
    ".pyv": "video/vnd.ms-playready.media.pyv",
    ".qam": "application/vnd.epson.quickanime",
    ".qbo": "application/vnd.intu.qbo",
    ".qfx": "application/vnd.intu.qfx",
    ".qps": "application/vnd.publishare-delta-tree",
    ".qt": "video/quicktime",
    ".qwd": "application/vnd.quark.quarkxpress",
    ".qwt": "application/vnd.quark.quarkxpress",
    ".qxb": "application/vnd.quark.quarkxpress",
    ".qxd": "application/vnd.quark.quarkxpress",
    ".qxl": "application/vnd.quark.quarkxpress",
    ".qxt": "application/vnd.quark.quarkxpress",
    ".ra": "audio/x-pn-realaudio",
    ".ram": "audio/x-pn-realaudio",
    ".rar": "application/x-rar-compressed",
    ".ras": "image/x-cmu-raster",
    ".rcprofile": "application/vnd.ipunplugged.rcprofile",
    ".rdf": "application/rdf+xml",
    ".rdz": "application/vnd.data-vision.rdz",
    ".rep": "application/vnd.businessobjects",
    ".res": "application/x-dtbresource+xml",
    ".rgb": "image/x-rgb",
    ".rif": "application/reginfo+xml",
    ".rl": "application/resource-lists+xml",
    ".rlc": "image/vnd.fujixerox.edmics-rlc",
    ".rld": "application/resource-lists-diff+xml",
    ".rm": "application/vnd.rn-realmedia",
    ".rmi": "audio/midi",
    ".rmp": "audio/x-pn-realaudio-plugin",
    ".rms": "application/vnd.jcp.javame.midlet-rms",
    ".rnc": "application/relax-ng-compact-syntax",
    ".roff": "text/troff",
    ".rpm": "application/x-rpm",
    ".rpss": "application/vnd.nokia.radio-presets",
    ".rpst": "application/vnd.nokia.radio-preset",
    ".rq": "application/sparql-query",
    ".rs": "application/rls-services+xml",
    ".rsd": "application/rsd+xml",
    ".rss": "application/rss+xml",
    ".rtf": "application/rtf",
    ".rtx": "text/richtext",
    ".s": "text/x-asm",
    ".saf": "application/vnd.yamaha.smaf-audio",
    ".sbml": "application/sbml+xml",
    ".sc": "application/vnd.ibm.secure-container",
    ".scd": "application/x-msschedule",
    ".scm": "application/vnd.lotus-screencam",
    ".scq": "application/scvp-cv-request",
    ".scs": "application/scvp-cv-response",
    ".scurl": "text/vnd.curl.scurl",
    ".sda": "application/vnd.stardivision.draw",
    ".sdc": "application/vnd.stardivision.calc",
    ".sdd": "application/vnd.stardivision.impress",
    ".sdkd": "application/vnd.solent.sdkm+xml",
    ".sdkm": "application/vnd.solent.sdkm+xml",
    ".sdp": "application/sdp",
    ".sdw": "application/vnd.stardivision.writer",
    ".see": "application/vnd.seemail",
    ".seed": "application/vnd.fdsn.seed",
    ".sema": "application/vnd.sema",
    ".semd": "application/vnd.semd",
    ".semf": "application/vnd.semf",
    ".ser": "application/java-serialized-object",
    ".setpay": "application/set-payment-initiation",
    ".setreg": "application/set-registration-initiation",
    ".sfd-hdstx": "application/vnd.hydrostatix.sof-data",
    ".sfs": "application/vnd.spotfire.sfs",
    ".sgl": "application/vnd.stardivision.writer-global",
    ".sgm": "text/sgml",
    ".sgml": "text/sgml",
    ".sh": "application/x-sh",
    ".shar": "application/x-shar",
    ".shf": "application/shf+xml",
    ".si": "text/vnd.wap.si",
    ".sic": "application/vnd.wap.sic",
    ".sig": "application/pgp-signature",
    ".silo": "model/mesh",
    ".sis": "application/vnd.symbian.install",
    ".sisx": "application/vnd.symbian.install",
    ".sit": "application/x-stuffit",
    ".sitx": "application/x-stuffitx",
    ".skd": "application/vnd.koan",
    ".skm": "application/vnd.koan",
    ".skp": "application/vnd.koan",
    ".skt": "application/vnd.koan",
    ".sl": "text/vnd.wap.sl",
    ".slc": "application/vnd.wap.slc",
    ".sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
    ".sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
    ".slt": "application/vnd.epson.salt",
    ".smf": "application/vnd.stardivision.math",
    ".smi": "application/smil+xml",
    ".smil": "application/smil+xml",
    ".snd": "audio/basic",
    ".snf": "application/x-font-snf",
    ".so": "application/octet-stream",
    ".spc": "application/x-pkcs7-certificates",
    ".spf": "application/vnd.yamaha.smaf-phrase",
    ".spl": "application/x-futuresplash",
    ".spot": "text/vnd.in3d.spot",
    ".spp": "application/scvp-vp-response",
    ".spq": "application/scvp-vp-request",
    ".spx": "audio/ogg",
    ".src": "application/x-wais-source",
    ".srx": "application/sparql-results+xml",
    ".sse": "application/vnd.kodak-descriptor",
    ".ssf": "application/vnd.epson.ssf",
    ".ssml": "application/ssml+xml",
    ".stc": "application/vnd.sun.xml.calc.template",
    ".std": "application/vnd.sun.xml.draw.template",
    ".stf": "application/vnd.wt.stf",
    ".sti": "application/vnd.sun.xml.impress.template",
    ".stk": "application/hyperstudio",
    ".stl": "application/vnd.ms-pki.stl",
    ".str": "application/vnd.pg.format",
    ".stw": "application/vnd.sun.xml.writer.template",
    ".sus": "application/vnd.sus-calendar",
    ".susp": "application/vnd.sus-calendar",
    ".sv4cpio": "application/x-sv4cpio",
    ".sv4crc": "application/x-sv4crc",
    ".svd": "application/vnd.svd",
    ".svg": "image/svg+xml",
    ".svgz": "image/svg+xml",
    ".swa": "application/x-director",
    ".swf": "application/x-shockwave-flash",
    ".swi": "application/vnd.arastra.swi",
    ".sxc": "application/vnd.sun.xml.calc",
    ".sxd": "application/vnd.sun.xml.draw",
    ".sxg": "application/vnd.sun.xml.writer.global",
    ".sxi": "application/vnd.sun.xml.impress",
    ".sxm": "application/vnd.sun.xml.math",
    ".sxw": "application/vnd.sun.xml.writer",
    ".t": "text/troff",
    ".tao": "application/vnd.tao.intent-module-archive",
    ".tar": "application/x-tar",
    ".tcap": "application/vnd.3gpp2.tcap",
    ".tcl": "application/x-tcl",
    ".teacher": "application/vnd.smart.teacher",
    ".tex": "application/x-tex",
    ".texi": "application/x-texinfo",
    ".texinfo": "application/x-texinfo",
    ".text": "text/plain",
    ".tfm": "application/x-tex-tfm",
    ".tgz": "application/x-gzip",
    ".tif": "image/tiff",
    ".tiff": "image/tiff",
    ".tmo": "application/vnd.tmobile-livetv",
    ".torrent": "application/x-bittorrent",
    ".tpl": "application/vnd.groove-tool-template",
    ".tpt": "application/vnd.trid.tpt",
    ".tr": "text/troff",
    ".tra": "application/vnd.trueapp",
    ".trm": "application/x-msterminal",
    ".tsv": "text/tab-separated-values",
    ".ttc": "application/x-font-ttf",
    ".ttf": "application/x-font-ttf",
    ".twd": "application/vnd.simtech-mindmapper",
    ".twds": "application/vnd.simtech-mindmapper",
    ".txd": "application/vnd.genomatix.tuxedo",
    ".txf": "application/vnd.mobius.txf",
    ".txt": "text/plain",
    ".u32": "application/x-authorware-bin",
    ".udeb": "application/x-debian-package",
    ".ufd": "application/vnd.ufdl",
    ".ufdl": "application/vnd.ufdl",
    ".umj": "application/vnd.umajin",
    ".unityweb": "application/vnd.unity",
    ".uoml": "application/vnd.uoml+xml",
    ".uri": "text/uri-list",
    ".uris": "text/uri-list",
    ".urls": "text/uri-list",
    ".ustar": "application/x-ustar",
    ".utz": "application/vnd.uiq.theme",
    ".uu": "text/x-uuencode",
    ".vcd": "application/x-cdlink",
    ".vcf": "text/x-vcard",
    ".vcg": "application/vnd.groove-vcard",
    ".vcs": "text/x-vcalendar",
    ".vcx": "application/vnd.vcx",
    ".vis": "application/vnd.visionary",
    ".viv": "video/vnd.vivo",
    ".vor": "application/vnd.stardivision.writer",
    ".vox": "application/x-authorware-bin",
    ".vrml": "model/vrml",
    ".vsd": "application/vnd.visio",
    ".vsf": "application/vnd.vsf",
    ".vss": "application/vnd.visio",
    ".vst": "application/vnd.visio",
    ".vsw": "application/vnd.visio",
    ".vtu": "model/vnd.vtu",
    ".vxml": "application/voicexml+xml",
    ".w3d": "application/x-director",
    ".wad": "application/x-doom",
    ".wav": "audio/x-wav",
    ".wax": "audio/x-ms-wax",
    ".wbmp": "image/vnd.wap.wbmp",
    ".wbs": "application/vnd.criticaltools.wbs+xml",
    ".wbxml": "application/vnd.wap.wbxml",
    ".wcm": "application/vnd.ms-works",
    ".wdb": "application/vnd.ms-works",
    ".weba": "audio/webm",
    ".webm": "video/webm",
    ".webp": "image/webp",
    ".wiz": "application/msword",
    ".wks": "application/vnd.ms-works",
    ".wm": "video/x-ms-wm",
    ".wma": "audio/x-ms-wma",
    ".wmd": "application/x-ms-wmd",
    ".wmf": "application/x-msmetafile",
    ".wml": "text/vnd.wap.wml",
    ".wmlc": "application/vnd.wap.wmlc",
    ".wmls": "text/vnd.wap.wmlscript",
    ".wmlsc": "application/vnd.wap.wmlscriptc",
    ".wmv": "video/x-ms-wmv",
    ".wmx": "video/x-ms-wmx",
    ".wmz": "application/x-ms-wmz",
    ".wpd": "application/vnd.wordperfect",
    ".wpl": "application/vnd.ms-wpl",
    ".wps": "application/vnd.ms-works",
    ".wqd": "application/vnd.wqd",
    ".wri": "application/x-mswrite",
    ".wrl": "model/vrml",
    ".wsdl": "application/wsdl+xml",
    ".wspolicy": "application/wspolicy+xml",
    ".wtb": "application/vnd.webturbo",
    ".wvx": "video/x-ms-wvx",
    ".x32": "application/x-authorware-bin",
    ".x3d": "application/vnd.hzn-3d-crossword",
    ".xap": "application/x-silverlight-app",
    ".xar": "application/vnd.xara",
    ".xbap": "application/x-ms-xbap",
    ".xbd": "application/vnd.fujixerox.docuworks.binder",
    ".xbm": "image/x-xbitmap",
    ".xdm": "application/vnd.syncml.dm+xml",
    ".xdp": "application/vnd.adobe.xdp+xml",
    ".xdw": "application/vnd.fujixerox.docuworks",
    ".xenc": "application/xenc+xml",
    ".xer": "application/patch-ops-error+xml",
    ".xfdf": "application/vnd.adobe.xfdf",
    ".xfdl": "application/vnd.xfdl",
    ".xht": "application/xhtml+xml",
    ".xhtml": "application/xhtml+xml",
    ".xhvml": "application/xv+xml",
    ".xif": "image/vnd.xiff",
    ".xla": "application/vnd.ms-excel",
    ".xlam": "application/vnd.ms-excel.addin.macroenabled.12",
    ".xlb": "application/vnd.ms-excel",
    ".xlc": "application/vnd.ms-excel",
    ".xlm": "application/vnd.ms-excel",
    ".xls": "application/vnd.ms-excel",
    ".xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    ".xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xlt": "application/vnd.ms-excel",
    ".xltm": "application/vnd.ms-excel.template.macroenabled.12",
    ".xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    ".xlw": "application/vnd.ms-excel",
    ".xml": "application/xml",
    ".xo": "application/vnd.olpc-sugar",
    ".xop": "application/xop+xml",
    ".xpdl": "application/xml",
    ".xpi": "application/x-xpinstall",
    ".xpm": "image/x-xpixmap",
    ".xpr": "application/vnd.is-xpr",
    ".xps": "application/vnd.ms-xpsdocument",
    ".xpw": "application/vnd.intercon.formnet",
    ".xpx": "application/vnd.intercon.formnet",
    ".xsl": "application/xml",
    ".xslt": "application/xslt+xml",
    ".xsm": "application/vnd.syncml+xml",
    ".xspf": "application/xspf+xml",
    ".xul": "application/vnd.mozilla.xul+xml",
    ".xvm": "application/xv+xml",
    ".xvml": "application/xv+xml",
    ".xwd": "image/x-xwindowdump",
    ".xyz": "chemical/x-xyz",
    ".zaz": "application/vnd.zzazz.deck+xml",
    ".zip": "application/zip",
    ".zir": "application/vnd.zul",
    ".zirz": "application/vnd.zul",
    ".zmm": "application/vnd.handheld-entertainment+xml"
  }[t.toLowerCase()] || null;
}
var Cs = Object.defineProperty, Ps = Object.getOwnPropertyDescriptor, An = (t) => {
  throw TypeError(t);
}, bt = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Ps(e, i) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (a = (n ? s(e, i, a) : s(a)) || a);
  return n && a && Cs(e, i, a), a;
}, Di = (t, e, i) => e.has(t) || An("Cannot " + i), ve = (t, e, i) => (Di(t, e, "read from private field"), i ? i.call(t) : e.get(t)), Ae = (t, e, i) => e.has(t) ? An("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Rn = (t, e, i, n) => (Di(t, e, "write to private field"), e.set(t, i), i), R = (t, e, i) => (Di(t, e, "access private method"), i), fe, Tt, T, Dn, Fn, Wn, Nn, Bn, jn, Ln, Hn, Vn, Pe;
let tt = class extends X {
  constructor() {
    super(), Ae(this, T), Ae(this, fe, ""), this._serverUrl = "", Ae(this, Tt, []), this.consumeContext(aa, (t) => {
      this._serverUrl = t?.getServerUrl() ?? "";
    });
  }
  set value(t) {
    Rn(this, fe, t?.src ?? ""), R(this, T, Fn).call(this);
  }
  get value() {
    return {
      src: ve(this, fe),
      temporaryFileId: this.temporaryFile?.temporaryUnique
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback(), R(this, T, Pe).call(this);
  }
  render() {
    return !this.temporaryFile && !this.value.src ? R(this, T, jn).call(this) : this.value?.src && this._previewAlias ? R(this, T, Ln).call(this, this.value.src) : k;
  }
};
fe = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakSet();
Dn = async function() {
  return ve(this, Tt).length ? ve(this, Tt) : (await new ko(this, Mo, "fileUploadPreview", null, (t) => {
    Rn(this, Tt, t.map((e) => e.manifest));
  }).asPromise(), ve(this, Tt));
};
Fn = async function() {
  this._previewAlias = await R(this, T, Wn).call(this);
};
Wn = async function() {
  if (!this.value.src) return;
  const t = await R(this, T, Dn).call(this), e = t.find(
    (o) => Wi(o.forMimeTypes, "*/*")
  )?.alias;
  let i = null;
  if (this.temporaryFile?.file ? i = this.temporaryFile.file.type : i = R(this, T, Nn).call(this, this.value.src), !i) return e;
  const n = t.find((o) => Wi(o.forMimeTypes, i));
  if (n) return n.alias;
  const a = t.find((o) => (Array.isArray(o.forMimeTypes) ? o.forMimeTypes : [o.forMimeTypes]).find((c) => {
    const v = c.replace(/\*/g, "");
    if (i.startsWith(v) || i.endsWith(v)) return o.alias;
  }));
  return a ? a.alias : e;
};
Nn = function(t) {
  if (t.startsWith("data:"))
    return t.substring(5, t.indexOf(";"));
  const e = t.split(".").pop()?.toLowerCase();
  return e ? Ts("." + e) : null;
};
Bn = async function(t) {
  t.stopImmediatePropagation();
  const i = t.target.value?.[0];
  if (i?.status !== Yi.COMPLETE) return;
  this.temporaryFile = i.temporaryFile, R(this, T, Pe).call(this);
  const n = URL.createObjectURL(this.temporaryFile.file);
  this.value = { src: n }, this.dispatchEvent(new C());
};
jn = function() {
  return r`
			<umb-input-dropzone
				standalone
				disable-folder-upload
				accept=${zt(this._extensions?.join(","))}
				@change=${R(this, T, Bn)}></umb-input-dropzone>
		`;
};
Ln = function(t) {
  return t.startsWith("blob:") || (t = this._serverUrl + t), r`
			<div id="wrapper">
				<div id="wrapperInner">
					<umb-extension-slot
						type="fileUploadPreview"
						.props=${{ path: t, file: this.temporaryFile?.file }}
						.filter=${(e) => e.alias === this._previewAlias}>
					</umb-extension-slot>
				</div>
			</div>
			${R(this, T, Hn).call(this)}
		`;
};
Hn = function() {
  return r`
			<uui-button compact @click=${R(this, T, Vn)} label=${this.localize.term("content_uploadClear")}>
				<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
			</uui-button>
		`;
};
Vn = function() {
  this.temporaryFile?.abortController?.abort(), R(this, T, Pe).call(this), this.value = { src: void 0 }, this.temporaryFile = void 0, this.dispatchEvent(new C());
};
Pe = function() {
  this.value?.src?.startsWith("blob:") && URL.revokeObjectURL(this.value.src);
};
tt.styles = [
  Gi,
  q`
			:host {
				position: relative;
			}
			uui-icon {
				vertical-align: sub;
				margin-right: var(--uui-size-space-4);
			}

			#wrapper {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
				gap: var(--uui-size-space-4);
				box-sizing: border-box;
				margin-bottom: var(--uui-size-space-3);
			}

			#wrapper:has(umb-input-upload-field-file) {
				padding: var(--uui-size-space-4);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}

			#wrapperInner {
				position: relative;
				display: flex;
				width: 100%;
			}
		`
];
bt([
  l({ type: Object, attribute: !1 })
], tt.prototype, "value", 1);
bt([
  l({
    type: Array,
    attribute: "allowed-file-extensions",
    converter(t) {
      return typeof t == "string" ? t.split(",").map((e) => e.trim()) : t;
    }
  })
], tt.prototype, "allowedFileExtensions", 2);
bt([
  p()
], tt.prototype, "temporaryFile", 2);
bt([
  p()
], tt.prototype, "_extensions", 2);
bt([
  p()
], tt.prototype, "_previewAlias", 2);
bt([
  p()
], tt.prototype, "_serverUrl", 2);
tt = bt([
  z("umb-input-upload-field")
], tt);
export {
  hn as A,
  wr as B,
  Qo as C,
  ms as D,
  is as E,
  kr as F,
  Mr as G,
  Pt as H,
  Xe as I,
  Ze as J,
  cr as K,
  hr as L,
  vr as M,
  fr as N,
  gr as O,
  _r as P,
  Er as Q,
  ee as U,
  si as a,
  S as b,
  D as c,
  J as d,
  j as e,
  Z as f,
  ys as g,
  P as h,
  _ as i,
  Ts as j,
  tt as k,
  $r as l,
  G as m,
  ie as n,
  ur as o,
  mr as p,
  lr as q,
  pr as r,
  Go as s,
  _i as t,
  dr as u,
  us as v,
  xr as w,
  yr as x,
  br as y,
  Ko as z
};
//# sourceMappingURL=input-upload-field.element-BKvVffkE.js.map

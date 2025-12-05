import { css as I, property as l, state as p, customElement as S, html as r, when as It, repeat as ke, query as oe, nothing as M, classMap as fo, ifDefined as Oe } from "@umbraco-cms/backoffice/external/lit";
import { assignToFrozenObject as go, jsonStringComparison as oa } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as z } from "@umbraco-cms/backoffice/event";
import { UmbFileDropzoneItemStatus as vi } from "@umbraco-cms/backoffice/dropzone";
import { UmbLitElement as Q } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as fi } from "@umbraco-cms/backoffice/style";
import { UmbTemporaryFileConfigRepository as sa } from "@umbraco-cms/backoffice/temporary-file";
import { UmbFormControlMixin as St, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as ra } from "@umbraco-cms/backoffice/validation";
import { drag as _o } from "@umbraco-cms/backoffice/external/uui";
import { clamp as A, calculateExtrapolatedValue as Et, inverseLerp as yo, lerp as xo, umbDeepMerge as bo, UmbDeprecation as wo, debounce as Mo, UmbPaginationManager as ko, splitStringToArray as Eo, stringOrStringArrayContains as ea } from "@umbraco-cms/backoffice/utils";
import { UmbInteractionMemoryManager as $o, UmbInteractionMemoriesChangeEvent as la } from "@umbraco-cms/backoffice/interaction-memory";
import { UmbModalRouteRegistrationController as gi, UmbPathPattern as pa } from "@umbraco-cms/backoffice/router";
import { UmbSorterController as ca, UmbSorterResolvePlacementAsGrid as da } from "@umbraco-cms/backoffice/sorter";
import { UmbMediaTypeDetailServerDataSource as To, getUmbracoFolderUnique as Co, UmbMediaTypeStructureRepository as Po, isUmbracoFolder as qo, UMB_MEDIA_TYPE_ENTITY_TYPE as ua } from "@umbraco-cms/backoffice/media-type";
import { UMB_WORKSPACE_MODAL as ma, UMB_WORKSPACE_PATH_PATTERN as zo } from "@umbraco-cms/backoffice/workspace";
import { UmbImagingRepository as Uo } from "@umbraco-cms/backoffice/imaging";
import { UMB_SERVER_CONTEXT as ha } from "@umbraco-cms/backoffice/server";
import { UmbModalToken as dt, UmbModalBaseElement as va, UMB_MODAL_MANAGER_CONTEXT as Io } from "@umbraco-cms/backoffice/modal";
import { a as fa } from "./media-url.repository-B5RzlWhD.js";
import { UmbId as Ot } from "@umbraco-cms/backoffice/id";
import { MediaService as H } from "@umbraco-cms/backoffice/external/backend-api";
import { tryExecute as Ce } from "@umbraco-cms/backoffice/resources";
import { UmbControllerBase as _i, UmbContextBase as So } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as he } from "@umbraco-cms/backoffice/context-api";
import { UmbDetailRepositoryBase as Oo, UmbItemServerDataSourceBase as Ao, UmbItemRepositoryBase as Ro, UmbRepositoryItemsManager as Do } from "@umbraco-cms/backoffice/repository";
import { UmbManagementApiItemDataCache as Fo, UmbManagementApiItemDataRequestManager as Wo } from "@umbraco-cms/backoffice/management-api";
import { UmbTreeServerDataSourceBase as Bo, UmbTreeRepositoryBase as No, UMB_TREE_PICKER_MODAL_ALIAS as Lo } from "@umbraco-cms/backoffice/tree";
import { UmbPickerModalBaseElement as jo } from "@umbraco-cms/backoffice/picker";
import { UMB_PROPERTY_TYPE_BASED_PROPERTY_CONTEXT as Vo } from "@umbraco-cms/backoffice/content";
import { UMB_VARIANT_CONTEXT as ga } from "@umbraco-cms/backoffice/variant";
import { UMB_SECTION_PATH_PATTERN as Ho } from "@umbraco-cms/backoffice/section";
import { UmbPickerInputContext as Yo } from "@umbraco-cms/backoffice/picker-input";
import { UmbExtensionsManifestInitializer as Go } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Ko } from "@umbraco-cms/backoffice/extension-registry";
class ut extends Event {
  static {
    this.TYPE = "imagecrop-change";
  }
  constructor(t) {
    super(ut.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...t });
  }
}
class yi extends Event {
  static {
    this.TYPE = "focalpoint-change";
  }
  constructor(t, i) {
    super(yi.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...i }), this.focalPoint = t;
  }
}
var Xo = Object.defineProperty, Qo = Object.getOwnPropertyDescriptor, _a = (e) => {
  throw TypeError(e);
}, J = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Qo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Xo(t, i, a), a;
}, xi = (e, t, i) => t.has(e) || _a("Cannot " + i), mt = (e, t, i) => (xi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ne = (e, t, i) => t.has(e) ? _a("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ft = (e, t, i, n) => (xi(e, t, "write to private field"), t.set(e, i), i), Lt = (e, t, i) => (xi(e, t, "access private method"), i), Pe, gt, Xt, Qt, Ye, _t;
let D = class extends Q {
  constructor() {
    super(), Ne(this, Ye), Ne(this, Pe), this.crops = [], Ne(this, gt), this.focalPoint = { left: 0.5, top: 0.5 }, this.hideFocalPoint = !1, this.src = "", this._serverUrl = "", Ne(this, Xt, (e) => {
      const i = e.target.value;
      if (!i) return;
      const n = this.crops.findIndex((a) => a.alias === i.alias);
      n !== void 0 && (this.crops[n] = i, this.currentCrop = void 0, Lt(this, Ye, _t).call(this));
    }), Ne(this, Qt, (e) => {
      this.focalPoint = { top: e.focalPoint.top, left: e.focalPoint.left }, Lt(this, Ye, _t).call(this);
    }), this.onResetFocalPoint = () => {
      this.focalPoint = { left: 0.5, top: 0.5 }, Lt(this, Ye, _t).call(this);
    }, this.consumeContext(ha, (e) => {
      this._serverUrl = e?.getServerUrl() ?? "";
    });
  }
  set value(e) {
    e ? (this.crops = [...e.crops], this.focalPoint = e.focalPoint || { left: 0.5, top: 0.5 }, this.src = e.src, ft(this, Pe, e)) : (this.crops = [], this.focalPoint = { left: 0.5, top: 0.5 }, this.src = "", ft(this, Pe, void 0)), this.requestUpdate();
  }
  get value() {
    return mt(this, Pe);
  }
  set file(e) {
    ft(this, gt, e), e ? this.fileDataUrl = URL.createObjectURL(e) : this.fileDataUrl && (URL.revokeObjectURL(this.fileDataUrl), this.fileDataUrl = void 0);
  }
  get file() {
    return mt(this, gt);
  }
  get source() {
    return this.src ? this.src.startsWith("/") ? `${this._serverUrl}${this.src}` : this.src : this.fileDataUrl ?? "";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.fileDataUrl && URL.revokeObjectURL(this.fileDataUrl);
  }
  onCropClick(e) {
    const t = this.crops.findIndex((i) => i.alias === e.alias);
    t !== -1 && (this.currentCrop = { ...this.crops[t] });
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
					@imagecrop-change=${mt(this, Xt)}>
				</umb-image-cropper>
			` : r`
			<umb-image-cropper-focus-setter
				.focalPoint=${this.focalPoint}
				.src=${this.source}
				?hideFocalPoint=${this.hideFocalPoint}
				@focalpoint-change=${mt(this, Qt)}>
			</umb-image-cropper-focus-setter>
			<div id="actions">${this.renderActions()}</div>
		`;
  }
  renderActions() {
    return r`
			<slot name="actions"></slot>
			${It(
      !this.hideFocalPoint && this.focalPoint.left !== 0.5 && this.focalPoint.top !== 0.5,
      () => r`
					<uui-button compact label=${this.localize.term("content_resetFocalPoint")} @click=${this.onResetFocalPoint}>
						<uui-icon name="icon-axis-rotation"></uui-icon>
						${this.localize.term("content_resetFocalPoint")}
					</uui-button>
				`
    )}
		`;
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return ke(
        this.crops,
        (e) => e.alias + JSON.stringify(e.coordinates),
        (e) => r`
				<umb-image-cropper-preview
					.crop=${e}
					.focalPoint=${this.focalPoint}
					.src=${this.source}
					?active=${this.currentCrop?.alias === e.alias}
					@click=${() => this.onCropClick(e)}>
				</umb-image-cropper-preview>
			`
      );
  }
};
Pe = /* @__PURE__ */ new WeakMap();
gt = /* @__PURE__ */ new WeakMap();
Xt = /* @__PURE__ */ new WeakMap();
Qt = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakSet();
_t = function() {
  ft(this, Pe, {
    crops: [...this.crops],
    focalPoint: this.focalPoint,
    src: this.src
  }), this.dispatchEvent(new z());
};
D.styles = [
  I`
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

				uui-icon {
					padding-right: var(--uui-size-1);
				}
			}

			slot[name='actions'] {
				display: block;
				flex: 1;
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

				umb-image-cropper-preview[active] {
					background-color: var(--uui-color-current);
				}
			}
		`
];
J([
  l({ attribute: !1 })
], D.prototype, "value", 1);
J([
  p()
], D.prototype, "crops", 2);
J([
  p()
], D.prototype, "currentCrop", 2);
J([
  l({ attribute: !1 })
], D.prototype, "file", 1);
J([
  l()
], D.prototype, "fileDataUrl", 2);
J([
  p()
], D.prototype, "focalPoint", 2);
J([
  l({ type: Boolean })
], D.prototype, "hideFocalPoint", 2);
J([
  p()
], D.prototype, "src", 2);
J([
  p()
], D.prototype, "_serverUrl", 2);
D = J([
  S("umb-image-cropper-field")
], D);
var Jo = Object.defineProperty, Zo = Object.getOwnPropertyDescriptor, ya = (e) => {
  throw TypeError(e);
}, Z = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Zo(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Jo(t, i, a), a;
}, bi = (e, t, i) => t.has(e) || ya("Cannot " + i), _e = (e, t, i) => (bi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), jt = (e, t, i) => t.has(e) ? ya("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), es = (e, t, i, n) => (bi(e, t, "write to private field"), t.set(e, i), i), k = (e, t, i) => (bi(e, t, "access private method"), i), ge, st, b, xa, ba, ye, wi, wa, Mi, Jt, Ma, ka;
let L = class extends Q {
  constructor() {
    super(...arguments), jt(this, b), this._isDraggingGridHandle = !1, this._coords = { x: 0, y: 0 }, jt(this, ge, { left: 0.5, top: 0.5 }), this.hideFocalPoint = !1, this.disabled = !1, jt(this, st, 8);
  }
  set focalPoint(e) {
    es(this, ge, e), k(this, b, wi).call(this, _e(this, ge).left, _e(this, ge).top), k(this, b, ba).call(this);
  }
  get focalPoint() {
    return _e(this, ge);
  }
  update(e) {
    super.update(e), e.has("src") && this.src && k(this, b, xa).call(this);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.style.setProperty("--dot-radius", `${_e(this, st)}px`);
  }
  render() {
    return this.src ? r`
			<div
				id="wrapper"
				@click=${k(this, b, Ma)}
				@mousedown=${k(this, b, Jt)}
				@touchstart=${k(this, b, Jt)}>
				<img id="image" @keydown=${() => M} src=${this.src} alt="" />
				<span
					id="focal-point"
					class=${fo({ "focal-point--dragging": this._isDraggingGridHandle, hidden: this.hideFocalPoint })}
					tabindex=${Oe(this.disabled ? void 0 : "0")}
					aria-label=${this.localize.term("general_focalPoint")}
					@keydown=${k(this, b, ka)}>
				</span>
			</div>
		` : M;
  }
};
ge = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
xa = async function() {
  await this.updateComplete, this.hideFocalPoint || k(this, b, wi).call(this, this.focalPoint.left, this.focalPoint.top), this.imageElement.onload = () => {
    if (!this.imageElement || !this.wrapperElement) return;
    const e = this.imageElement.naturalWidth / this.imageElement.naturalHeight, t = this.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
    i.width > t.width && (this.imageElement.style.width = "100%"), i.height > t.height && (this.imageElement.style.height = "100%"), k(this, b, Mi).call(this), this.imageElement.style.aspectRatio = `${e}`, this.wrapperElement.style.aspectRatio = `${e}`;
  };
};
ba = function() {
  k(this, b, wa).call(this, _e(this, ge)) && k(this, b, Mi).call(this);
};
ye = function(e, t, i, n) {
  const a = A(e / i, 0, 1), o = A(t / n, 0, 1), s = { left: a, top: o };
  this.dispatchEvent(new yi(s));
};
wi = function(e, t) {
  this.focalPointElement && (this.focalPointElement.style.left = `calc(${e * 100}% - ${_e(this, st)}px)`, this.focalPointElement.style.top = `calc(${t * 100}% - ${_e(this, st)}px)`);
};
wa = function(e) {
  if (this.focalPoint)
    return e.left === 0.5 && e.top === 0.5;
};
Mi = function() {
  this.imageElement && (this._coords.x = this.imageElement?.clientWidth / 2, this._coords.y = this.imageElement.clientHeight / 2);
};
Jt = function(e) {
  if (this.disabled || this.hideFocalPoint || e.button !== 0)
    return;
  const t = this.wrapperElement, i = this.focalPointElement;
  if (!t) return;
  const { width: n, height: a } = t.getBoundingClientRect();
  i?.focus(), e.preventDefault(), e.stopPropagation(), this._isDraggingGridHandle = !0, _o(t, {
    onMove: (o, s) => {
      isNaN(o) || isNaN(s) || (this._coords.x = o, this._coords.y = s, k(this, b, ye).call(this, o, s, n, a));
    },
    onStop: () => this._isDraggingGridHandle = !1,
    initialEvent: e
  });
};
Ma = function(e) {
  if (this.disabled || this.hideFocalPoint || e.button !== 0)
    return;
  const t = this.wrapperElement, i = this.focalPointElement;
  if (!t) return;
  i?.focus();
  const n = t.getBoundingClientRect(), a = t.ownerDocument.defaultView, { width: o, height: s } = t.getBoundingClientRect(), c = n.left + a.scrollX, v = n.top + a.scrollY, _ = e.pageX - c, re = e.pageY - v;
  k(this, b, ye).call(this, _, re, o, s);
};
ka = function(e) {
  if (this.disabled || this.hideFocalPoint) return;
  const t = e.shiftKey ? 1 : 10, i = this.wrapperElement;
  if (!i) return;
  const { width: n, height: a } = i.getBoundingClientRect();
  e.key === "ArrowLeft" && (e.preventDefault(), this._coords.x = A(this._coords.x - t, 0, n), k(this, b, ye).call(this, this._coords.x, this._coords.y, n, a)), e.key === "ArrowRight" && (e.preventDefault(), this._coords.x = A(this._coords.x + t, 0, n), k(this, b, ye).call(this, this._coords.x, this._coords.y, n, a)), e.key === "ArrowUp" && (e.preventDefault(), this._coords.y = A(this._coords.y - t, 0, a), k(this, b, ye).call(this, this._coords.x, this._coords.y, n, a)), e.key === "ArrowDown" && (e.preventDefault(), this._coords.y = A(this._coords.y + t, 0, a), k(this, b, ye).call(this, this._coords.x, this._coords.y, n, a));
};
L.styles = I`
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
Z([
  oe("#image")
], L.prototype, "imageElement", 2);
Z([
  oe("#wrapper")
], L.prototype, "wrapperElement", 2);
Z([
  oe("#focal-point")
], L.prototype, "focalPointElement", 2);
Z([
  p()
], L.prototype, "_isDraggingGridHandle", 2);
Z([
  p()
], L.prototype, "_coords", 2);
Z([
  l({ attribute: !1 })
], L.prototype, "focalPoint", 1);
Z([
  l({ type: Boolean })
], L.prototype, "hideFocalPoint", 2);
Z([
  l({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", 2);
Z([
  l({ type: String })
], L.prototype, "src", 2);
L = Z([
  S("umb-image-cropper-focus-setter")
], L);
var ts = Object.defineProperty, is = Object.getOwnPropertyDescriptor, Ea = (e) => {
  throw TypeError(e);
}, Ee = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? is(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && ts(t, i, a), a;
}, ki = (e, t, i) => t.has(e) || Ea("Cannot " + i), Zt = (e, t, i) => (ki(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ta = (e, t, i) => t.has(e) ? Ea("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), as = (e, t, i, n) => (ki(e, t, "write to private field"), t.set(e, i), i), ei = (e, t, i) => (ki(e, t, "access private method"), i), Ue, tt, $a, Ei;
let ae = class extends Q {
  constructor() {
    super(...arguments), ta(this, tt), this.src = "", ta(this, Ue, { left: 0.5, top: 0.5 });
  }
  set focalPoint(e) {
    as(this, Ue, e), ei(this, tt, Ei).call(this);
  }
  get focalPoint() {
    return Zt(this, Ue);
  }
  connectedCallback() {
    super.connectedCallback(), ei(this, tt, $a).call(this);
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
			${this.crop.coordinates ? r`<span id="user-defined"><umb-localize key="imagecropper_customCrop">User defined</umb-localize></span>` : M}
		` : r`<span id="label">${this.label}</span>`;
  }
};
Ue = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakSet();
$a = async function() {
  if (!this.crop) return;
  await this.updateComplete, await new Promise((_) => this.imageElement.onload = () => _(this.imageElement));
  const e = this.imageContainerElement.getBoundingClientRect(), t = this.crop.width / this.crop.height, i = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
  let n = 0, a = 0, o = 0, s = 0, c = 0, v = 0;
  if (t > 1 ? (n = e.width, a = e.width / t) : (n = e.height * t, a = e.height), this.crop.coordinates) {
    if (t > 1) {
      const _ = this.crop.coordinates.x1 + this.crop.coordinates.x2;
      o = Et(n, _), s = o / i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    } else {
      const _ = this.crop.coordinates.y1 + this.crop.coordinates.y2;
      s = Et(a, _), o = s * i, v = -s * this.crop.coordinates.y1, c = -o * this.crop.coordinates.x1;
    }
    v = v / a * 100, c = c / n * 100, this.imageElement.style.top = `${v}%`, this.imageElement.style.left = `${c}%`;
  } else
    i > t ? (s = a, o = s * i) : (o = n, s = o / i), ei(this, tt, Ei).call(this, o, s, n, a);
  this.imageContainerElement.style.width = `${n}px`, this.imageContainerElement.style.aspectRatio = `${t}`, o = o / n * 100, s = s / a * 100, this.imageElement.style.width = `${o}%`, this.imageElement.style.height = `${s}%`;
};
Ei = function(e, t, i, n) {
  if (!this.crop || !this.imageElement || !this.imageContainerElement || this.crop.coordinates) return;
  if (!e || !t) {
    const s = this.imageElement.getBoundingClientRect();
    e = s.width, t = s.height;
  }
  if (!i || !n) {
    const s = this.imageContainerElement.getBoundingClientRect();
    i = s.width, n = s.height;
  }
  let a = i / 2 - e * Zt(this, Ue).left, o = n / 2 - t * Zt(this, Ue).top;
  a = A(a, i - e, 0), o = A(o, n - t, 0), a = a / i * 100, o = o / n * 100, this.imageElement.style.top = `${o}%`, this.imageElement.style.left = `${a}%`;
};
ae.styles = I`
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
Ee([
  oe("#image")
], ae.prototype, "imageElement", 2);
Ee([
  oe("#container")
], ae.prototype, "imageContainerElement", 2);
Ee([
  l({ type: Object, attribute: !1 })
], ae.prototype, "crop", 2);
Ee([
  l({ type: String, attribute: !1 })
], ae.prototype, "src", 2);
Ee([
  l({ type: String })
], ae.prototype, "label", 2);
Ee([
  l({ attribute: !1 })
], ae.prototype, "focalPoint", 1);
ae = Ee([
  S("umb-image-cropper-preview")
], ae);
var ns = Object.defineProperty, os = Object.getOwnPropertyDescriptor, Ta = (e) => {
  throw TypeError(e);
}, ve = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? os(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && ns(t, i, a), a;
}, $i = (e, t, i) => t.has(e) || Ta("Cannot " + i), m = (e, t, i) => ($i(e, t, "read from private field"), i ? i.call(e) : t.get(e)), $ = (e, t, i) => t.has(e) ? Ta("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ie = (e, t, i, n) => ($i(e, t, "write to private field"), t.set(e, i), i), g = (e, t, i) => ($i(e, t, "access private method"), i), we, Ti, Ci, ti, xe, rt, it, Ge, yt, xt, h, ii, Ca, Pa, ai, ni, Pi, qa, ce, za, Ua, Ia, Sa, At, bt, wt, Rt;
let K = class extends Q {
  constructor() {
    super(...arguments), $(this, h), this.src = "", this.focalPoint = {
      left: 0.5,
      top: 0.5
    }, $(this, we, 0), $(this, Ti, 50), $(this, Ci, 4), $(this, ti, 1e-3), $(this, xe, 0), $(this, rt, 0), $(this, it, 0), $(this, Ge, !1), $(this, yt, 0), $(this, xt, 0), $(this, At, (e) => {
      e.preventDefault(), ie(this, Ge, !0);
      const t = this.imageElement.getBoundingClientRect(), i = this.viewportElement.getBoundingClientRect();
      ie(this, yt, e.clientX - t.left + i.left), ie(this, xt, e.clientY - t.top + i.top), window.addEventListener("mousemove", m(this, bt)), window.addEventListener("mouseup", m(this, wt));
    }), $(this, bt, (e) => {
      if (m(this, Ge)) {
        const t = e.clientX - m(this, yt), i = e.clientY - m(this, xt);
        g(this, h, Pi).call(this, i, t);
      }
    }), $(this, wt, () => {
      ie(this, Ge, !1), window.removeEventListener("mousemove", m(this, bt)), window.removeEventListener("mouseup", m(this, wt));
    }), $(this, Rt, (e) => {
      e.preventDefault(), g(this, h, ni).call(this, e.deltaY * -m(this, ti), e.clientX, e.clientY);
    });
  }
  get zoom() {
    return m(this, we);
  }
  set zoom(e) {
    const t = e - m(this, we);
    g(this, h, ni).call(this, t);
  }
  connectedCallback() {
    super.connectedCallback(), g(this, h, ai).call(this), g(this, h, Ca).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), g(this, h, Pa).call(this);
  }
  updated(e) {
    super.updated(e), e.has("value") && g(this, h, ai).call(this);
  }
  render() {
    return r`
			<div id="viewport">
				<img id="image" src=${this.src} alt="" />
				<div id="mask"></div>
			</div>
			<uui-slider
				@input=${g(this, h, Sa)}
				.value=${this.zoom.toString()}
				hide-step-values
				id="slider"
				type="range"
				min="0"
				max="1"
				value="0"
				step="0.001">
			</uui-slider>
			<div id="actions">
				<uui-button @click=${g(this, h, Ia)} label="${this.localize.term("imagecropper_reset")}"></uui-button>
				<uui-button
					look="secondary"
					@click=${g(this, h, Ua)}
					label="${this.localize.term("general_cancel")}"></uui-button>
				<uui-button
					look="primary"
					color="positive"
					@click=${g(this, h, za)}
					label="${this.localize.term("buttons_save")}"></uui-button>
			</div>
		`;
  }
};
we = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
xt = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
ii = function() {
  return xo(m(this, xe), m(this, rt), m(this, we));
};
Ca = async function() {
  await this.updateComplete, this.imageElement.addEventListener("mousedown", m(this, At)), this.addEventListener("wheel", m(this, Rt), { passive: !1 });
};
Pa = function() {
  this.imageElement.removeEventListener("mousedown", m(this, At)), this.removeEventListener("wheel", m(this, Rt));
};
ai = async function() {
  if (!this.value) return;
  await this.updateComplete, this.imageElement.complete || await new Promise((j) => this.imageElement.onload = () => j(this.imageElement));
  const e = this.viewportElement.clientWidth, t = this.viewportElement.clientHeight, i = e / t, n = this.value.width / this.value.height;
  let a = 0, o = 0, s = 0, c = 0, v = 0, _ = 0;
  {
    const j = 2 * m(this, Ti), V = e - j, Be = t - j, Zi = n > i;
    a = Zi ? V : Be * n, o = Zi ? V / n : Be;
  }
  const re = (e - a) / 2, Te = (t - o) / 2;
  this.maskElement.style.width = `${a}px`, this.maskElement.style.height = `${o}px`, this.maskElement.style.left = `${re}px`, this.maskElement.style.top = `${Te}px`;
  {
    const j = a / this.imageElement.naturalWidth, V = o / this.imageElement.naturalHeight, Be = Math.max(j, V);
    ie(this, xe, Be), ie(this, rt, Be * m(this, Ci));
  }
  if (this.value.coordinates) {
    const j = this.imageElement.naturalWidth / this.imageElement.naturalHeight;
    if (n > 1) {
      const V = this.value.coordinates.x1 + this.value.coordinates.x2;
      s = Et(a, V), c = s / j, v = -s * this.value.coordinates.x1 + re, _ = -c * this.value.coordinates.y1 + Te;
    } else {
      const V = this.value.coordinates.y1 + this.value.coordinates.y2;
      c = Et(o, V), s = c * j, v = -s * this.value.coordinates.x1 + re, _ = -c * this.value.coordinates.y1 + Te;
    }
  } else {
    s = this.imageElement.naturalWidth * m(this, xe), c = this.imageElement.naturalHeight * m(this, xe), v = re + a / 2 - s * this.focalPoint.left, _ = Te + o / 2 - c * this.focalPoint.top;
    const j = re + a - s, V = Te + o - c;
    v = A(v, j, re), _ = A(_, V, Te);
  }
  this.imageElement.style.left = `${v}px`, this.imageElement.style.top = `${_}px`, this.imageElement.style.width = `${s}px`, this.imageElement.style.height = `${c}px`;
  const mo = s / this.imageElement.naturalWidth, ho = c / this.imageElement.naturalHeight, vo = Math.max(mo, ho);
  ie(this, we, yo(m(this, xe), m(this, rt), vo));
};
ni = function(e, t, i) {
  ie(this, it, m(this, h, ii)), ie(this, we, A(this.zoom + e, 0, 1));
  const n = m(this, h, ii), a = this.maskElement.getBoundingClientRect(), o = this.imageElement.getBoundingClientRect();
  let s = { left: 0, top: 0 };
  t && i ? s = g(this, h, ce).call(this, t, i) : s = g(this, h, ce).call(this, a.left + a.width / 2, a.top + a.height / 2);
  const c = g(this, h, ce).call(this, o.left, o.top), v = s.left - (s.left - c.left) * (n / m(this, it)), _ = s.top - (s.top - c.top) * (n / m(this, it));
  this.imageElement.style.width = `${this.imageElement.naturalWidth * n}px`, this.imageElement.style.height = `${this.imageElement.naturalHeight * n}px`, g(this, h, Pi).call(this, _, v);
};
Pi = function(e, t) {
  const i = this.maskElement.getBoundingClientRect(), n = this.imageElement.getBoundingClientRect(), a = g(this, h, ce).call(this, i.left + i.width - n.width, 0).left, o = g(this, h, ce).call(this, i.left, 0).left, s = g(this, h, ce).call(this, 0, i.top + i.height - n.height).top, c = g(this, h, ce).call(this, 0, i.top).top;
  t = A(t, a, o), e = A(e, s, c), this.imageElement.style.left = `${t}px`, this.imageElement.style.top = `${e}px`;
};
qa = function() {
  const e = { x1: 0, y1: 0, x2: 0, y2: 0 }, t = this.maskElement.getBoundingClientRect(), i = this.imageElement.getBoundingClientRect();
  return e.x1 = (t.left - i.left) / i.width, e.y1 = (t.top - i.top) / i.height, e.x2 = Math.abs((t.right - i.right) / i.width), e.y2 = Math.abs((t.bottom - i.bottom) / i.height), e;
};
ce = function(e, t) {
  const i = this.viewportElement.getBoundingClientRect();
  return {
    left: e - i.left,
    top: t - i.top
  };
};
za = function() {
  if (!this.value) return;
  const { x1: e, x2: t, y1: i, y2: n } = g(this, h, qa).call(this);
  this.value = {
    ...this.value,
    coordinates: { x1: e, x2: t, y1: i, y2: n }
  }, this.dispatchEvent(new ut());
};
Ua = function() {
  this.dispatchEvent(new ut());
};
Ia = function() {
  this.value && (delete this.value.coordinates, this.dispatchEvent(new ut()));
};
Sa = function(e) {
  const t = e.target;
  this.zoom = Number(t.value);
};
At = /* @__PURE__ */ new WeakMap();
bt = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
K.styles = I`
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
ve([
  oe("#viewport")
], K.prototype, "viewportElement", 2);
ve([
  oe("#mask")
], K.prototype, "maskElement", 2);
ve([
  oe("#image")
], K.prototype, "imageElement", 2);
ve([
  l({ type: Object, attribute: !1 })
], K.prototype, "value", 2);
ve([
  l({ type: String })
], K.prototype, "src", 2);
ve([
  l({ attribute: !1 })
], K.prototype, "focalPoint", 2);
ve([
  l({ type: Number })
], K.prototype, "zoom", 1);
K = ve([
  S("umb-image-cropper")
], K);
var ss = Object.defineProperty, rs = Object.getOwnPropertyDescriptor, Oa = (e) => {
  throw TypeError(e);
}, $e = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? rs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && ss(t, i, a), a;
}, Aa = (e, t, i) => t.has(e) || Oa("Cannot " + i), oi = (e, t, i) => (Aa(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Vt = (e, t, i) => t.has(e) ? Oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), qe = (e, t, i) => (Aa(e, t, "access private method"), i), $t, pe, Ra, Da, qi, Fa, Wa, Ba, Na;
const ls = { left: 0.5, top: 0.5 }, ps = {
  temporaryFileId: null,
  src: "",
  crops: [],
  focalPoint: ls
};
let ne = class extends St(Q, void 0) {
  constructor() {
    super(), Vt(this, pe), this.crops = [], this._loading = !0, Vt(this, $t, new sa(this)), Vt(this, qi, () => {
      this.value = void 0, this._file?.temporaryFile?.abortController?.abort(), this._file = void 0, this.dispatchEvent(new z());
    }), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ra,
      () => !!this.required && (!this.value || this.value.src === "" && this.value.temporaryFileId == null)
    );
  }
  firstUpdated() {
    qe(this, pe, Fa).call(this), qe(this, pe, Ra).call(this);
  }
  render() {
    return this._loading ? r`<div id="loader"><uui-loader></uui-loader></div>` : this.value?.src || this._file ? qe(this, pe, Na).call(this) : qe(this, pe, Wa).call(this);
  }
};
$t = /* @__PURE__ */ new WeakMap();
pe = /* @__PURE__ */ new WeakSet();
Ra = async function() {
  await oi(this, $t).initialized, this.observe(
    oi(this, $t).part("imageFileTypes"),
    (e) => {
      this._accept = e.join(","), this._loading = !1;
    },
    "_observeFileTypes"
  );
};
Da = function(e) {
  e.stopImmediatePropagation();
  const i = e.target.value?.[0];
  i?.status === vi.COMPLETE && (this._file = i, this.value = go(this.value ?? ps, {
    temporaryFileId: i.temporaryFile?.temporaryUnique
  }), this.dispatchEvent(new z()));
};
qi = /* @__PURE__ */ new WeakMap();
Fa = function() {
  if (this.value) {
    const e = this.crops.map((t) => {
      const i = this.value.crops.find((a) => a.alias === t.alias);
      return {
        ...t,
        coordinates: i?.coordinates ?? void 0
      };
    });
    this.value = {
      ...this.value,
      crops: e
    };
  }
};
Wa = function() {
  return r`
			<umb-input-dropzone
				standalone
				accept=${Oe(this._accept)}
				disable-folder-upload
				@change="${qe(this, pe, Da)}"></umb-input-dropzone>
		`;
};
Ba = function(e) {
  const t = e.target.value;
  if (!t) {
    this.value = void 0, this.dispatchEvent(new z());
    return;
  }
  this.value && this.value.temporaryFileId && (t.temporaryFileId = this.value.temporaryFileId), (t.temporaryFileId || t.src !== "") && (this.value = t), this.dispatchEvent(new z());
};
Na = function() {
  return r`
			<umb-image-cropper-field .value=${this.value} .file=${this._file?.temporaryFile?.file} @change=${qe(this, pe, Ba)}>
				<uui-button slot="actions" compact label=${this.localize.term("content_uploadClear")} @click=${oi(this, qi)}>
					<uui-icon name="icon-trash"></uui-icon>
					<umb-localize key="content_uploadClear">Clear file(s)</umb-localize>
				</uui-button>
			</umb-image-cropper-field>
		`;
};
ne.styles = [
  fi,
  I`
			umb-input-dropzone {
				max-width: 500px;
				min-width: 300px;
			}

			#loader {
				display: flex;
				justify-content: center;
			}

			[slot='actions'] {
				uui-icon {
					padding-right: var(--uui-size-1);
				}
			}
		`
];
$e([
  l({ type: Boolean })
], ne.prototype, "required", 2);
$e([
  l({ type: String })
], ne.prototype, "requiredMessage", 2);
$e([
  l({ attribute: !1 })
], ne.prototype, "crops", 2);
$e([
  p()
], ne.prototype, "_file", 2);
$e([
  p()
], ne.prototype, "_accept", 2);
$e([
  p()
], ne.prototype, "_loading", 2);
ne = $e([
  S("umb-input-image-cropper")
], ne);
const Dr = new he("UmbCollectionContext"), Fr = new dt("Umb.Modal.Media.CreateOptions", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
var cs = Object.getOwnPropertyDescriptor, ds = Object.getPrototypeOf, us = Reflect.get, La = (e) => {
  throw TypeError(e);
}, ms = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? cs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = s(a) || a);
  return a;
}, hs = (e, t, i) => t.has(e) || La("Cannot " + i), vs = (e, t, i) => t.has(e) ? La("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), fs = (e, t, i) => (hs(e, t, "access private method"), i), gs = (e, t, i) => us(ds(e), i, t), si, ja;
let at = class extends D {
  constructor() {
    super(...arguments), vs(this, si);
  }
  renderSide() {
    if (!(!this.value || !this.crops))
      return r`
			<umb-image-cropper-preview
				.label=${this.localize.term("general_media")}
				?active=${!this.currentCrop}
				@click=${fs(this, si, ja)}>
			</umb-image-cropper-preview>
			${super.renderSide()}
		`;
  }
};
si = /* @__PURE__ */ new WeakSet();
ja = function() {
  this.currentCrop = void 0;
};
at.styles = [
  ...gs(at, at, "styles"),
  I`
			#main {
				max-width: unset;
				min-width: unset;
			}

			#side {
				flex: none;
			}
		`
];
at = ms([
  S("umb-image-cropper-editor-field")
], at);
const Va = new dt(
  "Umb.Modal.MediaPicker",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
var _s = Object.defineProperty, ys = Object.getOwnPropertyDescriptor, Ha = (e) => {
  throw TypeError(e);
}, se = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ys(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && _s(t, i, a), a;
}, zi = (e, t, i) => t.has(e) || Ha("Cannot " + i), lt = (e, t, i) => (zi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Le = (e, t, i) => t.has(e) ? Ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ya = (e, t, i, n) => (zi(e, t, "write to private field"), t.set(e, i), i), Y = (e, t, i) => (zi(e, t, "access private method"), i), Ui, Tt, Dt, Ct, B, Ga, Ii, Ka, Xa, Si, Qa, Ja, Za;
let U = class extends va {
  constructor() {
    super(), Le(this, B), Le(this, Ui, new fa(this)), this._key = "", this._unique = "", this._hideFocalPoint = !1, this._crops = [], this._editMediaPath = "", this._isCroppable = !1, Le(this, Tt, new sa(this)), Le(this, Dt), Le(this, Ct), this.consumeContext(Io, (e) => {
      Ya(this, Ct, e);
    }), new gi(this, ma).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((e) => {
      this._editMediaPath = e({});
    });
  }
  connectedCallback() {
    super.connectedCallback(), this._key = this.data?.key ?? "", this._unique = this.data?.unique ?? "", this._hideFocalPoint = this.data?.hideFocalPoint ?? !1, this._crops = this.data?.cropOptions ?? [], this._pickableFilter = this.data?.pickableFilter, Y(this, B, Ga).call(this), Y(this, B, Ii).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectMedia")}>
				<div id="layout">
					${It(
      this._isCroppable,
      () => Y(this, B, Qa).call(this),
      () => Y(this, B, Ja).call(this)
    )}
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
Ui = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
Ct = /* @__PURE__ */ new WeakMap();
B = /* @__PURE__ */ new WeakSet();
Ga = async function() {
  await lt(this, Tt).initialized, this.observe(
    lt(this, Tt).part("imageFileTypes"),
    (e) => Ya(this, Dt, e),
    "_observeFileTypes"
  );
};
Ii = async function() {
  const { data: e } = await lt(this, Ui).requestItems([this._unique]), t = e?.[0];
  if (!t?.url) {
    this._isCroppable = !1, this._imageCropperValue = void 0;
    return;
  }
  t.extension && lt(this, Dt)?.includes(t.extension) && (this._isCroppable = !0);
  const i = this._crops.map((a) => {
    const o = this.value.crops?.find((s) => s.alias === a.alias);
    return o ? { ...a, ...o } : a;
  }), n = {
    ...this.value,
    src: t.url,
    crops: i,
    focalPoint: this.value.focalPoint ?? { left: 0.5, top: 0.5 }
  };
  this._imageCropperValue = n;
};
Ka = async function() {
  const t = await lt(this, Ct)?.open(this, Va, {
    data: { multiple: !1, pickableFilter: this._pickableFilter },
    value: { selection: [this._unique] }
  })?.onSubmit().catch(() => null);
  if (!t) return;
  const i = t.selection[0];
  if (!i)
    throw new Error("No media selected");
  this._unique = i, this.value = { ...this.value, unique: this._unique }, this._isCroppable = !1, Y(this, B, Ii).call(this);
};
Xa = function(e) {
  const t = e.target.value;
  t && (this._imageCropperValue && (this._imageCropperValue.crops = t.crops, this._imageCropperValue.focalPoint = t.focalPoint), this.value = { key: this._key, unique: this._unique, crops: t.crops, focalPoint: t.focalPoint });
};
Si = function() {
  return r`
			<uui-button compact label=${this.localize.term("mediaPicker_changeMedia")} @click=${Y(this, B, Ka)}>
				<uui-icon name="icon-search"></uui-icon>
				<umb-localize key="mediaPicker_changeMedia">Change Media Item</umb-localize>
			</uui-button>
			<uui-button
				compact
				label=${this.localize.term("mediaPicker_openMedia")}
				href=${this._editMediaPath + "edit/" + this._unique}>
				<uui-icon name="icon-out"></uui-icon>
				<umb-localize key="mediaPicker_openMedia">Open in Media Library</umb-localize>
			</uui-button>
		`;
};
Qa = function() {
  return this._imageCropperValue ? r`
			<umb-image-cropper-editor-field
				.value=${this._imageCropperValue}
				?hideFocalPoint=${this._hideFocalPoint}
				@change=${Y(this, B, Xa)}>
				<div slot="actions">${Y(this, B, Si).call(this)}</div>
			</umb-image-cropper-editor-field>
		` : M;
};
Ja = function() {
  return r`
			<div id="main">
				${It(
    this._imageCropperValue?.src,
    (e) => r`<umb-file-upload-preview .path=${e}></umb-file-upload-preview>`,
    () => Y(this, B, Za).call(this)
  )}
			</div>
			<div id="actions">${Y(this, B, Si).call(this)}</div>
		`;
};
Za = function() {
  const e = [this.localize.term("general_media")];
  return r`
			<div class="uui-text">
				<h4>
					<umb-localize key="entityDetail_notFoundTitle" .args=${e}>Item not found</umb-localize>
				</h4>
				<umb-localize key="entityDetail_notFoundDescription">The requested item could not be found.</umb-localize>
			</div>
		`;
};
U.styles = [
  fi,
  I`
			#layout {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			umb-image-cropper-editor-field {
				flex: 1;
			}

			#main {
				flex: 1;
				background-color: var(--uui-color-surface);
				outline: 1px solid var(--uui-color-border);
			}

			#actions {
				display: flex;
				margin-top: 0.5rem;

				uui-icon {
					padding-right: var(--uui-size-1);
				}
			}

			.uui-text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
		`
];
se([
  p()
], U.prototype, "_imageCropperValue", 2);
se([
  p()
], U.prototype, "_key", 2);
se([
  p()
], U.prototype, "_unique", 2);
se([
  p()
], U.prototype, "_hideFocalPoint", 2);
se([
  p()
], U.prototype, "_crops", 2);
se([
  p()
], U.prototype, "_editMediaPath", 2);
se([
  p()
], U.prototype, "_pickableFilter", 2);
se([
  p()
], U.prototype, "_isCroppable", 2);
U = se([
  S("umb-image-cropper-editor-modal")
], U);
const xs = U, Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbImageCropperEditorModalElement() {
    return U;
  },
  default: xs,
  get element() {
    return U;
  }
}, Symbol.toStringTag, { value: "Module" })), bs = new dt("Umb.Modal.ImageCropperEditor", {
  modal: {
    type: "sidebar",
    size: "full"
  }
}), X = "media", Ft = "media-root", Br = "umb-media-placeholder", Nr = `${X}-property-value`;
class ws extends _i {
  /**
   * Creates a new Media scaffold
   * @param {UmbDeepPartialObject<UmbMediaDetailModel>} [preset]
   * @returns { UmbMediaDetailModel }
   * @memberof UmbMediaServerDataSource
   */
  async createScaffold(t = {}) {
    let i = null, n = null;
    const a = t.mediaType?.unique;
    if (!a)
      throw new Error("Media type unique is missing");
    const { data: o } = await new To(this).read(a);
    i = o?.icon ?? null, n = o?.collection ?? null;
    const s = {
      entityType: X,
      unique: Ot.new(),
      mediaType: {
        unique: a,
        collection: n,
        icon: i
      },
      isTrashed: !1,
      flags: [],
      values: [],
      variants: [
        {
          culture: null,
          segment: null,
          name: "",
          createDate: null,
          updateDate: null,
          flags: []
        }
      ]
    };
    return { data: bo(t, s) };
  }
  /**
   * Fetches a Media with the given id from the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async read(t) {
    if (!t) throw new Error("Unique is missing");
    const { data: i, error: n } = await Ce(this, H.getMediaById({ path: { id: t } }));
    return n || !i ? { error: n } : { data: {
      entityType: X,
      unique: i.id,
      values: i.values,
      variants: i.variants.map((o) => ({
        state: null,
        culture: o.culture || null,
        segment: o.segment || null,
        name: o.name,
        createDate: o.createDate,
        updateDate: o.updateDate,
        // TODO: Media variant flags are not yet implemented in the backend.
        flags: []
      })),
      mediaType: {
        unique: i.mediaType.id,
        collection: i.mediaType.collection ? { unique: i.mediaType.collection.id } : null,
        icon: i.mediaType.icon
      },
      isTrashed: i.isTrashed,
      flags: i.flags
    } };
  }
  /**
   * Inserts a new Media on the server
   * @param {UmbMediaDetailModel} model
   * @param parentUnique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async create(t, i = null) {
    if (!t) throw new Error("Media is missing");
    if (!t.unique) throw new Error("Media unique is missing");
    const n = {
      id: t.unique,
      parent: i ? { id: i } : null,
      mediaType: { id: t.mediaType.unique },
      values: t.values,
      variants: t.variants.map((s) => ({
        culture: s.culture || null,
        segment: s.segment || null,
        name: s.name
      }))
    }, { data: a, error: o } = await Ce(
      this,
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
  async update(t) {
    if (!t.unique) throw new Error("Unique is missing");
    const i = {
      values: t.values,
      variants: t.variants
    }, { error: n } = await Ce(
      this,
      H.putMediaById({
        path: { id: t.unique },
        body: i
      })
    );
    return n ? { error: n } : this.read(t.unique);
  }
  /**
   * Deletes a Media on the server
   * @param {string} unique
   * @returns {*}
   * @memberof UmbMediaServerDataSource
   */
  async delete(t) {
    if (!t) throw new Error("Unique is missing");
    return Ce(this, H.deleteMediaById({ path: { id: t } }));
  }
}
const Ms = new he("UmbMediaDetailStore");
class Ie extends Oo {
  #e = new Uo(this);
  constructor(t) {
    super(t, ws, Ms);
  }
  /**
   * @inheritdoc
   */
  async save(t) {
    const i = await super.save(t);
    return i.error || await this.#e._internal_clearCropByUnique(t.unique), i;
  }
  /**
   * @inheritdoc
   */
  async delete(t) {
    const i = await super.delete(t);
    return i.error || await this.#e._internal_clearCropByUnique(t), i;
  }
}
const Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaDetailRepository: Ie,
  api: Ie,
  default: Ie
}, Symbol.toStringTag, { value: "Module" })), ks = new Fo();
class Es extends Wo {
  constructor(t) {
    super(t, {
      getItems: (i) => H.getItemMedia({ query: { id: i } }),
      dataCache: ks,
      getUniqueMethod: (i) => i.id
    });
  }
}
class ia extends Ao {
  #e = new Es(this);
  /**
   * Creates an instance of UmbMediaItemServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaItemServerDataSource
   */
  constructor(t) {
    super(t, {
      mapper: aa
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
  async search({ query: t, skip: i, take: n }) {
    new wo({
      deprecated: "The search method is deprecated.",
      removeInVersion: "17.0.0",
      solution: "Use the UmbMediaSearchProvider from @umbraco-cms/backoffice/media instead."
    }).warn();
    const { data: a, error: o } = await Ce(this, H.getItemMediaSearch({ query: { query: t, skip: i, take: n } }));
    return { data: a?.items.map((c) => aa(c)), error: o };
  }
  async getItems(t) {
    if (!t) throw new Error("Uniques are missing");
    const { data: i, error: n } = await this.#e.getItems(t);
    return { data: this._getMappedItems(i), error: n };
  }
}
const aa = (e) => ({
  entityType: X,
  hasChildren: e.hasChildren,
  isTrashed: e.isTrashed,
  unique: e.id,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  name: e.variants[0]?.name,
  // TODO: get correct variant name
  parent: e.parent ? { unique: e.parent.id } : null,
  variants: e.variants.map((t) => ({
    culture: t.culture || null,
    name: t.name
  }))
}), $s = new he("UmbMediaItemStore");
class ri extends Ro {
  #e;
  constructor(t) {
    super(t, ia, $s), this.#e = new ia(this);
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
  async search({ query: t, skip: i, take: n }) {
    return this.#e.search({ query: t, skip: i, take: n });
  }
}
const jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaItemRepository: ri,
  default: ri
}, Symbol.toStringTag, { value: "Module" }));
class Ts extends Bo {
  /**
   * Creates an instance of UmbMediaTreeServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaTreeServerDataSource
   */
  constructor(t) {
    super(t, {
      getRootItems: en,
      getChildrenOf: Cs,
      getAncestorsOf: Ps,
      mapper: qs
    });
  }
}
const en = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  H.getTreeMediaRoot({ query: { dataTypeId: e.dataType?.unique, skip: e.skip, take: e.take } })
), Cs = (e) => e.parent.unique === null ? en(e) : H.getTreeMediaChildren({
  query: { parentId: e.parent.unique, dataTypeId: e.dataType?.unique, skip: e.skip, take: e.take }
}), Ps = (e) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  H.getTreeMediaAncestors({
    query: { descendantId: e.treeItem.unique }
  })
), qs = (e) => ({
  unique: e.id,
  parent: {
    unique: e.parent ? e.parent.id : null,
    entityType: e.parent ? X : Ft
  },
  entityType: X,
  hasChildren: e.hasChildren,
  noAccess: e.noAccess,
  isTrashed: e.isTrashed,
  isFolder: !1,
  mediaType: {
    unique: e.mediaType.id,
    icon: e.mediaType.icon,
    collection: e.mediaType.collection ? { unique: e.mediaType.collection.id } : null
  },
  name: e.variants[0]?.name,
  // TODO: this is not correct. We need to get it from the variants. This is a temp solution.
  variants: e.variants.map((t) => ({
    name: t.name,
    culture: t.culture || null
    // Notice: Media variant flags are not yet implemented in the backend.
    //flags: variant.flags,
  })),
  createDate: e.createDate,
  flags: e.flags
}), zs = new he("UmbMediaTreeStore");
class Pt extends No {
  constructor(t) {
    super(t, Ts, zs);
  }
  async requestTreeRoot() {
    const { data: t } = await this._treeSource.getRootItems({ skip: 0, take: 0 }), i = t ? t.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: Ft,
      name: "#treeHeaders_media",
      hasChildren: i,
      isFolder: !0
    } };
  }
}
const Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaTreeRepository: Pt,
  default: Pt
}, Symbol.toStringTag, { value: "Module" }));
var Us = Object.defineProperty, Is = Object.getOwnPropertyDescriptor, tn = (e) => {
  throw TypeError(e);
}, De = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Is(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Us(t, i, a), a;
}, an = (e, t, i) => t.has(e) || tn("Cannot " + i), li = (e, t, i) => (an(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ht = (e, t, i) => t.has(e) ? tn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), je = (e, t, i) => (an(e, t, "access private method"), i), Oi, qt, fe, pi, nn, on, sn;
const Mt = { name: "Media", unique: null, entityType: Ft };
let ue = class extends Q {
  constructor() {
    super(...arguments), Ht(this, fe), Ht(this, Oi, new Pt(this)), Ht(this, qt, new Ie(this)), this.startNode = Mt, this._currentMedia = Mt, this._paths = [Mt], this._typingNewFolder = !1;
  }
  set currentMedia(e) {
    e !== this._currentMedia && (this._currentMedia = e, je(this, fe, pi).call(this));
  }
  get currentMedia() {
    return this._currentMedia;
  }
  firstUpdated(e) {
    super.firstUpdated(e), je(this, fe, pi).call(this);
  }
  render() {
    return r`<div id="path">
			${ke(
      this._paths,
      (e) => e.unique,
      (e) => r`<uui-button
							compact
							.label=${e.name}
							?disabled=${this.currentMedia.unique === e.unique}
							@click=${() => je(this, fe, nn).call(this, e)}></uui-button
						>/`
    )}${this._typingNewFolder ? r`<uui-input
						id="new-folder"
						label="enter a name"
						value="new folder name"
						@blur=${je(this, fe, sn)}
						auto-width></uui-input>` : r`<uui-button label="add folder" compact @click=${je(this, fe, on)}>+</uui-button>`}
		</div>`;
  }
};
Oi = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
fe = /* @__PURE__ */ new WeakSet();
pi = async function() {
  const e = this._currentMedia.unique, t = this._currentMedia.entityType, n = (e ? (await li(this, Oi).requestTreeItemAncestors({
    treeItem: { unique: e, entityType: t }
  })).data || [] : []).map((a) => ({
    name: a.name,
    unique: a.unique,
    entityType: a.entityType
  }));
  this.startNode || n.unshift(Mt), this._paths = [...n];
};
nn = function(e) {
  this._paths = [...this._paths].slice(0, this._paths.findIndex((t) => t.unique === e.unique) + 1), this.currentMedia = e, this.dispatchEvent(new z());
};
on = function() {
  this._typingNewFolder = !0, requestAnimationFrame(() => {
    const e = this.getHostElement().shadowRoot.querySelector("#new-folder");
    e.focus(), e.select();
  });
};
sn = async function(e) {
  e.stopPropagation();
  const t = e.target.value;
  if (this._typingNewFolder = !1, !t) return;
  const i = Ot.new(), n = this._paths[this._paths.length - 1].unique, a = {
    unique: i,
    mediaType: {
      unique: Co(),
      collection: null
    },
    variants: [
      {
        culture: null,
        segment: null,
        name: t,
        createDate: null,
        updateDate: null,
        flags: []
      }
    ]
  }, { data: o } = await li(this, qt).createScaffold(a);
  if (!o) return;
  const { data: s } = await li(this, qt).create(o, n);
  if (!s) return;
  const c = s.variants[0].name, v = s.unique, _ = s.entityType;
  this._paths = [...this._paths, { name: c, unique: v, entityType: _ }], this.currentMedia = { name: c, unique: v, entityType: _ }, this.dispatchEvent(new z());
};
ue.styles = [
  I`
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
De([
  l({ attribute: !1 })
], ue.prototype, "startNode", 2);
De([
  l({ attribute: !1 })
], ue.prototype, "currentMedia", 1);
De([
  p()
], ue.prototype, "_currentMedia", 2);
De([
  p()
], ue.prototype, "_paths", 2);
De([
  p()
], ue.prototype, "_typingNewFolder", 2);
ue = De([
  S("umb-media-picker-folder-path")
], ue);
var Ss = Object.defineProperty, Os = Object.getOwnPropertyDescriptor, rn = (e) => {
  throw TypeError(e);
}, Wt = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Os(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Ss(t, i, a), a;
}, ln = (e, t, i) => t.has(e) || rn("Cannot " + i), pn = (e, t, i) => (ln(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Yt = (e, t, i) => t.has(e) ? rn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ci = (e, t, i) => (ln(e, t, "access private method"), i), Ai, Ri, nt, cn, dn, un;
let Ae = class extends Q {
  constructor() {
    super(...arguments), Yt(this, nt), Yt(this, Ai, new Po(this)), Yt(this, Ri, new Ie(this)), this._node = null, this._popoverOpen = !1, this._allowedMediaTypes = [];
  }
  set node(e) {
    this._node = e, ci(this, nt, dn).call(this);
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
				@toggle=${ci(this, nt, un)}>
				<umb-popover-layout>
					<uui-scroll-container>
						${this._allowedMediaTypes.length ? ke(
      this._allowedMediaTypes,
      (e) => e.unique,
      (e) => r`<uui-menu-item label=${e.name}>
											<umb-icon slot="icon" name=${e.icon ?? "icon-circle-dotted"}></umb-icon>
										</uui-menu-item>`
    ) : r`<div id="not-allowed">${this.localize.term("mediaPicker_notAllowed")}</div>`}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
Ai = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakSet();
cn = async function() {
  if (!this._node) return null;
  const { data: e } = await pn(this, Ri).requestByUnique(this.node);
  return e?.mediaType.unique ?? null;
};
dn = async function() {
  const e = await ci(this, nt, cn).call(this), { data: t } = await pn(this, Ai).requestAllowedChildrenOf(e, this._node);
  this._allowedMediaTypes = t?.items ?? [];
};
un = function(e) {
  this._popoverOpen = e.newState === "open";
};
Ae.styles = [
  I`
			#not-allowed {
				padding: var(--uui-size-space-3);
			}
		`
];
Wt([
  l()
], Ae.prototype, "node", 1);
Wt([
  p()
], Ae.prototype, "_popoverOpen", 2);
Wt([
  p()
], Ae.prototype, "_allowedMediaTypes", 2);
Ae = Wt([
  S("umb-media-picker-create-item")
], Ae);
class As {
  #e;
  /**
   * Creates an instance of UmbMediaSearchServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbMediaSearchServerDataSource
   */
  constructor(t) {
    this.#e = t;
  }
  /**
   * Get a list of versions for a data
   * @param {UmbMediaSearchRequestArgs}args - The arguments for the search
   * @returns {*}
   * @memberof UmbMediaSearchServerDataSource
   */
  async search(t) {
    const { data: i, error: n } = await Ce(
      this.#e,
      H.getItemMediaSearch({
        query: {
          allowedMediaTypes: t.allowedContentTypes?.map((a) => a.unique),
          culture: t.culture || void 0,
          parentId: t.searchFrom?.unique || void 0,
          query: t.query,
          trashed: t.includeTrashed,
          dataTypeId: t.dataTypeUnique
        }
      })
    );
    return i ? { data: { items: i.items.map((o) => ({
      entityType: X,
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
class Rs extends _i {
  #e;
  constructor(t) {
    super(t), this.#e = new As(this);
  }
  search(t) {
    return this.#e.search(t);
  }
}
class di extends _i {
  #e = new Rs(this);
  async search(t) {
    return this.#e.search(t);
  }
  destroy() {
    this.#e.destroy();
  }
}
const Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UmbMediaSearchProvider: di,
  api: di
}, Symbol.toStringTag, { value: "Module" })), Ds = new he(
  "UmbPickerContext",
  void 0,
  (e) => e.IS_MEDIA_PICKER_CONTEXT
);
class Fs extends So {
  constructor(t) {
    super(t, Ds), this.IS_MEDIA_PICKER_CONTEXT = !0, this.interactionMemory = new $o(this);
  }
}
var Ws = Object.defineProperty, Bs = Object.getOwnPropertyDescriptor, mn = (e) => {
  throw TypeError(e);
}, F = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Bs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Ws(t, i, a), a;
}, Di = (e, t, i) => t.has(e) || mn("Cannot " + i), R = (e, t, i) => (Di(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ee = (e, t, i) => t.has(e) ? mn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), na = (e, t, i, n) => (Di(e, t, "write to private field"), t.set(e, i), i), u = (e, t, i) => (Di(e, t, "access private method"), i), Fi, ui, Wi, pt, Re, zt, Bt, d, Fe, hn, vn, Bi, fn, Ni, gn, Li, _n, yn, xn, bn, wn, ji, Mn, kn, En, $n, Tn, Vi, Cn;
const Pn = { name: "Media", unique: null, entityType: Ft };
let E = class extends jo {
  constructor() {
    super(), ee(this, d), ee(this, Fi, new Pt(this)), ee(this, ui, new ri(this)), ee(this, Wi, new di(this)), this._pickerContext = new Fs(this), ee(this, pt), this._selectableFilter = () => !0, this._currentChildren = [], this._currentPage = 1, this._currentTotalPages = 0, this._searchResult = [], this._searchQuery = "", this._currentMediaEntity = Pn, this._isSelectionMode = !1, this._searching = !1, ee(this, Re, /* @__PURE__ */ new Map()), ee(this, zt), ee(this, Bt, "UmbMediaItemPickerLocation"), ee(this, Li, Mo(() => {
      u(this, d, gn).call(this);
    }, 500)), this.consumeContext(Vo, (e) => {
      this.observe(e?.dataType, (t) => {
        na(this, pt, t);
      });
    }), this.consumeContext(ga, (e) => {
      this.observe(e?.culture, (t) => {
        na(this, zt, t);
      });
    });
  }
  async connectedCallback() {
    super.connectedCallback(), this.data?.pickableFilter && (this._selectableFilter = this.data?.pickableFilter);
  }
  async firstUpdated(e) {
    super.firstUpdated(e);
    const t = this.data?.startNode, i = u(this, d, Mn).call(this), n = [t?.unique, i?.entity.unique].filter(
      (a) => a != null
    );
    if (n.length > 0) {
      const { data: a } = await R(this, ui).requestItems(n);
      this._startNode = a?.find((c) => c.unique === t?.unique);
      const s = a?.find((c) => c.unique === i?.entity.unique) || this._startNode;
      s && (this._currentMediaEntity = {
        name: s.name,
        unique: s.unique,
        entityType: s.entityType
      }, this._searchFrom = { unique: s.unique, entityType: s.entityType });
    }
    u(this, d, Fe).call(this);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_chooseMedia")}>
				${u(this, d, kn).call(this)} ${u(this, d, Cn).call(this)}
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
Fi = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
Fe = async function(e) {
  const t = this._currentMediaEntity.entityType + this._currentMediaEntity.unique;
  let i = R(this, Re).get(t);
  i || (i = new ko(), i.setPageSize(100), R(this, Re).set(t, i));
  const n = i.getSkip(), a = i.getPageSize(), { data: o } = await R(this, Fi).requestTreeItemsOf({
    parent: {
      unique: this._currentMediaEntity.unique,
      entityType: this._currentMediaEntity.entityType
    },
    dataType: R(this, pt),
    skip: n,
    take: a
  });
  if (this._currentChildren = o?.items ?? [], i.setTotalItems(o?.total ?? 0), this._currentPage = i.getCurrentPageNumber(), this._currentTotalPages = i.getTotalPages(), e?.length) {
    const s = this._currentChildren.find((c) => c.unique == e[0].unique);
    s && u(this, d, Bi).call(this, s);
  }
};
hn = function(e) {
  const t = e.target;
  u(this, d, Fe).call(this, t.value);
};
vn = function(e) {
  u(this, d, Ni).call(this), this._currentMediaEntity = {
    name: e.name,
    unique: e.unique,
    entityType: e.entityType
  }, this._searchFrom = this._currentMediaEntity.unique ? { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : void 0, u(this, d, Fe).call(this), u(this, d, ji).call(this);
};
Bi = function(e) {
  const t = this.data?.multiple ? [...this.value.selection, e.unique] : [e.unique];
  this._isSelectionMode = t.length > 0, this.modalContext?.setValue({ selection: t });
};
fn = function(e) {
  const t = this.value.selection.filter((i) => i !== e.unique);
  this._isSelectionMode = t.length > 0, this.modalContext?.setValue({ selection: t });
};
Ni = function() {
  this._searchQuery = "", this._searchResult = [];
};
gn = async function() {
  if (!this._searchQuery) {
    u(this, d, Ni).call(this), this._searching = !1;
    return;
  }
  const e = this._searchQuery, { data: t } = await R(this, Wi).search({
    query: e,
    includeTrashed: !1,
    searchFrom: this._searchFrom,
    culture: R(this, zt),
    dataTypeUnique: R(this, pt)?.unique,
    ...this.data?.search?.queryParams
  });
  if (!t) {
    this._searchResult = [], this._searching = !1;
    return;
  }
  this._searchResult = t.items, this._searching = !1;
};
Li = /* @__PURE__ */ new WeakMap();
_n = function(e) {
  this._searchQuery = e.target.value.toLocaleLowerCase(), this._searching = !0, R(this, Li).call(this);
};
yn = function(e) {
  const t = e.target;
  t.currentMedia ? this._currentMediaEntity = t.currentMedia : this._startNode ? this._currentMediaEntity = {
    name: this._startNode.name,
    unique: this._startNode.unique,
    entityType: this._startNode.entityType
  } : this._currentMediaEntity = Pn, this._currentMediaEntity.unique ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0, u(this, d, ji).call(this), u(this, d, Fe).call(this);
};
xn = function(e) {
  e.stopPropagation();
  const t = this._currentMediaEntity.entityType + this._currentMediaEntity.unique, i = R(this, Re).get(t);
  if (!i)
    throw new Error("Pagination manager not found");
  i.setCurrentPageNumber(e.target.current), R(this, Re).set(t, i), u(this, d, Fe).call(this);
};
bn = function(e) {
  return qo(e.mediaType.unique) || e.hasChildren;
};
wn = function(e) {
  e.target.checked ? this._searchFrom = { unique: this._currentMediaEntity.unique, entityType: this._currentMediaEntity.entityType } : this._searchFrom = void 0;
};
ji = function() {
  const e = {
    unique: R(this, Bt),
    value: {
      location: {
        entity: {
          entityType: this._currentMediaEntity.entityType,
          unique: this._currentMediaEntity.unique
        }
      }
    }
  };
  this._pickerContext?.interactionMemory.setMemory(e);
};
Mn = function() {
  return this._pickerContext.interactionMemory.getMemory(R(this, Bt))?.value?.location;
};
kn = function() {
  return r`${u(this, d, Tn).call(this)}
			<umb-dropzone-media
				id="dropzone"
				multiple
				@change=${u(this, d, hn)}
				.parentUnique=${this._currentMediaEntity.unique}></umb-dropzone-media>
			${this._searchQuery ? u(this, d, En).call(this) : u(this, d, $n).call(this)} `;
};
En = function() {
  return r`
			${!this._searchResult.length && !this._searching ? r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>` : r`<div id="media-grid">
						${ke(
    this._searchResult,
    (e) => e.unique,
    (e) => u(this, d, Vi).call(this, e)
  )}
					</div>`}
		`;
};
$n = function() {
  return r`
			${this._currentChildren.length ? r`<div id="media-grid">
							${ke(
    this._currentChildren,
    (e) => e.unique,
    (e) => u(this, d, Vi).call(this, e)
  )}
						</div>
						${this._currentTotalPages > 1 ? r`<uui-pagination
									.current=${this._currentPage}
									.total=${this._currentTotalPages}
									firstlabel=${this.localize.term("general_first")}
									previouslabel=${this.localize.term("general_previous")}
									nextlabel=${this.localize.term("general_next")}
									lastlabel=${this.localize.term("general_last")}
									@change=${u(this, d, xn)}></uui-pagination>` : M}` : r`<div class="container"><p>${this.localize.term("content_listViewNoItems")}</p></div>`}
		`;
};
Tn = function() {
  return r`
			<div id="toolbar">
				<div id="search">
					<uui-input
						label=${this.localize.term("general_search")}
						placeholder=${this.localize.term("placeholders_search")}
						@input=${u(this, d, _n)}
						value=${this._searchQuery}>
						<div slot="prepend">
							${this._searching ? r`<uui-loader-circle id="searching-indicator"></uui-loader-circle>` : r`<uui-icon name="search"></uui-icon>`}
						</div>
					</uui-input>

					${this._currentMediaEntity.unique && this._currentMediaEntity.unique !== this._startNode?.unique ? r`<uui-checkbox
								?checked=${this._searchFrom?.unique === this._currentMediaEntity.unique}
								@change=${u(this, d, wn)}
								label="Search only in ${this._currentMediaEntity.name}"></uui-checkbox>` : M}
				</div>
				<uui-button
					@click=${() => this._dropzone.browse()}
					label=${this.localize.term("general_upload")}
					look="outline"
					color="default"></uui-button>
			</div>
		`;
};
Vi = function(e) {
  const t = u(this, d, bn).call(this, e), i = this._selectableFilter(e);
  return r`
			<uui-card-media
				class=${Oe(!(i || t) ? "not-allowed" : void 0)}
				.name=${e.name}
				data-mark="${e.entityType}:${e.unique}"
				@open=${() => u(this, d, vn).call(this, e)}
				@selected=${() => u(this, d, Bi).call(this, e)}
				@deselected=${() => u(this, d, fn).call(this, e)}
				?selected=${this.value?.selection?.find((a) => a === e.unique)}
				?selectable=${i}
				?select-only=${this._isSelectionMode || t === !1}>
				<umb-imaging-thumbnail
					unique=${e.unique}
					alt=${e.name}
					icon=${e.mediaType.icon}></umb-imaging-thumbnail>
			</uui-card-media>
		`;
};
Cn = function() {
  if (this._searchQuery && this._currentMediaEntity.unique && !this._searchFrom)
    return M;
  const e = this._startNode ? {
    entityType: this._startNode.entityType,
    unique: this._startNode.unique,
    name: this._startNode.name
  } : void 0;
  return r`<umb-media-picker-folder-path
			slot="footer-info"
			.currentMedia=${this._currentMediaEntity}
			.startNode=${e}
			@change=${u(this, d, yn)}></umb-media-picker-folder-path>`;
};
E.styles = [
  I`
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
F([
  p()
], E.prototype, "_selectableFilter", 2);
F([
  p()
], E.prototype, "_currentChildren", 2);
F([
  p()
], E.prototype, "_currentPage", 2);
F([
  p()
], E.prototype, "_currentTotalPages", 2);
F([
  p()
], E.prototype, "_searchResult", 2);
F([
  p()
], E.prototype, "_searchFrom", 2);
F([
  p()
], E.prototype, "_searchQuery", 2);
F([
  p()
], E.prototype, "_currentMediaEntity", 2);
F([
  p()
], E.prototype, "_isSelectionMode", 2);
F([
  p()
], E.prototype, "_startNode", 2);
F([
  p()
], E.prototype, "_searching", 2);
F([
  oe("#dropzone")
], E.prototype, "_dropzone", 2);
E = F([
  S("umb-media-picker-modal")
], E);
const Ns = E, Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaPickerModalElement() {
    return E;
  },
  default: Ns
}, Symbol.toStringTag, { value: "Module" })), Gr = new dt("Umb.Modal.MediaCaptionAltText", {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), qn = "media";
Ho.generateAbsolute({
  sectionName: qn
});
const zn = zo.generateAbsolute({
  sectionName: qn,
  entityType: X
}), Kr = new pa("create/parent/:parentEntityType/:parentUnique/:mediaTypeUnique", zn), Xr = new pa(
  "edit/:unique",
  zn
), Qr = new he(
  "UmbMediaRecycleBinTreeStore"
), Un = "Umb.Repository.MediaItem", Jr = "Umb.Store.MediaItem", Ls = "Umb.SearchProvider.Media", Zr = new dt(
  Lo,
  {
    modal: {
      type: "sidebar",
      size: "small"
    },
    data: {
      treeAlias: "Umb.Tree.Media"
    }
  }
), el = new he(
  "UmbWorkspaceContext",
  void 0,
  (e) => e.getEntityType?.() === X
), js = (e) => e.getEntityType() === X, tl = new he(
  "UmbVariantContext",
  void 0,
  js
);
var Vs = Object.getOwnPropertyDescriptor, In = (e) => {
  throw TypeError(e);
}, Hs = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Vs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = s(a) || a);
  return a;
}, Hi = (e, t, i) => t.has(e) || In("Cannot " + i), Ve = (e, t, i) => (Hi(e, t, "read from private field"), t.get(e)), ht = (e, t, i) => t.has(e) ? In("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ys = (e, t, i, n) => (Hi(e, t, "write to private field"), t.set(e, i), i), Gs = (e, t, i) => (Hi(e, t, "access private method"), i), Se, Yi, Gi, mi, Sn;
let ct = class extends va {
  constructor() {
    super(...arguments), ht(this, mi), ht(this, Se), ht(this, Yi, new Ie(this)), ht(this, Gi, new fa(this));
  }
  connectedCallback() {
    super.connectedCallback(), Ys(this, Se, this.data?.mediaUnique), Gs(this, mi, Sn).call(this);
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
						@input=${(e) => this.value = { ...this.value, altText: e.target.value }}></uui-input>

					<uui-label for="caption">${this.localize.term("content_captionTextOptional")}</uui-label>
					<uui-input
						id="caption"
						label="caption"
						.value=${this.value?.caption ?? ""}
						@input=${(e) => this.value = { ...this.value, caption: e.target.value }}></uui-input>

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
Se = /* @__PURE__ */ new WeakMap();
Yi = /* @__PURE__ */ new WeakMap();
Gi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakSet();
Sn = async function() {
  if (!Ve(this, Se)) return;
  const { data: e } = await Ve(this, Yi).requestByUnique(Ve(this, Se));
  if (!e) return;
  const { data: t } = await Ve(this, Gi).requestItems([Ve(this, Se)]);
  this.value = {
    ...this.value,
    altText: this.value?.altText ?? e.variants[0].name,
    url: t?.[0].url ?? ""
  };
};
ct.styles = [
  I`
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
ct = Hs([
  S("umb-media-caption-alt-text-modal")
], ct);
const Ks = ct, il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get UmbMediaCaptionAltTextModalElement() {
    return ct;
  },
  default: Ks
}, Symbol.toStringTag, { value: "Module" }));
class On extends Yo {
  constructor(t) {
    super(t, Un, Va);
  }
  async openPicker(t, i) {
    const n = {
      ...t
    };
    n.pickableFilter = (s) => this.#e(s, i?.allowedContentTypes), t?.search || (n.search = {
      providerAlias: Ls,
      ...t?.search
    });
    const o = await (await this.getContext(ga))?.getDisplayCulture();
    n.search.queryParams = {
      allowedContentTypes: i?.allowedContentTypes,
      includeTrashed: i?.includeTrashed,
      culture: o,
      ...t?.search?.queryParams
    }, await super.openPicker(n);
  }
  #e = (t, i) => i && i.length > 0 ? i.map((n) => n.unique).includes(t.mediaType.unique) : !0;
}
var Xs = Object.defineProperty, Qs = Object.getOwnPropertyDescriptor, An = (e) => {
  throw TypeError(e);
}, W = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? Qs(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Xs(t, i, a), a;
}, Ki = (e, t, i) => t.has(e) || An("Cannot " + i), y = (e, t, i) => (Ki(e, t, "read from private field"), i ? i.call(e) : t.get(e)), He = (e, t, i) => t.has(e) ? An("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Gt = (e, t, i, n) => (Ki(e, t, "write to private field"), t.set(e, i), i), de = (e, t, i) => (Ki(e, t, "access private method"), i), Ke, G, Rn, Xe, Qe, T, Dn, Fn, Wn, Bn, Nn, Ln, jn;
const Js = "umb-input-media";
let P = class extends St(Q) {
  constructor() {
    super(), He(this, G), He(this, Ke, new ca(this, {
      getUniqueOfElement: (e) => e.getAttribute("detail"),
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: da,
      onChange: ({ model: e }) => {
        this.selection = e, de(this, G, Rn).call(this, e), this.dispatchEvent(new z());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.includeTrashed = !1, He(this, Xe, !1), He(this, Qe, []), this._editMediaPath = "", this._cards = [], He(this, T, new On(this)), new gi(this, ma).addAdditionalPath("media").onSetup(() => ({ data: { entityType: "media", preset: {} } })).observeRouteBuilder((e) => {
      this._editMediaPath = e({});
    }), this.observe(y(this, T).selection, (e) => this.value = e.join(",")), this.observe(y(this, T).selectedItems, async (e) => {
      const t = e.filter((i) => !this._cards.find((n) => n.unique === i.unique));
      e?.length && !t.length || (this._cards = e ?? []);
    }), this.observe(
      y(this, T).interactionMemory.memories,
      (e) => {
        oa(e, y(this, Qe)) || (Gt(this, Qe, e), this.dispatchEvent(new la()));
      },
      "_observeMemories"
    ), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this.selection.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this.selection.length > this.max
    );
  }
  set min(e) {
    y(this, T).min = e;
  }
  get min() {
    return y(this, T).min;
  }
  set max(e) {
    y(this, T).max = e;
  }
  get max() {
    return y(this, T).max;
  }
  set selection(e) {
    y(this, T).setSelection(e), y(this, Ke).setModel(e);
  }
  get selection() {
    return y(this, T).getSelection();
  }
  set value(e) {
    this.selection = Eo(e), super.value = e;
  }
  get value() {
    return this.selection.length > 0 ? this.selection.join(",") : void 0;
  }
  get readonly() {
    return y(this, Xe);
  }
  set readonly(e) {
    Gt(this, Xe, e), y(this, Xe) ? y(this, Ke).disable() : y(this, Ke).enable();
  }
  get interactionMemories() {
    return y(this, T).interactionMemory.getAllMemories();
  }
  set interactionMemories(e) {
    Gt(this, Qe, e), e?.forEach((t) => y(this, T).interactionMemory.setMemory(t));
  }
  render() {
    return r`<div class="container">${de(this, G, Wn).call(this)} ${de(this, G, Bn).call(this)}</div>`;
  }
};
Ke = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakSet();
Rn = function(e) {
  const t = {};
  e.forEach((n, a) => {
    t[n] = a;
  });
  const i = [...this._cards];
  this._cards = i.sort((n, a) => t[n.unique] - t[a.unique]);
};
Xe = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
Dn = function() {
  y(this, T).openPicker(
    {
      multiple: this.max > 1,
      startNode: this.startNode
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: ua
      })),
      includeTrashed: this.includeTrashed
    }
  );
};
Fn = async function(e) {
  await y(this, T).requestRemoveItem(e.unique), this._cards = this._cards.filter((t) => t.unique !== e.unique);
};
Wn = function() {
  return this._cards?.length ? r`
			${ke(
    this._cards,
    (e) => e.unique,
    (e) => de(this, G, Nn).call(this, e)
  )}
		` : M;
};
Bn = function() {
  return this._cards && this.max && this._cards.length >= this.max ? M : this.readonly && this._cards.length > 0 ? M : r`
				<uui-button
					id="btn-add"
					look="placeholder"
					@click=${de(this, G, Dn)}
					label=${this.localize.term("general_choose")}
					?disabled=${this.readonly}>
					<uui-icon name="icon-add"></uui-icon>
					${this.localize.term("general_choose")}
				</uui-button>
			`;
};
Nn = function(e) {
  const t = this.readonly ? void 0 : `${this._editMediaPath}edit/${e.unique}`;
  return r`
			<uui-card-media
				name=${Oe(e.name === null ? void 0 : e.name)}
				data-mark="${e.entityType}:${e.unique}"
				href="${Oe(t)}"
				?readonly=${this.readonly}>
				<umb-imaging-thumbnail
					unique=${e.unique}
					alt=${e.name}
					icon=${e.mediaType.icon}></umb-imaging-thumbnail>
				${de(this, G, jn).call(this, e)}
				<uui-action-bar slot="actions"> ${de(this, G, Ln).call(this, e)}</uui-action-bar>
			</uui-card-media>
		`;
};
Ln = function(e) {
  return this.readonly ? M : r`
			<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => de(this, G, Fn).call(this, e)}>
				<uui-icon name="icon-trash"></uui-icon>
			</uui-button>
		`;
};
jn = function(e) {
  return e.isTrashed ? r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		` : M;
};
P.styles = [
  I`
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
  l({ type: Array, attribute: !1 })
], P.prototype, "interactionMemories", 1);
W([
  p()
], P.prototype, "_editMediaPath", 2);
W([
  p()
], P.prototype, "_cards", 2);
P = W([
  S(Js)
], P);
var Zs = Object.defineProperty, er = Object.getOwnPropertyDescriptor, Vn = (e) => {
  throw TypeError(e);
}, w = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? er(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && Zs(t, i, a), a;
}, Xi = (e, t, i) => t.has(e) || Vn("Cannot " + i), x = (e, t, i) => (Xi(e, t, "read from private field"), i ? i.call(e) : t.get(e)), le = (e, t, i) => t.has(e) ? Vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), vt = (e, t, i, n) => (Xi(e, t, "write to private field"), t.set(e, i), i), O = (e, t, i) => (Xi(e, t, "access private method"), i), Je, kt, Ze, et, ot, te, C, hi, Ut, Qi, Hn, Yn, Gn, Kn, Xn, Qn, Jn, Zn, eo;
let f = class extends St(Q, void 0) {
  constructor() {
    super(), le(this, C), le(this, Je, new ca(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e.key,
      identifier: "Umb.SorterIdentifier.InputRichMedia",
      itemSelector: "uui-card-media",
      containerSelector: ".container",
      resolvePlacement: da,
      onChange: ({ model: e }) => {
        this.value = e, this.dispatchEvent(new z());
      }
    })), this.min = 0, this.minMessage = "This field need more items", this.max = 1 / 0, this.maxMessage = "This field exceeds the allowed amount of items", this.multiple = !1, le(this, kt, !1), le(this, Ze, !1), le(this, et, []), this._cards = [], le(this, ot, new Do(this, Un)), le(this, te, new On(this)), le(this, Ut, (e) => this.allowedContentTypeIds && this.allowedContentTypeIds.length > 0 ? this.allowedContentTypeIds.includes(e.mediaType.unique) : !0), this.observe(x(this, ot).items, () => {
      O(this, C, hi).call(this);
    }), new gi(this, bs).addAdditionalPath(":key").onSetup((e) => {
      const t = e.key;
      if (!t) return !1;
      const i = this.value?.find((n) => n.key === t);
      return i ? {
        data: {
          cropOptions: this.preselectedCrops,
          hideFocalPoint: !this.focalPointEnabled,
          key: t,
          unique: i.mediaKey,
          pickableFilter: x(this, Ut)
        },
        value: {
          crops: i.crops ?? [],
          focalPoint: i.focalPoint ?? { left: 0.5, top: 0.5 },
          src: "",
          key: t,
          unique: i.mediaKey
        }
      } : !1;
    }).onSubmit((e) => {
      this.value = this.value?.map((t) => {
        if (t.key !== e.key) return t;
        const i = this.focalPointEnabled ? e.focalPoint : null, n = e.crops, a = e.unique, o = a === t.mediaKey ? t.key : Ot.new();
        return { ...t, crops: n, mediaKey: a, focalPoint: i, key: o };
      }), this.dispatchEvent(new z());
    }).observeRouteBuilder((e) => {
      this._routeBuilder = e;
    }), this.observe(x(this, te).selection, (e) => {
      O(this, C, Qi).call(this, e);
    }), this.observe(
      x(this, te).interactionMemory.memories,
      (e) => {
        oa(e, x(this, et)) || (vt(this, et, e), this.dispatchEvent(new la()));
      },
      "_observeMemories"
    ), this.addValidator(
      "valueMissing",
      () => this.requiredMessage ?? ra,
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
  set value(e) {
    super.value = e, x(this, Je).setModel(e), x(this, te).setSelection(e?.map((t) => t.mediaKey) ?? []), x(this, ot).setUniques(e?.map((t) => t.mediaKey)), O(this, C, hi).call(this);
  }
  get value() {
    return super.value;
  }
  set focalPointEnabled(e) {
    vt(this, kt, e);
  }
  get focalPointEnabled() {
    return x(this, kt);
  }
  /** @deprecated will be removed in v17 */
  set alias(e) {
  }
  get alias() {
  }
  /** @deprecated will be removed in v17 */
  set variantId(e) {
  }
  get variantId() {
  }
  get readonly() {
    return x(this, Ze);
  }
  set readonly(e) {
    vt(this, Ze, e), x(this, Ze) ? x(this, Je).disable() : x(this, Je).enable();
  }
  get interactionMemories() {
    return x(this, te).interactionMemory.getAllMemories();
  }
  set interactionMemories(e) {
    vt(this, et, e), e?.forEach((t) => x(this, te).interactionMemory.setMemory(t));
  }
  getFormElement() {
  }
  render() {
    return r`
			${O(this, C, Kn).call(this)}
			<div class="container">${O(this, C, Xn).call(this)} ${O(this, C, Qn).call(this)}</div>
		`;
  }
};
Je = /* @__PURE__ */ new WeakMap();
kt = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
et = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
te = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakSet();
hi = async function() {
  const e = x(this, ot).getItems();
  this._cards = this.value?.map((t) => {
    const i = e.find((n) => n.unique === t.mediaKey);
    return {
      unique: t.key,
      media: t.mediaKey,
      name: i?.name ?? "",
      icon: i?.mediaType?.icon,
      isTrashed: i?.isTrashed ?? !1,
      isLoading: !i
    };
  }) ?? [];
};
Ut = /* @__PURE__ */ new WeakMap();
Qi = function(e) {
  const t = e.filter((n) => !this.value?.some((a) => a.mediaKey === n));
  if (!t.length) return;
  const i = t.map((n) => ({
    key: Ot.new(),
    mediaKey: n,
    mediaTypeAlias: "",
    crops: [],
    focalPoint: null
  }));
  this.value = [...this.value ?? [], ...i], this.dispatchEvent(new z());
};
Hn = function() {
  x(this, te).openPicker(
    {
      multiple: this.multiple,
      startNode: this.startNode,
      pickableFilter: x(this, Ut)
    },
    {
      allowedContentTypes: this.allowedContentTypeIds?.map((e) => ({
        unique: e,
        entityType: ua
      })),
      includeTrashed: !1
    }
  );
};
Yn = async function(e) {
  try {
    await x(this, te).requestRemoveItem(e.media), this.value = this.value?.filter((t) => t.key !== e.unique), this.dispatchEvent(new z());
  } catch {
  }
};
Gn = async function(e) {
  if (this.readonly) return;
  const t = e.items.filter((i) => i.status === vi.COMPLETE).map((i) => i.unique);
  O(this, C, Qi).call(this, t);
};
Kn = function() {
  return this.readonly ? M : r`<umb-dropzone-media
			id="dropzone"
			?multiple=${this.multiple}
			@change=${O(this, C, Gn)}></umb-dropzone-media>`;
};
Xn = function() {
  return this._cards.length ? r`
			${ke(
    this._cards,
    (e) => e.unique,
    (e) => O(this, C, Jn).call(this, e)
  )}
		` : M;
};
Qn = function() {
  return this.readonly ? M : r`
			<uui-button
				id="btn-add"
				look="placeholder"
				@blur=${() => {
    this.pristine = !1, this.checkValidity();
  }}
				@click=${O(this, C, Hn)}
				label=${this.localize.term("general_choose")}
				?disabled=${this.readonly}>
				<uui-icon name="icon-add"></uui-icon>
				${this.localize.term("general_choose")}
			</uui-button>
		`;
};
Jn = function(e) {
  if (!e.unique) return M;
  const t = this.readonly ? void 0 : this._routeBuilder?.({ key: e.unique });
  return r`
			<uui-card-media id=${e.unique} name=${e.name} .href=${t} ?readonly=${this.readonly}>
				${It(
    e.isLoading,
    () => r`<uui-loader-circle></uui-loader-circle>`,
    () => r`
						<umb-imaging-thumbnail
							unique=${e.media}
							alt=${e.name}
							icon=${e.icon ?? "icon-picture"}></umb-imaging-thumbnail>
					`
  )}
				${O(this, C, eo).call(this, e)} ${O(this, C, Zn).call(this, e)}
			</uui-card-media>
		`;
};
Zn = function(e) {
  return this.readonly ? M : r`
			<uui-action-bar slot="actions">
				<uui-button label=${this.localize.term("general_remove")} look="secondary" @click=${() => O(this, C, Yn).call(this, e)}>
					<uui-icon name="icon-trash"></uui-icon>
				</uui-button>
			</uui-action-bar>
		`;
};
eo = function(e) {
  if (e.isTrashed)
    return r`
			<uui-tag size="s" slot="tag" color="danger">
				<umb-localize key="mediaPicker_trashed">Trashed</umb-localize>
			</uui-tag>
		`;
};
f.styles = [
  I`
			:host {
				position: relative;
			}
			.container {
				display: grid;
				gap: var(--uui-size-space-5);
				grid-template-columns: repeat(auto-fill, minmax(var(--umb-card-medium-min-width), 1fr));
				grid-auto-rows: var(--umb-card-medium-min-width);
			}

			#dropzone {
				margin-bottom: var(--uui-size-space-5);
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
w([
  l({ type: Boolean })
], f.prototype, "required", 2);
w([
  l({ type: String })
], f.prototype, "requiredMessage", 2);
w([
  l({ type: Number })
], f.prototype, "min", 2);
w([
  l({ type: String, attribute: "min-message" })
], f.prototype, "minMessage", 2);
w([
  l({ type: Number })
], f.prototype, "max", 2);
w([
  l({ type: String, attribute: "min-message" })
], f.prototype, "maxMessage", 2);
w([
  l({ type: Array })
], f.prototype, "value", 1);
w([
  l({ type: Array })
], f.prototype, "allowedContentTypeIds", 2);
w([
  l({ type: Object, attribute: !1 })
], f.prototype, "startNode", 2);
w([
  l({ type: Boolean })
], f.prototype, "multiple", 2);
w([
  l({ type: Array })
], f.prototype, "preselectedCrops", 2);
w([
  l({ type: Boolean })
], f.prototype, "focalPointEnabled", 1);
w([
  l()
], f.prototype, "alias", 1);
w([
  l()
], f.prototype, "variantId", 1);
w([
  l({ type: Boolean, reflect: !0 })
], f.prototype, "readonly", 1);
w([
  l({ type: Array, attribute: !1 })
], f.prototype, "interactionMemories", 1);
w([
  p()
], f.prototype, "_cards", 2);
w([
  p()
], f.prototype, "_routeBuilder", 2);
f = w([
  S("umb-input-rich-media")
], f);
function tr(e) {
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
  }[e.toLowerCase()] || null;
}
var ir = Object.defineProperty, ar = Object.getOwnPropertyDescriptor, to = (e) => {
  throw TypeError(e);
}, We = (e, t, i, n) => {
  for (var a = n > 1 ? void 0 : n ? ar(t, i) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (a = (n ? s(t, i, a) : s(a)) || a);
  return n && a && ir(t, i, a), a;
}, Ji = (e, t, i) => t.has(e) || to("Cannot " + i), Me = (e, t, i) => (Ji(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Kt = (e, t, i) => t.has(e) ? to("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), io = (e, t, i, n) => (Ji(e, t, "write to private field"), t.set(e, i), i), N = (e, t, i) => (Ji(e, t, "access private method"), i), be, ze, q, ao, no, oo, so, ro, lo, po, co, uo, Nt;
let me = class extends St(
  Q
) {
  constructor() {
    super(), Kt(this, q), Kt(this, be, ""), this._serverUrl = "", Kt(this, ze, []), this.consumeContext(ha, (e) => {
      this._serverUrl = e?.getServerUrl() ?? "";
    });
  }
  set value(e) {
    super.value = e, io(this, be, e?.src ?? ""), N(this, q, no).call(this);
  }
  get value() {
    if (Me(this, be) || this.temporaryFile?.temporaryUnique)
      return {
        src: Me(this, be),
        temporaryFileId: this.temporaryFile?.temporaryUnique
      };
  }
  disconnectedCallback() {
    super.disconnectedCallback(), N(this, q, Nt).call(this);
  }
  render() {
    return !this.temporaryFile && !this.value?.src ? N(this, q, lo).call(this) : this.value?.src && this._previewAlias ? N(this, q, po).call(this, this.value.src) : M;
  }
};
be = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakMap();
q = /* @__PURE__ */ new WeakSet();
ao = async function() {
  return Me(this, ze).length ? Me(this, ze) : (await new Go(this, Ko, "fileUploadPreview", null, (e) => {
    io(this, ze, e.map((t) => t.manifest));
  }).asPromise(), Me(this, ze));
};
no = async function() {
  const e = Me(this, be), t = await N(this, q, oo).call(this);
  Me(this, be) === e && (this._previewAlias = t);
};
oo = async function() {
  if (!this.value?.src) return;
  const e = await N(this, q, ao).call(this), t = e.find(
    (o) => ea(o.forMimeTypes, "*/*")
  )?.alias;
  let i = null;
  if (this.temporaryFile?.file ? i = this.temporaryFile.file.type : i = N(this, q, so).call(this, this.value.src), !i) return t;
  const n = e.find((o) => ea(o.forMimeTypes, i));
  if (n) return n.alias;
  const a = e.find((o) => (Array.isArray(o.forMimeTypes) ? o.forMimeTypes : [o.forMimeTypes]).find((c) => {
    const v = c.replace(/\*/g, "");
    if (i.startsWith(v) || i.endsWith(v)) return o.alias;
  }));
  return a ? a.alias : t;
};
so = function(e) {
  if (e.startsWith("data:"))
    return e.substring(5, e.indexOf(";"));
  const t = e.split(".").pop()?.toLowerCase();
  return t ? tr("." + t) : null;
};
ro = async function(e) {
  e.stopImmediatePropagation();
  const i = e.target.value?.[0];
  if (i?.status !== vi.COMPLETE) return;
  if (this.temporaryFile = i.temporaryFile, !this.temporaryFile?.file) {
    console.error("No file available for upload");
    return;
  }
  N(this, q, Nt).call(this);
  const n = URL.createObjectURL(this.temporaryFile.file);
  this.value = { src: n }, this.dispatchEvent(new z());
};
lo = function() {
  return r`
			<umb-input-dropzone
				standalone
				disable-folder-upload
				accept=${Oe(this.allowedFileExtensions ? this.allowedFileExtensions.join(",") : void 0)}
				@change=${N(this, q, ro)}></umb-input-dropzone>
		`;
};
po = function(e) {
  return e.startsWith("blob:") || (e = this._serverUrl + e), r`
			<div id="wrapper">
				<div id="wrapperInner">
					<umb-extension-slot
						type="fileUploadPreview"
						.props=${{ path: e, file: this.temporaryFile?.file }}
						.filter=${(t) => t.alias === this._previewAlias}>
					</umb-extension-slot>
				</div>
			</div>
			${N(this, q, co).call(this)}
		`;
};
co = function() {
  return r`
			<uui-button compact @click=${N(this, q, uo)} label=${this.localize.term("content_uploadClear")}>
				<uui-icon name="icon-trash"></uui-icon>
				<umb-localize key="content_uploadClear">Clear file(s)</umb-localize>
			</uui-button>
		`;
};
uo = function() {
  this.temporaryFile?.abortController?.abort(), N(this, q, Nt).call(this), this.value = { src: void 0 }, this.temporaryFile = void 0, this.dispatchEvent(new z());
};
Nt = function() {
  this.value?.src?.startsWith("blob:") && URL.revokeObjectURL(this.value.src);
};
me.styles = [
  fi,
  I`
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
We([
  l({ type: Object, attribute: !1 })
], me.prototype, "value", 1);
We([
  l({ type: Array, attribute: "allowed-file-extensions" })
], me.prototype, "allowedFileExtensions", 2);
We([
  p()
], me.prototype, "temporaryFile", 2);
We([
  p()
], me.prototype, "_previewAlias", 2);
We([
  p()
], me.prototype, "_serverUrl", 2);
me = We([
  S("umb-input-upload-field")
], me);
export {
  Ms as A,
  Un as B,
  Jr as C,
  $s as D,
  Ls as E,
  zs as F,
  Zr as G,
  el as H,
  Ie as I,
  ri as J,
  di as K,
  Pt as L,
  ks as M,
  Wr as N,
  Lr as O,
  jr as P,
  Vr as Q,
  Hr as R,
  Yr as S,
  il as T,
  ut as U,
  yi as a,
  D as b,
  L as c,
  ae as d,
  K as e,
  ne as f,
  On as g,
  P as h,
  f as i,
  tr as j,
  me as k,
  bs as l,
  Va as m,
  tl as n,
  X as o,
  Ft as p,
  Br as q,
  Nr as r,
  Dr as s,
  Fr as t,
  Gr as u,
  Ds as v,
  zn as w,
  Kr as x,
  Xr as y,
  Qr as z
};
//# sourceMappingURL=input-upload-field.element-DEgpG3Zz.js.map

import { UmbTemporaryFileManager as P, TemporaryFileStatus as w } from "@umbraco-cms/backoffice/temporary-file";
import { UmbObjectState as A, UmbArrayState as F } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as L } from "@umbraco-cms/backoffice/class-api";
import { UmbId as b } from "@umbraco-cms/backoffice/id";
import { ifDefined as T, html as n, nothing as x, repeat as U, when as c, css as N, property as h, query as D, state as R, customElement as S } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as q } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as M } from "@umbraco-cms/backoffice/style";
import { formatBytes as W } from "@umbraco-cms/backoffice/utils";
import { UmbFormControlMixin as k } from "@umbraco-cms/backoffice/validation";
var a = /* @__PURE__ */ ((e) => (e.WAITING = "waiting", e.COMPLETE = "complete", e.NOT_ALLOWED = "not allowed", e.CANCELLED = "cancelled", e.ERROR = "error", e))(a || {});
class B extends L {
  constructor() {
    super(...arguments), this._tempFileManager = new P(this), this.#t = new A({ total: 0, completed: 0 }), this.progress = this.#t.asObservable(), this.#e = new F([], (t) => t.unique), this.progressItems = this.#e.asObservable(), this.#r = ({ folders: t, files: r }, o) => {
      const s = [];
      for (const i of r) {
        const p = {
          file: i,
          temporaryUnique: b.new(),
          abortController: new AbortController(),
          onProgress: (O) => this.#s(v, O)
        }, v = {
          unique: b.new(),
          parentUnique: o,
          status: a.WAITING,
          progress: 0,
          temporaryFile: p
        };
        p.abortController?.signal.addEventListener("abort", () => {
          this._updateStatus(v, a.CANCELLED);
        }), s.push(v);
      }
      for (const i of t) {
        const p = b.new();
        s.push({
          unique: p,
          parentUnique: o,
          status: a.WAITING,
          progress: 100,
          // Folders are created instantly.
          folder: { name: i.folderName }
        }), s.push(...this.#r({ folders: i.folders, files: i.files }, p));
      }
      return s;
    };
  }
  #t;
  #e;
  /**
   * Uploads the files as temporary files and returns the data.
   * @param { File[] } files - The files to upload.
   * @returns {Promise<Array<UmbUploadableItem>>} - Files as temporary files.
   */
  async createTemporaryFiles(t) {
    const r = this._setupProgress({ files: t, folders: [] }, null), o = [];
    for (const s of r) {
      const i = await this._tempFileManager.uploadOne(s.temporaryFile);
      i.status === w.CANCELLED ? this._updateStatus(s, a.CANCELLED) : i.status === w.SUCCESS ? this._updateStatus(s, a.COMPLETE) : this._updateStatus(s, a.ERROR), o.push(s);
    }
    return o;
  }
  removeOne(t) {
    t.temporaryFile?.abortController?.abort(), this.#e.removeOne(t.unique), t.temporaryFile && this._tempFileManager.removeOne(t.temporaryFile.temporaryUnique);
  }
  remove(t) {
    const r = [];
    for (const s of t)
      s.temporaryFile?.abortController?.abort(), s.temporaryFile && r.push(s.temporaryFile.temporaryUnique);
    this.#e.remove(r);
    const o = t.map((s) => s.temporaryFile?.temporaryUnique).filter((s) => !!s);
    this._tempFileManager.remove(o);
  }
  removeAll() {
    for (const t of this.#e.getValue())
      t.temporaryFile?.abortController?.abort();
    this.#e.setValue([]), this._tempFileManager.removeAll();
  }
  // Progress handling
  _setupProgress(t, r) {
    const o = this.#t.getValue(), s = this.#e.getValue(), i = this.#r({ folders: t.folders, files: t.files }, r);
    return this.#e.setValue([...s, ...i]), this.#t.setValue({ total: o.total + i.length, completed: o.completed }), i;
  }
  _updateStatus(t, r) {
    this.#e.updateOne(t.unique, { status: r });
    const o = this.#t.getValue();
    this.#t.update({ completed: o.completed + 1 });
  }
  #s(t, r) {
    this.#e.updateOne(t.unique, { progress: r });
  }
  #r;
  destroy() {
    this._tempFileManager.destroy(), super.destroy();
  }
}
class y extends Event {
  static {
    this.TYPE = "change";
  }
  constructor(t, r) {
    super(y.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...r }), this.items = t;
  }
}
class E extends Event {
  static {
    this.TYPE = "submitted";
  }
  constructor(t, r) {
    super(E.TYPE, { bubbles: !1, composed: !1, cancelable: !1, ...r }), this.items = t;
  }
}
var G = Object.defineProperty, V = Object.getOwnPropertyDescriptor, I = (e) => {
  throw TypeError(e);
}, u = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? V(t, r) : t, i = e.length - 1, p; i >= 0; i--)
    (p = e[i]) && (s = (o ? p(t, r, s) : p(s)) || s);
  return o && s && G(t, r, s), s;
}, C = (e, t, r) => t.has(e) || I("Cannot " + r), g = (e, t, r) => (C(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Y = (e, t, r) => t.has(e) ? I("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r) => (C(e, t, "access private method"), r), d, f, _, $, z;
let l = class extends k(
  q
) {
  constructor() {
    super(), Y(this, d), this.disableFolderUpload = !1, this.disabled = !1, this.multiple = !1, this.standalone = !1, this.label = "dropzone", this._progressItems = [], this._manager = new B(this), this._observeProgress(), this._observeProgressItems();
  }
  _observeProgress() {
    this.observe(
      this._manager.progress,
      (e) => {
        this.dispatchEvent(new ProgressEvent("progress", { loaded: e.completed, total: e.total }));
      },
      "_observeProgress"
    );
  }
  _observeProgressItems() {
    this.observe(
      this._manager.progressItems,
      (e) => {
        this._progressItems = [...e];
        const t = this._progressItems.find((r) => r.status === a.WAITING);
        this._progressItems.length && !t && (this.value = [...this._progressItems], this.dispatchEvent(new y(this._progressItems)));
      },
      "_observeProgressItems"
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._manager.destroy();
  }
  /**
   * Opens the file browse dialog.
   */
  browse() {
    g(this, d, f) || this._dropzone?.browse();
  }
  render() {
    return n`
			<slot name="text"></slot>
			<uui-file-dropzone
				id="dropzone"
				label=${this.label}
				accept=${T(this.accept)}
				?multiple=${this.multiple}
				?disabled=${g(this, d, f)}
				?disallowFolderUpload=${this.disableFolderUpload}
				@change=${this.onUpload}
				@click=${m(this, d, _)}>
				<slot>
					<uui-button label=${this.localize.term("media_clickToUpload")} @click=${m(this, d, _)}></uui-button>
				</slot>
			</uui-file-dropzone>
			${this.renderUploader()}
		`;
  }
  renderUploader() {
    return this._progressItems?.length ? n`
			<div id="uploader">
				${U(
      this._progressItems,
      (e) => e.unique,
      (e) => this.renderPlaceholder(e)
    )}
				<uui-button
					id="uploader-clear"
					compact
					@click=${m(this, d, z)}
					label=${this.localize.term("content_uploadClear")}>
					<uui-icon name="icon-trash"></uui-icon>${this.localize.term("content_uploadClear")}
				</uui-button>
			</div>
		` : x;
  }
  renderPlaceholder(e) {
    const t = e.temporaryFile?.file;
    return n`
			<div class="placeholder">
				<div class="fileIcon">
					${c(
      e.status === a.COMPLETE,
      () => n`<umb-icon name="check" color="green"></umb-icon>`
    )}
					${c(
      e.status === a.ERROR || e.status === a.CANCELLED || e.status === a.NOT_ALLOWED,
      () => n`<umb-icon name="wrong" color="red"></umb-icon>`
    )}
				</div>
				<div class="fileDetails">
					<div class="fileName" title=${t?.name ?? ""}>${t?.name ?? ""}</div>
					<div class="fileSize">
						${W(t?.size ?? 0, { decimals: 2 })}:
						${this.localize.number(e.progress, { maximumFractionDigits: 0 })}%
					</div>
					${c(
      e.status === a.WAITING,
      () => n`<div class="progress"><uui-loader-bar progress=${e.progress}></uui-loader-bar></div>`
    )}
					${c(
      e.status === a.ERROR,
      () => n`<div class="error">An error occured</div>`
    )}
					${c(e.status === a.CANCELLED, () => n`<div class="error">Cancelled</div>`)}
					${c(
      e.status === a.NOT_ALLOWED,
      () => n`<div class="error">File type not allowed</div>`
    )}
				</div>
				<div class="fileActions">
					${c(
      e.status === a.WAITING,
      () => n`
							<uui-button
								compact
								@click=${() => m(this, d, $).call(this, e)}
								label=${this.localize.term("general_cancel")}>
								<uui-icon name="icon-remove"></uui-icon>${this.localize.term("general_cancel")}
							</uui-button>
						`
    )}
				</div>
			</div>
		`;
  }
  async onUpload(e) {
    if (e.stopImmediatePropagation(), g(this, d, f) || !e.detail.files.length && !e.detail.folders.length) return;
    const t = this._manager.createTemporaryFiles(e.detail.files);
    this.dispatchEvent(new E(await t));
  }
};
d = /* @__PURE__ */ new WeakSet();
f = function() {
  return this.disabled || !this.multiple && this._progressItems.length > 0;
};
_ = function(e) {
  this._dropzone && (e.stopImmediatePropagation(), this._dropzone.browse());
};
$ = function(e) {
  e.temporaryFile?.abortController?.abort();
};
z = function() {
  this._manager.removeAll();
};
l.styles = [
  M,
  N`
			:host {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				place-items: center;
				cursor: pointer;
			}

			:host([disabled]) #dropzone {
				opacity: 0.5;
				pointer-events: none;
			}

			:host([standalone]) {
				position: relative;
				display: block;
				inset: 0;
				cursor: pointer;
				border: 1px dashed var(--uui-color-divider-emphasis);
				border-radius: var(--uui-border-radius);
			}

			:host([standalone]:not([disabled]):hover) {
				border-color: var(--uui-color-default-emphasis);
				--uui-color-default: var(--uui-color-default-emphasis);
				color: var(--uui-color-default-emphasis);
			}

			#dropzone {
				width: 100%;
				inset: 0;
				backdrop-filter: opacity(1); /* Removes the built in blur effect */

				&[disabled] {
					opacity: 0.5;
					pointer-events: none;
				}
			}

			#uploader {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				align-items: center;
				gap: var(--uui-size-space-3);

				.placeholder {
					display: grid;
					grid-template-columns: 30px 200px 1fr;
					max-width: fit-content;
					padding: var(--uui-size-space-3);
					border: 1px dashed var(--uui-color-divider-emphasis);
				}

				.fileIcon,
				.fileActions {
					place-self: center center;
				}

				.fileName {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: var(--uui-size-5);
				}

				.fileSize {
					font-size: var(--uui-font-size-small);
					color: var(--uui-color-text-alt);
				}

				.error {
					color: var(--uui-color-danger);
				}
			}
		`
];
u([
  h({ type: String })
], l.prototype, "accept", 2);
u([
  h({ type: Boolean, attribute: "disable-folder-upload" })
], l.prototype, "disableFolderUpload", 2);
u([
  h({ type: Boolean, reflect: !0 })
], l.prototype, "disabled", 2);
u([
  h({ type: Boolean })
], l.prototype, "multiple", 2);
u([
  h({ type: Boolean, reflect: !0 })
], l.prototype, "standalone", 2);
u([
  h({ type: String })
], l.prototype, "label", 2);
u([
  D("#dropzone", !0)
], l.prototype, "_dropzone", 2);
u([
  R()
], l.prototype, "_progressItems", 2);
l = u([
  S("umb-input-dropzone")
], l);
export {
  y as UmbDropzoneChangeEvent,
  B as UmbDropzoneManager,
  E as UmbDropzoneSubmittedEvent,
  a as UmbFileDropzoneItemStatus,
  l as UmbInputDropzoneElement
};
//# sourceMappingURL=index.js.map

import { TemporaryFileService as y } from "@umbraco-cms/backoffice/external/backend-api";
import { tryXhrRequest as R, tryExecute as g, UmbCancelError as O, UmbApiError as C } from "@umbraco-cms/backoffice/resources";
import { UmbRepositoryBase as b } from "@umbraco-cms/backoffice/repository";
import { css as S, property as f, customElement as F, html as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { clamp as T, formatBytes as _ } from "@umbraco-cms/backoffice/utils";
import { UmbTemporaryFileConfigRepository as x } from "../config.repository-eH2FsqDW.js";
import { U as oe } from "../config.store.token-CsbU_19N.js";
import { UmbTemporaryFileConfigStore as ne } from "../config.store-CVJDS2rs.js";
import { U as pe, a as ce } from "../constants-CDwqkOdg.js";
import "@umbraco-cms/backoffice/store";
import { UmbArrayState as A, observeMultiple as z } from "@umbraco-cms/backoffice/observable-api";
import { UmbControllerBase as B } from "@umbraco-cms/backoffice/class-api";
import { UmbLocalizationController as N } from "@umbraco-cms/backoffice/localization-api";
import { UMB_NOTIFICATION_CONTEXT as P } from "@umbraco-cms/backoffice/notification";
class q {
  #e;
  /**
   * Creates an instance of UmbTemporaryFileServerDataSource.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemporaryFileServerDataSource
   */
  constructor(e) {
    this.#e = e;
  }
  /**
   * Uploads a temporary file to the server
   * @param {string} id
   * @param {File} file
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  async create(e, r, i, s) {
    const o = new FormData();
    return o.append("Id", e), o.append("File", r), R(this.#e, {
      url: "/umbraco/management/api/v1/temporary-file",
      method: "POST",
      responseHeader: "Umb-Generated-Resource",
      disableNotifications: !0,
      body: o,
      onProgress: i,
      abortSignal: s
    });
  }
  /**
   * Gets a temporary file from the server
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  read(e) {
    if (!e) throw new Error("Id is missing");
    return g(this.#e, y.getTemporaryFileById({ path: { id: e } }));
  }
  /**
   * Deletes a temporary file from the server
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileServerDataSource
   */
  delete(e) {
    if (!e) throw new Error("Id is missing");
    return g(this.#e, y.deleteTemporaryFileById({ path: { id: e } }));
  }
}
class M extends b {
  #e;
  /**
   * Creates an instance of UmbTemporaryFileRepository.
   * @param {UmbControllerHost} host - The controller host for this controller to be appended to
   * @memberof UmbTemporaryFileRepository
   */
  constructor(e) {
    super(e), this.#e = new q(e);
  }
  /**
   * Uploads a temporary file
   * @param {string} id
   * @param {File} file
   * @param onProgress
   * @param abortSignal
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  upload(e, r, i, s) {
    return this.#e.create(e, r, i, s);
  }
  /**
   * Deletes a temporary file
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  delete(e) {
    return this.#e.delete(e);
  }
  /**
   * Gets a temporary file
   * @param {string} id
   * @returns {*}
   * @memberof UmbTemporaryFileRepository
   */
  requestById(e) {
    return this.#e.read(e);
  }
}
var L = Object.defineProperty, k = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, h = (t, e, r, i) => {
  for (var s = i > 1 ? void 0 : i ? k(e, r) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (s = (i ? a(e, r, s) : a(s)) || s);
  return i && s && L(e, r, s), s;
}, v = (t, e, r) => e.has(t) || w("Cannot " + r), $ = (t, e, r) => (v(t, e, "read from private field"), r ? r.call(t) : e.get(t)), E = (t, e, r) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), D = (t, e, r, i) => (v(t, e, "write to private field"), e.set(t, r), r), G = (t, e, r) => (v(t, e, "access private method"), r), u, m, U;
let p = class extends I {
  constructor() {
    super(...arguments), E(this, m), E(this, u, 0), this.complete = !1, this.error = !1;
  }
  set progress(t) {
    const e = T(Math.ceil(t), 0, 100);
    D(this, u, e);
  }
  get progress() {
    return $(this, u);
  }
  render() {
    return d` <div id="wrapper">
			<uui-loader-circle .progress=${this.complete || this.error ? 100 : this.progress}></uui-loader-circle>
			<div id="icon">${G(this, m, U).call(this)}</div>
		</div>`;
  }
};
u = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
U = function() {
  return this.error ? d`<uui-icon name="icon-alert"></uui-icon>` : this.complete ? d`<uui-icon name="icon-check"></uui-icon>` : `${this.progress}%`;
};
p.styles = S`
		#wrapper {
			position: relative;
			height: 75%;
		}

		:host([complete]) {
			uui-loader-circle,
			#icon {
				color: var(--uui-color-positive);
			}
		}
		:host([error]) {
			uui-loader-circle,
			#icon {
				color: var(--uui-color-danger);
			}
		}

		uui-loader-circle {
			z-index: 2;
			inset: 0;
			color: var(--uui-color-focus);
			font-size: var(--uui-size-12);
			width: 100%;
			height: 100%;
		}

		#icon {
			color: var(--uui-color-text);
			font-size: var(--uui-size-6);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	`;
h([
  f({ type: Number })
], p.prototype, "progress", 1);
h([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "complete", 2);
h([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "error", 2);
p = h([
  F("umb-temporary-file-badge")
], p);
var n = /* @__PURE__ */ ((t) => (t.SUCCESS = "success", t.WAITING = "waiting", t.ERROR = "error", t.CANCELLED = "cancelled", t))(n || {});
class te extends B {
  constructor(e) {
    super(e), this.#e = new M(this._host), this.#i = new x(this._host), this.#t = new N(this._host), this.#r = new A([], (r) => r.temporaryUnique), this.queue = this.#r.asObservable(), this.consumeContext(P, (r) => {
      this.#s = r;
    });
  }
  #e;
  #i;
  #t;
  #s;
  #r;
  /**
   * Gets the temporary file configuration.
   * @returns {Promise<UmbTemporaryFileConfigRepository>} The temporary file configuration.
   */
  async getConfiguration() {
    return await this.#i.initialized, this.#i;
  }
  async uploadOne(e, r) {
    this.#r.setValue([]);
    const i = {
      ...e,
      status: n.WAITING
    };
    return this.#r.appendOne(i), (await this.#o({ ...r, chunkSize: 1 }))[0];
  }
  upload(e, r) {
    this.#r.setValue([]);
    const i = e.map((s) => ({ ...s, status: n.WAITING }));
    return this.#r.append(i), this.#o({ ...r });
  }
  removeOne(e) {
    this.#r.removeOne(e);
  }
  remove(e) {
    this.#r.remove(e);
  }
  removeAll() {
    this.#r.setValue([]);
  }
  async #o(e) {
    const r = [], i = this.#r.getValue();
    if (!i.length) return r;
    const s = async (l) => {
      const c = await this.#l(l);
      r.push(c), e?.callback && await e.callback(c);
    }, o = e?.chunkSize ?? 5, a = Math.ceil(i.length / o);
    for (let l = 0; l < a; l++) {
      const c = i.slice(l * o, l * o + o);
      await Promise.all(c.map(s));
    }
    return r;
  }
  #a(e, r) {
    this.#s?.peek("warning", {
      data: {
        headline: "Upload",
        message: `
	${this.#t.term("media_invalidFileSize")}: ${r.file.name} (${_(r.file.size)}).

	${this.#t.term("media_maxFileSize")} ${e > 0 ? _(e) : "N/A"}.
						`
      }
    });
  }
  async #n(e) {
    const r = await this.getConfiguration();
    let i = await this.observe(r.part("maxFileSize")).asPromise();
    if (i && (i *= 1024, e.file.size > i))
      return this.#a(i, e), !1;
    const s = e.file.name.split(".").pop() ?? "", [o, a] = await this.observe(
      z([
        this.#i.part("allowedUploadedFileExtensions"),
        this.#i.part("disallowedUploadedFilesExtensions")
      ])
    ).asPromise();
    return o?.length && !o.includes(s) || a?.length && a.includes(s) ? (this.#s?.peek("warning", {
      data: {
        message: `${this.#t.term("media_disallowedFileType")}: ${s}`
      }
    }), !1) : !0;
  }
  async #l(e) {
    if (!e.temporaryUnique) throw new Error(`Unique is missing for item ${e}`);
    if (!await this.#n(e))
      return this.#r.updateOne(e.temporaryUnique, {
        ...e,
        status: n.ERROR
      }), { ...e, status: n.ERROR };
    const { error: i } = await this.#e.upload(
      e.temporaryUnique,
      e.file,
      (o) => {
        e.onProgress && e.onProgress(o.loaded / o.total * 100);
      },
      e.abortController?.signal ?? e.abortSignal
    );
    let s = n.SUCCESS;
    return i && (s = this.#p(i, e)), this.#r.updateOne(e.temporaryUnique, { ...e, status: s }), { ...e, status: s };
  }
  #p(e, r) {
    if (e instanceof O)
      return n.CANCELLED;
    if (C.isUmbApiError(e))
      if (e.status === 413) {
        const i = parseInt(/(\d+) bytes/.exec(e.problemDetails.title)?.[1] ?? "0", 10);
        this.#a(i, r);
      } else
        this.#s?.peek("danger", {
          data: {
            headline: this.#t.term("errors_receivedErrorFromServer"),
            message: e.problemDetails.title
          }
        });
    else
      this.#s?.peek("danger", {
        data: {
          headline: this.#t.term("errors_receivedErrorFromServer"),
          message: e.message
        }
      });
    return n.ERROR;
  }
}
export {
  n as TemporaryFileStatus,
  pe as UMB_TEMPORARY_FILE_CONFIG_STORE_ALIAS,
  oe as UMB_TEMPORARY_FILE_CONFIG_STORE_CONTEXT,
  ce as UMB_TEMPORARY_FILE_REPOSITORY_ALIAS,
  p as UmbTemporaryFileBadgeElement,
  x as UmbTemporaryFileConfigRepository,
  ne as UmbTemporaryFileConfigStore,
  te as UmbTemporaryFileManager,
  M as UmbTemporaryFileRepository
};
//# sourceMappingURL=index.js.map

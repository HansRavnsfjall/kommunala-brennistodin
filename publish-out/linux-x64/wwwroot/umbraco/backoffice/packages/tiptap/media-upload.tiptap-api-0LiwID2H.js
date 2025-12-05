import { U as p } from "./base-CzBFGKJV.js";
import { imageSize as d } from "@umbraco-cms/backoffice/utils";
import { Extension as h } from "@umbraco-cms/backoffice/external/tiptap";
import { UmbTemporaryFileManager as c, TemporaryFileStatus as u } from "@umbraco-cms/backoffice/temporary-file";
import { UmbId as f } from "@umbraco-cms/backoffice/id";
import { UmbLocalizationController as g } from "@umbraco-cms/backoffice/localization-api";
import { UMB_NOTIFICATION_CONTEXT as x } from "@umbraco-cms/backoffice/notification";
class F extends p {
  constructor(e) {
    super(e), this.maxWidth = this.maxImageSize, this.#t = new c(this), this.#i = new g(this), this.consumeContext(x, (i) => {
      this.#a = i;
    });
  }
  #e;
  /**
   * @returns {number} The configured maximum allowed image size
   */
  get maxImageSize() {
    const e = parseInt(this.#e?.getValueByAlias("maxImageSize") ?? "", 10);
    return isNaN(e) ? 500 : e;
  }
  /**
   * @returns {Array<string>} The allowed mime types for uploads
   */
  get allowedFileTypes() {
    return this.#e?.getValueByAlias("allowedFileTypes") ?? ["image/jpeg", "image/png", "image/gif"];
  }
  #t;
  #i;
  #a;
  getTiptapExtensions(e) {
    this.#e = e?.configuration;
    const i = this;
    return [
      h.create({
        name: "umbMediaUpload",
        onCreate() {
          this.parent?.();
          const o = this.editor.view.dom;
          o.addEventListener("dragover", (t) => {
            t.preventDefault();
          }), o.addEventListener("drop", (t) => {
            t.preventDefault();
            const a = t.dataTransfer?.files;
            a && i.#r(a, this.editor);
          }), o.addEventListener("paste", (t) => {
            if (t.clipboardData?.getData("text/html"))
              return;
            const s = t.clipboardData?.files;
            s && i.#r(s, this.editor);
          });
        }
      })
    ];
  }
  /**
   * Uploads the files to the server and inserts them into the editor as data URIs.
   * The server will replace the data URI with a proper URL when the content is saved.
   * @param {FileList} files The files to upload.
   * @param {Editor} editor The editor to insert the images into.
   */
  async #r(e, i) {
    const t = this.#o(e).map((r) => this.#s(r));
    this.dispatchEvent(new CustomEvent("rte.file.uploading", { composed: !0, bubbles: !0, detail: t }));
    const a = await this.#t.upload(t), s = this.maxImageSize;
    a.forEach(async (r) => {
      if (r.status !== u.SUCCESS) {
        this.#a?.peek("danger", {
          data: {
            headline: r.file.name,
            message: this.#i.term("errors_dissallowedMediaType")
          }
        });
        return;
      }
      const n = URL.createObjectURL(r.file), { width: m, height: l } = await d(n, { maxWidth: s, maxHeight: s });
      i.chain().focus().setImage({
        src: n,
        width: m.toString(),
        height: l.toString(),
        "data-tmpimg": r.temporaryUnique
      }).run();
    }), this.dispatchEvent(new CustomEvent("rte.file.uploaded", { composed: !0, bubbles: !0, detail: a }));
  }
  #s(e) {
    return {
      file: e,
      temporaryUnique: f.new()
    };
  }
  #o(e) {
    return Array.from(e).filter((i) => this.allowedFileTypes.includes(i.type));
  }
}
export {
  F as default
};
//# sourceMappingURL=media-upload.tiptap-api-0LiwID2H.js.map

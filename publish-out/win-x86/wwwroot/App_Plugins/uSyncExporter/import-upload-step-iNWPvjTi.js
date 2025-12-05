import { ProcessStepElementBase as g, JUMOO_PROCESSING_CONTEXT as w } from "@jumoo/processing";
import { html as p, nothing as y, css as P, property as I, state as S, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { a as k } from "./index-CPaPWJuU.js";
import { UmbTemporaryFileManager as $, TemporaryFileStatus as x } from "@umbraco-cms/backoffice/temporary-file";
import { UmbId as z } from "@umbraco-cms/backoffice/id";
var M = Object.defineProperty, T = Object.getOwnPropertyDescriptor, U = (e) => {
  throw TypeError(e);
}, d = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? T(t, r) : t, u = e.length - 1, c; u >= 0; u--)
    (c = e[u]) && (i = (o ? c(t, r, i) : c(i)) || i);
  return o && i && M(t, r, i), i;
}, m = (e, t, r) => t.has(e) || U("Cannot " + r), v = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)), h = (e, t, r) => t.has(e) ? U("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _ = (e, t, r, o) => (m(e, t, "write to private field"), t.set(e, r), r), f = (e, t, r) => (m(e, t, "access private method"), r), n, l, s, b, C, E;
let a = class extends g {
  constructor() {
    super(), h(this, s), h(this, n), h(this, l), this.uploaded = !1, _(this, n, new $(this)), this.observe(v(this, n).queue, (e) => {
      e.forEach((t) => {
        t.status === x.SUCCESS && f(this, s, E).call(this, t.temporaryUnique, t.file);
      });
    }), this.consumeContext(w, (e) => {
      _(this, l, e);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.setValid(!1);
  }
  setValid(e) {
    this.dispatchEvent(
      new CustomEvent("pipeline-valid", {
        bubbles: !0,
        composed: !0,
        detail: {
          valid: e
        }
      })
    );
  }
  render() {
    return p`<uui-box headline="Import Sync-Pack">
				<div class="upload">${this.renderUpload()} ${this.renderUploadButton()}</div>
			</uui-box>
			${this.renderReady()}`;
  }
  renderUpload() {
    return p`<div>
			<usync-exporter-file-upload
				label="Select a SyncPack file"
				@change=${f(this, s, b)}></usync-exporter-file-upload>
		</div>`;
  }
  renderUploadButton() {
    return !this.selected || this.uploaded == !0 ? y : p`<uui-button
			type="button"
			@click=${f(this, s, C)}
			look="primary"
			label="Upload"
			?disabled=${!this.selected}></uui-button> `;
  }
  renderReady() {
    return this.uploaded ? p`<div class="ready">
			<umb-icon name="icon-circle-dotted-active" color="green"></umb-icon>
			<umb-localize key="uSyncExport_importReady"></umb-localize>
		</div>` : y;
  }
};
n = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
b = function(e) {
  this.selected = e.detail.file, this.selected || (this.uploaded = !1, this.setValid(!1));
};
C = function() {
  if (!this.selected) return;
  const e = this.selected, t = {
    temporaryUnique: z.new(),
    file: e,
    status: x.WAITING
  };
  v(this, n).upload([t]);
};
E = function(e, t) {
  var r;
  (r = v(this, l)) == null || r.setPending({
    name: e,
    properties: {
      fileId: e,
      file: {
        name: t.name,
        size: t.size,
        type: t.type
      }
    }
  }), this.uploaded = !0, this.setValid(!0);
};
a.styles = P`
		uui-input-file {
			width: auto;
		}

		.upload {
			display: flex;
			flex-direction: row;
			gap: 1rem;
		}

		.ready {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 5rem;
			color: var(--uui-color-positive);
			font-weight: bold;
			font-size: 24pt;
			gap: 10px;
		}

		.ready umb-icon {
			margin: 20px;
			font-size: 48pt;
		}
	`;
d([
  I()
], a.prototype, "options", 2);
d([
  S()
], a.prototype, "selected", 2);
d([
  S()
], a.prototype, "uploaded", 2);
a = d([
  O(k.import.upload)
], a);
const F = a;
export {
  F as default,
  a as uSyncExporterImportUploadStep
};
//# sourceMappingURL=import-upload-step-iNWPvjTi.js.map

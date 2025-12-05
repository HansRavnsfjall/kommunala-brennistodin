import { html as _, query as M, state as y, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as q } from "@umbraco-cms/backoffice/modal";
import { UmbId as E } from "@umbraco-cms/backoffice/id";
import { UmbTemporaryFileManager as T, TemporaryFileStatus as S } from "@umbraco-cms/backoffice/temporary-file";
import { U as x } from "./snapshots.context-BX47u-Ps.js";
var D = Object.defineProperty, O = Object.getOwnPropertyDescriptor, U = (t) => {
  throw TypeError(t);
}, p = (t, e, o, a) => {
  for (var r = a > 1 ? void 0 : a ? O(e, o) : e, m = t.length - 1, d; m >= 0; m--)
    (d = t[m]) && (r = (a ? d(e, o, r) : d(r)) || r);
  return a && r && D(e, o, r), r;
}, c = (t, e, o) => e.has(t) || U("Cannot " + o), h = (t, e, o) => (c(t, e, "read from private field"), o ? o.call(t) : e.get(t)), f = (t, e, o) => e.has(t) ? U("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), v = (t, e, o, a) => (c(t, e, "write to private field"), e.set(t, o), o), l = (t, e, o) => (c(t, e, "access private method"), o), s, u, i, C, b, w, F;
let n = class extends q {
  constructor() {
    super(), f(this, i), f(this, s), f(this, u), v(this, s, new T(this)), this.consumeContext(x, (t) => {
      console.log("context", t), v(this, u, t);
    }), this.observe(h(this, s).queue, (t) => {
      t.forEach((e) => {
        e.status === S.SUCCESS && (this.tempId = e.temporaryUnique, l(this, i, C).call(this, e.temporaryUnique, e.file));
      });
    });
  }
  render() {
    return _`
			<umb-body-layout headline="Upload Snapshot">
				<umb-localize key="uSyncSnapshots_uploadWarning"></umb-localize>

				${this.renderUpload()}
				<div slot="actions">
					<uui-button
						label="Close"
						color="default"
						look="secondary"
						size="small"
						@click=${l(this, i, F)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
  renderUpload() {
    return _`<uui-form>
			<form id="uploadForm" name="uploadForm" @submit=${l(this, i, b)}>
				<uui-label for="file" label="Upload Snapshot"></uui-label>
				<uui-input-file
					.value=${this.file}
					accept=".zip"
					id="file"
					name="file"
					.multiple=${!1}
					@input=${l(this, i, w)}></uui-input-file>
			</form>
		</uui-form>`;
  }
};
s = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
C = async function(t, e) {
  var o, a;
  console.log("upload complete", t, e), await ((o = h(this, u)) == null ? void 0 : o.upload(t)), (a = this.modalContext) == null || a.submit();
};
b = function(t) {
  t.preventDefault();
  const o = new FormData(this._form).get("file");
  if (!o) return;
  const a = {
    temporaryUnique: E.new(),
    file: o,
    status: S.WAITING
  };
  h(this, s).upload([a]);
};
w = function() {
  requestAnimationFrame(() => {
    this._form.requestSubmit();
  });
};
F = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
p([
  M("#uploadForm")
], n.prototype, "_form", 2);
p([
  y()
], n.prototype, "file", 2);
p([
  y()
], n.prototype, "tempId", 2);
n = p([
  g("usync-snapshots-upload-modal")
], n);
export {
  n as default
};
//# sourceMappingURL=snapshot-upload.modal-CNlo8dtM.js.map

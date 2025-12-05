import { UmbDocumentTypeImportRepository as z } from "./document-type-import.repository-Cc5QCRew.js";
import { html as h, when as D, css as M, state as I, customElement as N } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as U } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as B } from "@umbraco-cms/backoffice/modal";
var k = Object.defineProperty, F = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, b = (e, t, o, n) => {
  for (var i = n > 1 ? void 0 : n ? F(t, o) : t, a = e.length - 1, c; a >= 0; a--)
    (c = e[a]) && (i = (n ? c(t, o, i) : c(i)) || i);
  return n && i && k(t, o, i), i;
}, f = (e, t, o) => t.has(e) || g("Cannot " + o), u = (e, t, o) => (f(e, t, "read from private field"), o ? o.call(e) : t.get(e)), d = (e, t, o) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), y = (e, t, o, n) => (f(e, t, "write to private field"), t.set(e, o), o), s = (e, t, o) => (f(e, t, "access private method"), o), _, l, p, r, T, w, C, x, v, E;
let m = class extends B {
  constructor() {
    super(), d(this, r), d(this, _, new z(this)), d(this, l), d(this, p), this._fileContent = [], y(this, p, new FileReader()), u(this, p).onload = (e) => {
      if (typeof e.target?.result == "string") {
        const t = e.target.result;
        s(this, r, C).call(this, t);
      } else
        s(this, r, v).call(this);
    };
  }
  render() {
    return h` <umb-body-layout headline=${this.localize.term("general_import")}>
			<uui-box> ${s(this, r, E).call(this)} </uui-box>
			<uui-button
				slot="actions"
				type="button"
				label=${this.localize.term("general_cancel")}
				@click=${this._rejectModal}></uui-button>
			<uui-button
				slot="actions"
				type="button"
				look="primary"
				?disabled=${!u(this, l)}
				label=${this.localize.term("actions_importdocumenttype")}
				@click=${s(this, r, w)}></uui-button>
		</umb-body-layout>`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
T = function(e) {
  e.preventDefault();
  const o = e.target.value;
  if (!o?.length) return;
  const n = o[0];
  n.temporaryFile && (y(this, l, n.temporaryFile.temporaryUnique), u(this, p).readAsText(n.temporaryFile.file));
};
w = async function() {
  if (!u(this, l)) return;
  const { error: e } = await u(this, _).requestImport(u(this, l));
  e || this._submitModal();
};
C = function(e) {
  const n = new DOMParser().parseFromString(e, "text/xml").childNodes, i = [];
  n.forEach((a) => {
    a.nodeType === Node.ELEMENT_NODE && a.nodeName === "DocumentType" && i.push(a);
  }), this._fileContent = s(this, r, x).call(this, i);
};
x = function(e) {
  const t = [];
  return e.forEach((o) => {
    const n = o.getElementsByTagName("Info")[0], i = n.getElementsByTagName("Key")[0].textContent ?? "", a = n.getElementsByTagName("Name")[0].textContent ?? "", c = n.getElementsByTagName("Alias")[0].textContent ?? "", $ = n.getElementsByTagName("Icon")[0].textContent ?? "";
    t.push({ unique: i, name: a, alias: c, icon: $ });
  }), t;
};
v = function() {
  this._fileContent = [], y(this, l, void 0);
};
E = function() {
  return h`
			${D(
    this._fileContent.length,
    () => h`<uui-ref-node-document-type
						name=${this._fileContent[0].name}
						alias=${this._fileContent[0].alias}
						readonly
						standalone>
						<umb-icon slot="icon" name=${this._fileContent[0].icon}></umb-icon>
						<uui-button
							slot="actions"
							@click=${s(this, r, v)}
							label=${this.localize.term("general_remove")}></uui-button>
					</uui-ref-node-document-type>`,
    () => h`<div id="wrapper">
						<umb-input-dropzone id="dropzone" accept=".udt" @change=${s(this, r, T)}
							><umb-localize slot="text" key="media_dragAndDropYourFilesIntoTheArea"
								>Drag and drop your file(s) into the area
							</umb-localize></umb-input-dropzone
						>
					</div>`
  )}
		`;
};
m.styles = [
  U,
  M`
			#wrapper {
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				position: relative;
				gap: var(--uui-size-space-3);
				border: 2px dashed var(--uui-color-divider-standalone);
				background-color: var(--uui-color-surface-alt);
				padding: var(--uui-size-space-6);
			}

			#dropzone {
				width: 100%;
			}

			#import {
				margin-top: var(--uui-size-space-6);
			}
		`
];
b([
  I()
], m.prototype, "_fileContent", 2);
m = b([
  N("umb-document-type-import-modal")
], m);
const R = m;
export {
  m as UmbDocumentTypeImportModalLayout,
  R as default
};
//# sourceMappingURL=document-type-import-modal.element-C_zOElEL.js.map

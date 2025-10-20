import { UmbMediaTypeImportRepository as $ } from "./media-type-import.repository-CzkM04nS.js";
import { html as h, when as z, css as N, state as I, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as B } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as k } from "@umbraco-cms/backoffice/modal";
var D = Object.defineProperty, F = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, b = (e, t, i, o) => {
  for (var a = o > 1 ? void 0 : o ? F(t, i) : t, n = e.length - 1, p; n >= 0; n--)
    (p = e[n]) && (a = (o ? p(t, i, a) : p(a)) || a);
  return o && a && D(t, i, a), a;
}, f = (e, t, i) => t.has(e) || g("Cannot " + i), u = (e, t, i) => (f(e, t, "read from private field"), i ? i.call(e) : t.get(e)), m = (e, t, i) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), y = (e, t, i, o) => (f(e, t, "write to private field"), t.set(e, i), i), s = (e, t, i) => (f(e, t, "access private method"), i), _, l, c, r, T, w, C, M, v, x;
let d = class extends k {
  constructor() {
    super(), m(this, r), m(this, _, new $(this)), m(this, l), m(this, c), this._fileContent = [], y(this, c, new FileReader()), u(this, c).onload = (e) => {
      if (typeof e.target?.result == "string") {
        const t = e.target.result;
        s(this, r, C).call(this, t);
      } else
        s(this, r, v).call(this);
    };
  }
  render() {
    return h` <umb-body-layout headline=${this.localize.term("general_import")}>
			<uui-box> ${s(this, r, x).call(this)} </uui-box>
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
				label=${this.localize.term("actions_import")}
				@click=${s(this, r, w)}></uui-button>
		</umb-body-layout>`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
T = function(e) {
  e.preventDefault();
  const i = e.target.value;
  if (!i?.length) return;
  const o = i[0];
  o.temporaryFile && (y(this, l, o.temporaryFile.temporaryUnique), u(this, c).readAsText(o.temporaryFile.file));
};
w = async function() {
  if (!u(this, l)) return;
  const { error: e } = await u(this, _).requestImport(u(this, l));
  e || this._submitModal();
};
C = function(e) {
  const o = new DOMParser().parseFromString(e, "text/xml").childNodes, a = [];
  o.forEach((n) => {
    n.nodeType === Node.ELEMENT_NODE && n.nodeName === "MediaType" && a.push(n);
  }), this._fileContent = s(this, r, M).call(this, a);
};
M = function(e) {
  const t = [];
  return e.forEach((i) => {
    const o = i.getElementsByTagName("Info")[0], a = o.getElementsByTagName("Key")[0].textContent ?? "", n = o.getElementsByTagName("Name")[0].textContent ?? "", p = o.getElementsByTagName("Alias")[0].textContent ?? "", E = o.getElementsByTagName("Icon")[0].textContent ?? "";
    t.push({ unique: a, name: n, alias: p, icon: E });
  }), t;
};
v = function() {
  this._fileContent = [], y(this, l, void 0);
};
x = function() {
  return h`
			${z(
    this._fileContent.length,
    () => h`<uui-ref-node name=${this._fileContent[0].name} alias=${this._fileContent[0].alias} readonly standalone>
						<umb-icon slot="icon" name=${this._fileContent[0].icon}></umb-icon>
						<uui-button
							slot="actions"
							@click=${s(this, r, v)}
							label=${this.localize.term("general_remove")}></uui-button>
					</uui-ref-node>`,
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
d.styles = [
  B,
  N`
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
], d.prototype, "_fileContent", 2);
d = b([
  U("umb-media-type-import-modal")
], d);
const R = d;
export {
  d as UmbMediaTypeImportModalLayout,
  R as default
};
//# sourceMappingURL=media-type-import-modal.element-D1UTXZLY.js.map

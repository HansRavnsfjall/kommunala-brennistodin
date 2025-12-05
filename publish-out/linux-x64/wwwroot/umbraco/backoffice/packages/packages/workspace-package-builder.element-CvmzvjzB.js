import { UmbPackageRepository as H } from "./package.repository-DyWS8t6-.js";
import { UmbDictionaryPickerInputContext as X } from "@umbraco-cms/backoffice/dictionary";
import { UmbPartialViewPickerInputContext as J } from "@umbraco-cms/backoffice/partial-view";
import { UmbScriptPickerInputContext as K } from "@umbraco-cms/backoffice/script";
import { UmbStylesheetPickerInputContext as Q } from "@umbraco-cms/backoffice/stylesheet";
import { UmbTemplatePickerInputContext as Y } from "@umbraco-cms/backoffice/template";
import { html as s, nothing as o, when as Z, ifDefined as ee, css as te, property as ae, state as b, query as ie, customElement as ne } from "@umbraco-cms/backoffice/external/lit";
import { blobDownload as se } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as re, umbFocus as oe } from "@umbraco-cms/backoffice/lit-element";
import { UmbServerFilePathUniqueSerializer as ce } from "@umbraco-cms/backoffice/server-file-system";
import { UmbTextStyles as ue } from "@umbraco-cms/backoffice/style";
import { UMB_NOTIFICATION_CONTEXT as pe } from "@umbraco-cms/backoffice/notification";
import { UmbValidationContext as le, umbBindToValidation as he } from "@umbraco-cms/backoffice/validation";
var de = Object.defineProperty, me = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, g = (e, a, n, h) => {
  for (var u = h > 1 ? void 0 : h ? me(a, n) : a, k = e.length - 1, f; k >= 0; k--)
    (f = e[k]) && (u = (h ? f(a, n, u) : f(u)) || u);
  return h && u && de(a, n, u), u;
}, y = (e, a, n) => a.has(e) || v("Cannot " + n), r = (e, a, n) => (y(e, a, "read from private field"), n ? n.call(e) : a.get(e)), d = (e, a, n) => a.has(e) ? v("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, n), ge = (e, a, n, h) => (y(e, a, "write to private field"), a.set(e, n), n), i = (e, a, n) => (y(e, a, "access private method"), n), m, l, c, _, t, $, C, w, S, x, U, P, I, q, T, N, D, L, M, z, E, V, W, O, B, F, A, R, j, G;
let p = class extends re {
  constructor() {
    super(), d(this, t), d(this, m), d(this, l, new H(this)), d(this, c, new ce()), d(this, _, new le(this)), this.consumeContext(pe, (e) => {
      ge(this, m, e);
    });
  }
  connectedCallback() {
    super.connectedCallback(), i(this, t, $).call(this);
  }
  render() {
    return s`
			<umb-workspace-editor back-path="section/packages/view/created">
				${i(this, t, x).call(this)} ${i(this, t, P).call(this)} ${i(this, t, U).call(this)}
			</umb-workspace-editor>
		`;
  }
};
m = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
t = /* @__PURE__ */ new WeakSet();
$ = async function() {
  this._package = await r(this, l).getCreatedPackage(this.entityUnique), this.requestUpdate("_package");
};
C = async function() {
  if (!this._package?.unique) return;
  const e = await r(this, l).getCreatePackageDownload(this._package.unique);
  if (!e) return;
  se(e, typeof e == "object" ? "package.zip" : "package.xml", typeof e == "object" ? "application/zip" : "text/xml");
};
w = async function() {
  try {
    if (await r(this, _).validate(), !this._package) return;
    this._submitState = "waiting";
    const e = await r(this, l).saveCreatedPackage(this._package);
    if (!e || typeof e != "string") return;
    this._package.unique = e, this.requestUpdate("_package"), this._submitState = "success", r(this, m)?.peek("positive", { data: { message: "Package saved" } });
  } catch {
    this._submitState = "failed";
  }
};
S = async function() {
  try {
    if (await r(this, _).validate(), !this._package?.unique || (this._submitState = "waiting", !await r(this, l).updateCreatedPackage(this._package))) return;
    this._submitState = "success", r(this, m)?.peek("positive", { data: { message: "Package updated" } });
  } catch {
    this._submitState = "failed";
  }
};
x = function() {
  return this._package ? s`
			<div id="header" slot="header">
				<uui-input
					id="package-name-input"
					data-mark="input:workspace-name"
					required
					label="Name of the package"
					placeholder=${this.localize.term("placeholders_entername")}
					${oe()}
					${he(this, "$.name", this._package.name)}
					.value=${this._package?.name ?? ""}
					@input=${(e) => this._package.name = e.target.value}></uui-input>
			</div>
		` : o;
};
U = function() {
  return s`
			<div slot="actions">
				${Z(
    this._package?.unique,
    () => s`
						<uui-button
							color="default"
							look="secondary"
							label=${this.localize.term("general_download")}
							@click=${i(this, t, C)}></uui-button>
					`
  )}
				<uui-button
					color="positive"
					look="primary"
					state=${ee(this._submitState)}
					label=${this._package?.unique ? "Update" : "Create"}
					@click=${this._package?.unique ? i(this, t, S) : i(this, t, w)}></uui-button>
			</div>
		`;
};
P = function() {
  return s`
			<uui-box headline="Package Content">
				${i(this, t, q).call(this)} ${i(this, t, N).call(this)} ${i(this, t, D).call(this)}
				${i(this, t, L).call(this)} ${i(this, t, M).call(this)} ${i(this, t, E).call(this)}
				${i(this, t, V).call(this)} ${i(this, t, O).call(this)} ${i(this, t, F).call(this)}
				${i(this, t, R).call(this)} ${i(this, t, G).call(this)}
			</uui-box>
		`;
};
I = function(e) {
  this._package && (this._package.contentNodeId = e.target.selection[0], this._package.contentLoadChildNodes && !this._package.contentNodeId && (this._package.contentLoadChildNodes = !1), this.requestUpdate("_package"));
};
q = function() {
  return this._package ? s`
			<umb-property-layout label="Content" description="Select the starting root content">
				<div slot="editor">
					<umb-input-document
						max="1"
						.value=${this._package.contentNodeId ?? void 0}
						@change=${i(this, t, I)}>
					</umb-input-document>
					<uui-checkbox
						label="Include child nodes"
						.checked=${this._package.contentLoadChildNodes ?? !1}
						.disabled=${!this._package.contentNodeId}
						@change=${(e) => this._package.contentLoadChildNodes = e.target.checked}>
						Include child nodes
					</uui-checkbox>
				</div>
			</umb-property-layout>
		` : o;
};
T = function(e) {
  this._package && (this._package.mediaIds = e.target.selection ?? [], this._package.mediaLoadChildNodes && !this._package.mediaIds.length && (this._package.mediaLoadChildNodes = !1), this.requestUpdate("_package"));
};
N = function() {
  return this._package ? s`
			<umb-property-layout label="Media">
				<div slot="editor">
					<umb-input-media
						multiple
						.selection=${this._package.mediaIds ?? []}
						@change=${i(this, t, T)}></umb-input-media>
					<uui-checkbox
						label="Include child nodes"
						.checked=${this._package.mediaLoadChildNodes ?? !1}
						.disabled=${!this._package.mediaIds?.length}
						@change=${(e) => this._package.mediaLoadChildNodes = e.target.checked}>
						Include child nodes
					</uui-checkbox>
				</div>
			</umb-property-layout>
		` : o;
};
D = function() {
  return this._package ? s`
			<umb-property-layout label="Document Types">
				<div slot="editor">
					<umb-input-document-type
						.selection=${this._package.documentTypes ?? []}
						@change=${(e) => this._package.documentTypes = e.target.selection}>
					</umb-input-document-type>
				</div>
			</umb-property-layout>
		` : o;
};
L = function() {
  return this._package ? s`
			<umb-property-layout label="Media Types">
				<div slot="editor">
					<umb-input-media-type
						.selection=${this._package.mediaTypes ?? []}
						@change=${(e) => this._package.mediaTypes = e.target.selection}>
					</umb-input-media-type>
				</div>
			</umb-property-layout>
		` : o;
};
M = function() {
  return this._package ? s`
			<umb-property-layout label="Languages">
				<div slot="editor">
					<umb-input-language
						.value="${this._package.languages?.join(",") ?? ""}"
						@change="${(e) => {
    this._package.languages = e.target.selection;
  }}"></umb-input-language>
				</div>
			</umb-property-layout>
		` : o;
};
z = function(e) {
  this._package && (this._package.dictionaryItems = e.target.selection ?? [], this.requestUpdate("_package"));
};
E = function() {
  return this._package ? s`
			<umb-property-layout label="Dictionary">
				<div slot="editor">
					<umb-input-entity
						.getIcon=${() => "icon-book-alt"}
						.pickerContext=${X}
						.selection=${this._package.dictionaryItems ?? []}
						@change=${i(this, t, z)}>
					</umb-input-entity>
				</div>
			</umb-property-layout>
		` : o;
};
V = function() {
  return this._package ? s`
			<umb-property-layout label="Data Types">
				<div slot="editor">
					<umb-data-type-input
						.selection=${this._package.dataTypes}
						@change=${(e) => this._package.dataTypes = e.target.selection ?? []}></umb-data-type-input>
				</div>
			</umb-property-layout>
		` : o;
};
W = function(e) {
  this._package && (this._package.templates = e.target.selection ?? [], this.requestUpdate("_package"));
};
O = function() {
  return this._package ? s`
			<umb-property-layout label="Templates">
				<div slot="editor">
					<umb-input-entity
						.getIcon=${() => "icon-document-html"}
						.pickerContext=${Y}
						.selection=${this._package.templates ?? []}
						@change=${i(this, t, W)}>
					</umb-input-entity>
				</div>
			</umb-property-layout>
		` : o;
};
B = function(e) {
  this._package && (this._package.stylesheets = e.target.selection?.map((a) => r(this, c).toServerPath(a)) ?? [], this.requestUpdate("_package"));
};
F = function() {
  return this._package ? s`
			<umb-property-layout label="Stylesheets">
				<div slot="editor">
					<umb-input-entity
						.getIcon=${() => "icon-palette"}
						.pickerContext=${Q}
						.selection=${this._package.stylesheets.map((e) => r(this, c).toUnique(e)) ?? []}
						@change=${i(this, t, B)}>
					</umb-input-entity>
				</div>
			</umb-property-layout>
		` : o;
};
A = function(e) {
  this._package && (this._package.scripts = e.target.selection?.map((a) => r(this, c).toServerPath(a)) ?? [], this.requestUpdate("_package"));
};
R = function() {
  return this._package ? s`
			<umb-property-layout label="Scripts">
				<div slot="editor">
					<umb-input-entity
						.getIcon=${() => "icon-document-js"}
						.pickerContext=${K}
						.selection=${this._package.scripts.map((e) => r(this, c).toUnique(e)) ?? []}
						@change=${i(this, t, A)}>
					</umb-input-entity>
				</div>
			</umb-property-layout>
		` : o;
};
j = function(e) {
  this._package && (this._package.partialViews = e.target.selection?.map((a) => r(this, c).toServerPath(a)) ?? [], this.requestUpdate("_package"));
};
G = function() {
  return this._package ? s`
			<umb-property-layout label="Partial Views">
				<div slot="editor">
					<umb-input-entity
						.getIcon=${() => "icon-document-html"}
						.pickerContext=${J}
						.selection=${this._package.partialViews.map(
    (e) => r(this, c).toUnique(e)
  ) ?? []}
						@change=${i(this, t, j)}>
					</umb-input-entity>
				</div>
			</umb-property-layout>
		` : o;
};
p.styles = [
  ue,
  te`
			:host {
				display: block;
				height: 100%;
			}

			#header {
				display: flex;
				gap: var(--uui-size-space-4);
				margin-right: var(--uui-size-layout-1);
				width: 100%;
			}

			uui-input {
				width: 100%;
			}

			uui-box {
				margin: var(--uui-size-layout-2);
			}

			uui-checkbox {
				margin-top: var(--uui-size-space-4);
			}
		`
];
g([
  ae()
], p.prototype, "entityUnique", 2);
g([
  b()
], p.prototype, "_package", 2);
g([
  ie("#package-name-input")
], p.prototype, "_packageNameInput", 2);
g([
  b()
], p.prototype, "_submitState", 2);
p = g([
  ne("umb-workspace-package-builder")
], p);
export {
  p as UmbWorkspacePackageBuilderElement,
  p as element
};
//# sourceMappingURL=workspace-package-builder.element-CvmzvjzB.js.map

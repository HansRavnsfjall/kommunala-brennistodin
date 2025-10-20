import { UmbId as E } from "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "./paths-pWW_vsmu.js";
import "@umbraco-cms/backoffice/repository";
import "@umbraco-cms/backoffice/entity-item";
import { UmbDictionaryImportRepository as S } from "./dictionary-import.repository-C2os32CU.js";
import { when as A, html as c, css as N, state as h, query as T, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as W } from "@umbraco-cms/backoffice/modal";
import { UmbTemporaryFileManager as B, TemporaryFileStatus as R } from "@umbraco-cms/backoffice/temporary-file";
var L = Object.defineProperty, H = Object.getOwnPropertyDescriptor, C = (t) => {
  throw TypeError(t);
}, u = (t, e, i, r) => {
  for (var l = r > 1 ? void 0 : r ? H(e, i) : e, y = t.length - 1, b; y >= 0; y--)
    (b = t[y]) && (l = (r ? b(e, i, l) : b(l)) || l);
  return r && l && L(e, i, l), l;
}, g = (t, e, i) => e.has(t) || C("Cannot " + i), s = (t, e, i) => (g(t, e, "read from private field"), i ? i.call(t) : e.get(t)), p = (t, e, i) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), f = (t, e, i, r) => (g(t, e, "write to private field"), e.set(t, i), i), a = (t, e, i) => (g(t, e, "access private method"), i), d, _, $, I, m, o, F, q, v, D, M, U, w, k, z, x;
let n = class extends W {
  constructor() {
    super(), p(this, o), this._selectionConfiguration = {
      multiple: !1,
      selectable: !0,
      selection: []
    }, this._parentUnique = null, this._temporaryFileId = "", this._importAllowed = !1, p(this, d), p(this, _, []), p(this, $, new S(this)), p(this, I, new B(this)), p(this, m), f(this, d, new FileReader()), s(this, d).onload = (t) => {
      if (typeof t.target?.result == "string") {
        const e = t.target.result;
        a(this, o, q).call(this, e);
      }
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._parentUnique = this.data?.unique ?? null, this._selectionConfiguration.selection = this._parentUnique ? [this._parentUnique] : [];
  }
  render() {
    return c` <umb-body-layout headline=${this.localize.term("general_import")}>
			<uui-box>
				${A(
      this._temporaryFileId,
      () => a(this, o, k).call(this),
      () => a(this, o, x).call(this)
    )}
			</uui-box>
			<uui-button
				slot="actions"
				type="button"
				label=${this.localize.term("general_cancel")}
				@click=${this._rejectModal}></uui-button>
		</umb-body-layout>`;
  }
};
d = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
F = async function() {
  const { error: t } = await s(this, $).requestImport(this._temporaryFileId, this._parentUnique);
  t || this._submitModal();
};
q = function(t) {
  const r = new DOMParser().parseFromString(t, "text/xml").childNodes;
  f(this, _, a(this, o, v).call(this, r)), this.requestUpdate();
};
v = function(t) {
  const e = [], i = [];
  return t.forEach((r) => {
    r.nodeType === Node.ELEMENT_NODE && r.nodeName === "DictionaryItem" && i.push(r);
  }), i.forEach((r) => {
    e.push({
      name: r.getAttribute("Name") ?? "",
      id: r.getAttribute("Key") ?? "",
      children: a(this, o, v).call(this, r.childNodes) ?? void 0
    });
  }), e;
};
D = async function(t) {
  t.preventDefault(), a(this, o, U).call(this);
  const i = new FormData(this._form).get("file");
  if (!i) throw new Error("File is missing");
  s(this, d).readAsText(i);
  const r = E.new();
  f(this, m, new AbortController());
  const { status: l } = await s(this, I).uploadOne({
    file: i,
    temporaryUnique: r,
    abortController: s(this, m)
  });
  l === R.SUCCESS && (this._importAllowed = !0, this._temporaryFileId = r);
};
M = async function() {
  requestAnimationFrame(() => {
    this._form.requestSubmit();
  });
};
U = function() {
  this._temporaryFileId = "", this._importAllowed = !1, s(this, m)?.abort(), f(this, m, void 0);
};
w = function(t) {
  return c`${t.map((e) => c`${e.name}
				<div>${a(this, o, w).call(this, e.children)}</div>`)}`;
};
k = function() {
  return c`
			<div id="wrapper">
				<div>
					<strong><umb-localize key="visuallyHiddenTexts_dictionaryItems">Dictionary items</umb-localize>:</strong>
					<div id="item-list">${a(this, o, w).call(this, s(this, _))}</div>
				</div>

				${a(this, o, z).call(this)}
			</div>
		`;
};
z = function() {
  return c`<div id="nav">
			<uui-button label=${this.localize.term("general_import")} look="secondary" @click=${a(this, o, U)}>
				<uui-icon name="icon-arrow-left"></uui-icon>
				${this.localize.term("general_back")}
			</uui-button>
			<uui-button
				.state=${this._importButtonState}
				?disabled=${!this._importAllowed}
				type="button"
				label=${this.localize.term("general_import")}
				look="primary"
				@click=${a(this, o, F)}></uui-button>
		</div>`;
};
x = function() {
  return c`<umb-localize key="dictionary_importDictionaryItemHelp"></umb-localize>
			<uui-form>
				<form id="form" name="form" @submit=${a(this, o, D)}>
					<uui-form-layout-item>
						<uui-label for="file" slot="label" required>${this.localize.term("dictionary_pickFile")}</uui-label>
						<uui-input-file
							accept=".udt"
							name="file"
							id="file"
							@input=${a(this, o, M)}
							required
							required-message=${this.localize.term("dictionary_pickFileRequired")}></uui-input-file>
					</uui-form-layout-item>
				</form>
			</uui-form>`;
};
n.styles = [
  P,
  N`
			uui-input {
				width: 100%;
			}
			#item-list {
				padding: var(--uui-size-3) var(--uui-size-4);
				border: 1px solid var(--uui-color-border);
				border-radius: var(--uui-border-radius);
			}
			#item-list div {
				padding-left: 20px;
			}

			#wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-3);
			}
		`
];
u([
  h()
], n.prototype, "_selectionConfiguration", 2);
u([
  h()
], n.prototype, "_parentUnique", 2);
u([
  h()
], n.prototype, "_temporaryFileId", 2);
u([
  h()
], n.prototype, "_importButtonState", 2);
u([
  h()
], n.prototype, "_importAllowed", 2);
u([
  T("#form")
], n.prototype, "_form", 2);
n = u([
  O("umb-import-dictionary-modal")
], n);
const it = n;
export {
  n as UmbImportDictionaryModalLayout,
  it as default
};
//# sourceMappingURL=import-dictionary-modal.element-Bp8wsEFh.js.map

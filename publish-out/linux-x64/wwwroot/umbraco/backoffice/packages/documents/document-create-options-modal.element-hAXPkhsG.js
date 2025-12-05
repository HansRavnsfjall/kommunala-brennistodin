import { UmbDocumentItemRepository as R } from "./document-item.repository-Xg9sohq8.js";
import "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/observable-api";
import "@umbraco-cms/backoffice/variant";
import { when as $, html as r, repeat as E, css as S, state as f, customElement as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as O } from "@umbraco-cms/backoffice/style";
import { UmbModalBaseElement as U } from "@umbraco-cms/backoffice/modal";
import { UmbDocumentTypeStructureRepository as P } from "@umbraco-cms/backoffice/document-type";
import { UmbDocumentBlueprintItemRepository as W } from "@umbraco-cms/backoffice/document-blueprint";
import { k as x, n as I } from "./manifests-BP7S9LPy.js";
var N = Object.defineProperty, H = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, p = (e, t, i, h) => {
  for (var s = h > 1 ? void 0 : h ? H(t, i) : t, _ = e.length - 1, y; _ >= 0; _--)
    (y = e[_]) && (s = (h ? y(t, i, s) : y(s)) || s);
  return h && s && N(t, i, s), s;
}, w = (e, t, i) => t.has(e) || M("Cannot " + i), a = (e, t, i) => (w(e, t, "read from private field"), i ? i.call(e) : t.get(e)), u = (e, t, i) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), D = (e, t, i, h) => (w(e, t, "write to private field"), t.set(e, i), i), o = (e, t, i) => (w(e, t, "access private method"), i), g, T, v, c, d, n, A, z, m, b, B, C, k;
let l = class extends U {
  constructor() {
    super(...arguments), u(this, n), u(this, g, new P(this)), u(this, T, new R(this)), u(this, v, new W(this)), u(this, c, ""), u(this, d, ""), this._allowedDocumentTypes = [], this._headline = `${this.localize.term("create_createUnder")} ${this.localize.term("actionCategories_content")}`, this._availableBlueprints = [];
  }
  async firstUpdated() {
    const e = this.data?.parent.unique, t = this.data?.documentType?.unique || null;
    o(this, n, A).call(this, t, e || null), e && o(this, n, z).call(this, e);
  }
  render() {
    return r`
			<umb-body-layout headline=${this.localize.term("actions_create")}>
				${$(
      this._availableBlueprints.length && a(this, c),
      () => o(this, n, k).call(this),
      () => o(this, n, C).call(this)
    )}
				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("general_cancel")}
					@click="${this._rejectModal}"></uui-button>
			</umb-body-layout>
		`;
  }
};
g = /* @__PURE__ */ new WeakMap();
T = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
A = async function(e, t) {
  const { data: i } = await a(this, g).requestAllowedChildrenOf(e, t);
  i && (this._allowedDocumentTypes = i.items);
};
z = async function(e) {
  if (!e) return;
  const { data: t } = await a(this, T).requestItems([e]);
  t && (this._headline = `${this.localize.term("create_createUnder")} ${t[0].variants?.[0].name ?? this.localize.term("actionCategories_content")}`);
};
m = function(e, t) {
  if (!this.data)
    throw new Error("Data is not defined");
  t ? history.pushState(
    null,
    "",
    I.generateAbsolute({
      parentEntityType: this.data.parent.entityType,
      parentUnique: this.data.parent.unique,
      documentTypeUnique: e,
      blueprintUnique: t
    })
  ) : history.pushState(
    null,
    "",
    x.generateAbsolute({
      parentEntityType: this.data.parent.entityType,
      parentUnique: this.data.parent.unique,
      documentTypeUnique: e
    })
  ), this._submitModal();
};
b = async function(e) {
  if (!e)
    throw new Error("Document type unique is not defined");
  D(this, c, e), D(this, d, this._allowedDocumentTypes.find((i) => i.unique === e)?.icon ?? "");
  const { data: t } = await a(this, v).requestItemsByDocumentType(e);
  if (this._availableBlueprints = t ?? [], !this._availableBlueprints.length) {
    o(this, n, m).call(this, e);
    return;
  }
};
B = function() {
  return this.data?.documentType?.unique ? r`
				<umb-localize key="create_noDocumentTypes">
					There are no allowed Document Types available for creating content here. You must enable these in
					<strong>Document Types</strong> within the <strong>Settings</strong> section, by editing the
					<strong>Allowed child node types</strong> under <strong>Structure</strong>.
				</umb-localize>
				<br />
				<uui-button
					id="edit-permissions"
					look="secondary"
					href=${`/section/settings/workspace/document-type/edit/${this.data?.documentType?.unique}/view/structure`}
					label=${this.localize.term("create_noDocumentTypesEditPermissions")}
					@click=${() => this._rejectModal()}></uui-button>
			` : r`
				<umb-localize key="create_noDocumentTypesAllowedAtRoot">
					There are no allowed Document Types available for creating content here. You must enable these in
					<strong>Document Types</strong> within the <strong>Settings</strong> section, by changing the
					<strong>Allow as root</strong> option under <strong>Structure</strong>.
				</umb-localize>
			`;
};
C = function() {
  return r`
			<uui-box .headline=${this._headline}>
				${$(
    this._allowedDocumentTypes.length === 0,
    () => o(this, n, B).call(this),
    () => E(
      this._allowedDocumentTypes,
      (e) => e.unique,
      (e) => r`
								<uui-ref-node-document-type
									.name=${this.localize.string(e.name)}
									.alias=${this.localize.string(e.description ?? "")}
									select-only
									selectable
									@selected=${() => o(this, n, b).call(this, e.unique)}
									@open=${() => o(this, n, b).call(this, e.unique)}>
									<umb-icon slot="icon" name=${e.icon || "icon-circle-dotted"}></umb-icon>
								</uui-ref-node-document-type>
							`
    )
  )}
			</uui-box>
		`;
};
k = function() {
  return r`
			<uui-box headline=${this.localize.term("blueprints_selectBlueprint")}>
				<uui-menu-item
					id="blank"
					label=${this.localize.term("blueprints_blankBlueprint")}
					@click=${() => o(this, n, m).call(this, a(this, c))}>
					<umb-icon slot="icon" name=${a(this, d)}></umb-icon>
				</uui-menu-item>
				${E(
    this._availableBlueprints,
    (e) => e.unique,
    (e) => r`<uui-menu-item
							label=${e.name}
							@click=${() => o(this, n, m).call(this, a(this, c), e.unique)}>
							<umb-icon slot="icon" name="icon-blueprint"></umb-icon>
						</uui-menu-item>`
  )}
			</uui-box>
		`;
};
l.styles = [
  O,
  S`
			#blank {
				border-bottom: 1px solid var(--uui-color-border);
			}

			#edit-permissions {
				margin-top: var(--uui-size-6);
			}
		`
];
p([
  f()
], l.prototype, "_allowedDocumentTypes", 2);
p([
  f()
], l.prototype, "_headline", 2);
p([
  f()
], l.prototype, "_availableBlueprints", 2);
l = p([
  q("umb-document-create-options-modal")
], l);
const ee = l;
export {
  l as UmbDocumentCreateOptionsModalElement,
  ee as default
};
//# sourceMappingURL=document-create-options-modal.element-hAXPkhsG.js.map

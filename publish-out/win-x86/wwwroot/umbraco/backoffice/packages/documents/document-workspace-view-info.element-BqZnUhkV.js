import { g as M, h as q, i as W } from "./manifests-BP7S9LPy.js";
import { DocumentVariantStateModel as b } from "@umbraco-cms/backoffice/external/backend-api";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { T as B } from "./utils-DjhBxJtv.js";
import { html as u, ifDefined as _, nothing as d, css as R, state as r, customElement as L } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as G } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalRouteRegistrationController as V } from "@umbraco-cms/backoffice/router";
import { umbOpenModal as H } from "@umbraco-cms/backoffice/modal";
import { UMB_WORKSPACE_MODAL as K } from "@umbraco-cms/backoffice/workspace";
import { UmbTemplateItemRepository as X, UMB_TEMPLATE_PICKER_MODAL as F } from "@umbraco-cms/backoffice/template";
import { createExtensionApiByAlias as Y } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_SECTION_USER_PERMISSION_CONDITION_ALIAS as J } from "@umbraco-cms/backoffice/section";
import { UMB_SETTINGS_SECTION_ALIAS as Q } from "@umbraco-cms/backoffice/settings";
var Z = Object.defineProperty, j = Object.getOwnPropertyDescriptor, P = (e) => {
  throw TypeError(e);
}, o = (e, t, a, h) => {
  for (var p = h > 1 ? void 0 : h ? j(t, a) : t, g = e.length - 1, y; g >= 0; g--)
    (y = e[g]) && (p = (h ? y(t, a, p) : y(p)) || p);
  return h && p && Z(t, a, p), p;
}, C = (e, t, a) => t.has(e) || P("Cannot " + a), c = (e, t, a) => (C(e, t, "read from private field"), t.get(e)), f = (e, t, a) => t.has(e) ? P("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), U = (e, t, a, h) => (C(e, t, "write to private field"), t.set(e, a), a), n = (e, t, a) => (C(e, t, "access private method"), a), l, D, v, i, S, $, E, I, A, w, z, x, O, N, k, m, T;
let s = class extends G {
  constructor() {
    super(), f(this, i), this._documentUnique = "", this._documentTypeUnique = "", this._templateUnique = "", this._variantsWithPendingChanges = [], this._hasSettingsAccess = !1, f(this, l), f(this, D, new X(this)), f(this, v), new V(this, K).addAdditionalPath("general/:entityType").onSetup((e) => ({ data: { entityType: e.entityType, preset: {} } })).observeRouteBuilder((e) => {
      this._routeBuilder = e;
    }), this.consumeContext(M, (e) => {
      U(this, l, e), this._documentTypeUnique = c(this, l)?.getContentTypeId(), n(this, i, S).call(this);
    }), this.consumeContext(q, (e) => {
      this.observe(e?.currentVariant, (t) => {
        this._variant = t;
      });
    }), this.consumeContext(W, (e) => {
      U(this, v, e), n(this, i, $).call(this);
    }), Y(this, J, [
      {
        config: {
          match: Q
        },
        onChange: (e) => {
          this._hasSettingsAccess = e;
        }
      }
    ]);
  }
  render() {
    return u`
			<div class="container">
				<umb-extension-slot id="workspace-info-apps" type="workspaceInfoApp"></umb-extension-slot>
			</div>
			<div class="container">
				<uui-box headline=${this.localize.term("general_general")} id="general-section">
					${n(this, i, A).call(this)}
				</uui-box>
			</div>
		`;
  }
};
l = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakSet();
S = function() {
  c(this, l) && (this.observe(
    c(this, l).structure.ownerContentType,
    (e) => {
      this._documentTypeName = e?.name, this._documentTypeIcon = e?.icon, this._allowedTemplates = e?.allowedTemplates;
    },
    "_documentType"
  ), this.observe(
    c(this, l).unique,
    (e) => {
      this._documentUnique = e;
    },
    "_documentUnique"
  ), this.observe(
    c(this, l).templateId,
    async (e) => {
      if (this._templateUnique = e, !e) return;
      const { data: t } = await c(this, D).requestItems([e]);
      t?.length && (this._templateName = t[0].name);
    },
    "_templateUnique"
  ));
};
$ = function() {
  this.observe(
    c(this, v)?.publishedPendingChanges.variantsWithChanges,
    (e) => {
      this._variantsWithPendingChanges = e || [];
    },
    "_observePendingChanges"
  );
};
E = function(e) {
  return this._variantsWithPendingChanges.some((t) => t.variantId.compare(e));
};
I = function() {
  switch (this._variant?.state) {
    case b.DRAFT:
      return u`
					<uui-tag look="secondary" label=${this.localize.term("content_unpublished")}>
						${this.localize.term("content_unpublished")}
					</uui-tag>
				`;
    // TODO: The pending changes state can be removed once the management Api removes this state
    // We should also make our own state model for this
    case b.PUBLISHED:
    case b.PUBLISHED_PENDING_CHANGES: {
      const e = n(this, i, E).call(this, this._variant) ? "content_publishedPendingChanges" : "content_published";
      return u`
					<uui-tag color="positive" look="primary" label=${this.localize.term(e)}>
						${this.localize.term(e)}
					</uui-tag>
				`;
    }
    default:
      return u`
					<uui-tag look="primary" label=${this.localize.term("content_notCreated")}>
						${this.localize.term("content_notCreated")}
					</uui-tag>
				`;
  }
};
A = function() {
  const e = this._routeBuilder?.({ entityType: "document-type" }) ?? "";
  return u`
			<div class="general-item"><span>${n(this, i, I).call(this)}</span></div>
			${n(this, i, z).call(this)} ${n(this, i, x).call(this)} ${n(this, i, O).call(this)}
			${n(this, i, N).call(this)} ${n(this, i, k).call(this)}

			<div class="general-item">
				<strong><umb-localize key="content_documentType">Document Type</umb-localize></strong>
				<uui-ref-node-document-type
					standalone
					href=${_(
    this._hasSettingsAccess ? e + "edit/" + this._documentTypeUnique : void 0
  )}
					?readonly=${!this._hasSettingsAccess}
					name=${_(this.localize.string(this._documentTypeName ?? ""))}>
					<umb-icon slot="icon" name=${_(this._documentTypeIcon)}></umb-icon>
				</uui-ref-node-document-type>
			</div>
			${n(this, i, w).call(this)}
			<div class="general-item">
				<strong><umb-localize key="template_id">Id</umb-localize></strong>
				<span>${this._documentUnique}</span>
			</div>
		`;
};
w = function() {
  if (this._allowedTemplates?.length === 0) return d;
  const e = this._routeBuilder?.({ entityType: "template" }) ?? "";
  return u`
			<div class="general-item">
				<strong><umb-localize key="template_template">Template</umb-localize></strong>
				${this._templateUnique ? u`
							<uui-ref-node
								standalone
								name=${_(this._templateName)}
								href=${_(
    this._hasSettingsAccess ? e + "edit/" + this._templateUnique : void 0
  )}
								?readonly=${!this._hasSettingsAccess}>
								<uui-icon slot="icon" name="icon-document-html"></uui-icon>
								<uui-action-bar slot="actions">
									<uui-button
										label=${this.localize.term("general_choose")}
										@click=${n(this, i, T)}></uui-button>
								</uui-action-bar>
							</uui-ref-node>
						` : u`
							<uui-button
								label=${this.localize.term("general_choose")}
								look="placeholder"
								@click=${n(this, i, T)}></uui-button>
						`}
			</div>
		`;
};
z = function() {
  return this._variant?.createDate ? n(this, i, m).call(this, this._variant.createDate, "content_createDate", "Created") : d;
};
x = function() {
  return this._variant?.updateDate ? n(this, i, m).call(this, this._variant.updateDate, "content_updateDate", "Last edited") : d;
};
O = function() {
  return this._variant?.publishDate ? n(this, i, m).call(this, this._variant.publishDate, "content_lastPublished", "Last published") : d;
};
N = function() {
  return this._variant?.scheduledPublishDate ? n(this, i, m).call(this, this._variant.scheduledPublishDate, "content_releaseDate", "Publish At") : d;
};
k = function() {
  return this._variant?.scheduledUnpublishDate ? n(this, i, m).call(this, this._variant.scheduledUnpublishDate, "content_expireDate", "Remove At") : d;
};
m = function(e, t, a) {
  return u`
			<div class="general-item">
				<strong><umb-localize .key=${t}>${a}</umb-localize></strong>
				<span>
					<umb-localize-date .date=${e} .options=${B}></umb-localize-date>
				</span>
			</div>
		`;
};
T = async function() {
  const e = await H(this, F, {
    data: {
      multiple: !1,
      pickableFilter: (a) => !!this._allowedTemplates?.find((h) => a.unique === h.id)
    },
    value: {
      selection: [this._templateUnique]
    }
  }).catch(() => {
  });
  if (!e?.selection.length) return;
  const t = e.selection[0];
  t && c(this, l)?.setTemplate(t);
};
s.styles = [
  R`
			:host {
				display: grid;
				gap: var(--uui-size-layout-1);
				padding: var(--uui-size-layout-1);
				grid-template-columns: 1fr 350px;
			}

			div.container {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-layout-1);
			}

			//General section

			#general-section {
				display: flex;
				flex-direction: column;
			}

			.general-item {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-1);
			}

			.general-item:not(:last-child) {
				margin-bottom: var(--uui-size-space-6);
			}

			.variant-state {
				display: flex;
				gap: var(--uui-size-space-4);
			}

			.variant-state > span {
				color: var(--uui-color-divider-emphasis);
			}

			uui-ref-node-document-type[readonly] {
				padding-top: 7px;
				padding-bottom: 7px;
			}
		`
];
o([
  r()
], s.prototype, "_documentUnique", 2);
o([
  r()
], s.prototype, "_documentTypeUnique", 2);
o([
  r()
], s.prototype, "_documentTypeName", 2);
o([
  r()
], s.prototype, "_documentTypeIcon", 2);
o([
  r()
], s.prototype, "_allowedTemplates", 2);
o([
  r()
], s.prototype, "_templateUnique", 2);
o([
  r()
], s.prototype, "_templateName", 2);
o([
  r()
], s.prototype, "_variant", 2);
o([
  r()
], s.prototype, "_variantsWithPendingChanges", 2);
o([
  r()
], s.prototype, "_hasSettingsAccess", 2);
o([
  r()
], s.prototype, "_routeBuilder", 2);
s = o([
  L("umb-document-workspace-view-info")
], s);
const me = s;
export {
  s as UmbDocumentWorkspaceViewInfoElement,
  me as default
};
//# sourceMappingURL=document-workspace-view-info.element-BqZnUhkV.js.map

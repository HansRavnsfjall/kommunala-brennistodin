import { k as w } from "./constants-D9L2jSGX.js";
import { html as u, when as E, css as I, state as h, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as g } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
import "@umbraco-cms/backoffice/template";
var D = Object.defineProperty, C = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, n = (e, t, a, l) => {
  for (var i = l > 1 ? void 0 : l ? C(t, a) : t, d = e.length - 1, m; d >= 0; d--)
    (m = e[d]) && (i = (l ? m(t, a, i) : m(i)) || i);
  return l && i && D(t, a, i), i;
}, _ = (e, t, a) => t.has(e) || f("Cannot " + a), o = (e, t, a) => (_(e, t, "read from private field"), t.get(e)), T = (e, t, a) => t.has(e) ? f("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), W = (e, t, a, l) => (_(e, t, "write to private field"), t.set(e, a), a), c = (e, t, a) => (_(e, t, "access private method"), a), s, p, v, y, b;
let r = class extends x {
  constructor() {
    super(), T(this, p), T(this, s), this._isElementType = !1, this._defaultTemplateId = null, this.consumeContext(w, (e) => {
      W(this, s, e), this._observeDocumentType();
    });
  }
  _observeDocumentType() {
    o(this, s) && (this.observe(
      o(this, s).isElement,
      (e) => {
        this._isElementType = e ?? !1;
      },
      "_observeIsElement"
    ), this.observe(
      o(this, s).defaultTemplate,
      (e) => {
        const t = this._defaultTemplateId;
        this._defaultTemplateId = e ? e.id : null, this.requestUpdate("_defaultTemplateId", t);
      },
      "_observeDefaultTemplate"
    ), this.observe(
      o(this, s).allowedTemplateIds,
      (e) => {
        const t = this._allowedTemplateIds;
        this._allowedTemplateIds = e?.map((a) => a.id), this.requestUpdate("_allowedTemplateIds", t);
      },
      "_observeAllowedTemplateIds"
    ));
  }
  render() {
    return this._isElementType ? c(this, p, y).call(this) : c(this, p, b).call(this);
  }
};
s = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
v = function(e) {
  const t = e.target, a = t.selection?.filter((l) => l !== null).map((l) => ({ id: l })) ?? [];
  o(this, s)?.setAllowedTemplateIds(a), o(this, s)?.setDefaultTemplate(t.defaultUnique ? { id: t.defaultUnique } : null);
};
y = function() {
  return u`
			<div class="empty-state">
				<h2>
					<umb-localize key="contentTypeEditor_elementDoesNotSupport">
						This is not applicable for an Element type.
					</umb-localize>
				</h2>
			</div>
		`;
};
b = function() {
  return u`
			<uui-box headline=${this.localize.term("treeHeaders_templates")}>
				${E(
    o(this, s)?.createTemplateMode,
    () => u`<p><em>The default template will be created once this document type has been saved.</em></p>`
  )}
				<umb-property-layout alias="Templates" label=${this.localize.term("contentTypeEditor_allowedTemplatesHeading")}>
					<div slot="description">${this.localize.term("contentTypeEditor_allowedTemplatesDescription")}</div>
					<div id="templates" slot="editor">
						<umb-input-template
							.defaultUnique=${this._defaultTemplateId ?? ""}
							.selection=${this._allowedTemplateIds}
							@change=${c(this, p, v)}>
						</umb-input-template>
					</div>
				</umb-property-layout>
			</uui-box>
		`;
};
r.styles = [
  g,
  I`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			#templates {
				text-align: center;
			}

			#template-card-wrapper {
				display: flex;
				gap: var(--uui-size-space-4);
				align-items: stretch;
			}

			umb-property-layout {
				border-top: 1px solid var(--uui-color-border);
			}
			umb-property-layout:first-child {
				padding-top: 0;
				border: none;
			}
			.empty-state {
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				align-items: center;
			}
			.empty-state h2 {
				color: var(--uui-color-border-emphasis);
			}
		`
];
n([
  h()
], r.prototype, "_isElementType", 2);
n([
  h()
], r.prototype, "_defaultTemplateId", 2);
n([
  h()
], r.prototype, "_allowedTemplateIds", 2);
r = n([
  U("umb-document-type-workspace-view-templates")
], r);
const S = r;
export {
  r as UmbDocumentTypeWorkspaceViewTemplatesElement,
  S as default
};
//# sourceMappingURL=document-type-workspace-view-templates.element-BMZId_af.js.map

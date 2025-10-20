import { DocumentVariantStateModel as p } from "@umbraco-cms/backoffice/external/backend-api";
import { C as E, D as I } from "./manifests-BP7S9LPy.js";
import { UMB_DOCUMENT_CONFIGURATION_CONTEXT as S } from "./document-configuration.context-Bz7FvH_D.js";
import { when as D, nothing as R, html as d, css as O, state as c, customElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as $ } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as k } from "@umbraco-cms/backoffice/utils";
import "./document-variant-language-picker.element-azTXCKTU.js";
var N = Object.defineProperty, P = Object.getOwnPropertyDescriptor, f = (e) => {
  throw TypeError(e);
}, l = (e, i, t, a) => {
  for (var s = a > 1 ? void 0 : a ? P(i, t) : i, n = e.length - 1, _; n >= 0; n--)
    (_ = e[n]) && (s = (a ? _(i, t, s) : _(s)) || s);
  return a && s && N(i, t, s), s;
}, g = (e, i, t) => i.has(e) || f("Cannot " + t), v = (e, i, t) => (g(e, i, "read from private field"), t ? t.call(e) : i.get(e)), m = (e, i, t) => i.has(e) ? f("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), u = (e, i, t) => (g(e, i, "access private method"), t), h, r, b, M, y, U, C;
function q(e) {
  return e.variant?.state === p.PUBLISHED || e.variant?.state === p.PUBLISHED_PENDING_CHANGES;
}
let o = class extends $ {
  constructor() {
    super(...arguments), m(this, r), this._selectionManager = new k(this), this._options = [], this._selection = [], this._canUnpublish = !0, this._hasInvalidSelection = !0, this._isInvariant = !1, m(this, h, (e) => e.variant ? this.data?.pickableFilter ? this.data.pickableFilter(e) : !0 : !1), this._requiredFilter = (e) => e.language.isMandatory && !this._selection.includes(e.unique);
  }
  firstUpdated() {
    if (u(this, r, b).call(this), this.data?.options.length === 1 && this.data.options[0].culture === null) {
      this._isInvariant = !0, this._hasInvalidSelection = !1;
      return;
    }
    u(this, r, M).call(this);
  }
  render() {
    return d`<uui-dialog-layout headline=${this.localize.term("content_unpublish")}>
			<p>
				<umb-localize key="prompt_confirmUnpublish"></umb-localize>
			</p>
			${D(
      !this._isInvariant,
      () => d`
					<umb-document-variant-language-picker
						.selectionManager=${this._selectionManager}
						.variantLanguageOptions=${this._options}
						.requiredFilter=${this._hasInvalidSelection ? this._requiredFilter : void 0}
						.pickableFilter=${v(this, h)}></umb-document-variant-language-picker>
				`
    )}
			${this._referencesConfig ? d`<umb-confirm-action-modal-entity-references
						.config=${this._referencesConfig}
						@change=${u(this, r, C)}></umb-confirm-action-modal-entity-references>` : R}

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${u(this, r, U)}></uui-button>
				<uui-button
					label="${this.localize.term("actions_unpublish")}"
					?disabled=${this._hasInvalidSelection || !this._canUnpublish || !this._isInvariant && this._selection.length === 0}
					look="primary"
					color="warning"
					@click=${u(this, r, y)}></uui-button>
			</div>
		</uui-dialog-layout> `;
  }
};
h = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
b = function() {
  this.data?.documentUnique && (this._referencesConfig = {
    itemRepositoryAlias: I,
    referenceRepositoryAlias: E,
    unique: this.data.documentUnique
  });
};
M = async function() {
  this._selectionManager.setMultiple(!0), this._selectionManager.setSelectable(!0), this._options = this.data?.options.filter((t) => t.variant && t.variant.state === null || q(t)) ?? [];
  let e = this.value?.selection ?? [];
  const i = this._options.filter((t) => v(this, h).call(this, t));
  e = e.filter((t) => i.some((a) => a.unique === t)), this._selectionManager.setSelection(e), this.observe(
    this._selectionManager.selection,
    (t) => {
      this._selection = t;
      const a = this._options.some((n) => n.language.isMandatory && t.includes(n.unique)), s = this._options.some(
        (n) => n.language.isMandatory && !t.includes(n.unique)
      );
      this._hasInvalidSelection = a && s;
    },
    "observeSelection"
  );
};
y = function() {
  if (this._canUnpublish) {
    const e = this._isInvariant ? ["invariant"] : this._selection;
    this.value = { selection: e }, this.modalContext?.submit();
    return;
  }
  this.modalContext?.reject();
};
U = function() {
  this.modalContext?.reject();
};
C = async function(e) {
  e.stopPropagation();
  const i = e.target, t = i.getTotalReferencedBy(), a = i.getTotalDescendantsWithReferences();
  if (t + a > 0) {
    const n = await this.getContext(S);
    this._canUnpublish = (await n?.getDocumentConfiguration())?.disableUnpublishWhenReferenced === !1;
  }
};
o.styles = [
  w,
  O`
			:host {
				display: block;
				min-width: 600px;
				max-width: 90vw;
			}

			#references {
				--uui-table-cell-padding: 0;
			}

			#references-warning {
				margin-top: 1rem;
				background-color: var(--uui-color-danger);
				color: var(--uui-color-danger-contrast);
			}
		`
];
l([
  c()
], o.prototype, "_options", 2);
l([
  c()
], o.prototype, "_selection", 2);
l([
  c()
], o.prototype, "_canUnpublish", 2);
l([
  c()
], o.prototype, "_hasInvalidSelection", 2);
l([
  c()
], o.prototype, "_isInvariant", 2);
l([
  c()
], o.prototype, "_referencesConfig", 2);
o = l([
  T("umb-document-unpublish-modal")
], o);
const G = o;
export {
  o as UmbDocumentUnpublishModalElement,
  G as default,
  q as isPublished
};
//# sourceMappingURL=document-unpublish-modal.element-nf9-R3ki.js.map

import { DocumentVariantStateModel as b } from "@umbraco-cms/backoffice/external/backend-api";
import { i as v } from "./utils-DhnAT8B6.js";
import { when as k, html as f, css as w, state as u, customElement as E } from "@umbraco-cms/backoffice/external/lit";
import { umbFocus as P } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as O } from "@umbraco-cms/backoffice/modal";
import { UmbSelectionManager as C } from "@umbraco-cms/backoffice/utils";
import { UmbTextStyles as D } from "@umbraco-cms/backoffice/style";
import "./document-variant-language-picker.element-azTXCKTU.js";
var I = Object.defineProperty, x = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, c = (t, i, e, s) => {
  for (var a = s > 1 ? void 0 : s ? x(i, e) : i, d = t.length - 1, p; d >= 0; d--)
    (p = t[d]) && (a = (s ? p(i, e, a) : p(a)) || a);
  return s && a && I(i, e, a), a;
}, y = (t, i, e) => i.has(t) || g("Cannot " + e), n = (t, i, e) => (y(t, i, "read from private field"), e ? e.call(t) : i.get(t)), m = (t, i, e) => i.has(t) ? g("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), _ = (t, i, e) => (y(t, i, "access private method"), e), o, h, r, M, S, $;
let l = class extends O {
  constructor() {
    super(...arguments), m(this, r), m(this, o, new C(this)), this._options = [], this._hasInvalidSelection = !0, this._isInvariant = !1, m(this, h, (t) => !t.variant || t.variant.state === b.NOT_CREATED ? !1 : this.data?.pickableFilter ? this.data.pickableFilter(t) : !0);
  }
  firstUpdated() {
    if (this.data?.options.length === 1 && this.data.options[0].culture === null) {
      this._isInvariant = !0, this._hasInvalidSelection = !1;
      return;
    }
    _(this, r, M).call(this);
  }
  render() {
    const t = this.data?.headline ?? this.localize.term("content_publishModalTitle");
    return f`
			<uui-dialog-layout headline=${t}>
				<p><umb-localize key="prompt_confirmPublish"></umb-localize></p>

				${k(
      !this._isInvariant,
      () => f`<umb-document-variant-language-picker
							.selectionManager=${n(this, o)}
							.variantLanguageOptions=${this._options}
							.requiredFilter=${v}
							.pickableFilter=${n(this, h)}></umb-document-variant-language-picker>`
    )}

				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${_(this, r, $)}></uui-button>
					<uui-button
						${P()}
						label="${this.data?.confirmLabel ? this.localize.string(this.data.confirmLabel) : this.localize.term("buttons_saveAndPublish")}"
						look="primary"
						color="positive"
						?disabled=${this._hasNotSelectedMandatory}
						@click=${_(this, r, S)}></uui-button>
				</div>
			</uui-dialog-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
M = async function() {
  n(this, o).setMultiple(!0), n(this, o).setSelectable(!0), this._options = this.data?.options.filter(
    (e) => e.variant && e.variant.state === null || v(e) || e.variant?.state !== b.NOT_CREATED
  ) ?? [];
  let t = this.value?.selection ?? [];
  const i = this._options.filter((e) => n(this, h).call(this, e));
  t = t.filter((e) => i.some((s) => s.unique === e)), n(this, o).setSelection(t), this.observe(
    n(this, o).selection,
    (e) => {
      if (!this._options && !e) return;
      const s = this._options.filter(v);
      this._hasNotSelectedMandatory = s.some((a) => !e.includes(a.unique));
    },
    "observeSelection"
  );
};
S = function() {
  this.value = { selection: this._isInvariant ? ["invariant"] : n(this, o).getSelection() }, this.modalContext?.submit();
};
$ = function() {
  this.modalContext?.reject();
};
l.styles = [
  D,
  w`
			:host {
				display: block;
				min-width: 460px;
				max-width: 90vw;
			}
		`
];
c([
  u()
], l.prototype, "_options", 2);
c([
  u()
], l.prototype, "_hasNotSelectedMandatory", 2);
c([
  u()
], l.prototype, "_hasInvalidSelection", 2);
c([
  u()
], l.prototype, "_isInvariant", 2);
l = c([
  E("umb-document-publish-modal")
], l);
const L = l;
export {
  l as UmbDocumentPublishModalElement,
  L as default
};
//# sourceMappingURL=document-publish-modal.element-CDNuuR70.js.map

import { DocumentVariantStateModel as S } from "@umbraco-cms/backoffice/external/backend-api";
import { i as _ } from "./utils-DhnAT8B6.js";
import { html as b, css as w, state as g, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as P } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import { UmbSelectionManager as W } from "@umbraco-cms/backoffice/utils";
import "./document-variant-language-picker.element-azTXCKTU.js";
var z = Object.defineProperty, C = Object.getOwnPropertyDescriptor, y = (t) => {
  throw TypeError(t);
}, v = (t, i, e, n) => {
  for (var a = n > 1 ? void 0 : n ? C(i, e) : i, p = t.length - 1, m; p >= 0; p--)
    (m = t[p]) && (a = (n ? m(i, e, a) : m(a)) || a);
  return n && a && z(i, e, a), a;
}, f = (t, i, e) => i.has(t) || y("Cannot " + e), s = (t, i, e) => (f(t, i, "read from private field"), e ? e.call(t) : i.get(t)), c = (t, i, e) => i.has(t) ? y("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), O = (t, i, e, n) => (f(t, i, "write to private field"), i.set(t, e), e), h = (t, i, e) => (f(t, i, "access private method"), e), l, u, d, o, D, M, $, k;
let r = class extends P {
  constructor() {
    super(...arguments), c(this, o), c(this, l, new W(this)), c(this, u, !1), this._options = [], c(this, d, (t) => t.variant ? this.data?.pickableFilter ? this.data.pickableFilter(t) : !0 : !1);
  }
  firstUpdated() {
    h(this, o, D).call(this);
  }
  render() {
    return b`<uui-dialog-layout headline=${this.localize.term("buttons_publishDescendants")}>
			<p id="subtitle">
				${this._options.length === 1 ? b`<umb-localize
							key="content_publishDescendantsHelp"
							.args=${[this._options[0].variant?.name ?? this._options[0].language.name]}>
							Publish <strong>${this._options[0].variant?.name}</strong> and all content items underneath and thereby
							making their content publicly available.
						</umb-localize>` : b`
							<umb-localize key="content_publishDescendantsWithVariantsHelp">
								Publish variants and variants of same type underneath and thereby making their content publicly
								available.
							</umb-localize>
						`}
			</p>

			<umb-document-variant-language-picker
				.selectionManager=${s(this, l)}
				.variantLanguageOptions=${this._options}
				.requiredFilter=${_}
				.pickableFilter=${s(this, d)}></umb-document-variant-language-picker>

			<uui-form-layout-item>
				<uui-toggle
					id="includeUnpublishedDescendants"
					label=${this.localize.term("content_includeUnpublished")}
					?checked=${this.value?.includeUnpublishedDescendants}
					@change=${h(this, o, M)}></uui-toggle>
			</uui-form-layout-item>

			<div slot="actions">
				<uui-button label=${this.localize.term("general_close")} @click=${h(this, o, k)}></uui-button>
				<uui-button
					label="${this.localize.term("buttons_publishDescendants")}"
					look="primary"
					color="positive"
					?disabled=${this._hasNotSelectedMandatory}
					@click=${h(this, o, $)}></uui-button>
			</div>
		</uui-dialog-layout> `;
  }
};
l = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
D = async function() {
  s(this, l).setMultiple(!0), s(this, l).setSelectable(!0), this._options = this.data?.options.filter(
    (e) => _(e) || e.variant?.state !== S.NOT_CREATED
  ) ?? [];
  let t = this.value?.selection ?? [];
  const i = this._options.filter((e) => s(this, d).call(this, e));
  t = t.filter((e) => i.some((n) => n.unique === e)), s(this, l).setSelection(t), this.observe(
    s(this, l).selection,
    (e) => {
      if (!this._options && !e) return;
      const n = this._options.filter(_);
      this._hasNotSelectedMandatory = n.some((a) => !e.includes(a.unique));
    },
    "observeSelection"
  );
};
M = function() {
  O(this, u, !s(this, u));
};
$ = async function() {
  this.value = {
    selection: s(this, l).getSelection(),
    includeUnpublishedDescendants: s(this, u)
  }, this.modalContext?.submit();
};
k = function() {
  this.modalContext?.reject();
};
r.styles = [
  E,
  w`
			:host {
				display: block;
				min-width: 460px;
				max-width: 90vw;
			}
		`
];
v([
  g()
], r.prototype, "_options", 2);
v([
  g()
], r.prototype, "_hasNotSelectedMandatory", 2);
r = v([
  U("umb-document-publish-with-descendants-modal")
], r);
const V = r;
export {
  r as UmbDocumentPublishWithDescendantsModalElement,
  V as default
};
//# sourceMappingURL=document-publish-with-descendants-modal.element-BHe7VdlT.js.map

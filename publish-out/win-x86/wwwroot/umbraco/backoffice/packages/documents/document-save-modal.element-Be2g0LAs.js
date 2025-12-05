import { html as M, css as S, state as k, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { umbFocus as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as $ } from "@umbraco-cms/backoffice/modal";
import { UmbSelectionManager as x } from "@umbraco-cms/backoffice/utils";
import { UmbTextStyles as E } from "@umbraco-cms/backoffice/style";
import "./document-variant-language-picker.element-azTXCKTU.js";
var U = Object.defineProperty, C = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, v = (t, e, i, n) => {
  for (var a = n > 1 ? void 0 : n ? C(e, i) : e, u = t.length - 1, h; u >= 0; u--)
    (h = t[u]) && (a = (n ? h(e, i, a) : h(a)) || a);
  return n && a && U(e, i, a), a;
}, _ = (t, e, i) => e.has(t) || d("Cannot " + i), s = (t, e, i) => (_(t, e, "read from private field"), i ? i.call(t) : e.get(t)), m = (t, e, i) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), p = (t, e, i) => (_(t, e, "access private method"), i), o, c, l, f, b, g;
let r = class extends $ {
  constructor() {
    super(...arguments), m(this, l), m(this, o, new x(this)), this._options = [], m(this, c, (t) => t.variant ? this.data?.pickableFilter ? this.data.pickableFilter(t) : !0 : !1);
  }
  firstUpdated() {
    p(this, l, f).call(this);
  }
  render() {
    return M`
			<uui-dialog-layout headline=${this.localize.term("content_saveModalTitle")}>
				<umb-document-variant-language-picker
					.selectionManager=${s(this, o)}
					.variantLanguageOptions=${this._options}
					.pickableFilter=${s(this, c)}></umb-document-variant-language-picker>
				<div slot="actions">
					<uui-button label=${this.localize.term("general_close")} @click=${p(this, l, g)}></uui-button>
					<uui-button
						${y()}
						label="${this.localize.term("buttons_save")}"
						look="primary"
						color="positive"
						@click=${p(this, l, b)}></uui-button>
				</div>
			</uui-dialog-layout>
		`;
  }
};
o = /* @__PURE__ */ new WeakMap();
c = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
f = async function() {
  s(this, o).setMultiple(!0), s(this, o).setSelectable(!0), this._options = this.data?.options ?? [];
  let t = this.value?.selection ?? [];
  const e = this._options.filter((i) => s(this, c).call(this, i));
  t = t.filter((i) => e.some((n) => n.unique === i)), s(this, o).setSelection(t);
};
b = function() {
  this.value = { selection: s(this, o).getSelection() }, this.modalContext?.submit();
};
g = function() {
  this.modalContext?.reject();
};
r.styles = [
  E,
  S`
			:host {
				display: block;
				width: 400px;
				max-width: 90vw;
			}
		`
];
v([
  k()
], r.prototype, "_options", 2);
r = v([
  w("umb-document-save-modal")
], r);
const T = r;
export {
  r as UmbDocumentSaveModalElement,
  T as default
};
//# sourceMappingURL=document-save-modal.element-Be2g0LAs.js.map

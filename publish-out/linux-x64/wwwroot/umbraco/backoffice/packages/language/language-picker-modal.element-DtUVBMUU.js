import { UmbLanguageCollectionRepository as k } from "./language-collection.repository-GzJNHJc2.js";
import { repeat as C, html as h, state as M, customElement as w } from "@umbraco-cms/backoffice/external/lit";
import { UmbSelectionManager as $ } from "@umbraco-cms/backoffice/utils";
import { UmbModalBaseElement as E } from "@umbraco-cms/backoffice/modal";
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, b = (e, t, a, o) => {
  for (var l = o > 1 ? void 0 : o ? S(t, a) : t, r = e.length - 1, c; r >= 0; r--)
    (c = e[r]) && (l = (o ? c(t, a, l) : c(l)) || l);
  return o && l && P(t, a, l), l;
}, f = (e, t, a) => t.has(e) || _("Cannot " + a), i = (e, t, a) => (f(e, t, "read from private field"), a ? a.call(e) : t.get(e)), d = (e, t, a) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), p = (e, t, a) => (f(e, t, "access private method"), a), m, s, n, g, v, y;
let u = class extends E {
  constructor() {
    super(...arguments), d(this, n), this._languages = [], d(this, m, new k(this)), d(this, s, new $(this));
  }
  connectedCallback() {
    super.connectedCallback(), i(this, s).setSelectable(!0), i(this, s).setMultiple(this.data?.multiple ?? !1), i(this, s).setSelection(this.value?.selection ?? []), this.observe(i(this, s).selection, (e) => {
      this.value = { selection: e };
    });
  }
  async firstUpdated() {
    const { data: e } = await i(this, m).requestCollection({});
    this._languages = e?.items ?? [];
  }
  render() {
    return h`<umb-body-layout headline="Select languages">
			<uui-box>
				${i(this, n, g).length > 0 ? C(
      i(this, n, g),
      (e) => e.unique,
      (e) => h`
								<uui-menu-item
									label=${e.name ?? ""}
									selectable
									@selected=${() => i(this, s).select(e.unique)}
									@deselected=${() => i(this, s).deselect(e.unique)}
									?selected=${this.value.selection.includes(e.unique)}>
									<uui-icon slot="icon" name="icon-globe"></uui-icon>
								</uui-menu-item>
							`
    ) : h`<umb-localize key="language_noFallbackLanguages">
							There are no other languages to choose from
						</umb-localize>`}
			</uui-box>
			<div slot="actions">
				<uui-button label="Close" @click=${p(this, n, y)}></uui-button>
				<uui-button label="Submit" look="primary" color="positive" @click=${p(this, n, v)}></uui-button>
			</div>
		</umb-body-layout> `;
  }
};
m = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
g = function() {
  return this.data?.filter ? this._languages.filter(this.data.filter) : this._languages;
};
v = function() {
  this.modalContext?.submit();
};
y = function() {
  this.modalContext?.reject();
};
b([
  M()
], u.prototype, "_languages", 2);
u = b([
  w("umb-language-picker-modal")
], u);
const O = u;
export {
  u as UmbLanguagePickerModalElement,
  O as default
};
//# sourceMappingURL=language-picker-modal.element-DtUVBMUU.js.map

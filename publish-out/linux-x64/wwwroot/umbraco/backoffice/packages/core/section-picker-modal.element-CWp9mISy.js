import { html as d, state as b, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbSelectionManager as y } from "@umbraco-cms/backoffice/utils";
import { umbExtensionsRegistry as S } from "@umbraco-cms/backoffice/extension-registry";
import { UmbModalBaseElement as M } from "@umbraco-cms/backoffice/modal";
var $ = Object.defineProperty, k = Object.getOwnPropertyDescriptor, m = (e) => {
  throw TypeError(e);
}, h = (e, t, s, c) => {
  for (var a = c > 1 ? void 0 : c ? k(t, s) : t, n = e.length - 1, r; n >= 0; n--)
    (r = e[n]) && (a = (c ? r(t, s, a) : r(a)) || a);
  return c && a && $(t, s, a), a;
}, _ = (e, t, s) => t.has(e) || m("Cannot " + s), l = (e, t, s) => (_(e, t, "read from private field"), s ? s.call(e) : t.get(e)), p = (e, t, s) => t.has(e) ? m("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), E = (e, t, s) => (_(e, t, "access private method"), s), i, u, v;
let o = class extends M {
  constructor() {
    super(), p(this, u), this._sections = [], this._selectable = !1, p(this, i, new y(this)), l(this, i).setSelectable(!0), this.observe(l(this, i).selectable, (e) => this._selectable = e, null), this.observe(
      S.byType("section"),
      (e) => this._sections = e,
      null
    );
  }
  connectedCallback() {
    super.connectedCallback(), l(this, i).setMultiple(this.data?.multiple ?? !1), l(this, i).setSelection(this.value?.selection ?? []);
  }
  render() {
    return d`
			<umb-body-layout headline="Select sections">
				<uui-box>
					${this._sections.map(
      (e) => d`
							<uui-menu-item
								label=${this.localize.string(e.meta.label)}
								?selectable=${this._selectable}
								?selected=${l(this, i).isSelected(e.alias)}
								@selected=${() => l(this, i).select(e.alias)}
								@deselected=${() => l(this, i).deselect(e.alias)}></uui-menu-item>
						`
    )}
				</uui-box>
				<div slot="actions">
					<uui-button label="Close" @click=${this._rejectModal}></uui-button>
					<uui-button label="Submit" look="primary" color="positive" @click=${E(this, u, v)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakSet();
v = function() {
  this.value = { selection: l(this, i).getSelection() }, this._submitModal();
};
h([
  b()
], o.prototype, "_sections", 2);
h([
  b()
], o.prototype, "_selectable", 2);
o = h([
  f("umb-section-picker-modal")
], o);
const x = o;
export {
  o as UmbSectionPickerModalElement,
  x as default
};
//# sourceMappingURL=section-picker-modal.element-CWp9mISy.js.map

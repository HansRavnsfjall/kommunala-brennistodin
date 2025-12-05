import { html as b, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as v } from "@umbraco-cms/backoffice/modal";
var _ = Object.getOwnPropertyDescriptor, u = (t) => {
  throw TypeError(t);
}, y = (t, e, o, s) => {
  for (var a = s > 1 ? void 0 : s ? _(e, o) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (a = l(a) || a);
  return a;
}, f = (t, e, o) => e.has(t) || u("Cannot " + o), C = (t, e, o) => e.has(t) ? u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), i = (t, e, o) => (f(t, e, "access private method"), o), r, d, m, p;
let c = class extends v {
  constructor() {
    super(...arguments), C(this, r);
  }
  render() {
    return b`<umb-body-layout headline="Clipboard">
			<uui-box>
				<umb-clipboard-entry-picker
					.selection=${this.value?.selection}
					.config=${this.data}
					@selection-change=${i(this, r, d)}></umb-clipboard-entry-picker>
			</uui-box>
			<div slot="actions">
				<uui-button label="Close" @click=${i(this, r, p)}></uui-button>
				<uui-button label="Submit" look="primary" color="positive" @click=${i(this, r, m)}></uui-button>
			</div>
		</umb-body-layout> `;
  }
};
r = /* @__PURE__ */ new WeakSet();
d = function(t) {
  const e = t.target;
  this.updateValue({ selection: e.selection });
};
m = function() {
  this.modalContext?.submit();
};
p = function() {
  this.modalContext?.reject();
};
c = y([
  h("umb-clipboard-entry-picker-modal")
], c);
export {
  c as UmbClipboardEntryPickerModalElement,
  c as element
};
//# sourceMappingURL=clipboard-entry-picker-modal.element-Bq6KxY9S.js.map

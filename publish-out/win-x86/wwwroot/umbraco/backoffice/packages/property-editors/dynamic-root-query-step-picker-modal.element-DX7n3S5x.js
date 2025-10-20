import { repeat as k, ifDefined as u, html as m, state as S, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbDocumentTypePickerInputContext as P } from "@umbraco-cms/backoffice/document-type";
import { UmbId as x } from "@umbraco-cms/backoffice/id";
import { UmbModalBaseElement as D } from "@umbraco-cms/backoffice/modal";
var M = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, y = (e) => {
  throw TypeError(e);
}, f = (e, t, a, o) => {
  for (var i = o > 1 ? void 0 : o ? $(t, a) : t, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (i = (o ? c(t, a, i) : c(i)) || i);
  return o && i && M(t, a, i), i;
}, _ = (e, t, a) => t.has(e) || y("Cannot " + a), d = (e, t, a) => (_(e, t, "read from private field"), a ? a.call(e) : t.get(e)), p = (e, t, a) => t.has(e) ? y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), h = (e, t, a) => (_(e, t, "access private method"), a), s, r, v, b;
let n = class extends D {
  constructor() {
    super(...arguments), p(this, r), this._querySteps = [], p(this, s, new P(this));
  }
  connectedCallback() {
    super.connectedCallback(), this.data && (this._querySteps = this.data.items);
  }
  render() {
    return m`
			<umb-body-layout headline=${this.localize.term("dynamicRoot_pickDynamicRootQueryStepTitle")}>
				<div id="main">
					<uui-box>
						<uui-ref-list>
							${k(
      this._querySteps,
      (e) => e.alias,
      (e) => m`
									<umb-ref-item
										name=${u(e.meta.label)}
										detail=${u(e.meta.description)}
										icon=${u(e.meta.icon)}
										@open=${() => h(this, r, v).call(this, e)}>
									</umb-ref-item>
								`
    )}
						</uui-ref-list>
					</uui-box>
				</div>
				<div slot="actions">
					<uui-button look="default" label=${this.localize.term("general_close")} @click=${h(this, r, b)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
s = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
v = async function(e) {
  await d(this, s).openPicker({
    hideTreeRoot: !0,
    pickableFilter: (a) => a.isElement === !1
  });
  const t = d(this, s).getSelection();
  this.modalContext?.setValue({
    unique: x.new(),
    alias: e.meta.queryStepAlias,
    anyOfDocTypeKeys: t
  }), this.modalContext?.submit();
};
b = function() {
  this.modalContext?.reject();
};
f([
  S()
], n.prototype, "_querySteps", 2);
n = f([
  C("umb-dynamic-root-query-step-picker-modal")
], n);
const T = n;
export {
  n as UmbDynamicRootQueryStepPickerModalModalElement,
  T as default
};
//# sourceMappingURL=dynamic-root-query-step-picker-modal.element-DX7n3S5x.js.map

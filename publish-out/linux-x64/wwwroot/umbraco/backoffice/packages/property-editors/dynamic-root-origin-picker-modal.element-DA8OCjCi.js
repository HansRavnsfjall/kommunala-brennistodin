import { repeat as C, ifDefined as d, html as f, state as P, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbDocumentPickerInputContext as D } from "@umbraco-cms/backoffice/document";
import { UmbModalBaseElement as M } from "@umbraco-cms/backoffice/modal";
var $ = Object.defineProperty, w = Object.getOwnPropertyDescriptor, _ = (t) => {
  throw TypeError(t);
}, v = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? w(e, i) : e, c = t.length - 1, m; c >= 0; c--)
    (m = t[c]) && (a = (s ? m(e, i, a) : m(a)) || a);
  return s && a && $(e, i, a), a;
}, b = (t, e, i) => e.has(t) || _("Cannot " + i), u = (t, e, i) => (b(t, e, "read from private field"), i ? i.call(t) : e.get(t)), p = (t, e, i) => e.has(t) ? _("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), n = (t, e, i) => (b(t, e, "access private method"), i), r, o, g, y, k, h;
let l = class extends M {
  constructor() {
    super(), p(this, o), this._origins = [], p(this, r, new D(this)), u(this, r).max = 1;
  }
  connectedCallback() {
    super.connectedCallback(), this.data && (this._origins = this.data.items);
  }
  render() {
    return f`
			<umb-body-layout headline=${this.localize.term("dynamicRoot_pickDynamicRootOriginTitle")}>
				<div id="main">
					<uui-box>
						<uui-ref-list>
							${C(
      this._origins,
      (t) => t.alias,
      (t) => f`
									<umb-ref-item
										name=${d(t.meta.label)}
										detail=${d(t.meta.description)}
										icon=${d(t.meta.icon)}
										@open=${() => n(this, o, g).call(this, t)}>
									</umb-ref-item>
								`
    )}
						</uui-ref-list>
					</uui-box>
				</div>
				<div slot="actions">
					<uui-button look="default" label=${this.localize.term("general_close")} @click=${n(this, o, y)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
r = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
g = function(t) {
  switch (t.meta.originAlias) {
    // NOTE: Edge-case. Currently this is the only one that uses a document picker,
    // but other custom origins may want other configuration options. [LK:2024-01-25]
    case "ByKey":
      n(this, o, k).call(this, t.meta.originAlias);
      break;
    default:
      n(this, o, h).call(this, { originAlias: t.meta.originAlias });
      break;
  }
};
y = function() {
  this.modalContext?.reject();
};
k = async function(t) {
  await u(this, r).openPicker({
    hideTreeRoot: !0
  });
  const e = u(this, r).getSelection();
  e.length === 1 && n(this, o, h).call(this, {
    originAlias: t,
    originKey: e[0]
  });
};
h = function(t) {
  this.modalContext?.setValue(t), this.modalContext?.submit();
};
v([
  P()
], l.prototype, "_origins", 2);
l = v([
  x("umb-dynamic-root-origin-picker-modal")
], l);
const A = l;
export {
  l as UmbDynamicRootOriginPickerModalModalElement,
  A as default
};
//# sourceMappingURL=dynamic-root-origin-picker-modal.element-DA8OCjCi.js.map

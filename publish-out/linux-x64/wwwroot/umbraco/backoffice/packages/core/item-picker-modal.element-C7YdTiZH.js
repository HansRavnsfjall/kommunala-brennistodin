import { U as _ } from "./modal-base.element-DzLTq939.js";
import { nothing as v, when as x, repeat as g, ifDefined as d, html as l, css as y, state as $, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as w } from "@umbraco-cms/backoffice/style";
import { umbFocus as E } from "@umbraco-cms/backoffice/lit-element";
var P = Object.defineProperty, k = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, h = (t, e, i, o) => {
  for (var a = o > 1 ? void 0 : o ? k(e, i) : e, n = t.length - 1, u; n >= 0; n--)
    (u = t[n]) && (a = (o ? u(e, i, a) : u(a)) || a);
  return o && a && P(e, i, a), a;
}, z = (t, e, i) => e.has(t) || m("Cannot " + i), U = (t, e, i) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), c = (t, e, i) => (z(t, e, "access private method"), i), r, f, p, b;
let s = class extends _ {
  constructor() {
    super(...arguments), U(this, r), this._filtered = [];
  }
  connectedCallback() {
    super.connectedCallback(), this.data && (this._filtered = this.data.items);
  }
  render() {
    if (!this.data) return v;
    const t = this._filtered;
    return l`
			<umb-body-layout headline=${this.localize.string(this.data.headline)}>
				<div id="main">
					<uui-input
						type="search"
						placeholder=${this.localize.term("placeholders_filter")}
						@input=${c(this, r, p)}
						${E()}>
						<div slot="prepend">
							<uui-icon name="search"></uui-icon>
						</div>
					</uui-input>
					${x(
      t.length,
      () => l`
							<uui-box>
								<uui-ref-list>
									${g(
        t,
        (e) => e.value,
        (e) => l`
											<umb-ref-item
												name=${this.localize.string(e.label)}
												detail=${d(e.description)}
												icon=${d(e.icon)}
												@open=${() => c(this, r, b).call(this, e)}>
											</umb-ref-item>
										`
      )}
								</uui-ref-list>
							</uui-box>
						`,
      () => l`<p>There are no items to select.</p>`
    )}
				</div>
				<div slot="actions">
					<uui-button @click=${c(this, r, f)} label="${this.localize.term("general_close")}"></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
r = /* @__PURE__ */ new WeakSet();
f = function() {
  this.modalContext?.reject();
};
p = function(t) {
  if (this.data)
    if (t.target.value) {
      const e = t.target.value.toLowerCase();
      this._filtered = this.data.items.filter(
        (i) => i.label.toLowerCase().includes(e) || i.value.toLowerCase().includes(e)
      );
    } else
      this._filtered = this.data.items;
};
b = function(t) {
  this.modalContext?.setValue(t), this.modalContext?.submit();
};
s.styles = [
  w,
  y`
			#main {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-5);
			}

			uui-box > uui-input {
				width: 100%;
			}

			uui-box > uui-button {
				display: block;
				--uui-button-content-align: flex-start;
			}

			uui-box > uui-button:not(:last-of-type) {
				margin-bottom: var(--uui-size-space-5);
			}

			h4 {
				text-align: left;
				margin: 0.5rem 0;
			}

			p {
				text-align: left;
				margin: 0 0 0.5rem 0;
			}
		`
];
h([
  $()
], s.prototype, "_filtered", 2);
s = h([
  C("umb-item-picker-modal")
], s);
const L = s;
export {
  s as UmbItemPickerModalElement,
  L as default
};
//# sourceMappingURL=item-picker-modal.element-C7YdTiZH.js.map

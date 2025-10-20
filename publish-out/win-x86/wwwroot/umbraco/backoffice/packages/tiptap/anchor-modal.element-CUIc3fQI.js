import { html as c, css as d, customElement as p } from "@umbraco-cms/backoffice/external/lit";
import { umbFocus as h } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as f } from "@umbraco-cms/backoffice/modal";
var b = Object.getOwnPropertyDescriptor, s = (t) => {
  throw TypeError(t);
}, _ = (t, e, a, i) => {
  for (var o = i > 1 ? void 0 : i ? b(e, a) : e, r = t.length - 1, n; r >= 0; r--)
    (n = t[r]) && (o = n(o) || o);
  return o;
}, v = (t, e, a) => e.has(t) || s("Cannot " + a), y = (t, e, a) => e.has(t) ? s("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), g = (t, e, a) => (v(t, e, "access private method"), a), u, m;
let l = class extends f {
  constructor() {
    super(...arguments), y(this, u);
  }
  render() {
    const t = this.localize.term("tiptap_anchor_input");
    return c`
			<uui-dialog-layout>
				<uui-form>
					<form id="form" @submit=${g(this, u, m)}>
						<uui-form-layout-item>
							<uui-label for="name" slot="label" required>${t}</uui-label>
							<uui-input
								type="text"
								required
								id="name"
								name="name"
								label=${t}
								.value=${this.data?.id || ""}
								${h()}></uui-input>
						</uui-form-layout-item>
					</form>
				</uui-form>
				<uui-button
					slot="actions"
					label=${this.localize.term("buttons_confirmActionCancel")}
					@click=${this._rejectModal}></uui-button>
				<uui-button
					type="submit"
					slot="actions"
					form="form"
					color="positive"
					look="primary"
					label=${this.localize.term("general_submit")}></uui-button>
			</uui-dialog-layout>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
m = async function(t) {
  t.preventDefault();
  const e = t.target;
  if (!e || !e.checkValidity()) return;
  const o = new FormData(e).get("name");
  this.value = o, this._submitModal();
};
l.styles = [
  d`
			:host {
				--umb-body-layout-color-background: var(--uui-color-surface);
			}

			uui-dialog-layout {
				width: var(--uui-size-100);
			}

			uui-input {
				width: 100%;
			}
		`
];
l = _([
  p("umb-tiptap-anchor-modal")
], l);
export {
  l as UmbTiptapAnchorModalElement,
  l as element
};
//# sourceMappingURL=anchor-modal.element-CUIc3fQI.js.map

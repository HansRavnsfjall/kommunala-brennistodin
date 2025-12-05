import { UmbModalBaseElement as h } from "@umbraco-cms/backoffice/modal";
import "@umbraco-cms/backoffice/auth";
import { e as b } from "./index-DZ9N36G3.js";
import "@umbraco-cms/backoffice/class-api";
import "@umbraco-cms/backoffice/resources";
import { html as c, when as p, css as _, customElement as f } from "@umbraco-cms/backoffice/external/lit";
var g = Object.defineProperty, y = Object.getOwnPropertyDescriptor, m = (o) => {
  throw TypeError(o);
}, E = (o, r, e, t) => {
  for (var a = t > 1 ? void 0 : t ? y(r, e) : r, l = o.length - 1, d; l >= 0; l--)
    (d = o[l]) && (a = (t ? d(r, e, a) : d(a)) || a);
  return t && a && g(r, e, a), a;
}, $ = (o, r, e) => r.has(o) || m("Cannot " + e), P = (o, r, e) => r.has(o) ? m("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(o) : r.set(o, e), v = (o, r, e) => ($(o, r, "access private method"), e), i, n, u;
let s = class extends h {
  constructor() {
    super(...arguments), P(this, i);
  }
  render() {
    const o = v(this, i, u).call(this, "Error: " + this.data?.error.message, 75);
    return c`<umb-body-layout .headline=${o}>
			<uui-box .headline=${this.localize.term("jumooProcError_headline")}>
				<h2>${this.data?.error.message}</h2>
				<div class="more-box">
					<div class="more">
						<div class="label">
							<umb-localize key="jumooProcError_source"></umb-localize>
						</div>
						<div class="detail">
							${this.data?.error.strategy} / ${this.data?.error.source}
						</div>
					</div>
					<div class="more">
						<div class="label">
							<umb-localize key="jumooProcError_action"></umb-localize>
						</div>
						<div class="detail">${this.data?.error.action}</div>
					</div>
					<div class="more">
						<div class="label"></div>
						<div class="detail">
							${this.data?.error.step}
							${p(this.data?.error.subStep, () => c`(${this.data?.error.subStep})`)}
						</div>
					</div>
					<div class="more">
						<div class="label">
							<umb-localize key="jumooProcError_page"></umb-localize>
						</div>
						<div class="detail">${this.data?.error.page}</div>
					</div>
					<div class="more">
						<div class="label">
							<umb-localize key="jumooProcError_class"></umb-localize>
						</div>
						<div class="detail">${this.data?.error.className}</div>
					</div>
					<div class="more">
						<div class="label">
							<umb-localize key="jumooProcError_method"></umb-localize>
						</div>
						<div class="detail">${this.data?.error.methodName}</div>
					</div>
					<div class="more">
						<div class="label">
							<umb-localize key="jumooProcError_stack"></umb-localize>
						</div>
						<div class="detail fixed">${this.data?.error.stackTrace}</div>
					</div>
				</div>
			</uui-box>

			<div slot="actions">
				<uui-button
					@click=${v(this, i, n)}
					color="default"
					look="default"
					.label=${this.localize.term("general_close")}></uui-button>
			</div>
		</umb-body-layout>`;
  }
};
i = /* @__PURE__ */ new WeakSet();
n = function() {
  this.modalContext?.reject();
};
u = function(o, r, e = "...") {
  if (o.length <= r) return o;
  const t = e.length, a = r - t;
  return o.substring(0, a) + e;
};
s.styles = _`
		.more {
			display: flex;
			gap: 10px;
			margin-bottom: 10px;
		}

		h2 {
			overflow: auto;
			padding: 5px;
			background-color: var(--uui-color-danger);
			color: var(--uui-color-default-contrast);
		}

		.label {
			font-weight: bold;
			min-width: 100px;
			text-align: right;
		}

		.label::after {
			content: ' :';
		}

		.more .fixed {
			overflow: overlay;
			font-family: monospace;
		}
	`;
s = E([
  f(b)
], s);
const S = s;
export {
  s as JumooProcessingErrorModal,
  S as default
};
//# sourceMappingURL=error-modal.element-CHkyhxKe.js.map

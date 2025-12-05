import { UmbOEmbedRepository as M } from "./oembed.repository-BwdXt5k6.js";
import { when as v, html as c, unsafeHTML as x, css as z, state as p, customElement as U } from "@umbraco-cms/backoffice/external/lit";
import { umbFocus as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as P } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as W } from "@umbraco-cms/backoffice/style";
var S = Object.defineProperty, A = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, d = (t, i, e, u) => {
  for (var s = u > 1 ? void 0 : u ? A(i, e) : i, m = t.length - 1, _; m >= 0; m--)
    (_ = t[m]) && (s = (u ? _(i, e, s) : _(s)) || s);
  return u && s && S(i, e, s), s;
}, g = (t, i, e) => i.has(t) || w("Cannot " + e), h = (t, i, e) => (g(t, i, "read from private field"), e ? e.call(t) : i.get(t)), b = (t, i, e) => i.has(t) ? w("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), f = (t, i, e, u) => (g(t, i, "write to private field"), i.set(t, e), e), o = (t, i, e) => (g(t, i, "access private method"), e), y, r, a, n, $, C, E, k;
let l = class extends P {
  constructor() {
    super(...arguments), b(this, a), b(this, y, new M(this)), b(this, r), this._width = 360, this._height = 240, this._url = "";
  }
  connectedCallback() {
    super.connectedCallback(), this.data?.width && (this._width = this.data.width), this.data?.height && (this._height = this.data.height), this.data?.constrain && (this.value = { ...this.value, constrain: this.data.constrain }), this.data?.url && (this._url = this.data.url, o(this, a, n).call(this));
  }
  render() {
    return c`
			<umb-body-layout headline="Embed">
				<uui-box>
					<umb-property-layout label=${this.localize.term("general_url")} orientation="vertical">
						<div slot="editor">
							<uui-input id="url" .value=${this._url} @input=${o(this, a, $)} required="true" ${O()}>
								<uui-button
									slot="append"
									look="primary"
									color="positive"
									@click=${o(this, a, n)}
									label=${this.localize.term("general_retrieve")}></uui-button>
							</uui-input>
						</div>
					</umb-property-layout>

					${v(
      h(this, r) !== void 0,
      () => c` <umb-property-layout label=${this.localize.term("general_preview")} orientation="vertical">
								<div slot="editor">
									${v(this._loading === "waiting", () => c`<uui-loader-circle></uui-loader-circle>`)}
									${v(this.value?.markup, () => c`${x(this.value.markup)}`)}
								</div>
							</umb-property-layout>`
    )}

					<umb-property-layout label=${this.localize.term("general_width")} orientation="vertical">
						<uui-input
							slot="editor"
							.value=${this._width}
							type="number"
							@change=${o(this, a, C)}
							?disabled=${!h(this, r)}></uui-input>
					</umb-property-layout>

					<umb-property-layout label=${this.localize.term("general_height")} orientation="vertical">
						<uui-input
							slot="editor"
							.value=${this._height}
							type="number"
							@change=${o(this, a, E)}
							?disabled=${!h(this, r)}></uui-input>
					</umb-property-layout>

					<umb-property-layout label=${this.localize.term("general_constrainProportions")} orientation="vertical">
						<uui-toggle
							slot="editor"
							@change=${o(this, a, k)}
							.checked=${this.value?.constrain ?? !1}></uui-toggle>
					</umb-property-layout>
				</uui-box>

				<uui-button
					slot="actions"
					id="cancel"
					label=${this.localize.term("buttons_confirmActionCancel")}
					@click=${() => this.modalContext?.reject()}></uui-button>
				<uui-button
					slot="actions"
					id="submit"
					color="positive"
					look="primary"
					label=${this.localize.term("buttons_confirmActionConfirm")}
					@click=${() => this.modalContext?.submit()}></uui-button>
			</umb-body-layout>
		`;
  }
};
y = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
n = async function() {
  this._loading = "waiting";
  const { data: t } = await h(this, y).requestOEmbed({
    url: this._url,
    maxWidth: this._width > 0 ? this._width : void 0,
    maxHeight: this._height > 0 ? this._height : void 0
  });
  t ? (f(this, r, this._url), this.value = { ...this.value, markup: t.markup, url: h(this, r) }, this._loading = "success") : (f(this, r, void 0), this._loading = "failed");
};
$ = function(t) {
  this._url = t.target.value;
};
C = function(t) {
  this._width = parseInt(t.target.value, 10), this.value = { ...this.value, width: this._width }, o(this, a, n).call(this);
};
E = function(t) {
  this._height = parseInt(t.target.value, 10), this.value = { ...this.value, height: this._height }, o(this, a, n).call(this);
};
k = function() {
  const t = !this.value?.constrain;
  this.value = { ...this.value, constrain: t };
};
l.styles = [
  W,
  z`
			uui-input {
				width: 100%;
				--uui-button-border-radius: 0;
			}

			umb-property-layout:first-child {
				padding-top: 0;
			}

			umb-property-layout:last-child {
				padding-bottom: 0;
			}
		`
];
d([
  p()
], l.prototype, "_loading", 2);
d([
  p()
], l.prototype, "_width", 2);
d([
  p()
], l.prototype, "_height", 2);
d([
  p()
], l.prototype, "_url", 2);
l = d([
  U("umb-embedded-media-modal")
], l);
const R = l;
export {
  l as UmbEmbeddedMediaModalElement,
  R as default
};
//# sourceMappingURL=embedded-media-modal.element-BTrK2ntu.js.map

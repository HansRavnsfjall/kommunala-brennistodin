import { U as y } from "./icon-registry.context-token-DEouUoS2.js";
import { css as C, query as $, state as d, customElement as w, html as u, repeat as k, nothing as I } from "@umbraco-cms/backoffice/external/lit";
import { umbracoColors as E, extractUmbColorVariable as M } from "@umbraco-cms/backoffice/resources";
import { umbFocus as z } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as S } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as U } from "@umbraco-cms/backoffice/style";
var F = Object.defineProperty, P = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, c = (e, t, o, n) => {
  for (var r = n > 1 ? void 0 : n ? P(t, o) : t, p = e.length - 1, m; p >= 0; p--)
    (m = e[p]) && (r = (n ? m(t, o, r) : m(r)) || r);
  return n && r && F(t, o, r), r;
}, b = (e, t, o) => t.has(e) || x("Cannot " + o), h = (e, t, o) => (b(e, t, "read from private field"), o ? o.call(e) : t.get(e)), f = (e, t, o) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), O = (e, t, o, n) => (b(e, t, "write to private field"), t.set(e, o), o), l = (e, t, o) => (b(e, t, "access private method"), o), s, a, _, v, g;
let i = class extends S {
  constructor() {
    super(), f(this, a), f(this, s), this._colorList = E.filter((e) => !e.legacy), this._currentColor = "text", this.consumeContext(y, (e) => {
      this.observe(e?.approvedIcons, (t) => {
        O(this, s, t), l(this, a, _).call(this);
      });
    });
  }
  connectedCallback() {
    super.connectedCallback(), this._iconsFiltered = h(this, s), this.modalContext && this.observe(
      this.modalContext?.value,
      (e) => {
        this._currentIcon = e?.icon, this._currentColor = e?.color ?? "text";
      },
      "_observeModalContextValue"
    );
  }
  render() {
    return u`
			<umb-body-layout headline="Select Icon">
				<div id="container">
					${this.renderSearch()}
					<hr />
					<uui-color-swatches
						.value=${this._currentColor}
						label="Color switcher for icons"
						@change=${l(this, a, g)}>
						${// TODO: Missing localization for the color aliases. [NL]
    this._colorList.map(
      (e) => u`
									<uui-color-swatch
										label=${e.alias}
										title=${e.alias}
										value=${e.alias}
										style="--uui-swatch-color: var(${e.varName})">
									</uui-color-swatch>
								`
    )}
					</uui-color-swatches>
					<hr />
					<uui-scroll-container id="icons">${this.renderIcons()}</uui-scroll-container>
				</div>
				<uui-button
					slot="actions"
					label=${this.localize.term("general_close")}
					@click=${this._rejectModal}></uui-button>
				<uui-button
					slot="actions"
					color="positive"
					look="primary"
					@click=${this._submitModal}
					label=${this.localize.term("general_submit")}></uui-button>
			</umb-body-layout>
		`;
  }
  renderSearch() {
    return u`
			<uui-input
				type="search"
				placeholder=${this.localize.term("placeholders_filter")}
				label=${this.localize.term("placeholders_filter")}
				id="search"
				@keyup=${l(this, a, _)}
				${z()}>
				<uui-icon name="search" slot="prepend" id="search_icon"></uui-icon>
			</uui-input>
		`;
  }
  renderIcons() {
    return this._iconsFiltered ? k(
      this._iconsFiltered,
      (e) => e.name,
      (e) => u`
						<uui-button
							label=${e.name}
							title=${e.name}
							class=${e.name === this._currentIcon ? "selected" : ""}
							@click=${(t) => l(this, a, v).call(this, t, e.name)}
							@keyup=${(t) => l(this, a, v).call(this, t, e.name)}>
							<uui-icon
								style="--uui-icon-color: var(${M(this._currentColor)})"
								name=${e.name}></uui-icon>
						</uui-button>
					`
    ) : I;
  }
};
s = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
_ = function() {
  if (!h(this, s)) return;
  const e = this._searchInput?.value;
  e ? this._iconsFiltered = h(this, s).filter((t) => t.name.toLowerCase().includes(e.toLowerCase())) : this._iconsFiltered = h(this, s);
};
v = function(e, t) {
  (e.type == "click" || e.type == "keyup" && e.key == "Enter") && this.modalContext?.updateValue({ icon: t });
};
g = function(e) {
  const t = e.target.value;
  this.modalContext?.updateValue({ color: t }), this._currentColor = t;
};
i.styles = [
  U,
  C`
			:host {
				position: relative;
			}

			#container {
				display: flex;
				flex-direction: column;
				height: 100%;
				background-color: var(--uui-color-surface);
				box-shadow: var(--uui-shadow-depth-1, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24));
				border-radius: var(--uui-border-radius);
				padding: var(--uui-size-space-5);
				box-sizing: border-box;
			}
			#container hr {
				height: 1px;
				border: none;
				background-color: var(--uui-color-divider);
				margin: 20px 0;
			}

			#search {
				width: 100%;
				align-items: center;
			}
			#search_icon {
				padding-left: var(--uui-size-space-2);
			}

			#icons {
				line-height: 0;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(40px, calc((100% / 12) - 10px)));
				gap: 10px;
				overflow-y: scroll;
				max-height: 100%;
				min-height: 0;
				padding: 2px;
			}

			#icons uui-button {
				border-radius: var(--uui-border-radius);
				font-size: 16px; /* specific for icons */
			}
			#icons uui-button:focus,
			#icons uui-button:hover,
			#icons uui-button.selected {
				outline: 2px solid var(--uui-color-selected);
			}

			uui-button[slot='actions'] {
				margin-left: var(--uui-size-space-4);
			}

			uui-color-swatches {
				margin: 0;
			}
		`
];
c([
  $("#search")
], i.prototype, "_searchInput", 2);
c([
  d()
], i.prototype, "_iconsFiltered", 2);
c([
  d()
], i.prototype, "_colorList", 2);
c([
  d()
], i.prototype, "_currentIcon", 2);
c([
  d()
], i.prototype, "_currentColor", 2);
i = c([
  w("umb-icon-picker-modal")
], i);
const B = i;
export {
  i as UmbIconPickerModalElement,
  B as default
};
//# sourceMappingURL=icon-picker-modal.element-D2NHsvG3.js.map

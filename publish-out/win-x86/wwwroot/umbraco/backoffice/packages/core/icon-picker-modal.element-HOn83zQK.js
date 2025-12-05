import { U as k } from "./icon-registry.context-token-DEouUoS2.js";
import { css as C, query as I, state as b, customElement as z, ifDefined as y, nothing as $, html as n, repeat as E } from "@umbraco-cms/backoffice/external/lit";
import { umbracoColors as S, extractUmbColorVariable as M } from "@umbraco-cms/backoffice/resources";
import { umbFocus as O } from "@umbraco-cms/backoffice/lit-element";
import { UmbModalBaseElement as U } from "@umbraco-cms/backoffice/modal";
import { UmbTextStyles as P } from "@umbraco-cms/backoffice/style";
var F = Object.defineProperty, L = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, h = (e, t, i, a) => {
  for (var r = a > 1 ? void 0 : a ? L(t, i) : t, p = e.length - 1, m; p >= 0; p--)
    (m = e[p]) && (r = (a ? m(t, i, r) : m(r)) || r);
  return a && r && F(t, i, r), r;
}, g = (e, t, i) => t.has(e) || x("Cannot " + i), u = (e, t, i) => (g(e, t, "read from private field"), i ? i.call(e) : t.get(e)), _ = (e, t, i) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), T = (e, t, i, a) => (g(e, t, "write to private field"), t.set(e, i), i), c = (e, t, i) => (g(e, t, "access private method"), i), l, s, v, f, w, d;
let o = class extends U {
  constructor() {
    super(), _(this, s), _(this, l), this._colorList = S.filter((e) => !e.legacy), this._isSearching = !1, _(this, d, () => {
      this.modalContext?.updateValue({ icon: "" });
    }), this.consumeContext(k, (e) => {
      this.observe(e?.approvedIcons, (t) => {
        T(this, l, t), c(this, s, v).call(this);
      });
    });
  }
  render() {
    return n`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectIcon")}>
				<div id="container">
					${this.renderSearch()}
					<hr />
					<uui-color-swatches
						value=${y(this.value.color)}
						label=${this.localize.term("defaultdialogs_colorSwitcher")}
						@change=${c(this, s, w)}>
						${// TODO: Missing localization for the color aliases. [NL]
    this._colorList.map(
      (e) => n`
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
					<uui-scroll-container id="icons">
						${this.data?.showEmptyOption && !this._isSearching ? n`
									<uui-button
										class=${this.value.icon ? "" : "selected"}
										label=${this.localize.term("defaultdialogs_noIcon")}
										title=${this.localize.term("defaultdialogs_noIcon")}
										@click=${u(this, d)}
										@keyup=${(e) => {
      (e.key === "Enter" || e.key === " ") && u(this, d).call(this);
    }}>
										<uui-icon style="opacity:.35" name=${y(this.data?.placeholder)}></uui-icon>
									</uui-button>
								` : $}
						${this.renderIcons()}</uui-scroll-container
					>
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
    return n`
			<uui-input
				type="search"
				placeholder=${this.localize.term("placeholders_filter")}
				label=${this.localize.term("placeholders_filter")}
				id="search"
				@keyup=${c(this, s, v)}
				${O()}>
				<uui-icon name="search" slot="prepend" id="search_icon"></uui-icon>
			</uui-input>
		`;
  }
  renderIcons() {
    return this._iconsFiltered ? E(
      this._iconsFiltered,
      (e) => e.name,
      (e) => n`
						<uui-button
							label=${e.name}
							title=${e.name}
							class=${e.name === this.value.icon ? "selected" : ""}
							@click=${(t) => c(this, s, f).call(this, t, e.name)}
							@keyup=${(t) => c(this, s, f).call(this, t, e.name)}>
							<uui-icon
								style="--uui-icon-color: var(${M(this.value.color ?? "text")})"
								name=${e.name}></uui-icon>
						</uui-button>
					`
    ) : $;
  }
};
l = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
v = function() {
  if (!u(this, l)) return;
  const e = this._searchInput?.value;
  e ? (this._isSearching = e.length > 0, this._iconsFiltered = u(this, l).filter((t) => t.name.toLowerCase().includes(e.toLowerCase()))) : (this._isSearching = !1, this._iconsFiltered = u(this, l));
};
f = function(e, t) {
  if (e.type === "click" || e.type === "keyup" && e.key === "Enter")
    if (this.data?.showEmptyOption) {
      const a = this.value.icon === t ? "" : t;
      this.modalContext?.updateValue({ icon: a });
    } else
      this.modalContext?.updateValue({ icon: t });
};
w = function(e) {
  const t = e.target.value;
  this.modalContext?.updateValue({ color: t });
};
d = /* @__PURE__ */ new WeakMap();
o.styles = [
  P,
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
				grid-auto-rows: min-content;
				gap: 10px;
				height: 100%;
				align-items: flex-start;
				overflow-y: scroll;
				max-height: 100%;
				min-height: 0;
				padding: 2px;
			}

			#icons uui-button {
				border-radius: var(--uui-border-radius);
				font-size: 16px; /* specific for icons */
			}
			#icons uui-button:focus-visible,
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
h([
  I("#search")
], o.prototype, "_searchInput", 2);
h([
  b()
], o.prototype, "_iconsFiltered", 2);
h([
  b()
], o.prototype, "_colorList", 2);
h([
  b()
], o.prototype, "_isSearching", 2);
o = h([
  z("umb-icon-picker-modal")
], o);
const R = o;
export {
  o as UmbIconPickerModalElement,
  R as default
};
//# sourceMappingURL=icon-picker-modal.element-HOn83zQK.js.map

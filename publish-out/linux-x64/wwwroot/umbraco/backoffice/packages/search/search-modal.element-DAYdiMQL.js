import { css as P, property as A, customElement as F, nothing as T, when as g, html as n, repeat as D, query as M, state as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbExtensionsManifestInitializer as V, createExtensionApi as X } from "@umbraco-cms/backoffice/extension-api";
import { umbExtensionsRegistry as Y, createExtensionApiByAlias as Z } from "@umbraco-cms/backoffice/extension-registry";
import { UmbLitElement as G } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as ee } from "@umbraco-cms/backoffice/style";
var te = Object.defineProperty, re = Object.getOwnPropertyDescriptor, I = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? re(t, r) : t, u = e.length - 1, h; u >= 0; u--)
    (h = e[u]) && (i = (o ? h(t, r, i) : h(i)) || i);
  return o && i && te(t, r, i), i;
};
let y = class extends G {
  render() {
    return this.item ? n`
			${g(
      this.item.icon,
      (e) => n`<umb-icon name=${e}></umb-icon>`,
      () => n`<uui-icon name="icon-shape-hexagon"></uui-icon>`
    )}
			<span>${this.item.name}</span>
			<div class="extra"></div>
		` : T;
  }
};
y.styles = [
  P`
			:host {
				border-radius: var(--uui-border-radius);
				outline-offset: -3px;
				padding: var(--uui-size-space-3) var(--uui-size-space-5);

				display: flex;
				gap: var(--uui-size-space-3);
				align-items: center;

				width: 100%;

				> span {
					flex: 1;
				}
			}
		`
];
I([
  A({ type: Object })
], y.prototype, "item", 2);
y = I([
  F("umb-search-result-item")
], y);
var ie = Object.defineProperty, se = Object.getOwnPropertyDescriptor, L = (e) => {
  throw TypeError(e);
}, p = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? se(t, r) : t, u = e.length - 1, h; u >= 0; u--)
    (h = e[u]) && (i = (o ? h(t, r, i) : h(i)) || i);
  return o && i && ie(t, r, i), i;
}, z = (e, t, r) => t.has(e) || L("Cannot " + r), d = (e, t, r) => (z(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, o) => (z(e, t, "write to private field"), t.set(e, r), r), a = (e, t, r) => (z(e, t, "access private method"), r), f, x, R, b, s, O, S, w, k, U, q, $, W, E, j, N, K, B, H;
let c = class extends G {
  constructor() {
    super(), m(this, s), this._search = "", this._searchResults = [], this._globalSearchers = [], this._loading = !1, m(this, f, 0), m(this, x), m(this, R, 300), m(this, b, (e) => {
      e.composedPath().includes(this) || this.modalContext?.reject();
    }), a(this, s, O).call(this);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("keydown", a(this, s, E)), document.addEventListener("click", d(this, b)), requestAnimationFrame(() => {
      a(this, s, w).call(this);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("keydown", a(this, s, E)), document.removeEventListener("click", d(this, b));
  }
  render() {
    return n`
			<div id="top">
				<div id="search-icon">
					${g(
      this._loading,
      () => n`<uui-loader-circle></uui-loader-circle>`,
      () => n`<uui-icon name="search"></uui-icon>`
    )}
				</div>
				<div id="input-wrapper">
					<div id="input-wrapper-fake-cursor" aria-hidden="true"></div>
					<input
						type="text"
						autocomplete="off"
						placeholder=${this.localize.term("placeholders_search")}
						value=${this._search}
						@input=${a(this, s, W)}
						@blur=${() => a(this, s, k).call(this, !0)}
						@focus=${() => a(this, s, k).call(this, !1)} />
				</div>
			</div>
			${a(this, s, j).call(this)}
			${g(
      this._search,
      () => n`
					<uui-scroll-container>
						<div id="main">
							${g(
        this._searchResults.length > 0,
        () => a(this, s, N).call(this),
        () => a(this, s, B).call(this)
      )}
						</div>
					</uui-scroll-container>
				`,
      () => a(this, s, H).call(this)
    )}
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
x = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
O = function() {
  new V(this, Y, "globalSearch", null, async (e) => {
    const t = [];
    for (const r of e) {
      let o;
      if (r.manifest.api ? (o = await X(this, r.manifest), o && (o.manifest = r.manifest)) : o = await Z(
        this,
        r.manifest.meta?.searchProviderAlias
      ), o) {
        const i = {
          name: r.manifest.meta?.label || r.manifest.name,
          api: o,
          alias: r.alias
        };
        t.push(i);
      }
    }
    this._globalSearchers = t, this._globalSearchers.length > 0 && (this._currentGlobalSearcher = this._globalSearchers[0]);
  });
};
S = async function(e) {
  this.shadowRoot?.querySelector(
    `a[data-item-index="${d(this, f)}"]`
  )?.classList.remove("active"), C(this, f, e);
  const r = this.shadowRoot?.querySelector(`a[data-item-index="${e}"]`);
  r?.classList.add("active"), r && this._searchResults.length && r.focus();
};
w = function() {
  this._input.focus();
};
k = async function(e) {
  if (e) {
    await new Promise((r) => requestAnimationFrame(r));
    const t = this._search.substring(0, this._input.selectionStart ?? 0);
    this._inputFakeCursor.textContent = t, this._inputFakeCursor.style.display = "block";
  } else
    this._inputFakeCursor.style.display = "none";
};
U = function(e) {
  this._currentGlobalSearcher !== e && (this._currentGlobalSearcher = e, a(this, s, w).call(this), this._loading = !0, this._searchResults = [], a(this, s, q).call(this));
};
q = async function() {
  if (this._search && this._currentGlobalSearcher?.api) {
    const { data: e } = await this._currentGlobalSearcher.api.search({ query: this._search });
    if (!e) return;
    this._searchResults = e.items;
  } else
    this._searchResults = [];
  this._loading = !1, C(this, f, -1);
};
$ = function(e) {
  e instanceof KeyboardEvent && e.key !== "Enter" || requestAnimationFrame(() => {
    this.modalContext?.reject();
  });
};
W = function(e) {
  const t = e.target;
  if (this._search = t.value.trim(), clearTimeout(d(this, x)), !this._search) {
    this._loading = !1, this._searchResults = [];
    return;
  }
  this._loading = !0, C(this, x, setTimeout(() => a(this, s, q).call(this), d(this, R)));
};
E = function(e) {
  const t = this.shadowRoot;
  if (t) {
    if (e.key === "Tab") {
      const r = (l) => l === t.querySelector(".search-provider:first-child"), o = (l) => l === t.querySelector(".search-provider:last-child"), i = (l) => l?.focus(), u = () => {
        const l = t.querySelectorAll(".search-provider") || [];
        return Array.from(l).some((Q) => Q === t.activeElement);
      }, h = () => {
        const l = t.querySelectorAll(".search-provider") || [];
        return l[l.length - 1] === t.activeElement;
      }, J = () => (t.querySelectorAll(".search-provider") || [])[0] === t.activeElement, v = t.querySelector(".search-provider.active");
      if (!v) return;
      if (e.shiftKey) {
        if (u()) {
          J() && (i(t.querySelector(".search-provider:last-child")), e.preventDefault());
          return;
        }
        if (r(v)) {
          i(t.querySelector(".search-provider:last-child")), e.preventDefault();
          return;
        }
        i(v);
      } else {
        if (u()) {
          h() && (i(t.querySelector(".search-provider:first-child")), e.preventDefault());
          return;
        }
        if (o(v)) {
          i(t.querySelector(".search-provider:first-child")), e.preventDefault();
          return;
        }
        i(v);
      }
    }
    switch (e.key) {
      case "Tab":
      case "Shift":
      case "Escape":
      case "Enter":
        break;
      case "ArrowDown":
        e.preventDefault(), a(this, s, S).call(this, Math.min(d(this, f) + 1, this._searchResults.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault(), a(this, s, S).call(this, Math.max(d(this, f) - 1, 0));
        break;
      default:
        if (this._input === t.activeElement) return;
        a(this, s, w).call(this);
        break;
    }
  }
};
j = function() {
  return n`
			<div id="search-providers">
				${D(
    this._globalSearchers,
    (e) => e.alias,
    (e) => n`
						<button
							class="search-provider ${this._currentGlobalSearcher?.alias === e.alias ? "active" : ""}"
							data-provider-alias=${e.alias}
							@click=${() => a(this, s, U).call(this, e)}
							@keydown=${() => ""}>
							${e.name}
						</button>
					`
  )}
			</div>
		`;
};
N = function() {
  return D(
    this._searchResults,
    (e) => e.unique,
    (e, t) => a(this, s, K).call(this, e, t)
  );
};
K = function(e, t) {
  return n`
			<a
				class="search-item"
				data-item-index=${t}
				href=${e.href}
				@click=${a(this, s, $)}
				@keydown=${a(this, s, $)}>
				<umb-extension-slot
					type="searchResultItem"
					.props=${{ item: e }}
					.filter=${(r) => r.forEntityTypes.includes(e.entityType)}
					default-element="umb-search-result-item"></umb-extension-slot>
			</a>
		`;
};
B = function() {
  return this._loading ? T : n`<div id="no-results">${this.localize.term("general_searchNoResult")}</div>`;
};
H = function() {
  return n`<div id="navigation-tips">
			<div class="navigation-tips-key" style="grid-column: span 2;">Tab</div>
			<span>${this.localize.term("globalSearch_navigateSearchProviders")}</span>
			<div class="navigation-tips-key">
				<uui-icon name="icon-arrow-up"></uui-icon>
			</div>
			<div class="navigation-tips-key">
				<uui-icon name="icon-arrow-down"></uui-icon>
			</div>
			<span>${this.localize.term("globalSearch_navigateSearchResults")}</span>
		</div>`;
};
c.styles = [
  ee,
  P`
			:host {
				display: flex;
				flex-direction: column;
				width: min(610px, 100vw);
				height: max(600px, 80dvh);
				max-height: 100dvh;
				background-color: var(--uui-color-surface);
				box-sizing: border-box;
				color: var(--uui-color-text);
				padding-bottom: var(--uui-size-space-2);
			}

			#navigation-tips {
				display: grid;
				grid-template-columns: 50px 50px auto;
				column-gap: var(--uui-size-space-3);
				row-gap: var(--uui-size-space-4);
				align-items: center;
				color: var(--uui-color-border-emphasis);
				margin-top: var(--uui-size-layout-3);
				margin-inline: auto;
			}

			.navigation-tips-key {
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: var(--uui-border-radius);
				border: 1px solid var(--uui-color-border);
				height: 36px;
				font-size: 0.9rem;
				font-weight: bold;
			}

			#navigation-tips .navigation-tips-key + span {
				margin-left: var(--uui-size-space-2);
			}

			#top {
				background-color: var(--uui-color-surface);
				display: flex;
				height: 48px;
				flex-shrink: 0;
			}

			#main {
				display: flex;
				flex-direction: column;
				height: 100%;
			}

			#search-providers {
				display: flex;
				flex-wrap: wrap;
				gap: var(--uui-size-space-2);
				padding: 0 var(--uui-size-space-5);
				padding-bottom: var(--uui-size-space-2);
			}

			.search-provider {
				padding: var(--uui-size-space-3) var(--uui-size-space-4);
				background: var(--uui-color-surface-alt);
				line-height: 1;
				white-space: nowrap;
				border-radius: var(--uui-border-radius);
				color: var(--uui-color-interactive);
				cursor: pointer;
				border: 2px solid transparent;
			}

			.search-provider:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
			}

			.search-provider.active {
				background: var(--uui-color-focus);
				color: var(--uui-color-selected-contrast);
				border-color: transparent;
			}

			.search-provider.active:focus {
				outline-offset: -4px;
				outline-color: var(--uui-color-focus);
			}

			input {
				all: unset;
				height: 100%;
				width: 100%;
			}

			#input-wrapper {
				width: 100%;
				position: relative;
			}

			#input-wrapper-fake-cursor {
				position: absolute;
				left: 0;
				border-right: 1px solid var(--uui-color-text);
				height: 1.2rem;
				color: transparent;
				user-select: none;
				pointer-events: none;
				bottom: 14px;
				animation: blink-animation 1s infinite;
			}

			@keyframes blink-animation {
				0%,
				50% {
					border-color: var(--uui-color-text);
				}
				51%,
				100% {
					border-color: transparent;
				}
			}

			button {
				font-family: unset;
				font-size: unset;
				cursor: pointer;
			}

			#search-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				aspect-ratio: 1;
				height: 100%;
			}

			#no-results {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100%;
				width: 100%;
				margin-top: var(--uui-size-space-5);
				color: var(--uui-color-text-alt);
				margin: var(--uui-size-space-5) 0;
			}

			.search-item {
				color: var(--uui-color-text);
				text-decoration: none;
				outline-offset: -3px;
				display: flex;
			}

			.search-item:hover {
				background: var(--uui-color-surface-emphasis);
				color: var(--uui-color-interactive-emphasis);
			}

			.search-item:focus {
				outline: 2px solid var(--uui-color-interactive-emphasis);
				border-radius: 6px;
				outline-offset: -4px;
			}

			.search-item.active:not(:focus-within) {
				outline: 2px solid var(--uui-color-border);
				border-radius: 6px;
				outline-offset: -4px;
			}
		`
];
p([
  M("#input-wrapper-fake-cursor")
], c.prototype, "_inputFakeCursor", 2);
p([
  M("input")
], c.prototype, "_input", 2);
p([
  A({ attribute: !1 })
], c.prototype, "modalContext", 2);
p([
  _()
], c.prototype, "_search", 2);
p([
  _()
], c.prototype, "_searchResults", 2);
p([
  _()
], c.prototype, "_globalSearchers", 2);
p([
  _()
], c.prototype, "_currentGlobalSearcher", 2);
p([
  _()
], c.prototype, "_loading", 2);
c = p([
  F("umb-search-modal")
], c);
const ue = c;
export {
  c as UmbSearchModalElement,
  ue as default
};
//# sourceMappingURL=search-modal.element-DAYdiMQL.js.map

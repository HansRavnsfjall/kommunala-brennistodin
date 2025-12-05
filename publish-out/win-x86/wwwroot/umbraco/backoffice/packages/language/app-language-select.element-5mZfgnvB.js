import { UmbLanguageCollectionRepository as z } from "./language-collection.repository-GzJNHJc2.js";
import { d as B } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { html as h, nothing as _, repeat as I, css as N, query as D, state as c, customElement as G } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as X } from "@umbraco-cms/backoffice/lit-element";
import { UMB_CURRENT_USER_CONTEXT as F } from "@umbraco-cms/backoffice/current-user";
var H = Object.defineProperty, K = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, u = (e, t, n, g) => {
  for (var r = g > 1 ? void 0 : g ? K(t, n) : t, m = e.length - 1, y; m >= 0; m--)
    (y = e[m]) && (r = (g ? y(t, n, r) : y(r)) || r);
  return g && r && H(t, n, r), r;
}, w = (e, t, n) => t.has(e) || $("Cannot " + n), s = (e, t, n) => (w(e, t, "read from private field"), t.get(e)), p = (e, t, n) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), b = (e, t, n, g) => (w(e, t, "write to private field"), t.set(e, n), n), o = (e, t, n) => (w(e, t, "access private method"), n), L, l, O, d, f, a, v, k, A, C, R, T, x, U, P, q, S, M, W, E;
let i = class extends X {
  constructor() {
    super(), p(this, a), this._languages = [], this._appLanguageIsReadOnly = !1, this._isOpen = !1, this._disallowedLanguages = [], p(this, L, new z(this)), p(this, l), p(this, O), p(this, d), p(this, f), p(this, x, (e) => {
      (e.key === "ArrowDown" || e.key === "ArrowUp") && this._popoverElement?.showPopover(), e.key === " " && this._popoverElement?.togglePopover();
    }), this.consumeContext(B, (e) => {
      b(this, l, e), o(this, a, k).call(this);
    }), this.consumeContext(F, (e) => {
      this.observe(e?.languages, (t) => {
        b(this, d, t), o(this, a, v).call(this);
      }), this.observe(e?.hasAccessToAllLanguages, (t) => {
        b(this, f, t), o(this, a, v).call(this);
      });
    });
  }
  render() {
    return h`${o(this, a, q).call(this)} ${o(this, a, S).call(this)}`;
  }
};
L = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
f = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
v = function() {
  this._disallowedLanguages = this._languages?.filter((e) => s(this, f) ? !1 : !s(this, d)?.includes(e.unique));
};
k = async function() {
  s(this, l) && (this.observe(s(this, l).appLanguage, (e) => {
    this._appLanguage = e;
  }), this.observe(s(this, l).appLanguageReadOnlyState.isReadOnly, (e) => {
    this._appLanguageIsReadOnly = e;
  }));
};
A = async function() {
  const { data: e } = await s(this, L).requestCollection({});
  e && (this._languages = e.items, o(this, a, v).call(this));
};
C = function(e) {
  if (e.newState === "open" && !s(this, O)) {
    if (this._popoverElement) {
      const t = this.getBoundingClientRect();
      this._popoverElement.style.width = `${t.width}px`;
    }
    o(this, a, A).call(this);
  }
};
R = function(e) {
  this._isOpen = e.newState === "open";
};
T = function() {
  this._isOpen ? this._popoverElement?.hidePopover() : this._popoverElement?.showPopover(), this.requestUpdate();
};
x = /* @__PURE__ */ new WeakMap();
U = function(e) {
  s(this, l)?.setLanguage(e), this._popoverElement?.hidePopover();
};
P = function(e) {
  if (!this._isOpen) return;
  const n = e.target?.value;
  n && o(this, a, U).call(this, n);
};
q = function() {
  return h` <div
			id="toggle"
			data-mark="action:open"
			popovertarget="dropdown-popover"
			tabindex="0"
			@click=${o(this, a, T)}
			@keydown=${s(this, x)}>
			<span>
				${this._appLanguage?.name}
				${this._appLanguageIsReadOnly ? o(this, a, E).call(this, this._appLanguage?.unique) : _}
			</span>
			<uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
		</div>`;
};
S = function() {
  return h` <uui-popover-container
			id="dropdown-popover"
			data-mark="app-language-menu"
			@beforetoggle=${o(this, a, C)}
			@toggle=${o(this, a, R)}>
			<umb-popover-layout>
				<uui-scroll-container style="max-height:calc(100vh - (var(--umb-header-layout-height) + 60px));">
					${o(this, a, M).call(this)}
				</uui-scroll-container>
			</umb-popover-layout>
		</uui-popover-container>`;
};
M = function() {
  return this._isOpen ? h`<uui-combobox-list
			aria-label="App language"
			.for=${this}
			.value=${this._appLanguage?.unique || ""}
			@change=${o(this, a, P)}>
			${I(
    this._languages,
    (e) => e.unique,
    (e) => h`
					<uui-combobox-list-option tabindex="0" value=${e.unique}>
						${e.name}
						${o(this, a, W).call(this, e.unique) ? o(this, a, E).call(this, e.unique) : _}
					</uui-combobox-list-option>
				`
  )}
		</uui-combobox-list>` : _;
};
W = function(e) {
  return e ? !!this._disallowedLanguages.find((t) => t.unique === e) : !1;
};
E = function(e) {
  return e ? h`<uui-tag slot="badge" look="secondary">${this.localize.term("general_readOnly")}</uui-tag>` : _;
};
i.styles = [
  N`
			:host {
				display: block;
				position: relative;
				z-index: 10;
			}

			#toggle {
				color: var(--uui-color-text);
				text-align: left;
				background: none;
				border: none;
				height: var(--umb-header-layout-height);
				padding: 0 var(--uui-size-8);
				border-bottom: 1px solid var(--uui-color-border);
				font-size: 14px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				cursor: pointer;
				font-family: inherit;
			}

			#toggle:hover {
				background-color: var(--uui-color-surface-emphasis);
			}

			uui-menu-item {
				color: var(--uui-color-text);

				width: auto;
			}
		`
];
u([
  D("#dropdown-popover")
], i.prototype, "_popoverElement", 2);
u([
  c()
], i.prototype, "_languages", 2);
u([
  c()
], i.prototype, "_appLanguage", 2);
u([
  c()
], i.prototype, "_appLanguageIsReadOnly", 2);
u([
  c()
], i.prototype, "_isOpen", 2);
u([
  c()
], i.prototype, "_disallowedLanguages", 2);
i = u([
  G("umb-app-language-select")
], i);
const j = i;
export {
  i as UmbAppLanguageSelectElement,
  j as default
};
//# sourceMappingURL=app-language-select.element-5mZfgnvB.js.map

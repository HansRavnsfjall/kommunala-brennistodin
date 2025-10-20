import { UmbLanguageCollectionRepository as U } from "./language-collection.repository-GzJNHJc2.js";
import { d as S } from "./language-access.workspace.context-token-Bqcpkg-3.js";
import { html as g, nothing as L, repeat as M, ifDefined as P, css as W, query as z, state as c, customElement as I } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UMB_CURRENT_USER_CONTEXT as B } from "@umbraco-cms/backoffice/current-user";
var D = Object.defineProperty, G = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, p = (e, t, n, h) => {
  for (var r = h > 1 ? void 0 : h ? G(t, n) : t, v = e.length - 1, m; v >= 0; v--)
    (m = e[v]) && (r = (h ? m(t, n, r) : m(r)) || r);
  return h && r && D(t, n, r), r;
}, b = (e, t, n) => t.has(e) || E("Cannot " + n), o = (e, t, n) => (b(e, t, "read from private field"), t.get(e)), l = (e, t, n) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), y = (e, t, n, h) => (b(e, t, "write to private field"), t.set(e, n), n), i = (e, t, n) => (b(e, t, "access private method"), n), w, u, O, d, _, a, f, $, A, C, R, k, q, T, x;
let s = class extends N {
  constructor() {
    super(), l(this, a), this._languages = [], this._appLanguageIsReadOnly = !1, this._isOpen = !1, l(this, w, new U(this)), l(this, u), l(this, O), l(this, d), l(this, _), this._disallowedLanguages = [], this.consumeContext(S, (e) => {
      y(this, u, e), i(this, a, $).call(this);
    }), this.consumeContext(B, (e) => {
      this.observe(e?.languages, (t) => {
        y(this, d, t), i(this, a, f).call(this);
      }), this.observe(e?.hasAccessToAllLanguages, (t) => {
        y(this, _, t), i(this, a, f).call(this);
      });
    });
  }
  render() {
    return g`${i(this, a, k).call(this)} ${i(this, a, q).call(this)}`;
  }
};
w = /* @__PURE__ */ new WeakMap();
u = /* @__PURE__ */ new WeakMap();
O = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
a = /* @__PURE__ */ new WeakSet();
f = function() {
  this._disallowedLanguages = this._languages?.filter((e) => o(this, _) ? !1 : !o(this, d)?.includes(e.unique));
};
$ = async function() {
  o(this, u) && (this.observe(o(this, u).appLanguage, (e) => {
    this._appLanguage = e;
  }), this.observe(o(this, u).appLanguageReadOnlyState.isReadOnly, (e) => {
    this._appLanguageIsReadOnly = e;
  }));
};
A = async function() {
  const { data: e } = await o(this, w).requestCollection({});
  e && (this._languages = e.items, i(this, a, f).call(this));
};
C = function(e) {
  if (this._isOpen = e.newState === "open", this._isOpen && !o(this, O)) {
    if (this._popoverElement) {
      const t = this.getBoundingClientRect();
      this._popoverElement.style.width = `${t.width}px`;
    }
    i(this, a, A).call(this);
  }
};
R = function(e) {
  o(this, u)?.setLanguage(e), this._isOpen = !1, this._popoverElement?.hidePopover();
};
k = function() {
  return g`<button id="toggle" data-mark="action:open" popovertarget="dropdown-popover">
			<span
				>${this._appLanguage?.name}
				${this._appLanguageIsReadOnly ? i(this, a, x).call(this, this._appLanguage?.unique) : L}</span
			>
			<uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
		</button>`;
};
q = function() {
  return g` <uui-popover-container
			id="dropdown-popover"
			data-mark="app-language-menu"
			@beforetoggle=${i(this, a, C)}>
						<umb-popover-layout>
			<uui-scroll-container style="max-height:calc(100vh - (var(--umb-header-layout-height) + 60px));">
				${M(
    this._languages,
    (e) => e.unique,
    (e) => g`
						<uui-menu-item
							label=${P(e.name)}
							data-mark="${e.entityType}:${e.unique}"
							?active=${e.unique === this._appLanguage?.unique}
							@click-label=${() => i(this, a, R).call(this, e.unique)}>
							${i(this, a, T).call(this, e.unique) ? i(this, a, x).call(this, e.unique) : L}
						</uui-menu-item>
					`
  )}
				</uui-scroll-container>
							</umb-popover-layout>

		</uui-popover-container>`;
};
T = function(e) {
  return e ? !!this._disallowedLanguages.find((t) => t.unique === e) : !1;
};
x = function(e) {
  return e ? g`<uui-tag slot="badge" look="secondary">${this.localize.term("general_readOnly")}</uui-tag>` : L;
};
s.styles = [
  W`
			:host {
				display: block;
				position: relative;
				z-index: 10;
			}

			#toggle {
				color: var(--uui-color-text);
				width: 100%;
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
p([
  z("#dropdown-popover")
], s.prototype, "_popoverElement", 2);
p([
  c()
], s.prototype, "_languages", 2);
p([
  c()
], s.prototype, "_appLanguage", 2);
p([
  c()
], s.prototype, "_appLanguageIsReadOnly", 2);
p([
  c()
], s.prototype, "_isOpen", 2);
p([
  c()
], s.prototype, "_disallowedLanguages", 2);
s = p([
  I("umb-app-language-select")
], s);
const Q = s;
export {
  s as UmbAppLanguageSelectElement,
  Q as default
};
//# sourceMappingURL=app-language-select.element-DrTscH-B.js.map

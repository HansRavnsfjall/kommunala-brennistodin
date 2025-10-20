import { classMap as f, nothing as b, html as c, css as x, property as I, state as m, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as k } from "@umbraco-cms/backoffice/style";
import { UmbTreeItemElementBase as E } from "@umbraco-cms/backoffice/tree";
var P = Object.defineProperty, T = Object.getOwnPropertyDescriptor, g = (e) => {
  throw TypeError(e);
}, p = (e, t, i, n) => {
  for (var s = n > 1 ? void 0 : n ? T(t, i) : t, u = e.length - 1, h; u >= 0; u--)
    (h = e[u]) && (s = (n ? h(t, i, s) : h(s)) || s);
  return n && s && P(t, i, s), s;
}, v = (e, t, i) => t.has(e) || g("Cannot " + i), a = (e, t, i) => (v(e, t, "read from private field"), i ? i.call(e) : t.get(e)), _ = (e, t, i) => t.has(e) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), $ = (e, t, i, n) => (v(e, t, "write to private field"), t.set(e, i), i), d = (e, t, i) => (v(e, t, "access private method"), i), o, l, y, D, w;
let r = class extends E {
  constructor() {
    super(...arguments), _(this, l), _(this, o), this._name = "", this._isDraft = !1, this._icon = "";
  }
  get api() {
    return a(this, o);
  }
  set api(e) {
    $(this, o, e), a(this, o) && (this.observe(a(this, o).name, (t) => this._name = t || ""), this.observe(a(this, o).isDraft, (t) => this._isDraft = t || !1), this.observe(a(this, o).icon, (t) => this._icon = t || "")), super.api = e;
  }
  renderIconContainer() {
    const e = this._icon, t = e?.split(" ")[0];
    return c`
			<span id="icon-container" slot="icon" class=${f({ draft: this._isDraft })}>
				${e && t ? c`
							<umb-icon id="icon" slot="icon" name="${this._isActive ? t : e}"></umb-icon>
							${d(this, l, y).call(this)}
						` : b}
			</span>
		`;
  }
  renderLabel() {
    return c`<span id="label" slot="label" class=${f({ draft: this._isDraft })}>${this._name}</span> `;
  }
};
o = /* @__PURE__ */ new WeakMap();
l = /* @__PURE__ */ new WeakSet();
y = function() {
  return this.item?.isProtected ? d(this, l, w).call(this) : this.item?.documentType.collection ? d(this, l, D).call(this) : b;
};
D = function() {
  return c`<umb-icon id="state-icon" slot="icon" name="icon-grid" title="Collection"></umb-icon>`;
};
w = function() {
  return c`<umb-icon id="state-icon" slot="icon" name="icon-lock" title="Protected"></umb-icon>`;
};
r.styles = [
  k,
  x`
			#icon-container {
				position: relative;
			}

			#icon {
				vertical-align: middle;
			}

			#label {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			#state-icon {
				position: absolute;
				bottom: -5px;
				right: -5px;
				font-size: 10px;
				background: var(--uui-color-surface);
				width: 14px;
				height: 14px;
				border-radius: 100%;
				line-height: 14px;
			}

			:hover #state-icon {
				background: var(--uui-color-surface-emphasis);
			}

			/** Active */
			[active] #state-icon {
				background: var(--uui-color-current);
			}

			[active]:hover #state-icon {
				background: var(--uui-color-current-emphasis);
			}

			/** Selected */
			[selected] #state-icon {
				background-color: var(--uui-color-selected);
			}

			[selected]:hover #state-icon {
				background-color: var(--uui-color-selected-emphasis);
			}

			/** Disabled */
			[disabled] #state-icon {
				background-color: var(--uui-color-disabled);
			}

			.draft {
				opacity: 0.6;
			}
		`
];
p([
  I({ type: Object, attribute: !1 })
], r.prototype, "api", 1);
p([
  m()
], r.prototype, "_name", 2);
p([
  m()
], r.prototype, "_isDraft", 2);
p([
  m()
], r.prototype, "_icon", 2);
r = p([
  C("umb-document-tree-item")
], r);
const W = r;
export {
  r as UmbDocumentTreeItemElement,
  W as default
};
//# sourceMappingURL=document-tree-item.element-Db5mkpTt.js.map

import { nothing as d, html as r, css as v, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { UmbTreeItemElementBase as f } from "@umbraco-cms/backoffice/tree";
var g = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, x = (e, t, o, s) => {
  for (var i = s > 1 ? void 0 : s ? g(t, o) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (i = l(i) || i);
  return i;
}, k = (e, t, o) => t.has(e) || u("Cannot " + o), w = (e, t, o) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), m = (e, t, o) => (k(e, t, "access private method"), o), n, h, p;
const C = "umb-media-tree-item";
let c = class extends f {
  constructor() {
    super(...arguments), w(this, n);
  }
  renderIconContainer() {
    const e = this.item?.mediaType.icon, t = e?.split(" ")[0];
    return r`
			<span id="icon-container" slot="icon">
				${e && t ? r`
							<umb-icon id="icon" slot="icon" name="${this._isActive ? t : e}"></umb-icon>
							${m(this, n, h).call(this)}
						` : d}
			</span>
		`;
  }
  renderLabel() {
    return r`<span id="label" slot="label">${this._item?.variants[0].name}</span> `;
  }
};
n = /* @__PURE__ */ new WeakSet();
h = function() {
  return this.item?.mediaType.collection ? m(this, n, p).call(this) : d;
};
p = function() {
  return r`<umb-icon id="state-icon" slot="icon" name="icon-grid" title="Collection"></umb-icon>`;
};
c.styles = [
  _,
  v`
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
		`
];
c = x([
  b(C)
], c);
export {
  c as UmbMediaTreeItemElement,
  c as element
};
//# sourceMappingURL=media-tree-item.element-BQZeslKu.js.map

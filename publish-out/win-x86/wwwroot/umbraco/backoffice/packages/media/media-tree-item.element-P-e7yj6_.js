import { nothing as d, html as n, css as v, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as _ } from "@umbraco-cms/backoffice/style";
import { UmbTreeItemElementBase as g } from "@umbraco-cms/backoffice/tree";
var f = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, x = (e, t, o, s) => {
  for (var r = s > 1 ? void 0 : s ? f(t, o) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (r = l(r) || r);
  return r;
}, k = (e, t, o) => t.has(e) || u("Cannot " + o), w = (e, t, o) => t.has(e) ? u("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), m = (e, t, o) => (k(e, t, "access private method"), o), i, h, p;
const I = "umb-media-tree-item";
let c = class extends g {
  constructor() {
    super(...arguments), w(this, i);
  }
  renderIconContainer() {
    const e = this.item?.mediaType.icon;
    return n`
			<span id="icon-container" slot="icon">
				${e ? n`
							<umb-icon id="icon" slot="icon" name="${this._getIconToRender(e)}"></umb-icon>
							${m(this, i, h).call(this)}
						` : d}
			</span>
		`;
  }
  renderLabel() {
    return n`<span id="label" slot="label">${this._item?.variants[0].name}</span> `;
  }
};
i = /* @__PURE__ */ new WeakSet();
h = function() {
  return this.item?.mediaType.collection ? m(this, i, p).call(this) : d;
};
p = function() {
  return n`<umb-icon id="state-icon" slot="icon" name="icon-grid" title="Collection"></umb-icon>`;
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
  b(I)
], c);
export {
  c as UmbMediaTreeItemElement,
  c as element
};
//# sourceMappingURL=media-tree-item.element-P-e7yj6_.js.map

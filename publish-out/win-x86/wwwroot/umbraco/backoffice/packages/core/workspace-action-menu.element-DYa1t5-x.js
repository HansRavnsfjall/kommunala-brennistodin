import { css as v, property as u, state as d, customElement as h, nothing as y, repeat as f, html as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
var w = Object.defineProperty, k = Object.getOwnPropertyDescriptor, l = (o) => {
  throw TypeError(o);
}, a = (o, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? k(e, t) : e, s = o.length - 1, i; s >= 0; s--)
    (i = o[s]) && (r = (n ? i(e, t, r) : i(r)) || r);
  return n && r && w(e, t, r), r;
}, x = (o, e, t) => e.has(o) || l("Cannot " + t), O = (o, e, t) => e.has(o) ? l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, t), E = (o, e, t) => (x(o, e, "access private method"), t), c, m;
let p = class extends g {
  constructor() {
    super(...arguments), O(this, c), this.look = "secondary", this.color = "default", this.items = [], this._popoverOpen = !1;
  }
  render() {
    return this.items?.length ? _`<uui-button
				id="popover-trigger"
				popovertarget="workspace-action-popover"
				look="${this.look}"
				color="${this.color}"
				label=${this.localize.term("visuallyHiddenTexts_tabExpand")}
				compact>
				<uui-symbol-expand id="expand-symbol" .open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>
			<uui-popover-container
				id="workspace-action-popover"
				margin="6"
				placement="top-end"
				@toggle=${E(this, c, m)}>
				<umb-popover-layout id="workspace-action-popover-layout">
					<uui-scroll-container>
						${f(
      this.items,
      (o) => o.alias,
      (o) => o.component
    )}
					</uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>` : y;
  }
};
c = /* @__PURE__ */ new WeakSet();
m = function(o) {
  this._popoverOpen = o.newState === "open";
};
p.styles = [
  b,
  v`
			:host {
				--uui-menu-item-flat-structure: 1;
			}

			#expand-symbol {
				/* TODO: remove this hack and use a proper UUI symbol for this */
				transform: rotate(-90deg);
			}

			#expand-symbol[open] {
				transform: rotate(0deg);
			}

			#workspace-action-popover {
				min-width: 200px;
			}

			#popover-trigger {
				--uui-button-padding-top-factor: 0;
				--uui-button-padding-bottom-factor: 0.125;
			}

			#workspace-action-popover-layout {
				overflow: visible;
			}
		`
];
a([
  u()
], p.prototype, "look", 2);
a([
  u()
], p.prototype, "color", 2);
a([
  u({ type: Array, attribute: !1 })
], p.prototype, "items", 2);
a([
  d()
], p.prototype, "_popoverOpen", 2);
p = a([
  h("umb-workspace-action-menu")
], p);
export {
  p as U
};
//# sourceMappingURL=workspace-action-menu.element-DYa1t5-x.js.map

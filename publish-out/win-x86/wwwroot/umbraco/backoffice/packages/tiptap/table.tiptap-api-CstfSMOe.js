import { U as E } from "./base-CzBFGKJV.js";
import { css as w, property as x, customElement as _, html as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbTable as U, UmbTableHeader as W, UmbTableRow as z, UmbTableCell as D } from "@umbraco-cms/backoffice/external/tiptap";
import { UmbLitElement as C } from "@umbraco-cms/backoffice/lit-element";
var M = Object.defineProperty, O = Object.getOwnPropertyDescriptor, A = (e) => {
  throw TypeError(e);
}, T = (e, r, o, i) => {
  for (var t = i > 1 ? void 0 : i ? O(r, o) : r, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (t = (i ? n(r, o, t) : n(t)) || t);
  return i && t && M(r, o, t), t;
}, P = (e, r, o) => r.has(e) || A("Cannot " + o), s = (e, r, o) => (P(e, r, "read from private field"), o ? o.call(e) : r.get(e)), c = (e, r, o) => r.has(e) ? A("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, o), p, h, b;
let u = class extends C {
  constructor() {
    super(...arguments), c(this, p, () => this.editor?.chain().focus().addColumnBefore().run()), c(this, h, () => this.editor?.chain().focus().addColumnAfter().run()), c(this, b, () => this.editor?.chain().focus().deleteColumn().run());
  }
  render() {
    return y`
			<uui-menu-item label="Add column before" @click=${s(this, p)}>
				<uui-icon slot="icon" name="icon-navigation-first"></uui-icon>
			</uui-menu-item>
			<uui-menu-item label="Add column after" @click=${s(this, h)}>
				<uui-icon slot="icon" name="icon-tab-key"></uui-icon>
			</uui-menu-item>
			<uui-menu-item label="Delete column" @click=${s(this, b)}>
				<uui-icon slot="icon" name="icon-trash"></uui-icon>
			</uui-menu-item>
		`;
  }
};
p = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
u.styles = [
  w`
			:host {
				--uui-menu-item-flat-structure: 1;

				display: flex;
				flex-direction: column;

				background-color: var(--uui-color-surface);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
			}
		`
];
T([
  x({ attribute: !1 })
], u.prototype, "editor", 2);
u = T([
  _("umb-tiptap-table-column-menu")
], u);
var R = Object.defineProperty, B = Object.getOwnPropertyDescriptor, k = (e) => {
  throw TypeError(e);
}, $ = (e, r, o, i) => {
  for (var t = i > 1 ? void 0 : i ? B(r, o) : r, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (t = (i ? n(r, o, t) : n(t)) || t);
  return i && t && R(r, o, t), t;
}, S = (e, r, o) => r.has(e) || k("Cannot " + o), d = (e, r, o) => (S(e, r, "read from private field"), o ? o.call(e) : r.get(e)), m = (e, r, o) => r.has(e) ? k("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, o), f, v, g;
let l = class extends C {
  constructor() {
    super(...arguments), m(this, f, () => this.editor?.chain().focus().addRowBefore().run()), m(this, v, () => this.editor?.chain().focus().addRowAfter().run()), m(this, g, () => this.editor?.chain().focus().deleteRow().run());
  }
  render() {
    return y`
			<uui-menu-item label="Add row before" @click=${d(this, f)}>
				<uui-icon slot="icon" name="icon-page-up"></uui-icon>
			</uui-menu-item>
			<uui-menu-item label="Add row after" @click=${d(this, v)}>
				<uui-icon slot="icon" name="icon-page-down"></uui-icon>
			</uui-menu-item>
			<uui-menu-item label="Delete row" @click=${d(this, g)}>
				<uui-icon slot="icon" name="icon-trash"></uui-icon>
			</uui-menu-item>
		`;
  }
};
f = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
l.styles = [
  w`
			:host {
				--uui-menu-item-flat-structure: 1;

				display: flex;
				flex-direction: column;

				background-color: var(--uui-color-surface);
				border-radius: var(--uui-border-radius);
				box-shadow: var(--uui-shadow-depth-3);
			}
		`
];
$([
  x({ attribute: !1 })
], l.prototype, "editor", 2);
l = $([
  _("umb-tiptap-table-row-menu")
], l);
class F extends E {
  constructor() {
    super(...arguments), this.getTiptapExtensions = () => [U, W, z, D], this.getStyles = () => w`
		.tableWrapper {
			margin: 1.5rem 0;

			table {
				border-color: rgba(0, 0, 0, 0.1);
				border-radius: 0.25rem;
				border-spacing: 0;
				box-sizing: border-box;
				max-width: 100%;

				td,
				th {
					box-sizing: border-box;
					position: relative;
					min-width: 50px;
					border: 1px solid var(--uui-color-border);
					padding: 0.5rem;
					text-align: left;
					vertical-align: top;

					&:first-of-type:not(a),
					&:first-of-type:not(a) {
						margin-top: 0;
					}

					p {
						margin: 0;
					}

					p + p {
						margin-top: 0.75rem;
					}
				}

				th {
					font-weight: bold;
				}

				.column-resize-handle {
					cursor: ew-resize;
					cursor: col-resize;
					display: flex;
					position: absolute;
					top: 0;
					bottom: -2px;
					right: -0.25rem;
					width: 0.5rem;
				}

				.column-resize-handle:before {
					margin-left: 0.5rem;
					height: 100%;
					width: 1px;
				}

				.column-resize-handle:before {
					content: '';
				}

				.selectedCell {
					background-color: color-mix(in srgb, var(--uui-color-surface-emphasis) 50%, transparent);
					border-color: var(--uui-color-selected);
				}

				.grip-column,
				.grip-row {
					position: absolute;
					z-index: 10;
					display: flex;
					cursor: pointer;
					align-items: center;
					justify-content: center;
					background-color: rgba(0, 0, 0, 0.05);
					border-color: rgba(0, 0, 0, 0.2);

					uui-symbol-more {
						visibility: hidden;
					}

					&:hover {
						background-color: rgba(0, 0, 0, 0.1);
					}

					&.selected {
						border-color: rgba(0, 0, 0, 0.3);
						background-color: rgba(0, 0, 0, 0.3);
						box-shadow:
							0 0 #0000,
							0 0 #0000,
							0 0 rgba(0, 0, 0, 0.05);
					}

					&:hover uui-symbol-more,
					&.selected uui-symbol-more {
						visibility: visible;
					}
				}

				.grip-column {
					border-left-width: 1px;
					top: -0.75rem;
					left: 0;
					height: 0.75rem;
					width: calc(100% + 1px);
					margin-left: -1px;
				}

				.grip-row {
					border-top-width: 1px;
					flex-direction: column;
					top: 0;
					left: -0.75rem;
					height: calc(100% + 1px);
					width: 0.75rem;
					margin-top: -1px;

					uui-symbol-more {
						transform: rotate(90deg);
					}
				}
			}
		}
	`;
  }
}
export {
  F as default
};
//# sourceMappingURL=table.tiptap-api-CstfSMOe.js.map

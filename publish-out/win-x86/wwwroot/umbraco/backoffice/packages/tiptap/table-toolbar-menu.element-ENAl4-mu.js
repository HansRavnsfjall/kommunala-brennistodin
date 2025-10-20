import { UmbTiptapToolbarMenuElement as $ } from "./tiptap-toolbar-menu.element-Bowtq1j5.js";
import { css as x, state as h, customElement as v, html as l, when as c, ifDefined as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
var g = Object.defineProperty, C = Object.getOwnPropertyDescriptor, _ = (e) => {
  throw TypeError(e);
}, p = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? C(t, r) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (o = (s ? i(t, r, o) : i(o)) || o);
  return s && o && g(t, r, o), o;
}, T = (e, t, r) => t.has(e) || _("Cannot " + r), E = (e, t, r) => t.has(e) ? _("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), m = (e, t, r) => (T(e, t, "access private method"), r), u, f, w;
let a = class extends y {
  constructor() {
    super(...arguments), E(this, u), this._selectedColumn = 0, this._selectedRow = 0;
  }
  render() {
    const r = [];
    for (let s = 1; s <= 10; s++) {
      const o = [];
      for (let n = 1; n <= 10; n++)
        o.push(l`
					<button
						type="button"
						class=${s <= this._selectedRow && n <= this._selectedColumn ? "selected" : ""}
						aria-label="${n} columns, ${s} rows"
						@mouseover=${() => m(this, u, w).call(this, n, s)}
						@click=${() => m(this, u, f).call(this, n, s)}></button>
				`);
      r.push(o);
    }
    return l`
			<div id="grid">${r}</div>
			<label>${this._selectedColumn} &times; ${this._selectedRow}</label>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
f = function(e, t) {
  this._selectedColumn = e, this._selectedRow = t, this.editor?.chain().focus().insertTable({ rows: t, cols: e, withHeaderRow: !1 }).run();
};
w = function(e, t) {
  this._selectedColumn = e, this._selectedRow = t;
};
a.styles = [
  x`
			:host {
				background-color: var(--uui-color-surface);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 170px;
			}

			#grid {
				display: flex;
				flex-wrap: wrap;

				> button {
					all: unset;
					box-sizing: border-box;

					border-color: var(--uui-color-border);
					border-style: solid;
					border-width: 0 1px 1px 0;

					height: 17px;
					width: 17px;

					&:hover,
					&.selected {
						background-color: var(--uui-color-background);
						border-color: var(--uui-color-selected);
					}
				}
			}
		`
];
p([
  h()
], a.prototype, "_selectedColumn", 2);
p([
  h()
], a.prototype, "_selectedRow", 2);
a = p([
  v("umb-tiptap-table-insert")
], a);
var O = Object.getOwnPropertyDescriptor, R = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? O(t, r) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (o = i(o) || o);
  return o;
};
let b = class extends $ {
  render() {
    const e = this.localize.string(this.manifest?.meta.label);
    return l`
			${c(
      this.isActive,
      () => l`
					<uui-button compact look="outline" label=${d(e)} title=${e} popovertarget="popover-menu">
						${c(
        this.manifest?.meta.icon,
        (t) => l`<umb-icon name=${t}></umb-icon>`,
        () => l`<span>${e}</span>`
      )}
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`,
      () => l`
					<uui-button compact look="default" label=${d(e)} title=${e} popovertarget="popover-insert">
						${c(
        this.manifest?.meta.icon,
        (t) => l`<umb-icon name=${t}></umb-icon>`,
        () => l`<span>${e}</span>`
      )}
						<uui-symbol-expand slot="extra" open></uui-symbol-expand>
					</uui-button>
				`
    )}
			${this.renderMenu()}
			<uui-popover-container id="popover-insert">
				<umb-tiptap-table-insert .editor=${this.editor}></umb-tiptap-table-insert>
			</uui-popover-container>
		`;
  }
};
b = R([
  v("umb-tiptap-table-toolbar-menu-element")
], b);
export {
  b as UmbTiptapTableToolbarMenuElement,
  b as element
};
//# sourceMappingURL=table-toolbar-menu.element-ENAl4-mu.js.map

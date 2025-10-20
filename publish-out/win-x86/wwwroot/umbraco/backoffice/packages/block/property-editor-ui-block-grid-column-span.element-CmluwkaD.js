import { repeat as v, html as c, css as m, property as h, state as f, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as x } from "@umbraco-cms/backoffice/style";
import { UmbChangeEvent as w } from "@umbraco-cms/backoffice/event";
var _ = Object.defineProperty, g = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, l = (e, r, t, o) => {
  for (var a = o > 1 ? void 0 : o ? g(r, t) : r, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (a = (o ? i(r, t, a) : i(a)) || a);
  return o && a && _(r, t, a), a;
}, k = (e, r, t) => r.has(e) || d("Cannot " + t), E = (e, r, t) => r.has(e) ? d("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), A = (e, r, t) => (k(e, r, "access private method"), t), p, u;
let n = class extends y {
  constructor() {
    super(...arguments), E(this, p), this.value = [], this._columnsArray = Array.from(Array(12).keys());
  }
  set config(e) {
    const r = e?.getValueByAlias("maxColumns");
    typeof r == "number" && (this._columnsArray = Array.from(Array(r).keys()));
  }
  render() {
    const e = v(
      this._columnsArray,
      (r) => r,
      (r) => {
        const t = r + 1;
        let o = "default";
        if (this.value && this.value.length > 0) {
          const a = this.value.find((i) => i.columnSpan >= t);
          o = this.value.find((i) => i.columnSpan === t) ? "picked applied" : a ? "applied" : "default";
        }
        return c`<div class="${o}" data-index=${r}>
					<span>${t}</span>
					<button type="button" aria-label=${t} @click=${() => A(this, p, u).call(this, t)}></button>
				</div>`;
      }
    );
    return c`<div id="wrapper">${e}</div>`;
  }
};
p = /* @__PURE__ */ new WeakSet();
u = function(e) {
  const r = this.value ?? [];
  r.find((o) => o.columnSpan === e) ? this.value = r.filter((o) => o.columnSpan !== e) : this.value = [...r, { columnSpan: e }], this.dispatchEvent(new w());
};
n.styles = [
  x,
  m`
			#wrapper {
				box-sizing: border-box;
				display: flex;
				flex-wrap: nowrap;
				border: 1px solid var(--uui-color-divider-emphasis);
			}

			#wrapper div {
				color: var(--uui-color-divider-emphasis);
				position: relative;
				flex-grow: 1;
				min-height: 35px;
				box-sizing: border-box;
				display: flex;
				justify-content: flex-end;
				padding-left: 5px;
				border-right: 1px solid transparent;
			}

			#wrapper div:not(.picked) {
				border-right: 1px solid var(--uui-color-divider-standalone);
			}

			#wrapper div.picked,
			#wrapper div:has(button:hover) {
				color: var(--uui-color-interactive);
			}

			#wrapper div:last-child {
				border-right: 1px solid transparent;
			}

			#wrapper:has(button:hover) div:not(:has(button:hover) ~ div) {
				background-color: var(--uui-color-interactive-emphasis);
			}

			#wrapper div span {
				user-select: none;
				position: absolute;
				padding: var(--uui-size-6);
				transform: translate(50%, -75%);
			}

			#wrapper div button {
				border: none;
				position: absolute;
				z-index: 1;
				transform: translateX(50%);
				inset: -1px;
				opacity: 0;
			}

			#wrapper .picked::after {
				content: '';
				position: absolute;
				transform: translateX(50%);
				width: 4px;
				border-right: 1px solid var(--uui-color-interactive);
				background-color: var(--uui-color-surface);
				top: 0;
				right: 0;
				bottom: 0;
			}

			#wrapper .applied {
				background-color: var(--uui-color-interactive);
			}
		`
];
l([
  h({ type: Array })
], n.prototype, "value", 2);
l([
  f()
], n.prototype, "_columnsArray", 2);
n = l([
  b("umb-property-editor-ui-block-grid-column-span")
], n);
const $ = n;
export {
  n as UmbPropertyEditorUIBlockGridColumnSpanElement,
  $ as default
};
//# sourceMappingURL=property-editor-ui-block-grid-column-span.element-CmluwkaD.js.map

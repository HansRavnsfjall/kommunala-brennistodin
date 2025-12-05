import { getAccumulatedValueOfIndex as S, getInterpolatedIndexOfPositionInWeightMap as w } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as v } from "@umbraco-cms/backoffice/class-api";
import { UmbLitElement as y } from "@umbraco-cms/backoffice/lit-element";
import { css as C, customElement as x, html as R } from "@umbraco-cms/backoffice/external/lit";
function M(u, s, i) {
  if (s.length > 0) {
    const n = s.reduce((e, o) => {
      if (e > i)
        return o;
      const r = Math.abs(e - u), c = Math.abs(o - u);
      return r === c ? e < o ? e : o : c < r ? o : e;
    });
    if (n)
      return n;
  }
}
async function E(u, s) {
  if (u.areas) {
    const i = u.contentKey;
    await Promise.all(
      u.areas.map(async (n) => {
        const e = n.key;
        await Promise.all(
          n.items.map(async (o) => {
            await s(o, i, e), await E(o, s);
          })
        );
      })
    );
  }
}
class G extends v {
  constructor(s) {
    super(s, "blockGridScaleManager"), this.#t = [], this.#e = [], this.#o = 0, this.#n = 0, this.onScaleMouseMove = (i) => {
      const n = this._entries?.getLayoutContainerElement();
      if (!n)
        return;
      const e = n.getBoundingClientRect(), o = this.getHostElement().getBoundingClientRect(), r = o.left - e.left, c = o.top - e.top, h = i.clientX - e.left, l = i.clientY - e.top, t = this.#i(r, c, h, l);
      if (!t) return;
      const d = this._host.getColumnSpan() !== t.columnSpan;
      d && (n.style.gridTemplateRows = ""), cancelAnimationFrame(this.#n), this.#n = requestAnimationFrame(() => {
        this.#s(n, e, o, d);
      }), this._host.setColumnSpan(t.columnSpan), this._host.setRowSpan(t.rowSpan);
    }, this.onScaleMouseUp = (i) => {
      const n = this._entries?.getLayoutContainerElement();
      if (!n)
        return;
      cancelAnimationFrame(this.#n), window.removeEventListener("mousemove", this.onScaleMouseMove), window.removeEventListener("mouseup", this.onScaleMouseUp), window.removeEventListener("mouseleave", this.onScaleMouseUp);
      const e = n.getBoundingClientRect(), o = this.getHostElement().getBoundingClientRect(), r = o.left - e.left, c = o.top - e.top, h = i.clientX - e.left, l = i.clientY - e.top, t = this.#i(r, c, h, l);
      n.style.gridTemplateRows = "", this.#o = 0, t && (this._host.setColumnSpan(t.columnSpan), this._host.setRowSpan(t.rowSpan));
    }, this._host = s;
  }
  #t;
  #e;
  #o;
  setEntriesContext(s) {
    this._entries = s;
  }
  // Scaling feature:
  #s(s, i, n, e) {
    if (!this._entries) return;
    const o = this._entries.getLayoutColumns() ?? 0, r = window.getComputedStyle(s), c = Number(r.columnGap.split("px")[0]) || 0, h = Number(r.rowGap.split("px")[0]) || 0;
    let l = r.gridTemplateColumns.trim().split("px").map((a) => Number(a)), t = r.gridTemplateRows.trim().split("px").map((a) => Number(a));
    l = l.filter((a) => a > 0), t = t.filter((a) => a > 0), (e || t.length > this.#o) && (this.#o = t.length, s.style.gridTemplateRows = r.gridTemplateRows);
    const d = l.length;
    l = l.map((a, p) => d === p ? a : a + c);
    const b = t.length;
    t = t.map((a, p) => b === p ? a : a + h);
    let m = l.length;
    const g = o - m;
    if (g > 0) {
      const a = S(m, l) || 0, p = (i.width - a) / g;
      for (; m++ < o; )
        l.push(p);
    }
    if (t.length === 0) {
      t.push(n.top - i.top);
      let a = 0;
      const p = n.height;
      for (; a++ < (this._host.getRowSpan() ?? 0); )
        t.push(p);
    }
    t.push(50), t.push(50), t.push(50), t.push(50), t.push(50), this.#t = l, this.#e = t;
  }
  // TODO: Rename to calc something.
  #i(s, i, n, e) {
    const o = this._entries?.getLayoutColumns();
    if (!o) return;
    const r = Math.round(w(s, this.#t)), c = Math.round(w(i, this.#e)), h = w(n, this.#t), l = w(e, this.#e);
    let t = Math.max(h - r, 1);
    const d = this._host.getRelevantColumnSpanOptions();
    if (!d) return;
    t = M(t, d, o - r) ?? o;
    const m = this._host.getMinMaxRowSpan();
    if (!m) return;
    const [g, a] = m;
    let p = Math.round(Math.max(l - c, g));
    return a != null && (p = Math.min(p, a)), { columnSpan: t, rowSpan: p, startCol: r, startRow: c };
  }
  onScaleMouseDown(s) {
    const i = this._entries?.getLayoutContainerElement();
    if (!i)
      return;
    s.preventDefault(), window.addEventListener("mousemove", this.onScaleMouseMove), window.addEventListener("mouseup", this.onScaleMouseUp), window.addEventListener("mouseleave", this.onScaleMouseUp);
    const n = this.getHostElement().getBoundingClientRect();
    this.#s(i, i.getBoundingClientRect(), n, !0);
  }
  #n;
}
var k = Object.getOwnPropertyDescriptor, L = (u, s, i, n) => {
  for (var e = n > 1 ? void 0 : n ? k(s, i) : s, o = u.length - 1, r; o >= 0; o--)
    (r = u[o]) && (e = r(e) || e);
  return e;
};
let f = class extends y {
  //
  constructor() {
    super(), this.addEventListener("dragstart", (u) => {
      u.preventDefault();
    }), this.addEventListener("dragstart", (u) => {
      u.preventDefault();
    });
  }
  render() {
    return R`
			<button aria-label="TODO: Some introduction to keyboard scaling" id="handler"></button>
			<slot id="label"></slot>
		`;
  }
};
f.styles = [
  C`
			:host {
				position: absolute;
				inset: 0;
				pointer-events: none;
				box-sizing: border-box;
			}
			:host(:focus-within),
			:host(:hover) {
				border: var(--uui-color-interactive) solid 1px;
				border-radius: var(--uui-border-radius);
			}

			#handler {
				position: absolute;
				// TODO: Look at the feature I out-commented here, what was that suppose to do [NL]:
				//display: var(--umb-block-grid--block-ui-display, block);
				display: block;
				z-index: 2;

				pointer-events: all;
				cursor: nwse-resize;

				bottom: -4px;
				right: -4px;
				width: 7px;
				height: 7px;
				padding: 0;
				background-color: var(--uui-color-surface);
				border: var(--uui-color-interactive) solid 1px;
				box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7);
				opacity: 0;
				transition: opacity 120ms;
			}
			#handler:hover,
			#handler:focus {
				opacity: 1;
			}
			#handler:focus {
				outline: 2px solid var(--uui-color-selected);
				outline-offset: 1px;
			}
			#handler::after {
				content: '';
				position: absolute;
				inset: -10px;
				background-color: rgba(0, 0, 0, 0);
			}
			#handler:focus + #label,
			#handler:hover + #label {
				opacity: 1;
			}

			#label {
				position: absolute;
				display: block;
				top: 100%;
				left: 100%;
				margin-left: 6px;
				margin-top: 6px;
				z-index: 2;

				background-color: white;
				color: black;
				font-size: 12px;
				padding: 0px 6px;
				border-radius: 3px;
				opacity: 0;
				transition: opacity 120ms;

				pointer-events: none;
				white-space: nowrap;
			}

			:host([scale-mode]) > #handler {
				opacity: 1;
			}
			:host([scale-mode]) > #label {
				opacity: 1;
			}
		`
];
f = L([
  x("umb-block-scale-handler")
], f);
export {
  G as U,
  M as c,
  E as f
};
//# sourceMappingURL=block-scale-handler.element-BKzGcvEu.js.map
